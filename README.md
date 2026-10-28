# Milkahs-Portfolio

> **Minimalist × Graffiti** — A contemporary personal portfolio website celebrating craftsmanship in tailoring, digital technology, and continuous creative growth.

---

## 🎨 Visual Identity & Aesthetic

This portfolio embodies an editorial streetwear aesthetic:
- **Palette**: Deep asphalt/charcoal (`#0c0d10`), crisp graphite surfaces (`#171920`), warm off-white (`#f4f5f8`), and a vibrant **Electric Lime** (`#ccff00`) graffiti accent.
- **Typography**: Architectural sans-serif (*Plus Jakarta Sans* & *Space Grotesk*) paired with street-tag display markers (*Permanent Marker*).
- **Accents**: Subtle CSS spray textures, tape stickers, measuring tape geometry, needle-and-stitch patterns, and clean asymmetrical grids.

---

## 📁 Project Structure

Built purely with **HTML5, CSS3, and vanilla JavaScript** without external heavy libraries or frameworks:

```text
Milkahs-Portfolio/
├── index.html        # Semantic HTML5 structure & content sections
├── style.css         # Modern CSS (variables, grid/flexbox, animations)
├── script.js         # Vanilla JavaScript (filters, modal, animations)
└── README.md         # Documentation & setup guide
```

---

## ⚡ Key Features

1. **Responsive & Mobile-Ready**: Smooth drawer navigation menu with accessible hamburger toggle and focus management.
2. **Dynamic Project Gallery**: Interactive filter tabs (`All`, `Tailoring & Fashion`, `Digital & Tech`, `Concepts & Sketches`).
3. **Project Quick-View Modal**: Accessible preview modal dialog with keyboard navigation (`Escape` to close).
4. **Scroll Reveal Animations**: Tasteful, performant entrance animations powered by `IntersectionObserver`, fully respecting `prefers-reduced-motion`.
5. **Interactive Contact Form**: Client-side validation with real-time feedback and toast notifications.
6. **One-Click Email Copy**: Quick copy-to-clipboard button with visual confirmation.
7. **Back-to-Top**: Smooth scroll button with auto-visibility threshold.
8. **Dynamic Year**: Automatically updates in the footer with JavaScript.

---

## 🚀 How to Run Locally

You do not need any build tools or package managers:

1. **Option A: Direct in Browser**
   - Double-click `index.html` or open it in any modern browser (Chrome, Edge, Firefox, Safari).

2. **Option B: Local Development Server**
   - In VS Code / Antigravity, use the "Live Server" extension, or run:
   ```bash
   # Using Python 3:
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

---

## ✏️ Customization Guide

All personal information is clearly marked with editable comments in the source files:

- **Name & Headline**: Open `index.html` and look for the `hero-identity` section.
- **Bio & Values**: Update the text in the `about-section` in `index.html`.
- **Contact Details**: Replace `milkah.nambafu@example.com` and `+254 700 000 000` in the `contact-section`.
- **Projects & Photos**:
  - Add or update project descriptions in `script.js` (`projectsData` object).
  - Replace the placeholder `<svg>` with real images: `<img src="path/to/photo.jpg" alt="Description">`.
- **Accent Color**: Want a vibrant neon orange or cyan instead? Simply change `--color-accent: #ccff00;` in `style.css`!

---

## 🌐 Deploy to GitHub Pages

To publish this website online for free on GitHub Pages:

```bash
git init
git add .
git commit -m "Build minimalist graffiti portfolio"
git branch -M main
git remote add origin https://github.com/Milkah-Nambafu/Milkahs-Portfolio.git
git push -u origin main
```

Then in your GitHub repository:
1. Go to **Settings** > **Pages**.
2. Under **Branch**, select `main` and root folder `/`.
3. Click **Save**. Your site will be live at:
   `https://milkah-nambafu.github.io/Milkahs-Portfolio/`

---

## 📄 License

Created with passion & precision by **Milkah Nambafu**. Free to adapt and use for personal portfolio presentation.
