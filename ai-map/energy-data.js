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
    readiness: 'scale',
    dc: 'High and rising',
    read: 'Largest electricity system in the world. Massive solar, wind and ultra-high-voltage transmission build-out. AI campuses can be sited near new clean generation.',
    bottleneck: 'Coal still dominant; balancing renewables across regions is the engineering challenge.'
  },
  {
    id: 'us', name: 'United States', region: 'North America',
    gen: 4300, year: 2024, peakGW: 760,
    mix: { coal: 16, gas: 43, nuclear: 18, hydro: 6, wind: 10, solar: 6, other: 1 },
    readiness: 'bottleneck',
    dc: 'Hyperscaler hub',
    read: 'World\'s largest data-centre market. Gas-heavy mix, large nuclear fleet, fast-growing solar + storage. Hyperscalers dominate new connection requests.',
    bottleneck: 'Grid-interconnection queues, transformer lead times, and local-permitting fights — especially in PJM, ERCOT and Dominion.'
  },
  {
    id: 'eu', name: 'European Union', region: 'Europe',
    gen: 2750, year: 2024, peakGW: 410,
    mix: { coal: 13, gas: 14, nuclear: 24, hydro: 12, wind: 19, solar: 11, other: 7 },
    readiness: 'clean',
    dc: 'Concentrated in FLAP-D',
    read: 'High clean share (renewables + nuclear ~66%). Strong climate policy. Frankfurt-London-Amsterdam-Paris-Dublin (FLAP-D) is the main DC corridor.',
    bottleneck: 'Electricity prices, permitting timelines and local moratoria (e.g. Amsterdam, Frankfurt, Dublin) on new data centres.'
  },
  {
    id: 'in', name: 'India', region: 'Asia',
    gen: 1950, year: 2024, peakGW: 250,
    mix: { coal: 74, gas: 3, nuclear: 3, hydro: 8, wind: 4, solar: 6, other: 2 },
    readiness: 'fast',
    dc: 'Rapidly growing',
    read: 'Demand growing the fastest of any major economy. Massive solar build-out and ambitious capacity targets.',
    bottleneck: 'Coal dependence, grid reliability, transmission congestion and rising cooling demand in hot states.'
  },
  {
    id: 'ru', name: 'Russia', region: 'Europe / Asia',
    gen: 1180, year: 2023, peakGW: 165,
    mix: { coal: 16, gas: 47, nuclear: 19, hydro: 17, wind: 0, solar: 0, other: 1 },
    readiness: 'isolated',
    dc: 'Limited foreign DC presence',
    read: 'Large gas, hydro and nuclear base. Cheap domestic electricity but limited foreign hyperscaler presence due to sanctions and geopolitics.',
    bottleneck: 'Geopolitical and sanctions risk dominates any AI infrastructure conversation.'
  },
  {
    id: 'jp', name: 'Japan', region: 'Asia',
    gen: 1000, year: 2023, peakGW: 158,
    mix: { coal: 30, gas: 33, nuclear: 9, hydro: 8, wind: 1, solar: 11, other: 8 },
    readiness: 'clean',
    dc: 'Tokyo + Osaka hubs',
    read: 'Tokyo and Osaka are major DC hubs. Nuclear restart programme is gradual; solar growing strongly.',
    bottleneck: 'Limited land, high electricity prices, and slow nuclear restarts after Fukushima.'
  },
  {
    id: 'kr', name: 'South Korea', region: 'Asia',
    gen: 620, year: 2024, peakGW: 100,
    mix: { coal: 32, gas: 28, nuclear: 31, hydro: 1, wind: 1, solar: 5, other: 2 },
    readiness: 'firm',
    dc: 'Growing Seoul cluster',
    read: 'Strong nuclear fleet, advanced semiconductor and battery industry. Korean hyperscalers and chipmakers anchor demand.',
    bottleneck: 'High population density, transmission constraints between south coast generation and Seoul demand.'
  },
  {
    id: 'ca', name: 'Canada', region: 'North America',
    gen: 640, year: 2023, peakGW: 110,
    mix: { coal: 4, gas: 11, nuclear: 14, hydro: 60, wind: 6, solar: 1, other: 4 },
    readiness: 'firm',
    dc: 'Quebec, Alberta, Ontario',
    read: 'Hydro-dominated grid (Quebec, BC, Manitoba) gives some of the cleanest electricity in the OECD. Cold climate helps cooling.',
    bottleneck: 'Long transmission distances; some provinces (Alberta) are still gas-heavy.'
  },
  {
    id: 'br', name: 'Brazil', region: 'Latin America',
    gen: 720, year: 2024, peakGW: 110,
    mix: { coal: 2, gas: 6, nuclear: 2, hydro: 58, wind: 14, solar: 11, other: 7 },
    readiness: 'firm',
    dc: 'São Paulo cluster',
    read: 'Hydro-dominated grid plus rapid solar and wind growth. Among the cleanest large grids in the world.',
    bottleneck: 'Drought-driven hydro variability; transmission from northeast wind/solar to southeast load.'
  },
  {
    id: 'au', name: 'Australia', region: 'Oceania',
    gen: 280, year: 2024, peakGW: 35,
    mix: { coal: 44, gas: 16, nuclear: 0, hydro: 5, wind: 13, solar: 19, other: 3 },
    readiness: 'dirty',
    dc: 'Sydney + Melbourne',
    read: 'Highest residential rooftop-solar penetration in the world. Coal still anchors baseload; planned exits being staggered.',
    bottleneck: 'Coal-fleet retirements, transmission build-out (Rewiring the Nation) and east-coast gas tightness.'
  },
  {
    id: 'sg', name: 'Singapore', region: 'Asia',
    gen: 60, year: 2024, peakGW: 7.7,
    mix: { coal: 1, gas: 94, nuclear: 0, hydro: 0, wind: 0, solar: 4, other: 1 },
    readiness: 'hub',
    dc: 'Major regional hub',
    read: 'Highly reliable grid, strong fibre, talent and finance. ~60 TWh generation in 2024 (EMA Singapore Energy Statistics 2025).',
    bottleneck: 'Land and power-constrained. New DC capacity is approved through a controlled pipeline; importing low-carbon power via interconnectors is strategic.'
  },
  {
    id: 'my', name: 'Malaysia', region: 'Asia',
    gen: 190, year: 2024, peakGW: 21,
    mix: { coal: 45, gas: 36, nuclear: 0, hydro: 14, wind: 0, solar: 4, other: 1 },
    readiness: 'spillover',
    dc: 'Johor / Iskandar boom',
    read: 'Johor / Iskandar is absorbing Singapore-spillover DC demand on cheaper land and power. National solar capacity is rising under the LSS programmes.',
    bottleneck: 'Coal and gas still central; grid reinforcement and substations around Johor are the hard part of meeting committed DC load.'
  },
  {
    id: 'id', name: 'Indonesia', region: 'Asia',
    gen: 340, year: 2024, peakGW: 50,
    mix: { coal: 62, gas: 19, nuclear: 0, hydro: 7, wind: 0, solar: 1, other: 11 },
    readiness: 'dirty',
    dc: 'Jakarta cluster',
    read: 'Large coal fleet plus rising captive industrial generation. Geothermal is a strategic clean firm resource.',
    bottleneck: 'Coal dependence, complicated transmission across thousands of islands, captive-power policy questions.'
  },
  {
    id: 'vn', name: 'Vietnam', region: 'Asia',
    gen: 310, year: 2024, peakGW: 49,
    mix: { coal: 45, gas: 8, nuclear: 0, hydro: 26, wind: 4, solar: 14, other: 3 },
    readiness: 'fast',
    dc: 'Growing manufacturing-led DC',
    read: 'Rapid solar boom in 2019–2021; demand growth among the fastest in Asia.',
    bottleneck: 'North-south transmission constraints; recent peak-summer load-shedding in the north.'
  },
  {
    id: 'sa', name: 'Saudi Arabia', region: 'Middle East',
    gen: 410, year: 2024, peakGW: 70,
    mix: { coal: 0, gas: 50, nuclear: 0, hydro: 0, wind: 1, solar: 4, other: 45 },
    readiness: 'sovereign',
    dc: 'Strategic Vision 2030 push',
    read: 'Cheap domestic gas and oil; aggressive renewables targets under Vision 2030; building a sovereign AI/cloud stack.',
    bottleneck: 'Cooling load is enormous; converting from oil-fired generation to gas + renewables is mid-stream.'
  },
  {
    id: 'ae', name: 'UAE', region: 'Middle East',
    gen: 165, year: 2024, peakGW: 32,
    mix: { coal: 1, gas: 76, nuclear: 16, hydro: 0, wind: 0, solar: 6, other: 1 },
    readiness: 'sovereign',
    dc: 'Strong sovereign-cloud push',
    read: 'Barakah nuclear plant gives a large clean firm base. Solar farms (Al Dhafra, Mohammed bin Rashid) among the cheapest in the world.',
    bottleneck: 'Cooling load and water; gas still dominant overall.'
  },
  {
    id: 'gb', name: 'United Kingdom', region: 'Europe',
    gen: 285, year: 2024, peakGW: 47,
    mix: { coal: 1, gas: 26, nuclear: 13, hydro: 2, wind: 30, solar: 5, other: 23 },
    readiness: 'clean',
    dc: 'London cluster',
    read: 'Coal almost gone (last plant closed 2024). Strong offshore wind. Grid is tight around the south-east where load and DC demand concentrate.',
    bottleneck: 'Connection queues stretched into the 2030s; transmission build between Scottish wind and English load.'
  },
  {
    id: 'fr', name: 'France', region: 'Europe',
    gen: 545, year: 2024, peakGW: 95,
    mix: { coal: 1, gas: 7, nuclear: 65, hydro: 12, wind: 9, solar: 5, other: 1 },
    readiness: 'firm',
    dc: 'Paris cluster',
    read: 'Heavily nuclear, low-carbon by default, large net exporter to neighbours. Attractive for clean-power-sensitive workloads.',
    bottleneck: 'Permitting, ageing nuclear fleet maintenance windows, transmission to industrial sites.'
  },
  {
    id: 'de', name: 'Germany', region: 'Europe',
    gen: 520, year: 2024, peakGW: 80,
    mix: { coal: 24, gas: 14, nuclear: 0, hydro: 4, wind: 28, solar: 14, other: 16 },
    readiness: 'clean',
    dc: 'Frankfurt cluster',
    read: 'Renewables now ~58% of generation. Nuclear fully phased out in 2023. Coal exit ongoing.',
    bottleneck: 'High retail electricity prices, north-to-south transmission ("SuedLink"), grid stability without inertia from coal/nuclear.'
  },
  {
    id: 'nl', name: 'Netherlands', region: 'Europe',
    gen: 125, year: 2024, peakGW: 19,
    mix: { coal: 8, gas: 30, nuclear: 3, hydro: 0, wind: 25, solar: 23, other: 11 },
    readiness: 'bottleneck',
    dc: 'Amsterdam (AMS-IX)',
    read: 'Major DC hub. Large solar and offshore-wind fleets. Amsterdam municipality has paused new DC permits in some zones.',
    bottleneck: 'Grid congestion is now the official reason hyperscalers cannot get new connections in many regions ("net-congestie").'
  },
  {
    id: 'ie', name: 'Ireland', region: 'Europe',
    gen: 33, year: 2024, peakGW: 6.5,
    mix: { coal: 4, gas: 46, nuclear: 0, hydro: 2, wind: 32, solar: 4, other: 12 },
    readiness: 'hub',
    dc: 'Dublin — globally outsized',
    read: 'Data centres consumed >20% of Ireland\'s electricity in 2023 (CSO Ireland), the highest national share in the world.',
    bottleneck: 'EirGrid moratoria on new Dublin DC connections; reliance on gas backup; tight winter peaks.'
  }
];

/* Deeper read for the priority countries.
   Each card answers four questions:
   strong   — what works
   weak     — what limits it
   matter   — why it matters for AI
   bottleneck — the single thing to fix first */
var ENERGY_COUNTRY_DEEP = [
  {
    id: 'cn-deep', name: 'China', readiness: 'scale',
    headline: 'Largest electricity system on the planet — coal still anchors it',
    strong: 'Around 10,000 TWh of annual generation (about a third of global). World-leading 1,100 kV ultra-high-voltage transmission moves western clean generation to eastern load. Dominant clean-tech manufacturing base — solar, wind, batteries, electrolysers.',
    weak: 'Coal is still the single largest source by share. Solar and wind growth is enormous in absolute terms but the system has to balance variable output across thousands of kilometres.',
    matter: 'Strategic implication for AI: a power base no rival can match in the medium term, paired with the manufacturing depth to build the chips, batteries, transformers and racks that AI campuses need.',
    bottleneck: 'How fast coal share falls and how the grid balances variable renewables across regions; political signal also matters for foreign hyperscalers.'
  },
  {
    id: 'us-deep', name: 'United States', readiness: 'bottleneck',
    headline: 'Hyperscaler-led demand growth meets a constrained grid',
    strong: '~4,300 TWh of annual generation. Gas dominant (~43%), nuclear large and reliable (~18%). Solar and battery storage are the fastest-growing new capacity. Largest data-centre market in the world.',
    weak: 'Connection queues, transformer lead times and local permitting now decide where compute actually gets built. PJM, ERCOT and Dominion are the three constrained regions absorbing the most AI load.',
    matter: 'Strategic implication for AI: hyperscaler concentration plus deep gas, nuclear and renewables means the resources exist; the question is whether the grid can deliver them on the AI timeline.',
    bottleneck: 'The grid, not the generators. Transmission upgrades, queue reform and transformer supply chains are the binding constraints; gas peakers and nuclear restarts are filling the firm-power gap.'
  },
  {
    id: 'eu-deep', name: 'European Union', readiness: 'clean',
    headline: 'Clean power advantage, cost and permitting drag',
    strong: 'Renewables + nuclear ≈ 66% of generation — among the cleanest large grids in the world. Strong climate policy. Coal share halved over the past decade. FLAP-D corridor (Frankfurt, London, Amsterdam, Paris, Dublin) anchors the main DC market.',
    weak: 'Retail electricity prices are high. Permitting can take years. Several core DC cities have moratoria or de-facto pauses on new sites (Amsterdam, Frankfurt, Dublin).',
    matter: 'Strategic implication for AI: the cleanest large grid available, but the most expensive and slowest to build on. Better suited to inference and clean-power-sensitive workloads than greenfield mega-campuses.',
    bottleneck: 'Cost + permitting + local grid headroom. Site availability, not generation, is the binding constraint in the corridor cities.'
  },
  {
    id: 'in-deep', name: 'India', readiness: 'fast',
    headline: 'Fastest demand growth in any major economy — biggest coal dependence',
    strong: '~1,950 TWh of generation and rising rapidly. Solar capacity has expanded enormously under ambitious 500 GW non-fossil target by 2030. Large young workforce, growing domestic cloud market.',
    weak: 'Coal still produces ~three-quarters of electricity. Grid reliability and transmission congestion vary widely by state. Cooling demand rising as temperatures climb.',
    matter: 'Strategic implication for AI: long-term opportunity is large; near-term hyperscale build-out is gated by reliability and water more than by cost.',
    bottleneck: 'Reliability and transmission, especially in the hot industrial states; coal exposure is a separate carbon-reporting risk for cleaner-grade workloads.'
  },
  {
    id: 'sg-deep', name: 'Singapore', readiness: 'hub',
    headline: 'Trust-rich, not power-rich — strategically essential anyway',
    strong: '~60 TWh of extremely reliable generation. Strong fibre, talent, finance and regulation. Hub of submarine cables and regional cloud presence. New DC capacity allocated through a controlled DC-CFA pipeline.',
    weak: 'Tiny land area; gas dominates the fuel mix (~94%); domestic renewables are limited. New DC capacity is rationed deliberately.',
    matter: 'Strategic implication for AI: Singapore is not power-rich, but it is trust-rich — stable, connected, enterprise-friendly and regionally strategic. That is exactly why Malaysia (especially Johor) becomes relevant as the spillover destination.',
    bottleneck: 'Land and electricity. Cross-border interconnectors and renewable imports are the long-term play; Johor is the practical short-term release valve.'
  },
  {
    id: 'my-deep', name: 'Malaysia', readiness: 'spillover',
    headline: 'Spillover candidate — if grid build-out keeps up with DC demand',
    strong: '~190 TWh generation; cheaper power and land than Singapore; rising solar capacity under LSS5 / CGPP programmes. Johor / Iskandar is the obvious geographic landing zone for Singapore-spillover demand.',
    weak: 'Coal + gas are still ~80% combined. Substation capacity around Johor and Klang Valley is being reinforced but DC demand has been booked faster than equipment lead times.',
    matter: 'Strategic implication for AI: a real opportunity to capture the regional overflow — but only if grid reinforcement, transformer supply and clean-power additions hit the same timeline as the campuses being announced.',
    bottleneck: 'Substation + transmission build around Johor; pace of reducing coal share without compromising reliability while DC load surges.'
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

/* ============================================
   ENERGY_INTEL_SUMMARY — top-of-section briefing
   ============================================
   Seven punchy truths an informed reader should be able to recall.
   ============================================ */
var ENERGY_INTEL_SUMMARY = [
  {
    h: 'AI scales on secured megawatts, not just GPUs.',
    d: 'Chips are the headline; power, transmission, transformers and time-to-power are the actual constraint.'
  },
  {
    h: 'China has unmatched electricity scale — but remains coal-heavy.',
    d: '~10,000 TWh/yr (Ember 2024). World-leading UHV transmission. Coal share is falling but still the single largest source.'
  },
  {
    h: 'The US has hyperscaler demand, gas, nuclear and land — and serious grid bottlenecks.',
    d: 'Connection queues, transformer lead times and local permitting now decide where AI campuses get built (PJM, ERCOT, Dominion).'
  },
  {
    h: 'Europe has cleaner power but higher cost and slower permitting.',
    d: 'Renewables + nuclear ≈ 66% of generation. Several core DC cities (Amsterdam, Frankfurt, Dublin) have moratoria or de-facto pauses.'
  },
  {
    h: 'Singapore is strategically important but power and land constrained.',
    d: '~60 TWh/yr generation (EMA 2024). New DC capacity allocated through a controlled pipeline; renewables imported via interconnectors.'
  },
  {
    h: 'Malaysia could absorb Singapore spillover — if the grid keeps up.',
    d: 'Johor / Iskandar is winning on land and price; the bottleneck is substations and a still-coal-heavy mix.'
  },
  {
    h: 'AI infrastructure now depends on chips + power + land + cooling + regulation.',
    d: 'Any single missing item can stall a project for years. Time-to-power under 24–36 months is a competitive moat.'
  }
];

/* ============================================
   ENERGY_FLOW — from power plant to token
   ============================================
   Eight stages a watt of grid electricity passes through before it
   becomes a token of model output.
   ============================================ */
var ENERGY_FLOW = [
  { id: 'source',    h: 'Energy source',     d: 'Coal, gas, nuclear, hydro, wind, solar, geothermal — chemical, kinetic, nuclear or solar energy waiting to be converted.' },
  { id: 'gen',       h: 'Generation',        d: 'Turbine + generator, or photovoltaic panel + DC. Output measured in MW.' },
  { id: 'trans',     h: 'Transmission',      d: 'Step-up to 100s of kV, run for tens to thousands of km on the high-voltage grid.' },
  { id: 'sub',       h: 'Substation',        d: 'Step-down to medium voltage; gateway for the campus connection. Often the longest-pole supply item.' },
  { id: 'dc',        h: 'Data centre',       d: 'Switchgear, UPS, batteries, backup gens. Total facility power = IT load × PUE.' },
  { id: 'cooling',   h: 'Cooling + UPS',     d: 'Chillers, dry coolers, liquid loops, water — the difference between PUE 1.1 and 1.7.' },
  { id: 'gpu',       h: 'GPU cluster',       d: 'Tens of thousands of accelerators, NVLink fabric, optical interconnects, HBM.' },
  { id: 'compute',   h: 'Train + serve',     d: 'Forward + backward passes; tokens per second; throughput limited by power, memory and network.' },
  { id: 'tokens',    h: 'Tokens',            d: 'The final unit you pay for. Every token has an electricity bill behind it.' }
];

/* ============================================
   ENERGY_READINESS — qualitative AI power-readiness labels
   ============================================ */
var ENERGY_READINESS = {
  scale:       { label: 'Scale advantage',                tone: 'good',    note: 'Massive electricity base, room to grow, strong industrial backbone.' },
  bottleneck:  { label: 'Grid bottlenecked',              tone: 'warn',    note: 'Plenty of generation; queues, transformers and permitting are the hard part.' },
  clean:       { label: 'Clean but constrained',          tone: 'mid',     note: 'Low-carbon mix; cost, permitting or land are the binding constraint.' },
  hub:         { label: 'Strategic hub',                  tone: 'good',    note: 'Connectivity, regulation and trust make it disproportionately important.' },
  spillover:   { label: 'Spillover candidate',            tone: 'mid',     note: 'Land + cost advantage near a constrained hub; gated by grid build-out.' },
  fast:        { label: 'Fast-growing, reliability-constrained', tone: 'warn', note: 'Demand surging; reliability, transmission or fuel exposure caps execution.' },
  dirty:       { label: 'Cheap but dirty',                tone: 'warn',    note: 'Affordable power, high carbon intensity, exposure to coal- or oil-heavy mix.' },
  firm:        { label: 'Cool firm grid',                 tone: 'good',    note: 'Clean, dispatchable base (hydro / nuclear / geothermal). Naturally AI-friendly.' },
  sovereign:   { label: 'Sovereign AI bet',               tone: 'mid',     note: 'State-led capital, cheap energy, strategic ambition; track record still being built.' },
  isolated:    { label: 'Geopolitically isolated',        tone: 'warn',    note: 'Domestic capacity present; foreign hyperscalers structurally absent.' }
};

/* ============================================
   ENERGY_MISCONCEPTIONS — common myths the reader should drop
   ============================================ */
var ENERGY_MISCONCEPTIONS = [
  { myth: 'Capacity = electricity produced.', truth: '<em>Capacity is potential. Generation is reality.</em><br><br>Capacity is the maximum power a plant can deliver at a point in time, measured in GW. Generation is how much electricity it actually delivered over time, measured in TWh.<br><br>This is why capacity factor matters. A solar farm may have large installed capacity, but if the sun is not shining, it is not producing at full output. In AI, what matters is not just how much power exists on paper, but how much reliable electricity can actually run data centres.' },
  { myth: 'Generation equals grid availability.', truth: 'Plenty of countries can generate the megawatts but cannot deliver them where the campus wants to be. Transmission and substations are the real choke points.' },
  { myth: 'Renewable capacity equals 24/7 firm power.', truth: 'Solar and wind are variable. AI clusters need 24/7. Annual renewable matching is easy; hourly carbon-free matching is hard.' },
  { myth: 'Data centres dominate global electricity.', truth: 'Globally still small (~1.5% in 2024 per IEA). <em>Locally</em> they can be enormous — over 20% of national electricity in Ireland.' },
  { myth: 'Cheap electricity is enough.', truth: 'Useless without interconnection. A site with $0.04/kWh power and a 5-year queue loses to a $0.09/kWh site with a connection in 18 months.' },
  { myth: 'Nuclear is fast.', truth: 'Nuclear is reliable and dense, but new builds are 8–12+ years from commitment to first electron. Restarts and SMRs help, slowly.' },
  { myth: 'Solar alone solves AI power.', truth: 'Solar is the cheapest new generation in many markets, but needs storage, transmission and firming to serve AI loads through nights and cloudy weeks.' },
  { myth: 'Lots of installed capacity = ready for AI.', truth: 'A country can have abundant generation and still be slow for AI: queues, transformers, water, permitting, political acceptance. Time-to-power is the real metric.' }
];

/* ============================================
   ENERGY_CALC_PRESETS — quick scenarios for the calculator
   ============================================
   Each preset sets IT load, PUE and price defaults that match
   commonly cited industry numbers; utilisation kept high (85%).
   ============================================ */
var ENERGY_CALC_PRESETS = [
  { id: 'inference-50',  label: '50 MW inference site',    it: 50,   pue: 1.30, util: 85, price: 0.08, tag: 'Steady-state inference workload, mid-tier campus.' },
  { id: 'standard-100',  label: '100 MW standard DC',      it: 100,  pue: 1.40, util: 80, price: 0.09, tag: 'Mainstream cloud / mixed workload, conventional cooling.' },
  { id: 'campus-500',    label: '500 MW AI campus',        it: 500,  pue: 1.20, util: 88, price: 0.07, tag: 'Hyperscaler-scale AI campus, liquid cooling, large PPA.' },
  { id: 'frontier-1000', label: '1 GW frontier campus',    it: 1000, pue: 1.15, util: 92, price: 0.06, tag: 'Power-plant scale; only viable in select grid regions.' }
];

/* ============================================
   ENERGY_SIZE_GUIDE — plain-language size labels
   ============================================ */
var ENERGY_SIZE_GUIDE = [
  { mw: 50,    label: 'Sub-utility-scale',     text: 'A few hundred racks. Manageable on existing local distribution; rarely a planning event.' },
  { mw: 100,   label: 'Serious industrial load', text: 'Comparable to a small city. Triggers utility planning conversations and a dedicated substation.' },
  { mw: 500,   label: 'Major grid planning problem', text: 'Equivalent to half a typical gas plant. Multi-year transmission and PPA negotiation required.' },
  { mw: 1000,  label: 'Power-plant-scale AI campus', text: '1 GW = roughly one big nuclear or coal unit. Only a handful of sites in the world can absorb this in under 36 months.' }
];

/* ============================================
   ENERGY_TIMELINE — time-to-power stages
   ============================================ */
var ENERGY_TIMELINE = [
  { id: 't-site',        h: 'Site selection',                d: 'Land, zoning, water, fibre, proximity to substation. 2–6 months.' },
  { id: 't-grid',        h: 'Grid study + queue entry',      d: 'Utility studies system impact + queues your project. 6–18 months in heavily congested grids.' },
  { id: 't-intercon',    h: 'Interconnection approval',      d: 'Approved connection capacity + cost-share allocation. 6–24+ months in PJM, parts of EU, Singapore.' },
  { id: 't-equipment',   h: 'Substation + transformer procurement', d: 'Large step-down transformers have global lead times of 18–36+ months.' },
  { id: 't-construction', h: 'Construction',                 d: 'Civil works, MEP, switchgear, fibre, cooling. 12–24 months for a hyperscale site.' },
  { id: 't-commissioning', h: 'Commissioning + ramp',        d: 'Energise, witness tests, phased ramp from a few MW to full load. 3–9 months.' },
  { id: 't-power',       h: 'Time-to-power',                 d: 'Total: typically 24–48 months. Under 24 months is a real competitive moat in 2025–26.' }
];

/* ============================================
   ENERGY_SOURCES_GROUPED — sources organised by use
   ============================================ */
var ENERGY_SOURCES_GROUPED = [
  {
    group: 'Global electricity data',
    items: [
      { label: 'IEA — Global Energy Review 2026 (preliminary)',           url: 'https://www.iea.org/reports/global-energy-review-2026' },
      { label: 'Ember — Global Electricity Review 2025',                   url: 'https://ember-energy.org/latest-insights/global-electricity-review-2025/' },
      { label: 'Our World in Data — Electricity dataset',                  url: 'https://ourworldindata.org/electricity-mix' },
      { label: 'Energy Institute — Statistical Review of World Energy 2025', url: 'https://www.energyinst.org/statistical-review' }
    ]
  },
  {
    group: 'United States',
    items: [
      { label: 'EIA — U.S. Electric Power Monthly + Annual',               url: 'https://www.eia.gov/electricity/' },
      { label: 'DOE / LBNL — 2024 U.S. Data Center Energy Usage Report',   url: 'https://www.energy.gov/eere/femp/articles/lbnl-report-finds-us-data-centers-consumed-176-twh-2023-roughly-44-total-us' }
    ]
  },
  {
    group: 'Europe',
    items: [
      { label: 'Eurostat — Electricity production and consumption',        url: 'https://ec.europa.eu/eurostat/web/energy' },
      { label: 'Ember — European Electricity Review',                      url: 'https://ember-energy.org/topics/european-electricity-review/' },
      { label: 'CSO Ireland — Data Centres Metered Electricity Consumption', url: 'https://www.cso.ie/en/statistics/energy/datacentresmeteredelectricityconsumption/' }
    ]
  },
  {
    group: 'Singapore',
    items: [
      { label: 'EMA — Singapore Energy Statistics 2025',                   url: 'https://www.ema.gov.sg/resources/singapore-energy-statistics' },
      { label: 'EMA — Data Centre Call for Application (DC-CFA)',          url: 'https://www.ema.gov.sg/' }
    ]
  },
  {
    group: 'Malaysia',
    items: [
      { label: 'Energy Commission Malaysia — statistics portal',           url: 'https://meih.st.gov.my/' },
      { label: 'TNB — system + generation reporting',                      url: 'https://www.tnb.com.my/' },
      { label: 'Reuters — Malaysia grid + Johor data-centre coverage',     url: 'https://www.reuters.com/business/energy/' }
    ]
  },
  {
    group: 'Data centres + AI energy',
    items: [
      { label: 'IEA — Energy and AI (2025)',                               url: 'https://www.iea.org/reports/energy-and-ai' },
      { label: 'Hyperscaler sustainability reports (Microsoft, Google, AWS, Meta)', url: 'https://www.iea.org/reports/energy-and-ai' }
    ]
  }
];

