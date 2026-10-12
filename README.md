# Drivables NVSE website

A standalone GitHub Pages site for the mod. F10-inspired amber panels, an
interactive placement map, searchable acquisition guide, horse herds and a
field manual. No framework, backend, external runtime requests or download CTA.
The author link goes to https://www.nexusmods.com/profile/intotherough.

## Preview

Open `public/index.html` directly, or run `npm run preview` and visit
http://localhost:4173. The site also works beneath a GitHub project path.

Windows entry point: `D:\plugins\drivables-nvse-site\public\index.html`.

## Publish on GitHub Pages

Create a separate public repository for this site, then push this repository's
`main` branch to it. In that repository choose **Settings → Pages → Build and
deployment → Source → GitHub Actions**. Run **Publish field guide** in Actions
if the initial push happened before Pages was enabled. Later pushes to `main`
deploy automatically. Only the `public/` folder becomes the website.

The workflow follows the [official GitHub Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
No GitHub repository has been created or pushed by preparing these files.
The mod source repository is private and is not needed to publish this site.

## Update the guide

The exported `public/content.js` contains public player-facing records only.
To refresh it from the local mod checkout (Python 3 and Pillow required):

```sh
python3 scripts/sync-content.py /path/to/DrivablesNVSE
python3 scripts/build-pages.py
npm run check
```

The export combines the placement audit, horse records, current INI supply
types and the existing map calibration. The restore gates and public editorial
text live in the export script; update those when the implementation changes.
GitHub Actions publishes the committed export without access to private sources.

The guide covers 32 types with discovery, reward or arena routes. The original
Golf Cart profile is omitted; Camp Golf provides the cart discovery.

City-world discoveries use explicitly approximate regional pins with on-page
directions. The Big MT reward never uses its dormant Mojave authoring coordinates.
The location toggle controls the interactive guide only; the complete location
list intentionally contains all spoilers. No console command assumes a user's
load-order prefix. Known travel limitations are described in the player guide.

## Verify

```sh
npm ci
npx playwright install chromium
npm run preview
# in another terminal
npm run check
npm test
```

`BROWSER_EXECUTABLE` can select an existing Chromium/Chrome executable.
`SITE_URL` defaults to `http://127.0.0.1:4173`. Browser checks cover desktop,
tablet, phone, filters, marker selection, URL links, spoilers, storage failure,
no-JavaScript fallback, clipboard and project-path hosting. Screenshots go to
the ignored `artifacts/` folder.

The font is Barlow Condensed, SIL OFL (included). Map and vehicle renders come
from the existing mod workspace; the public credits page records provenance.

Verified 12 October 2026: static content / link checks and the full browser suite
pass at 1440, 1024, 768, 390 and 360 pixels. No horizontal overflow or page errors.
Local file access and a simulated GitHub project path both pass. Actual GitHub
deployment awaits repository creation, pushing and enabling Pages.
