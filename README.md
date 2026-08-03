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
 
