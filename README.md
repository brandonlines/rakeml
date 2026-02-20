# Acceleration Consortium Concept Site

Static website concept redesign for the University of Toronto Acceleration Consortium.

## Live Development

Run locally:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Project Structure

- `index.html`: Main page (champagne-first theme with optional cyber mode toggle)
- `.github/workflows/pages.yml`: GitHub Pages deployment workflow

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Push this project to the `main` branch.
3. In GitHub, go to `Settings > Pages`.
4. Set source to `GitHub Actions`.
5. The included workflow will build and deploy automatically on push to `main`.

## Notes

- This repo is a static site (no build step required).
- Default visual theme is `Champagne`; alternate theme is `Cyber`.
- Theme preference is stored in browser `localStorage` under `ac-theme`.
