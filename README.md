# Ha Anh Vu - AI Lecturer & Researcher Portfolio

A modern, professional portfolio website showcasing academic and professional experience in AI, Machine Learning, and Computer Vision.

## Features

- **Modern Design**: Clean, professional interface optimized for academic professionals
- **Bilingual Support**: Toggle between English and Vietnamese
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Elegant transitions and scroll effects
- **GitHub Pages Ready**: Fully compatible with GitHub Pages hosting
- **SEO Optimized**: Proper meta tags and semantic HTML

## Sections

1. **Hero Section**: Introduction with contact links and call-to-action buttons
2. **About**: Professional summary and key qualifications
3. **Education**: Academic background with timeline view
4. **Work Experience**: Professional experience with detailed descriptions
5. **Research & Publications**: Research interests, publications, and awards
6. **Projects**: Featured projects with technology stacks
7. **Contact**: Contact information and social media links
8. **Footer**: Quick links and additional information

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Vanilla JavaScript for interactions
- **Font Awesome**: Icon library for professional icons
- **Vite**: Build tool for development and production

## Quick Start

### Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```
   The production files will be in the `dist` folder.

### Direct File Access

You can also open `index.html` directly in your browser without running a server. All assets are referenced correctly for local viewing.

## GitHub Pages Deployment

### Option 1: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Copy the contents of the `dist` folder to your GitHub Pages repository

3. Push to GitHub

### Option 2: Using GitHub Actions

Add this workflow file to `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
```

### Option 3: Direct Deployment (No Build)

If you want to deploy without using Vite's build process:

1. Copy `index.html`, `style.css`, and `script.js` to your repository
2. Make sure the paths in `index.html` are correct
3. Push to GitHub

## Customization

### Update Personal Information

1. **Contact Information**: Update email, phone, and location in the HTML
2. **Social Links**: Update URLs in the social links section
3. **Profile Content**: Modify the text in each section

### Update Profile Photo

The current design doesn't include a profile photo, but you can easily add one:

1. Add your photo to the project directory
2. Add this code in the About section:
   ```html
   <div class="profile-photo">
       <img src="your-photo.jpg" alt="Ha Anh Vu">
   </div>
   ```
3. Add corresponding CSS styling

### Change Colors

Edit the CSS variables in `style.css`:

```css
:root {
    --primary-color: #2563eb;     /* Main brand color */
    --secondary-color: #1e40af;   /* Secondary brand color */
    --accent-color: #3b82f6;      /* Accent color */
    /* ... other colors */
}
```

### Add CV Download

1. Add your CV PDF file to the project directory
2. Update the download button link in `script.js`:
   ```javascript
   function initDownloadCV() {
       const downloadBtn = document.getElementById('downloadCV');
       downloadBtn.addEventListener('click', (e) => {
           e.preventDefault();
           // Update this path to your CV file
           window.open('path/to/your-cv.pdf', '_blank');
       });
   }
   ```

### Update Social Media Links

Replace the placeholder URLs in `index.html` with your actual profiles:

```html
<a href="mailto:your-email@domain.com" target="_blank" aria-label="Email">
<a href="https://scholar.google.com/your-profile" target="_blank" aria-label="Google Scholar">
<a href="https://orcid.org/your-id" target="_blank" aria-label="ORCID">
<a href="https://github.com/your-username" target="_blank" aria-label="GitHub">
<a href="https://linkedin.com/in/your-username" target="_blank" aria-label="LinkedIn">
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## File Structure

```
.
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # JavaScript functionality
├── package.json        # Project dependencies
├── README.md          # This file
└── public/            # Static assets
    └── vite.svg       # Favicon
```

## Key Features Explained

### Bilingual Support

The website supports both English and Vietnamese. Click the language toggle button in the navigation to switch languages. All text is stored using `data-en` and `data-vi` attributes.

### Smooth Navigation

Click on any navigation link to smoothly scroll to the corresponding section. The active link is automatically highlighted based on the current scroll position.

### Scroll-to-Top Button

A floating button appears when you scroll down the page, allowing quick return to the top.

### Responsive Design

The layout automatically adjusts for different screen sizes:
- Desktop: Full multi-column layout
- Tablet: Optimized two-column layout
- Mobile: Single-column layout with hamburger menu

### Animations

Elements fade in and slide up as they enter the viewport, creating a dynamic user experience.

## Tips for GitHub Pages

1. **Base URL**: If your site is at `username.github.io/portfolio`, you may need to adjust asset paths
2. **Custom Domain**: You can configure a custom domain in GitHub repository settings
3. **HTTPS**: GitHub Pages automatically provides HTTPS
4. **Updates**: Any push to the main branch will trigger a redeploy

## Performance Optimization

The website is optimized for performance:
- Minimal dependencies (only Font Awesome for icons)
- Optimized CSS with modern properties
- Lazy loading for animations
- Compressed assets in production build

## Accessibility

- Semantic HTML for better screen reader support
- ARIA labels for interactive elements
- Proper heading hierarchy
- Sufficient color contrast ratios
- Keyboard navigation support

## License

This portfolio template is free to use and modify for personal or commercial projects.

## Support

For issues or questions about customization, please refer to the comments in the code or consult web development resources.

## Credits

- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: System fonts for optimal performance
- Design: Custom design optimized for academic professionals

---

**Last Updated**: January 2025

For the latest version and updates, visit the project repository.