window.DRIVABLES = {
  "counts": {
    "vehicles": 32,
    "placements": 36,
    "herds": 3
  },
  "map": {
    "bounds": {
      "west": -143360,
      "north": 147456,
      "east": 106496,
      "south": -102400
    },
    "border": 0.1015625,
    "area": 0.796875,
    "landmarks": [
      {
        "name": "Goodsprings",
        "id": "000CDF51",
        "x": -70992.0,
        "y": 2560.0,
        "z": 9344.0
      },
      {
        "name": "Primm",
        "id": "000CDF46",
        "x": -56752.0,
        "y": -52992.0,
        "z": 5824.0
      },
      {
        "name": "Novac",
        "id": "0009289B",
        "x": 22204.92,
        "y": -32624.34,
        "z": 7057.46
      },
      {
        "name": "Jacobstown",
        "id": "000CDF57",
        "x": -108427.35,
        "y": 96469.77,
        "z": 15728.18
      },
      {
        "name": "Nellis Air Force Base",
        "id": "000CDEFA",
        "x": 34322.0,
        "y": 125976.0,
        "z": 4373.0
      },
      {
        "name": "Hoover Dam",
        "id": "00135E5F",
        "x": 74712.0,
        "y": 24848.0,
        "z": -172.04
      },
      {
        "name": "Boulder City",
        "id": "000CDF06",
        "x": 51202.46,
        "y": 22127.26,
        "z": 8037.39
      },
      {
        "name": "Camp Searchlight",
        "id": "000CDF02",
        "x": 26318.76,
        "y": -96652.16,
        "z": 6991.27
      },
      {
        "name": "Camp McCarran",
        "id": "000F3775",
        "x": -19736.0,
        "y": 75896.0,
        "z": 4440.0
      }
    ]
  },
  "entries": [
    {
      "id": "v-000c3b",
      "profile": 37,
      "name": "B-29 Bomber",
      "category": "Air",
      "kind": "discovery",
      "ref": "000C3B",
      "location": "Nellis: southwest threshold of the long runway",
      "state": "Quest reward",
      "condition": "Working. Hidden until Volare! succeeds",
      "reserve": "Empty: 0 / 260 L",
      "acquisition": "Complete Volare! successfully, then supply Jerry Cans. Free and unowned. Existing fuel and damage are preserved.",
      "fuel": "Jerry Cans",
      "repair": 0,
      "tools": 0,
      "region": "Mojave",
      "mapPoint": [
        37935.5,
        133281.296875
      ],
      "approximate": false,
      "parts": "No parts",
      "image": "fleet/b29.webp",
      "note": "The Volare! unlock is implemented. A reported runway / ground-support fault still affects takeoff."
    },
    {
      "id": "v-000c40",
      "profile": 3,
      "name": "Bicycle",
      "category": "Bikes",
      "kind": "discovery",
      "ref": "000C40",
      "location": "Primm: beside the dead courier",
      "state": "Ready to ride",
      "condition": "Working. Laid on its side",
      "reserve": "No fuel",
      "acquisition": "Ride it. Free and unowned.",
      "fuel": "None",
      "repair": 0,
      "tools": 0,
      "region": "Mojave",
      "mapPoint": [
        -53610.0,
        -53660.0
      ],
      "approximate": false,
      "parts": "No parts",
      "image": "fleet/rustybicycle.webp",
      "note": ""
    },
    {
      "id": "v-000c42",
      "profile": 4,
      "name": "Motorcycle",
      "category": "Bikes",
      "kind": "discovery",
      "ref": "000C42",
      "location": "Goodsprings: outside the Prospector Saloon",
      "state": "Repair needed",
      "condition": "Seized engine. Tilted resting pose",
      "reserve": "Empty: 0 / 30 L",
      "acquisition": "Repair 100 → Restore Engine. No parts, toolbox or caps consumed. Then add Jerry Cans.",
      "fuel": "Jerry Cans",
      "repair": 100,
      "tools": 0,
      "region": "Mojave",
      "mapPoint": [
        -67960.0,
        2890.0
      ],
      "approximate": false,
      "parts": "No parts",
      "image": "fleet/motorcycle.webp",
      "note": ""
    },
    {
      "id": "v-000c49",
      "profile": 6,
      "name": "Skateboard",
      "category": "Oddballs",
      "kind": "discovery",
      "ref": "000C49",
      "location": "Nellis: beside rubble near the school",
      "state": "Ready to ride",
      "condition": "Working",
      "reserve": "No fuel",
      "acquisition": "Ride it. Free and unowned. Reaching Nellis is the only location obstacle.",
      "fuel": "None",
      "repair": 0,
      "tools": 0,
      "region": "Mojave",
      "mapPoint": [
        28690.0,
        141550.0
      ],
      "approximate": false,
      "parts": "No parts",
      "image": "fleet/skateboard.webp",
      "note": ""
    },
    {
      "id": "v-000c4f",
      "profile": 7,
      "name": "Old Rusty Car",
      "category": "Cars",
      "kind": "discovery",
      "ref": "000C4F",
      "location": "El Dorado gas & service: forecourt canopy beside the bin",
      "state": "Repair needed",
      "condition": "Seized engine",
      "reserve": "Empty: 0 / 55 L",
      "acquisition": "Repair 75 → Restore Engine. No parts, toolbox or caps consumed. Then add Jerry Cans.",
      "fuel": "Jerry Cans",
      "repair": 75,
      "tools": 0,
      "region": "Mojave",
      "mapPoint": [
        40810.0,
        -330.0
      ],
      "approximate": false,
      "parts": "No parts",
      "image": "fleet/oldrustycar.webp",
      "note": ""
    },
    {
      "id": "v-000c51",
      "profile": 14,
      "name": "Patrol Car",
      "category": "Cars",
      "kind": "discovery",
      "ref": "000C51",
      "location": "Searchlight: south-side passage beside the police station",
      "state": "Repair needed",
      "condition": "Damaged ignition",
      "reserve": "Empty: 0 / 60 L",
      "acquisition": "Repair 75 → Restore Engine. No parts, toolbox or caps consumed. Then add Jerry Cans.",
      "fuel": "Jerry Cans",
      "repair": 75,
      "tools": 0,
      "region": "Mojave",
      "mapPoint": [
        29708.6796875,
        -95610.6796875
      ],
      "approximate": false,
      "parts": "No parts",
      "image": "fleet/patrolcar.webp",
      "note": ""
    },
    {
      "id": "v-000c53",
      "profile": 12,
      "name": "Wheelchair",
      "category": "Oddballs",
      "kind": "discovery",
      "ref": "000C53",
      "location": "New Vegas Medical Clinic: east of the entrance",
      "state": "Ready to ride",
      "condition": "Working",
      "reserve": "No fuel",
      "acquisition": "Ride it. Free and unowned.",
      "fuel": "None",
      "repair": 0,
      "tools": 0,
      "region": "Mojave",
      "mapPoint": [
        1820.0,
        108250.0
      ],
      "approximate": false,
      "parts": "No parts",
      "image": "fleet/wheelchair.webp",
      "note": ""
    },
    {
      "id": "v-000c16",
      "profile": 35,
      "name": "Old Rusty Boat",
      "category": "Water",
      "kind": "discovery",
      "ref": "000C16",
      "location": "Cottonwood Cove: existing launch",
      "state": "Ready to ride",
      "condition": "Working",
      "reserve": "Random: 4–18.985 / 30 L",
      "acquisition": "Pilot it. Free and unowned. No restoration or key. Bring Jerry Cans for further travel.",
      "fuel": "Jerry Cans",
      "repair": 0,
      "tools": 0,
      "region": "Mojave",
      "mapPoint": [
        66500.0,
        -91285.0
      ],
      "approximate": false,
      "parts": "No parts",
      "image": "fleet/boat02.webp",
      "note": ""
    },
    {
      "id": "v-000c5a",
      "profile": 38,
      "name": "Camp Golf Cart",
      "category": "Cars",
      "kind": "discovery",
      "ref": "000C5A",
      "location": "Camp Golf: resort forecourt, southeast of the main entrance",
      "state": "Ready to ride",
      "condition": "Working. NCR-owned",
      "reserve": "Empty: 0 / 200 charge units",
      "acquisition": "Recharge with Energy Cells/MFCs. Steal unless native ownership permits use. No custom NCR quest, purchase or reputation unlock.",
      "fuel": "Energy Cells / MFCs",
      "repair": 0,
      "tools": 0,
      "region": "Mojave",
      "mapPoint": [
        34650.0,
        67600.0
      ],
      "approximate": false,
      "parts": "No parts",
      "image": "fleet/golfcart.webp",
      "note": ""
    },
    {
      "id": "v-000c5f",
      "profile": 20,
      "name": "Vertibird",
      "category": "Air",
      "kind": "discovery",
      "ref": "000C5F",
      "location": "Crashed Vertibird site: replaces the vanilla wreck",
      "state": "Repair needed",
      "condition": "Damaged flight controls. Tilted crash pose",
      "reserve": "Empty: 0 / 120 L",
      "acquisition": "Repair 100 + 1 Sensor Module in player inventory → Install Part. Module consumed. No toolbox/caps. Recovers onto clear ground northeast of the crater, then needs Jerry Cans.",
      "fuel": "Jerry Cans",
      "repair": 100,
      "tools": 0,
      "region": "Mojave",
      "mapPoint": [
        5262.93994140625,
        -122491.9375
      ],
      "approximate": false,
      "parts": "1 Sensor Module",
      "image": "fleet/vertibird.webp",
      "note": ""
    },
    {
      "id": "v-000c5d",
      "profile": 14,
      "name": "Patrol Car",
      "category": "Cars",
      "kind": "discovery",
      "ref": "000C5D",
      "location": "Nevada Highway Patrol station: outside, between two wrecks",
      "state": "Repair needed",
      "condition": "Damaged ignition",
      "reserve": "Empty: 0 / 60 L",
      "acquisition": "Repair 75 → Restore Engine. No parts, toolbox or caps consumed. Then add Jerry Cans.",
      "fuel": "Jerry Cans",
      "repair": 75,
      "tools": 0,
      "region": "Mojave",
      "mapPoint": [
        -64340.0,
        -73744.0
      ],
      "approximate": false,
      "parts": "No parts",
      "image": "fleet/patrolcar.webp",
      "note": ""
    },
    {
      "id": "v-000c1d",
      "profile": 36,
      "name": "Small Prop Plane",
      "category": "Air",
      "kind": "discovery",
      "ref": "000C1D",
      "location": "Searchlight Airport: replaces one scenery plane",
      "state": "Ready to ride",
      "condition": "Working",
      "reserve": "Empty: 0 / 60 L",
      "acquisition": "Add Jerry Cans, then fly. Free and unowned. No skill or quest gate.",
      "fuel": "Jerry Cans",
      "repair": 0,
      "tools": 0,
      "region": "Mojave",
      "mapPoint": [
        37560.61328125,
        -119335.1171875
      ],
      "approximate": false,
      "parts": "No parts",
      "image": "fleet/smallplane.webp",
      "note": ""
    },
    {
      "id": "v-000c45",
      "profile": 6,
      "name": "Skateboard",
      "category": "Oddballs",
      "kind": "discovery",
      "ref": "000C45",
      "location": "Freeside north gate: behind/right of skip",
      "state": "Ready to ride",
      "condition": "Working",
      "reserve": "No fuel",
      "acquisition": "Ride it. Free and unowned.",
      "fuel": "None",
      "repair": 0,
      "tools": 0,
      "region": "Mojave",
      "mapPoint": [
        -12069.88,
        113110.18
      ],
      "approximate": true,
      "parts": "No parts",
      "image": "fleet/skateboard.webp",
      "note": ""
    },
    {
      "id": "v-000c47",
      "profile": 6,
      "name": "Skateboard",
      "category": "Oddballs",
      "kind": "discovery",
      "ref": "000C47",
      "location": "Freeside east gate: skip area",
      "state": "Ready to ride",
      "condition": "Working",
      "reserve": "No fuel",
      "acquisition": "Ride it. Free and unowned.",
      "fuel": "None",
      "repair": 0,
      "tools": 0,
      "region": "Mojave",
      "mapPoint": [
        -7262.540000000001,
        103497.45
      ],
      "approximate": true,
      "parts": "No parts",
      "image": "fleet/skateboard.webp",
      "note": ""
    },
    {
      "id": "v-000c4b",
      "profile": 18,
      "name": "Pogo Stick",
      "category": "Oddballs",
      "kind": "discovery",
      "ref": "000C4B",
      "location": "Westside: rubbish area near Miguel’s Pawn Shop",
      "state": "Ready to ride",
      "condition": "Working. Laid on its side",
      "reserve": "No fuel",
      "acquisition": "Ride it. Free and unowned.",
      "fuel": "None",
      "repair": 0,
      "tools": 0,
      "region": "Mojave",
      "mapPoint": [
        -36503.2,
        107996.42
      ],
      "approximate": true,
      "parts": "No parts",
      "image": "fleet/pogo.webp",
      "note": ""
    },
    {
      "id": "v-000c55",
      "profile": 12,
      "name": "Wheelchair",
      "category": "Oddballs",
      "kind": "discovery",
      "ref": "000C55",
      "location": "Camp McCarran: medical tent beside the vanilla chair",
      "state": "Ready to ride",
      "condition": "Working",
      "reserve": "No fuel",
      "acquisition": "Ride it. Free and unowned.",
      "fuel": "None",
      "repair": 0,
      "tools": 0,
      "region": "Mojave",
      "mapPoint": [
        -21536.0,
        74296.0
      ],
      "approximate": true,
      "parts": "No parts",
      "image": "fleet/wheelchair.webp",
      "note": ""
    },
    {
      "id": "v-000c57",
      "profile": 3,
      "name": "Bicycle",
      "category": "Bikes",
      "kind": "discovery",
      "ref": "000C57",
      "location": "Camp McCarran: parking barrier near the gate",
      "state": "Ready to ride",
      "condition": "Working. Propped against the barrier cabinet",
      "reserve": "No fuel",
      "acquisition": "Ride it. Free and unowned.",
      "fuel": "None",
      "repair": 0,
      "tools": 0,
      "region": "Mojave",
      "mapPoint": [
        -17936.0,
        77496.0
      ],
      "approximate": true,
      "parts": "No parts",
      "image": "fleet/rustybicycle.webp",
      "note": ""
    },
    {
      "id": "v-000c4d",
      "profile": 8,
      "name": "Unicycle",
      "category": "Oddballs",
      "kind": "discovery",
      "ref": "000C4D",
      "location": "Freeside: skip northwest of the Silver Rush",
      "state": "Ready to ride",
      "condition": "Working. Laid on its side",
      "reserve": "No fuel",
      "acquisition": "Ride it. Free and unowned.",
      "fuel": "None",
      "repair": 0,
      "tools": 0,
      "region": "Mojave",
      "mapPoint": [
        -12062.54,
        100397.45
      ],
      "approximate": true,
      "parts": "No parts",
      "image": "fleet/unicycle.webp",
      "note": ""
    },
    {
      "id": "v-000ca3",
      "profile": 10,
      "name": "Corvega",
      "category": "Cars",
      "kind": "discovery",
      "ref": "000CA3",
      "location": "Southwest of Junction 15 railway station: in front of the Driving Paradise Corvega billboard",
      "state": "Repair needed",
      "condition": "Seized engine. Full hull condition",
      "reserve": "Empty: 0 / 100% Reactor Coolant",
      "acquisition": "Repair 75 + 1 Car Repair Tools in player inventory → Install Part. Toolbox consumed. Then add Reactor Coolant. Free and unowned.",
      "fuel": "Reactor Coolant",
      "repair": 75,
      "tools": 1,
      "region": "Mojave",
      "mapPoint": [
        -20150.0,
        27350.0
      ],
      "approximate": false,
      "parts": "1 Car Repair Tools",
      "image": "fleet/corvega.webp",
      "note": ""
    },
    {
      "id": "v-000ca6",
      "profile": 1,
      "name": "Apocalyptic Buggy",
      "category": "Cars",
      "kind": "discovery",
      "ref": "000CA6",
      "location": "Bonnie Springs: tucked beside the ruined building corner on the north side of the main street, facing east",
      "state": "Ready to ride",
      "condition": "Working. Full hull condition",
      "reserve": "Empty: 0 / 60 L",
      "acquisition": "Free and unowned. Bring Jerry Cans. No repair or quest requirement. Existing enemies guard the area.",
      "fuel": "Jerry Cans",
      "repair": 0,
      "tools": 0,
      "region": "Mojave",
      "mapPoint": [
        -58130.0,
        40010.0
      ],
      "approximate": false,
      "parts": "No parts",
      "image": "fleet/buggy.webp",
      "note": ""
    },
    {
      "id": "v-000ca8",
      "profile": 9,
      "name": "Type 736 Buggy",
      "category": "Cars",
      "kind": "discovery",
      "ref": "000CA8",
      "location": "Brooks Tumbleweed Ranch: inside the curved metal shelter, facing its southern opening.",
      "state": "Repair needed",
      "condition": "Damaged engine. Full hull condition",
      "reserve": "Empty: 0 / 60 L",
      "acquisition": "Repair 50 + 1 Car Repair Tools in player inventory → Install Part. Toolbox consumed. Then add Jerry Cans. Free and unowned.",
      "fuel": "Jerry Cans",
      "repair": 50,
      "tools": 1,
      "region": "Mojave",
      "mapPoint": [
        -59168.8515625,
        139981.75
      ],
      "approximate": false,
      "parts": "1 Car Repair Tools",
      "image": "fleet/buggy736.webp",
      "note": ""
    },
    {
      "id": "v-000caa",
      "profile": 13,
      "name": "Highwayman",
      "category": "Cars",
      "kind": "discovery",
      "ref": "000CAA",
      "location": "Wrecked Highwayman landmark. Restored car appears on dry ground to the north",
      "state": "Repair needed",
      "condition": "Original buried wreck remains. Drivable car hidden until repair",
      "reserve": "Empty: 0 / 200 charge units",
      "acquisition": "Inspect the original buried wreck and choose Repair. Repair 100 and two carried Car Repair Tools are required. Both consumed. The restored car appears on dry ground north of the pool with zero charge. Add Energy Cells/MFCs.",
      "fuel": "Energy Cells / MFCs",
      "repair": 100,
      "tools": 2,
      "region": "Mojave",
      "mapPoint": [
        28000.0,
        -58000.0
      ],
      "approximate": false,
      "parts": "2 Car Repair Tools",
      "image": "fleet/highwayman.webp",
      "note": ""
    },
    {
      "id": "v-000cad",
      "profile": 17,
      "name": "Hopper",
      "category": "Oddballs",
      "kind": "discovery",
      "ref": "000CAD",
      "location": "Outside Vault 21: pavement north of the gift-shop entrance, between the entrance and sign",
      "state": "Ready to ride",
      "condition": "Working. Full condition",
      "reserve": "No fuel",
      "acquisition": "Ride it. Free and unowned. No repair or quest requirement.",
      "fuel": "None",
      "repair": 0,
      "tools": 0,
      "region": "Mojave",
      "mapPoint": [
        -24000,
        97000
      ],
      "approximate": true,
      "parts": "No parts",
      "image": "fleet/hopper.webp",
      "note": "The Strip-door transfer fix is implemented. Its corrected round-trip test is still pending."
    },
    {
      "id": "v-000caf",
      "profile": 17,
      "name": "Hopper",
      "category": "Oddballs",
      "kind": "discovery",
      "ref": "000CAF",
      "location": "Novac: outdoors beside the foot of Dinky’s gift-shop stairs",
      "state": "Ready to ride",
      "condition": "Working. Full condition",
      "reserve": "No fuel",
      "acquisition": "Ride it. Free and unowned. No repair or quest requirement.",
      "fuel": "None",
      "repair": 0,
      "tools": 0,
      "region": "Mojave",
      "mapPoint": [
        25040.0,
        -32110.0
      ],
      "approximate": false,
      "parts": "No parts",
      "image": "fleet/hopper.webp",
      "note": "The Strip-door transfer fix is implemented. Its corrected round-trip test is still pending."
    },
    {
      "id": "v-000cb1",
      "profile": 19,
      "name": "Hover Bike",
      "category": "Bikes",
      "kind": "discovery",
      "ref": "000CB1",
      "location": "Big MT: forecourt south of the paired Think Tank/Sink entrances",
      "state": "Quest reward",
      "condition": "Working. Hidden until successful OWB completion",
      "reserve": "Empty: 0 / 200 charge",
      "acquisition": "Complete Old World Blues. Find your reward outside the Think Tank / Sink entrances, then charge it with Energy Cells or Microfusion Cells. No repair or caps required.",
      "fuel": "Energy Cells / MFCs",
      "repair": 0,
      "tools": 0,
      "region": "Big MT",
      "mapPoint": null,
      "approximate": false,
      "parts": "No parts",
      "image": "fleet/hoverbike.webp",
      "note": "The reward bike currently stays in Big MT. Transportalponder transfer to the Mojave is not implemented."
    },
    {
      "id": "v-000cb3",
      "profile": 2,
      "name": "Hotrod",
      "category": "Cars",
      "kind": "discovery",
      "ref": "000CB3",
      "location": "Raul’s shack: open ground west of the entrance, facing west",
      "state": "Repair needed",
      "condition": "Under a canvas cover. Unfinished engine. Full hull condition",
      "reserve": "Empty: 0 / 60 L",
      "acquisition": "Inspect the cover → Repair. Repair 75 + 1 carried Car Repair Tools, consumed. Fade to black, reveal the Hotrod, fade back in. Then add Jerry Cans. Free and unowned. No quest or caps.",
      "fuel": "Jerry Cans",
      "repair": 75,
      "tools": 1,
      "region": "Mojave",
      "mapPoint": [
        28250.0,
        103725.0
      ],
      "approximate": false,
      "parts": "1 Car Repair Tools",
      "image": "fleet/hotrod.webp",
      "note": ""
    },
    {
      "id": "v-000cb8",
      "profile": 11,
      "name": "Flatbed Truck",
      "category": "Cars",
      "kind": "discovery",
      "ref": "000CB8",
      "location": "Junction 15: existing flatbed on the road southwest of the railway station",
      "state": "Repair needed",
      "condition": "Damaged engine. Repair 50 + one consumed carried Car Repair Tools",
      "reserve": "Empty: 0 / 150 L",
      "acquisition": "Install Part using Repair 50 and one Car Repair Tools from player inventory. Then add Jerry Cans. Free and unowned. No quest or caps.",
      "fuel": "Jerry Cans",
      "repair": 50,
      "tools": 1,
      "region": "Mojave",
      "mapPoint": [
        -17247.974609375,
        25295.46484375
      ],
      "approximate": false,
      "parts": "1 Car Repair Tools",
      "image": "fleet/truckflatbed.webp",
      "note": ""
    },
    {
      "id": "v-000cba",
      "profile": 11,
      "name": "Flatbed Truck",
      "category": "Cars",
      "kind": "discovery",
      "ref": "000CBA",
      "location": "Powder Ganger Camp West: existing roadside flatbed",
      "state": "Repair needed",
      "condition": "Damaged engine. Repair 50 + one consumed carried Car Repair Tools",
      "reserve": "Empty: 0 / 150 L",
      "acquisition": "Install Part using Repair 50 and one Car Repair Tools from player inventory. Then add Jerry Cans. Free and unowned. No quest or caps.",
      "fuel": "Jerry Cans",
      "repair": 50,
      "tools": 1,
      "region": "Mojave",
      "mapPoint": [
        -55509.359375,
        -22577.12109375
      ],
      "approximate": false,
      "parts": "1 Car Repair Tools",
      "image": "fleet/truckflatbed.webp",
      "note": ""
    },
    {
      "id": "v-000cbc",
      "profile": 16,
      "name": "Vikki and Vance Death Car",
      "category": "Cars",
      "kind": "discovery",
      "ref": "000CBC",
      "location": "Vikki and Vance casino display in Primm. Recovered onto the street outside",
      "state": "Quest reward",
      "condition": "Original display remains. Outdoor car hidden until Repair 75 + one consumed carried Car Repair Tools",
      "reserve": "Empty: 0 / 50 L",
      "acquisition": "Resolve My Kind of Town with any successful sheriff ending and wait for the casino to reopen. Inspect the original display: Repair 75 and one carried Car Repair Tools. Repair consumes the toolbox and moves the restored car and you outside.",
      "fuel": "Jerry Cans",
      "repair": 75,
      "tools": 1,
      "region": "Mojave",
      "mapPoint": [
        -53240.0,
        -51900.0
      ],
      "approximate": false,
      "parts": "1 Car Repair Tools",
      "image": "fleet/deathcar.webp",
      "note": ""
    },
    {
      "id": "v-000cc0",
      "profile": 43,
      "name": "Ford Falcon Interceptor",
      "category": "Cars",
      "kind": "discovery",
      "ref": "000CC0",
      "location": "Gypsum train yard: north wall of quarry office, west of the existing dump truck, facing east",
      "state": "Repair needed",
      "condition": "Covered Vehicle. Car hidden until Repair 75 + one carried Car Repair Tools, consumed",
      "reserve": "Empty: 0 / 100 L",
      "acquisition": "Inspect the cover and choose Repair. Fade out, consume one toolbox, uncover the Interceptor, fade in. Free and unowned. No quest or kill gate. Add Jerry Cans.",
      "fuel": "Jerry Cans",
      "repair": 75,
      "tools": 1,
      "region": "Mojave",
      "mapPoint": [
        38050.0,
        87555.0
      ],
      "approximate": false,
      "parts": "1 Car Repair Tools",
      "image": "fleet/interceptor-studio.webp",
      "note": ""
    },
    {
      "id": "v-000cc5",
      "profile": 44,
      "name": "DeSoto",
      "category": "Cars",
      "kind": "discovery",
      "ref": "000CC5",
      "location": "Horowitz farmstead: outdoors along the west side of the occupied barn, facing south",
      "state": "Repair needed",
      "condition": "Engine damaged: Repair 50 + one carried Car Repair Tools, consumed by Install Part",
      "reserve": "Empty: 0 / 70 L",
      "acquisition": "Inspect the car and select Install Part. Repair 50 and one carried toolbox clear the fault and claim the car. Add Jerry Cans. Free and unowned, with no quest or caps gate.",
      "fuel": "Jerry Cans",
      "repair": 50,
      "tools": 1,
      "region": "Mojave",
      "mapPoint": [
        -47720.0,
        128650.0
      ],
      "approximate": false,
      "parts": "1 Car Repair Tools",
      "image": "fleet/desoto-studio.webp",
      "note": ""
    },
    {
      "id": "v-000cc7",
      "profile": 39,
      "name": "M26 Pershing",
      "category": "Armour",
      "kind": "discovery",
      "ref": "000CC7",
      "location": "Old nuclear test site: tucked alongside the southwest shack wall, inside the fence. Facing northwest toward the yard",
      "state": "Repair needed",
      "condition": "Camouflaged, engine seized",
      "reserve": "Empty: 0 / 200 L",
      "acquisition": "Inspect cover, Repair 100 and two carried Car Repair Tools consumed. Fade and reveal. Then add Jerry Cans.",
      "fuel": "Jerry Cans",
      "repair": 100,
      "tools": 2,
      "region": "Mojave",
      "mapPoint": [
        -9024.47265625,
        -119274.9140625
      ],
      "approximate": false,
      "parts": "2 Car Repair Tools",
      "image": "fleet/pershing-studio.webp",
      "note": ""
    },
    {
      "id": "v-000cc9",
      "profile": 40,
      "name": "Alien Recon Craft",
      "category": "Air",
      "kind": "discovery",
      "ref": "000CC9",
      "location": "Alien camp north of Horowitz: recovery ground southwest of the crew",
      "state": "Recovery",
      "condition": "Hidden. Damaged flight controls. Original native UFO remains until successful recovery.",
      "reserve": "No fuel or coolant",
      "acquisition": "Requires the Wild Wasteland alien encounter. Defeat all three aliens, then use F10 → Garage → Alien Recon Craft → Recover UFO at the camp. Repair 100 and two carried Car Repair Tools are consumed. The original UFO is replaced by your craft on reachable ground.",
      "fuel": "None",
      "repair": 100,
      "tools": 2,
      "region": "Mojave",
      "mapPoint": [
        -44500,
        140650
      ],
      "approximate": false,
      "parts": "2 Car Repair Tools",
      "image": "fleet/alien-studio.webp",
      "note": ""
    },
    {
      "id": "v-000cd0",
      "profile": 41,
      "name": "Commonwealth Tank",
      "category": "Armour",
      "kind": "discovery",
      "ref": "000CD0",
      "location": "HELIOS One: beside the western approach, under camouflage netting.",
      "state": "Repair needed",
      "condition": "Camouflaged, engine seized",
      "reserve": "Empty: 0 / 200 L",
      "acquisition": "Inspect cover, Repair 100 and two carried Car Repair Tools consumed. Fade and reveal. Then add Jerry Cans.",
      "fuel": "Jerry Cans",
      "repair": 100,
      "tools": 2,
      "region": "Mojave",
      "mapPoint": [
        19936.64,
        -8131.46
      ],
      "approximate": false,
      "parts": "2 Car Repair Tools",
      "image": "fleet/commonwealth-studio.webp",
      "note": ""
    },
    {
      "id": "v-000ce0",
      "profile": 42,
      "name": "LVTP-8A Marine APC",
      "category": "Armour",
      "kind": "discovery",
      "ref": "000CE0",
      "location": "Quarry Junction: tucked away on the western side, under a fitted canvas tarp.",
      "state": "Repair needed",
      "condition": "Covered. Seized engine",
      "reserve": "Empty: 0 / 160 L",
      "acquisition": "Inspect tarp. Repair 100 and two carried Car Repair Tools, consumed. Fade and reveal. Supply Jerry Cans.",
      "fuel": "Jerry Cans",
      "repair": 100,
      "tools": 2,
      "region": "Mojave",
      "mapPoint": [
        -41653.36,
        18031.71
      ],
      "approximate": false,
      "parts": "2 Car Repair Tools",
      "image": "fleet/marine-apc-studio.webp",
      "note": ""
    },
    {
      "id": "v-000ce6",
      "profile": 33,
      "name": "Motor Chariot",
      "category": "Cars",
      "kind": "discovery",
      "ref": "000CE6",
      "location": "Cottonwood Cove: outdoors beside the western shack",
      "state": "Repair needed",
      "condition": "Damaged engine",
      "reserve": "Empty: 0 / 60 L",
      "acquisition": "Restore Engine: Repair 50 and one carried Car Repair Tools, consumed. Supply Jerry Cans. No quest or reputation gate.",
      "fuel": "Jerry Cans",
      "repair": 50,
      "tools": 1,
      "region": "Mojave",
      "mapPoint": [
        62180,
        -87300
      ],
      "approximate": false,
      "parts": "1 Car Repair Tools",
      "image": "fleet/motorchariot.webp",
      "note": ""
    },
    {
      "id": "herd-1",
      "name": "Wild horses · Herd 1",
      "category": "Horses",
      "kind": "herd",
      "region": "Mojave",
      "mapPoint": [
        -60319,
        -36724
      ],
      "approximate": false,
      "location": "Lone Wolf Radio / northern Primm hills",
      "state": "Tame with Survival",
      "condition": "2–4 wild horses. Inspect each horse for its traits and requirement.",
      "reserve": "Stamina, not fuel",
      "fuel": "None",
      "repair": 0,
      "tools": 0,
      "parts": "No items",
      "survival": "None / 50",
      "ref": "000CF0",
      "image": null,
      "acquisition": "Inspect and tame a horse with effective Survival None / 50. Complete the calming interaction out of combat. Taming costs no items. Eligible horses can roll rare: Survival 100 and 5/5/5 traits.",
      "note": "Ordinary wild horses replenish after three in-game days away. Tamed and rare individuals stay dead. A later new horse can roll rare."
    },
    {
      "id": "herd-2",
      "name": "Wild horses · Herd 2",
      "category": "Horses",
      "kind": "herd",
      "region": "Mojave",
      "mapPoint": [
        43592,
        -7335
      ],
      "approximate": false,
      "location": "Southeast of El Dorado Gas & Service",
      "state": "Tame with Survival",
      "condition": "2–4 wild horses. Inspect each horse for its traits and requirement.",
      "reserve": "Stamina, not fuel",
      "fuel": "None",
      "repair": 0,
      "tools": 0,
      "parts": "No items",
      "survival": "50",
      "ref": "000CF1",
      "image": null,
      "acquisition": "Inspect and tame a horse with effective Survival 50. Complete the calming interaction out of combat. Taming costs no items. Eligible horses can roll rare: Survival 100 and 5/5/5 traits.",
      "note": "Ordinary wild horses replenish after three in-game days away. Tamed and rare individuals stay dead. A later new horse can roll rare."
    },
    {
      "id": "herd-3",
      "name": "Wild horses · Herd 3",
      "category": "Horses",
      "kind": "herd",
      "region": "Mojave",
      "mapPoint": [
        -86086,
        92243
      ],
      "approximate": false,
      "location": "West of Remnants Bunker",
      "state": "Tame with Survival",
      "condition": "2–4 wild horses. Inspect each horse for its traits and requirement.",
      "reserve": "Stamina, not fuel",
      "fuel": "None",
      "repair": 0,
      "tools": 0,
      "parts": "No items",
      "survival": "50 / 75",
      "ref": "000CF2",
      "image": null,
      "acquisition": "Inspect and tame a horse with effective Survival 50 / 75. Complete the calming interaction out of combat. Taming costs no items. Eligible horses can roll rare: Survival 100 and 5/5/5 traits.",
      "note": "Ordinary wild horses replenish after three in-game days away. Tamed and rare individuals stay dead. A later new horse can roll rare."
    },
    {
      "id": "formula-racer",
      "profile": 34,
      "name": "Formula Racer",
      "category": "Cars",
      "kind": "reward",
      "region": "Unlocks",
      "mapPoint": null,
      "approximate": false,
      "location": "F10 Garage prize claim after first race win",
      "state": "First race win",
      "condition": "One free car per character. Fully repaired, 40 L fuel.",
      "acquisition": "Finish first in a completed race against at least one opponent. Return from the race, then F10 → Garage → Formula Racer → Claim Prize. One free car per character.",
      "fuel": "Jerry Cans",
      "reserve": "See unlock conditions",
      "repair": 0,
      "tools": 0,
      "parts": "No repair items",
      "image": "fleet/formula.webp",
      "ref": null,
      "note": ""
    },
    {
      "id": "stunt-biplane",
      "profile": 45,
      "name": "Stunt Biplane",
      "category": "Air",
      "kind": "reward",
      "region": "Unlocks",
      "mapPoint": null,
      "approximate": false,
      "location": "Thunderdome. World spawning after visiting once",
      "state": "Visit Thunderdome",
      "condition": "Available in the Thunderdome.",
      "acquisition": "Visit the Thunderdome once to unlock world spawning. The general World vehicle spawning setting must also be enabled.",
      "fuel": "Jerry Cans",
      "reserve": "See unlock conditions",
      "repair": 0,
      "tools": 0,
      "parts": "No repair items",
      "image": "fleet/biplane-studio.webp",
      "ref": null,
      "note": ""
    },
    {
      "id": "monster-truck",
      "profile": 46,
      "name": "H1 Monster Truck",
      "category": "Cars",
      "kind": "reward",
      "region": "Unlocks",
      "mapPoint": null,
      "approximate": false,
      "location": "Thunderdome only",
      "state": "Arena only",
      "condition": "Available only in the Thunderdome.",
      "acquisition": "Use the garage inside the Thunderdome. The Monster Truck cannot be brought home or spawned outside the arena.",
      "fuel": "Jerry Cans",
      "reserve": "See unlock conditions",
      "repair": 0,
      "tools": 0,
      "parts": "No repair items",
      "image": "fleet/monster-truck-studio.webp",
      "ref": null,
      "note": ""
    }
  ],
  "vehicles": [
    {
      "profile": 1,
      "name": "Apocalyptic Buggy",
      "category": "Cars",
      "mph": 73.91,
      "kmh": 118.95,
      "description": "Open-cab dune buggy built from scrap. Long-travel suspension, petrol engine, roll cage, radio fitted.",
      "fuel": "Jerry Cans",
      "entries": [
        "v-000ca6"
      ],
      "image": "fleet/buggy.webp",
      "passengers": 1,
      "passengerNote": "",
      "boost": true,
      "parachute": false,
      "sound": {
        "source": "Subaru Impreza GC8",
        "detail": "2.0-litre boxer engine and exhaust recordings."
      }
    },
    {
      "profile": 2,
      "name": "Hotrod",
      "category": "Cars",
      "mph": 73.31,
      "kmh": 117.98,
      "description": "Custom hot rod on a stock chassis. High-torque V8, petrol, rear drive, open exhaust.",
      "fuel": "Jerry Cans",
      "entries": [
        "v-000cb3"
      ],
      "image": "fleet/hotrod.webp",
      "passengers": 1,
      "passengerNote": "",
      "boost": true,
      "parachute": false,
      "sound": {
        "source": "Dodge Challenger 426 Hemi",
        "detail": "V8 engine and exhaust recordings. Shared by the Hotrod and Ford Falcon Interceptor."
      }
    },
    {
      "profile": 3,
      "name": "Bicycle",
      "category": "Bikes",
      "mph": 22.05,
      "kmh": 35.49,
      "description": "Pedal bicycle, three-speed hub gear, steel frame. No fuel, no engine, one rider.",
      "fuel": "None",
      "entries": [
        "v-000c40",
        "v-000c57"
      ],
      "image": "fleet/rustybicycle.webp",
      "passengers": 0,
      "passengerNote": "",
      "boost": true,
      "parachute": false,
      "sound": {
        "source": "Bicycle recordings",
        "detail": "Pedalling, chain, freewheel, tyres, brakes, bell and landing sounds."
      }
    },
    {
      "profile": 4,
      "name": "Motorcycle",
      "category": "Bikes",
      "mph": 173.23,
      "kmh": 278.79,
      "description": "Pre-war road motorcycle. Rider plus pillion, six-speed gearbox, petrol, chain drive.",
      "fuel": "Jerry Cans",
      "entries": [
        "v-000c42"
      ],
      "image": "fleet/motorcycle.webp",
      "passengers": 1,
      "passengerNote": "",
      "boost": true,
      "parachute": false,
      "sound": {
        "source": "Honda 450cc four-stroke",
        "detail": "Exhaust-microphone recordings, pitched down for the bike. Also used by the Motor Chariot."
      }
    },
    {
      "profile": 6,
      "name": "Skateboard",
      "category": "Oddballs",
      "mph": 31.25,
      "kmh": 50.3,
      "description": "Standard pre-war skateboard. Push to move, foot to stop, weight to steer.",
      "fuel": "None",
      "entries": [
        "v-000c49",
        "v-000c45",
        "v-000c47"
      ],
      "image": "fleet/skateboard.webp",
      "passengers": 0,
      "passengerNote": "",
      "boost": true,
      "parachute": false,
      "sound": {
        "source": "Skateboard recordings",
        "detail": "Wheel roll, kicks, deck pops, landings and scrapes."
      }
    },
    {
      "profile": 7,
      "name": "Old Rusty Car",
      "category": "Cars",
      "mph": 68.9,
      "kmh": 110.88,
      "description": "Four-door sedan, mostly original. Three gears, bench seats, working radio, heavy corrosion.",
      "fuel": "Jerry Cans",
      "entries": [
        "v-000c4f"
      ],
      "image": "fleet/oldrustycar.webp",
      "passengers": 3,
      "passengerNote": "A dog can use the rear position",
      "boost": false,
      "parachute": false,
      "sound": {
        "source": "Toyota Corolla E30",
        "detail": "1.2-litre four-cylinder engine and exhaust recordings."
      }
    },
    {
      "profile": 8,
      "name": "Unicycle",
      "category": "Oddballs",
      "mph": 16.52,
      "kmh": 26.59,
      "description": "Single-wheel pedal cycle. Fixed drive, no gears, no brakes, one rider.",
      "fuel": "None",
      "entries": [
        "v-000c4d"
      ],
      "image": "fleet/unicycle.webp",
      "passengers": 0,
      "passengerNote": "",
      "boost": true,
      "parachute": false,
      "sound": {
        "source": "Cycle and contact sounds",
        "detail": "Wheel movement and contact sounds without an engine layer."
      }
    },
    {
      "profile": 9,
      "name": "Type 736 Buggy",
      "category": "Cars",
      "mph": 62.28,
      "kmh": 100.23,
      "description": "Open-cab utility. Rear engine, rear drive, petrol, canvas top, minimal bodywork.",
      "fuel": "Jerry Cans",
      "entries": [
        "v-000ca8"
      ],
      "image": "fleet/buggy736.webp",
      "passengers": 1,
      "passengerNote": "",
      "boost": true,
      "parachute": false,
      "sound": {
        "source": "Subaru Impreza GD WRX",
        "detail": "2.0-litre boxer engine and exhaust recordings."
      }
    },
    {
      "profile": 10,
      "name": "Corvega",
      "category": "Cars",
      "mph": 68.9,
      "kmh": 110.88,
      "description": "Chryslus Corvega Atomic V8. Fission-powered, three-speed automatic, seats two, radio.",
      "fuel": "Reactor Coolant",
      "entries": [
        "v-000ca3"
      ],
      "image": "fleet/corvega.webp",
      "passengers": 1,
      "passengerNote": "",
      "boost": true,
      "parachute": false,
      "sound": {
        "source": "Shelby GT500",
        "detail": "5.4-litre V8 recordings give the nuclear Corvega its engine sound."
      }
    },
    {
      "profile": 11,
      "name": "Flatbed Truck",
      "category": "Cars",
      "mph": 47.23,
      "kmh": 76.01,
      "description": "Heavy flatbed, six wheels, twin rear axles. Five-speed, fuelled, cab seats four.",
      "fuel": "Jerry Cans",
      "entries": [
        "v-000cb8",
        "v-000cba"
      ],
      "image": "fleet/truckflatbed.webp",
      "passengers": 3,
      "passengerNote": "A dog can use the rear position",
      "boost": false,
      "parachute": false,
      "sound": {
        "source": "Dodge Ram 2500 Cummins",
        "detail": "5.9-litre straight-six diesel engine and exhaust recordings."
      }
    },
    {
      "profile": 12,
      "name": "Wheelchair",
      "category": "Oddballs",
      "mph": 13.77,
      "kmh": 22.17,
      "description": "Manual folding wheelchair. Two large rear wheels, two castors, hand rims. Single occupant.",
      "fuel": "None",
      "entries": [
        "v-000c53",
        "v-000c55"
      ],
      "image": "fleet/wheelchair.webp",
      "passengers": 0,
      "passengerNote": "",
      "boost": false,
      "parachute": false,
      "sound": {
        "source": "Wheel and contact sounds",
        "detail": "Rolling and movement sounds without an engine layer."
      }
    },
    {
      "profile": 13,
      "name": "Highwayman",
      "category": "Cars",
      "mph": 70.88,
      "kmh": 114.07,
      "description": "Chryslus Highwayman touring sedan. Fuel cell power, four-speed, seats four, radio.",
      "fuel": "Energy Cells / MFCs",
      "entries": [
        "v-000caa"
      ],
      "image": "fleet/highwayman.webp",
      "passengers": 3,
      "passengerNote": "A dog can use the rear position",
      "boost": true,
      "parachute": false,
      "sound": {
        "source": "Dodge Challenger 426 Hemi",
        "detail": "V8 recordings provide the sound of the fuel-cell-powered Highwayman."
      }
    },
    {
      "profile": 14,
      "name": "Patrol Car",
      "category": "Cars",
      "mph": 73.82,
      "kmh": 118.8,
      "description": "Nevada Highway Patrol cruiser. Police V8, three-speed, petrol, seats four, siren and lights.",
      "fuel": "Jerry Cans",
      "entries": [
        "v-000c51",
        "v-000c5d"
      ],
      "image": "fleet/patrolcar.webp",
      "passengers": 3,
      "passengerNote": "A dog can use the rear position",
      "boost": false,
      "parachute": false,
      "sound": {
        "source": "Ford Crown Victoria",
        "detail": "4.6-litre V8 engine and exhaust recordings."
      }
    },
    {
      "profile": 16,
      "name": "Vikki and Vance Death Car",
      "category": "Cars",
      "mph": 63.27,
      "kmh": 101.83,
      "description": "Coachbuilt pre-war tourer. Three gears, rear drive, long wheelbase, radio fitted.",
      "fuel": "Jerry Cans",
      "entries": [
        "v-000cbc"
      ],
      "image": "fleet/deathcar.webp",
      "passengers": 3,
      "passengerNote": "A dog can use the rear position",
      "boost": false,
      "parachute": false,
      "sound": {
        "source": "BMW 420d",
        "detail": "2.0-litre N47 engine recordings."
      }
    },
    {
      "profile": 17,
      "name": "Hopper",
      "category": "Oddballs",
      "mph": 13.42,
      "kmh": 21.6,
      "description": "Child's space hopper, adult sized. Human-powered, single rider, no brakes.",
      "fuel": "None",
      "entries": [
        "v-000cad",
        "v-000caf"
      ],
      "image": "fleet/hopper.webp",
      "passengers": 0,
      "passengerNote": "",
      "boost": false,
      "parachute": false,
      "sound": {
        "source": "Bounce effects",
        "detail": "Bouncing and landing sounds without an engine layer."
      }
    },
    {
      "profile": 18,
      "name": "Pogo Stick",
      "category": "Oddballs",
      "mph": 9.59,
      "kmh": 15.43,
      "description": "Spring-loaded pogo stick. Steel shaft, two foot pegs, one rider, no brakes.",
      "fuel": "None",
      "entries": [
        "v-000c4b"
      ],
      "image": "fleet/pogo.webp",
      "passengers": 0,
      "passengerNote": "",
      "boost": false,
      "parachute": false,
      "sound": {
        "source": "Spring and bounce effects",
        "detail": "Spring movement and landing sounds without an engine layer."
      }
    },
    {
      "profile": 19,
      "name": "Hover Bike",
      "category": "Bikes",
      "mph": 53.69,
      "kmh": 86.4,
      "description": "Prototype hover bike powered by Energy Cells or Microfusion Cells. Hovers over the ground and can hop or dodge sideways.",
      "fuel": "Energy Cells / MFCs",
      "entries": [
        "v-000cb1"
      ],
      "image": "fleet/hoverbike.webp",
      "passengers": 1,
      "passengerNote": "",
      "boost": true,
      "parachute": false,
      "sound": {
        "source": "Jet aircraft recordings",
        "detail": "Jet tarmac and take-off recordings shaped into the Hover Bike’s thrusters, with separate hop, dodge and repulsor effects."
      }
    },
    {
      "profile": 20,
      "name": "Vertibird",
      "category": "Air",
      "mph": 89.48,
      "kmh": 144.0,
      "description": "Enclave Vertibird. Twin tilt-rotor, two seats, six-stage throttle, fuelled.",
      "fuel": "Jerry Cans",
      "entries": [
        "v-000c5f"
      ],
      "image": "fleet/vertibird.webp",
      "passengers": 1,
      "passengerNote": "",
      "boost": false,
      "parachute": true,
      "sound": {
        "source": "Military helicopter recordings",
        "detail": "Separate idle, cruising and strained rotor sounds, plus landing gear and warning effects."
      }
    },
    {
      "profile": 33,
      "name": "Motor Chariot",
      "category": "Cars",
      "mph": 95.87,
      "kmh": 154.29,
      "description": "Legion motor chariot. Twin bikes on a common axle, cart behind, three seats.",
      "fuel": "Jerry Cans",
      "entries": [
        "v-000ce6"
      ],
      "image": "fleet/motorchariot.webp",
      "passengers": 2,
      "passengerNote": "One dog and one humanoid",
      "boost": true,
      "parachute": false,
      "sound": {
        "source": "Honda 450cc four-stroke",
        "detail": "Exhaust-microphone recordings, pitched down for the bike. Also used by the Motor Chariot."
      }
    },
    {
      "profile": 34,
      "name": "Formula Racer",
      "category": "Cars",
      "mph": 79.89,
      "kmh": 128.57,
      "description": "Front-engined single seater. Open cockpit, exposed wheels, four gears, drum brakes.",
      "fuel": "Jerry Cans",
      "entries": [
        "formula-racer"
      ],
      "image": "fleet/formula.webp",
      "passengers": 0,
      "passengerNote": "",
      "boost": true,
      "parachute": false,
      "sound": {
        "source": "Datsun 240Z",
        "detail": "2.4-litre straight-six engine and exhaust recordings."
      }
    },
    {
      "profile": 35,
      "name": "Old Rusty Boat",
      "category": "Water",
      "mph": 20.13,
      "kmh": 32.4,
      "description": "Old fishing boat with an outboard. Direct drive, open deck, four aboard.",
      "fuel": "Jerry Cans",
      "entries": [
        "v-000c16"
      ],
      "image": "fleet/boat02.webp",
      "passengers": 3,
      "passengerNote": "Two humanoids and one dog",
      "boost": false,
      "parachute": false,
      "sound": {
        "source": "Dodge Challenger 426 Hemi",
        "detail": "The boat currently shares the Challenger engine bank."
      }
    },
    {
      "profile": 36,
      "name": "Small Prop Plane",
      "category": "Air",
      "mph": 178.95,
      "kmh": 288.0,
      "description": "Twin-prop light plane. Pilot plus one, fuel tanks in the wings, short-field take-off.",
      "fuel": "Jerry Cans",
      "entries": [
        "v-000c1d"
      ],
      "image": "fleet/smallplane.webp",
      "passengers": 1,
      "passengerNote": "",
      "boost": false,
      "parachute": true,
      "sound": {
        "source": "Propeller aircraft recordings",
        "detail": "Separate idle, cruise and power loops, with start and shutdown cues."
      }
    },
    {
      "profile": 37,
      "name": "B-29 Bomber",
      "category": "Air",
      "mph": 294.0,
      "kmh": 473.14,
      "description": "Four-engine Boomer bomber, restored to fly. Pilot plus two, bomb bay, long take-off run.",
      "fuel": "Jerry Cans",
      "entries": [
        "v-000c3b"
      ],
      "image": "fleet/b29.webp",
      "passengers": 2,
      "passengerNote": "",
      "boost": false,
      "parachute": true,
      "sound": {
        "source": "Fallout: New Vegas B-29 flyby",
        "detail": "The vanilla flyby is reshaped into sustained, layered four-engine sounds."
      }
    },
    {
      "profile": 38,
      "name": "Camp Golf Cart",
      "category": "Cars",
      "mph": 24.61,
      "kmh": 39.6,
      "description": "Four-wheel course cart in resort livery. Direct drive, bench seat for two, canopy.",
      "fuel": "Energy Cells / MFCs",
      "entries": [
        "v-000c5a"
      ],
      "image": "fleet/golfcart.webp",
      "passengers": 1,
      "passengerNote": "",
      "boost": false,
      "parachute": false,
      "sound": {
        "source": "Electric monowheel recordings",
        "detail": "Compact electric drive sounds. Silent at rest, with a reversing beep and small horn."
      }
    },
    {
      "profile": 39,
      "name": "M26 Pershing",
      "category": "Armour",
      "mph": 23.65,
      "kmh": 38.06,
      "description": "M26 Pershing. Ninety millimetre gun on a full-traverse turret, forty tonnes, petrol V8, tracks either side.",
      "fuel": "Jerry Cans",
      "entries": [
        "v-000cc7"
      ],
      "image": "fleet/pershing-studio.webp",
      "passengers": 1,
      "passengerNote": "Enclosed crew position",
      "boost": false,
      "parachute": false,
      "sound": {
        "source": "Panther and Hetzer",
        "detail": "Panther engine recordings with Hetzer start and shutdown sounds."
      }
    },
    {
      "profile": 40,
      "name": "Alien Recon Craft",
      "category": "Air",
      "mph": 134.22,
      "kmh": 216.0,
      "description": "Repaired Zeta scout saucer. Tractor beam, tripod landing legs, nose blaster, one seat.",
      "fuel": "None",
      "entries": [
        "v-000cc9"
      ],
      "image": "fleet/alien-studio.webp",
      "passengers": 0,
      "passengerNote": "",
      "boost": true,
      "parachute": true,
      "sound": {
        "source": "Designed science-fiction sound set",
        "detail": "Staged propulsion, warp boost, landing gear and weapon effects."
      }
    },
    {
      "profile": 41,
      "name": "Commonwealth Tank",
      "category": "Armour",
      "mph": 20.45,
      "kmh": 32.91,
      "description": "Commonwealth single-gun tank. Continuous tracks and a fully traversing cannon.",
      "fuel": "Jerry Cans",
      "entries": [
        "v-000cd0"
      ],
      "image": "fleet/commonwealth-studio.webp",
      "passengers": 1,
      "passengerNote": "Enclosed crew position",
      "boost": false,
      "parachute": false,
      "sound": {
        "source": "Hetzer",
        "detail": "Tank engine recordings with matching start and shutdown sounds."
      }
    },
    {
      "profile": 42,
      "name": "LVTP-8A Marine APC",
      "category": "Armour",
      "mph": 23.65,
      "kmh": 38.06,
      "description": "LVTP-8A Marine APC. Enclosed tracked transport with a rear loading ramp.",
      "fuel": "Jerry Cans",
      "entries": [
        "v-000ce0"
      ],
      "image": "fleet/marine-apc-studio.webp",
      "passengers": 0,
      "passengerNote": "",
      "boost": false,
      "parachute": false,
      "sound": {
        "source": "Peterbilt 359",
        "detail": "14.9-litre Caterpillar engine and exhaust recordings, with separate track sounds."
      }
    },
    {
      "profile": 43,
      "name": "Ford Falcon Interceptor",
      "category": "Cars",
      "mph": 78.29,
      "kmh": 126.0,
      "description": "Supercharged V8, rear drive, four gears. Right-hand-drive cabin, side exhausts and twin rear fuel tanks.",
      "fuel": "Jerry Cans",
      "entries": [
        "v-000cc0"
      ],
      "image": "fleet/interceptor-studio.webp",
      "passengers": 1,
      "passengerNote": "",
      "boost": true,
      "parachute": false,
      "sound": {
        "source": "Dodge Challenger 426 Hemi",
        "detail": "V8 engine and exhaust recordings. Shared by the Hotrod and Ford Falcon Interceptor."
      }
    },
    {
      "profile": 44,
      "name": "DeSoto",
      "category": "Cars",
      "mph": 62.31,
      "kmh": 100.29,
      "description": "Long, rusty DeSoto with a three-speed transmission, bench seats and a rebuilt cabin. Heavy and unhurried.",
      "fuel": "Jerry Cans",
      "entries": [
        "v-000cc5"
      ],
      "image": "fleet/desoto-studio.webp",
      "passengers": 3,
      "passengerNote": "",
      "boost": false,
      "parachute": false,
      "sound": {
        "source": "Buick Regal",
        "detail": "V8 exhaust-microphone recordings form the main engine layer."
      }
    },
    {
      "profile": 45,
      "name": "Stunt Biplane",
      "category": "Air",
      "mph": 127.82,
      "kmh": 205.71,
      "description": "Rusty single-seat biplane. Rolls fast, loops tight, lands short.",
      "fuel": "Jerry Cans",
      "entries": [
        "stunt-biplane"
      ],
      "image": "fleet/biplane-studio.webp",
      "passengers": 0,
      "passengerNote": "",
      "boost": false,
      "parachute": true,
      "sound": {
        "source": "B-29-derived propeller bank",
        "detail": "Uses the bomber’s propeller recordings with its own playback settings."
      }
    },
    {
      "profile": 46,
      "name": "H1 Monster Truck",
      "category": "Cars",
      "mph": 89.48,
      "kmh": 144.0,
      "description": "Full-size H1 on two-metre tyres. Huge torque, oversized fuel tank, four seats. Built to drive over cars.",
      "fuel": "Jerry Cans",
      "entries": [
        "monster-truck"
      ],
      "image": "fleet/monster-truck-studio.webp",
      "passengers": 3,
      "passengerNote": "",
      "boost": true,
      "parachute": false,
      "sound": {
        "source": "Dodge Ram 1500 Hemi",
        "detail": "5.7-litre V8 engine and exhaust recordings."
      }
    }
  ],
  "courses": [
    {
      "id": "nuka_cola_speedway",
      "name": "Nuka-Cola Speedway",
      "kind": "Cars",
      "description": "A long road circuit with sweeping bends and long straights. Optional debris and roadside raiders make the same lap a different race.",
      "style": "Road racing",
      "access": "Choose the Nuka-Cola Speedway course in race setup.",
      "metres": 5617,
      "checkpoints": 64,
      "fences": 0,
      "outline": [
        [
          65536,
          24576
        ],
        [
          65792,
          24576
        ],
        [
          66048,
          24576
        ],
        [
          66304,
          24576
        ],
        [
          66560,
          24576
        ],
        [
          66816,
          24576
        ],
        [
          67072,
          24576
        ],
        [
          67328,
          24576
        ],
        [
          67584,
          24576
        ],
        [
          67840,
          24576
        ],
        [
          68096,
          24576
        ],
        [
          68352,
          24576
        ],
        [
          68608,
          24576
        ],
        [
          68864,
          24576
        ],
        [
          69119,
          24576
        ],
        [
          69375,
          24576
        ],
        [
          69631,
          24576
        ],
        [
          69887,
          24576
        ],
        [
          70143,
          24576
        ],
        [
          70399,
          24576
        ],
        [
          70655,
          24576
        ],
        [
          70911,
          24576
        ],
        [
          71167,
          24576
        ],
        [
          71423,
          24576
        ],
        [
          71679,
          24576
        ],
        [
          71935,
          24576
        ],
        [
          72191,
          24576
        ],
        [
          72447,
          24576
        ],
        [
          72703,
          24576
        ],
        [
          72959,
          24576
        ],
        [
          73215,
          24576
        ],
        [
          73471,
          24576
        ],
        [
          73727,
          24576
        ],
        [
          73983,
          24576
        ],
        [
          74239,
          24576
        ],
        [
          74495,
          24576
        ],
        [
          74751,
          24576
        ],
        [
          75007,
          24576
        ],
        [
          75263,
          24576
        ],
        [
          75519,
          24576
        ],
        [
          75775,
          24576
        ],
        [
          76031,
          24576
        ],
        [
          76286,
          24576
        ],
        [
          76542,
          24576
        ],
        [
          76798,
          24576
        ],
        [
          77054,
          24576
        ],
        [
          77310,
          24576
        ],
        [
          77566,
          24576
        ],
        [
          77822,
          24576
        ],
        [
          78078,
          24576
        ],
        [
          78334,
          24576
        ],
        [
          78590,
          24576
        ],
        [
          78846,
          24576
        ],
        [
          79102,
          24576
        ],
        [
          79358,
          24576
        ],
        [
          79614,
          24576
        ],
        [
          79870,
          24576
        ],
        [
          80126,
          24576
        ],
        [
          80382,
          24576
        ],
        [
          80638,
          24576
        ],
        [
          80894,
          24576
        ],
        [
          81150,
          24576
        ],
        [
          81406,
          24576
        ],
        [
          81662,
          24576
        ],
        [
          81918,
          24576
        ],
        [
          82174,
          24576
        ],
        [
          82430,
          24576
        ],
        [
          82686,
          24576
        ],
        [
          82942,
          24576
        ],
        [
          83198,
          24576
        ],
        [
          83453,
          24576
        ],
        [
          83709,
          24576
        ],
        [
          83965,
          24576
        ],
        [
          84221,
          24576
        ],
        [
          84477,
          24576
        ],
        [
          84733,
          24576
        ],
        [
          84989,
          24576
        ],
        [
          85245,
          24576
        ],
        [
          85501,
          24576
        ],
        [
          85757,
          24576
        ],
        [
          86013,
          24576
        ],
        [
          86269,
          24576
        ],
        [
          86525,
          24576
        ],
        [
          86781,
          24576
        ],
        [
          87037,
          24576
        ],
        [
          87293,
          24576
        ],
        [
          87549,
          24576
        ],
        [
          87805,
          24576
        ],
        [
          88061,
          24576
        ],
        [
          88317,
          24576
        ],
        [
          88573,
          24576
        ],
        [
          88829,
          24576
        ],
        [
          89085,
          24576
        ],
        [
          89341,
          24576
        ],
        [
          89597,
          24576
        ],
        [
          89853,
          24576
        ],
        [
          90109,
          24576
        ],
        [
          90365,
          24576
        ],
        [
          90620,
          24576
        ],
        [
          90876,
          24576
        ],
        [
          91132,
          24576
        ],
        [
          91388,
          24576
        ],
        [
          91644,
          24576
        ],
        [
          91900,
          24576
        ],
        [
          92156,
          24576
        ],
        [
          92412,
          24576
        ],
        [
          92668,
          24576
        ],
        [
          92924,
          24576
        ],
        [
          93180,
          24576
        ],
        [
          93436,
          24576
        ],
        [
          93692,
          24576
        ],
        [
          93948,
          24576
        ],
        [
          94204,
          24576
        ],
        [
          94460,
          24576
        ],
        [
          94716,
          24576
        ],
        [
          94972,
          24576
        ],
        [
          95228,
          24576
        ],
        [
          95484,
          24576
        ],
        [
          95740,
          24576
        ],
        [
          95996,
          24576
        ],
        [
          96252,
          24576
        ],
        [
          96508,
          24576
        ],
        [
          96764,
          24576
        ],
        [
          97020,
          24576
        ],
        [
          97276,
          24576
        ],
        [
          97532,
          24576
        ],
        [
          97787,
          24576
        ],
        [
          98043,
          24576
        ],
        [
          98299,
          24576
        ],
        [
          98555,
          24581
        ],
        [
          98811,
          24597
        ],
        [
          99065,
          24623
        ],
        [
          99319,
          24660
        ],
        [
          99570,
          24708
        ],
        [
          99819,
          24766
        ],
        [
          100066,
          24834
        ],
        [
          100310,
          24913
        ],
        [
          100550,
          25001
        ],
        [
          100786,
          25100
        ],
        [
          101018,
          25208
        ],
        [
          101245,
          25326
        ],
        [
          101467,
          25453
        ],
        [
          101684,
          25589
        ],
        [
          101895,
          25735
        ],
        [
          102099,
          25888
        ],
        [
          102297,
          26051
        ],
        [
          102488,
          26221
        ],
        [
          102672,
          26399
        ],
        [
          102848,
          26585
        ],
        [
          103016,
          26778
        ],
        [
          103176,
          26977
        ],
        [
          103328,
          27184
        ],
        [
          103471,
          27396
        ],
        [
          103605,
          27614
        ],
        [
          103730,
          27837
        ],
        [
          103845,
          28066
        ],
        [
          103951,
          28299
        ],
        [
          104047,
          28536
        ],
        [
          104133,
          28777
        ],
        [
          104209,
          29022
        ],
        [
          104274,
          29269
        ],
        [
          104329,
          29519
        ],
        [
          104374,
          29771
        ],
        [
          104409,
          30025
        ],
        [
          104432,
          30280
        ],
        [
          104445,
          30535
        ],
        [
          104448,
          30791
        ],
        [
          104448,
          31047
        ],
        [
          104448,
          31303
        ],
        [
          104448,
          31559
        ],
        [
          104448,
          31815
        ],
        [
          104448,
          32071
        ],
        [
          104448,
          32327
        ],
        [
          104448,
          32583
        ],
        [
          104448,
          32839
        ],
        [
          104448,
          33095
        ],
        [
          104448,
          33351
        ],
        [
          104448,
          33607
        ],
        [
          104448,
          33863
        ],
        [
          104448,
          34119
        ],
        [
          104448,
          34375
        ],
        [
          104448,
          34631
        ],
        [
          104448,
          34887
        ],
        [
          104448,
          35143
        ],
        [
          104448,
          35398
        ],
        [
          104448,
          35654
        ],
        [
          104448,
          35910
        ],
        [
          104448,
          36166
        ],
        [
          104448,
          36422
        ],
        [
          104448,
          36678
        ],
        [
          104448,
          36934
        ],
        [
          104448,
          37190
        ],
        [
          104448,
          37446
        ],
        [
          104448,
          37702
        ],
        [
          104448,
          37958
        ],
        [
          104448,
          38214
        ],
        [
          104448,
          38470
        ],
        [
          104448,
          38726
        ],
        [
          104448,
          38982
        ],
        [
          104448,
          39238
        ],
        [
          104448,
          39494
        ],
        [
          104448,
          39750
        ],
        [
          104448,
          40006
        ],
        [
          104448,
          40262
        ],
        [
          104448,
          40518
        ],
        [
          104448,
          40774
        ],
        [
          104448,
          41030
        ],
        [
          104448,
          41286
        ],
        [
          104448,
          41542
        ],
        [
          104448,
          41798
        ],
        [
          104448,
          42054
        ],
        [
          104448,
          42310
        ],
        [
          104448,
          42565
        ],
        [
          104448,
          42821
        ],
        [
          104448,
          43077
        ],
        [
          104448,
          43333
        ],
        [
          104448,
          43589
        ],
        [
          104448,
          43845
        ],
        [
          104448,
          44101
        ],
        [
          104448,
          44357
        ],
        [
          104448,
          44613
        ],
        [
          104448,
          44869
        ],
        [
          104448,
          45125
        ],
        [
          104448,
          45381
        ],
        [
          104448,
          45637
        ],
        [
          104448,
          45893
        ],
        [
          104448,
          46149
        ],
        [
          104448,
          46405
        ],
        [
          104448,
          46661
        ],
        [
          104448,
          46917
        ],
        [
          104448,
          47173
        ],
        [
          104448,
          47429
        ],
        [
          104448,
          47685
        ],
        [
          104448,
          47941
        ],
        [
          104448,
          48197
        ],
        [
          104448,
          48453
        ],
        [
          104448,
          48709
        ],
        [
          104448,
          48965
        ],
        [
          104448,
          49221
        ],
        [
          104448,
          49477
        ],
        [
          104448,
          49732
        ],
        [
          104448,
          49988
        ],
        [
          104448,
          50244
        ],
        [
          104448,
          50500
        ],
        [
          104448,
          50756
        ],
        [
          104448,
          51012
        ],
        [
          104448,
          51268
        ],
        [
          104448,
          51524
        ],
        [
          104448,
          51780
        ],
        [
          104448,
          52036
        ],
        [
          104448,
          52292
        ],
        [
          104448,
          52548
        ],
        [
          104448,
          52804
        ],
        [
          104448,
          53060
        ],
        [
          104448,
          53316
        ],
        [
          104448,
          53572
        ],
        [
          104448,
          53828
        ],
        [
          104448,
          54084
        ],
        [
          104448,
          54340
        ],
        [
          104448,
          54596
        ],
        [
          104448,
          54852
        ],
        [
          104448,
          55108
        ],
        [
          104448,
          55364
        ],
        [
          104448,
          55620
        ],
        [
          104448,
          55876
        ],
        [
          104448,
          56132
        ],
        [
          104448,
          56388
        ],
        [
          104448,
          56644
        ],
        [
          104448,
          56899
        ],
        [
          104448,
          57155
        ],
        [
          104448,
          57411
        ],
        [
          104448,
          57667
        ],
        [
          104448,
          57923
        ],
        [
          104448,
          58179
        ],
        [
          104448,
          58435
        ],
        [
          104448,
          58691
        ],
        [
          104448,
          58947
        ],
        [
          104448,
          59203
        ],
        [
          104448,
          59459
        ],
        [
          104448,
          59715
        ],
        [
          104448,
          59971
        ],
        [
          104448,
          60227
        ],
        [
          104448,
          60483
        ],
        [
          104448,
          60739
        ],
        [
          104448,
          60995
        ],
        [
          104448,
          61251
        ],
        [
          104448,
          61507
        ],
        [
          104439,
          61763
        ],
        [
          104421,
          62018
        ],
        [
          104391,
          62272
        ],
        [
          104351,
          62525
        ],
        [
          104301,
          62776
        ],
        [
          104240,
          63024
        ],
        [
          104169,
          63270
        ],
        [
          104088,
          63513
        ],
        [
          103996,
          63752
        ],
        [
          103895,
          63987
        ],
        [
          103784,
          64218
        ],
        [
          103664,
          64444
        ],
        [
          103534,
          64664
        ],
        [
          103395,
          64879
        ],
        [
          103247,
          65088
        ],
        [
          103091,
          65291
        ],
        [
          102927,
          65487
        ],
        [
          102754,
          65676
        ],
        [
          102574,
          65858
        ],
        [
          102386,
          66032
        ],
        [
          102191,
          66198
        ],
        [
          101990,
          66356
        ],
        [
          101782,
          66505
        ],
        [
          101568,
          66645
        ],
        [
          101348,
          66777
        ],
        [
          101123,
          66899
        ],
        [
          100894,
          67012
        ],
        [
          100659,
          67115
        ],
        [
          100421,
          67208
        ],
        [
          100179,
          67291
        ],
        [
          99933,
          67364
        ],
        [
          99685,
          67427
        ],
        [
          99435,
          67479
        ],
        [
          99182,
          67521
        ],
        [
          98928,
          67552
        ],
        [
          98673,
          67573
        ],
        [
          98417,
          67583
        ],
        [
          98161,
          67584
        ],
        [
          97905,
          67584
        ],
        [
          97650,
          67584
        ],
        [
          97394,
          67584
        ],
        [
          97138,
          67584
        ],
        [
          96882,
          67584
        ],
        [
          96626,
          67584
        ],
        [
          96370,
          67584
        ],
        [
          96114,
          67584
        ],
        [
          95858,
          67584
        ],
        [
          95602,
          67584
        ],
        [
          95346,
          67584
        ],
        [
          95090,
          67584
        ],
        [
          94834,
          67584
        ],
        [
          94578,
          67584
        ],
        [
          94322,
          67584
        ],
        [
          94066,
          67584
        ],
        [
          93810,
          67584
        ],
        [
          93554,
          67584
        ],
        [
          93298,
          67584
        ],
        [
          93042,
          67584
        ],
        [
          92786,
          67584
        ],
        [
          92530,
          67584
        ],
        [
          92274,
          67584
        ],
        [
          92018,
          67584
        ],
        [
          91762,
          67584
        ],
        [
          91506,
          67584
        ],
        [
          91250,
          67584
        ],
        [
          90994,
          67584
        ],
        [
          90738,
          67584
        ],
        [
          90483,
          67584
        ],
        [
          90227,
          67584
        ],
        [
          89971,
          67584
        ],
        [
          89715,
          67584
        ],
        [
          89459,
          67584
        ],
        [
          89203,
          67584
        ],
        [
          88947,
          67584
        ],
        [
          88691,
          67584
        ],
        [
          88435,
          67584
        ],
        [
          88179,
          67584
        ],
        [
          87923,
          67584
        ],
        [
          87667,
          67584
        ],
        [
          87411,
          67584
        ],
        [
          87155,
          67584
        ],
        [
          86899,
          67584
        ],
        [
          86643,
          67584
        ],
        [
          86387,
          67584
        ],
        [
          86131,
          67584
        ],
        [
          85875,
          67584
        ],
        [
          85619,
          67584
        ],
        [
          85363,
          67584
        ],
        [
          85107,
          67584
        ],
        [
          84851,
          67584
        ],
        [
          84595,
          67584
        ],
        [
          84339,
          67584
        ],
        [
          84083,
          67584
        ],
        [
          83827,
          67584
        ],
        [
          83571,
          67584
        ],
        [
          83316,
          67584
        ],
        [
          83060,
          67584
        ],
        [
          82804,
          67584
        ],
        [
          82548,
          67584
        ],
        [
          82292,
          67584
        ],
        [
          82036,
          67584
        ],
        [
          81780,
          67584
        ],
        [
          81524,
          67584
        ],
        [
          81268,
          67584
        ],
        [
          81012,
          67584
        ],
        [
          80756,
          67584
        ],
        [
          80500,
          67584
        ],
        [
          80244,
          67584
        ],
        [
          79988,
          67584
        ],
        [
          79732,
          67586
        ],
        [
          79476,
          67597
        ],
        [
          79221,
          67619
        ],
        [
          78967,
          67651
        ],
        [
          78715,
          67694
        ],
        [
          78465,
          67747
        ],
        [
          78217,
          67811
        ],
        [
          77972,
          67885
        ],
        [
          77730,
          67969
        ],
        [
          77492,
          68064
        ],
        [
          77258,
          68168
        ],
        [
          77029,
          68281
        ],
        [
          76805,
          68404
        ],
        [
          76586,
          68537
        ],
        [
          76372,
          68678
        ],
        [
          76165,
          68828
        ],
        [
          75964,
          68987
        ],
        [
          75770,
          69154
        ],
        [
          75583,
          69329
        ],
        [
          75404,
          69511
        ],
        [
          75232,
          69701
        ],
        [
          75068,
          69898
        ],
        [
          74913,
          70101
        ],
        [
          74766,
          70311
        ],
        [
          74628,
          70526
        ],
        [
          74499,
          70747
        ],
        [
          74380,
          70974
        ],
        [
          74270,
          71205
        ],
        [
          74170,
          71440
        ],
        [
          74079,
          71680
        ],
        [
          73999,
          71923
        ],
        [
          73929,
          72169
        ],
        [
          73869,
          72418
        ],
        [
          73820,
          72669
        ],
        [
          73781,
          72922
        ],
        [
          73753,
          73177
        ],
        [
          73735,
          73432
        ],
        [
          73728,
          73688
        ],
        [
          73728,
          73944
        ],
        [
          73728,
          74200
        ],
        [
          73728,
          74456
        ],
        [
          73728,
          74712
        ],
        [
          73728,
          74968
        ],
        [
          73728,
          75223
        ],
        [
          73728,
          75479
        ],
        [
          73728,
          75735
        ],
        [
          73728,
          75991
        ],
        [
          73728,
          76247
        ],
        [
          73728,
          76503
        ],
        [
          73728,
          76759
        ],
        [
          73728,
          77015
        ],
        [
          73728,
          77271
        ],
        [
          73728,
          77527
        ],
        [
          73728,
          77783
        ],
        [
          73728,
          78039
        ],
        [
          73728,
          78295
        ],
        [
          73728,
          78551
        ],
        [
          73728,
          78807
        ],
        [
          73728,
          79063
        ],
        [
          73728,
          79319
        ],
        [
          73728,
          79575
        ],
        [
          73728,
          79831
        ],
        [
          73728,
          80087
        ],
        [
          73728,
          80343
        ],
        [
          73728,
          80599
        ],
        [
          73728,
          80855
        ],
        [
          73728,
          81111
        ],
        [
          73728,
          81367
        ],
        [
          73728,
          81623
        ],
        [
          73728,
          81879
        ],
        [
          73728,
          82135
        ],
        [
          73728,
          82390
        ],
        [
          73728,
          82646
        ],
        [
          73728,
          82902
        ],
        [
          73732,
          83158
        ],
        [
          73746,
          83414
        ],
        [
          73771,
          83669
        ],
        [
          73806,
          83922
        ],
        [
          73852,
          84174
        ],
        [
          73909,
          84424
        ],
        [
          73976,
          84671
        ],
        [
          74053,
          84915
        ],
        [
          74140,
          85155
        ],
        [
          74237,
          85392
        ],
        [
          74344,
          85625
        ],
        [
          74460,
          85853
        ],
        [
          74586,
          86076
        ],
        [
          74721,
          86293
        ],
        [
          74865,
          86505
        ],
        [
          75018,
          86710
        ],
        [
          75179,
          86909
        ],
        [
          75348,
          87101
        ],
        [
          75525,
          87286
        ],
        [
          75710,
          87463
        ],
        [
          75901,
          87633
        ],
        [
          76100,
          87794
        ],
        [
          76305,
          87947
        ],
        [
          76517,
          88091
        ],
        [
          76734,
          88226
        ],
        [
          76957,
          88352
        ],
        [
          77185,
          88469
        ],
        [
          77417,
          88576
        ],
        [
          77654,
          88674
        ],
        [
          77894,
          88761
        ],
        [
          78138,
          88838
        ],
        [
          78385,
          88905
        ],
        [
          78635,
          88962
        ],
        [
          78887,
          89008
        ],
        [
          79140,
          89044
        ],
        [
          79395,
          89069
        ],
        [
          79650,
          89084
        ],
        [
          79906,
          89088
        ],
        [
          80162,
          89088
        ],
        [
          80418,
          89088
        ],
        [
          80674,
          89088
        ],
        [
          80930,
          89088
        ],
        [
          81186,
          89088
        ],
        [
          81442,
          89088
        ],
        [
          81698,
          89088
        ],
        [
          81954,
          89088
        ],
        [
          82210,
          89088
        ],
        [
          82466,
          89088
        ],
        [
          82722,
          89088
        ],
        [
          82978,
          89088
        ],
        [
          83234,
          89088
        ],
        [
          83490,
          89088
        ],
        [
          83746,
          89088
        ],
        [
          84002,
          89088
        ],
        [
          84258,
          89088
        ],
        [
          84513,
          89088
        ],
        [
          84769,
          89088
        ],
        [
          85025,
          89088
        ],
        [
          85281,
          89088
        ],
        [
          85537,
          89088
        ],
        [
          85793,
          89088
        ],
        [
          86049,
          89088
        ],
        [
          86305,
          89088
        ],
        [
          86561,
          89088
        ],
        [
          86817,
          89088
        ],
        [
          87073,
          89088
        ],
        [
          87329,
          89088
        ],
        [
          87585,
          89088
        ],
        [
          87841,
          89088
        ],
        [
          88097,
          89088
        ],
        [
          88353,
          89088
        ],
        [
          88609,
          89088
        ],
        [
          88865,
          89088
        ],
        [
          89121,
          89088
        ],
        [
          89377,
          89088
        ],
        [
          89633,
          89088
        ],
        [
          89889,
          89088
        ],
        [
          90145,
          89088
        ],
        [
          90401,
          89088
        ],
        [
          90657,
          89088
        ],
        [
          90913,
          89088
        ],
        [
          91169,
          89088
        ],
        [
          91425,
          89088
        ],
        [
          91680,
          89088
        ],
        [
          91936,
          89088
        ],
        [
          92192,
          89088
        ],
        [
          92448,
          89088
        ],
        [
          92704,
          89088
        ],
        [
          92960,
          89088
        ],
        [
          93216,
          89088
        ],
        [
          93472,
          89088
        ],
        [
          93728,
          89088
        ],
        [
          93984,
          89088
        ],
        [
          94240,
          89088
        ],
        [
          94496,
          89088
        ],
        [
          94752,
          89088
        ],
        [
          95008,
          89088
        ],
        [
          95264,
          89088
        ],
        [
          95520,
          89088
        ],
        [
          95776,
          89088
        ],
        [
          96032,
          89088
        ],
        [
          96288,
          89088
        ],
        [
          96544,
          89088
        ],
        [
          96800,
          89088
        ],
        [
          97056,
          89088
        ],
        [
          97312,
          89088
        ],
        [
          97568,
          89088
        ],
        [
          97824,
          89088
        ],
        [
          98080,
          89088
        ],
        [
          98336,
          89088
        ],
        [
          98591,
          89095
        ],
        [
          98847,
          89112
        ],
        [
          99101,
          89140
        ],
        [
          99354,
          89179
        ],
        [
          99605,
          89227
        ],
        [
          99854,
          89287
        ],
        [
          100101,
          89357
        ],
        [
          100344,
          89437
        ],
        [
          100583,
          89527
        ],
        [
          100819,
          89626
        ],
        [
          101050,
          89736
        ],
        [
          101277,
          89855
        ],
        [
          101498,
          89984
        ],
        [
          101714,
          90121
        ],
        [
          101924,
          90268
        ],
        [
          102128,
          90423
        ],
        [
          102325,
          90586
        ],
        [
          102515,
          90758
        ],
        [
          102697,
          90937
        ],
        [
          102872,
          91124
        ],
        [
          103039,
          91317
        ],
        [
          103198,
          91518
        ],
        [
          103349,
          91725
        ],
        [
          103490,
          91938
        ],
        [
          103623,
          92157
        ],
        [
          103747,
          92381
        ],
        [
          103861,
          92611
        ],
        [
          103965,
          92844
        ],
        [
          104059,
          93082
        ],
        [
          104144,
          93324
        ],
        [
          104218,
          93569
        ],
        [
          104283,
          93816
        ],
        [
          104336,
          94067
        ],
        [
          104380,
          94319
        ],
        [
          104412,
          94573
        ],
        [
          104435,
          94828
        ],
        [
          104446,
          95083
        ],
        [
          104448,
          95339
        ],
        [
          104448,
          95595
        ],
        [
          104448,
          95851
        ],
        [
          104448,
          96107
        ],
        [
          104448,
          96363
        ],
        [
          104448,
          96619
        ],
        [
          104448,
          96875
        ],
        [
          104448,
          97131
        ],
        [
          104448,
          97387
        ],
        [
          104448,
          97643
        ],
        [
          104448,
          97899
        ],
        [
          104448,
          98155
        ],
        [
          104448,
          98411
        ],
        [
          104448,
          98667
        ],
        [
          104448,
          98923
        ],
        [
          104448,
          99179
        ],
        [
          104448,
          99435
        ],
        [
          104448,
          99691
        ],
        [
          104448,
          99947
        ],
        [
          104448,
          100203
        ],
        [
          104448,
          100459
        ],
        [
          104448,
          100715
        ],
        [
          104448,
          100970
        ],
        [
          104448,
          101226
        ],
        [
          104448,
          101482
        ],
        [
          104448,
          101738
        ],
        [
          104448,
          101994
        ],
        [
          104448,
          102250
        ],
        [
          104448,
          102506
        ],
        [
          104448,
          102762
        ],
        [
          104448,
          103018
        ],
        [
          104448,
          103274
        ],
        [
          104448,
          103530
        ],
        [
          104448,
          103786
        ],
        [
          104448,
          104042
        ],
        [
          104448,
          104298
        ],
        [
          104447,
          104554
        ],
        [
          104437,
          104810
        ],
        [
          104417,
          105065
        ],
        [
          104386,
          105319
        ],
        [
          104344,
          105571
        ],
        [
          104292,
          105822
        ],
        [
          104230,
          106070
        ],
        [
          104157,
          106316
        ],
        [
          104074,
          106558
        ],
        [
          103981,
          106796
        ],
        [
          103879,
          107031
        ],
        [
          103766,
          107261
        ],
        [
          103644,
          107486
        ],
        [
          103513,
          107706
        ],
        [
          103373,
          107920
        ],
        [
          103224,
          108128
        ],
        [
          103067,
          108330
        ],
        [
          102901,
          108525
        ],
        [
          102727,
          108712
        ],
        [
          102546,
          108893
        ],
        [
          102357,
          109066
        ],
        [
          102161,
          109230
        ],
        [
          101958,
          109387
        ],
        [
          101749,
          109535
        ],
        [
          101535,
          109674
        ],
        [
          101314,
          109804
        ],
        [
          101088,
          109925
        ],
        [
          100858,
          110036
        ],
        [
          100623,
          110137
        ],
        [
          100384,
          110229
        ],
        [
          100141,
          110311
        ],
        [
          99896,
          110382
        ],
        [
          99647,
          110443
        ],
        [
          99396,
          110494
        ],
        [
          99144,
          110534
        ],
        [
          98889,
          110564
        ],
        [
          98634,
          110583
        ],
        [
          98378,
          110592
        ],
        [
          98122,
          110592
        ],
        [
          97866,
          110592
        ],
        [
          97610,
          110592
        ],
        [
          97354,
          110592
        ],
        [
          97098,
          110592
        ],
        [
          96842,
          110592
        ],
        [
          96587,
          110592
        ],
        [
          96331,
          110592
        ],
        [
          96075,
          110592
        ],
        [
          95819,
          110592
        ],
        [
          95563,
          110592
        ],
        [
          95307,
          110592
        ],
        [
          95051,
          110592
        ],
        [
          94795,
          110592
        ],
        [
          94539,
          110592
        ],
        [
          94283,
          110592
        ],
        [
          94027,
          110592
        ],
        [
          93771,
          110592
        ],
        [
          93515,
          110592
        ],
        [
          93259,
          110592
        ],
        [
          93003,
          110592
        ],
        [
          92747,
          110592
        ],
        [
          92491,
          110592
        ],
        [
          92235,
          110592
        ],
        [
          91979,
          110592
        ],
        [
          91723,
          110592
        ],
        [
          91467,
          110592
        ],
        [
          91211,
          110592
        ],
        [
          90955,
          110592
        ],
        [
          90699,
          110592
        ],
        [
          90443,
          110592
        ],
        [
          90187,
          110592
        ],
        [
          89931,
          110592
        ],
        [
          89675,
          110592
        ],
        [
          89420,
          110592
        ],
        [
          89164,
          110592
        ],
        [
          88908,
          110592
        ],
        [
          88652,
          110592
        ],
        [
          88396,
          110592
        ],
        [
          88140,
          110592
        ],
        [
          87884,
          110592
        ],
        [
          87628,
          110592
        ],
        [
          87372,
          110592
        ],
        [
          87116,
          110592
        ],
        [
          86860,
          110592
        ],
        [
          86604,
          110592
        ],
        [
          86348,
          110592
        ],
        [
          86092,
          110592
        ],
        [
          85836,
          110592
        ],
        [
          85580,
          110592
        ],
        [
          85324,
          110592
        ],
        [
          85068,
          110592
        ],
        [
          84812,
          110592
        ],
        [
          84556,
          110592
        ],
        [
          84300,
          110592
        ],
        [
          84044,
          110592
        ],
        [
          83788,
          110592
        ],
        [
          83532,
          110592
        ],
        [
          83276,
          110592
        ],
        [
          83020,
          110592
        ],
        [
          82764,
          110592
        ],
        [
          82508,
          110592
        ],
        [
          82253,
          110592
        ],
        [
          81997,
          110592
        ],
        [
          81741,
          110592
        ],
        [
          81485,
          110592
        ],
        [
          81229,
          110592
        ],
        [
          80973,
          110592
        ],
        [
          80717,
          110592
        ],
        [
          80461,
          110592
        ],
        [
          80205,
          110592
        ],
        [
          79949,
          110592
        ],
        [
          79693,
          110592
        ],
        [
          79437,
          110592
        ],
        [
          79181,
          110592
        ],
        [
          78925,
          110592
        ],
        [
          78669,
          110592
        ],
        [
          78413,
          110592
        ],
        [
          78157,
          110592
        ],
        [
          77901,
          110592
        ],
        [
          77645,
          110592
        ],
        [
          77389,
          110592
        ],
        [
          77133,
          110592
        ],
        [
          76877,
          110592
        ],
        [
          76621,
          110592
        ],
        [
          76365,
          110592
        ],
        [
          76109,
          110592
        ],
        [
          75853,
          110592
        ],
        [
          75597,
          110592
        ],
        [
          75341,
          110592
        ],
        [
          75086,
          110592
        ],
        [
          74830,
          110592
        ],
        [
          74574,
          110592
        ],
        [
          74318,
          110592
        ],
        [
          74062,
          110592
        ],
        [
          73806,
          110592
        ],
        [
          73550,
          110592
        ],
        [
          73294,
          110592
        ],
        [
          73038,
          110592
        ],
        [
          72782,
          110592
        ],
        [
          72526,
          110592
        ],
        [
          72270,
          110592
        ],
        [
          72014,
          110592
        ],
        [
          71758,
          110592
        ],
        [
          71502,
          110592
        ],
        [
          71246,
          110592
        ],
        [
          70990,
          110592
        ],
        [
          70734,
          110592
        ],
        [
          70478,
          110592
        ],
        [
          70222,
          110592
        ],
        [
          69966,
          110592
        ],
        [
          69710,
          110592
        ],
        [
          69454,
          110592
        ],
        [
          69198,
          110592
        ],
        [
          68942,
          110592
        ],
        [
          68686,
          110592
        ],
        [
          68430,
          110592
        ],
        [
          68175,
          110592
        ],
        [
          67919,
          110592
        ],
        [
          67663,
          110592
        ],
        [
          67407,
          110592
        ],
        [
          67151,
          110592
        ],
        [
          66895,
          110592
        ],
        [
          66639,
          110592
        ],
        [
          66383,
          110592
        ],
        [
          66127,
          110592
        ],
        [
          65871,
          110592
        ],
        [
          65615,
          110592
        ],
        [
          65359,
          110592
        ],
        [
          65103,
          110592
        ],
        [
          64847,
          110592
        ],
        [
          64591,
          110592
        ],
        [
          64335,
          110592
        ],
        [
          64079,
          110592
        ],
        [
          63823,
          110592
        ],
        [
          63567,
          110592
        ],
        [
          63311,
          110592
        ],
        [
          63055,
          110592
        ],
        [
          62799,
          110592
        ],
        [
          62543,
          110592
        ],
        [
          62287,
          110592
        ],
        [
          62031,
          110592
        ],
        [
          61775,
          110592
        ],
        [
          61519,
          110592
        ],
        [
          61263,
          110592
        ],
        [
          61008,
          110592
        ],
        [
          60752,
          110592
        ],
        [
          60496,
          110592
        ],
        [
          60240,
          110592
        ],
        [
          59984,
          110592
        ],
        [
          59728,
          110592
        ],
        [
          59472,
          110592
        ],
        [
          59216,
          110592
        ],
        [
          58960,
          110592
        ],
        [
          58704,
          110592
        ],
        [
          58448,
          110592
        ],
        [
          58192,
          110592
        ],
        [
          57936,
          110592
        ],
        [
          57680,
          110592
        ],
        [
          57424,
          110592
        ],
        [
          57168,
          110592
        ],
        [
          56912,
          110592
        ],
        [
          56656,
          110592
        ],
        [
          56400,
          110592
        ],
        [
          56144,
          110592
        ],
        [
          55888,
          110592
        ],
        [
          55632,
          110592
        ],
        [
          55376,
          110592
        ],
        [
          55120,
          110589
        ],
        [
          54865,
          110577
        ],
        [
          54610,
          110554
        ],
        [
          54356,
          110520
        ],
        [
          54104,
          110475
        ],
        [
          53854,
          110420
        ],
        [
          53607,
          110355
        ],
        [
          53362,
          110280
        ],
        [
          53121,
          110194
        ],
        [
          52883,
          110098
        ],
        [
          52650,
          109993
        ],
        [
          52422,
          109878
        ],
        [
          52198,
          109754
        ],
        [
          51980,
          109620
        ],
        [
          51767,
          109477
        ],
        [
          51561,
          109326
        ],
        [
          51361,
          109166
        ],
        [
          51168,
          108998
        ],
        [
          50982,
          108822
        ],
        [
          50803,
          108639
        ],
        [
          50633,
          108448
        ],
        [
          50470,
          108250
        ],
        [
          50316,
          108046
        ],
        [
          50170,
          107836
        ],
        [
          50034,
          107619
        ],
        [
          49906,
          107397
        ],
        [
          49788,
          107170
        ],
        [
          49679,
          106938
        ],
        [
          49581,
          106702
        ],
        [
          49492,
          106462
        ],
        [
          49413,
          106219
        ],
        [
          49344,
          105972
        ],
        [
          49286,
          105723
        ],
        [
          49238,
          105472
        ],
        [
          49201,
          105218
        ],
        [
          49174,
          104964
        ],
        [
          49158,
          104708
        ],
        [
          49152,
          104453
        ],
        [
          49152,
          104197
        ],
        [
          49152,
          103941
        ],
        [
          49152,
          103685
        ],
        [
          49152,
          103429
        ],
        [
          49152,
          103173
        ],
        [
          49152,
          102917
        ],
        [
          49152,
          102661
        ],
        [
          49152,
          102405
        ],
        [
          49152,
          102149
        ],
        [
          49152,
          101893
        ],
        [
          49152,
          101637
        ],
        [
          49152,
          101381
        ],
        [
          49152,
          101125
        ],
        [
          49152,
          100869
        ],
        [
          49152,
          100613
        ],
        [
          49152,
          100357
        ],
        [
          49152,
          100101
        ],
        [
          49152,
          99845
        ],
        [
          49152,
          99589
        ],
        [
          49152,
          99333
        ],
        [
          49152,
          99077
        ],
        [
          49152,
          98821
        ],
        [
          49152,
          98565
        ],
        [
          49152,
          98309
        ],
        [
          49152,
          98053
        ],
        [
          49152,
          97798
        ],
        [
          49152,
          97542
        ],
        [
          49152,
          97286
        ],
        [
          49152,
          97030
        ],
        [
          49152,
          96774
        ],
        [
          49152,
          96518
        ],
        [
          49152,
          96262
        ],
        [
          49152,
          96006
        ],
        [
          49152,
          95750
        ],
        [
          49152,
          95494
        ],
        [
          49152,
          95238
        ],
        [
          49152,
          94982
        ],
        [
          49152,
          94726
        ],
        [
          49152,
          94470
        ],
        [
          49152,
          94214
        ],
        [
          49152,
          93958
        ],
        [
          49152,
          93702
        ],
        [
          49152,
          93446
        ],
        [
          49152,
          93190
        ],
        [
          49152,
          92934
        ],
        [
          49152,
          92678
        ],
        [
          49152,
          92422
        ],
        [
          49152,
          92166
        ],
        [
          49152,
          91910
        ],
        [
          49152,
          91654
        ],
        [
          49152,
          91398
        ],
        [
          49152,
          91142
        ],
        [
          49152,
          90886
        ],
        [
          49152,
          90631
        ],
        [
          49152,
          90375
        ],
        [
          49152,
          90119
        ],
        [
          49152,
          89863
        ],
        [
          49152,
          89607
        ],
        [
          49152,
          89351
        ],
        [
          49152,
          89095
        ],
        [
          49147,
          88839
        ],
        [
          49131,
          88583
        ],
        [
          49105,
          88329
        ],
        [
          49068,
          88076
        ],
        [
          49021,
          87824
        ],
        [
          48963,
          87575
        ],
        [
          48894,
          87328
        ],
        [
          48816,
          87084
        ],
        [
          48728,
          86844
        ],
        [
          48629,
          86608
        ],
        [
          48521,
          86376
        ],
        [
          48403,
          86149
        ],
        [
          48276,
          85927
        ],
        [
          48140,
          85710
        ],
        [
          47995,
          85499
        ],
        [
          47841,
          85295
        ],
        [
          47679,
          85097
        ],
        [
          47508,
          84905
        ],
        [
          47330,
          84722
        ],
        [
          47145,
          84545
        ],
        [
          46952,
          84377
        ],
        [
          46752,
          84217
        ],
        [
          46546,
          84065
        ],
        [
          46334,
          83922
        ],
        [
          46116,
          83788
        ],
        [
          45892,
          83663
        ],
        [
          45664,
          83548
        ],
        [
          45431,
          83442
        ],
        [
          45194,
          83346
        ],
        [
          44953,
          83260
        ],
        [
          44708,
          83184
        ],
        [
          44461,
          83118
        ],
        [
          44211,
          83063
        ],
        [
          43959,
          83018
        ],
        [
          43705,
          82984
        ],
        [
          43451,
          82960
        ],
        [
          43195,
          82947
        ],
        [
          42939,
          82944
        ],
        [
          42683,
          82944
        ],
        [
          42427,
          82944
        ],
        [
          42171,
          82944
        ],
        [
          41915,
          82944
        ],
        [
          41659,
          82944
        ],
        [
          41403,
          82944
        ],
        [
          41147,
          82944
        ],
        [
          40891,
          82944
        ],
        [
          40635,
          82944
        ],
        [
          40379,
          82944
        ],
        [
          40123,
          82944
        ],
        [
          39867,
          82944
        ],
        [
          39611,
          82944
        ],
        [
          39356,
          82944
        ],
        [
          39100,
          82944
        ],
        [
          38844,
          82944
        ],
        [
          38588,
          82944
        ],
        [
          38332,
          82944
        ],
        [
          38076,
          82944
        ],
        [
          37820,
          82944
        ],
        [
          37564,
          82944
        ],
        [
          37308,
          82944
        ],
        [
          37052,
          82944
        ],
        [
          36796,
          82944
        ],
        [
          36540,
          82944
        ],
        [
          36284,
          82944
        ],
        [
          36028,
          82944
        ],
        [
          35772,
          82944
        ],
        [
          35516,
          82944
        ],
        [
          35260,
          82944
        ],
        [
          35004,
          82944
        ],
        [
          34748,
          82944
        ],
        [
          34492,
          82944
        ],
        [
          34236,
          82944
        ],
        [
          33980,
          82944
        ],
        [
          33724,
          82944
        ],
        [
          33468,
          82944
        ],
        [
          33212,
          82944
        ],
        [
          32956,
          82944
        ],
        [
          32700,
          82944
        ],
        [
          32444,
          82944
        ],
        [
          32189,
          82944
        ],
        [
          31933,
          82944
        ],
        [
          31677,
          82944
        ],
        [
          31421,
          82944
        ],
        [
          31165,
          82944
        ],
        [
          30909,
          82944
        ],
        [
          30653,
          82944
        ],
        [
          30397,
          82935
        ],
        [
          30142,
          82917
        ],
        [
          29887,
          82887
        ],
        [
          29635,
          82847
        ],
        [
          29384,
          82797
        ],
        [
          29135,
          82736
        ],
        [
          28889,
          82665
        ],
        [
          28647,
          82583
        ],
        [
          28407,
          82492
        ],
        [
          28172,
          82391
        ],
        [
          27942,
          82280
        ],
        [
          27716,
          82159
        ],
        [
          27495,
          82030
        ],
        [
          27280,
          81891
        ],
        [
          27071,
          81743
        ],
        [
          26869,
          81587
        ],
        [
          26673,
          81422
        ],
        [
          26484,
          81250
        ],
        [
          26302,
          81069
        ],
        [
          26128,
          80882
        ],
        [
          25962,
          80687
        ],
        [
          25804,
          80485
        ],
        [
          25655,
          80277
        ],
        [
          25514,
          80063
        ],
        [
          25383,
          79844
        ],
        [
          25261,
          79619
        ],
        [
          25148,
          79389
        ],
        [
          25045,
          79155
        ],
        [
          24952,
          78916
        ],
        [
          24869,
          78674
        ],
        [
          24796,
          78429
        ],
        [
          24733,
          78181
        ],
        [
          24681,
          77930
        ],
        [
          24639,
          77678
        ],
        [
          24608,
          77424
        ],
        [
          24587,
          77169
        ],
        [
          24577,
          76913
        ],
        [
          24576,
          76657
        ],
        [
          24576,
          76401
        ],
        [
          24576,
          76145
        ],
        [
          24576,
          75889
        ],
        [
          24576,
          75633
        ],
        [
          24576,
          75377
        ],
        [
          24576,
          75121
        ],
        [
          24576,
          74865
        ],
        [
          24576,
          74609
        ],
        [
          24576,
          74353
        ],
        [
          24576,
          74097
        ],
        [
          24576,
          73841
        ],
        [
          24576,
          73585
        ],
        [
          24576,
          73329
        ],
        [
          24576,
          73074
        ],
        [
          24576,
          72818
        ],
        [
          24576,
          72562
        ],
        [
          24576,
          72306
        ],
        [
          24576,
          72050
        ],
        [
          24576,
          71794
        ],
        [
          24576,
          71538
        ],
        [
          24576,
          71282
        ],
        [
          24576,
          71026
        ],
        [
          24576,
          70770
        ],
        [
          24576,
          70514
        ],
        [
          24576,
          70258
        ],
        [
          24576,
          70002
        ],
        [
          24576,
          69746
        ],
        [
          24576,
          69490
        ],
        [
          24576,
          69234
        ],
        [
          24576,
          68978
        ],
        [
          24576,
          68722
        ],
        [
          24576,
          68466
        ],
        [
          24576,
          68210
        ],
        [
          24576,
          67954
        ],
        [
          24576,
          67698
        ],
        [
          24578,
          67442
        ],
        [
          24589,
          67187
        ],
        [
          24611,
          66932
        ],
        [
          24643,
          66678
        ],
        [
          24686,
          66425
        ],
        [
          24740,
          66175
        ],
        [
          24804,
          65927
        ],
        [
          24878,
          65682
        ],
        [
          24962,
          65441
        ],
        [
          25056,
          65203
        ],
        [
          25160,
          64969
        ],
        [
          25274,
          64740
        ],
        [
          25397,
          64515
        ],
        [
          25530,
          64296
        ],
        [
          25671,
          64083
        ],
        [
          25821,
          63876
        ],
        [
          25980,
          63675
        ],
        [
          26147,
          63481
        ],
        [
          26322,
          63294
        ],
        [
          26504,
          63114
        ],
        [
          26694,
          62943
        ],
        [
          26891,
          62779
        ],
        [
          27094,
          62624
        ],
        [
          27304,
          62477
        ],
        [
          27520,
          62339
        ],
        [
          27741,
          62211
        ],
        [
          27967,
          62091
        ],
        [
          28199,
          61981
        ],
        [
          28434,
          61881
        ],
        [
          28674,
          61791
        ],
        [
          28917,
          61711
        ],
        [
          29163,
          61641
        ],
        [
          29412,
          61581
        ],
        [
          29663,
          61532
        ],
        [
          29916,
          61493
        ],
        [
          30170,
          61465
        ],
        [
          30426,
          61447
        ],
        [
          30681,
          61440
        ],
        [
          30937,
          61440
        ],
        [
          31193,
          61440
        ],
        [
          31449,
          61440
        ],
        [
          31705,
          61440
        ],
        [
          31961,
          61440
        ],
        [
          32217,
          61440
        ],
        [
          32473,
          61440
        ],
        [
          32729,
          61440
        ],
        [
          32985,
          61440
        ],
        [
          33241,
          61440
        ],
        [
          33497,
          61440
        ],
        [
          33753,
          61440
        ],
        [
          34009,
          61440
        ],
        [
          34265,
          61440
        ],
        [
          34521,
          61440
        ],
        [
          34777,
          61440
        ],
        [
          35033,
          61440
        ],
        [
          35289,
          61440
        ],
        [
          35545,
          61440
        ],
        [
          35801,
          61440
        ],
        [
          36057,
          61440
        ],
        [
          36313,
          61440
        ],
        [
          36569,
          61440
        ],
        [
          36825,
          61440
        ],
        [
          37080,
          61436
        ],
        [
          37336,
          61422
        ],
        [
          37591,
          61397
        ],
        [
          37844,
          61361
        ],
        [
          38096,
          61315
        ],
        [
          38346,
          61259
        ],
        [
          38593,
          61192
        ],
        [
          38837,
          61115
        ],
        [
          39077,
          61027
        ],
        [
          39314,
          60930
        ],
        [
          39547,
          60823
        ],
        [
          39775,
          60707
        ],
        [
          39997,
          60581
        ],
        [
          40215,
          60446
        ],
        [
          40426,
          60302
        ],
        [
          40632,
          60149
        ],
        [
          40831,
          59988
        ],
        [
          41023,
          59819
        ],
        [
          41207,
          59642
        ],
        [
          41385,
          59457
        ],
        [
          41554,
          59265
        ],
        [
          41715,
          59066
        ],
        [
          41868,
          58861
        ],
        [
          42012,
          58649
        ],
        [
          42147,
          58432
        ],
        [
          42273,
          58209
        ],
        [
          42390,
          57981
        ],
        [
          42497,
          57749
        ],
        [
          42594,
          57512
        ],
        [
          42682,
          57272
        ],
        [
          42759,
          57028
        ],
        [
          42826,
          56781
        ],
        [
          42883,
          56531
        ],
        [
          42929,
          56279
        ],
        [
          42964,
          56026
        ],
        [
          42990,
          55771
        ],
        [
          43004,
          55516
        ],
        [
          43008,
          55260
        ],
        [
          43008,
          55004
        ],
        [
          43008,
          54748
        ],
        [
          43008,
          54492
        ],
        [
          43008,
          54236
        ],
        [
          43008,
          53980
        ],
        [
          43008,
          53724
        ],
        [
          43008,
          53468
        ],
        [
          43008,
          53212
        ],
        [
          43008,
          52956
        ],
        [
          43008,
          52700
        ],
        [
          43008,
          52444
        ],
        [
          43008,
          52188
        ],
        [
          43008,
          51932
        ],
        [
          43008,
          51676
        ],
        [
          43008,
          51420
        ],
        [
          43008,
          51164
        ],
        [
          43008,
          50908
        ],
        [
          43008,
          50652
        ],
        [
          43008,
          50396
        ],
        [
          43008,
          50140
        ],
        [
          43008,
          49884
        ],
        [
          43008,
          49629
        ],
        [
          43008,
          49373
        ],
        [
          43008,
          49117
        ],
        [
          43001,
          48861
        ],
        [
          42984,
          48605
        ],
        [
          42955,
          48351
        ],
        [
          42917,
          48098
        ],
        [
          42868,
          47847
        ],
        [
          42808,
          47598
        ],
        [
          42738,
          47352
        ],
        [
          42658,
          47109
        ],
        [
          42568,
          46869
        ],
        [
          42468,
          46633
        ],
        [
          42358,
          46402
        ],
        [
          42239,
          46176
        ],
        [
          42110,
          45954
        ],
        [
          41973,
          45739
        ],
        [
          41826,
          45529
        ],
        [
          41671,
          45325
        ],
        [
          41507,
          45129
        ],
        [
          41336,
          44939
        ],
        [
          41156,
          44756
        ],
        [
          40969,
          44581
        ],
        [
          40776,
          44414
        ],
        [
          40575,
          44255
        ],
        [
          40368,
          44105
        ],
        [
          40154,
          43963
        ],
        [
          39935,
          43831
        ],
        [
          39711,
          43708
        ],
        [
          39482,
          43594
        ],
        [
          39248,
          43490
        ],
        [
          39010,
          43395
        ],
        [
          38769,
          43311
        ],
        [
          38524,
          43237
        ],
        [
          38276,
          43173
        ],
        [
          38026,
          43119
        ],
        [
          37773,
          43076
        ],
        [
          37520,
          43043
        ],
        [
          37265,
          43021
        ],
        [
          37009,
          43010
        ],
        [
          36753,
          43008
        ],
        [
          36497,
          43008
        ],
        [
          36241,
          43008
        ],
        [
          35985,
          43008
        ],
        [
          35729,
          43008
        ],
        [
          35473,
          43008
        ],
        [
          35217,
          43008
        ],
        [
          34961,
          43008
        ],
        [
          34705,
          43008
        ],
        [
          34449,
          43008
        ],
        [
          34193,
          43008
        ],
        [
          33937,
          43008
        ],
        [
          33681,
          43008
        ],
        [
          33425,
          43008
        ],
        [
          33169,
          43008
        ],
        [
          32913,
          43008
        ],
        [
          32657,
          43008
        ],
        [
          32401,
          43008
        ],
        [
          32146,
          43008
        ],
        [
          31890,
          43008
        ],
        [
          31634,
          43008
        ],
        [
          31378,
          43008
        ],
        [
          31122,
          43008
        ],
        [
          30866,
          43008
        ],
        [
          30610,
          43007
        ],
        [
          30354,
          42997
        ],
        [
          30099,
          42976
        ],
        [
          29845,
          42945
        ],
        [
          29592,
          42904
        ],
        [
          29342,
          42851
        ],
        [
          29094,
          42789
        ],
        [
          28848,
          42716
        ],
        [
          28606,
          42633
        ],
        [
          28368,
          42540
        ],
        [
          28133,
          42437
        ],
        [
          27903,
          42324
        ],
        [
          27678,
          42202
        ],
        [
          27459,
          42071
        ],
        [
          27245,
          41931
        ],
        [
          27037,
          41782
        ],
        [
          26835,
          41624
        ],
        [
          26640,
          41458
        ],
        [
          26453,
          41284
        ],
        [
          26272,
          41102
        ],
        [
          26099,
          40913
        ],
        [
          25935,
          40718
        ],
        [
          25778,
          40515
        ],
        [
          25631,
          40306
        ],
        [
          25492,
          40091
        ],
        [
          25362,
          39870
        ],
        [
          25241,
          39645
        ],
        [
          25130,
          39414
        ],
        [
          25029,
          39179
        ],
        [
          24937,
          38940
        ],
        [
          24856,
          38697
        ],
        [
          24785,
          38452
        ],
        [
          24724,
          38203
        ],
        [
          24673,
          37952
        ],
        [
          24633,
          37699
        ],
        [
          24604,
          37445
        ],
        [
          24585,
          37190
        ],
        [
          24576,
          36934
        ],
        [
          24576,
          36678
        ],
        [
          24576,
          36422
        ],
        [
          24576,
          36166
        ],
        [
          24576,
          35910
        ],
        [
          24576,
          35654
        ],
        [
          24576,
          35398
        ],
        [
          24576,
          35142
        ],
        [
          24576,
          34886
        ],
        [
          24576,
          34630
        ],
        [
          24576,
          34374
        ],
        [
          24576,
          34118
        ],
        [
          24576,
          33862
        ],
        [
          24576,
          33606
        ],
        [
          24576,
          33350
        ],
        [
          24576,
          33095
        ],
        [
          24576,
          32839
        ],
        [
          24576,
          32583
        ],
        [
          24576,
          32327
        ],
        [
          24576,
          32071
        ],
        [
          24576,
          31815
        ],
        [
          24576,
          31559
        ],
        [
          24576,
          31303
        ],
        [
          24576,
          31047
        ],
        [
          24576,
          30791
        ],
        [
          24579,
          30535
        ],
        [
          24592,
          30279
        ],
        [
          24616,
          30024
        ],
        [
          24650,
          29771
        ],
        [
          24695,
          29519
        ],
        [
          24750,
          29269
        ],
        [
          24815,
          29022
        ],
        [
          24891,
          28777
        ],
        [
          24977,
          28536
        ],
        [
          25073,
          28299
        ],
        [
          25179,
          28066
        ],
        [
          25294,
          27837
        ],
        [
          25419,
          27614
        ],
        [
          25553,
          27396
        ],
        [
          25696,
          27183
        ],
        [
          25848,
          26977
        ],
        [
          26008,
          26777
        ],
        [
          26176,
          26585
        ],
        [
          26352,
          26399
        ],
        [
          26536,
          26221
        ],
        [
          26727,
          26050
        ],
        [
          26925,
          25888
        ],
        [
          27130,
          25734
        ],
        [
          27340,
          25589
        ],
        [
          27557,
          25453
        ],
        [
          27779,
          25326
        ],
        [
          28006,
          25208
        ],
        [
          28238,
          25100
        ],
        [
          28474,
          25001
        ],
        [
          28715,
          24913
        ],
        [
          28958,
          24834
        ],
        [
          29205,
          24766
        ],
        [
          29454,
          24708
        ],
        [
          29706,
          24660
        ],
        [
          29959,
          24623
        ],
        [
          30214,
          24597
        ],
        [
          30469,
          24581
        ],
        [
          30725,
          24576
        ],
        [
          30981,
          24576
        ],
        [
          31237,
          24576
        ],
        [
          31493,
          24576
        ],
        [
          31749,
          24576
        ],
        [
          32005,
          24576
        ],
        [
          32261,
          24576
        ],
        [
          32517,
          24576
        ],
        [
          32773,
          24576
        ],
        [
          33029,
          24576
        ],
        [
          33285,
          24576
        ],
        [
          33540,
          24576
        ],
        [
          33796,
          24576
        ],
        [
          34052,
          24576
        ],
        [
          34308,
          24576
        ],
        [
          34564,
          24576
        ],
        [
          34820,
          24576
        ],
        [
          35076,
          24576
        ],
        [
          35332,
          24576
        ],
        [
          35588,
          24576
        ],
        [
          35844,
          24576
        ],
        [
          36100,
          24576
        ],
        [
          36356,
          24576
        ],
        [
          36612,
          24576
        ],
        [
          36868,
          24576
        ],
        [
          37124,
          24576
        ],
        [
          37380,
          24576
        ],
        [
          37636,
          24576
        ],
        [
          37892,
          24576
        ],
        [
          38148,
          24576
        ],
        [
          38404,
          24576
        ],
        [
          38660,
          24576
        ],
        [
          38916,
          24576
        ],
        [
          39172,
          24576
        ],
        [
          39428,
          24576
        ],
        [
          39684,
          24576
        ],
        [
          39940,
          24576
        ],
        [
          40196,
          24576
        ],
        [
          40452,
          24576
        ],
        [
          40707,
          24576
        ],
        [
          40963,
          24576
        ],
        [
          41219,
          24576
        ],
        [
          41475,
          24576
        ],
        [
          41731,
          24576
        ],
        [
          41987,
          24576
        ],
        [
          42243,
          24576
        ],
        [
          42499,
          24576
        ],
        [
          42755,
          24576
        ],
        [
          43011,
          24576
        ],
        [
          43267,
          24576
        ],
        [
          43523,
          24576
        ],
        [
          43779,
          24576
        ],
        [
          44035,
          24576
        ],
        [
          44291,
          24576
        ],
        [
          44547,
          24576
        ],
        [
          44803,
          24576
        ],
        [
          45059,
          24576
        ],
        [
          45315,
          24576
        ],
        [
          45571,
          24576
        ],
        [
          45827,
          24576
        ],
        [
          46083,
          24576
        ],
        [
          46339,
          24576
        ],
        [
          46595,
          24576
        ],
        [
          46851,
          24576
        ],
        [
          47107,
          24576
        ],
        [
          47363,
          24576
        ],
        [
          47619,
          24576
        ],
        [
          47874,
          24576
        ],
        [
          48130,
          24576
        ],
        [
          48386,
          24576
        ],
        [
          48642,
          24576
        ],
        [
          48898,
          24576
        ],
        [
          49154,
          24576
        ],
        [
          49410,
          24576
        ],
        [
          49666,
          24576
        ],
        [
          49922,
          24576
        ],
        [
          50178,
          24576
        ],
        [
          50434,
          24576
        ],
        [
          50690,
          24576
        ],
        [
          50946,
          24576
        ],
        [
          51202,
          24576
        ],
        [
          51458,
          24576
        ],
        [
          51714,
          24576
        ],
        [
          51970,
          24576
        ],
        [
          52226,
          24576
        ],
        [
          52482,
          24576
        ],
        [
          52738,
          24576
        ],
        [
          52994,
          24576
        ],
        [
          53250,
          24576
        ],
        [
          53506,
          24576
        ],
        [
          53762,
          24576
        ],
        [
          54018,
          24576
        ],
        [
          54274,
          24576
        ],
        [
          54530,
          24576
        ],
        [
          54786,
          24576
        ],
        [
          55041,
          24576
        ],
        [
          55297,
          24576
        ],
        [
          55553,
          24576
        ],
        [
          55809,
          24576
        ],
        [
          56065,
          24576
        ],
        [
          56321,
          24576
        ],
        [
          56577,
          24576
        ],
        [
          56833,
          24576
        ],
        [
          57089,
          24576
        ],
        [
          57345,
          24576
        ],
        [
          57601,
          24576
        ],
        [
          57857,
          24576
        ],
        [
          58113,
          24576
        ],
        [
          58369,
          24576
        ],
        [
          58625,
          24576
        ],
        [
          58881,
          24576
        ],
        [
          59137,
          24576
        ],
        [
          59393,
          24576
        ],
        [
          59649,
          24576
        ],
        [
          59905,
          24576
        ],
        [
          60161,
          24576
        ],
        [
          60417,
          24576
        ],
        [
          60673,
          24576
        ],
        [
          60929,
          24576
        ],
        [
          61185,
          24576
        ],
        [
          61441,
          24576
        ],
        [
          61697,
          24576
        ],
        [
          61953,
          24576
        ],
        [
          62208,
          24576
        ],
        [
          62464,
          24576
        ],
        [
          62720,
          24576
        ],
        [
          62976,
          24576
        ],
        [
          63232,
          24576
        ],
        [
          63488,
          24576
        ],
        [
          63744,
          24576
        ],
        [
          64000,
          24576
        ],
        [
          64256,
          24576
        ],
        [
          64512,
          24576
        ],
        [
          64768,
          24576
        ],
        [
          65024,
          24576
        ],
        [
          65280,
          24576
        ]
      ]
    },
    {
      "id": "mojave_oval",
      "name": "Mojave Oval",
      "kind": "Cars",
      "description": "A shorter oval for close racing and repeated overtaking. Choose a clear track or add debris and roadside raiders.",
      "style": "Oval racing",
      "access": "Choose the Mojave Oval course in race setup.",
      "metres": 1354,
      "checkpoints": 24,
      "fences": 0,
      "outline": [
        [
          35000,
          24576
        ],
        [
          35255,
          24576
        ],
        [
          35511,
          24576
        ],
        [
          35766,
          24576
        ],
        [
          36022,
          24576
        ],
        [
          36277,
          24576
        ],
        [
          36533,
          24576
        ],
        [
          36788,
          24576
        ],
        [
          37044,
          24576
        ],
        [
          37299,
          24576
        ],
        [
          37554,
          24576
        ],
        [
          37810,
          24576
        ],
        [
          38065,
          24576
        ],
        [
          38321,
          24576
        ],
        [
          38576,
          24576
        ],
        [
          38832,
          24576
        ],
        [
          39087,
          24576
        ],
        [
          39343,
          24576
        ],
        [
          39598,
          24576
        ],
        [
          39853,
          24576
        ],
        [
          40109,
          24576
        ],
        [
          40364,
          24576
        ],
        [
          40620,
          24576
        ],
        [
          40875,
          24576
        ],
        [
          41131,
          24576
        ],
        [
          41386,
          24576
        ],
        [
          41642,
          24576
        ],
        [
          41897,
          24576
        ],
        [
          42152,
          24578
        ],
        [
          42408,
          24586
        ],
        [
          42663,
          24601
        ],
        [
          42917,
          24623
        ],
        [
          43171,
          24653
        ],
        [
          43424,
          24689
        ],
        [
          43675,
          24733
        ],
        [
          43926,
          24783
        ],
        [
          44175,
          24840
        ],
        [
          44422,
          24904
        ],
        [
          44667,
          24975
        ],
        [
          44911,
          25053
        ],
        [
          45152,
          25138
        ],
        [
          45390,
          25229
        ],
        [
          45626,
          25326
        ],
        [
          45860,
          25431
        ],
        [
          46090,
          25541
        ],
        [
          46317,
          25658
        ],
        [
          46541,
          25781
        ],
        [
          46761,
          25911
        ],
        [
          46978,
          26046
        ],
        [
          47190,
          26188
        ],
        [
          47399,
          26335
        ],
        [
          47604,
          26488
        ],
        [
          47804,
          26646
        ],
        [
          48000,
          26810
        ],
        [
          48191,
          26980
        ],
        [
          48377,
          27154
        ],
        [
          48559,
          27334
        ],
        [
          48735,
          27519
        ],
        [
          48907,
          27708
        ],
        [
          49073,
          27902
        ],
        [
          49233,
          28101
        ],
        [
          49388,
          28304
        ],
        [
          49537,
          28512
        ],
        [
          49681,
          28723
        ],
        [
          49818,
          28938
        ],
        [
          49950,
          29157
        ],
        [
          50075,
          29380
        ],
        [
          50194,
          29606
        ],
        [
          50307,
          29835
        ],
        [
          50414,
          30067
        ],
        [
          50514,
          30302
        ],
        [
          50607,
          30540
        ],
        [
          50694,
          30780
        ],
        [
          50774,
          31022
        ],
        [
          50847,
          31267
        ],
        [
          50914,
          31514
        ],
        [
          50974,
          31762
        ],
        [
          51026,
          32012
        ],
        [
          51072,
          32263
        ],
        [
          51111,
          32516
        ],
        [
          51143,
          32769
        ],
        [
          51168,
          33023
        ],
        [
          51186,
          33278
        ],
        [
          51196,
          33533
        ],
        [
          51200,
          33789
        ],
        [
          51197,
          34044
        ],
        [
          51186,
          34299
        ],
        [
          51168,
          34554
        ],
        [
          51144,
          34809
        ],
        [
          51112,
          35062
        ],
        [
          51073,
          35315
        ],
        [
          51028,
          35566
        ],
        [
          50975,
          35816
        ],
        [
          50916,
          36064
        ],
        [
          50849,
          36311
        ],
        [
          50776,
          36556
        ],
        [
          50696,
          36798
        ],
        [
          50609,
          37038
        ],
        [
          50516,
          37276
        ],
        [
          50416,
          37511
        ],
        [
          50310,
          37744
        ],
        [
          50197,
          37973
        ],
        [
          50078,
          38199
        ],
        [
          49953,
          38421
        ],
        [
          49821,
          38641
        ],
        [
          49684,
          38856
        ],
        [
          49541,
          39067
        ],
        [
          49392,
          39275
        ],
        [
          49237,
          39478
        ],
        [
          49077,
          39677
        ],
        [
          48911,
          39871
        ],
        [
          48740,
          40061
        ],
        [
          48563,
          40246
        ],
        [
          48382,
          40425
        ],
        [
          48196,
          40600
        ],
        [
          48005,
          40770
        ],
        [
          47809,
          40934
        ],
        [
          47609,
          41093
        ],
        [
          47404,
          41246
        ],
        [
          47196,
          41393
        ],
        [
          46983,
          41534
        ],
        [
          46766,
          41670
        ],
        [
          46546,
          41800
        ],
        [
          46323,
          41923
        ],
        [
          46096,
          42040
        ],
        [
          45865,
          42151
        ],
        [
          45632,
          42255
        ],
        [
          45396,
          42353
        ],
        [
          45158,
          42444
        ],
        [
          44917,
          42529
        ],
        [
          44673,
          42607
        ],
        [
          44428,
          42678
        ],
        [
          44181,
          42742
        ],
        [
          43932,
          42800
        ],
        [
          43682,
          42850
        ],
        [
          43430,
          42894
        ],
        [
          43177,
          42930
        ],
        [
          42923,
          42960
        ],
        [
          42669,
          42982
        ],
        [
          42414,
          42998
        ],
        [
          42159,
          43006
        ],
        [
          41903,
          43008
        ],
        [
          41648,
          43008
        ],
        [
          41392,
          43008
        ],
        [
          41137,
          43008
        ],
        [
          40881,
          43008
        ],
        [
          40626,
          43008
        ],
        [
          40371,
          43008
        ],
        [
          40115,
          43008
        ],
        [
          39860,
          43008
        ],
        [
          39604,
          43008
        ],
        [
          39349,
          43008
        ],
        [
          39093,
          43008
        ],
        [
          38838,
          43008
        ],
        [
          38582,
          43008
        ],
        [
          38327,
          43008
        ],
        [
          38072,
          43008
        ],
        [
          37816,
          43008
        ],
        [
          37561,
          43008
        ],
        [
          37305,
          43008
        ],
        [
          37050,
          43008
        ],
        [
          36794,
          43008
        ],
        [
          36539,
          43008
        ],
        [
          36283,
          43008
        ],
        [
          36028,
          43008
        ],
        [
          35773,
          43008
        ],
        [
          35517,
          43008
        ],
        [
          35262,
          43008
        ],
        [
          35006,
          43008
        ],
        [
          34751,
          43008
        ],
        [
          34495,
          43008
        ],
        [
          34240,
          43008
        ],
        [
          33984,
          43008
        ],
        [
          33729,
          43008
        ],
        [
          33474,
          43008
        ],
        [
          33218,
          43008
        ],
        [
          32963,
          43008
        ],
        [
          32707,
          43008
        ],
        [
          32452,
          43008
        ],
        [
          32196,
          43008
        ],
        [
          31941,
          43008
        ],
        [
          31685,
          43008
        ],
        [
          31430,
          43008
        ],
        [
          31175,
          43008
        ],
        [
          30919,
          43008
        ],
        [
          30664,
          43008
        ],
        [
          30408,
          43008
        ],
        [
          30153,
          43008
        ],
        [
          29897,
          43008
        ],
        [
          29642,
          43008
        ],
        [
          29387,
          43008
        ],
        [
          29131,
          43008
        ],
        [
          28876,
          43008
        ],
        [
          28620,
          43008
        ],
        [
          28365,
          43008
        ],
        [
          28109,
          43008
        ],
        [
          27854,
          43008
        ],
        [
          27598,
          43008
        ],
        [
          27343,
          43008
        ],
        [
          27088,
          43008
        ],
        [
          26832,
          43008
        ],
        [
          26577,
          43008
        ],
        [
          26321,
          43008
        ],
        [
          26066,
          43008
        ],
        [
          25810,
          43008
        ],
        [
          25555,
          43008
        ],
        [
          25299,
          43008
        ],
        [
          25044,
          43008
        ],
        [
          24789,
          43008
        ],
        [
          24533,
          43008
        ],
        [
          24278,
          43008
        ],
        [
          24022,
          43008
        ],
        [
          23767,
          43008
        ],
        [
          23511,
          43008
        ],
        [
          23256,
          43003
        ],
        [
          23001,
          42991
        ],
        [
          22746,
          42973
        ],
        [
          22492,
          42947
        ],
        [
          22239,
          42914
        ],
        [
          21986,
          42874
        ],
        [
          21735,
          42827
        ],
        [
          21485,
          42773
        ],
        [
          21237,
          42713
        ],
        [
          20991,
          42645
        ],
        [
          20747,
          42571
        ],
        [
          20504,
          42489
        ],
        [
          20265,
          42402
        ],
        [
          20027,
          42307
        ],
        [
          19793,
          42206
        ],
        [
          19561,
          42099
        ],
        [
          19332,
          41985
        ],
        [
          19107,
          41865
        ],
        [
          18885,
          41739
        ],
        [
          18666,
          41606
        ],
        [
          18452,
          41468
        ],
        [
          18241,
          41324
        ],
        [
          18034,
          41174
        ],
        [
          17832,
          41018
        ],
        [
          17634,
          40856
        ],
        [
          17440,
          40690
        ],
        [
          17251,
          40518
        ],
        [
          17067,
          40340
        ],
        [
          16888,
          40158
        ],
        [
          16714,
          39971
        ],
        [
          16546,
          39779
        ],
        [
          16383,
          39583
        ],
        [
          16225,
          39382
        ],
        [
          16073,
          39177
        ],
        [
          15926,
          38967
        ],
        [
          15786,
          38754
        ],
        [
          15651,
          38537
        ],
        [
          15523,
          38316
        ],
        [
          15401,
          38092
        ],
        [
          15285,
          37864
        ],
        [
          15175,
          37634
        ],
        [
          15072,
          37400
        ],
        [
          14975,
          37163
        ],
        [
          14885,
          36924
        ],
        [
          14801,
          36683
        ],
        [
          14724,
          36439
        ],
        [
          14654,
          36194
        ],
        [
          14591,
          35946
        ],
        [
          14535,
          35697
        ],
        [
          14486,
          35447
        ],
        [
          14443,
          35195
        ],
        [
          14408,
          34942
        ],
        [
          14380,
          34688
        ],
        [
          14358,
          34433
        ],
        [
          14344,
          34178
        ],
        [
          14337,
          33923
        ],
        [
          14337,
          33667
        ],
        [
          14344,
          33412
        ],
        [
          14358,
          33157
        ],
        [
          14379,
          32902
        ],
        [
          14407,
          32649
        ],
        [
          14442,
          32396
        ],
        [
          14485,
          32144
        ],
        [
          14534,
          31893
        ],
        [
          14590,
          31644
        ],
        [
          14653,
          31396
        ],
        [
          14723,
          31151
        ],
        [
          14799,
          30907
        ],
        [
          14883,
          30665
        ],
        [
          14973,
          30426
        ],
        [
          15069,
          30190
        ],
        [
          15172,
          29956
        ],
        [
          15282,
          29725
        ],
        [
          15398,
          29498
        ],
        [
          15520,
          29273
        ],
        [
          15648,
          29053
        ],
        [
          15782,
          28835
        ],
        [
          15923,
          28622
        ],
        [
          16069,
          28412
        ],
        [
          16221,
          28207
        ],
        [
          16379,
          28006
        ],
        [
          16542,
          27810
        ],
        [
          16710,
          27618
        ],
        [
          16884,
          27430
        ],
        [
          17063,
          27248
        ],
        [
          17247,
          27071
        ],
        [
          17435,
          26898
        ],
        [
          17629,
          26732
        ],
        [
          17827,
          26570
        ],
        [
          18029,
          26414
        ],
        [
          18236,
          26264
        ],
        [
          18446,
          26120
        ],
        [
          18661,
          25981
        ],
        [
          18879,
          25848
        ],
        [
          19101,
          25722
        ],
        [
          19327,
          25602
        ],
        [
          19555,
          25488
        ],
        [
          19787,
          25380
        ],
        [
          20021,
          25279
        ],
        [
          20259,
          25185
        ],
        [
          20499,
          25097
        ],
        [
          20741,
          25015
        ],
        [
          20985,
          24941
        ],
        [
          21231,
          24873
        ],
        [
          21479,
          24812
        ],
        [
          21729,
          24758
        ],
        [
          21980,
          24711
        ],
        [
          22232,
          24671
        ],
        [
          22486,
          24638
        ],
        [
          22740,
          24612
        ],
        [
          22994,
          24593
        ],
        [
          23250,
          24581
        ],
        [
          23505,
          24576
        ],
        [
          23760,
          24576
        ],
        [
          24016,
          24576
        ],
        [
          24271,
          24576
        ],
        [
          24527,
          24576
        ],
        [
          24782,
          24576
        ],
        [
          25038,
          24576
        ],
        [
          25293,
          24576
        ],
        [
          25549,
          24576
        ],
        [
          25804,
          24576
        ],
        [
          26059,
          24576
        ],
        [
          26315,
          24576
        ],
        [
          26570,
          24576
        ],
        [
          26826,
          24576
        ],
        [
          27081,
          24576
        ],
        [
          27337,
          24576
        ],
        [
          27592,
          24576
        ],
        [
          27848,
          24576
        ],
        [
          28103,
          24576
        ],
        [
          28358,
          24576
        ],
        [
          28614,
          24576
        ],
        [
          28869,
          24576
        ],
        [
          29125,
          24576
        ],
        [
          29380,
          24576
        ],
        [
          29636,
          24576
        ],
        [
          29891,
          24576
        ],
        [
          30147,
          24576
        ],
        [
          30402,
          24576
        ],
        [
          30657,
          24576
        ],
        [
          30913,
          24576
        ],
        [
          31168,
          24576
        ],
        [
          31424,
          24576
        ],
        [
          31679,
          24576
        ],
        [
          31935,
          24576
        ],
        [
          32190,
          24576
        ],
        [
          32446,
          24576
        ],
        [
          32701,
          24576
        ],
        [
          32956,
          24576
        ],
        [
          33212,
          24576
        ],
        [
          33467,
          24576
        ],
        [
          33723,
          24576
        ],
        [
          33978,
          24576
        ],
        [
          34234,
          24576
        ],
        [
          34489,
          24576
        ],
        [
          34745,
          24576
        ]
      ]
    },
    {
      "id": "mojave_cycle",
      "name": "Mojave Cycle Circuit",
      "kind": "Bicycles",
      "description": "A compact, flat circuit with broad bends and a bicycle grid. It shares its setting with the horse steeplechase.",
      "style": "Cycling",
      "access": "Choose the Mojave Cycle Circuit course in race setup.",
      "metres": 474,
      "checkpoints": 8,
      "fences": 0,
      "outline": [
        [
          19000,
          13900
        ],
        [
          19255,
          13900
        ],
        [
          19511,
          13900
        ],
        [
          19766,
          13900
        ],
        [
          20021,
          13900
        ],
        [
          20277,
          13900
        ],
        [
          20532,
          13900
        ],
        [
          20787,
          13920
        ],
        [
          21037,
          13970
        ],
        [
          21279,
          14050
        ],
        [
          21510,
          14159
        ],
        [
          21726,
          14295
        ],
        [
          21923,
          14456
        ],
        [
          22100,
          14640
        ],
        [
          22253,
          14844
        ],
        [
          22381,
          15065
        ],
        [
          22480,
          15300
        ],
        [
          22550,
          15546
        ],
        [
          22590,
          15798
        ],
        [
          22599,
          16053
        ],
        [
          22577,
          16307
        ],
        [
          22525,
          16557
        ],
        [
          22442,
          16798
        ],
        [
          22331,
          17028
        ],
        [
          22193,
          17243
        ],
        [
          22030,
          17439
        ],
        [
          21844,
          17614
        ],
        [
          21638,
          17765
        ],
        [
          21416,
          17890
        ],
        [
          21180,
          17987
        ],
        [
          20934,
          18055
        ],
        [
          20681,
          18092
        ],
        [
          20426,
          18100
        ],
        [
          20171,
          18100
        ],
        [
          19916,
          18100
        ],
        [
          19660,
          18100
        ],
        [
          19405,
          18100
        ],
        [
          19150,
          18100
        ],
        [
          18894,
          18100
        ],
        [
          18639,
          18100
        ],
        [
          18384,
          18100
        ],
        [
          18128,
          18100
        ],
        [
          17873,
          18100
        ],
        [
          17618,
          18100
        ],
        [
          17362,
          18100
        ],
        [
          17107,
          18100
        ],
        [
          16852,
          18100
        ],
        [
          16596,
          18100
        ],
        [
          16341,
          18100
        ],
        [
          16085,
          18100
        ],
        [
          15830,
          18100
        ],
        [
          15575,
          18100
        ],
        [
          15319,
          18100
        ],
        [
          15064,
          18100
        ],
        [
          14809,
          18100
        ],
        [
          14553,
          18100
        ],
        [
          14298,
          18100
        ],
        [
          14043,
          18100
        ],
        [
          13787,
          18100
        ],
        [
          13532,
          18100
        ],
        [
          13277,
          18100
        ],
        [
          13021,
          18100
        ],
        [
          12766,
          18100
        ],
        [
          12511,
          18100
        ],
        [
          12255,
          18100
        ],
        [
          12000,
          18100
        ],
        [
          11745,
          18100
        ],
        [
          11489,
          18100
        ],
        [
          11234,
          18100
        ],
        [
          10979,
          18100
        ],
        [
          10723,
          18100
        ],
        [
          10468,
          18100
        ],
        [
          10213,
          18080
        ],
        [
          9963,
          18030
        ],
        [
          9721,
          17950
        ],
        [
          9490,
          17841
        ],
        [
          9274,
          17705
        ],
        [
          9077,
          17544
        ],
        [
          8900,
          17360
        ],
        [
          8747,
          17156
        ],
        [
          8619,
          16935
        ],
        [
          8520,
          16700
        ],
        [
          8450,
          16454
        ],
        [
          8410,
          16202
        ],
        [
          8401,
          15947
        ],
        [
          8423,
          15693
        ],
        [
          8475,
          15443
        ],
        [
          8558,
          15202
        ],
        [
          8669,
          14972
        ],
        [
          8807,
          14757
        ],
        [
          8970,
          14561
        ],
        [
          9156,
          14386
        ],
        [
          9362,
          14235
        ],
        [
          9584,
          14110
        ],
        [
          9820,
          14013
        ],
        [
          10066,
          13945
        ],
        [
          10319,
          13908
        ],
        [
          10574,
          13900
        ],
        [
          10829,
          13900
        ],
        [
          11084,
          13900
        ],
        [
          11340,
          13900
        ],
        [
          11595,
          13900
        ],
        [
          11850,
          13900
        ],
        [
          12106,
          13900
        ],
        [
          12361,
          13900
        ],
        [
          12616,
          13900
        ],
        [
          12872,
          13900
        ],
        [
          13127,
          13900
        ],
        [
          13382,
          13900
        ],
        [
          13638,
          13900
        ],
        [
          13893,
          13900
        ],
        [
          14148,
          13900
        ],
        [
          14404,
          13900
        ],
        [
          14659,
          13900
        ],
        [
          14915,
          13900
        ],
        [
          15170,
          13900
        ],
        [
          15425,
          13900
        ],
        [
          15681,
          13900
        ],
        [
          15936,
          13900
        ],
        [
          16191,
          13900
        ],
        [
          16447,
          13900
        ],
        [
          16702,
          13900
        ],
        [
          16957,
          13900
        ],
        [
          17213,
          13900
        ],
        [
          17468,
          13900
        ],
        [
          17723,
          13900
        ],
        [
          17979,
          13900
        ],
        [
          18234,
          13900
        ],
        [
          18489,
          13900
        ],
        [
          18745,
          13900
        ]
      ]
    },
    {
      "id": "ivanpah_buggy",
      "name": "Ivanpah Buggy Race",
      "kind": "Cars",
      "description": "A tight off-road circuit set up for the Apocalyptic Buggy. A short lap puts the bends close together.",
      "style": "Buggy racing",
      "access": "Choose the Ivanpah Buggy Race course in race setup.",
      "metres": 272,
      "checkpoints": 12,
      "fences": 0,
      "outline": [
        [
          -54842,
          -84498
        ],
        [
          -54963,
          -84352
        ],
        [
          -55075,
          -84199
        ],
        [
          -55174,
          -84038
        ],
        [
          -55259,
          -83871
        ],
        [
          -55328,
          -83697
        ],
        [
          -55380,
          -83519
        ],
        [
          -55414,
          -83336
        ],
        [
          -55428,
          -83150
        ],
        [
          -55422,
          -82962
        ],
        [
          -55396,
          -82774
        ],
        [
          -55352,
          -82589
        ],
        [
          -55292,
          -82409
        ],
        [
          -55215,
          -82235
        ],
        [
          -55122,
          -82069
        ],
        [
          -55014,
          -81913
        ],
        [
          -54892,
          -81767
        ],
        [
          -54758,
          -81633
        ],
        [
          -54611,
          -81512
        ],
        [
          -54454,
          -81405
        ],
        [
          -54287,
          -81313
        ],
        [
          -54113,
          -81237
        ],
        [
          -53933,
          -81178
        ],
        [
          -53748,
          -81135
        ],
        [
          -53559,
          -81110
        ],
        [
          -53369,
          -81103
        ],
        [
          -53179,
          -81113
        ],
        [
          -52991,
          -81140
        ],
        [
          -52807,
          -81185
        ],
        [
          -52627,
          -81247
        ],
        [
          -52454,
          -81325
        ],
        [
          -52289,
          -81419
        ],
        [
          -52133,
          -81528
        ],
        [
          -51988,
          -81651
        ],
        [
          -51855,
          -81787
        ],
        [
          -51732,
          -81932
        ],
        [
          -51610,
          -82077
        ],
        [
          -51487,
          -82223
        ],
        [
          -51365,
          -82369
        ],
        [
          -51243,
          -82514
        ],
        [
          -51121,
          -82660
        ],
        [
          -50999,
          -82806
        ],
        [
          -50876,
          -82951
        ],
        [
          -50754,
          -83097
        ],
        [
          -50632,
          -83243
        ],
        [
          -50510,
          -83388
        ],
        [
          -50388,
          -83534
        ],
        [
          -50265,
          -83680
        ],
        [
          -50143,
          -83825
        ],
        [
          -50021,
          -83971
        ],
        [
          -49899,
          -84116
        ],
        [
          -49778,
          -84264
        ],
        [
          -49670,
          -84420
        ],
        [
          -49577,
          -84586
        ],
        [
          -49500,
          -84759
        ],
        [
          -49439,
          -84939
        ],
        [
          -49396,
          -85124
        ],
        [
          -49369,
          -85313
        ],
        [
          -49360,
          -85502
        ],
        [
          -49369,
          -85692
        ],
        [
          -49395,
          -85880
        ],
        [
          -49438,
          -86065
        ],
        [
          -49499,
          -86246
        ],
        [
          -49576,
          -86419
        ],
        [
          -49669,
          -86585
        ],
        [
          -49776,
          -86742
        ],
        [
          -49898,
          -86888
        ],
        [
          -50033,
          -87022
        ],
        [
          -50180,
          -87143
        ],
        [
          -50337,
          -87249
        ],
        [
          -50503,
          -87341
        ],
        [
          -50677,
          -87417
        ],
        [
          -50858,
          -87477
        ],
        [
          -51043,
          -87519
        ],
        [
          -51231,
          -87544
        ],
        [
          -51421,
          -87552
        ],
        [
          -51611,
          -87542
        ],
        [
          -51799,
          -87514
        ],
        [
          -51984,
          -87469
        ],
        [
          -52164,
          -87408
        ],
        [
          -52337,
          -87329
        ],
        [
          -52502,
          -87235
        ],
        [
          -52658,
          -87126
        ],
        [
          -52803,
          -87004
        ],
        [
          -52936,
          -86868
        ],
        [
          -53059,
          -86723
        ],
        [
          -53181,
          -86577
        ],
        [
          -53303,
          -86432
        ],
        [
          -53425,
          -86286
        ],
        [
          -53548,
          -86140
        ],
        [
          -53670,
          -85995
        ],
        [
          -53792,
          -85849
        ],
        [
          -53911,
          -85701
        ],
        [
          -54028,
          -85551
        ],
        [
          -54144,
          -85400
        ],
        [
          -54258,
          -85248
        ],
        [
          -54372,
          -85096
        ],
        [
          -54486,
          -84944
        ],
        [
          -54603,
          -84794
        ],
        [
          -54721,
          -84645
        ]
      ]
    },
    {
      "id": "mojave_steeplechase",
      "name": "Mojave Steeplechase",
      "kind": "Horses",
      "description": "Horse racing on the cycle circuit, with eight fences around the lap. Keep enough stamina for the next jump and the final stretch.",
      "style": "Horse racing",
      "access": "Choose the Mojave Steeplechase course in race setup.",
      "metres": 474,
      "checkpoints": 8,
      "fences": 8,
      "outline": [
        [
          19000,
          13900
        ],
        [
          19255,
          13900
        ],
        [
          19511,
          13900
        ],
        [
          19766,
          13900
        ],
        [
          20021,
          13900
        ],
        [
          20277,
          13900
        ],
        [
          20532,
          13900
        ],
        [
          20787,
          13920
        ],
        [
          21037,
          13970
        ],
        [
          21279,
          14050
        ],
        [
          21510,
          14159
        ],
        [
          21726,
          14295
        ],
        [
          21923,
          14456
        ],
        [
          22100,
          14640
        ],
        [
          22253,
          14844
        ],
        [
          22381,
          15065
        ],
        [
          22480,
          15300
        ],
        [
          22550,
          15546
        ],
        [
          22590,
          15798
        ],
        [
          22599,
          16053
        ],
        [
          22577,
          16307
        ],
        [
          22525,
          16557
        ],
        [
          22442,
          16798
        ],
        [
          22331,
          17028
        ],
        [
          22193,
          17243
        ],
        [
          22030,
          17439
        ],
        [
          21844,
          17614
        ],
        [
          21638,
          17765
        ],
        [
          21416,
          17890
        ],
        [
          21180,
          17987
        ],
        [
          20934,
          18055
        ],
        [
          20681,
          18092
        ],
        [
          20426,
          18100
        ],
        [
          20171,
          18100
        ],
        [
          19916,
          18100
        ],
        [
          19660,
          18100
        ],
        [
          19405,
          18100
        ],
        [
          19150,
          18100
        ],
        [
          18894,
          18100
        ],
        [
          18639,
          18100
        ],
        [
          18384,
          18100
        ],
        [
          18128,
          18100
        ],
        [
          17873,
          18100
        ],
        [
          17618,
          18100
        ],
        [
          17362,
          18100
        ],
        [
          17107,
          18100
        ],
        [
          16852,
          18100
        ],
        [
          16596,
          18100
        ],
        [
          16341,
          18100
        ],
        [
          16085,
          18100
        ],
        [
          15830,
          18100
        ],
        [
          15575,
          18100
        ],
        [
          15319,
          18100
        ],
        [
          15064,
          18100
        ],
        [
          14809,
          18100
        ],
        [
          14553,
          18100
        ],
        [
          14298,
          18100
        ],
        [
          14043,
          18100
        ],
        [
          13787,
          18100
        ],
        [
          13532,
          18100
        ],
        [
          13277,
          18100
        ],
        [
          13021,
          18100
        ],
        [
          12766,
          18100
        ],
        [
          12511,
          18100
        ],
        [
          12255,
          18100
        ],
        [
          12000,
          18100
        ],
        [
          11745,
          18100
        ],
        [
          11489,
          18100
        ],
        [
          11234,
          18100
        ],
        [
          10979,
          18100
        ],
        [
          10723,
          18100
        ],
        [
          10468,
          18100
        ],
        [
          10213,
          18080
        ],
        [
          9963,
          18030
        ],
        [
          9721,
          17950
        ],
        [
          9490,
          17841
        ],
        [
          9274,
          17705
        ],
        [
          9077,
          17544
        ],
        [
          8900,
          17360
        ],
        [
          8747,
          17156
        ],
        [
          8619,
          16935
        ],
        [
          8520,
          16700
        ],
        [
          8450,
          16454
        ],
        [
          8410,
          16202
        ],
        [
          8401,
          15947
        ],
        [
          8423,
          15693
        ],
        [
          8475,
          15443
        ],
        [
          8558,
          15202
        ],
        [
          8669,
          14972
        ],
        [
          8807,
          14757
        ],
        [
          8970,
          14561
        ],
        [
          9156,
          14386
        ],
        [
          9362,
          14235
        ],
        [
          9584,
          14110
        ],
        [
          9820,
          14013
        ],
        [
          10066,
          13945
        ],
        [
          10319,
          13908
        ],
        [
          10574,
          13900
        ],
        [
          10829,
          13900
        ],
        [
          11084,
          13900
        ],
        [
          11340,
          13900
        ],
        [
          11595,
          13900
        ],
        [
          11850,
          13900
        ],
        [
          12106,
          13900
        ],
        [
          12361,
          13900
        ],
        [
          12616,
          13900
        ],
        [
          12872,
          13900
        ],
        [
          13127,
          13900
        ],
        [
          13382,
          13900
        ],
        [
          13638,
          13900
        ],
        [
          13893,
          13900
        ],
        [
          14148,
          13900
        ],
        [
          14404,
          13900
        ],
        [
          14659,
          13900
        ],
        [
          14915,
          13900
        ],
        [
          15170,
          13900
        ],
        [
          15425,
          13900
        ],
        [
          15681,
          13900
        ],
        [
          15936,
          13900
        ],
        [
          16191,
          13900
        ],
        [
          16447,
          13900
        ],
        [
          16702,
          13900
        ],
        [
          16957,
          13900
        ],
        [
          17213,
          13900
        ],
        [
          17468,
          13900
        ],
        [
          17723,
          13900
        ],
        [
          17979,
          13900
        ],
        [
          18234,
          13900
        ],
        [
          18489,
          13900
        ],
        [
          18745,
          13900
        ]
      ]
    }
  ],
  "arena": [
    {
      "name": "Hoop course",
      "kind": "air",
      "points": [
        [
          22000,
          17500
        ],
        [
          38500,
          17000
        ],
        [
          47000,
          22500
        ],
        [
          50000,
          34000
        ],
        [
          45000,
          46500
        ],
        [
          32768,
          50000
        ],
        [
          20500,
          47500
        ],
        [
          15500,
          37000
        ],
        [
          24000,
          26000
        ],
        [
          30000,
          21000
        ]
      ]
    },
    {
      "name": "Pylon race",
      "kind": "air",
      "points": [
        [
          13596,
          13596
        ],
        [
          51902,
          13593
        ],
        [
          51904,
          51904
        ],
        [
          13593,
          51902
        ]
      ]
    },
    {
      "name": "Knife edge",
      "kind": "air",
      "points": [
        [
          17500,
          30500
        ]
      ]
    },
    {
      "name": "Through the hangar",
      "kind": "air",
      "points": [
        [
          17500,
          38750
        ],
        [
          17500,
          42250
        ]
      ]
    },
    {
      "name": "Under the bridge",
      "kind": "air",
      "points": [
        [
          21724,
          45500
        ],
        [
          23319,
          45500
        ],
        [
          25042,
          45500
        ],
        [
          26774,
          45500
        ],
        [
          28369,
          45500
        ],
        [
          30092,
          45500
        ],
        [
          31824,
          45500
        ],
        [
          33419,
          45500
        ],
        [
          35142,
          45500
        ],
        [
          36874,
          45500
        ],
        [
          38469,
          45500
        ],
        [
          40192,
          45500
        ],
        [
          41924,
          45500
        ],
        [
          43519,
          45500
        ],
        [
          45242,
          45500
        ],
        [
          46974,
          45500
        ],
        [
          48569,
          45500
        ]
      ]
    },
    {
      "name": "Under the wires",
      "kind": "air",
      "points": [
        [
          21048,
          49800
        ],
        [
          25144,
          49800
        ],
        [
          29240,
          49800
        ],
        [
          33336,
          49800
        ],
        [
          37432,
          49800
        ],
        [
          41528,
          49800
        ]
      ]
    },
    {
      "name": "Truck jump",
      "kind": "ground",
      "points": [
        [
          23904,
          19800
        ],
        [
          23554,
          19800
        ],
        [
          23204,
          19800
        ],
        [
          22854,
          19800
        ],
        [
          22504,
          19800
        ],
        [
          22154,
          19800
        ]
      ]
    },
    {
      "name": "Ring of fire",
      "kind": "ground",
      "points": [
        [
          37768,
          30910
        ]
      ]
    },
    {
      "name": "Wall of fire",
      "kind": "ground",
      "points": [
        [
          27768,
          23500
        ],
        [
          32768,
          23500
        ],
        [
          37768,
          23500
        ]
      ]
    },
    {
      "name": "Crush line",
      "kind": "ground",
      "points": [
        [
          42000,
          33000
        ]
      ]
    },
    {
      "name": "Crush pit",
      "kind": "ground",
      "points": [
        [
          47000,
          36450
        ]
      ]
    },
    {
      "name": "Car tower",
      "kind": "ground",
      "points": [
        [
          37500,
          39065
        ]
      ]
    }
  ],
  "horseTraits": [
    {
      "name": "All-rounder",
      "survival": 0,
      "speed": 3,
      "endurance": 3,
      "nerve": 3
    },
    {
      "name": "Sprinter",
      "survival": 50,
      "speed": 5,
      "endurance": 2,
      "nerve": 2
    },
    {
      "name": "Distance horse",
      "survival": 50,
      "speed": 2,
      "endurance": 5,
      "nerve": 2
    },
    {
      "name": "Steady horse",
      "survival": 50,
      "speed": 2,
      "endurance": 2,
      "nerve": 5
    },
    {
      "name": "Athlete",
      "survival": 75,
      "speed": 5,
      "endurance": 4,
      "nerve": 2
    },
    {
      "name": "Trail horse",
      "survival": 75,
      "speed": 3,
      "endurance": 5,
      "nerve": 4
    },
    {
      "name": "Battle companion",
      "survival": 75,
      "speed": 3,
      "endurance": 4,
      "nerve": 5
    },
    {
      "name": "Rare horse",
      "survival": 100,
      "speed": 5,
      "endurance": 5,
      "nerve": 5
    }
  ]
};
