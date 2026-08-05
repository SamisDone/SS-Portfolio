<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d9488,50:00f0ff,100:a855f7&height=220&section=header&text=SS/_&fontSize=90&fontColor=f2f2f2&fontAlignY=35&animation=fadeIn&desc=Engineering%20Portfolio&descSize=22&descColor=94a3b8&descAlignY=58" width="100%" alt="SS Portfolio Banner" />
</p>

<p align="center">
  <a href="https://samonwitaportfolio.netlify.app/">
    <img src="https://img.shields.io/badge/Live_Site-samonwitaportfolio.netlify.app-00f0ff?style=for-the-badge&labelColor=0a0a0f" alt="Live Site" />
  </a>
  <a href="https://github.com/SamisDone/SS-Portfolio">
    <img src="https://img.shields.io/github/last-commit/SamisDone/SS-Portfolio?style=for-the-badge&labelColor=0a0a0f&color=a855f7" alt="Last Commit" />
  </a>
  <a href="https://github.com/SamisDone/SS-Portfolio">
    <img src="https://img.shields.io/github/repo-size/SamisDone/SS-Portfolio?style=for-the-badge&labelColor=0a0a0f&color=0d9488" alt="Repo Size" />
  </a>
</p>

<p align="center">
  <i>Interfaces that move. Code that explains itself.</i>
</p>

<br/>

---

<br/>

## What is this?

This is my personal engineering portfolio. Not a template with swapped text. I built everything from scratch: the boot sequence, the terminal emulator, the cursor system, the animation engine, the CRT easter egg. Every interaction and every pixel was a deliberate choice.

I wanted something that actually shows what I can do, not just talks about it.

<br/>

## Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,ts,vite,tailwind&theme=dark" alt="Tech Stack Icons" />
</p>

| Layer | What | Why |
|:---|:---|:---|
| **Framework** | React 18 + TypeScript | Type safety, component model I know well |
| **Build** | Vite 5 (SWC) + Bun | Fast builds, fast installs |
| **Styling** | Tailwind CSS 3 | Utility-first with custom design tokens |
| **Motion** | Framer Motion 12 | Physics-based springs, clean API |
| **Theming** | next-themes | Dark/light toggle that just works |
| **Icons** | Lucide React | Tree-shakeable, consistent |
| **Routing** | React Router 6 | SPA with 404 catch-all |

<br/>

## Features

<table>
<tr>
<td width="50%">

### Boot Sequence
The site opens with a cinematic `BootLoader` that simulates a system startup with scrolling logs and a progress bar. Sets the tone before you even see the content.

</td>
<td width="50%">

### X-Ray Cursor
Custom cursor with vertical scanlines and a glow that expands when you hover over interactive elements. Uses `useSpring` for smooth tracking. Desktop only.

</td>
</tr>
<tr>
<td width="50%">

### In-Browser Terminal
Press <kbd>`</kbd> anywhere to open a working terminal. Supports `help`, `about`, `projects`, `skills`, `cv`, `theme`, `clear`, `matrix`, and more.

</td>
<td width="50%">

### System Override (Easter Egg)
Enter the Konami Code (<kbd>↑↑↓↓←→←→BA</kbd>) to trigger CRT flicker, screen-shake, and Matrix-theme digital rain across the whole site.

</td>
</tr>
</table>

<br/>

### Animation System

Five different reveal animations so sections don't all feel the same:

```
  ELEVATE    Slide-up with blur-to-focus
  REVEAL     Horizontal mask sweep
  UNFOLD     Low-angle 3D perspective settle
  FOCUS      Snap-to-clarity gaussian blur entrance
  GLIDE      Frictionless horizontal slide
```

<br/>

## Project Structure

```
src/
├── components/
│   ├── layout/          RootLayout (Konami code, scroll tracking)
│   ├── sections/        Hero, About, Projects, Skills, Experience,
│   │                    Research, Contact, Footer, Navbar
│   ├── projects/        ProjectCard with per-project animation variants
│   └── ui/              BootLoader, CursorGlow, OverrideOverlay,
│                        PageTransition, ParallaxSection, ScrollProgress,
│                        SectionHeader, TerminalOverlay, ThemeToggle
├── data/                Extracted data modules (keeps components clean)
│   ├── projects.ts      13 projects
│   ├── skills.ts        4 categories + core skills
│   ├── experience.ts    Education, activities, certifications
│   ├── research.ts      IEEE publications
│   └── about.ts         Identity blocks
├── hooks/               useActiveSection
├── lib/                 Accent system, constants, utils
├── types/               Project type definitions
└── pages/               HomePage, NotFound
```

<br/>

## Design System

Dual-theme with four accent colors and hand-tuned glow effects:

```css
/* Dark Theme (Default) */
Background    hsl(240 10% 4%)      Near-black
Foreground    hsl(0 0% 95%)        Off-white

/* Accents */
Cyan          hsl(168 100% 48%)    Primary
Acid          hsl(73 100% 50%)     Secondary
Violet        hsl(280 100% 60%)    Highlights
Blood         hsl(0 85% 55%)       Emphasis

/* Fonts */
Display       Space Grotesk (400-700)
Mono          JetBrains Mono (400-600)
```

<br/>

## Featured Projects

<table>
<tr>
<td align="center" width="25%">
  <h4>RIPHours</h4>
  <sub>Chrome Extension</sub><br/>
  <sub>Privacy-first screen time tracker</sub><br/>
  <a href="https://chromewebstore.google.com/detail/riphours/iagjeekneaalapjnnofnifleaiondbbb">Chrome Web Store</a>
</td>
<td align="center" width="25%">
  <h4>TabSaver</h4>
  <sub>Chrome Extension</sub><br/>
  <sub>One-click session persistence</sub><br/>
  <a href="https://chromewebstore.google.com/detail/tabsaver/emjeegpjecaljggipjdaofmlkoolikdk">Chrome Web Store</a>
</td>
<td align="center" width="25%">
  <h4>MediHub</h4>
  <sub>AI Healthcare Platform</sub><br/>
  <sub>Gemini-powered diagnostics</sub><br/>
  <a href="https://ai-powered-hospital-management-syst.vercel.app/">Live Demo</a>
</td>
<td align="center" width="25%">
  <h4>PIERRA</h4>
  <sub>Freelance Website</sub><br/>
  <sub>Bilingual business site</sub><br/>
  <a href="https://pierrafinal.vercel.app/">Live Site</a>
</td>
</tr>
<tr>
<td align="center" width="25%">
  <h4>StockMaster</h4>
  <sub>Inventory Tracker</sub><br/>
  <sub>Real-time stock analytics</sub><br/>
  <a href="https://github.com/SamisDone/StockMaster">GitHub</a>
</td>
<td align="center" width="25%">
  <h4>ResumeForge</h4>
  <sub>Web App</sub><br/>
  <sub>Live-preview resume builder</sub><br/>
  <a href="https://resumeforge-sam.netlify.app/">Live Demo</a>
</td>
<td align="center" width="25%">
  <h4>APRR Simulator</h4>
  <sub>OS Scheduling</sub><br/>
  <sub>CPU algorithm visualizer</sub><br/>
  <a href="https://github.com/SamisDone/Adaptive-Priority-Round-Robin">GitHub</a>
</td>
<td align="center" width="25%">
  <h4>SortnPlay</h4>
  <sub>Algorithm Visualizer</sub><br/>
  <sub>Step-by-step sorting viz</sub><br/>
  <a href="https://sortnplay.netlify.app/">Live Demo</a>
</td>
</tr>
</table>

<br/>

## Research

| Paper | Venue | Year |
|:---|:---|:---|
| **A Machine Learning and Explainable AI-Based Multiclass Police Fraud Prediction Scheme with SHAP Based Interpretability** | IEEE ICECTE 2026 | 2026 |

<br/>

## CV

Available in two formats:

| Format | Path |
|:---|:---|
| **PDF** | [`Samonwita_Sarker_CV.pdf`](public/Samonwita_Sarker_CV.pdf) |
| **Markdown** | [`Samonwita_Sarker_CV.md`](public/Samonwita_Sarker_CV.md) |

You can also grab it from the Hero section ("Download CV" button), the Navbar (download icon), or by typing `cv` in the terminal.

<br/>

## Performance

```
Build (bun run build)
  Time            3.4s
  JS Bundle       402 KB (127 KB gzip)
  CSS Bundle       34 KB (7 KB gzip)
  Modules         2013
```

Some things I did to keep it lean:
- Tree-shaken Lucide icons
- SWC compiler instead of Babel
- Removed 30+ unused dependencies from the original boilerplate
- Deleted 50+ unused Shadcn component files
- `loading="eager"` on the hero image with explicit dimensions
- `prefers-reduced-motion` media query for accessibility

<br/>

## Getting Started

```bash
# Clone
git clone https://github.com/SamisDone/SS-Portfolio.git
cd SS-Portfolio

# Install (uses bun)
bun install

# Dev server at http://localhost:8080
bun run dev

# Production build
bun run build

# Preview the build
bun run preview
```

<br/>

## Terminal Commands

Press <kbd>`</kbd> (backtick) anywhere on the site to open the terminal:

| Command | What it does |
|:---|:---|
| `help` | Lists all commands |
| `whoami` | Who am I |
| `skills` | Technical skill tree |
| `projects` | Project catalogue |
| `cv` | Opens CV (PDF + Markdown links) |
| `hint` | How to find the easter egg |
| `reset` | Deactivate the override |
| `clear` | Clear terminal |
| `exit` | Close terminal |

<br/>

## Accessibility

- Full keyboard navigation
- `aria-label` on all interactive elements
- `prefers-reduced-motion` respected
- Semantic HTML5 with proper heading hierarchy
- Custom cursor only on desktop with fine pointer

<br/>

## Connect

<p align="center">
  <a href="https://github.com/SamisDone">
    <img src="https://img.shields.io/badge/GitHub-SamisDone-0d9488?style=for-the-badge&logo=github&logoColor=white&labelColor=0a0a0f" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/samonwita-sarker-a87737262/">
    <img src="https://img.shields.io/badge/LinkedIn-Samonwita_Sarker-0d9488?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=0a0a0f" alt="LinkedIn" />
  </a>
  <a href="https://codeforces.com/profile/jinxed_sam">
    <img src="https://img.shields.io/badge/Codeforces-jinxed__sam-0d9488?style=for-the-badge&logo=codeforces&logoColor=white&labelColor=0a0a0f" alt="Codeforces" />
  </a>
  <a href="https://www.kaggle.com/samonwitasarker">
    <img src="https://img.shields.io/badge/Kaggle-samonwitasarker-0d9488?style=for-the-badge&logo=kaggle&logoColor=white&labelColor=0a0a0f" alt="Kaggle" />
  </a>
  <a href="mailto:sarker.samonwita@gmail.com">
    <img src="https://img.shields.io/badge/Email-sarker.samonwita-0d9488?style=for-the-badge&logo=gmail&logoColor=white&labelColor=0a0a0f" alt="Email" />
  </a>
</p>

<br/>

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d9488,50:00f0ff,100:a855f7&height=100&section=footer" width="100%" alt="Footer Wave" />
</p>

<p align="center">
  <sub>Designed and built by <b>Samonwita Sarker</b></sub>
</p>
