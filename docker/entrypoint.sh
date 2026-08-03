#!/usr/bin/env bash

set -Eeuo pipefail

cd /var/www/html

if [[ ! -f .env ]]; then
    cp .env.example .env
fi

touch database/database.sqlite
mkdir -p \
    bootstrap/cache \
    storage/app/public \
    storage/framework/cache/data \
    storage/framework/sessions \
    storage/framework/views \
    storage/logs

chown -R www-data:www-data bootstrap/cache storage database/database.sqlite

if ! grep -Eq '^APP_KEY=base64:.+' .env; then
    php artisan key:generate --force
fi

if [[ ! -L public/storage ]]; then
    if [[ -e public/storage ]]; then
        echo "public/storage exists but is not a symbolic link." >&2
        exit 1
    fi
    php artisan storage:link
fi

php artisan optimize:clear

exec "$@"
