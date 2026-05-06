/* ============================================
   ACCELERATED COMPUTING ATLAS — Data Layer
   ============================================ */

var ATLAS_LAYERS = [
  {
    id: "core",
    label: "NVIDIA Core",
    description: "The central platform connecting GPUs, networking, software and AI factory systems into a unified accelerated computing ecosystem.",
    color: "#FFB347",
    bg: "rgba(255,179,71,0.08)",
    textColor: "#FFD699"
  },
  {
    id: "physical",
    label: "Physical Constraints",
    description: "Power, cooling, land, grid access and data center capacity define the physical limits of AI scale.",
    color: "#F56565",
    bg: "rgba(245,101,101,0.07)",
    textColor: "#FEB2B2"
  },
  {
    id: "upstream",
    label: "Semiconductor Upstream",
    description: "Equipment makers, EDA vendors, IP licensors and raw materials that enable chip fabrication.",
    color: "#63B3ED",
    bg: "rgba(99,179,237,0.07)",
    textColor: "#BEE3F8"
  },
  {
    id: "manufacturing",
    label: "Foundry, Memory & Packaging",
    description: "The fabs, memory producers and advanced packaging providers that turn designs into physical chips.",
    color: "#9F7AEA",
    bg: "rgba(159,122,234,0.07)",
    textColor: "#D6BCFA"
  },
  {
    id: "hardware",
    label: "NVIDIA Hardware",
    description: "GPU architectures, accelerators, superchips and rack-scale systems designed for AI training and inference.",
    color: "#48BB78",
    bg: "rgba(72,187,120,0.07)",
    textColor: "#9AE6B4"
  },
  {
    id: "networking",
    label: "NVIDIA Networking",
    description: "High-bandwidth interconnects, switches and network adapters that tie GPU clusters into unified compute fabrics.",
    color: "#F6AD55",
    bg: "rgba(246,173,85,0.07)",
    textColor: "#FEEBC8"
  },
  {
    id: "software",
    label: "NVIDIA Software",
    description: "CUDA, libraries, inference engines, AI frameworks and vertical platforms that form NVIDIA's software moat.",
    color: "#4FD1C5",
    bg: "rgba(79,209,197,0.07)",
    textColor: "#B2F5EA"
  },
  {
    id: "cloud",
    label: "Cloud & OEM Partners",
    description: "Hyperscalers, cloud providers and server OEMs that deploy NVIDIA systems at scale.",
    color: "#FC8181",
    bg: "rgba(252,129,129,0.07)",
    textColor: "#FED7D7"
  },
  {
    id: "quantum",
    label: "Quantum-Classical Computing",
    description: "Quantum processors, controllers, hybrid algorithms and GPU-accelerated quantum simulation platforms.",
    color: "#B794F4",
    bg: "rgba(183,148,244,0.07)",
    textColor: "#E9D8FD"
  },
  {
    id: "endmarket",
    label: "End Markets",
    description: "Industries and application domains where accelerated computing creates economic and scientific value.",
    color: "#FBD38D",
    bg: "rgba(251,211,141,0.07)",
    textColor: "#FEFCBF"
  },
  {
    id: "concept",
    label: "Strategic Concepts",
    description: "Structural ideas, economic dynamics and competitive forces shaping the accelerated computing landscape.",
    color: "#A0AEC0",
    bg: "rgba(160,174,192,0.07)",
    textColor: "#E2E8F0"
  }
];

/* ============================================
   MODES — View filters
   ============================================ */
var ATLAS_MODES = [
  {
    id: "supply",
    label: "Supply chain",
    title: "Trace the upstream chain",
    description: "Power and materials &rarr; equipment &rarr; foundry &rarr; HBM &rarr; advanced packaging &rarr; NVIDIA systems &rarr; cloud and OEM deployment. Every layer must work for inference to run."
  },
  {
    id: "product",
    label: "Product stack",
    title: "What NVIDIA actually ships",
    description: "GPU architectures, Grace and Vera CPUs, NVL72 rack systems, NVLink and Spectrum-X networking, and a software stack from CUDA to vertical platforms like Isaac, DRIVE and BioNeMo."
  },
  {
    id: "factory",
    label: "AI factory",
    title: "Electricity in, tokens out",
    description: "Power and liquid cooling, Blackwell racks, NVLink fabric, InfiniBand, TensorRT and Triton serving. The framing shifts data centers from servers-rented to capacity-built."
  },
  {
    id: "quantum",
    label: "Quantum&ndash;classical",
    title: "Hybrid compute, GPU-anchored",
    description: "QPUs alone do not scale. CUDA-Q and NVQLink wire quantum processors into GPU clusters for simulation, chemistry and optimization. Most workflows are still GPU-dominant."
  },
  {
    id: "endmarkets",
    label: "End markets",
    title: "Where the compute creates value",
    description: "Frontier labs, cloud inference, enterprise AI, sovereign compute, robotics and autonomous vehicles, healthcare, scientific computing, gaming and creator tools."
  },
  {
    id: "bottlenecks",
    label: "Bottlenecks",
    title: "The constraints worth tracking",
    description: "The chokepoints rated Critical or High &mdash; the layers where a single supplier outage, capacity miss or policy change reshapes the rest of the stack."
  }
];

/* ============================================
   BOTTLENECK CARDS
   ============================================
   Tiered by structural type:
   - industrial: physical, multi-year lead time chokepoints
   - strategic: policy and ecosystem dynamics
   - frontier: open R&D problems on a longer horizon
*/
var ATLAS_BOTTLENECKS = [
  {
    id: "power", title: "Power", tier: "industrial",
    what: "Hyperscale AI campuses now consume hundreds of megawatts. A single GB200 NVL72 rack draws roughly 120 kW &mdash; ten times a traditional server rack.",
    why: "New builds are bound by grid capacity, not capital. Interconnection queues in major US markets stretch into multiple years.",
    who: "Every hyperscaler. Every sovereign AI program. Anyone planning a new training campus."
  },
  {
    id: "hbm", title: "HBM", tier: "industrial",
    what: "Vertically stacked DRAM dies wired through silicon. Each modern AI GPU package carries multiple HBM stacks.",
    why: "Three suppliers in the world &mdash; SK hynix, Samsung, Micron. Production also depends on advanced packaging capacity that is itself constrained.",
    who: "NVIDIA. AMD. Anyone shipping a large AI accelerator."
  },
  {
    id: "cowos", title: "CoWoS &amp; advanced packaging", tier: "industrial",
    what: "TSMC&rsquo;s Chip-on-Wafer-on-Substrate process integrates the GPU die, HBM stacks and interposer into a single package.",
    why: "CoWoS capacity has been a binding constraint on GPU supply. Adding capacity means new clean rooms and bonding tools &mdash; lead time measured in years.",
    who: "NVIDIA. AMD. Google. Amazon. Every accelerator vendor with HBM."
  },
  {
    id: "tsmc-nodes", title: "TSMC leading edge", tier: "industrial",
    what: "4nm, 3nm and the upcoming 2nm process nodes &mdash; the silicon recipes used for the highest-performance AI chips.",
    why: "TSMC is currently the only foundry shipping leading-edge logic for AI at volume. Wafer allocation between customers becomes a strategic decision.",
    who: "NVIDIA. Apple. AMD. Qualcomm. Every hyperscaler with custom silicon."
  },
  {
    id: "liquid-cooling", title: "Liquid cooling", tier: "industrial",
    what: "Direct-to-chip liquid cooling. GB200 NVL72 and follow-on rack designs exceed what air cooling can sustain.",
    why: "Most existing data centers are air-cooled. Retrofitting or greenfield construction adds capex and operational complexity.",
    who: "Cloud providers, colocation operators, enterprise data center teams."
  },
  {
    id: "networking-bw", title: "Networking bandwidth", tier: "strategic",
    what: "Bandwidth and latency between GPUs at scale &mdash; NVLink inside the rack, InfiniBand or Spectrum-X Ethernet between racks.",
    why: "A training run is only as fast as its slowest collective. A single underperforming link can stall an entire cluster.",
    who: "Frontier labs. Hyperscalers. Anyone running multi-thousand-GPU jobs."
  },
  {
    id: "export-controls", title: "Export controls", tier: "strategic",
    what: "US Bureau of Industry and Security restrictions on advanced AI chips, EUV equipment and related technologies.",
    why: "The rules redraw the geography of AI compute. They bifurcate supply chains and accelerate sovereign programs in restricted markets.",
    who: "NVIDIA. AMD. ASML. TSMC. Customers in restricted regions."
  },
  {
    id: "cuda-lockin", title: "CUDA lock-in", tier: "strategic",
    what: "Two decades of libraries, kernels, tooling and developer mindshare built around NVIDIA&rsquo;s proprietary programming model.",
    why: "Competitors must match the hardware and replicate the ecosystem. Software momentum is the moat that hardware alone cannot dislodge.",
    who: "Every alternative accelerator program. Every cloud building or buying non-NVIDIA silicon."
  },
  {
    id: "qec", title: "Quantum error correction", tier: "frontier",
    what: "Encoding a usable logical qubit on top of many noisy physical qubits. Physical qubit counts are growing; useful logical qubit counts are not yet.",
    why: "Without scalable error correction, quantum hardware cannot run the deep circuits needed for advantage over GPU clusters.",
    who: "Quantum hardware vendors. Chemistry, materials and optimization researchers. National labs."
  }
];

/* ============================================
   ATLAS NODES
   ============================================ */
var ATLAS_NODES = [

  // ── Core ──────────────────────────────────
  {
    id: "nvidia", name: "NVIDIA Accelerated Computing", layer: "core", type: "Platform",
    short: "The central platform that ties GPU silicon, NVLink networking, CUDA software and rack-scale systems into one accelerated-computing stack.",
    why: "NVIDIA is no longer 'a GPU company'. It sells a full-stack accelerated-computing platform spanning hardware, networking, software and reference designs for AI data centers.",
    takeaway: "Not 'just a GPU company.' NVIDIA sells the entire AI infrastructure stack.",
    explainLikeImNew: "Think of NVIDIA as both a chip company and a software company and a networking company and a data-center reference designer &mdash; with all four pieces designed to work together.",
    commonMisunderstanding: "NVIDIA is often described as 'the GPU company.' Today they also sell CPUs (Grace, Vera), networking silicon (NVLink, NVSwitch, Spectrum-X, ConnectX, BlueField), rack-scale systems (NVL72), software platforms (CUDA, TensorRT, NIM, NeMo, Omniverse, Isaac, CUDA-Q), and AI factory reference designs.",
    relatedQuestions: ["q-what-is-gpu", "q-cuda-lockin", "q-nvidia-acquisitions", "q-nvidia-margins", "q-asics-replacement", "q-physical-ai", "q-ai-factory", "q-rack-scale-different", "q-bottlenecks-overview"],
    dependsOn: ["TSMC", "HBM", "CoWoS", "Power", "Cloud providers"],
    usedBy: ["AI labs", "Cloud providers", "Enterprises", "Robotics companies", "Scientific institutions"],
    bottleneckLevel: "Critical",
    modes: ["supply", "product", "factory", "quantum", "endmarkets"],
    sources: [
      { label: "NVIDIA Data Center", url: "https://www.nvidia.com/en-us/data-center/" },
      { label: "NVIDIA 10-K Filing", url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm" }
    ]
  },

  // ── Physical Constraints ──────────────────
  {
    id: "power-generation", name: "Power Generation", layer: "physical", type: "Constraint",
    short: "Electricity generation capacity for AI-scale data centers.",
    why: "AI training and inference workloads require sustained power at industrial scale &mdash; hundreds of megawatts per campus. Securing power-purchase agreements and grid connections is increasingly the gating factor for new AI infrastructure.",
    dependsOn: ["Grid infrastructure", "Energy sources"],
    usedBy: ["Data centers", "Cloud providers", "AI factories"],
    bottleneckLevel: "Critical",
    modes: ["supply", "factory"],
    sources: [{ label: "IEA Energy and AI", url: "https://www.iea.org/reports/energy-and-ai" }]
  },
  {
    id: "grid-access", name: "Grid Access", layer: "physical", type: "Constraint",
    short: "Connection to electrical grid with sufficient capacity for large-scale compute.",
    why: "Grid interconnection queues in major markets can take years. Available grid capacity determines where AI data centers can be built.",
    dependsOn: ["Power generation", "Transmission infrastructure"],
    usedBy: ["Data center developers", "Cloud providers"],
    bottleneckLevel: "High",
    modes: ["supply", "factory"]
  },
  {
    id: "dc-land", name: "Data Center Land", layer: "physical", type: "Constraint",
    short: "Real estate with adequate power, cooling and network access for large AI facilities.",
    why: "Suitable sites require proximity to power substations, water for cooling, and fiber connectivity. Prime locations are increasingly scarce.",
    dependsOn: ["Grid access", "Water supply", "Fiber connectivity"],
    usedBy: ["Hyperscalers", "Colocation operators"],
    bottleneckLevel: "Medium",
    modes: ["supply", "factory"]
  },
  {
    id: "liquid-cooling-tech", name: "Liquid Cooling", layer: "physical", type: "Constraint",
    short: "Direct liquid cooling systems required for next-generation GPU racks.",
    why: "Blackwell and Rubin-generation GPU racks exceed air cooling limits. Liquid cooling infrastructure must be designed into new facilities from the start.",
    dependsOn: ["Water supply", "Cooling distribution units"],
    usedBy: ["GB200 NVL72", "GB300 NVL72", "Cloud providers"],
    bottleneckLevel: "High",
    modes: ["supply", "factory"]
  },
  {
    id: "rack-density", name: "Rack Density", layer: "physical", type: "Constraint",
    short: "Power and thermal density per rack, measured in kilowatts.",
    why: "AI racks now exceed 100 kW per rack, up from the traditional 10-20 kW. This forces fundamental redesign of data center power distribution and cooling.",
    dependsOn: ["Liquid cooling", "Power distribution"],
    usedBy: ["System architects", "Data center operators"],
    bottleneckLevel: "Medium",
    modes: ["factory"]
  },
  {
    id: "water-thermal", name: "Water & Thermal Management", layer: "physical", type: "Constraint",
    short: "Water consumption and heat rejection for large-scale AI facilities.",
    why: "Liquid-cooled AI clusters require reliable water supply and efficient heat rejection. Water scarcity and environmental regulations add siting constraints.",
    dependsOn: ["Water supply", "Climate conditions"],
    usedBy: ["Data center operators", "Cooling system vendors"],
    bottleneckLevel: "Medium",
    modes: ["factory"]
  },
  {
    id: "energy-cost-per-token", name: "Energy Cost per Token", layer: "physical", type: "Constraint",
    short: "The electricity cost to generate one unit of AI inference output.",
    why: "As AI inference scales to trillions of tokens per day, energy cost per token becomes a primary driver of inference economics and deployment decisions.",
    dependsOn: ["Power generation", "GPU efficiency", "Inference optimization"],
    usedBy: ["Cloud providers", "AI labs", "Enterprise AI teams"],
    bottleneckLevel: "Medium",
    modes: ["factory", "endmarkets"]
  },

  // ── Semiconductor Equipment & EDA ─────────
  {
    id: "asml", name: "ASML", layer: "upstream", type: "Supplier",
    short: "The sole manufacturer of extreme ultraviolet (EUV) lithography systems used to print the smallest transistors.",
    why: "Without ASML's EUV machines, no foundry can manufacture chips at the leading edge. ASML is one of the most critical single points of dependency in the global semiconductor supply chain.",
    dependsOn: ["Zeiss optics", "Precision engineering supply chain"],
    usedBy: ["TSMC", "Samsung Foundry", "Intel"],
    bottleneckLevel: "Critical",
    modes: ["supply"],
    sources: [{ label: "ASML EUV Systems", url: "https://www.asml.com/en/products/euv-lithography-systems" }]
  },
  {
    id: "applied-materials", name: "Applied Materials", layer: "upstream", type: "Supplier",
    short: "Supplier of materials engineering equipment for deposition, etch and inspection in chip fabs.",
    why: "Applied Materials provides systems used across nearly every step of semiconductor fabrication. Its tools are essential for advanced node production and advanced packaging.",
    dependsOn: ["Specialty materials", "Precision components"],
    usedBy: ["TSMC", "Samsung", "Foundries globally"],
    bottleneckLevel: "High",
    modes: ["supply"]
  },
  {
    id: "lam-research", name: "Lam Research", layer: "upstream", type: "Supplier",
    short: "Supplier of etch, deposition and cleaning equipment for semiconductor manufacturing.",
    why: "Lam's etch tools define transistor structures at the atomic level. Its equipment is used in both logic and memory fabrication.",
    dependsOn: ["Precision components", "Process chemistry"],
    usedBy: ["TSMC", "SK hynix", "Micron", "Samsung"],
    bottleneckLevel: "High",
    modes: ["supply"]
  },
  {
    id: "kla", name: "KLA", layer: "upstream", type: "Supplier",
    short: "Supplier of process control and yield management systems for chip manufacturing.",
    why: "KLA's inspection and metrology tools catch defects early, which is critical as manufacturing tolerances shrink to single-digit nanometers.",
    dependsOn: ["Advanced optics", "Data analytics"],
    usedBy: ["TSMC", "Samsung", "All advanced fabs"],
    bottleneckLevel: "Medium",
    modes: ["supply"]
  },
  {
    id: "tokyo-electron", name: "Tokyo Electron", layer: "upstream", type: "Supplier",
    short: "Japanese supplier of coater/developer, etch and deposition equipment for semiconductor fabs.",
    why: "Tokyo Electron is a major equipment supplier particularly strong in photoresist coating and thermal processing, both essential for advanced nodes.",
    dependsOn: ["Precision engineering", "Process chemistry"],
    usedBy: ["TSMC", "Samsung", "Foundries globally"],
    bottleneckLevel: "Medium",
    modes: ["supply"]
  },
  {
    id: "synopsys", name: "Synopsys", layer: "upstream", type: "EDA",
    short: "Provider of electronic design automation (EDA) tools and semiconductor IP used to design chips.",
    why: "Synopsys tools are used to design, verify and test virtually every advanced chip. Its simulation and verification platforms are deeply embedded in the design workflow.",
    dependsOn: ["Compute infrastructure for simulation"],
    usedBy: ["NVIDIA", "Apple", "AMD", "Qualcomm", "Chip designers globally"],
    bottleneckLevel: "Medium",
    modes: ["supply"]
  },
  {
    id: "cadence", name: "Cadence", layer: "upstream", type: "EDA",
    short: "Provider of EDA tools, IP and system design solutions for chip and system development.",
    why: "Cadence tools cover digital, analog and mixed-signal design. Its Cerebrus AI-driven design tool uses GPU acceleration to optimize chip layouts.",
    dependsOn: ["Compute infrastructure"],
    usedBy: ["NVIDIA", "Chip designers", "System companies"],
    bottleneckLevel: "Medium",
    modes: ["supply"]
  },
  {
    id: "siemens-eda", name: "Siemens EDA", layer: "upstream", type: "EDA",
    short: "EDA division of Siemens providing IC design and verification tools (formerly Mentor Graphics).",
    why: "Siemens EDA specialises in physical verification, DFM (design for manufacturability) and PCB design, complementing the other major EDA vendors.",
    dependsOn: ["Compute infrastructure"],
    usedBy: ["Chip designers", "PCB designers", "System integrators"],
    bottleneckLevel: "Low",
    modes: ["supply"]
  },
  {
    id: "arm", name: "Arm", layer: "upstream", type: "IP",
    short: "Licensor of CPU and interconnect IP architectures used across billions of devices.",
    why: "Arm's CPU architecture is used in NVIDIA's Grace CPU and many mobile and edge devices. Its licensing model makes it a foundational IP layer across the industry.",
    dependsOn: ["R&D investment"],
    usedBy: ["NVIDIA Grace", "Apple", "Qualcomm", "Mobile industry"],
    bottleneckLevel: "Low",
    modes: ["supply", "product"]
  },
  {
    id: "silicon-wafers", name: "Silicon Wafers", layer: "upstream", type: "Material",
    short: "Ultra-pure silicon wafers that form the substrate for all semiconductor manufacturing.",
    why: "A small number of companies (Shin-Etsu, SUMCO, Siltronic, SK Siltron) produce the 300mm wafers used in advanced fabs. Quality and supply stability matter.",
    dependsOn: ["High-purity silicon", "Crystal growth equipment"],
    usedBy: ["TSMC", "Samsung", "All foundries"],
    bottleneckLevel: "Medium",
    modes: ["supply"]
  },
  {
    id: "photoresists", name: "Photoresists", layer: "upstream", type: "Material",
    short: "Light-sensitive chemicals applied to wafers during lithography to define circuit patterns.",
    why: "EUV photoresists require extreme precision and are supplied by a small number of chemical companies. They are essential for leading-edge patterning.",
    dependsOn: ["Specialty chemistry", "ASML EUV systems"],
    usedBy: ["TSMC", "Samsung", "All advanced fabs"],
    bottleneckLevel: "Medium",
    modes: ["supply"]
  },
  {
    id: "specialty-gases", name: "Specialty Gases", layer: "upstream", type: "Material",
    short: "Ultra-high-purity gases used in deposition, etch and cleaning steps during chip fabrication.",
    why: "Gases like nitrogen trifluoride, tungsten hexafluoride and argon must meet extreme purity standards. Supply disruptions can halt production lines.",
    dependsOn: ["Chemical suppliers", "Purification systems"],
    usedBy: ["All semiconductor fabs"],
    bottleneckLevel: "Low",
    modes: ["supply"]
  },
  {
    id: "substrates-material", name: "Substrates", layer: "upstream", type: "Material",
    short: "Organic or ceramic substrates that connect packaged chips to circuit boards.",
    why: "Advanced AI chip packages require large, high-layer-count substrates with tight tolerances. Substrate capacity is a secondary bottleneck behind CoWoS.",
    dependsOn: ["Substrate manufacturers", "Advanced materials"],
    usedBy: ["CoWoS packages", "NVIDIA GPUs", "All advanced packages"],
    bottleneckLevel: "High",
    modes: ["supply"]
  },

  // ── Foundry ───────────────────────────────
  {
    id: "tsmc", name: "TSMC", layer: "manufacturing", type: "Foundry",
    short: "The world's leading semiconductor foundry, manufacturing chips at the most advanced process nodes.",
    why: "TSMC fabricates NVIDIA's GPUs, Apple's processors and chips for most leading AI and mobile companies. Its advanced nodes and packaging technologies are central to AI hardware progress.",
    dependsOn: ["ASML", "Applied Materials", "Silicon wafers", "Photoresists"],
    usedBy: ["NVIDIA", "Apple", "AMD", "Qualcomm", "Broadcom"],
    bottleneckLevel: "Critical",
    modes: ["supply", "factory"],
    sources: [
      { label: "TSMC CoWoS", url: "https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/cowos.htm" },
      { label: "TSMC 3DFabric", url: "https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/3DFabric.htm" }
    ]
  },
  {
    id: "samsung-foundry", name: "Samsung Foundry", layer: "manufacturing", type: "Foundry",
    short: "Samsung's semiconductor manufacturing division, offering advanced process nodes.",
    why: "Samsung Foundry is the second-largest logic foundry by capacity. It competes with TSMC for advanced node customers, though most leading AI chips are currently manufactured at TSMC.",
    dependsOn: ["ASML", "Equipment vendors", "Silicon wafers"],
    usedBy: ["Qualcomm", "Google", "Samsung LSI"],
    bottleneckLevel: "Medium",
    modes: ["supply"]
  },

  // ── Memory ────────────────────────────────
  {
    id: "sk-hynix", name: "SK hynix", layer: "manufacturing", type: "Memory",
    short: "Major memory manufacturer and leading supplier of HBM for AI accelerators.",
    why: "SK hynix has led in HBM production and has been publicly identified as a leading HBM supplier to NVIDIA's data-center GPUs. Its ability to ramp HBM capacity directly affects GPU supply.",
    dependsOn: ["DRAM technology", "Advanced packaging"],
    usedBy: ["NVIDIA", "AMD", "AI accelerator makers"],
    bottleneckLevel: "Critical",
    modes: ["supply"]
  },
  {
    id: "micron", name: "Micron", layer: "manufacturing", type: "Memory",
    short: "US-based memory manufacturer producing DRAM, NAND and HBM products.",
    why: "Micron is the third major HBM supplier and the only US-headquartered company in this market. Its HBM3E products serve the growing AI accelerator demand.",
    dependsOn: ["DRAM technology", "Advanced packaging"],
    usedBy: ["NVIDIA", "Data center customers"],
    bottleneckLevel: "High",
    modes: ["supply"],
    sources: [
      { label: "Micron HBM3E", url: "https://www.micron.com/products/memory/hbm/hbm3e" },
      { label: "Micron HBM4", url: "https://www.micron.com/products/memory/hbm/hbm4" }
    ]
  },
  {
    id: "samsung-memory", name: "Samsung Memory", layer: "manufacturing", type: "Memory",
    short: "Samsung's memory division, producing DRAM, NAND and HBM products.",
    why: "Samsung is one of three companies capable of producing HBM at scale. Its memory technology serves both AI accelerators and the broader computing market.",
    dependsOn: ["DRAM technology", "Advanced packaging"],
    usedBy: ["NVIDIA", "Cloud providers", "Consumer electronics"],
    bottleneckLevel: "High",
    modes: ["supply"],
    sources: [{ label: "Samsung HBM4", url: "https://semiconductor.samsung.com/dram/hbm/hbm4/" }]
  },
  {
    id: "hbm3e", name: "HBM3E", layer: "manufacturing", type: "Memory",
    short: "Current-generation High Bandwidth Memory bonded to NVIDIA's Blackwell-class GPU packages.",
    why: "HBM3E provides the memory bandwidth that large AI models require. Each GPU package uses multiple HBM stacks, so HBM production directly constrains GPU supply.",
    takeaway: "HBM is not storage. It is memory bandwidth for intelligence.",
    explainLikeImNew: "Imagine 8 or 12 layers of memory stacked on top of each other and wired together with thousands of tiny vertical wires, then sat right next to the GPU die. That is HBM3E.",
    commonMisunderstanding: "HBM3E is not a faster version of regular DRAM. It is stacked DRAM dies wired through silicon (TSV) and bonded to the GPU package via advanced packaging. Designed for bandwidth, not capacity.",
    nvidiaConnection: {
      type: "direct",
      explanation: "Multiple HBM3E stacks sit on every NVIDIA Blackwell-generation accelerator package. HBM ramp = GPU ramp."
    },
    relatedQuestions: ["q-hbm-stack", "q-memory-bandwidth", "q-cowos", "q-hbm3e-vs-hbm4", "q-hbm-yield", "q-cowos-variants"],
    dependsOn: ["SK hynix", "Micron", "Samsung Memory", "CoWoS"],
    usedBy: ["B200", "GB200", "H200", "AI accelerators"],
    bottleneckLevel: "Critical",
    modes: ["supply", "product", "factory"],
    sources: [{ label: "Micron HBM3E", url: "https://www.micron.com/products/memory/hbm/hbm3e" }]
  },
  {
    id: "hbm4", name: "HBM4", layer: "manufacturing", type: "Memory",
    short: "Next-generation High Bandwidth Memory expected in NVIDIA's Rubin-generation accelerators.",
    why: "HBM4 widens channels and pushes more bandwidth and capacity per stack. The transition will reshape supplier positioning across SK hynix, Samsung and Micron.",
    takeaway: "HBM4 is the next bandwidth ceiling &mdash; and the next qualification battle between memory makers.",
    explainLikeImNew: "Same idea as HBM3E (stacked DRAM bonded next to the GPU), but with wider data channels, more capacity per stack, and a tighter relationship between memory makers and foundries.",
    commonMisunderstanding: "HBM4 is not just a faster HBM3E. It introduces wider channels and per-stack capacity changes; some HBM4 implementations involve logic-base-die collaborations with foundries (TSMC).",
    nvidiaConnection: {
      type: "upstream",
      explanation: "Forward-looking. Expected in Rubin-generation accelerators; suppliers are already shipping HBM4 samples. Specifics will firm up as Rubin ramps."
    },
    relatedQuestions: ["q-hbm3e-vs-hbm4", "q-hbm-stack", "q-memory-bandwidth", "q-hbm-yield", "q-3dfabric", "q-cowos-variants"],
    dependsOn: ["SK hynix", "Micron", "Samsung Memory", "Advanced packaging"],
    usedBy: ["Rubin", "Future AI accelerators"],
    bottleneckLevel: "High",
    modes: ["supply", "product"],
    sources: [
      { label: "Micron HBM4", url: "https://www.micron.com/products/memory/hbm/hbm4" },
      { label: "Samsung HBM4", url: "https://semiconductor.samsung.com/dram/hbm/hbm4/" }
    ]
  },

  // ── Packaging ─────────────────────────────
  {
    id: "cowos", name: "CoWoS", layer: "manufacturing", type: "Packaging",
    short: "TSMC's Chip-on-Wafer-on-Substrate packaging that places GPU dies and HBM stacks on a shared silicon interposer.",
    why: "CoWoS is the packaging step that physically lets HBM deliver its bandwidth to a GPU die. Its capacity has been one of the tightest bottlenecks in the entire AI supply chain.",
    takeaway: "CoWoS is where the GPU and memory become one package.",
    explainLikeImNew: "Imagine a small flat board made of silicon (the interposer) with a GPU die and several HBM stacks all sitting on it, wired together with thousands of tiny connections. That whole assembly, sealed and substrated, is a CoWoS package.",
    commonMisunderstanding: "CoWoS is not a chip and not a foundry process. It is a 2.5D packaging step. Without it (or a comparable advanced package), HBM cannot deliver its bandwidth to the GPU.",
    nvidiaConnection: {
      type: "direct",
      explanation: "Every Blackwell- and Hopper-generation NVIDIA accelerator package is built on CoWoS. CoWoS capacity at TSMC has been the dominant supply constraint on NVIDIA GPUs through multiple cycles."
    },
    relatedQuestions: ["q-cowos", "q-cowos-constrained", "q-tsmc-spof", "q-hbm-stack", "q-cowos-variants", "q-3dfabric", "q-hbm-yield"],
    dependsOn: ["TSMC", "Silicon interposer", "Substrates"],
    usedBy: ["NVIDIA GPUs", "AMD MI-series", "Google TPUs"],
    bottleneckLevel: "Critical",
    modes: ["supply", "factory"],
    sources: [{ label: "TSMC CoWoS", url: "https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/cowos.htm" }]
  },
  {
    id: "3dfabric", name: "3DFabric", layer: "manufacturing", type: "Packaging",
    short: "TSMC's portfolio of advanced 3D packaging technologies including CoWoS, InFO and SoIC.",
    why: "3DFabric encompasses the packaging innovations needed to stack and connect dies in three dimensions, enabling higher compute density and bandwidth.",
    dependsOn: ["TSMC", "Advanced bonding technology"],
    usedBy: ["NVIDIA", "AMD", "Apple", "Advanced chip designers"],
    bottleneckLevel: "High",
    modes: ["supply"],
    sources: [{ label: "TSMC 3DFabric", url: "https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/3DFabric.htm" }]
  },
  {
    id: "silicon-interposer", name: "Silicon Interposer", layer: "manufacturing", type: "Packaging",
    short: "A thin silicon layer with thousands of micron-scale connections that joins the GPU die to its HBM stacks inside a CoWoS package.",
    why: "The interposer is the wiring board that lets HBM bandwidth reach the GPU. Its size, layer count and yield directly affect package cost and accelerator supply.",
    takeaway: "The thin silicon layer that lets HBM and the GPU actually talk.",
    commonMisunderstanding: "The interposer is not the substrate. The interposer is silicon and sits between the dies and the package; the substrate is organic and sits beneath the package. Both are bottlenecks, but they are different bottlenecks.",
    nvidiaConnection: {
      type: "indirect",
      explanation: "Silicon interposer fabrication at TSMC sits inside every CoWoS-packaged NVIDIA accelerator."
    },
    dependsOn: ["TSMC", "Silicon wafers"],
    usedBy: ["CoWoS packages", "NVIDIA GPUs"],
    bottleneckLevel: "High",
    modes: ["supply"]
  },
  {
    id: "advanced-substrates", name: "Advanced Substrates", layer: "manufacturing", type: "Packaging",
    short: "High-layer-count organic substrates that connect packaged chips to printed circuit boards.",
    why: "Large AI packages require substrates with extremely high wiring density and tight tolerances. A small number of specialty vendors (Ibiden, Shinko) serve this market, making it a quiet but real bottleneck.",
    takeaway: "The organic layer beneath the package. A quiet, parallel bottleneck to CoWoS.",
    commonMisunderstanding: "Substrate constraints are often lumped under 'packaging,' but high-layer-count substrates are a separate supply chain from CoWoS &mdash; with their own multi-quarter lead times and concentrated supplier base.",
    nvidiaConnection: {
      type: "indirect",
      explanation: "Advanced substrates connect every packaged NVIDIA accelerator to its system board. Substrate capacity gates total package output even when CoWoS scales."
    },
    dependsOn: ["Substrate manufacturers (Ibiden, Shinko)"],
    usedBy: ["NVIDIA packages", "All advanced AI chips"],
    bottleneckLevel: "High",
    modes: ["supply"]
  },
  {
    id: "amkor", name: "Amkor", layer: "manufacturing", type: "Packaging",
    short: "Outsourced semiconductor assembly and test (OSAT) provider for advanced packaging.",
    why: "Amkor provides assembly and test services including advanced packaging for AI chips. OSAT capacity complements TSMC's in-house packaging.",
    dependsOn: ["Substrates", "Bonding equipment"],
    usedBy: ["Chip companies", "NVIDIA supply chain"],
    bottleneckLevel: "Medium",
    modes: ["supply"]
  },

  // ── Assembly & Contract Manufacturing ─────
  {
    id: "spil", name: "SPIL", layer: "manufacturing", type: "Packaging",
    short: "Siliconware Precision Industries, a major OSAT company for semiconductor packaging and testing.",
    why: "SPIL (now part of ASE Group) provides packaging and test services used across the semiconductor industry including for AI-related components.",
    dependsOn: ["Substrates", "Test equipment"],
    usedBy: ["Semiconductor companies"],
    bottleneckLevel: "Low",
    modes: ["supply"]
  },
  {
    id: "foxconn", name: "Foxconn / Hon Hai", layer: "manufacturing", type: "Assembler",
    short: "Major electronics contract manufacturer building NVIDIA AI servers and systems.",
    why: "Foxconn assembles GB200 NVL72 racks and other AI server systems. It is also investing in AI factory infrastructure projects globally.",
    dependsOn: ["NVIDIA GPUs", "Networking components", "Power systems"],
    usedBy: ["Cloud providers", "Enterprise customers"],
    bottleneckLevel: "Medium",
    modes: ["supply", "factory"]
  },
  {
    id: "wistron", name: "Wistron", layer: "manufacturing", type: "Assembler",
    short: "Taiwan-based ODM manufacturing servers and computing systems.",
    why: "Wistron is one of several ODMs that assemble NVIDIA-based server systems for cloud and enterprise customers.",
    dependsOn: ["NVIDIA GPUs", "Components"],
    usedBy: ["Cloud providers", "Enterprise"],
    bottleneckLevel: "Low",
    modes: ["supply"]
  },
  {
    id: "fabrinet", name: "Fabrinet", layer: "manufacturing", type: "Assembler",
    short: "Precision optical and electronic manufacturing services provider.",
    why: "Fabrinet manufactures optical transceivers and networking components used in AI data center interconnects.",
    dependsOn: ["Optical components", "Networking designs"],
    usedBy: ["Networking equipment companies", "Data centers"],
    bottleneckLevel: "Low",
    modes: ["supply"]
  },
  {
    id: "quanta", name: "Quanta", layer: "manufacturing", type: "Assembler",
    short: "Major ODM and server manufacturer building NVIDIA AI systems at scale.",
    why: "Quanta is one of the largest server ODMs globally and a key manufacturer of NVIDIA DGX and HGX-based systems.",
    dependsOn: ["NVIDIA GPUs", "Components", "Cooling systems"],
    usedBy: ["Cloud providers", "NVIDIA DGX systems"],
    bottleneckLevel: "Medium",
    modes: ["supply", "factory"]
  },
  {
    id: "inventec", name: "Inventec", layer: "manufacturing", type: "Assembler",
    short: "Taiwan-based ODM manufacturing servers and enterprise computing systems.",
    why: "Inventec builds AI servers for cloud and enterprise deployments, contributing to the manufacturing capacity for NVIDIA-based systems.",
    dependsOn: ["NVIDIA GPUs", "Components"],
    usedBy: ["Cloud providers", "Enterprise"],
    bottleneckLevel: "Low",
    modes: ["supply"]
  },
  {
    id: "wiwynn", name: "Wiwynn", layer: "manufacturing", type: "Assembler",
    short: "Cloud infrastructure server designer and manufacturer focused on hyperscale data centers.",
    why: "Wiwynn designs and manufactures customized servers for hyperscalers, including GPU-accelerated systems for AI workloads.",
    dependsOn: ["NVIDIA GPUs", "Components"],
    usedBy: ["Hyperscalers", "Cloud providers"],
    bottleneckLevel: "Low",
    modes: ["supply"]
  },

  // ── NVIDIA Hardware — Architectures ───────
  {
    id: "hopper", name: "Hopper", layer: "hardware", type: "GPU Architecture",
    short: "NVIDIA GPU architecture (2022) that powered the H100 and H200 accelerators.",
    why: "Hopper introduced the Transformer Engine and FP8 precision, dramatically accelerating large language model training. It established NVIDIA's position in the generative AI era.",
    dependsOn: ["TSMC 4nm", "HBM3", "CoWoS"],
    usedBy: ["H100", "H200", "AI labs", "Cloud providers"],
    bottleneckLevel: "Low",
    modes: ["product"]
  },
  {
    id: "h100", name: "H100", layer: "hardware", type: "GPU",
    short: "NVIDIA's Hopper-generation data center GPU that became the standard accelerator for AI training.",
    why: "The H100 became the standard accelerator for the generative-AI training wave through 2023&ndash;2024. Its scarcity and pricing shaped the economics of AI infrastructure in that period.",
    dependsOn: ["Hopper", "TSMC", "HBM3", "CoWoS"],
    usedBy: ["Cloud providers", "AI labs", "Enterprises"],
    bottleneckLevel: "Low",
    modes: ["product"]
  },
  {
    id: "h200", name: "H200", layer: "hardware", type: "GPU",
    short: "Updated Hopper GPU with HBM3E memory for improved inference performance.",
    why: "The H200 added more memory bandwidth to the Hopper architecture, specifically targeting large-model inference workloads.",
    dependsOn: ["Hopper", "HBM3E", "TSMC"],
    usedBy: ["Cloud providers", "Inference workloads"],
    bottleneckLevel: "Low",
    modes: ["product"]
  },
  {
    id: "blackwell", name: "Blackwell", layer: "hardware", type: "GPU Architecture",
    short: "NVIDIA GPU architecture (2024) delivering a generational leap in AI training and inference performance.",
    why: "Blackwell introduced a two-die GPU design, second-generation Transformer Engine with FP4, and is designed for trillion-parameter model scale.",
    dependsOn: ["TSMC 4nm", "HBM3E", "CoWoS", "NVLink 5"],
    usedBy: ["B200", "GB200", "GB300", "AI factories"],
    bottleneckLevel: "Medium",
    modes: ["product", "factory"]
  },
  {
    id: "b200", name: "B200", layer: "hardware", type: "GPU",
    short: "NVIDIA Blackwell GPU accelerator for AI training and inference.",
    why: "The B200 is the discrete Blackwell GPU used in HGX and other server configurations for data center AI workloads.",
    dependsOn: ["Blackwell", "TSMC", "HBM3E", "CoWoS"],
    usedBy: ["HGX B200", "Cloud providers", "AI labs"],
    bottleneckLevel: "Medium",
    modes: ["product"]
  },
  {
    id: "gb200", name: "GB200", layer: "hardware", type: "Superchip",
    short: "NVIDIA Grace Blackwell Superchip combining two Blackwell GPUs with a Grace CPU.",
    why: "The GB200 pairs GPU compute with a high-bandwidth CPU on a single board, designed for rack-scale AI systems.",
    dependsOn: ["Blackwell", "Grace CPU", "NVLink", "CoWoS"],
    usedBy: ["GB200 NVL72", "Cloud providers", "AI factories"],
    bottleneckLevel: "Medium",
    modes: ["product", "factory"],
    sources: [{ label: "NVIDIA GB200 NVL72", url: "https://www.nvidia.com/en-us/data-center/gb200-nvl72/" }]
  },
  {
    id: "gb300", name: "GB300", layer: "hardware", type: "Superchip",
    short: "NVIDIA's enhanced Grace Blackwell Ultra Superchip with improved performance.",
    why: "The GB300 builds on GB200 with Blackwell Ultra GPUs, offering higher performance for the most demanding AI workloads.",
    dependsOn: ["Blackwell Ultra", "Grace CPU", "HBM3E"],
    usedBy: ["GB300 NVL72", "Cloud providers"],
    bottleneckLevel: "Medium",
    modes: ["product", "factory"],
    sources: [{ label: "NVIDIA GB300 NVL72", url: "https://www.nvidia.com/en-au/data-center/gb300-nvl72/" }]
  },
  {
    id: "blackwell-ultra", name: "Blackwell Ultra", layer: "hardware", type: "GPU",
    short: "Enhanced Blackwell GPU with increased memory and compute for the most demanding workloads.",
    why: "Blackwell Ultra is positioned as a higher-performance variant of the Blackwell architecture, targeting the largest AI training runs.",
    dependsOn: ["Blackwell", "TSMC", "HBM3E"],
    usedBy: ["GB300", "GB300 NVL72"],
    bottleneckLevel: "Medium",
    modes: ["product"]
  },
  {
    id: "grace-cpu", name: "Grace CPU", layer: "hardware", type: "CPU",
    short: "NVIDIA's Arm-based data center CPU designed for high memory bandwidth and energy efficiency.",
    why: "Grace provides the CPU component of NVIDIA's superchips, offering high bandwidth connectivity to Blackwell GPUs via NVLink-C2C.",
    dependsOn: ["Arm architecture", "TSMC"],
    usedBy: ["GB200", "GB300", "Grace Blackwell Superchip"],
    bottleneckLevel: "Low",
    modes: ["product"]
  },
  {
    id: "grace-blackwell", name: "Grace Blackwell Superchip", layer: "hardware", type: "Superchip",
    short: "Combined Grace CPU and Blackwell GPU connected via NVLink-C2C high-bandwidth interface.",
    why: "The superchip architecture eliminates the PCIe bottleneck between CPU and GPU, enabling unified memory access for AI workloads.",
    dependsOn: ["Grace CPU", "Blackwell", "NVLink-C2C"],
    usedBy: ["DGX", "HGX", "Cloud deployments"],
    bottleneckLevel: "Low",
    modes: ["product"]
  },
  {
    id: "rubin", name: "Rubin", layer: "hardware", type: "GPU Architecture",
    short: "NVIDIA's next-generation GPU architecture following Blackwell, expected to use HBM4.",
    why: "Rubin represents NVIDIA's roadmap continuation, designed for the next scaling step in AI compute with new memory and interconnect technologies.",
    dependsOn: ["TSMC next-gen nodes", "HBM4", "Advanced packaging"],
    usedBy: ["Vera Rubin NVL72", "Future AI systems"],
    bottleneckLevel: "Low",
    modes: ["product"]
  },
  {
    id: "vera-cpu", name: "Vera CPU", layer: "hardware", type: "CPU",
    short: "NVIDIA's next-generation Arm-based CPU designed to pair with Rubin GPUs.",
    why: "Vera continues NVIDIA's strategy of custom CPUs tightly integrated with its GPU architectures for rack-scale AI systems.",
    dependsOn: ["Arm architecture", "TSMC"],
    usedBy: ["Vera Rubin NVL72"],
    bottleneckLevel: "Low",
    modes: ["product"]
  },
  {
    id: "vera-rubin-nvl72", name: "Vera Rubin NVL72", layer: "hardware", type: "Rack System",
    short: "NVIDIA's next-generation rack-scale AI system, pairing Vera CPUs with Rubin GPUs and expected to use HBM4.",
    why: "Vera Rubin NVL72 is the roadmap successor to GB300 NVL72. It defines the AI factory build pipeline of the late decade.",
    takeaway: "Forward-looking. Different CPU, different GPU, different memory generation.",
    commonMisunderstanding: "Vera Rubin NVL72 is not 'next year's GB300.' It pairs a different CPU (Vera) with a different GPU architecture (Rubin), and is expected to use HBM4 instead of HBM3E.",
    nvidiaConnection: {
      type: "self",
      explanation: "Forward-looking. Successor to GB300 NVL72; specifications and shipping windows will firm up as Rubin and HBM4 ramp."
    },
    dependsOn: ["Vera CPU", "Rubin", "HBM4", "NVLink"],
    usedBy: ["Cloud providers", "AI labs", "Sovereign AI"],
    bottleneckLevel: "Low",
    modes: ["product", "factory"],
    sources: [{ label: "NVIDIA Vera Rubin NVL72", url: "https://www.nvidia.com/en-us/data-center/vera-rubin-nvl72/" }]
  },
  {
    id: "dgx", name: "DGX", layer: "hardware", type: "System",
    short: "NVIDIA's integrated AI supercomputer systems, sold as turnkey platforms for AI development.",
    why: "DGX systems are NVIDIA's highest-margin product, combining GPUs, networking, software and support into a reference AI platform.",
    dependsOn: ["Blackwell GPUs", "NVLink", "NVIDIA software stack"],
    usedBy: ["AI labs", "Enterprises", "Research institutions"],
    bottleneckLevel: "Low",
    modes: ["product", "factory"]
  },
  {
    id: "hgx", name: "HGX", layer: "hardware", type: "System",
    short: "NVIDIA's GPU baseboard reference design used by OEMs and cloud providers to build AI servers.",
    why: "HGX provides a standardized multi-GPU board that OEMs customize into their own server products, extending NVIDIA's reach through partners.",
    dependsOn: ["Blackwell GPUs", "NVLink", "NVSwitch"],
    usedBy: ["Dell", "HPE", "Supermicro", "Cloud providers"],
    bottleneckLevel: "Low",
    modes: ["product"]
  },
  {
    id: "mgx", name: "MGX", layer: "hardware", type: "System",
    short: "NVIDIA's modular reference design for building accelerated servers across different GPU and CPU combinations.",
    why: "MGX provides OEMs with a flexible chassis design that can accommodate different accelerator configurations, reducing time to market.",
    dependsOn: ["NVIDIA GPUs", "Grace CPU"],
    usedBy: ["OEM partners", "Enterprise customers"],
    bottleneckLevel: "Low",
    modes: ["product"]
  },
  {
    id: "gb200-nvl72", name: "GB200 NVL72", layer: "hardware", type: "Rack System",
    short: "NVIDIA's first widely deployed rack-scale AI system: 36 Grace Blackwell Superchips, 72 GPUs, all wired by NVLink as one unified accelerator.",
    why: "NVL72 reframes the unit of AI compute from 'a server' to 'a rack.' Trillion-parameter training and the largest inference workloads operate against the rack as a single shared-memory accelerator.",
    takeaway: "Rack-scale AI: 72 GPUs wired as one accelerator.",
    explainLikeImNew: "Imagine 72 GPUs not just bolted into the same building, but wired together by a special fabric (NVLink) so software sees them as a single huge accelerator. Plus liquid cooling, because at this density air can't keep up.",
    commonMisunderstanding: "Not a server and not a single GPU. NVL72 is a rack-scale system whose compute domain is the entire rack, not the box. Operators do not buy 'a GPU' &mdash; they buy a rack.",
    nvidiaConnection: {
      type: "self",
      explanation: "NVIDIA's flagship Blackwell-generation rack-scale system. Defines the AI factory build pipeline through 2025."
    },
    relatedQuestions: ["q-rack-scale-different", "q-liquid-cooling", "q-nvlink-importance", "q-ai-factory", "q-cooling-types", "q-nccl-collectives", "q-cluster-resilience", "q-arm-vs-x86"],
    dependsOn: ["GB200", "NVLink", "NVSwitch", "Liquid cooling"],
    usedBy: ["Cloud providers", "AI labs", "Sovereign AI programs"],
    bottleneckLevel: "Medium",
    modes: ["product", "factory"],
    sources: [{ label: "NVIDIA GB200 NVL72", url: "https://www.nvidia.com/en-us/data-center/gb200-nvl72/" }]
  },
  {
    id: "gb300-nvl72", name: "GB300 NVL72", layer: "hardware", type: "Rack System",
    short: "Higher-performance NVL72 rack built around Grace + Blackwell Ultra superchips, with more on-package memory and higher rack power.",
    why: "GB300 NVL72 is the highest-throughput rack NVIDIA currently ships at scale. Microsoft Azure publicly announced one of the first large-scale GB300 NVL72 clusters for OpenAI workloads.",
    takeaway: "The current ceiling of NVIDIA rack-scale AI deployment.",
    commonMisunderstanding: "GB300 NVL72 is not just 'a faster GB200 NVL72.' It uses Blackwell Ultra GPUs, brings more on-package HBM3E and pushes rack-level power higher &mdash; reshaping cooling and electrical requirements.",
    nvidiaConnection: {
      type: "self",
      explanation: "NVIDIA's current top-of-stack rack system. First-at-scale public deployment is the Azure GB300 NVL72 cluster announced for OpenAI workloads."
    },
    dependsOn: ["GB300", "NVLink", "NVSwitch", "Liquid cooling"],
    usedBy: ["Microsoft Azure", "Cloud providers", "AI labs"],
    bottleneckLevel: "Medium",
    modes: ["product", "factory"],
    sources: [{ label: "NVIDIA GB300 NVL72", url: "https://www.nvidia.com/en-au/data-center/gb300-nvl72/" }]
  },
  {
    id: "rtx-pro", name: "RTX PRO", layer: "hardware", type: "Workstation GPU",
    short: "NVIDIA's professional workstation GPUs for design, engineering and content creation.",
    why: "RTX PRO serves the professional visualization and workstation AI market, extending NVIDIA's reach beyond data centers into enterprise desktops.",
    dependsOn: ["NVIDIA GPU architecture", "TSMC"],
    usedBy: ["Engineers", "Designers", "Content creators"],
    bottleneckLevel: "Low",
    modes: ["product", "endmarkets"]
  },
  {
    id: "geforce-rtx", name: "GeForce RTX", layer: "hardware", type: "Consumer GPU",
    short: "NVIDIA's consumer GPUs for gaming, creation and local AI inference.",
    why: "GeForce remains NVIDIA's highest-volume product line and provides the installed base for consumer AI applications and local model inference.",
    dependsOn: ["NVIDIA GPU architecture", "TSMC"],
    usedBy: ["Gamers", "Creators", "Developers"],
    bottleneckLevel: "Low",
    modes: ["product", "endmarkets"]
  },
  {
    id: "jetson-thor", name: "Jetson Thor", layer: "hardware", type: "Edge AI",
    short: "NVIDIA's next-generation SoC for autonomous machines, humanoid robots and edge AI.",
    why: "Jetson Thor brings data-center-class AI to edge devices. It is designed to be the compute platform for humanoid robots, autonomous vehicles and industrial machines.",
    dependsOn: ["NVIDIA GPU architecture", "Arm CPU", "TSMC"],
    usedBy: ["Robotics companies", "Autonomous vehicles", "Industrial automation"],
    bottleneckLevel: "Low",
    modes: ["product", "endmarkets"],
    sources: [{ label: "NVIDIA Jetson Thor", url: "https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-thor/" }]
  },

  // ── NVIDIA Networking ─────────────────────
  {
    id: "nvlink", name: "NVLink", layer: "networking", type: "Interconnect",
    short: "NVIDIA's proprietary high-bandwidth GPU-to-GPU interconnect &mdash; the fabric that turns N GPUs into one accelerator.",
    why: "NVLink provides the bandwidth that makes multi-GPU and rack-scale training viable. Each generation raises per-link bandwidth to keep pace with growing GPU compute.",
    takeaway: "NVLink is what lets a rack of GPUs behave as one GPU.",
    commonMisunderstanding: "NVLink is neither PCIe nor Ethernet. It is a proprietary high-bandwidth link inside an NVIDIA system, with bandwidth far above what general-purpose buses provide.",
    nvidiaConnection: {
      type: "self",
      explanation: "Proprietary interconnect inside every multi-GPU NVIDIA system. NVLink Fusion is now extending the protocol to partner CPUs and accelerators."
    },
    dependsOn: ["Custom silicon", "Signal integrity engineering"],
    usedBy: ["DGX", "HGX", "NVL72 racks", "All multi-GPU systems"],
    bottleneckLevel: "Medium",
    modes: ["product", "factory"]
  },
  {
    id: "nvswitch", name: "NVSwitch", layer: "networking", type: "Interconnect",
    short: "Custom NVIDIA switch silicon that creates an all-to-all NVLink fabric between every GPU in a node or rack.",
    why: "NVSwitch is what makes 'all GPUs talk to all GPUs simultaneously' actually work. Without it, large-model training stalls on collective operations.",
    takeaway: "If NVLink is the road, NVSwitch is the intersection that lets every rack-mate GPU talk to every other.",
    commonMisunderstanding: "NVSwitch is not a network switch in the Ethernet/InfiniBand sense. It is custom NVIDIA silicon that lives inside the rack, building the NVLink fabric across GPUs.",
    nvidiaConnection: {
      type: "self",
      explanation: "Proprietary NVIDIA switch silicon used inside DGX, HGX and NVL72-class systems."
    },
    dependsOn: ["Custom ASIC design", "TSMC"],
    usedBy: ["DGX", "HGX", "NVL72 racks"],
    bottleneckLevel: "Medium",
    modes: ["product", "factory"]
  },
  {
    id: "spectrum-x", name: "Spectrum-X Ethernet", layer: "networking", type: "Networking",
    short: "NVIDIA's AI-tuned Ethernet platform &mdash; Spectrum switches plus ConnectX SuperNICs designed to behave more like InfiniBand for AI fabrics.",
    why: "Spectrum-X is NVIDIA's bid to win the AI networking layer with Ethernet as well as InfiniBand. Many cloud and enterprise customers prefer Ethernet for operational reasons.",
    takeaway: "Ethernet that has been retuned to behave like an AI fabric, not a generic data-center network.",
    commonMisunderstanding: "Spectrum-X is not 'just Ethernet.' It is a paired switch + SuperNIC platform with AI-specific congestion control and adaptive routing &mdash; closer in behavior to InfiniBand than to a generic Ethernet fabric.",
    nvidiaConnection: {
      type: "self",
      explanation: "NVIDIA-branded networking platform combining Spectrum switch silicon with ConnectX-class SuperNICs."
    },
    dependsOn: ["Spectrum switch silicon", "ConnectX NICs"],
    usedBy: ["Cloud providers", "Enterprise AI clusters"],
    bottleneckLevel: "Low",
    modes: ["product", "factory"]
  },
  {
    id: "quantum-ib", name: "Quantum InfiniBand", layer: "networking", type: "Networking",
    short: "NVIDIA's InfiniBand switch and adapter platform &mdash; the lowest-latency choice for the largest GPU clusters.",
    why: "InfiniBand remains the interconnect of choice for the largest AI training clusters because of low latency and lossless behavior. NVIDIA's Quantum switches and ConnectX adapters define the high end of that story.",
    takeaway: "InfiniBand is the networking; 'Quantum' is just NVIDIA's switch family name.",
    commonMisunderstanding: "The 'Quantum' here has nothing to do with quantum computing. NVIDIA names its InfiniBand switches Quantum &mdash; the technology is classical, not quantum mechanical.",
    nvidiaConnection: {
      type: "self",
      explanation: "InfiniBand platform inherited and extended from the Mellanox acquisition; standard fabric for frontier-scale GPU clusters."
    },
    dependsOn: ["Quantum switch silicon", "ConnectX adapters"],
    usedBy: ["AI labs", "HPC centers", "Large training clusters"],
    bottleneckLevel: "Medium",
    modes: ["product", "factory"]
  },
  {
    id: "connectx", name: "ConnectX SuperNIC", layer: "networking", type: "Networking",
    short: "NVIDIA's network interface card providing high-bandwidth connectivity for AI servers.",
    why: "ConnectX adapters provide the network interface for both InfiniBand and Ethernet AI clusters. The SuperNIC variant adds AI-specific acceleration.",
    dependsOn: ["Custom network silicon"],
    usedBy: ["AI servers", "Cloud providers", "HPC systems"],
    bottleneckLevel: "Low",
    modes: ["product"]
  },
  {
    id: "bluefield-dpu", name: "BlueField DPU", layer: "networking", type: "DPU",
    short: "NVIDIA's Data Processing Unit &mdash; an Arm-based card that takes networking, storage and security work off the host CPU.",
    why: "BlueField gives NVIDIA a foothold inside cloud and enterprise infrastructure layers beyond the GPU itself, and frees host CPUs for actual application work.",
    takeaway: "Not a CPU and not just a NIC. A whole infrastructure layer that used to live on the host.",
    commonMisunderstanding: "BlueField is sometimes lumped together with NICs. It is much more than a NIC: it has its own Arm cores, runs its own software, and offloads infrastructure work that would otherwise burn host CPU cycles.",
    nvidiaConnection: {
      type: "self",
      explanation: "Proprietary NVIDIA DPU family, primarily targeted at cloud providers and enterprise data centers."
    },
    dependsOn: ["Arm cores", "ConnectX networking", "Custom silicon"],
    usedBy: ["Cloud providers", "Enterprise data centers"],
    bottleneckLevel: "Low",
    modes: ["product"]
  },
  {
    id: "nvlink-fusion", name: "NVLink Fusion", layer: "networking", type: "Interconnect",
    short: "Technology enabling NVLink connectivity to third-party CPUs and accelerators.",
    why: "NVLink Fusion extends NVIDIA's interconnect ecosystem beyond its own CPUs, allowing integration with custom silicon and partner processors.",
    dependsOn: ["NVLink protocol", "Partner CPU designs"],
    usedBy: ["Custom silicon projects", "Partner integrations"],
    bottleneckLevel: "Low",
    modes: ["product"]
  },

  // ── NVIDIA Software ───────────────────────
  {
    id: "cuda", name: "CUDA", layer: "software", type: "Software",
    short: "NVIDIA's parallel-computing platform and programming model &mdash; runtime, compilers, primitive libraries, framework hooks, debugging and profiling tools.",
    why: "CUDA is NVIDIA's deepest moat. Nearly two decades of accumulated libraries, kernels and developer mindshare make it costly for customers to leave, and costly for competitors to fully replicate.",
    takeaway: "CUDA is not the chip. It is the ecosystem &mdash; nearly two decades of libraries, not just a runtime.",
    commonMisunderstanding: "CUDA is often described as just a programming language or runtime. The hard part is not the language &mdash; it is the layered ecosystem of optimized libraries, framework integrations and operator coverage that has accumulated since 2007.",
    nvidiaConnection: {
      type: "self",
      explanation: "Proprietary NVIDIA platform. The breadth of CUDA-X libraries, framework support and tooling is the structural reason migration off NVIDIA hardware is slow even where alternatives exist."
    },
    relatedQuestions: ["q-cuda-lockin", "q-rocm-vs-cuda", "q-tensorrt-moat", "q-asics-replacement", "q-pytorch-moat", "q-cuda-vs-triton", "q-cuda-versions", "q-nccl-collectives"],
    dependsOn: ["NVIDIA GPUs"],
    usedBy: ["AI researchers", "ML engineers", "Scientific computing", "Every NVIDIA GPU user"],
    bottleneckLevel: "Critical",
    modes: ["product", "factory"],
    sources: [{ label: "NVIDIA CUDA", url: "https://developer.nvidia.com/cuda" }]
  },
  {
    id: "cuda-x", name: "CUDA-X", layer: "software", type: "Software",
    short: "Collection of GPU-accelerated libraries spanning linear algebra, signal processing, deep learning and more.",
    why: "CUDA-X libraries provide optimized implementations of fundamental operations, so developers get GPU acceleration without writing custom kernels.",
    dependsOn: ["CUDA"],
    usedBy: ["AI frameworks", "Scientific applications", "Data analytics"],
    bottleneckLevel: "Low",
    modes: ["product"]
  },
  {
    id: "cudnn", name: "cuDNN", layer: "software", type: "Software",
    short: "NVIDIA's GPU-accelerated library for deep neural network primitives.",
    why: "cuDNN provides optimized implementations of convolutions, attention, normalization and other core deep learning operations. It underpins virtually all GPU-based AI training.",
    dependsOn: ["CUDA"],
    usedBy: ["PyTorch", "TensorFlow", "AI frameworks"],
    bottleneckLevel: "Low",
    modes: ["product"]
  },
  {
    id: "tensorrt", name: "TensorRT", layer: "software", type: "Software",
    short: "NVIDIA's inference compiler. Takes a trained model and produces an optimized GPU runtime &mdash; layer fusion, precision selection, kernel selection.",
    why: "TensorRT is one of the levers that drives NVIDIA's tokens-per-watt story for inference. The same model can run dramatically faster on the same GPU once it is compiled with TensorRT.",
    takeaway: "Not a model. Not a framework. A compiler that turns a trained model into the most efficient possible GPU runtime.",
    commonMisunderstanding: "TensorRT is not an alternative to PyTorch or TensorFlow. It takes a trained model out of one of those frameworks and compiles it for inference deployment.",
    nvidiaConnection: {
      type: "self",
      explanation: "Proprietary inference compiler. Underpins NVIDIA NIM and is bundled with NVIDIA AI Enterprise."
    },
    dependsOn: ["CUDA", "NVIDIA GPUs"],
    usedBy: ["Cloud inference", "Edge deployment", "Autonomous vehicles"],
    bottleneckLevel: "Low",
    modes: ["product", "factory"]
  },
  {
    id: "triton-inference", name: "Triton Inference Server", layer: "software", type: "Software",
    short: "NVIDIA's open-source inference server. Handles batching, scheduling and serving across GPU types and frameworks.",
    why: "Triton standardizes how AI models are served in production on NVIDIA infrastructure. It sits underneath NIM and is one of the building blocks of AI Enterprise.",
    takeaway: "The production server for shipping models, not a framework for building them.",
    commonMisunderstanding: "Don't confuse Triton Inference Server with OpenAI's Triton compiler. They are unrelated projects with the same name &mdash; one serves inference, the other compiles GPU kernels.",
    nvidiaConnection: {
      type: "self",
      explanation: "NVIDIA-led open-source inference server. Bundled with NIM and AI Enterprise; supports models across frameworks and accelerators."
    },
    dependsOn: ["CUDA", "TensorRT"],
    usedBy: ["Cloud providers", "Enterprise AI deployments"],
    bottleneckLevel: "Low",
    modes: ["product", "factory"]
  },
  {
    id: "nvidia-nim", name: "NVIDIA NIM", layer: "software", type: "Software",
    short: "Containerized inference microservices that wrap AI models with optimized runtimes (TensorRT, Triton) and a stable API.",
    why: "NIM packages the inference stack so an enterprise developer doesn't have to assemble TensorRT, Triton and a runtime from scratch. It is one of NVIDIA's enterprise-monetization paths.",
    takeaway: "A NIM is not a model. It is a packaged microservice that wraps a model with optimized inference and a stable API.",
    commonMisunderstanding: "NIM is sometimes described as 'NVIDIA's model.' It is a deployment format, not a model. The model inside a NIM may come from NVIDIA, an open-source community or a partner.",
    nvidiaConnection: {
      type: "self",
      explanation: "Distributed via NVIDIA AI Enterprise. Built on Triton and TensorRT internally."
    },
    dependsOn: ["TensorRT", "Triton", "NVIDIA GPUs"],
    usedBy: ["Enterprise developers", "Cloud providers", "ISVs"],
    bottleneckLevel: "Low",
    modes: ["product", "endmarkets"]
  },
  {
    id: "nemo", name: "NeMo", layer: "software", type: "Software",
    short: "NVIDIA's framework for training, customizing and deploying large language and multimodal models on NVIDIA infrastructure.",
    why: "NeMo is NVIDIA's enterprise path for owning models, not just renting them. It covers training, customization, RAG (NeMo Retriever) and data prep (NeMo Curator).",
    takeaway: "NeMo is the build-your-own-model toolkit on the NVIDIA stack.",
    commonMisunderstanding: "NeMo is not just an LLM library. It increasingly covers multimodal training, retrieval-augmented generation and data curation pipelines, with NeMo Retriever and NeMo Curator as named subsystems.",
    nvidiaConnection: {
      type: "self",
      explanation: "Proprietary NVIDIA framework. Bundled with AI Enterprise; designed for customers training or customizing models on NVIDIA GPUs."
    },
    dependsOn: ["CUDA", "NVIDIA GPUs", "Distributed training"],
    usedBy: ["Enterprise AI teams", "AI researchers"],
    bottleneckLevel: "Low",
    modes: ["product"]
  },
  {
    id: "nemo-retriever", name: "NeMo Retriever", layer: "software", type: "Software",
    short: "NVIDIA's retrieval-augmented generation (RAG) framework for grounding AI responses in enterprise data.",
    why: "RAG is how enterprises connect foundation models to their proprietary data. NeMo Retriever provides optimized retrieval pipelines on NVIDIA infrastructure.",
    dependsOn: ["NeMo", "NVIDIA GPUs"],
    usedBy: ["Enterprise AI applications"],
    bottleneckLevel: "Low",
    modes: ["product", "endmarkets"]
  },
  {
    id: "nemo-curator", name: "NeMo Curator", layer: "software", type: "Software",
    short: "GPU-accelerated data curation pipeline for preparing large-scale AI training datasets.",
    why: "Data quality is critical for model performance. NeMo Curator provides scalable tools for deduplication, filtering and quality scoring of training data.",
    dependsOn: ["CUDA", "NVIDIA GPUs"],
    usedBy: ["AI labs", "Enterprise AI teams"],
    bottleneckLevel: "Low",
    modes: ["product"]
  },
  {
    id: "ai-enterprise", name: "NVIDIA AI Enterprise", layer: "software", type: "Platform Software",
    short: "NVIDIA's enterprise software suite for developing and deploying AI applications in production.",
    why: "AI Enterprise packages NVIDIA's AI software stack with enterprise support, security and lifecycle management, turning it into a recurring software revenue stream.",
    dependsOn: ["CUDA", "NIM", "NeMo", "Triton"],
    usedBy: ["Enterprises", "ISVs", "Cloud providers"],
    bottleneckLevel: "Low",
    modes: ["product", "endmarkets"],
    sources: [{ label: "NVIDIA AI Enterprise", url: "https://www.nvidia.com/en-au/data-center/products/ai-enterprise/" }]
  },
  {
    id: "ngc", name: "NGC", layer: "software", type: "Software",
    short: "NVIDIA's catalog of GPU-optimized containers, models and SDKs.",
    why: "NGC provides a curated repository of pre-built, tested containers and models that accelerate AI development on NVIDIA platforms.",
    dependsOn: ["CUDA", "Container ecosystem"],
    usedBy: ["AI developers", "Enterprise teams"],
    bottleneckLevel: "Low",
    modes: ["product"]
  },
  {
    id: "omniverse", name: "Omniverse", layer: "software", type: "Platform Software",
    short: "NVIDIA's platform for industrial digital twins and 3D simulation, built around the OpenUSD scene format.",
    why: "Omniverse connects 3D design and simulation tools into a shared environment. It anchors NVIDIA's industrial and robotics narrative beyond AI training.",
    takeaway: "Industrial digital twins, GPU-accelerated &mdash; not a 'metaverse.'",
    commonMisunderstanding: "Omniverse is not a consumer metaverse product. It is industrial simulation infrastructure used by manufacturers, automotive OEMs and roboticists, built around the OpenUSD format.",
    nvidiaConnection: {
      type: "self",
      explanation: "Proprietary NVIDIA platform; integrated into Isaac (robotics), DRIVE (autonomous vehicles) and Cosmos (synthetic data)."
    },
    dependsOn: ["NVIDIA GPUs", "USD format", "RTX rendering"],
    usedBy: ["Manufacturers", "Architects", "Autonomous vehicle companies", "Robotics"],
    bottleneckLevel: "Low",
    modes: ["product", "endmarkets"],
    sources: [{ label: "NVIDIA Omniverse", url: "https://www.nvidia.com/en-us/omniverse/" }]
  },
  {
    id: "isaac", name: "Isaac", layer: "software", type: "Platform Software",
    short: "NVIDIA's robotics platform &mdash; simulation, perception, manipulation and navigation tools for the full sim-to-real stack.",
    why: "Isaac is how NVIDIA positions itself as the platform for the coming wave of physical AI &mdash; humanoids, warehouse automation, industrial robotics. Training in sim, deploying on Jetson hardware.",
    takeaway: "The sim-to-real toolkit for the physical-AI wave.",
    commonMisunderstanding: "Isaac is not a single robotics product. It is a stack of components: Isaac Sim (simulation, on Omniverse), Isaac ROS (robotics middleware), Isaac Manipulator and Isaac Perceptor (capability stacks), and reference workflows that target Jetson edge hardware.",
    nvidiaConnection: {
      type: "self",
      explanation: "Proprietary NVIDIA platform. Tied to Omniverse for simulation and to Jetson for on-robot inference."
    },
    dependsOn: ["CUDA", "Omniverse", "Jetson"],
    usedBy: ["Robotics companies", "Warehouse automation", "Humanoid robot developers"],
    bottleneckLevel: "Low",
    modes: ["product", "endmarkets"],
    sources: [{ label: "NVIDIA Isaac", url: "https://developer.nvidia.com/isaac" }]
  },
  {
    id: "drive", name: "DRIVE", layer: "software", type: "Platform Software",
    short: "NVIDIA's end-to-end platform for autonomous vehicle development.",
    why: "DRIVE provides the simulation, training and in-vehicle compute platform for autonomous driving, from data center training to edge deployment.",
    dependsOn: ["CUDA", "Omniverse", "NVIDIA GPUs", "Jetson/DRIVE hardware"],
    usedBy: ["Automotive OEMs", "Autonomous vehicle companies"],
    bottleneckLevel: "Low",
    modes: ["product", "endmarkets"]
  },
  {
    id: "clara", name: "Clara", layer: "software", type: "Platform Software",
    short: "NVIDIA's platform for AI-powered healthcare and medical imaging.",
    why: "Clara provides GPU-accelerated tools for medical imaging, genomics and drug discovery, connecting NVIDIA hardware to the healthcare industry.",
    dependsOn: ["CUDA", "NVIDIA GPUs"],
    usedBy: ["Hospitals", "Medical device companies", "Pharmaceutical companies"],
    bottleneckLevel: "Low",
    modes: ["product", "endmarkets"]
  },
  {
    id: "bionemo", name: "BioNeMo", layer: "software", type: "Platform Software",
    short: "NVIDIA's platform for generative AI in drug discovery and molecular design.",
    why: "BioNeMo provides pre-trained models and frameworks for protein structure prediction, molecular generation and virtual screening on GPU infrastructure.",
    dependsOn: ["CUDA", "NeMo", "NVIDIA GPUs"],
    usedBy: ["Pharmaceutical companies", "Biotech startups", "Research labs"],
    bottleneckLevel: "Low",
    modes: ["product", "endmarkets"]
  },
  {
    id: "cosmos", name: "Cosmos", layer: "software", type: "Platform Software",
    short: "NVIDIA's portfolio of world foundation models for synthetic data and physically plausible scene generation.",
    why: "Robotics and AV programs need huge amounts of training data. Cosmos generates physically plausible synthetic scenes that augment real-world data and accelerate sim-to-real workflows.",
    takeaway: "Synthetic-world models for robotics and autonomy &mdash; data, not a single video model.",
    commonMisunderstanding: "Cosmos is not a single video-generation model. It is a portfolio of world foundation models intended for synthetic data generation, physically plausible scene simulation and downstream robotics/AV training.",
    nvidiaConnection: {
      type: "self",
      explanation: "Proprietary NVIDIA model portfolio. Integrates with Omniverse and Isaac for downstream training pipelines."
    },
    dependsOn: ["CUDA", "Omniverse", "NVIDIA GPUs"],
    usedBy: ["Robotics companies", "Autonomous vehicle developers"],
    bottleneckLevel: "Low",
    modes: ["product", "endmarkets"],
    sources: [{ label: "NVIDIA Cosmos", url: "https://www.nvidia.com/en-us/ai/cosmos/" }]
  },
  {
    id: "dgx-cloud", name: "DGX Cloud", layer: "software", type: "Cloud Service",
    short: "NVIDIA's cloud service providing DGX-class AI infrastructure through partner cloud providers.",
    why: "DGX Cloud gives enterprises access to NVIDIA's latest AI infrastructure without owning hardware, delivered through Azure, GCP, Oracle Cloud and others.",
    dependsOn: ["DGX systems", "Cloud providers", "NVIDIA software stack"],
    usedBy: ["Enterprises", "AI startups", "Research institutions"],
    bottleneckLevel: "Low",
    modes: ["product", "endmarkets"]
  },

  // ── Cloud & OEM Partners ──────────────────
  {
    id: "microsoft-azure", name: "Microsoft Azure", layer: "cloud", type: "Cloud",
    short: "Microsoft's cloud platform and one of the largest deployers of NVIDIA GPU infrastructure.",
    why: "Azure has been among the first to deploy NVIDIA's latest systems at scale, including GB300 NVL72 racks for OpenAI workloads.",
    dependsOn: ["NVIDIA GPUs", "Networking", "Data center infrastructure"],
    usedBy: ["OpenAI", "Enterprises", "Developers"],
    bottleneckLevel: "Low",
    modes: ["supply", "factory", "endmarkets"],
    sources: [{ label: "Azure GB300 NVL72", url: "https://azure.microsoft.com/en-us/blog/microsoft-azure-delivers-the-first-large-scale-cluster-with-nvidia-gb300-nvl72-for-openai-workloads/" }]
  },
  {
    id: "aws", name: "AWS", layer: "cloud", type: "Cloud",
    short: "Amazon's cloud platform offering NVIDIA GPU instances alongside its own custom silicon.",
    why: "AWS provides both NVIDIA-based instances and its own Trainium/Inferentia accelerators, giving customers choice while being a major NVIDIA customer.",
    dependsOn: ["NVIDIA GPUs", "Networking", "Data center infrastructure"],
    usedBy: ["AI startups", "Enterprises", "Researchers"],
    bottleneckLevel: "Low",
    modes: ["supply", "factory", "endmarkets"],
    sources: [{ label: "AWS P6 Instances", url: "https://aws.amazon.com/ec2/instance-types/p6/" }]
  },
  {
    id: "google-cloud", name: "Google Cloud", layer: "cloud", type: "Cloud",
    short: "Google's cloud platform offering NVIDIA GPUs and its own TPU accelerators.",
    why: "Google Cloud deploys NVIDIA GPUs for customer workloads while developing TPUs for internal and external use, making it both customer and competitor.",
    dependsOn: ["NVIDIA GPUs", "Networking", "Data center infrastructure"],
    usedBy: ["AI companies", "Enterprises", "Researchers"],
    bottleneckLevel: "Low",
    modes: ["supply", "factory", "endmarkets"],
    sources: [{ label: "Google Cloud A4X VMs", url: "https://cloud.google.com/blog/products/compute/new-a4x-vms-powered-by-nvidia-gb200-gpus" }]
  },
  {
    id: "oracle-cloud", name: "Oracle Cloud", layer: "cloud", type: "Cloud",
    short: "Oracle's cloud infrastructure with large-scale NVIDIA GPU clusters.",
    why: "Oracle Cloud has invested heavily in GPU infrastructure, building some of the largest NVIDIA GPU clusters available to customers.",
    dependsOn: ["NVIDIA GPUs", "RDMA networking"],
    usedBy: ["AI companies", "Enterprises"],
    bottleneckLevel: "Low",
    modes: ["supply", "endmarkets"]
  },
  {
    id: "coreweave", name: "CoreWeave", layer: "cloud", type: "Cloud",
    short: "GPU-specialized cloud provider focused on AI and high-performance computing workloads.",
    why: "CoreWeave is among the largest GPU cloud providers outside the hyperscalers, purpose-built for AI workloads with NVIDIA infrastructure.",
    dependsOn: ["NVIDIA GPUs", "Networking", "Data center capacity"],
    usedBy: ["AI labs", "AI startups", "Media companies"],
    bottleneckLevel: "Low",
    modes: ["supply", "endmarkets"]
  },
  {
    id: "lambda", name: "Lambda", layer: "cloud", type: "Cloud",
    short: "Cloud provider and workstation vendor specializing in NVIDIA GPU infrastructure for AI.",
    why: "Lambda offers both on-premises GPU servers and cloud GPU instances optimized for machine learning researchers and teams.",
    dependsOn: ["NVIDIA GPUs"],
    usedBy: ["AI researchers", "ML teams"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  },
  {
    id: "crusoe", name: "Crusoe", layer: "cloud", type: "Cloud",
    short: "Cloud infrastructure company focused on climate-aligned AI compute powered by clean energy.",
    why: "Crusoe positions itself as a sustainable AI cloud provider, using stranded or renewable energy sources to power GPU clusters.",
    dependsOn: ["NVIDIA GPUs", "Clean energy sources"],
    usedBy: ["AI companies seeking sustainable compute"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  },
  {
    id: "nebius", name: "Nebius", layer: "cloud", type: "Cloud",
    short: "AI-focused cloud platform offering large-scale NVIDIA GPU infrastructure.",
    why: "Nebius is building GPU cloud capacity in multiple regions, adding to the global supply of available NVIDIA compute.",
    dependsOn: ["NVIDIA GPUs", "Data center infrastructure"],
    usedBy: ["AI companies", "Researchers"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  },
  {
    id: "dell", name: "Dell", layer: "cloud", type: "OEM",
    short: "Enterprise technology provider building AI servers and infrastructure on NVIDIA platforms.",
    why: "Dell integrates NVIDIA GPUs into its PowerEdge server line and positions its AI Factory with NVIDIA offering for enterprise customers.",
    dependsOn: ["NVIDIA GPUs", "HGX baseboards", "Networking"],
    usedBy: ["Enterprises", "Service providers", "Government"],
    bottleneckLevel: "Low",
    modes: ["supply", "endmarkets"],
    sources: [{ label: "Dell AI Factory with NVIDIA", url: "https://www.dell.com/en-au/lp/dt/nvidia-ai" }]
  },
  {
    id: "hpe", name: "HPE", layer: "cloud", type: "OEM",
    short: "Hewlett Packard Enterprise, building AI and HPC systems on NVIDIA platforms.",
    why: "HPE integrates NVIDIA technology into its Cray supercomputers and ProLiant servers, serving both enterprise and government AI deployments.",
    dependsOn: ["NVIDIA GPUs", "Networking"],
    usedBy: ["Enterprises", "Government", "Research labs"],
    bottleneckLevel: "Low",
    modes: ["supply", "endmarkets"]
  },
  {
    id: "lenovo", name: "Lenovo", layer: "cloud", type: "OEM",
    short: "Global IT provider building AI-optimized servers and workstations on NVIDIA platforms.",
    why: "Lenovo delivers NVIDIA-based systems through its ThinkSystem server line to enterprise and research customers worldwide.",
    dependsOn: ["NVIDIA GPUs", "Components"],
    usedBy: ["Enterprises", "Research institutions"],
    bottleneckLevel: "Low",
    modes: ["supply"]
  },
  {
    id: "supermicro", name: "Supermicro", layer: "cloud", type: "OEM",
    short: "Server manufacturer specializing in high-performance GPU systems for AI and data center workloads.",
    why: "Supermicro is a major builder of NVIDIA GPU servers, known for rapid adoption of new NVIDIA platforms and liquid cooling solutions.",
    dependsOn: ["NVIDIA GPUs", "Networking", "Cooling systems"],
    usedBy: ["Cloud providers", "AI companies", "Enterprises"],
    bottleneckLevel: "Low",
    modes: ["supply", "factory"],
    sources: [{ label: "Supermicro NVIDIA Systems", url: "https://www.supermicro.com/en/accelerators/nvidia" }]
  },
  {
    id: "cisco", name: "Cisco", layer: "cloud", type: "OEM",
    short: "Networking and infrastructure company integrating NVIDIA technology into its data center offerings.",
    why: "Cisco provides the broader data center networking fabric that connects NVIDIA GPU clusters, and integrates NVIDIA GPUs into its compute products.",
    dependsOn: ["NVIDIA GPUs", "Networking technology"],
    usedBy: ["Enterprises", "Service providers"],
    bottleneckLevel: "Low",
    modes: ["supply"]
  },
  {
    id: "asus", name: "ASUS", layer: "cloud", type: "OEM",
    short: "Electronics manufacturer building NVIDIA-based servers, workstations and consumer GPUs.",
    why: "ASUS produces NVIDIA GPU products across consumer, professional and data center segments.",
    dependsOn: ["NVIDIA GPUs"],
    usedBy: ["Consumers", "Professionals", "Enterprises"],
    bottleneckLevel: "Low",
    modes: ["supply"]
  },
  {
    id: "gigabyte", name: "Gigabyte", layer: "cloud", type: "OEM",
    short: "Hardware manufacturer building NVIDIA-based servers, motherboards and GPUs.",
    why: "Gigabyte produces GPU server systems and consumer graphics cards, serving both data center and consumer markets.",
    dependsOn: ["NVIDIA GPUs"],
    usedBy: ["Data centers", "Consumers"],
    bottleneckLevel: "Low",
    modes: ["supply"]
  },

  // ── Quantum-Classical Computing ───────────
  {
    id: "cuda-q", name: "CUDA-Q", layer: "quantum", type: "Quantum",
    short: "NVIDIA's open-source programming platform for hybrid quantum-classical workflows that span QPUs and GPU clusters.",
    why: "CUDA-Q ties quantum hardware vendors into NVIDIA's GPU ecosystem rather than competing with it. Hybrid algorithms run a classical optimizer on GPUs and call into a QPU for quantum subroutines.",
    takeaway: "CUDA-Q is not a quantum computer. It is the language hybrid quantum-classical programs are written in.",
    commonMisunderstanding: "CUDA-Q is not a quantum computer and not a quantum simulator on its own. It is a programming framework whose programs run partly on GPUs and partly on connected QPUs.",
    nvidiaConnection: {
      type: "self",
      explanation: "Proprietary NVIDIA platform. Pairs with NVQLink for hardware integration and runs on standard CUDA GPU clusters."
    },
    dependsOn: ["CUDA", "NVIDIA GPUs", "Quantum hardware partners"],
    usedBy: ["Quantum researchers", "National labs", "Pharmaceutical companies"],
    bottleneckLevel: "Low",
    modes: ["quantum"],
    sources: [{ label: "NVIDIA CUDA-Q", url: "https://developer.nvidia.com/cuda-q" }]
  },
  {
    id: "nvqlink", name: "NVQLink", layer: "quantum", type: "Quantum",
    short: "A high-speed interconnect specification that wires QPUs into NVIDIA GPU clusters for tight hybrid loops.",
    why: "Without something like NVQLink, every quantum-classical exchange has to traverse a slow classical network. NVQLink is NVIDIA's hardware claim to be the substrate that quantum hardware plugs into.",
    takeaway: "Not just a cable. The hardware bridge between QPUs and GPU clusters.",
    commonMisunderstanding: "NVQLink is not a single physical product. It is an interface specification + reference setup that lets QPUs feed and be fed by GPU clusters with low enough latency to support real hybrid workflows.",
    nvidiaConnection: {
      type: "self",
      explanation: "NVIDIA-led specification. Tied to CUDA-Q on the software side and to DGX Quantum / NVAQC reference systems on the hardware side."
    },
    dependsOn: ["Quantum processor interface", "GPU systems"],
    usedBy: ["Quantum hardware companies", "Research labs"],
    bottleneckLevel: "Low",
    modes: ["quantum"],
    sources: [{ label: "NVIDIA NVQLink", url: "https://www.nvidia.com/en-us/solutions/quantum-computing/nvqlink/" }]
  },
  {
    id: "dgx-quantum", name: "DGX Quantum", layer: "quantum", type: "Quantum",
    short: "NVIDIA's reference system combining a quantum processing unit with DGX GPU computing.",
    why: "DGX Quantum demonstrates how quantum processors can be tightly integrated with GPU systems for hybrid quantum-classical computation.",
    dependsOn: ["DGX", "Quantum processor", "CUDA-Q"],
    usedBy: ["Quantum research labs", "National labs"],
    bottleneckLevel: "Low",
    modes: ["quantum"]
  },
  {
    id: "nvidia-quantum-cloud", name: "NVIDIA Quantum Cloud", layer: "quantum", type: "Quantum",
    short: "Cloud service providing access to GPU-accelerated quantum circuit simulation and emulation.",
    why: "Quantum Cloud allows researchers to simulate quantum circuits on GPUs at scale, enabling development before quantum hardware is available.",
    dependsOn: ["CUDA-Q", "NVIDIA GPUs", "Cloud infrastructure"],
    usedBy: ["Quantum developers", "Researchers"],
    bottleneckLevel: "Low",
    modes: ["quantum"]
  },
  {
    id: "nvaqc", name: "NVAQC", layer: "quantum", type: "Quantum",
    short: "NVIDIA Accelerated Quantum Center — a facility connecting multiple quantum computers to GPU clusters.",
    why: "NVAQC provides a physical facility where quantum hardware from multiple vendors connects to NVIDIA GPU systems for hybrid research.",
    dependsOn: ["NVQLink", "CUDA-Q", "GPU clusters"],
    usedBy: ["Quantum hardware partners", "Research institutions"],
    bottleneckLevel: "Low",
    modes: ["quantum"],
    sources: [{ label: "NVIDIA Accelerated Quantum Center", url: "https://www.nvidia.com/en-us/solutions/quantum-computing/accelerated-quantum-center/" }]
  },
  {
    id: "qpu", name: "Quantum Processing Unit", layer: "quantum", type: "Quantum",
    short: "The physical quantum processor that manipulates qubits to perform quantum computations.",
    why: "QPUs from companies like IBM, Google, IonQ and Quantinuum provide the quantum hardware that NVIDIA's platform connects to classical GPU accelerators.",
    dependsOn: ["Cryogenic systems", "Quantum fabrication"],
    usedBy: ["CUDA-Q", "DGX Quantum", "Quantum researchers"],
    bottleneckLevel: "Medium",
    modes: ["quantum"]
  },
  {
    id: "quantum-controller", name: "Quantum Controller", layer: "quantum", type: "Quantum",
    short: "Classical electronics that generate and measure the signals controlling quantum bits.",
    why: "Quantum controllers bridge the digital classical world and the analog quantum world. Their speed and fidelity limit quantum circuit execution quality.",
    dependsOn: ["Signal processing hardware", "Cryogenic interfaces"],
    usedBy: ["QPU operation", "Quantum experiments"],
    bottleneckLevel: "Medium",
    modes: ["quantum"]
  },
  {
    id: "quantum-error-correction", name: "Quantum Error Correction", layer: "quantum", type: "Quantum",
    short: "Encoding logical qubits across many physical qubits to suppress noise and decoherence.",
    why: "Without scalable error correction, quantum hardware cannot execute the deep circuits needed for advantage over GPU clusters. QEC is the gating engineering challenge for quantum's commercial trajectory.",
    takeaway: "Not a software bug-fix. The hardware-economics challenge that gates useful quantum.",
    commonMisunderstanding: "QEC is not a software trick that runs on top of any quantum machine. It is a hardware-economics problem &mdash; one usable logical qubit costs many physical qubits, and reducing that overhead is the open challenge.",
    nvidiaConnection: {
      type: "adjacent",
      explanation: "GPU clusters running CUDA-Q increasingly accelerate the classical decoding work that error-corrected quantum systems require. This is one of the clearest places where quantum and GPU compute are tightly coupled."
    },
    dependsOn: ["QPU", "Classical compute for decoding"],
    usedBy: ["Quantum computing roadmaps", "Fault-tolerant quantum computing"],
    bottleneckLevel: "Critical",
    modes: ["quantum"]
  },
  {
    id: "hybrid-algorithms", name: "Hybrid Quantum-Classical Algorithms", layer: "quantum", type: "Quantum",
    short: "Algorithms that split computation between quantum processors and classical GPUs.",
    why: "Near-term quantum advantage likely requires hybrid approaches where GPUs handle classical optimization while QPUs perform quantum subroutines.",
    dependsOn: ["CUDA-Q", "QPU", "GPU compute"],
    usedBy: ["Quantum researchers", "Chemistry and optimization applications"],
    bottleneckLevel: "Low",
    modes: ["quantum"]
  },
  {
    id: "quantum-simulation", name: "Quantum Simulation", layer: "quantum", type: "Quantum",
    short: "Using quantum or GPU-simulated quantum systems to model quantum phenomena.",
    why: "Quantum simulation is one of the most promising near-term applications, modelling molecular and material behaviour that is intractable for classical computers alone.",
    dependsOn: ["CUDA-Q", "QPU or GPU emulation"],
    usedBy: ["Materials scientists", "Chemists", "Physicists"],
    bottleneckLevel: "Low",
    modes: ["quantum", "endmarkets"]
  },
  {
    id: "quantum-chemistry", name: "Quantum Chemistry", layer: "quantum", type: "Quantum",
    short: "Using quantum computing to simulate molecular structures and chemical reactions.",
    why: "Quantum chemistry is a key application domain where quantum computers may provide exponential speedup over classical methods for drug discovery and materials design.",
    dependsOn: ["CUDA-Q", "QPU", "Molecular simulation frameworks"],
    usedBy: ["Pharmaceutical companies", "Materials scientists"],
    bottleneckLevel: "Low",
    modes: ["quantum", "endmarkets"]
  },
  {
    id: "quantum-optimization", name: "Optimization", layer: "quantum", type: "Quantum",
    short: "Using quantum algorithms to solve combinatorial optimization problems.",
    why: "Optimization problems in logistics, finance and scheduling are candidates for quantum advantage, though classical heuristics remain strong competitors.",
    dependsOn: ["CUDA-Q", "QPU", "Hybrid algorithms"],
    usedBy: ["Logistics companies", "Financial institutions"],
    bottleneckLevel: "Low",
    modes: ["quantum", "endmarkets"]
  },

  // ── End Markets ───────────────────────────
  {
    id: "frontier-ai-labs", name: "Frontier AI Labs", layer: "endmarket", type: "End Market",
    short: "Organizations training the largest and most capable AI models.",
    why: "Frontier labs (OpenAI, Google DeepMind, Anthropic, Meta AI, xAI and others) are the largest consumers of NVIDIA GPU infrastructure and drive demand for each new generation.",
    dependsOn: ["NVIDIA GPUs", "Cloud infrastructure", "Power"],
    usedBy: ["Products and APIs used by millions"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  },
  {
    id: "cloud-inference", name: "Cloud Inference", layer: "endmarket", type: "End Market",
    short: "Running trained AI models to serve predictions and generate content at scale.",
    why: "Inference is becoming the majority of AI compute demand. As AI models are deployed to millions of users, inference economics drive GPU purchasing decisions.",
    dependsOn: ["NVIDIA GPUs", "TensorRT", "Triton", "NIM"],
    usedBy: ["API providers", "SaaS companies", "Consumer AI products"],
    bottleneckLevel: "Low",
    modes: ["endmarkets", "factory"]
  },
  {
    id: "enterprise-ai", name: "Enterprise AI", layer: "endmarket", type: "End Market",
    short: "AI adoption within large organizations for business operations and decision-making.",
    why: "Enterprise AI is a large growth market for NVIDIA, driven by RAG applications, fine-tuned models and AI-powered business processes.",
    dependsOn: ["NVIDIA AI Enterprise", "NIM", "Cloud providers"],
    usedBy: ["Fortune 500 companies", "Government agencies"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  },
  {
    id: "sovereign-ai", name: "Sovereign AI", layer: "endmarket", type: "End Market",
    short: "National AI infrastructure programs built to ensure domestic compute capacity and data sovereignty.",
    why: "Countries are investing in domestic AI infrastructure to reduce dependence on foreign cloud providers and retain control of sensitive data and models.",
    dependsOn: ["NVIDIA systems", "Local data centers", "Government funding"],
    usedBy: ["National governments", "State-backed AI initiatives"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  },
  {
    id: "robotics", name: "Robotics", layer: "endmarket", type: "End Market",
    short: "Autonomous robots for manufacturing, logistics, agriculture and service applications.",
    why: "NVIDIA positions robotics as the next major platform after smartphones and PCs. Isaac, Omniverse and Jetson form a full stack for robot development.",
    dependsOn: ["Isaac", "Omniverse", "Jetson Thor", "NVIDIA GPUs"],
    usedBy: ["Robot manufacturers", "Logistics companies", "Agriculture"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  },
  {
    id: "humanoid-robots", name: "Humanoid Robots", layer: "endmarket", type: "End Market",
    short: "General-purpose humanoid robots for manufacturing, logistics and service tasks.",
    why: "Humanoid robots represent a new computing platform that requires AI training in simulation, real-time inference on edge hardware, and continuous learning.",
    dependsOn: ["Jetson Thor", "Isaac", "Cosmos", "Omniverse"],
    usedBy: ["Tesla Bot", "Figure", "Agility Robotics", "1X"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  },
  {
    id: "autonomous-vehicles", name: "Autonomous Vehicles", layer: "endmarket", type: "End Market",
    short: "Self-driving vehicles for passenger transport, trucking and delivery.",
    why: "Autonomous driving requires massive AI training in simulation (Omniverse/Cosmos) and real-time inference on vehicle hardware (DRIVE/Jetson).",
    dependsOn: ["DRIVE", "Omniverse", "NVIDIA GPUs", "Jetson"],
    usedBy: ["Automotive OEMs", "Robotaxi companies", "Trucking companies"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  },
  {
    id: "healthcare-ai", name: "Healthcare AI", layer: "endmarket", type: "End Market",
    short: "AI applications in medical imaging, diagnostics, clinical decision support and hospital operations.",
    why: "Healthcare represents a large addressable market for GPU-accelerated AI, with applications from radiology to surgical robotics.",
    dependsOn: ["Clara", "NVIDIA GPUs", "Medical datasets"],
    usedBy: ["Hospitals", "Medical device companies", "Health systems"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  },
  {
    id: "drug-discovery", name: "Drug Discovery", layer: "endmarket", type: "End Market",
    short: "AI-accelerated identification and design of new pharmaceutical compounds.",
    why: "GPU-accelerated molecular simulation and generative chemistry can dramatically reduce the time and cost of discovering new drug candidates.",
    dependsOn: ["BioNeMo", "NVIDIA GPUs", "Molecular simulation"],
    usedBy: ["Pharmaceutical companies", "Biotech startups"],
    bottleneckLevel: "Low",
    modes: ["endmarkets", "quantum"]
  },
  {
    id: "scientific-computing", name: "Scientific Computing", layer: "endmarket", type: "End Market",
    short: "GPU-accelerated computation for physics, chemistry, biology, astronomy and earth science.",
    why: "Scientific computing was NVIDIA's first accelerated computing market. HPC centers worldwide use NVIDIA GPUs for simulation and data analysis.",
    dependsOn: ["CUDA", "NVIDIA GPUs", "HPC software"],
    usedBy: ["National labs", "Universities", "Research institutions"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  },
  {
    id: "weather-climate", name: "Weather & Climate Modelling", layer: "endmarket", type: "End Market",
    short: "AI and GPU-accelerated weather prediction and climate simulation.",
    why: "GPU-accelerated weather models can provide faster and more accurate forecasts. Climate modelling requires massive compute for long-duration simulations.",
    dependsOn: ["NVIDIA GPUs", "CUDA", "Earth-2 platform"],
    usedBy: ["Weather services", "Climate researchers", "Insurance companies"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  },
  {
    id: "digital-twins", name: "Industrial Digital Twins", layer: "endmarket", type: "End Market",
    short: "Virtual replicas of physical facilities used for simulation, monitoring and optimization.",
    why: "Omniverse enables manufacturers to build digital twins of factories and supply chains, optimizing operations before making physical changes.",
    dependsOn: ["Omniverse", "NVIDIA GPUs", "Sensor data"],
    usedBy: ["Manufacturers", "Energy companies", "Infrastructure operators"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  },
  {
    id: "manufacturing-automation", name: "Manufacturing Automation", layer: "endmarket", type: "End Market",
    short: "AI-driven automation of manufacturing processes including inspection, assembly and logistics.",
    why: "GPU-accelerated vision and robotics enable higher levels of factory automation, quality control and predictive maintenance.",
    dependsOn: ["Isaac", "Omniverse", "Edge GPUs"],
    usedBy: ["Manufacturers", "Automotive industry"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  },
  {
    id: "finance-risk", name: "Finance & Risk", layer: "endmarket", type: "End Market",
    short: "GPU-accelerated financial modelling, risk analysis, fraud detection and trading systems.",
    why: "Financial services use GPU computing for real-time risk calculations, Monte Carlo simulations and increasingly for AI-powered trading and compliance.",
    dependsOn: ["NVIDIA GPUs", "CUDA", "cuQuantFin"],
    usedBy: ["Banks", "Hedge funds", "Insurance companies"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  },
  {
    id: "gaming", name: "Gaming", layer: "endmarket", type: "End Market",
    short: "NVIDIA's original market — real-time 3D graphics and interactive entertainment.",
    why: "Gaming remains a significant revenue driver and the consumer-facing brand that keeps NVIDIA visible. RTX ray tracing and DLSS showcase AI-powered rendering.",
    dependsOn: ["GeForce RTX", "Game developers"],
    usedBy: ["Gamers", "Game developers", "Esports"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  },
  {
    id: "creator-tools", name: "Creator Tools", layer: "endmarket", type: "End Market",
    short: "GPU-accelerated content creation for video, 3D, VFX and design.",
    why: "Content creators benefit from GPU acceleration for rendering, video editing, 3D modelling and AI-powered creative tools.",
    dependsOn: ["RTX GPUs", "CUDA", "Creative software"],
    usedBy: ["Video editors", "3D artists", "Designers"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  },
  {
    id: "workstations", name: "Workstations", layer: "endmarket", type: "End Market",
    short: "Professional computing systems for engineering, design, data science and AI development.",
    why: "RTX PRO workstations serve engineers, designers and data scientists who need local GPU compute for development and visualization.",
    dependsOn: ["RTX PRO", "NVIDIA software"],
    usedBy: ["Engineers", "Data scientists", "Designers"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  },
  {
    id: "edge-ai", name: "Edge AI", layer: "endmarket", type: "End Market",
    short: "AI inference running on local devices at the network edge rather than in cloud data centers.",
    why: "Edge AI enables real-time inference for robotics, autonomous vehicles, industrial systems and smart devices where latency or connectivity prevents cloud processing.",
    dependsOn: ["Jetson Thor", "TensorRT", "Edge hardware"],
    usedBy: ["IoT deployments", "Autonomous systems", "Retail"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  },

  // ── Industrial / Simulation Partners ──────
  {
    id: "dassault", name: "Dassault Systèmes", layer: "endmarket", type: "Industrial",
    short: "Provider of 3D design, simulation and product lifecycle management software.",
    why: "Dassault's simulation and digital twin tools increasingly leverage GPU acceleration and connect to NVIDIA Omniverse for industrial applications.",
    dependsOn: ["NVIDIA GPUs", "Omniverse"],
    usedBy: ["Manufacturers", "Aerospace", "Automotive"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  },
  {
    id: "ptc", name: "PTC", layer: "endmarket", type: "Industrial",
    short: "Provider of CAD, PLM and industrial IoT software for manufacturing.",
    why: "PTC's tools connect to digital twin platforms and use GPU acceleration for real-time visualization and simulation.",
    dependsOn: ["NVIDIA GPUs", "IoT infrastructure"],
    usedBy: ["Manufacturers", "Industrial companies"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  },
  {
    id: "fanuc", name: "FANUC", layer: "endmarket", type: "Industrial",
    short: "Major manufacturer of industrial robots, CNC machines and factory automation systems.",
    why: "FANUC robots are used in factories worldwide. AI-powered vision and control can be trained in simulation (Isaac/Omniverse) and deployed on edge GPU hardware.",
    dependsOn: ["Robot hardware", "AI training infrastructure"],
    usedBy: ["Automotive manufacturers", "Electronics manufacturers"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  },
  {
    id: "mercedes-benz", name: "Mercedes-Benz", layer: "endmarket", type: "Industrial",
    short: "Automotive manufacturer using NVIDIA technology for autonomous driving and smart factories.",
    why: "Mercedes-Benz uses NVIDIA DRIVE for autonomous driving development and Omniverse for factory digital twins, representing the convergence of automotive and AI.",
    dependsOn: ["NVIDIA DRIVE", "Omniverse", "AI training"],
    usedBy: ["Vehicle customers", "Factory operations"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  },

  // ── Strategic Concepts ────────────────────
  {
    id: "ai-factory", name: "AI Factory", layer: "concept", type: "Concept",
    short: "NVIDIA's framing for a data center designed to convert electricity into tokens, embeddings, actions and simulations at industrial scale.",
    why: "The AI factory framing reorients the data center from a server-rental business to a production facility. Inputs are megawatts and infrastructure; outputs are inference tokens, training checkpoints and simulation outputs.",
    takeaway: "Not a kind of building. A framing &mdash; data centers as industrial intelligence production.",
    commonMisunderstanding: "An AI factory is not a specific architecture or NVIDIA product. It is a framing for data centers that emphasises throughput economics (tokens per watt, capex per token) over server-rental thinking.",
    nvidiaConnection: {
      type: "self",
      explanation: "Editorial framing introduced and popularized by NVIDIA. Shapes how reference designs (with Vertiv, Schneider, Foxconn, Dell, HPE) are positioned."
    },
    relatedQuestions: ["q-ai-factory", "q-tokens-per-watt", "q-power-bound", "q-rack-scale-different", "q-ai-dc-design", "q-ppa", "q-grid-interconnect", "q-stranded-gas", "q-water"],
    dependsOn: ["Power", "NVIDIA systems", "Networking", "Software"],
    usedBy: ["Cloud providers", "Enterprises", "Sovereign AI programs"],
    bottleneckLevel: "Low",
    modes: ["factory"],
    sources: [{ label: "NVIDIA AI Factories", url: "https://www.nvidia.com/en-us/solutions/ai-factories/" }]
  },
  {
    id: "rack-scale-computing", name: "Rack-Scale Computing", layer: "concept", type: "Concept",
    short: "Treating an entire rack of GPUs as a single unified compute resource rather than individual servers.",
    why: "NVL72 demonstrates rack-scale computing where 72 GPUs share memory and communicate via NVLink. This is a fundamental shift from server-centric to rack-centric architecture.",
    dependsOn: ["NVLink", "NVSwitch", "Liquid cooling"],
    usedBy: ["NVL72 systems", "Future AI architectures"],
    bottleneckLevel: "Low",
    modes: ["factory", "product"]
  },
  {
    id: "tokens-per-watt", name: "Tokens per Watt", layer: "concept", type: "Concept",
    short: "The key efficiency metric for AI inference: how many output tokens a system produces per watt of power consumed.",
    why: "As inference scales, energy efficiency becomes the dominant economic factor. Tokens per watt determines the marginal cost of AI services.",
    dependsOn: ["GPU efficiency", "Power infrastructure"],
    usedBy: ["Inference providers", "Cloud economics teams"],
    bottleneckLevel: "Low",
    modes: ["factory"]
  },
  {
    id: "inference-economics", name: "Inference Economics", layer: "concept", type: "Concept",
    short: "The cost structure of serving AI model predictions at scale, measured in cost per token or cost per query.",
    why: "Inference economics determine which AI applications are commercially viable. GPU performance, utilization and energy costs all feed into the unit economics.",
    dependsOn: ["GPU performance", "TensorRT", "Power costs"],
    usedBy: ["AI product companies", "Cloud providers"],
    bottleneckLevel: "Low",
    modes: ["factory", "endmarkets"]
  },
  {
    id: "memory-bandwidth", name: "Memory Bandwidth", layer: "concept", type: "Concept",
    short: "The rate at which data can be read from or written to GPU memory, a critical bottleneck for AI workloads.",
    why: "Large AI models are often memory-bandwidth limited during inference. HBM generation and stack count directly determine achievable throughput.",
    dependsOn: ["HBM technology", "GPU architecture"],
    usedBy: ["GPU architects", "AI system designers"],
    bottleneckLevel: "Medium",
    modes: ["product"]
  },
  {
    id: "compute-density", name: "Compute Density", layer: "concept", type: "Concept",
    short: "The amount of AI compute capability per unit of physical space, power or cost.",
    why: "Higher compute density means more AI throughput from the same data center footprint. Rack-scale systems and liquid cooling push density higher each generation.",
    dependsOn: ["GPU performance", "Packaging", "Cooling"],
    usedBy: ["Data center architects", "Cloud capacity planners"],
    bottleneckLevel: "Low",
    modes: ["factory"]
  },
  {
    id: "software-moat", name: "Software Moat", layer: "concept", type: "Concept",
    short: "The competitive barrier created by NVIDIA's CUDA ecosystem, libraries and developer community.",
    why: "NVIDIA's software moat makes GPU switching costs extremely high. Competitors must match not just hardware but decades of software investment.",
    dependsOn: ["CUDA", "Developer ecosystem", "Library support"],
    usedBy: ["Competitive analysis", "Investor evaluation"],
    bottleneckLevel: "Low",
    modes: ["product"]
  },
  {
    id: "cuda-lock-in", name: "CUDA Lock-in", layer: "concept", type: "Concept",
    short: "The dependency created when software is written specifically for CUDA and cannot easily run on other hardware.",
    why: "CUDA lock-in is both NVIDIA's greatest strategic asset and the primary motivation for alternative platforms (ROCm, oneAPI, Triton). Breaking it requires ecosystem-level effort.",
    dependsOn: ["CUDA ecosystem", "Developer habits"],
    usedBy: ["Strategy discussions", "Alternative accelerator projects"],
    bottleneckLevel: "High",
    modes: ["product"]
  },
  {
    id: "supply-chain-concentration", name: "Supply Chain Concentration", layer: "concept", type: "Concept",
    short: "The risk created by having critical technologies (EUV, advanced packaging, HBM) concentrated in very few suppliers.",
    why: "Single points of failure in the semiconductor supply chain (ASML for EUV, TSMC for leading-edge logic, three companies for HBM) create systemic risk.",
    dependsOn: ["ASML", "TSMC", "HBM suppliers"],
    usedBy: ["Risk assessment", "Policy makers", "Investors"],
    bottleneckLevel: "High",
    modes: ["supply"]
  },
  {
    id: "export-controls-concept", name: "Export Controls", layer: "concept", type: "Concept",
    short: "Government restrictions on the sale of advanced AI chips and semiconductor equipment to certain countries.",
    why: "US export controls have reshaped the global AI landscape, creating bifurcated supply chains and accelerating domestic chip development in restricted countries.",
    dependsOn: ["BIS regulations", "Geopolitical dynamics"],
    usedBy: ["NVIDIA", "ASML", "TSMC", "Policy makers"],
    bottleneckLevel: "High",
    modes: ["supply"],
    sources: [{ label: "BIS Export Controls", url: "https://www.bis.gov/" }]
  },
  {
    id: "custom-silicon-threat", name: "Custom Silicon Threat", layer: "concept", type: "Concept",
    short: "The competitive risk from hyperscalers designing their own AI accelerators (TPUs, Trainium, etc.).",
    why: "Google, Amazon, Microsoft and Meta are all developing custom AI chips. If these succeed at scale, they could reduce dependence on NVIDIA for internal workloads.",
    dependsOn: ["Hyperscaler engineering teams", "TSMC"],
    usedBy: ["NVIDIA competitive strategy", "Investor analysis"],
    bottleneckLevel: "Medium",
    modes: ["product"]
  },
  {
    id: "hyperscaler-asics", name: "Hyperscaler ASICs", layer: "concept", type: "Concept",
    short: "Custom application-specific chips designed by cloud providers for their own AI workloads.",
    why: "Google TPU, AWS Trainium, Microsoft Maia and Meta MTIA represent the hyperscaler push toward self-sufficiency in AI silicon.",
    dependsOn: ["TSMC", "Custom design teams", "Software stacks"],
    usedBy: ["Internal hyperscaler workloads"],
    bottleneckLevel: "Medium",
    modes: ["product"]
  },
  {
    id: "sovereign-compute", name: "Sovereign Compute", layer: "concept", type: "Concept",
    short: "National programs to build domestic AI compute infrastructure independent of foreign providers.",
    why: "Countries from the UAE to France to India are investing in sovereign AI infrastructure. This creates new demand for NVIDIA systems outside the traditional hyperscaler customer base.",
    dependsOn: ["NVIDIA systems", "Government funding", "Data center development"],
    usedBy: ["National AI strategies", "Domestic cloud providers"],
    bottleneckLevel: "Low",
    modes: ["endmarkets"]
  }
];

/* ============================================
   TAXONOMY CATEGORIES
   ============================================ */
var ATLAS_CATEGORIES = [
  { id: "upstream", label: "Upstream Suppliers", layers: ["upstream"] },
  { id: "manufacturing", label: "Foundry, Memory & Packaging", layers: ["manufacturing"] },
  { id: "hardware", label: "NVIDIA Hardware", layers: ["hardware"] },
  { id: "networking", label: "NVIDIA Networking", layers: ["networking"] },
  { id: "software", label: "NVIDIA Software", layers: ["software"] },
  { id: "cloud", label: "Cloud & OEM Partners", layers: ["cloud"] },
  { id: "quantum", label: "Quantum-Classical Computing", layers: ["quantum"] },
  { id: "endmarket", label: "End Markets", layers: ["endmarket"] },
  { id: "physical", label: "Physical Constraints", layers: ["physical"] },
  { id: "concept", label: "Strategic Concepts", layers: ["concept"] }
];

/* ============================================
   COMPANY CATEGORIES — used by the Company Explorer

   Categories group companies into structurally similar buckets so the
   explorer can be filtered without a long flat list. Order here drives
   the order of category chips and card sections in the UI.
   ============================================ */
var COMPANY_CATEGORIES = [
  { id: "foundry", label: "Foundry & Packaging", color: "#9F7AEA" },
  { id: "memory", label: "Memory", color: "#4FD1C5" },
  { id: "equipment", label: "Semiconductor Equipment", color: "#63B3ED" },
  { id: "eda", label: "EDA & IP", color: "#90CDF4" },
  { id: "assembly", label: "Assembly & ODM", color: "#A78BFA" },
  { id: "cloud", label: "Cloud & Neocloud", color: "#FC8181" },
  { id: "oem", label: "OEM & Enterprise", color: "#F687B3" },
  { id: "power", label: "Power & Grid", color: "#F56565" },
  { id: "cooling", label: "Cooling", color: "#4FD1C5" },
  { id: "industrial", label: "Industrial & Simulation", color: "#FBD38D" },
  { id: "quantum", label: "Quantum Hardware", color: "#B794F4" }
];

/* ============================================
   RELATIONSHIP TYPES — used to classify a company's link to NVIDIA

   The atlas avoids overstating direct partnerships. Most public
   relationships fall into one of these categories.
   ============================================ */
var RELATIONSHIP_TYPES = {
  "direct-supplier":    { label: "Direct supplier",     color: "#48BB78" },
  "upstream-supplier":  { label: "Upstream supplier",   color: "#63B3ED" },
  "downstream-customer":{ label: "Downstream customer", color: "#FBD38D" },
  "cloud-deployer":     { label: "Cloud deployer",      color: "#FC8181" },
  "oem-odm":            { label: "OEM / ODM",           color: "#F687B3" },
  "ecosystem-enabler":  { label: "Ecosystem enabler",   color: "#B794F4" },
  "competitor":         { label: "Competitor / substitute", color: "#F6AD55" },
  "adjacent-infra":     { label: "Adjacent infrastructure", color: "#A0AEC0" }
};

/* ============================================
   COMPANY PROFILES — Intelligence cards

   Each entry is a self-contained briefing on a company that touches the
   accelerated-computing stack. Profiles are written for accuracy: where
   NVIDIA's relationship to the company is not publicly documented as a
   direct partnership, the relationshipType reflects the real shape of
   the connection (upstream, ecosystem, adjacent, etc.).
   ============================================ */
var COMPANY_PROFILES = [

  /* ── Foundry & Packaging ───────────────── */
  {
    id: "tsmc", name: "TSMC", fullName: "Taiwan Semiconductor Manufacturing Company",
    category: "foundry", country: "Taiwan",
    roleInStack: "Leading-edge logic foundry that fabricates the silicon for most modern AI accelerators.",
    relationshipType: "direct-supplier",
    relationshipToNvidia: "TSMC manufactures NVIDIA's GPU silicon. Hopper and Blackwell are produced on TSMC's 4nm-class processes; future generations are expected to migrate to N3 and N2.",
    shortExplanation: "NVIDIA designs the chips. TSMC turns the designs into physical wafers and packages.",
    takeaway: "NVIDIA designs the chip; TSMC makes it real &mdash; and packages it.",
    commonMisunderstanding: "Most people picture TSMC as a wafer foundry. It also runs the world's most-used advanced packaging line (CoWoS), and that side of the business has been the binding constraint on AI accelerator supply.",
    nvidiaConnection: {
      type: "direct",
      explanation: "Manufactures NVIDIA's GPU silicon at advanced process nodes (4nm-class today, N3 and N2 ahead) and packages it with CoWoS, which integrates HBM stacks with the GPU die."
    },
    relatedQuestions: ["q-tsmc-spof", "q-how-gpu-made", "q-cowos", "q-bottlenecks-overview", "q-cowos-constrained", "q-process-node", "q-yield", "q-tsmc-arizona", "q-3dfabric", "q-taiwan-risk"],
    businessModel: "Pure-play foundry. TSMC does not sell its own branded chips &mdash; it manufactures designs from fabless customers under contract.",
    whatTheyDo: "Operates fabs spanning mature nodes through the leading edge (N5, N4, N3, with N2 in ramp). Also operates the industry's leading-edge 2.5D and 3D advanced packaging via its 3DFabric platform (CoWoS, InFO, SoIC).",
    productGroups: ["Logic process nodes (N2, N3, N4, N5, N7, N16)", "Advanced packaging (CoWoS, InFO, SoIC)", "Specialty technologies (RF, automotive, power)"],
    upstreamDependencies: ["ASML (lithography)", "Applied Materials, Lam Research, KLA, Tokyo Electron", "Silicon wafers", "Photoresists, specialty gases"],
    downstreamCustomers: ["NVIDIA", "Apple", "AMD", "Qualcomm", "Broadcom", "Hyperscaler custom-silicon teams"],
    competitors: ["Samsung Foundry", "Intel Foundry", "SMIC (export-controlled at the leading edge)"],
    keyBottlenecks: ["CoWoS advanced-packaging capacity", "Leading-edge wafer allocation", "Geographic concentration in Taiwan"],
    whyItMattersForAI: "Without TSMC, the supply of leading-edge AI accelerators effectively halts. NVIDIA, AMD and most hyperscaler custom-silicon programs depend on TSMC for both leading-edge logic and CoWoS packaging.",
    explainLikeImNew: "Imagine a designer sends blueprints to a factory. TSMC is the factory &mdash; the most advanced one in the world. The designs come from companies like NVIDIA; TSMC produces the physical chips.",
    learningQuestions: [
      "Why is CoWoS packaging capacity a tighter constraint than wafer capacity?",
      "What would it take for Samsung or Intel Foundry to take significant share at the leading edge?",
      "Why is geographic concentration in Taiwan a strategic concern for the global AI supply chain?"
    ],
    sources: [
      { label: "TSMC CoWoS technology", url: "https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/cowos.htm" },
      { label: "TSMC 3DFabric platform", url: "https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/3DFabric.htm" }
    ]
  },
  {
    id: "samsung-foundry", name: "Samsung Foundry", fullName: "Samsung Electronics — Foundry Business",
    category: "foundry", country: "South Korea",
    roleInStack: "Second-largest logic foundry by capacity. Competes with TSMC at advanced nodes.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Samsung has manufactured certain past NVIDIA products (e.g. Ampere consumer GPUs on Samsung 8nm). Most current NVIDIA AI silicon is fabricated at TSMC.",
    shortExplanation: "Samsung's foundry arm offers an alternative to TSMC at multiple nodes, with mixed adoption at the leading edge.",
    takeaway: "Samsung's foundry is not its memory business. It trails TSMC on the AI leading edge today.",
    commonMisunderstanding: "Being the world's largest memory company doesn't make Samsung a peer to TSMC in logic. The foundry and memory businesses are separate, and the foundry currently trails TSMC at the leading-edge nodes that matter for AI accelerators.",
    nvidiaConnection: {
      type: "ecosystem",
      explanation: "Has manufactured past NVIDIA consumer products (Ampere on Samsung 8nm). Not the current foundry for leading-edge NVIDIA AI silicon. Strategic potential as a second-source option if Samsung's GAA execution improves."
    },
    businessModel: "Hybrid foundry &mdash; manufactures Samsung's own chips and serves external customers under contract.",
    whatTheyDo: "Runs fabs at process nodes from mature through 3nm-class GAA. Increasingly invests in advanced packaging and HBM-adjacent capacity.",
    productGroups: ["Process nodes (8nm, 5nm, 4nm, 3nm GAA)", "Foundry advanced packaging", "Specialty technologies"],
    upstreamDependencies: ["ASML", "Applied Materials, Lam, KLA, TEL", "Silicon wafers"],
    downstreamCustomers: ["Qualcomm", "Google (Tensor)", "Samsung internal divisions"],
    competitors: ["TSMC", "Intel Foundry"],
    keyBottlenecks: ["Yield at advanced GAA nodes", "Advanced packaging capacity", "Customer trust at the leading edge"],
    whyItMattersForAI: "A second viable leading-edge foundry would relieve TSMC concentration risk. Samsung's progress at GAA nodes determines whether that materializes for AI accelerators.",
    explainLikeImNew: "Samsung makes both phones and the chips inside them, and also makes chips for other companies. They are TSMC's biggest competitor, but trail at the most advanced production nodes.",
    learningQuestions: [
      "What is GAA (gate-all-around) and why is it the next transistor architecture?",
      "Why have AI customers historically preferred TSMC over Samsung Foundry?"
    ],
    sources: [{ label: "Samsung Foundry", url: "https://semiconductor.samsung.com/foundry/" }]
  },
  {
    id: "intel-foundry", name: "Intel Foundry", fullName: "Intel Foundry Services",
    category: "foundry", country: "United States",
    roleInStack: "US-based foundry attempting a return to leading-edge contract manufacturing.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Not a current confirmed manufacturer of NVIDIA AI silicon. Strategic potential as a US-based leading-edge alternative if Intel's 18A and beyond execute on schedule.",
    shortExplanation: "Intel's foundry strategy aims to manufacture chips for external customers using its own US fabs, including future leading-edge nodes (Intel 18A, 14A).",
    businessModel: "Foundry services as a strategic pivot. Intel manufactures its own products and is opening capacity to external customers.",
    whatTheyDo: "Operates fabs in the US, Ireland and Israel. Migrating to RibbonFET (GAA) and PowerVia (backside power) at Intel 20A and 18A.",
    productGroups: ["Process nodes (Intel 7, 4, 3, 20A, 18A)", "Advanced packaging (Foveros, EMIB)"],
    upstreamDependencies: ["ASML High-NA EUV (Intel was first to take delivery)", "Equipment vendors"],
    downstreamCustomers: ["Microsoft custom silicon (announced)", "Other early customers"],
    competitors: ["TSMC", "Samsung Foundry"],
    keyBottlenecks: ["18A yield ramp", "Customer adoption", "Capital intensity"],
    whyItMattersForAI: "If Intel 18A executes, the US gains a domestic leading-edge alternative for AI silicon. Strategic for export-control geography even if commercial volume is years away.",
    explainLikeImNew: "Intel used to make only its own chips. It is now trying to also make chips for other companies, betting that customers want a US-based factory in addition to TSMC.",
    learningQuestions: [
      "What is High-NA EUV and why did Intel take delivery first?",
      "How does PowerVia (backside power) change chip performance?"
    ],
    sources: [{ label: "Intel Foundry", url: "https://www.intel.com/content/www/us/en/foundry/overview.html" }]
  },
  {
    id: "amkor", name: "Amkor", fullName: "Amkor Technology",
    category: "foundry", country: "United States / South Korea operations",
    roleInStack: "Outsourced semiconductor assembly and test (OSAT) provider. Adds packaging capacity beyond TSMC's in-house operations.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Provides packaging and test services across the semiconductor industry. Specific NVIDIA package allocations are not always publicly disclosed.",
    shortExplanation: "Amkor packages and tests chips for many semiconductor companies after the wafer leaves the fab.",
    businessModel: "Contract manufacturer for back-end semiconductor steps (assembly, test, packaging).",
    whatTheyDo: "Operates packaging and test facilities globally. Capabilities span flip-chip, wirebond, system-in-package and select advanced packaging.",
    productGroups: ["Advanced packaging", "Flip-chip", "System-in-package", "Test services"],
    upstreamDependencies: ["Substrates", "Bonding equipment", "Test equipment"],
    downstreamCustomers: ["Fabless semiconductor companies", "Foundry customers"],
    competitors: ["ASE / SPIL", "Foundry in-house packaging (TSMC 3DFabric)"],
    keyBottlenecks: ["Substrate supply", "Capital expansion timelines"],
    whyItMattersForAI: "OSAT capacity supplements foundry packaging. Even if TSMC's CoWoS is the headline constraint, Amkor and similar OSATs handle non-CoWoS packaging steps for many AI-adjacent components.",
    explainLikeImNew: "After a chip is made, it still needs to be sealed in a package, wired up and tested. Amkor is a company that does that step for many chip designers.",
    learningQuestions: [
      "What is the difference between OSAT-provided packaging and foundry-provided packaging like CoWoS?"
    ],
    sources: [{ label: "Amkor Technology", url: "https://www.amkor.com/" }]
  },
  {
    id: "ase-spil", name: "ASE / SPIL", fullName: "ASE Technology Holding (parent of ASE and SPIL)",
    category: "foundry", country: "Taiwan",
    roleInStack: "World's largest OSAT group. Major outsourced assembly and test partner for the semiconductor industry.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Provides packaging and test services across the industry. Specific NVIDIA work is not always publicly attributed.",
    shortExplanation: "ASE Group is the largest contract packaging-and-test supplier outside of foundry-internal operations.",
    businessModel: "Contract back-end semiconductor manufacturing.",
    whatTheyDo: "Packaging, assembly, test, system-level test and increasingly advanced packaging including 2.5D options.",
    productGroups: ["Advanced packaging (FOCoS, VIPack)", "System-in-package", "Test services", "Substrates (via subsidiaries)"],
    upstreamDependencies: ["Substrates", "Bonding and test equipment"],
    downstreamCustomers: ["Fabless companies", "IDMs", "Foundry customers"],
    competitors: ["Amkor", "Foundry in-house packaging"],
    keyBottlenecks: ["Substrate supply", "Advanced packaging tooling"],
    whyItMattersForAI: "Adds capacity to the global packaging supply chain. As advanced AI packages migrate, OSAT roles in HBM stack assembly and chiplet integration may grow.",
    explainLikeImNew: "ASE is the world's biggest outsourced chip-packaging company. SPIL is its sister business. Together they handle the post-fab steps for huge volumes of chips.",
    learningQuestions: [
      "What is FOCoS and how does it relate to TSMC's CoWoS?"
    ],
    sources: [{ label: "ASE Technology Holding", url: "https://ase.aseglobal.com/" }]
  },

  /* ── Memory ────────────────────────────── */
  {
    id: "sk-hynix", name: "SK hynix", fullName: "SK hynix Inc.",
    category: "memory", country: "South Korea",
    roleInStack: "Leading supplier of HBM (High Bandwidth Memory) for AI accelerators.",
    relationshipType: "direct-supplier",
    relationshipToNvidia: "Publicly identified as a leading HBM supplier to NVIDIA's data-center GPUs, with HBM3 and HBM3E delivered for Hopper- and Blackwell-generation accelerators. Customer-specific volumes are not publicly disclosed.",
    shortExplanation: "SK hynix makes the high-bandwidth memory stacks that sit next to NVIDIA's GPU dies on every modern AI accelerator package.",
    takeaway: "The Korean memory rival that took the HBM lead and stayed there through HBM3 and HBM3E.",
    commonMisunderstanding: "SK hynix is not a Samsung subsidiary. They are a separate Korean memory company, and the gap between SK hynix and Samsung in HBM has been a defining story of the current AI cycle.",
    nvidiaConnection: {
      type: "direct",
      explanation: "Direct HBM3/HBM3E supplier to NVIDIA's data-center accelerators. Their HBM ramp directly affects how many NVIDIA GPUs ship per quarter."
    },
    relatedQuestions: ["q-hbm-stack", "q-memory-bandwidth", "q-hbm3e-vs-hbm4", "q-second-winners", "q-hbm-yield", "q-cowos-variants"],
    businessModel: "Memory IDM. Designs and manufactures DRAM, NAND and HBM products in its own fabs.",
    whatTheyDo: "Operates DRAM and NAND fabs primarily in South Korea. HBM is a strategic growth product alongside conventional DDR/LPDDR/GDDR memory.",
    productGroups: ["HBM3, HBM3E, HBM4", "Server DDR5, LPDDR5X", "GDDR7", "NAND flash"],
    upstreamDependencies: ["Lithography and process equipment", "Through-silicon via tooling", "OSAT/foundry partners for packaging"],
    downstreamCustomers: ["NVIDIA", "AMD", "Other AI accelerator vendors", "Server OEMs"],
    competitors: ["Samsung Memory", "Micron"],
    keyBottlenecks: ["HBM packaging capacity", "TSV yield", "Long-term capacity commitments to customers"],
    whyItMattersForAI: "HBM bandwidth is the binding constraint on large-model inference performance. SK hynix's HBM ramp directly determines NVIDIA GPU shipment volumes in any quarter.",
    explainLikeImNew: "AI chips need very fast memory stacked right next to them. SK hynix is the company best at making this stacked memory, and most of NVIDIA's current accelerators rely on it.",
    learningQuestions: [
      "Why does HBM have to be physically next to the GPU die?",
      "What is a through-silicon via (TSV) and why is yield difficult?"
    ],
    sources: [{ label: "SK hynix HBM", url: "https://www.skhynix.com/products/hbm/" }]
  },
  {
    id: "micron", name: "Micron", fullName: "Micron Technology, Inc.",
    category: "memory", country: "United States",
    roleInStack: "US-based memory IDM. The third major HBM supplier and the only one headquartered in the US.",
    relationshipType: "direct-supplier",
    relationshipToNvidia: "Micron has publicly announced HBM3E shipments qualified for NVIDIA's H200 and Blackwell-generation GPUs.",
    shortExplanation: "Micron supplies HBM to AI accelerator vendors, including NVIDIA, alongside its broader DRAM and NAND business.",
    takeaway: "The only major HBM supplier headquartered in the US.",
    commonMisunderstanding: "Micron's smaller HBM share today does not make them irrelevant. Their ramp matters both for total industry HBM supply and for US strategic resilience in AI memory.",
    nvidiaConnection: {
      type: "direct",
      explanation: "HBM3E is publicly qualified for NVIDIA's H200 and Blackwell-generation GPUs. HBM4 is on the public roadmap."
    },
    relatedQuestions: ["q-hbm-stack", "q-hbm3e-vs-hbm4", "q-export-controls", "q-second-winners", "q-hbm-yield", "q-memory-bandwidth"],
    businessModel: "Memory IDM. Designs and manufactures DRAM and NAND in its own fabs.",
    whatTheyDo: "Runs DRAM fabs primarily in the US, Taiwan, Singapore and Japan. HBM3E and HBM4 are flagship products for the AI market.",
    productGroups: ["HBM3E, HBM4", "Server DDR5, LPDDR5X", "GDDR7", "Storage (NAND, SSDs)"],
    upstreamDependencies: ["Lithography equipment", "TSV tooling", "Packaging partners"],
    downstreamCustomers: ["NVIDIA", "AMD", "AI accelerator vendors", "Cloud and server OEMs"],
    competitors: ["SK hynix", "Samsung Memory"],
    keyBottlenecks: ["HBM capacity ramp", "Geographic concentration of HBM production"],
    whyItMattersForAI: "Micron is the only US-headquartered HBM supplier. Its ramp matters both for total HBM supply and for US strategic resilience in AI memory.",
    explainLikeImNew: "Micron is an American company that makes computer memory. They make the same kind of stacked AI memory (HBM) as SK hynix and Samsung, just at smaller current volume.",
    learningQuestions: [
      "How does Micron's HBM3E differ from SK hynix's at the product level?",
      "Why does the US care about a domestic HBM supplier?"
    ],
    sources: [
      { label: "Micron HBM3E", url: "https://www.micron.com/products/memory/hbm/hbm3e" },
      { label: "Micron HBM4", url: "https://www.micron.com/products/memory/hbm/hbm4" }
    ]
  },
  {
    id: "samsung-memory", name: "Samsung Memory", fullName: "Samsung Electronics — Memory Business",
    category: "memory", country: "South Korea",
    roleInStack: "One of three companies producing HBM at scale. Largest global memory supplier overall.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Samsung's HBM has been qualified across the industry; the specifics of qualification at NVIDIA have been the subject of public reporting and may evolve over time.",
    shortExplanation: "Samsung is the world's largest memory company. Its HBM supplies AI accelerators across the industry, with adoption details varying by customer and generation.",
    takeaway: "World's largest memory company; their HBM lead at NVIDIA has been the most-watched qualification story of the AI cycle.",
    commonMisunderstanding: "Samsung being the largest memory company by volume does not mean it leads in HBM adoption at every customer. Customer-specific qualification varies by generation and has been reported on publicly.",
    nvidiaConnection: {
      type: "ecosystem",
      explanation: "Industry-wide HBM supplier. Specific qualification at NVIDIA has shifted across HBM generations and is sometimes the subject of public reporting."
    },
    relatedQuestions: ["q-hbm-stack", "q-hbm3e-vs-hbm4", "q-second-winners"],
    businessModel: "Memory IDM. Designs and manufactures DRAM, NAND and HBM in its own fabs.",
    whatTheyDo: "Massive memory operations alongside its foundry, mobile and consumer electronics businesses.",
    productGroups: ["HBM3E, HBM4", "Server DDR5, LPDDR5X", "GDDR7", "NAND flash"],
    upstreamDependencies: ["Lithography equipment", "TSV tooling", "Packaging operations"],
    downstreamCustomers: ["AI accelerator vendors", "Server OEMs", "Mobile OEMs", "Consumer electronics"],
    competitors: ["SK hynix", "Micron"],
    keyBottlenecks: ["HBM yield at advanced generations", "Customer qualification timelines"],
    whyItMattersForAI: "Samsung is essential to industry-wide HBM supply elasticity. Its qualification and ramp at any given generation affects pricing and lead times across customers.",
    explainLikeImNew: "Samsung makes more memory chips than anyone else in the world. They produce the same kind of stacked AI memory as SK hynix and Micron, with adoption that varies by AI customer.",
    learningQuestions: [
      "What does HBM qualification actually involve?",
      "Why might one supplier ramp a new HBM generation faster than another?"
    ],
    sources: [{ label: "Samsung HBM4", url: "https://semiconductor.samsung.com/dram/hbm/hbm4/" }]
  },

  /* ── Semiconductor Equipment ───────────── */
  {
    id: "asml", name: "ASML", fullName: "ASML Holding N.V.",
    category: "equipment", country: "Netherlands",
    roleInStack: "Sole supplier of EUV (extreme ultraviolet) lithography systems. Without EUV, leading-edge logic does not exist.",
    relationshipType: "upstream-supplier",
    relationshipToNvidia: "ASML does not sell to NVIDIA directly. It sells EUV systems to TSMC, Samsung and Intel, which use those systems to manufacture NVIDIA chips. Indirect but foundational.",
    shortExplanation: "ASML is the only company in the world that builds the lithography machines required to print transistors at the leading edge.",
    takeaway: "ASML doesn't make AI chips. It makes leading-edge AI chips manufacturable.",
    commonMisunderstanding: "ASML is often described as a chipmaker. It is not. It builds the multi-hundred-million-dollar lithography machines used by TSMC, Samsung and Intel to print every leading-edge transistor.",
    nvidiaConnection: {
      type: "upstream",
      explanation: "Indirect but foundational. ASML's EUV scanners are the upstream dependency that lets TSMC manufacture NVIDIA's silicon. ASML and NVIDIA do not transact directly."
    },
    relatedQuestions: ["q-asml-importance", "q-tsmc-spof", "q-export-controls", "q-how-gpu-made", "q-process-node", "q-finfet-vs-gaa", "q-china-domestic", "q-chips-act"],
    businessModel: "Capital equipment vendor. Sells multi-hundred-million-dollar lithography systems to foundries, plus services and upgrades over decades.",
    whatTheyDo: "Designs and assembles EUV scanners, DUV scanners, metrology and inspection systems, and computational lithography software.",
    productGroups: ["EUV (NXE/Twinscan)", "High-NA EUV (EXE)", "DUV ArF immersion / KrF / i-line", "Metrology and inspection (HMI)", "Computational lithography"],
    upstreamDependencies: ["Carl Zeiss SMT (optics)", "Trumpf (laser)", "Specialty mechanical and vacuum suppliers across Europe and Japan"],
    downstreamCustomers: ["TSMC", "Samsung Foundry", "Intel Foundry", "Memory makers"],
    competitors: ["No direct EUV competitor", "Nikon and Canon at lower-NA DUV"],
    keyBottlenecks: ["EUV system production rate (limited tools per year)", "High-NA EUV adoption pace", "Geopolitical export-control regimes"],
    whyItMattersForAI: "Every modern AI chip is patterned with EUV light. The supply of EUV scanners limits how fast TSMC can scale leading-edge capacity, which limits how fast NVIDIA can ship.",
    explainLikeImNew: "Imagine a printer that prints circuit patterns onto silicon using a special kind of ultraviolet light. ASML is the only company in the world that builds these printers, and they are essential for making the most advanced chips.",
    learningQuestions: [
      "What is the difference between DUV and EUV?",
      "Why is ASML the only company that makes EUV machines?",
      "What is High-NA EUV and how does it change the roadmap?"
    ],
    sources: [{ label: "ASML EUV Systems", url: "https://www.asml.com/en/products/euv-lithography-systems" }]
  },
  {
    id: "applied-materials", name: "Applied Materials", fullName: "Applied Materials, Inc.",
    category: "equipment", country: "United States",
    roleInStack: "Largest US-based semiconductor equipment company. Materials engineering across deposition, etch and inspection.",
    relationshipType: "upstream-supplier",
    relationshipToNvidia: "Sells to TSMC, Samsung, Intel, SK hynix, Micron and others &mdash; the foundries and memory makers whose output reaches NVIDIA. Not a direct NVIDIA customer.",
    shortExplanation: "Applied Materials makes the equipment used to deposit, etch and measure thin films during chip fabrication.",
    businessModel: "Capital equipment + services. Sells process tools and recurring service / spares.",
    whatTheyDo: "Designs and manufactures deposition (CVD, PVD, ALD), etch, ion implant, CMP, inspection and process-control systems.",
    productGroups: ["Deposition (Endura, Producer)", "Etch", "Implant", "CMP", "Inspection (with HMI / KLA collaborations)"],
    upstreamDependencies: ["Precision components", "Specialty materials", "Vacuum and chemistry partners"],
    downstreamCustomers: ["TSMC", "Samsung", "Intel", "SK hynix", "Micron", "Foundries globally"],
    competitors: ["Lam Research (etch overlap)", "Tokyo Electron (deposition overlap)", "ASM International (ALD)"],
    keyBottlenecks: ["Tool throughput at advanced nodes", "Service capacity in customer fabs"],
    whyItMattersForAI: "Every transistor and every interconnect on an AI chip is built by depositing and etching atomically thin films. AMAT tools are inside virtually every step.",
    explainLikeImNew: "Making a chip means stacking hundreds of microscopic layers of metal and insulator and carving them into shapes. Applied Materials makes the machines that build and trim those layers.",
    learningQuestions: [
      "What is the difference between CVD, ALD and PVD?",
      "Why is etch as critical as deposition?"
    ],
    sources: [{ label: "Applied Materials", url: "https://www.appliedmaterials.com/" }]
  },
  {
    id: "lam-research", name: "Lam Research", fullName: "Lam Research Corporation",
    category: "equipment", country: "United States",
    roleInStack: "Leader in etch and deposition equipment. Critical for advanced 3D NAND and DRAM as well as logic.",
    relationshipType: "upstream-supplier",
    relationshipToNvidia: "Sells to foundries and memory makers. Not a direct NVIDIA customer.",
    shortExplanation: "Lam Research builds the precision etch and deposition machines that shape transistor structures atomic layer by atomic layer.",
    businessModel: "Capital equipment + services.",
    whatTheyDo: "Etch, deposition (ALD, CVD), clean and other steps. Particularly strong in the high-aspect-ratio etches that 3D NAND requires.",
    productGroups: ["Etch (Kiyo, Flex)", "Deposition (ALTUS, VECTOR)", "Clean", "Wafer carriers"],
    upstreamDependencies: ["Plasma source components", "Precision optics and chemistry"],
    downstreamCustomers: ["TSMC", "Samsung", "Intel", "SK hynix", "Micron"],
    competitors: ["Applied Materials", "Tokyo Electron"],
    keyBottlenecks: ["Throughput on high-AR etch", "Capacity ramps with customer fab build"],
    whyItMattersForAI: "Lam tools are inside both the logic fabs that make GPUs and the memory fabs that make HBM. A constraint on Lam capacity is a constraint on both.",
    explainLikeImNew: "If a chip is built like a city of microscopic skyscrapers, Lam's machines are what carve the streets and tunnels into the silicon.",
    learningQuestions: [
      "What is high-aspect-ratio etch and why is it hard?"
    ],
    sources: [{ label: "Lam Research", url: "https://www.lamresearch.com/" }]
  },
  {
    id: "kla", name: "KLA", fullName: "KLA Corporation",
    category: "equipment", country: "United States",
    roleInStack: "Process-control leader. Inspection, metrology and yield-management systems.",
    relationshipType: "upstream-supplier",
    relationshipToNvidia: "Sells to fabs across the industry. Indirect contributor to NVIDIA chip yields.",
    shortExplanation: "KLA's tools find defects and measure dimensions during chip manufacturing. Without process control, leading-edge yields collapse.",
    businessModel: "Capital equipment + services.",
    whatTheyDo: "Optical and e-beam inspection, metrology, mask inspection, computational analytics for fab process control.",
    productGroups: ["Patterned-wafer inspection", "Mask inspection", "Metrology", "Reticle manufacturing tools"],
    upstreamDependencies: ["Advanced optics", "Detectors", "Compute / AI for image analytics"],
    downstreamCustomers: ["All advanced fabs"],
    competitors: ["Applied Materials (PDC)", "ASML (HMI)"],
    keyBottlenecks: ["Inspection throughput at advanced nodes"],
    whyItMattersForAI: "Yield drives effective wafer cost, and process control is how yield is achieved. KLA tools are inside every leading-edge fab making AI silicon.",
    explainLikeImNew: "Every chip has billions of tiny features that all have to be perfect. KLA makes the equipment that inspects each one and flags problems early.",
    learningQuestions: [
      "How does optical inspection differ from e-beam inspection?"
    ],
    sources: [{ label: "KLA Corporation", url: "https://www.kla.com/" }]
  },
  {
    id: "tokyo-electron", name: "Tokyo Electron", fullName: "Tokyo Electron Limited",
    category: "equipment", country: "Japan",
    roleInStack: "Major Japanese semiconductor equipment company. Strong in coater/developer, deposition and etch.",
    relationshipType: "upstream-supplier",
    relationshipToNvidia: "Sells to fabs across the industry. Not a direct NVIDIA customer.",
    shortExplanation: "TEL manufactures key equipment used in lithography prep, deposition, etch and cleaning. Especially strong in EUV-supporting coater/developer tools.",
    businessModel: "Capital equipment + services.",
    whatTheyDo: "Coater/developer (CLEAN TRACK), thermal processing, etch, deposition, and gas chemical-delivery systems.",
    productGroups: ["Coater/developer", "Etch", "Deposition", "Cleaning", "Wafer probers"],
    upstreamDependencies: ["Precision components", "Process chemistry"],
    downstreamCustomers: ["TSMC", "Samsung", "Intel", "Memory makers"],
    competitors: ["Applied Materials", "Lam Research", "ASM International"],
    keyBottlenecks: ["Tool capacity at advanced nodes"],
    whyItMattersForAI: "EUV photoresist coating is uniquely TEL-dominated. The pace of EUV adoption depends in part on TEL's coater/developer throughput.",
    explainLikeImNew: "Before light can pattern a wafer, the wafer has to be carefully coated with chemicals. TEL makes the machines that do that step.",
    learningQuestions: [
      "Why is the coater/developer step important for EUV?"
    ],
    sources: [{ label: "Tokyo Electron", url: "https://www.tel.com/" }]
  },

  /* ── EDA & IP ──────────────────────────── */
  {
    id: "synopsys", name: "Synopsys", fullName: "Synopsys, Inc.",
    category: "eda", country: "United States",
    roleInStack: "Leading EDA (electronic design automation) vendor and major semiconductor IP supplier.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "NVIDIA, like every major chip designer, uses Synopsys tools for design, verification and signoff. Synopsys also licenses IP used across the industry.",
    shortExplanation: "Synopsys supplies the software used to design and verify chips, plus reusable IP blocks (interfaces, controllers).",
    businessModel: "Software licenses + IP royalties + services.",
    whatTheyDo: "Design, simulation, verification, signoff, IP, and increasingly silicon-lifecycle management. AI-driven tools (DSO.ai) optimize chip layouts using GPU-accelerated workflows.",
    productGroups: ["Fusion Design Platform", "VCS verification", "PrimeTime", "DesignWare IP", "DSO.ai", "Silicon lifecycle"],
    upstreamDependencies: ["GPU clusters for EDA workloads"],
    downstreamCustomers: ["NVIDIA", "Apple", "AMD", "Intel", "Samsung", "Every advanced chip designer"],
    competitors: ["Cadence", "Siemens EDA"],
    keyBottlenecks: ["Algorithmic scalability at very large designs"],
    whyItMattersForAI: "AI chips push EDA tools to their limits. Conversely, EDA tools themselves run on GPU clusters &mdash; a feedback loop where NVIDIA hardware accelerates the design of NVIDIA hardware.",
    explainLikeImNew: "Synopsys makes the software chip designers use to plan, simulate and check their designs before sending them to a foundry.",
    learningQuestions: [
      "What does signoff mean in a chip design flow?",
      "How is AI changing EDA tools?"
    ],
    sources: [{ label: "Synopsys", url: "https://www.synopsys.com/" }]
  },
  {
    id: "cadence", name: "Cadence", fullName: "Cadence Design Systems, Inc.",
    category: "eda", country: "United States",
    roleInStack: "Major EDA vendor. Strong in analog/mixed-signal, IP and system design.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "NVIDIA uses Cadence tools for design and verification. Cadence's Cerebrus uses GPU acceleration to optimize chip layouts.",
    shortExplanation: "Cadence supplies a complete chip design tool suite plus IP, with particular strength in analog and mixed-signal flows.",
    businessModel: "Software licenses + IP + services.",
    whatTheyDo: "Front-end and back-end design, verification, signoff, IP, system simulation, computational software for biology and aerospace.",
    productGroups: ["Innovus / Genus / Tempus", "Virtuoso (analog)", "Palladium emulation", "Cerebrus AI", "Tensilica IP", "System simulation"],
    upstreamDependencies: ["GPU clusters"],
    downstreamCustomers: ["NVIDIA", "Major chip designers and IDMs"],
    competitors: ["Synopsys", "Siemens EDA"],
    keyBottlenecks: ["Designer productivity at advanced nodes"],
    whyItMattersForAI: "Like Synopsys, Cadence is foundational to chip design. Its Tensilica IP also appears in many edge-AI accelerators.",
    explainLikeImNew: "Cadence is one of the two big chip design software companies. Designers spend their workdays inside Cadence and Synopsys tools.",
    learningQuestions: [
      "What is hardware emulation and how is it different from simulation?"
    ],
    sources: [{ label: "Cadence Design Systems", url: "https://www.cadence.com/" }]
  },
  {
    id: "siemens-eda", name: "Siemens EDA", fullName: "Siemens Digital Industries Software (formerly Mentor Graphics)",
    category: "eda", country: "United States / Germany",
    roleInStack: "Third major EDA vendor. Strong in physical verification, DFM, PCB and IC packaging.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Used across the industry for DRC, LVS and signoff steps. Indirect connection to NVIDIA's design flow.",
    shortExplanation: "Siemens EDA covers physical verification (Calibre), PCB design, IC packaging and embedded software flows.",
    businessModel: "Software licenses + services. Part of Siemens Digital Industries Software.",
    whatTheyDo: "Calibre physical verification is the de-facto industry standard for DRC/LVS. Also offers PCB, IC packaging, harness design, and AI-driven verification.",
    productGroups: ["Calibre", "Tessent test", "Xpedition PCB", "PADS", "AESOP / Aprisa"],
    upstreamDependencies: ["Compute infrastructure"],
    downstreamCustomers: ["Chip designers", "PCB designers", "System integrators"],
    competitors: ["Synopsys", "Cadence"],
    keyBottlenecks: ["Verification runtime at advanced nodes"],
    whyItMattersForAI: "AI accelerator tape-outs require massive physical verification. Calibre is heavily used in those signoff flows.",
    explainLikeImNew: "Siemens EDA is the third big chip design software company. Their tool Calibre is the industry standard for the final 'is the design legal' check before manufacturing.",
    learningQuestions: [
      "What are DRC and LVS, and why are they always run before tape-out?"
    ],
    sources: [{ label: "Siemens EDA", url: "https://eda.sw.siemens.com/" }]
  },
  {
    id: "arm", name: "Arm", fullName: "Arm Holdings plc",
    category: "eda", country: "United Kingdom",
    roleInStack: "Architecture and IP licensor. Provides the CPU instruction-set architecture and core designs that power most non-x86 computing.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "NVIDIA's Grace and upcoming Vera CPUs are based on Arm architecture. Arm IP is also widely used in edge AI hardware (Jetson, partner devices).",
    shortExplanation: "Arm doesn't make chips. It licenses CPU designs and the rules of the Arm architecture to companies that do.",
    businessModel: "Architecture license + IP license + per-chip royalty.",
    whatTheyDo: "Designs CPU cores (Cortex, Neoverse), GPUs (Mali, Immortalis), and provides the Arm architecture license that lets companies design custom Arm-compatible cores.",
    productGroups: ["Neoverse (server)", "Cortex (client / IoT)", "Mali / Immortalis GPU IP", "AI/ML extensions"],
    upstreamDependencies: ["R&D investment", "Foundry partners (for testing reference designs)"],
    downstreamCustomers: ["Apple", "Qualcomm", "Samsung", "NVIDIA (Grace, Jetson)", "Mobile and edge industry"],
    competitors: ["x86 (Intel, AMD)", "RISC-V"],
    keyBottlenecks: ["Architectural roadmap pace"],
    whyItMattersForAI: "Arm cores power NVIDIA's data-center CPU strategy and most edge-AI silicon outside the x86 world. The Grace Blackwell Superchip exists in part because Arm-based CPUs can sit close to GPUs efficiently.",
    explainLikeImNew: "Arm is to chip designers what English is to writers &mdash; a shared language. They define the rules and offer pre-made building blocks; companies like NVIDIA build their CPUs using those rules.",
    learningQuestions: [
      "What is the difference between an Arm architecture license and a core license?",
      "Why did NVIDIA choose Arm for Grace instead of x86?"
    ],
    sources: [{ label: "Arm", url: "https://www.arm.com/" }]
  },

  /* ── Assembly & ODM ────────────────────── */
  {
    id: "foxconn", name: "Foxconn / Hon Hai", fullName: "Hon Hai Precision Industry Co., Ltd. (Foxconn)",
    category: "assembly", country: "Taiwan",
    roleInStack: "World's largest electronics contract manufacturer. Major assembler of NVIDIA AI server systems and rack integrations.",
    relationshipType: "oem-odm",
    relationshipToNvidia: "Foxconn has been publicly identified as a major assembler of NVIDIA-based AI servers and is investing in AI infrastructure projects globally.",
    shortExplanation: "Foxconn turns NVIDIA boards and components into finished server systems and integrated racks.",
    takeaway: "Not just iPhones. A primary contract manufacturer of NVIDIA's GB200 NVL72 racks.",
    commonMisunderstanding: "Foxconn is widely known for consumer electronics assembly. Their AI server and rack-integration business has grown into a separate, large-scale operation.",
    nvidiaConnection: {
      type: "direct",
      explanation: "Major contract manufacturer of GB200 NVL72 racks and other NVIDIA AI server systems."
    },
    relatedQuestions: ["q-how-gpu-made", "q-rack-scale-different", "q-second-winners", "q-ai-dc-design", "q-cluster-resilience"],
    businessModel: "Contract manufacturing across consumer electronics, servers, automotive and infrastructure.",
    whatTheyDo: "Final assembly of GB200 NVL72 racks and other AI systems, plus broader server and electronics manufacturing.",
    productGroups: ["AI server assembly", "Consumer electronics manufacturing", "Cloud / data center components"],
    upstreamDependencies: ["NVIDIA boards / GPUs", "Networking components", "Power and cooling subsystems"],
    downstreamCustomers: ["Cloud providers", "Enterprise customers"],
    competitors: ["Wistron", "Quanta", "Inventec", "Wiwynn"],
    keyBottlenecks: ["Component supply", "Capacity ramp on new platforms"],
    whyItMattersForAI: "The vast majority of NVIDIA-based AI server systems are physically assembled by ODMs. Foxconn's capacity affects how fast clusters reach customers.",
    explainLikeImNew: "Foxconn is the world's largest electronics contract manufacturer. A large share of NVIDIA-based AI server systems is assembled by Foxconn alongside the other top ODMs (Quanta, Wistron, Inventec, Wiwynn).",
    learningQuestions: [
      "What's the difference between an ODM and an OEM?"
    ],
    sources: [{ label: "Foxconn / Hon Hai", url: "https://www.foxconn.com/" }]
  },
  {
    id: "wistron", name: "Wistron", fullName: "Wistron Corporation",
    category: "assembly", country: "Taiwan",
    roleInStack: "Major server ODM. Builds AI server systems for cloud and enterprise customers.",
    relationshipType: "oem-odm",
    relationshipToNvidia: "One of several Taiwanese ODMs assembling NVIDIA-based servers; the AI infrastructure subsidiary Wiwynn was spun out of Wistron.",
    shortExplanation: "Wistron builds servers, storage and electronics under contract, with a growing focus on AI systems.",
    takeaway: "Wistron is the parent that spun out Wiwynn for hyperscaler-spec AI systems.",
    commonMisunderstanding: "Wistron and Wiwynn are sometimes confused. Wiwynn was spun out of Wistron specifically to serve hyperscalers; both names appear separately in NVIDIA-based AI server supply chains.",
    nvidiaConnection: {
      type: "direct",
      explanation: "ODM building NVIDIA-based servers for cloud and enterprise customers; parent of Wiwynn."
    },
    businessModel: "ODM contract manufacturing.",
    whatTheyDo: "Server, storage and IT product manufacturing for enterprise and cloud customers.",
    productGroups: ["Servers (incl. AI)", "Storage", "Notebooks (legacy)"],
    upstreamDependencies: ["NVIDIA components", "Memory", "Networking", "Power supplies"],
    downstreamCustomers: ["Cloud providers", "Enterprise"],
    competitors: ["Foxconn", "Quanta", "Inventec", "Wiwynn"],
    keyBottlenecks: ["Component supply", "Capacity expansion"],
    whyItMattersForAI: "Adds capacity to the global NVIDIA server build pipeline.",
    explainLikeImNew: "Wistron is another big Taiwanese factory that assembles servers. Many NVIDIA-based machines come out of factories like theirs.",
    learningQuestions: [],
    sources: [{ label: "Wistron", url: "https://www.wistron.com/" }]
  },
  {
    id: "quanta", name: "Quanta", fullName: "Quanta Computer Inc.",
    category: "assembly", country: "Taiwan",
    roleInStack: "Largest server ODM globally. Major assembler of hyperscaler-spec systems and NVIDIA platforms.",
    relationshipType: "oem-odm",
    relationshipToNvidia: "Has been publicly described as a major manufacturer of NVIDIA DGX and HGX-based systems for cloud customers.",
    shortExplanation: "Quanta builds servers at hyperscale volume for cloud providers and OEMs, including NVIDIA-based AI systems.",
    takeaway: "One of the largest server ODMs in the world &mdash; many cloud GPU servers come out of Quanta lines.",
    commonMisunderstanding: "Quanta is rarely a consumer-recognized brand, but they are one of the largest server ODMs globally. A lot of the hyperscale gear branded under cloud names is built in Quanta facilities.",
    nvidiaConnection: {
      type: "direct",
      explanation: "Major manufacturer of NVIDIA DGX/HGX-based systems for cloud customers."
    },
    businessModel: "ODM at scale.",
    whatTheyDo: "Designs and manufactures servers, notebooks, smart devices and 5G/network infrastructure.",
    productGroups: ["Cloud servers", "AI servers", "Notebooks", "Networking"],
    upstreamDependencies: ["NVIDIA boards", "Components", "Cooling", "Power"],
    downstreamCustomers: ["Hyperscalers", "Enterprise customers"],
    competitors: ["Foxconn", "Wistron", "Inventec", "Wiwynn"],
    keyBottlenecks: ["Component allocation", "Liquid-cooling integration capacity"],
    whyItMattersForAI: "Quanta's hyperscale-spec assembly is critical to the cadence at which cloud providers stand up new GPU clusters.",
    explainLikeImNew: "Quanta is one of the biggest server factories in the world. Many of the cloud servers you don't see &mdash; including AI training clusters &mdash; are built there.",
    learningQuestions: [],
    sources: [{ label: "Quanta Computer", url: "https://www.quantatw.com/" }]
  },
  {
    id: "inventec", name: "Inventec", fullName: "Inventec Corporation",
    category: "assembly", country: "Taiwan",
    roleInStack: "Server ODM. Builds AI servers for cloud and enterprise customers.",
    relationshipType: "oem-odm",
    relationshipToNvidia: "One of several ODMs assembling NVIDIA-based AI server systems.",
    shortExplanation: "Inventec is a long-standing Taiwanese ODM with a growing AI server business.",
    businessModel: "Contract manufacturing.",
    whatTheyDo: "Servers, notebooks, smart devices, automotive electronics.",
    productGroups: ["AI servers", "Cloud servers", "Notebooks"],
    upstreamDependencies: ["NVIDIA components", "Memory", "Power"],
    downstreamCustomers: ["Cloud providers", "Enterprise"],
    competitors: ["Foxconn", "Wistron", "Quanta", "Wiwynn"],
    keyBottlenecks: ["Component supply"],
    whyItMattersForAI: "Adds incremental ODM capacity to the AI server pipeline.",
    explainLikeImNew: "Inventec is another factory that builds servers and laptops, including AI systems.",
    learningQuestions: [],
    sources: [{ label: "Inventec", url: "https://www.inventec.com/" }]
  },
  {
    id: "wiwynn", name: "Wiwynn", fullName: "Wiwynn Corporation",
    category: "assembly", country: "Taiwan",
    roleInStack: "Cloud-focused server designer/manufacturer. Spun out of Wistron specifically to serve hyperscalers.",
    relationshipType: "oem-odm",
    relationshipToNvidia: "Builds custom server platforms for hyperscalers, often incorporating NVIDIA accelerators.",
    shortExplanation: "Wiwynn builds custom-designed cloud servers for the world's largest cloud customers.",
    businessModel: "Hyperscale ODM.",
    whatTheyDo: "Design and manufacture servers, storage and AI systems tailored to hyperscaler specifications.",
    productGroups: ["Open Compute servers", "AI servers", "Storage"],
    upstreamDependencies: ["NVIDIA components", "Networking", "Cooling"],
    downstreamCustomers: ["Hyperscale cloud providers"],
    competitors: ["Foxconn", "Wistron", "Quanta", "Inventec"],
    keyBottlenecks: ["Custom-spec engineering capacity"],
    whyItMattersForAI: "Hyperscalers' AI capacity depends on Wiwynn-class ODMs that can build to non-standard specifications.",
    explainLikeImNew: "Wiwynn builds the custom servers that big cloud companies use. They focus on a smaller set of very large customers.",
    learningQuestions: [],
    sources: [{ label: "Wiwynn", url: "https://www.wiwynn.com/" }]
  },
  {
    id: "fabrinet", name: "Fabrinet", fullName: "Fabrinet",
    category: "assembly", country: "Thailand / Cayman Islands",
    roleInStack: "Precision optical and electronic manufacturing. Major builder of optical transceivers and networking components.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Manufactures optical and networking components used in AI data center interconnects, including products that work with NVIDIA networking.",
    shortExplanation: "Fabrinet is the world's leading contract manufacturer of optical components used in high-speed networking.",
    businessModel: "Contract manufacturing for optics and complex electromechanical assemblies.",
    whatTheyDo: "Optical transceivers, lasers, sensors, automotive optics, complex assemblies.",
    productGroups: ["Optical transceivers", "Laser modules", "Sensors", "Automotive optics"],
    upstreamDependencies: ["Optical components", "Photonics designs from customers"],
    downstreamCustomers: ["Networking equipment companies", "Hyperscalers (indirectly)"],
    competitors: ["Lumentum (vertical optics)", "Other regional optics ODMs"],
    keyBottlenecks: ["Optical component supply"],
    whyItMattersForAI: "AI clusters depend on enormous quantities of high-speed optical transceivers between switches and servers. Fabrinet builds many of them.",
    explainLikeImNew: "When AI servers talk to each other across a building, light travels through fiber-optic cables. The light-emitting modules at each end are often built by Fabrinet.",
    learningQuestions: [
      "Why is optical interconnect growing in AI data centers?"
    ],
    sources: [{ label: "Fabrinet", url: "https://www.fabrinet.com/" }]
  },
  {
    id: "supermicro", name: "Supermicro", fullName: "Super Micro Computer, Inc.",
    category: "assembly", country: "United States",
    roleInStack: "Server OEM specialized in high-performance and AI systems. Notable for early adoption of new NVIDIA platforms.",
    relationshipType: "oem-odm",
    relationshipToNvidia: "Long-standing partner shipping NVIDIA HGX, MGX and DGX-aligned systems, including liquid-cooled rack designs.",
    shortExplanation: "Supermicro builds GPU-rich server platforms and rack-level AI systems with rapid time-to-market.",
    takeaway: "Often first to ship new NVIDIA platforms in volume; the early-cycle choice for AI startups.",
    commonMisunderstanding: "Supermicro is a US-headquartered server OEM, not a hyperscaler ODM in the same sense as Foxconn or Quanta. They sell their own branded systems rather than building white-label gear for one customer.",
    nvidiaConnection: {
      type: "direct",
      explanation: "Long-running NVIDIA partner across HGX, MGX and DGX-aligned systems. Often early to volume on new NVIDIA platforms."
    },
    businessModel: "Server OEM with high configurability and rapid platform iteration.",
    whatTheyDo: "Designs, manufactures and ships GPU servers, storage, networking and full racks. Strong in liquid-cooled high-density configurations.",
    productGroups: ["GPU servers", "Liquid-cooled racks", "Storage", "Networking"],
    upstreamDependencies: ["NVIDIA HGX baseboards", "Cooling components", "Networking"],
    downstreamCustomers: ["Cloud providers", "AI startups", "Enterprise"],
    competitors: ["Dell", "HPE", "Lenovo", "Foxconn / Wistron / Quanta / Wiwynn"],
    keyBottlenecks: ["NVIDIA component allocation", "Liquid-cooling supply"],
    whyItMattersForAI: "Supermicro is often first to ship new NVIDIA platforms in volume. That speed shapes how quickly AI customers can deploy each generation.",
    explainLikeImNew: "Supermicro is a US server company known for shipping new NVIDIA platforms quickly. They're an early choice for many AI startups.",
    learningQuestions: [
      "What is HGX and how does Supermicro use it?"
    ],
    sources: [{ label: "Supermicro NVIDIA Systems", url: "https://www.supermicro.com/en/accelerators/nvidia" }]
  },

  /* ── Cloud & Neocloud ──────────────────── */
  {
    id: "azure", name: "Microsoft Azure", fullName: "Microsoft Azure",
    category: "cloud", country: "United States",
    roleInStack: "Hyperscale cloud platform. One of the largest deployers of NVIDIA AI infrastructure, including for OpenAI workloads.",
    relationshipType: "cloud-deployer",
    relationshipToNvidia: "Has publicly announced first-at-scale GB300 NVL72 deployments for OpenAI workloads. Azure is among the largest customers for each new NVIDIA generation.",
    shortExplanation: "Microsoft's cloud rents NVIDIA GPU capacity to customers, including the largest training runs in the world.",
    takeaway: "First-at-scale GB300 NVL72 deployer; primary commercial host for OpenAI workloads.",
    commonMisunderstanding: "Azure is a top NVIDIA customer, but it is also building its own AI silicon (Maia). The relationship is large and multi-faceted, not a single-vendor lock.",
    nvidiaConnection: {
      type: "downstream",
      explanation: "Hyperscale cloud customer; first-at-scale GB300 NVL72 deployer for OpenAI. Also runs other workloads and develops Azure Maia custom silicon."
    },
    relatedQuestions: ["q-microsoft-tmi", "q-cloud-monetize", "q-asics-replacement", "q-how-gpu-made", "q-ppa", "q-smr", "q-bare-metal", "q-neocloud-vs-hyperscaler", "q-uae-saudi"],
    businessModel: "Cloud infrastructure-as-a-service plus AI platform services (Azure OpenAI Service).",
    whatTheyDo: "Operates global data centers running NVIDIA GPU clusters; sells GPU instances, AI platform services and integrated AI products tied to Microsoft 365 / Azure.",
    productGroups: ["ND GB300 v6 series", "ND H100/H200 series", "Azure OpenAI Service", "Azure AI Foundry"],
    upstreamDependencies: ["NVIDIA systems", "ODM-built racks", "Networking", "Power and cooling"],
    downstreamCustomers: ["OpenAI", "Enterprises", "Developers globally"],
    competitors: ["AWS", "Google Cloud", "Oracle Cloud"],
    keyBottlenecks: ["NVIDIA allocation", "Power and grid availability", "Liquid-cooled facility build pace"],
    whyItMattersForAI: "Azure's relationship with OpenAI made it the most visible commercial deployer of frontier-scale NVIDIA capacity. New-generation rollouts on Azure are an indicator of broader supply-chain timing.",
    explainLikeImNew: "Azure is Microsoft's cloud. They rent out the use of NVIDIA AI computers by the hour, and they run OpenAI's largest models.",
    learningQuestions: [
      "What is an Azure ND-series VM?",
      "What does it mean to be 'first at scale' on a new NVIDIA system?"
    ],
    sources: [{ label: "Azure GB300 NVL72 cluster announcement", url: "https://azure.microsoft.com/en-us/blog/microsoft-azure-delivers-the-first-large-scale-cluster-with-nvidia-gb300-nvl72-for-openai-workloads/" }]
  },
  {
    id: "aws", name: "AWS", fullName: "Amazon Web Services",
    category: "cloud", country: "United States",
    roleInStack: "Hyperscale cloud platform. Deploys NVIDIA GPUs alongside its own Trainium and Inferentia accelerators.",
    relationshipType: "cloud-deployer",
    relationshipToNvidia: "AWS is both a major NVIDIA cloud customer (P-series instances, including P6 with B200/B300) and a competitor through its in-house Trainium and Inferentia chips.",
    shortExplanation: "AWS rents NVIDIA GPU instances at global scale and also develops competing custom silicon.",
    takeaway: "The clearest test case for whether hyperscaler ASICs can substitute for NVIDIA at scale.",
    commonMisunderstanding: "AWS being a NVIDIA customer doesn't mean they are not also a competitor. Trainium and Inferentia compete directly with NVIDIA inside AWS workloads, and the same company runs both stories simultaneously.",
    nvidiaConnection: {
      type: "downstream",
      explanation: "Largest single hyperscale cloud customer category. Also the most credible long-term substitution risk via Trainium and Inferentia."
    },
    relatedQuestions: ["q-asics-replacement", "q-cuda-lockin", "q-rocm-vs-cuda", "q-cloud-monetize"],
    businessModel: "Cloud IaaS + AI platform (SageMaker, Bedrock).",
    whatTheyDo: "Operates the world's largest cloud by revenue. Designs custom AI silicon (Trainium, Inferentia) in parallel with NVIDIA-based instances.",
    productGroups: ["P6 instances (B200/B300)", "P5 instances (H100/H200)", "Trainium and Inferentia", "SageMaker", "Bedrock"],
    upstreamDependencies: ["NVIDIA systems", "ODM rack assembly", "TSMC for own silicon", "Power and cooling"],
    downstreamCustomers: ["Anthropic", "Enterprises", "Startups", "Developers"],
    competitors: ["Azure", "Google Cloud", "Oracle Cloud"],
    keyBottlenecks: ["NVIDIA allocation", "Custom silicon ramp", "Power"],
    whyItMattersForAI: "AWS is simultaneously the largest cloud and the largest hyperscaler-ASIC effort. It is a stress test of whether custom silicon can substantially substitute for NVIDIA in production workloads.",
    explainLikeImNew: "AWS is Amazon's cloud. They rent NVIDIA GPUs and they also build their own AI chips called Trainium and Inferentia.",
    learningQuestions: [
      "How do Trainium and Inferentia differ from NVIDIA GPUs in practice?",
      "Why does AWS still buy so many NVIDIA GPUs despite developing its own silicon?"
    ],
    sources: [{ label: "AWS P6 instances", url: "https://aws.amazon.com/ec2/instance-types/p6/" }]
  },
  {
    id: "gcp", name: "Google Cloud", fullName: "Google Cloud Platform",
    category: "cloud", country: "United States",
    roleInStack: "Hyperscale cloud platform. Operates both NVIDIA GPUs and Google's own TPU accelerators.",
    relationshipType: "cloud-deployer",
    relationshipToNvidia: "Google Cloud sells NVIDIA-based VMs (A4 / A4X with GB200/GB300) and simultaneously runs much of its own AI on Google-designed TPUs.",
    shortExplanation: "Google's cloud rents NVIDIA GPUs to customers while Google itself uses TPUs heavily for its own AI products.",
    takeaway: "Google's TPU is older than the current GPU AI cycle. They sell both.",
    commonMisunderstanding: "Having TPUs doesn't mean Google Cloud refuses NVIDIA. They sell both, with NVIDIA-based VMs (A4 / A4X) often the default for external customers and TPUs heavily used by Google's own teams.",
    nvidiaConnection: {
      type: "downstream",
      explanation: "Hyperscale cloud customer. Sells NVIDIA-based A4 and A4X VMs while also operating Google-designed TPUs internally."
    },
    relatedQuestions: ["q-asics-replacement", "q-cuda-lockin", "q-cloud-monetize"],
    businessModel: "Cloud IaaS + AI platform (Vertex AI).",
    whatTheyDo: "Operates global data centers, sells GPU and TPU instances, and provides AI platform services tied to Google's research models.",
    productGroups: ["A4X (GB200) / A4 (B200) VMs", "TPU v5p / Trillium", "Vertex AI", "Gemini API"],
    upstreamDependencies: ["NVIDIA systems", "TPU silicon (TSMC)", "ODM assembly", "Power"],
    downstreamCustomers: ["Enterprises", "Developers", "Anthropic (multi-cloud)"],
    competitors: ["AWS", "Azure", "Oracle Cloud"],
    keyBottlenecks: ["NVIDIA allocation", "TPU capacity", "Power"],
    whyItMattersForAI: "Google's TPU strategy is the longest-running hyperscaler-ASIC story. Google Cloud's mix of NVIDIA and TPU offerings is a useful signal for substitution dynamics.",
    explainLikeImNew: "Google Cloud rents NVIDIA chips and also has its own AI chip called the TPU. Google uses both to run their own AI services.",
    learningQuestions: [
      "Why does Google operate TPUs in addition to NVIDIA GPUs?",
      "How does TPU programming differ from CUDA?"
    ],
    sources: [{ label: "Google Cloud A4X VMs", url: "https://cloud.google.com/blog/products/compute/new-a4x-vms-powered-by-nvidia-gb200-gpus" }]
  },
  {
    id: "oracle-cloud", name: "Oracle Cloud", fullName: "Oracle Cloud Infrastructure (OCI)",
    category: "cloud", country: "United States",
    roleInStack: "Cloud platform with strong investment in NVIDIA GPU infrastructure for AI workloads.",
    relationshipType: "cloud-deployer",
    relationshipToNvidia: "Oracle has made very large public commitments to NVIDIA GPU infrastructure across multiple regions.",
    shortExplanation: "Oracle Cloud sells GPU clusters with high-bandwidth networking targeting AI training and inference customers.",
    businessModel: "Cloud IaaS + database and applications.",
    whatTheyDo: "Operates GPU-dense cloud regions with RDMA networking for AI customers, alongside its core database and SaaS business.",
    productGroups: ["GPU bare metal (H100/H200/B200)", "GB200 deployments", "Cloud@Customer"],
    upstreamDependencies: ["NVIDIA systems", "OEM/ODM integration", "Networking"],
    downstreamCustomers: ["AI labs", "Enterprises"],
    competitors: ["AWS", "Azure", "Google Cloud", "CoreWeave"],
    keyBottlenecks: ["NVIDIA allocation", "Region build pace"],
    whyItMattersForAI: "Oracle Cloud has been a destination for several large AI training contracts that did not land at the top three hyperscalers.",
    explainLikeImNew: "Oracle is best known for databases, but their cloud is now a major place for renting NVIDIA AI systems.",
    learningQuestions: [],
    sources: [{ label: "Oracle Cloud Infrastructure", url: "https://www.oracle.com/cloud/" }]
  },
  {
    id: "coreweave", name: "CoreWeave", fullName: "CoreWeave, Inc.",
    category: "cloud", country: "United States",
    roleInStack: "GPU-specialized cloud provider. Built specifically around NVIDIA infrastructure.",
    relationshipType: "cloud-deployer",
    relationshipToNvidia: "Long-standing close relationship with NVIDIA. CoreWeave is consistently among the early commercial deployers of new NVIDIA platforms.",
    shortExplanation: "CoreWeave is a 'neocloud' &mdash; a cloud built ground-up to rent NVIDIA GPUs at scale, with simpler economics than the hyperscalers.",
    takeaway: "An NVIDIA-native cloud built specifically for GPU workloads. No other businesses on the side.",
    commonMisunderstanding: "CoreWeave is not a hyperscaler in the AWS / Azure / GCP sense. They are a 'neocloud' &mdash; purpose-built specifically to rent NVIDIA GPU capacity, with none of the broader cloud surface a hyperscaler runs.",
    nvidiaConnection: {
      type: "downstream",
      explanation: "GPU-specialized cloud customer. Consistently among the early commercial deployers of new NVIDIA platforms."
    },
    relatedQuestions: ["q-cloud-monetize", "q-power-bound", "q-second-winners", "q-how-gpu-made", "q-neocloud-vs-hyperscaler", "q-bare-metal", "q-cluster-resilience", "q-gpu-utilization"],
    businessModel: "GPU IaaS focused on AI workloads, with multi-year capacity contracts.",
    whatTheyDo: "Operates large NVIDIA GPU clusters connected by InfiniBand or Spectrum-X. Targets AI labs, media and enterprise AI customers.",
    productGroups: ["NVIDIA H100/H200 clusters", "GB200/GB300 deployments", "Inference Cloud"],
    upstreamDependencies: ["NVIDIA systems", "ODM assembly", "Networking", "Real estate / power"],
    downstreamCustomers: ["AI labs (e.g. several frontier labs publicly)", "Media companies", "AI startups"],
    competitors: ["Hyperscaler clouds", "Lambda", "Crusoe", "Nebius"],
    keyBottlenecks: ["GPU allocation", "Power and data center capacity", "Capital intensity"],
    whyItMattersForAI: "CoreWeave shows what an NVIDIA-native cloud looks like at scale. Its growth is one signal of how much AI demand the hyperscalers cannot or do not absorb.",
    explainLikeImNew: "CoreWeave is a cloud company that only rents NVIDIA GPUs, with no other businesses on the side. They specialize.",
    learningQuestions: [
      "What does 'neocloud' mean?",
      "Why might an AI lab pick CoreWeave over Azure or AWS?"
    ],
    sources: [{ label: "CoreWeave", url: "https://www.coreweave.com/" }]
  },
  {
    id: "lambda", name: "Lambda", fullName: "Lambda, Inc.",
    category: "cloud", country: "United States",
    roleInStack: "GPU cloud and on-prem GPU server provider. Originally developer-focused.",
    relationshipType: "cloud-deployer",
    relationshipToNvidia: "Sells NVIDIA-based on-prem servers and runs an NVIDIA GPU cloud aimed at researchers and ML teams.",
    shortExplanation: "Lambda offers NVIDIA GPU compute through both rentable cloud and shippable workstations / servers.",
    businessModel: "GPU cloud + on-prem hardware sales.",
    whatTheyDo: "GPU cloud (1-Click Clusters), workstations and servers, training-focused tooling.",
    productGroups: ["1-Click Clusters (H100/H200)", "Lambda workstations", "Lambda servers"],
    upstreamDependencies: ["NVIDIA systems", "Networking"],
    downstreamCustomers: ["AI researchers", "ML teams", "Startups"],
    competitors: ["CoreWeave", "Crusoe", "Hyperscaler clouds"],
    keyBottlenecks: ["GPU allocation"],
    whyItMattersForAI: "A research-friendly entry point to NVIDIA infrastructure for teams that don't need hyperscaler-grade contracts.",
    explainLikeImNew: "Lambda is a smaller GPU cloud and hardware vendor. They started as the 'researcher's choice' for renting AI machines.",
    learningQuestions: [],
    sources: [{ label: "Lambda", url: "https://lambdalabs.com/" }]
  },
  {
    id: "crusoe", name: "Crusoe", fullName: "Crusoe Energy Systems",
    category: "cloud", country: "United States",
    roleInStack: "GPU cloud focused on climate-aligned compute powered by stranded or low-carbon energy.",
    relationshipType: "cloud-deployer",
    relationshipToNvidia: "Operates NVIDIA GPU clusters powered by sustainable or stranded energy sources.",
    shortExplanation: "Crusoe pairs NVIDIA infrastructure with energy-aware siting strategies.",
    businessModel: "GPU cloud with a sustainability-aligned siting and procurement strategy.",
    whatTheyDo: "Operates GPU clusters and large data center developments tied to specific energy projects.",
    productGroups: ["GPU cloud", "Data center development", "Industrial-scale compute campuses"],
    upstreamDependencies: ["NVIDIA systems", "Energy sources", "Real estate"],
    downstreamCustomers: ["AI customers prioritizing sustainability"],
    competitors: ["CoreWeave", "Lambda", "Nebius"],
    keyBottlenecks: ["Energy site availability"],
    whyItMattersForAI: "Demonstrates that energy strategy is now a first-order consideration in where AI compute gets built.",
    explainLikeImNew: "Crusoe is a GPU cloud that ties its data centers to specific clean or stranded energy sources.",
    learningQuestions: [],
    sources: [{ label: "Crusoe", url: "https://crusoe.ai/" }]
  },
  {
    id: "nebius", name: "Nebius", fullName: "Nebius Group",
    category: "cloud", country: "Netherlands",
    roleInStack: "AI-focused cloud platform building large-scale NVIDIA GPU capacity in multiple regions.",
    relationshipType: "cloud-deployer",
    relationshipToNvidia: "Builds AI cloud regions equipped with NVIDIA accelerators.",
    shortExplanation: "Nebius is a European-headquartered AI cloud company expanding NVIDIA capacity across regions.",
    businessModel: "AI cloud IaaS.",
    whatTheyDo: "Builds and operates GPU-dense data centers and offers AI platform services on top.",
    productGroups: ["GPU instances", "AI platform services"],
    upstreamDependencies: ["NVIDIA systems", "Power", "Networking"],
    downstreamCustomers: ["AI companies", "Researchers"],
    competitors: ["CoreWeave", "Lambda", "Crusoe"],
    keyBottlenecks: ["GPU allocation", "Region build pace"],
    whyItMattersForAI: "Adds geographic diversity to NVIDIA cloud capacity outside the dominant US-hyperscaler footprint.",
    explainLikeImNew: "Nebius is a European cloud focused on renting NVIDIA AI compute.",
    learningQuestions: [],
    sources: [{ label: "Nebius", url: "https://nebius.com/" }]
  },

  /* ── OEM & Enterprise ──────────────────── */
  {
    id: "dell", name: "Dell", fullName: "Dell Technologies",
    category: "oem", country: "United States",
    roleInStack: "Enterprise infrastructure provider. Builds NVIDIA-based AI servers and integrated factory solutions.",
    relationshipType: "oem-odm",
    relationshipToNvidia: "Has publicly partnered with NVIDIA on the Dell AI Factory, integrating PowerEdge GPU servers with NVIDIA software and reference architectures.",
    shortExplanation: "Dell turns NVIDIA components into enterprise-ready AI infrastructure that ships with full support.",
    businessModel: "OEM hardware + services + financing.",
    whatTheyDo: "Designs, manufactures, sells and supports PowerEdge servers (including GPU-rich AI configurations), storage, networking and AI factory solutions.",
    productGroups: ["PowerEdge GPU servers (incl. XE9680, XE9712)", "Dell AI Factory", "Storage", "Networking"],
    upstreamDependencies: ["NVIDIA HGX/MGX baseboards", "Networking", "Storage", "Cooling"],
    downstreamCustomers: ["Enterprises", "Government", "Service providers"],
    competitors: ["HPE", "Lenovo", "Supermicro"],
    keyBottlenecks: ["NVIDIA allocation", "Component supply"],
    whyItMattersForAI: "Most enterprises won't run hyperscaler-spec gear or operate it themselves. Dell-class vendors translate NVIDIA infrastructure into something an enterprise IT team can deploy.",
    explainLikeImNew: "Dell sells AI servers to companies that want their own AI hardware on-site, packaged with support.",
    learningQuestions: [
      "Why do some companies still want on-prem AI hardware in the cloud era?"
    ],
    sources: [{ label: "Dell AI Factory with NVIDIA", url: "https://www.dell.com/en-au/lp/dt/nvidia-ai" }]
  },
  {
    id: "hpe", name: "HPE", fullName: "Hewlett Packard Enterprise",
    category: "oem", country: "United States",
    roleInStack: "Enterprise and HPC infrastructure provider. Strong in supercomputing through Cray.",
    relationshipType: "oem-odm",
    relationshipToNvidia: "Integrates NVIDIA technology into ProLiant servers and Cray supercomputers, including very large training systems for governments and labs.",
    shortExplanation: "HPE builds enterprise servers and large supercomputers, with Cray providing the high-end HPC and AI lineage.",
    businessModel: "OEM hardware + HPC + services.",
    whatTheyDo: "Servers, storage, networking (Aruba), HPC supercomputers (Cray), private cloud (GreenLake).",
    productGroups: ["ProLiant DL/Apollo GPU servers", "Cray EX supercomputers", "GreenLake for AI", "Aruba networking"],
    upstreamDependencies: ["NVIDIA systems", "Networking (incl. Slingshot from Cray heritage)"],
    downstreamCustomers: ["Enterprises", "Government", "National labs"],
    competitors: ["Dell", "Lenovo", "Supermicro"],
    keyBottlenecks: ["NVIDIA allocation", "Supply timing for very large systems"],
    whyItMattersForAI: "HPE/Cray supercomputers are how nation-states and major research bodies acquire frontier AI capacity outside the hyperscaler model.",
    explainLikeImNew: "HPE owns Cray, the company that builds many of the world's biggest supercomputers. They sell those, plus regular servers.",
    learningQuestions: [
      "What is a Cray-class supercomputer and how does it differ from a hyperscaler cluster?"
    ],
    sources: [{ label: "HPE AI infrastructure", url: "https://www.hpe.com/us/en/solutions/artificial-intelligence.html" }]
  },
  {
    id: "lenovo", name: "Lenovo", fullName: "Lenovo Group Limited",
    category: "oem", country: "China / global",
    roleInStack: "Global server and PC OEM. Builds NVIDIA-based AI systems via the ThinkSystem line.",
    relationshipType: "oem-odm",
    relationshipToNvidia: "Ships NVIDIA-based servers and workstations through ThinkSystem and ThinkStation.",
    shortExplanation: "Lenovo serves enterprise and research customers with NVIDIA-equipped servers and workstations.",
    businessModel: "OEM hardware + services.",
    whatTheyDo: "Servers (ThinkSystem), workstations (ThinkStation), PCs, services. Significant HPC business.",
    productGroups: ["ThinkSystem GPU servers", "ThinkStation workstations", "Liquid-cooling solutions"],
    upstreamDependencies: ["NVIDIA components", "Cooling"],
    downstreamCustomers: ["Enterprises", "Research institutions", "Government"],
    competitors: ["Dell", "HPE", "Supermicro"],
    keyBottlenecks: ["NVIDIA allocation"],
    whyItMattersForAI: "Lenovo's distribution reaches customers outside North America and Europe at scale.",
    explainLikeImNew: "Lenovo sells servers and PCs globally. Their AI servers compete with Dell, HPE and Supermicro.",
    learningQuestions: [],
    sources: [{ label: "Lenovo AI", url: "https://www.lenovo.com/us/en/servers-storage/ai/" }]
  },
  {
    id: "cisco", name: "Cisco", fullName: "Cisco Systems, Inc.",
    category: "oem", country: "United States",
    roleInStack: "Networking giant. Building AI-focused server and networking products in partnership with NVIDIA.",
    relationshipType: "oem-odm",
    relationshipToNvidia: "Has publicly partnered with NVIDIA on AI infrastructure offerings combining Cisco networking with NVIDIA compute.",
    shortExplanation: "Cisco is the largest enterprise networking company; in AI it ties its networking with NVIDIA-based servers.",
    businessModel: "Networking and infrastructure hardware + software + services.",
    whatTheyDo: "Networking (switching, routing, security), data center infrastructure, collaboration, observability (Splunk).",
    productGroups: ["UCS GPU servers", "Nexus switches with AI fabric capabilities", "Hyperfabric AI"],
    upstreamDependencies: ["NVIDIA components", "Networking silicon"],
    downstreamCustomers: ["Enterprises", "Service providers"],
    competitors: ["Arista (networking)", "Dell / HPE (compute)"],
    keyBottlenecks: ["AI-specific feature parity vs Spectrum-X / InfiniBand at hyperscale"],
    whyItMattersForAI: "Most enterprise AI deployments still happen on enterprise networks. Cisco's evolution there matters.",
    explainLikeImNew: "Cisco runs most of the world's enterprise networks. They are extending that role into AI by combining their networking with NVIDIA compute.",
    learningQuestions: [],
    sources: [{ label: "Cisco AI Infrastructure", url: "https://www.cisco.com/site/us/en/solutions/artificial-intelligence/index.html" }]
  },
  {
    id: "asus", name: "ASUS", fullName: "ASUSTeK Computer Inc.",
    category: "oem", country: "Taiwan",
    roleInStack: "Manufacturer of NVIDIA-based servers, workstations and consumer GPUs.",
    relationshipType: "oem-odm",
    relationshipToNvidia: "Long-standing NVIDIA add-in-card partner; also ships NVIDIA-based servers and workstations.",
    shortExplanation: "ASUS produces NVIDIA products across consumer, professional and data center segments.",
    businessModel: "Hardware OEM across consumer and enterprise.",
    whatTheyDo: "Motherboards, GPUs (consumer add-in cards), workstations, servers, laptops.",
    productGroups: ["GeForce / RTX consumer cards (ROG, TUF)", "Workstations", "ESC AI servers"],
    upstreamDependencies: ["NVIDIA GPUs", "Components"],
    downstreamCustomers: ["Consumers", "Professionals", "Data centers"],
    competitors: ["Gigabyte", "MSI", "PNY", "Server OEMs"],
    keyBottlenecks: ["GPU allocation"],
    whyItMattersForAI: "Sells NVIDIA add-in cards into the consumer + small-business AI inference market.",
    explainLikeImNew: "ASUS is a Taiwanese company that makes everything from gaming laptops to AI servers, all using NVIDIA chips.",
    learningQuestions: [],
    sources: [{ label: "ASUS AI servers", url: "https://servers.asus.com/" }]
  },
  {
    id: "gigabyte", name: "Gigabyte", fullName: "Gigabyte Technology Co., Ltd.",
    category: "oem", country: "Taiwan",
    roleInStack: "Manufacturer of NVIDIA-based servers, motherboards and consumer GPUs.",
    relationshipType: "oem-odm",
    relationshipToNvidia: "Add-in-card and server partner; ships GPU servers including HGX/MGX configurations.",
    shortExplanation: "Gigabyte's server arm Giga Computing produces NVIDIA-based GPU systems across multiple segments.",
    businessModel: "Hardware OEM.",
    whatTheyDo: "GPU servers, motherboards, consumer GPUs, networking.",
    productGroups: ["G-series GPU servers", "Aorus consumer GPUs"],
    upstreamDependencies: ["NVIDIA GPUs", "Components"],
    downstreamCustomers: ["Data centers", "Consumers", "Workstation users"],
    competitors: ["ASUS", "Supermicro", "Server OEMs"],
    keyBottlenecks: ["GPU allocation"],
    whyItMattersForAI: "Adds capacity to the NVIDIA server channel, particularly in Asia-Pacific.",
    explainLikeImNew: "Gigabyte is another Taiwanese hardware company. They make NVIDIA gaming cards and AI servers.",
    learningQuestions: [],
    sources: [{ label: "Giga Computing (Gigabyte)", url: "https://www.gigabyte.com/Enterprise" }]
  },

  /* ── Power & Grid ──────────────────────── */
  {
    id: "constellation-energy", name: "Constellation Energy", fullName: "Constellation Energy Corporation",
    category: "power", country: "United States",
    roleInStack: "Largest US producer of carbon-free electricity, primarily nuclear. Major counterparty for hyperscaler clean-energy contracts.",
    relationshipType: "adjacent-infra",
    relationshipToNvidia: "Not a direct NVIDIA supplier. Supplies electricity to data centers running NVIDIA infrastructure. Publicly announced power-purchase agreements with hyperscalers, including the Three Mile Island restart for Microsoft.",
    shortExplanation: "Constellation generates electricity (mostly nuclear) and sells it under long-term contracts to large customers, including AI data center operators.",
    businessModel: "Independent power producer + retail electricity supplier.",
    whatTheyDo: "Operates nuclear, hydro, wind, solar and gas generation. Sells power and clean-energy products to commercial and industrial customers.",
    productGroups: ["Nuclear generation", "Renewable PPAs", "Clean-energy attributes", "Demand response"],
    upstreamDependencies: ["Fuel and uranium supply", "Grid interconnection rights"],
    downstreamCustomers: ["Microsoft (Three Mile Island restart)", "Other hyperscalers and large industrials"],
    competitors: ["Vistra", "NextEra", "Other IPPs"],
    keyBottlenecks: ["Nuclear restart and uprate timelines", "Grid interconnection"],
    whyItMattersForAI: "AI compute is power-bound. Long-duration nuclear PPAs are a primary way hyperscalers secure firm clean energy at multi-hundred-megawatt scale.",
    explainLikeImNew: "Constellation runs many of America's nuclear power plants. They sell that electricity, and AI companies are increasingly their biggest customers.",
    learningQuestions: [
      "Why are nuclear plants attractive for AI data centers specifically?",
      "What is a power purchase agreement (PPA)?"
    ],
    sources: [{ label: "Constellation Energy", url: "https://www.constellationenergy.com/" }]
  },
  {
    id: "nextera", name: "NextEra Energy", fullName: "NextEra Energy, Inc.",
    category: "power", country: "United States",
    roleInStack: "Largest US generator of wind and solar electricity. Major counterparty for hyperscaler renewable PPAs.",
    relationshipType: "adjacent-infra",
    relationshipToNvidia: "Not a direct NVIDIA supplier. Supplies renewable electricity under PPA to large industrial customers, including data center developers serving AI workloads.",
    shortExplanation: "NextEra builds and operates renewable generation at scale, often selling output through long-term PPAs.",
    businessModel: "Regulated utility (FPL) + renewable generation business.",
    whatTheyDo: "Operates wind, solar and storage facilities; runs Florida Power & Light. Develops large pipelines of new renewable generation.",
    productGroups: ["Wind generation", "Solar generation", "Battery storage", "Regulated utility (FPL)"],
    upstreamDependencies: ["Grid interconnection", "Land", "Equipment supply (turbines, modules)"],
    downstreamCustomers: ["Hyperscalers and large industrials", "FPL retail customers"],
    competitors: ["Other renewable developers", "Nuclear / gas IPPs"],
    keyBottlenecks: ["Interconnection queues", "Permitting timelines"],
    whyItMattersForAI: "Hyperscalers' clean-energy commitments rely heavily on building new renewable capacity. NextEra is among the largest providers of that capacity.",
    explainLikeImNew: "NextEra builds wind and solar farms across America. AI companies sign long-term contracts to buy that electricity.",
    learningQuestions: [
      "Why is interconnection queue length a bottleneck for AI build-outs?"
    ],
    sources: [{ label: "NextEra Energy", url: "https://www.nexteraenergy.com/" }]
  },
  {
    id: "vistra", name: "Vistra", fullName: "Vistra Corp.",
    category: "power", country: "United States",
    roleInStack: "Independent power producer. Operates nuclear, gas and renewable generation; counterparty to data center power contracts.",
    relationshipType: "adjacent-infra",
    relationshipToNvidia: "Not a direct NVIDIA supplier. Sells electricity to data centers among other customers.",
    shortExplanation: "Vistra is a large IPP with a mixed-fuel fleet, increasingly visible in data center power discussions.",
    businessModel: "Independent power producer + retail.",
    whatTheyDo: "Operates a generation fleet across multiple fuels and runs retail electricity businesses.",
    productGroups: ["Nuclear (Comanche Peak)", "Gas generation", "Renewables", "Retail electricity"],
    upstreamDependencies: ["Fuel", "Grid"],
    downstreamCustomers: ["Industrial customers", "Data centers"],
    competitors: ["Constellation", "NextEra", "Other IPPs"],
    keyBottlenecks: ["Permitting", "Grid interconnection"],
    whyItMattersForAI: "Adds firm and dispatchable power options to the AI energy mix.",
    explainLikeImNew: "Vistra is another big US power company. They run a mix of nuclear, natural gas and renewables.",
    learningQuestions: [],
    sources: [{ label: "Vistra", url: "https://www.vistracorp.com/" }]
  },
  {
    id: "duke", name: "Duke Energy", fullName: "Duke Energy Corporation",
    category: "power", country: "United States",
    roleInStack: "Regulated utility serving large parts of the southeastern US, including major data center growth regions.",
    relationshipType: "adjacent-infra",
    relationshipToNvidia: "Not a direct NVIDIA supplier. Provides regulated electricity service to data centers in its territory.",
    shortExplanation: "Duke is one of the largest US regulated utilities; its territory includes some of the fastest-growing data center markets.",
    businessModel: "Regulated electric and gas utility.",
    whatTheyDo: "Generation, transmission and distribution of electricity across multiple states; gas distribution.",
    productGroups: ["Regulated electric service", "Generation portfolio (nuclear, gas, renewables)", "Gas distribution"],
    upstreamDependencies: ["Fuel", "Capital", "Regulatory approvals"],
    downstreamCustomers: ["Residential and industrial customers", "Data center developers"],
    competitors: ["Other regulated utilities by territory"],
    keyBottlenecks: ["Resource planning approval", "Generation build pace"],
    whyItMattersForAI: "Regulated utilities are the gatekeepers for many southeastern US data center sites where AI capacity is being built.",
    explainLikeImNew: "Duke is the electric company for big parts of the US Southeast. New AI data centers in their region need their permission and infrastructure.",
    learningQuestions: [],
    sources: [{ label: "Duke Energy", url: "https://www.duke-energy.com/" }]
  },
  {
    id: "southern-co", name: "Southern Company", fullName: "Southern Company",
    category: "power", country: "United States",
    roleInStack: "Regulated utility holding company across the US Southeast. Operates Vogtle nuclear plant.",
    relationshipType: "adjacent-infra",
    relationshipToNvidia: "Not a direct NVIDIA supplier. Provides regulated electricity to growing data center load in its territory.",
    shortExplanation: "Southern Company runs Georgia Power and other utilities in the Southeast; relevant for data center siting decisions.",
    businessModel: "Regulated electric and gas utility holding.",
    whatTheyDo: "Generation including new nuclear (Vogtle Unit 3 and 4), transmission, distribution.",
    productGroups: ["Nuclear (Vogtle)", "Gas", "Renewables", "Regulated distribution"],
    upstreamDependencies: ["Fuel", "Regulatory approvals"],
    downstreamCustomers: ["Residential and industrial customers", "Data center developers"],
    competitors: ["Other regulated utilities by territory"],
    keyBottlenecks: ["Capital cost overruns at new nuclear", "Generation buildout pace"],
    whyItMattersForAI: "Vogtle 3/4 are the only new US nuclear units in decades. Their existence affects how Southeast utilities can serve large new loads.",
    explainLikeImNew: "Southern Company is the parent of Georgia Power. They recently finished new nuclear reactors that help supply electricity to Southeast data centers.",
    learningQuestions: [],
    sources: [{ label: "Southern Company", url: "https://www.southerncompany.com/" }]
  },
  {
    id: "dominion", name: "Dominion Energy", fullName: "Dominion Energy, Inc.",
    category: "power", country: "United States",
    roleInStack: "Regulated utility serving Virginia and other states. Northern Virginia hosts the world's densest concentration of data centers.",
    relationshipType: "adjacent-infra",
    relationshipToNvidia: "Not a direct NVIDIA supplier. Provides regulated electricity to Northern Virginia data center alley.",
    shortExplanation: "Dominion is the utility for Northern Virginia, the densest data center cluster in the world.",
    businessModel: "Regulated electric utility.",
    whatTheyDo: "Generation, transmission and distribution. Heavy data center growth has reshaped Dominion's load forecasts.",
    productGroups: ["Regulated electricity", "Generation (gas, nuclear, renewables, offshore wind)"],
    upstreamDependencies: ["Fuel", "Capital", "Permitting"],
    downstreamCustomers: ["Residential and industrial customers", "Northern Virginia data center operators"],
    competitors: ["Other regulated utilities by territory"],
    keyBottlenecks: ["Transmission expansion", "Generation buildout"],
    whyItMattersForAI: "Northern Virginia is the most concentrated AI/cloud data center region globally. Dominion's pace determines how much further it can grow.",
    explainLikeImNew: "Dominion is the electric company for Northern Virginia, where many of the world's biggest data centers sit.",
    learningQuestions: [
      "Why is Northern Virginia such a dense data center cluster?"
    ],
    sources: [{ label: "Dominion Energy", url: "https://www.dominionenergy.com/" }]
  },
  {
    id: "aep", name: "AEP", fullName: "American Electric Power Company, Inc.",
    category: "power", country: "United States",
    roleInStack: "Major US electric utility holding with a vast transmission footprint.",
    relationshipType: "adjacent-infra",
    relationshipToNvidia: "Not a direct NVIDIA supplier. Provides electricity and transmission to many Midwestern and Southern data center sites.",
    shortExplanation: "AEP operates one of the largest US transmission systems, an asset that matters as data center loads grow.",
    businessModel: "Regulated utility + transmission.",
    whatTheyDo: "Generation, transmission, distribution across multiple states.",
    productGroups: ["Generation portfolio", "Transmission", "Regulated distribution"],
    upstreamDependencies: ["Fuel", "Capital", "Regulatory approvals"],
    downstreamCustomers: ["Residential and industrial customers", "Data center developers"],
    competitors: ["Other regulated utilities by territory"],
    keyBottlenecks: ["Transmission buildout pace"],
    whyItMattersForAI: "Transmission capacity, not just generation, governs how quickly new AI loads can be served.",
    explainLikeImNew: "AEP runs power lines and electricity service across many US states. New data centers need to connect to those lines.",
    learningQuestions: [],
    sources: [{ label: "American Electric Power", url: "https://www.aep.com/" }]
  },
  {
    id: "entergy", name: "Entergy", fullName: "Entergy Corporation",
    category: "power", country: "United States",
    roleInStack: "Regulated utility primarily across the US Gulf South.",
    relationshipType: "adjacent-infra",
    relationshipToNvidia: "Not a direct NVIDIA supplier. Provides electricity to large industrial customers including data centers.",
    shortExplanation: "Entergy serves Louisiana, Mississippi, Arkansas and parts of Texas. Its territory has seen significant new industrial / data center load.",
    businessModel: "Regulated utility.",
    whatTheyDo: "Generation, transmission and distribution.",
    productGroups: ["Regulated electricity", "Nuclear", "Gas generation", "Renewables"],
    upstreamDependencies: ["Fuel", "Capital", "Regulatory approvals"],
    downstreamCustomers: ["Residential and industrial customers", "Data center operators"],
    competitors: ["Other regulated utilities by territory"],
    keyBottlenecks: ["Generation expansion", "Resource planning approvals"],
    whyItMattersForAI: "Adds Gulf South load capacity to the AI build map.",
    explainLikeImNew: "Entergy is the electric company in much of the US Gulf South.",
    learningQuestions: [],
    sources: [{ label: "Entergy", url: "https://www.entergy.com/" }]
  },
  {
    id: "exelon", name: "Exelon", fullName: "Exelon Corporation",
    category: "power", country: "United States",
    roleInStack: "Holding company for several large US transmission and distribution utilities (ComEd, PECO, BGE, Pepco, Atlantic City Electric, Delmarva Power).",
    relationshipType: "adjacent-infra",
    relationshipToNvidia: "Not a direct NVIDIA supplier. Operates the wires that serve major data center markets in the mid-Atlantic and Midwest.",
    shortExplanation: "Exelon is now primarily a transmission and distribution company after spinning off its generation business as Constellation.",
    businessModel: "Regulated transmission and distribution utility.",
    whatTheyDo: "Operates and maintains transmission and distribution networks across multiple states.",
    productGroups: ["Regulated T&D"],
    upstreamDependencies: ["Generation supply", "Regulatory approvals"],
    downstreamCustomers: ["Residential and industrial customers", "Data centers"],
    competitors: ["Other regulated utilities by territory"],
    keyBottlenecks: ["Distribution and transmission upgrades"],
    whyItMattersForAI: "T&D capacity shapes which sites can be electrified for AI workloads on what timeline.",
    explainLikeImNew: "Exelon is mostly the wires-and-poles part of electricity (not the power plants). They deliver power in many big US cities.",
    learningQuestions: [],
    sources: [{ label: "Exelon", url: "https://www.exeloncorp.com/" }]
  },
  {
    id: "schneider", name: "Schneider Electric", fullName: "Schneider Electric SE",
    category: "power", country: "France",
    roleInStack: "Major supplier of electrical distribution, UPS, switchgear, racks, and increasingly liquid-cooling solutions for data centers.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Schneider has publicly partnered with NVIDIA on reference data center designs that integrate Schneider electrical and cooling systems with NVIDIA AI infrastructure.",
    shortExplanation: "Schneider provides the electrical and cooling backbone of data centers that house AI infrastructure.",
    takeaway: "The electrical backbone of AI data centers &mdash; switchgear, UPS, busbars, racks, and now CDUs.",
    commonMisunderstanding: "Schneider's relevance to AI is more than APC UPSs. They acquired Motivair (CDUs for liquid cooling) and have public reference designs with NVIDIA for AI data centers.",
    nvidiaConnection: {
      type: "ecosystem",
      explanation: "Public reference designs with NVIDIA. Supplies switchgear, UPS, racks, busways, and (via Motivair) coolant distribution units for liquid-cooled racks."
    },
    relatedQuestions: ["q-power-bound", "q-liquid-cooling", "q-second-winners", "q-bottlenecks-overview", "q-cooling-types", "q-ai-dc-design", "q-grid-interconnect", "q-transformer-shortage"],
    businessModel: "Electrical and infrastructure equipment + software (EcoStruxure) + services.",
    whatTheyDo: "Switchgear, transformers, UPS, PDUs, busways, racks, liquid cooling, building management.",
    productGroups: ["Galaxy / Symmetra UPS", "EcoStruxure IT", "APC racks and PDUs", "Motivair (liquid cooling, acquired)", "Switchgear"],
    upstreamDependencies: ["Electrical components", "Steel and copper"],
    downstreamCustomers: ["Hyperscalers", "Colocation operators", "Enterprise data centers"],
    competitors: ["Eaton", "Vertiv", "ABB", "Siemens Energy"],
    keyBottlenecks: ["Lead times on switchgear and transformers", "Liquid-cooling supply"],
    whyItMattersForAI: "AI factories cannot operate without high-density power and cooling. Schneider's reference designs with NVIDIA aim to standardize that build.",
    explainLikeImNew: "Schneider makes the electrical guts of data centers &mdash; switchboards, UPS systems, racks, cooling. They partner with NVIDIA on how to design AI data centers.",
    learningQuestions: [
      "What is a UPS and why does a data center need one?"
    ],
    sources: [{ label: "Schneider Electric data center", url: "https://www.se.com/ww/en/work/solutions/for-business/data-centers-and-networks/" }]
  },
  {
    id: "vertiv", name: "Vertiv", fullName: "Vertiv Holdings Co.",
    category: "power", country: "United States",
    roleInStack: "Specialist supplier of data center power and thermal management. Direct beneficiary of liquid-cooling adoption.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Vertiv has publicly partnered with NVIDIA on reference designs for AI factories, particularly around liquid cooling for high-density GPU racks.",
    shortExplanation: "Vertiv builds the cooling, power and rack infrastructure that data centers need to host AI workloads.",
    takeaway: "The cooling and power infrastructure behind every liquid-cooled AI rack.",
    commonMisunderstanding: "Vertiv isn't only a backup-power company. Their thermal-management business (Liebert) is one of the most direct beneficiaries of GB200 NVL72-class liquid-cooling adoption.",
    nvidiaConnection: {
      type: "ecosystem",
      explanation: "Public reference designs with NVIDIA for AI factories. Supplies UPS, racks, busways, and liquid cooling (CDUs, cold-plate solutions)."
    },
    relatedQuestions: ["q-liquid-cooling", "q-power-bound", "q-second-winners", "q-bottlenecks-overview", "q-cooling-types", "q-ai-dc-design", "q-water", "q-transformer-shortage"],
    businessModel: "Critical infrastructure equipment + services.",
    whatTheyDo: "Liebert thermal management, UPS, switchgear, busbars, racks, monitoring software.",
    productGroups: ["Liebert thermal (incl. liquid cooling, CDUs)", "Liebert UPS", "Geist racks and PDUs", "Switchgear"],
    upstreamDependencies: ["Compressors, pumps, copper, steel"],
    downstreamCustomers: ["Hyperscalers", "Colocation", "Enterprise"],
    competitors: ["Schneider Electric", "Eaton", "Stulz"],
    keyBottlenecks: ["Liquid cooling component lead times", "Manufacturing capacity expansion"],
    whyItMattersForAI: "Liquid cooling is now mandatory for new NVIDIA rack-scale systems. Vertiv is one of the primary suppliers of that hardware.",
    explainLikeImNew: "Vertiv makes the cooling and power systems that keep AI servers from melting. They are directly downstream of NVIDIA's high-density rack designs.",
    learningQuestions: [
      "What is a coolant distribution unit (CDU) and why does GB200 need one?"
    ],
    sources: [{ label: "Vertiv AI infrastructure", url: "https://www.vertiv.com/en-us/solutions/topics/ai-infrastructure/" }]
  },
  {
    id: "eaton", name: "Eaton", fullName: "Eaton Corporation plc",
    category: "power", country: "Ireland (HQ) / global",
    roleInStack: "Diversified power management company. Major data center electrical supplier.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Supplies electrical infrastructure into data centers running AI workloads. Has publicly discussed partnerships and reference architectures with NVIDIA-aligned designs.",
    shortExplanation: "Eaton provides UPS, switchgear, busways and broader electrical systems to data centers and other industrial buyers.",
    takeaway: "Switchgear and busways are now multi-quarter lead-time items &mdash; Eaton's capacity is part of the AI build pace.",
    commonMisunderstanding: "Eaton's data-center business is heavier in switchgear and busways than in UPS. Switchgear lead times have stretched into a real constraint on AI campus energization timelines.",
    nvidiaConnection: {
      type: "ecosystem",
      explanation: "Supplies electrical infrastructure into data centers that host NVIDIA systems. Public partnership references with NVIDIA on AI-aligned designs."
    },
    businessModel: "Electrical and industrial equipment + services.",
    whatTheyDo: "Power distribution, UPS, switchgear, automation, aerospace, vehicle electrical.",
    productGroups: ["Power Xpert UPS", "Switchgear", "Busways", "Power monitoring"],
    upstreamDependencies: ["Electrical components", "Steel, copper"],
    downstreamCustomers: ["Data center operators", "Industrial customers", "Utilities"],
    competitors: ["Schneider", "Vertiv", "ABB"],
    keyBottlenecks: ["Switchgear and transformer lead times"],
    whyItMattersForAI: "Power distribution equipment is in chronic shortage. Eaton's capacity directly affects when new AI sites can energize.",
    explainLikeImNew: "Eaton makes industrial electrical equipment, including the systems that route power inside large data centers.",
    learningQuestions: [
      "Why are switchgear lead times such a constraint right now?"
    ],
    sources: [{ label: "Eaton data centers", url: "https://www.eaton.com/us/en-us/markets/data-center-solutions.html" }]
  },
  {
    id: "abb", name: "ABB", fullName: "ABB Ltd",
    category: "power", country: "Switzerland",
    roleInStack: "Electrification and automation giant. Supplies medium- and low-voltage equipment to data centers.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Supplies electrical infrastructure to data center operators globally.",
    shortExplanation: "ABB is one of the largest global electrification companies; data centers are a growing share of its addressable market.",
    businessModel: "Electrification, motion, process automation + robotics.",
    whatTheyDo: "Switchgear, drives, motors, transformers, automation, robotics.",
    productGroups: ["Medium- and low-voltage switchgear", "Transformers", "UPS (legacy + select)", "Robotics"],
    upstreamDependencies: ["Electrical components", "Steel, copper"],
    downstreamCustomers: ["Industrial customers", "Data centers", "Utilities"],
    competitors: ["Schneider", "Eaton", "Siemens Energy"],
    keyBottlenecks: ["Transformer and switchgear capacity"],
    whyItMattersForAI: "ABB equipment underlies large-scale electrification of new AI campuses, especially in Europe and Asia.",
    explainLikeImNew: "ABB is a Swiss industrial giant. They make the heavy electrical equipment that gets installed when a new data center connects to the grid.",
    learningQuestions: [],
    sources: [{ label: "ABB", url: "https://global.abb/group/en" }]
  },
  {
    id: "siemens-energy", name: "Siemens Energy", fullName: "Siemens Energy AG",
    category: "power", country: "Germany",
    roleInStack: "Spun-off energy business of Siemens. Supplies grid technology, gas turbines and power transmission equipment.",
    relationshipType: "adjacent-infra",
    relationshipToNvidia: "Not a direct NVIDIA supplier. Equipment serves utilities and industrial customers including data center campuses.",
    shortExplanation: "Siemens Energy makes large equipment for the grid and for power generation: transformers, switchgear, gas turbines, transmission systems.",
    businessModel: "Industrial power equipment + services.",
    whatTheyDo: "Grid technologies (transmission, transformers), gas turbines, electrification, wind energy (Siemens Gamesa).",
    productGroups: ["Transformers", "HVDC transmission", "Gas turbines", "Wind (Gamesa)"],
    upstreamDependencies: ["Steel, copper, electrical components"],
    downstreamCustomers: ["Utilities", "Industrial customers"],
    competitors: ["GE Vernova", "Hitachi Energy", "ABB"],
    keyBottlenecks: ["Transformer manufacturing capacity"],
    whyItMattersForAI: "Large transformers and HVDC systems are critical for AI campus electrification. Siemens Energy is one of the few suppliers at the largest sizes.",
    explainLikeImNew: "Siemens Energy makes the giant transformers and gas turbines that connect data centers to the grid.",
    learningQuestions: [
      "Why are large transformers a global supply constraint right now?"
    ],
    sources: [{ label: "Siemens Energy", url: "https://www.siemens-energy.com/" }]
  },
  {
    id: "ge-vernova", name: "GE Vernova", fullName: "GE Vernova LLC",
    category: "power", country: "United States",
    roleInStack: "GE's spun-off energy business. Supplies grid, gas turbines, nuclear technology and wind.",
    relationshipType: "adjacent-infra",
    relationshipToNvidia: "Not a direct NVIDIA supplier. Equipment serves utilities and industrial customers building generation and transmission for new AI loads.",
    shortExplanation: "GE Vernova combines GE's gas, grid, wind and nuclear businesses into a focused energy company.",
    businessModel: "Industrial power equipment + services.",
    whatTheyDo: "Gas turbines, grid solutions (Prolec, transformers), wind (onshore and offshore), nuclear (BWRX-300 SMR).",
    productGroups: ["Gas turbines (HA class)", "Grid solutions", "Wind", "Nuclear (BWRX-300)"],
    upstreamDependencies: ["Steel, specialty materials"],
    downstreamCustomers: ["Utilities", "Industrial customers", "Power developers"],
    competitors: ["Siemens Energy", "Mitsubishi Power", "Westinghouse (nuclear)"],
    keyBottlenecks: ["Gas turbine production slots", "SMR deployment timelines"],
    whyItMattersForAI: "AI loads are reviving demand for new gas peakers and reigniting interest in SMRs. GE Vernova is positioned in both.",
    explainLikeImNew: "GE Vernova makes power plants and grid equipment. With AI demand surging, their gas turbines and small reactor designs are getting new attention.",
    learningQuestions: [
      "What is an SMR and why does it interest hyperscalers?"
    ],
    sources: [{ label: "GE Vernova", url: "https://www.gevernova.com/" }]
  },
  {
    id: "legrand", name: "Legrand", fullName: "Legrand SA",
    category: "power", country: "France",
    roleInStack: "Specialist in low-voltage electrical and digital building infrastructure, including data center racks and PDUs (Raritan, Server Technology, Starline).",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Supplies racks, PDUs and busways into data centers including AI sites.",
    shortExplanation: "Legrand owns several leading data center brands for racks, PDUs and overhead busway systems.",
    businessModel: "Electrical equipment + accessories.",
    whatTheyDo: "Low-voltage electrical infrastructure, data center racks, intelligent PDUs, cabling systems.",
    productGroups: ["Raritan PDUs", "Server Technology PDUs", "Starline busway", "Racks (Minkels, Legrand)"],
    upstreamDependencies: ["Electrical components"],
    downstreamCustomers: ["Data center operators", "Enterprises"],
    competitors: ["Vertiv (Geist)", "Schneider (APC)", "Eaton"],
    keyBottlenecks: ["PDU and rack supply ramp"],
    whyItMattersForAI: "Every AI rack needs intelligent PDUs and busway power delivery. Legrand brands are heavily used.",
    explainLikeImNew: "Legrand makes the racks, power strips and overhead busbars inside data centers. They are inside many AI deployments without being a household name.",
    learningQuestions: [],
    sources: [{ label: "Legrand data center", url: "https://www.legrand.us/data-center" }]
  },
  {
    id: "delta-electronics", name: "Delta Electronics", fullName: "Delta Electronics, Inc.",
    category: "power", country: "Taiwan",
    roleInStack: "Major supplier of power supplies, UPS, cooling fans and electrical components to the server and data center industries.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Supplies power and thermal components into NVIDIA-based servers and data center infrastructure.",
    shortExplanation: "Delta makes the power supplies and thermal components inside many of the world's servers, including NVIDIA-based AI systems.",
    businessModel: "Components and integrated infrastructure.",
    whatTheyDo: "Server power supplies, UPS, fans, EV components, automation, telecom power.",
    productGroups: ["Server power supplies (PSUs)", "UPS", "DC power systems", "Cooling fans"],
    upstreamDependencies: ["Power semiconductors", "Magnetics"],
    downstreamCustomers: ["Server OEMs and ODMs", "Telecom operators", "EV makers"],
    competitors: ["Lite-On", "Acbel", "FSP"],
    keyBottlenecks: ["Power-semiconductor supply"],
    whyItMattersForAI: "Behind every GPU server is a power supply, and Delta is one of the dominant suppliers of those PSUs.",
    explainLikeImNew: "Delta makes the small but crucial power supply units inside servers. Without them, no GPU runs.",
    learningQuestions: [],
    sources: [{ label: "Delta Electronics", url: "https://www.deltaww.com/" }]
  },

  /* ── Cooling specialists ───────────────── */
  {
    id: "motivair", name: "Motivair", fullName: "Motivair Corporation (Schneider Electric)",
    category: "cooling", country: "United States (acquired by Schneider Electric)",
    roleInStack: "Specialist in liquid cooling distribution units (CDUs) and high-density thermal management.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Coolant distribution units used in NVIDIA-based liquid-cooled deployments.",
    shortExplanation: "Motivair (now part of Schneider Electric) builds the CDUs that pump coolant through liquid-cooled GPU racks.",
    businessModel: "Specialized industrial cooling equipment.",
    whatTheyDo: "CDUs, dry coolers, chillers, heat exchangers tailored to data center liquid cooling.",
    productGroups: ["Coolant distribution units (CDUs)", "Heat rejection systems"],
    upstreamDependencies: ["Pumps, heat exchangers, controls"],
    downstreamCustomers: ["Hyperscalers", "Colocation", "Enterprise"],
    competitors: ["Vertiv", "CoolIT", "Boyd"],
    keyBottlenecks: ["CDU production capacity"],
    whyItMattersForAI: "Each liquid-cooled NVIDIA rack needs at least one CDU. Motivair is a leading supplier of that hardware.",
    explainLikeImNew: "Motivair makes the radiator-and-pump boxes that move cool liquid through AI server racks. Without them, modern AI racks overheat.",
    learningQuestions: [],
    sources: [{ label: "Motivair", url: "https://www.motivaircorp.com/" }]
  },
  {
    id: "coolit", name: "CoolIT Systems", fullName: "CoolIT Systems Inc.",
    category: "cooling", country: "Canada",
    roleInStack: "Direct-liquid-cooling specialist used in many high-density GPU deployments.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Direct-liquid-cooling cold plates and CDUs used in OEM and ODM-built NVIDIA servers.",
    shortExplanation: "CoolIT designs the cold plates, manifolds and CDUs inside many liquid-cooled GPU servers.",
    businessModel: "Specialized cooling components and systems.",
    whatTheyDo: "Cold plates, manifolds, CDUs, full DLC reference designs.",
    productGroups: ["Cold plates", "CDUs", "Liquid cooling reference designs"],
    upstreamDependencies: ["Copper, fittings, pumps"],
    downstreamCustomers: ["Server OEMs and ODMs", "Hyperscalers"],
    competitors: ["Vertiv", "Motivair", "Boyd"],
    keyBottlenecks: ["Cold plate manufacturing capacity"],
    whyItMattersForAI: "Each Blackwell GPU package gets its heat removed via cold plates. CoolIT is one of the top vendors of that exact hardware.",
    explainLikeImNew: "CoolIT designs the metal plates that sit directly on top of GPUs and carry away their heat using flowing liquid.",
    learningQuestions: [
      "What is direct liquid cooling and how does it differ from immersion cooling?"
    ],
    sources: [{ label: "CoolIT Systems", url: "https://www.coolitsystems.com/" }]
  },
  {
    id: "boyd", name: "Boyd", fullName: "Boyd Corporation",
    category: "cooling", country: "United States",
    roleInStack: "Specialist in thermal management, including liquid cooling for data centers.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Cooling components used in NVIDIA-based system designs.",
    shortExplanation: "Boyd provides cold plates, heat sinks and thermal interface solutions used across the electronics industry, including AI servers.",
    businessModel: "Engineered materials + thermal solutions.",
    whatTheyDo: "Cold plates, liquid cooling systems, thermal interface materials, sealing.",
    productGroups: ["Cold plates", "Heat sinks", "Liquid cooling solutions"],
    upstreamDependencies: ["Materials, machining"],
    downstreamCustomers: ["Server OEMs and ODMs"],
    competitors: ["CoolIT", "Vertiv", "Asetek"],
    keyBottlenecks: ["Manufacturing capacity"],
    whyItMattersForAI: "Adds to the global supply of liquid-cooling components for high-density AI racks.",
    explainLikeImNew: "Boyd is a less famous but important supplier of the cold plates and thermal materials inside AI servers.",
    learningQuestions: [],
    sources: [{ label: "Boyd Corporation", url: "https://www.boydcorp.com/" }]
  },
  {
    id: "submer", name: "Submer", fullName: "Submer Technologies",
    category: "cooling", country: "Spain",
    roleInStack: "Single-phase immersion cooling specialist.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Immersion solutions used by select operators running NVIDIA accelerators.",
    shortExplanation: "Submer dunks servers into a non-conductive coolant. The fluid carries heat directly off every component.",
    businessModel: "Immersion cooling tanks and infrastructure.",
    whatTheyDo: "Single-phase immersion tanks (SmartPod), coolants, controls.",
    productGroups: ["Immersion tanks", "Coolants", "Heat rejection"],
    upstreamDependencies: ["Coolant suppliers", "Steel, controls"],
    downstreamCustomers: ["Specialized data center operators", "HPC", "Edge"],
    competitors: ["LiquidStack", "GRC", "Iceotope"],
    keyBottlenecks: ["Coolant supply", "Operator adoption"],
    whyItMattersForAI: "Immersion is a niche but growing alternative to direct liquid cooling, with attractive thermal density at certain workloads.",
    explainLikeImNew: "Submer puts whole servers inside a tank of cooling liquid. It looks dramatic but it works.",
    learningQuestions: [
      "How does immersion cooling differ from cold-plate liquid cooling?"
    ],
    sources: [{ label: "Submer", url: "https://submer.com/" }]
  },
  {
    id: "liquidstack", name: "LiquidStack", fullName: "LiquidStack",
    category: "cooling", country: "United States",
    roleInStack: "Two-phase immersion cooling specialist.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Specialized cooling deployments for high-density AI configurations.",
    shortExplanation: "LiquidStack uses fluids that boil at low temperatures to cool servers, leveraging phase change for very high heat transfer.",
    businessModel: "Two-phase immersion cooling systems.",
    whatTheyDo: "Two-phase immersion tanks and infrastructure.",
    productGroups: ["Two-phase immersion systems"],
    upstreamDependencies: ["Specialty fluorinated fluids", "Mechanical infrastructure"],
    downstreamCustomers: ["High-density AI / HPC operators"],
    competitors: ["Submer", "GRC", "Iceotope"],
    keyBottlenecks: ["Specialty coolant supply (fluorinated chemistries)"],
    whyItMattersForAI: "Two-phase immersion offers extreme thermal density that may suit future AI rack designs.",
    explainLikeImNew: "LiquidStack uses a special fluid that boils very easily. The boiling sucks heat away from chips.",
    learningQuestions: [],
    sources: [{ label: "LiquidStack", url: "https://liquidstack.com/" }]
  },

  /* ── Industrial & Simulation ───────────── */
  {
    id: "siemens", name: "Siemens", fullName: "Siemens AG",
    category: "industrial", country: "Germany",
    roleInStack: "Industrial automation and digitalization giant. Major user and partner of Omniverse for digital twins.",
    relationshipType: "downstream-customer",
    relationshipToNvidia: "Publicly partnered with NVIDIA on industrial digital twins via Siemens Xcelerator and NVIDIA Omniverse.",
    shortExplanation: "Siemens automates factories. Increasingly, those factories are designed and operated through GPU-accelerated digital twins.",
    businessModel: "Industrial automation, digital industries software, smart infrastructure, mobility.",
    whatTheyDo: "Factory automation, PLCs, drives, building automation, EDA (Siemens EDA), trains, motion control, digital twin software (Xcelerator).",
    productGroups: ["Xcelerator (digital twin)", "PLCs and drives", "Siemens EDA", "Building technology"],
    upstreamDependencies: ["Components", "Software stack including NVIDIA Omniverse"],
    downstreamCustomers: ["Manufacturers", "Infrastructure operators", "Transit operators"],
    competitors: ["Rockwell", "Schneider", "ABB"],
    keyBottlenecks: ["Adoption pace of digital twin"],
    whyItMattersForAI: "Industrial digital twins are one of NVIDIA's headline non-GPU stories. Siemens is a foundational partner in that pitch.",
    explainLikeImNew: "Siemens automates factories. They use NVIDIA's Omniverse software to build virtual copies of factories that companies can simulate before building.",
    learningQuestions: [
      "What is a digital twin and why does it use GPUs?"
    ],
    sources: [{ label: "Siemens Xcelerator + NVIDIA Omniverse", url: "https://www.siemens.com/global/en/products/automation/topic-areas/xcelerator/industrial-metaverse.html" }]
  },
  {
    id: "dassault", name: "Dassault Systèmes", fullName: "Dassault Systèmes SE",
    category: "industrial", country: "France",
    roleInStack: "Major 3D design, simulation and PLM (product lifecycle management) software vendor.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Dassault's tools (CATIA, SOLIDWORKS, 3DEXPERIENCE) leverage GPU acceleration and connect to GPU-based simulation workflows.",
    shortExplanation: "Dassault Systèmes makes the software engineers use to design products and simulate how they behave.",
    businessModel: "Software licenses + cloud + services.",
    whatTheyDo: "CATIA, SOLIDWORKS, Abaqus simulation, ENOVIA PLM, 3DEXPERIENCE platform.",
    productGroups: ["CATIA", "SOLIDWORKS", "ABAQUS / SIMULIA", "3DEXPERIENCE"],
    upstreamDependencies: ["Compute infrastructure including GPUs"],
    downstreamCustomers: ["Aerospace", "Automotive", "Industrial manufacturers"],
    competitors: ["Siemens (Digital Industries Software)", "PTC", "Autodesk"],
    keyBottlenecks: ["Customer adoption pace"],
    whyItMattersForAI: "Engineering simulation is increasingly GPU-accelerated. Dassault's customers represent the bulk of that demand.",
    explainLikeImNew: "Dassault makes the design and simulation software used by aerospace, automotive and industrial engineers worldwide.",
    learningQuestions: [],
    sources: [{ label: "Dassault Systèmes", url: "https://www.3ds.com/" }]
  },
  {
    id: "ptc", name: "PTC", fullName: "PTC Inc.",
    category: "industrial", country: "United States",
    roleInStack: "Industrial software for CAD, PLM and IoT/AR.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Tools connect to digital twin platforms and use GPU acceleration in visualization workflows.",
    shortExplanation: "PTC's CAD (Creo), PLM (Windchill) and IoT (ThingWorx) products serve industrial customers transitioning to digital twin workflows.",
    businessModel: "Software licenses + SaaS + services.",
    whatTheyDo: "CAD, PLM, IoT/AR (ThingWorx, Vuforia).",
    productGroups: ["Creo CAD", "Windchill PLM", "ThingWorx IoT", "Vuforia AR"],
    upstreamDependencies: ["Compute infrastructure"],
    downstreamCustomers: ["Industrial manufacturers"],
    competitors: ["Siemens", "Dassault", "Autodesk"],
    keyBottlenecks: ["Adoption pace"],
    whyItMattersForAI: "Connects industrial assets to digital twin workflows that increasingly depend on GPU compute.",
    explainLikeImNew: "PTC makes CAD and IoT software. Their tools help connect physical machines to digital simulations that run on GPUs.",
    learningQuestions: [],
    sources: [{ label: "PTC", url: "https://www.ptc.com/" }]
  },
  {
    id: "fanuc", name: "FANUC", fullName: "FANUC Corporation",
    category: "industrial", country: "Japan",
    roleInStack: "Major manufacturer of industrial robots, CNC controllers and factory automation.",
    relationshipType: "downstream-customer",
    relationshipToNvidia: "FANUC robots and controllers are integrated into AI-driven factory workflows; tooling vendors increasingly use NVIDIA Isaac/Omniverse for simulation.",
    shortExplanation: "FANUC robots are deployed in factories worldwide. AI is increasingly used to train and refine the perception and control loops behind them.",
    businessModel: "Industrial robots and automation equipment + services.",
    whatTheyDo: "Industrial robots, CNC controllers, factory automation, ROBODRILL.",
    productGroups: ["Industrial robots", "CNC controllers", "Factory automation"],
    upstreamDependencies: ["Components", "AI training infrastructure (indirectly)"],
    downstreamCustomers: ["Automotive manufacturers", "Electronics manufacturers"],
    competitors: ["ABB Robotics", "KUKA", "Yaskawa"],
    keyBottlenecks: ["AI integration cycle time"],
    whyItMattersForAI: "Industrial robotics are a core target market for NVIDIA's robotics stack. Companies like FANUC define what that integration looks like in practice.",
    explainLikeImNew: "FANUC makes the yellow industrial robots you see in car factories. Their AI integration uses NVIDIA tools.",
    learningQuestions: [],
    sources: [{ label: "FANUC", url: "https://www.fanuc.com/" }]
  },
  {
    id: "mercedes-benz", name: "Mercedes-Benz", fullName: "Mercedes-Benz Group AG",
    category: "industrial", country: "Germany",
    roleInStack: "Automaker. Notable user of NVIDIA DRIVE for autonomous-driving development and Omniverse for factory digital twins.",
    relationshipType: "downstream-customer",
    relationshipToNvidia: "Has publicly partnered with NVIDIA on next-generation in-vehicle AI compute (DRIVE) and factory digital twins (Omniverse).",
    shortExplanation: "Mercedes is a flagship automotive customer for NVIDIA's full-stack AI: training in the data center, simulation in Omniverse, inference in the vehicle.",
    businessModel: "Premium automotive manufacturer + financial services.",
    whatTheyDo: "Vehicle design and manufacturing, in-vehicle software, factory operations.",
    productGroups: ["Mercedes vehicles (next-gen software-defined)", "Factory digital twins"],
    upstreamDependencies: ["NVIDIA DRIVE compute", "NVIDIA Omniverse", "AI training infrastructure"],
    downstreamCustomers: ["Vehicle customers", "Internal factory operations"],
    competitors: ["BMW", "Audi", "Tesla"],
    keyBottlenecks: ["Software-defined-vehicle execution timing"],
    whyItMattersForAI: "Demonstrates how automotive companies span the full NVIDIA stack from training to in-vehicle deployment.",
    explainLikeImNew: "Mercedes uses NVIDIA chips and software in two places: in their cars, and in the digital twins of their factories.",
    learningQuestions: [],
    sources: [{ label: "Mercedes-Benz + NVIDIA", url: "https://www.nvidia.com/en-us/industries/automotive/" }]
  },

  /* ── Quantum Hardware ──────────────────── */
  {
    id: "quantinuum", name: "Quantinuum", fullName: "Quantinuum Ltd.",
    category: "quantum", country: "United States / United Kingdom",
    roleInStack: "Trapped-ion quantum computing company. Strong on logical qubit benchmarks.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Quantinuum systems can integrate with NVIDIA's CUDA-Q programming framework.",
    shortExplanation: "Quantinuum runs quantum computers using ions held in electromagnetic traps. They have published industry-leading logical qubit results.",
    businessModel: "Quantum hardware + cloud access + applications.",
    whatTheyDo: "Trapped-ion quantum hardware (H-series), software (TKET), applications.",
    productGroups: ["H1 / H2 hardware", "TKET compiler", "Helios next-gen system"],
    upstreamDependencies: ["Specialty optics, lasers, vacuum systems"],
    downstreamCustomers: ["Researchers", "Pharma / chemistry / finance via cloud access"],
    competitors: ["IonQ", "IBM Quantum", "Other quantum modalities"],
    keyBottlenecks: ["Scaling qubit count while preserving fidelity"],
    whyItMattersForAI: "Quantinuum's logical qubit work is one of the strongest indicators of how close quantum is to practical advantage. Hybrid workflows would integrate via CUDA-Q on NVIDIA GPUs.",
    explainLikeImNew: "Quantinuum makes a quantum computer using charged atoms held by lasers. They are among the leaders at building reliable 'logical' qubits.",
    learningQuestions: [
      "What is a logical qubit and why is it the metric that matters?"
    ],
    sources: [{ label: "Quantinuum", url: "https://www.quantinuum.com/" }]
  },
  {
    id: "ionq", name: "IonQ", fullName: "IonQ, Inc.",
    category: "quantum", country: "United States",
    roleInStack: "Public trapped-ion quantum computing company.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Has worked with NVIDIA on hybrid quantum-classical workflows via CUDA-Q.",
    shortExplanation: "IonQ also uses trapped ions. They focus on commercial cloud access and steady qubit-count growth.",
    businessModel: "Quantum hardware + cloud access (via partner clouds) + acquisitions of optics specialists.",
    whatTheyDo: "Trapped-ion quantum systems, cloud access, networking-related quantum acquisitions.",
    productGroups: ["IonQ Forte", "IonQ Tempo", "Networking subsidiaries"],
    upstreamDependencies: ["Lasers, vacuum systems, optics"],
    downstreamCustomers: ["Cloud customers", "Researchers"],
    competitors: ["Quantinuum", "IBM Quantum", "Atom Computing"],
    keyBottlenecks: ["Qubit fidelity at scale"],
    whyItMattersForAI: "Public quantum company; helps anchor public-market understanding of quantum economics.",
    explainLikeImNew: "IonQ is another trapped-ion quantum company. They are publicly traded and sell quantum compute through cloud platforms.",
    learningQuestions: [],
    sources: [{ label: "IonQ", url: "https://ionq.com/" }]
  },
  {
    id: "rigetti", name: "Rigetti", fullName: "Rigetti Computing, Inc.",
    category: "quantum", country: "United States",
    roleInStack: "Superconducting-qubit quantum computing company.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Hybrid algorithm work that intersects with CUDA-Q and the GPU-accelerated quantum stack.",
    shortExplanation: "Rigetti builds quantum computers using superconducting qubits, similar in modality to IBM and Google.",
    businessModel: "Quantum hardware + cloud access + government work.",
    whatTheyDo: "Superconducting-qubit systems and software stack.",
    productGroups: ["Ankaa systems", "Cloud access"],
    upstreamDependencies: ["Cryogenic systems, foundry partners"],
    downstreamCustomers: ["Government", "Researchers"],
    competitors: ["IBM Quantum", "Other superconducting players"],
    keyBottlenecks: ["Qubit count and fidelity scaling"],
    whyItMattersForAI: "Smaller-cap public quantum hardware company; useful reference for the modality spread.",
    explainLikeImNew: "Rigetti builds quantum chips that are super-cooled, similar to IBM's approach.",
    learningQuestions: [],
    sources: [{ label: "Rigetti", url: "https://www.rigetti.com/" }]
  },
  {
    id: "psiquantum", name: "PsiQuantum", fullName: "PsiQuantum Corp.",
    category: "quantum", country: "United States / United Kingdom",
    roleInStack: "Photonic quantum computing company aiming for fault-tolerant scale.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Hybrid software work that overlaps with the broader CUDA-Q ecosystem.",
    shortExplanation: "PsiQuantum is building a photonic, error-corrected quantum computer at very large scale, fabricating components using a CMOS foundry.",
    businessModel: "Hardware development with public-sector and strategic partners.",
    whatTheyDo: "Photonic quantum systems, error correction, fab partnerships.",
    productGroups: ["Photonic quantum systems (in development)"],
    upstreamDependencies: ["GlobalFoundries (fab partner)"],
    downstreamCustomers: ["Government partners", "Future commercial"],
    competitors: ["Other quantum modalities"],
    keyBottlenecks: ["Reaching fault-tolerant scale"],
    whyItMattersForAI: "PsiQuantum's foundry-based approach could change the manufacturing economics of quantum computing if it succeeds.",
    explainLikeImNew: "PsiQuantum uses light particles instead of electrons or atoms for their qubits, and is building components at a regular chip foundry.",
    learningQuestions: [
      "Why does fabricating at a CMOS foundry matter for photonic quantum?"
    ],
    sources: [{ label: "PsiQuantum", url: "https://www.psiquantum.com/" }]
  },
  {
    id: "ibm-quantum", name: "IBM Quantum", fullName: "IBM Quantum",
    category: "quantum", country: "United States",
    roleInStack: "IBM's quantum computing division. Long-running superconducting program with the largest public qubit roadmap.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "IBM has discussed hybrid quantum-classical work that touches CUDA-Q-aligned tooling.",
    shortExplanation: "IBM Quantum offers cloud access to a fleet of superconducting quantum processors and an open software stack (Qiskit).",
    businessModel: "Cloud + research partnerships + enterprise.",
    whatTheyDo: "Designs, builds and operates superconducting quantum processors; develops Qiskit; runs the IBM Quantum Network.",
    productGroups: ["Heron / Condor / Flamingo processors", "Qiskit"],
    upstreamDependencies: ["Cryogenic systems", "Internal fab capabilities"],
    downstreamCustomers: ["IBM Quantum Network members"],
    competitors: ["Quantinuum", "Google Quantum AI", "Other modalities"],
    keyBottlenecks: ["Logical qubit scaling"],
    whyItMattersForAI: "Sets the public benchmark for superconducting qubit roadmaps. Hybrid workloads would land on GPU clusters via Qiskit / CUDA-Q bridges.",
    explainLikeImNew: "IBM has been working on quantum computers for over a decade. Their machines are super-cooled chips you can access through the cloud.",
    learningQuestions: [],
    sources: [{ label: "IBM Quantum", url: "https://www.ibm.com/quantum" }]
  },
  {
    id: "alice-bob", name: "Alice & Bob", fullName: "Alice & Bob",
    category: "quantum", country: "France",
    roleInStack: "Quantum company focused on cat-qubit superconducting hardware for hardware-efficient error correction.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Software work that intersects with the broader hybrid quantum-classical stack.",
    shortExplanation: "Alice & Bob designs cat qubits &mdash; a superconducting qubit topology engineered to suppress one type of error inherently.",
    businessModel: "Quantum hardware development.",
    whatTheyDo: "Cat-qubit systems and their associated software stack.",
    productGroups: ["Cat-qubit prototypes"],
    upstreamDependencies: ["Cryogenic systems", "Fab partners"],
    downstreamCustomers: ["Researchers", "Government partners"],
    competitors: ["Other superconducting and modality players"],
    keyBottlenecks: ["Scaling cat qubits to logical computation"],
    whyItMattersForAI: "Hardware-efficient error correction would change the cost curve of useful quantum compute.",
    explainLikeImNew: "Alice &amp; Bob builds quantum chips designed so that one of the main error types disappears for free.",
    learningQuestions: [],
    sources: [{ label: "Alice & Bob", url: "https://alice-bob.com/" }]
  },
  {
    id: "atom-computing", name: "Atom Computing", fullName: "Atom Computing, Inc.",
    category: "quantum", country: "United States",
    roleInStack: "Neutral-atom quantum computing company.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Hybrid workflows can integrate with CUDA-Q-aligned tooling.",
    shortExplanation: "Atom Computing arrays neutral atoms in optical tweezers as qubits.",
    businessModel: "Quantum hardware development.",
    whatTheyDo: "Neutral-atom systems, software stack.",
    productGroups: ["Neutral-atom prototypes"],
    upstreamDependencies: ["Optics, lasers, vacuum"],
    downstreamCustomers: ["Researchers", "Cloud customers (via partners)"],
    competitors: ["Other quantum modalities"],
    keyBottlenecks: ["Scaling fidelity at large array sizes"],
    whyItMattersForAI: "Neutral atoms have shown attractive scaling properties; another candidate modality for future hybrid workflows.",
    explainLikeImNew: "Atom Computing uses regular atoms held in place by lasers as qubits.",
    learningQuestions: [],
    sources: [{ label: "Atom Computing", url: "https://atom-computing.com/" }]
  },
  {
    id: "dwave", name: "D-Wave", fullName: "D-Wave Systems Inc.",
    category: "quantum", country: "Canada",
    roleInStack: "Quantum annealing company. Different model from gate-based quantum computing.",
    relationshipType: "ecosystem-enabler",
    relationshipToNvidia: "Hybrid workflows that connect classical compute with quantum annealing.",
    shortExplanation: "D-Wave's annealers solve specific optimization problems by finding low-energy configurations of a quantum spin system.",
    businessModel: "Cloud access to annealers + select hardware sales.",
    whatTheyDo: "Quantum annealing systems and increasingly gate-based development.",
    productGroups: ["Advantage annealers", "Leap cloud"],
    upstreamDependencies: ["Cryogenics, fab partners"],
    downstreamCustomers: ["Researchers", "Optimization customers"],
    competitors: ["Classical optimization alternatives", "Gate-based quantum modalities"],
    keyBottlenecks: ["Range of problems where annealing demonstrates advantage"],
    whyItMattersForAI: "Optimization is one of the most-discussed near-term quantum applications. D-Wave is the longest-running annealer story.",
    explainLikeImNew: "D-Wave makes a different kind of quantum machine that is good at optimization problems but not general-purpose computing.",
    learningQuestions: [
      "What is the difference between quantum annealing and gate-based quantum computing?"
    ],
    sources: [{ label: "D-Wave Systems", url: "https://www.dwavesys.com/" }]
  }

];

/* ============================================
   PRODUCT CATEGORIES — used by Product Explorer

   Used as filter chips. Each product carries one of these category ids.
   ============================================ */
var PRODUCT_CATEGORIES = [
  { id: "process-node",       label: "Process node",       color: "#9F7AEA" },
  { id: "advanced-packaging", label: "Advanced packaging", color: "#B794F4" },
  { id: "litho-system",       label: "Lithography system", color: "#63B3ED" },
  { id: "metrology",          label: "Metrology",          color: "#90CDF4" },
  { id: "memory",             label: "Memory",             color: "#4FD1C5" },
  { id: "gpu-arch",           label: "GPU architecture",   color: "#48BB78" },
  { id: "gpu",                label: "GPU",                color: "#48BB78" },
  { id: "superchip",          label: "Superchip",          color: "#48BB78" },
  { id: "system",             label: "System",             color: "#48BB78" },
  { id: "rack-system",        label: "Rack system",        color: "#48BB78" },
  { id: "interconnect",       label: "Interconnect",       color: "#F6AD55" },
  { id: "networking",         label: "Networking",         color: "#F6AD55" },
  { id: "software",           label: "Software / SDK",     color: "#4FD1C5" },
  { id: "platform-software",  label: "Platform software",  color: "#4FD1C5" },
  { id: "cloud-instance",     label: "Cloud instance",     color: "#FC8181" },
  { id: "power-equipment",    label: "Power equipment",    color: "#F56565" },
  { id: "cooling-equipment",  label: "Cooling equipment",  color: "#F56565" },
  { id: "rack-equipment",     label: "Rack / PDU",         color: "#F56565" },
  { id: "generation",         label: "Generation",         color: "#F56565" },
  { id: "quantum",            label: "Quantum platform",   color: "#B794F4" }
];

/* ============================================
   PRODUCT PROFILES — Technologies & products in detail

   Each entry is a focused profile of a specific product or technology.
   Where overlapping with ATLAS_NODES, the product profile is the deeper
   read; the atlas node is the brief overview.
   ============================================ */
var PRODUCT_PROFILES = [

  /* ── TSMC processes & packaging ────────── */
  {
    id: "p-tsmc-n2", name: "TSMC N2 (2nm-class)", company: "TSMC", category: "process-node",
    whatItIs: "TSMC's first nanosheet GAA (gate-all-around) process node, scheduled for high-volume manufacturing in the latter half of the decade.",
    whyItMatters: "N2 is the next major step in transistor density and energy efficiency for leading-edge logic. It introduces nanosheet GAA after a long FinFET era and is expected to host future AI accelerator generations.",
    usedBy: ["Future NVIDIA architectures (Rubin and beyond, exact node mapping per public roadmap)", "Apple silicon (announced)", "Other leading-edge customers"],
    dependsOn: ["ASML EUV", "Possibly High-NA EUV at later iterations", "Process equipment from AMAT, Lam, KLA, TEL"],
    relatedCompanies: ["asml", "applied-materials", "lam-research", "kla", "tokyo-electron"],
    relatedAtlasNodes: ["tsmc"],
    sources: [{ label: "TSMC technology", url: "https://www.tsmc.com/english/dedicatedFoundry/technology/logic" }]
  },
  {
    id: "p-tsmc-n3", name: "TSMC N3 family", company: "TSMC", category: "process-node",
    whatItIs: "TSMC's 3nm-class process family (N3, N3E, N3P, N3X). FinFET architecture; widely adopted by leading customers.",
    whyItMatters: "N3 is the bridge between FinFET-era nodes and the GAA-era N2. AI accelerators may migrate here ahead of N2 depending on product roadmap.",
    usedBy: ["Apple silicon", "Future AI accelerators (per disclosed roadmaps)"],
    dependsOn: ["ASML EUV (multiple-patterning)", "Process equipment vendors"],
    relatedCompanies: ["asml", "applied-materials"],
    relatedAtlasNodes: ["tsmc"],
    sources: [{ label: "TSMC technology", url: "https://www.tsmc.com/english/dedicatedFoundry/technology/logic" }]
  },
  {
    id: "p-tsmc-n4", name: "TSMC N4 (4nm-class)", company: "TSMC", category: "process-node",
    whatItIs: "Optimized 4nm-class FinFET node derived from N5. Used by NVIDIA Hopper and Blackwell.",
    whyItMatters: "Today's mainstream node for high-performance AI accelerators. The current Blackwell generation is fabricated on N4-class.",
    usedBy: ["NVIDIA H100, H200, B200, Blackwell Ultra", "AMD MI accelerators"],
    dependsOn: ["ASML EUV", "Equipment supply chain"],
    relatedCompanies: ["asml"],
    relatedAtlasNodes: ["tsmc", "blackwell", "hopper"],
    sources: [{ label: "TSMC technology", url: "https://www.tsmc.com/english/dedicatedFoundry/technology/logic" }]
  },
  {
    id: "p-tsmc-n5", name: "TSMC N5 (5nm-class)", company: "TSMC", category: "process-node",
    whatItIs: "TSMC's first EUV-heavy production node, qualified in 2020. Parent of the N4 family.",
    whyItMatters: "N5 was the foundation for the AI build-out era; many earlier Hopper-generation parts and other accelerators were N5-class.",
    usedBy: ["Earlier AI accelerators", "Apple silicon (M-series early)"],
    dependsOn: ["ASML EUV"],
    relatedCompanies: ["asml"],
    relatedAtlasNodes: ["tsmc"],
    sources: [{ label: "TSMC technology", url: "https://www.tsmc.com/english/dedicatedFoundry/technology/logic" }]
  },
  {
    id: "p-tsmc-n7", name: "TSMC N7 (7nm-class)", company: "TSMC", category: "process-node",
    whatItIs: "Last major DUV-only node before EUV adoption became standard. Still used at scale for many products.",
    whyItMatters: "Continues to manufacture a long tail of devices including some networking chips and earlier accelerators.",
    usedBy: ["Networking silicon", "Mature high-performance designs"],
    dependsOn: ["ASML DUV"],
    relatedCompanies: ["asml"],
    relatedAtlasNodes: ["tsmc"],
    sources: [{ label: "TSMC technology", url: "https://www.tsmc.com/english/dedicatedFoundry/technology/logic" }]
  },
  {
    id: "p-tsmc-cowos", name: "TSMC CoWoS", company: "TSMC", category: "advanced-packaging",
    whatItIs: "Chip-on-Wafer-on-Substrate. A 2.5D packaging technology that places GPU dies and HBM stacks side-by-side on a silicon interposer.",
    whyItMatters: "CoWoS is the packaging that makes modern AI GPU+HBM packages possible. Capacity has been a binding constraint on accelerator supply.",
    usedBy: ["NVIDIA accelerator packages", "AMD MI accelerators", "Google TPUs"],
    dependsOn: ["Silicon interposer fabrication", "Substrate suppliers", "TSMC packaging fabs"],
    relatedCompanies: ["tsmc", "amkor"],
    relatedAtlasNodes: ["cowos", "tsmc", "silicon-interposer"],
    sources: [{ label: "TSMC CoWoS", url: "https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/cowos.htm" }]
  },
  {
    id: "p-tsmc-info", name: "TSMC InFO", company: "TSMC", category: "advanced-packaging",
    whatItIs: "Integrated Fan-Out wafer-level packaging. A different family from CoWoS, often used for mobile and select networking applications.",
    whyItMatters: "InFO offers thinner packages with lower cost than CoWoS for products that don't need the largest HBM stacks. Part of TSMC's overall 3DFabric portfolio.",
    usedBy: ["Apple mobile silicon", "Networking chips"],
    dependsOn: ["TSMC packaging fabs"],
    relatedCompanies: ["tsmc"],
    relatedAtlasNodes: ["3dfabric", "tsmc"],
    sources: [{ label: "TSMC 3DFabric", url: "https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/3DFabric.htm" }]
  },
  {
    id: "p-tsmc-soic", name: "TSMC SoIC", company: "TSMC", category: "advanced-packaging",
    whatItIs: "System on Integrated Chips. True 3D die stacking technology for stacking logic on logic.",
    whyItMatters: "SoIC enables vertical chip stacking with very fine bond pitches. Likely to expand AI roadmap options as chiplet architectures mature.",
    usedBy: ["Advanced chiplet designs (AMD V-Cache and successors), evolving AI accelerator roadmaps"],
    dependsOn: ["Hybrid bonding equipment"],
    relatedCompanies: ["tsmc"],
    relatedAtlasNodes: ["3dfabric", "tsmc"],
    sources: [{ label: "TSMC 3DFabric", url: "https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/3DFabric.htm" }]
  },
  {
    id: "p-tsmc-3dfabric", name: "TSMC 3DFabric", company: "TSMC", category: "advanced-packaging",
    whatItIs: "TSMC's umbrella brand covering all advanced packaging technologies (CoWoS, InFO, SoIC) plus future variants.",
    whyItMatters: "3DFabric is how TSMC positions packaging as a strategic differentiator alongside its leading-edge logic process.",
    usedBy: ["NVIDIA, AMD, Apple, hyperscaler custom silicon"],
    dependsOn: ["Bonding and substrate technology"],
    relatedCompanies: ["tsmc"],
    relatedAtlasNodes: ["3dfabric", "tsmc", "cowos"],
    sources: [{ label: "TSMC 3DFabric", url: "https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/3DFabric.htm" }]
  },
  {
    id: "p-tsmc-specialty", name: "TSMC specialty technologies", company: "TSMC", category: "process-node",
    whatItIs: "Process technologies for analog, mixed-signal, RF and power-management ICs. Different from leading-edge logic.",
    whyItMatters: "AI factories need power management, optical and RF silicon all built on specialty nodes. Specialty capacity is a separate constraint.",
    usedBy: ["Power management IC vendors", "RF chip vendors", "Sensor companies"],
    dependsOn: ["Specialty equipment and process know-how"],
    relatedCompanies: ["tsmc"],
    relatedAtlasNodes: ["tsmc"],
    sources: [{ label: "TSMC specialty", url: "https://www.tsmc.com/english/dedicatedFoundry/technology/specialty" }]
  },
  {
    id: "p-tsmc-rf", name: "TSMC RF technologies", company: "TSMC", category: "process-node",
    whatItIs: "RF-focused process technologies for cellular, Wi-Fi and mmWave chips.",
    whyItMatters: "Connectivity silicon for AI edge devices and 5G/6G infrastructure depend on these processes.",
    usedBy: ["Mobile and wireless chipset vendors"],
    dependsOn: ["Specialty equipment"],
    relatedCompanies: ["tsmc"],
    relatedAtlasNodes: ["tsmc"],
    sources: [{ label: "TSMC RF technology", url: "https://www.tsmc.com/english/dedicatedFoundry/technology/specialty/RF" }]
  },
  {
    id: "p-tsmc-pmic", name: "TSMC PMIC technologies", company: "TSMC", category: "process-node",
    whatItIs: "Process technologies optimized for power-management integrated circuits.",
    whyItMatters: "Modern GPU packages need many supporting PMICs. PMIC capacity sits behind any high-density AI rack.",
    usedBy: ["PMIC vendors supplying server and AI hardware"],
    dependsOn: ["Specialty equipment"],
    relatedCompanies: ["tsmc"],
    relatedAtlasNodes: ["tsmc"],
    sources: [{ label: "TSMC specialty", url: "https://www.tsmc.com/english/dedicatedFoundry/technology/specialty" }]
  },
  {
    id: "p-tsmc-auto", name: "TSMC automotive process technologies", company: "TSMC", category: "process-node",
    whatItIs: "Automotive-grade process technologies certified for the higher reliability requirements of vehicle-deployed silicon.",
    whyItMatters: "Auto-grade silicon is a slower-moving market with stricter reliability tests. NVIDIA DRIVE-class compute eventually moves through these qualifications.",
    usedBy: ["Automotive semiconductor vendors", "ADAS / autonomy compute"],
    dependsOn: ["Auto-grade qualification flows"],
    relatedCompanies: ["tsmc"],
    relatedAtlasNodes: ["tsmc"],
    sources: [{ label: "TSMC automotive", url: "https://www.tsmc.com/english/dedicatedFoundry/technology/specialty/Automotive" }]
  },

  /* ── ASML ──────────────────────────────── */
  {
    id: "p-asml-euv", name: "ASML EUV (NXE / Twinscan)", company: "ASML", category: "litho-system",
    whatItIs: "Extreme-ultraviolet lithography systems that print transistor patterns at the leading edge using 13.5nm wavelength light.",
    whyItMatters: "Without EUV, modern leading-edge logic does not exist. NVIDIA's accelerators are patterned with EUV at TSMC.",
    usedBy: ["TSMC", "Samsung Foundry", "Intel Foundry"],
    dependsOn: ["Carl Zeiss optics", "Trumpf laser source", "ASML's own engineering"],
    relatedCompanies: ["asml", "tsmc", "samsung-foundry", "intel-foundry"],
    relatedAtlasNodes: ["asml"],
    sources: [{ label: "ASML EUV", url: "https://www.asml.com/en/products/euv-lithography-systems" }]
  },
  {
    id: "p-asml-high-na", name: "ASML High-NA EUV (EXE)", company: "ASML", category: "litho-system",
    whatItIs: "Next-generation EUV systems with higher numerical aperture, enabling smaller features without multi-patterning.",
    whyItMatters: "High-NA EUV is the bridge to nodes beyond N2. Intel was the first publicly disclosed customer.",
    usedBy: ["Intel Foundry (first shipments)", "Other leading-edge fabs over time"],
    dependsOn: ["Larger Zeiss optics", "Higher-power source"],
    relatedCompanies: ["asml", "intel-foundry"],
    relatedAtlasNodes: ["asml"],
    sources: [{ label: "ASML High-NA EUV", url: "https://www.asml.com/en/products/euv-lithography-systems/exe5000" }]
  },
  {
    id: "p-asml-duv", name: "ASML DUV (Twinscan immersion)", company: "ASML", category: "litho-system",
    whatItIs: "Deep-ultraviolet immersion lithography systems. Workhorse for non-leading-edge logic and many memory steps.",
    whyItMatters: "DUV remains the volume tool of the industry; even leading-edge nodes use it for many layers, with EUV reserved for the most critical patterning steps.",
    usedBy: ["All advanced fabs (alongside EUV)"],
    dependsOn: ["ArF laser sources", "Zeiss optics"],
    relatedCompanies: ["asml"],
    relatedAtlasNodes: ["asml"],
    sources: [{ label: "ASML DUV", url: "https://www.asml.com/en/products/duv-lithography-systems" }]
  },
  {
    id: "p-asml-metrology", name: "ASML metrology and inspection (HMI)", company: "ASML", category: "metrology",
    whatItIs: "ASML's metrology and inspection systems, including the HMI e-beam inspection acquired in 2016.",
    whyItMatters: "Process control at advanced nodes requires increasingly capable metrology. ASML's tools complement EUV and DUV scanners.",
    usedBy: ["TSMC", "Samsung", "Intel", "Memory makers"],
    dependsOn: ["Advanced electron optics"],
    relatedCompanies: ["asml", "kla"],
    relatedAtlasNodes: ["asml"],
    sources: [{ label: "ASML metrology", url: "https://www.asml.com/en/products/metrology-and-inspection-systems" }]
  },
  {
    id: "p-asml-comp-litho", name: "ASML computational lithography", company: "ASML", category: "litho-system",
    whatItIs: "Software (Brion, Tachyon) that compensates for optical effects when designing EUV/DUV reticles. Increasingly GPU-accelerated.",
    whyItMatters: "Without computational lithography, today's smallest features cannot be printed correctly. The software runs on huge GPU clusters.",
    usedBy: ["TSMC", "Samsung", "Intel"],
    dependsOn: ["GPU compute"],
    relatedCompanies: ["asml"],
    relatedAtlasNodes: ["asml"],
    sources: [{ label: "ASML computational lithography", url: "https://www.asml.com/en/products/computational-lithography" }]
  },
  {
    id: "p-asml-services", name: "ASML installed-base services", company: "ASML", category: "litho-system",
    whatItIs: "Services and upgrades for the global installed base of EUV and DUV scanners.",
    whyItMatters: "ASML's tools live for decades. Upgrades and uptime services are a large recurring revenue stream and a critical reliability factor for fabs.",
    usedBy: ["All ASML scanner customers"],
    dependsOn: ["ASML field engineering organization"],
    relatedCompanies: ["asml"],
    relatedAtlasNodes: ["asml"],
    sources: [{ label: "ASML services", url: "https://www.asml.com/en/products/installed-base-management-and-services" }]
  },

  /* ── Memory products ───────────────────── */
  {
    id: "p-hbm3e", name: "HBM3E", company: "Industry (SK hynix / Micron / Samsung)", category: "memory",
    whatItIs: "Current-generation High Bandwidth Memory. Each stack contains multiple DRAM dies wired through silicon, attached to the GPU package via interposer.",
    whyItMatters: "HBM3E provides the memory bandwidth needed to feed Blackwell-class GPUs during inference and training. Each Blackwell package uses multiple stacks.",
    usedBy: ["NVIDIA H200, B200, GB200", "AMD MI accelerators"],
    dependsOn: ["TSV-capable DRAM fabs", "Advanced packaging (CoWoS) to attach to GPU die"],
    relatedCompanies: ["sk-hynix", "micron", "samsung-memory", "tsmc"],
    relatedAtlasNodes: ["hbm3e"],
    sources: [{ label: "Micron HBM3E", url: "https://www.micron.com/products/memory/hbm/hbm3e" }]
  },
  {
    id: "p-hbm4", name: "HBM4", company: "Industry (SK hynix / Micron / Samsung)", category: "memory",
    whatItIs: "Next-generation HBM with higher per-stack bandwidth, more channels, and higher capacity.",
    whyItMatters: "HBM4 is expected to feed the Rubin generation and beyond. The industry transition to HBM4 will reshape supplier positioning.",
    usedBy: ["NVIDIA Rubin (per public roadmap)", "Future AMD and hyperscaler accelerators"],
    dependsOn: ["Higher TSV density", "Possibly logic-base die collaborations with foundries"],
    relatedCompanies: ["sk-hynix", "micron", "samsung-memory", "tsmc"],
    relatedAtlasNodes: ["hbm4"],
    sources: [
      { label: "Micron HBM4", url: "https://www.micron.com/products/memory/hbm/hbm4" },
      { label: "Samsung HBM4", url: "https://semiconductor.samsung.com/dram/hbm/hbm4/" }
    ]
  },
  {
    id: "p-gddr7", name: "GDDR7", company: "Industry (Samsung / SK hynix / Micron)", category: "memory",
    whatItIs: "Latest-generation GDDR memory used primarily in consumer GPUs and select non-HBM accelerators.",
    whyItMatters: "GDDR7 is the bandwidth path for consumer RTX cards and edge AI products that don't use HBM.",
    usedBy: ["NVIDIA GeForce RTX (current and future)", "RTX PRO, professional graphics", "Some accelerators"],
    dependsOn: ["DRAM fabs"],
    relatedCompanies: ["samsung-memory", "sk-hynix", "micron"],
    relatedAtlasNodes: [],
    sources: [{ label: "Samsung GDDR7", url: "https://semiconductor.samsung.com/dram/gddr/gddr7/" }]
  },
  {
    id: "p-lpddr5x", name: "LPDDR5X", company: "Industry (Samsung / SK hynix / Micron)", category: "memory",
    whatItIs: "Low-power DDR memory for mobile and edge applications. Increasingly relevant for AI PCs and edge AI.",
    whyItMatters: "LPDDR5X is the system memory of choice for edge AI compute and AI PCs.",
    usedBy: ["AI PCs", "Mobile", "Some edge AI compute"],
    dependsOn: ["DRAM fabs"],
    relatedCompanies: ["samsung-memory", "sk-hynix", "micron"],
    relatedAtlasNodes: [],
    sources: [{ label: "Samsung LPDDR5X", url: "https://semiconductor.samsung.com/dram/lpddr/lpddr5x/" }]
  },

  /* ── NVIDIA hardware ───────────────────── */
  {
    id: "p-h100", name: "NVIDIA H100", company: "NVIDIA", category: "gpu",
    whatItIs: "Hopper-generation data-center GPU built on TSMC 4nm-class with HBM3.",
    whyItMatters: "The H100 was the GPU that powered the generative-AI wave; it set the price and availability story of 2023-2024.",
    usedBy: ["Frontier AI labs", "Cloud GPU instances", "Enterprises"],
    dependsOn: ["TSMC N4-class", "HBM3", "CoWoS"],
    relatedCompanies: ["tsmc", "sk-hynix", "micron"],
    relatedAtlasNodes: ["h100", "hopper"],
    sources: [{ label: "NVIDIA H100", url: "https://www.nvidia.com/en-us/data-center/h100/" }]
  },
  {
    id: "p-h200", name: "NVIDIA H200", company: "NVIDIA", category: "gpu",
    whatItIs: "Hopper GPU with HBM3E memory upgrade for inference-heavy workloads.",
    whyItMatters: "H200 raised inference performance for large models without changing architecture, demonstrating how memory upgrades can extend a generation.",
    usedBy: ["Cloud inference workloads"],
    dependsOn: ["TSMC", "HBM3E"],
    relatedCompanies: ["tsmc", "micron", "sk-hynix"],
    relatedAtlasNodes: ["h200", "hopper"],
    sources: [{ label: "NVIDIA H200", url: "https://www.nvidia.com/en-us/data-center/h200/" }]
  },
  {
    id: "p-b200", name: "NVIDIA B200", company: "NVIDIA", category: "gpu",
    whatItIs: "Blackwell-generation discrete GPU. Two-die package with HBM3E, used in HGX server configurations.",
    whyItMatters: "B200 is the workhorse Blackwell GPU for HGX-class systems used by clouds and enterprises.",
    usedBy: ["HGX B200 servers", "Cloud GPU instances (AWS P6, Azure ND, GCP A4)"],
    dependsOn: ["TSMC N4-class", "HBM3E", "CoWoS"],
    relatedCompanies: ["tsmc", "sk-hynix", "micron"],
    relatedAtlasNodes: ["b200", "blackwell"],
    sources: [{ label: "NVIDIA Blackwell", url: "https://www.nvidia.com/en-us/data-center/technologies/blackwell-architecture/" }]
  },
  {
    id: "p-gb200", name: "NVIDIA GB200 Superchip", company: "NVIDIA", category: "superchip",
    whatItIs: "Combines two Blackwell GPUs and a Grace CPU on a single board, connected via NVLink-C2C.",
    whyItMatters: "GB200 is the building block of the GB200 NVL72 rack &mdash; the first generation of NVIDIA rack-scale AI computers.",
    usedBy: ["GB200 NVL72 rack systems"],
    dependsOn: ["Blackwell GPUs", "Grace CPU", "NVLink-C2C"],
    relatedCompanies: ["tsmc", "arm", "sk-hynix"],
    relatedAtlasNodes: ["gb200", "grace-blackwell"],
    sources: [{ label: "NVIDIA GB200 NVL72", url: "https://www.nvidia.com/en-us/data-center/gb200-nvl72/" }]
  },
  {
    id: "p-gb300", name: "NVIDIA GB300 Superchip", company: "NVIDIA", category: "superchip",
    whatItIs: "Enhanced Grace + Blackwell Ultra Superchip with higher performance and memory.",
    whyItMatters: "GB300 powers the GB300 NVL72 racks now being deployed for the largest AI workloads.",
    usedBy: ["GB300 NVL72 rack systems"],
    dependsOn: ["Blackwell Ultra", "Grace CPU", "HBM3E"],
    relatedCompanies: ["tsmc", "arm"],
    relatedAtlasNodes: ["gb300"],
    sources: [{ label: "NVIDIA GB300 NVL72", url: "https://www.nvidia.com/en-au/data-center/gb300-nvl72/" }]
  },
  {
    id: "p-blackwell-ultra", name: "NVIDIA Blackwell Ultra", company: "NVIDIA", category: "gpu",
    whatItIs: "Higher-performance variant of the Blackwell GPU.",
    whyItMatters: "Targets the most demanding training and inference workloads in the current generation.",
    usedBy: ["GB300 / GB300 NVL72"],
    dependsOn: ["TSMC", "HBM3E"],
    relatedCompanies: ["tsmc", "sk-hynix"],
    relatedAtlasNodes: ["blackwell-ultra"],
    sources: [{ label: "NVIDIA Blackwell", url: "https://www.nvidia.com/en-us/data-center/technologies/blackwell-architecture/" }]
  },
  {
    id: "p-rubin", name: "NVIDIA Rubin", company: "NVIDIA", category: "gpu-arch",
    whatItIs: "Next-generation NVIDIA GPU architecture following Blackwell.",
    whyItMatters: "Rubin sets the pace of the next AI compute step. Expected to use HBM4 and a more advanced TSMC process.",
    usedBy: ["Future Vera Rubin systems"],
    dependsOn: ["TSMC next-gen processes", "HBM4", "Advanced packaging"],
    relatedCompanies: ["tsmc", "sk-hynix"],
    relatedAtlasNodes: ["rubin"],
    sources: [{ label: "NVIDIA Vera Rubin NVL72", url: "https://www.nvidia.com/en-us/data-center/vera-rubin-nvl72/" }]
  },
  {
    id: "p-vera-rubin-nvl72", name: "NVIDIA Vera Rubin NVL72", company: "NVIDIA", category: "rack-system",
    whatItIs: "Next-generation rack-scale system pairing Vera CPUs and Rubin GPUs.",
    whyItMatters: "The roadmap successor to GB300 NVL72; defines the AI-factory build pipeline of the late decade.",
    usedBy: ["Future cloud and sovereign AI deployments"],
    dependsOn: ["Vera CPU", "Rubin", "HBM4", "NVLink"],
    relatedCompanies: ["tsmc", "arm"],
    relatedAtlasNodes: ["vera-rubin-nvl72"],
    sources: [{ label: "NVIDIA Vera Rubin NVL72", url: "https://www.nvidia.com/en-us/data-center/vera-rubin-nvl72/" }]
  },
  {
    id: "p-grace-cpu", name: "NVIDIA Grace CPU", company: "NVIDIA", category: "gpu",
    whatItIs: "Arm-based data-center CPU designed for high memory bandwidth and tight coupling with NVIDIA GPUs.",
    whyItMatters: "Grace replaces the conventional x86 host CPU in GB-series systems, enabling NVLink-C2C unified memory paths.",
    usedBy: ["GB200, GB300 systems"],
    dependsOn: ["Arm architecture", "TSMC"],
    relatedCompanies: ["arm", "tsmc"],
    relatedAtlasNodes: ["grace-cpu"],
    sources: [{ label: "NVIDIA Grace CPU", url: "https://www.nvidia.com/en-us/data-center/grace-cpu/" }]
  },
  {
    id: "p-grace-blackwell", name: "Grace Blackwell Superchip (GB200)", company: "NVIDIA", category: "superchip",
    whatItIs: "Single board combining one Grace CPU and two Blackwell GPUs via NVLink-C2C.",
    whyItMatters: "The basic compute unit of NVIDIA's rack-scale AI systems for the Blackwell generation.",
    usedBy: ["GB200 NVL72"],
    dependsOn: ["Blackwell", "Grace", "NVLink-C2C"],
    relatedCompanies: ["tsmc", "arm"],
    relatedAtlasNodes: ["grace-blackwell"],
    sources: [{ label: "NVIDIA GB200 NVL72", url: "https://www.nvidia.com/en-us/data-center/gb200-nvl72/" }]
  },
  {
    id: "p-dgx", name: "NVIDIA DGX", company: "NVIDIA", category: "system",
    whatItIs: "NVIDIA's branded reference AI supercomputer line, sold as turnkey systems with software included.",
    whyItMatters: "DGX is the first-party reference for what 'an AI box from NVIDIA' looks like.",
    usedBy: ["Frontier labs", "Enterprises", "Research institutions"],
    dependsOn: ["NVIDIA GPU and networking", "NVIDIA software stack"],
    relatedCompanies: ["foxconn", "quanta"],
    relatedAtlasNodes: ["dgx"],
    sources: [{ label: "NVIDIA DGX", url: "https://www.nvidia.com/en-us/data-center/dgx-platform/" }]
  },
  {
    id: "p-hgx", name: "NVIDIA HGX", company: "NVIDIA", category: "system",
    whatItIs: "Reference baseboard design (8 GPUs, NVLink + NVSwitch) used by OEMs to build their own AI servers.",
    whyItMatters: "HGX is how NVIDIA reaches the enterprise market through OEMs without selling DGX directly.",
    usedBy: ["Dell, HPE, Lenovo, Supermicro, Cisco, Foxconn, Quanta and other partners"],
    dependsOn: ["NVIDIA GPUs", "NVLink"],
    relatedCompanies: ["dell", "hpe", "lenovo", "supermicro", "cisco"],
    relatedAtlasNodes: ["hgx"],
    sources: [{ label: "NVIDIA HGX", url: "https://www.nvidia.com/en-us/data-center/hgx/" }]
  },
  {
    id: "p-mgx", name: "NVIDIA MGX", company: "NVIDIA", category: "system",
    whatItIs: "Modular reference architecture for OEMs building AI and accelerated systems with mixed CPU and GPU configurations.",
    whyItMatters: "MGX shortens time-to-market for partner systems by giving OEMs a flexible chassis spec.",
    usedBy: ["OEMs and ODMs across geographies"],
    dependsOn: ["NVIDIA GPUs", "Grace CPU"],
    relatedCompanies: ["dell", "supermicro", "asus", "gigabyte"],
    relatedAtlasNodes: ["mgx"],
    sources: [{ label: "NVIDIA MGX", url: "https://www.nvidia.com/en-us/data-center/mgx/" }]
  },
  {
    id: "p-nvlink", name: "NVLink", company: "NVIDIA", category: "interconnect",
    whatItIs: "NVIDIA's proprietary high-bandwidth GPU-to-GPU interconnect.",
    whyItMatters: "NVLink supplies the bandwidth that makes multi-GPU and rack-scale training viable. Each generation increases per-link bandwidth.",
    usedBy: ["Every multi-GPU NVIDIA system"],
    dependsOn: ["Custom signaling and silicon"],
    relatedCompanies: [],
    relatedAtlasNodes: ["nvlink"],
    sources: [{ label: "NVIDIA NVLink", url: "https://www.nvidia.com/en-us/data-center/nvlink/" }]
  },
  {
    id: "p-nvswitch", name: "NVSwitch", company: "NVIDIA", category: "interconnect",
    whatItIs: "Custom switch silicon that connects all GPUs in a node or rack via NVLink in an all-to-all topology.",
    whyItMatters: "NVSwitch turns N GPUs into a unified compute fabric. It is what makes NVL72-class racks behave as one accelerator.",
    usedBy: ["DGX, HGX, NVL72 racks"],
    dependsOn: ["Custom ASIC design", "TSMC"],
    relatedCompanies: ["tsmc"],
    relatedAtlasNodes: ["nvswitch"],
    sources: [{ label: "NVIDIA NVSwitch", url: "https://www.nvidia.com/en-us/data-center/nvlink/" }]
  },
  {
    id: "p-spectrum-x", name: "NVIDIA Spectrum-X Ethernet", company: "NVIDIA", category: "networking",
    whatItIs: "AI-optimized Ethernet platform combining Spectrum switches and ConnectX adapters.",
    whyItMatters: "Spectrum-X is NVIDIA's bid to win the AI networking layer with Ethernet as well as InfiniBand.",
    usedBy: ["Cloud providers", "Enterprise AI clusters"],
    dependsOn: ["Spectrum switch silicon", "ConnectX adapters"],
    relatedCompanies: [],
    relatedAtlasNodes: ["spectrum-x"],
    sources: [{ label: "NVIDIA Spectrum-X", url: "https://www.nvidia.com/en-us/networking/spectrumx/" }]
  },
  {
    id: "p-quantum-ib", name: "NVIDIA Quantum InfiniBand", company: "NVIDIA", category: "networking",
    whatItIs: "InfiniBand switching and adapter platform inherited from Mellanox.",
    whyItMatters: "InfiniBand remains the lowest-latency choice for large-scale GPU clusters.",
    usedBy: ["Frontier labs", "HPC centers"],
    dependsOn: ["Quantum switch silicon", "ConnectX"],
    relatedCompanies: [],
    relatedAtlasNodes: ["quantum-ib"],
    sources: [{ label: "NVIDIA InfiniBand", url: "https://www.nvidia.com/en-us/networking/quantum2/" }]
  },
  {
    id: "p-bluefield", name: "NVIDIA BlueField DPU", company: "NVIDIA", category: "networking",
    whatItIs: "Data processing unit offloading networking, storage and security infrastructure tasks from the host CPU.",
    whyItMatters: "BlueField gives NVIDIA a foothold inside cloud and enterprise infrastructure layers beyond the GPU.",
    usedBy: ["Cloud providers", "Enterprise data centers"],
    dependsOn: ["Arm cores", "ConnectX networking"],
    relatedCompanies: ["arm"],
    relatedAtlasNodes: ["bluefield-dpu"],
    sources: [{ label: "NVIDIA BlueField", url: "https://www.nvidia.com/en-us/networking/products/data-processing-unit/" }]
  },
  {
    id: "p-connectx", name: "NVIDIA ConnectX SuperNIC", company: "NVIDIA", category: "networking",
    whatItIs: "Network interface card family supporting InfiniBand and high-speed Ethernet for AI servers.",
    whyItMatters: "ConnectX is the host endpoint for both InfiniBand and Spectrum-X clusters.",
    usedBy: ["AI servers", "HPC servers"],
    dependsOn: ["Custom networking silicon"],
    relatedCompanies: [],
    relatedAtlasNodes: ["connectx"],
    sources: [{ label: "NVIDIA ConnectX", url: "https://www.nvidia.com/en-us/networking/ethernet-adapters/" }]
  },
  {
    id: "p-cuda", name: "CUDA", company: "NVIDIA", category: "software",
    whatItIs: "NVIDIA's parallel computing platform and programming model. The foundation of nearly every GPU-accelerated AI codebase.",
    whyItMatters: "CUDA is NVIDIA's deepest moat. Two decades of libraries, kernels and developer mindshare make it costly to leave.",
    usedBy: ["Every AI researcher and ML engineer working on NVIDIA hardware"],
    dependsOn: ["NVIDIA GPUs"],
    relatedCompanies: [],
    relatedAtlasNodes: ["cuda"],
    sources: [{ label: "NVIDIA CUDA", url: "https://developer.nvidia.com/cuda" }]
  },
  {
    id: "p-cuda-x", name: "CUDA-X", company: "NVIDIA", category: "software",
    whatItIs: "Collection of GPU-accelerated libraries spanning linear algebra, signal processing, image processing, deep learning and more.",
    whyItMatters: "CUDA-X libraries are how application teams get GPU acceleration without writing custom kernels.",
    usedBy: ["AI frameworks", "Scientific applications", "Data analytics tools"],
    dependsOn: ["CUDA"],
    relatedCompanies: [],
    relatedAtlasNodes: ["cuda-x"],
    sources: [{ label: "NVIDIA CUDA-X", url: "https://www.nvidia.com/en-us/technologies/cuda-x/" }]
  },
  {
    id: "p-tensorrt", name: "TensorRT", company: "NVIDIA", category: "software",
    whatItIs: "Inference optimization engine that compiles trained models into highly optimized GPU runtimes.",
    whyItMatters: "TensorRT is one of the levers that drives NVIDIA's tokens-per-watt story for inference.",
    usedBy: ["Cloud inference", "Edge inference", "Enterprise AI deployments"],
    dependsOn: ["CUDA", "NVIDIA GPUs"],
    relatedCompanies: [],
    relatedAtlasNodes: ["tensorrt"],
    sources: [{ label: "NVIDIA TensorRT", url: "https://developer.nvidia.com/tensorrt" }]
  },
  {
    id: "p-triton", name: "Triton Inference Server", company: "NVIDIA", category: "software",
    whatItIs: "Open-source inference serving platform handling batching, scheduling and serving across GPU types.",
    whyItMatters: "Triton standardizes how AI models are served in production on NVIDIA infrastructure.",
    usedBy: ["Cloud providers", "Enterprise AI deployments"],
    dependsOn: ["CUDA", "TensorRT"],
    relatedCompanies: [],
    relatedAtlasNodes: ["triton-inference"],
    sources: [{ label: "NVIDIA Triton", url: "https://developer.nvidia.com/triton-inference-server" }]
  },
  {
    id: "p-nim", name: "NVIDIA NIM", company: "NVIDIA", category: "software",
    whatItIs: "Pre-optimized, containerized inference microservices for popular AI models, with standard API endpoints.",
    whyItMatters: "NIM packages the inference stack so enterprises don't have to assemble it themselves.",
    usedBy: ["Enterprise AI teams", "ISVs", "Cloud providers"],
    dependsOn: ["Triton", "TensorRT"],
    relatedCompanies: [],
    relatedAtlasNodes: ["nvidia-nim"],
    sources: [{ label: "NVIDIA NIM", url: "https://www.nvidia.com/en-us/ai/" }]
  },
  {
    id: "p-nemo", name: "NeMo", company: "NVIDIA", category: "software",
    whatItIs: "Framework for training, customizing and deploying large language and multimodal models on NVIDIA infrastructure.",
    whyItMatters: "NeMo is NVIDIA's proposed enterprise path for owning models, not just renting them.",
    usedBy: ["Enterprise AI teams", "AI researchers"],
    dependsOn: ["CUDA", "GPU clusters"],
    relatedCompanies: [],
    relatedAtlasNodes: ["nemo"],
    sources: [{ label: "NVIDIA NeMo", url: "https://www.nvidia.com/en-us/ai-data-science/products/nemo/" }]
  },
  {
    id: "p-omniverse", name: "Omniverse", company: "NVIDIA", category: "platform-software",
    whatItIs: "Platform for building and operating industrial digital twins, 3D simulations and the OpenUSD-based content pipeline.",
    whyItMatters: "Omniverse anchors NVIDIA's industrial and robotics narrative beyond AI training.",
    usedBy: ["Manufacturers", "Architects", "Autonomous vehicle developers", "Robotics companies"],
    dependsOn: ["NVIDIA GPUs", "OpenUSD"],
    relatedCompanies: ["siemens", "dassault", "fanuc", "mercedes-benz"],
    relatedAtlasNodes: ["omniverse"],
    sources: [{ label: "NVIDIA Omniverse", url: "https://www.nvidia.com/en-us/omniverse/" }]
  },
  {
    id: "p-isaac", name: "Isaac", company: "NVIDIA", category: "platform-software",
    whatItIs: "Robotics development platform for perception, manipulation, navigation and sim-to-real transfer.",
    whyItMatters: "Isaac is how NVIDIA positions itself as the platform for the coming wave of physical AI and humanoid robotics.",
    usedBy: ["Robotics companies", "Warehouse automation", "Humanoid developers"],
    dependsOn: ["CUDA", "Omniverse", "Jetson"],
    relatedCompanies: ["fanuc"],
    relatedAtlasNodes: ["isaac"],
    sources: [{ label: "NVIDIA Isaac", url: "https://developer.nvidia.com/isaac" }]
  },
  {
    id: "p-drive", name: "DRIVE", company: "NVIDIA", category: "platform-software",
    whatItIs: "End-to-end platform for autonomous vehicle development &mdash; data, simulation, training and in-vehicle compute.",
    whyItMatters: "DRIVE is the highest-profile non-data-center NVIDIA product family.",
    usedBy: ["Automotive OEMs", "Autonomous vehicle companies"],
    dependsOn: ["CUDA", "Omniverse", "DRIVE / Jetson hardware"],
    relatedCompanies: ["mercedes-benz"],
    relatedAtlasNodes: ["drive"],
    sources: [{ label: "NVIDIA DRIVE", url: "https://www.nvidia.com/en-us/self-driving-cars/" }]
  },
  {
    id: "p-clara", name: "Clara", company: "NVIDIA", category: "platform-software",
    whatItIs: "Platform for AI in healthcare and medical imaging.",
    whyItMatters: "Healthcare is one of the largest non-tech end markets for accelerated computing.",
    usedBy: ["Hospitals", "Medical device companies", "Health systems"],
    dependsOn: ["CUDA", "NVIDIA GPUs"],
    relatedCompanies: [],
    relatedAtlasNodes: ["clara"],
    sources: [{ label: "NVIDIA Healthcare", url: "https://www.nvidia.com/en-us/industries/healthcare-life-sciences/" }]
  },
  {
    id: "p-bionemo", name: "BioNeMo", company: "NVIDIA", category: "platform-software",
    whatItIs: "Generative AI platform for drug discovery and molecular design.",
    whyItMatters: "BioNeMo is one of the cleanest GPU-native productivity stories outside language models.",
    usedBy: ["Pharma companies", "Biotech startups"],
    dependsOn: ["CUDA", "NeMo"],
    relatedCompanies: [],
    relatedAtlasNodes: ["bionemo"],
    sources: [{ label: "NVIDIA BioNeMo", url: "https://www.nvidia.com/en-us/clara/bionemo/" }]
  },
  {
    id: "p-cosmos", name: "Cosmos", company: "NVIDIA", category: "platform-software",
    whatItIs: "World foundation model platform for generating synthetic data and simulating physical environments.",
    whyItMatters: "Cosmos provides synthetic training data for robotics and AV programs at scale.",
    usedBy: ["Robotics companies", "AV developers"],
    dependsOn: ["CUDA", "Omniverse"],
    relatedCompanies: [],
    relatedAtlasNodes: ["cosmos"],
    sources: [{ label: "NVIDIA Cosmos", url: "https://www.nvidia.com/en-us/ai/cosmos/" }]
  },
  {
    id: "p-cudaq", name: "CUDA-Q", company: "NVIDIA", category: "quantum",
    whatItIs: "Open-source platform for hybrid quantum-classical computing on GPU-accelerated systems.",
    whyItMatters: "CUDA-Q ties quantum hardware vendors into NVIDIA's GPU ecosystem rather than competing with it.",
    usedBy: ["Quantum researchers", "National labs"],
    dependsOn: ["CUDA", "Quantum hardware partners"],
    relatedCompanies: ["quantinuum", "ionq", "ibm-quantum"],
    relatedAtlasNodes: ["cuda-q"],
    sources: [{ label: "NVIDIA CUDA-Q", url: "https://developer.nvidia.com/cuda-q" }]
  },
  {
    id: "p-nvqlink", name: "NVQLink", company: "NVIDIA", category: "quantum",
    whatItIs: "High-speed interconnect from quantum processors to GPU systems.",
    whyItMatters: "NVQLink is NVIDIA's hardware claim to be the substrate that quantum hardware plugs into.",
    usedBy: ["Quantum hardware companies"],
    dependsOn: ["GPU systems"],
    relatedCompanies: ["quantinuum", "ionq"],
    relatedAtlasNodes: ["nvqlink"],
    sources: [{ label: "NVIDIA NVQLink", url: "https://www.nvidia.com/en-us/solutions/quantum-computing/nvqlink/" }]
  },

  /* ── Power & data-center products ──────── */
  {
    id: "p-substations", name: "Substations", company: "Industry", category: "power-equipment",
    whatItIs: "Electrical infrastructure that steps grid voltage down for use within a campus or building.",
    whyItMatters: "An AI campus often requires its own dedicated substation. Build times and equipment lead times can dominate the project schedule.",
    usedBy: ["Hyperscaler campuses", "Colocation operators"],
    dependsOn: ["Transformers", "Switchgear", "Utility interconnection"],
    relatedCompanies: ["schneider", "abb", "siemens-energy", "ge-vernova", "eaton"],
    relatedAtlasNodes: ["grid-access"],
    sources: []
  },
  {
    id: "p-transformers", name: "Large transformers", company: "Industry", category: "power-equipment",
    whatItIs: "High-capacity electrical transformers used at substations and along the grid.",
    whyItMatters: "Transformer manufacturing capacity is in chronic shortage globally. Lead times can stretch for years for the largest sizes.",
    usedBy: ["Utilities", "Industrial customers", "Data center campuses"],
    dependsOn: ["Specialty steel", "Copper", "Skilled manufacturing labor"],
    relatedCompanies: ["siemens-energy", "ge-vernova", "abb"],
    relatedAtlasNodes: ["grid-access"],
    sources: []
  },
  {
    id: "p-switchgear", name: "Switchgear", company: "Industry", category: "power-equipment",
    whatItIs: "Electrical apparatus for protecting and isolating circuits inside data centers and substations.",
    whyItMatters: "Switchgear lead times have stretched substantially with AI buildout demand.",
    usedBy: ["Data centers", "Utilities", "Industrial customers"],
    dependsOn: ["Electrical components", "Manufacturing capacity"],
    relatedCompanies: ["schneider", "eaton", "abb"],
    relatedAtlasNodes: [],
    sources: []
  },
  {
    id: "p-ups", name: "UPS systems", company: "Industry", category: "power-equipment",
    whatItIs: "Uninterruptible power supply equipment that bridges grid outages and conditions power for sensitive equipment.",
    whyItMatters: "UPS systems protect AI hardware from any voltage event that would otherwise interrupt training or corrupt state.",
    usedBy: ["Every data center"],
    dependsOn: ["Batteries", "Power semiconductors"],
    relatedCompanies: ["schneider", "vertiv", "eaton"],
    relatedAtlasNodes: [],
    sources: []
  },
  {
    id: "p-generators", name: "Backup generators", company: "Industry", category: "power-equipment",
    whatItIs: "Diesel or gas generators that come online during prolonged grid outages.",
    whyItMatters: "Required by virtually all enterprise and hyperscale data center designs as a final fallback.",
    usedBy: ["Every data center"],
    dependsOn: ["Engine and fuel system suppliers"],
    relatedCompanies: [],
    relatedAtlasNodes: [],
    sources: []
  },
  {
    id: "p-gas-turbines", name: "Gas turbines", company: "Industry", category: "generation",
    whatItIs: "Combustion turbines used for utility-scale electricity generation. Increasingly considered for behind-the-meter power for large data centers.",
    whyItMatters: "Gas peakers are one of the few fast-to-deploy options for adding firm capacity to support AI loads. Slot availability is constrained.",
    usedBy: ["Utilities", "Independent power producers", "Behind-the-meter projects"],
    dependsOn: ["Specialty alloys", "Manufacturing slots"],
    relatedCompanies: ["ge-vernova", "siemens-energy"],
    relatedAtlasNodes: [],
    sources: []
  },
  {
    id: "p-nuclear", name: "Nuclear power", company: "Industry", category: "generation",
    whatItIs: "Existing utility-scale nuclear plants. Restart programs and uprates have become directly tied to AI demand.",
    whyItMatters: "Nuclear is one of the few sources of carbon-free firm power available at hundreds of megawatts. Microsoft's Three Mile Island restart with Constellation is the headline example.",
    usedBy: ["Hyperscalers via PPAs"],
    dependsOn: ["Operating licenses", "Fuel supply"],
    relatedCompanies: ["constellation-energy", "vistra", "southern-co", "duke"],
    relatedAtlasNodes: ["power-generation"],
    sources: []
  },
  {
    id: "p-smr", name: "Small modular reactors (SMRs)", company: "Industry", category: "generation",
    whatItIs: "Smaller, factory-built nuclear reactor designs. Multiple vendors are pursuing data center power as a primary market.",
    whyItMatters: "SMRs may eventually let data centers contract for dedicated nuclear capacity at sub-gigawatt scale, with shorter timelines than traditional plants.",
    usedBy: ["Future hyperscaler campuses"],
    dependsOn: ["Regulatory approvals", "Manufacturing supply chains"],
    relatedCompanies: ["ge-vernova"],
    relatedAtlasNodes: [],
    sources: []
  },
  {
    id: "p-renewable-ppa", name: "Renewable power purchase agreements", company: "Industry", category: "generation",
    whatItIs: "Long-term contracts under which a buyer agrees to purchase the output of new wind, solar or storage projects.",
    whyItMatters: "PPAs are how hyperscalers fund the construction of new clean generation aligned with their growing AI loads.",
    usedBy: ["Hyperscalers", "Large industrial buyers"],
    dependsOn: ["Renewable developers", "Land", "Interconnection rights"],
    relatedCompanies: ["nextera", "constellation-energy"],
    relatedAtlasNodes: [],
    sources: []
  },
  {
    id: "p-battery-storage", name: "Battery storage", company: "Industry", category: "generation",
    whatItIs: "Grid-scale lithium-ion or alternative chemistries used to firm intermittent renewables and provide grid services.",
    whyItMatters: "Storage is increasingly paired with renewables to provide more dispatchable clean power for AI loads.",
    usedBy: ["Utilities", "IPPs", "Hyperscalers via PPAs"],
    dependsOn: ["Battery cell supply", "Inverters"],
    relatedCompanies: ["nextera"],
    relatedAtlasNodes: [],
    sources: []
  },
  {
    id: "p-liquid-cooling", name: "Direct liquid cooling", company: "Industry", category: "cooling-equipment",
    whatItIs: "Cooling architecture that flows liquid coolant directly across or through cold plates attached to GPUs and CPUs.",
    whyItMatters: "Required for GB200 NVL72 and successor racks. Air cooling cannot manage the thermal density of these systems.",
    usedBy: ["GB200 / GB300 NVL72 deployments"],
    dependsOn: ["Cold plates", "CDUs", "Coolant", "Manifolds"],
    relatedCompanies: ["coolit", "vertiv", "motivair", "boyd"],
    relatedAtlasNodes: ["liquid-cooling-tech"],
    sources: []
  },
  {
    id: "p-cdu", name: "Coolant distribution units", company: "Industry", category: "cooling-equipment",
    whatItIs: "Pump and heat-exchanger boxes that move coolant between cold plates and facility cooling loops.",
    whyItMatters: "Each liquid-cooled rack needs at least one CDU. CDU manufacturing has become a constraint.",
    usedBy: ["Liquid-cooled GPU racks"],
    dependsOn: ["Pumps", "Heat exchangers", "Controls"],
    relatedCompanies: ["motivair", "vertiv", "coolit"],
    relatedAtlasNodes: [],
    sources: []
  },
  {
    id: "p-pdu", name: "Power distribution units (PDUs)", company: "Industry", category: "rack-equipment",
    whatItIs: "Rack-level power distribution and monitoring devices.",
    whyItMatters: "Modern AI racks need intelligent PDUs for both power capacity and granular telemetry.",
    usedBy: ["Every data center rack"],
    dependsOn: ["Electrical components", "Embedded systems"],
    relatedCompanies: ["legrand", "vertiv", "schneider"],
    relatedAtlasNodes: [],
    sources: []
  },
  {
    id: "p-high-density-rack", name: "High-density racks", company: "Industry", category: "rack-equipment",
    whatItIs: "Racks engineered for power density above 50&ndash;100 kW with integrated liquid cooling and busway power.",
    whyItMatters: "GB200 NVL72-class systems require purpose-built high-density racks rather than generic 19-inch enclosures.",
    usedBy: ["AI factory deployments"],
    dependsOn: ["Steel", "Cooling integration", "Busway power"],
    relatedCompanies: ["legrand", "vertiv", "schneider"],
    relatedAtlasNodes: ["rack-density"],
    sources: []
  },

  /* ── Cloud instances ───────────────────── */
  {
    id: "p-azure-nd-gb300", name: "Azure ND GB300 v6", company: "Microsoft Azure", category: "cloud-instance",
    whatItIs: "Azure VM configuration backed by NVIDIA GB300 NVL72 systems. Publicly announced as Azure's first large-scale GB300 cluster for OpenAI workloads.",
    whyItMatters: "Among the earliest and largest commercial deployments of the GB300 generation.",
    usedBy: ["OpenAI workloads (announced)", "Azure customers"],
    dependsOn: ["GB300 NVL72", "Azure data center infrastructure"],
    relatedCompanies: ["azure"],
    relatedAtlasNodes: ["gb300-nvl72"],
    sources: [{ label: "Azure GB300 cluster announcement", url: "https://azure.microsoft.com/en-us/blog/microsoft-azure-delivers-the-first-large-scale-cluster-with-nvidia-gb300-nvl72-for-openai-workloads/" }]
  },
  {
    id: "p-aws-p6", name: "AWS P6 / P6-B200 / P6-B300", company: "AWS", category: "cloud-instance",
    whatItIs: "AWS P-series instances powered by NVIDIA Blackwell B200 / B300 GPUs.",
    whyItMatters: "AWS's primary commercial path to renting Blackwell-class capacity.",
    usedBy: ["AWS customers"],
    dependsOn: ["B200 / B300 GPUs", "AWS data center infrastructure"],
    relatedCompanies: ["aws"],
    relatedAtlasNodes: ["b200"],
    sources: [{ label: "AWS P6 instances", url: "https://aws.amazon.com/ec2/instance-types/p6/" }]
  },
  {
    id: "p-gcp-a4", name: "Google Cloud A4 / A4X", company: "Google Cloud", category: "cloud-instance",
    whatItIs: "Google Cloud VM types powered by NVIDIA Blackwell B200 (A4) and GB200 (A4X) systems.",
    whyItMatters: "Google's commercial NVIDIA story, in addition to its in-house TPUs.",
    usedBy: ["Google Cloud customers"],
    dependsOn: ["B200 / GB200 systems"],
    relatedCompanies: ["gcp"],
    relatedAtlasNodes: ["b200", "gb200"],
    sources: [{ label: "Google Cloud A4X VMs", url: "https://cloud.google.com/blog/products/compute/new-a4x-vms-powered-by-nvidia-gb200-gpus" }]
  },
  {
    id: "p-oci-gpu", name: "Oracle Cloud NVIDIA GPU clusters", company: "Oracle Cloud", category: "cloud-instance",
    whatItIs: "Bare-metal and VM GPU configurations on Oracle Cloud Infrastructure spanning H100, H200, B200 and GB200.",
    whyItMatters: "OCI has secured very large NVIDIA capacity contracts and is a frequent destination for non-hyperscaler-tier AI workloads.",
    usedBy: ["AI labs", "Enterprises"],
    dependsOn: ["NVIDIA systems", "RDMA networking"],
    relatedCompanies: ["oracle-cloud"],
    relatedAtlasNodes: ["oracle-cloud"],
    sources: [{ label: "OCI AI infrastructure", url: "https://www.oracle.com/cloud/ai-infrastructure/" }]
  },
  {
    id: "p-coreweave-clusters", name: "CoreWeave NVIDIA clusters", company: "CoreWeave", category: "cloud-instance",
    whatItIs: "Dedicated multi-thousand-GPU clusters spanning H100, H200, B200 and GB200 / GB300 configurations.",
    whyItMatters: "CoreWeave's clusters are early commercial deployments of each new NVIDIA platform.",
    usedBy: ["AI labs", "Media", "Enterprise AI"],
    dependsOn: ["NVIDIA systems", "InfiniBand or Spectrum-X"],
    relatedCompanies: ["coreweave"],
    relatedAtlasNodes: ["coreweave"],
    sources: [{ label: "CoreWeave", url: "https://www.coreweave.com/" }]
  }

];

/* ============================================
   RELATIONSHIP PATHS — Step-by-step flows

   A path is a narrative walk through several nodes / companies / products,
   shown as a sequence of steps. Used by the Path Explorer section to teach
   how the system actually connects end-to-end.
   ============================================ */
var RELATIONSHIP_PATHS = [
  {
    id: "path-gpu-born",
    title: "How an NVIDIA GPU is born",
    description: "From lithography machine to inference cluster &mdash; the entire physical journey of a single GPU.",
    explanation: "Every NVIDIA GPU you use in the cloud started as a wafer in a fab. EUV systems pattern the wafer, equipment vendors etch and deposit it, HBM stacks attach via CoWoS, and an ODM puts the finished accelerator into a rack and ships it to a cloud.",
    whyItMatters: "Each step has its own constraint and lead time. A bottleneck anywhere in this chain delays the GPU's arrival, regardless of how much demand exists at the end.",
    relatedQuestions: ["q-how-gpu-made", "q-tsmc-spof", "q-cowos", "q-bottlenecks-overview"],
    steps: [
      { ref: "company:asml", note: "ASML ships an EUV scanner to TSMC." },
      { ref: "company:tsmc", note: "TSMC patterns the GPU die at N4-class on EUV-equipped lines." },
      { ref: "product:p-tsmc-cowos", note: "CoWoS packaging attaches HBM stacks to the GPU die on a silicon interposer." },
      { ref: "company:sk-hynix", note: "HBM stacks come from SK hynix, Micron or Samsung Memory." },
      { ref: "node:nvidia", note: "NVIDIA receives the packaged accelerator and integrates it into HGX or GB-series boards." },
      { ref: "company:foxconn", note: "Foxconn or another ODM assembles the boards into NVL72 racks." },
      { ref: "company:azure", note: "Azure, AWS, GCP, Oracle Cloud or a neocloud installs the racks and rents capacity to customers." }
    ]
  },
  {
    id: "path-tsmc-nvidia",
    title: "How TSMC powers NVIDIA",
    description: "EDA → process node → wafer fabrication → advanced packaging → NVIDIA accelerator.",
    explanation: "Behind every NVIDIA chip is TSMC's full production stack &mdash; from the EDA tools used to design the chip to the packaging that makes it usable.",
    whyItMatters: "Understanding this chain explains why a single supplier dependency at TSMC has system-wide implications for NVIDIA's roadmap and pricing.",
    steps: [
      { ref: "company:synopsys", note: "Synopsys and Cadence tools are used to design the GPU." },
      { ref: "product:p-tsmc-n4", note: "TSMC N4-class fabricates the GPU die on EUV-equipped lines." },
      { ref: "product:p-tsmc-cowos", note: "TSMC CoWoS attaches HBM stacks to the die." },
      { ref: "node:nvidia", note: "NVIDIA tests, brands, integrates and sells the resulting accelerator." }
    ]
  },
  {
    id: "path-asml-ai",
    title: "How ASML indirectly powers AI",
    description: "EUV scanner → TSMC leading-edge node → NVIDIA Blackwell or Rubin → AI factory → inference workloads.",
    explanation: "ASML doesn't sell to NVIDIA. ASML sells to TSMC. But every leading-edge AI chip is patterned with ASML EUV light. The relationship is structural, not contractual.",
    whyItMatters: "ASML capacity sets a hard ceiling on how fast leading-edge AI silicon can grow. Investors and policymakers should follow ASML quarterly almost as closely as NVIDIA.",
    relatedQuestions: ["q-asml-importance", "q-tsmc-spof", "q-export-controls"],
    steps: [
      { ref: "product:p-asml-euv", note: "ASML ships an EUV scanner." },
      { ref: "company:tsmc", note: "TSMC uses the EUV scanner to print the most critical layers of leading-edge chips." },
      { ref: "node:blackwell", note: "NVIDIA Blackwell-generation GPUs (and future Rubin) are produced on those lines." },
      { ref: "node:ai-factory", note: "The chips are deployed in AI factories." },
      { ref: "node:cloud-inference", note: "Cloud inference workloads run on the resulting capacity." }
    ]
  },
  {
    id: "path-ai-factory-build",
    title: "How an AI factory is built",
    description: "Power company → grid connection → substation → data center shell → liquid cooling → GB200/GB300 racks → NVLink/NVSwitch fabric → inference software.",
    explanation: "An AI factory begins with a power purchase agreement, not a server purchase order. The order of operations matters: power must be secured before silicon arrives.",
    whyItMatters: "Most AI infrastructure delays are not silicon delays. They are power, cooling and construction delays.",
    relatedQuestions: ["q-ai-factory", "q-power-bound", "q-microsoft-tmi", "q-liquid-cooling"],
    steps: [
      { ref: "company:constellation-energy", note: "A power company signs a PPA for the campus's load." },
      { ref: "node:grid-access", note: "Grid interconnection and substation construction follow." },
      { ref: "company:schneider", note: "Schneider, Eaton or peers supply switchgear, transformers and UPS." },
      { ref: "product:p-liquid-cooling", note: "Liquid cooling infrastructure is installed before any GPUs arrive." },
      { ref: "node:gb200-nvl72", note: "GB200 or GB300 NVL72 racks are deployed and connected to the cooling loop." },
      { ref: "node:nvswitch", note: "NVLink/NVSwitch fabric ties the rack into a unified compute system." },
      { ref: "product:p-triton", note: "TensorRT, Triton and NIM serve inference workloads on the cluster." }
    ]
  },
  {
    id: "path-cuda-lockin",
    title: "How CUDA creates lock-in",
    description: "CUDA → libraries → frameworks → developer workflows → optimized inference → enterprise deployment.",
    explanation: "CUDA's moat is not one feature. It is the layered accumulation of two decades of libraries, frameworks, operator coverage, debugging tools and developer habit.",
    whyItMatters: "Competitors must replicate the entire stack, not just the chip. This is why custom silicon programs that look strong on paper still land mostly inside the company that built them.",
    relatedQuestions: ["q-cuda-lockin", "q-rocm-vs-cuda", "q-asics-replacement", "q-tensorrt-moat"],
    steps: [
      { ref: "node:cuda", note: "CUDA defines the programming model for the GPU." },
      { ref: "node:cuda-x", note: "CUDA-X libraries provide optimized kernels for nearly every domain." },
      { ref: "node:cudnn", note: "cuDNN underpins virtually every deep learning framework." },
      { ref: "node:tensorrt", note: "TensorRT compiles models for high-performance inference." },
      { ref: "node:ai-enterprise", note: "AI Enterprise packages the stack with support for production." }
    ]
  },
  {
    id: "path-cloud-distribution",
    title: "How cloud providers sell NVIDIA",
    description: "NVIDIA systems → OEM/ODM rack integration → cloud GPU instance → AI lab or enterprise customer.",
    explanation: "NVIDIA does not, in most cases, sell directly to the end user. The cloud provider is the merchant of record for capacity. The OEM or ODM is the system integrator.",
    whyItMatters: "Investor-grade analysis distinguishes between NVIDIA's direct revenue mix and the indirect routes by which its hardware reaches users.",
    relatedQuestions: ["q-cloud-monetize", "q-asics-replacement", "q-second-winners"],
    steps: [
      { ref: "node:nvidia", note: "NVIDIA ships GPUs and reference systems." },
      { ref: "company:foxconn", note: "Foxconn, Quanta, Wistron, Wiwynn, Inventec, Supermicro, Dell or HPE integrates the systems." },
      { ref: "company:azure", note: "Azure, AWS, GCP, OCI, CoreWeave or a peer installs and operates the capacity." },
      { ref: "node:frontier-ai-labs", note: "The end customer rents the capacity." }
    ]
  },
  {
    id: "path-quantum",
    title: "How quantum fits into the stack",
    description: "QPU → quantum controller → NVQLink → CUDA-Q → GPU acceleration → quantum error correction and simulation.",
    explanation: "NVIDIA's quantum strategy positions GPUs as the orchestration and acceleration layer around quantum hardware, not as a competitor to it.",
    whyItMatters: "The story of quantum computing in the 2020s is a story of GPU clusters running classical work alongside quantum subroutines. The hybrid layer is where most of the engineering happens.",
    relatedQuestions: ["q-quantum-stack", "q-quantum-error-correction"],
    steps: [
      { ref: "company:quantinuum", note: "A QPU vendor (e.g. Quantinuum, IonQ, IBM Quantum) operates the quantum hardware." },
      { ref: "node:quantum-controller", note: "Classical electronics generate and read quantum control signals." },
      { ref: "node:nvqlink", note: "NVQLink wires the QPU into a GPU cluster." },
      { ref: "node:cuda-q", note: "CUDA-Q expresses hybrid quantum-classical programs." },
      { ref: "node:cuda", note: "Classical work runs on GPUs in tight coupling with the QPU." },
      { ref: "node:quantum-error-correction", note: "Error correction and simulation are GPU-heavy workloads even for the quantum side." }
    ]
  }
];

/* ============================================
   LEARNING PATHS — guided tracks through the atlas

   Each track lists nodes, companies, products and paths in a recommended
   reading order for a particular reader profile.
   ============================================ */
var LEARNING_PATHS = [
  {
    id: "lp-beginner",
    title: "Understand AI infrastructure",
    audience: "Beginner",
    description: "Start here. A guided tour from 'what is a GPU' to 'why does power matter'.",
    steps: [
      { ref: "node:nvidia", note: "Begin at the center: what NVIDIA actually sells." },
      { ref: "node:cuda", note: "CUDA: the software layer that makes a GPU more than a chip." },
      { ref: "company:tsmc", note: "TSMC: the factory that turns chip designs into physical wafers." },
      { ref: "node:hbm3e", note: "HBM3E: the memory glued to every modern AI accelerator." },
      { ref: "node:cowos", note: "CoWoS: the packaging that sticks them together." },
      { ref: "node:ai-factory", note: "AI factory: the framing that puts it all in one industrial system." },
      { ref: "path:path-gpu-born", note: "Walk the full path of how a GPU is born." }
    ]
  },
  {
    id: "lp-semi",
    title: "Semiconductor: ASML → TSMC → HBM → CoWoS",
    audience: "Semiconductor learner",
    description: "Follow the silicon. From the lithography machine to the finished AI package.",
    steps: [
      { ref: "company:asml", note: "Start with the lithography monopoly." },
      { ref: "product:p-asml-euv", note: "EUV: the light that prints the smallest features." },
      { ref: "company:tsmc", note: "TSMC: the foundry that uses ASML's machines." },
      { ref: "product:p-tsmc-n4", note: "N4: the process node behind today's leading AI chips." },
      { ref: "company:sk-hynix", note: "SK hynix: the leading HBM supplier." },
      { ref: "product:p-hbm3e", note: "HBM3E: the memory that feeds the GPU." },
      { ref: "product:p-tsmc-cowos", note: "CoWoS: the packaging that makes the GPU+HBM possible." },
      { ref: "path:path-tsmc-nvidia", note: "Walk the full TSMC → NVIDIA chain." }
    ]
  },
  {
    id: "lp-nvidia",
    title: "NVIDIA stack: GPU → networking → CUDA → AI Enterprise",
    audience: "NVIDIA stack learner",
    description: "Climb the NVIDIA product stack from silicon to enterprise software.",
    steps: [
      { ref: "node:blackwell", note: "Blackwell: the current GPU architecture." },
      { ref: "node:gb200-nvl72", note: "GB200 NVL72: the rack-scale system." },
      { ref: "node:nvlink", note: "NVLink and NVSwitch: the rack interconnect." },
      { ref: "node:spectrum-x", note: "Spectrum-X and InfiniBand: between racks." },
      { ref: "node:cuda", note: "CUDA: the programming model." },
      { ref: "node:tensorrt", note: "TensorRT and Triton: production inference." },
      { ref: "node:ai-enterprise", note: "AI Enterprise: the enterprise SKU." },
      { ref: "path:path-cuda-lockin", note: "How CUDA creates lock-in &mdash; the moat in motion." }
    ]
  },
  {
    id: "lp-factory",
    title: "AI factory: power → cooling → racks → tokens",
    audience: "AI factory learner",
    description: "Read the system as if you were operating an AI campus.",
    steps: [
      { ref: "node:power-generation", note: "Start with electricity. Without it, nothing else matters." },
      { ref: "company:constellation-energy", note: "Where the electricity comes from." },
      { ref: "company:schneider", note: "How it gets distributed inside the building." },
      { ref: "node:liquid-cooling-tech", note: "How heat is removed at high density." },
      { ref: "company:vertiv", note: "Who builds the cooling and power infrastructure." },
      { ref: "node:gb200-nvl72", note: "The rack itself." },
      { ref: "node:tokens-per-watt", note: "The metric the whole factory is judged by." },
      { ref: "path:path-ai-factory-build", note: "Walk the full build sequence." }
    ]
  },
  {
    id: "lp-investor",
    title: "Investor: bottlenecks, value capture, substitution risks",
    audience: "Investor",
    description: "What constrains the system, where value accrues, and what could shift the balance.",
    steps: [
      { ref: "node:cowos", note: "CoWoS: the most discussed near-term constraint." },
      { ref: "node:hbm3e", note: "HBM concentration risk." },
      { ref: "node:supply-chain-concentration", note: "TSMC concentration risk." },
      { ref: "node:export-controls-concept", note: "Geopolitics as a market shaper." },
      { ref: "node:cuda-lock-in", note: "The moat that protects pricing." },
      { ref: "node:hyperscaler-asics", note: "The substitution risk worth tracking." },
      { ref: "company:aws", note: "AWS as the most important substitution test case." },
      { ref: "path:path-cloud-distribution", note: "Where value accrues along the distribution chain." }
    ]
  },
  {
    id: "lp-quantum",
    title: "Quantum: QPU → CUDA-Q → NVQLink → error correction",
    audience: "Quantum learner",
    description: "Understand quantum the way NVIDIA frames it: GPU-anchored hybrid compute.",
    steps: [
      { ref: "node:qpu", note: "What a QPU actually is." },
      { ref: "company:quantinuum", note: "Quantinuum: a representative trapped-ion vendor." },
      { ref: "company:ibm-quantum", note: "IBM: the long-running superconducting program." },
      { ref: "node:cuda-q", note: "CUDA-Q: the hybrid programming layer." },
      { ref: "node:nvqlink", note: "NVQLink: the physical bridge to GPUs." },
      { ref: "node:quantum-error-correction", note: "Error correction: the open problem." },
      { ref: "path:path-quantum", note: "Walk the full quantum-classical path." }
    ]
  }
];

/* ============================================
   SOURCES — Trust layer

   Every consequential claim in the atlas should be traceable to one of
   these references. Confidence levels classify how much weight a claim
   carries: "sourced" = directly stated in cited material, "inferred" =
   reasonable reading across multiple sources, "context" = market common-
   knowledge, "speculative" = forward-looking or roadmap-dependent.
   ============================================ */
var SOURCES = [
  { id: "src-nvidia-10k",   title: "NVIDIA FY2026 10-K",                      publisher: "U.S. SEC",          type: "filing",   url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm" },
  { id: "src-nvidia-dc",    title: "NVIDIA Data Center",                      publisher: "NVIDIA",            type: "vendor",   url: "https://www.nvidia.com/en-us/data-center/" },
  { id: "src-nvidia-gb200", title: "NVIDIA GB200 NVL72",                      publisher: "NVIDIA",            type: "vendor",   url: "https://www.nvidia.com/en-us/data-center/gb200-nvl72/" },
  { id: "src-nvidia-gb300", title: "NVIDIA GB300 NVL72",                      publisher: "NVIDIA",            type: "vendor",   url: "https://www.nvidia.com/en-au/data-center/gb300-nvl72/" },
  { id: "src-nvidia-vr",    title: "NVIDIA Vera Rubin NVL72",                 publisher: "NVIDIA",            type: "vendor",   url: "https://www.nvidia.com/en-us/data-center/vera-rubin-nvl72/" },
  { id: "src-nvidia-aif",   title: "NVIDIA AI Factories",                     publisher: "NVIDIA",            type: "vendor",   url: "https://www.nvidia.com/en-us/solutions/ai-factories/" },
  { id: "src-nvidia-cuda",  title: "NVIDIA CUDA",                             publisher: "NVIDIA",            type: "vendor",   url: "https://developer.nvidia.com/cuda" },
  { id: "src-nvidia-aie",   title: "NVIDIA AI Enterprise",                    publisher: "NVIDIA",            type: "vendor",   url: "https://www.nvidia.com/en-au/data-center/products/ai-enterprise/" },
  { id: "src-nvidia-omni",  title: "NVIDIA Omniverse",                        publisher: "NVIDIA",            type: "vendor",   url: "https://www.nvidia.com/en-us/omniverse/" },
  { id: "src-nvidia-isaac", title: "NVIDIA Isaac",                            publisher: "NVIDIA",            type: "vendor",   url: "https://developer.nvidia.com/isaac" },
  { id: "src-nvidia-cosmos",title: "NVIDIA Cosmos",                           publisher: "NVIDIA",            type: "vendor",   url: "https://www.nvidia.com/en-us/ai/cosmos/" },
  { id: "src-nvidia-jetson",title: "NVIDIA Jetson Thor",                      publisher: "NVIDIA",            type: "vendor",   url: "https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-thor/" },
  { id: "src-nvidia-cudaq", title: "NVIDIA CUDA-Q",                           publisher: "NVIDIA",            type: "vendor",   url: "https://developer.nvidia.com/cuda-q" },
  { id: "src-nvidia-nvql",  title: "NVIDIA NVQLink",                          publisher: "NVIDIA",            type: "vendor",   url: "https://www.nvidia.com/en-us/solutions/quantum-computing/nvqlink/" },
  { id: "src-nvidia-nvaqc", title: "NVIDIA Accelerated Quantum Center",       publisher: "NVIDIA",            type: "vendor",   url: "https://www.nvidia.com/en-us/solutions/quantum-computing/accelerated-quantum-center/" },
  { id: "src-tsmc-cowos",   title: "TSMC CoWoS technology",                   publisher: "TSMC",              type: "vendor",   url: "https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/cowos.htm" },
  { id: "src-tsmc-3df",     title: "TSMC 3DFabric platform",                  publisher: "TSMC",              type: "vendor",   url: "https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/3DFabric.htm" },
  { id: "src-asml-euv",     title: "ASML EUV lithography systems",            publisher: "ASML",              type: "vendor",   url: "https://www.asml.com/en/products/euv-lithography-systems" },
  { id: "src-asml-highna",  title: "ASML High-NA EUV (EXE)",                  publisher: "ASML",              type: "vendor",   url: "https://www.asml.com/en/products/euv-lithography-systems/exe5000" },
  { id: "src-micron-hbm3e", title: "Micron HBM3E",                            publisher: "Micron",            type: "vendor",   url: "https://www.micron.com/products/memory/hbm/hbm3e" },
  { id: "src-micron-hbm4",  title: "Micron HBM4",                             publisher: "Micron",            type: "vendor",   url: "https://www.micron.com/products/memory/hbm/hbm4" },
  { id: "src-samsung-hbm4", title: "Samsung HBM4",                            publisher: "Samsung",           type: "vendor",   url: "https://semiconductor.samsung.com/dram/hbm/hbm4/" },
  { id: "src-azure-gb300",  title: "Microsoft Azure GB300 NVL72 cluster",     publisher: "Microsoft",         type: "vendor",   url: "https://azure.microsoft.com/en-us/blog/microsoft-azure-delivers-the-first-large-scale-cluster-with-nvidia-gb300-nvl72-for-openai-workloads/" },
  { id: "src-aws-p6",       title: "AWS P6 Instances",                        publisher: "Amazon",            type: "vendor",   url: "https://aws.amazon.com/ec2/instance-types/p6/" },
  { id: "src-gcp-a4x",      title: "Google Cloud A4X VMs",                    publisher: "Google",            type: "vendor",   url: "https://cloud.google.com/blog/products/compute/new-a4x-vms-powered-by-nvidia-gb200-gpus" },
  { id: "src-dell-aif",     title: "Dell AI Factory with NVIDIA",             publisher: "Dell",              type: "vendor",   url: "https://www.dell.com/en-au/lp/dt/nvidia-ai" },
  { id: "src-supermicro",   title: "Supermicro NVIDIA Systems",               publisher: "Supermicro",        type: "vendor",   url: "https://www.supermicro.com/en/accelerators/nvidia" },
  { id: "src-iea-energy",   title: "Energy and AI",                           publisher: "IEA",               type: "research", url: "https://www.iea.org/reports/energy-and-ai" },
  { id: "src-bis",          title: "BIS Export Controls",                     publisher: "U.S. Department of Commerce", type: "regulator", url: "https://www.bis.gov/" }
];

/* ============================================
   SOURCE_CLAIM_MAP — How sources flow through the atlas

   Every source in SOURCES is mapped to:
     supports — the categories of claim the source can substantiate
     usedIn   — the typed refs (node:, company:, product:, scenario:,
                path:, question:) where the source is curated as a
                citation.

   This map makes the trust layer auditable: a reader can see what each
   source actually backs, and where in the atlas those claims appear.
   `usedIn` lists are curated highlights, not exhaustive enumerations.
   ============================================ */
var SOURCE_CLAIM_MAP = [
  {
    sourceId: "src-nvidia-10k",
    supports: [
      "NVIDIA's financial scale, segment mix and revenue concentration",
      "Disclosed supplier and customer concentration risk factors",
      "Geographic and regulatory risk framing"
    ],
    usedIn: ["node:nvidia"]
  },
  {
    sourceId: "src-nvidia-dc",
    supports: [
      "NVIDIA data-center product portfolio overview",
      "Hopper / Blackwell / Rubin generation positioning",
      "Reference architecture catalog"
    ],
    usedIn: ["node:nvidia", "node:hopper", "node:blackwell"]
  },
  {
    sourceId: "src-nvidia-gb200",
    supports: [
      "GB200 NVL72 system specifications and rack architecture",
      "Liquid cooling design requirements at the rack level",
      "NVLink fabric topology and GPU count per rack"
    ],
    usedIn: ["node:gb200-nvl72", "node:gb200", "question:q-rack-scale-different", "scenario:s-cooling"]
  },
  {
    sourceId: "src-nvidia-gb300",
    supports: [
      "GB300 NVL72 system specifications",
      "Blackwell Ultra positioning and rack-scale upgrades over GB200"
    ],
    usedIn: ["node:gb300-nvl72", "node:gb300", "node:blackwell-ultra"]
  },
  {
    sourceId: "src-nvidia-vr",
    supports: [
      "Vera Rubin NVL72 roadmap and rack-scale evolution",
      "Forward-looking Vera CPU and Rubin GPU pairing",
      "HBM4 expected adoption"
    ],
    usedIn: ["node:vera-rubin-nvl72", "node:rubin", "node:vera-cpu", "node:hbm4"]
  },
  {
    sourceId: "src-nvidia-aif",
    supports: [
      "NVIDIA's 'AI factory' framing and reference designs",
      "Reference partnerships with Schneider, Vertiv and OEMs"
    ],
    usedIn: ["node:ai-factory", "company:schneider", "company:vertiv", "question:q-ai-factory"]
  },
  {
    sourceId: "src-nvidia-cuda",
    supports: [
      "CUDA platform overview and library scope",
      "Programming model documentation"
    ],
    usedIn: ["node:cuda", "node:cuda-x", "question:q-cuda-lockin"]
  },
  {
    sourceId: "src-nvidia-aie",
    supports: [
      "NVIDIA AI Enterprise software bundle scope",
      "Triton, NIM and NeMo packaging"
    ],
    usedIn: ["node:ai-enterprise", "node:triton-inference", "node:nvidia-nim", "node:nemo"]
  },
  {
    sourceId: "src-nvidia-omni",
    supports: [
      "Omniverse platform features and OpenUSD positioning",
      "Industrial digital-twin use cases"
    ],
    usedIn: ["node:omniverse", "node:isaac", "node:cosmos"]
  },
  {
    sourceId: "src-nvidia-isaac",
    supports: [
      "NVIDIA Isaac robotics stack overview",
      "Sim, ROS, Manipulator, Perceptor scope"
    ],
    usedIn: ["node:isaac", "node:robotics", "node:humanoid-robots"]
  },
  {
    sourceId: "src-nvidia-cosmos",
    supports: [
      "Cosmos world foundation models and synthetic data generation",
      "Robotics and AV training pipelines"
    ],
    usedIn: ["node:cosmos", "node:omniverse"]
  },
  {
    sourceId: "src-nvidia-jetson",
    supports: [
      "Jetson Thor edge AI platform specs",
      "Humanoid robot reference compute"
    ],
    usedIn: ["node:jetson-thor", "node:humanoid-robots"]
  },
  {
    sourceId: "src-nvidia-cudaq",
    supports: [
      "CUDA-Q programming framework for hybrid quantum-classical workloads",
      "Vendor and modality coverage on the QPU side"
    ],
    usedIn: ["node:cuda-q", "question:q-quantum-stack"]
  },
  {
    sourceId: "src-nvidia-nvql",
    supports: [
      "NVQLink interconnect specification",
      "QPU–GPU coupling at the hardware level"
    ],
    usedIn: ["node:nvqlink", "question:q-quantum-stack"]
  },
  {
    sourceId: "src-nvidia-nvaqc",
    supports: [
      "NVIDIA Accelerated Quantum Center facility overview",
      "Multi-vendor QPU access via the center"
    ],
    usedIn: ["node:nvaqc", "node:cuda-q"]
  },
  {
    sourceId: "src-tsmc-cowos",
    supports: [
      "CoWoS 2.5D packaging architecture and roles",
      "Silicon interposer and substrate integration in CoWoS"
    ],
    usedIn: ["node:cowos", "company:tsmc", "scenario:s-cowos", "question:q-cowos", "question:q-cowos-constrained"]
  },
  {
    sourceId: "src-tsmc-3df",
    supports: [
      "TSMC's broader 3DFabric advanced packaging portfolio (CoWoS, InFO, SoIC)",
      "Position framing within industry packaging capacity"
    ],
    usedIn: ["node:3dfabric", "node:cowos", "company:tsmc"]
  },
  {
    sourceId: "src-asml-euv",
    supports: [
      "EUV lithography product line and customer deployments",
      "Sole-supplier framing for production EUV systems"
    ],
    usedIn: ["company:asml", "product:p-asml-euv", "question:q-asml-importance"]
  },
  {
    sourceId: "src-asml-highna",
    supports: [
      "High-NA EUV (EXE) product overview",
      "Intel Foundry as first publicly-disclosed High-NA customer"
    ],
    usedIn: ["product:p-asml-high-na", "company:asml", "company:intel-foundry"]
  },
  {
    sourceId: "src-micron-hbm3e",
    supports: [
      "Micron HBM3E product specs",
      "NVIDIA H200 / Blackwell qualification claims"
    ],
    usedIn: ["node:hbm3e", "company:micron", "question:q-hbm-stack"]
  },
  {
    sourceId: "src-micron-hbm4",
    supports: [
      "Micron HBM4 roadmap claims",
      "Bandwidth and capacity-per-stack expectations"
    ],
    usedIn: ["node:hbm4", "company:micron", "question:q-hbm3e-vs-hbm4"]
  },
  {
    sourceId: "src-samsung-hbm4",
    supports: [
      "Samsung HBM4 roadmap and product positioning",
      "Industry HBM4 supplier landscape"
    ],
    usedIn: ["node:hbm4", "company:samsung-memory"]
  },
  {
    sourceId: "src-azure-gb300",
    supports: [
      "Azure first-at-scale GB300 NVL72 deployment for OpenAI workloads",
      "Hyperscaler commitment cadence on new NVIDIA platforms"
    ],
    usedIn: ["node:gb300-nvl72", "company:azure", "question:q-cloud-monetize", "question:q-microsoft-tmi"]
  },
  {
    sourceId: "src-aws-p6",
    supports: [
      "AWS P6 GPU instance specifications",
      "B200 / B300 cloud availability"
    ],
    usedIn: ["company:aws", "node:b200", "question:q-cloud-monetize"]
  },
  {
    sourceId: "src-gcp-a4x",
    supports: [
      "Google Cloud A4X (GB200) deployment",
      "GPU + TPU dual-platform positioning"
    ],
    usedIn: ["company:gcp", "node:gb200", "question:q-cloud-monetize"]
  },
  {
    sourceId: "src-dell-aif",
    supports: [
      "Dell AI Factory with NVIDIA partnership scope",
      "PowerEdge GPU server lineup"
    ],
    usedIn: ["company:dell", "node:ai-factory"]
  },
  {
    sourceId: "src-supermicro",
    supports: [
      "Supermicro NVIDIA system catalog",
      "HGX and liquid-cooled rack designs"
    ],
    usedIn: ["company:supermicro", "node:hgx"]
  },
  {
    sourceId: "src-iea-energy",
    supports: [
      "Power and grid as binding constraints on AI infrastructure",
      "Global AI energy demand framing"
    ],
    usedIn: ["node:power-generation", "node:grid-access", "scenario:s-grid", "question:q-power-bound", "question:q-bottlenecks-overview"]
  },
  {
    sourceId: "src-bis",
    supports: [
      "US export controls on advanced AI chips and EUV equipment",
      "Restricted-market geography effects"
    ],
    usedIn: ["node:export-controls-concept", "scenario:s-export", "company:asml", "question:q-export-controls"]
  }
];

/* ============================================
   ENTITY EDGES — Directed relationships

   Edges power the flow map and the scenario impact engine. Each edge
   names a from→to pair (using "type:id" refs), the relationship type, a
   one-line label, a strength tier, and the value-chain modes the edge
   participates in. Strength: critical | high | medium | low.
   ============================================ */
var ENTITY_EDGES = [
  /* ── Equipment & EDA → foundries / memory ── */
  { from: "company:asml", to: "company:tsmc", type: "enables", strength: "critical", label: "EUV lithography enables leading-edge wafer fabrication.", modes: ["supply", "semi"], sourceIds: ["src-asml-euv"] },
  { from: "company:asml", to: "company:samsung-foundry", type: "enables", strength: "high", label: "ASML EUV systems serve Samsung Foundry's advanced nodes.", modes: ["supply", "semi"], sourceIds: ["src-asml-euv"] },
  { from: "company:asml", to: "company:intel-foundry", type: "enables", strength: "high", label: "Intel was the first publicly-disclosed High-NA EUV customer.", modes: ["supply", "semi"], sourceIds: ["src-asml-highna"] },
  { from: "company:applied-materials", to: "company:tsmc", type: "supplies", strength: "high", label: "Deposition, etch and process tools used across TSMC fabs.", modes: ["supply", "semi"] },
  { from: "company:applied-materials", to: "company:samsung-foundry", type: "supplies", strength: "high", label: "Process tools for Samsung Foundry advanced nodes.", modes: ["supply", "semi"] },
  { from: "company:applied-materials", to: "company:sk-hynix", type: "supplies", strength: "medium", label: "Memory-fab process equipment for HBM production.", modes: ["supply"] },
  { from: "company:applied-materials", to: "company:micron", type: "supplies", strength: "medium", label: "Memory-fab process equipment for HBM production.", modes: ["supply"] },
  { from: "company:lam-research", to: "company:tsmc", type: "supplies", strength: "high", label: "Etch and deposition equipment for TSMC's advanced nodes.", modes: ["supply", "semi"] },
  { from: "company:lam-research", to: "company:sk-hynix", type: "supplies", strength: "high", label: "High-aspect-ratio etch tools for HBM and 3D NAND.", modes: ["supply"] },
  { from: "company:lam-research", to: "company:micron", type: "supplies", strength: "medium", label: "Etch and clean equipment for Micron memory fabs.", modes: ["supply"] },
  { from: "company:lam-research", to: "company:samsung-memory", type: "supplies", strength: "medium", label: "Etch tools for Samsung memory fabs.", modes: ["supply"] },
  { from: "company:kla", to: "company:tsmc", type: "supplies", strength: "high", label: "Inspection and metrology to keep advanced-node yields up.", modes: ["supply", "semi"] },
  { from: "company:kla", to: "company:samsung-foundry", type: "supplies", strength: "medium", label: "Process control across Samsung Foundry lines.", modes: ["supply", "semi"] },
  { from: "company:kla", to: "company:sk-hynix", type: "supplies", strength: "medium", label: "Inspection systems for HBM-class memory production.", modes: ["supply"] },
  { from: "company:tokyo-electron", to: "company:tsmc", type: "supplies", strength: "high", label: "Coater/developer and other front-end equipment.", modes: ["supply", "semi"] },
  { from: "company:tokyo-electron", to: "company:samsung-foundry", type: "supplies", strength: "medium", label: "Front-end equipment for Samsung Foundry.", modes: ["supply", "semi"] },
  { from: "company:tokyo-electron", to: "company:sk-hynix", type: "supplies", strength: "medium", label: "Front-end equipment for SK hynix memory fabs.", modes: ["supply"] },
  { from: "company:synopsys", to: "node:nvidia", type: "enables", strength: "high", label: "EDA tools and IP used to design NVIDIA silicon.", modes: ["supply", "semi"] },
  { from: "company:cadence", to: "node:nvidia", type: "enables", strength: "high", label: "EDA tools used in NVIDIA chip design and verification.", modes: ["supply", "semi"] },
  { from: "company:siemens-eda", to: "node:nvidia", type: "enables", strength: "medium", label: "Calibre physical verification used in tape-out flows.", modes: ["supply", "semi"] },
  { from: "company:arm", to: "node:grace-cpu", type: "enables", strength: "high", label: "Grace CPU is built on Arm Neoverse architecture.", modes: ["supply", "product"] },
  { from: "company:arm", to: "node:vera-cpu", type: "enables", strength: "high", label: "Vera CPU continues NVIDIA's Arm-based CPU strategy.", modes: ["supply", "product"] },

  /* ── Foundry & packaging → NVIDIA hardware ── */
  { from: "company:tsmc", to: "node:hopper", type: "manufactures", strength: "critical", label: "TSMC fabricates the Hopper architecture silicon (4nm-class).", modes: ["supply", "semi", "product"] },
  { from: "company:tsmc", to: "node:blackwell", type: "manufactures", strength: "critical", label: "TSMC fabricates Blackwell silicon on N4-class.", modes: ["supply", "semi", "product"] },
  { from: "company:tsmc", to: "node:rubin", type: "manufactures", strength: "critical", label: "Rubin is expected to be fabricated at TSMC on a more advanced process.", modes: ["supply", "semi", "product"] },
  { from: "company:tsmc", to: "node:grace-cpu", type: "manufactures", strength: "high", label: "Grace CPU silicon is fabricated at TSMC.", modes: ["supply", "product"] },
  { from: "company:tsmc", to: "node:nvswitch", type: "manufactures", strength: "high", label: "NVSwitch silicon fabricated at TSMC.", modes: ["supply", "product"] },
  { from: "node:cowos", to: "node:b200", type: "packages", strength: "critical", label: "CoWoS attaches HBM stacks to the Blackwell die.", modes: ["supply", "semi", "product"], sourceIds: ["src-tsmc-cowos"] },
  { from: "node:cowos", to: "node:gb200", type: "packages", strength: "critical", label: "GB200 superchip packaging uses CoWoS for the GPU side.", modes: ["supply", "semi", "product"], sourceIds: ["src-tsmc-cowos"] },
  { from: "node:cowos", to: "node:gb300", type: "packages", strength: "critical", label: "GB300 packages use CoWoS for HBM3E integration.", modes: ["supply", "semi", "product"], sourceIds: ["src-tsmc-cowos"] },
  { from: "node:cowos", to: "node:rubin", type: "packages", strength: "high", label: "Rubin-generation packages will rely on advanced TSMC packaging.", modes: ["supply", "semi", "product"] },
  { from: "node:3dfabric", to: "node:cowos", type: "depends_on", strength: "high", label: "CoWoS sits inside TSMC's broader 3DFabric portfolio.", modes: ["supply", "semi"], sourceIds: ["src-tsmc-3df"] },
  { from: "node:silicon-interposer", to: "node:cowos", type: "enables", strength: "high", label: "Silicon interposers carry the connections inside CoWoS packages.", modes: ["supply", "semi"] },
  { from: "node:advanced-substrates", to: "node:cowos", type: "enables", strength: "high", label: "Advanced organic substrates link CoWoS packages to PCBs.", modes: ["supply", "semi"] },

  /* ── Memory → NVIDIA accelerators ── */
  { from: "company:sk-hynix", to: "node:hbm3e", type: "supplies", strength: "critical", label: "SK hynix is a leading HBM3E supplier.", modes: ["supply"], sourceIds: ["src-micron-hbm3e"] },
  { from: "company:micron", to: "node:hbm3e", type: "supplies", strength: "high", label: "Micron HBM3E qualified for NVIDIA accelerators.", modes: ["supply"], sourceIds: ["src-micron-hbm3e"] },
  { from: "company:samsung-memory", to: "node:hbm3e", type: "supplies", strength: "high", label: "Samsung supplies HBM3E to AI accelerator vendors.", modes: ["supply"] },
  { from: "company:sk-hynix", to: "node:hbm4", type: "supplies", strength: "high", label: "SK hynix is on the HBM4 roadmap.", modes: ["supply"] },
  { from: "company:micron", to: "node:hbm4", type: "supplies", strength: "high", label: "Micron is shipping toward HBM4.", modes: ["supply"], sourceIds: ["src-micron-hbm4"] },
  { from: "company:samsung-memory", to: "node:hbm4", type: "supplies", strength: "high", label: "Samsung HBM4 is on the public roadmap.", modes: ["supply"], sourceIds: ["src-samsung-hbm4"] },
  { from: "node:hbm3e", to: "node:b200", type: "supplies", strength: "critical", label: "Each B200 package carries multiple HBM3E stacks.", modes: ["supply", "factory", "product"] },
  { from: "node:hbm3e", to: "node:h200", type: "supplies", strength: "critical", label: "H200 added HBM3E capacity over H100.", modes: ["supply", "product"] },
  { from: "node:hbm3e", to: "node:gb200", type: "supplies", strength: "critical", label: "GB200 superchip uses HBM3E stacks across both Blackwell dies.", modes: ["supply", "product", "factory"] },
  { from: "node:hbm3e", to: "node:gb300", type: "supplies", strength: "critical", label: "GB300 expands HBM3E capacity per package.", modes: ["supply", "product", "factory"] },
  { from: "node:hbm4", to: "node:rubin", type: "supplies", strength: "high", label: "Rubin is expected to use HBM4.", modes: ["supply", "product"] },

  /* ── NVIDIA hardware composition ── */
  { from: "node:hopper", to: "node:h100", type: "manufactures", strength: "high", label: "H100 is the flagship Hopper-generation GPU.", modes: ["product"] },
  { from: "node:hopper", to: "node:h200", type: "manufactures", strength: "high", label: "H200 extends Hopper with HBM3E memory.", modes: ["product"] },
  { from: "node:blackwell", to: "node:b200", type: "manufactures", strength: "high", label: "B200 is the discrete Blackwell GPU for HGX.", modes: ["product"] },
  { from: "node:blackwell", to: "node:gb200", type: "manufactures", strength: "high", label: "GB200 pairs two Blackwell dies with a Grace CPU.", modes: ["product", "factory"] },
  { from: "node:blackwell-ultra", to: "node:gb300", type: "manufactures", strength: "high", label: "GB300 uses Blackwell Ultra GPUs.", modes: ["product", "factory"] },
  { from: "node:grace-cpu", to: "node:gb200", type: "supplies", strength: "high", label: "Grace CPU is the host inside the GB200 superchip.", modes: ["product"] },
  { from: "node:grace-cpu", to: "node:gb300", type: "supplies", strength: "high", label: "Grace CPU is paired with Blackwell Ultra in GB300.", modes: ["product"] },
  { from: "node:gb200", to: "node:gb200-nvl72", type: "supplies", strength: "high", label: "Each NVL72 rack contains 36 GB200 superchips (72 GPUs).", modes: ["product", "factory"], sourceIds: ["src-nvidia-gb200"] },
  { from: "node:gb300", to: "node:gb300-nvl72", type: "supplies", strength: "high", label: "GB300 NVL72 racks are built from GB300 superchips.", modes: ["product", "factory"], sourceIds: ["src-nvidia-gb300"] },
  { from: "node:vera-cpu", to: "node:vera-rubin-nvl72", type: "supplies", strength: "high", label: "Vera CPUs anchor the next-generation Vera Rubin NVL72 rack.", modes: ["product", "factory"], sourceIds: ["src-nvidia-vr"] },
  { from: "node:rubin", to: "node:vera-rubin-nvl72", type: "supplies", strength: "high", label: "Rubin GPUs occupy the GPU sockets of Vera Rubin NVL72.", modes: ["product", "factory"], sourceIds: ["src-nvidia-vr"] },

  /* ── NVIDIA networking ── */
  { from: "node:nvlink", to: "node:gb200-nvl72", type: "enables", strength: "critical", label: "NVLink fabric ties NVL72 GPUs into a unified compute domain.", modes: ["product", "factory"] },
  { from: "node:nvswitch", to: "node:gb200-nvl72", type: "enables", strength: "critical", label: "NVSwitch chips form the all-to-all NVLink topology.", modes: ["product", "factory"] },
  { from: "node:nvlink", to: "node:gb300-nvl72", type: "enables", strength: "critical", label: "GB300 NVL72 uses the next NVLink generation for higher bandwidth.", modes: ["product", "factory"] },
  { from: "node:spectrum-x", to: "node:gb200-nvl72", type: "enables", strength: "high", label: "Spectrum-X provides Ethernet AI fabric between racks.", modes: ["factory"] },
  { from: "node:quantum-ib", to: "node:gb200-nvl72", type: "enables", strength: "high", label: "Quantum InfiniBand provides low-latency cluster fabric.", modes: ["factory"] },
  { from: "node:connectx", to: "node:spectrum-x", type: "supplies", strength: "high", label: "ConnectX adapters terminate Spectrum-X Ethernet on hosts.", modes: ["product", "factory"] },
  { from: "node:connectx", to: "node:quantum-ib", type: "supplies", strength: "high", label: "ConnectX adapters terminate InfiniBand on hosts.", modes: ["product", "factory"] },
  { from: "node:bluefield-dpu", to: "node:gb200-nvl72", type: "enables", strength: "medium", label: "BlueField DPUs offload infrastructure work in cloud deployments.", modes: ["product", "cloud"] },

  /* ── NVIDIA software composition ── */
  { from: "node:cuda", to: "node:cuda-x", type: "supplies", strength: "high", label: "CUDA-X libraries sit on top of CUDA.", modes: ["product"] },
  { from: "node:cuda", to: "node:cudnn", type: "supplies", strength: "high", label: "cuDNN is the deep-learning primitive library on CUDA.", modes: ["product"] },
  { from: "node:cuda", to: "node:tensorrt", type: "supplies", strength: "high", label: "TensorRT compiles models against the CUDA runtime.", modes: ["product", "factory"] },
  { from: "node:tensorrt", to: "node:triton-inference", type: "supplies", strength: "high", label: "Triton uses TensorRT-optimized model artifacts.", modes: ["product", "factory"] },
  { from: "node:triton-inference", to: "node:nvidia-nim", type: "supplies", strength: "high", label: "NIMs wrap Triton-served models for easy deployment.", modes: ["product", "cloud"] },
  { from: "node:cuda", to: "node:nemo", type: "supplies", strength: "high", label: "NeMo runs on CUDA for training and customization.", modes: ["product"] },
  { from: "node:nemo", to: "node:nemo-retriever", type: "supplies", strength: "medium", label: "NeMo Retriever provides RAG components for NeMo.", modes: ["product"] },
  { from: "node:nemo", to: "node:nemo-curator", type: "supplies", strength: "medium", label: "NeMo Curator handles data preparation for NeMo.", modes: ["product"] },
  { from: "node:cuda", to: "node:omniverse", type: "supplies", strength: "high", label: "Omniverse is GPU-accelerated through CUDA.", modes: ["product", "physical"] },
  { from: "node:omniverse", to: "node:isaac", type: "supplies", strength: "high", label: "Isaac uses Omniverse for simulation environments.", modes: ["product", "physical"] },
  { from: "node:omniverse", to: "node:cosmos", type: "supplies", strength: "medium", label: "Cosmos generates synthetic data inside Omniverse pipelines.", modes: ["product", "physical"] },
  { from: "node:omniverse", to: "node:drive", type: "supplies", strength: "medium", label: "DRIVE leverages Omniverse simulation for AV workflows.", modes: ["product", "physical"] },
  { from: "node:cuda", to: "node:bionemo", type: "supplies", strength: "medium", label: "BioNeMo runs on CUDA-accelerated infrastructure.", modes: ["product"] },
  { from: "node:cuda", to: "node:clara", type: "supplies", strength: "medium", label: "Clara medical workloads run on CUDA-accelerated GPUs.", modes: ["product"] },
  { from: "node:cuda", to: "node:cuda-q", type: "supplies", strength: "high", label: "CUDA-Q expresses hybrid quantum-classical programs on CUDA.", modes: ["product", "quantum"], sourceIds: ["src-nvidia-cudaq"] },
  { from: "node:tensorrt", to: "node:ai-enterprise", type: "supplies", strength: "high", label: "AI Enterprise bundles TensorRT for production inference.", modes: ["product", "cloud"] },
  { from: "node:nvidia-nim", to: "node:ai-enterprise", type: "supplies", strength: "high", label: "AI Enterprise distributes NIM microservices.", modes: ["product", "cloud"], sourceIds: ["src-nvidia-aie"] },
  { from: "node:nemo", to: "node:ai-enterprise", type: "supplies", strength: "medium", label: "AI Enterprise includes NeMo support for enterprise customers.", modes: ["product", "cloud"], sourceIds: ["src-nvidia-aie"] },

  /* ── Hardware → ODM/OEM/Cloud assembly ── */
  { from: "node:gb200-nvl72", to: "company:foxconn", type: "assembles", strength: "high", label: "Foxconn assembles GB200 NVL72 rack systems.", modes: ["supply", "cloud", "factory"] },
  { from: "node:gb200-nvl72", to: "company:quanta", type: "assembles", strength: "high", label: "Quanta builds NVL72-class systems for cloud customers.", modes: ["supply", "cloud", "factory"] },
  { from: "node:gb200-nvl72", to: "company:wiwynn", type: "assembles", strength: "medium", label: "Wiwynn builds custom NVL72 variants for hyperscalers.", modes: ["supply", "cloud"] },
  { from: "node:gb200-nvl72", to: "company:wistron", type: "assembles", strength: "medium", label: "Wistron contributes ODM capacity for NVL72.", modes: ["supply", "cloud"] },
  { from: "node:gb200-nvl72", to: "company:supermicro", type: "assembles", strength: "high", label: "Supermicro ships liquid-cooled NVL72-class systems.", modes: ["supply", "cloud", "factory"], sourceIds: ["src-supermicro"] },
  { from: "node:hgx", to: "company:dell", type: "assembles", strength: "high", label: "Dell PowerEdge GPU servers integrate HGX baseboards.", modes: ["supply", "cloud"], sourceIds: ["src-dell-aif"] },
  { from: "node:hgx", to: "company:hpe", type: "assembles", strength: "high", label: "HPE ProLiant and Cray systems use HGX boards.", modes: ["supply", "cloud"] },
  { from: "node:hgx", to: "company:lenovo", type: "assembles", strength: "medium", label: "Lenovo ThinkSystem GPU servers ship HGX-based platforms.", modes: ["supply", "cloud"] },
  { from: "node:hgx", to: "company:cisco", type: "assembles", strength: "medium", label: "Cisco UCS GPU servers use HGX baseboards.", modes: ["supply", "cloud"] },
  { from: "node:hgx", to: "company:supermicro", type: "assembles", strength: "high", label: "Supermicro is a long-standing HGX system builder.", modes: ["supply", "cloud"], sourceIds: ["src-supermicro"] },
  { from: "node:mgx", to: "company:asus", type: "assembles", strength: "medium", label: "ASUS ESC servers leverage the MGX modular design.", modes: ["supply"] },
  { from: "node:mgx", to: "company:gigabyte", type: "assembles", strength: "medium", label: "Gigabyte / Giga Computing builds MGX-class systems.", modes: ["supply"] },
  { from: "node:dgx", to: "company:foxconn", type: "assembles", strength: "medium", label: "Foxconn participates in DGX system manufacturing.", modes: ["supply"] },
  { from: "node:dgx", to: "company:quanta", type: "assembles", strength: "medium", label: "Quanta is a long-standing DGX manufacturing partner.", modes: ["supply"] },
  { from: "node:fabrinet", to: "node:spectrum-x", type: "supplies", strength: "medium", label: "Fabrinet manufactures optical transceivers used in AI fabrics.", modes: ["supply", "factory"] },

  /* ── Cloud deployment ── */
  { from: "node:gb300-nvl72", to: "company:azure", type: "deploys", strength: "critical", label: "Azure first-at-scale GB300 NVL72 cluster for OpenAI workloads.", modes: ["cloud", "factory"], sourceIds: ["src-azure-gb300"] },
  { from: "node:gb200-nvl72", to: "company:azure", type: "deploys", strength: "high", label: "Azure ND GB200 series VMs run on GB200 NVL72 racks.", modes: ["cloud", "factory"] },
  { from: "node:b200", to: "company:aws", type: "deploys", strength: "high", label: "AWS P6 instances deploy B200 GPUs.", modes: ["cloud"], sourceIds: ["src-aws-p6"] },
  { from: "node:gb200", to: "company:aws", type: "deploys", strength: "medium", label: "AWS deploys GB200-class capacity through P6 family expansions.", modes: ["cloud"], sourceIds: ["src-aws-p6"] },
  { from: "node:b200", to: "company:gcp", type: "deploys", strength: "high", label: "Google Cloud A4 VMs deploy B200 GPUs.", modes: ["cloud"], sourceIds: ["src-gcp-a4x"] },
  { from: "node:gb200", to: "company:gcp", type: "deploys", strength: "high", label: "Google Cloud A4X deploys GB200 systems.", modes: ["cloud"], sourceIds: ["src-gcp-a4x"] },
  { from: "node:gb200-nvl72", to: "company:oracle-cloud", type: "deploys", strength: "high", label: "Oracle Cloud has committed large NVIDIA GB200 capacity.", modes: ["cloud"] },
  { from: "node:gb200-nvl72", to: "company:coreweave", type: "deploys", strength: "high", label: "CoreWeave deploys NVL72 racks at scale.", modes: ["cloud"] },
  { from: "node:gb300-nvl72", to: "company:coreweave", type: "deploys", strength: "high", label: "CoreWeave is among early commercial GB300 deployers.", modes: ["cloud"] },
  { from: "node:b200", to: "company:lambda", type: "deploys", strength: "medium", label: "Lambda 1-Click Clusters and on-prem servers ship Blackwell.", modes: ["cloud"] },
  { from: "node:b200", to: "company:crusoe", type: "deploys", strength: "medium", label: "Crusoe operates Blackwell capacity tied to clean energy sites.", modes: ["cloud"] },
  { from: "node:b200", to: "company:nebius", type: "deploys", strength: "medium", label: "Nebius adds Blackwell capacity in European regions.", modes: ["cloud"] },

  /* ── Cloud → end markets ── */
  { from: "company:azure", to: "node:frontier-ai-labs", type: "deploys", strength: "critical", label: "Azure hosts OpenAI's frontier training and inference.", modes: ["cloud"], sourceIds: ["src-azure-gb300"] },
  { from: "company:aws", to: "node:frontier-ai-labs", type: "deploys", strength: "high", label: "AWS hosts Anthropic and other frontier-lab workloads.", modes: ["cloud"] },
  { from: "company:gcp", to: "node:frontier-ai-labs", type: "deploys", strength: "high", label: "Google Cloud hosts internal and external frontier workloads.", modes: ["cloud"] },
  { from: "company:azure", to: "node:enterprise-ai", type: "monetizes", strength: "high", label: "Azure OpenAI Service is a primary enterprise AI channel.", modes: ["cloud"] },
  { from: "company:aws", to: "node:enterprise-ai", type: "monetizes", strength: "high", label: "AWS Bedrock packages multi-provider models for enterprise.", modes: ["cloud"] },
  { from: "company:coreweave", to: "node:cloud-inference", type: "monetizes", strength: "high", label: "CoreWeave's inference cloud serves frontier-scale customers.", modes: ["cloud"] },
  { from: "company:oracle-cloud", to: "node:cloud-inference", type: "monetizes", strength: "medium", label: "OCI hosts large training and inference contracts.", modes: ["cloud"] },

  /* ── End-market software → applications ── */
  { from: "node:isaac", to: "node:robotics", type: "accelerates", strength: "high", label: "Isaac trains and deploys robotics policies.", modes: ["physical"], sourceIds: ["src-nvidia-isaac"] },
  { from: "node:isaac", to: "node:humanoid-robots", type: "accelerates", strength: "high", label: "Humanoid robot programs use Isaac for sim-to-real.", modes: ["physical"], sourceIds: ["src-nvidia-isaac"] },
  { from: "node:cosmos", to: "node:humanoid-robots", type: "accelerates", strength: "medium", label: "Cosmos generates synthetic training data for humanoids.", modes: ["physical"], sourceIds: ["src-nvidia-cosmos"] },
  { from: "node:drive", to: "node:autonomous-vehicles", type: "accelerates", strength: "high", label: "DRIVE is the AV development platform end-to-end.", modes: ["physical"] },
  { from: "node:omniverse", to: "node:digital-twins", type: "accelerates", strength: "high", label: "Omniverse anchors industrial digital-twin pipelines.", modes: ["physical"], sourceIds: ["src-nvidia-omni"] },
  { from: "node:omniverse", to: "node:manufacturing-automation", type: "accelerates", strength: "medium", label: "Omniverse is used in factory digital-twin programs.", modes: ["physical"] },
  { from: "node:bionemo", to: "node:drug-discovery", type: "accelerates", strength: "high", label: "BioNeMo accelerates molecular generation and screening.", modes: ["product"] },
  { from: "node:clara", to: "node:healthcare-ai", type: "accelerates", strength: "high", label: "Clara is the clinical-imaging and genomics platform.", modes: ["product"] },
  { from: "node:cuda", to: "node:weather-climate", type: "accelerates", strength: "medium", label: "Earth-2 and weather models leverage CUDA acceleration.", modes: ["product"] },
  { from: "node:jetson-thor", to: "node:edge-ai", type: "accelerates", strength: "high", label: "Jetson Thor is the edge inference platform.", modes: ["physical"], sourceIds: ["src-nvidia-jetson"] },
  { from: "node:jetson-thor", to: "node:humanoid-robots", type: "accelerates", strength: "high", label: "Jetson Thor is the on-robot compute for humanoid platforms.", modes: ["physical"], sourceIds: ["src-nvidia-jetson"] },
  { from: "company:mercedes-benz", to: "node:autonomous-vehicles", type: "uses", strength: "medium", label: "Mercedes-Benz uses NVIDIA DRIVE for next-gen vehicles.", modes: ["physical"] },
  { from: "company:fanuc", to: "node:manufacturing-automation", type: "uses", strength: "medium", label: "FANUC robots integrate with AI-driven factory workflows.", modes: ["physical"] },
  { from: "company:siemens", to: "node:digital-twins", type: "uses", strength: "high", label: "Siemens Xcelerator integrates with Omniverse for digital twins.", modes: ["physical"] },
  { from: "company:dassault", to: "node:digital-twins", type: "uses", strength: "medium", label: "Dassault simulation tools connect to GPU-accelerated workflows.", modes: ["physical"] },

  /* ── Power & cooling ── */
  { from: "company:constellation-energy", to: "node:power-generation", type: "supplies", strength: "high", label: "Constellation supplies large-scale carbon-free electricity.", modes: ["factory"] },
  { from: "company:nextera", to: "node:power-generation", type: "supplies", strength: "high", label: "NextEra develops renewable generation under PPA.", modes: ["factory"] },
  { from: "company:vistra", to: "node:power-generation", type: "supplies", strength: "medium", label: "Vistra runs nuclear, gas and renewable generation.", modes: ["factory"] },
  { from: "company:duke", to: "node:grid-access", type: "supplies", strength: "medium", label: "Duke serves Southeast US data center load.", modes: ["factory"] },
  { from: "company:dominion", to: "node:grid-access", type: "supplies", strength: "high", label: "Dominion serves Northern Virginia data center alley.", modes: ["factory"] },
  { from: "company:southern-co", to: "node:grid-access", type: "supplies", strength: "medium", label: "Southern Company operates Vogtle and serves the Southeast.", modes: ["factory"] },
  { from: "company:aep", to: "node:grid-access", type: "supplies", strength: "medium", label: "AEP operates a major US transmission system.", modes: ["factory"] },
  { from: "node:power-generation", to: "node:ai-factory", type: "powers", strength: "critical", label: "Generation feeds the AI factory load.", modes: ["factory"], sourceIds: ["src-iea-energy"] },
  { from: "node:grid-access", to: "node:ai-factory", type: "enables", strength: "critical", label: "Grid interconnection determines when sites can energize.", modes: ["factory"], sourceIds: ["src-iea-energy"] },
  { from: "company:schneider", to: "node:ai-factory", type: "supplies", strength: "high", label: "Schneider supplies switchgear, UPS and cooling reference designs.", modes: ["factory"] },
  { from: "company:vertiv", to: "node:ai-factory", type: "supplies", strength: "high", label: "Vertiv supplies UPS, racks and Liebert cooling for AI factories.", modes: ["factory"] },
  { from: "company:eaton", to: "node:ai-factory", type: "supplies", strength: "high", label: "Eaton supplies electrical infrastructure into AI sites.", modes: ["factory"] },
  { from: "company:abb", to: "node:ai-factory", type: "supplies", strength: "medium", label: "ABB supplies medium- and low-voltage equipment into AI sites.", modes: ["factory"] },
  { from: "company:siemens-energy", to: "node:grid-access", type: "supplies", strength: "medium", label: "Siemens Energy ships transformers and HVDC for grid expansion.", modes: ["factory"] },
  { from: "company:ge-vernova", to: "node:power-generation", type: "supplies", strength: "medium", label: "GE Vernova provides gas turbines and SMR designs.", modes: ["factory"] },
  { from: "company:legrand", to: "node:rack-density", type: "supplies", strength: "medium", label: "Legrand supplies racks, PDUs and busways for high-density racks.", modes: ["factory"] },
  { from: "company:delta-electronics", to: "node:gb200-nvl72", type: "supplies", strength: "medium", label: "Delta supplies power supplies inside NVIDIA-based servers.", modes: ["factory", "supply"] },
  { from: "company:motivair", to: "node:liquid-cooling-tech", type: "supplies", strength: "high", label: "Motivair builds the CDUs that move coolant in liquid-cooled racks.", modes: ["factory"] },
  { from: "company:vertiv", to: "node:liquid-cooling-tech", type: "supplies", strength: "high", label: "Vertiv supplies Liebert liquid-cooling systems.", modes: ["factory"] },
  { from: "company:coolit", to: "node:liquid-cooling-tech", type: "supplies", strength: "high", label: "CoolIT supplies cold plates and CDUs for GPU servers.", modes: ["factory"] },
  { from: "company:boyd", to: "node:liquid-cooling-tech", type: "supplies", strength: "medium", label: "Boyd supplies cold plates and thermal interface materials.", modes: ["factory"] },
  { from: "company:submer", to: "node:liquid-cooling-tech", type: "substitutes_for", strength: "low", label: "Submer offers single-phase immersion as an alternative cooling path.", modes: ["factory"] },
  { from: "company:liquidstack", to: "node:liquid-cooling-tech", type: "substitutes_for", strength: "low", label: "LiquidStack offers two-phase immersion as an alternative cooling path.", modes: ["factory"] },
  { from: "node:liquid-cooling-tech", to: "node:gb200-nvl72", type: "cools", strength: "critical", label: "GB200 NVL72 racks require direct liquid cooling.", modes: ["factory"] },
  { from: "node:liquid-cooling-tech", to: "node:gb300-nvl72", type: "cools", strength: "critical", label: "GB300 NVL72 racks scale up the liquid cooling requirement.", modes: ["factory"] },

  /* ── Quantum stack ── */
  { from: "node:cuda-q", to: "node:nvqlink", type: "depends_on", strength: "high", label: "CUDA-Q programs are wired to QPUs via NVQLink.", modes: ["quantum"], sourceIds: ["src-nvidia-nvql"] },
  { from: "node:cuda-q", to: "node:dgx-quantum", type: "depends_on", strength: "high", label: "DGX Quantum reference systems run CUDA-Q workflows.", modes: ["quantum"] },
  { from: "node:nvqlink", to: "node:qpu", type: "supplies", strength: "high", label: "NVQLink connects QPUs to GPU clusters.", modes: ["quantum"], sourceIds: ["src-nvidia-nvql"] },
  { from: "company:quantinuum", to: "node:qpu", type: "supplies", strength: "high", label: "Quantinuum operates trapped-ion QPUs at the leading edge of logical qubits.", modes: ["quantum"] },
  { from: "company:ionq", to: "node:qpu", type: "supplies", strength: "high", label: "IonQ operates trapped-ion QPUs commercially.", modes: ["quantum"] },
  { from: "company:ibm-quantum", to: "node:qpu", type: "supplies", strength: "high", label: "IBM operates the largest public superconducting QPU fleet.", modes: ["quantum"] },
  { from: "company:rigetti", to: "node:qpu", type: "supplies", strength: "medium", label: "Rigetti operates superconducting QPUs.", modes: ["quantum"] },
  { from: "company:psiquantum", to: "node:qpu", type: "supplies", strength: "medium", label: "PsiQuantum is building a photonic, fault-tolerant QPU.", modes: ["quantum"] },
  { from: "company:atom-computing", to: "node:qpu", type: "supplies", strength: "medium", label: "Atom Computing operates neutral-atom QPUs.", modes: ["quantum"] },
  { from: "company:alice-bob", to: "node:qpu", type: "supplies", strength: "medium", label: "Alice & Bob is building cat-qubit superconducting QPUs.", modes: ["quantum"] },
  { from: "company:dwave", to: "node:qpu", type: "supplies", strength: "low", label: "D-Wave operates quantum annealers, a different model from gate-based.", modes: ["quantum"] },
  { from: "node:qpu", to: "node:quantum-error-correction", type: "depends_on", strength: "critical", label: "QPUs need scalable error correction to reach practical advantage.", modes: ["quantum"] },
  { from: "node:cuda-q", to: "node:quantum-simulation", type: "accelerates", strength: "high", label: "CUDA-Q runs GPU-accelerated quantum simulation.", modes: ["quantum"] },
  { from: "node:cuda-q", to: "node:quantum-chemistry", type: "accelerates", strength: "medium", label: "CUDA-Q powers chemistry workflows in hybrid quantum-classical algorithms.", modes: ["quantum"] },
  { from: "node:quantum-controller", to: "node:qpu", type: "enables", strength: "high", label: "Classical electronics generate and read QPU control signals.", modes: ["quantum"] },

  /* ── Strategic edges (concept layer) ── */
  { from: "node:cuda", to: "node:cuda-lock-in", type: "constrains", strength: "high", label: "Two decades of CUDA libraries make switching costly.", modes: ["cloud"] },
  { from: "node:cuda-lock-in", to: "node:custom-silicon-threat", type: "constrains", strength: "medium", label: "CUDA lock-in slows the substitution rate of hyperscaler ASICs.", modes: ["cloud"] },
  { from: "node:custom-silicon-threat", to: "node:hyperscaler-asics", type: "supplies", strength: "high", label: "Hyperscaler ASIC programs (TPU, Trainium, Maia, MTIA) are the substitution test.", modes: ["cloud"] },
  { from: "node:supply-chain-concentration", to: "company:tsmc", type: "constrains", strength: "high", label: "TSMC concentration is the headline supply risk.", modes: ["supply"] },
  { from: "node:export-controls-concept", to: "company:asml", type: "constrains", strength: "high", label: "Export controls govern ASML's permitted shipments to certain markets.", modes: ["supply"], sourceIds: ["src-bis"] },
  { from: "node:sovereign-compute", to: "node:nvidia", type: "monetizes", strength: "high", label: "Sovereign AI programs are a fast-growing customer category.", modes: ["cloud"] },
  { from: "node:tokens-per-watt", to: "node:ai-factory", type: "constrains", strength: "high", label: "Tokens-per-watt is the AI factory operating metric.", modes: ["factory"] }
];

/* ============================================
   ENTRY GROUPS — “What do you want to understand?”

   Three reader profiles. Each card deep-links to a path, profile or
   scenario. The grouping reduces overwhelm by giving the reader a clear
   starting point that matches their intent.
   ============================================ */
var ENTRY_GROUPS = [
  {
    id: "beginner", label: "Beginner",
    blurb: "If you've heard the names but want the system.",
    cards: [
      { title: "How is an NVIDIA GPU actually made?",         note: "Design &rarr; lithography &rarr; fab &rarr; packaging &rarr; system.",        target: "question:q-how-gpu-made" },
      { title: "Why does TSMC matter?",                        note: "The single foundry behind nearly every modern AI chip.",                       target: "question:q-tsmc-spof" },
      { title: "Why is ASML important?",                       note: "EUV is sold by exactly one company in the world.",                              target: "question:q-asml-importance" },
      { title: "What is HBM?",                                 note: "Memory bandwidth for intelligence, stacked next to the GPU.",                   target: "question:q-hbm-stack" }
    ]
  },
  {
    id: "operator", label: "Operator / Investor",
    blurb: "If you allocate capital, capacity or risk.",
    cards: [
      { title: "Where are the bottlenecks?",                       note: "The constraints that decide how fast AI can scale.",                target: "question:q-bottlenecks-overview" },
      { title: "Who benefits from AI data center growth?",         note: "Memory, packaging, ODMs, power, cooling, utilities.",               target: "question:q-second-winners" },
      { title: "What happens if CoWoS is constrained?",            note: "Walk a structural shock through the system.",                       target: "question:q-cowos-constrained" },
      { title: "How do clouds monetize NVIDIA systems?",           note: "From bulk hardware buy to high-margin platform services.",          target: "question:q-cloud-monetize" }
    ]
  },
  {
    id: "technical", label: "Technical",
    blurb: "If you build, debug or evaluate the stack.",
    cards: [
      { title: "How does GB200 NVL72 work?",            note: "72 GPUs wired as one rack-scale accelerator.",        target: "question:q-rack-scale-different" },
      { title: "How does CUDA create lock-in?",         note: "Nearly two decades of libraries, not just a runtime.", target: "question:q-cuda-lockin" },
      { title: "How does an AI factory work?",          note: "Electricity in. Tokens, embeddings, actions out.",     target: "question:q-ai-factory" },
      { title: "How does quantum fit into the stack?",  note: "Hybrid quantum-classical compute through CUDA-Q.",     target: "question:q-quantum-stack" }
    ]
  }
];

/* Backwards compatibility — flatten if older code still expects ENTRY_CARDS. */
var ENTRY_CARDS = (function () {
  var out = [];
  for (var i = 0; i < ENTRY_GROUPS.length; i++) {
    for (var j = 0; j < ENTRY_GROUPS[i].cards.length; j++) {
      out.push(ENTRY_GROUPS[i].cards[j]);
    }
  }
  return out;
})();

/* ============================================
   FLAGSHIP COMPANIES — 12 entities that explain the stack

   A pre-curated tour. Each entry references a real profile (company or
   node) and adds a memorable one-line takeaway. The full directory sits
   behind a "View all" expand below.
   ============================================ */
var FLAGSHIP_COMPANIES = [
  { ref: "node:nvidia",                   name: "NVIDIA",            takeaway: "The platform vendor at the center of accelerated computing.",                role: "Full-stack platform",   relationship: "Designs the GPUs, networking, software and reference systems the rest of the stack lines up to." },
  { ref: "company:tsmc",                  name: "TSMC",              takeaway: "NVIDIA designs the chip, but TSMC makes it real.",                            role: "Leading-edge foundry",  relationship: "Manufactures NVIDIA's GPU silicon at advanced process nodes; also operates CoWoS packaging." },
  { ref: "company:asml",                  name: "ASML",              takeaway: "ASML doesn't make AI chips, but it makes leading-edge AI chips manufacturable.", role: "EUV lithography monopoly", relationship: "Sells EUV systems to TSMC, Samsung and Intel &mdash; foundational, not contractual, to NVIDIA." },
  { ref: "company:sk-hynix",              name: "SK hynix",          takeaway: "The leading HBM supplier feeding NVIDIA accelerators.",                       role: "HBM memory leader",     relationship: "Direct HBM3/HBM3E supplier to NVIDIA data-center GPUs." },
  { ref: "company:micron",                name: "Micron",            takeaway: "The US-headquartered HBM ramp.",                                              role: "HBM memory supplier",   relationship: "HBM3E qualified for NVIDIA H200 and Blackwell-generation accelerators." },
  { ref: "company:samsung-memory",        name: "Samsung",           takeaway: "The world's largest memory company; an HBM elasticity lever.",                role: "HBM memory supplier",   relationship: "Industry-wide HBM supplier; specific NVIDIA qualification varies by generation." },
  { ref: "company:foxconn",               name: "Foxconn",           takeaway: "The factory that turns NVIDIA components into finished AI racks.",            role: "Server ODM",            relationship: "Major assembler of GB200 NVL72 racks and NVIDIA AI server systems." },
  { ref: "company:supermicro",            name: "Supermicro",        takeaway: "First-mover OEM for new NVIDIA platforms.",                                   role: "Server OEM",            relationship: "Long-running NVIDIA partner shipping HGX, MGX and DGX-aligned liquid-cooled systems." },
  { ref: "company:azure",                 name: "Microsoft Azure",   takeaway: "First-at-scale deployer of NVIDIA's latest racks for OpenAI.",                role: "Hyperscale cloud",      relationship: "Among the first to deploy GB300 NVL72 at scale; primary OpenAI commercial host." },
  { ref: "company:coreweave",             name: "CoreWeave",         takeaway: "An NVIDIA-native cloud built specifically for GPU workloads.",                role: "GPU-specialized cloud", relationship: "Consistently among early commercial deployers of new NVIDIA platforms." },
  { ref: "company:vertiv",                name: "Vertiv",            takeaway: "The cooling and power infrastructure behind every liquid-cooled AI rack.",    role: "Cooling &amp; power",   relationship: "Public reference designs with NVIDIA; supplies CDUs, UPS and racks for AI factories." },
  { ref: "company:schneider",             name: "Schneider Electric", takeaway: "The electrical backbone of AI data centers.",                                role: "Electrical &amp; thermal", relationship: "Public reference designs with NVIDIA; supplies switchgear, UPS, racks and cooling." }
];

/* ============================================
   FLAGSHIP OVERRIDES — Takeaways, confidence and tab layout

   These eight entities get the full briefing treatment in the detail
   panel: a Takeaway block at the top, a confidence pill, and the
   standardized 5-tab structure (Brief / How it works / Dependencies /
   Bottlenecks / Sources).
   ============================================ */
var FLAGSHIP_OVERRIDES = {
  "node:nvidia":         { takeaway: "The platform vendor at the center of accelerated computing &mdash; hardware, networking, software, deployment.", confidence: "sourced" },
  "company:tsmc":        { takeaway: "NVIDIA designs the chip, but TSMC makes it real.",                                                                  confidence: "sourced" },
  "company:asml":        { takeaway: "ASML doesn't make AI chips, but it makes leading-edge AI chips manufacturable.",                                    confidence: "sourced" },
  "node:hbm3e":          { takeaway: "HBM is not storage. It is memory bandwidth for intelligence.",                                                       confidence: "sourced" },
  "node:cowos":          { takeaway: "CoWoS is packaging as architecture &mdash; where the GPU and HBM become one product.",                              confidence: "sourced" },
  "node:gb200-nvl72":    { takeaway: "Rack-scale AI: 72 GPUs wired as one accelerator.",                                                                   confidence: "sourced" },
  "node:cuda":           { takeaway: "CUDA is software gravity &mdash; nearly two decades of libraries, not just a runtime.",                              confidence: "sourced" },
  "node:ai-factory":     { takeaway: "An AI factory converts electricity into tokens, embeddings, actions and simulations.",                               confidence: "inferred" }
};

/* ============================================
   FORWARD-LOOKING — Refs whose claims are roadmap or future-state

   The renderer marks these with a "Forward-looking" confidence pill.
   ============================================ */
var FORWARD_LOOKING_REFS = [
  "node:rubin", "node:vera-cpu", "node:vera-rubin-nvl72", "node:hbm4",
  "node:qpu", "node:quantum-controller", "node:quantum-error-correction",
  "node:hybrid-algorithms", "node:quantum-simulation", "node:quantum-chemistry",
  "node:quantum-optimization", "node:cuda-q", "node:nvqlink", "node:dgx-quantum",
  "node:nvidia-quantum-cloud", "node:nvaqc",
  "scenario:s-cuda", "scenario:s-qec", "scenario:s-asics"
];

function isForwardLooking(ref) {
  for (var i = 0; i < FORWARD_LOOKING_REFS.length; i++) {
    if (FORWARD_LOOKING_REFS[i] === ref) return true;
  }
  return false;
}

/* ============================================
   FLOW MAP — Value-chain columns + modes

   FLOW_COLUMNS lays out the visible left-to-right structure. Each entry
   in `entities` is a typed reference understood by the renderer.
   FLOW_MODES drives the highlight/dim behavior over the same columns.
   ============================================ */
var FLOW_COLUMNS = [
  { id: "physical", label: "Power & physical", entities: [
    "node:power-generation","node:grid-access","node:liquid-cooling-tech",
    "company:constellation-energy","company:nextera","company:schneider","company:vertiv","company:eaton"
  ]},
  { id: "equipment", label: "Equipment & materials", entities: [
    "company:asml","company:applied-materials","company:lam-research","company:kla","company:tokyo-electron",
    "company:synopsys","company:cadence","company:arm"
  ]},
  { id: "manufacturing", label: "Foundry, memory & packaging", entities: [
    "company:tsmc","company:samsung-foundry","company:sk-hynix","company:micron","company:samsung-memory",
    "node:hbm3e","node:hbm4","node:cowos","node:3dfabric"
  ]},
  { id: "hardware", label: "NVIDIA hardware & networking", entities: [
    "node:hopper","node:blackwell","node:rubin","node:gb200","node:gb300","node:gb200-nvl72","node:gb300-nvl72",
    "node:dgx","node:hgx","node:nvlink","node:nvswitch","node:spectrum-x","node:quantum-ib"
  ]},
  { id: "software", label: "NVIDIA software", entities: [
    "node:cuda","node:cuda-x","node:tensorrt","node:triton-inference","node:nvidia-nim","node:nemo",
    "node:omniverse","node:isaac","node:drive","node:ai-enterprise","node:cuda-q","node:nvqlink"
  ]},
  { id: "deploy", label: "OEM, ODM & cloud", entities: [
    "company:foxconn","company:quanta","company:wiwynn","company:supermicro","company:dell","company:hpe",
    "company:azure","company:aws","company:gcp","company:oracle-cloud","company:coreweave"
  ]},
  { id: "endmarket", label: "End markets", entities: [
    "node:frontier-ai-labs","node:cloud-inference","node:enterprise-ai","node:sovereign-ai",
    "node:robotics","node:humanoid-robots","node:autonomous-vehicles","node:drug-discovery","node:edge-ai"
  ]}
];

var FLOW_MODES = [
  { id: "critical", label: "Critical path",       explanation: "ASML &rarr; TSMC &rarr; HBM / CoWoS &rarr; NVIDIA &rarr; cloud &rarr; AI workloads. The default route through the system.", columns: ["equipment","manufacturing","hardware","software","deploy","endmarket"] },
  { id: "supply",   label: "Supply chain",        explanation: "Materials and equipment turn into wafers, memory, packaging and finished accelerators.", columns: ["equipment","manufacturing","hardware"] },
  { id: "factory",  label: "AI factory",           explanation: "Power and cooling feed rack-scale systems; networking and software convert capacity into tokens.", columns: ["physical","hardware","software","deploy"] },
  { id: "cloud",    label: "Cloud monetization",   explanation: "Hardware moves from ODMs into clouds and is rented to end markets.", columns: ["hardware","software","deploy","endmarket"] },
  { id: "semi",     label: "Semiconductor path",   explanation: "Equipment and EDA enable foundries that build the silicon for NVIDIA accelerators.", columns: ["equipment","manufacturing","hardware"] },
  { id: "physical", label: "Physical AI",          explanation: "GPUs, software (Omniverse / Isaac / Cosmos / DRIVE) and edge silicon power robotics and autonomy.", columns: ["hardware","software","endmarket"] },
  { id: "quantum",  label: "Quantum path",         explanation: "GPU clusters orchestrate quantum hardware via CUDA-Q and NVQLink.", columns: ["software","endmarket"] }
];

/* The canonical critical-path edges, by ref pair. The flow renderer
   draws these as the default highlight when no other mode is selected. */
var CRITICAL_PATH_EDGES = [
  { from: "company:asml",     to: "company:tsmc" },
  { from: "company:tsmc",     to: "node:blackwell" },
  { from: "company:sk-hynix", to: "node:hbm3e" },
  { from: "node:hbm3e",       to: "node:gb200" },
  { from: "node:cowos",       to: "node:gb200" },
  { from: "node:gb200",       to: "node:gb200-nvl72" },
  { from: "node:gb200-nvl72", to: "company:azure" },
  { from: "company:azure",    to: "node:frontier-ai-labs" }
];

/* ============================================
   SCENARIOS — “What happens if a bottleneck breaks?”

   Each scenario lists the entities it hits, ordered effects, winners,
   losers and confidence. The UI uses entityRefs to highlight nodes and
   cards across the page when a scenario is opened.
   ============================================ */
var SCENARIOS = [
  {
    id: "s-hbm", title: "HBM shortage", confidence: "high",
    shock: "HBM3E or HBM4 supply tightens against AI accelerator demand. One or more memory makers miss yield or capacity ramps.",
    affected: ["company:sk-hynix","company:micron","company:samsung-memory","node:hbm3e","node:hbm4","node:b200","node:gb200","node:gb300","node:vera-rubin-nvl72"],
    firstOrder: "Per-package memory falls or ship dates slip; fewer accelerators reach customers per quarter.",
    secondOrder: "Cloud GPU capacity tightens, inference unit prices stay elevated, smaller cloud customers wait longer for clusters.",
    winners: ["Memory suppliers with already-qualified HBM3E/HBM4","Clouds with pre-existing reserved capacity","NVIDIA pricing power on the available units"],
    losers: ["AI labs without locked allocations","Smaller neoclouds without long-term commits","Enterprises waiting on training capacity"],
    whyItMatters: "HBM is among the tightest gates in the chain. Any ramp slip flows directly into accelerator availability.",
    relatedPaths: ["path-gpu-born","path-tsmc-nvidia"],
    relatedQuestions: ["q-hbm-stack", "q-memory-bandwidth", "q-hbm3e-vs-hbm4", "q-bottlenecks-overview"],
    sourceIds: ["src-micron-hbm3e","src-micron-hbm4","src-samsung-hbm4"]
  },
  {
    id: "s-cowos", title: "CoWoS capacity shortage", confidence: "high",
    shock: "Advanced packaging capacity at TSMC fails to ramp on the planned curve.",
    affected: ["company:tsmc","node:cowos","node:silicon-interposer","node:advanced-substrates","node:b200","node:gb200","node:gb300"],
    firstOrder: "Packaged-accelerator volume becomes the binding constraint, regardless of front-end wafer supply.",
    secondOrder: "Customer allocations harden; second-source packaging (Amkor, ASE) gets more business at lower-tier nodes; investment accelerates in alternative packaging.",
    winners: ["TSMC pricing on CoWoS","OSAT capacity (Amkor, ASE) for non-CoWoS work","Customers with locked CoWoS allocations"],
    losers: ["Late-arriving accelerator vendors","Smaller customers competing for slots","Roadmaps that assumed faster CoWoS ramps"],
    whyItMatters: "CoWoS has been a binding constraint on AI accelerator supply for multiple cycles.",
    relatedPaths: ["path-gpu-born","path-tsmc-nvidia"],
    relatedQuestions: ["q-cowos-constrained", "q-cowos", "q-tsmc-spof", "q-bottlenecks-overview"],
    sourceIds: ["src-tsmc-cowos","src-tsmc-3df"]
  },
  {
    id: "s-tsmc", title: "TSMC disruption", confidence: "low",
    shock: "A major event &mdash; geopolitical, natural or operational &mdash; interrupts TSMC's leading-edge production.",
    affected: ["company:tsmc","node:nvidia","node:hopper","node:blackwell","node:rubin","node:cowos","node:b200","node:gb200","node:gb300"],
    firstOrder: "Leading-edge AI silicon supply contracts. The whole industry is forced into salvage strategies.",
    secondOrder: "Samsung Foundry and Intel Foundry urgency rises; geographic diversification accelerates; sovereign and US fab investment intensifies.",
    winners: ["Geographic alternatives (Intel Foundry, Samsung) over time","Customers with multi-source contracts (rare today)"],
    losers: ["Anyone single-sourced at TSMC leading edge (essentially all major AI accelerators)"],
    whyItMatters: "TSMC concentration is the most discussed structural risk in the entire stack.",
    relatedPaths: ["path-tsmc-nvidia","path-gpu-born"],
    relatedQuestions: ["q-tsmc-spof", "q-how-gpu-made", "q-export-controls"]
  },
  {
    id: "s-export", title: "Export controls tighten", confidence: "high",
    shock: "BIS or allied regulators tighten controls on advanced AI chips or equipment to additional jurisdictions.",
    affected: ["company:asml","company:tsmc","node:nvidia","node:export-controls-concept","node:sovereign-compute"],
    firstOrder: "Affected customers face slower or blocked access to leading-edge AI silicon and tools.",
    secondOrder: "Bifurcated supply chains; accelerated domestic chip programs in restricted markets; reshaped global AI compute geography.",
    winners: ["Domestic-fab and domestic-AI programs in restricted markets","US/allied policy goals around technology containment"],
    losers: ["Customers losing access","NVIDIA segments serving restricted regions","Long-tail tool exporters"],
    whyItMatters: "Export controls are an active and recurring policy lever shaping where AI compute can be built.",
    relatedPaths: ["path-asml-ai"],
    relatedQuestions: ["q-export-controls", "q-sovereign-ai", "q-asml-importance"],
    sourceIds: ["src-bis"]
  },
  {
    id: "s-grid", title: "Grid interconnection delay", confidence: "high",
    shock: "Major data center campuses miss their grid-energization dates by quarters or years.",
    affected: ["node:power-generation","node:grid-access","node:ai-factory","company:constellation-energy","company:nextera","company:dominion","company:schneider","company:vertiv"],
    firstOrder: "GPU clusters show up before power does; commissioning is delayed; depreciation clocks start late.",
    secondOrder: "Behind-the-meter generation (gas peakers, SMRs) gets serious attention; site selection shifts to faster-energizing markets.",
    winners: ["Existing energized capacity (CoreWeave, hyperscaler footprint already in place)","Behind-the-meter generation vendors","Utilities with spare interconnection"],
    losers: ["Greenfield campuses in slow-queue regions","Operators dependent on long-lead transformer and switchgear"],
    whyItMatters: "Power, not capital, is increasingly the gating factor on AI build-outs.",
    relatedPaths: ["path-ai-factory-build"],
    relatedQuestions: ["q-power-bound", "q-microsoft-tmi", "q-northern-virginia", "q-bottlenecks-overview"],
    sourceIds: ["src-iea-energy"]
  },
  {
    id: "s-cooling", title: "Liquid cooling shortage", confidence: "medium",
    shock: "CDU or cold-plate manufacturing fails to keep pace with NVL72-class rack deliveries.",
    affected: ["node:liquid-cooling-tech","company:vertiv","company:motivair","company:coolit","company:boyd","node:gb200-nvl72","node:gb300-nvl72"],
    firstOrder: "Racks ship but cannot be commissioned without cooling. Site readiness becomes the binding constraint.",
    secondOrder: "Premium pricing on CDUs; expansion of cooling supply base; some workloads migrate to existing air-cooled HGX-class systems.",
    winners: ["Cooling-component leaders (Vertiv, CoolIT, Motivair)","Operators who pre-bought CDUs"],
    losers: ["Operators who underestimated lead times","Smaller cooling vendors squeezed on components"],
    whyItMatters: "GB200 / GB300 NVL72 cannot run on air. Cooling is now a first-order operational dependency.",
    relatedPaths: ["path-ai-factory-build"],
    relatedQuestions: ["q-liquid-cooling", "q-rack-scale-different", "q-bottlenecks-overview"]
  },
  {
    id: "s-asics", title: "Hyperscaler custom silicon gains share", confidence: "medium",
    shock: "Hyperscaler ASICs (TPU, Trainium, Maia, MTIA) take a meaningful share of internal training and inference workloads.",
    affected: ["node:nvidia","node:hyperscaler-asics","node:custom-silicon-threat","node:cuda","node:cuda-lock-in","company:aws","company:gcp","company:azure"],
    firstOrder: "Hyperscaler internal workloads migrate. NVIDIA share of internal capacity declines.",
    secondOrder: "External-customer demand on NVIDIA via the same clouds remains strong; NVIDIA pricing and sequencing power soften at the margin.",
    winners: ["Hyperscalers with mature ASIC programs","Customers paying lower prices on substituted workloads"],
    losers: ["NVIDIA share within the affected workloads","Cloud-provider ROI on partial NVIDIA reservations if utilization drops"],
    whyItMatters: "Hyperscaler ASICs are the most credible long-term substitution risk to NVIDIA's internal workloads.",
    relatedPaths: ["path-cloud-distribution","path-cuda-lockin"],
    relatedQuestions: ["q-asics-replacement", "q-cuda-lockin", "q-rocm-vs-cuda"]
  },
  {
    id: "s-cuda", title: "CUDA migration pressure", confidence: "low",
    shock: "Open-source GPU runtimes (Triton, OpenAI's compiler stack, vendor portability layers) close enough of the gap to move workloads off CUDA at scale.",
    affected: ["node:cuda","node:cuda-lock-in","node:tensorrt","node:nvidia-nim","node:hyperscaler-asics","company:aws","company:gcp"],
    firstOrder: "Customers re-evaluate workloads where alternatives match performance.",
    secondOrder: "Pressure on NVIDIA to keep extending CUDA-X and Tensor pipelines; alternative-vendor cloud catalogs deepen.",
    winners: ["AMD ROCm","Hyperscaler internal silicon","Customers with portable workloads"],
    losers: ["NVIDIA pricing power on commodity inference","Tooling vendors locked specifically to CUDA"],
    whyItMatters: "CUDA lock-in is the moat. Any erosion changes the economics of every other layer.",
    relatedPaths: ["path-cuda-lockin"],
    relatedQuestions: ["q-cuda-lockin", "q-rocm-vs-cuda", "q-asics-replacement"]
  },
  {
    id: "s-qec", title: "Quantum error correction breakthrough", confidence: "low",
    shock: "A quantum hardware vendor demonstrates scalable logical-qubit error correction at useful sizes.",
    affected: ["company:quantinuum","company:ibm-quantum","company:psiquantum","node:qpu","node:quantum-error-correction","node:cuda-q","node:nvqlink"],
    firstOrder: "Hybrid quantum-classical workflows attract real chemistry, materials and optimization workloads.",
    secondOrder: "Demand for GPU clusters running CUDA-Q rises in tandem; quantum-classical integration becomes a real category, not a research aspiration.",
    winners: ["The breakthrough vendor","NVIDIA via CUDA-Q / NVQLink coupling","Sectors waiting on quantum chemistry"],
    losers: ["Skeptics of quantum's commercial trajectory","Vendors not aligned with the dominant modality"],
    whyItMatters: "Most commercial-quantum value depends on error correction. A breakthrough resets the timeline.",
    relatedPaths: ["path-quantum"],
    relatedQuestions: ["q-quantum-error-correction", "q-quantum-stack"]
  }
];

/* ============================================
   PRODUCT ANATOMIES — Composition cards

   Each entry breaks a complex product into parts. The UI uses these as
   expandable composition diagrams referenced from the product profile
   panel.
   ============================================ */
var PRODUCT_ANATOMIES = [
  {
    id: "anatomy-gb200-nvl72", productId: "p-gb200", title: "Anatomy of GB200 NVL72",
    explanation: "GB200 NVL72 is not a single GPU. It is a rack-scale AI computer where 72 Blackwell GPUs and 36 Grace CPUs are wired together by NVLink fabric, fed by HBM, and cooled by direct liquid loops.",
    parts: [
      { name: "Blackwell GPUs", role: "Compute. 72 dies organized as 36 GB200 superchips." },
      { name: "Grace CPUs", role: "Host control and memory subsystem. One per superchip." },
      { name: "HBM3E", role: "High-bandwidth memory next to the GPU dies." },
      { name: "CoWoS package", role: "TSMC packaging that integrates GPU dies and HBM stacks." },
      { name: "NVLink", role: "GPU-to-GPU bandwidth inside the rack." },
      { name: "NVSwitch", role: "All-to-all switch chips that form the NVLink fabric." },
      { name: "Direct liquid cooling", role: "CDUs and cold plates remove heat at >100 kW per rack." },
      { name: "InfiniBand or Spectrum-X", role: "Inter-rack networking into clusters." },
      { name: "Software (CUDA, NCCL, TensorRT)", role: "Stack that turns the rack into one accelerator." }
    ]
  },
  {
    id: "anatomy-gb300-nvl72", productId: "p-gb300", title: "Anatomy of GB300 NVL72",
    explanation: "The GB300 NVL72 is the higher-performance evolution of the NVL72 architecture, built around Grace + Blackwell Ultra superchips.",
    parts: [
      { name: "Blackwell Ultra GPUs", role: "Higher per-GPU performance and more on-package memory." },
      { name: "Grace CPUs", role: "Host control. One per superchip." },
      { name: "HBM3E (more capacity)", role: "Larger per-package memory than GB200." },
      { name: "CoWoS package", role: "Same TSMC advanced packaging family as GB200." },
      { name: "NVLink (next gen)", role: "Higher per-link bandwidth across the rack." },
      { name: "Liquid cooling", role: "Even more demanding than GB200. CDU sizing matters." },
      { name: "Spectrum-X / InfiniBand", role: "Inter-rack fabric." }
    ]
  },
  {
    id: "anatomy-vera-rubin-nvl72", productId: "p-vera-rubin-nvl72", title: "Anatomy of Vera Rubin NVL72",
    explanation: "The roadmap successor to GB300 NVL72. Couples Vera CPUs with Rubin GPUs and is expected to use HBM4.",
    parts: [
      { name: "Rubin GPUs", role: "Next-generation NVIDIA GPU architecture." },
      { name: "Vera CPUs", role: "Next-generation Arm-based CPU host." },
      { name: "HBM4", role: "Higher-bandwidth memory generation, paired with Rubin." },
      { name: "Advanced packaging", role: "Continuation of the 3DFabric packaging trajectory." },
      { name: "NVLink (next gen)", role: "Bandwidth scaled to feed Rubin." },
      { name: "Liquid cooling", role: "Same architectural requirement as GB200/GB300, scaled up." }
    ]
  },
  {
    id: "anatomy-cowos", productId: "p-tsmc-cowos", title: "Anatomy of a CoWoS package",
    explanation: "CoWoS is a 2.5D package: a silicon interposer carries connections between the GPU die and adjacent HBM stacks, and the whole assembly sits on an organic substrate.",
    parts: [
      { name: "GPU die", role: "Compute logic fabricated on a leading-edge node." },
      { name: "HBM stacks", role: "Stacked DRAM dies wired through silicon (TSV)." },
      { name: "Silicon interposer", role: "Carries thousands of connections between GPU and HBM." },
      { name: "Microbumps", role: "Connect dies to the interposer." },
      { name: "Organic substrate", role: "Routes signals from the package to the system board." },
      { name: "Underfill / molding", role: "Mechanical and thermal stability." }
    ]
  },
  {
    id: "anatomy-hbm-stack", productId: "p-hbm3e", title: "Anatomy of an HBM stack",
    explanation: "HBM stacks are vertically integrated DRAM. Multiple DRAM dies are stacked on a base die and connected by through-silicon vias.",
    parts: [
      { name: "Base die (logic)", role: "Implements the HBM controller interface." },
      { name: "DRAM dies", role: "Stacked memory dies (e.g. 8-Hi or 12-Hi)." },
      { name: "Through-silicon vias (TSVs)", role: "Vertical connections between stacked dies." },
      { name: "Microbumps", role: "Connect the stack to the interposer." },
      { name: "I/O at the base", role: "Connects the HBM controller to the GPU die." }
    ]
  },
  {
    id: "anatomy-cuda-stack", productId: "p-cuda", title: "Anatomy of the CUDA software stack",
    explanation: "CUDA is not just a compiler. It is a layered stack of runtime, libraries, profiling tools and ecosystem integrations that have accumulated for two decades.",
    parts: [
      { name: "CUDA C++ / runtime", role: "The programming model and runtime that talks to the GPU." },
      { name: "CUDA-X libraries", role: "Optimized routines (linear algebra, FFT, image, ML)." },
      { name: "cuDNN", role: "Deep-learning primitives used by frameworks." },
      { name: "Compilers (NVCC, NVVM)", role: "Compile CUDA code into PTX/SASS." },
      { name: "Tooling (Nsight, Compute, Systems)", role: "Profilers and debuggers." },
      { name: "Frameworks", role: "PyTorch, TensorFlow, JAX bind to CUDA libraries." },
      { name: "TensorRT / Triton / NIM", role: "Inference acceleration and deployment." },
      { name: "Operator coverage", role: "Decades of accumulated kernels for every workload shape." }
    ]
  },
  {
    id: "anatomy-ai-factory", productId: "p-substations", title: "Anatomy of an AI factory",
    explanation: "An AI factory is a power and cooling envelope first; a server hall second. Each layer must align before the racks can produce tokens.",
    parts: [
      { name: "Generation / PPA", role: "Power source. Often nuclear, gas peaker or renewable PPA." },
      { name: "Substation", role: "Steps grid voltage down to campus distribution." },
      { name: "Switchgear / transformers", role: "Inside-the-fence electrical distribution." },
      { name: "UPS systems", role: "Bridge outages and condition power." },
      { name: "Liquid cooling plant", role: "Heat rejection at high density." },
      { name: "CDUs / cold plates", role: "Move coolant to the GPU and CPU dies." },
      { name: "GB200 / GB300 NVL72 racks", role: "The compute units." },
      { name: "NVLink fabric", role: "In-rack GPU-to-GPU bandwidth." },
      { name: "InfiniBand / Spectrum-X", role: "Inter-rack fabric." },
      { name: "Inference and orchestration software", role: "Triton, NIM, Kubernetes, schedulers." }
    ]
  },
  {
    id: "anatomy-quantum", productId: "p-cudaq", title: "Anatomy of a quantum-classical workflow",
    explanation: "A useful quantum workflow today is mostly classical compute. The QPU is a co-processor whose results are folded back into a CUDA-Q-orchestrated loop.",
    parts: [
      { name: "QPU (quantum processor)", role: "Performs the quantum subroutine." },
      { name: "Quantum controller", role: "Generates and reads quantum signals." },
      { name: "NVQLink", role: "High-speed link between the QPU and a GPU cluster." },
      { name: "GPU cluster", role: "Runs CUDA-Q simulation, error decoding and orchestration." },
      { name: "CUDA-Q program", role: "Defines the hybrid algorithm and its loop." },
      { name: "Error correction", role: "Decoding and tracking logical qubit state." },
      { name: "Application (chemistry, optimization)", role: "Final result returned to the user." }
    ]
  }
];

/* ============================================
   ANATOMY DIAGRAMS — hand-built SVG schematics

   Original vector schematics drawn in code so the page can teach with
   visuals while staying license-clean and on-brand. Keyed by anatomy id;
   referenced from buildAnatomies(), renderProductProfile() and
   renderQuestionProfile() via getAnatomyDiagram() and getQuestionDiagram().

   Style conventions:
   - viewBox sized for the diagram, aspect kept lean
   - Layer color system mirrors the rest of the atlas
   - Gold (#FFB347) is reserved for connective tissue (interconnects, bumps)
   - Labels live inside the SVG so the picture is self-contained
   ============================================ */
var ANATOMY_DIAGRAMS = {
  "anatomy-cowos": '<svg viewBox="0 0 720 380" xmlns="http://www.w3.org/2000/svg" class="atlas-svg-diagram" role="img" aria-label="CoWoS package cross-section: GPU die plus HBM stacks on a silicon interposer over an organic substrate">' +
    '<defs>' +
    '<linearGradient id="cowosGpu" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0F4D2A"/><stop offset="100%" stop-color="#0A2E1A"/></linearGradient>' +
    '<linearGradient id="cowosHbm" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1A2B5C"/><stop offset="100%" stop-color="#0F1F45"/></linearGradient>' +
    '<linearGradient id="cowosInter" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3D2C5A"/><stop offset="100%" stop-color="#251A3D"/></linearGradient>' +
    '<linearGradient id="cowosSub" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3A332A"/><stop offset="100%" stop-color="#1F1A14"/></linearGradient>' +
    '</defs>' +
    '<text x="160" y="22" text-anchor="middle" fill="#90CDF4" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="0.06em">HBM STACK</text>' +
    '<text x="360" y="22" text-anchor="middle" fill="#9AE6B4" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="0.06em">GPU DIE</text>' +
    '<text x="560" y="22" text-anchor="middle" fill="#90CDF4" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="0.06em">HBM STACK</text>' +
    '<g><rect x="100" y="40" width="120" height="14" fill="url(#cowosHbm)" stroke="#63B3ED" stroke-width="0.6"/><rect x="100" y="54" width="120" height="14" fill="url(#cowosHbm)" stroke="#63B3ED" stroke-width="0.6"/><rect x="100" y="68" width="120" height="14" fill="url(#cowosHbm)" stroke="#63B3ED" stroke-width="0.6"/><rect x="100" y="82" width="120" height="14" fill="url(#cowosHbm)" stroke="#63B3ED" stroke-width="0.6"/><rect x="100" y="96" width="120" height="14" fill="url(#cowosHbm)" stroke="#63B3ED" stroke-width="0.6"/><rect x="100" y="110" width="120" height="14" fill="url(#cowosHbm)" stroke="#63B3ED" stroke-width="0.6"/><rect x="100" y="124" width="120" height="14" fill="url(#cowosHbm)" stroke="#63B3ED" stroke-width="0.6"/><rect x="100" y="138" width="120" height="14" fill="url(#cowosHbm)" stroke="#63B3ED" stroke-width="0.6"/><rect x="100" y="152" width="120" height="22" fill="#0F1F45" stroke="#63B3ED" stroke-width="1"/><text x="160" y="167" text-anchor="middle" fill="#90CDF4" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="700">BASE DIE</text><line x1="125" y1="40" x2="125" y2="174" stroke="#FFB347" stroke-width="0.6" stroke-dasharray="2 1.5" opacity="0.7"/><line x1="160" y1="40" x2="160" y2="174" stroke="#FFB347" stroke-width="0.6" stroke-dasharray="2 1.5" opacity="0.7"/><line x1="195" y1="40" x2="195" y2="174" stroke="#FFB347" stroke-width="0.6" stroke-dasharray="2 1.5" opacity="0.7"/></g>' +
    '<rect x="280" y="60" width="160" height="114" fill="url(#cowosGpu)" stroke="#48BB78" stroke-width="1.4"/>' +
    '<text x="360" y="115" text-anchor="middle" fill="#9AE6B4" font-family="Inter, system-ui, sans-serif" font-size="14" font-weight="700">GPU</text>' +
    '<text x="360" y="135" text-anchor="middle" fill="#48BB78" font-family="Inter, system-ui, sans-serif" font-size="10">compute logic</text>' +
    '<text x="360" y="152" text-anchor="middle" fill="#48BB78" font-family="Inter, system-ui, sans-serif" font-size="9">leading-edge node</text>' +
    '<g><rect x="500" y="40" width="120" height="14" fill="url(#cowosHbm)" stroke="#63B3ED" stroke-width="0.6"/><rect x="500" y="54" width="120" height="14" fill="url(#cowosHbm)" stroke="#63B3ED" stroke-width="0.6"/><rect x="500" y="68" width="120" height="14" fill="url(#cowosHbm)" stroke="#63B3ED" stroke-width="0.6"/><rect x="500" y="82" width="120" height="14" fill="url(#cowosHbm)" stroke="#63B3ED" stroke-width="0.6"/><rect x="500" y="96" width="120" height="14" fill="url(#cowosHbm)" stroke="#63B3ED" stroke-width="0.6"/><rect x="500" y="110" width="120" height="14" fill="url(#cowosHbm)" stroke="#63B3ED" stroke-width="0.6"/><rect x="500" y="124" width="120" height="14" fill="url(#cowosHbm)" stroke="#63B3ED" stroke-width="0.6"/><rect x="500" y="138" width="120" height="14" fill="url(#cowosHbm)" stroke="#63B3ED" stroke-width="0.6"/><rect x="500" y="152" width="120" height="22" fill="#0F1F45" stroke="#63B3ED" stroke-width="1"/><text x="560" y="167" text-anchor="middle" fill="#90CDF4" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="700">BASE DIE</text><line x1="525" y1="40" x2="525" y2="174" stroke="#FFB347" stroke-width="0.6" stroke-dasharray="2 1.5" opacity="0.7"/><line x1="560" y1="40" x2="560" y2="174" stroke="#FFB347" stroke-width="0.6" stroke-dasharray="2 1.5" opacity="0.7"/><line x1="595" y1="40" x2="595" y2="174" stroke="#FFB347" stroke-width="0.6" stroke-dasharray="2 1.5" opacity="0.7"/></g>' +
    '<g fill="#FFB347"><circle cx="115" cy="178" r="2.4"/><circle cx="135" cy="178" r="2.4"/><circle cx="155" cy="178" r="2.4"/><circle cx="175" cy="178" r="2.4"/><circle cx="195" cy="178" r="2.4"/><circle cx="215" cy="178" r="2.4"/><circle cx="290" cy="178" r="2.4"/><circle cx="310" cy="178" r="2.4"/><circle cx="330" cy="178" r="2.4"/><circle cx="350" cy="178" r="2.4"/><circle cx="370" cy="178" r="2.4"/><circle cx="390" cy="178" r="2.4"/><circle cx="410" cy="178" r="2.4"/><circle cx="430" cy="178" r="2.4"/><circle cx="515" cy="178" r="2.4"/><circle cx="535" cy="178" r="2.4"/><circle cx="555" cy="178" r="2.4"/><circle cx="575" cy="178" r="2.4"/><circle cx="595" cy="178" r="2.4"/><circle cx="615" cy="178" r="2.4"/></g>' +
    '<text x="660" y="180" fill="#FFB347" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="700">microbumps</text>' +
    '<rect x="80" y="184" width="560" height="44" fill="url(#cowosInter)" stroke="#9F7AEA" stroke-width="1.2"/>' +
    '<text x="92" y="208" fill="#D6BCFA" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="0.04em">SILICON INTERPOSER</text>' +
    '<text x="92" y="222" fill="#B794F4" font-family="Inter, system-ui, sans-serif" font-size="9">carries thousands of die-to-die signals</text>' +
    '<g fill="#B794F4"><circle cx="110" cy="232" r="3"/><circle cx="150" cy="232" r="3"/><circle cx="190" cy="232" r="3"/><circle cx="230" cy="232" r="3"/><circle cx="270" cy="232" r="3"/><circle cx="310" cy="232" r="3"/><circle cx="350" cy="232" r="3"/><circle cx="390" cy="232" r="3"/><circle cx="430" cy="232" r="3"/><circle cx="470" cy="232" r="3"/><circle cx="510" cy="232" r="3"/><circle cx="550" cy="232" r="3"/><circle cx="590" cy="232" r="3"/><circle cx="630" cy="232" r="3"/></g>' +
    '<rect x="40" y="240" width="640" height="56" fill="url(#cowosSub)" stroke="#A0AEC0" stroke-width="1"/>' +
    '<text x="52" y="262" fill="#FBD38D" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="0.04em">ORGANIC SUBSTRATE</text>' +
    '<text x="52" y="276" fill="#FBD38D" font-family="Inter, system-ui, sans-serif" font-size="9">routes signals to system board</text>' +
    '<g fill="#A0AEC0"><circle cx="80" cy="312" r="6"/><circle cx="130" cy="312" r="6"/><circle cx="180" cy="312" r="6"/><circle cx="230" cy="312" r="6"/><circle cx="280" cy="312" r="6"/><circle cx="330" cy="312" r="6"/><circle cx="380" cy="312" r="6"/><circle cx="430" cy="312" r="6"/><circle cx="480" cy="312" r="6"/><circle cx="530" cy="312" r="6"/><circle cx="580" cy="312" r="6"/><circle cx="630" cy="312" r="6"/></g>' +
    '<text x="360" y="350" text-anchor="middle" fill="#A0AEC0" font-family="Inter, system-ui, sans-serif" font-size="10" font-style="italic">BGA balls — package to system board</text>' +
    '</svg>',

  "anatomy-hbm-stack": '<svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg" class="atlas-svg-diagram" role="img" aria-label="HBM stack anatomy: 12 stacked DRAM dies on a base logic die wired through TSVs">' +
    '<defs>' +
    '<linearGradient id="hbmDie" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1A2B5C"/><stop offset="100%" stop-color="#0F1F45"/></linearGradient>' +
    '</defs>' +
    '<text x="260" y="24" text-anchor="middle" fill="#FFB347" font-family="Inter, system-ui, sans-serif" font-size="13" font-weight="700" letter-spacing="0.06em">12-HIGH HBM STACK</text>' +
    '<g>' +
    '<rect x="160" y="40" width="200" height="18" fill="url(#hbmDie)" stroke="#63B3ED" stroke-width="0.8"/><text x="260" y="53" text-anchor="middle" fill="#90CDF4" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="600">DRAM DIE 12</text>' +
    '<rect x="160" y="58" width="200" height="18" fill="url(#hbmDie)" stroke="#63B3ED" stroke-width="0.8"/><text x="260" y="71" text-anchor="middle" fill="#90CDF4" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="600">DRAM DIE 11</text>' +
    '<rect x="160" y="76" width="200" height="18" fill="url(#hbmDie)" stroke="#63B3ED" stroke-width="0.8"/><text x="260" y="89" text-anchor="middle" fill="#90CDF4" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="600">DRAM DIE 10</text>' +
    '<rect x="160" y="94" width="200" height="18" fill="url(#hbmDie)" stroke="#63B3ED" stroke-width="0.8"/><text x="260" y="107" text-anchor="middle" fill="#90CDF4" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="600">DRAM DIE 9</text>' +
    '<rect x="160" y="112" width="200" height="18" fill="url(#hbmDie)" stroke="#63B3ED" stroke-width="0.8"/><text x="260" y="125" text-anchor="middle" fill="#90CDF4" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="600">DRAM DIE 8</text>' +
    '<rect x="160" y="130" width="200" height="18" fill="url(#hbmDie)" stroke="#63B3ED" stroke-width="0.8"/><text x="260" y="143" text-anchor="middle" fill="#90CDF4" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="600">DRAM DIE 7</text>' +
    '<rect x="160" y="148" width="200" height="18" fill="url(#hbmDie)" stroke="#63B3ED" stroke-width="0.8"/><text x="260" y="161" text-anchor="middle" fill="#90CDF4" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="600">DRAM DIE 6</text>' +
    '<rect x="160" y="166" width="200" height="18" fill="url(#hbmDie)" stroke="#63B3ED" stroke-width="0.8"/><text x="260" y="179" text-anchor="middle" fill="#90CDF4" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="600">DRAM DIE 5</text>' +
    '<rect x="160" y="184" width="200" height="18" fill="url(#hbmDie)" stroke="#63B3ED" stroke-width="0.8"/><text x="260" y="197" text-anchor="middle" fill="#90CDF4" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="600">DRAM DIE 4</text>' +
    '<rect x="160" y="202" width="200" height="18" fill="url(#hbmDie)" stroke="#63B3ED" stroke-width="0.8"/><text x="260" y="215" text-anchor="middle" fill="#90CDF4" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="600">DRAM DIE 3</text>' +
    '<rect x="160" y="220" width="200" height="18" fill="url(#hbmDie)" stroke="#63B3ED" stroke-width="0.8"/><text x="260" y="233" text-anchor="middle" fill="#90CDF4" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="600">DRAM DIE 2</text>' +
    '<rect x="160" y="238" width="200" height="18" fill="url(#hbmDie)" stroke="#63B3ED" stroke-width="0.8"/><text x="260" y="251" text-anchor="middle" fill="#90CDF4" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="600">DRAM DIE 1</text>' +
    '</g>' +
    '<g stroke="#FFB347" stroke-width="1" stroke-dasharray="3 2" opacity="0.85"><line x1="190" y1="40" x2="190" y2="290"/><line x1="225" y1="40" x2="225" y2="290"/><line x1="260" y1="40" x2="260" y2="290"/><line x1="295" y1="40" x2="295" y2="290"/><line x1="330" y1="40" x2="330" y2="290"/></g>' +
    '<rect x="160" y="260" width="200" height="30" fill="#1A0F2E" stroke="#9F7AEA" stroke-width="1.2"/>' +
    '<text x="260" y="280" text-anchor="middle" fill="#D6BCFA" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="700">BASE DIE (HBM controller)</text>' +
    '<g fill="#FFB347"><circle cx="180" cy="298" r="3"/><circle cx="210" cy="298" r="3"/><circle cx="240" cy="298" r="3"/><circle cx="260" cy="298" r="3"/><circle cx="280" cy="298" r="3"/><circle cx="310" cy="298" r="3"/><circle cx="340" cy="298" r="3"/></g>' +
    '<text x="260" y="320" text-anchor="middle" fill="#FFB347" font-family="Inter, system-ui, sans-serif" font-size="10" font-weight="700">microbumps to interposer</text>' +
    '<g font-family="Inter, system-ui, sans-serif" font-size="10">' +
    '<line x1="80" y1="160" x2="155" y2="160" stroke="#FFB347" stroke-width="0.7"/>' +
    '<text x="76" y="156" text-anchor="end" fill="#FFB347" font-weight="700">TSVs</text>' +
    '<text x="76" y="170" text-anchor="end" fill="#A0AEC0">through-silicon vias</text>' +
    '<line x1="365" y1="148" x2="430" y2="148" stroke="#63B3ED" stroke-width="0.7"/>' +
    '<text x="436" y="144" fill="#90CDF4" font-weight="700">12-Hi DRAM</text>' +
    '<text x="436" y="158" fill="#A0AEC0">stacked memory</text>' +
    '<line x1="365" y1="275" x2="430" y2="275" stroke="#9F7AEA" stroke-width="0.7"/>' +
    '<text x="436" y="271" fill="#D6BCFA" font-weight="700">Logic die</text>' +
    '<text x="436" y="285" fill="#A0AEC0">controller I/O</text>' +
    '</g>' +
    '<text x="260" y="358" text-anchor="middle" fill="#A0AEC0" font-family="Inter, system-ui, sans-serif" font-size="10" font-style="italic">Vertical TSVs deliver TB/s of bandwidth into one stack</text>' +
    '</svg>',

  "anatomy-gb200-nvl72": '<svg viewBox="0 0 720 480" xmlns="http://www.w3.org/2000/svg" class="atlas-svg-diagram" role="img" aria-label="GB200 NVL72 rack: 18 compute trays and 9 NVSwitch trays cooled by liquid loops">' +
    '<defs>' +
    '<linearGradient id="rackCompute" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0F4D2A"/><stop offset="100%" stop-color="#0A2E1A"/></linearGradient>' +
    '<linearGradient id="rackSwitch" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3D2C5A"/><stop offset="100%" stop-color="#251A3D"/></linearGradient>' +
    '</defs>' +
    '<text x="360" y="22" text-anchor="middle" fill="#FFB347" font-family="Inter, system-ui, sans-serif" font-size="13" font-weight="700" letter-spacing="0.06em">GB200 NVL72 — RACK-SCALE GPU</text>' +
    '<text x="360" y="50" text-anchor="middle" fill="#F6AD55" font-family="Inter, system-ui, sans-serif" font-size="10" font-weight="700">↑ InfiniBand / Spectrum-X uplinks</text>' +
    '<rect x="240" y="60" width="240" height="380" fill="none" stroke="#A0AEC0" stroke-width="1.6" rx="3"/>' +
    '<rect x="244" y="74" width="232" height="140" fill="url(#rackCompute)" stroke="#48BB78" stroke-width="0.8"/>' +
    '<g stroke="#0A2E1A" stroke-width="0.8" opacity="0.65">' +
    '<line x1="244" y1="88" x2="476" y2="88"/><line x1="244" y1="102" x2="476" y2="102"/><line x1="244" y1="116" x2="476" y2="116"/><line x1="244" y1="130" x2="476" y2="130"/><line x1="244" y1="144" x2="476" y2="144"/><line x1="244" y1="158" x2="476" y2="158"/><line x1="244" y1="172" x2="476" y2="172"/><line x1="244" y1="186" x2="476" y2="186"/><line x1="244" y1="200" x2="476" y2="200"/>' +
    '</g>' +
    '<text x="360" y="138" text-anchor="middle" fill="#9AE6B4" font-family="Inter, system-ui, sans-serif" font-size="14" font-weight="700">10 COMPUTE TRAYS</text>' +
    '<text x="360" y="158" text-anchor="middle" fill="#48BB78" font-family="Inter, system-ui, sans-serif" font-size="10">40 Blackwell GPUs · 20 Grace CPUs</text>' +
    '<rect x="244" y="218" width="232" height="68" fill="url(#rackSwitch)" stroke="#9F7AEA" stroke-width="0.8"/>' +
    '<g stroke="#251A3D" stroke-width="0.8" opacity="0.65">' +
    '<line x1="244" y1="226" x2="476" y2="226"/><line x1="244" y1="234" x2="476" y2="234"/><line x1="244" y1="242" x2="476" y2="242"/><line x1="244" y1="250" x2="476" y2="250"/><line x1="244" y1="258" x2="476" y2="258"/><line x1="244" y1="266" x2="476" y2="266"/><line x1="244" y1="274" x2="476" y2="274"/><line x1="244" y1="282" x2="476" y2="282"/>' +
    '</g>' +
    '<text x="360" y="254" text-anchor="middle" fill="#D6BCFA" font-family="Inter, system-ui, sans-serif" font-size="13" font-weight="700">9 NVSWITCH TRAYS</text>' +
    '<text x="360" y="270" text-anchor="middle" fill="#B794F4" font-family="Inter, system-ui, sans-serif" font-size="10">NVLink fabric — all-to-all</text>' +
    '<rect x="244" y="290" width="232" height="118" fill="url(#rackCompute)" stroke="#48BB78" stroke-width="0.8"/>' +
    '<g stroke="#0A2E1A" stroke-width="0.8" opacity="0.65">' +
    '<line x1="244" y1="304" x2="476" y2="304"/><line x1="244" y1="318" x2="476" y2="318"/><line x1="244" y1="332" x2="476" y2="332"/><line x1="244" y1="346" x2="476" y2="346"/><line x1="244" y1="360" x2="476" y2="360"/><line x1="244" y1="374" x2="476" y2="374"/><line x1="244" y1="388" x2="476" y2="388"/>' +
    '</g>' +
    '<text x="360" y="342" text-anchor="middle" fill="#9AE6B4" font-family="Inter, system-ui, sans-serif" font-size="14" font-weight="700">8 COMPUTE TRAYS</text>' +
    '<text x="360" y="362" text-anchor="middle" fill="#48BB78" font-family="Inter, system-ui, sans-serif" font-size="10">32 Blackwell GPUs · 16 Grace CPUs</text>' +
    '<text x="360" y="430" text-anchor="middle" fill="#FC8181" font-family="Inter, system-ui, sans-serif" font-size="10" font-weight="700">↓ ~120 kW power feed</text>' +
    '<g><text x="100" y="80" text-anchor="middle" fill="#4FD1C5" font-family="Inter, system-ui, sans-serif" font-size="10" font-weight="700" letter-spacing="0.04em">DIRECT LIQUID</text>' +
    '<text x="100" y="94" text-anchor="middle" fill="#4FD1C5" font-family="Inter, system-ui, sans-serif" font-size="10" font-weight="700" letter-spacing="0.04em">COOLING LOOP</text>' +
    '<rect x="60" y="200" width="80" height="60" fill="#0A2929" stroke="#4FD1C5" stroke-width="1.2" rx="4"/>' +
    '<text x="100" y="226" text-anchor="middle" fill="#4FD1C5" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="700">CDU</text>' +
    '<text x="100" y="242" text-anchor="middle" fill="#81E6D9" font-family="Inter, system-ui, sans-serif" font-size="8">cooling distribution</text>' +
    '<line x1="140" y1="215" x2="240" y2="215" stroke="#4FD1C5" stroke-width="2.5"/>' +
    '<line x1="140" y1="245" x2="240" y2="245" stroke="#4FD1C5" stroke-width="2.5" stroke-dasharray="3 2"/>' +
    '<text x="180" y="208" fill="#81E6D9" font-family="Inter, system-ui, sans-serif" font-size="8">supply</text>' +
    '<text x="180" y="262" fill="#81E6D9" font-family="Inter, system-ui, sans-serif" font-size="8">return (warm)</text>' +
    '</g>' +
    '<g><text x="500" y="80" fill="#FFB347" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="0.06em">PER RACK</text>' +
    '<text x="500" y="108" fill="#9AE6B4" font-family="Inter, system-ui, sans-serif" font-size="14" font-weight="800">72</text>' +
    '<text x="528" y="108" fill="#48BB78" font-family="Inter, system-ui, sans-serif" font-size="10">Blackwell GPUs</text>' +
    '<text x="500" y="132" fill="#9AE6B4" font-family="Inter, system-ui, sans-serif" font-size="14" font-weight="800">36</text>' +
    '<text x="528" y="132" fill="#48BB78" font-family="Inter, system-ui, sans-serif" font-size="10">Grace CPUs</text>' +
    '<text x="500" y="156" fill="#D6BCFA" font-family="Inter, system-ui, sans-serif" font-size="14" font-weight="800">9</text>' +
    '<text x="520" y="156" fill="#B794F4" font-family="Inter, system-ui, sans-serif" font-size="10">NVSwitch chips</text>' +
    '<text x="500" y="184" fill="#FBD38D" font-family="Inter, system-ui, sans-serif" font-size="13" font-weight="700">~120 kW</text>' +
    '<text x="500" y="198" fill="#A0AEC0" font-family="Inter, system-ui, sans-serif" font-size="9">power · liquid only</text>' +
    '<text x="500" y="232" fill="#F6AD55" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="0.06em">FABRIC</text>' +
    '<text x="500" y="252" fill="#D6BCFA" font-family="Inter, system-ui, sans-serif" font-size="10">NVLink (in-rack)</text>' +
    '<text x="500" y="268" fill="#FBD38D" font-family="Inter, system-ui, sans-serif" font-size="10">InfiniBand · Spectrum-X</text>' +
    '<text x="500" y="282" fill="#A0AEC0" font-family="Inter, system-ui, sans-serif" font-size="9">(rack ↔ cluster)</text>' +
    '<text x="500" y="316" fill="#FFB347" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="0.06em">TREATED AS</text>' +
    '<text x="500" y="334" fill="#FBD38D" font-family="Inter, system-ui, sans-serif" font-size="12" font-weight="700">one accelerator</text>' +
    '<text x="500" y="350" fill="#A0AEC0" font-family="Inter, system-ui, sans-serif" font-size="9">scheduled, billed, sized as one</text>' +
    '</g>' +
    '</svg>',

  "anatomy-ai-factory": '<svg viewBox="0 0 880 320" xmlns="http://www.w3.org/2000/svg" class="atlas-svg-diagram" role="img" aria-label="AI factory flow: power generation through substation, UPS, cooling, NVL72 racks, networking to tokens">' +
    '<defs>' +
    '<marker id="aifArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#FFB347"/></marker>' +
    '</defs>' +
    '<text x="440" y="22" text-anchor="middle" fill="#FFB347" font-family="Inter, system-ui, sans-serif" font-size="13" font-weight="700" letter-spacing="0.06em">AI FACTORY — POWER → TOKENS</text>' +
    '<text x="20" y="60" fill="#A0AEC0" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="700" letter-spacing="0.08em">PHYSICAL</text>' +
    '<line x1="78" y1="58" x2="365" y2="58" stroke="#F56565" stroke-width="0.5" stroke-dasharray="2 2" opacity="0.6"/>' +
    '<text x="386" y="60" fill="#A0AEC0" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="700" letter-spacing="0.08em">FACILITY</text>' +
    '<line x1="438" y1="58" x2="488" y2="58" stroke="#4FD1C5" stroke-width="0.5" stroke-dasharray="2 2" opacity="0.6"/>' +
    '<text x="508" y="60" fill="#A0AEC0" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="700" letter-spacing="0.08em">COMPUTE</text>' +
    '<line x1="566" y1="58" x2="730" y2="58" stroke="#48BB78" stroke-width="0.5" stroke-dasharray="2 2" opacity="0.6"/>' +
    '<text x="752" y="60" fill="#A0AEC0" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="700" letter-spacing="0.08em">OUTPUT</text>' +
    '<line x1="800" y1="58" x2="852" y2="58" stroke="#FFB347" stroke-width="0.5" stroke-dasharray="2 2" opacity="0.6"/>' +
    '<g><rect x="20" y="80" width="100" height="100" rx="8" fill="rgba(245,101,101,0.08)" stroke="#F56565" stroke-width="1.4"/>' +
    '<path d="M 56 102 L 84 102 L 70 130 Z" fill="none" stroke="#FC8181" stroke-width="1.6" stroke-linejoin="round"/>' +
    '<line x1="70" y1="130" x2="70" y2="142" stroke="#FC8181" stroke-width="1.6"/>' +
    '<text x="70" y="160" text-anchor="middle" fill="#FC8181" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="700">GENERATION</text>' +
    '<text x="70" y="174" text-anchor="middle" fill="#A0AEC0" font-family="Inter, system-ui, sans-serif" font-size="9">PPA · nuclear · gas</text>' +
    '</g>' +
    '<line x1="122" y1="130" x2="138" y2="130" stroke="#FFB347" stroke-width="1.6" marker-end="url(#aifArrow)"/>' +
    '<g><rect x="142" y="80" width="100" height="100" rx="8" fill="rgba(246,173,85,0.08)" stroke="#F6AD55" stroke-width="1.4"/>' +
    '<path d="M 196 102 L 184 124 L 192 124 L 188 142 L 200 120 L 192 120 L 198 102 Z" fill="#F6AD55"/>' +
    '<text x="192" y="160" text-anchor="middle" fill="#FBD38D" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="700">SUBSTATION</text>' +
    '<text x="192" y="174" text-anchor="middle" fill="#A0AEC0" font-family="Inter, system-ui, sans-serif" font-size="9">grid → campus</text>' +
    '</g>' +
    '<line x1="244" y1="130" x2="260" y2="130" stroke="#FFB347" stroke-width="1.6" marker-end="url(#aifArrow)"/>' +
    '<g><rect x="264" y="80" width="100" height="100" rx="8" fill="rgba(246,173,85,0.08)" stroke="#F6AD55" stroke-width="1.4"/>' +
    '<rect x="298" y="106" width="32" height="22" fill="none" stroke="#F6AD55" stroke-width="1.4"/>' +
    '<rect x="330" y="112" width="3" height="10" fill="#F6AD55"/>' +
    '<line x1="306" y1="111" x2="306" y2="123" stroke="#F6AD55" stroke-width="1.2"/>' +
    '<line x1="314" y1="111" x2="314" y2="123" stroke="#F6AD55" stroke-width="1.2"/>' +
    '<line x1="322" y1="111" x2="322" y2="123" stroke="#F6AD55" stroke-width="1.2"/>' +
    '<text x="314" y="160" text-anchor="middle" fill="#FBD38D" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="700">UPS / GEAR</text>' +
    '<text x="314" y="174" text-anchor="middle" fill="#A0AEC0" font-family="Inter, system-ui, sans-serif" font-size="9">condition · ride-through</text>' +
    '</g>' +
    '<line x1="366" y1="130" x2="382" y2="130" stroke="#FFB347" stroke-width="1.6" marker-end="url(#aifArrow)"/>' +
    '<g><rect x="386" y="80" width="100" height="100" rx="8" fill="rgba(79,209,197,0.08)" stroke="#4FD1C5" stroke-width="1.4"/>' +
    '<path d="M 436 100 C 422 118, 422 134, 436 134 C 450 134, 450 118, 436 100 Z" fill="none" stroke="#4FD1C5" stroke-width="1.5"/>' +
    '<text x="436" y="160" text-anchor="middle" fill="#81E6D9" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="700">COOLING</text>' +
    '<text x="436" y="174" text-anchor="middle" fill="#A0AEC0" font-family="Inter, system-ui, sans-serif" font-size="9">CDUs · cold plates</text>' +
    '</g>' +
    '<line x1="488" y1="130" x2="504" y2="130" stroke="#FFB347" stroke-width="1.6" marker-end="url(#aifArrow)"/>' +
    '<g><rect x="508" y="80" width="100" height="100" rx="8" fill="rgba(72,187,120,0.08)" stroke="#48BB78" stroke-width="1.4"/>' +
    '<rect x="544" y="98" width="28" height="42" fill="none" stroke="#48BB78" stroke-width="1.4"/>' +
    '<line x1="544" y1="106" x2="572" y2="106" stroke="#48BB78" stroke-width="0.8"/>' +
    '<line x1="544" y1="114" x2="572" y2="114" stroke="#48BB78" stroke-width="0.8"/>' +
    '<line x1="544" y1="122" x2="572" y2="122" stroke="#48BB78" stroke-width="0.8"/>' +
    '<line x1="544" y1="130" x2="572" y2="130" stroke="#48BB78" stroke-width="0.8"/>' +
    '<text x="558" y="160" text-anchor="middle" fill="#9AE6B4" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="700">NVL72 RACKS</text>' +
    '<text x="558" y="174" text-anchor="middle" fill="#A0AEC0" font-family="Inter, system-ui, sans-serif" font-size="9">72 GPUs · liquid loop</text>' +
    '</g>' +
    '<line x1="610" y1="130" x2="626" y2="130" stroke="#FFB347" stroke-width="1.6" marker-end="url(#aifArrow)"/>' +
    '<g><rect x="630" y="80" width="100" height="100" rx="8" fill="rgba(246,173,85,0.08)" stroke="#F6AD55" stroke-width="1.4"/>' +
    '<g fill="#F6AD55"><circle cx="666" cy="106" r="3"/><circle cx="694" cy="106" r="3"/><circle cx="666" cy="134" r="3"/><circle cx="694" cy="134" r="3"/><circle cx="680" cy="120" r="3"/></g>' +
    '<g stroke="#F6AD55" stroke-width="0.7" opacity="0.7"><line x1="666" y1="106" x2="694" y2="106"/><line x1="666" y1="134" x2="694" y2="134"/><line x1="666" y1="106" x2="666" y2="134"/><line x1="694" y1="106" x2="694" y2="134"/><line x1="666" y1="106" x2="694" y2="134"/><line x1="694" y1="106" x2="666" y2="134"/><line x1="666" y1="106" x2="680" y2="120"/><line x1="680" y1="120" x2="694" y2="134"/></g>' +
    '<text x="680" y="160" text-anchor="middle" fill="#FBD38D" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="700">NETWORKING</text>' +
    '<text x="680" y="174" text-anchor="middle" fill="#A0AEC0" font-family="Inter, system-ui, sans-serif" font-size="9">InfiniBand · Spectrum-X</text>' +
    '</g>' +
    '<line x1="732" y1="130" x2="748" y2="130" stroke="#FFB347" stroke-width="1.6" marker-end="url(#aifArrow)"/>' +
    '<g><rect x="752" y="80" width="100" height="100" rx="8" fill="rgba(255,179,71,0.08)" stroke="#FFB347" stroke-width="1.4"/>' +
    '<text x="802" y="128" text-anchor="middle" fill="#FFB347" font-family="Inter, system-ui, sans-serif" font-size="22" font-weight="800">{ }</text>' +
    '<text x="802" y="160" text-anchor="middle" fill="#FFB347" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="700">TOKENS</text>' +
    '<text x="802" y="174" text-anchor="middle" fill="#A0AEC0" font-family="Inter, system-ui, sans-serif" font-size="9">model output</text>' +
    '</g>' +
    '<text x="440" y="220" text-anchor="middle" fill="#A0AEC0" font-family="Inter, system-ui, sans-serif" font-size="11" font-style="italic">A power and cooling envelope first. A server hall second.</text>' +
    '<text x="440" y="240" text-anchor="middle" fill="#FFB347" font-family="Inter, system-ui, sans-serif" font-size="10" font-weight="600">Each stage gates the next — power is the long-pole constraint.</text>' +
    '<g font-family="Inter, system-ui, sans-serif" font-size="9" fill="#A0AEC0">' +
    '<text x="70" y="278" text-anchor="middle">years</text>' +
    '<text x="192" y="278" text-anchor="middle">months</text>' +
    '<text x="314" y="278" text-anchor="middle">months</text>' +
    '<text x="436" y="278" text-anchor="middle">months</text>' +
    '<text x="558" y="278" text-anchor="middle">~weeks</text>' +
    '<text x="680" y="278" text-anchor="middle">days</text>' +
    '<text x="802" y="278" text-anchor="middle">ms</text>' +
    '<text x="20" y="298" fill="#FFB347" font-weight="700">LEAD TIME</text>' +
    '</g>' +
    '</svg>',

  "anatomy-quantum": '<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" class="atlas-svg-diagram" role="img" aria-label="Quantum-classical hybrid loop: QPU exchanges samples with a GPU cluster running CUDA-Q over NVQLink">' +
    '<defs>' +
    '<marker id="qmRight" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#B794F4"/></marker>' +
    '<marker id="qmLeft" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#4FD1C5"/></marker>' +
    '</defs>' +
    '<text x="360" y="22" text-anchor="middle" fill="#FFB347" font-family="Inter, system-ui, sans-serif" font-size="13" font-weight="700" letter-spacing="0.06em">QUANTUM ↔ CLASSICAL HYBRID LOOP</text>' +
    '<g><rect x="40" y="60" width="200" height="180" rx="10" fill="rgba(183,148,244,0.08)" stroke="#B794F4" stroke-width="1.4"/>' +
    '<text x="140" y="84" text-anchor="middle" fill="#D6BCFA" font-family="Inter, system-ui, sans-serif" font-size="13" font-weight="700">QPU</text>' +
    '<text x="140" y="100" text-anchor="middle" fill="#B794F4" font-family="Inter, system-ui, sans-serif" font-size="10">quantum processor</text>' +
    '<g stroke="#9F7AEA" stroke-width="0.6" opacity="0.5"><line x1="65" y1="125" x2="85" y2="145"/><line x1="105" y1="125" x2="125" y2="145"/><line x1="145" y1="125" x2="165" y2="145"/><line x1="185" y1="125" x2="205" y2="145"/><line x1="85" y1="165" x2="105" y2="185"/><line x1="125" y1="165" x2="145" y2="185"/><line x1="165" y1="165" x2="185" y2="185"/><line x1="65" y1="185" x2="85" y2="205"/><line x1="105" y1="185" x2="125" y2="205"/><line x1="145" y1="185" x2="165" y2="205"/><line x1="185" y1="185" x2="205" y2="205"/></g>' +
    '<g fill="#D6BCFA">' +
    '<circle cx="65" cy="125" r="3.5"/><circle cx="85" cy="125" r="3.5"/><circle cx="105" cy="125" r="3.5"/><circle cx="125" cy="125" r="3.5"/><circle cx="145" cy="125" r="3.5"/><circle cx="165" cy="125" r="3.5"/><circle cx="185" cy="125" r="3.5"/><circle cx="205" cy="125" r="3.5"/>' +
    '<circle cx="65" cy="145" r="3.5"/><circle cx="85" cy="145" r="3.5"/><circle cx="105" cy="145" r="3.5"/><circle cx="125" cy="145" r="3.5"/><circle cx="145" cy="145" r="3.5"/><circle cx="165" cy="145" r="3.5"/><circle cx="185" cy="145" r="3.5"/><circle cx="205" cy="145" r="3.5"/>' +
    '<circle cx="65" cy="165" r="3.5"/><circle cx="85" cy="165" r="3.5"/><circle cx="105" cy="165" r="3.5"/><circle cx="125" cy="165" r="3.5"/><circle cx="145" cy="165" r="3.5"/><circle cx="165" cy="165" r="3.5"/><circle cx="185" cy="165" r="3.5"/><circle cx="205" cy="165" r="3.5"/>' +
    '<circle cx="65" cy="185" r="3.5"/><circle cx="85" cy="185" r="3.5"/><circle cx="105" cy="185" r="3.5"/><circle cx="125" cy="185" r="3.5"/><circle cx="145" cy="185" r="3.5"/><circle cx="165" cy="185" r="3.5"/><circle cx="185" cy="185" r="3.5"/><circle cx="205" cy="185" r="3.5"/>' +
    '<circle cx="65" cy="205" r="3.5"/><circle cx="85" cy="205" r="3.5"/><circle cx="105" cy="205" r="3.5"/><circle cx="125" cy="205" r="3.5"/><circle cx="145" cy="205" r="3.5"/><circle cx="165" cy="205" r="3.5"/><circle cx="185" cy="205" r="3.5"/><circle cx="205" cy="205" r="3.5"/>' +
    '</g>' +
    '<text x="140" y="232" text-anchor="middle" fill="#B794F4" font-family="Inter, system-ui, sans-serif" font-size="9">runs the quantum subroutine</text>' +
    '</g>' +
    '<g><text x="360" y="100" text-anchor="middle" fill="#FFB347" font-family="Inter, system-ui, sans-serif" font-size="12" font-weight="700">NVQLink</text>' +
    '<text x="360" y="116" text-anchor="middle" fill="#A0AEC0" font-family="Inter, system-ui, sans-serif" font-size="9">low-latency hybrid link</text>' +
    '<path d="M 240 145 L 480 145" stroke="#B794F4" stroke-width="2.5" marker-end="url(#qmRight)"/>' +
    '<text x="360" y="138" text-anchor="middle" fill="#D6BCFA" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="600">samples →</text>' +
    '<path d="M 480 175 L 240 175" stroke="#4FD1C5" stroke-width="2.5" marker-end="url(#qmLeft)"/>' +
    '<text x="360" y="194" text-anchor="middle" fill="#81E6D9" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="600">← parameters · pulses</text>' +
    '</g>' +
    '<g><rect x="480" y="60" width="200" height="180" rx="10" fill="rgba(72,187,120,0.08)" stroke="#48BB78" stroke-width="1.4"/>' +
    '<text x="580" y="84" text-anchor="middle" fill="#9AE6B4" font-family="Inter, system-ui, sans-serif" font-size="13" font-weight="700">GPU CLUSTER</text>' +
    '<text x="580" y="100" text-anchor="middle" fill="#48BB78" font-family="Inter, system-ui, sans-serif" font-size="10">CUDA-Q runtime</text>' +
    '<rect x="510" y="120" width="140" height="14" fill="#0F4D2A" stroke="#48BB78" stroke-width="0.8"/><text x="580" y="131" text-anchor="middle" fill="#9AE6B4" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="600">simulation</text>' +
    '<rect x="510" y="138" width="140" height="14" fill="#0F4D2A" stroke="#48BB78" stroke-width="0.8"/><text x="580" y="149" text-anchor="middle" fill="#9AE6B4" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="600">error decoding</text>' +
    '<rect x="510" y="156" width="140" height="14" fill="#0F4D2A" stroke="#48BB78" stroke-width="0.8"/><text x="580" y="167" text-anchor="middle" fill="#9AE6B4" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="600">orchestration</text>' +
    '<rect x="510" y="174" width="140" height="14" fill="#0F4D2A" stroke="#48BB78" stroke-width="0.8"/><text x="580" y="185" text-anchor="middle" fill="#9AE6B4" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="600">classical compute</text>' +
    '<rect x="510" y="192" width="140" height="14" fill="#0F4D2A" stroke="#48BB78" stroke-width="0.8"/><text x="580" y="203" text-anchor="middle" fill="#9AE6B4" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="600">parameter update</text>' +
    '<text x="580" y="232" text-anchor="middle" fill="#48BB78" font-family="Inter, system-ui, sans-serif" font-size="9">runs CUDA-Q hybrid program</text>' +
    '</g>' +
    '<g><path d="M 140 260 Q 140 300, 360 300 Q 580 300, 580 260" fill="none" stroke="#FFB347" stroke-width="1.6" stroke-dasharray="4 3"/>' +
    '<text x="360" y="290" text-anchor="middle" fill="#FFB347" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="0.06em">CUDA-Q HYBRID LOOP</text>' +
    '</g>' +
    '<text x="360" y="338" text-anchor="middle" fill="#A0AEC0" font-family="Inter, system-ui, sans-serif" font-size="10" font-style="italic">Classical orchestrates · QPU is a co-processor · result returns to user</text>' +
    '</svg>'
};

/* QUESTION_DIAGRAMS — map question id → anatomy id, so a question panel can
   reuse the matching SVG. */
var QUESTION_DIAGRAMS = {
  "q-cowos": "anatomy-cowos",
  "q-cowos-constrained": "anatomy-cowos",
  "q-hbm-stack": "anatomy-hbm-stack",
  "q-hbm3e-vs-hbm4": "anatomy-hbm-stack",
  "q-memory-bandwidth": "anatomy-hbm-stack",
  "q-rack-scale-different": "anatomy-gb200-nvl72",
  "q-nvlink-importance": "anatomy-gb200-nvl72",
  "q-liquid-cooling": "anatomy-gb200-nvl72",
  "q-ai-factory": "anatomy-ai-factory",
  "q-power-bound": "anatomy-ai-factory",
  "q-quantum-stack": "anatomy-quantum",
  "q-quantum-error-correction": "anatomy-quantum"
};

/* ============================================
   TIMELINE — “The stack is moving”

   Six tracks, each with a small number of representative events. The UI
   renders these as parallel rows so the reader can see how the whole
   system advances together.
   ============================================ */
var TIMELINE_TRACKS = [
  {
    id: "tl-gpu", label: "NVIDIA GPU architecture",
    events: [
      { era: "2017", name: "Volta",          why: "Introduced Tensor Cores. AI training accelerator era begins." },
      { era: "2020", name: "Ampere",         why: "A100 became the first AI mega-cycle workhorse.",   ref: "node:hopper" },
      { era: "2022", name: "Hopper",         why: "Transformer Engine and FP8. Generative-AI era.",   ref: "node:hopper" },
      { era: "2024", name: "Blackwell",      why: "Two-die GPU; FP4. Trillion-parameter scale.",       ref: "node:blackwell" },
      { era: "2025", name: "Blackwell Ultra",why: "Higher-performance Blackwell variant.",             ref: "node:blackwell-ultra" },
      { era: "2026+",name: "Rubin",          why: "Next architecture. HBM4 and advanced packaging.",   ref: "node:rubin" }
    ]
  },
  {
    id: "tl-mem", label: "Memory",
    events: [
      { era: "2017",  name: "HBM2" },
      { era: "2019",  name: "HBM2E" },
      { era: "2022",  name: "HBM3" },
      { era: "2024",  name: "HBM3E", ref: "node:hbm3e" },
      { era: "2025+", name: "HBM4",  ref: "node:hbm4" }
    ]
  },
  {
    id: "tl-pkg", label: "Packaging",
    events: [
      { era: "2016+", name: "CoWoS-S",     why: "TSMC's first widely deployed 2.5D packaging." },
      { era: "2023+", name: "CoWoS-L",     why: "Larger interposers; supports more HBM stacks." },
      { era: "2024+", name: "3DFabric / SoIC", why: "True 3D die stacking enters mainstream roadmaps.", ref: "node:3dfabric" }
    ]
  },
  {
    id: "tl-dc", label: "Data center compute",
    events: [
      { era: "2010s", name: "GPU servers",       why: "Single-server GPU acceleration for HPC." },
      { era: "2017+", name: "DGX / HGX",         why: "Vendor-integrated multi-GPU systems.", ref: "node:dgx" },
      { era: "2024",  name: "GB200 NVL72",       why: "First widely deployed rack-scale AI system.", ref: "node:gb200-nvl72" },
      { era: "2025",  name: "GB300 NVL72",       why: "Higher-performance NVL72.", ref: "node:gb300-nvl72" },
      { era: "2026+", name: "Vera Rubin NVL72",  why: "Next NVL72 generation.", ref: "node:vera-rubin-nvl72" }
    ]
  },
  {
    id: "tl-sw", label: "Software",
    events: [
      { era: "2007",  name: "CUDA",          why: "The original parallel computing platform.", ref: "node:cuda" },
      { era: "2010s", name: "CUDA-X libraries", ref: "node:cuda-x" },
      { era: "2017+", name: "TensorRT",      why: "Inference compiler.", ref: "node:tensorrt" },
      { era: "2018+", name: "Triton",        why: "Inference serving.", ref: "node:triton-inference" },
      { era: "2023+", name: "NIM / NeMo / AI Enterprise", why: "Productized stack.", ref: "node:ai-enterprise" },
      { era: "2024+", name: "CUDA-Q",        why: "Hybrid quantum-classical programming.", ref: "node:cuda-q" }
    ]
  },
  {
    id: "tl-q", label: "Quantum",
    events: [
      { era: "2010s", name: "GPU-based quantum simulation", why: "Classical simulation of small quantum systems." },
      { era: "2020s", name: "Hybrid workflows",             why: "Variational and hybrid algorithms emerge." },
      { era: "2024+", name: "NVQLink",                       why: "Direct QPU ↔ GPU cluster integration.", ref: "node:nvqlink" },
      { era: "2025+", name: "Logical qubit milestones",     why: "First error-corrected logical qubit demos at useful sizes." },
      { era: "TBD",   name: "Fault-tolerant systems",        why: "Open R&D problem with chemistry and optimization payoffs." }
    ]
  }
];

/* ============================================
   COMPARE PRESETS — quick A vs B starters

   Used by the Compare panel as suggested matchups.
   ============================================ */
var COMPARE_PRESETS = [
  { left: "company:tsmc",          right: "company:samsung-foundry", label: "TSMC vs Samsung Foundry" },
  { left: "company:sk-hynix",      right: "company:micron",          label: "SK hynix vs Micron" },
  { left: "company:asml",          right: "company:applied-materials", label: "ASML vs Applied Materials" },
  { left: "company:azure",         right: "company:coreweave",       label: "Azure vs CoreWeave" },
  { left: "node:gb200",            right: "node:gb300",              label: "GB200 vs GB300" },
  { left: "node:cuda",             right: "node:hyperscaler-asics",  label: "CUDA vs hyperscaler ASICs" },
  { left: "node:quantum-ib",       right: "node:spectrum-x",         label: "InfiniBand vs Spectrum-X" }
];

/* ============================================
   CLAIM CONFIDENCE RULES — definitions of how the atlas labels claims
   ============================================ */
var CLAIM_CONFIDENCE_RULES = {
  sourced:           "Directly supported by cited official, filing, product documentation or credible primary source.",
  inferred:          "Reasoned from multiple sourced facts; not directly stated in one source.",
  context:           "Industry context that should not be treated as a hard claim.",
  forwardLooking:    "Roadmap, expected product adoption, or future-state claim.",
  needsVerification: "Plausible but not yet sufficiently sourced; do not present strongly until verified."
};

/* ============================================
   ACCURACY ISSUES — Editorial audit log

   Every meaningful claim in the atlas is reviewed against the rules
   above. This list captures what was checked, what was tightened, and
   what is still flagged for future verification. It is rendered in the
   Sources section so readers can see the editorial process.

   Status keys: fixed | tightened | kept-with-confidence | needs-review
   Severity:    low | medium | high
   ============================================ */
var ACCURACY_ISSUES = [
  /* ── Foundry & equipment ── */
  {
    id: "iss-tsmc-pkg-superlative", entityRef: "company:tsmc", field: "whatTheyDo",
    originalClaim: "operates the world's most advanced 2.5D and 3D packaging via its 3DFabric platform",
    issue: "Superlative ('world's most advanced') is industry shorthand but not directly source-backed at this granularity.",
    severity: "medium",
    recommendation: "Reframe as 'industry-leading' or 'currently the highest-volume advanced packaging in production' &mdash; both are accurate and source-backed.",
    status: "tightened"
  },
  {
    id: "iss-tsmc-smic", entityRef: "company:tsmc", field: "competitors",
    originalClaim: "SMIC (constrained)",
    issue: "Lacks specificity about why SMIC is constrained.",
    severity: "low",
    recommendation: "Phrase as 'SMIC (export-controlled at the leading edge)' to make the constraint explicit.",
    status: "tightened"
  },
  {
    id: "iss-asml-monopoly", entityRef: "company:asml", field: "roleInStack",
    originalClaim: "Sole supplier of EUV lithography systems.",
    issue: "Strong claim; verified directly via ASML product pages and SEC filings.",
    severity: "low",
    recommendation: "Keep. Sourced.",
    status: "kept-with-confidence"
  },
  {
    id: "iss-asml-highna", entityRef: "product:p-asml-high-na", field: "whyItMatters",
    originalClaim: "Intel was the first publicly disclosed customer.",
    issue: "Verified via Intel and ASML press materials announcing EXE delivery.",
    severity: "low",
    recommendation: "Keep. Sourced.",
    status: "kept-with-confidence"
  },
  {
    id: "iss-applied-mat-share", entityRef: "company:applied-materials", field: "roleInStack",
    originalClaim: "Largest US-based semiconductor equipment company.",
    issue: "Generally accepted by revenue.",
    severity: "low",
    recommendation: "Keep as market context.",
    status: "kept-with-confidence"
  },
  {
    id: "iss-eda-cadence-ip", entityRef: "company:cadence", field: "whyItMattersForAI",
    originalClaim: "Tensilica IP also appears in many edge-AI accelerators.",
    issue: "True historically but \"many\" is vague.",
    severity: "low",
    recommendation: "Acceptable as market context; verifiable on Cadence Tensilica pages.",
    status: "kept-with-confidence"
  },

  /* ── Memory ── */
  {
    id: "iss-skhynix-volume", entityRef: "company:sk-hynix", field: "relationshipToNvidia",
    originalClaim: "SK hynix has shipped HBM3 and HBM3E to NVIDIA in volume.",
    issue: "Customer-specific shipment volumes are not always publicly disclosed; phrasing risks overstating quantification.",
    severity: "medium",
    recommendation: "Reframe as 'publicly identified as a leading HBM supplier to NVIDIA's data-center GPUs, with HBM3 and HBM3E delivered for Hopper- and Blackwell-generation accelerators.'",
    status: "tightened"
  },
  {
    id: "iss-micron-qual", entityRef: "company:micron", field: "relationshipToNvidia",
    originalClaim: "Micron has publicly announced HBM3E shipments qualified for NVIDIA's H200 and Blackwell-generation GPUs.",
    issue: "Verified via Micron press releases and NVIDIA H200 announcement.",
    severity: "low",
    recommendation: "Keep. Sourced.",
    status: "kept-with-confidence"
  },
  {
    id: "iss-samsung-hbm", entityRef: "company:samsung-memory", field: "relationshipToNvidia",
    originalClaim: "The specifics of qualification at NVIDIA have been the subject of public reporting and may evolve over time.",
    issue: "Already appropriately hedged.",
    severity: "low",
    recommendation: "Keep. Hedged appropriately.",
    status: "kept-with-confidence"
  },
  {
    id: "iss-hbm4", entityRef: "node:hbm4", field: "why",
    originalClaim: "HBM4 is expected to be used in future GPU architectures to support larger AI models.",
    issue: "Forward-looking; correctly tagged.",
    severity: "low",
    recommendation: "Keep. Tagged forward-looking.",
    status: "kept-with-confidence"
  },

  /* ── Packaging ── */
  {
    id: "iss-cowos-bottleneck", entityRef: "node:cowos", field: "why",
    originalClaim: "CoWoS capacity has been one of the tightest bottlenecks in NVIDIA's supply chain.",
    issue: "Widely reported through 2023&ndash;2025 by NVIDIA disclosures and industry coverage.",
    severity: "low",
    recommendation: "Keep. Sourced via TSMC and NVIDIA materials.",
    status: "kept-with-confidence"
  },
  {
    id: "iss-amkor-nvidia", entityRef: "company:amkor", field: "relationshipToNvidia",
    originalClaim: "Provides packaging and test services across the semiconductor industry. Specific NVIDIA package allocations are not always publicly disclosed.",
    issue: "Already appropriately hedged.",
    severity: "low",
    recommendation: "Keep.",
    status: "kept-with-confidence"
  },

  /* ── NVIDIA hardware ── */
  {
    id: "iss-h100-headline", entityRef: "node:h100", field: "why",
    originalClaim: "The H100 was the GPU that powered the generative AI wave.",
    issue: "Rhetorical. H100 was central but not the only GPU in the wave; A100 and earlier Hopper variants also matter.",
    severity: "medium",
    recommendation: "Reframe as 'The H100 became the standard accelerator for the generative-AI training wave through 2023&ndash;2024.'",
    status: "tightened"
  },
  {
    id: "iss-blackwell-twodie", entityRef: "node:blackwell", field: "why",
    originalClaim: "Blackwell introduced a two-die GPU design...",
    issue: "Sourced via NVIDIA architecture announcement and whitepapers.",
    severity: "low",
    recommendation: "Keep. Sourced.",
    status: "kept-with-confidence"
  },
  {
    id: "iss-rubin", entityRef: "node:rubin", field: "why",
    originalClaim: "Rubin represents NVIDIA's roadmap continuation, designed for the next scaling step in AI compute with new memory and interconnect technologies.",
    issue: "Forward-looking; correctly tagged.",
    severity: "low",
    recommendation: "Keep. Tagged forward-looking.",
    status: "kept-with-confidence"
  },
  {
    id: "iss-gb200-power", entityRef: "bottleneck:power", field: "what",
    originalClaim: "A single GB200 NVL72 rack consumes approximately 120 kW.",
    issue: "Sourced via NVIDIA GB200 NVL72 product materials.",
    severity: "low",
    recommendation: "Keep. Sourced.",
    status: "kept-with-confidence"
  },

  /* ── Cloud & deployment ── */
  {
    id: "iss-azure-gb300", entityRef: "company:azure", field: "relationshipToNvidia",
    originalClaim: "Has publicly announced first-at-scale GB300 NVL72 deployments for OpenAI workloads.",
    issue: "Sourced via Microsoft Azure blog post.",
    severity: "low",
    recommendation: "Keep. Sourced.",
    status: "kept-with-confidence"
  },
  {
    id: "iss-aws-trainium", entityRef: "company:aws", field: "relationshipToNvidia",
    originalClaim: "AWS is both a major NVIDIA cloud customer (P-series instances, including P6 with B200/B300) and a competitor through its in-house Trainium and Inferentia chips.",
    issue: "Sourced via AWS instance documentation.",
    severity: "low",
    recommendation: "Keep. Sourced.",
    status: "kept-with-confidence"
  },
  {
    id: "iss-coreweave-claim", entityRef: "company:coreweave", field: "relationshipToNvidia",
    originalClaim: "Long-standing close relationship with NVIDIA. CoreWeave is consistently among the early commercial deployers of new NVIDIA platforms.",
    issue: "Generally accepted via public CoreWeave-NVIDIA materials and earnings disclosures.",
    severity: "low",
    recommendation: "Keep as market context.",
    status: "kept-with-confidence"
  },
  {
    id: "iss-oci-large", entityRef: "company:oracle-cloud", field: "relationshipToNvidia",
    originalClaim: "Oracle has made very large public commitments to NVIDIA GPU infrastructure across multiple regions.",
    issue: "Sourced via Oracle public statements; specific volumes vary.",
    severity: "low",
    recommendation: "Keep, but the word 'very large' could be replaced with 'multi-billion-dollar' once a public number is cited; for now, keep generic.",
    status: "kept-with-confidence"
  },
  {
    id: "iss-foxconn-share", entityRef: "company:foxconn", field: "explainLikeImNew",
    originalClaim: "Most NVIDIA AI servers leave the supply chain through facilities like theirs.",
    issue: "Strong implied share. Multiple ODMs (Foxconn, Quanta, Wistron, Inventec, Wiwynn) build NVIDIA systems and exact share is not public.",
    severity: "medium",
    recommendation: "Reframe as 'A large share of NVIDIA-based AI server systems is assembled by Foxconn alongside the other top ODMs.'",
    status: "tightened"
  },
  {
    id: "iss-supermicro-first", entityRef: "company:supermicro", field: "whyItMattersForAI",
    originalClaim: "Supermicro is often first to ship new NVIDIA platforms in volume.",
    issue: "Generally accepted via public product launches and industry reporting.",
    severity: "low",
    recommendation: "Keep as market context.",
    status: "kept-with-confidence"
  },

  /* ── Power, grid, cooling ── */
  {
    id: "iss-constellation-tmi", entityRef: "company:constellation-energy", field: "relationshipToNvidia",
    originalClaim: "Publicly announced power-purchase agreements with hyperscalers, including the Three Mile Island restart for Microsoft.",
    issue: "Sourced via Constellation and Microsoft 2024 announcement.",
    severity: "low",
    recommendation: "Keep. Sourced.",
    status: "kept-with-confidence"
  },
  {
    id: "iss-nextera-largest", entityRef: "company:nextera", field: "roleInStack",
    originalClaim: "Largest US generator of wind and solar electricity.",
    issue: "Generally accepted; verified via NextEra disclosures.",
    severity: "low",
    recommendation: "Keep.",
    status: "kept-with-confidence"
  },
  {
    id: "iss-nextera-ai-ppa", entityRef: "company:nextera", field: "relationshipToNvidia",
    originalClaim: "Supplies renewable electricity under PPA to data centers running AI workloads.",
    issue: "Slightly stronger than minimum sourced. The specific AI-attribution of NextEra PPAs is sometimes inferred.",
    severity: "low",
    recommendation: "Reframe as 'Supplies renewable electricity under PPA to large industrial customers, including data center developers serving AI workloads.'",
    status: "tightened"
  },
  {
    id: "iss-vertiv-partner", entityRef: "company:vertiv", field: "relationshipToNvidia",
    originalClaim: "Vertiv has publicly partnered with NVIDIA on reference designs for AI factories...",
    issue: "Sourced via Vertiv and NVIDIA reference architecture announcements.",
    severity: "low",
    recommendation: "Keep. Sourced.",
    status: "kept-with-confidence"
  },
  {
    id: "iss-schneider-partner", entityRef: "company:schneider", field: "relationshipToNvidia",
    originalClaim: "Schneider has publicly partnered with NVIDIA on reference data center designs...",
    issue: "Sourced via Schneider Electric and NVIDIA partnership announcements.",
    severity: "low",
    recommendation: "Keep. Sourced.",
    status: "kept-with-confidence"
  },
  {
    id: "iss-eaton-partner", entityRef: "company:eaton", field: "relationshipToNvidia",
    originalClaim: "Has publicly discussed partnerships and reference architectures with NVIDIA-aligned designs.",
    issue: "Already appropriately hedged.",
    severity: "low",
    recommendation: "Keep.",
    status: "kept-with-confidence"
  },

  /* ── Quantum ── */
  {
    id: "iss-quantinuum-logical", entityRef: "company:quantinuum", field: "whyItMattersForAI",
    originalClaim: "Quantinuum's logical qubit work is one of the strongest indicators of how close quantum is to practical advantage.",
    issue: "Sourced via Quantinuum and Microsoft published research; tagged forward-looking is appropriate.",
    severity: "medium",
    recommendation: "Keep as inferred. Confidence pill: forward-looking when surfaced.",
    status: "kept-with-confidence"
  },
  {
    id: "iss-psi-fab", entityRef: "company:psiquantum", field: "relationshipToNvidia",
    originalClaim: "PsiQuantum's foundry-based approach could change the manufacturing economics of quantum computing if it succeeds.",
    issue: "Forward-looking. Tag accordingly.",
    severity: "medium",
    recommendation: "Keep as forward-looking.",
    status: "kept-with-confidence"
  },
  {
    id: "iss-qec-claim", entityRef: "node:quantum-error-correction", field: "why",
    originalClaim: "Without effective error correction, quantum computers cannot run the deep circuits needed for practical advantage.",
    issue: "Forward-looking and uncontroversial in research community.",
    severity: "low",
    recommendation: "Keep. Tagged forward-looking.",
    status: "kept-with-confidence"
  },

  /* ── Strategic concepts ── */
  {
    id: "iss-cuda-decades", entityRef: "node:cuda", field: "why",
    originalClaim: "Decades of libraries...",
    issue: "CUDA was first released in 2007, so the duration is approaching but not strictly two decades.",
    severity: "low",
    recommendation: "Keep 'decades' colloquially or hedge to 'nearly two decades'. Either works.",
    status: "kept-with-confidence"
  },
  {
    id: "iss-cuda-moat", entityRef: "node:cuda-lock-in", field: "why",
    originalClaim: "CUDA lock-in is both NVIDIA's greatest strategic asset and the primary motivation for alternative platforms.",
    issue: "Editorial / inferred. Surface accordingly.",
    severity: "low",
    recommendation: "Keep, label as inferred when shown in profile.",
    status: "kept-with-confidence"
  },
  {
    id: "iss-aif-framing", entityRef: "node:ai-factory", field: "why",
    originalClaim: "An AI factory converts electricity into tokens, embeddings, actions and simulations.",
    issue: "This is NVIDIA's editorial framing, not a sourced industry definition.",
    severity: "low",
    recommendation: "Keep as the takeaway line; flag as inferred (NVIDIA framing) in confidence label.",
    status: "kept-with-confidence"
  },
  {
    id: "iss-counts-hardcoded", entityRef: "ui:disclosures", field: "labels",
    originalClaim: "View all 73 companies / View all 75 products",
    issue: "Counts were hardcoded in the markup and could drift from the data.",
    severity: "medium",
    recommendation: "Compute counts at runtime from COMPANY_PROFILES and PRODUCT_PROFILES.",
    status: "fixed"
  }
];

/* ============================================
   QUESTION_BANK — Editorial Q&A with depth

   Schema (per entry):
     id, question, audience, category, difficulty,
     shortAnswer       — one or two sentences for card preview
     detailedAnswer    — array of paragraph strings for the expanded view
     flow              — array of step strings showing causality, rendered as chevrons
     mentalModel       — analogy that makes the idea stick
     commonMisunderstanding — specific incorrect belief worth correcting
     whyItMatters      — one or two sentences on consequence
     relatedEntities   — typed refs (company:, node:, product:, scenario:, path:)
     relatedQuestions  — IDs of other Q&A entries for navigation
     sourceIds         — IDs from SOURCES
     confidence        — sourced | inferred | context | forwardLooking
   ============================================ */
var QUESTION_BANK = [

  /* ── Supply chain mechanics ─────────────── */
  {
    id: "q-how-gpu-made",
    question: "How is an NVIDIA GPU actually made?",
    audience: "beginner", category: "Supply chain", difficulty: "Beginner",
    shortAnswer: "Designed in California, fabricated by TSMC in Taiwan, packaged with HBM via CoWoS, assembled into a rack by an ODM, deployed by a cloud.",
    detailedAnswer: [
      "NVIDIA designs the chip. The blueprint goes to TSMC in Taiwan, where ASML's EUV systems are used to print the transistors at TSMC's most advanced nodes (4nm-class for Blackwell today, with N3 and N2 ahead).",
      "The fabricated GPU dies don't ship alone. They go to TSMC's CoWoS packaging line, where multiple HBM stacks (from SK hynix, Micron or Samsung) are placed on a silicon interposer alongside the GPU die. The whole assembly is mounted on an organic substrate.",
      "The packaged accelerator ships to an ODM (Foxconn, Quanta, Wistron, Wiwynn) or an OEM (Supermicro, Dell, HPE), which builds the surrounding HGX baseboard or full GB200 NVL72 rack &mdash; including liquid cooling, networking and power systems.",
      "The finished system reaches a cloud provider (Azure, AWS, GCP, Oracle, CoreWeave) or a sovereign AI program. Months may have passed between the wafer leaving the fab and a customer renting that GPU instance."
    ],
    flow: ["NVIDIA chip design", "ASML EUV at TSMC", "TSMC fabricates GPU silicon", "HBM attached via CoWoS", "ODM assembles into HGX or NVL72", "Cloud or sovereign AI deploys", "Customer rents capacity"],
    mentalModel: "Building a luxury car. NVIDIA designs the engine; TSMC casts the engine block and assembles the powertrain; an ODM bolts it into the chassis; a cloud sells you a ride.",
    commonMisunderstanding: "NVIDIA doesn't make their own chips. NVIDIA is fabless &mdash; they design; TSMC manufactures.",
    whyItMatters: "A bottleneck at any single stage (lithography, fabrication, packaging, assembly, power) flows through to GPU availability and pricing.",
    relatedEntities: ["company:tsmc", "company:asml", "company:sk-hynix", "node:cowos", "node:hbm3e", "company:foxconn", "company:azure"],
    relatedQuestions: ["q-tsmc-spof", "q-cowos", "q-asml-importance"],
    sourceIds: ["src-nvidia-dc", "src-tsmc-cowos", "src-asml-euv"],
    confidence: "sourced"
  },
  {
    id: "q-tsmc-spof",
    question: "Why is TSMC a single point of failure for AI silicon?",
    audience: "investor", category: "Supply chain risk", difficulty: "Intermediate",
    shortAnswer: "Because every leading-edge AI accelerator currently shipping at scale is fabricated AND packaged at TSMC.",
    detailedAnswer: [
      "NVIDIA's Hopper, Blackwell and the upcoming Rubin generations are designed by NVIDIA but manufactured by TSMC at advanced process nodes (4nm-class today, N3 and N2 ahead).",
      "The same TSMC fabs operate CoWoS &mdash; the 2.5D packaging that joins GPU dies to HBM stacks. So the dependency isn't at one step (fabrication); it's at two consecutive steps (fabrication + packaging).",
      "Until Samsung Foundry or Intel Foundry execute on the leading edge at volume and pass customer qualification, the industry's leading-edge AI silicon supply moves through one company &mdash; and through one geography.",
      "This concentration is the most-discussed structural risk in the AI infrastructure economy. It drives sovereign-fab investment, US/EU CHIPS programs and customer hedging strategies, but those moves take a decade-class horizon to play out."
    ],
    flow: ["AI accelerator demand", "TSMC leading-edge logic", "TSMC CoWoS packaging", "Both concentrated in Taiwan", "Customer hedging via Samsung / Intel Foundry (slow)"],
    mentalModel: "If all the world's commercial airframes came from one factory in one country, a strike at that factory would ground global aviation. That's TSMC for AI silicon today.",
    commonMisunderstanding: "Samsung will catch up soon. Samsung's foundry execution at GAA nodes has been mixed; even strong execution would take years to reach volume parity at the leading edge.",
    whyItMatters: "Geopolitical events, natural disasters or capacity misses ripple through every leading-edge AI chip on the market.",
    relatedEntities: ["company:tsmc", "node:supply-chain-concentration", "scenario:s-tsmc", "company:samsung-foundry", "company:intel-foundry"],
    relatedQuestions: ["q-how-gpu-made", "q-cowos", "q-asml-importance"],
    sourceIds: ["src-tsmc-cowos", "src-tsmc-3df"],
    confidence: "sourced"
  },
  {
    id: "q-cowos",
    question: "What does CoWoS actually do?",
    audience: "beginner", category: "Packaging", difficulty: "Beginner",
    shortAnswer: "CoWoS is the TSMC packaging step that turns separate GPU and HBM dies into one usable accelerator.",
    detailedAnswer: [
      "Chip-on-Wafer-on-Substrate is a 2.5D packaging technology. A silicon interposer carries thousands of micro-connections between the GPU die and adjacent HBM stacks; the whole assembly sits on an organic substrate that connects it to the system board.",
      "Without CoWoS (or comparable advanced packaging), HBM cannot deliver its bandwidth to the GPU. The two dies need to be physically and electrically close.",
      "CoWoS is therefore both a technical enabler and a binding capacity constraint. Adding capacity means new clean rooms and bonding tools &mdash; lead time measured in years."
    ],
    flow: ["GPU die from TSMC", "HBM stacks from SK hynix / Micron / Samsung", "Silicon interposer", "Microbumps + bonding", "Organic substrate beneath", "Finished CoWoS package"],
    mentalModel: "If the GPU and HBM are two cities, CoWoS is the highway system between them &mdash; and there's only one highway company.",
    commonMisunderstanding: "CoWoS is not a chip. It is a 2.5D packaging step. People sometimes describe HBM bandwidth as if it just exists; it doesn't, without something like CoWoS to deliver it.",
    whyItMatters: "CoWoS capacity has been a binding constraint on NVIDIA accelerator supply through multiple cycles. Allocations from TSMC have direct revenue consequences.",
    relatedEntities: ["node:cowos", "node:3dfabric", "node:silicon-interposer", "scenario:s-cowos", "company:tsmc"],
    relatedQuestions: ["q-hbm-stack", "q-tsmc-spof", "q-how-gpu-made"],
    sourceIds: ["src-tsmc-cowos", "src-tsmc-3df"],
    confidence: "sourced"
  },
  {
    id: "q-hbm-stack",
    question: "What is HBM and why is it the bottleneck?",
    audience: "beginner", category: "Memory", difficulty: "Beginner",
    shortAnswer: "Stacked DRAM wired through silicon, sitting next to the GPU die. Three companies make it; advanced packaging caps how much can ship.",
    detailedAnswer: [
      "Modern AI accelerators are memory-bandwidth limited far more than they are compute-limited. HBM solves that by stacking DRAM dies vertically and connecting them with through-silicon vias (TSVs), then attaching the stacks directly to the GPU package via CoWoS.",
      "Only SK hynix, Micron and Samsung make HBM at volume. The same advanced packaging capacity that integrates HBM with GPUs is itself constrained, which compounds the bottleneck.",
      "HBM is a physical artifact: each stack is a multi-die chip with TSVs, sold by the stack and qualified per-customer. Customer-specific qualification cycles (especially at Samsung) have been a recurring story of the AI cycle."
    ],
    flow: ["DRAM dies fabricated", "Stacked vertically with TSVs", "Base die handles HBM controller interface", "Stacks placed on interposer alongside GPU", "Bonded into CoWoS package"],
    mentalModel: "Imagine a desk: the GPU is the worker, regular system memory is filing cabinets in another room, HBM is the open files stacked right next to the worker's hands.",
    commonMisunderstanding: "HBM is not 'faster regular RAM.' It is a different physical product &mdash; stacked dies bonded directly to the GPU package. The point is bandwidth and proximity, not raw capacity.",
    whyItMatters: "When HBM ramps slip, GPU ship volumes slip. The ratio is roughly 1:1 because every modern AI GPU package needs multiple HBM stacks.",
    relatedEntities: ["node:hbm3e", "node:hbm4", "node:cowos", "scenario:s-hbm", "company:sk-hynix"],
    relatedQuestions: ["q-cowos", "q-memory-bandwidth", "q-hbm3e-vs-hbm4"],
    sourceIds: ["src-micron-hbm3e", "src-micron-hbm4", "src-samsung-hbm4"],
    confidence: "sourced"
  },
  {
    id: "q-asml-importance",
    question: "Why is ASML the most important company most people have never heard of?",
    audience: "investor", category: "Upstream", difficulty: "Beginner",
    shortAnswer: "Because ASML is the sole supplier of EUV lithography &mdash; the equipment without which the smallest transistors cannot be printed.",
    detailedAnswer: [
      "ASML doesn't sell to NVIDIA directly. It sells multi-hundred-million-dollar EUV scanners to TSMC, Samsung and Intel, which use those scanners to manufacture chips for NVIDIA, Apple, AMD and others.",
      "Every leading-edge AI chip on the market is patterned with ASML EUV light. The supply of EUV scanners (and now High-NA EUV) directly limits how fast leading-edge capacity can grow industry-wide.",
      "ASML's machines are also a primary lever in export-control policy: restricting EUV shipments to specific markets is one of the few ways policymakers can shape the geography of advanced AI silicon."
    ],
    flow: ["ASML builds EUV scanner", "Ships to TSMC / Samsung / Intel", "Foundry uses EUV to print leading-edge transistors", "NVIDIA receives finished GPU silicon", "AI deploys"],
    mentalModel: "ASML is to chips what the printing press was to books. The product everyone buys depends on equipment only one company makes.",
    commonMisunderstanding: "ASML doesn't make chips. They make the lithography machines that make chips. The relationship to NVIDIA is upstream and indirect, not contractual.",
    whyItMatters: "ASML capacity sets a hard ceiling on how fast leading-edge AI silicon can grow. Anyone forecasting AI compute should follow ASML quarterly almost as closely as NVIDIA.",
    relatedEntities: ["company:asml", "product:p-asml-euv", "product:p-asml-high-na", "path:path-asml-ai", "company:tsmc"],
    relatedQuestions: ["q-tsmc-spof", "q-how-gpu-made", "q-export-controls"],
    sourceIds: ["src-asml-euv", "src-asml-highna"],
    confidence: "sourced"
  },

  /* ── Memory & bandwidth ─────────────────── */
  {
    id: "q-memory-bandwidth",
    question: "Why does AI care about memory bandwidth, not just memory size?",
    audience: "technical", category: "Memory", difficulty: "Intermediate",
    shortAnswer: "Because large models are memory-bandwidth bound at inference. The GPU often sits idle waiting for weights to arrive, even with plenty of HBM capacity.",
    detailedAnswer: [
      "Modern AI inference is dominated by reading model weights and activations through the GPU's compute units. If memory can't deliver data fast enough, the compute units wait. This is the bandwidth wall, and it dominates throughput for large language model inference.",
      "Adding raw memory capacity doesn't fix it; you need higher bandwidth from memory to compute. HBM stacks deliver that by bringing memory physically close to the GPU and using extremely wide channels.",
      "This is why each new HBM generation matters even when capacity changes are modest. HBM3 → HBM3E → HBM4 is more about bandwidth and packaging than gigabytes."
    ],
    flow: ["Model weights stored in HBM", "GPU cores read weights to compute", "Bandwidth limit reached before compute limit", "Throughput stalls", "More bandwidth = more tokens per second"],
    mentalModel: "Imagine a chef working at a stove with all ingredients in a giant pantry across the room. Bigger pantry doesn't help; bigger doors and faster runners do.",
    commonMisunderstanding: "More memory = faster AI. Capacity matters for what you can hold; bandwidth matters for how fast you can use it. They are different constraints.",
    whyItMatters: "It explains why memory makers (SK hynix, Micron, Samsung) are direct beneficiaries of AI capex, not just NVIDIA.",
    relatedEntities: ["node:memory-bandwidth", "node:hbm3e", "node:hbm4", "node:tokens-per-watt"],
    relatedQuestions: ["q-hbm-stack", "q-hbm3e-vs-hbm4", "q-training-vs-inference"],
    sourceIds: ["src-micron-hbm3e", "src-micron-hbm4"],
    confidence: "context"
  },
  {
    id: "q-hbm3e-vs-hbm4",
    question: "What is the difference between HBM3E and HBM4 in practice?",
    audience: "technical", category: "Memory", difficulty: "Advanced",
    shortAnswer: "HBM4 widens channels and pushes more bandwidth and capacity per stack, with a tighter relationship between memory makers and foundries on the base die.",
    detailedAnswer: [
      "HBM3E is the current high-volume generation. It is the memory bonded to NVIDIA's Blackwell-class accelerators today. SK hynix, Micron and Samsung all ship HBM3E.",
      "HBM4 expands the channel width and increases capacity per stack. Some HBM4 implementations involve a logic-base-die collaboration with a foundry (notably TSMC). That blurs the historical line between memory makers and logic foundries.",
      "Forward-looking. HBM4 is expected to feed Rubin-generation accelerators. The qualification fight at NVIDIA across the three suppliers will be one of the defining stories of the 2025&ndash;2026 generation."
    ],
    flow: ["HBM3E shipping today", "HBM4 sampling now", "Logic-base-die collaboration with foundry", "Higher bandwidth + capacity per stack", "Rubin-generation accelerators expected to use HBM4"],
    mentalModel: "Same skyscraper-of-memory idea, but with wider hallways, taller floors, and a smarter ground-floor lobby (the base die).",
    commonMisunderstanding: "HBM4 is just a faster HBM3E. It is more than a speed bump &mdash; it changes channel width, capacity and the role of the foundry partner.",
    whyItMatters: "Memory-supplier share at HBM4 will move billions of dollars of revenue between SK hynix, Samsung and Micron, and shape Rubin's launch economics.",
    relatedEntities: ["node:hbm3e", "node:hbm4", "node:rubin", "company:sk-hynix", "company:samsung-memory", "company:micron"],
    relatedQuestions: ["q-hbm-stack", "q-memory-bandwidth", "q-tsmc-spof"],
    sourceIds: ["src-micron-hbm4", "src-samsung-hbm4"],
    confidence: "forwardLooking"
  },

  /* ── Power & physical ───────────────────── */
  {
    id: "q-power-bound",
    question: "Why are AI build-outs limited by power, not capital?",
    audience: "operator", category: "Power", difficulty: "Intermediate",
    shortAnswer: "Because grid-interconnection queues, transformer lead times and large-load PPAs now move slower than data center construction schedules.",
    detailedAnswer: [
      "An AI campus needs hundreds of megawatts on a multi-year horizon. Generation, substation, transformers, switchgear, UPS and cooling all have to line up before the GPUs arrive.",
      "Grid interconnection queues in major US markets stretch into multiple years. Large transformer lead times are similarly long. Carbon-free firm-power PPAs have sent hyperscalers toward nuclear restarts and SMR investments.",
      "The IEA's 2024 'Energy and AI' analysis frames this as the new gating constraint on AI infrastructure expansion. The capital is available; the energized capacity is not."
    ],
    flow: ["Land + PPA secured", "Substation built", "Transformers + switchgear delivered", "UPS, busways, cooling installed", "GPUs racked", "Cluster commissioned"],
    mentalModel: "Building an AI campus is more like building a steel mill than buying servers. The mill's site, power, water and rail come first; the equipment second.",
    commonMisunderstanding: "Capital is the limit. Money is available; energized capacity isn't. The constraint has moved from purchase orders to permitting and grid queues.",
    whyItMatters: "Investors ignoring power and grid timing miss the actual gating risk on AI deployment.",
    relatedEntities: ["node:power-generation", "node:grid-access", "scenario:s-grid", "company:constellation-energy", "company:nextera"],
    relatedQuestions: ["q-microsoft-tmi", "q-liquid-cooling", "q-second-winners"],
    sourceIds: ["src-iea-energy"],
    confidence: "sourced"
  },
  {
    id: "q-microsoft-tmi",
    question: "Why has Microsoft restarted a nuclear plant for AI?",
    audience: "investor", category: "Power", difficulty: "Beginner",
    shortAnswer: "Because firm, carbon-free, multi-decade power at hundreds of megawatts is essentially impossible to procure any other way today.",
    detailedAnswer: [
      "Microsoft and Constellation Energy publicly announced the restart of Three Mile Island Unit 1 (renamed the Crane Clean Energy Center) under a 20-year power purchase agreement.",
      "The deal is one of the clearest signals that hyperscalers are willing to underwrite previously decommissioned nuclear capacity to secure AI-scale firm power.",
      "Other operators have committed to SMR pre-orders and to gas peaker capacity for similar reasons. The pattern is hyperscalers taking on counterparty risk in long-duration generation contracts that traditional utilities used to absorb."
    ],
    flow: ["AI workload demand surges", "Hyperscaler models multi-decade power need", "PPA negotiated with nuclear operator", "Plant restart funded", "Power flows on long-duration contract"],
    mentalModel: "When Amazon needed reliable shipping at scale, it built its own logistics. When Microsoft needs reliable firm power at scale, it restarts nuclear plants.",
    commonMisunderstanding: "The TMI restart is a political stunt or a green-marketing move. It is a multi-decade financial commitment driven by hard physics: AI campuses need firm carbon-free power that is not available another way.",
    whyItMatters: "Hyperscaler-backed nuclear restarts and SMR pre-orders are reshaping which power assets get funded over the next decade.",
    relatedEntities: ["company:constellation-energy", "node:power-generation", "scenario:s-grid", "company:azure"],
    relatedQuestions: ["q-power-bound", "q-second-winners"],
    sourceIds: [],
    confidence: "sourced"
  },
  {
    id: "q-liquid-cooling",
    question: "Why is liquid cooling now mandatory?",
    audience: "technical", category: "Cooling", difficulty: "Intermediate",
    shortAnswer: "Because GB200 NVL72-class racks dissipate roughly 120 kW per rack &mdash; far beyond what air cooling can handle.",
    detailedAnswer: [
      "Modern AI racks have moved from tens of kilowatts to over a hundred. NVIDIA's GB200 NVL72 was designed around direct liquid cooling; GB300 NVL72 raises the bar further.",
      "That has reshaped the supply chain. Cold plates, manifolds and CDUs from CoolIT, Vertiv, Boyd and Motivair (now Schneider) are now first-order dependencies, not optional extras.",
      "Data center operators are retrofitting or building greenfield facilities for liquid loops, and the construction timelines for those facilities now influence when racks can actually be commissioned."
    ],
    flow: ["GB200 NVL72 designed for liquid cooling", "Cold plates on each GPU and CPU", "Coolant runs through manifolds", "CDU pumps to facility loop", "Heat rejected externally"],
    mentalModel: "An AI rack today is closer to a small server room with its own plumbing than to the air-cooled boxes of a decade ago.",
    commonMisunderstanding: "Liquid cooling is exotic. For modern AI racks, it is the default; air cooling is the exception.",
    whyItMatters: "Cooling is now a first-order operational dependency. A site without liquid cooling cannot host current-generation NVIDIA racks regardless of how much capital it has.",
    relatedEntities: ["node:liquid-cooling-tech", "node:gb200-nvl72", "node:gb300-nvl72", "company:vertiv", "company:coolit", "scenario:s-cooling"],
    relatedQuestions: ["q-power-bound", "q-rack-scale-different"],
    sourceIds: [],
    confidence: "sourced"
  },

  /* ── Software & lock-in ─────────────────── */
  {
    id: "q-cuda-lockin",
    question: "How does CUDA actually create lock-in?",
    audience: "technical", category: "Software moat", difficulty: "Intermediate",
    shortAnswer: "By accumulating libraries, frameworks, kernels and developer mindshare for nearly two decades, CUDA has become a stack the alternatives cannot fully replicate.",
    detailedAnswer: [
      "CUDA is not just a runtime. It is a layered stack &mdash; compilers (NVCC, NVVM), primitive libraries (cuDNN, cuBLAS), domain libraries (CUDA-X), framework integrations (PyTorch, TensorFlow, JAX), profiling tools (Nsight) and a deep operator coverage built up since 2007.",
      "Every alternative accelerator program has to match not only NVIDIA's hardware but also that ecosystem. ROCm, oneAPI, OpenAI's Triton compiler and hyperscaler ASIC stacks have narrowed the gap on specific workloads.",
      "The breadth of CUDA support is what slows wholesale migration. A single workload can be rewritten; a customer's entire codebase, model zoo, debugging workflow and tooling cannot."
    ],
    flow: ["CUDA released 2007", "Decades of libraries (cuDNN, cuBLAS, CUDA-X)", "Framework hooks (PyTorch, TF, JAX)", "Tooling (Nsight, profilers)", "Customer codebases inherit dependencies", "Migration requires replicating all layers"],
    mentalModel: "CUDA is to GPUs what English is to international business. Replaceable in theory, deeply entrenched in practice.",
    commonMisunderstanding: "CUDA is just NVIDIA's programming language. The language is small; the moat is the libraries, kernels and operator coverage built around it.",
    whyItMatters: "CUDA lock-in is the most durable competitive advantage in NVIDIA's stack. Any erosion changes the economics of the whole layer.",
    relatedEntities: ["node:cuda", "node:cuda-lock-in", "node:cuda-x", "node:hyperscaler-asics", "scenario:s-cuda"],
    relatedQuestions: ["q-rocm-vs-cuda", "q-asics-replacement", "q-tensorrt-moat"],
    sourceIds: ["src-nvidia-cuda"],
    confidence: "inferred"
  },
  {
    id: "q-rocm-vs-cuda",
    question: "Why hasn't AMD's ROCm replaced CUDA?",
    audience: "technical", category: "Software moat", difficulty: "Advanced",
    shortAnswer: "Because matching CUDA on a few benchmarks is easy; matching it across two decades of operator coverage, frameworks and tooling is not.",
    detailedAnswer: [
      "AMD's ROCm has improved meaningfully and shows competitive results on certain training shapes. It is a real alternative for some inference workloads, especially at hyperscalers willing to invest in compatibility engineering.",
      "But CUDA's strength is breadth, not just performance. PyTorch, TensorFlow and JAX all have decades-deep CUDA paths. Hundreds of operator implementations, fused kernels, distribution primitives and debugging tools are CUDA-first.",
      "Migration costs include not just retraining models but rewriting custom kernels, updating CI pipelines, retraining engineering teams, and accepting risk on edge cases. For most customers, the calculus has remained unfavorable."
    ],
    flow: ["AMD MI accelerator competitive on raw FLOPS", "ROCm closes gap on benchmark workloads", "Customer codebase still depends on CUDA-only operators", "Migration cost dominates hardware savings", "Most workloads stay on NVIDIA"],
    mentalModel: "Switching from CUDA to ROCm is like translating an entire codebase from one programming language to another. Possible, occasionally worthwhile, almost never frictionless.",
    commonMisunderstanding: "ROCm 'just doesn't work.' It works for a growing set of workloads. The barrier is comprehensive coverage, not absence of capability.",
    whyItMatters: "Pace of ROCm adoption is one of the cleanest signals of how durable NVIDIA's software moat actually is.",
    relatedEntities: ["node:cuda", "node:cuda-lock-in", "node:hyperscaler-asics", "scenario:s-cuda"],
    relatedQuestions: ["q-cuda-lockin", "q-asics-replacement"],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-tensorrt-moat",
    question: "What is TensorRT and why is it part of the moat?",
    audience: "technical", category: "Software moat", difficulty: "Intermediate",
    shortAnswer: "TensorRT is NVIDIA's inference compiler. It turns a trained model into the fastest possible GPU runtime &mdash; a step competitors must replicate to match deployment economics.",
    detailedAnswer: [
      "TensorRT takes a trained model (PyTorch, TensorFlow, ONNX) and compiles it for NVIDIA hardware: layer fusion, precision selection, kernel selection, memory layout optimization.",
      "Same model, same hardware, much higher tokens per second after TensorRT. That's not marketing &mdash; it's a compiler doing the work that experts otherwise do by hand.",
      "TensorRT sits underneath Triton (serving), NIM (microservice packaging) and AI Enterprise. It is one of the structural reasons NVIDIA's inference economics are hard for alternatives to match."
    ],
    flow: ["Trained model in PyTorch/TF/ONNX", "TensorRT optimization passes", "Compiled GPU runtime", "Triton serves it", "NIM packages it for enterprise"],
    mentalModel: "TensorRT is to AI inference what a really good compiler is to programming languages. It doesn't change the algorithm, but it dramatically changes how fast it runs.",
    commonMisunderstanding: "TensorRT is a model. It is not. It compiles a model into an optimized runtime &mdash; the model comes from somewhere else.",
    whyItMatters: "TensorRT contributes directly to NVIDIA's tokens-per-watt story. Without it, raw GPU performance is dramatically less useful.",
    relatedEntities: ["node:tensorrt", "node:triton-inference", "node:nvidia-nim", "node:ai-enterprise"],
    relatedQuestions: ["q-cuda-lockin", "q-training-vs-inference"],
    sourceIds: [],
    confidence: "context"
  },

  /* ── Networking ─────────────────────────── */
  {
    id: "q-nvlink-importance",
    question: "Why does NVLink matter as much as the GPU itself?",
    audience: "technical", category: "Networking", difficulty: "Intermediate",
    shortAnswer: "Because NVLink is what turns 72 GPUs into one accelerator. Without it, large-model training stalls on collective operations.",
    detailedAnswer: [
      "Modern AI training and large-model inference share data constantly between GPUs. The bandwidth between GPUs (intra-rack) often determines actual throughput, not the per-GPU FLOPS.",
      "NVLink (the link) and NVSwitch (the all-to-all switch) form a fabric inside an NVL72 rack that lets every GPU talk to every other GPU at very high bandwidth and low latency. The rack behaves as one accelerator.",
      "If a competing GPU has higher raw FLOPS but slower interconnect, it loses on real workloads. This is why networking is now part of NVIDIA's moat, not a separate category."
    ],
    flow: ["GPU produces gradients", "Sends to peer GPUs over NVLink", "NVSwitch routes the all-to-all exchange", "Synchronization completes", "Next training step proceeds"],
    mentalModel: "If NVLink is the road, NVSwitch is the intersection. A city of 72 GPUs needs both to function.",
    commonMisunderstanding: "GPU count is what matters. Per-GPU FLOPS are what matters. Neither captures the truth: the fabric matters as much as the chip.",
    whyItMatters: "Substitutes for NVIDIA must match not just the GPU but the rack-scale fabric. That is much harder than matching a chip.",
    relatedEntities: ["node:nvlink", "node:nvswitch", "node:gb200-nvl72", "node:rack-scale-computing"],
    relatedQuestions: ["q-rack-scale-different", "q-ib-vs-spectrum-x"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-ib-vs-spectrum-x",
    question: "InfiniBand or Spectrum-X Ethernet &mdash; which one wins?",
    audience: "operator", category: "Networking", difficulty: "Advanced",
    shortAnswer: "Both. InfiniBand still leads at frontier-scale training; Spectrum-X is winning as enterprises and clouds prefer Ethernet's operational familiarity.",
    detailedAnswer: [
      "InfiniBand is the historical low-latency choice for the largest training clusters. NVIDIA's Quantum InfiniBand (from the Mellanox heritage) remains the default at frontier-scale jobs.",
      "Spectrum-X is NVIDIA's Ethernet platform, with switches and ConnectX SuperNICs that add AI-specific congestion control, adaptive routing and lossless behavior. It is closer to InfiniBand than to a generic Ethernet fabric.",
      "Customer choice is increasingly operational: many cloud and enterprise teams prefer Ethernet's tooling, hiring market and broader vendor ecosystem. Spectrum-X is designed for those buyers."
    ],
    flow: ["Workload + scale defines requirement", "Frontier training favors InfiniBand", "Enterprise / cloud favors Ethernet", "Spectrum-X bridges the two", "Both terminate on ConnectX SuperNICs at the host"],
    mentalModel: "InfiniBand is a Formula 1 car. Spectrum-X is a high-end production sports car. The first wins races; the second is what most people drive.",
    commonMisunderstanding: "Spectrum-X is just renamed Ethernet. It is Ethernet plus AI-specific behavior &mdash; congestion control, adaptive routing, lossless lanes &mdash; all designed to behave like an AI fabric.",
    whyItMatters: "The Ethernet vs InfiniBand split shapes which networking platforms (and which vendors) win share at hyperscale and enterprise.",
    relatedEntities: ["node:quantum-ib", "node:spectrum-x", "node:connectx", "node:nvlink"],
    relatedQuestions: ["q-nvlink-importance", "q-rack-scale-different"],
    sourceIds: [],
    confidence: "context"
  },

  /* ── Strategic / competitive ────────────── */
  {
    id: "q-asics-replacement",
    question: "Will Trainium, TPU, Maia and MTIA replace NVIDIA GPUs?",
    audience: "investor", category: "Substitution risk", difficulty: "Advanced",
    shortAnswer: "They are taking real share inside the hyperscalers that build them. Replacement of NVIDIA across the broader market is far less clear.",
    detailedAnswer: [
      "Hyperscalers have invested billions in custom AI silicon. Google's TPU is the longest-running program; Amazon ships Trainium and Inferentia; Microsoft has Maia; Meta has MTIA. These chips do meaningful internal work.",
      "But every external customer using AWS, Azure or GCP today still tends to default to NVIDIA, because their codebases, models and tooling already run on CUDA.",
      "The real question is therefore narrower: how much of internal hyperscaler workload migrates, and on what time horizon. AWS is the clearest test case &mdash; the same company is both NVIDIA's largest cloud customer and the most credible long-term substitution risk."
    ],
    flow: ["Hyperscaler builds custom silicon", "Internal workloads migrate selectively", "External customers stay on CUDA + NVIDIA", "Substitution shows up as margin pressure, not loss of customers", "Long-term mix becomes the question"],
    mentalModel: "Hyperscaler ASICs are like cloud providers building their own delivery vans. Useful internally, rarely sold to outside customers, never the whole market.",
    commonMisunderstanding: "AWS being a NVIDIA customer means it isn't a competitor. Same company, both stories. Treat them separately.",
    whyItMatters: "Hyperscaler ASIC adoption is the cleanest long-term substitution test for NVIDIA's pricing power.",
    relatedEntities: ["node:hyperscaler-asics", "node:custom-silicon-threat", "node:cuda-lock-in", "scenario:s-asics", "company:aws"],
    relatedQuestions: ["q-cuda-lockin", "q-rocm-vs-cuda"],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-export-controls",
    question: "Why is China blocked from leading-edge AI silicon?",
    audience: "investor", category: "Geopolitics", difficulty: "Intermediate",
    shortAnswer: "Because the US Bureau of Industry and Security restricts exports of advanced AI chips and EUV equipment, on national-security grounds.",
    detailedAnswer: [
      "BIS export controls limit which AI chips and which semiconductor equipment can be sold into specific markets, including most leading-edge categories destined for China. The rules have evolved through multiple rounds since 2022.",
      "The effect is not absolute &mdash; older or down-spec'd parts can still ship under license &mdash; but the controls have created a bifurcated supply chain and accelerated Chinese domestic chip programs (Huawei Ascend, SMIC's progress).",
      "Export controls are also a structural lever shaping the geography of AI: who can build, where they can build, and what generation they can build with."
    ],
    flow: ["BIS rule issued", "Vendors review allowed configurations", "License processes adjust", "Restricted markets pursue domestic alternatives", "Bifurcated AI silicon supply chain"],
    mentalModel: "Export controls aren't an embargo. They're a tariff on capability &mdash; they force the affected market to either pay more, get less, or build their own.",
    commonMisunderstanding: "Export controls 'don't work because China still gets chips.' They are not designed for absolute denial; they are designed to slow specific capability accumulation.",
    whyItMatters: "Export-control geography is one of the most important non-technical inputs to AI infrastructure forecasting.",
    relatedEntities: ["node:export-controls-concept", "scenario:s-export", "company:asml", "company:tsmc", "node:sovereign-compute"],
    relatedQuestions: ["q-asml-importance", "q-sovereign-ai"],
    sourceIds: ["src-bis"],
    confidence: "sourced"
  },
  {
    id: "q-sovereign-ai",
    question: "Why is sovereign AI a thing now?",
    audience: "investor", category: "Geopolitics", difficulty: "Intermediate",
    shortAnswer: "Because countries increasingly want domestic AI compute capacity to control sensitive data and reduce dependence on foreign clouds.",
    detailedAnswer: [
      "Sovereign AI programs are national-scale investments in domestic AI infrastructure: data centers, GPU clusters, sometimes domestic chip fabrication, and the policy framework around them. Examples include UAE, France, India, Saudi Arabia, the UK and others.",
      "The motivation is data control (for regulated industries and government), supply chain security (avoiding dependence on foreign hyperscalers) and economic positioning (capturing AI-related GDP).",
      "For NVIDIA, this is a fast-growing customer category outside the traditional hyperscaler base. For policymakers, it is also a vehicle for export-control geography and domestic industrial policy."
    ],
    flow: ["Country identifies AI dependence as risk", "Allocates capital to domestic compute", "Buys NVIDIA systems (subject to export controls)", "Local cloud or government operates them", "Domestic ecosystem grows on top"],
    mentalModel: "Sovereign AI is to compute what national airlines were to travel: not always the most economic choice, but politically necessary for control.",
    commonMisunderstanding: "Sovereign AI is symbolic spending. It is real capital deployment with real GPU allocations &mdash; and a real new buyer category for NVIDIA outside the hyperscalers.",
    whyItMatters: "Sovereign programs reshape NVIDIA's customer mix and the geography of AI compute.",
    relatedEntities: ["node:sovereign-ai", "node:sovereign-compute", "node:export-controls-concept"],
    relatedQuestions: ["q-export-controls", "q-asics-replacement"],
    sourceIds: [],
    confidence: "inferred"
  },

  /* ── Economics & operations ─────────────── */
  {
    id: "q-second-winners",
    question: "Who else benefits from AI infrastructure spending besides NVIDIA?",
    audience: "investor", category: "Economics", difficulty: "Beginner",
    shortAnswer: "Memory makers, advanced packaging, ODMs, server OEMs, electrical and cooling vendors, and increasingly utilities and reactor builders.",
    detailedAnswer: [
      "AI capex flows through a long chain. Memory makers (SK hynix, Micron, Samsung) and packaging providers (TSMC's CoWoS) capture meaningful share that scales with GPU shipments.",
      "ODMs (Foxconn, Quanta, Wistron, Wiwynn) and server OEMs (Dell, HPE, Lenovo, Supermicro) integrate the systems. Power and cooling vendors (Schneider Electric, Vertiv, Eaton, ABB, CoolIT, Motivair) are direct beneficiaries of liquid-cooled rack adoption.",
      "Independent power producers (Constellation, NextEra, Vistra) and grid equipment makers (Siemens Energy, GE Vernova, transformers, switchgear) are increasingly part of the same conversation as gigawatt-scale loads change utility planning."
    ],
    flow: ["AI capex committed", "NVIDIA captures GPU + system + software share", "Memory + packaging captures upstream share", "ODMs + OEMs capture integration share", "Power + cooling vendors capture facility share", "Utilities + IPPs capture generation share"],
    mentalModel: "AI capex is like building a city. The famous architect (NVIDIA) gets credit. The concrete companies, electricians, plumbers and utilities all win too.",
    commonMisunderstanding: "Only NVIDIA wins. NVIDIA captures the largest single slice, but the whole chain is being expanded.",
    whyItMatters: "Investors over-rotated on NVIDIA miss the layered beneficiary structure that makes AI infrastructure spending less concentrated than it looks.",
    relatedEntities: ["company:sk-hynix", "company:vertiv", "company:schneider", "company:foxconn", "company:constellation-energy", "company:supermicro"],
    relatedQuestions: ["q-power-bound", "q-microsoft-tmi", "q-liquid-cooling"],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-tokens-per-watt",
    question: "What does 'tokens per watt' mean and why is it the new metric?",
    audience: "operator", category: "Economics", difficulty: "Intermediate",
    shortAnswer: "Tokens per watt is the inference-era productivity ratio: how many useful AI outputs you get per unit of energy consumed.",
    detailedAnswer: [
      "As AI inference scales to trillions of tokens per day, energy cost per token becomes a primary driver of unit economics. Tokens per watt is the operational metric that captures it.",
      "Improving tokens per watt is what every NVIDIA generation, every TensorRT release and every NVL72 fabric upgrade is implicitly optimizing for &mdash; not raw FLOPS.",
      "Operators evaluate AI factories on tokens per watt the way airlines evaluate aircraft on cost per available seat mile. It collapses many subsystems into one number that ties directly to economics."
    ],
    flow: ["Power into the rack (watts)", "Compute + networking + cooling losses", "Throughput through GPUs", "TensorRT + Triton optimization", "Tokens per watt out"],
    mentalModel: "Tokens per watt is to AI factories what miles per gallon is to cars. Different model, different metric, but the operating-cost story is the same.",
    commonMisunderstanding: "GPU FLOPS are the right metric. They aren't, for inference. The operating economics depend on throughput per energy unit, which is a system-level metric.",
    whyItMatters: "Tokens per watt is what determines whether an inference business actually has unit economics that work.",
    relatedEntities: ["node:tokens-per-watt", "node:inference-economics", "node:tensorrt", "node:nvidia-nim", "node:ai-factory"],
    relatedQuestions: ["q-ai-factory", "q-training-vs-inference", "q-tensorrt-moat"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-training-vs-inference",
    question: "Why does training vs inference matter for the supply chain?",
    audience: "investor", category: "Economics", difficulty: "Intermediate",
    shortAnswer: "Because the optimal hardware shape, memory bandwidth needs and economics differ &mdash; and inference is becoming the majority of compute demand.",
    detailedAnswer: [
      "Training a frontier model is bursty, hugely parallel and tolerates higher per-token cost. It runs for weeks on the largest clusters, and capex per training job is enormous.",
      "Inference runs continuously, is more sensitive to latency and to dollars-per-token, and increasingly dictates fleet design. It is also where most of the compute hours actually live once a model is deployed.",
      "The shift toward inference-heavy fleets is one reason TensorRT, Triton, NIM and AI Enterprise sit so prominently in NVIDIA's product story. It is also why memory bandwidth (HBM) and tokens-per-watt economics increasingly dominate operator decisions."
    ],
    flow: ["Train once on large cluster", "Deploy for inference at scale", "Inference dominates compute hours", "Optimization shifts toward TensorRT / Triton / NIM", "Memory bandwidth and tokens-per-watt drive operator economics"],
    mentalModel: "Training is the movie shoot; inference is the cinema run. The shoot is expensive but bounded; the run is what actually pays for the movie.",
    commonMisunderstanding: "Training is where the action is. Compute hours and revenue increasingly come from inference once models are deployed.",
    whyItMatters: "Inference economics determine which AI products are commercially viable.",
    relatedEntities: ["node:cloud-inference", "node:tensorrt", "node:nvidia-nim", "node:tokens-per-watt", "node:inference-economics"],
    relatedQuestions: ["q-tokens-per-watt", "q-tensorrt-moat", "q-memory-bandwidth"],
    sourceIds: [],
    confidence: "context"
  },

  /* ── AI factory & deployment ───────────── */
  {
    id: "q-ai-factory",
    question: "What is an AI factory, really?",
    audience: "beginner", category: "AI factory", difficulty: "Beginner",
    shortAnswer: "NVIDIA's framing for a data center designed to convert electricity into tokens, embeddings, actions and simulations at industrial scale.",
    detailedAnswer: [
      "The AI factory framing reorients the data center from a server-rental business to a production facility. Inputs are megawatts and infrastructure; outputs are inference tokens, training checkpoints and simulation outputs.",
      "The framing is editorial &mdash; it isn't a sourced industry term &mdash; but it captures something real: the unit economics of AI shift from 'how many servers' to 'how many tokens per watt' and 'how many useful outputs per dollar of capex.'",
      "Operationally it has driven NVIDIA's reference designs with Schneider, Vertiv, Foxconn, Dell and HPE: standardised ways to build a full AI factory rather than retrofitting an existing data center."
    ],
    flow: ["Power + cooling + grid", "Rack-scale GPU systems (NVL72)", "NVLink + InfiniBand fabric", "Inference + training software", "Tokens / embeddings / actions / simulations"],
    mentalModel: "A data center used to be like a hotel: rooms rented by the hour. An AI factory is like a steel mill: raw inputs in, finished products out.",
    commonMisunderstanding: "An AI factory is a kind of building. It is a framing for how to think about a data center's unit economics, not an architecture.",
    whyItMatters: "If you don't see the data center as a factory, you miss the operating-economics arguments that drive how it's built.",
    relatedEntities: ["node:ai-factory", "node:tokens-per-watt", "node:rack-scale-computing", "path:path-ai-factory-build"],
    relatedQuestions: ["q-tokens-per-watt", "q-rack-scale-different", "q-power-bound"],
    sourceIds: ["src-nvidia-aif"],
    confidence: "inferred"
  },
  {
    id: "q-rack-scale-different",
    question: "Why is rack-scale computing different from server computing?",
    audience: "technical", category: "Architecture", difficulty: "Advanced",
    shortAnswer: "Because the unit of compute is now the rack, not the server. NVLink fabric, liquid cooling and software all assume rack-scale coordination.",
    detailedAnswer: [
      "A traditional GPU server has 8 GPUs connected by PCIe and an NVLink switch. A NVL72 rack has 72 GPUs connected by an NVLink fabric that lets every GPU communicate with every other at very high bandwidth.",
      "From software's perspective, the rack behaves like one accelerator. Distributed training and large-model inference are designed against that abstraction.",
      "Operationally, the rack is also a single thermal and power unit. Liquid cooling, 100+ kW power delivery and NVLink fabric all have to be present together &mdash; you can't 'partially adopt' rack-scale."
    ],
    flow: ["Per-server GPUs (PCIe + NVLink)", "Per-rack GPUs (NVLink fabric across 72)", "Software treats rack as one accelerator", "Liquid cooling + power required as a unit", "Operator buys racks, not servers"],
    mentalModel: "Server-scale is a distributed system; rack-scale is a single very large computer. They are not just bigger versions of each other.",
    commonMisunderstanding: "An NVL72 is just a bigger GPU server. Rack-scale changes the fabric, the software, the cooling and the operating model.",
    whyItMatters: "Rack-scale design is what gives modern training and inference its actual throughput. Customers who don't think rack-scale will lose ground to those who do.",
    relatedEntities: ["node:gb200-nvl72", "node:nvlink", "node:nvswitch", "node:rack-scale-computing", "node:liquid-cooling-tech"],
    relatedQuestions: ["q-nvlink-importance", "q-liquid-cooling", "q-ai-factory"],
    sourceIds: ["src-nvidia-gb200"],
    confidence: "context"
  },

  /* ── Quantum ────────────────────────────── */
  {
    id: "q-quantum-stack",
    question: "How does quantum actually fit into the NVIDIA story?",
    audience: "technical", category: "Quantum", difficulty: "Advanced",
    shortAnswer: "Through CUDA-Q and NVQLink, NVIDIA positions GPUs as the orchestration and acceleration layer around quantum hardware, not as a competitor to it.",
    detailedAnswer: [
      "Quantum hardware on its own does not yet run useful workloads at scale. NVIDIA's CUDA-Q programming framework expresses hybrid quantum-classical algorithms; NVQLink provides a high-speed link between QPUs and GPU clusters; the Accelerated Quantum Center (NVAQC) hosts hardware from multiple vendors.",
      "The bet is that as quantum advances, GPU clusters will sit alongside QPUs running classical control, simulation and error decoding. Error correction in particular is GPU-heavy work even on the quantum side.",
      "This is forward-looking territory, but it is one of NVIDIA's clearer non-GPU strategic bets. Rather than fight the eventual rise of quantum, the strategy is to be the substrate quantum hardware plugs into."
    ],
    flow: ["QPU does quantum subroutine", "Quantum controller reads/writes signals", "NVQLink to GPU cluster", "CUDA-Q orchestrates the loop", "GPUs handle simulation + error decoding", "Application receives result"],
    mentalModel: "Quantum hardware is the new microscope. GPU clusters are the lab around it that makes the microscope useful.",
    commonMisunderstanding: "Quantum will replace GPUs. Near-term quantum advantage almost certainly comes from hybrid workflows where GPUs do most of the work.",
    whyItMatters: "If quantum reaches commercial scale, NVIDIA wants to be the GPU substrate underneath. If quantum stays research-stage, NVIDIA still loses nothing.",
    relatedEntities: ["node:cuda-q", "node:nvqlink", "node:qpu", "node:quantum-error-correction", "company:quantinuum", "path:path-quantum"],
    relatedQuestions: ["q-quantum-error-correction"],
    sourceIds: ["src-nvidia-cudaq", "src-nvidia-nvql", "src-nvidia-nvaqc"],
    confidence: "forwardLooking"
  },
  {
    id: "q-quantum-error-correction",
    question: "What is quantum error correction and why is it the gating issue?",
    audience: "technical", category: "Quantum", difficulty: "Expert",
    shortAnswer: "QEC encodes one usable logical qubit across many noisy physical qubits. Until the overhead drops, useful quantum stays out of reach.",
    detailedAnswer: [
      "Quantum bits are inherently noisy. Quantum error correction encodes a logical qubit (the kind algorithms operate on) across a large number of physical qubits, with classical decoding to track and fix errors.",
      "The challenge is hardware economics. Today, one logical qubit can require hundreds or thousands of physical qubits. For useful algorithms (chemistry, optimization), thousands of logical qubits would be needed &mdash; an overhead reduction is what gates commercial scale.",
      "Multiple modalities (superconducting, trapped-ion, neutral-atom, photonic) are racing on different overhead curves. Quantinuum, IBM, PsiQuantum, Atom Computing and others have published competing milestones; classical decoding inside QEC is itself a heavy GPU workload."
    ],
    flow: ["Many physical qubits", "Encoded as one logical qubit", "Classical decoder (GPU-heavy) tracks errors", "Logical qubit available to algorithm", "Useful workload runs"],
    mentalModel: "QEC is like building a reliable phone line out of very noisy walkie-talkies by adding error-correcting codes. Possible &mdash; but at huge bandwidth overhead.",
    commonMisunderstanding: "QEC is a software bug fix. It is a hardware-economics problem &mdash; reducing how many physical qubits one logical qubit costs.",
    whyItMatters: "Without scalable QEC, quantum hardware cannot run the deep circuits needed for advantage over GPU clusters.",
    relatedEntities: ["node:quantum-error-correction", "node:qpu", "node:cuda-q", "company:quantinuum", "company:ibm-quantum", "scenario:s-qec"],
    relatedQuestions: ["q-quantum-stack"],
    sourceIds: [],
    confidence: "forwardLooking"
  },

  /* ── Geography ──────────────────────────── */
  {
    id: "q-northern-virginia",
    question: "Why is Northern Virginia the densest data center cluster in the world?",
    audience: "operator", category: "Geography", difficulty: "Beginner",
    shortAnswer: "Decades of fiber, real estate and tax incentives compounded with utility partnerships into a self-reinforcing concentration.",
    detailedAnswer: [
      "Northern Virginia's data center alley grew out of early internet backbone investment, low electricity costs, available land and supportive county-level economic development incentives.",
      "As clusters compound, fiber-rich regions attract more interconnect, which attracts more tenants. Network effects in physical infrastructure are slow to start but extremely durable once they take hold.",
      "Dominion Energy is the utility that now has to serve the resulting load. Transmission expansion in the region has become a primary constraint on further growth, and is one of the clearest examples of grid lead time as a real binding constraint."
    ],
    flow: ["Internet backbone investment 1990s/2000s", "Cheap power + land + incentives", "Fiber concentration grows", "More tenants arrive", "Dominion Energy load forecasts surge", "Transmission becomes constraint"],
    mentalModel: "Northern Virginia is to data centers what Wall Street is to finance. Geography that became destiny because of compounding network effects.",
    commonMisunderstanding: "It's just a tax break. Tax incentives helped, but the durable advantage is fiber concentration and accumulated operational expertise.",
    whyItMatters: "If you understand why Northern Virginia exists, you understand why moving AI capacity elsewhere is harder than it looks.",
    relatedEntities: ["company:dominion", "node:dc-land", "node:grid-access"],
    relatedQuestions: ["q-power-bound"],
    sourceIds: [],
    confidence: "context"
  },

  /* ── Hero-card questions added to fill ENTRY_GROUPS gaps ── */
  {
    id: "q-bottlenecks-overview",
    question: "Where are the binding bottlenecks in AI infrastructure?",
    audience: "investor", category: "Bottlenecks", difficulty: "Beginner",
    shortAnswer: "Power and grid first. Then HBM, CoWoS and leading-edge fabrication. Networking and liquid cooling come next.",
    detailedAnswer: [
      "Several bottlenecks compete for first place at any given moment, and the binding constraint shifts over time. Today, the long-pole items are power-and-grid (interconnection queues, transformer lead times, large-load PPAs), HBM supply, CoWoS advanced packaging, and TSMC's leading-edge logic capacity.",
      "Behind those, networking bandwidth (InfiniBand, Spectrum-X, optical transceivers) and liquid cooling (CDUs, cold plates) are next-tier constraints that gate specific deployments rather than total industry supply.",
      "Strategic constraints &mdash; CUDA lock-in for substitutes, export controls for geography &mdash; shape who can build what, where, but they aren't capacity bottlenecks in the same direct sense."
    ],
    flow: ["Power & grid", "HBM supply", "CoWoS packaging", "TSMC leading-edge logic", "Networking", "Liquid cooling"],
    mentalModel: "Bottlenecks in AI are like bottlenecks on a highway. They form at predictable points, and adding more cars (capital) doesn't fix them.",
    commonMisunderstanding: "There's one bottleneck. There are several, and the binding one shifts over time. Investors and operators have to track them all.",
    whyItMatters: "Knowing which bottleneck is currently binding tells you which beneficiary group is capturing margin and which buyers are waiting in line.",
    relatedEntities: ["scenario:s-hbm", "scenario:s-cowos", "scenario:s-grid", "scenario:s-cooling", "node:supply-chain-concentration", "node:liquid-cooling-tech"],
    relatedQuestions: ["q-hbm-stack", "q-cowos", "q-power-bound", "q-liquid-cooling", "q-tsmc-spof"],
    sourceIds: ["src-iea-energy"],
    confidence: "inferred"
  },
  {
    id: "q-cowos-constrained",
    question: "What happens if CoWoS capacity is constrained?",
    audience: "investor", category: "Scenarios", difficulty: "Intermediate",
    shortAnswer: "Packaged-accelerator volume becomes the binding constraint, regardless of front-end wafer supply. Customer allocations harden; non-CoWoS packaging gets more business at lower-tier nodes.",
    detailedAnswer: [
      "CoWoS is what physically attaches HBM to the GPU die. If TSMC's CoWoS capacity fails to ramp on the planned curve, finished accelerator output slips even when wafer supply is healthy.",
      "Customers respond in two ways: they harden allocation contracts (locked CoWoS slots become highly valued), and they explore non-CoWoS packaging at OSAT vendors (Amkor, ASE) for products that can tolerate it.",
      "The pricing power on CoWoS-allocated accelerators stays high. Customers without locked slots are forced to wait, and roadmaps that assumed faster ramps slip into later quarters."
    ],
    flow: ["CoWoS demand exceeds supply", "TSMC allocates by customer", "Smaller customers wait", "OSAT capacity fills non-CoWoS work", "Some workloads migrate to alternative packaging"],
    mentalModel: "Like a popular highway with one toll booth. The roads behind the booth are fine; the booth is the binding constraint.",
    commonMisunderstanding: "Adding wafer capacity helps. It doesn't, if CoWoS is the gate. Wafers and CoWoS scale on different curves.",
    whyItMatters: "CoWoS allocation is one of the most direct levers on quarterly NVIDIA accelerator availability and pricing.",
    relatedEntities: ["scenario:s-cowos", "node:cowos", "company:tsmc", "company:amkor", "node:silicon-interposer"],
    relatedQuestions: ["q-cowos", "q-tsmc-spof", "q-hbm-stack", "q-bottlenecks-overview"],
    sourceIds: ["src-tsmc-cowos", "src-tsmc-3df"],
    confidence: "sourced"
  },
  {
    id: "q-cloud-monetize",
    question: "How do cloud providers actually monetize NVIDIA systems?",
    audience: "investor", category: "Economics", difficulty: "Intermediate",
    shortAnswer: "Buy NVIDIA systems at scale; rent GPU instances by the hour; layer higher-margin AI platform services (Bedrock, Azure OpenAI, Vertex) on top.",
    detailedAnswer: [
      "The first step is bulk purchase &mdash; cloud providers commit to multi-quarter NVIDIA hardware orders. That's capex; the margin is mostly NVIDIA's.",
      "The second step is rental. GPU instances (AWS P6, Azure ND, GCP A4X) are rented by the hour. Cloud captures part of the spread between depreciation and rental price.",
      "The third step is where the real margin lives: AI platform services. Bedrock, Azure OpenAI Service and Vertex AI sell access to models, retrieval, fine-tuning and deployment with significantly higher gross margins than raw GPU rental. Hyperscaler ASIC programs (TPU, Trainium, Maia) are an attempt to capture more of step one's margin internally."
    ],
    flow: ["Cloud bulk-buys NVIDIA systems", "Deploys to data centers", "Rents GPU instances (capex spread)", "Sells higher-margin AI platform services on top", "Develops custom ASICs to capture more margin internally"],
    mentalModel: "A cloud is a real estate company. NVIDIA hardware is the building. The high margin is in the leases and the in-house concierge services, not the building itself.",
    commonMisunderstanding: "Clouds resell NVIDIA at fixed margin. The real margin comes from layered platform services and from the long-term substitution play with custom silicon.",
    whyItMatters: "Understanding cloud monetization separates the AI capex story (NVIDIA wins) from the AI margin story (cloud captures the platform layer).",
    relatedEntities: ["company:azure", "company:aws", "company:gcp", "company:coreweave", "path:path-cloud-distribution"],
    relatedQuestions: ["q-asics-replacement", "q-tokens-per-watt", "q-second-winners", "q-microsoft-tmi"],
    sourceIds: ["src-aws-p6", "src-gcp-a4x", "src-azure-gb300"],
    confidence: "inferred"
  },

  /* ── Foundations (beginner) ──────────────── */
  {
    id: "q-what-is-gpu",
    question: "What is actually different about a GPU vs a CPU?",
    audience: "beginner", category: "Foundations", difficulty: "Beginner",
    shortAnswer: "A CPU has a few smart cores running tasks in sequence. A GPU has tens of thousands of simpler cores running the same operation on many numbers in parallel &mdash; exactly the shape of the matrix math underneath AI.",
    detailedAnswer: [
      "A modern CPU is built around a small number of cores (8&ndash;128) optimised for branchy, sequential code: deep pipelines, branch prediction, large caches and high clock speed. It dispatches many different instructions per second across a small workforce.",
      "A modern data-center GPU has tens of thousands of simpler cores grouped into streaming multiprocessors, plus tensor cores that perform matrix multiplications directly in hardware. The design is built for the opposite shape: the same operation applied across many numbers, simultaneously.",
      "Neural networks decompose into giant matrix multiplications and convolutions. That matches what GPUs were already shaped for. A CPU executing the same workload is a chef chopping every onion in turn; a GPU is a thousand chefs chopping one onion each."
    ],
    flow: ["Workload arrives", "CPU runs orchestration and control flow", "Tensor / matrix kernels offload to the GPU", "GPU streaming multiprocessors execute thousands of MACs in parallel", "Result returns to CPU"],
    mentalModel: "A CPU is a craftsman. A GPU is an assembly line. Both build cars &mdash; only one builds a million identical cars per hour.",
    commonMisunderstanding: "GPUs are just faster CPUs. They are not. They are a different machine optimised for a different shape of computation, and they lose badly on a CPU's typical workload.",
    whyItMatters: "This is the architectural reason NVIDIA and not Intel sits at the center of AI. Modern AI is the workload GPUs were already shaped for.",
    relatedEntities: ["node:cuda", "node:hopper", "node:blackwell", "company:nvidia"],
    relatedQuestions: ["q-cuda-lockin", "q-how-gpu-made", "q-fabless-foundry"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-fabless-foundry",
    question: "What does 'fabless' mean and why does the model dominate AI silicon?",
    audience: "beginner", category: "Foundations", difficulty: "Beginner",
    shortAnswer: "Fabless companies design chips but do not manufacture them. They send blueprints to foundries (mainly TSMC) that own the multi-billion-dollar fabs. The model dominates because owning a leading-edge fab is now a generational capital commitment most companies will not make.",
    detailedAnswer: [
      "NVIDIA, AMD, Apple, Qualcomm, MediaTek, Broadcom and most modern chip companies are fabless. They specialise in design, IP and software. Manufacturing is outsourced to a foundry &mdash; almost always TSMC at the leading edge.",
      "A new leading-edge fab now costs $20&ndash;30B. The economics only work if many customers share the line. That favors a small number of contract foundries with enormous scale. Intel and Samsung are the only credible alternatives at the leading edge today, and both lag TSMC.",
      "The fabless / foundry split is therefore the dominant structure of the industry. It also concentrates risk: a problem at one foundry now propagates across the entire chip industry."
    ],
    flow: ["Fabless company designs chip + writes RTL", "Sends mask set to foundry", "Foundry runs wafers through hundreds of process steps", "Wafers go to OSAT or foundry packaging", "Finished parts ship to system makers"],
    mentalModel: "Fabless / foundry is the Hollywood model: writers and directors (fabless) make the script and casting calls; one giant studio (TSMC) shoots almost every leading-edge film.",
    commonMisunderstanding: "NVIDIA is a manufacturer. NVIDIA does not manufacture chips. They design, validate and sell systems; TSMC manufactures the silicon.",
    whyItMatters: "Almost every supply-chain risk in AI &mdash; geographic, capacity, geopolitical &mdash; is downstream of the fabless / foundry split. You cannot reason about supply without it.",
    relatedEntities: ["company:nvidia", "company:tsmc", "company:samsung-foundry", "company:intel-foundry", "node:supply-chain-concentration"],
    relatedQuestions: ["q-tsmc-spof", "q-how-gpu-made", "q-process-node", "q-mask-cost"],
    sourceIds: ["src-tsmc-cowos"],
    confidence: "context"
  },
  {
    id: "q-why-now",
    question: "Why is AI infrastructure spending happening now, after decades of GPUs?",
    audience: "beginner", category: "Foundations", difficulty: "Beginner",
    shortAnswer: "Because three exponentials &mdash; tensor-core compute, HBM bandwidth and transformer-shaped workloads &mdash; finally lined up at the same moment, and the resulting model quality cleared the threshold of broad commercial usefulness.",
    detailedAnswer: [
      "GPUs have existed since the 1990s and CUDA since 2007. What changed in the early 2020s was that transformer architectures, scale, and tensor-core hardware combined to turn each generation's increase in flops and memory bandwidth directly into model quality &mdash; the famous scaling laws.",
      "ChatGPT (late 2022) was the moment that made model quality visible to non-researchers. From that point, the willingness to underwrite massive capex &mdash; first by hyperscalers, then by sovereigns &mdash; became a foregone conclusion.",
      "The supply chain underneath was not ready. CoWoS, HBM and grid power all became binding constraints almost immediately. The cycle since has been about catching infrastructure up with demand that already exists."
    ],
    flow: ["Transformer + scale + tensor cores converge", "Scaling laws turn capex into model quality", "ChatGPT moment makes quality visible", "Hyperscaler capex commitments follow", "Bottlenecks emerge across CoWoS / HBM / power"],
    mentalModel: "The AI build-out is a railroad mania. The technology was incubating for years; one demonstration showed the route was real, and capital flooded in faster than rail could be laid.",
    commonMisunderstanding: "AI capex is just hype. The capex is real, contracted, and gated by physical bottlenecks &mdash; not a marketing cycle that can stop at will.",
    whyItMatters: "It frames the whole atlas: bottlenecks form because demand outran the supply chain that GPUs depend on.",
    relatedEntities: ["node:hopper", "node:blackwell", "node:hbm3e", "node:cowos", "node:ai-factory"],
    relatedQuestions: ["q-bottlenecks-overview", "q-power-bound", "q-ai-bubble", "q-cowos"],
    sourceIds: ["src-iea-energy"],
    confidence: "context"
  },

  /* ── Semiconductor depth ─────────────────── */
  {
    id: "q-process-node",
    question: "What does '3nm' actually mean (it is not 3 nanometers)?",
    audience: "technical", category: "Semiconductor", difficulty: "Intermediate",
    shortAnswer: "Modern process node names are marketing. They no longer measure a physical dimension &mdash; they signal a generational step in transistor density and performance.",
    detailedAnswer: [
      "Up to about 22nm, the node name roughly corresponded to a real transistor feature size. At 14nm and below, that relationship broke; the number became a label, not a measurement. TSMC's N3 transistors do not have any 3nm feature.",
      "What the names track today is a multi-axis improvement: density (more transistors per mm&sup2;), performance (higher frequency at iso-power), and power (lower energy per operation). Each step typically pairs the new node name with a small set of design rules and lithography requirements.",
      "Different foundries also use different naming conventions. TSMC's N5 and Samsung's 4LPP are not directly comparable; nor are TSMC's N3 and Intel's 18A. Density and yield numbers are the only honest comparison."
    ],
    flow: ["Foundry defines a generation", "Names it (e.g. N3, N2, 18A, 4LPP)", "Density / performance / power targets set", "Real transistor feature sizes vary internally", "Customers pick based on density and yield, not the name"],
    mentalModel: "Process node names are like apparel sizes. A US size 6 and a UK size 10 may fit the same body, and neither one is six inches of anything.",
    commonMisunderstanding: "3nm chips have 3-nanometer transistors. They do not. The name is a marketing label.",
    whyItMatters: "If you reason about supply or competitiveness using the name as a measurement, you will misjudge generational gaps. Density and performance numbers are the real comparison.",
    relatedEntities: ["company:tsmc", "company:samsung-foundry", "company:intel-foundry", "node:hopper", "node:blackwell", "node:rubin"],
    relatedQuestions: ["q-yield", "q-finfet-vs-gaa", "q-tsmc-arizona", "q-asml-importance"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-yield",
    question: "What is yield and why does it set GPU pricing?",
    audience: "technical", category: "Semiconductor", difficulty: "Intermediate",
    shortAnswer: "Yield is the share of dies on a wafer that work. Leading-edge yields can range from ~50% to ~90%, and the price of every functional die has to absorb the cost of the failed ones around it.",
    detailedAnswer: [
      "A 300mm wafer at TSMC contains hundreds of GPU dies depending on die size. Defects scattered across the wafer kill some. The fraction that pass full electrical and parametric testing is the yield.",
      "On a new node, yields start low (sometimes well under 50%) and improve through a multi-quarter ramp. Each working die has to pay for itself plus its dead siblings. That is why early N3 parts cost more per die than late N5 parts even at similar transistor counts.",
      "GPU dies are large &mdash; H100 was on a 4nm-class reticle-near design, and Blackwell uses two dies stitched together precisely to evade reticle limits. Big dies amplify the yield problem: a single defect knocks out a much larger area."
    ],
    flow: ["Wafer enters fab", "Hundreds of process steps run", "Defects accumulate", "Wafer probed and tested", "Bad dies discarded", "Good dies binned by speed / power", "Surviving dies absorb the failed dies' cost"],
    mentalModel: "A semiconductor wafer is a sheet of cookies. Yield is the share that come out edible. The cost of one good cookie is whatever the whole tray cost divided by the number that survived.",
    commonMisunderstanding: "Yield is the same across a generation. It improves dramatically over the life of a node; the same chip can be cheaper a year after launch.",
    whyItMatters: "Yield is a hidden lever on NVIDIA gross margin and on the timing of price cuts. Investors and customers who do not track yield trends miss it.",
    relatedEntities: ["company:tsmc", "node:blackwell", "node:hopper", "node:rubin"],
    relatedQuestions: ["q-process-node", "q-mask-cost", "q-nvidia-margins", "q-cowos-variants"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-mask-cost",
    question: "Why does a leading-edge chip cost a billion dollars to design?",
    audience: "investor", category: "Semiconductor", difficulty: "Intermediate",
    shortAnswer: "Because the mask set, IP licensing, EDA tools, verification compute and team headcount have all scaled together &mdash; a leading-edge tape-out now sits in the high-hundreds-of-millions to billions of dollars before a single wafer runs.",
    detailedAnswer: [
      "A modern mask set for an advanced node is itself in the tens of millions of dollars. EDA tooling (Cadence, Synopsys) is multi-year, multi-million-dollar contractual spend. Third-party IP (Arm cores, PCIe, USB, memory controllers) is licensed per design.",
      "Then there is verification: simulating a 50-billion-transistor chip across thousands of corner cases takes its own GPU farm. Software validation, board bring-up and qualification add more.",
      "The result is that only a small number of organizations can absorb a tape-out cost of this size, which is itself a moat. NVIDIA, AMD and the hyperscaler ASIC programs can; almost no one else can. This is why broad challengers do not appear &mdash; the floor is too high."
    ],
    flow: ["Architecture defined", "RTL written + verified", "EDA tools optimise placement / routing", "Mask set produced ($30M+)", "Wafers run + first silicon validated", "Software bring-up + qualification", "Volume ramp"],
    mentalModel: "Designing a leading-edge AI chip is closer to launching a movie franchise than writing software. The film has to recoup before the next one starts shooting.",
    commonMisunderstanding: "Anyone with a design team and a foundry slot can build a credible AI chip. The economics rule out almost everyone &mdash; even with capable engineering.",
    whyItMatters: "It is one of the structural reasons CUDA's moat compounds. Few companies can credibly fund the silicon; even fewer can fund the silicon plus the software.",
    relatedEntities: ["company:cadence", "company:synopsys", "company:arm", "company:nvidia", "node:cuda-lock-in"],
    relatedQuestions: ["q-eda-moat", "q-yield", "q-asics-replacement", "q-cuda-lockin"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-finfet-vs-gaa",
    question: "FinFET vs Gate-All-Around: what changed and why now?",
    audience: "technical", category: "Semiconductor", difficulty: "Advanced",
    shortAnswer: "FinFET wraps the gate around three sides of a transistor channel. Gate-All-Around (GAA) wraps it around all four. The change was needed because shrinking nodes ran out of headroom at the trailing edge of FinFET.",
    detailedAnswer: [
      "FinFET, introduced at 22nm in the early 2010s, replaced the planar transistor with a 'fin' that the gate wraps on three sides. That improved electrostatic control of the channel and let the industry keep shrinking through 5nm and 3nm classes.",
      "Below ~3nm, FinFET runs out: the fin gets too thin, leakage rises, and reliability becomes a problem. Gate-All-Around (GAA) &mdash; sometimes called nanosheet &mdash; replaces the fin with stacked horizontal sheets, with the gate wrapping all four sides of each. Better control, less leakage, better scaling.",
      "Samsung was the first to ship a GAA node (3GAE / 3GAP) but with mixed yield results. TSMC's first GAA node is N2; Intel's is 18A (RibbonFET). Whoever ramps GAA cleanly first captures the next round of leading-edge AI silicon."
    ],
    flow: ["Planar transistor (pre-22nm)", "FinFET (22nm to ~3nm)", "Headroom on FinFET runs out", "GAA introduced (Samsung 3nm, then TSMC N2, Intel 18A)", "Better electrostatics + less leakage at smaller pitch"],
    mentalModel: "FinFET is a gate hugging the channel from three sides; GAA is a gate hugging it from all four. The four-side hug controls the flow of current better when the channel is very thin.",
    commonMisunderstanding: "GAA is just faster FinFET. It is a different transistor architecture, with different thermal, leakage and reliability behavior.",
    whyItMatters: "GAA execution decides which foundry leads at sub-3nm AI silicon &mdash; which in turn decides who NVIDIA can buy from for Rubin and beyond.",
    relatedEntities: ["company:tsmc", "company:samsung-foundry", "company:intel-foundry", "node:rubin"],
    relatedQuestions: ["q-process-node", "q-tsmc-arizona", "q-china-domestic", "q-yield"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-eda-moat",
    question: "Why are Cadence and Synopsys part of every NVIDIA chip?",
    audience: "investor", category: "Semiconductor", difficulty: "Intermediate",
    shortAnswer: "Because no one designs a leading-edge chip without their tools. Cadence and Synopsys (with smaller Siemens EDA) own the synthesis, place-and-route, simulation, verification and IP that a tape-out depends on end-to-end.",
    detailedAnswer: [
      "EDA (electronic design automation) software is what turns a chip designer's intent into a manufacturable layout. The tools handle synthesis, placement, routing, timing closure, power analysis, signal integrity, IR drop, formal verification and physical verification.",
      "The set of tools needed at the leading edge is enormous. Switching providers mid-flow is essentially impossible &mdash; a tape-out is anchored to a flow that took years to qualify against a foundry's process design kit (PDK).",
      "Both Cadence and Synopsys have also spent two decades acquiring IP businesses (PCIe, memory controllers, AI accelerator IP). NVIDIA, AMD and every hyperscaler buying ASIC IP licenses sit downstream of them."
    ],
    flow: ["Chip designer captures intent in RTL", "Synopsys / Cadence synthesis lowers it", "Physical-design tools place + route", "Verification tools sign off timing / power / DRC", "Foundry PDK + flow lock everything to one tool stack", "Tape-out releases mask data"],
    mentalModel: "Cadence and Synopsys are the printing presses of silicon. Everyone who makes chips uses them; switching presses mid-print is not really switching.",
    commonMisunderstanding: "EDA is replaceable software. It is not. The moat is the combination of tools, IP, and decades of foundry-qualification &mdash; an effective duopoly.",
    whyItMatters: "Any forecast of who can credibly build a competing AI accelerator must pass through the EDA + IP layer. It is one of the quietest moats in the chain.",
    relatedEntities: ["company:cadence", "company:synopsys", "company:nvidia", "company:tsmc"],
    relatedQuestions: ["q-mask-cost", "q-fabless-foundry", "q-asics-replacement"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-arm-vs-x86",
    question: "Why did NVIDIA pick Arm for Grace, not x86?",
    audience: "technical", category: "Semiconductor", difficulty: "Intermediate",
    shortAnswer: "Because Arm let NVIDIA design a CPU optimised for tight integration with the GPU &mdash; coherent memory, custom interconnect and power profile &mdash; without negotiating with Intel or AMD.",
    detailedAnswer: [
      "x86 is controlled by Intel and AMD. To use it, NVIDIA would need to license a core or buy the chip; either way, NVIDIA would not control the CPU's interconnect, memory model or power envelope.",
      "Arm is licensable. NVIDIA buys core IP (or designs its own implementation under an architectural licence), tunes it for the workload, and wires it into the GPU with NVLink-C2C and a unified memory model. Grace and the Grace Hopper / Grace Blackwell superchips depend on that integration.",
      "Strategically, this is also a hedge: NVIDIA does not want to be a CPU customer of its competitor. The Arm choice is a control decision as much as a technical one."
    ],
    flow: ["NVIDIA needs CPU close to GPU", "x86 means buying from Intel / AMD", "Arm offers architectural license", "NVIDIA designs Grace + NVLink-C2C", "Grace Hopper / GB200 ship with coherent CPU+GPU memory"],
    mentalModel: "Arm is the open road; x86 is the toll road owned by your competitor. NVIDIA chose the road it could pave itself.",
    commonMisunderstanding: "Grace is just an Arm CPU bolted next to the GPU. The point is the coherent interconnect and unified memory, which is only possible because NVIDIA controls both ends.",
    whyItMatters: "It is the strategic reason superchips (Grace Hopper, GB200, Vera Rubin) exist. CPU-GPU integration is part of NVIDIA's roadmap, not a side feature.",
    relatedEntities: ["company:arm", "company:nvidia", "node:grace-cpu", "node:gb200-nvl72", "node:gb300-nvl72"],
    relatedQuestions: ["q-rack-scale-different", "q-nvlink-importance", "q-nvidia-acquisitions"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-tsmc-arizona",
    question: "Will TSMC's Arizona fab solve the geographic risk?",
    audience: "investor", category: "Geopolitics", difficulty: "Intermediate",
    shortAnswer: "Partially, and slowly. Arizona will run leading-edge nodes for select customers, but it cannot replicate TSMC's full ecosystem &mdash; advanced packaging, depth of suppliers, repeat-process learning &mdash; on the same time scale.",
    detailedAnswer: [
      "TSMC's Arizona Phase 1 (4nm-class) and Phase 2 (3nm) plus a planned Phase 3 will build real leading-edge capacity inside the United States. Apple, NVIDIA, AMD and others will have US-fabricated parts.",
      "But fabrication is only one step. CoWoS advanced packaging, much of the OSAT base and the deep ecosystem of equipment suppliers and chemical providers remain concentrated in Taiwan. A wafer fabricated in Arizona today still ships back to Taiwan for advanced packaging in many flows.",
      "Costs are also higher in Arizona than Taiwan, both for construction and operations. The fab will run, but it will not produce the same number of wafers per dollar. Geopolitical insurance is real; complete decoupling is not on offer this decade."
    ],
    flow: ["TSMC builds Arizona fab phases", "Customers qualify parts at Arizona", "Wafers ship to Taiwan for packaging", "Advanced packaging slowly moves toward US OSATs", "Cost premium absorbed by customer or government"],
    mentalModel: "Arizona is an emergency exit, not a relocation. The building is in the same place; the door is closer.",
    commonMisunderstanding: "Once Arizona ramps, Taiwan exposure goes away. It does not. Packaging, ecosystem and yield-learning concentration take a decade or more to migrate.",
    whyItMatters: "It is the most concrete geopolitical hedge in AI silicon, and the most-overpromised. Investors who treat it as a switch will misread the timeline.",
    relatedEntities: ["company:tsmc", "node:supply-chain-concentration", "scenario:s-tsmc"],
    relatedQuestions: ["q-tsmc-spof", "q-chips-act", "q-taiwan-risk", "q-china-domestic"],
    sourceIds: ["src-tsmc-cowos"],
    confidence: "inferred"
  },
  {
    id: "q-cowos-variants",
    question: "What is the practical difference between CoWoS-S, CoWoS-L and CoWoS-R?",
    audience: "technical", category: "Packaging", difficulty: "Advanced",
    shortAnswer: "Different interposer technologies under the same CoWoS umbrella. CoWoS-S uses a silicon interposer; CoWoS-L uses a local silicon interposer (LSI) embedded in an organic substrate; CoWoS-R uses an RDL-only redistribution layer. Each trades cost, area and bandwidth differently.",
    detailedAnswer: [
      "CoWoS-S is the original. A large silicon interposer carries connections between the GPU die and HBM stacks. Highest signal density and bandwidth, but the interposer itself is expensive and reticle-limited.",
      "CoWoS-L stitches smaller silicon bridges (LSIs) into an organic substrate to provide local high-density interconnect just where it is needed. Less silicon per package; large reticle area becomes more practical.",
      "CoWoS-R uses only an organic substrate with a high-density redistribution layer &mdash; cheaper, but with less interconnect density. Used for products where bandwidth requirements are lower or footprint is dominant.",
      "The roadmap has been a quiet move from CoWoS-S toward CoWoS-L for the largest accelerators, because reticle limits and cost both push that way."
    ],
    flow: ["Customer specifies bandwidth + area + cost", "CoWoS-S used where full silicon interposer is needed", "CoWoS-L used to stitch large packages with localized bridges", "CoWoS-R used where organic + RDL is sufficient", "Future generations move toward CoWoS-L for largest accelerators"],
    mentalModel: "CoWoS variants are like bridge engineering. The S variant is one giant suspension bridge. L is a sequence of shorter bridges joined together. R is a paved road.",
    commonMisunderstanding: "CoWoS is a single technology. There are several variants with different costs, area limits and bandwidth.",
    whyItMatters: "Variant choice influences how big a package can be, how much HBM it can host, and how much it costs. The CoWoS-L move is part of how Blackwell-class and Rubin-class designs scale beyond reticle limits.",
    relatedEntities: ["node:cowos", "node:3dfabric", "node:silicon-interposer", "company:tsmc"],
    relatedQuestions: ["q-cowos", "q-cowos-constrained", "q-3dfabric", "q-hbm-yield"],
    sourceIds: ["src-tsmc-cowos", "src-tsmc-3df"],
    confidence: "inferred"
  },
  {
    id: "q-hbm-yield",
    question: "Why is HBM yield the bottleneck behind the bottleneck?",
    audience: "technical", category: "Memory", difficulty: "Advanced",
    shortAnswer: "Because each HBM stack is a multi-die assembly with through-silicon vias. Every die has to be good and every TSV has to bond cleanly. One bad layer kills the whole stack &mdash; so HBM stack yield is materially lower than DRAM die yield.",
    detailedAnswer: [
      "A 12-Hi HBM3E or HBM4 stack is twelve DRAM dies plus a base logic die, vertically bonded with thousands of TSVs and microbumps. The probability of a perfect stack is the product of each step's success.",
      "Even with very high per-die yields, stack yield is materially lower. That is one reason HBM costs disproportionately more than the equivalent die area in standard DRAM, and why HBM capacity expansion is slower than wafer expansion.",
      "Customer-specific qualification adds another layer: NVIDIA, AMD and hyperscaler ASIC programs each qualify a memory supplier on their own platforms. Samsung's HBM3E qualification path at NVIDIA has been a recurring story for exactly this reason."
    ],
    flow: ["DRAM dies fabricated with high but imperfect yield", "Base die fabricated separately", "Stack bonded with TSVs and microbumps", "Stack tested electrically end-to-end", "Failed stack discarded entirely", "Qualified stacks ship to packaging"],
    mentalModel: "HBM yield is like baking a 12-layer cake where one bad layer ruins the whole thing. Even with good ingredients per layer, the cake-level yield is the product of all twelve.",
    commonMisunderstanding: "HBM is just stacked DRAM and should yield like DRAM. The stacking step changes the yield economics dramatically.",
    whyItMatters: "It is one of the structural reasons HBM supply lags GPU demand even when DRAM fabs are healthy. Memory makers' yield curves on HBM are a real input to GPU availability.",
    relatedEntities: ["node:hbm3e", "node:hbm4", "company:sk-hynix", "company:micron", "company:samsung-memory", "node:cowos"],
    relatedQuestions: ["q-hbm-stack", "q-hbm3e-vs-hbm4", "q-cowos-variants", "q-yield"],
    sourceIds: ["src-micron-hbm3e", "src-micron-hbm4", "src-samsung-hbm4"],
    confidence: "inferred"
  },
  {
    id: "q-3dfabric",
    question: "What is TSMC 3DFabric and why does it matter beyond CoWoS?",
    audience: "technical", category: "Packaging", difficulty: "Advanced",
    shortAnswer: "3DFabric is TSMC's umbrella for advanced packaging: CoWoS, InFO and SoIC. It matters because the future of leading-edge performance is increasingly in packaging, not just transistors.",
    detailedAnswer: [
      "Process scaling has slowed; transistor density gains per node are smaller than they were a decade ago. Advanced packaging compensates: putting more chips closer together, with more bandwidth between them, achieves what shrinking alone no longer can.",
      "3DFabric collects TSMC's options. CoWoS is 2.5D &mdash; dies on an interposer. InFO uses redistribution layers without an interposer. SoIC stacks dies vertically with hybrid bonding (face-to-face), achieving extremely fine-pitch vertical interconnect &mdash; the closest thing to a real 3D chip.",
      "AMD's Ryzen X3D V-Cache is an SoIC product. Apple uses InFO for its mobile parts. NVIDIA's accelerators sit at the leading edge of CoWoS. Future generations will combine them: SoIC stacks of compute + cache, sitting on a CoWoS-L interposer alongside HBM."
    ],
    flow: ["Process scaling slows", "Performance gains shift to packaging", "TSMC 3DFabric covers CoWoS / InFO / SoIC", "Compute + cache stacked via SoIC", "Stacks integrated on CoWoS-L with HBM", "Final accelerator delivers more bandwidth + closer dies"],
    mentalModel: "3DFabric is the airline alliance of advanced packaging. CoWoS is one airline; InFO and SoIC are siblings. Future products fly on more than one carrier inside the same package.",
    commonMisunderstanding: "Advanced packaging is just for high-end servers. It is now embedded in everything from phones (InFO) to consumer CPUs (SoIC) to AI accelerators (CoWoS).",
    whyItMatters: "If process scaling is slowing, the next decade of compute progress lives in packaging. Owning 3DFabric is therefore a structural advantage for TSMC.",
    relatedEntities: ["node:3dfabric", "node:cowos", "company:tsmc"],
    relatedQuestions: ["q-cowos-variants", "q-cowos", "q-process-node", "q-hbm-yield"],
    sourceIds: ["src-tsmc-3df", "src-tsmc-cowos"],
    confidence: "context"
  },

  /* ── Cloud / infrastructure ──────────────── */
  {
    id: "q-neocloud-vs-hyperscaler",
    question: "Why did neoclouds like CoreWeave win against AWS for GPU rentals?",
    audience: "investor", category: "Cloud", difficulty: "Intermediate",
    shortAnswer: "Because they specialised. AWS optimises for breadth of services; neoclouds optimise for raw GPU performance, fast deployment, and bare-metal access &mdash; which is exactly what AI labs needed during the supply crunch.",
    detailedAnswer: [
      "AWS, Azure and GCP carry decades of multi-tenant infrastructure, virtualisation, security tooling and service breadth. That is excellent for general workloads &mdash; and overhead for AI training, where customers want predictable performance, fast InfiniBand fabrics, and bare-metal access.",
      "CoreWeave, Lambda, Crusoe and similar operators built their fleets around the AI workload from day one: bare-metal GPU servers, InfiniBand-first networks, no virtualisation tax, faster deployment. They also moved earlier on GB200 NVL72 and rack-scale designs.",
      "The result was a window where neoclouds priced very competitively against hyperscalers on raw GPU-hours. As hyperscalers responded (P6 at AWS, GB300 NVL72 at Azure), the gap narrowed; the structural lesson stays: specialisation captured share when the supply mix and workload shape moved fast."
    ],
    flow: ["AI lab needs fast GPU rentals", "Hyperscaler stack adds virtualisation overhead", "Neocloud offers bare-metal + InfiniBand", "Faster deployment + lower per-hour cost", "Hyperscalers respond with new instances", "Mix of neocloud and hyperscaler stabilises"],
    mentalModel: "Neoclouds are AI's budget airlines. They cut everything that is not GPU-and-fabric, win on price and turnaround, and force the legacy carriers to add stripped-down fares.",
    commonMisunderstanding: "Hyperscalers are obviously cheaper at scale. For specialised AI workloads, that is not always true once you account for performance variance and deployment time.",
    whyItMatters: "The neocloud category is now a permanent part of the AI cloud market, with material NVIDIA share and material implications for hyperscaler pricing.",
    relatedEntities: ["company:coreweave", "company:lambda", "company:azure", "company:aws", "company:gcp", "path:path-cloud-distribution"],
    relatedQuestions: ["q-cloud-monetize", "q-bare-metal", "q-asics-replacement", "q-second-winners"],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-bare-metal",
    question: "Why do AI labs want bare-metal GPU access?",
    audience: "technical", category: "Cloud", difficulty: "Intermediate",
    shortAnswer: "Because virtualisation adds latency, jitter and overhead that show up as wasted GPU time and unstable training runs at scale. Bare metal removes the layer between the workload and the hardware.",
    detailedAnswer: [
      "Virtualisation is the standard cloud abstraction: a hypervisor multiplexes physical hardware across tenants. For most workloads, the overhead is negligible. For large-model training that runs for weeks across thousands of GPUs, even small per-step overheads accumulate into days of wasted GPU time.",
      "Worse, jitter (variable per-step latency) interacts badly with collective operations. Training stalls until the slowest GPU finishes; small variance per node becomes large variance for the cluster.",
      "Bare metal eliminates the hypervisor and gives the workload direct access to NICs, GPUs and memory. RDMA over InfiniBand or Spectrum-X then ties the cluster together with predictable latency. Hyperscaler bare-metal instances and neocloud designs both reflect this requirement."
    ],
    flow: ["Training job dispatches step", "All GPUs compute gradients", "Collective all-reduce begins", "Slowest GPU finishes", "Step completes", "Variance + virtualisation overhead stretch step time", "Bare metal flattens the variance"],
    mentalModel: "A virtualised cloud is a city bus &mdash; great for most riders, but if you are racing, every stop costs you. Bare metal is your own car on the same road.",
    commonMisunderstanding: "Virtualisation overhead is too small to matter. At cluster scale, even sub-1% overhead per GPU compounds into days of cluster time per training run.",
    whyItMatters: "Bare-metal availability is now a market-share lever between cloud operators. AI labs pick clouds partly on this dimension.",
    relatedEntities: ["company:coreweave", "company:lambda", "company:azure", "company:aws", "node:rack-scale-computing"],
    relatedQuestions: ["q-neocloud-vs-hyperscaler", "q-cluster-resilience", "q-gpu-utilization", "q-nvlink-importance"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-gpu-utilization",
    question: "Why do GPU clusters often run at 30&ndash;50% utilization?",
    audience: "operator", category: "Operations", difficulty: "Advanced",
    shortAnswer: "Because raw GPU FLOPS are rarely the bottleneck. Memory bandwidth, networking, kernel inefficiencies, data pipelines, scheduling and recoveries all add up. Even well-tuned training jobs leave large amounts of headroom on the table.",
    detailedAnswer: [
      "Headline GPU utilization (nvidia-smi 'GPU-Util') only reports whether any kernel is running; it can be 100% while the math units sit idle. The honest metric is Model FLOPS Utilization (MFU): of the GPU's theoretical peak FLOPS, how many are actually doing useful work for the model.",
      "Public estimates put MFU at 40&ndash;60% for state-of-the-art training runs and lower for inference. The gap comes from memory bandwidth limits, communication overhead between GPUs, kernel boundary launch costs, data-loading bottlenecks and scheduling stalls during failure recovery.",
      "Closing the gap is what TensorRT, NCCL tuning, FlashAttention, fused kernels and software like Run:AI exist to do. Each percentage point of MFU is worth millions of dollars on a 10K-GPU cluster."
    ],
    flow: ["Workload dispatches", "Memory bandwidth limits arithmetic intensity", "Collective communication interleaves", "Failure recovery occasionally pauses cluster", "Kernel launches add overhead", "Effective FLOPS land at ~50%"],
    mentalModel: "GPU utilisation is like factory utilisation. The machines may run all day, but the time they spend cutting metal &mdash; the value-add &mdash; is much less.",
    commonMisunderstanding: "100% nvidia-smi means the GPU is fully used. It does not. It only means a kernel is running; it does not measure compute efficiency.",
    whyItMatters: "Real cluster economics depend on MFU, not on dollars-per-GPU-hour. Operators ignoring the gap pay for capacity that is not producing tokens.",
    relatedEntities: ["node:cuda", "node:tensorrt", "node:nvlink", "node:nccl"],
    relatedQuestions: ["q-cluster-resilience", "q-tokens-per-watt", "q-nccl-collectives", "q-tensorrt-moat"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-cluster-resilience",
    question: "How does a 100K-GPU training run survive when GPUs fail every hour?",
    audience: "technical", category: "Operations", difficulty: "Expert",
    shortAnswer: "Through aggressive checkpointing, hot spares, parallelism strategies that tolerate node loss, and orchestration software that detects, isolates and reschedules around failures within minutes.",
    detailedAnswer: [
      "At 100K GPUs, mean time between any-component-failure drops to hours. Drives, optical transceivers, NICs, GPUs themselves, and software faults all contribute. Without resilience, the cluster would never finish a single epoch.",
      "Three layers handle this. First, checkpoints write model state to durable storage every few thousand steps. Second, parallelism strategies (3D, FSDP) distribute state so a node loss is recoverable from peers without restarting from scratch. Third, orchestration (Slurm, Kubernetes + scheduler, Run:AI, NVIDIA Mission Control) detects failed nodes, drains workload, reroutes around them, and restarts from the last good checkpoint.",
      "The result is that a frontier training run is closer to running a power grid than a single program. Failures are constant; the system is engineered so the workload's progress curve is monotonic anyway."
    ],
    flow: ["Training step starts", "Hardware or software fault on a node", "Orchestration detects + isolates node", "Surviving nodes resume from last checkpoint", "Replacement node joins", "Training progresses with brief pause"],
    mentalModel: "A frontier training cluster is closer to an oil refinery than a server. Components fail constantly; the plant keeps running because every subsystem is engineered for it.",
    commonMisunderstanding: "Big training runs are big single programs. They are highly engineered fault-tolerant systems &mdash; the program is small; the operations engineering is enormous.",
    whyItMatters: "Cluster resilience is now a primary input to which clouds AI labs pick. It is also where Run:AI (NVIDIA-acquired), Mission Control and similar tools earn their place.",
    relatedEntities: ["node:nccl", "node:cuda", "company:azure", "company:coreweave", "node:rack-scale-computing"],
    relatedQuestions: ["q-gpu-utilization", "q-bare-metal", "q-nvidia-acquisitions", "q-nccl-collectives"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-ai-dc-design",
    question: "What makes an AI data center physically different from a hyperscale data center?",
    audience: "operator", category: "AI factory", difficulty: "Intermediate",
    shortAnswer: "Higher rack density (100+ kW vs ~10 kW), liquid cooling rather than air, much higher per-rack power feeds, dedicated InfiniBand or Spectrum-X spine, and compute-floor layouts built for rack-scale rather than server-scale units.",
    detailedAnswer: [
      "A traditional hyperscale rack runs 5&ndash;15 kW. An AI rack today runs 60&ndash;120+ kW; GB300 NVL72 is even higher. Power distribution, busways, transformers and switchgear are all sized differently &mdash; an existing data center cannot just be 'turned into' an AI data center by swapping racks.",
      "Liquid cooling is the second big shift. CDUs, manifolds, cold plates, leak detection and a facility loop are first-order infrastructure, not options. Greenfield AI data centers are designed around the loop; retrofits often touch the entire mechanical plant.",
      "Networking and floor layout follow: dedicated InfiniBand or Spectrum-X spine, very short cable runs between racks for the fabric, and operating procedures designed around rack-scale (NVL72) rather than 1U / 2U server units."
    ],
    flow: ["Site + power secured", "120 kW-class rack power feed installed", "Liquid loop and CDUs sized", "Compute floor built for short-reach fabric", "NVL72 racks delivered and commissioned", "Cluster brought up as one unit"],
    mentalModel: "An AI data center is to a hyperscale data center what a Formula 1 paddock is to a parking lot. Same general concept; entirely different engineering envelope.",
    commonMisunderstanding: "An existing data center can be 'upgraded' to AI capacity. The mechanical and electrical envelope usually has to be redesigned; in many cases retrofitting is impossible.",
    whyItMatters: "It is the physical reason AI capacity is gated by facility design and grid timing as much as by GPUs themselves.",
    relatedEntities: ["node:ai-factory", "node:liquid-cooling-tech", "node:gb200-nvl72", "company:vertiv", "company:schneider"],
    relatedQuestions: ["q-liquid-cooling", "q-power-bound", "q-cooling-types", "q-ppa"],
    sourceIds: ["src-iea-energy"],
    confidence: "context"
  },
  {
    id: "q-ppa",
    question: "How does a 20-year power-purchase agreement actually work?",
    audience: "investor", category: "Power", difficulty: "Intermediate",
    shortAnswer: "The buyer (a hyperscaler) commits to paying for a defined quantity of electricity at a contracted price for 10&ndash;25 years. The seller (a generator) commits to delivering that quantity. The contract underwrites the project finance for new generation.",
    detailedAnswer: [
      "Most utility-scale renewable projects, nuclear restarts and SMR developments cannot be financed without a long-term offtaker. Banks need certainty that the power will be sold at a known price for a known duration.",
      "A PPA gives the seller that certainty. In return, the buyer gets predictable energy cost (and increasingly, carbon-free attributes) at scale. Microsoft's Three Mile Island restart, Google's Kairos SMR pre-orders, and Meta's renewable PPAs are all in this family.",
      "Risk allocation is the heart of the negotiation. Volume risk, basis risk, curtailment risk, congestion risk and credit risk all have to land somewhere. Sophisticated AI buyers bring legal and energy-trading capability that traditional utility customers do not."
    ],
    flow: ["Hyperscaler models multi-decade load", "Identifies generator + project", "Negotiates PPA (price + quantity + duration + risk)", "PPA underwrites project finance", "Plant built and energised", "Power flows for the contract term"],
    mentalModel: "A PPA is a multi-decade futures contract on electricity. The buyer locks in price; the seller locks in revenue. The grid is the delivery mechanism.",
    commonMisunderstanding: "A PPA just means a green badge. It is a real, contractually binding offtake commitment that funds the underlying asset.",
    whyItMatters: "PPAs are how hyperscalers convert capex into energy supply. Understanding them is the only way to read the nuclear restarts, SMR pre-orders and renewable announcements correctly.",
    relatedEntities: ["company:constellation-energy", "company:nextera", "company:azure", "node:power-generation"],
    relatedQuestions: ["q-microsoft-tmi", "q-smr", "q-power-bound", "q-grid-interconnect"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-water",
    question: "How much water does an AI factory use, and where does it come from?",
    audience: "operator", category: "Power", difficulty: "Intermediate",
    shortAnswer: "Between roughly 0.1 and 5 liters of water per kWh of IT load, depending on cooling design and climate. The water is used mostly for evaporative cooling towers; closed-loop liquid cooling reduces it dramatically but does not eliminate it.",
    detailedAnswer: [
      "Most large data centers use evaporative cooling for facility-side heat rejection. The water cost depends on climate (drier and hotter regions consume more), on the cooling design (open vs closed loop), and on load.",
      "AI workloads concentrate heat. Direct-to-chip liquid cooling reduces facility water consumption per kWh because more heat is rejected through closed loops. But the facility loop still uses cooling towers in many designs.",
      "Public reports suggest hyperscaler campuses can consume hundreds of millions of liters per year. Siting decisions in arid regions (Phoenix, Las Vegas) are now politically sensitive. New AI campuses in cooler or coastal climates have a structural water advantage."
    ],
    flow: ["Servers generate heat", "Direct-to-chip loops capture most of it", "Facility loop rejects heat to cooling tower", "Cooling tower evaporates water", "Water sourced from utility / municipal supply", "Local watershed absorbs the load"],
    mentalModel: "An AI campus's water bill is its hidden electricity bill. The two are joined: every BTU rejected to the air takes some water with it.",
    commonMisunderstanding: "Liquid cooling means the campus uses less water. It uses less per unit of compute, but absolute water usage rises with absolute load.",
    whyItMatters: "Water availability is now part of siting. Some AI campuses cannot be permitted in their preferred location at all because the watershed cannot support them.",
    relatedEntities: ["node:liquid-cooling-tech", "node:ai-factory", "company:vertiv", "company:schneider"],
    relatedQuestions: ["q-cooling-types", "q-ai-dc-design", "q-power-bound"],
    sourceIds: ["src-iea-energy"],
    confidence: "context"
  },

  /* ── Networking depth ────────────────────── */
  {
    id: "q-optical-transceivers",
    question: "Why are optical transceivers part of the AI moat?",
    audience: "technical", category: "Networking", difficulty: "Advanced",
    shortAnswer: "Because every link between racks, and increasingly inside racks, is optical. Pluggable transceivers (400G, 800G, 1.6T) are a quiet but enormous part of AI capex, and supply concentrates in a handful of vendors.",
    detailedAnswer: [
      "Inside an NVL72 rack, GPU-to-GPU traffic runs over copper NVLink. Between racks, the spine and leaf fabric is optical &mdash; pluggable transceivers (QSFP-DD, OSFP) carrying 400G, 800G and now 1.6T per port.",
      "A frontier cluster uses millions of dollars of transceivers. Coherent and IM/DD optical components (lasers, modulators, drivers, retimers) come from Coherent / Lumentum / II-VI's portfolio, Innolight, Eoptolink, Marvell, Broadcom and a few others.",
      "Lead times have stretched and supply has been a real bottleneck through 2024&ndash;2025. The shift to 1.6T-class optics and to co-packaged optics is the next inflection."
    ],
    flow: ["Compute rack outputs traffic", "ConnectX SuperNIC drives optical port", "Pluggable transceiver converts electrical to optical", "Fiber to spine switch", "Spine forwards to destination rack", "Reverse path on the other side"],
    mentalModel: "Optical transceivers are AI's plumbing. Invisible, expensive, and the system stops without them.",
    commonMisunderstanding: "Optics is generic networking gear. AI-class optics is highly specialised, supply-constrained and concentrated in a small vendor base.",
    whyItMatters: "Optical capacity is a real near-term gate on cluster scale. It also represents a meaningful slice of AI capex flowing to specific vendors.",
    relatedEntities: ["node:optical", "node:connectx", "node:spectrum-x", "node:quantum-ib"],
    relatedQuestions: ["q-co-packaged-optics", "q-ib-vs-spectrum-x", "q-bottlenecks-overview"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-co-packaged-optics",
    question: "What is co-packaged optics and why is it the next big shift?",
    audience: "technical", category: "Networking", difficulty: "Expert",
    shortAnswer: "CPO moves the optical engine from a pluggable transceiver into the same package as the switch ASIC or NIC. It cuts power, latency and size &mdash; needed because pluggable optics are running out of headroom at 1.6T and beyond.",
    detailedAnswer: [
      "A pluggable transceiver sits at the front of the switch and converts electrical to optical. As port speeds rise, the electrical link between the switch ASIC and the front-panel pluggable becomes the limiting factor for power and signal integrity.",
      "Co-packaged optics integrates the optics directly with the switch ASIC inside one package. The electrical hop is reduced from inches to millimeters. Power per bit drops, signal integrity improves, and port density goes up.",
      "NVIDIA, Broadcom, Marvell and others have demonstrated CPO. Adoption is gated by reliability, repairability and supply chain readiness. The 1.6T generation and beyond is where CPO becomes economically necessary, not just attractive."
    ],
    flow: ["Switch ASIC needs to drive optical signal", "Electrical lanes too lossy at 1.6T", "Optics moves into the package (CPO)", "Power per bit drops", "Port density rises", "Cluster scales with less switching power"],
    mentalModel: "Co-packaged optics is in-engine fuel injection vs a pluggable carburettor. Same combustion; far less waste in the connecting plumbing.",
    commonMisunderstanding: "CPO is a marketing roadmap item. It is a real engineering response to an actual physical limit on pluggable optics.",
    whyItMatters: "CPO will reshape who supplies switches and NICs at the next networking generation. It is one of the more important component-level shifts ahead.",
    relatedEntities: ["node:optical", "node:spectrum-x", "node:quantum-ib", "company:broadcom"],
    relatedQuestions: ["q-optical-transceivers", "q-ib-vs-spectrum-x", "q-nvlink-importance"],
    sourceIds: [],
    confidence: "forwardLooking"
  },
  {
    id: "q-nccl-collectives",
    question: "Why is NCCL part of NVIDIA's moat that most people miss?",
    audience: "technical", category: "Software moat", difficulty: "Advanced",
    shortAnswer: "Because every distributed training run depends on collective operations &mdash; all-reduce, all-gather, reduce-scatter &mdash; and NCCL is the implementation that makes them fast on NVIDIA fabrics. Replacing it is harder than replacing CUDA itself.",
    detailedAnswer: [
      "Distributed training synchronises gradients between GPUs every step. The dominant operation is all-reduce: every GPU contributes its values, every GPU receives the sum. NCCL is NVIDIA's library for these collectives.",
      "NCCL is co-designed with NVLink, NVSwitch and ConnectX SuperNICs. It picks topology-aware reduction trees, overlaps communication with computation, and is integrated tightly with PyTorch's DDP, FSDP and Megatron-LM. Frameworks default to it.",
      "Alternatives exist (RCCL on AMD; oneCCL; gloo for CPU). At cluster scale, none match NCCL's tuning. That is why even ROCm-based training uses NCCL-shaped collectives. Replacing NCCL means rebuilding decades of topology and pattern-matching work."
    ],
    flow: ["Training step computes gradients", "PyTorch calls NCCL all-reduce", "NCCL picks topology-aware tree", "Collective uses NVLink + NVSwitch + InfiniBand", "Sum returns to every GPU", "Next step proceeds"],
    mentalModel: "NCCL is the postal service of distributed AI. Every training run depends on a fast, reliable mail run between GPUs &mdash; even alternatives quietly use NVIDIA-shaped routes.",
    commonMisunderstanding: "Networking software is a thin layer. NCCL is the bridge between NVIDIA's hardware and every framework's distributed training path. The moat is real and underappreciated.",
    whyItMatters: "Cluster-scale performance lives or dies in collective-operation efficiency. NCCL is therefore part of what investors evaluating substitutes have to model.",
    relatedEntities: ["node:nvlink", "node:nvswitch", "node:cuda", "node:rack-scale-computing"],
    relatedQuestions: ["q-nvlink-importance", "q-cluster-resilience", "q-gpu-utilization", "q-cuda-lockin"],
    sourceIds: [],
    confidence: "context"
  },

  /* ── Power / cooling depth ───────────────── */
  {
    id: "q-grid-interconnect",
    question: "Why does a grid interconnect take 3&ndash;7 years?",
    audience: "operator", category: "Power", difficulty: "Intermediate",
    shortAnswer: "Because connecting a new large load (or a new generator) to the bulk power system requires queue position, system impact studies, transmission upgrades, equipment manufacturing lead time, and regulatory approval &mdash; each measured in years.",
    detailedAnswer: [
      "Every major US grid operator (PJM, MISO, ERCOT, CAISO and others) maintains an interconnection queue. New loads or generators apply, the operator runs studies on system impacts (stability, voltage, congestion), and assigns upgrades.",
      "Required upgrades often involve new substations, transformers and transmission lines. Large transformers have global lead times measured in years. Permitting and rights-of-way for new transmission lines are slower still.",
      "AI campuses can request 200&ndash;500 MW. That is utility-scale. The queue, the studies, the permitting and the equipment all stack up. Three to seven years is now a typical quoted timeline; some studies put new transmission build at a decade."
    ],
    flow: ["Customer applies for interconnection", "Operator runs system impact study", "Upgrades identified (substations, transformers, lines)", "Equipment ordered (multi-year lead time)", "Permits + rights-of-way obtained", "Construction + commissioning", "Site energised"],
    mentalModel: "A grid interconnect is closer to a major airport runway extension than a service installation. The complexity is the network it joins, not the building at the end.",
    commonMisunderstanding: "Power is just an electrician's job. At AI-campus scale, it is a multi-year regulated infrastructure project.",
    whyItMatters: "It is the structural reason 'just build more data centers' is not a near-term fix. The grid lead time is the binding constraint.",
    relatedEntities: ["node:grid-access", "node:power-generation", "company:dominion", "company:nextera"],
    relatedQuestions: ["q-power-bound", "q-transformer-shortage", "q-northern-virginia", "q-stranded-gas"],
    sourceIds: ["src-iea-energy"],
    confidence: "sourced"
  },
  {
    id: "q-transformer-shortage",
    question: "Why is there a global transformer shortage?",
    audience: "operator", category: "Power", difficulty: "Intermediate",
    shortAnswer: "Because demand from AI campuses, grid expansion, EV charging and renewables ramped together, while transformer manufacturing capacity is concentrated, slow to expand, and dependent on grain-oriented electrical steel (GOES) that is itself supply-limited.",
    detailedAnswer: [
      "Power transformers are large, custom, slow-to-build and concentrated in a small number of manufacturers (Hitachi Energy, Siemens Energy, GE Vernova, Hyundai, Mitsubishi). Lead times have stretched to 2&ndash;4 years on large units.",
      "Grain-oriented electrical steel (GOES), the magnetic core material, is itself supply-limited. New plants take years to build; trade flows around GOES are policy-sensitive.",
      "AI demand alone would not have caused a global shortage; it stacks on top of grid hardening (post-storm, post-wildfire), EV charger build-out, distributed-energy interconnection and aging-fleet replacement. The result is multi-year delays on equipment that everything else waits on."
    ],
    flow: ["Demand surges across AI / EV / renewables / grid hardening", "Transformer capacity concentrated in a few makers", "GOES steel itself constrained", "Lead times stretch to 2&ndash;4 years", "AI campus schedules slip", "Power equipment becomes a real bottleneck"],
    mentalModel: "Transformers are the steel beams of the electric grid. You cannot finish the building without them, and there are only a few mills in the world.",
    commonMisunderstanding: "Transformers are commodity equipment. They are highly engineered, custom units with long lead times.",
    whyItMatters: "Investors and operators planning AI campuses without verifying transformer slots will miss schedule. It is one of the unglamorous gates on actual deployment.",
    relatedEntities: ["company:siemens-energy", "company:hitachi-energy", "node:grid-access", "node:power-generation"],
    relatedQuestions: ["q-grid-interconnect", "q-power-bound", "q-second-winners"],
    sourceIds: ["src-iea-energy"],
    confidence: "sourced"
  },
  {
    id: "q-smr",
    question: "Why are hyperscalers pre-ordering small modular reactors?",
    audience: "investor", category: "Power", difficulty: "Intermediate",
    shortAnswer: "Because AI campuses need firm, carbon-free, multi-decade gigawatt-class power. SMRs are the only emerging generation technology that combines those properties at the scale and timeline hyperscalers can underwrite.",
    detailedAnswer: [
      "Renewables are abundant but intermittent. Combined-cycle gas is firm but emits. Hydro is location-bound. Nuclear restarts (e.g. Three Mile Island for Microsoft) are limited to existing assets. Small modular reactors target the gap: factory-built, gigawatt-class over multiple units, deployable on shorter horizons than traditional reactors.",
      "Google announced an SMR offtake with Kairos. Amazon disclosed investment in X-energy. Oracle has discussed three SMRs for a planned data center campus. The pattern is hyperscalers committing to SMR programs whose first units arrive in the early 2030s.",
      "Risks are real: regulatory approval (NRC) is still in process for most designs, no SMR is in commercial operation yet at scale in the US, and unit economics will only become clear once first plants ship. But the absence of viable alternatives at the right size and carbon profile makes the bet rational."
    ],
    flow: ["Hyperscaler models multi-decade load + carbon target", "Identifies SMR developer (Kairos, X-energy, NuScale)", "Pre-orders + invests", "NRC + state regulatory approvals proceed", "First commercial unit deployed (early 2030s)", "PPA-backed power flows"],
    mentalModel: "SMR pre-orders are AI's seed funding for the next-decade grid. The first units are the proof-of-concept the second wave depends on.",
    commonMisunderstanding: "SMRs are a green-marketing prop. They are real multi-billion-dollar offtake commitments from companies that need actual electricity.",
    whyItMatters: "The SMR cohort that succeeds will define which hyperscalers have firm power on the 2030s curve. It is one of the longest-horizon strategic bets in the AI build-out.",
    relatedEntities: ["company:constellation-energy", "company:nextera", "company:azure", "node:power-generation"],
    relatedQuestions: ["q-microsoft-tmi", "q-power-bound", "q-ppa", "q-stranded-gas"],
    sourceIds: ["src-iea-energy"],
    confidence: "forwardLooking"
  },
  {
    id: "q-cooling-types",
    question: "Direct-to-chip vs immersion vs rear-door &mdash; which cooling wins?",
    audience: "operator", category: "Cooling", difficulty: "Advanced",
    shortAnswer: "Direct-to-chip liquid cooling is winning at AI rack scale. Rear-door heat exchangers retrofit older facilities; immersion remains niche in production despite efficiency advantages, because operations and serviceability are harder.",
    detailedAnswer: [
      "Direct-to-chip (DLC) puts cold plates on every GPU and CPU and circulates coolant through manifolds to a CDU. NVIDIA's NVL72 reference designs assume DLC. Most new AI campus designs follow.",
      "Rear-door heat exchangers replace the rack's rear door with a liquid-cooled radiator. They cool the warm exhaust air rather than the silicon directly. Useful for retrofitting hyperscale facilities that cannot adopt full DLC, but limited at very high rack densities.",
      "Immersion cooling submerges hardware in dielectric fluid. Two-phase variants are extremely efficient. In production, it remains niche &mdash; serviceability, fluid management, hardware certification and operator unfamiliarity all weigh against it. Some sovereign and HPC sites use it; mainstream AI clouds do not, yet."
    ],
    flow: ["AI rack density rises to 100+ kW", "Air cooling fails", "Direct-to-chip becomes default for new builds", "Rear-door retrofits existing campuses", "Immersion remains specialty"],
    mentalModel: "Cooling choices are like racing tire compounds. Different tradeoffs for different conditions; the dominant choice in most paddocks is one type for a reason.",
    commonMisunderstanding: "Immersion is obviously better and will take over. Operationally, the friction is real; the dominant production choice is direct-to-chip.",
    whyItMatters: "Cooling architecture is now part of campus economics and serviceability. Operators picking the wrong fit pay in capex, opex or both.",
    relatedEntities: ["node:liquid-cooling-tech", "company:vertiv", "company:coolit", "company:schneider"],
    relatedQuestions: ["q-liquid-cooling", "q-ai-dc-design", "q-water"],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-stranded-gas",
    question: "Why are AI factories now eating stranded gas wells?",
    audience: "investor", category: "Power", difficulty: "Advanced",
    shortAnswer: "Because stranded gas (gas with no pipeline takeaway) is essentially free fuel. Co-locating an AI data center with a gas-fired generator at the wellhead converts a worthless resource into firm gigawatt-class power without queueing for grid interconnect.",
    detailedAnswer: [
      "Vast quantities of natural gas in the US are stranded &mdash; produced as a byproduct of oil drilling but unable to reach a market because pipeline capacity is missing. The gas is currently flared (burned at the wellhead) or vented. Operators pay to dispose of it.",
      "An AI data center with on-site gas generation can buy that gas extremely cheaply, run a turbine or reciprocating engine, and produce its own power without grid interconnect. The result: gigawatt-class campuses with multi-year time-to-power advantages over grid-tied alternatives.",
      "Crusoe Energy was the early mover. The pattern has since spread &mdash; Texas, the Marcellus and the Permian have hosted multiple co-located builds. Environmental tradeoffs (emissions, water, methane leaks) are real and politically contested."
    ],
    flow: ["Oil well produces stranded gas", "Gas flared or vented (low value)", "Operator co-locates AI campus", "On-site turbine burns gas", "Power feeds GPUs without grid wait", "Campus operates outside utility queue"],
    mentalModel: "Stranded gas + AI is a heat-recovery story at industrial scale. A waste byproduct meets a demand source; both sides are better off.",
    commonMisunderstanding: "Behind-the-meter gas is a fringe play. It is now a meaningful part of how operators get to power on a 12&ndash;24 month timeline rather than 5+ years.",
    whyItMatters: "It is one of the most important loopholes in the grid-bottleneck story. Operators who can deploy at the wellhead beat operators waiting for interconnection.",
    relatedEntities: ["company:crusoe", "node:power-generation", "node:grid-access", "node:ai-factory"],
    relatedQuestions: ["q-power-bound", "q-grid-interconnect", "q-smr", "q-ppa"],
    sourceIds: [],
    confidence: "inferred"
  },

  /* ── Software depth ──────────────────────── */
  {
    id: "q-pytorch-moat",
    question: "Why is PyTorch part of NVIDIA's moat &mdash; and partly its risk?",
    audience: "technical", category: "Software moat", difficulty: "Intermediate",
    shortAnswer: "PyTorch is the default framework for AI research and most production training. It runs best on CUDA, which deepens the NVIDIA moat. But it is open and not owned by NVIDIA &mdash; if a credible non-NVIDIA backend ever matures, the framework would let users move.",
    detailedAnswer: [
      "PyTorch (originally Meta-led, now PyTorch Foundation) is the framework most AI researchers grew up on. Almost every model architecture ships with PyTorch reference code. CUDA paths are deeply optimised; ROCm support has improved but lags.",
      "For NVIDIA, that is a structural advantage: every PyTorch user is a CUDA user by default. cuDNN, NCCL and TensorRT plug in transparently. The cumulative tooling means most workloads run faster on NVIDIA than on alternatives.",
      "The risk is that PyTorch is open. If AMD ROCm, Intel oneAPI or hyperscaler ASIC backends ever match the CUDA experience inside PyTorch, the cost of switching for a developer drops sharply. PyTorch is the layer where substitution becomes possible &mdash; if the hardware below it matures."
    ],
    flow: ["Researcher writes model in PyTorch", "PyTorch dispatches to backend (CUDA by default)", "cuDNN / NCCL / TensorRT optimise execution", "Model trains on NVIDIA hardware", "Open framework keeps door open for alternative backends if they mature"],
    mentalModel: "PyTorch is a power-tool brand that still mostly sells NVIDIA-shaped batteries. The brand is open; the battery market is currently single-supplier in practice.",
    commonMisunderstanding: "PyTorch belongs to NVIDIA. It does not. It is open, governed by a foundation, and serves multiple backends &mdash; but in practice, CUDA is dominant.",
    whyItMatters: "PyTorch is where the CUDA moat is most solid in practice and most contestable in theory. Investors should treat both sides seriously.",
    relatedEntities: ["node:cuda", "node:cuda-lock-in", "node:tensorrt", "node:hyperscaler-asics"],
    relatedQuestions: ["q-cuda-lockin", "q-rocm-vs-cuda", "q-cuda-vs-triton", "q-asics-replacement"],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-cuda-vs-triton",
    question: "OpenAI's Triton vs NVIDIA TensorRT &mdash; substitution or symbiosis?",
    audience: "technical", category: "Software moat", difficulty: "Advanced",
    shortAnswer: "Different things. OpenAI Triton is a kernel-authoring DSL that compiles to CUDA (or other backends) &mdash; it makes writing custom GPU kernels easier. TensorRT is NVIDIA's inference compiler that optimises a whole model. They coexist; neither replaces the other.",
    detailedAnswer: [
      "OpenAI Triton (the language) is a Python-embedded DSL for writing GPU kernels. It generates PTX or other low-level code through a compiler stack. Researchers use it to write custom attention, matmul or sampling kernels far faster than raw CUDA.",
      "TensorRT is a model compiler. It takes a PyTorch / ONNX model and produces an optimised inference runtime: layer fusion, precision selection, kernel selection. It assembles CUDA kernels but does not write new ones from scratch.",
      "The relationship is symbiotic. Triton kernels can plug into TensorRT-optimised models. NVIDIA's own work on Triton (the OpenAI compiler) and on Triton Inference Server (separate product, confusing name) both deepen the NVIDIA path. Long-term, Triton's multi-backend potential is the open lane that someone (AMD, hyperscaler ASIC) could exploit."
    ],
    flow: ["Researcher writes a custom kernel in Triton", "Triton compiles to PTX / SASS", "Kernel ships in PyTorch model", "Model passed through TensorRT for inference", "TensorRT picks kernels (including Triton-authored) and serves them"],
    mentalModel: "Triton is a power saw; TensorRT is the carpenter assembling the house. Both belong on the worksite; neither replaces the other.",
    commonMisunderstanding: "Triton replaces CUDA. It compiles to CUDA (today) and is one of CUDA's most important productivity layers, not a substitute.",
    whyItMatters: "If you cannot tell these tools apart, you will read the substitution narrative wrong. Triton is mostly CUDA-deepening today; the multi-backend potential is the long lever.",
    relatedEntities: ["node:cuda", "node:tensorrt", "node:cuda-lock-in"],
    relatedQuestions: ["q-cuda-lockin", "q-tensorrt-moat", "q-pytorch-moat", "q-rocm-vs-cuda"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-cuda-versions",
    question: "Why is CUDA's backward compatibility a moat?",
    audience: "technical", category: "Software moat", difficulty: "Intermediate",
    shortAnswer: "Because code written for CUDA in 2010 still runs on a 2025 H200. That decade-plus stability lets enterprises and labs accumulate production code without rewrite, which competing platforms cannot promise.",
    detailedAnswer: [
      "NVIDIA has invested heavily in CUDA's compatibility story. Compute capability versioning lets newer GPUs run older kernels; PTX intermediate representation is forward-portable; runtime abstractions hide many architectural changes.",
      "For enterprises, that means a CUDA application written five years ago still runs on the latest hardware. Internal tools, custom kernels, profiling workflows and CI pipelines all carry forward. Migration to a different platform restarts that decade.",
      "ROCm, oneAPI and hyperscaler-ASIC stacks are too young to have the same record. Even if their current generation matches CUDA on benchmark X, the question is whether code written for them today will still run in 2035. CUDA's track record is part of the answer that no competitor can yet give."
    ],
    flow: ["CUDA application written years ago", "Newer GPU released", "Same binary or PTX runs unchanged", "Application gains hardware speedup without rewrite", "Enterprise commits more code to the platform"],
    mentalModel: "CUDA's backward compatibility is x86's compatibility story for AI. Decades of code runs forward, and the platform compounds.",
    commonMisunderstanding: "Compatibility is a free byproduct. It is engineered, expensive, and a deliberate strategic choice that competing platforms have not all matched.",
    whyItMatters: "Enterprise adoption decisions hinge on long-term compatibility. The CUDA record is one of the most underappreciated parts of the moat.",
    relatedEntities: ["node:cuda", "node:cuda-lock-in", "node:hopper", "node:blackwell"],
    relatedQuestions: ["q-cuda-lockin", "q-rocm-vs-cuda", "q-pytorch-moat", "q-tensorrt-moat"],
    sourceIds: ["src-nvidia-cuda"],
    confidence: "inferred"
  },
  {
    id: "q-nvidia-acquisitions",
    question: "What did NVIDIA actually buy with Mellanox, Run:AI and OctoAI?",
    audience: "investor", category: "Strategy", difficulty: "Intermediate",
    shortAnswer: "Mellanox bought the data-center networking layer (InfiniBand, Ethernet, NICs). Run:AI bought the cluster orchestration and GPU fractioning layer. OctoAI bought inference-platform and serving expertise. Each closed a gap that lay above the GPU.",
    detailedAnswer: [
      "Mellanox (closed 2020) is now responsible for InfiniBand, Spectrum-X Ethernet, ConnectX SuperNICs, and the entire networking layer. It turned NVIDIA from a chip company into a rack-scale system company. Without Mellanox, NVL72-class fabrics would not exist.",
      "Run:AI (announced 2024) brought GPU orchestration software: workspace virtualization, GPU fractioning, queue management and developer-friendly cluster operations. It is now the substrate for NVIDIA Mission Control and the orchestration layer for AI factories.",
      "OctoAI (announced 2024) brought inference-platform expertise: model deployment, serving optimisation, multi-model routing. It strengthens the inference / NIM / Triton serving stack at exactly the moment inference economics dominate."
    ],
    flow: ["NVIDIA needs networking", "Buys Mellanox 2020", "NVIDIA needs cluster orchestration", "Buys Run:AI 2024", "NVIDIA needs inference-serving expertise", "Buys OctoAI 2024", "Stack now spans GPU + network + orchestration + inference"],
    mentalModel: "NVIDIA is buying the layers above the GPU one at a time. The chip is the foundation; everything between the chip and the workload is being bought.",
    commonMisunderstanding: "NVIDIA acquisitions are random. They follow a pattern: every layer between silicon and the application is becoming part of the platform.",
    whyItMatters: "Each acquisition is a structural reason the moat is hard to displace. Investors who track only the GPU miss the platform thickening.",
    relatedEntities: ["company:nvidia", "node:cuda", "node:nvlink", "node:nvswitch", "node:tensorrt", "node:nvidia-nim"],
    relatedQuestions: ["q-cuda-lockin", "q-cluster-resilience", "q-tensorrt-moat", "q-nvidia-margins"],
    sourceIds: [],
    confidence: "context"
  },

  /* ── Robotics / physical AI ──────────────── */
  {
    id: "q-physical-ai",
    question: "What is 'physical AI' and why is NVIDIA building it now?",
    audience: "investor", category: "Robotics", difficulty: "Intermediate",
    shortAnswer: "Physical AI is the application of generative-style models to robots, autonomous vehicles, factories and other systems that act in the world. NVIDIA's bet is that the same GPU stack that powers digital AI is the substrate for physical AI &mdash; with new layers (Omniverse, Isaac, Cosmos) above.",
    detailedAnswer: [
      "Physical AI is a framing, not a separate technology. It includes humanoid robots, industrial automation, autonomous vehicles, drones, smart manufacturing and real-time simulation for any of the above. The unifying idea is that a model perceives, plans, and acts in the physical world.",
      "Training such systems requires three pillars: a simulation environment (Omniverse), a robotics platform (Isaac) and foundation models trained on physical-world data (Cosmos). NVIDIA has built or is building all three. The hardware (Jetson on the device, GPUs in the cloud, and DGX Spark for desktop physical-AI development) sits underneath.",
      "Physical AI is meaningful because the next decade of AI revenue may shift from chat to action. Whoever owns the simulation, foundation models and on-device runtime captures a structural position similar to CUDA's in digital AI."
    ],
    flow: ["Robot / vehicle / factory needs intelligence", "Trained in Omniverse simulation", "Foundation model from Cosmos", "Isaac platform packages it", "Jetson runs on device", "Cloud GPUs handle continuous learning + telemetry"],
    mentalModel: "Physical AI is to robotics what CUDA was to scientific computing &mdash; a stack that shows up everywhere because the workload underneath only runs well there.",
    commonMisunderstanding: "Physical AI is a marketing rebrand of robotics. It is a deliberate ecosystem play with Omniverse + Isaac + Cosmos, not a new label on old products.",
    whyItMatters: "It is the most concrete second-act for NVIDIA after digital AI. If the physical-AI thesis lands, the moat extends into a new application surface.",
    relatedEntities: ["node:omniverse", "node:isaac", "node:cosmos", "node:jetson", "company:nvidia"],
    relatedQuestions: ["q-omniverse", "q-isaac", "q-cosmos", "q-sim-to-real"],
    sourceIds: [],
    confidence: "forwardLooking"
  },
  {
    id: "q-omniverse",
    question: "What is Omniverse and why is it not just a 3D engine?",
    audience: "technical", category: "Robotics", difficulty: "Advanced",
    shortAnswer: "Omniverse is a real-time simulation platform built on USD (Universal Scene Description). It is a digital-twin substrate for physical AI &mdash; not a game engine, but a system for simulating worlds with physics, sensors and AI agents in the loop.",
    detailedAnswer: [
      "Game engines render scenes for human eyes. Omniverse renders scenes with physics fidelity, multi-sensor simulation (camera, lidar, radar, depth) and integration with AI training pipelines. The point is to generate training data and to test agents before they hit the real world.",
      "USD (the file format Pixar built and open-sourced) is the lingua franca. Multiple tools, vendors and engineers can collaborate on the same digital twin without lossy conversions. Industrial companies (BMW, Siemens, Foxconn) use it to simulate factories before pouring concrete.",
      "For NVIDIA, Omniverse is the simulation half of the physical-AI stack. Cosmos provides foundation models; Isaac packages robotics; Omniverse provides the world they train in."
    ],
    flow: ["Customer builds digital twin in USD", "Omniverse simulates physics + sensors", "Robot agent trained in simulation", "Synthetic data generated for AI training", "Validated agent deployed to physical world"],
    mentalModel: "Omniverse is the wind tunnel of physical AI. Robots and factories are tested in simulation before they cost real time and metal.",
    commonMisunderstanding: "Omniverse is a flashy 3D demo platform. It is industrial digital-twin infrastructure with real customers paying for capability.",
    whyItMatters: "If physical AI scales, the simulation layer scales with it. Omniverse's positioning today is structurally similar to CUDA's position in scientific computing in the 2010s.",
    relatedEntities: ["node:omniverse", "node:isaac", "node:cosmos", "company:nvidia"],
    relatedQuestions: ["q-physical-ai", "q-isaac", "q-sim-to-real", "q-cosmos"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-isaac",
    question: "What does the Isaac platform actually give a robotics team?",
    audience: "technical", category: "Robotics", difficulty: "Intermediate",
    shortAnswer: "A bundled robotics stack: Isaac Sim for simulation, Isaac ROS for ROS-integrated perception and planning, Isaac Lab for reinforcement learning, and Isaac GR00T for humanoid foundation models. It compresses years of in-house plumbing into a supported platform.",
    detailedAnswer: [
      "A robotics startup historically had to build perception, planning, simulation, sensor fusion and RL infrastructure from scratch on top of ROS. That is a multi-year integration job that distracts from the actual robot.",
      "Isaac packages the components NVIDIA controls or has built strong integrations for: GPU-accelerated perception (Isaac ROS), simulation (Isaac Sim, on Omniverse), reinforcement-learning environments (Isaac Lab), and foundation models for humanoids (Isaac GR00T). It runs on Jetson on-device and on full GPUs in cloud.",
      "The result is that a humanoid or industrial-robot team can focus on the robot, not the platform plumbing. NVIDIA captures the structural position underneath."
    ],
    flow: ["Robotics team picks Isaac Sim for simulation", "Trains policy in Isaac Lab", "Deploys ROS-integrated stack via Isaac ROS", "Loads humanoid foundation model from GR00T", "Runs on Jetson on-device", "Telemetry feeds back to cloud GPUs"],
    mentalModel: "Isaac is to robotics what Unity was to indie game development. The plumbing is provided; the developer focuses on the experience.",
    commonMisunderstanding: "Isaac is a single product. It is a portfolio &mdash; Sim, ROS, Lab, GR00T &mdash; and each piece is meaningful on its own.",
    whyItMatters: "Isaac is one of the cleanest channels through which NVIDIA captures structural share of physical AI. Investors should track Isaac adoption as a leading indicator.",
    relatedEntities: ["node:isaac", "node:isaac-groot", "node:omniverse", "node:jetson"],
    relatedQuestions: ["q-physical-ai", "q-omniverse", "q-jetson-why", "q-cosmos"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-jetson-why",
    question: "Where does Jetson actually win, and why is it not just a smaller GPU?",
    audience: "technical", category: "Robotics", difficulty: "Intermediate",
    shortAnswer: "Jetson is an embedded AI module: GPU + Arm CPU + accelerators on a single low-power board. It wins on the device side &mdash; robots, drones, industrial cameras &mdash; where a full GPU is too large, too power-hungry and too power-greedy.",
    detailedAnswer: [
      "Jetson modules (Nano, Orin, Thor) integrate a GPU, Arm CPU, NVDLA deep-learning accelerators, ISP and high-speed I/O on one small low-power board. Power envelopes range from a few watts to tens of watts.",
      "On a moving robot, you cannot run a 700W H100. You can run an Orin or Thor. The CUDA software stack is shared with data-center GPUs; the same code paths apply. That continuity is the moat: train in the cloud, deploy on Jetson.",
      "The next jump (Thor) is purpose-built for humanoids and high-throughput industrial AI &mdash; a modest data-center GPU's worth of inference in an embeddable thermal envelope."
    ],
    flow: ["Robot needs on-device inference", "Power budget < 100W", "Jetson Orin / Thor module integrates GPU + CPU + accelerators", "CUDA model deployed unchanged", "Cloud GPUs continue training", "Updates pushed to Jetson fleet"],
    mentalModel: "Jetson is the engine block of physical AI. Data-center GPUs are the test stand; Jetson is what ships in the vehicle.",
    commonMisunderstanding: "Jetson is just a low-end GPU. It is an integrated system with NVDLA accelerators, Arm CPU and I/O optimised for the embedded use case.",
    whyItMatters: "Without on-device acceleration, physical AI cannot scale. Jetson is the channel for that &mdash; and it is structurally NVIDIA-only at this point.",
    relatedEntities: ["node:jetson", "node:isaac", "company:nvidia"],
    relatedQuestions: ["q-physical-ai", "q-isaac", "q-sim-to-real"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-sim-to-real",
    question: "What is the sim-to-real gap and why does closing it favor NVIDIA?",
    audience: "technical", category: "Robotics", difficulty: "Advanced",
    shortAnswer: "Sim-to-real is the problem of training a policy in simulation that still works on a real robot. Closing it requires very high fidelity simulation, lots of GPU compute, and a way to randomise environments &mdash; exactly what Omniverse + GPUs + Isaac Lab provide.",
    detailedAnswer: [
      "A policy trained only in a perfect simulation usually fails on a real robot &mdash; the real world has friction, noise, lighting, contact dynamics and sensor quirks the simulation did not capture. That is the sim-to-real gap.",
      "Two approaches close it. First, increase simulation fidelity (better physics, better sensor models, USD-based assets). Second, randomise simulation aggressively so the policy generalises (domain randomisation). Both are GPU-heavy.",
      "NVIDIA's stack is the dominant substrate for both. Omniverse + Isaac Sim handle high-fidelity simulation; GPUs run the random rollouts at scale; Cosmos provides physical-world priors. The sim-to-real gap is closing on a curve that depends on GPU compute &mdash; which is structurally aligned with NVIDIA's roadmap."
    ],
    flow: ["Policy trained in simulation only", "Fails in the real world", "Simulation fidelity raised + domain randomisation added", "Policy retrained at GPU scale", "Real-world performance improves", "Loop continues", "GPU spend grows with the workload"],
    mentalModel: "Sim-to-real is climate modeling for robots. More compute and better physics shrink the gap, on a curve that wants more GPUs.",
    commonMisunderstanding: "Sim-to-real is solved with a smarter algorithm. It is also a compute problem &mdash; the algorithms exist; running them at fidelity is what costs.",
    whyItMatters: "If physical AI succeeds, sim-to-real spend is one of the largest secondary GPU markets. The cost curve favors NVIDIA's stack.",
    relatedEntities: ["node:omniverse", "node:isaac", "node:cosmos", "node:cuda"],
    relatedQuestions: ["q-omniverse", "q-isaac", "q-physical-ai", "q-cosmos"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-cosmos",
    question: "What is Cosmos and what does it tell you about NVIDIA's bet?",
    audience: "technical", category: "Robotics", difficulty: "Advanced",
    shortAnswer: "Cosmos is NVIDIA's family of foundation models for physical AI &mdash; world models trained on real-world video to predict physics, dynamics and outcomes. Its existence signals NVIDIA building the model layer above the hardware, not just selling chips into it.",
    detailedAnswer: [
      "Cosmos is the model component of the physical-AI stack. It includes diffusion-based and autoregressive variants trained on enormous corpora of video, designed to predict how the world unfolds given an action.",
      "The bet is that physical AI cannot scale without world models that capture intuition about physics, friction, objects and motion. Robotics teams using Cosmos as a prior train task-specific policies on top &mdash; faster, cheaper, more reliable than starting from scratch.",
      "Strategically, Cosmos is NVIDIA reaching above the hardware. If the world-model layer becomes a structural part of robotics, NVIDIA wants to own a default in it &mdash; the way CUDA became a default for accelerated computing."
    ],
    flow: ["NVIDIA gathers + curates real-world video corpus", "Cosmos models trained as world models", "Robotics teams use Cosmos as prior", "Task policies trained on top in Isaac Lab", "Deployed via Isaac on Jetson hardware"],
    mentalModel: "Cosmos is to robotics what GPT was to language &mdash; a foundation model for the world, not for words.",
    commonMisunderstanding: "Cosmos is a research project. It is a strategic product designed to anchor the model layer of physical AI to NVIDIA's stack.",
    whyItMatters: "If world models become a real category, Cosmos is the most credible early entry from a hardware company. It signals where NVIDIA's strategic bets are heading next.",
    relatedEntities: ["node:cosmos", "node:omniverse", "node:isaac", "node:isaac-groot"],
    relatedQuestions: ["q-physical-ai", "q-omniverse", "q-isaac", "q-sim-to-real"],
    sourceIds: [],
    confidence: "forwardLooking"
  },

  /* ── Quantum depth ───────────────────────── */
  {
    id: "q-quantum-modalities",
    question: "Superconducting vs trapped-ion vs photonic vs neutral-atom &mdash; what is the actual difference?",
    audience: "technical", category: "Quantum", difficulty: "Expert",
    shortAnswer: "Different qubit hardware. Superconducting (IBM, Google, Rigetti) is fast but error-prone; trapped-ion (Quantinuum, IonQ) is high-fidelity but slow; neutral-atom (QuEra, Atom Computing, Pasqal) is mid-speed and rapidly scaling; photonic (PsiQuantum, Xanadu) is room-temperature but harder to entangle.",
    detailedAnswer: [
      "Superconducting qubits run on tiny circuits cooled near absolute zero. Fast operations, but coherence times are short and per-gate fidelity has to be extremely high to avoid runaway errors. IBM, Google, Rigetti and most large-scale academic programs are here.",
      "Trapped-ion qubits use individual ions held in vacuum chambers, manipulated with lasers. Very high fidelity (~99.9% or better) but slow gate times and complex scaling. Quantinuum and IonQ lead.",
      "Neutral-atom qubits use individual neutral atoms held by laser tweezer arrays. Reconfigurable, room-temperature laser-cooled. QuEra, Atom Computing and Pasqal have made rapid scaling progress.",
      "Photonic qubits use light. They operate at room temperature, are naturally networked over fiber, and avoid cryogenics. Two-qubit operations are harder. PsiQuantum and Xanadu are the leading photonic programs.",
      "The race is partly about which modality reaches scalable error correction first. Each modality has a different overhead curve."
    ],
    flow: ["Modality picked", "Qubit hardware built (superconducting / ion / atom / photon)", "Fidelity + scale + speed measured", "Error correction approach defined", "Logical qubit overhead determined", "Race to commercial scale"],
    mentalModel: "Quantum modalities are like early aviation. Some are biplanes, some are airships, some are jets. Different physics, different scaling curves, no clear winner yet.",
    commonMisunderstanding: "Quantum is one technology. It is several &mdash; with different physics, different roadmaps and different vendors. They are not interchangeable.",
    whyItMatters: "Forecasting quantum impact requires understanding which modalities can reach error-corrected scale on what horizon. The modality choice matters as much as the company.",
    relatedEntities: ["company:ibm-quantum", "company:quantinuum", "company:ionq", "company:psiquantum", "company:atom-computing", "node:qpu"],
    relatedQuestions: ["q-quantum-stack", "q-quantum-error-correction", "q-quantum-advantage"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-quantum-advantage",
    question: "What would 'quantum advantage' actually look like commercially?",
    audience: "investor", category: "Quantum", difficulty: "Advanced",
    shortAnswer: "A specific industrial workload (chemistry, optimisation, or cryptography) that a quantum machine solves better than the best GPU cluster &mdash; reproducibly, at a price someone is willing to pay. We do not have one yet.",
    detailedAnswer: [
      "'Quantum supremacy' (the science demo) and 'quantum advantage' (the commercial reality) are different things. Supremacy has been claimed multiple times; advantage has not. Advantage requires that a real-world workload be done faster, cheaper or better on a QPU than on classical hardware.",
      "Likely first targets are quantum chemistry (catalysis, materials, pharmaceuticals), specific optimisation problems and post-quantum cryptography. None of these have crossed the threshold yet at commercial scale.",
      "What would change the picture: scalable error correction, reduced overhead per logical qubit, modality maturity, and tight hybrid orchestration with classical compute (where NVIDIA's CUDA-Q + NVQLink positioning sits). The expected timeline is unclear; many credible roadmaps point to the late 2020s or early 2030s for first advantage in narrow domains."
    ],
    flow: ["QPU built", "Algorithm runs", "Result compared to best classical solution", "If consistently faster / cheaper / better at the same problem, advantage is claimed", "If reproducible at industrial scale, commercial use begins"],
    mentalModel: "Quantum advantage is the Wright brothers moment for industrial use. Lots of demos beforehand; the threshold is when paying customers fly.",
    commonMisunderstanding: "Quantum already beats classical for some problems. For practical, industrially relevant problems with valid baselines, that is not yet established.",
    whyItMatters: "Investors and policymakers planning around quantum need to know what advantage looks like and what it does not. Without clarity, capital flows on hope, not signal.",
    relatedEntities: ["node:qpu", "node:cuda-q", "node:quantum-error-correction", "company:quantinuum", "company:ibm-quantum"],
    relatedQuestions: ["q-quantum-stack", "q-quantum-modalities", "q-quantum-error-correction"],
    sourceIds: [],
    confidence: "forwardLooking"
  },

  /* ── Strategy / geopolitics ──────────────── */
  {
    id: "q-chips-act",
    question: "Did the CHIPS Act actually work?",
    audience: "investor", category: "Geopolitics", difficulty: "Intermediate",
    shortAnswer: "Partially. It catalysed roughly $400B in announced US semiconductor investment, including TSMC Arizona, Intel Ohio, Samsung Texas and Micron New York. Fabs are slow to build, ecosystems are slower to migrate, and the leading-edge gap with Taiwan persists.",
    detailedAnswer: [
      "The 2022 CHIPS and Science Act provided $39B in direct subsidies, plus tax credits and research funding. The aim was to bring leading-edge fab capacity to the US and reduce the structural Taiwan dependency.",
      "Announcements followed quickly: TSMC's Arizona phases (4nm and 3nm), Intel's Ohio site, Samsung's Texas expansion, Micron's New York DRAM plant, GlobalFoundries' New York expansion. The headline number is real.",
      "The harder questions are about pace and ecosystem. Construction has slipped; some projects have been re-phased. Even when the fabs run, advanced packaging (CoWoS) and the deep ecosystem of chemicals, equipment and learning-by-doing remain concentrated in Asia. The Act bought insurance, not independence."
    ],
    flow: ["CHIPS Act passed 2022", "Direct subsidies + tax credits flow", "Fab announcements (TSMC AZ, Intel OH, Samsung TX, Micron NY)", "Construction begins", "First wafers (some on schedule, some slipped)", "Packaging + ecosystem gap remains"],
    mentalModel: "The CHIPS Act is fire insurance for the semiconductor supply chain. It does not stop fires; it pays out when one happens.",
    commonMisunderstanding: "The CHIPS Act re-shored the leading edge. It accelerated leading-edge presence in the US, but it did not relocate the ecosystem.",
    whyItMatters: "Policy claims and operating reality diverge. Investors pricing in a fully re-shored leading edge will be disappointed; those pricing in zero progress will miss the genuine acceleration.",
    relatedEntities: ["company:tsmc", "company:intel-foundry", "company:samsung-foundry", "company:micron", "node:supply-chain-concentration"],
    relatedQuestions: ["q-tsmc-arizona", "q-tsmc-spof", "q-china-domestic", "q-export-controls"],
    sourceIds: ["src-bis"],
    confidence: "inferred"
  },
  {
    id: "q-china-domestic",
    question: "How close is China to leading-edge AI silicon domestically?",
    audience: "investor", category: "Geopolitics", difficulty: "Advanced",
    shortAnswer: "Closer than the marketing-and-export-control story suggests on logic at trailing-edge nodes; further than headlines suggest on packaging, EUV-class lithography and HBM. SMIC's 7nm work is real; the gap to TSMC's 3nm and to CoWoS-class packaging is not closing fast.",
    detailedAnswer: [
      "SMIC has demonstrated 7nm-class production using DUV multi-patterning (the Huawei Mate 60 case). That is meaningful and earlier than many predictions assumed. It does not extend trivially to 5nm or 3nm without EUV.",
      "EUV scanners are blocked from export to China by Dutch / US controls. Without them, SMIC's path to leading-edge density requires extreme multi-patterning &mdash; expensive, low-yield, and slow. Nothing public suggests near-term volume parity with TSMC at 3nm.",
      "HBM, advanced packaging and the ecosystem of materials and equipment are the harder gaps. CXMT's HBM efforts are progressing but trail SK hynix and Micron. Packaging concentrates outside China. Domestic AI accelerators (Huawei Ascend, others) ship in volume but at a generation or two behind NVIDIA."
    ],
    flow: ["SMIC reaches 7nm via DUV multipatterning", "EUV blocked by export controls", "5nm+ requires extreme multipatterning (slow + expensive)", "HBM + packaging gap persists", "Domestic AI accelerators ship at trailing nodes", "Bifurcated supply chain matures"],
    mentalModel: "China at the leading edge is climbing without the ladder everyone else uses. Possible, slower, harder, with non-trivial yield costs.",
    commonMisunderstanding: "China is either months behind or hopelessly behind. Reality is in between &mdash; meaningful capability at trailing nodes, real gap at the leading edge, not closing fast.",
    whyItMatters: "Forecasting AI compute geography requires a calibrated read on Chinese domestic progress. Both extreme readings produce wrong investment decisions.",
    relatedEntities: ["company:smic", "company:huawei-ascend", "company:asml", "node:export-controls-concept"],
    relatedQuestions: ["q-export-controls", "q-asml-importance", "q-tsmc-arizona", "q-smic-catches-up"],
    sourceIds: ["src-bis"],
    confidence: "inferred"
  },
  {
    id: "q-uae-saudi",
    question: "Why are Gulf states the surprise AI infrastructure spenders?",
    audience: "investor", category: "Geopolitics", difficulty: "Intermediate",
    shortAnswer: "Because the Gulf has cheap power, sovereign capital, and an explicit policy goal of becoming AI infrastructure hubs. UAE (G42, MGX) and Saudi Arabia (HUMAIN, PIF) are committing tens of billions, with NVIDIA, OpenAI, Oracle and Microsoft as direct partners.",
    detailedAnswer: [
      "Both UAE and Saudi Arabia have framed AI as a national-strategy bet. The UAE's G42 / MGX combine has invested across NVIDIA, OpenAI, Microsoft and AI infrastructure providers. Saudi Arabia's HUMAIN (announced 2024 / 2025) is positioning to be the kingdom's national AI compute champion, in partnership with Public Investment Fund and major hyperscalers.",
      "The advantages are material: extremely low power costs (gas, solar, eventually nuclear), large parcels of land, and patient sovereign capital. The constraints are equally real: export-control negotiation with the US, talent attraction, and the need to fit a rule-of-law-and-data narrative for foreign customers.",
      "For NVIDIA, this is a fast-growing customer category. For the US, it is a major export-policy lever. Gulf AI deals are increasingly part of trade and security negotiations, not just commercial transactions."
    ],
    flow: ["Gulf state allocates sovereign capital to AI", "Partnership with hyperscaler / OpenAI / NVIDIA", "Land + power secured locally", "GPU systems delivered (subject to export controls)", "Domestic AI compute capacity grows", "Geopolitical exposure rises with capacity"],
    mentalModel: "The Gulf is doing for AI what it did for petrochemicals: taking advantage of cheap energy and sovereign capital to position as a global infrastructure hub.",
    commonMisunderstanding: "Gulf AI investments are vanity projects. They are coordinated, scaled, and increasingly central to NVIDIA's sovereign-AI customer mix.",
    whyItMatters: "Sovereign Gulf demand is now a measurable slice of NVIDIA's order book and a major lever in US export policy. It is not optional context.",
    relatedEntities: ["node:sovereign-ai", "node:sovereign-compute", "company:nvidia", "company:azure"],
    relatedQuestions: ["q-sovereign-ai", "q-export-controls", "q-power-bound", "q-ai-bubble"],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-taiwan-risk",
    question: "What does Taiwan Strait risk actually mean for AI capex?",
    audience: "investor", category: "Geopolitics", difficulty: "Advanced",
    shortAnswer: "It is the largest tail risk in the AI infrastructure economy. A meaningful disruption to TSMC's Taiwan operations would impair leading-edge AI silicon supply for years. Insurance against this risk is being purchased &mdash; CHIPS Act, TSMC Arizona, Samsung &mdash; but it is not yet effective.",
    detailedAnswer: [
      "TSMC fabricates and packages essentially every leading-edge AI accelerator currently shipping. Their Taiwan operations concentrate the leading-edge logic, advanced packaging, and ecosystem suppliers. A serious disruption &mdash; military, natural-disaster, infrastructure &mdash; impairs all of them.",
      "Mitigation is real but slow. TSMC Arizona, Samsung Texas, Intel 18A, Japan / Germany TSMC sites all add capacity, but the leading-edge ecosystem (packaging, materials, equipment, learning) is harder to migrate.",
      "The economic, political and military dimensions cannot be separated. The semiconductor industry's most-asked question &mdash; will Taiwan remain stable &mdash; is the same question that determines AI capex in the late 2020s."
    ],
    flow: ["AI compute concentrates on TSMC Taiwan", "Disruption scenarios are non-trivial", "CHIPS Act + TSMC Arizona + Samsung Texas build insurance", "Insurance lags the underlying concentration", "Tail risk priced in NVIDIA + AMD + supply chain"],
    mentalModel: "Taiwan Strait risk is the AI industry's hurricane risk. The insurance is real; it does not stop the storm.",
    commonMisunderstanding: "Taiwan risk is a vague geopolitical headline. It is the most concrete tail risk in the AI build-out, with concrete mitigation timelines.",
    whyItMatters: "Any long-horizon AI investment thesis has to take a position on Taiwan stability. Pretending otherwise is the bet, even if it is not stated.",
    relatedEntities: ["company:tsmc", "node:supply-chain-concentration", "scenario:s-tsmc"],
    relatedQuestions: ["q-tsmc-spof", "q-tsmc-arizona", "q-chips-act", "q-china-domestic"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-nvidia-margins",
    question: "Why are NVIDIA's gross margins ~75% and is that durable?",
    audience: "investor", category: "Strategy", difficulty: "Advanced",
    shortAnswer: "Because NVIDIA captures hardware, software, networking and platform value across every AI deployment. Durability depends on CUDA's lock-in, the difficulty of substitutes, and how aggressively hyperscalers can migrate to in-house ASICs &mdash; not on gross-margin compression alone.",
    detailedAnswer: [
      "NVIDIA's data-center gross margin in recent quarters has hovered in the high 70s. That is exceptional for a hardware company. The structure: NVIDIA prices the GPU + system + software + networking together; the components without NVIDIA's branding (HBM, CoWoS, transformers) sit at lower margins for the suppliers selling them.",
      "Durability arguments: CUDA lock-in, NCCL + InfiniBand, decades of tooling, Run:AI orchestration, NIM and AI Enterprise. Durability risks: hyperscaler ASIC migration (slow but real), ROCm progress (slower but real), and pricing pressure if AI capex pauses.",
      "The realistic path is gradual margin moderation rather than collapse. Even modest hyperscaler ASIC adoption shifts the mix; even modest competition pressures pricing. None of those break the moat in the next few years; all of them put a ceiling on it on a longer horizon."
    ],
    flow: ["NVIDIA prices full system + software", "Costs concentrated upstream (HBM, packaging, ASML)", "Downstream cloud captures separate platform margin", "Hyperscaler ASIC adoption gradually shifts mix", "Margin moderates over time without collapsing"],
    mentalModel: "NVIDIA's 75% margin is the iPhone-margin for AI infrastructure. It compresses gradually as substitutes mature, not overnight.",
    commonMisunderstanding: "NVIDIA's margins must collapse soon. That is the bear case; the structure of the moat suggests gradual moderation, not collapse.",
    whyItMatters: "Gross-margin trajectory is the central debate in NVIDIA equity analysis. Getting it wrong is the most common error in the AI thesis on either side.",
    relatedEntities: ["company:nvidia", "node:cuda-lock-in", "node:hyperscaler-asics"],
    relatedQuestions: ["q-cuda-lockin", "q-asics-replacement", "q-nvidia-acquisitions", "q-ai-bubble"],
    sourceIds: [],
    confidence: "inferred"
  },

  /* ── Contrarian / risk ───────────────────── */
  {
    id: "q-ai-bubble",
    question: "Are we in an AI capex bubble?",
    audience: "investor", category: "Risk", difficulty: "Advanced",
    shortAnswer: "There are bubble characteristics (rapid capex, narrative-driven valuation, concentrated beneficiaries) and non-bubble characteristics (real revenue, real workloads, real bottlenecks). The honest answer is that valuation may be ahead of fundamentals while underlying capex is durable.",
    detailedAnswer: [
      "Bubble signals: NVIDIA at >30x sales at peaks, capex commitments of 10&ndash;15% of hyperscaler revenue, narrative-driven valuations of secondary beneficiaries, retail-led names with little fundamentals. These match historical bubble patterns.",
      "Non-bubble signals: real and growing inference revenue, real GPU shortages, real grid bottlenecks, real customer demand. Capex is contracted and gated by physical supply chains, not loose monetary conditions alone.",
      "The most likely outcome is bifurcated: the underlying compute build-out continues even if equity multiples compress. Past infrastructure manias (railroads, fiber) saw exactly this pattern: durable infrastructure left over after the equity correction. Investors should distinguish 'is the thesis wrong' from 'is the price wrong'."
    ],
    flow: ["Capex commitments compound", "Equity valuations expand", "Physical bottlenecks gate deployment", "Some equity froth corrects", "Underlying infrastructure remains", "Real workloads continue to grow on it"],
    mentalModel: "AI capex is a railroad mania. The route is real; some equity prices are not. After the correction, the trains still run.",
    commonMisunderstanding: "Either everything is fine or everything will collapse. The most likely path is durable infrastructure + price moderation &mdash; not all-or-nothing.",
    whyItMatters: "Calibrating to which parts are durable and which parts are over-priced is the actionable question for any allocator.",
    relatedEntities: ["scenario:s-cowos", "scenario:s-grid", "node:hyperscaler-asics", "company:nvidia"],
    relatedQuestions: ["q-overcapacity", "q-model-efficiency", "q-nvidia-margins", "q-cloud-monetize"],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-overcapacity",
    question: "What happens if AI demand stalls for two years?",
    audience: "investor", category: "Risk", difficulty: "Advanced",
    shortAnswer: "Order books reset, hyperscaler capex slows, GPU prices fall, neoclouds stress, and supply chain vendors adjust. NVIDIA absorbs margin compression but stays profitable. The infrastructure stays built and finds new uses, including inference at lower price points.",
    detailedAnswer: [
      "A two-year demand pause would be the first real stress test of the AI build-out. Hyperscalers would re-phase capex; some projects would slip; equity multiples would compress; GPU rental rates would drop.",
      "Vendor stress concentrates in the most leveraged operators: neoclouds with thin balance sheets, high-cost power deals, or contracts struck at peak rental rates. Hyperscalers absorb easily; NVIDIA absorbs at the cost of growth.",
      "But the deployed infrastructure does not vanish. Cheaper inference per token is what an overcapacity world looks like &mdash; which expands the addressable market for AI applications, which eventually re-tightens demand. The cycle does not unwind; it slows and resumes at a different price level."
    ],
    flow: ["Demand pauses", "Hyperscaler capex slows", "GPU rental rates fall", "Neocloud margin compresses", "Hyperscalers + NVIDIA absorb", "Lower inference prices unlock new applications", "Demand resumes from a wider base"],
    mentalModel: "An AI demand pause is a fiber-optic glut. Painful for over-leveraged operators; permanent benefit to anyone who can use cheap connectivity.",
    commonMisunderstanding: "A demand pause unwinds the whole build-out. It does not. It compresses margins and accelerates application adoption.",
    whyItMatters: "Bear cases worth taking seriously look like this. Investors who do not stress-test the thesis miss the actual fragility points.",
    relatedEntities: ["company:nvidia", "company:coreweave", "node:tokens-per-watt", "node:cloud-inference"],
    relatedQuestions: ["q-ai-bubble", "q-model-efficiency", "q-neocloud-vs-hyperscaler", "q-tokens-per-watt"],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-model-efficiency",
    question: "What if models get 10x cheaper to run?",
    audience: "investor", category: "Risk", difficulty: "Advanced",
    shortAnswer: "Per-query cost drops, total demand rises (Jevons paradox), and the GPU market does not shrink &mdash; it shifts from training to inference. The companies that benefit most are application providers; the companies most exposed are those over-indexed on training capacity.",
    detailedAnswer: [
      "Model efficiency improves continuously: distillation, quantization, mixture-of-experts, sparsity, better training data, better architectures. Each generation costs less per token at iso-quality.",
      "The naive bear case says cheaper models mean less GPU demand. The historical pattern says the opposite: cheaper compute expands demand by more than the savings. Cheaper inference unlocks chat-as-default, agents, embedded AI, code generation everywhere &mdash; the addressable market widens faster than per-call cost falls.",
      "What changes is the mix. Training capacity remains expensive but specialised. Inference capacity scales massively. Memory bandwidth and tokens-per-watt economics dominate operator decisions. NVIDIA's TensorRT / NIM positioning is exactly the bet on this shift."
    ],
    flow: ["Model efficiency improves 10x", "Per-token cost drops", "New applications become viable (Jevons)", "Total token volume grows faster than cost falls", "Training mix shrinks; inference mix dominates", "Aggregate GPU demand still rises"],
    mentalModel: "Cheaper AI is like cheaper electricity. Each kWh costs less; total kWh consumption rises. The grid keeps growing.",
    commonMisunderstanding: "Efficient models destroy NVIDIA. They reshape the mix toward inference; they do not collapse demand.",
    whyItMatters: "If you do not model the inference shift correctly, your forecast is wrong by a generation in either direction.",
    relatedEntities: ["node:tokens-per-watt", "node:cloud-inference", "node:tensorrt", "node:nvidia-nim"],
    relatedQuestions: ["q-tokens-per-watt", "q-training-vs-inference", "q-tensorrt-moat", "q-ai-bubble"],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-open-models",
    question: "What if open-weight models win the model layer above?",
    audience: "investor", category: "Risk", difficulty: "Advanced",
    shortAnswer: "If frontier-quality model weights become broadly available (Meta's Llama, Mistral, DeepSeek, Qwen), the model layer commodifies and value migrates to the layers above and below: applications, data, distribution, and the compute substrate. NVIDIA benefits.",
    detailedAnswer: [
      "Open-weight models have improved rapidly. Llama, Mistral, Qwen and DeepSeek have all released models close to closed-source frontier quality at zero or near-zero licensing cost. If that trend continues, the standalone-model business becomes harder.",
      "The layers that become more valuable are: data (proprietary, high-quality, domain-specific), applications (workflow products that embed models), distribution (platforms that put AI in front of users), and the compute substrate (because everyone needs to run inference, regardless of which model).",
      "NVIDIA is structurally aligned with the substrate. Open-weight model dominance does not threaten NVIDIA &mdash; it forces inference everywhere, and inference is where NVIDIA's tokens-per-watt and TensorRT story compounds."
    ],
    flow: ["Open-weight models reach frontier quality", "Standalone-model businesses commoditise", "Value moves to applications + data + distribution", "Inference demand rises everywhere", "Compute substrate (NVIDIA) benefits structurally"],
    mentalModel: "Open-weight models are open-source operating systems for AI. The OS becomes free; the value moves to applications, hardware and services.",
    commonMisunderstanding: "Open-source AI threatens NVIDIA. It threatens model-only business models. It is broadly aligned with NVIDIA's compute layer.",
    whyItMatters: "Investors evaluating model-vendor risk often miss that the same scenario is bullish for the substrate. Both readings are simultaneously true.",
    relatedEntities: ["node:cloud-inference", "node:tokens-per-watt", "node:tensorrt", "node:cuda"],
    relatedQuestions: ["q-cloud-monetize", "q-model-efficiency", "q-pytorch-moat", "q-tokens-per-watt"],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-smic-catches-up",
    question: "What happens if SMIC catches up to TSMC at 3nm?",
    audience: "investor", category: "Risk", difficulty: "Advanced",
    shortAnswer: "China's domestic AI accelerator pipeline catches up by a generation, the bifurcated supply chain hardens, US export-control leverage weakens, and TSMC retains advantage at the next node &mdash; but the strategic balance shifts noticeably.",
    detailedAnswer: [
      "If SMIC reaches volume 3nm-equivalent production (with or without EUV-equivalent multipatterning), Huawei Ascend and other domestic accelerators close part of the generational gap with NVIDIA. The Chinese AI ecosystem can train and serve frontier-class models without leading-edge imports.",
      "The bifurcated supply chain (NVIDIA + TSMC for one side; Huawei + SMIC for the other) hardens. US export-control leverage weakens because the controlled capability is now domestically reproducible. New controls might shift to even further-ahead nodes (1.4nm, 1nm) or to packaging.",
      "TSMC retains advantage at the next node and at advanced packaging. The strategic question becomes whether the US wants to compete at the leading edge or contain the next leading edge. Both have very different policy implications."
    ],
    flow: ["SMIC reaches 3nm-class volume", "Domestic AI accelerators close generational gap", "Bifurcated supply chain hardens", "US export controls migrate to next node", "Long-term policy and capex calculus shifts"],
    mentalModel: "If SMIC reaches 3nm, the global semiconductor map looks like the 1980s aerospace map: two roughly comparable systems, separated by policy.",
    commonMisunderstanding: "SMIC catching up means the West is hopeless. It means the geopolitical game changes &mdash; not that TSMC and NVIDIA become irrelevant.",
    whyItMatters: "Any thesis on AI silicon over a decade-class horizon has to take a position on this scenario. Pretending it cannot happen is the bet.",
    relatedEntities: ["company:smic", "company:huawei-ascend", "company:tsmc", "node:supply-chain-concentration", "node:export-controls-concept"],
    relatedQuestions: ["q-china-domestic", "q-export-controls", "q-tsmc-arizona", "q-chips-act"],
    sourceIds: ["src-bis"],
    confidence: "forwardLooking"
  }
];
