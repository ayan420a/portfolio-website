# Futuristic Scroll-Driven Portfolio Website

A premium, interactive developer portfolio showcasing work, achievements, and technical experience using a scroll-driven timeline layout. Features a synchronized video canvas background sequence and beautiful cyberpunk-inspired electric cyan styling.

## 🚀 Live Demo & Repository
- **Remote Repo:** [https://github.com/ayan420a/portfolio-website](https://github.com/ayan420a/portfolio-website)
- **Developer:** Mohd Ayan (B.Tech CSE - AI & ML)

---

## 🛠️ Tech Stack & Architecture

This project is built using a modern frontend stack optimized for high-performance graphics and animations:

### 1. Core Framework
- **[Next.js](https://nextjs.org/)** — React framework using the App Router, optimized with Next.js Turbopack for lightning-fast compilation and static generation.
- **[React](https://react.dev/)** — Declarative UI library for modular component building.
- **[TypeScript](https://www.typescriptlang.org/)** — Strong typing to ensure build stability and compile-time code safety.

### 2. Styling & Visuals
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework for layout structure and responsive grids.
- **Vanilla CSS (System Variables)** — Custom system tokens in `globals.css` driving cohesive dark modes, glassmorphism panels, futuristic neon gradients, and custom webkit scrollbar glows.
- **Glassmorphism Panels** — Highly legible card layouts combining frosted glass backdrops (`backdrop-filter: blur(16px)`), solid dark fills (`rgba(10, 10, 15, 0.85)`), and electric cyan glowing borders.

### 3. Motion & Animation
- **[Framer Motion](https://www.framer.com/motion/)** — Drives all interactive scroll triggers:
  - **Scroll-Synced Canvas Sequence** — Plays through a 75-frame PNG video sequence synced to the window's vertical scroll position.
  - **Diffused Evaporation** — Landing text scales up, fades out, and blurs gradually on initial scroll using hardware-accelerated SVG and CSS filters (`will-change`).
  - **Curved SVG Path Drawing** — Animates a weaving curved timeline vector that draws itself dynamically as the user scrolls.
  - **Interactive Side Dots** — Staggered active button indicators highlighting page location.

### 4. Assets & Icons
- **[Lucide React](https://lucide.dev/)** — High-quality vector developer icons.
- **Google Fonts** — Optimized loading of custom typographies (`Geist Sans`, `Geist Mono`, and `Cinzel` serif for names).

---

## 💻 Local Development

Follow these steps to run the portfolio locally:

### 1. Clone the repository:
```bash
git clone https://github.com/ayan420a/portfolio-website.git
cd portfolio-website
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for production:
```bash
npm run build
```
