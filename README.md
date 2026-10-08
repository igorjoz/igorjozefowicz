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

The Laravel view renders readable initial HTML and metadata; React mounts the
same page data once JavaScript loads. No separate Node SSR service is required.

Verification in the local Docker environment:

```bash
docker compose exec app composer install
docker compose exec app php artisan test
docker compose exec vite npm test -- --run
docker compose exec vite npm run build
```
