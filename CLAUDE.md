# CLAUDE.md — Portfolio (my-app)

## What this is
Static developer portfolio for Dev Bandil. Next.js 15 App Router, fully client-rendered pages with Tailwind CSS dark theme and Framer Motion animations. No backend, no database, no API routes.

---

## Tech stack (quick ref)
| Layer | Tool |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS + `tailwindcss-animate` |
| Animations | Framer Motion |
| UI primitives | Shadcn/ui (`components/ui/`) |
| Icons | Lucide React (primary), React Icons (secondary) |
| Class utility | `clsx` + `tailwind-merge` via `@/lib/cn` |
| Path alias | `@/*` → project root |

---

## Directory map
```
my-app/
├── app/
│   ├── layout.js               # Root layout — fonts, globals.css, wraps all pages
│   ├── page.js                 # / → redirects to /Home
│   ├── globals.css             # Tailwind directives + global resets
│   ├── Home/page.jsx           # Hero section
│   ├── About/
│   │   ├── page.jsx            # About page container
│   │   └── _components/
│   │       ├── Biography.jsx       # Skills display (hardcoded skills list)
│   │       ├── Techstackbutton.jsx # Animated tech grid
│   │       └── SkillsPage.jsx      # Skills page wrapper
│   ├── Projects/
│   │   ├── page.jsx            # Projects page container
│   │   └── _components/
│   │       ├── Cardlist.jsx    # Grid of project cards (hardcoded projects array)
│   │       └── Card.jsx        # Individual project card
│   ├── Achievements/page.jsx   # Awards & milestones
│   └── _components/
│       ├── Navbar.jsx          # Navigation + exports Typewriter component
│       └── contactUs.jsx       # Contact section (email / GitHub / LinkedIn)
├── components/
│   ├── Stars.jsx               # Animated sparkle background effect
│   └── ui/button.jsx           # Shadcn button (CVA variants)
├── lib/
│   ├── cn.js                   # cn() = clsx + twMerge (USE THIS for classnames)
│   └── utils.js                # Duplicate of cn.js (legacy, prefer cn.js)
└── public/                     # Static images, icons, tech logos (webp/svg/png)
```

---

## Routes
| URL | File | Notes |
|---|---|---|
| `/` | `app/page.js` | Redirects → `/Home` |
| `/Home` | `app/Home/page.jsx` | Hero / landing |
| `/About` | `app/About/page.jsx` | Bio + skills |
| `/Projects` | `app/Projects/page.jsx` | Project showcase |
| `/Achievements` | `app/Achievements/page.jsx` | Awards |

---

## Conventions

**Classnames** — always use `cn()` from `@/lib/cn`, never raw string concatenation.

**Component co-location** — page-specific components live in `_components/` under the route folder. Truly shared components go in `components/`.

**Styling** — dark theme: `black-1` / `black-2` / `black-3` (defined in `tailwind.config.js`). Blue accent. Custom animations: `twinkle`, `wave`, `slide`. Custom utilities: `underline-slide`, `underline-wave`.

**Icons** — prefer Lucide (`lucide-react`). React Icons (`react-icons`) used where Lucide lacks coverage.

**Fonts** — GeistMono (local WOFF at `app/fonts/GeistMonoVF.woff`), loaded in `layout.js`.

---

## Data / content
All content is **hardcoded** inside components — no CMS, no DB:
- **Projects**: array in `app/Projects/_components/Cardlist.jsx` (AiCruiter, Make it Easy, DevidAura)
- **Skills/Tech**: array in `app/About/_components/Biography.jsx` and `Techstackbutton.jsx`
- **Contact links**: hardcoded in `app/_components/contactUs.jsx`
- **Images**: static files in `public/` referenced by path strings

To update content, edit the relevant component directly.

---

## Key files to open first
| Goal | Open |
|---|---|
| Change theme / colors / animations | `tailwind.config.js` |
| Add a new page | `app/<PageName>/page.jsx` + add link in `Navbar.jsx` |
| Add a project | `Cardlist.jsx` → projects array |
| Add a skill | `Biography.jsx` → skills array |
| Shared layout changes | `app/layout.js` |
| New reusable component | `components/` |
| Fix import alias issues | `jsconfig.json` |

---

## Commands
```bash
npm run dev     # dev server → http://localhost:3000
npm run build   # production build
npm run lint    # ESLint (next/core-web-vitals)
```
