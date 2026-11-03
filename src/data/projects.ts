export interface Project {
  title: string;
  image: string;
  href: string;
  details: [label: string, value: string][];
}

export const projects: Project[] = [
  {
    title: "Otago Polytechnic - Campus Development",
    image: "otago_poly.jpg",
    href: "https://www.op.ac.nz/about-us/news-and-events/item/6652",
    details: [["Company", "Rawlinsons"], ["Location", "Dunedin"], ["GFA", "4400m2"], ["Value", "$22m"]],
  },
  {
    title: "TXP Dunedin Airport Terminal Expansion",
    image: "dunedin_airport.jpg",
    href: "https://signalgroup.co.nz/news/dunedin-international-airport-terminal-redevelopment",
    details: [["Type", "Schedule of Quantities"], ["Location", "Dunedin"], ["GFA", "4000m2"], ["Value", "N/a"]],
  },
  {
    title: "Spotlight",
    image: "spotlight.jpg",
    href: "https://www.stuff.co.nz/business/110531901/spotlight-starts-work-on-20m-flagship-store-in-central-christchurch",
    details: [["Type", "Elemental Estimate (measure only)"], ["Location", "Christchurch"], ["GFA", "8000m2"], ["Value", "21m"]],
  },
  {
    title: "Highlands Motor Sport Park - Pit Lane",
    image: "highlands.jpg",
    href: "http://www.designwindows.co.nz/projects/commercial/pit-lane-apartments/",
    details: [["Type", "Schedule of Quantities"], ["Location", "Cromwell"], ["GFA", "640m2"], ["Value", "N/a"]],
  },
  {
    title: "Filleul St - 27 room hotel",
    image: "filluel.PNG",
    href: "https://www.odt.co.nz/news/dunedin/central-dunedin-hotel-gets-consent",
    details: [["Type", "Elemental Estimate"], ["Location", "Dunedin"], ["GFA", "2000m2"], ["Value", "$6m"]],
  },
  {
    title: "ReThinking Space 1",
    image: "space1.jpg",
    href: "https://offplan.kiwi/development/auckland/panmure/rethinking-space-1/",
    details: [["Type", "Sub-Contractor Engagement and Cost Reporting"], ["Location", "Auckland - Panmure"], ["GFA", "3200m2"], ["Value", "$10m"]],
  },
  {
    title: "ReThinking Space 2",
    image: "space2.jpg",
    href: "https://www.channelmag.co.nz/channel/features/rethinking-the-way-we-live/",
    details: [["Type", "Elemental Estimate"], ["Location", "Auckland - Takapuna"], ["GFA", "3600m2"], ["Value", "$13m"]],
  },
  {
    title: "66 Innes Road",
    image: "66_innes.png",
    href: "#",
    details: [
      ["Type", "Contract Admin"],
      ["Location", "Christchurch"],
      ["GFA", "Block 1: 201m2, Block 2: 154m2 and Block 3: 181m2 (5 units per block)"],
      ["Value", "$2m"],
    ],
  },
  {
    title: "Block B - 70 Coster Street",
    image: "70_coster.png",
    href: "#",
    details: [["Type", "Retail Pricing"], ["Location", "Nelson/Tasman"], ["GFA", "5x Unit x 160m2 each over two floors"], ["Value", "$545K each (retail)"]],
  },
];
