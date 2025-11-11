# Quick Setup Instructions

## What You Have

A complete, modern portfolio website with:
- ✅ Professional design for AI/academic professionals
- ✅ Bilingual support (English/Vietnamese)
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth animations and transitions
- ✅ All content from your resume
- ✅ GitHub Pages ready

## Files Included

```
📁 Your Portfolio
├── 📄 index.html          # Main website file
├── 📄 style.css           # All styling
├── 📄 script.js           # Interactive features
├── 📄 README.md           # Complete documentation
├── 📄 DEPLOYMENT.md       # Deployment guide
└── 📄 SETUP_INSTRUCTIONS.md  # This file
```

## Quick Start (3 Steps)

### Step 1: Test Locally

Simply open `index.html` in your web browser to see your portfolio!

**OR** run development server:
```bash
npm install
npm run dev
```
Visit `http://localhost:5173`

### Step 2: Customize Your Information

Open `index.html` and update:

1. **Social Media Links** (Lines 52-56, 492-511)
   ```html
   <a href="mailto:your-email@domain.com">Email</a>
   <a href="https://scholar.google.com/your-profile">Google Scholar</a>
   <a href="https://orcid.org/your-id">ORCID</a>
   <a href="https://github.com/your-username">GitHub</a>
   <a href="https://linkedin.com/in/your-username">LinkedIn</a>
   ```

2. **Add Your CV**
   - Add your CV PDF file to the project folder
   - Open `script.js` (line 100)
   - Update the download function:
   ```javascript
   function initDownloadCV() {
       const downloadBtn = document.getElementById('downloadCV');
       downloadBtn.addEventListener('click', (e) => {
           e.preventDefault();
           window.open('your-cv-filename.pdf', '_blank');
       });
   }
   ```

3. **Optional: Update Colors**
   Open `style.css` (lines 1-13) to change the color scheme:
   ```css
   :root {
       --primary-color: #2563eb;  /* Change this */
       --secondary-color: #1e40af; /* Change this */
   }
   ```

### Step 3: Deploy to GitHub Pages

**Easy Method:**

1. Create a GitHub repository
2. Copy these files to your repository:
   - `index.html`
   - `style.css`
   - `script.js`
3. Push to GitHub
4. Enable GitHub Pages in repository settings

**Detailed Instructions:** See `DEPLOYMENT.md`

## Features & Usage

### Language Toggle
Click the button with 🌐 EN/VI in the navigation menu to switch between English and Vietnamese.

### Navigation
Click any menu item to smoothly scroll to that section. The active section is automatically highlighted.

### Mobile Menu
On mobile devices, click the hamburger menu (☰) to see navigation options.

### Scroll to Top
When you scroll down, a ⬆️ button appears in the bottom-right to quickly return to the top.

## Customization Options

### Add Profile Photo

Add after line 67 in `index.html`:
```html
<div class="about-photo">
    <img src="your-photo.jpg" alt="Your Name" style="border-radius: 1rem; max-width: 300px; box-shadow: var(--shadow-lg);">
</div>
```

### Change Hero Background

In `style.css` line 143, change the gradient:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Try these alternatives:
```css
/* Blue to teal */
background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);

/* Professional blue */
background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);

/* Dark elegant */
background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
```

### Add New Section

Copy this template and paste before the contact section:
```html
<section id="your-section" class="section">
    <div class="container">
        <h2 class="section-title" data-en="Your Section Title" data-vi="Tiêu đề phần">
            Your Section Title
        </h2>
        <!-- Your content here -->
    </div>
</section>
```

Don't forget to add it to the navigation menu too!

## Content Already Included

All information from your resume is already in the website:

✅ Education
- Master's degree (Central Washington University)
- Bachelor's degree (University of Information Technology)

✅ Work Experience
- FPT University (AI Lecturer)
- Life Learners LLC (AI Specialist)
- Central Washington University (Research Assistant)
- Savyboat (IT Helpdesk)
- H.O.A Technology (Full-stack Developer)

✅ Publications
- ICPR 2024 Conference Paper
- RTIP2R 2024 Conference Paper
- Master's Thesis (2025)
- Bachelor's Thesis (2022)

✅ Projects
- Brain Tumor Classification System
- Life Learners Platform
- Fire Detection Application
- Smart Parking System

✅ Skills
- Programming: Python, C++, C
- ML/DL: TensorFlow, Scikit-learn, OpenCV, Pandas, NumPy
- Web: HTML5, CSS3, Laravel, MySQL
- Hardware: Jetson Nano, Arduino, Raspberry Pi

✅ Awards
- International Graduate Student Scholarship
- Employee of the Month
- Outstanding Young Leader Award

## Testing Checklist

Before deploying, test these features:

- [ ] Navigation menu works (all links scroll to correct sections)
- [ ] Language toggle switches between EN/VI
- [ ] Mobile menu opens and closes
- [ ] All social media icons are visible
- [ ] Scroll to top button appears when scrolling
- [ ] All sections display correctly
- [ ] Responsive design works on mobile (resize browser)
- [ ] All animations work smoothly

## Support & Documentation

- **Full Documentation**: See `README.md`
- **Deployment Guide**: See `DEPLOYMENT.md`
- **Update Content**: Edit `index.html`
- **Change Styles**: Edit `style.css`
- **Modify Functions**: Edit `script.js`

## Common Tasks

### Update Text Content
Open `index.html` and search for the text you want to change. For bilingual content, update both `data-en` and `data-vi` attributes.

### Add New Publication
Find the publications section (~line 301) and copy an existing publication block:
```html
<div class="publication-item">
    <div class="pub-icon"><i class="fas fa-file-alt"></i></div>
    <div class="pub-content">
        <span class="pub-type conference">Conference</span>
        <h4>Your Publication Title</h4>
        <p class="pub-authors">Authors</p>
        <p class="pub-venue">Conference/Journal Name</p>
        <p class="pub-year">2025</p>
    </div>
</div>
```

### Add New Project
Find the projects section (~line 372) and copy an existing project card.

### Change Fonts
Add to the `<head>` section in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

Then update `style.css` line 26:
```css
font-family: 'Poppins', sans-serif;
```

## Production Build

When ready to deploy:

```bash
npm run build
```

This creates optimized files in the `dist` folder.

## Need Help?

1. Check `README.md` for detailed information
2. Check `DEPLOYMENT.md` for deployment issues
3. All code includes comments explaining functionality
4. File paths use relative URLs (works locally and on GitHub Pages)

## Tips for Success

1. **Test locally first** - Open index.html in browser before deploying
2. **Update links** - Replace placeholder social media URLs with your actual profiles
3. **Add your CV** - Don't forget to add your CV PDF and update the download link
4. **Check mobile** - Test on mobile device or use browser dev tools
5. **Optimize images** - If you add images, compress them first
6. **Use Git** - Commit changes regularly to track your updates

## Your Website is Ready! 🎉

Your professional portfolio website is complete and ready to launch. All your academic and professional achievements are beautifully presented in a modern, responsive design.

**Next Step**: Deploy to GitHub Pages following the instructions in `DEPLOYMENT.md`

Good luck with your portfolio!

---

**Questions?** All the details you need are in the README.md and DEPLOYMENT.md files.