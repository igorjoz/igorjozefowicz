# igorjozefowicz

## Local development

Start the local environment with:

```bash
docker compose up --build
```

The application is available at <http://localhost:8080>. Vite runs at
<http://localhost:5174> and automatically reloads React and CSS changes. PHP
source files are mounted into the application container and are available
without rebuilding the image.

After the first build, use `docker compose up` for normal development. Run
`docker compose up --build` again only after changing Docker dependencies or
the Dockerfile.

To run the production-style image with compiled frontend assets instead:

```bash
docker compose -f compose.prod.yaml up --build
```
 

## Portfolio and content

The bilingual portfolio is available at `/pl` and `/en`; `/` permanently redirects
to `/pl`. Each language includes services, projects, about, articles and contact.
The sitemap is served at `/sitemap.xml`. Legacy portfolio URLs redirect to the
Polish equivalents; teaching material URLs are preserved.

Page content lives in `resources/content/{pl,en}.json`. Articles are Markdown
files with a JSON metadata line followed by `---`. Both language versions must
have `status: published` to become public. See [the content roadmap](docs/content-roadmap.md)
for the editorial schedule, fact verification notes and LinkedIn drafts.

The offer addresses growing SMEs, especially B2B trade, distribution and services.
Home content leads with audience and workflow problems, then three service areas,
Vento and Forcen, collaboration, process, biography, a compact LarynxAI introduction,
articles and contact. All three projects remain in the project catalogue.
The two existing service URLs are preserved: applications and system integrations
share `custom-applications` (automation links to `#automation-details`), while
practical AI uses `ai-integrations`. Detail pages have distinct content and no
"read more" links back to themselves.

Locale data groups audience/problem/collaboration cards under `business`, service
entry points under `offerings`, detailed service sections under `services[].details`
and page SEO overrides under `meta`. `metaTitle` in the Inertia props allows a
search title distinct from the visible H1. Both React and Blade consume the same
controller-built sections, including cards and contact prompts. See
[the positioning notes](docs/sme-positioning.md) for editorial decisions.

The Laravel view renders readable initial HTML and metadata; React mounts the
same page data once JavaScript loads. No separate Node SSR service is required.

Published article metadata includes a manually maintained `publishedAt`
(`YYYY-MM-DD`) and optional `updatedAt` (the same date or later). Drafts do not
require dates. `ArticleMetadata` validates and localises dates centrally; lists
sort by publication date descending, then slug ascending. Dates appear on home,
the article index and detail pages. `presentation.article` carries detail metadata
and the `BlogPosting` schema; `articleHtml` remains unchanged. Both renderers use
the same date values, and Inertia replaces or removes the article schema on visits.
See the content roadmap for publication and update-date rules.

Verification in the local Docker environment:

```bash
docker compose exec app composer install
docker compose exec app php artisan test
docker compose exec vite npm test -- --run
docker compose exec vite npm run build
```

## Portfolio appearance

The active PL/EN portfolio uses `Pages/Site.jsx`; `Pages/Home/Index.jsx` is the
legacy portfolio. The controller supplies section kinds and project presentation
metadata to both React and the server-rendered Blade view. Update both renderers
when changing page structure. Interface translations live under `ui.studio` in
the existing locale JSON files.

Internal portfolio links use the shared `SiteLink` component and Inertia. The
persistent `SiteLayout` keeps the header, footer and animated background mounted
across visits. The header scrolls with the document and includes the small IJ
mark beside the name. Article HTML delegates portfolio link clicks locally to the same
router. Hash links, external URLs, downloads and teaching pages remain native.
Normal visits focus the main content; Inertia handles history and scroll restore.
The Blade renderer still serves the initial page and the no-JavaScript fallback.

Inter and Space Grotesk are bundled locally, including Polish glyphs. The hero
uses a wide offer heading. Pink, cyan and violet background glows and two
spotlight beams move slowly using CSS transforms; reduced motion freezes them.
The artistic portrait appears only with the biography on the home and about pages. Its
responsive WebP variants preserve transparency; CSS fades the lower edge.
The original `igor-portrait.png` is preserved as the source asset.

The active site's type scale is defined by `--text-body` (18 px desktop / 16 px
mobile), `--text-control` (16 px) and `--text-meta` (14 px). The hero description
uses 20 px desktop / 18 px mobile; articles use 19 px desktop / 18 px mobile.
The global rem conversion remains unchanged. Navigation collapses at 1100 px.

Run the browser readability regression tests against the running local app:

```bash
docker compose exec vite npx playwright install --with-deps chromium
docker compose exec vite npm run test:browser
```

These check PL/EN at 360–1920 px, minimum computed font sizes, desktop hero
buttons, portrait placement and image loading, mobile navigation, reflow and the
server-rendered page without JavaScript.
The navigation suite also checks that the document and animated shell survive
visits, history restores scrolling, metadata and locale update, and modified
clicks keep native behavior. Set `PORTFOLIO_BASE_URL` to test another server.
