# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Dev server (localhost:3000)
npm run build    # Production build → /build
npm test         # Run tests (watch mode)
npm test -- --watchAll=false  # Run tests once
npm run deploy   # Build + deploy to GitHub Pages (gh-pages branch)
```

## Architecture

This is a Create React App personal portfolio site deployed to [abbosaliboev.site](https://abbosaliboev.site).

**Routing:** Uses `HashRouter` (not `BrowserRouter`) — required for GitHub Pages compatibility. Routes map to four pages: `/`, `/about`, `/projects`, `/blog`.

**Structure:**
- [src/App.js](src/App.js) — Root component containing the sticky Navbar, `<Routes>`, and Footer. Social links live here.
- [src/pages/](src/pages/) — One file per route (`Home.js`, `About.js`, `Projects.js`, `Blog.js`). All content (education, experience, certificates, awards, projects) is hardcoded as data arrays directly inside each page component — there is no external data source or CMS.
- [src/assets/](src/assets/) — Certificate and project images imported directly into page components.

**UI:** React Bootstrap (`Container`, `Row`, `Col`, `Modal`, `Navbar`) + `react-icons` for social icons. No custom component library — layout is done inline with Bootstrap grid.

**Deployment:** Pushing to `main` triggers the GitHub Actions workflow ([.github/workflows/static.yml](.github/workflows/static.yml)) which deploys the repo root to GitHub Pages. The `CNAME` file maps the custom domain. Alternatively, `npm run deploy` uses the `gh-pages` package to deploy the `/build` folder.

## Content Updates

To add/update content (education, experience, awards, certificates, projects), edit the data arrays at the top of the relevant page component — no separate data files exist.
