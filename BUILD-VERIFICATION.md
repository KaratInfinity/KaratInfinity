# Verification — Cinematic Module Edition

## Completed checks

- `npm run typecheck`: passed.
- Final `npm run build`: passed compilation, type validation and static generation.
- 28 exported HTML files, including generated 404 variants.
- 1,761 local link and asset references checked; no missing targets.
- All 13 original software detail routes retained, each with its matching image and cinematic hero markup.
- 13 unique module photograph URLs and six thematic video sources mapped across all modules.
- One H1 and responsive viewport metadata present in every exported HTML page.
- Original package.json and package-lock.json unchanged; no new runtime dependency.
- Product content, external application URLs, enquiry logic, and existing routes preserved.
- Source review covers motion preferences, offscreen/background pause, muted inline playback, play rejection, image fallbacks, responsive image sizing, and three/two/one-column layouts.

## Limits

No browser screenshots, viewport measurements, physical-device tests or live video playback tests were performed. Responsive source changes and a successful build do not establish rendered layout acceptance on every device. The media source pages were researched, but binary downloads/playback were blocked in this environment. All module photographs and videos therefore load from external CDNs and require internet access. Some modules share thematic footage (see MEDIA-CREDITS.md); these are not recordings of the actual software.

The site retains a solid readable surface if external imagery is unavailable. The module photograph remains visible when video fails, autoplay is blocked or motion is disabled. Slow connections and data-saving settings suppress video where the browser exposes those preferences.

No live deployment, external eFactor authentication test or email delivery test was performed. The existing live Site is unchanged. The supplied enquiry still creates a mail draft rather than sending via a backend.

## Recommended acceptance on your machine

Run `npm ci` then `npm run dev`, or `npm start` to serve the included production export. Check 320, 390, 768, 1024 and 1440px widths in your browser; both themes; catalogue searching/filtering; all homepage module selections; video pause/resume; Motion off; OS reduced motion; and mobile navigation. Check narrow landscape and 200% zoom before public deployment.
