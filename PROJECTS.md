# Projects Section

## Overview

The Projects page (`/Projects`) renders a tab-filtered 3-column card grid. Tabs: **All · Full Stack · AI Powered · Freelance**. The active tab pill uses Framer Motion `layoutId` for a spring animation; cards use `AnimatePresence` for enter/exit. All project data is hardcoded in `app/Projects/_components/Cardlist.jsx`.

To add a new tab, push its label into the `TABS` array at the top of `Cardlist.jsx` and add the same string to the `categories` array of each relevant project.

---

## Current Projects

### AiCruiter
- **Label:** personal
- **Categories:** Full Stack, AI Powered
- **Live:** https://ai-cruiter-wheat.vercel.app/
- **GitHub:** https://github.com/devbandil12
- **Image:** `/aic.png`
- **Tech:** Next.js, React, Tailwind CSS, Gemini API, Drizzle ORM

### Make it Easy
- **Label:** Personal
- **Categories:** Full Stack, AI Powered
- **Live:** https://make-it-easy-liard.vercel.app/
- **GitHub:** https://github.com/devbandil12
- **Image:** `/notes.png`
- **Tech:** Gemini API, Next.js, React, Tailwind CSS, Drizzle ORM

### DevidAura
- **Label:** freelance
- **Categories:** Full Stack, Freelance
- **Live:** https://devidaura.com
- **GitHub:** https://github.com/devbandil12
- **Image:** `/f2.png`
- **Tech:** React, Cloudinary, Tailwind CSS, Drizzle ORM, Node.js

---

## Project Object Schema

Each entry in the `projects` array in `Cardlist.jsx` accepts:

| Field | Type | Description |
|---|---|---|
| `name` | `string` | Displayed project title |
| `label` | `string` | Shown as description text on the card (e.g. `"personal"`, `"freelance"`) |
| `categories` | `string[]` | Tab filters this project appears under (e.g. `["Full Stack", "AI Powered"]`) |
| `image` | `string` | Path to preview image in `/public/` |
| `link` | `string` | Live deployment URL (opens via `ExternalLink` icon) |
| `github` | `string` | GitHub repo URL (opens via `Code` icon on hover) |
| `techUsed` | `{ name: string, image: string }[]` | Tech stack badges — `image` is a path in `/public/` |

---

## Adding a Project

1. Drop the preview image into `public/` (e.g. `myproject.png`).
2. Open `app/Projects/_components/Cardlist.jsx`.
3. Append a new object to the `projects` array:

```js
{
  image: "/myproject.png",
  link: "https://myproject.vercel.app",
  name: "My Project",
  label: "personal",
  techUsed: [
    { image: "/nextwhite.webp", name: "nextjs" },
    { image: "/tailwind.svg", name: "tailwind" },
  ],
  github: "https://github.com/devbandil12/myproject",
},
```

---

## Files

| File | Role |
|---|---|
| `app/Projects/page.jsx` | Page shell — heading + `<Cardlist />` |
| `app/Projects/_components/Cardlist.jsx` | Data array + animation wrapper |
| `app/Projects/_components/Card.jsx` | Card UI — image, title, tech badges, links |
