# New Vegas Drivables website

A standalone GitHub Pages site for the mod, using Monofonto and F10-style tabs.
The home page uses artwork from the mod's showcase videos and links into the
placement map, vehicle speeds, stunts, new locations, races, horse guide and
fuel and repairs. No framework, backend or external runtime requests.
The author links go to https://www.nexusmods.com/profile/intotherough and
https://www.youtube.com/@OliverSwanickProductions.

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
types and top speeds, race routes and the existing map calibration. Speeds use
the F10 garage conversion of 70 game units per metre. The restore gates and public
text live in the export scripts. Update those when the implementation changes.
`site_copy.py` applies UK spelling and punctuation conventions to imported copy.
GitHub Actions publishes the committed export without access to private sources.

The guide covers 32 types with discovery, reward or arena routes. The original
Golf Cart profile is omitted. Camp Golf provides the cart discovery.

City-world discoveries use explicitly approximate regional pins with on-page
directions. The Big MT reward never uses its dormant Mojave authoring coordinates.
The location toggle controls the interactive guide only. The complete location
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
tablet, phone, vehicle filters and speed units, stunt controls, course diagrams,
horse traits, marker selection, URL links, spoilers, storage failure,
no-JavaScript fallback, clipboard and project-path hosting. Screenshots go to
the ignored `artifacts/` folder.

The font is the unmodified Monofonto 2.000 by Ray Larabie, matching the
game’s list and label typeface. `public/assets/monofonto-readme.html` preserves
the accompanying original licence and notices. Source:
https://www.abstractfonts.com/font/845 (font and readme in the same package).
Do not replace it with a newer desktop-only release without checking its licence.
Map and vehicle renders come from the existing mod workspace. The home page
uses the original Monster Truck, Bicycle Races, Mmm... Donuts and Companion
Horses Demo thumbnails from the author's video folders. The images are copied
without alteration. Full video files are not bundled. The public credits page
records provenance. Original font licence notices are preserved.

The site is prepared for GitHub Pages. Publication requires creating the
website repository, pushing and enabling Pages.
