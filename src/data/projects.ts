export interface Project {
  title: string;
  /** set to show in the Highlights strip (needs an image) */
  feature?: { rank: number; pitch: string };
  tag: string;
  type: string;
  location: string;
  gfa: string;
  value: string;
  about: string;
  scope: string[];
  image?: string;
  href?: string;
  icon?: string;
}

export interface Company {
  id: string;
  name: string;
  place: string;
  years: string;
  projects: Project[];
  /** smaller jobs: [name, note?] */
  also: [name: string, note?: string][];
}

export const companies: Company[] = [
  {
    id: "wyatt",
    name: "Wyatt Construction",
    place: "Christchurch",
    years: "2021",
    projects: [
      {
        title: "66 Innes Road – Townhouses",
        feature: {
          rank: 6,
          pitch:
            "Contract admin for 15 townhouses, procuring long-lead items through COVID delays",
        },
        tag: "Contract Admin",
        type: "Contract Administration",
        location: "Christchurch",
        gfa: "201 / 154 / 181m²",
        value: "$2m",
        image: "66_innes.webp",
        icon: "home",
        about:
          "Three blocks of five townhouses (Block 1: 201m², Block 2: 154m², Block 3: 181m²). I picked this job up just as the ground improvement work finished, with the slab ready to pour, and reviewed the tender documents against the building consent set so variations could be prepared accordingly.",
        scope: [
          "Tender vs. consent document review and variation preparation",
          "Early procurement of long-lead items to beat COVID-19 supply chain delays",
          "Fortnightly onsite PCG meetings, reporting progress to the client's representative",
          "Verified and processed sub-contractor invoices for payment",
        ],
      },
      {
        title: "66 Fendalton Road – Architectural House",
        tag: "Contractor's Estimate",
        type: "Contractor's Estimate",
        location: "Christchurch",
        gfa: "216m²",
        value: "$1.2m",
        image: "66-fendalton.webp",
        icon: "home",
        about:
          "A personal project for the company's principal. I worked through the design and value engineering with them, producing several estimates as the design evolved.",
        scope: [
          "Measured P&G, concrete, carpentry and hard landscaping in-house",
          "Liaised with sub-contractors to obtain quotes for the remaining trades",
          "Pulled it together into a final price",
        ],
      },
      {
        title: "41 Moetapu Bay Road – Architectural House",
        tag: "Contractor's Estimate",
        type: "Contractor's Estimate",
        location: "Marlborough Sounds",
        gfa: "177m²",
        value: "$1m",
        image: "moetapu.webp",
        icon: "home",
        about:
          "Another personal project for the principal, intended to be built alongside Fendalton Road (which took priority). After I presented the initial estimate we learned the real budget was closer to $500K. We tried to value engineer it, but it was clearly outside budget and was put on the back burner.",
        scope: [
          "Initial estimate across all trades",
          "Value engineering attempt against the ~$500K budget",
        ],
      },
    ],
    also: [["Yncyca Bay", "Walkway"]],
  },
  {
    id: "jennian",
    name: "Jennian Homes",
    place: "Nelson / Tasman",
    years: "2020",
    projects: [
      {
        title: "Kahikatea Townhouses ×5",
        tag: "Contractor's Estimate",
        type: "Contractor's Estimate – townhouses / apartments",
        location: "Nelson Bays",
        gfa: "5 × 180m²",
        value: "$820k each",
        image: "kahikatea.webp",
        about:
          "Five two-storey duplex units built as investments for the main shareholder of Jennian Homes Nelson Bays.",
        scope: [
          "Measured and priced P&G and carpentry",
          "Secured sub-contractor quotes",
          "Prepared the 20-page sales document",
        ],
      },
      {
        title: "Block B – 70 Coster Street",
        tag: "Contractor's Estimate",
        type: "Contractor's Estimate – townhouses / apartments",
        location: "Richmond",
        gfa: "5 × 160m²",
        value: "$545K each",
        image: "70_coster.webp",
        icon: "building-o",
        about:
          "Five two-storey units (retail price $545K each) built as investments for the main shareholder of Jennian Homes Nelson Bays. Block A was already complete, so most trades were on agreed rates and only a few key sub-contractors needed fresh quotes.",
        scope: [
          "Measured and priced P&G and carpentry",
          "Liaised with key sub-contractors for quotes",
          "Prepared the 20-page sales document",
        ],
      },

      {
        title: "Jennian Show Home",
        tag: "Design / Build",
        type: "Design / Build Lump Sum Pricing",
        location: "Richmond",
        gfa: "166m²",
        value: "$1.2m",
        image: "showhome.webp",
        icon: "home",
        about:
          "Measured from concept-level plans. High end spec home put foward for home of the year award and recieved 2nd place.",
        scope: ["Take-off from concept plans", "Internal showhome"],
      },
      {
        title: "Southern Series – Standard House Plans x16",
        tag: "Indicative Pricing",
        type: "Indicative Sales Pricing",
        location: "Nelson Bays",
        gfa: "106 – 201m²",
        value: "$281K – $428K",
        image: "southern.webp",
        icon: "th-large",
        about:
          "16 standard plans, repriced every quarter for the company. When I started I measured each design from scratch so pricing was accurate and up to date. All trades are on agreed rates, which meant measuring plumbing and electrical too – a great learning opportunity.",
        scope: [
          "Full take-off of 16 plans, from 106m² through to 201m²",
          "Quarterly price updates",
          "Plumbing and electrical measure on top of the core trades",
        ],
      },
    ],
    also: [
      ["Browns and Robbins Residence"],
      ["Bell Residence"],
      ["Maetzig Residence"],
      ["Miles Residence"],
      ["Hutton Family Trust"],
    ],
  },
  {
    id: "legacy",
    name: "Legacy Property / Rethinking.Space",
    place: "Auckland",
    years: "2019",
    projects: [
      {
        title: "Rethinking.Space 1",
        feature: {
          rank: 4,
          pitch:
            "Rebuilt an inherited budget and engaged trades for a 46-apartment ICF building",
        },
        tag: "Contract Admin",
        type: "New build – make sense of budget prepared by others, engage contractors",
        location: "Panmure, Auckland",
        gfa: "3,150m²",
        value: "$12m",
        image: "space1.webp",
        href: "https://offplan.kiwi/development/auckland/panmure/rethinking-space-1/",
        icon: "building-o",
        about:
          "The first apartment building under the brand: 46 apartments over six floors, built with Insulated Concrete Formwork (ICF) – a rare system in the NZ market. I joined just after the ground floor slab was poured. The previous budgets were prepared by someone not trained as a QS, so my first job was to understand their numbers.",
        scope: [
          "Reviewed and rebuilt the inherited budget",
          "Obtained quotes and letters of engagement from sub-trades for the bank's PQS to satisfy lending conditions",
          "Learned what a site manager needs from a budget – and budgeted accordingly",
        ],
      },
      {
        title: "Rethinking.Space 2",
        feature: {
          rank: 3,
          pitch:
            "In from day one: elemental estimate and cost advice to the design team, plus tender systems",
        },
        tag: "Elemental Estimate",
        type: "Elemental Estimate & sub-contractor engagement for Stage 1 – Earthworks",
        location: "Takapuna, Auckland",
        gfa: "3,210m²",
        value: "$14m",
        image: "space2.webp",
        href: "https://www.channelmag.co.nz/channel/features/rethinking-the-way-we-live/",
        icon: "building-o",
        about:
          "The second project under the brand: 42 apartments over seven floors. Estimated at $14m but never built. I was involved from the outset, feeding cost advice into the preliminary design through PCG meetings with the architects and engineers.",
        scope: [
          "Elemental Estimate capturing decisions from the PCG meetings",
          "Timely costings so the design team could specify the best product for the budget",
          "Set up BuilderTrend to manage tender bid packages",
          "Built easy-to-use sub-contractor acceptance templates covering payment terms and key NZS 3915 clauses",
        ],
      },
    ],
    also: [],
  },
  {
    id: "rawlinsons",
    name: "Rawlinsons",
    place: "Dunedin",
    years: "2018",
    projects: [
      {
        title: "Otago Polytechnic – Campus Development",
        feature: {
          rank: 1,
          pitch:
            "2D take-off for a $22m glulam timber campus building, from concept to detailed design",
        },
        tag: "Concept to Detailed Design",
        type: "Preliminary, concept and detailed design estimates – measure with some minor pricing",
        location: "Dunedin",
        gfa: "4,400m² (ECL)",
        value: "$52m",
        image: "otago_poly.webp",
        href: "https://www.op.ac.nz/about-us/news-and-events/item/6652",
        icon: "graduation-cap",
        about:
          "A $22m ECL building plus $30m of refurbishment across the campus. The ECL building is a state-of-the-art green build using glue-laminated timber beams and columns – a home for Carpentry, Quantity Surveying, Engineering and Architecture students.",
        scope: [
          "2D take-off of the ECL building, assisted by an early-stage 3D model",
          "Estimates at preliminary, concept and detailed design stages",
          "Some minor pricing involvement",
        ],
      },
      {
        title: "TXP – Dunedin Airport Terminal Expansion",
        feature: {
          rank: 5,
          pitch: "Carpentry and linings SOQ for the airport terminal expansion",
        },
        tag: "Schedule of Quantities",
        type: "Schedule of Quantities for Builder (Carpentry)",
        location: "Dunedin Airport",
        gfa: "4,000m²",
        value: "N/a",
        image: "dunedin_airport.webp",
        href: "https://signalgroup.co.nz/news/dunedin-international-airport-terminal-redevelopment",
        icon: "plane",
        about:
          "I worked alongside a senior QS on the SOQ for the carpentry and plasterboard linings trades plus a few concrete steps and ramps. I picked up the isolated buildings and stairwells while he took off the main structure.",
        scope: [
          "Carpentry and plasterboard linings SOQ",
          "Concrete steps and ramps",
          "Isolated buildings and stairwells",
        ],
      },
      {
        title: "Spotlight + Harvey Norman – Moorhouse Ave",
        feature: {
          rank: 2,
          pitch:
            "Elemental take-off for an 8,000m² post-earthquake flagship retail store",
        },
        tag: "Elemental Estimate",
        type: "Elemental Estimate – measure only",
        location: "Christchurch",
        gfa: "8,000m²",
        value: "$21m",
        image: "spotlight.webp",
        href: "https://www.stuff.co.nz/business/110531901/spotlight-starts-work-on-20m-flagship-store-in-central-christchurch",
        icon: "shopping-cart",
        about:
          "Post-earthquake big-box retail construction. A relatively simple take-off, with a few amendments to the structural design as it progressed from concept into developed design. Pricing was carried out by a senior QS in Christchurch.",
        scope: [
          "Elemental take-off across concept and developed design",
          "Tracked structural design changes between stages",
        ],
      },
      {
        title: "Highlands Motorsport Park – Pit Lane Apartments",
        tag: "Schedule of Quantities",
        type: "Schedule of Quantities for Builder (excavation, carpentry, concrete, structural steel, plasterboard linings)",
        location: "Cromwell",
        gfa: "640m²",
        value: "N/a",
        image: "highlands.webp",
        href: "http://www.designwindows.co.nz/projects/commercial/pit-lane-apartments/",
        icon: "flag-checkered",
        about:
          "I took a lot of pride in this SOQ because it was for my previous employer, Breens, and I wanted to do an excellent job. I also thoroughly enjoyed this style of apartment construction.",
        scope: [
          "Multi-trade SOQ: excavation, carpentry, concrete, structural steel and linings",
        ],
      },
      {
        title: "Filleul St – Hotel",
        tag: "Elemental Estimate",
        type: "Elemental Estimate – new build accommodation",
        location: "Dunedin",
        gfa: "2,000m²",
        value: "$6m",
        image: "filluel.webp",
        href: "https://www.odt.co.nz/news/dunedin/central-dunedin-hotel-gets-consent",
        icon: "bed",
        about:
          "A new-build, 27-room (40-bed) hotel in central Dunedin, estimated at elemental level.",
        scope: ["Elemental Estimate"],
      },
      {
        title: "Waikiwi School – Demo and Rebuild",
        tag: "Elemental Estimate + SOQ",
        type: "Elemental Estimate and SOQ ×2",
        location: "Invercargill",
        gfa: "235m²",
        value: "$2.5m",
        image: "waikiwi.webp",
        icon: "graduation-cap",
        about:
          "A desperately needed rebuild: a large open space created with portal frames, plus remedial work to interior and exterior landscaping. A messy job – the architect's documents contradicted each other in several places – which taught me how to resolve those errors productively.",
        scope: [
          "Prepared the SOQ issued to tender (two issues)",
          "Liased with Ministry of Education to meet requirements",
          "Reconciled contradictory architectural documents",
        ],
      },
      {
        title: "Cadbury Factory Heritage Façade",
        tag: "Elemental Estimate",
        type: "Elemental Estimate – measure and price",
        location: "Dunedin",
        gfa: "240m²",
        value: "$450k",
        image: "cadbury.webp",
        about:
          "Heritage façade restoration and earthquake strengthening · EE",
        scope: [
          "Plaster and paint",
          "Earthquake and seismic strengthening",
        ],
      },
      {
        title: "Archibald Baxter Memorial",
        tag: "Elemental Estimate",
        type: "Elemental Estimate – measure and price",
        location: "Dunedin",
        gfa: "100m²",
        value: "$300k",
        image: "baxter.webp",
        about:
          "Charitable trust memoral · EE",
        scope: [
          "Excavation",
          "In-situ concrete walls",
          "Landscaping/plantings",
          "Outdoor seating and accessiable ramps and pedestrian futures",
        ],
      },
    ],
    also: [
      ["Clinton School", "Ministry of Education Weathertightness Remedial Works" ],
      ["Austin Residence", "High end architectural home"],
      ["Riselaw Road School", "Unused school turned into office space · EE"],
      ["Meridian Mall", "Measured a shop to determine GFA for rent purposes"],
      ["Hill Side Road", "Two-storey house · EE"],
      [
        "Archibald Baxter Memorial",
        "Footpath, stairs, outdoor seating and statue, Dunedin · EE",
      ],
      ["Crombie Residence", "Two-storey architectural house, Queenstown · EE"],
      ["Ashburton School", "Open learning space upgrade · EE"],
      ["Dunedin Baptist Church", "Auditorium and lobby · Concept EE"],
      [
        "Ashburn Clinic",
        "Rehab centre, multiple buildings upgraded or extended · Detailed EE",
      ],
      ["Lincoln Hub Campus Development", "Metalwork trade · SOQ revision"],
      [
        "Lincoln Fire Station",
        "Changing room and toilet block extension · priced SOQ",
      ],
      ["Middleton Road", "Driveway and garage · EE"],
      [
        "Gelita Christchurch",
        "Supporting the Christchurch QS on fire damage and rebuild",
      ],
      [
        "Taieri School",
        "Measured tiered seating structure for a new auditorium · SOQ",
      ],
      [
        "Queenstown House",
        "Picked up from the QS I replaced and updated his SOQ",
      ],
      [
        "University of Otago Dental School",
        "Main contractor vs. plasterboard sub-contractor liquidation claim",
      ],
    ],
  },
  {
    id: "breen",
    name: "Breen Construction",
    place: "Alexandra - Central Otago",
    years: "2016 – 2017",
    projects: [
      {
        title: "Olssen Residence - 4 Lowburn Valley Rd",
        tag: "Contractor's Estimate",
        type: "Tender pricing from full consent documents",
        location: "Cromwell",
        gfa: "202m²",
        value: "$950K",
        image: "olssen.webp",
        icon: "home",
        about:
          "A single-storey, semi-architectural home. Rare for Breen Homes, I priced from a full set of consent documents rather than in-house concept drawings. The client's architect, acting as their representative, was meticulous. We worked through a few changes, secured the contract, then the client issued a revised set with many changes and we repriced to their satisfaction. The architect personally acknowledged the calibre of my work and clear communication.",
        scope: [
          "Full tender from consent documents",
          "Negotiated changes (NTT) through to contract",
          "Repriced a heavily revised document set",
        ],
      },
      {
        title: "Queenstown Lakes Community Housing Trust - Northlake ×6",
        tag: "Contractor's Estimate",
        type: "Pre-contract: schedule, sub-trade letting, tender letter",
        location: "Wanaka",
        gfa: "144m²",
        value: "$460k each",
        image: "northlake.webp",
        about:
          "Multiple two story, duplex town housing build part of QLCHT development.",
        scope: [
          "Prepared the schedule",
          "Let the sub-trades",
          "Wrote the tender letter",
        ],
      },
      {
        title: "Queenstown Lakes Community Housing Trust - Shotover ×4",
        tag: "Contractor's Estimate",
        type: "Pre-contract: schedule, sub-trade letting, tender letter",
        location: "Queenstown",
        gfa: "90m²",
        value: "$295K each",
        image: "shotover.webp",
        about:
          "Single story, duplex town housing build part of QLCHT development.",
        scope: [
          "Prepared the schedule",
          "Let the sub-trades",
          "Wrote the tender letter",
        ],
      },
    ],
    also: [
      ["Fulton Hogan – Relocatable Office"],
      ["Hermitage Village – Mt Cook ×3 Relocatables"],
      ["Hunt residence"],
      ["Barclay Shepard residence"],
      ["Aspiring – Northlake subdivision", "×2"],
      ["Wilson residence"],
      ["Fairhurst residence"],
      ["McKenzie residence"],
      ["Nichol residence"],
      ["Walker residence", "pro bono"],
      ["Vercoe residence"],
      ["Vercoe farm shed"],
      ["Karamena residence"],
      ["Donaldson residence"],
      ["Bishop residence"],
      ["Darling residence"],
      ["Hewitt alteration"],
      ["Lester budget"],
      ["Van Boxtel residence"],
      ["Compton residence"],
      ["Espresso 2 Go warehouse fitout"],
      ["Wilton residence"],
      ["Hughson residence"],
      ["Anderson & Marnane residence"],
      ["Kitson residence"],
      ["Grubb tiny garage house"],
      ["Taylor residence"],
    ],
  },
];
