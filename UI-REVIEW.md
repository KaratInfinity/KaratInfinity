# Review and changes — Cinematic Module Edition

## Findings in the supplied ZIP

The project uses Next.js static export with a shared software catalogue and 13 data-driven module routes. The public assets contained a logo and local fonts, but no module photography or footage. Software cards were plain surfaces; product heroes and the homepage explorer lacked subject-specific imagery. Light/dark themes, animated ecosystem graphics, scroll reveals, search/filtering, and a motion preference already existed.

Responsive breakpoints already covered the main pages. Remaining weaknesses included grid children with intrinsic minimum widths, very small mobile navigation labels and controls, and no responsive media layout or playback lifecycle.

## Implemented changes

| Area | Update |
| --- | --- |
| Module catalogue | 13 separate photographs, consistent dark overlays, readable content, responsive cards, hover zoom and entrance animation |
| Product routes | Shared cinematic hero, muted looping footage, module-specific image fallback, playback control, overview anchor |
| Homepage explorer | Selected module controls background photo/video and existing capability content |
| Motion | Respects OS preference and existing persisted site setting; offscreen/background playback pauses; capability and outcome reveals |
| Responsive styling | Three/two/one-column catalogue, stacked preview and hero, wrapping breadcrumbs, fluid headings, touch targets, shrink-safe grid children |
| Performance | Responsive image sources, lazy card images, prioritized hero photo, only visible eligible videos mount, no new runtime libraries |
| Maintainability | One media manifest and one shared player; original product data and destination links retained |

The surrounding light/dark brand remains intact; photographic surfaces deliberately keep white foreground text in either theme. The footage is illustrative stock media rather than a working software demo. Related modules can share a relevant clip.

## Delivery and limits

See BUILD-VERIFICATION.md for checks actually performed. Source and build validation are not browser/physical-device acceptance. Hosted media byte downloads and playback could not be verified from this environment. Internet is required for stock media. This ZIP update does not deploy to the existing live website. The enquiry form still prepares an email draft; no mail server, login system, or application backend was added.

---

## Previous-edition design notes (retained for context)

# Karat Infinity — Original Design Edition

This revision replaces the reference-led composition with a distinct Karat Infinity identity. It retains the existing company, product, resource, and enquiry functionality.

## Visual direction

The new identity is editorial and architectural: an asymmetric headline, a diagram explaining the ecosystem, clear margins, fine borders, and a deliberate mix of open layouts and contained surfaces. Light appearance is the default. Emerald provides the main accent; warm orange highlights selected details and the closing section. Typography combines the locally bundled DM Sans and DM Mono families with a system serif for selected italic phrases.

The page no longer follows the previous centered hero and framed software-demo layout. Its new sequence is:

1. A large left-aligned headline beside an interactive three-domain ecosystem map.
2. Three differentiated introductions to Dude Softwares, Karat Infinity systems, and eFactor connected products.
3. A full-width explorer for all 13 applications, with a horizontal application selector and a capability panel.
4. A dark workflow section with a vertical scenario selector and next/previous controls.
5. An open editorial statement of the company’s approach.
6. A split partner section with selectable digital and physical ecosystem panels.
7. Journal-style resource cards.
8. An oversized conversation prompt with a circular link.
9. A reorganized footer with the motion control and a large typographic closing line.

The header uses one row: the brand, grouped navigation, contact, search, theme control, and enquiry action. On smaller screens, navigation moves into a collapsible panel. Product, company, partnership, use-case, pricing, contact, resource, FAQ, and form pages all use the shared theme variables.

## Light and dark appearances

| Role | Light | Dark |
| --- | --- | --- |
| Canvas | #F8F9F7 | #111915 |
| Primary text | #162A22 | #EAF0E8 |
| Muted text | #65736B | #A1B2A6 |
| Main surface | #FFFFFF | #18231C |
| Secondary surface | #EDF1ED | #1D2A21 |
| Emerald accent | #267253 | #A6D4A7 |
| Orange accent | #DC623B | #EFA37C |

The workflow section deliberately remains a deep contrasting surface in both appearances. The theme control persists an explicit light/dark choice under `karat-theme` in localStorage. A small script in the document head applies that choice before hydration. Storage failure falls back safely. This script is included in every exported route.

## Motion design

| Element | Behavior |
| --- | --- |
| Hero headline | Three clipped lines enter in sequence |
| Supporting hero elements | Soft entrance with a short delay |
| Ecosystem map | Slowly rotating dashed rings and an animated connection path |
| Pointer interaction | Small, bounded tilt on the map for mouse users |
| Scroll | One-time reveals with eased vertical movement and light blur |
| Reading position | Thin progress indicator at the top edge |
| Product and scenario changes | Brief, deliberate panel entrance |
| Dialogs and navigation panels | Short eased entrances |
| Cards and links | Subtle elevation and directional arrow feedback |
| Appearance change | Short surface-color transitions |

No scroll-jacking or autoplay video is used. The page keeps ordinary scrolling and native link behavior. Pointer tilt is restricted to mouse input. Scroll-driven effects use passive listeners and requestAnimationFrame. IntersectionObserver instances and Web Animations are cleaned up when the route or motion preference changes.

“Motion on/off” in the footer controls the animation preference using `karat-motion`. A device-level reduced-motion setting overrides animated behavior; the footer explains that state. Content does not depend on an animation finishing to become usable. Interactive controls remain functional when motion is off.

## Preserved functionality

- All 13 original software product records and detail pages.
- Search, catalogue filters, resource filters, and meaningful empty states.
- The three-step walkthrough dialog.
- Workflow carousel, now also selectable using named scenario buttons.
- Keyboard-operable ecosystem tabs.
- Resource articles and expandable FAQs.
- Existing company, partnership, and contact information.
- External eFactor access links.
- Required-field validation and a reviewable email enquiry draft.
- Next.js static export and the included production static server.

No application dependencies were added. Fonts remain bundled locally. The original supplied brand image remains in the header and footer.

## File guide

- `app/globals.css`: shared theme tokens, layouts, breakpoints, and animation keyframes.
- `components/Experience.tsx`: theme and motion controls, saved preferences, progress, and scroll reveals.
- `lib/appearance.ts`: initial appearance script.
- `components/Constellation.tsx`: interactive ecosystem diagram and pointer tilt.
- `app/page.tsx`: the original homepage composition.
- `components/SiteHeader.tsx`: new navigation layout and search.
- `components/EcosystemPreview.tsx`: all-13-application explorer.
- `components/HomeInteractions.tsx`: walkthrough, scenarios, and partner tabs.
- `components/UiIcon.tsx`: shared SVG icons.
- `components/ResourceCards.tsx`, `CallToAction.tsx`, and `SiteFooter.tsx`: redesigned lower-page components.

## Scope and verification

This remains a marketing website for the supplied product catalogue. Its map and product explorer explain the ecosystem; they are not live ERP dashboards. The enquiry form prepares an email draft for the visitor to send. Automatic delivery still needs a server integration.

The build and source checks are recorded in `BUILD-VERIFICATION.md`. These checks do not establish browser rendering accuracy, physical-device behavior, or delivered email. The updated package has not been published over the existing live Site.
