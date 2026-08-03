#!/usr/bin/env bash

set -Eeuo pipefail

readonly ARCHIVE="${1:-$HOME/hostinger-release.tar.gz}"
readonly DOMAIN_DIR="$HOME/domains/igorjoz.com"
readonly APP_DIR="$DOMAIN_DIR/igorjoz"
readonly PUBLIC_DIR="$DOMAIN_DIR/public_html"
readonly NEXT_DIR="$DOMAIN_DIR/.igorjoz-next"
readonly PHP_BIN="${PHP_BIN:-php}"

if ! command -v "$PHP_BIN" >/dev/null 2>&1; then
    echo "PHP executable not found: $PHP_BIN" >&2
    exit 1
fi

readonly PHP_VERSION_ID="$("$PHP_BIN" -r 'echo PHP_VERSION_ID;')"
if (( PHP_VERSION_ID < 80400 || PHP_VERSION_ID >= 80500 )); then
    echo "PHP 8.4 is required for deployment; $PHP_BIN reports $("$PHP_BIN" -r 'echo PHP_VERSION;')." >&2
    echo "Change the hosting-plan PHP version to 8.4 in Hostinger hPanel first." >&2
    exit 1
fi

if [[ ! -f "$ARCHIVE" ]]; then
    echo "Deployment archive not found: $ARCHIVE" >&2
    exit 1
fi

mkdir -p "$APP_DIR" "$PUBLIC_DIR"
rm -rf "$NEXT_DIR"
mkdir -p "$NEXT_DIR"

cleanup() {
    rm -rf "$NEXT_DIR"
}
trap cleanup EXIT

tar -xzf "$ARCHIVE" -C "$NEXT_DIR"

if [[ ! -f "$NEXT_DIR/artisan" || ! -f "$NEXT_DIR/public/index.php" ]]; then
    echo "The archive is not a valid Laravel release." >&2
    exit 1
fi

# Production configuration and runtime data live only on the server.
if [[ ! -f "$APP_DIR/.env" ]]; then
    echo "Missing production configuration: $APP_DIR/.env" >&2
    exit 1
fi

"$PHP_BIN" "$APP_DIR/artisan" down --retry=15 2>/dev/null || true

bring_application_up() {
    if [[ -f "$APP_DIR/artisan" ]]; then
        "$PHP_BIN" "$APP_DIR/artisan" up 2>/dev/null || true
    fi
}
trap 'bring_application_up; cleanup' EXIT

# Preserve the production .env and all server-generated storage files.
rsync -a --delete \
    --exclude='.env' \
    --exclude='storage/' \
    --exclude='public/' \
    "$NEXT_DIR/" "$APP_DIR/"

mkdir -p \
    "$APP_DIR/storage/app/public" \
    "$APP_DIR/storage/framework/cache/data" \
    "$APP_DIR/storage/framework/sessions" \
    "$APP_DIR/storage/framework/views" \
    "$APP_DIR/storage/logs" \
    "$APP_DIR/bootstrap/cache"

# Repository-managed assets from storage/app/public are updated separately.
rsync -a "$NEXT_DIR/storage/app/public/" "$APP_DIR/storage/app/public/"

# public_html is the Hostinger document root. Keep uploaded/storage data intact.
rsync -a --delete \
    --exclude='storage' \
    "$NEXT_DIR/public/" "$PUBLIC_DIR/"

# public/index.php originally assumes that it is inside the Laravel project.
# On shared hosting the application is its sibling: ../igorjoz.
sed -i \
    -e "s#__DIR__.'/../storage/#__DIR__.'/../igorjoz/storage/#g" \
    -e "s#__DIR__.'/../vendor/#__DIR__.'/../igorjoz/vendor/#g" \
    -e "s#__DIR__.'/../bootstrap/#__DIR__.'/../igorjoz/bootstrap/#g" \
    "$PUBLIC_DIR/index.php"

if [[ ! -e "$PUBLIC_DIR/storage" ]]; then
    ln -s "$APP_DIR/storage/app/public" "$PUBLIC_DIR/storage"
fi

cd "$APP_DIR"
"$PHP_BIN" artisan optimize:clear
"$PHP_BIN" artisan config:cache
"$PHP_BIN" artisan route:cache
"$PHP_BIN" artisan view:cache
"$PHP_BIN" artisan up

rm -f "$ARCHIVE"
echo "Deployment completed successfully."
