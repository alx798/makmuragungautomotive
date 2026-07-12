/* ============================================================
   MAKMUR AGUNG AUTOMOTIVE — Aozoom product catalog (data)
   Single source of truth for the Produk.html catalog grid.

   Delivered as a JS global (not JSON) so the catalog renders when
   the site is opened directly from disk (file://) — browsers block
   fetch() of local files, but <script src> loads fine over both
   file:// and http://. Edit THIS file to change the catalog.
   ============================================================ */
window.MA_PRODUCTS = {
  "brand": "Aozoom",
  "currency": "IDR",
  "warranty_years": 2,
  "source": "Aozoom Product Catalog 2026",
  "note": "Prices in Indonesian Rupiah (IDR). All products carry 2-year warranty. Contact workshop for installation pricing.",
  "categories": [
    {
      "id": "headlamp",
      "label": "Headlamp Projector"
    },
    {
      "id": "square",
      "label": "Square Headlamp"
    },
    {
      "id": "matrix",
      "label": "1.5inch - 1.8inch"
    },
    {
      "id": "premium",
      "label": "Premium Laser"
    },
    {
      "id": "headlamp-kit",
      "label": "Headlamp Kits"
    },
    {
      "id": "foglamp",
      "label": "Foglamp Projector"
    },
    {
      "id": "foglamp-kit",
      "label": "Foglamp Kits"
    },
    {
      "id": "mini",
      "label": "Mini Projector"
    }
  ],
  "products": [
    {
      "id": "square-v5",
      "name": "Square V5 Hyperbeam",
      "category": "square",
      "type": "Hyperbeam Square LED Projector Headlight",
      "size": "Square",
      "color_temp": "5500K",
      "price_idr": 6200000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 90,
        "high_beam_w": 100,
        "chip": "Multi-Lens LED",
        "cut_off": "Flat"
      },
      "tags": [
        "new-arrival"
      ],
      "waterproof": null
    },
    {
      "id": "discoverer",
      "name": "Discoverer",
      "category": "premium",
      "type": "Intelligent LED & Laser Matrix Module",
      "size": "1.5\"",
      "color_temp": "5500K",
      "price_idr": 9500000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 65,
        "high_beam_w": 95,
        "chip": "LED + Laser Matrix",
        "cut_off": "Flat"
      },
      "tags": [
        "new-arrival",
        "laser"
      ],
      "waterproof": null
    },
    {
      "id": "breaker-pro-square",
      "name": "Breaker Pro (Square Lens)",
      "category": "premium",
      "type": "LED & Laser Square Overlapping Projector",
      "size": "Square",
      "color_temp": "5500K",
      "price_idr": 7500000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 65,
        "high_beam_w": 90,
        "chip": "6+3 LED + Laser",
        "cut_off": "Flat"
      },
      "tags": [
        "new-arrival",
        "laser"
      ],
      "waterproof": null
    },
    {
      "id": "breaker-pro-round",
      "name": "Breaker Pro (Round Lens)",
      "category": "premium",
      "type": "LED & Laser Compound-Eye Projector",
      "size": "3\"",
      "color_temp": "5500K",
      "price_idr": 7500000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 65,
        "high_beam_w": 90,
        "chip": "Compound-Eye LED + Laser",
        "cut_off": "Flat"
      },
      "tags": [
        "new-arrival",
        "laser"
      ],
      "waterproof": null
    },
    {
      "id": "byd-atto-3",
      "name": "BYD Atto 3 CX-40",
      "category": "headlamp-kit",
      "type": "Headlamp Plug & Play Kit",
      "size": "OEM Fit",
      "color_temp": "5500K",
      "price_idr": 10500000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 100,
        "high_beam_w": 130,
        "chip": "2 Low + 2 High Projector",
        "cut_off": "Flat"
      },
      "tags": [
        "new-arrival",
        "plug-and-play"
      ],
      "waterproof": "IP54",
      "vehicles": [
        "BYD Atto 3"
      ]
    },
    {
      "id": "ant2-colorshift",
      "name": "ANT 2.0 Colorshift",
      "category": "foglamp",
      "type": "Car Super LED Fog Light Projector",
      "size": "2\"",
      "color_temp": "3000K / 6000K",
      "price_idr": 3100000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 45,
        "high_beam_w": 55,
        "chip": "6+1 LED Colorshift",
        "cut_off": "Flat"
      },
      "tags": [
        "new-arrival"
      ],
      "waterproof": null
    },
    {
      "id": "impactor-w8",
      "name": "Impactor W8",
      "category": "mini",
      "type": "Three-Lens Mini LED Dual Beam Projector",
      "size": "Mini",
      "color_temp": "6000K",
      "price_idr": 3850000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 62,
        "high_beam_w": 96,
        "chip": "Triple Lens Multi-Pupil",
        "cut_off": "Flat"
      },
      "tags": [
        "new-arrival"
      ],
      "waterproof": null
    },
    {
      "id": "white-wolf",
      "name": "White Wolf",
      "category": "headlamp",
      "type": "Car LED Projector Headlight",
      "size": "2.5\"",
      "color_temp": "5000K",
      "price_idr": 3050000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 96,
        "high_beam_w": 106,
        "chip": "6+3 LED",
        "cut_off": "Flat"
      },
      "tags": [
        "new-arrival"
      ],
      "waterproof": null
    },
    {
      "id": "trigrams-delta",
      "name": "Trigrams Delta",
      "category": "headlamp",
      "type": "Car LED Projector Headlight",
      "size": "3\"",
      "color_temp": "5500K",
      "price_idr": 2900000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 80,
        "high_beam_w": 116,
        "chip": "6+3 LED",
        "cut_off": "Flat"
      },
      "tags": [],
      "waterproof": null
    },
    {
      "id": "ember",
      "name": "Ember",
      "category": "headlamp",
      "type": "Car LED Projector Headlight",
      "size": "3\"",
      "color_temp": "5500K",
      "price_idr": 2900000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 50,
        "high_beam_w": 55,
        "chip": "6+3 LED",
        "cut_off": "Flat"
      },
      "tags": [],
      "waterproof": null
    },
    {
      "id": "wolf",
      "name": "Wolf",
      "category": "headlamp",
      "type": "Car LED Projector Headlight",
      "size": "3\"",
      "color_temp": "5000K",
      "price_idr": 3950000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 65,
        "high_beam_w": 75,
        "chip": "6+3 LED",
        "cut_off": "Flat"
      },
      "tags": [
        "new-arrival"
      ],
      "waterproof": null
    },
    {
      "id": "leo",
      "name": "Leo",
      "category": "headlamp",
      "type": "Car LED Projector Headlight",
      "size": "3\"",
      "color_temp": "5000K",
      "price_idr": 4975000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 70,
        "high_beam_w": 78,
        "chip": "6+2 LED",
        "cut_off": "Flat"
      },
      "tags": [
        "new-arrival"
      ],
      "waterproof": null
    },
    {
      "id": "omega-laser",
      "name": "Omega Laser",
      "category": "headlamp",
      "type": "Laser Projector Headlight",
      "size": "3\"",
      "color_temp": "5500K",
      "price_idr": 7000000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 70,
        "high_beam_w": 80,
        "chip": "12+3+1 LED & Laser",
        "cut_off": "Flat"
      },
      "tags": [
        "new-arrival",
        "laser"
      ],
      "waterproof": null
    },
    {
      "id": "square-vi",
      "name": "Square VI",
      "category": "square",
      "type": "Ultrabeam Square Projector",
      "size": "Square",
      "color_temp": "5500K",
      "price_idr": 3300000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 56,
        "high_beam_w": 65,
        "chip": "6+3 LED",
        "cut_off": "Flat"
      },
      "tags": [],
      "waterproof": null
    },
    {
      "id": "square-vii",
      "name": "Square VII",
      "category": "square",
      "type": "Four Cups Laminated Square Projector",
      "size": "Square",
      "color_temp": "5500K",
      "price_idr": 5300000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 62,
        "high_beam_w": 62,
        "chip": "6+1 / 6+1 LED",
        "cut_off": "Flat"
      },
      "tags": [],
      "waterproof": null
    },
    {
      "id": "square-viii",
      "name": "Square VIII",
      "category": "square",
      "type": "Dual High Power Square Projector",
      "size": "Square",
      "color_temp": "5500K",
      "price_idr": 5800000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 90,
        "high_beam_w": 80,
        "chip": "6+3 LED",
        "cut_off": "Flat"
      },
      "tags": [],
      "waterproof": null
    },
    {
      "id": "captain",
      "name": "Captain",
      "category": "matrix",
      "type": "Matrix LED Projector Headlight",
      "size": "1.8\"",
      "color_temp": "5500K",
      "price_idr": 3700000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 104,
        "high_beam_w": 136,
        "chip": "6+2 LED",
        "cut_off": "Flat"
      },
      "tags": [],
      "waterproof": null
    },
    {
      "id": "black-fox",
      "name": "Black Fox",
      "category": "matrix",
      "type": "Matrix LED Projector Headlight",
      "size": "1.5\"",
      "color_temp": "5500K",
      "price_idr": 2750000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 30,
        "high_beam_w": 40,
        "chip": "6+1 LED",
        "cut_off": "Flat"
      },
      "tags": [],
      "waterproof": null
    },
    {
      "id": "barricade",
      "name": "Barricade",
      "category": "premium",
      "type": "Premium Laser Projector Headlight",
      "size": "3\"",
      "color_temp": "5500K",
      "price_idr": 7000000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 60,
        "high_beam_w": 90,
        "chip": "6+3 LED + 3 Direct Laser",
        "cut_off": "Flat"
      },
      "tags": [
        "new-arrival",
        "laser"
      ],
      "waterproof": null
    },
    {
      "id": "crusher",
      "name": "Crusher",
      "category": "premium",
      "type": "Premium Laser Projector Headlight",
      "size": "3\"",
      "color_temp": "5500K",
      "price_idr": 12000000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 60,
        "high_beam_w": 75,
        "chip": "6+3 LED + 1 Direct Laser",
        "cut_off": "Flat"
      },
      "tags": [
        "new-arrival",
        "laser"
      ],
      "waterproof": null
    },
    {
      "id": "prime",
      "name": "Prime",
      "category": "premium",
      "type": "Premium Laser Projector Headlight",
      "size": "3\"",
      "color_temp": "5500K",
      "price_idr": 22000000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 60,
        "high_beam_w": 85,
        "chip": "6+3 LED + 2 Direct Laser",
        "cut_off": "Flat"
      },
      "tags": [
        "new-arrival",
        "laser"
      ],
      "waterproof": null
    },
    {
      "id": "megatron",
      "name": "Megatron",
      "category": "premium",
      "type": "Premium Laser Projector Headlight",
      "size": "3\"",
      "color_temp": "5500K",
      "price_idr": 26000000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 70,
        "high_beam_w": 90,
        "chip": "6+6/2+3 LED + 2 Direct Laser",
        "cut_off": "Flat"
      },
      "tags": [
        "new-arrival",
        "laser"
      ],
      "waterproof": null
    },
    {
      "id": "ta25-avanza-veloz",
      "name": "TA25 · Toyota Avanza Veloz 2023+",
      "category": "headlamp-kit",
      "type": "Headlamp Plug & Play Kit",
      "size": "OEM Fit",
      "color_temp": "5500K",
      "price_idr": 9900000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 102,
        "high_beam_w": 134,
        "chip": "Projector",
        "cut_off": "Flat"
      },
      "tags": [
        "plug-and-play"
      ],
      "waterproof": "IP54",
      "vehicles": [
        "Toyota Avanza 2023+",
        "Toyota Veloz 2023+"
      ]
    },
    {
      "id": "innova-zenix",
      "name": "Innova Zenix 2023+",
      "category": "headlamp-kit",
      "type": "Headlamp Plug & Play Kit",
      "size": "OEM Fit",
      "color_temp": "6000K",
      "price_idr": 15750000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 145,
        "high_beam_w": 171,
        "chip": "Projector",
        "cut_off": "Flat"
      },
      "tags": [
        "plug-and-play"
      ],
      "waterproof": "IP54",
      "vehicles": [
        "Toyota Innova Zenix 2023+"
      ]
    },
    {
      "id": "trigrams-stone",
      "name": "Trigrams Stone",
      "category": "foglamp",
      "type": "Car LED Fog Light Projector",
      "size": "3\"",
      "color_temp": "5000K",
      "price_idr": 2850000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 80,
        "high_beam_w": 100,
        "chip": "6 Chips Taiwan Crystal",
        "cut_off": "Flat"
      },
      "tags": [],
      "waterproof": null
    },
    {
      "id": "ant2-1color",
      "name": "ANT 2.0 (Single Color)",
      "category": "foglamp",
      "type": "Car Super LED Fog Light Projector",
      "size": "2\"",
      "color_temp": "4500K",
      "price_idr": 2850000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 45,
        "high_beam_w": 55,
        "chip": "6+1 LED",
        "cut_off": "Flat"
      },
      "tags": [
        "new-arrival"
      ],
      "waterproof": null
    },
    {
      "id": "ant2-3color",
      "name": "ANT 2.0 (3 Color)",
      "category": "foglamp",
      "type": "Car Super LED Fog Light Projector",
      "size": "2\"",
      "color_temp": "3000K / 4500K / 5500K",
      "price_idr": 2850000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 45,
        "high_beam_w": 55,
        "chip": "6+1 LED",
        "cut_off": "Flat"
      },
      "tags": [
        "new-arrival"
      ],
      "waterproof": null
    },
    {
      "id": "wasp",
      "name": "WASP",
      "category": "foglamp",
      "type": "TIR Super LED Fog Light Projector",
      "size": "3\"",
      "color_temp": "3000K / 4500K",
      "price_idr": 3100000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 45,
        "high_beam_w": 55,
        "chip": "6+2 LED",
        "cut_off": "Flat"
      },
      "tags": [],
      "waterproof": null
    },
    {
      "id": "colorshift",
      "name": "Colorshift Special Edition",
      "category": "foglamp",
      "type": "Car LED Fog Light Projector",
      "size": "3\"",
      "color_temp": "3000K / 6000K",
      "price_idr": 2950000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 45,
        "high_beam_w": 55,
        "chip": "Dual Color",
        "cut_off": "Flat"
      },
      "tags": [],
      "waterproof": null
    },
    {
      "id": "va25-basic-vf3",
      "name": "VA25 Basic · VinFast VF3",
      "category": "foglamp-kit",
      "type": "Foglamp Plug & Play Kit",
      "size": "OEM Fit",
      "color_temp": "5500K",
      "price_idr": 6250000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 40,
        "high_beam_w": 50,
        "chip": "6+2 TIR LED",
        "cut_off": "Flat"
      },
      "tags": [
        "plug-and-play"
      ],
      "waterproof": "IP67",
      "vehicles": [
        "VinFast VF3"
      ]
    },
    {
      "id": "va25-plus-vf3",
      "name": "VA25 Plus · VinFast VF3 (DRL)",
      "category": "foglamp-kit",
      "type": "Foglamp Plug & Play Kit with DRL",
      "size": "OEM Fit",
      "color_temp": "5500K",
      "price_idr": 7500000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 40,
        "high_beam_w": 50,
        "chip": "6+2 TIR LED",
        "cut_off": "Flat"
      },
      "tags": [
        "plug-and-play"
      ],
      "waterproof": "IP67",
      "vehicles": [
        "VinFast VF3"
      ]
    },
    {
      "id": "h4-mini",
      "name": "H4 / Mini",
      "category": "mini",
      "type": "Car Mini LED Projector Headlight",
      "size": "Mini",
      "color_temp": "5500K",
      "price_idr": 1990000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 45,
        "high_beam_w": 75,
        "chip": "6+6 LED",
        "cut_off": "Flat"
      },
      "tags": [
        "plug-and-play"
      ],
      "waterproof": null
    },
    {
      "id": "w1",
      "name": "W1 Mini Slim",
      "category": "mini",
      "type": "Dual Beam External Mini LED Projector",
      "size": "Mini Slim",
      "color_temp": "6500K / 3500K",
      "price_idr": 1550000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 70,
        "high_beam_w": 70,
        "chip": "3+3 LED Dual Beam",
        "cut_off": "Flat"
      },
      "tags": [],
      "waterproof": null
    },
    {
      "id": "w2",
      "name": "W2 Dual Lens",
      "category": "mini",
      "type": "Dual Beam External Mini LED Projector",
      "size": "Mini",
      "color_temp": "3500K – 6500K",
      "price_idr": 2250000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 100,
        "high_beam_w": 100,
        "chip": "3+3 LED Dual Beam",
        "cut_off": "Flat"
      },
      "tags": [],
      "waterproof": null
    },
    {
      "id": "impactor",
      "name": "Impactor",
      "category": "mini",
      "type": "Three-Lens Mini LED Dual Beam Projector",
      "size": "Mini",
      "color_temp": "6000K",
      "price_idr": 3350000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 62,
        "high_beam_w": 96,
        "chip": "Triple Blue Lens",
        "cut_off": "Flat"
      },
      "tags": [],
      "waterproof": null
    },
    {
      "id": "mini-impactor",
      "name": "Mini Impactor",
      "category": "mini",
      "type": "Two-Lens Mini LED Dual Beam Projector",
      "size": "Mini",
      "color_temp": "5000K",
      "price_idr": 2500000,
      "warranty_years": 2,
      "specs": {
        "low_beam_w": 70,
        "high_beam_w": 120,
        "chip": "Dual Blue Lens",
        "cut_off": "Flat"
      },
      "tags": [],
      "waterproof": null
    }
  ]
};
