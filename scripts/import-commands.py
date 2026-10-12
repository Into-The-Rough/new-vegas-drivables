"""Refresh command signatures from a DrivablesNVSE checkout."""
import argparse
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('source', type=Path)
args = parser.parse_args()
notes = json.loads((ROOT / 'pages/command-notes.json').read_text())
commands = []
for filename in ('DrvCommands.cpp', 'ModderCommands.cpp', 'RampCommands.cpp'):
    source = (args.source / 'commands' / filename).read_text()
    params = {}
    for name, body in re.findall(r'constexpr (?:NVSE)?ParamInfo (\w+)\[\]\s*=\s*\{(.*?)\};', source, re.S):
        params[name] = [dict(name=n, type=t, optional=o == '1') for n, t, o in
                       re.findall(r'\{\s*"([^"]+)"\s*,\s*k(?:NVSE)?ParamType_(\w+)\s*,\s*([01])\s*\}', body)]
    registered = set(re.findall(r'Register(?:Typed)?Command\(&kCommandInfo_(\w+)', source))
    for macro, name, parent, parameters in re.findall(r'(DEFINE_\w+)\((\w+),\s*([01]),\s*(\w+)\)', source):
        if name not in registered or name.startswith('DrvReserved'):
            continue
        note = notes[name]
        arguments = [] if parameters == 'nullptr' else params[parameters]
        prefix = note.get('caller', '') + '.' if parent == '1' else ''
        syntax = prefix + name + ''.join(' ' + ('[' + a['name'] + ']' if a['optional'] else '<' + a['name'] + '>') for a in arguments)
        commands.append(dict(name=name, syntax=syntax, parameters=arguments,
                             condition=macro == 'DEFINE_CMD_COND_PLUGIN',
                             requiredReference=parent == '1', source='commands/' + filename,
                             **note))
assert {c['name'] for c in commands} == set(notes), 'command notes and registrations differ'
assert len({c['name'] for c in commands}) == len(commands)
(ROOT / 'pages/commands.json').write_text(json.dumps(sorted(commands, key=lambda c: c['name'].lower()), indent=2) + '\n')
print(f'Imported {len(commands)} commands. Reserved no-op slots excluded.')
