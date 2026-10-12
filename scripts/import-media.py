"""Import vehicle renders and gameplay stills without changing the mod or videos."""
import argparse
import json
from pathlib import Path
import subprocess
from media_sources import CAPTURES, apply_images, export_renders, export_extra_images

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('source', type=Path)
parser.add_argument('videos', type=Path)
args = parser.parse_args()
assets = ROOT / 'public/assets'
export_renders(args.source, assets)
export_extra_images(args.source, args.videos, assets)
(assets / 'screens').mkdir(exist_ok=True)
for name, (folder, seconds) in CAPTURES.items():
    videos = sorted((args.videos / folder).glob('*.mp4'))
    if len(videos) != 1:
        raise ValueError(f'expected one video in {folder}')
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-ss', str(seconds), '-i', str(videos[0]),
                    '-frames:v', '1', '-vf', 'scale=1440:-2', '-c:v', 'libwebp', '-quality', '88',
                    '-y', str(assets / 'screens' / f'{name}.webp')], check=True)
path = ROOT / 'public/content.js'
data = json.loads(path.read_text().removeprefix('window.DRIVABLES = ').removesuffix(';\n'))
apply_images(data)
path.write_text('window.DRIVABLES = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n')
print('Imported images for all 32 vehicles with thumbnails and eight guide stills.')
