# Academic Personal Website: Ha Anh Vu

Static site (plain HTML, CSS, JavaScript). No build step, no dependencies. Works on GitHub Pages as is.

## Project structure

```
academic-site/
├── index.html            # Page content 
├── README.md
├── data/
│   └── database.xlsx     # Publications and projects: edit this file in Excel
├── .nojekyll             # Tells GitHub Pages to serve files as they are
└── assets/
    ├── css/style.css     # Design tokens (light/dark) and layout
    ├── js/main.js        # Publications data, theme toggle, hero animation
    └── img/              # Put avatar.png here
```

## Run locally

The site reads `data/database.xlsx`, so serve the folder with a local web server (opening `index.html` by double-click cannot load the Excel file):

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

- **Avatar**: save a square photo (at least 480x480 px) as `assets/img/avatar.png`. The initials placeholder disappears automatically.
- **GitHub and LinkedIn**: search `YOUR_USERNAME` in `index.html` and replace it (two places each).
- **Publications and projects**: edit `data/database.xlsx` (see the next section). No HTML or JavaScript changes are needed.
- **Colors and fonts**: change the CSS variables in `:root` and `:root[data-theme=dark]` at the top of `assets/css/style.css`.
- **Prospective students section**: the text in `#join` is a draft. Edit the topics, benefits and requirements to match your group.
- **Custom domain** (optional): add a `CNAME` file containing your domain, then set the domain in Settings, then Pages.

## Update publications and projects (Excel)

1. Open `data/database.xlsx`. The `Instructions` sheet explains each column.
2. **Publications sheet** columns: `Type` (Journal, Conference, Thesis, Submission / Preprint), `Status` (Published, Accepted, In Submission, Thesis), `Year`, `Title`, `Authors` (comma separated), `Venue`, `DOI` (a DOI or full URL), `PDF`, `Code`. DOI, PDF and Code buttons only appear when the cell is filled.
3. **Projects sheet** columns: `Title`, `Members` (separated by `;`), `Thesis Status` (In progress, Preparing for defense, Defended), `Paper Status` (Submitted, Accepted, Published, or blank), `Paper Venue`, `Paper Link`.
4. Save, then replace `data/database.xlsx` in your repository (commit and push). The site shows the new data after GitHub Pages redeploys, usually within a minute or two.

Papers are grouped by `Type`, sorted newest first and numbered automatically. The Excel file is public once deployed, so do not put private information in it. The library that reads Excel (SheetJS 0.18.5) is loaded from cdnjs.

