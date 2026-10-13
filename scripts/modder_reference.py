"""Static reference markup shared by the draft and later published guide."""
from html import escape
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def content():
    entries = json.loads((ROOT / 'pages/commands.json').read_text())
    cards = []
    for entry in entries:
        name = escape(entry['name'])
        params = ''.join(f'<li><code>{escape(p["name"])}</code> · {escape(p["type"])}' + (' · optional' if p['optional'] else ' · required') + '</li>' for p in entry['parameters'])
        example = f'<div class="code-sample"><pre><code>{escape(entry["example"])}</code></pre><button type="button" data-copy>Copy example</button></div>' if entry.get('example') else ''
        usage = 'Console only' if entry.get('consoleOnly') else 'Script / console'
        if entry['condition']:
            usage += ' / condition'
        cards.append(f'''<details class="command-entry" id="{name}" data-group="{escape(entry['group'])}" data-condition="{str(entry['condition']).lower()}">
<summary><span>{name}</span><span class="command-group">{escape(entry['group'])}</span></summary>
<div class="command-body"><p>{escape(entry['description'])}</p><div class="code-sample"><pre><code>{escape(entry['syntax'])}</code></pre><button type="button" data-copy>Copy syntax</button></div>
<dl><dt>Returns</dt><dd>{escape(entry['returns'])}</dd><dt>Use</dt><dd>{usage}</dd></dl>
{'<ul class="argument-list">' + params + '</ul>' if params else '<p class="reference-note">No arguments.</p>'}
<p class="reference-note">{escape(entry.get('note', ''))}</p>{example}<a class="permalink" href="#{name}">Link to {name} →</a></div></details>''')
    body = (ROOT / 'pages/modders.html').read_text()
    return body.replace('<!--command-reference-->', '\n'.join(cards)).replace('{{command-count}}', str(len(entries)))
