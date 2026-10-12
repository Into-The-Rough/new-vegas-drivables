"""Check the publish folder without depending on the private mod checkout."""
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
public = ROOT / 'public'
data = json.loads((public / 'content.js').read_text().removeprefix('window.DRIVABLES = ').removesuffix(';\n'))
assert len(data['entries']) == 42
assert len({e['id'] for e in data['entries']}) == 42
assert sum(e['kind']=='discovery' for e in data['entries']) == data['counts']['placements'] == 36
assert sum(e['kind']=='herd' for e in data['entries']) == 3
assert len({e['profile'] for e in data['entries'] if 'profile' in e}) == 32
assert next(e for e in data['entries'] if e['name']=='Hover Bike')['mapPoint'] is None
assert next(e for e in data['entries'] if e['name']=='Alien Recon Craft')['fuel'] == 'None'
assert next(e for e in data['entries'] if e['name']=='Corvega')['fuel'] == 'Reactor Coolant'
assert '100' in next(e for e in data['entries'] if e['id']=='herd-3')['acquisition']
assert {e['id'] for e in data['entries'] if e['kind']=='reward'} == {'formula-racer','stunt-biplane','monster-truck'}
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
for path in public.rglob('*'):
    assert not path.is_symlink()
    if path.suffix in ('.js','.html','.css'):
        text = path.read_text()
        for forbidden in ('/mnt/d/', 'C:\\Users\\', 'D:\\plugins\\', 'git@github.com', 'localhost:'):
            assert forbidden not in text, f'local value in {path.name}: {forbidden}'
for raw in re.findall(r'url\([\'"]?([^\)\'\"]+)', (public/'style.css').read_text()):
    assert (public/raw).is_file(), f'missing CSS resource: {raw}'
print('Static checks passed: 32 obtainable types, 36 placements, 3 herds; links and assets resolve.')
