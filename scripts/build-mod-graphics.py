import argparse
import hashlib
from html import escape
from io import BytesIO
import json
import re
import shutil
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
BASE = 'https://into-the-rough.github.io/new-vegas-drivables'
IVORY = '#E8D8B0'
AMBER = '#E8BC66'


def slug(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')


def image(label, kind, font_path, brand):
    scale = 3
    width, height = 1300, {'title': 240, 'header': 120, 'subheader': 88}[kind]
    im = Image.new('RGBA', (width * scale, height * scale))
    draw = ImageDraw.Draw(im)
    size = {'title': 140, 'header': 84, 'subheader': 60}[kind]
    text = label.upper()
    while True:
        face = ImageFont.truetype(str(font_path), size * scale)
        box = draw.textbbox((0, 0), text, font=face)
        tw, th = box[2] - box[0], box[3] - box[1]
        if tw <= 1140 * scale:
            break
        size -= 1
    x = (width * scale - tw) // 2 - box[0]
    top = (height * scale - th) // 2 if kind != 'title' else 85 * scale
    y = top - box[1]
    draw.text((x + 2 * scale, y + 2 * scale), text, font=face, fill=(15, 14, 11, 180))
    draw.text((x, y), text, font=face, fill=IVORY, stroke_width=scale, stroke_fill=(21, 20, 15, 190))
    if kind == 'title':
        brand_face = ImageFont.truetype(str(font_path), 42 * scale)
        b = draw.textbbox((0, 0), brand.upper(), font=brand_face)
        draw.text(((width * scale - (b[2] - b[0])) // 2 - b[0], 22 * scale - b[1]),
                  brand.upper(), font=brand_face, fill=AMBER)
        draw.line((350 * scale, 220 * scale, 950 * scale, 220 * scale), fill=AMBER, width=2 * scale)
        draw.rectangle((642 * scale, 217 * scale, 658 * scale, 223 * scale), fill=AMBER)
    else:
        left = (width * scale - tw) // 2
        right = left + tw
        yy = height * scale // 2
        edge = (50 if kind == 'header' else 190) * scale
        gap = 32 * scale
        if left - gap > edge:
            draw.line((edge, yy, left - gap, yy), fill=(232, 188, 102, 180), width=2 * scale)
            draw.line((right + gap, yy, width * scale - edge, yy), fill=(232, 188, 102, 180), width=2 * scale)
        if kind == 'header':
            draw.rectangle((edge, yy - 5 * scale, edge + 8 * scale, yy + 5 * scale), fill=AMBER)
            draw.rectangle((width * scale - edge - 8 * scale, yy - 5 * scale, width * scale - edge, yy + 5 * scale), fill=AMBER)
    return im.resize((width, height), Image.Resampling.LANCZOS)


def replace_headings(text, urls):
    replacements = []
    lines = []
    patterns = [
        (re.compile(r'^\[center\]\[size=4\]\[b\](.*?)\[/b\]\[/size\]\[/center\]$'), 'title'),
        (re.compile(r'^\[size=3\]\[b\](.*?)\[/b\]\[/size\]$'), 'header'),
        (re.compile(r'^\[b\]\[(.*?)\]\[/b\]$'), 'subheader'),
        (re.compile(r'^(Optional):$'), 'subheader'),
    ]
    for line in text.splitlines(keepends=True):
        stripped = line.rstrip('\r\n')
        replacement = None
        for pattern, kind in patterns:
            match = pattern.fullmatch(stripped)
            if match:
                label = match.group(1)
                key = (kind, label.lower())
                if key not in urls:
                    raise ValueError(f'No image configured for {kind}: {label}')
                replacement = '[center][img]' + urls[key] + '[/img][/center]'
                replacements.append({'label': label, 'kind': kind, 'url': urls[key],
                                     'original': stripped, 'replacement': replacement})
                break
        lines.append((replacement if replacement else stripped) + line[len(stripped):])
    result = ''.join(lines)
    restored = result
    for row in replacements:
        restored = restored.replace(row['replacement'], row['original'], 1)
    if restored != text:
        raise ValueError('Body text changed while replacing headings')
    return result, replacements


def main():
    parser = argparse.ArgumentParser(description='Build reusable Nexus heading PNGs and replace BBCode headings.')
    parser.add_argument('--config', type=Path, required=True)
    parser.add_argument('--font', type=Path, required=True)
    parser.add_argument('--description', type=Path, required=True)
    parser.add_argument('--output', type=Path, required=True)
    args = parser.parse_args()
    config = json.loads(args.config.read_text())
    original = args.description.read_text()
    work = args.output / '.work'
    upload = args.output / 'Ready to Upload'
    work.mkdir(parents=True, exist_ok=True)
    upload.mkdir(parents=True, exist_ok=True)
    (work / 'original-description.bbcode').write_text(original)
    jobs = [('title', config['title'])]
    jobs += [('header', label) for label in config['headers']]
    jobs += [('subheader', label) for label in config['subheaders']]
    urls, records = {}, []
    for kind, label in jobs:
        if kind == 'title':
            relative = f"mod-graphics/mods/{config['slug']}/{config['version']}/title.png"
        else:
            relative = f"mod-graphics/shared/{config['style']}/{config['version']}/{kind}s/{slug(label)}.png"
        destination = ROOT / 'public' / relative
        destination.parent.mkdir(parents=True, exist_ok=True)
        im = image(label, kind, args.font, config['brand'])
        buffer = BytesIO()
        im.save(buffer, format='PNG', optimize=True)
        if kind != 'title' and destination.exists() and destination.read_bytes() != buffer.getvalue():
            raise ValueError(f'Shared image would change: {relative}. Use a new style version.')
        destination.write_bytes(buffer.getvalue())
        with Image.open(destination) as check:
            check.load()
            assert check.mode == 'RGBA' and check.getextrema()[3][0] == 0
        url = BASE + '/' + relative
        urls[(kind, label.lower())] = url
        shutil.copyfile(destination, upload / (slug(label) + '.png'))
        records.append({'kind': kind, 'label': label, 'path': relative, 'url': url,
                        'dimensions': list(im.size), 'bytes': destination.stat().st_size,
                        'sha256': hashlib.sha256(destination.read_bytes()).hexdigest()})
    result, replaced = replace_headings(original, urls)
    description = args.output / 'nexus_description.bbcode'
    description.write_text(result)
    (args.output / 'header-bbcode.txt').write_text('\n\n'.join('[center][img]' + row['url'] + '[/img][/center]' for row in records) + '\n')
    manifest = {'mod': config['slug'], 'brand': config['brand'], 'font': 'Gothic 821 Condensed',
                'style': config['style'], 'version': config['version'], 'ivory': IVORY, 'amber': AMBER,
                'original_description_sha256': hashlib.sha256(original.encode()).hexdigest(),
                'images': records, 'headings_replaced': replaced, 'body_preserved': True}
    (work / 'export-settings.json').write_text(json.dumps(manifest, indent=2))
    gallery = Image.new('RGB', (1300, sum(row['dimensions'][1] for row in records)), '#28282d')
    y = 0
    for row in records:
        im = Image.open(ROOT / 'public' / row['path'])
        gallery.paste(im, (0, y), im)
        y += im.height
    gallery.save(work / 'headers-preview.jpg', quality=95)
    gallery.resize((650, gallery.height // 2), Image.Resampling.LANCZOS).save(work / 'headers-preview-small.jpg', quality=95)
    shutil.copyfile(args.config, work / 'mod-config.json')
    public_root = ROOT / 'public/mod-graphics'
    catalog_path = public_root / 'catalog.json'
    catalog = json.loads(catalog_path.read_text()) if catalog_path.exists() else {'mods': {}}
    catalog['mods'][config['slug']] = {'title': config['title'], 'brand': config['brand'], 'images': records}
    catalog_path.write_text(json.dumps(catalog, indent=2))
    cards = []
    seen = set()
    for mod in catalog['mods'].values():
        cards.append('<h2>' + escape(mod['title']) + '</h2>')
        for row in mod['images']:
            if row['url'] in seen:
                continue
            seen.add(row['url'])
            relative = row['path'].removeprefix('mod-graphics/')
            code = '[center][img]' + row['url'] + '[/img][/center]'
            cards.append(f'<article class="header-sample"><h3>{escape(row["label"])}</h3>'
                         f'<a href="{escape(relative)}"><img src="{escape(relative)}" alt="{escape(row["label"])}" loading="lazy"></a>'
                         f'<p><a href="{escape(row["url"])}">Direct image</a></p><pre tabindex="0">{escape(code)}</pre></article>')
    css = (ROOT / 'public/nexus-headers/headers.css').read_text()
    (public_root / 'headers.css').write_text(css)
    (public_root / 'index.html').write_text('<!doctype html>\n<html lang="en-GB"><head><meta charset="utf-8">'
        '<meta name="viewport" content="width=device-width,initial-scale=1"><title>ITR Modding · Mod page graphics</title>'
        '<link rel="stylesheet" href="../style.css"><link rel="stylesheet" href="headers.css"></head>'
        '<body><main class="site-shell headers-page"><p><a href="../index.html">← New Vegas Drivables</a></p>'
        '<h1>ITR Modding: page graphics</h1><p>Reusable section headers and individual mod titles. Copy the BBCode beneath an image into your mod description.</p>'
        '<p>Shared graphics have versioned URLs so existing descriptions keep their chosen style.</p>'
        + '\n'.join(cards) + '</main></body></html>\n')
    print(f'Built {len(records)} header images; replaced {len(replaced)} headings; body preserved.')


if __name__ == '__main__':
    main()
