# New Vegas Drivables website

A standalone GitHub Pages site for the mod, using Monofonto and F10-style tabs.
The home page uses artwork from the mod's showcase videos and links into the
beginner guide, placement map, vehicle speeds, driving, stunts, new locations,
races, horse guide, fuel and repairs, and sound mappings. A separate ethos and
development page is authored in `pages/about.html`. The FAQ is authored in
`pages/faq.html`, including release plans, compatibility and optional presentation
settings. The page generator includes it in the main FAQ tab and the standalone
FAQ page, and shares the main navigation with the standalone pages.
No framework, backend or
external runtime requests.
The author links go to https://www.nexusmods.com/profile/intotherough and
https://www.youtube.com/@OliverSwanickProductions.
The main Nexus links use https://www.nexusmods.com/newvegas/mods/100007,
the mod page supplied for launch. Its public availability has not been verified.

## Preview

Open `public/index.html` directly, or run `npm run preview` and visit
http://localhost:4173. The site also works beneath a GitHub project path.

Windows entry point: `D:\plugins\drivables-nvse-site\public\index.html`.

## Publish on GitHub Pages

Repository: https://github.com/Into-The-Rough/new-vegas-drivables

Website: https://into-the-rough.github.io/new-vegas-drivables/

Pages is configured to use GitHub Actions. Push this repository's `main` branch
to `origin` to deploy updates automatically. The **Publish field guide** workflow
can also be run manually. Only the `public/` folder becomes the website.

The workflow follows the [official GitHub Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
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
`sound_sources.py` supplies the public recording descriptions. The active audio
profile selects each description. Passenger counts, boost and parachute support
come directly from the vehicle configuration.
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

The sound audit uses active `DrivablesNVSEAudio.ini` banks and their provenance,
including the fleet choices, tracked choices, motorcycle, DeSoto and Monster
Truck manifests. Older donor recommendations can describe superseded choices.
The driving guide follows the current ride hints and runtime policies. Sound
sources describe the recording basis, independently of fuel type and vehicle lore.

The visual controller reference has twelve ride layouts, Xbox and Steam Deck
labels, and a weapon-drawn mode. `control-data.js` follows `RideControlsPolicy.h`,
the current plane input and parachute input. Shared actions assume the stock
Fallout pad layout. Stunt combinations use the same button renderer. Check the
source again when controls change, including tap/hold behaviour. The loading
options in the FAQ follow `ConfigMenu.cpp` and `LoadingOptions.cpp`. The author's
requested December target is the only exception to the site's no-dates copy rule.

Additional vehicle images use the mod's 24 studio loading-screen renders. They
are exported at their intended display aspect ratio, with small catalogue
thumbnails. Six more renders and two gameplay screenshots complete all 32 vehicle
types. Eight guide stills come from the author's own videos. The source
folders and frame positions are recorded in `scripts/media_sources.py`. Refresh
these with `python3 scripts/import-media.py /path/to/DrivablesNVSE /path/to/Videos`.
The regular content export retains the vehicle image mapping. The screenshots
are normal captured frames with no scene alterations. Images can be enlarged
from the guides, catalogue and placement entries.

The Commonwealth Tank, DeSoto, Interceptor, Marine APC and Monster Truck use
existing asset previews. Pershing and Alien Recon use the author's prepared game
screenshots. The Stunt Biplane is rendered from its shipped mesh with
`scripts/render-biplane.py`. To reproduce it, run the script with
`--dump /path/to/DrivablesNVSE /path/to/site/artifacts/missing-media`, then run
Blender in background mode with `--python scripts/render-biplane.py --
/path/to/site/artifacts/missing-media`. Use Windows paths for Windows Blender.
This needs PyFFI and NumPy for extraction, and does not alter the game assets.
The media importer keeps the bundled images when these local sources are absent.

`nexus-description.txt` contains the short Nexus BBCode draft and selected video,
using the site's GitHub Pages address.

The 18 original PNG description headers are hosted under `public/nexus-headers/`.
Open https://into-the-rough.github.io/new-vegas-drivables/nexus-headers/ for the
previews, direct image URLs and BBCode. Refresh them with
`python3 scripts/import-nexus-headers.py /path/to/Ready-to-Upload`.
The files are copied unchanged. Keep these filenames stable because Nexus
descriptions link to them directly.
