# Dhyana Swain Portfolio

A Vite + React + TypeScript portfolio site for a software engineer focused on scalable systems, product engineering, and AI-enabled platform delivery.

## Stack

- React 19
- TypeScript 5.9
- Vite 8
- Tailwind CSS 4
- Vitest + Testing Library
- pnpm

## Local development

```bash
export PATH="/opt/homebrew/opt/node@22/bin:$PATH"
pnpm install
pnpm dev
```

The dev server runs on `http://localhost:5173`.

## Production build

```bash
export PATH="/opt/homebrew/opt/node@22/bin:$PATH"
pnpm build
pnpm preview --host 0.0.0.0
```

The preview server runs on `http://localhost:4173`.

## Quality checks

```bash
pnpm lint
pnpm test
pnpm test:coverage
pnpm build
```

## Deployment plan with GitHub

This app is best deployed with GitHub + GitHub Actions to a static host such as GitHub Pages or Vercel.

### Recommended setup

1. Push the portfolio repo to GitHub.
2. Add a production environment file locally from the sample:

```bash
cp .env.example .env
```

3. Fill in your real values for:
   - `VITE_PORTFOLIO_NAME`
   - `VITE_PORTFOLIO_EMAIL`
   - `VITE_PORTFOLIO_GITHUB`
   - `VITE_PORTFOLIO_LINKEDIN`
   - `VITE_PORTFOLIO_TITLE`
   - `VITE_PORTFOLIO_LOCATION`
   - `VITE_PORTFOLIO_SUMMARY`

4. Commit `.env` only to your local machine or deployment secret store; do not commit it to GitHub.
5. Use GitHub Actions or the chosen host to set the same values as repository or environment secrets.

### GitHub Pages option

- Set the repository to GitHub Pages
- Use a workflow that runs `pnpm install`, `pnpm build`, and uploads the `dist` folder
- Configure the same env variables in GitHub repository secrets or build settings

### Vercel option

- Import the GitHub repository in Vercel
- Add the same `VITE_*` variables in the project environment settings
- Deploy from the `main` branch

## Environment variables

Create a `.env` file from `.env.example` and keep all personal details there instead of hardcoding them in the app source.

Example:

```bash
VITE_PORTFOLIO_NAME="Your Name"
VITE_PORTFOLIO_EMAIL="yourname@example.com"
VITE_PORTFOLIO_GITHUB="https://github.com/yourusername"
VITE_PORTFOLIO_LINKEDIN="https://linkedin.com/in/yourusername"
VITE_PORTFOLIO_TITLE="Senior Software Engineer"
VITE_PORTFOLIO_LOCATION="Your City, Country"
VITE_PORTFOLIO_SUMMARY="I build reliable systems and product experiences with a focus on maintainability and business impact."
```

## Notes

- The resume asset is served from `public/resume.pdf`.
- The content is intentionally kept in `src/data/portfolio.ts` to make updates easy and maintainable.
- CI and Sonar configuration are included under `.github/workflows/` and `sonar-project.properties`.
