"""Copy conventions shared by the public exports."""
import re


def clean_copy(text):
    text = text.replace(' — ', ': ').replace('—', ', ')
    text = re.sub(r';\s*([a-z])', lambda m: '. ' + m[1].upper(), text)
    text = text.replace(';', '.')
    for us, uk in {
        'center': 'centre', 'centered': 'centred', 'centering': 'centring',
        'gray': 'grey', 'armor': 'armour', 'tires': 'tyres', 'tire': 'tyre',
        'behavior': 'behaviour', 'color': 'colour', 'colors': 'colours',
        'fueling': 'fuelling', 'refueling': 'refuelling', 'fueled': 'fuelled',
        'maneuver': 'manoeuvre', 'maneuvers': 'manoeuvres',
        'dumpster': 'skip', 'meters': 'metres', 'meter': 'metre',
    }.items():
        text = re.sub(r'\b' + us + r'\b', lambda m: uk.capitalize() if m[0][0].isupper() else uk, text, flags=re.I)
    return text
