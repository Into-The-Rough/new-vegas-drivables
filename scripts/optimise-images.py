"""Create lighter homepage images from the existing artwork."""
from pathlib import Path
import subprocess
from PIL import Image

assets = Path(__file__).resolve().parents[1] / 'public/assets'
for name in ('bicycle-races', 'horse-demo', 'donuts'):
    source = assets / f'{name}.jpg'
    target = source.with_suffix('.webp')
    with Image.open(source) as image:
        image.save(target, quality=82, method=6)
    print(f'{name}: {source.stat().st_size:,} → {target.stat().st_size:,} bytes')
with Image.open(assets / 'mojave.webp') as image:
    image.resize((320, 320), Image.Resampling.LANCZOS).save(assets / 'mojave-thumb.webp', quality=80, method=6)
for size, name in ((32, 'favicon-32.png'), (180, 'apple-touch-icon.png')):
    subprocess.run(['convert', '-background', '#090909', '-density', '384', str(assets / 'mark.svg'), '-resize', f'{size}x{size}', str(assets / name)], check=True)
