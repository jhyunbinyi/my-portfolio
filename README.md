# my-portfolio

A personal portfolio website hosted on [GitHub Pages](https://pages.github.com/).

## Project structure

```
my-portfolio/
├── index.html          # Main page
├── css/
│   └── style.css       # Styles
├── js/
│   └── main.js         # Scripts
├── assets/             # Images, resume PDFs, etc.
├── .nojekyll           # Tells GitHub Pages to skip Jekyll processing
└── README.md
```

## Local preview

Open `index.html` in your browser, or run a local server:

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages** in your repository.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose the **main** branch and the **/ (root)** folder.
5. Click **Save**. Your site will be live at:

   ```
   https://<your-username>.github.io/my-portfolio/
   ```

It may take a minute or two for the site to appear after the first deploy.

## Customize

Edit `index.html` to update your name, bio, projects, and contact links. Add images to the `assets/` folder and reference them with relative paths (e.g. `assets/photo.jpg`).

## License

MIT
