# RAKE ML Website

Marketing site for RAKE ML: predictive intelligence for roofing risk, insurers, contractors, and asset managers.

## Live Site

Production URL:

- `https://brandonlines.github.io/rakeml/`

## Run Locally

```bash
python3 -m http.server 8000
```

Open:

- `http://localhost:8000/`

## Project Structure

- `index.html`: Main RAKE ML homepage
- `rake-ml-next.html`: Alternate/backup version of the RAKE ML page
- `.github/workflows/pages.yml`: GitHub Pages deployment workflow

## Theming

- Default theme: `Champagne` (primary)
- Secondary theme: `Dark` (previous/current visual style)
- Theme toggle is in the top navigation and persists in `localStorage` under `rake-theme`

## Deployment

- Deploys via GitHub Pages from the `main` branch using the existing workflow.
