// Static content for Medici Living

export const BRAND = {
  name: "Medici Living",
  short: "MEDICI",
  phone: "+44 7767 939630",
  phoneHref: "tel:+447767939630",
  email: "hello.mediciliving@gmail.com",
  emailHref: "mailto:hello.mediciliving@gmail.com",
  domain: "mediciliving.co.uk",
  tagline: "Luxury Renovations for Rental Flats & Airbnbs",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Partnerships", to: "/testimonials" },
  { label: "FAQ", to: "/faq" },
];

export const BOROUGHS = [
  {
    slug: "kensington",
    name: "Kensington",
    region: "London",
    blurb:
      "Stucco-fronted townhouses and garden-flat conversions defining the borough's elegance. Our work here honours its Victorian bones whilst preparing each home for a discerning short-let market.",
    style: "Period townhouses, mansion blocks, and red-brick mews.",
    image:
      "https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgxNzA2NTA2fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "chelsea",
    name: "Chelsea",
    region: "London",
    blurb:
      "From King's Road pieds-à-terre to Cheyne Walk garden flats — refined renovations calibrated for collectors, expatriates, and weekend hosts.",
    style: "Georgian terraces, Regency villas, and riverside apartments.",
    image:
      "https://images.unsplash.com/photo-1644057501622-dfa7dd26dbfb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgxNzA2NTA3fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "mayfair",
    name: "Mayfair",
    region: "London",
    blurb:
      "The most photographed postcode in luxury. We deliver hotel-grade specification within heritage mansion blocks and boutique apartment buildings.",
    style: "Mansion blocks, mews houses, and ultra-prime apartments.",
    image:
      "https://images.unsplash.com/photo-1663811397207-418a92396ad5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgxNzA2NTA3fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "knightsbridge",
    name: "Knightsbridge",
    region: "London",
    blurb:
      "International tenants expect international standards. Our Knightsbridge programme delivers serviced-apartment polish with a discreet private-residence feel.",
    style: "Edwardian mansion blocks and modern prime developments.",
    image:
      "https://images.unsplash.com/photo-1704040686428-7534b262d0d8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgxNzA2NTA2fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "notting-hill",
    name: "Notting Hill",
    region: "London",
    blurb:
      "Pastel terraces, garden flats, and creative residents. We blend warm-modern interiors with the borough's storied character — perfect for premium short-lets.",
    style: "Pastel terraces, garden flats, and Victorian conversions.",
    image:
      "https://images.pexels.com/photos/20418771/pexels-photo-20418771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    slug: "shoreditch",
    name: "Shoreditch",
    region: "London",
    blurb:
      "Loft conversions, warehouse apartments, and design-led short-lets. Our Shoreditch projects lean editorial — exposed materials, sculptural lighting, restrained palettes.",
    style: "Warehouse conversions, loft apartments, and new-build penthouses.",
    image:
      "https://images.unsplash.com/photo-1525286376485-60c84ee403d1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkZXRhaWx8ZW58MHx8fHwxNzgxNzA2NTA2fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "hampstead",
    name: "Hampstead",
    region: "London",
    blurb:
      "Family-sized lets and academic short-stays demand warmth, durability, and quiet luxury. We specify accordingly — natural materials, intelligent lighting, soft tactility.",
    style: "Georgian villas, Victorian semis, and garden conversions.",
    image:
      "https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgxNzA2NTA2fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "canary-wharf",
    name: "Canary Wharf",
    region: "London",
    blurb:
      "Corporate relocations and executive short-lets. Spec-driven, hotel-style apartments engineered for high turnover without sacrificing taste.",
    style: "Glass-tower apartments, riverside penthouses, and serviced units.",
    image:
      "https://images.pexels.com/photos/28678990/pexels-photo-28678990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    slug: "lincoln",
    name: "Lincoln",
    region: "Lincolnshire",
    blurb:
      "Cathedral-quarter cottages, riverside flats, and university lets. We bring metropolitan polish to a market that rewards it generously.",
    style: "Cathedral-quarter cottages, period terraces, and modern conversions.",
    image:
      "https://images.unsplash.com/photo-1644057501622-dfa7dd26dbfb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgxNzA2NTA3fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "stamford",
    name: "Stamford",
    region: "Lincolnshire",
    blurb:
      "England's finest stone town — we treat each Georgian property with the reverence it deserves whilst quietly elevating it for the modern luxury guest.",
    style: "Georgian limestone townhouses and listed period homes.",
    image:
      "https://images.unsplash.com/photo-1663811397207-418a92396ad5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgxNzA2NTA3fDA&ixlib=rb-4.1.0&q=85",
  },
];

export const SERVICES = [
  {
    slug: "temporary",
    title: "Temporary Staging Renovations",
    sub: "For the Airbnb host who values turnover over teardown",
    description:
      "Rapid, reversible transformations engineered for short-let landlords. We elevate the interior aesthetic and guest experience without altering the underlying property — perfect for leasehold flats, managed apartments, or interim repositioning.",
    bullets: [
      "Designer furniture, lighting & soft-furnishing curation",
      "Statement art, mirrors, and decorative layering",
      "Photography-ready styling for booking platforms",
      "Reversible enhancements, fully removable",
      "Turnaround in days, not months",
    ],
    image:
      "https://images.unsplash.com/photo-1644057501622-dfa7dd26dbfb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgxNzA2NTA3fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "permanent",
    title: "Permanent Renovations",
    sub: "For the investor who plays the long game",
    description:
      "Full-spec architectural renovations engineered for longevity, premium yield, and capital appreciation. From bathroom and kitchen rebuilds to whole-flat reconfigurations, our permanent work is specified to hotel-grade and built to last.",
    bullets: [
      "Architectural & spatial planning",
      "Bespoke joinery, stone, and metalwork",
      "Kitchens, bathrooms, and full reconfigurations",
      "Hotel-grade specification & detailing",
      "Project management end-to-end",
    ],
    image:
      "https://images.unsplash.com/photo-1704040686428-7534b262d0d8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgxNzA2NTA2fDA&ixlib=rb-4.1.0&q=85",
  },
];

export const PILLARS = [
  {
    n: "01",
    title: "Speed",
    body: "We respect the cost of vacancy. Our temporary programmes deliver in days; permanent works are scheduled with rental income in mind.",
  },
  {
    n: "02",
    title: "Material Integrity",
    body: "Stone, brass, oak, linen. We specify materials that age beautifully and survive the rhythm of repeat guest occupation.",
  },
  {
    n: "03",
    title: "Hands-Off Delivery",
    body: "Single point of contact. Fixed scope. Transparent reporting. We manage trades, logistics, and styling so you don't have to.",
  },
];

export const PROCESS = [
  {
    n: "01",
    title: "Consultation",
    body: "A complimentary site visit or video walkthrough. We discuss positioning, budget, and target tenant or guest profile.",
  },
  {
    n: "02",
    title: "Concept",
    body: "Mood boards, material palettes, and a fixed-fee proposal. Approved within a week, typically.",
  },
  {
    n: "03",
    title: "Construction & Curation",
    body: "Our trades and stylists deliver on programme. You receive weekly updates and a final walkthrough.",
  },
  {
    n: "04",
    title: "Handover",
    body: "A photography-ready, listing-ready, guest-ready home. We provide content for your platforms if required.",
  },
];

export const PORTFOLIO = [
  {
    title: "A Garden Flat Reimagined",
    location: "KENSINGTON, LONDON",
    type: "Permanent",
    image:
      "https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgxNzA2NTA2fDA&ixlib=rb-4.1.0&q=85",
    span: "md:col-span-7 md:row-span-2",
  },
  {
    title: "Mansion Block Pied-à-Terre",
    location: "MAYFAIR, LONDON",
    type: "Temporary",
    image:
      "https://images.unsplash.com/photo-1663811397207-418a92396ad5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgxNzA2NTA3fDA&ixlib=rb-4.1.0&q=85",
    span: "md:col-span-5",
  },
  {
    title: "Riverside Penthouse",
    location: "CHELSEA, LONDON",
    type: "Permanent",
    image:
      "https://images.unsplash.com/photo-1644057501622-dfa7dd26dbfb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgxNzA2NTA3fDA&ixlib=rb-4.1.0&q=85",
    span: "md:col-span-5",
  },
  {
    title: "Cathedral Quarter Cottage",
    location: "LINCOLN, LINCOLNSHIRE",
    type: "Permanent",
    image:
      "https://images.unsplash.com/photo-1704040686428-7534b262d0d8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgxNzA2NTA2fDA&ixlib=rb-4.1.0&q=85",
    span: "md:col-span-7",
  },
  {
    title: "Warehouse Loft Re-stage",
    location: "SHOREDITCH, LONDON",
    type: "Temporary",
    image:
      "https://images.pexels.com/photos/20418771/pexels-photo-20418771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    span: "md:col-span-6",
  },
  {
    title: "Limestone Townhouse",
    location: "STAMFORD, LINCOLNSHIRE",
    type: "Permanent",
    image:
      "https://images.pexels.com/photos/28678990/pexels-photo-28678990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    span: "md:col-span-6",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Medici turned a tired two-bed into our highest-grossing listing in the portfolio. Four days, no fuss. The photography alone justified the fee.",
    author: "Olivia M.",
    role: "Airbnb Superhost, Notting Hill",
  },
  {
    quote:
      "We've worked with three design firms across our portfolio. Medici is the only one that understands rental yield as fluently as it understands aesthetics.",
    author: "James A.",
    role: "Property Investor, London & Lincolnshire",
  },
  {
    quote:
      "Quiet, considered, and absurdly fast. Our Mayfair flat re-let at twenty percent above guide within a fortnight of completion.",
    author: "Camilla R.",
    role: "Private Landlord, Mayfair",
  },
  {
    quote:
      "They handled everything. Trades, styling, photography, listing copy. I signed off mood boards from another country and came back to a finished home.",
    author: "Henry P.",
    role: "Overseas Investor, Knightsbridge",
  },
];

export const FAQS = [
  {
    q: "What is the difference between a temporary and a permanent renovation?",
    a: "Temporary renovations are reversible, soft-touch transformations — furniture, art, styling, and decorative joinery that elevate the property without altering the structure or finishes. Permanent renovations involve construction works: kitchens, bathrooms, joinery, flooring, and reconfigurations.",
  },
  {
    q: "How long does a typical project take?",
    a: "Temporary staging projects are typically delivered in 3–10 days from approval. Permanent renovations range from 4 weeks for a single-room refit to 12–16 weeks for a full-flat reconfiguration.",
  },
  {
    q: "What is the typical investment?",
    a: "Temporary staging programmes start from £6,000 for a one-bedroom flat. Permanent renovations are quoted on scope — most full-flat projects sit between £40,000 and £180,000, depending on specification and size.",
  },
  {
    q: "Do you guarantee a return on investment?",
    a: "We don't promise yields, but every brief begins with a conversation about your target nightly rate, occupancy, or rental valuation — and our specification decisions are calibrated to that goal.",
  },
  {
    q: "Do you only work in London?",
    a: "We operate across London and Lincolnshire as core regions, with selected projects elsewhere in the UK by referral. Lincolnshire enquiries are warmly welcomed — particularly in Lincoln, Stamford, and surrounding villages.",
  },
  {
    q: "Can you handle planning, building control, and listed-building consent?",
    a: "Yes. We work with a roster of architects and consultants who manage all statutory permissions on our clients' behalf, particularly for heritage and listed-property work.",
  },
  {
    q: "Will my property be managed during the works?",
    a: "Single point of contact, weekly written progress reports, and a private client portal for documents and approvals. You can be entirely hands-off — and most of our clients are.",
  },
];

export const SERVICE_OPTIONS = [
  { value: "temporary", label: "Temporary Staging Renovation" },
  { value: "permanent", label: "Permanent Renovation" },
  { value: "consult", label: "Consultation / Not Sure Yet" },
];

export const TIMELINE_OPTIONS = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-3-months", label: "Within 1–3 months" },
  { value: "3-6-months", label: "Within 3–6 months" },
  { value: "exploring", label: "Just exploring" },
];
