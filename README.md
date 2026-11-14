# Academic Personal Website: Ha Anh Vu

Static site (plain HTML, CSS, JavaScript). No build step, no dependencies. Works on GitHub Pages as is.

## Project structure

```
academic-site/
├── index.html            # Page content (English default + data-vi Vietnamese text)
├── README.md
├── .nojekyll             # Tells GitHub Pages to serve files as they are
└── assets/
    ├── css/style.css     # Design tokens (light/dark) and layout
    ├── js/main.js        # Publications data, EN/VI switch, theme toggle, hero animation
    └── img/              # Put avatar.jpg here
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a GitHub repository. For a personal site, name it `<your-username>.github.io`.
2. Upload every file in this folder to the repository root (keep `index.html` at the top level):
   ```bash
   git init && git add . && git commit -m "Add academic website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. On GitHub, open **Settings, then Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select branch `main` and folder `/ (root)`, then save.
4. After 1 to 2 minutes the site is live at `https://<your-username>.github.io/`. If the repository has another name, the address is `https://<your-username>.github.io/<repo-name>/` (all paths in this project are relative, so it works either way).

## Customize

- **Avatar**: save a square photo (at least 480x480 px) as `assets/img/avatar.jpg`. The initials placeholder disappears automatically.
- **GitHub and LinkedIn**: search `YOUR_USERNAME` in `index.html` and replace it (two places each).
- **Publications**: edit the `PUBS` array at the top of `assets/js/main.js`. Fill `doi` (for example `"10.1007/xxxxx"`), `pdf` or `code` and the matching button appears. Valid `type` values are `journal`, `conference`, `thesis`, `submission`. Valid `status` values are `published`, `accepted`, `submission`, `thesis`. Your name is bolded automatically.
- **Supervised projects**: edit the `PROJECTS` array in `assets/js/main.js`. Replace the `Student Name` placeholders in `members` and choose `status` badges (`defense`, `submitted`).
- **Vietnamese text**: any element with `data-vi="..."` shows its inner English text by default and the `data-vi` text when VI is selected. Add `data-vi` to new elements to translate them.
- **Colors and fonts**: change the CSS variables in `:root` and `:root[data-theme=dark]` at the top of `assets/css/style.css`.
- **Prospective students section**: the text in `#join` is a draft. Edit the topics, benefits and requirements to match your group.
- **Custom domain** (optional): add a `CNAME` file containing your domain, then set the domain in Settings, then Pages.
