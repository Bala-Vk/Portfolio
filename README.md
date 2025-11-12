## Bala QA Portfolio (Vite + React + TypeScript + Tailwind)

A modern, colorful, and corporate-style portfolio for a QA Automation Engineer (6 years experience) featuring interactive projects, animations, accessibility, and Vercel-ready deployment.

### Features

- Multi-page app with React Router: Home, Skills, Projects, Contact
- Responsive design for desktop, tablet, and mobile
- Vibrant corporate palette (blue primary + warm accent)
- Subtle animations (Framer Motion), hover micro-interactions, smooth scrolling
- Projects gallery with tech filters and GitHub code embed preview
- Accessible: skip link, keyboard-friendly nav, visible focus, ARIA, reduced-motion support
- Dark mode with theme toggle
- Contact page shows direct email/phone and social buttons (LinkedIn, GitHub)

### Tech Stack

- React 18 + TypeScript + Vite
- Tailwind CSS
- React Router
- Framer Motion
 

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173`.

### Project Structure

- `src/pages` — `Home`, `Skills`, `Projects`, `Contact`
- `src/components` — `Header`, `Footer`, `Layout`, `ThemeToggle`, `Reveal`, `CodeEmbed`
- `src/data/profile.ts` — Profile, skills, tools, projects (edit here)
- `src/styles/index.css` — Tailwind and utility classes
- `public/resume.pdf` — Place your resume here (optional)

### Customize Content

- Update profile and project details in `src/data/profile.ts` (links, email, skills, projects).
- Replace `rawCodeUrl` with a GitHub raw URL to show a live code preview.
- Set your LinkedIn/GitHub URLs and public email.
- Add `public/resume.pdf` to enable the Download Resume button.

### Customize Contact

- Update your phone and email in `src/data/profile.ts`.
- Update `links.linkedin` and `links.github`.

### Accessibility Notes

- Header links expose `aria-current="page"` on active routes.
- Focus-visible rings on interactive elements.
- Skip-to-content link in `index.html`.
- Animations respect user preference for reduced motion.

### Deployment (Vercel)

1. Push this project to GitHub/GitLab/Bitbucket.
2. Import the repo on Vercel. Framework preset: Vite (auto-detected).
3. Build: `vite build` (auto) • Output: `dist` (auto).
4. No environment variables are required.

### Optional Enhancements

- Add screenshots and a lightbox to project cards.
- Add scrollspy highlighting for section links.
- Add analytics (e.g., Vercel Analytics).
- Integrate a real email/SMS provider in the contact API.



