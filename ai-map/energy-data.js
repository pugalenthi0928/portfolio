/* ============================================
   ENERGY LAYER — Deep-Dive Data
   ============================================
   All figures are approximate and use the latest reliable year
   widely available in primary sources at time of writing
   (typically 2024 actuals reported in 2025–early 2026
   editions of IEA Global Energy Review, IEA Energy and AI,
   Ember Global Electricity Review, EIA, EMA Singapore, and
   Energy Commission Malaysia). Where exact 2025 values are
   not yet final, the latest available year is used and
   labelled clearly. Numbers are rounded; do not treat as
   precise.
   ============================================ */

/* The five Energy subtopics shown as overview pill-cards */
var ENERGY_TOPICS = [
  {
    id: 'power-grid',
    label: 'Power generation & grid supply',
    tab: 'world',
    short: 'Sourcing and delivering electricity at the scale needed for AI campuses.',
    long: 'A 1 GW AI campus is industrial-scale load. The country needs both generation and a grid able to deliver it where it is wanted, when it is wanted, without dropping frequency or overheating transformers.'
  },
  {
    id: 'economics',
    label: 'Electricity economics for AI',
    tab: 'compute',
    short: 'Cost structures, contracts and pricing that decide the price-per-token.',
    long: 'Training and inference convert kilowatt-hours into tokens. A 100 MW data centre running flat-out for a year burns roughly 0.9 TWh — the price you pay for that electricity flows through to every API call.'
  },
  {
    id: 'conversion',
    label: 'Energy conversion efficiency',
    tab: 'compute',
    short: 'How much of the electricity you buy actually reaches the GPUs.',
    long: 'PUE captures cooling and overhead losses. Total facility power = IT load × PUE. A PUE of 1.5 means every 1 kWh of compute costs 1.5 kWh of grid power; modern liquid-cooled AI campuses target 1.1–1.2.'
  },
  {
    id: 'constraints',
    label: 'Hard power constraints on scaling',
    tab: 'constraints',
    short: 'Why "no GPU shortage" is not the same as "no scale-up problem".',
    long: 'Generation, transmission, transformers, substations, water, permitting, time-to-power. Any one of these can stop a project for years. Available megawatts now are often more valuable than cheap megawatts later.'
  },
  {
    id: 'renewables',
    label: 'Renewable integration for compute',
    tab: 'compute',
    short: 'Cheap clean electrons are not the same as 24/7 reliable power.',
    long: 'Solar and wind are cheap and scalable but variable. AI clusters need 24/7. Hourly-matched clean power, batteries, long-duration storage, demand response and firm sources (nuclear, hydro, geothermal, gas) all matter.'
  }
];

/* Beginner-friendly mental-model glossary used in the Basics tab */
var ENERGY_GLOSSARY = [
  {
    id: 'energy-vs-power',
    h: 'Energy vs power',
    body: 'Power is the rate of energy use, measured in watts (W), kilowatts (kW), megawatts (MW) or gigawatts (GW). Energy is the total used over time, measured in kWh, MWh, TWh.',
    example: 'A 1 GW data centre running 24/7 for one year would use about 8.76 TWh — before utilisation, redundancy and cooling losses are accounted for.'
  },
  {
    id: 'where-electricity-comes-from',
    h: 'Where electricity comes from',
    body: 'Coal, gas, nuclear, hydro, wind, solar, geothermal, biomass and storage. Power is not "created"; energy is converted from chemical, kinetic, nuclear, solar, gravitational or thermal sources into electricity.',
    example: 'A coal plant burns chemical energy into heat → steam → turbine → generator. A solar panel converts photon energy directly into DC electricity.'
  },
  {
    id: 'grid-chain',
    h: 'The grid chain',
    body: 'Generator → step-up transformer → high-voltage transmission lines → substations → step-down transformers → distribution lines → consumer. Most of the engineering is in keeping this chain in sync at 50 or 60 Hz.',
    example: 'A data centre never really plugs into a power plant; it plugs into a substation that draws from a network of plants.'
  },
  {
    id: 'voltage-current',
    h: 'Why high voltage matters',
    body: 'For a given power, higher voltage means lower current. Resistive losses on a wire scale with current squared (I²R), so transmission lines run at hundreds of kV to keep losses small over long distances.',
    example: 'A 1 GW link at 800 kV carries ~1,250 amps. The same 1 GW at distribution voltage would melt the wire.'
  },
  {
    id: 'capacity-vs-generation',
    h: 'Capacity vs generation',
    body: 'Capacity is what a plant can produce in a moment, measured in GW. Generation is what it actually produced over a period, measured in TWh. The ratio is the capacity factor.',
    example: 'Solar has very high installed capacity globally but a capacity factor of ~15–25% (sun isn\'t always up). Nuclear typically runs above 80%.'
  },
  {
    id: 'dispatchable-variable',
    h: 'Dispatchable vs variable',
    body: 'Dispatchable sources can be turned up or down on demand: gas, coal, nuclear (slowly), hydro, batteries (for hours). Variable sources (solar, wind) depend on weather.',
    example: 'You can\'t schedule a cloudless afternoon. You can schedule a hydro dam release.'
  },
  {
    id: 'reliability-engineering',
    h: 'Reliability engineering',
    body: 'Frequency, inertia, spinning reserves, black-start capability, fault ride-through, reactive power, transmission congestion. The grid keeps generation and demand balanced second-by-second; small mismatches cause frequency drift.',
    example: 'A big synchronous machine (turbine spinning) gives the grid inertia. A solar farm doesn\'t — which is why grid-forming inverters and synchronous condensers are increasingly important.'
  },
  {
    id: 'inverter-dc-ac',
    h: 'Inverters, DC and AC',
    body: 'Solar panels and batteries output DC. The grid is AC. Inverters convert DC to AC and lock the output to the grid frequency. Grid-following inverters need a stable grid frequency to lock onto. Grid-forming inverters can help create and support that frequency.',
    example: 'A solar farm with grid-following inverters cannot start a dead grid. A battery park with grid-forming inverters can begin the black-start sequence.'
  }
];

/* Global snapshot for the World dashboard */
var ENERGY_GLOBAL = {
  asOf: 'latest available — 2024 actuals reported in 2025–early 2026',
  totalGenerationTWh: 30856,
  totalGenerationNote: 'Ember Global Electricity Review 2025 reports 30,856 TWh of generation in 2024.',
  renewableShare: 32,
  fossilShare: 60,
  cleanShare: 41,
  cleanShareNote: 'Renewables + nuclear ≈ 41% of global electricity (Ember 2025).',
  /* Generation mix by source — share of total electricity, 2024 */
  mix: [
    { id: 'coal',    label: 'Coal',         share: 34.4, color: '#5A4633', note: 'Still the single largest source globally; share is declining slowly but absolute generation is roughly flat.' },
    { id: 'gas',     label: 'Gas',          share: 21.7, color: '#A87E58', note: 'Dominant in the US, Middle East, Singapore.' },
    { id: 'hydro',   label: 'Hydro',        share: 14.3, color: '#3A7BA8', note: 'Largest single clean source. Concentrated in China, Brazil, Canada, Norway.' },
    { id: 'nuclear', label: 'Nuclear',      share:  9.0, color: '#9C7AC9', note: 'Roughly flat globally; growing in China and reviving in the US, Korea, France, UK.' },
    { id: 'wind',    label: 'Wind',         share:  8.1, color: '#6CA9C5', note: 'Mostly onshore; offshore is a smaller but growing share.' },
    { id: 'solar',   label: 'Solar',        share:  6.9, color: '#F0B060', note: 'Fastest-growing source. Generation rose ~29% in 2024 (Ember 2025).' },
    { id: 'other',   label: 'Bio + geo + other', share: 2.8, color: '#7A8A6A', note: 'Bioenergy, geothermal, marine, oil-fired and a small bucket of "other".' },
    { id: 'oil',     label: 'Oil',          share:  2.8, color: '#3F3F47', note: 'Mostly islands and remote grids; small and shrinking.' }
  ],
  growth: [
    { label: 'Solar generation, 2024 vs 2023', value: '+29%', src: 'Ember 2025' },
    { label: 'Wind generation, 2024 vs 2023',  value: '+8%',  src: 'Ember 2025' },
    { label: 'Battery storage capacity, 2024', value: '~+50% YoY', src: 'IEA Renewables 2024' },
    { label: 'Coal generation, 2024 vs 2023',  value: '~+1%', src: 'Ember 2025' },
    { label: 'Global electricity demand, 2024 vs 2023', value: '+4%', src: 'IEA Global Energy Review 2025' }
  ],
  dataCentres: {
    nowTWh: 415,
    nowYear: 2024,
    nowShare: 1.5,
    projectedTWh2030: 945,
    projectedShare2030: 3,
    note: 'IEA Energy and AI 2025 estimates global data-centre electricity use at ~415 TWh in 2024 (~1.5% of global electricity), projected to roughly double to ~945 TWh by 2030. AI workloads are the main growth driver.',
    localPunchline: 'Globally small; locally enormous. In Ireland, data centres already consume more than 20% of national electricity. In Northern Virginia they have made the regional grid one of the most constrained in the United States.'
  },
  punchlines: [
    'Global electricity demand is now around 30,000+ TWh per year and rising at roughly 4% annually.',
    'Renewables are about one-third of generation; renewables + nuclear ≈ 41%.',
    'Coal remains the single largest source globally — driven by China, India and parts of Southeast Asia.',
    'Solar is the fastest-growing source on every continent.',
    'Data centres are a small share of global electricity but a huge share of demand growth in specific grid regions.'
  ]
};

/* Country snapshot rows used in the Countries tab table.
   gen: annual electricity generation, TWh, latest available
   peakGW: peak demand if reliably reported
   mix: percentage of generation by major source (rounded)
   dc: short qualitative tag for data-centre relevance
   read: short read on AI power-readiness
   bottleneck: the main thing that limits scale-up */
var ENERGY_COUNTRIES = [
  {
    id: 'cn', name: 'China', region: 'Asia',
    gen: 10000, year: 2024, peakGW: 1450,
    mix: { coal: 58, gas: 3, nuclear: 5, hydro: 13, wind: 9, solar: 8, other: 4 },
    dc: 'High and rising',
    read: 'Largest electricity system in the world. Massive solar, wind and ultra-high-voltage transmission build-out. AI campuses can be sited near new clean generation.',
    bottleneck: 'Coal still dominant; balancing renewables across regions is the engineering challenge.'
  },
  {
    id: 'us', name: 'United States', region: 'North America',
    gen: 4300, year: 2024, peakGW: 760,
    mix: { coal: 16, gas: 43, nuclear: 18, hydro: 6, wind: 10, solar: 6, other: 1 },
    dc: 'Hyperscaler hub',
    read: 'World\'s largest data-centre market. Gas-heavy mix, large nuclear fleet, fast-growing solar + storage. Hyperscalers dominate new connection requests.',
    bottleneck: 'Grid-interconnection queues, transformer lead times, and local-permitting fights — especially in PJM, ERCOT and Dominion.'
  },
  {
    id: 'eu', name: 'European Union', region: 'Europe',
    gen: 2750, year: 2024, peakGW: 410,
    mix: { coal: 13, gas: 14, nuclear: 24, hydro: 12, wind: 19, solar: 11, other: 7 },
    dc: 'Concentrated in FLAP-D',
    read: 'High clean share (renewables + nuclear ~66%). Strong climate policy. Frankfurt-London-Amsterdam-Paris-Dublin (FLAP-D) is the main DC corridor.',
    bottleneck: 'Electricity prices, permitting timelines and local moratoria (e.g. Amsterdam, Frankfurt, Dublin) on new data centres.'
  },
  {
    id: 'in', name: 'India', region: 'Asia',
    gen: 1950, year: 2024, peakGW: 250,
    mix: { coal: 74, gas: 3, nuclear: 3, hydro: 8, wind: 4, solar: 6, other: 2 },
    dc: 'Rapidly growing',
    read: 'Demand growing the fastest of any major economy. Massive solar build-out and ambitious capacity targets.',
    bottleneck: 'Coal dependence, grid reliability, transmission congestion and rising cooling demand in hot states.'
  },
  {
    id: 'ru', name: 'Russia', region: 'Europe / Asia',
    gen: 1180, year: 2023, peakGW: 165,
    mix: { coal: 16, gas: 47, nuclear: 19, hydro: 17, wind: 0, solar: 0, other: 1 },
    dc: 'Limited foreign DC presence',
    read: 'Large gas, hydro and nuclear base. Cheap domestic electricity but limited foreign hyperscaler presence due to sanctions and geopolitics.',
    bottleneck: 'Geopolitical and sanctions risk dominates any AI infrastructure conversation.'
  },
  {
    id: 'jp', name: 'Japan', region: 'Asia',
    gen: 1000, year: 2023, peakGW: 158,
    mix: { coal: 30, gas: 33, nuclear: 9, hydro: 8, wind: 1, solar: 11, other: 8 },
    dc: 'Tokyo + Osaka hubs',
    read: 'Tokyo and Osaka are major DC hubs. Nuclear restart programme is gradual; solar growing strongly.',
    bottleneck: 'Limited land, high electricity prices, and slow nuclear restarts after Fukushima.'
  },
  {
    id: 'kr', name: 'South Korea', region: 'Asia',
    gen: 620, year: 2024, peakGW: 100,
    mix: { coal: 32, gas: 28, nuclear: 31, hydro: 1, wind: 1, solar: 5, other: 2 },
    dc: 'Growing Seoul cluster',
    read: 'Strong nuclear fleet, advanced semiconductor and battery industry. Korean hyperscalers and chipmakers anchor demand.',
    bottleneck: 'High population density, transmission constraints between south coast generation and Seoul demand.'
  },
  {
    id: 'ca', name: 'Canada', region: 'North America',
    gen: 640, year: 2023, peakGW: 110,
    mix: { coal: 4, gas: 11, nuclear: 14, hydro: 60, wind: 6, solar: 1, other: 4 },
    dc: 'Quebec, Alberta, Ontario',
    read: 'Hydro-dominated grid (Quebec, BC, Manitoba) gives some of the cleanest electricity in the OECD. Cold climate helps cooling.',
    bottleneck: 'Long transmission distances; some provinces (Alberta) are still gas-heavy.'
  },
  {
    id: 'br', name: 'Brazil', region: 'Latin America',
    gen: 720, year: 2024, peakGW: 110,
    mix: { coal: 2, gas: 6, nuclear: 2, hydro: 58, wind: 14, solar: 11, other: 7 },
    dc: 'São Paulo cluster',
    read: 'Hydro-dominated grid plus rapid solar and wind growth. Among the cleanest large grids in the world.',
    bottleneck: 'Drought-driven hydro variability; transmission from northeast wind/solar to southeast load.'
  },
  {
    id: 'au', name: 'Australia', region: 'Oceania',
    gen: 280, year: 2024, peakGW: 35,
    mix: { coal: 44, gas: 16, nuclear: 0, hydro: 5, wind: 13, solar: 19, other: 3 },
    dc: 'Sydney + Melbourne',
    read: 'Highest residential rooftop-solar penetration in the world. Coal still anchors baseload; planned exits being staggered.',
    bottleneck: 'Coal-fleet retirements, transmission build-out (Rewiring the Nation) and east-coast gas tightness.'
  },
  {
    id: 'sg', name: 'Singapore', region: 'Asia',
    gen: 60, year: 2024, peakGW: 7.7,
    mix: { coal: 1, gas: 94, nuclear: 0, hydro: 0, wind: 0, solar: 4, other: 1 },
    dc: 'Major regional hub',
    read: 'Highly reliable grid, strong fibre, talent and finance. ~60 TWh generation in 2024 (EMA Singapore Energy Statistics 2025).',
    bottleneck: 'Land and power-constrained. New DC capacity is approved through a controlled pipeline; importing low-carbon power via interconnectors is strategic.'
  },
  {
    id: 'my', name: 'Malaysia', region: 'Asia',
    gen: 190, year: 2024, peakGW: 21,
    mix: { coal: 45, gas: 36, nuclear: 0, hydro: 14, wind: 0, solar: 4, other: 1 },
    dc: 'Johor / Iskandar boom',
    read: 'Johor / Iskandar is absorbing Singapore-spillover DC demand on cheaper land and power. National solar capacity is rising under the LSS programmes.',
    bottleneck: 'Coal and gas still central; grid reinforcement and substations around Johor are the hard part of meeting committed DC load.'
  },
  {
    id: 'id', name: 'Indonesia', region: 'Asia',
    gen: 340, year: 2024, peakGW: 50,
    mix: { coal: 62, gas: 19, nuclear: 0, hydro: 7, wind: 0, solar: 1, other: 11 },
    dc: 'Jakarta cluster',
    read: 'Large coal fleet plus rising captive industrial generation. Geothermal is a strategic clean firm resource.',
    bottleneck: 'Coal dependence, complicated transmission across thousands of islands, captive-power policy questions.'
  },
  {
    id: 'vn', name: 'Vietnam', region: 'Asia',
    gen: 310, year: 2024, peakGW: 49,
    mix: { coal: 45, gas: 8, nuclear: 0, hydro: 26, wind: 4, solar: 14, other: 3 },
    dc: 'Growing manufacturing-led DC',
    read: 'Rapid solar boom in 2019–2021; demand growth among the fastest in Asia.',
    bottleneck: 'North-south transmission constraints; recent peak-summer load-shedding in the north.'
  },
  {
    id: 'sa', name: 'Saudi Arabia', region: 'Middle East',
    gen: 410, year: 2024, peakGW: 70,
    mix: { coal: 0, gas: 50, nuclear: 0, hydro: 0, wind: 1, solar: 4, other: 45 },
    dc: 'Strategic Vision 2030 push',
    read: 'Cheap domestic gas and oil; aggressive renewables targets under Vision 2030; building a sovereign AI/cloud stack.',
    bottleneck: 'Cooling load is enormous; converting from oil-fired generation to gas + renewables is mid-stream.'
  },
  {
    id: 'ae', name: 'UAE', region: 'Middle East',
    gen: 165, year: 2024, peakGW: 32,
    mix: { coal: 1, gas: 76, nuclear: 16, hydro: 0, wind: 0, solar: 6, other: 1 },
    dc: 'Strong sovereign-cloud push',
    read: 'Barakah nuclear plant gives a large clean firm base. Solar farms (Al Dhafra, Mohammed bin Rashid) among the cheapest in the world.',
    bottleneck: 'Cooling load and water; gas still dominant overall.'
  },
  {
    id: 'gb', name: 'United Kingdom', region: 'Europe',
    gen: 285, year: 2024, peakGW: 47,
    mix: { coal: 1, gas: 26, nuclear: 13, hydro: 2, wind: 30, solar: 5, other: 23 },
    dc: 'London cluster',
    read: 'Coal almost gone (last plant closed 2024). Strong offshore wind. Grid is tight around the south-east where load and DC demand concentrate.',
    bottleneck: 'Connection queues stretched into the 2030s; transmission build between Scottish wind and English load.'
  },
  {
    id: 'fr', name: 'France', region: 'Europe',
    gen: 545, year: 2024, peakGW: 95,
    mix: { coal: 1, gas: 7, nuclear: 65, hydro: 12, wind: 9, solar: 5, other: 1 },
    dc: 'Paris cluster',
    read: 'Heavily nuclear, low-carbon by default, large net exporter to neighbours. Attractive for clean-power-sensitive workloads.',
    bottleneck: 'Permitting, ageing nuclear fleet maintenance windows, transmission to industrial sites.'
  },
  {
    id: 'de', name: 'Germany', region: 'Europe',
    gen: 520, year: 2024, peakGW: 80,
    mix: { coal: 24, gas: 14, nuclear: 0, hydro: 4, wind: 28, solar: 14, other: 16 },
    dc: 'Frankfurt cluster',
    read: 'Renewables now ~58% of generation. Nuclear fully phased out in 2023. Coal exit ongoing.',
    bottleneck: 'High retail electricity prices, north-to-south transmission ("SuedLink"), grid stability without inertia from coal/nuclear.'
  },
  {
    id: 'nl', name: 'Netherlands', region: 'Europe',
    gen: 125, year: 2024, peakGW: 19,
    mix: { coal: 8, gas: 30, nuclear: 3, hydro: 0, wind: 25, solar: 23, other: 11 },
    dc: 'Amsterdam (AMS-IX)',
    read: 'Major DC hub. Large solar and offshore-wind fleets. Amsterdam municipality has paused new DC permits in some zones.',
    bottleneck: 'Grid congestion is now the official reason hyperscalers cannot get new connections in many regions ("net-congestie").'
  },
  {
    id: 'ie', name: 'Ireland', region: 'Europe',
    gen: 33, year: 2024, peakGW: 6.5,
    mix: { coal: 4, gas: 46, nuclear: 0, hydro: 2, wind: 32, solar: 4, other: 12 },
    dc: 'Dublin — globally outsized',
    read: 'Data centres consumed >20% of Ireland\'s electricity in 2023 (CSO Ireland), the highest national share in the world.',
    bottleneck: 'EirGrid moratoria on new Dublin DC connections; reliance on gas backup; tight winter peaks.'
  }
];

/* Deeper read for the priority countries the user called out */
var ENERGY_COUNTRY_DEEP = [
  {
    id: 'cn-deep', name: 'China',
    headline: 'Largest electricity system on the planet',
    bullets: [
      'Annual generation around 10,000 TWh — about a third of global electricity (IEA + Ember 2024 data).',
      'Coal still the single largest source by share, but its share is declining as solar and wind explode.',
      'World-leading ultra-high-voltage transmission (1,100 kV DC links) move power from western generation to eastern load.',
      'Dominant clean-tech manufacturing base — solar panels, wind turbines, batteries, electrolysers.'
    ],
    aiTake: 'Huge power base, huge manufacturing base, huge appetite for AI compute. The strategic question is how fast coal share falls and how the grid balances variable renewables across thousands of kilometres.'
  },
  {
    id: 'us-deep', name: 'United States',
    headline: 'Hyperscaler-led demand growth meets a constrained grid',
    bullets: [
      'Annual generation around 4,300 TWh; gas is dominant (~43%), nuclear is large and reliable (~18%).',
      'Solar and battery storage are the fastest-growing sources of new capacity.',
      'Data-centre electricity use is projected to roughly double by 2030 (DOE / LBNL 2024 update).',
      'PJM, ERCOT and Dominion are the three regions where AI campuses are most concentrated.'
    ],
    aiTake: 'The bottleneck is the grid, not the generators. Connection queues, transformer lead times, transmission upgrades and local permitting now decide where compute gets built. Natural gas and nuclear are both seeing a quiet revival to firm up new AI load.'
  },
  {
    id: 'eu-deep', name: 'European Union',
    headline: 'Clean power advantage, cost and permitting drag',
    bullets: [
      'Renewables + nuclear ≈ 66% of generation; among the cleanest large grids in the world.',
      'Coal share roughly halved over the past decade.',
      'Strong climate policy and CBAM-style carbon pricing create both a tailwind and a cost.',
      'FLAP-D — Frankfurt, London, Amsterdam, Paris, Dublin — is the main DC corridor.'
    ],
    aiTake: 'Clean electricity is genuinely available, but retail prices and permitting timelines are the constraint. Several core DC cities (Amsterdam, Frankfurt, Dublin) have moratoria or de-facto pauses on new sites.'
  },
  {
    id: 'in-deep', name: 'India',
    headline: 'Fastest demand growth, biggest coal dependence',
    bullets: [
      'Annual generation around 1,950 TWh and growing rapidly.',
      'Coal still produces roughly three-quarters of electricity.',
      'Solar capacity has expanded enormously; ambitious 500 GW non-fossil target by 2030.',
      'Industrial cooling demand is rising fast as the economy grows and temperatures climb.'
    ],
    aiTake: 'Long-term AI infrastructure opportunity is large, but power reliability, cooling water and transmission still gate hyperscale build-out.'
  },
  {
    id: 'sg-deep', name: 'Singapore',
    headline: 'Talent + capital strong, physically constrained',
    bullets: [
      'Around 60 TWh generation in 2024 — small but extremely reliable (EMA Singapore Energy Statistics).',
      'Natural gas dominates the fuel mix (~94%); solar share is small because land is small.',
      'New DC capacity is allocated through a controlled pipeline (DC-CFA) rather than being open-ended.',
      'Strategic moves include cross-border interconnectors and renewable imports from neighbours.'
    ],
    aiTake: 'Singapore is the regional hub for finance, talent and submarine cables, but it cannot physically host all the AI compute its neighbourhood wants. The natural pattern is Singapore-led demand spilling into Johor and the wider region.'
  },
  {
    id: 'my-deep', name: 'Malaysia',
    headline: 'Beneficiary of regional spillover — if it solves the grid',
    bullets: [
      'Annual generation around 190 TWh; coal and gas roughly 80% combined (Energy Commission Malaysia statistics).',
      'Solar potential is meaningful and rising under the LSS5 / CGPP programmes.',
      'Johor / Iskandar is absorbing Singapore-spillover DC demand on cheaper land and power.',
      'Reuters and TNB updates track ongoing grid-reinforcement work around Johor and Klang Valley.'
    ],
    aiTake: 'The advantage is land + cost + Singapore proximity. The bottleneck is power: substation capacity, grid reinforcement, and the slow process of reducing coal dependence while DC demand surges.'
  }
];

/* Hard-constraints checklist for the Constraints tab */
var ENERGY_CONSTRAINTS = [
  { h: 'Generation capacity',         d: 'Enough megawatts physically available in the right region — not just nationally on paper.' },
  { h: 'Transmission capacity',       d: 'High-voltage lines from generators to the campus; transmission tends to lag generation by years.' },
  { h: 'Grid interconnection approval', d: 'Approved spot in the connection queue; in PJM, ERCOT and parts of the EU this is the longest pole.' },
  { h: 'Transformers + substations',  d: 'Large step-down transformers have global lead times of 18–36+ months.' },
  { h: 'Frequency + voltage support', d: 'Stable 50 / 60 Hz, reactive power and ride-through; new sites can\'t destabilise the local network.' },
  { h: 'Cooling solution',            d: 'Air, water, liquid-to-chip or hybrid. Water availability and discharge permits gate many sites.' },
  { h: 'Land and permits',            d: 'Suitable parcel, zoning, environmental impact assessment, local community sign-off.' },
  { h: 'Backup + resilience',         d: 'Diesel or gas backup, batteries, redundancy zoning (N+1, 2N), black-start strategy.' },
  { h: 'Long-term energy contract',   d: 'PPA or tariff structure that locks in a price and a delivery profile for 10–20+ years.' },
  { h: 'Political + regulatory acceptance', d: 'No moratorium, no incoming legislation that could strand the asset, supportive utility relationship.' },
  { h: 'Carbon + emissions profile',  d: 'Increasingly investor- and customer-graded; matters for sovereign-AI and hyperscaler reporting.' },
  { h: 'Time-to-power',               d: 'Total months from green-field to first electron. Under 24–36 months is now a competitive moat.' }
];

/* Strategic takeaways */
var ENERGY_TAKEAWAYS = [
  'AI scaling is no longer just a chip race. Energy, transmission and time-to-power are now first-order variables.',
  'Energy-rich regions with strong grids and fast permitting will become AI infrastructure winners.',
  'Singapore is talent- and regional-hub strong, but physically constrained by land and power.',
  'Malaysia can absorb meaningful Singapore-spillover demand if it reinforces its grid faster than it adds DC load.',
  'China has scale and manufacturing depth; the strategic risk is coal share and grid balancing.',
  'The US has hyperscaler-led demand and abundant gas + nuclear, but the grid and queues are the binding constraint.',
  'Europe has a clean-power advantage and retail-price headwind; the corridor cities are the choke point.',
  'Future AI infrastructure is decided by chips + power + land + cooling + regulation — in that order, increasingly.'
];

/* Source notes for the bottom of the Energy section */
var ENERGY_SOURCES = [
  { label: 'IEA — Global Energy Review 2026 (preliminary)', url: 'https://www.iea.org/reports/global-energy-review-2026' },
  { label: 'IEA — Energy and AI (2025)',                    url: 'https://www.iea.org/reports/energy-and-ai' },
  { label: 'Ember — Global Electricity Review 2025',        url: 'https://ember-energy.org/latest-insights/global-electricity-review-2025/' },
  { label: 'Our World in Data — Electricity dataset',       url: 'https://ourworldindata.org/electricity-mix' },
  { label: 'Energy Institute — Statistical Review of World Energy 2025', url: 'https://www.energyinst.org/statistical-review' },
  { label: 'EIA — U.S. Electric Power Monthly + Annual',    url: 'https://www.eia.gov/electricity/' },
  { label: 'EMA Singapore — Energy Statistics 2025',        url: 'https://www.ema.gov.sg/resources/singapore-energy-statistics' },
  { label: 'Energy Commission Malaysia — Statistics portal', url: 'https://meih.st.gov.my/' },
  { label: 'Eurostat — Electricity production and consumption', url: 'https://ec.europa.eu/eurostat/web/energy' },
  { label: 'CSO Ireland — Data Centres Metered Electricity Consumption', url: 'https://www.cso.ie/en/statistics/energy/datacentresmeteredelectricityconsumption/' },
  { label: 'DOE / LBNL — 2024 United States Data Center Energy Usage Report', url: 'https://www.energy.gov/eere/femp/articles/lbnl-report-finds-us-data-centers-consumed-176-twh-2023-roughly-44-total-us' },
  { label: 'Reuters / TNB — Malaysia grid reinforcement around Johor (ongoing reporting)', url: 'https://www.reuters.com/business/energy/' }
];
