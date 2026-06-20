Personal Portfolio Website

A modern, fully responsive Arabic (RTL) personal portfolio website for a frontend developer. The site presents projects, skills, work experience, and client testimonials, with a fully customizable appearance (dark/light mode, font, and accent colors).

✨ Features

🎨 Appearance & Theming


Dark / Light Mode — toggle switch in the navbar, saved automatically to localStorage and respects the user's system preference (prefers-color-scheme) on first visit.
Custom Theme Colors — a settings sidebar lets visitors pick from multiple color palettes (gradients for primary / secondary / accent), applied instantly across the whole site via CSS variables and saved for future visits.
Font Switcher — choose between three Arabic web fonts (Alexandria, Tajawal, Cairo), saved to localStorage.
Reset Settings — one click restores the default font and color theme.


🧭 Navigation & UX


Sticky Navbar with smooth-scroll links to every section.
Active Link Highlighting — the current section is automatically highlighted in the nav as the user scrolls.
Scroll-to-Top Button — appears after scrolling down and smoothly returns the user to the top.
Slide-in Settings Panel — opens from the right edge, closes on outside click or the close button.
Skip-to-Content Link for keyboard/screen-reader accessibility.


💼 Portfolio / Projects Section


Responsive project grid (1 / 2 / 3 columns depending on screen size).
Live Category Filtering — filter projects by All, Web, Apps, Design, or E-commerce with a single click; the active filter button is highlighted with a gradient style.
Each project card includes a cover image, category badge, short description, tech-stack tags, and links to a live demo and source code (GitHub/Figma).


🛠️ Skills Section


Skill cards with icons (React, Next.js, TypeScript, Tailwind CSS, Bootstrap, Figma, etc.) and animated progress bars showing proficiency level.
A row of core technology badges (HTML5, CSS3, JavaScript, Git).


💬 Testimonials Carousel


A responsive carousel (1 / 2 / 3 visible cards depending on screen width) with Next / Previous controls and clickable indicator dots.
Automatically recalculates layout on window resize.


📊 Statistics Section


Animated highlight cards showcasing completed projects, happy clients, years of experience, and awards.


📬 Contact Section


Contact form with validation-ready input styling and custom dropdown options.
Direct links to social/professional profiles.


♿ Accessibility


Semantic ARIA attributes throughout (aria-pressed, aria-expanded, role="radiogroup", aria-live regions, etc.).
Full keyboard and screen-reader support for the theme toggle, settings panel, and filters.


🔍 SEO & Performance


Complete meta tags: description, keywords, Open Graph, and Twitter Card.
preconnect and preload resource hints for fonts and icons.
Non-render-blocking loading of Google Fonts and Font Awesome.
Lazy-loaded images (loading="lazy") across the portfolio grid.



🌗 How Theming Works


Dark/light mode and the selected font are stored in localStorage under theme and site-font.
Custom accent colors are stored under selected-theme-colors and applied by setting CSS variables (--primary, --secondary, --accent) on the <html> element, which Tailwind's utility classes (bg-primary, text-secondary, etc.) read from.


📄 License

This project is open for personal and educational use. Feel free to fork it and adapt it for your own portfolio.

📬 Contact

Have feedback or want to collaborate? Reach out through the contact form on the live site, or open an issue in this repository.
