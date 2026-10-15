"""Check the publish folder without depending on the private mod checkout."""
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
from xml.etree import ElementTree
from site_metadata import BASE, PAGES

ROOT = Path(__file__).resolve().parents[1]
public = ROOT / 'public'
data = json.loads((public / 'content.js').read_text().removeprefix('window.DRIVABLES = ').removesuffix(';\n'))
assert len(data['entries']) == 43
assert len({e['id'] for e in data['entries']}) == 43
assert sum(e['kind']=='discovery' for e in data['entries']) == data['counts']['placements'] == 36
assert sum(e['kind']=='herd' for e in data['entries']) == 3
assert len({e['profile'] for e in data['entries'] if 'profile' in e}) == 33
assert next(e for e in data['entries'] if e['name']=='Hover Bike')['mapPoint'] is None
assert next(e for e in data['entries'] if e['name']=='Alien Recon Craft')['fuel'] == 'None'
assert next(e for e in data['entries'] if e['name']=='Corvega')['fuel'] == 'Reactor Coolant'
assert '100' in next(e for e in data['entries'] if e['id']=='herd-3')['acquisition']
assert {e['id'] for e in data['entries'] if e['kind']=='reward'} == {'formula-racer','stunt-biplane','monster-truck','go-kart'}
assert len(data['vehicles']) == len({v['profile'] for v in data['vehicles']}) == 33
assert len(data['courses']) == 6
assert len(data['rails']) == 9 and all(len(r['point']) == 2 for r in data['rails'])
assert len(data['arena']) == 12 and all(p['points'] for p in data['arena'])
assert len(data['horseTraits']) == 8
assert {h['survival'] for h in data['horseTraits']} == {0, 50, 75, 100}
for vehicle in data['vehicles']:
    assert vehicle['image'], f'missing vehicle image: {vehicle["name"]}'
    assert (public/'assets'/vehicle['image']).is_file()
    assert (public/'assets'/vehicle['image'].replace('.webp', '-thumb.webp')).is_file()
    assert vehicle['mph'] > 0 and abs(vehicle['mph'] * 1.609344 - vehicle['kmh']) < 0.02
    assert all(any(e['id'] == id for e in data['entries']) for id in vehicle['entries'])
    assert vehicle['sound']['source'] and vehicle['sound']['detail']
    assert 0 <= vehicle['passengers'] <= 3
assert next(v for v in data['vehicles'] if v['profile'] == 46)['sound']['source'] == 'Dodge Ram 1500 Hemi'
assert next(v for v in data['vehicles'] if v['profile'] == 13)['passengers'] == 3
assert next(v for v in data['vehicles'] if v['profile'] == 42)['passengers'] == 0
for course in data['courses']:
    assert len(course['outline']) > 20 and course['metres'] > 0 and course['checkpoints'] > 0


def check_copy(value):
    if isinstance(value, dict):
        for child in value.values(): check_copy(child)
    elif isinstance(value, list):
        for child in value: check_copy(child)
    elif isinstance(value, str):
        assert '—' not in value and ';' not in value, f'copy punctuation: {value}'
        dated = re.search(r'\b(?:19|20)\d{2}\b|\b(?:January|February|March|April|June|July|August|September|October|November|December)\b', value)
        assert not dated or value.strip() == 'Coming December 2026!', f'date in copy: {value}'


check_copy(data)
for entry in data['entries']:
    assert entry['name'] and entry['location'] and entry['acquisition']
    assert entry['image'] is None or (public/'assets'/entry['image']).is_file()
    if entry['mapPoint']:
        assert len(entry['mapPoint']) == 2 and all(isinstance(n, (int,float)) for n in entry['mapPoint'])


class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.ids = set()

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            assert attrs['id'] not in self.ids, f'duplicate id {attrs["id"]}'
            self.ids.add(attrs['id'])
        for key in ('src','href'):
            if key in attrs: self.links.append(attrs[key])

    def handle_data(self, text):
        check_copy(text)
        assert not re.search(r'\bAI\b|artificial intelligence|ChatGPT|Codex', text, re.I), f'unwanted attribution: {text}'


pages = {}
for path in public.glob('*.html'):
    parser = Links(); parser.feed(path.read_text()); pages[path.name] = parser
for name, page in pages.items():
    for raw in page.links:
        url = urlsplit(raw)
        if url.scheme or url.netloc: continue
        assert not url.path.startswith('/'), f'absolute asset path breaks project Pages: {raw}'
        target = public/unquote(url.path) if url.path else public/name
        assert target.exists(), f'missing asset {raw} in {name}'
        if url.fragment and '=' not in url.fragment and target.name in pages:
            assert url.fragment in pages[target.name].ids, f'missing anchor: {raw}'
for name in PAGES:
    text = (public/name).read_text()
    for field in ('name="description"', 'property="og:title"', 'property="og:description"', 'property="og:image"', 'name="twitter:card"'):
        assert text.count(field) == 1, f'missing or duplicated metadata in {name}: {field}'
    canonical = BASE if name == 'index.html' else BASE + name
    assert f'<link rel="canonical" href="{canonical}">' in text
    assert BASE + 'assets/monster-truck.jpg' in text
    for icon in ('favicon-32.png', 'apple-touch-icon.png'):
        assert icon in text and (public/'assets'/icon).is_file()
sitemap = ElementTree.parse(public/'sitemap.xml')
urls = [node.text for node in sitemap.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
assert len(urls) == len(PAGES)
assert set(urls) == {BASE if name == 'index.html' else BASE + name for name in PAGES}
for path in public.rglob('*'):
    assert not path.is_symlink()
    if path.suffix in ('.js','.html','.css'):
        text = path.read_text()
        for forbidden in ('/mnt/d/', 'C:\\Users\\', 'D:\\plugins\\', 'git@github.com', 'localhost:'):
            assert forbidden not in text, f'local value in {path.name}: {forbidden}'
for css in public.glob('*.css'):
    for raw in re.findall(r'url\([\'"]?([^\)\'\"]+)', css.read_text()):
        assert (public/raw).is_file(), f'missing CSS resource: {raw}'
print('Static checks passed: 33 vehicle types, 36 placements, 3 herds, 9 hitching posts, 6 courses, 8 horse profiles. Links, assets and copy conventions pass.')
