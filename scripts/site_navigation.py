"""Shared section hierarchy for the interactive guide and companion pages."""
from html import escape

SECTIONS = (
    ('home', 'Home', 'home', ()),
    ('vehicles', 'Vehicles', 'vehicles', (('vehicles', 'Catalogue'), ('placements', 'Placements'), ('sounds', 'Sound'))),
    ('guides', 'Guides', 'start', (('start', 'Start here'), ('driving', 'Controls'), ('manual', 'Fuel & repairs'), ('horses', 'Horse guide'))),
    ('activities', 'Activities', 'races', (('races', 'Races'), ('stunts', 'Stunts'), ('worlds', 'New locations'))),
    ('modders', 'Modders', 'modders', ()),
    ('faq', 'FAQ', 'faq', ()),
)


def navigation(current='home', index=False):
    selected = next((key for key, _, target, children in SECTIONS
                     if current == target or any(page == current for page, _ in children)), '')

    def link(page, label, attributes=''):
        local_view = index and page != 'modders'
        href = '#' + page if local_view else page + '.html' if page in ('modders', 'faq') else 'index.html#' + page
        view = f' data-view="{page}"' if local_view else ''
        return f'<a href="{href}" data-page="{page}"{view}{attributes}>{escape(label)}</a>'

    primary, secondary, fallback = [], [], []
    for key, label, target, children in SECTIONS:
        active = (' aria-current="true"' if children else ' aria-current="page"') if key == selected else ''
        identity = f' id="tab-{target}"' if not children and index else ''
        primary.append(link(target, label, f' data-section="{key}"' + identity + active))
        if children:
            items = []
            for page, child_label in children:
                identity = f' id="tab-{page}"' if index else ''
                active = ' aria-current="page"' if page == current else ''
                items.append(link(page, child_label, identity + active))
                fallback.append(link(page, child_label))
            secondary.append(f'<nav class="section-nav" data-section-nav="{key}" aria-label="{label}"' + ('' if key == selected else ' hidden') + '>' + ''.join(items) + '</nav>')
    return f'''<div class="site-navigation" data-current-page="{current}">
<nav class="primary-nav" aria-label="Main sections">{''.join(primary)}</nav>
{''.join(secondary)}
<noscript><nav class="navigation-fallback" aria-label="All guide pages">{''.join(fallback)}</nav></noscript>
</div>'''
