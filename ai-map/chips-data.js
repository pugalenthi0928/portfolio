/* ============================================
   CHIPS LAYER — Deep-Dive Data
   ============================================
   Hardware specs are taken from official vendor product pages,
   datasheets and architecture whitepapers (NVIDIA, AMD, Google
   Cloud TPU docs, AWS Neuron docs, Intel, Cerebras, Groq, Apple).
   Where a vendor publishes "with sparsity" peak numbers, dense
   numbers are preferred. Numbers are rounded; do not use as a
   benchmark substitute. Reality depends on memory pressure,
   interconnect, software, utilization and workload — see the
   Bottlenecks tab.
   ============================================ */

/* The five Chips subtopics shown as overview pill-cards */
var CHIPS_TOPICS = [
  {
    id: 'compute-arch',
    label: 'Compute architecture',
    tab: 'stack',
    short: 'Tensor cores, matrix units, systolic arrays, precision formats and the silicon underneath them.',
    long: 'AI workloads are mostly matrix multiplications. Modern accelerators dedicate most of their silicon to tensor / matrix units that do thousands of FMA operations in parallel — at lower precision than CPUs.'
  },
  {
    id: 'memory',
    label: 'Memory & bandwidth',
    tab: 'bottlenecks',
    short: 'Why HBM became the new oil of AI chips.',
    long: 'Frontier models are memory-hungry. Weights, activations, KV cache and optimizer state all live somewhere. HBM sits next to the compute die and gives an order of magnitude more bandwidth than ordinary DRAM.'
  },
  {
    id: 'interconnect',
    label: 'Interconnects & networking',
    tab: 'bottlenecks',
    short: 'Why one GPU is never enough — and how thousands act like one computer.',
    long: 'Frontier training is distributed. Tensor / pipeline / data / expert parallelism all push terabytes of activations and gradients across NVLink, InfiniBand, Ethernet, ICI or NeuronLink fabric. A model that fits on paper can be uneconomic if communication overhead is too high.'
  },
  {
    id: 'supply',
    label: 'Manufacturing & supply chain',
    tab: 'supply',
    short: 'Who actually makes AI chips, and where the chokepoints are.',
    long: 'Design, EUV lithography, fab, HBM, advanced packaging, OSAT and software each live in different countries. Concentration in Taiwan, the Netherlands and South Korea makes the AI chip stack geopolitical.'
  },
  {
    id: 'software',
    label: 'Software ecosystem',
    tab: 'stack',
    short: 'Why CUDA + libraries + compilers turn silicon into usable performance.',
    long: 'Hardware is a ceiling; software determines how close real workloads get to it. CUDA, ROCm, XLA, Triton, vLLM, TensorRT and the compiler / kernel layer are why developer productivity, not just FLOPS, decides which chip wins.'
  }
];

/* Top-of-section briefing — seven punchy truths */
var CHIPS_INTEL_SUMMARY = [
  {
    h: 'Chips are where electricity becomes intelligence.',
    d: 'A GPU is just the headline. The full AI chip layer is silicon + memory + packaging + interconnect + networking + software + supply chain.'
  },
  {
    h: 'GPUs dominate because of CUDA, not just hardware.',
    d: 'The hardware is excellent; the moat is twenty years of CUDA, libraries, compilers and developer mindshare on top of it.'
  },
  {
    h: 'Memory bandwidth and HBM are the new bottleneck.',
    d: 'For inference and long-context, weights and KV cache pressure matter more than peak FLOPS. HBM3e and HBM4 are the strategic supply.'
  },
  {
    h: 'Interconnect decides whether thousands of chips act like one.',
    d: 'NVLink, NVSwitch, InfiniBand, ICI, NeuronLink — communication overhead, not raw compute, often caps frontier training.'
  },
  {
    h: 'AI chips are designed everywhere, made almost nowhere.',
    d: 'Leading-edge logic concentrates at TSMC; EUV at ASML; HBM at SK hynix + Samsung + Micron. Concentration is the geopolitical story.'
  },
  {
    h: 'FLOPS without context is marketing.',
    d: 'Real performance depends on memory pressure, interconnect, software stack, utilization and workload. Always read benchmark conditions.'
  },
  {
    h: 'Training and inference are different jobs.',
    d: 'Training builds the model; inference runs the business. The best chip for a frontier training run is rarely the best chip per token at scale.'
  }
];

/* Visual flow: electricity to tokens */
var CHIPS_FLOW = [
  { id: 'power',     h: 'Electricity',           d: 'Grid power, on-site backup, batteries — the input to the whole chain.' },
  { id: 'pdn',       h: 'Power delivery',        d: 'Voltage regulation, VRMs, 12V/48V busbar, on-package PMICs. Losses here are pure waste.' },
  { id: 'transistors', h: 'Transistors',         d: 'Billions of FinFETs / nanosheets at 5/4/3 nm switching at GHz, leaking when idle.' },
  { id: 'tensor',    h: 'Tensor / matrix units', d: 'The dense FMA arrays that do 99% of AI math. Tensor cores, MXUs, systolic arrays.' },
  { id: 'matmul',    h: 'Matrix multiplies',     d: 'Tokens × weights = activations. Forward pass, backward pass, attention.' },
  { id: 'compute',   h: 'Train + serve',         d: 'Forward + backward, optimizer step, KV cache update, generated tokens.' },
  { id: 'tokens',    h: 'Tokens',                d: 'The unit you (or the API) actually pays for. Every token has an electricity + amortised-silicon bill behind it.' }
];

/* Eight-layer chip stack */
var CHIPS_STACK = [
  {
    id: 'silicon', n: '01', h: 'Silicon transistor layer',
    items: ['Process nodes (5/4/3 nm)', 'FinFET → nanosheet / GAA', 'Power leakage + dynamic power', 'Transistor density', 'Yield + defect density'],
    note: 'TSMC N5/N4/N3 family, Samsung 4 nm, Intel 18A. Each shrink raises density and lowers per-transistor power but costs more per wafer.'
  },
  {
    id: 'compute', n: '02', h: 'Compute layer',
    items: ['Tensor cores / MXUs / matrix units', 'SIMD / SIMT execution', 'Systolic arrays', 'Sparsity engines', 'Precision: FP32, TF32, BF16, FP16, FP8, FP4, INT8'],
    note: 'Almost all AI throughput comes from low-precision matrix units. Newer architectures add FP8 (Hopper) and FP4 (Blackwell) for inference density.'
  },
  {
    id: 'memory', n: '03', h: 'Memory layer',
    items: ['SRAM / on-die cache', 'HBM (in-package, stacked)', 'GDDR (consumer GPU)', 'DDR (CPU + system)', 'KV cache pressure'],
    note: 'Memory hierarchy is the single biggest variable in real AI throughput. HBM gives compute its data; SRAM hides the cost of small reuses.'
  },
  {
    id: 'package', n: '04', h: 'Packaging layer',
    items: ['Chiplets', 'CoWoS / SoIC (TSMC)', 'Silicon interposers', '2.5D + 3D stacking', 'Thermal limits + warpage'],
    note: 'Advanced packaging is now the front line. CoWoS capacity at TSMC has been a binding constraint on H100/B200/MI300 supply.'
  },
  {
    id: 'interconnect', n: '05', h: 'Interconnect layer',
    items: ['NVLink / NVSwitch', 'PCIe + CXL', 'TPU ICI', 'AWS NeuronLink', 'InfiniBand + Ethernet (Spectrum-X / Ultra Ethernet)'],
    note: 'Inside a server, NVLink/ICI/NeuronLink. Across servers, InfiniBand or AI-tuned Ethernet. Both layers must be sized to the workload.'
  },
  {
    id: 'system', n: '06', h: 'System layer',
    items: ['Server (8-GPU baseboard)', 'Rack (NVL72, MI300X racks, TPU pods)', 'Cluster + AI factory', 'Liquid cooling', 'Power density (50–130+ kW per rack)'],
    note: 'Modern AI racks run at 100+ kW. Air cooling is leaving the building; direct-to-chip and rear-door liquid loops are now mainstream.'
  },
  {
    id: 'software', n: '07', h: 'Software layer',
    items: ['CUDA (NVIDIA)', 'ROCm (AMD)', 'XLA + JAX (Google)', 'AWS Neuron SDK', 'Triton + compilers + custom kernels', 'vLLM + TensorRT-LLM + SGLang inference servers', 'PyTorch + DeepSpeed + Megatron + FSDP'],
    note: 'Hardware is a ceiling; software decides how close real workloads get to it. Ecosystem maturity often outweighs raw spec advantages.'
  },
  {
    id: 'supply', n: '08', h: 'Supply-chain layer',
    items: ['Design houses (NVIDIA, AMD, Apple, Google, Amazon, Broadcom)', 'Foundries (TSMC, Samsung, Intel)', 'Memory (SK hynix, Samsung, Micron)', 'Lithography (ASML)', 'Packaging + OSAT (Malaysia, Taiwan, Korea, Singapore)', 'Export controls + country risk'],
    note: 'No single country can ship a frontier AI chip end-to-end. Concentration in Taiwan, the Netherlands and South Korea is the strategic story.'
  }
];

/* Chip-type comparison cards */
var CHIPS_TYPES = [
  {
    id: 'cpu',  name: 'CPU',
    best: 'General logic, control, orchestration, preprocessing, head-node work in clusters.',
    weak: 'Massive parallel tensor operations — orders of magnitude less throughput than a GPU.',
    examples: 'Intel Xeon, AMD EPYC, NVIDIA Grace, Apple M-series, AWS Graviton.'
  },
  {
    id: 'gpu',  name: 'GPU',
    best: 'Frontier training and large-scale inference. Strength: parallelism, mature CUDA software, NVLink + InfiniBand networking.',
    weak: 'Expensive, power-hungry, supply-constrained. Per-token economics often beaten by ASICs at scale.',
    examples: 'NVIDIA H100 / H200 / B200 / GB200, AMD MI300X / MI325X.'
  },
  {
    id: 'tpu',  name: 'TPU',
    best: 'Tensor workloads inside Google Cloud. Tight integration with JAX / TensorFlow and Pathways.',
    weak: 'Less general ecosystem outside Google; not a drop-in CUDA replacement.',
    examples: 'Google TPU v5p, TPU v5e, Trillium (v6e), Ironwood (v7).'
  },
  {
    id: 'aws',  name: 'AWS Trainium / Inferentia',
    best: 'Better token economics inside AWS for workloads that fit the Neuron stack.',
    weak: 'Smaller software ecosystem; harder to lift-and-shift CUDA-native code.',
    examples: 'Trainium2, Inferentia2, Trainium3 (announced).'
  },
  {
    id: 'amd',  name: 'AMD Instinct',
    best: 'Data-centre training + inference; strong HBM capacity / bandwidth (192 GB on MI300X).',
    weak: 'ROCm software ecosystem is closing the gap with CUDA but is not yet at parity for every workload.',
    examples: 'MI300X, MI325X, MI350 series.'
  },
  {
    id: 'gaudi', name: 'Intel Gaudi',
    best: 'Training + inference at competitive price-performance for select workloads, integrated networking on-die.',
    weak: 'Smaller ecosystem than CUDA; product cadence vs NVIDIA roadmap.',
    examples: 'Gaudi 2, Gaudi 3 (and the planned merge into the Falcon Shores GPU line).'
  },
  {
    id: 'wafer', name: 'Wafer-scale + LPU',
    best: 'Specialised inference / training profiles — Cerebras WSE for huge on-die SRAM, Groq LPU for deterministic low-latency inference.',
    weak: 'Niche ecosystems; thin software stacks; hard to share with general workloads.',
    examples: 'Cerebras WSE-3, Groq LPU.'
  },
  {
    id: 'npu',  name: 'Edge NPU / on-device',
    best: 'Low-power inference on phones, laptops, cameras, cars — milliseconds of latency, no network round-trip.',
    weak: 'Not for frontier training; memory and power envelopes are tiny by data-centre standards.',
    examples: 'Apple Neural Engine, Qualcomm Hexagon, Intel/AMD NPUs, Google Tensor.'
  },
  {
    id: 'asic', name: 'ASICs (custom)',
    best: 'Highly efficient when the workload is stable and large enough to amortise the tape-out.',
    weak: 'Less flexible; expensive and slow to design; risk of being out-iterated by general accelerators.',
    examples: 'Hyperscaler internal silicon (Trainium, MTIA, Maia), Tesla Dojo.'
  }
];

/* "Which chip for which job?" — short matrix */
var CHIPS_JOB_MATRIX = [
  { job: 'Frontier training (100 B+ params)',  pick: 'GPU clusters (B200 / GB200 NVL72, MI300X) or TPU v5p pods.' },
  { job: 'Fine-tuning / mid-scale training',   pick: 'GPU (H100 / H200 / MI300X), TPU v5p, Trainium2.' },
  { job: 'High-throughput inference',          pick: 'GPU (H200 / B200), AMD MI300X, Inferentia2, TPU Trillium / Ironwood.' },
  { job: 'Long-context / KV-heavy inference',  pick: 'High-HBM accelerators (MI300X 192 GB, B200 192 GB, MI350 288 GB).' },
  { job: 'Real-time / low-latency serving',    pick: 'Groq LPU, NVIDIA L40S, AWS Inferentia2, mid-tier GPU.' },
  { job: 'Edge / on-device inference',         pick: 'Apple Neural Engine, Qualcomm Hexagon, mobile NPUs, Google Tensor.' },
  { job: 'Recommendation / large embedding',   pick: 'TPU v5p, GPU clusters, AWS Trainium / Inferentia.' },
  { job: 'Robotics + perception',              pick: 'NVIDIA Jetson / Drive, on-device NPUs, Hailo, Mobileye SoCs.' },
  { job: 'Scientific / HPC + AI hybrid',       pick: 'GPU (H100 / H200 / GB200), AMD MI300A, Cerebras WSE-3.' }
];

/* Hardware benchmark cards.
   Specs are vendor-published. mem = HBM/SRAM capacity, memBW = peak HBM/SRAM
   bandwidth, fp16 = dense BF16/FP16 tensor throughput in TFLOPS, fp8 = dense
   FP8 throughput where reported. tdp = max board / module TDP. Anything
   marked "vendor-claimed" should be read as a peak figure under specific
   conditions, not steady-state real-world performance. */
var CHIPS_HARDWARE = [
  {
    id: 'h100', vendor: 'NVIDIA', name: 'H100 SXM5', generation: 'Hopper',
    use: 'Frontier training + high-end inference',
    mem: '80 GB HBM3', memBW: '3.35 TB/s',
    fp16: '~989 TFLOPS dense (BF16, Tensor Core)',
    fp8:  '~1,979 TFLOPS dense (FP8, Tensor Core)',
    interconnect: 'NVLink 4 — 900 GB/s per GPU',
    precisions: 'FP64, TF32, FP16, BF16, FP8, INT8',
    system: 'HGX H100 (8 GPUs) and DGX SuperPOD (256+ GPUs over IB)',
    software: 'CUDA, cuDNN, TensorRT-LLM, NeMo, full PyTorch / JAX',
    strength: 'Mature CUDA stack; broadly available; strong networking.',
    weakness: '80 GB HBM3 limits very-long-context inference and 100B+-param weights without sharding.',
    take: 'The 2023–24 reference data-centre GPU. Still the volume workhorse.',
    source: 'NVIDIA H100 datasheet (2023)'
  },
  {
    id: 'h200', vendor: 'NVIDIA', name: 'H200 SXM5', generation: 'Hopper',
    use: 'High-end inference (esp. long-context, KV-heavy)',
    mem: '141 GB HBM3e', memBW: '4.8 TB/s',
    fp16: '~989 TFLOPS dense (same compute as H100)',
    fp8:  '~1,979 TFLOPS dense',
    interconnect: 'NVLink 4 — 900 GB/s per GPU',
    precisions: 'FP64, TF32, FP16, BF16, FP8, INT8',
    system: 'HGX H200 (8 GPUs) and DGX H200',
    software: 'Same CUDA / TensorRT-LLM stack as H100',
    strength: '+76% memory and ~+43% bandwidth over H100 with no software port.',
    weakness: 'Same compute as H100 — wins on memory-bound workloads, not on raw matmul.',
    take: 'A drop-in inference upgrade for long-context and large-batch serving.',
    source: 'NVIDIA H200 datasheet (2024)'
  },
  {
    id: 'b200', vendor: 'NVIDIA', name: 'B200 SXM (Blackwell)', generation: 'Blackwell',
    use: 'Frontier training + dense inference',
    mem: '192 GB HBM3e', memBW: '8 TB/s',
    fp16: '~2.25 PFLOPS dense (Tensor Core, vendor)',
    fp8:  '~4.5 PFLOPS dense; FP4 ~9 PFLOPS dense',
    interconnect: 'NVLink 5 — 1.8 TB/s per GPU',
    precisions: 'FP64, TF32, BF16, FP16, FP8, FP4, INT8',
    system: 'HGX B200 (8 GPUs); GB200 superchip (2× B200 + Grace)',
    software: 'CUDA, TensorRT-LLM, FP4 Transformer Engine path',
    strength: 'Step change in FP8 + FP4 inference density and HBM3e.',
    weakness: 'Power + cooling envelope (>1 kW per GPU) requires new rack designs.',
    take: 'The 2025 frontier-training and frontier-inference floor.',
    source: 'NVIDIA Blackwell architecture brief (2024)'
  },
  {
    id: 'gb200-nvl72', vendor: 'NVIDIA', name: 'GB200 NVL72', generation: 'Blackwell',
    use: 'Frontier training + trillion-parameter inference',
    mem: '13.5 TB aggregate HBM3e (72 × B200)',
    memBW: 'Aggregate ~576 TB/s across the rack',
    fp16: '~360 PFLOPS dense (rack-level, Tensor Core)',
    fp8:  '~720 PFLOPS dense; FP4 ~1.4 EFLOPS (rack-level)',
    interconnect: 'NVLink Switch fabric — all-to-all across 72 GPUs at 1.8 TB/s each',
    precisions: 'Same as B200',
    system: '36 GB200 superchips (72 B200 + 36 Grace) in a single liquid-cooled rack',
    software: 'CUDA, TensorRT-LLM, NCCL across NVLink Switch',
    strength: '72 GPUs behave like one accelerator over NVLink Switch — huge for trillion-parameter inference.',
    weakness: '~120 kW per rack; only viable in liquid-cooled, power-dense data centres.',
    take: 'The first commercial "AI factory" reference design.',
    source: 'NVIDIA GB200 NVL72 reference architecture (2024)'
  },
  {
    id: 'mi300x', vendor: 'AMD', name: 'Instinct MI300X', generation: 'CDNA 3',
    use: 'Training + large-memory inference',
    mem: '192 GB HBM3', memBW: '5.3 TB/s',
    fp16: '~1,307 TFLOPS dense (matrix, BF16/FP16)',
    fp8:  '~2,614 TFLOPS dense (FP8 matrix)',
    interconnect: 'Infinity Fabric / xGMI, 8 GPUs per platform',
    precisions: 'FP64, TF32, BF16, FP16, FP8, INT8',
    system: '8-GPU platform; 1.5 TB HBM3 total per node',
    software: 'ROCm, vLLM-on-ROCm, PyTorch upstream',
    strength: 'Industry-leading HBM3 capacity per accelerator at launch.',
    weakness: 'ROCm ecosystem narrower than CUDA; some workloads still need porting.',
    take: 'The strongest non-NVIDIA training GPU available in volume.',
    source: 'AMD MI300X datasheet (2023)'
  },
  {
    id: 'mi325x', vendor: 'AMD', name: 'Instinct MI325X', generation: 'CDNA 3',
    use: 'Inference, especially long-context',
    mem: '256 GB HBM3e', memBW: '6 TB/s',
    fp16: '~1,307 TFLOPS dense (same compute as MI300X)',
    fp8:  '~2,614 TFLOPS dense',
    interconnect: 'Same Infinity Fabric / xGMI as MI300X',
    precisions: 'FP64, BF16, FP16, FP8, INT8',
    system: '8-GPU platform; 2 TB HBM3e per node',
    software: 'ROCm, vLLM, PyTorch upstream',
    strength: 'Largest HBM capacity per accelerator at launch (256 GB).',
    weakness: 'Same compute as MI300X — wins on memory-bound inference, not on training FLOPS.',
    take: 'The "more HBM" generation while AMD waits for CDNA 4 / MI350.',
    source: 'AMD MI325X product brief (2024)'
  },
  {
    id: 'mi355x', vendor: 'AMD', name: 'Instinct MI355X', generation: 'CDNA 4',
    use: 'Frontier training + inference',
    mem: '288 GB HBM3e', memBW: '8 TB/s',
    fp16: '~2.5 PFLOPS dense (vendor-claimed, matrix)',
    fp8:  '~5 PFLOPS dense; FP4 path supported',
    interconnect: 'Infinity Fabric (next-gen xGMI)',
    precisions: 'FP64, BF16, FP8, FP4, INT8',
    system: '8-GPU platform; ~2.3 TB HBM3e per node',
    software: 'ROCm 7+, vLLM, PyTorch upstream',
    strength: 'Largest HBM in market at launch; full FP4 path.',
    weakness: 'Software polish at FP4 still maturing; volume ramp 2025–26.',
    take: 'AMD\'s direct response to Blackwell.',
    source: 'AMD MI350 series announcement (2024–25)'
  },
  {
    id: 'gb300-nvl72', vendor: 'NVIDIA', name: 'GB300 NVL72 (Blackwell Ultra)', generation: 'Blackwell Ultra',
    use: 'Frontier training + reasoning-model inference at rack scale',
    mem: '~21 TB HBM3e aggregate (72× B300, ~288 GB per GPU)',
    memBW: 'Aggregate ~720 TB/s across the rack (vendor-disclosed targets)',
    fp16: 'Higher than GB200 NVL72 (vendor-disclosed; benchmark conditions vary)',
    fp8:  'FP4 inference throughput materially uplifted vs GB200 (vendor)',
    interconnect: 'NVLink Switch fabric — same all-to-all topology as GB200 NVL72',
    precisions: 'FP64, TF32, BF16, FP16, FP8, FP4, INT8',
    system: '36 GB300 superchips (72 B300 + 36 Grace) per liquid-cooled rack',
    software: 'CUDA, TensorRT-LLM, Dynamo + reasoning-model serving stacks',
    strength: 'Targets reasoning-model inference and 1-trillion-parameter serving.',
    weakness: 'Vendor-disclosed targets; volume ramp through 2025; rack power envelope is in the 130+ kW class.',
    take: 'NVIDIA\'s 2025 successor to GB200 NVL72; treat numbers as vendor targets until third-party benchmarks land.',
    source: 'NVIDIA Blackwell Ultra / GTC 2025 announcement'
  },
  {
    id: 'trainium3', vendor: 'AWS', name: 'Trainium3', generation: 'Trn3',
    use: 'Training + inference at AWS scale (vendor-disclosed)',
    mem: 'Vendor-disclosed targets — capacity uplift vs Trainium2',
    memBW: 'Vendor-disclosed targets',
    fp16: 'Up to ~4× Trainium2 instance performance (vendor-claimed)',
    fp8:  'FP8 inference path; FP4 not the headline metric (vendor)',
    interconnect: 'Next-generation NeuronLink fabric',
    precisions: 'FP32, BF16, FP16, FP8, INT8',
    system: 'Trn3-class instances; UltraServers and UltraClusters at scale',
    software: 'AWS Neuron SDK, PyTorch on Neuron, JAX on Neuron',
    strength: 'Step-change targets for AWS-native training + inference economics.',
    weakness: 'Vendor-disclosed targets; full datasheets and MLPerf-style numbers still pending.',
    take: 'Treat as a directional read until production benchmarks land.',
    source: 'AWS re:Invent 2024 announcement'
  },
  {
    id: 'tpu-v5p', vendor: 'Google', name: 'TPU v5p', generation: 'TPU v5',
    use: 'Frontier training inside Google Cloud',
    mem: '95 GB HBM', memBW: '2.8 TB/s',
    fp16: '~459 TFLOPS BF16 per chip (vendor)',
    fp8:  'INT8 supported; FP8 not the headline path',
    interconnect: 'TPU ICI, 4,800 Gb/s per chip in pod',
    precisions: 'BF16, FP32, INT8',
    system: 'Pods of up to 8,960 chips with optical ICI',
    software: 'JAX, TensorFlow, PyTorch/XLA',
    strength: 'Pod-level scale-out and tight integration with JAX / Pathways.',
    weakness: 'Only available through Google Cloud; ecosystem narrower than CUDA.',
    take: 'Google\'s reference frontier-training accelerator.',
    source: 'Google Cloud TPU v5p documentation (2023)'
  },
  {
    id: 'tpu-v5e', vendor: 'Google', name: 'TPU v5e', generation: 'TPU v5',
    use: 'Cost-efficient training + inference',
    mem: '16 GB HBM', memBW: '819 GB/s',
    fp16: '~197 TFLOPS BF16 per chip (vendor)',
    fp8:  'INT8 supported',
    interconnect: 'TPU ICI (smaller pod than v5p)',
    precisions: 'BF16, INT8',
    system: 'Pods up to 256 chips',
    software: 'JAX, TensorFlow, PyTorch/XLA',
    strength: 'Strong price-performance for inference and mid-scale training.',
    weakness: 'Smaller pod scale than v5p; not for frontier-trillion-parameter training.',
    take: 'The cost-efficient TPU tier in Google Cloud.',
    source: 'Google Cloud TPU v5e documentation (2023)'
  },
  {
    id: 'tpu-trillium', vendor: 'Google', name: 'Trillium (TPU v6e)', generation: 'TPU v6',
    use: 'Training + inference, mainstream Google Cloud tier',
    mem: '32 GB HBM3', memBW: '~1.64 TB/s',
    fp16: 'Up to ~4.7× v5e per-chip peak (Google blog)',
    fp8:  'FP8 supported',
    interconnect: 'Faster ICI than v5e',
    precisions: 'BF16, FP8, INT8',
    system: 'Pods of 256 chips',
    software: 'JAX, PyTorch/XLA, vLLM-TPU',
    strength: 'Big per-chip jump over v5e; mainstream Gemini-class inference target.',
    weakness: 'Google-Cloud-only; ecosystem still narrower than CUDA.',
    take: 'The 2024–25 mainstream Google AI chip.',
    source: 'Google Cloud Trillium announcement (2024)'
  },
  {
    id: 'tpu-ironwood', vendor: 'Google', name: 'TPU v7 "Ironwood"', generation: 'TPU v7',
    use: 'Inference-focused, AI-agent serving',
    mem: '192 GB HBM3e', memBW: '7.2 TB/s',
    fp16: 'Vendor-claimed step change vs v5p; specifics workload-dependent',
    fp8:  'Optimised FP8 inference path',
    interconnect: 'ICI scaling to thousands of chips',
    precisions: 'BF16, FP8, INT8',
    system: 'Large inference pods',
    software: 'JAX, vLLM-TPU, Google internal serving stacks',
    strength: 'Designed around inference economics: very large HBM, very high bandwidth.',
    weakness: 'New-generation; benchmark visibility outside Google still limited.',
    take: 'The 2025 inference-tier TPU for AI-agent workloads.',
    source: 'Google Cloud Ironwood (TPU v7) announcement (2025)'
  },
  {
    id: 'trainium2', vendor: 'AWS', name: 'Trainium2', generation: 'Trn2',
    use: 'Training + large-scale inference inside AWS',
    mem: '96 GB HBM3 per chip', memBW: '2.9 TB/s per chip',
    fp16: '~667 TFLOPS BF16 per chip (vendor)',
    fp8:  '~1,300 TFLOPS FP8 per chip (vendor)',
    interconnect: 'NeuronLink-v3 within Trn2 instance (16 chips)',
    precisions: 'FP32, BF16, FP16, FP8, INT8',
    system: 'Trn2 instance — 16 Trainium2 chips, 1.5 TB HBM3 per instance',
    software: 'AWS Neuron SDK, PyTorch on Neuron, JAX on Neuron',
    strength: 'Better token economics inside AWS than equivalent GPU instances for many workloads.',
    weakness: 'Smaller ecosystem than CUDA; lift-and-shift requires Neuron porting.',
    take: 'AWS\'s answer to building AI on a non-NVIDIA stack.',
    source: 'AWS Trainium2 product page (2024)'
  },
  {
    id: 'inferentia2', vendor: 'AWS', name: 'Inferentia2', generation: 'Inf2',
    use: 'Production inference inside AWS',
    mem: '32 GB HBM per chip', memBW: '820 GB/s per chip',
    fp16: 'BF16 inference optimised; specific TFLOPS not the headline metric',
    fp8:  'FP8 inference path supported',
    interconnect: 'NeuronLink within Inf2 instance',
    precisions: 'BF16, FP16, FP8, INT8',
    system: 'Inf2 instance — up to 12 Inferentia2 chips',
    software: 'AWS Neuron SDK, PyTorch / TF',
    strength: 'Designed for serving cost — strong dollars-per-token for fits-the-stack workloads.',
    weakness: 'Inference only; needs Neuron-supported model.',
    take: 'AWS\'s production-inference workhorse.',
    source: 'AWS Inferentia2 product page (2023)'
  },
  {
    id: 'gaudi3', vendor: 'Intel', name: 'Gaudi 3', generation: 'Gaudi 3',
    use: 'Training + inference at competitive price-performance',
    mem: '128 GB HBM2e', memBW: '3.7 TB/s',
    fp16: '~1,835 TFLOPS BF16 (vendor-claimed)',
    fp8:  '~1,835 TFLOPS FP8 (vendor-claimed)',
    interconnect: '24 × 200 Gb/s integrated NICs per accelerator',
    precisions: 'FP32, BF16, FP16, FP8, INT8',
    system: '8-accelerator baseboard (HLS-Gaudi3)',
    software: 'SynapseAI / Intel Gaudi software stack',
    strength: 'Integrated networking on-die; competitive HBM and bandwidth.',
    weakness: 'Smaller ecosystem; product line being merged into Falcon Shores GPU roadmap.',
    take: 'A credible alternative for buyers willing to invest in non-CUDA tooling.',
    source: 'Intel Gaudi 3 product brief (2024)'
  },
  {
    id: 'wse3', vendor: 'Cerebras', name: 'WSE-3', generation: 'Wafer-scale',
    use: 'Specialised training + inference, particularly long-context',
    mem: '44 GB on-chip SRAM (no off-chip HBM)',
    memBW: '~21 PB/s on-chip memory bandwidth',
    fp16: '~125 PFLOPS FP16 (vendor-claimed, full wafer)',
    fp8:  'Lower-precision modes available',
    interconnect: 'On-wafer fabric — entire model can fit on one chip',
    precisions: 'FP16, BF16, FP8',
    system: 'CS-3 system (one wafer-scale chip per system)',
    software: 'Cerebras stack + PyTorch interface',
    strength: 'No multi-chip communication overhead for many workloads — the model lives on one piece of silicon.',
    weakness: 'Niche ecosystem; supply is limited; not a CUDA replacement.',
    take: 'Worth knowing for the chip-architecture question, even if most teams don\'t use it.',
    source: 'Cerebras WSE-3 product page (2024)'
  },
  {
    id: 'groq-lpu', vendor: 'Groq', name: 'LPU', generation: 'LPU v1',
    use: 'Deterministic low-latency inference',
    mem: '230 MB on-chip SRAM (no HBM)',
    memBW: 'On-chip; aggregate scales with number of LPUs',
    fp16: 'Inference TFLOPS workload-dependent (vendor)',
    fp8:  'INT8 / FP8 inference paths',
    interconnect: 'Custom deterministic fabric',
    precisions: 'FP16, BF16, INT8, FP8',
    system: 'Multi-LPU racks',
    software: 'Groq compiler + libraries',
    strength: 'Predictable, low-latency token generation; strong latency vs cost for chat-style serving.',
    weakness: 'Inference-only; tiny per-chip memory means careful model placement.',
    take: 'A serious data point on what specialised inference silicon can do.',
    source: 'Groq product page (2024)'
  },
  {
    id: 'apple-ne', vendor: 'Apple', name: 'Neural Engine (M4)', generation: 'M-series',
    use: 'On-device inference, mobile + laptop',
    mem: 'Unified memory shared with CPU/GPU',
    memBW: 'Up to 120 GB/s on M4 Pro / Max (system memory)',
    fp16: 'Vendor describes as "38 TOPS" (INT8) on the 16-core Neural Engine',
    fp8:  'On-device inference path',
    interconnect: 'On-die fabric to CPU + GPU',
    precisions: 'FP16, BF16, INT8',
    system: 'Single SoC',
    software: 'Core ML, Metal Performance Shaders, MLX',
    strength: 'Reference point for on-device AI: latency-free, no network round-trip.',
    weakness: 'Tiny next to data-centre accelerators; not for training.',
    take: 'Where AI quietly happens on the device in your hand or laptop.',
    source: 'Apple M4 product page (2024)'
  }
];

/* Memory bottleneck section content */
var CHIPS_MEMORY = {
  headline: 'Why HBM became the new oil of AI chips',
  whyMemory: [
    'Frontier model weights have to live somewhere fast. A 70B-parameter model in BF16 alone is ~140 GB — bigger than a single H100\'s HBM.',
    'Inference needs constant access to weights and the per-request KV cache. Long context multiplies KV cache pressure linearly.',
    'Training also stores activations, gradients, optimizer states (AdamW alone is ~3× weights), and periodic checkpoints.',
    'HBM sits in-package on a silicon interposer. It gives an order of magnitude more bandwidth than ordinary DDR/GDDR.',
    'Roughly: H100 = 3.35 TB/s, H200 = 4.8 TB/s, B200 = 8 TB/s, MI300X = 5.3 TB/s, MI325X = 6 TB/s, MI355X = 8 TB/s, TPU Trillium = 1.64 TB/s.'
  ],
  hbmGenerations: [
    { name: 'HBM3',   note: 'Generation behind most 2023 launches (H100, MI300X). 6.4 Gbps per pin, ~819 GB/s per stack.' },
    { name: 'HBM3e',  note: 'Faster pin speed (8–9.2 Gbps) and higher per-stack capacity. Powers H200, B200, MI325X, Trillium and beyond.' },
    { name: 'HBM4',   note: 'Wider 2,048-bit interface (vs 1,024-bit on HBM3/HBM3e). Roughly 2× per-stack bandwidth. Volume ramp 2025–26.' }
  ],
  supplyTake: 'HBM is supplied almost entirely by SK hynix, Samsung and Micron. SK hynix has been the volume leader on HBM3e to NVIDIA. Yields, advanced packaging capacity at TSMC (CoWoS), and HBM4 readiness are the binding constraints on AI chip supply through 2026.',
  misconception: '"More compute" does not help if the chip is waiting for memory. For long-context inference and serving, memory capacity and bandwidth often matter more than peak FLOPS.'
};

/* Interconnect section content */
var CHIPS_INTERCONNECT = {
  headline: 'Why one GPU is never enough',
  parallelism: [
    { h: 'Data parallelism',     d: 'Same model, different data on each GPU. Gradients synchronised every step.' },
    { h: 'Tensor parallelism',   d: 'Model layers split across GPUs. Activations flow across NVLink / ICI / NeuronLink at every step.' },
    { h: 'Pipeline parallelism', d: 'Different layers on different GPUs. Micro-batches flow forward, gradients flow back.' },
    { h: 'Expert parallelism',   d: 'Different MoE experts on different GPUs. Token routing turns into all-to-all traffic.' }
  ],
  hierarchy: [
    { h: 'Inside the package',   d: 'On-die / on-package fabric. CoWoS interposer wires HBM to compute die.' },
    { h: 'Inside the server',    d: 'NVLink / NVSwitch (NVIDIA), Infinity Fabric (AMD), ICI (TPU), NeuronLink (AWS) — hundreds of GB/s up to TB/s.' },
    { h: 'Inside the rack',      d: 'NVLink Switch (NVL72), AMD MI300 platforms, TPU pods, Trn2 racks. The "one accelerator made of many" idea.' },
    { h: 'Across the cluster',   d: 'InfiniBand HDR/NDR/XDR or AI-tuned Ethernet (NVIDIA Spectrum-X, Ultra Ethernet Consortium). 400/800 Gb/s links.' },
    { h: 'Across the campus',    d: 'Inter-data-centre networking. Optical DCI, dark fibre, distributed training across sites — still rare at frontier scale.' }
  ],
  fabrics: [
    { name: 'NVLink 5 / NVSwitch', use: 'NVIDIA Blackwell racks; 1.8 TB/s per GPU, all-to-all in NVL72.' },
    { name: 'AMD Infinity Fabric / xGMI', use: 'Inside MI300/MI325/MI355 platforms.' },
    { name: 'TPU ICI', use: 'Optical interconnect across TPU pods (up to 8,960 chips on v5p).' },
    { name: 'AWS NeuronLink-v3', use: 'Inside Trn2 instance; high-bandwidth fabric across 16 Trainium2 chips.' },
    { name: 'PCIe / CXL', use: 'Host-to-accelerator and CPU-to-memory expansion; lower bandwidth than NVLink-class fabrics.' },
    { name: 'InfiniBand (NDR / XDR)', use: 'Cluster fabric — most frontier training clusters.' },
    { name: 'AI Ethernet (Spectrum-X / Ultra Ethernet)', use: 'Higher-radix, lossless Ethernet for AI; growing share of the cluster fabric market.' }
  ],
  punchline: 'A model that looks possible on paper can be too slow or too expensive if the communication overhead between chips is too high. Frontier AI is a networking problem as much as a compute problem.'
};

/* Supply-chain country cards */
var CHIPS_SUPPLY = [
  {
    id: 'tw', name: 'Taiwan',
    strong: 'TSMC operates the world\'s largest leading-edge foundry network — N5/N4/N3/N2 capacity, plus the dominant CoWoS advanced-packaging line.',
    weak: 'Concentration of leading-edge logic + packaging in a single jurisdiction is the single most-cited geopolitical risk in semiconductors.',
    matter: 'Most flagship AI chips (H100, H200, B200, MI300, TPU, Trainium) are taped out at TSMC.',
    bottleneck: 'CoWoS advanced-packaging capacity has been a binding limit on AI chip supply through 2024–25.',
    source: 'TSMC annual reports + investor calls.'
  },
  {
    id: 'us', name: 'United States',
    strong: 'Designs the chips: NVIDIA, AMD, Apple, Broadcom, Qualcomm, Intel, hyperscaler silicon. Owns the EDA stack (Synopsys, Cadence) and the dominant compiler / framework ecosystem.',
    weak: 'Manufacturing capacity at the leading edge is limited; most NVIDIA / AMD / Apple chips are made overseas. CHIPS Act fabs ramping but not yet at TSMC volume.',
    matter: 'The AI software ecosystem (CUDA, PyTorch, JAX, TensorRT, vLLM) is overwhelmingly US-anchored.',
    bottleneck: 'Manufacturing self-sufficiency at leading edge; sustaining EDA + IP advantage under export-control complexity.',
    source: 'CHIPS Act announcements; SIA semiconductor industry reports.'
  },
  {
    id: 'nl', name: 'Netherlands',
    strong: 'ASML is the world\'s only producer of EUV lithography equipment — a single-supplier monopoly for sub-7 nm patterning.',
    weak: 'Single-point-of-failure; deeply exposed to US-China export-control politics.',
    matter: 'No EUV → no leading-edge node. ASML also owns High-NA EUV for the next two generations.',
    bottleneck: 'Export-control negotiations with the US, Japan and the Netherlands government decide who can buy machines.',
    source: 'ASML annual report + EUV / High-NA technology pages.'
  },
  {
    id: 'kr', name: 'South Korea',
    strong: 'Samsung + SK hynix dominate HBM, the binding constraint on AI accelerator supply. Samsung Foundry is the second-largest leading-edge foundry.',
    weak: 'HBM yield competition is intense; foundry execution at sub-3 nm has been mixed; geographic concentration with North Korea is a strategic risk.',
    matter: 'SK hynix has been the volume leader on HBM3e to NVIDIA. HBM4 readiness will gate AI accelerator capacity through 2026.',
    bottleneck: 'HBM yield + capacity ramp + foundry advanced-node share.',
    source: 'SK hynix and Samsung quarterly reports.'
  },
  {
    id: 'jp', name: 'Japan',
    strong: 'Materials (photoresists, gases, silicon wafers), equipment (Tokyo Electron, Screen, Lasertec, Disco), Sony image sensors, JASM (TSMC Kumamoto fab), Rapidus 2 nm reentry attempt.',
    weak: 'Limited leading-edge logic manufacturing today; rebuilding scale takes a decade.',
    matter: 'Several material and equipment chokepoints sit in Japan; without them, no fab anywhere can run.',
    bottleneck: 'Time + capital to bring Rapidus and Kumamoto-style projects to volume.',
    source: 'JASM / Rapidus disclosures; SEMI Japan reports.'
  },
  {
    id: 'my', name: 'Malaysia',
    strong: 'Among the world\'s largest assembly, test and packaging (OSAT) hubs — roughly 13% of global ATP volume per MIDA / industry reporting. Penang especially. Major players: Inari, Greatech, Globetronics, Intel Penang, plus contract OSAT for Western chipmakers.',
    weak: 'Mostly back-end. Limited leading-edge front-end fab today.',
    matter: 'Final stage where chips become products. Advanced-packaging investment (e.g. Intel Penang, AT&S) is the obvious move up the value chain.',
    bottleneck: 'Translating ATP scale into advanced-packaging share before AI chip supply rebalances.',
    source: 'MIDA + SEMI Southeast Asia reporting.'
  },
  {
    id: 'sg', name: 'Singapore',
    strong: 'Around one in ten chips produced globally and roughly one-fifth of global semiconductor equipment manufacturing (Singapore EDB / SEMI). Strong design + advanced-packaging ecosystem; high-trust regulatory environment.',
    weak: 'Land, labour, power and cost constraints limit headline-grabbing leading-edge fab construction.',
    matter: 'High-trust hub for advanced manufacturing and regional operations; particularly important for HQ, design, packaging and test.',
    bottleneck: 'Same physical constraints as the rest of the country — and the spillover relationship with Malaysia for downstream capacity.',
    source: 'Singapore EDB; SEMI World Fab Forecast; A*STAR.'
  },
  {
    id: 'cn', name: 'China',
    strong: 'Massive domestic demand. SMIC, Huawei (HiSilicon Ascend), Cambricon, Biren, Moore Threads. Growing tooling ecosystem (SMEE etc.). Domestic memory players (CXMT, YMTC).',
    weak: 'EUV access blocked under US/Dutch/Japanese export controls; HBM and advanced-packaging gap; software ecosystem fragmented; foreign hyperscalers structurally absent.',
    matter: 'Largest single AI market in unit terms; sovereign-AI push is a real industrial program.',
    bottleneck: 'Closing the EUV / HBM / packaging gap without leading-edge tooling — a multi-year, multi-tens-of-billions problem.',
    source: 'Reuters; SIA / CSIS supply-chain reports; SMIC + Huawei disclosures.'
  }
];

/* Compact supply-chain "map" of the value chain */
var CHIPS_SUPPLY_MAP = [
  { h: 'Design',                d: 'NVIDIA, AMD, Apple, Google, Amazon, Broadcom, Qualcomm, Huawei.' },
  { h: 'EDA / IP',              d: 'Synopsys, Cadence, Siemens EDA — and Arm for IP licensing.' },
  { h: 'Wafer fabrication',     d: 'TSMC, Samsung Foundry, Intel Foundry, SMIC, GlobalFoundries.' },
  { h: 'Lithography',           d: 'ASML (EUV monopoly), Nikon + Canon (older nodes).' },
  { h: 'Materials + chemicals', d: 'Shin-Etsu, JSR, TOK, Sumitomo (Japan); Linde + Air Liquide (gases).' },
  { h: 'HBM memory',            d: 'SK hynix, Samsung, Micron — the supply choke for accelerators.' },
  { h: 'Advanced packaging',    d: 'TSMC CoWoS / SoIC, Samsung, Intel Foveros, ASE Technology.' },
  { h: 'Testing + OSAT',        d: 'ASE, Amkor, JCET, plus the Malaysia OSAT belt (Penang).' },
  { h: 'Server integration',    d: 'Dell, HPE, Supermicro, Lenovo, Quanta, Wiwynn, Foxconn.' },
  { h: 'Cloud deployment',      d: 'AWS, Azure, Google Cloud, Oracle Cloud, CoreWeave, Crusoe, Lambda.' }
];

/* Economics — cost stack + intuition */
var CHIPS_ECONOMICS = {
  costStack: [
    'Accelerator unit price (GPU / TPU / Trainium / MI300X).',
    'Server chassis + CPU + system memory + NICs.',
    'Rack: power shelf, busbar, switches, cabling, optics.',
    'Networking: InfiniBand / Spectrum-X switches + fabric.',
    'Storage: high-throughput parallel filesystem.',
    'Power delivery, UPS, batteries, generators.',
    'Cooling: liquid loops, CDUs, cooling towers, water.',
    'Data-centre capex: shell, civil, commissioning.',
    'Software engineering: training stack, evaluation, kernels.',
    'Utilization (MFU) — the difference between paper FLOPS and tokens shipped.',
    'Failure rate + repair cycle: GPUs do fail at scale.',
    'Depreciation: a 4-year accelerator life is now common, vs 6 years for general server gear.'
  ],
  trainingVsInference: [
    {
      h: 'Training',
      d: 'Huge batched distributed compute. High interconnect bandwidth required. Optimizer memory, activation memory and checkpointing dominate. Expensive but periodic — the bill arrives in chunks.'
    },
    {
      h: 'Inference',
      d: 'Continuous serving cost. Latency matters. KV cache, batching and memory bandwidth matter more than raw FLOPS. Reasoning models multiply compute per answer; long context multiplies memory per request. The bill arrives every second.'
    }
  ],
  punchline: 'A chip that is excellent for training is not automatically the best for serving millions of users. The economics are different jobs.'
};

/* Calculator presets */
var CHIPS_CALC_PRESETS = [
  { id: 'srv-8',     label: '8-GPU server',         gpus: 8,     watts: 700, util: 70, price: 0.08, hourly: 10, tag: 'Single HGX H100 / MI300X-class baseboard. ~AWS p5 list-equivalent.' },
  { id: 'rack-72',   label: '72-GPU NVL72 rack',    gpus: 72,    watts: 1000, util: 80, price: 0.08, hourly: 12, tag: 'A single GB200 NVL72 reference rack at announced cloud pricing.' },
  { id: 'cluster-1k',label: '1,000-GPU cluster',    gpus: 1000,  watts: 750, util: 75, price: 0.07, hourly: 5,  tag: 'Mid-tier training cluster with InfiniBand fabric, blended reserved + on-demand.' },
  { id: 'factory-100k', label: '100,000-GPU AI factory', gpus: 100000, watts: 800, util: 80, price: 0.06, hourly: 3, tag: 'Frontier AI factory at-scale TCO (capex amortised + energy + ops).' }
];

/* Misconceptions for the Basics tab */
var CHIPS_MISCONCEPTIONS = [
  { myth: 'The best chip is the one with the most FLOPS.',                 truth: 'Memory bandwidth, interconnect, software stack, utilization and workload all matter. Peak FLOPS without context is marketing.' },
  { myth: 'GPUs are just graphics cards.',                                 truth: 'Modern data-centre GPUs are full systems — tensor cores, HBM, NVLink, networking and a software ecosystem that took two decades to build.' },
  { myth: 'A cheaper chip automatically wins.',                            truth: 'Software, ecosystem and utilization can outweigh hardware sticker price. Tokens-per-dollar at <em>your</em> workload is the real question.' },
  { myth: 'Custom ASICs always beat GPUs.',                                truth: 'They can be more efficient on a fixed workload, but they\'re less flexible, expensive to design and risk being out-iterated by general accelerators.' },
  { myth: 'More HBM solves everything.',                                   truth: 'HBM helps memory pressure, but packaging, cost, thermals, software and interconnect still matter.' },
  { myth: 'NVIDIA is only ahead because of hardware.',                     truth: 'CUDA, libraries, networking, systems integration and developer mindshare are arguably the bigger moat.' },
  { myth: 'China can simply copy frontier AI chips.',                      truth: 'Leading-edge chips need EUV, EDA, HBM, packaging, yield learning, software ecosystem and supply-chain depth — not a single missing item.' },
  { myth: 'Inference will be cheap automatically.',                        truth: 'Reasoning models, long context, multimodal inputs and low-latency serving can make inference extremely compute-intensive. Costs do not always fall.' },
  { myth: 'One chip benchmark tells the full story.',                      truth: 'Real performance depends on workload, batch size, sequence length, precision, compiler, model architecture and cluster configuration. Always read the conditions, not the headline number.' }
];

/* ============================================
   CHIPS_TRAIN_INFERENCE — dedicated tab content
   ============================================ */
var CHIPS_TRAIN_INFERENCE = {
  headline: 'Training builds the model. Inference runs the business.',
  trainingFlow: [
    { h: 'Dataset',      d: 'Curated tokens, multimodal data, code corpora, synthetic data.' },
    { h: '+ chips',      d: 'GPU / TPU / Trainium clusters running data + tensor + pipeline + expert parallelism.' },
    { h: '+ time',       d: 'Days to months of continuous distributed compute on tens of thousands of accelerators.' },
    { h: '→ weights',    d: 'A frozen set of model parameters (and an optimizer state checkpoint along the way).' }
  ],
  inferenceFlow: [
    { h: 'User query',          d: 'Prompt tokens streamed in from an API, app or agent.' },
    { h: '+ model weights',     d: 'Parameters loaded from HBM into compute units.' },
    { h: '+ KV cache',          d: 'Per-request keys/values that grow with context length.' },
    { h: '→ tokens',            d: 'Streamed output, billed per token at a price the chip layer ultimately decides.' }
  ],
  comparison: [
    { axis: 'Workload pattern',     train: 'Bursty, large-batch, all-out',                              inf: 'Continuous, small-batch (or batched serving), latency-bounded' },
    { axis: 'Memory pressure',      train: 'Weights + activations + gradients + optimizer + checkpoints', inf: 'Weights + KV cache (linear with context length)' },
    { axis: 'Interconnect demand',  train: 'Heavy all-to-all + collective communication',                inf: 'Light during decode; heavier during prefill + MoE routing' },
    { axis: 'Latency tolerance',    train: 'Throughput-bound; latency does not matter to the user',      inf: 'Strict per-token + per-request latency targets' },
    { axis: 'Precision',            train: 'BF16 / FP16 dominant; FP8 emerging',                          inf: 'FP8 / INT8 / FP4 increasingly viable' },
    { axis: 'Cost shape',           train: 'Capex chunks: a training run, a checkpoint',                  inf: 'Opex stream: dollars-per-token, every second' },
    { axis: 'Scaling primitive',    train: 'Parallelism (data / tensor / pipeline / expert)',             inf: 'Batching, sharding, prefill-decode split, KV-cache management' }
  ],
  takeaway: 'A chip that\'s excellent for training is rarely the best chip for serving millions of users. Same silicon, different optimisations — and often different chips entirely.'
};

/* ============================================
   CHIPS_GEOPOLITICS — bottleneck map + export-control read
   ============================================ */
var CHIPS_GEOPOLITICS = {
  headline: 'Advanced AI chips are strategic assets',
  context: 'Every leading-edge AI chip touches multiple jurisdictions before it boots. Concentration in a small number of countries makes the chip layer geopolitical: who can buy, manufacture and deploy frontier compute is now a security question, not just an industrial one.',
  whyMatters: [
    'AI capability scales with chips, and chips scale with manufacturing access.',
    'Defence, intelligence, robotics, surveillance, science and economic competitiveness all flow through the same supply chain.',
    'No single country owns the full chain — semiconductor independence is a multi-decade industrial program, not a procurement decision.'
  ],
  bottlenecks: [
    { id: 'us', country: 'United States',  role: 'Design + EDA + cloud demand + export controls',         leverage: 'Designs the dominant accelerators; owns Synopsys/Cadence EDA; is the rule-writer for export controls.', risk: 'Manufacturing capacity at the leading edge; reliance on Taiwan + South Korea for production.' },
    { id: 'tw', country: 'Taiwan',         role: 'Leading-edge logic manufacturing',                       leverage: 'TSMC is the volume foundry for almost every flagship AI chip and operates the dominant CoWoS line.', risk: 'Single-jurisdiction concentration is the most-cited geopolitical risk in semiconductors.' },
    { id: 'nl', country: 'Netherlands',    role: 'EUV + High-NA lithography',                              leverage: 'ASML is the only producer of EUV scanners — without them, no leading-edge node exists.',           risk: 'Single-supplier monopoly under continuous US-China export-control pressure.' },
    { id: 'kr', country: 'South Korea',    role: 'HBM + memory + alt-foundry',                             leverage: 'SK hynix + Samsung supply most HBM3/HBM3e to NVIDIA and AMD; Samsung Foundry is the second-largest leading-edge foundry.', risk: 'HBM yield + capacity ramp; foundry execution at sub-3 nm.' },
    { id: 'jp', country: 'Japan',          role: 'Materials + equipment + sensors',                        leverage: 'Photoresists, gases, silicon wafers, key tools (Tokyo Electron, Screen, Lasertec, Disco) — without them no fab runs.', risk: 'Limited leading-edge logic manufacturing today; rebuilding scale through Rapidus + JASM takes a decade.' },
    { id: 'sg', country: 'Singapore',      role: 'Manufacturing + equipment hub',                          leverage: 'Around 1 in 10 chips made globally and ~20% of global semiconductor equipment manufacturing (Singapore EDB / SEMI).', risk: 'Land, labour, power and cost limit headline-grabbing leading-edge fab construction.' },
    { id: 'my', country: 'Malaysia',       role: 'Assembly + test + packaging (OSAT)',                     leverage: 'Roughly 13% of global ATP volume — Penang especially. Final stage where chips become products.', risk: 'Mostly back-end; advanced packaging is the obvious move up the value chain.' },
    { id: 'cn', country: 'China',          role: 'Demand + domestic substitution under restriction',       leverage: 'Largest single AI market; SMIC, Huawei (Ascend), Cambricon, Biren and growing tooling ecosystem; sovereign-AI program.', risk: 'EUV access blocked; HBM and advanced-packaging gap; software ecosystem fragmented; foreign hyperscalers structurally absent.' }
  ],
  exportControlsTimeline: [
    { h: 'Oct 2022',  d: 'BIS introduces sweeping controls on advanced chips, EDA and semiconductor equipment to China; sets the FLOPS / interconnect thresholds that define "frontier" exports.' },
    { h: 'Jan 2023',  d: 'Joint US–Netherlands–Japan agreement aligns equipment-export restrictions; ASML EUV exports to China remain blocked.' },
    { h: 'Oct 2023',  d: 'BIS tightens 2022 controls; closes A800/H800 workarounds and imposes per-chip performance + interconnect tests.' },
    { h: '2024',      d: 'New rules cover HBM exports, GAA tooling and advanced-packaging tools; closes additional workaround paths.' },
    { h: '2025',      d: 'Continued cycle of restriction, workaround and re-tightening; AI Diffusion rule and country-tier system formalise frontier-AI access categories.' }
  ],
  punchline: 'The more restricted a chip, the more strategic it is. The more strategic it is, the more incentive there is to build alternatives. That\'s the whole game.'
};


/* Strategic takeaways */
var CHIPS_TAKEAWAYS = [
  'Energy decides how much compute can run. Chips decide how efficiently energy becomes intelligence.',
  'HBM and advanced packaging are now the strategic supply chokepoints, not raw transistors.',
  'Interconnect determines whether thousands of chips behave like one computer.',
  'The software ecosystem is the moat — CUDA, ROCm, XLA, Neuron, Triton, vLLM, TensorRT.',
  'Manufacturing concentration in Taiwan, the Netherlands and South Korea makes chips geopolitical.',
  'AI winners are not just model companies. They are the companies and countries that secure chips, power, cooling, networking and talent — together.',
  'The chips layer is the conversion layer: it turns electricity into computation, and computation into model capability.'
];

/* Sources, grouped by use */
var CHIPS_SOURCES_GROUPED = [
  {
    group: 'NVIDIA',
    items: [
      { label: 'NVIDIA H100 / H200 architecture + datasheets', url: 'https://www.nvidia.com/en-us/data-center/h100/' },
      { label: 'NVIDIA Blackwell architecture overview',        url: 'https://www.nvidia.com/en-us/data-center/blackwell-architecture/' },
      { label: 'NVIDIA GB200 NVL72 reference architecture',     url: 'https://www.nvidia.com/en-us/data-center/gb200-nvl72/' }
    ]
  },
  {
    group: 'AMD',
    items: [
      { label: 'AMD Instinct MI300X product page',              url: 'https://www.amd.com/en/products/accelerators/instinct/mi300/mi300x.html' },
      { label: 'AMD Instinct MI325X product page',              url: 'https://www.amd.com/en/products/accelerators/instinct/mi300/mi325x.html' },
      { label: 'AMD MI350 series announcement',                 url: 'https://www.amd.com/en/products/accelerators/instinct/mi350.html' }
    ]
  },
  {
    group: 'Google + AWS + Intel',
    items: [
      { label: 'Google Cloud TPU v5p / v5e documentation',      url: 'https://cloud.google.com/tpu/docs/v5p' },
      { label: 'Google Cloud Trillium (TPU v6e)',               url: 'https://cloud.google.com/blog/products/compute/introducing-trillium-6th-gen-tpus' },
      { label: 'AWS Trainium2 documentation',                   url: 'https://aws.amazon.com/machine-learning/trainium/' },
      { label: 'AWS Inferentia2 documentation',                 url: 'https://aws.amazon.com/machine-learning/inferentia/' },
      { label: 'Intel Gaudi 3 product brief',                   url: 'https://www.intel.com/content/www/us/en/products/details/processors/ai-accelerators/gaudi3.html' }
    ]
  },
  {
    group: 'Specialised silicon',
    items: [
      { label: 'Cerebras WSE-3 product page',                   url: 'https://www.cerebras.ai/product-chip' },
      { label: 'Groq LPU technology overview',                  url: 'https://groq.com/lpu-inference-engine/' },
      { label: 'Apple Silicon Neural Engine pages',             url: 'https://www.apple.com/mac/m4/' }
    ]
  },
  {
    group: 'Manufacturing + supply chain',
    items: [
      { label: 'TSMC annual report + technology pages',         url: 'https://www.tsmc.com/english/dedicatedFoundry/technology/logic' },
      { label: 'ASML — EUV + High-NA EUV pages',                url: 'https://www.asml.com/en/products/euv-lithography-systems' },
      { label: 'SK hynix HBM product line',                     url: 'https://www.skhynix.com/products/dram/HBM' },
      { label: 'SIA — semiconductor industry reports',          url: 'https://www.semiconductors.org/' },
      { label: 'MLCommons — MLPerf training + inference results', url: 'https://mlcommons.org/benchmarks/' }
    ]
  },
  {
    group: 'Geopolitics + regional data',
    items: [
      { label: 'BIS — official US export-control updates',      url: 'https://www.bis.doc.gov/' },
      { label: 'Reuters — semiconductor + supply-chain coverage', url: 'https://www.reuters.com/technology/' },
      { label: 'Singapore EDB — semiconductor sector page',     url: 'https://www.edb.gov.sg/en/our-industries/electronics.html' },
      { label: 'MIDA / Reuters — Malaysia semiconductor reporting', url: 'https://www.mida.gov.my/' }
    ]
  }
];
