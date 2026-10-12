"""Bundle the author's Nexus headers and generate their hosted URLs and BBCode."""
import argparse
from html import escape
from pathlib import Path
import shutil

root = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('source', type=Path)
parser.add_argument('--site-url', default='https://into-the-rough.github.io/new-vegas-drivables/')
args = parser.parse_args()
destination = root / 'public/nexus-headers'
destination.mkdir(parents=True, exist_ok=True)
cards, codes = [], []
for source in sorted(args.source.glob('*.png')):
    shutil.copyfile(source, destination / source.name)
    url = args.site_url.rstrip('/') + '/nexus-headers/' + source.name
    code = '[img]' + url + '[/img]'
    title = source.stem.replace('-', ' ').title().replace('Faq', 'FAQ')
    codes.append(code)
    cards.append(f'<article class="header-sample"><h2>{escape(title)}</h2><a href="{escape(source.name)}"><img src="{escape(source.name)}" alt="{escape(title)}" loading="lazy"></a><p><a href="{escape(url)}">{escape(url)}</a></p><pre tabindex="0">{escape(code)}</pre></article>')
if not cards:
    raise SystemExit('No PNG headers found.')
(destination / 'bbcode.txt').write_text('\n\n'.join(codes) + '\n')
(destination / 'index.html').write_text('''<!doctype html>
<html lang="en-GB"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Nexus headers · New Vegas Drivables</title><link rel="icon" href="../assets/mark.svg"><link rel="stylesheet" href="../style.css"><link rel="stylesheet" href="headers.css"></head>
<body><main class="site-shell headers-page"><p><a href="../index.html">← New Vegas Drivables</a></p><h1>Nexus description headers</h1><p>Copy a header’s BBCode into your Nexus description. Each image also has its own direct link.</p><p><a href="bbcode.txt">All headers as BBCode</a></p>
''' + '\n'.join(cards) + '</main></body></html>\n')
print(f'Bundled {len(cards)} unchanged PNG headers with direct links and BBCode.')
