# Karat Infinity — Cinematic Module Edition

An editorial Karat Infinity website with 11 module-specific photographic cards, background-video product heroes, a video-enabled homepage product explorer, and light/dark appearances. The existing catalogue, eFactor access, resources, search, and enquiry flow are retained.

## What changed in this edition

- Each software card has its own relevant photograph, a readable dark overlay, image zoom, and action links.
- Each module detail page has a muted, looping background video with its own image fallback and a Play/Pause control. Some related modules share a thematic stock clip; these are illustrative footage, not recordings of the applications.
- The homepage explorer updates the photograph, video, description, and capabilities for all 11 modules.
- Motion adds staggered card entrances, image zooms, hero-title entrances, and animated capability borders alongside the existing scroll reveals and ecosystem animation.
- Catalogue grids switch between three, two, and one columns. Product heroes and the homepage preview stack on smaller screens; headings, filters, media controls, and navigation adapt to narrow viewports.

**Media needs internet access.** Photos and video are served from third-party stock-media CDNs; binary downloads were blocked in the editing environment and are not bundled. If a video is unavailable or playback is blocked, the matching image remains visible. If media is unavailable altogether, the solid background keeps all text and controls readable. Source attribution is in `MEDIA-CREDITS.md`.

Videos load only when their section is visible and motion is permitted. Background tabs pause playback. Reduced-motion, the footer Motion toggle, and browsers that expose data-saving/2G preferences receive still imagery. Mobile browsers may require tapping Play video. The player never enables audio.

To change or self-host media, update `lib/module-media.ts`. Place your own optimized JPG/WebP and H.264 MP4 files in `public/media/` and use paths such as `/media/finance.jpg` and `/media/finance.mp4`. Keep the same module slug keys. For stock footage, retain its original license and attribution record when self-hosting. Rebuild after changing the mapping.

## Start on Windows

1. Extract the ZIP into a folder, for example `C:\Users\DELL\Downloads\Karat-Infinity-Updated`.
2. Open that folder in VS Code. `package.json` must be directly visible in this folder.
3. Open PowerShell in this folder and run:

```powershell
npm ci
npm run dev
```

4. Open http://localhost:3000 in your browser.

If npm says `ENOENT ... package.json`, the terminal is in the wrong folder. Run `dir package.json` to check, then change into the extracted project folder. This ZIP has no additional nested `karat-infinity` folder.

Use Node.js 20 or newer. The project retains Next.js 14.2.35, React 18.3.1, TypeScript, and Tailwind from the supplied package. No application dependencies were added.

## Production

```powershell
npm run build
npm start
```

Open http://localhost:3000. `npm start` serves the static `out` directory with the included Node server. The original `next start` script was incompatible with this project's static-export configuration and has been corrected.

You can also upload the contents of `out/` to a static web host. It includes an `index.html` for each route. Configure your host to use `404.html` for missing pages. Do not open the HTML directly using `file://`: assets and routing expect an HTTP server.

The ZIP includes the verified `out/` export as well as the complete source. `node_modules`, `.next`, Git data, and credentials are excluded. Rebuild after changing content or environment variables. The existing Sites identity is retained; this package does not publish changes to the existing live website.

## Appearance and animation controls

Light is the default appearance. Use the sun/moon control beside search in the header to switch between light and dark. The selected appearance is saved locally and applied before the page renders on the next visit. It also remains active when navigating between pages.

Motion includes staged headline entrances, scroll-triggered reveals, animated connection paths, rotating map rings, a subtle pointer-following map tilt, panel changes, modal entrances, and hover feedback. The footer's “Motion on/off” control pauses the effects and saves that choice. Devices configured for reduced motion automatically receive the reduced-motion experience.

No animation library or third-party script is required. Motion is handled with CSS, IntersectionObserver, and the native Web Animations API. Scroll-progress updates use requestAnimationFrame and passive listeners. All content remains readable when motion is disabled.

The product explorer now covers all 11 applications. The ecosystem map's three buttons select Software, Systems, and Things, with a corresponding destination link. Search also supports Ctrl+K / Cmd+K.

## Main routes

- `/` — Original homepage, ecosystem map, 11-product explorer, guided walkthrough, scenarios, and tabs
- `/software/` — Searchable and filterable catalogue
- `/software/{slug}/` — All 11 existing product detail pages
- `/company/` — Company and operating principles
- `/partnership/` — eFactor and Dude Softwares ecosystem
- `/contact/` — Existing email, telephone, and office contacts
- `/use-cases/` — Four connected workflow groups
- `/pricing/` — Scope enquiry; prices are not invented
- `/request-demo/` — Validated email-draft enquiry
- `/resources/` — Resource search and category filters
- `/resources/getting-started/`
- `/resources/connected-operations/`
- `/resources/edge-to-enterprise/`
- `/resources/faq/` — Expandable frequently asked questions

## Configuration

Copy `.env.example` to `.env.local` if you need to change the eFactor portal destination:

```env
NEXT_PUBLIC_EFACTOR_PORTAL_URL=https://efactor.tech/index.php/dashboard/
```

Product copy lives in `lib/software.ts`; resource copy lives in `lib/resources.ts`. The shared theme is in `app/globals.css`. Fonts are bundled in `public/fonts` with their open font licences.

The business and support contact details are retained from the supplied project. Check these before making the website public. The demo form's recipient is `hello@karatinfinity.com` in `components/EnquiryForm.tsx`.

## Form behavior

The enquiry form validates the name, email, company, product, and message. “Prepare Enquiry” displays a reviewable email draft. “Open Email Draft” opens the visitor's configured email app. The visitor must send the email there. No backend submission, CRM entry, newsletter subscription, or confirmed delivery is implied.

For automatic delivery, connect the form to your own authenticated server or form service and replace the draft flow with real pending/success/error handling. Do not put SMTP passwords or other secrets in `NEXT_PUBLIC_` variables.

## Review and verification

Read `UI-REVIEW.md` for the new visual direction, theme behavior, animation details, and scope limits. Read `BUILD-VERIFICATION.md` for the completed checks.
