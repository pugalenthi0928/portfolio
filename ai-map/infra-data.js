/* ============================================
   INFRASTRUCTURE LAYER — Deep-Dive Data
   ============================================
   Sourced from official documentation: Kubernetes, Slurm, Ray,
   PyTorch Distributed, JAX, NCCL, vLLM, NVIDIA TensorRT-LLM,
   SGLang, HuggingFace TGI, NVIDIA Triton, MLflow, W&B, Kubeflow,
   OpenTelemetry, Prometheus, Grafana, MLCommons MLPerf. Tool
   descriptions are functional summaries; vendor-claimed
   capabilities are flagged.
   ============================================ */

/* The five Infrastructure subtopics shown as overview pill-cards */
var INFRA_TOPICS = [
  {
    id: 'distributed-compute',
    label: 'Distributed compute',
    tab: 'training',
    short: 'Making thousands of accelerators behave like one machine.',
    long: 'Frontier training and serving split across many GPUs using data, tensor, pipeline and expert parallelism. The hard problems are synchronisation, fault recovery and keeping every accelerator productive.'
  },
  {
    id: 'networking',
    label: 'Networking',
    tab: 'fabric',
    short: 'East-west bandwidth often decides whether an AI cluster works or wastes silicon.',
    long: 'GPU-to-GPU, server-to-server, rack-to-rack, datacentre-to-datacentre. NVLink, InfiniBand, AI Ethernet and CXL are part of the compute engine, not a support layer.'
  },
  {
    id: 'serving',
    label: 'Serving',
    tab: 'inference',
    short: 'Turning model weights into reliable products at low cost per token.',
    long: 'Inference engines, KV cache, continuous batching, paged attention, speculative decoding and quantisation decide whether a benchmark-strong model becomes a profitable product.'
  },
  {
    id: 'orchestration',
    label: 'Orchestration & MLOps',
    tab: 'orchestration',
    short: 'Where compute gets placed, how models get shipped, who can roll them back.',
    long: 'Kubernetes, Slurm, Ray, MLflow, W&B and Kubeflow turn raw clusters into systems that ship and govern models repeatably and safely.'
  },
  {
    id: 'reliability',
    label: 'Reliability & cost',
    tab: 'factory',
    short: 'AI factories, observability, security and the economics that decide who can run frontier compute.',
    long: 'AI factories are accelerator-dense compute plants. Reliability, security, governance and cost-per-token decide whether a system is production or just a demo.'
  }
];

/* Top-of-section briefing — eight punchy truths */
var INFRA_INTEL_SUMMARY = [
  {
    h: 'Chips alone are not useful — they need infrastructure to become usable compute.',
    d: 'A box of GPUs is just expensive hardware. The infra layer turns it into a system that trains and serves models reliably.'
  },
  {
    h: 'Modern AI is distributed computing across many GPUs, servers, racks and data centres.',
    d: 'Frontier models do not fit on one chip. The system has to coordinate tens of thousands of accelerators second-by-second.'
  },
  {
    h: 'Training optimises for throughput, sync and fault tolerance.',
    d: 'Long, expensive runs need every GPU productive — and need to survive node failures without restarting from scratch.'
  },
  {
    h: 'Inference optimises for latency, batching, memory and cost per token.',
    d: 'A model that wins benchmarks but is too slow or too expensive does not become a product.'
  },
  {
    h: 'The network is as important as the GPU at frontier scale.',
    d: 'NVLink, InfiniBand and AI Ethernet decide whether a cluster behaves like one machine or thousands of fighting strangers.'
  },
  {
    h: 'MLOps is how models move from research to production safely.',
    d: 'Versioning, evaluation, deployment, monitoring, rollback. Without these, what you have is a demo, not infrastructure.'
  },
  {
    h: 'AI factories are not normal cloud servers.',
    d: 'They are purpose-built, accelerator-dense, liquid-cooled compute plants — co-designed across chips, network and software.'
  },
  {
    h: 'Infrastructure quality decides whether model capability becomes product performance.',
    d: 'The same model can feel magical on one stack and broken on another. The stack is the moat.'
  }
];

/* Visual flow: energy to application */
var INFRA_FLOW = [
  { id: 'energy',    h: 'Energy',          d: 'Grid power, on-site batteries, generators — input to every layer above.' },
  { id: 'chips',     h: 'Chips',           d: 'GPUs / TPUs / Trainium / custom silicon. The compute units.' },
  { id: 'servers',   h: 'Servers',         d: 'CPU + accelerators + memory + storage + NICs in a single chassis.' },
  { id: 'racks',     h: 'Racks',           d: 'Stacks of servers + switches + power distribution + cooling.' },
  { id: 'cluster',   h: 'Cluster',         d: 'Many racks wired together with InfiniBand or AI Ethernet — one logical machine.' },
  { id: 'sched',     h: 'Scheduler',       d: 'Kubernetes, Slurm, Ray. Decides who runs what, where, when.' },
  { id: 'system',    h: 'Train / serve',   d: 'Training pipelines (FSDP, Megatron) or inference engines (vLLM, TRT-LLM, SGLang).' },
  { id: 'api',       h: 'API',             d: 'Gateway, auth, rate-limit, routing, observability.' },
  { id: 'app',       h: 'Application',     d: 'Agent, copilot, search, recommendation, autonomy — the user-facing product.' }
];

/* Infrastructure 101 — primitive cards */
var INFRA_PRIMITIVES = [
  { h: 'Server',       d: 'A physical machine: CPUs, GPUs, RAM, NVMe storage, NICs, PSUs. The atomic unit of compute.' },
  { h: 'Rack',         d: 'A vertical stack of servers + top-of-rack switches + power distribution + cooling. ~30–60 kW today; AI racks 100+ kW.' },
  { h: 'Cluster',      d: 'Many servers wired together with a fabric so they act like one large compute system.' },
  { h: 'Data centre',  d: 'The building: power, cooling, security, networking, ops. Where the racks live.' },
  { h: 'Region / AZ',  d: 'Cloud-provider geography for resilience and latency. AZs are isolated failure domains inside a region.' },
  { h: 'Scheduler',    d: 'Decides which jobs run where, when and with which resources. Kubernetes / Slurm / Ray.' },
  { h: 'Container',    d: 'A packaged runtime — code + dependencies + env. Docker / OCI images. Reproducible across machines.' },
  { h: 'Orchestrator', d: 'Manages deployment, scaling, failure recovery, service discovery across many containers.' },
  { h: 'Model serving', d: 'Loads model weights into accelerators and answers user requests. vLLM / TRT-LLM / SGLang / TGI / Triton.' },
  { h: 'MLOps',        d: 'The process layer: datasets, experiments, training, evaluation, deployment, monitoring, governance.' }
];

/* AI infrastructure ladder */
var INFRA_LADDER = [
  { h: 'Laptop',                       d: 'CPU + integrated GPU. Local prototyping; tiny models or 4-bit quantised versions.' },
  { h: 'Single-GPU workstation',       d: 'One discrete GPU (e.g. RTX class). Fine-tuning, light inference, tinkering.' },
  { h: '8-GPU server (HGX-class)',     d: 'Mainstream training and inference unit. 0.5–1 MW per server. Single-tenant.' },
  { h: 'Multi-node cluster',           d: 'Tens to thousands of GPUs over an InfiniBand or AI Ethernet fabric.' },
  { h: 'Hyperscale AI factory',        d: 'Tens to hundreds of thousands of GPUs. Liquid-cooled, multi-100 kW racks, dedicated buildings.' },
  { h: 'Multi-region serving platform', d: 'Inference distributed across cloud regions for latency, redundancy and data residency.' }
];

/* The 10-layer infrastructure stack */
var INFRA_STACK = [
  { id: 'facility',     n: '01', h: 'Facility',          items: ['Land + permits', 'Power + UPS + generators', 'Cooling (air / liquid / immersion)', 'Physical security', 'Rack density (30–130+ kW)'], note: 'AI campuses live or die at this layer. Power and cooling decide what the rest can ever achieve.' },
  { id: 'hardware',     n: '02', h: 'Hardware',          items: ['CPUs (Xeon, EPYC, Grace)', 'Accelerators (GPU, TPU, Trainium)', 'Memory (HBM, DDR)', 'NVMe storage', 'NICs + DPUs', 'Switches + optics'], note: 'The physical compute substrate. Co-designed with the rest of the stack — networking and storage included.' },
  { id: 'network',      n: '03', h: 'Network',           items: ['Ethernet (Spectrum-X, Tomahawk)', 'InfiniBand NDR / XDR', 'NVLink / NVSwitch', 'RoCE', 'CXL', 'Storage networking'], note: 'East-west traffic for parallel training; north-south for serving. Congestion control matters.' },
  { id: 'storage',      n: '04', h: 'Storage',           items: ['Object storage (S3-class)', 'Parallel file systems (Lustre, GPFS, Weka)', 'Distributed cache', 'Checkpoint storage', 'Vector + embedding stores'], note: 'A cluster is only as fast as the data path that feeds it.' },
  { id: 'runtime',      n: '05', h: 'Runtime',           items: ['CUDA / ROCm / XLA', 'NCCL / RCCL / MPI', 'PyTorch / JAX distributed', 'DeepSpeed / Megatron-LM / FSDP', 'Triton / Cutlass'], note: 'The bridge between hardware and frameworks. Compiler + collectives + kernels.' },
  { id: 'orchestration',n: '06', h: 'Orchestration',     items: ['Kubernetes', 'Slurm', 'Ray', 'Nomad', 'Custom hyperscaler schedulers'], note: 'Decides where jobs go, when, with what resources. Different fits for training vs serving.' },
  { id: 'training',     n: '07', h: 'Training',          items: ['Data loading + sharding', 'Distributed training (FSDP, Megatron)', 'Gradient sync (NCCL all-reduce)', 'Checkpointing + restart', 'Experiment tracking'], note: 'Long, fragile, expensive runs. Fault tolerance matters more than peak FLOPS here.' },
  { id: 'serving',      n: '08', h: 'Serving',           items: ['vLLM, TensorRT-LLM, SGLang, TGI, Triton', 'KV cache + paged attention', 'Continuous batching', 'Routing + autoscaling', 'Quantisation (FP8, INT8, INT4)'], note: 'Continuous, latency-bounded, multi-tenant. Cost-per-token is the headline metric.' },
  { id: 'mlops',        n: '09', h: 'MLOps',             items: ['MLflow / W&B / Neptune', 'Kubeflow / Argo Workflows', 'Feature stores (Feast)', 'Model registry', 'Eval + CI/CD + rollback'], note: 'How models move from research to production safely — and how they get rolled back when they don\'t.' },
  { id: 'observability',n: '10', h: 'Observability + governance', items: ['Logs / metrics / traces (OpenTelemetry, Prometheus, Grafana)', 'GPU + cluster utilisation', 'Latency + cost-per-token tracking', 'Drift + safety monitoring', 'Access control + audit logs'], note: 'Production AI is not serious until failures can be seen, fixed and audited.' }
];

/* Training infrastructure data */
var INFRA_TRAINING = {
  headline: 'Training: making thousands of chips behave like one computer',
  framing: 'Frontier training is not "Python on a GPU". It is a distributed system that runs for weeks across tens of thousands of accelerators, with synchronisation and fault tolerance as first-class concerns.',
  parallelism: [
    { h: 'Data parallelism',     d: 'Same model on each device, different mini-batches. Gradients all-reduced every step.' },
    { h: 'Tensor parallelism',   d: 'A single layer split across devices. Activations cross the fabric inside every forward + backward pass.' },
    { h: 'Pipeline parallelism', d: 'Different layers on different devices. Micro-batches flow forward, gradients flow back.' },
    { h: 'Expert parallelism',   d: 'MoE experts split across devices. Token routing turns into all-to-all traffic.' },
    { h: 'ZeRO / FSDP',          d: 'Sharding optimizer state, gradients and parameters across data-parallel ranks to fit huge models.' }
  ],
  hardProblems: [
    'Synchronisation: keeping thousands of workers on the same step without bubbles.',
    'Data loading: feeding GPUs at 10s–100s of GB/s without saturating storage.',
    'Networking: collective ops dominate; one bad link can stall the whole run.',
    'Checkpointing: writing 100 GB–TB of state without halting training.',
    'Fault tolerance: at scale, GPU and NIC failures are routine, not exceptions.',
    'Stragglers: one slow node degrades the whole step. Detect, evict, restart.',
    'Memory pressure: weights + activations + grads + optimizer + checkpoints + KV.'
  ],
  flow: [
    { h: 'Dataset shards',  d: 'Pre-tokenised, deduplicated, sharded for the cluster size.' },
    { h: 'Data loader',     d: 'Streams batches over the fabric; pre-fetches to local NVMe + RAM.' },
    { h: 'GPU workers',     d: 'Forward + backward pass; local tensor + pipeline parallelism within node.' },
    { h: 'Gradient sync',   d: 'All-reduce / ring / tree collectives over NVLink + InfiniBand.' },
    { h: 'Checkpoint store', d: 'Periodic state snapshots — async, sharded, deduplicated.' },
    { h: 'Telemetry',       d: 'GPU util, MFU, loss curves, gradient norms, NaN watch.' }
  ],
  punchline: 'At frontier scale, a single bad network link, slow storage path or failed node can waste millions of dollars of compute time. Reliability engineering is the job.'
};

/* Inference infrastructure data */
var INFRA_INFERENCE = {
  headline: 'Inference: turning model weights into reliable products',
  framing: 'Training builds the model. Inference serves it. The optimisations are completely different: latency, batching, memory pressure and dollars-per-token replace MFU and gradient norms.',
  pipeline: [
    { h: 'User request',  d: 'Prompt tokens stream in over HTTPS / gRPC.' },
    { h: 'Gateway',       d: 'TLS, rate limit, auth, abuse + safety filters.' },
    { h: 'Router',        d: 'Picks model, region, instance — handles fallback and canary traffic.' },
    { h: 'Tokenizer',     d: 'Maps text / images / audio into token IDs.' },
    { h: 'Prefill',       d: 'One pass over the prompt; produces the initial KV cache.' },
    { h: 'Decode',        d: 'Token-at-a-time autoregressive generation; this dominates serving cost.' },
    { h: 'Streaming',     d: 'Server-sent events / chunked HTTP back to the client.' },
    { h: 'Logging + eval', d: 'Latency, p50 / p95 / p99, cost-per-token, safety metrics, eval samples.' }
  ],
  concepts: [
    { h: 'Prefill vs decode',    d: 'Prefill is parallel and bandwidth-bound; decode is sequential and latency-bound. Modern stacks separate the two pools.' },
    { h: 'KV cache',             d: 'Per-request keys/values that grow with context length. Memory pressure here is the binding constraint at long context.' },
    { h: 'Continuous batching',  d: 'Mid-flight batching: requests join + leave the batch each step. ~5–20× throughput vs static batching for chat.' },
    { h: 'PagedAttention',       d: 'KV cache stored in fixed-size pages, like virtual memory. Originated in vLLM; widely adopted.' },
    { h: 'Speculative decoding', d: 'A small draft model proposes tokens; the large model verifies in parallel. 1.5–3× decode speed in many setups.' },
    { h: 'Quantisation',         d: 'FP8 / INT8 / INT4 weights and KV cache. Lower precision = more tokens per HBM byte; quality must be measured.' },
    { h: 'LoRA serving',         d: 'Many adapter weights served from one base model; per-tenant fine-tunes without per-tenant deployment.' },
    { h: 'Routing',              d: 'Right-size the model to the request: cheap model for easy queries, frontier model for hard ones.' },
    { h: 'Cold starts',          d: 'Loading multi-hundred-GB weights into HBM takes time. Hot pools, model caching and pre-warming matter.' }
  ],
  servingSystems: [
    { name: 'vLLM',              best: 'Open-source LLM serving with continuous batching + PagedAttention.', strength: 'Mature, broad model support, large community; the de-facto reference for many teams.', weakness: 'Performance ceiling on a single node depends on workload — TRT-LLM often wins peak NVIDIA throughput.', take: 'Default starting point for serving open-weights models on NVIDIA GPUs.' },
    { name: 'TensorRT-LLM',      best: 'NVIDIA-optimised inference engine on NVIDIA GPUs.',                  strength: 'Highest throughput on NVIDIA at the cost of longer engine-build cycles; first-class FP8 / FP4 paths.', weakness: 'NVIDIA-only; engine compilation step adds operational complexity.', take: 'When peak NVIDIA token/s/GPU is the headline metric.' },
    { name: 'SGLang',            best: 'High-throughput LLM serving with a structured generation runtime.',  strength: 'Strong on structured output, agent-style workloads and aggressive scheduling; very fast iteration.', weakness: 'Younger project; fewer integrations than vLLM in some ecosystems.', take: 'Worth benchmarking against vLLM for agent / structured-output workloads.' },
    { name: 'HuggingFace TGI',   best: 'Production text-generation serving inside the HF ecosystem.',         strength: 'Tight HF Hub integration; strong for Llama-family + standard chat models.', weakness: 'Smaller perf headroom vs TRT-LLM and vLLM on the latest hardware.', take: 'A reasonable default if you already live inside HuggingFace.' },
    { name: 'NVIDIA Triton',     best: 'Multi-framework inference server (LLM + vision + classical ML).',     strength: 'Vendor-neutral runtime layer; mature scheduling, ensembles, A/B test hooks.', weakness: 'Heavier than vLLM / TGI for pure LLM-only stacks.', take: 'When you need to serve more than just an LLM behind one stack.' },
    { name: 'llama.cpp',         best: 'CPU + Apple Silicon + small-GPU inference, often quantised.',         strength: 'Runs on phones, laptops and edge; permissive licence; excellent quantisation support.', weakness: 'Not a multi-GPU production server; throughput limits are real.', take: 'The reference open-source local-inference engine.' },
    { name: 'Ollama',            best: 'Developer-friendly local inference (wraps llama.cpp + extras).',      strength: 'One-line model pulls; great for prototyping and personal workflows.', weakness: 'Designed for individuals and small teams, not production scale.', take: 'For dev laptops and demos — not your serving tier.' }
  ],
  punchline: 'A model can be excellent on the leaderboard and still be too slow, too expensive or too unreliable to serve at scale. The serving stack is the product.'
};

/* Networking + storage combined data */
var INFRA_NETWORK = {
  headline: 'The network decides whether many GPUs act like one machine',
  framing: 'Distributed AI is communication-heavy: gradients, activations, parameters and KV-cache traffic. If GPUs are waiting on the network, the company is paying for idle silicon.',
  trafficTypes: [
    { h: 'East-west',  d: 'Inside the cluster: GPU-to-GPU, server-to-server, rack-to-rack. Dominated by collective ops at training.' },
    { h: 'North-south', d: 'In and out of the cluster: user requests, dataset ingestion, checkpoint upload. Dominated by serving at inference.' }
  ],
  metrics: [
    { h: 'Bandwidth',     d: 'Bits per second on the wire. NVLink 5: 1.8 TB/s per GPU. InfiniBand NDR: 400 Gb/s per port.' },
    { h: 'Latency',       d: 'Time-to-first-byte across the link. Determines small-message and decode performance.' },
    { h: 'Jitter',        d: 'Variance in latency. Painful for tightly-coupled collectives.' },
    { h: 'Congestion',    d: 'Multiple flows competing for the same path. Causes long-tail stalls.' },
    { h: 'Packet loss',   d: 'For lossy fabrics (Ethernet); RoCE and AI Ethernet aim to keep this near zero.' },
    { h: 'RDMA / RoCE',   d: 'Remote Direct Memory Access — bypasses the kernel. The default for GPU-to-GPU over the fabric.' }
  ],
  fabrics: [
    { name: 'NVLink / NVSwitch',     use: 'GPU-to-GPU within a server / rack-scale system. Up to 1.8 TB/s per GPU on Blackwell.' },
    { name: 'InfiniBand (NDR / XDR)', use: 'Cluster fabric for most frontier training. 400 / 800 Gb/s per port; lossless by design.' },
    { name: 'AI Ethernet (Spectrum-X / Ultra Ethernet)', use: 'Lossless 400 / 800 Gb/s Ethernet for AI; growing share of cluster fabrics.' },
    { name: 'Standard Ethernet',     use: 'Storage, north-south, control planes. Mature and ubiquitous; not the AI fabric.' },
    { name: 'PCIe / CXL',            use: 'Host-to-accelerator and CPU memory expansion. Lower bandwidth than NVLink-class fabrics.' },
    { name: 'Silicon photonics',     use: 'Co-packaged optics; future direction to push fabric closer to the package and reduce energy per bit.' }
  ],
  hierarchy: [
    { h: 'Inside the package',   d: 'On-die / on-package interconnect. CoWoS interposer wires HBM to compute die.' },
    { h: 'Inside the server',    d: 'NVLink / Infinity Fabric / ICI / NeuronLink — hundreds of GB/s up to TB/s.' },
    { h: 'Inside the rack',      d: 'NVSwitch (NVL72), AMD MI300 platforms, TPU pods, Trainium UltraServers — "one accelerator made of many".' },
    { h: 'Across the cluster',   d: 'InfiniBand NDR/XDR or AI Ethernet. 400 / 800 Gb/s links across thousands of nodes.' },
    { h: 'Across the campus',    d: 'Inter-DC backbone. Optical DCI; rare at frontier-training scale; common for inference + replication.' }
  ],
  punchline: 'The network is not a support layer for AI. It is part of the compute engine.'
};

var INFRA_STORAGE = {
  headline: 'Models eat data, but clusters choke on slow storage',
  framing: 'Training data has to be streamed fast enough to keep accelerators busy. Checkpoints can be terabytes. Inference systems need fast model loading and sometimes vector retrieval. Bad storage design is invisible until utilisation collapses.',
  layers: [
    { h: 'Object storage',       d: 'S3-class blob storage. Cheap and scalable; latency is OK for ingestion + checkpoints, not for hot reads.' },
    { h: 'Parallel filesystem',  d: 'Lustre, GPFS, Weka, BeeGFS. POSIX-style across many nodes; the standard cluster scratch tier.' },
    { h: 'Distributed cache',    d: 'Alluxio, JuiceFS, S3-Express-class layers. Hot read tier in front of object storage.' },
    { h: 'Local NVMe',           d: 'On-node fast tier for shuffles, KV cache spillover and dataset prefetch.' },
    { h: 'Vector / embedding',   d: 'Pinecone, Milvus, Weaviate, pgvector, FAISS-on-disk. Retrieval-side storage for RAG.' },
    { h: 'Feature store',        d: 'Feast, Tecton, in-house. Online + offline feature consistency for classical + deep ML.' },
    { h: 'Metadata + lineage',   d: 'Datasets, dataset versions, model lineage, run IDs. Where reproducibility lives.' }
  ],
  pipeline: [
    { h: 'Raw data',    d: 'Crawls, internal logs, partner feeds, synthetic data.' },
    { h: 'Cleaning',    d: 'Tokenise, language-detect, filter NSFW / spam / PII, normalise.' },
    { h: 'Dedup',       d: 'Exact + fuzzy + semantic deduplication. Prevents memorisation + wasted compute.' },
    { h: 'Filtering',   d: 'Quality classifiers, perplexity filters, license filters.' },
    { h: 'Labeling',    d: 'Human + LLM-as-judge annotation for supervised + RLHF data.' },
    { h: 'Versioning',  d: 'Hash-pinned, immutable dataset versions in a metadata store.' },
    { h: 'Train + eval', d: 'Frozen splits flow into the training + evaluation pipelines.' },
    { h: 'Registry',    d: 'Trained models registered with version, lineage, eval scores, deploy targets.' }
  ],
  punchline: 'An AI cluster is only as fast as the data path feeding it.'
};

/* Orchestration + MLOps combined data */
var INFRA_ORCHESTRATION = {
  headline: 'Who decides where the compute runs?',
  schedulers: [
    { name: 'Kubernetes',  purpose: 'General-purpose container orchestration', best: 'Long-running services, APIs, microservices, model serving, autoscaling.', weak: 'Tightly-coupled distributed training without extensions (Volcano / KubeRay / Kueue).', take: 'The default for the serving + control plane.' },
    { name: 'Slurm',       purpose: 'Batch + HPC scheduler',                   best: 'Large training clusters, supercomputing, scheduled batch compute.',          weak: 'Not the natural fit for always-on services.',                                  take: 'The default for big training jobs.' },
    { name: 'Ray',         purpose: 'Distributed Python runtime',             best: 'Distributed training, hyperparameter tuning, RLHF, data processing, agents.', weak: 'Not a substitute for K8s as the orchestrator-of-record.',                       take: 'Lives on top of K8s / Slurm; great for AI-shaped Python.' },
    { name: 'Nomad',       purpose: 'Lightweight orchestrator',                best: 'Mixed workloads (batch + services) without K8s\'s complexity.',                weak: 'Smaller AI ecosystem; fewer first-class GPU integrations.',                     take: 'A pragmatic choice for smaller teams.' },
    { name: 'Airflow / Dagster / Prefect', purpose: 'Workflow orchestration', best: 'Data pipelines, scheduled batch ML jobs, orchestrating multi-step training/eval flows.', weak: 'Not a low-level scheduler; sits above K8s / Slurm.',                          take: 'Data + ML pipeline glue, not GPU scheduling.' },
    { name: 'Custom hyperscaler schedulers', purpose: 'Internal cloud-scale schedulers', best: 'Google Borg / Omega-style, AWS internal, Azure internal — for tens of thousands of nodes.', weak: 'Closed; you cannot run them outside the hyperscaler.',                  take: 'The reason hyperscaler clusters feel different.' }
  ],
  flow: [
    { h: 'Workload',        d: 'A training job, a serving deployment, a batch inference run.' },
    { h: 'Scheduler',       d: 'Picks the right resources from the pool.' },
    { h: 'Resource pool',   d: 'GPUs, CPUs, memory, accelerator-typed queues.' },
    { h: 'Node placement',  d: 'Topology-aware: NVLink islands, NUMA, racks, AZ.' },
    { h: 'Execution',       d: 'Pods, jobs, steps. Lifecycle management.' },
    { h: 'Monitoring',      d: 'Metrics, logs, traces, alerts. Real-time and post-hoc.' },
    { h: 'Retry / failover', d: 'Restart on failure; preempt stragglers; fail upstream when stuck.' }
  ]
};

var INFRA_MLOPS = {
  headline: 'MLOps: moving models from research to production',
  lifecycle: [
    { n: '01', h: 'Data collection',     d: 'Crawls, logs, partner data, synthetic generation.' },
    { n: '02', h: 'Data cleaning',       d: 'Filter, normalise, dedupe, classify.' },
    { n: '03', h: 'Dataset versioning',  d: 'Hash-pinned, immutable, reproducible splits.' },
    { n: '04', h: 'Experiment tracking', d: 'Hyperparams, metrics, code + commit + dataset version.' },
    { n: '05', h: 'Training',            d: 'Distributed run on the cluster, checkpoints, logs.' },
    { n: '06', h: 'Evaluation',          d: 'Held-out + adversarial + safety + human eval.' },
    { n: '07', h: 'Model registry',      d: 'Versioned weights with eval scores, lineage, deploy targets.' },
    { n: '08', h: 'Deployment',          d: 'Canary → shadow → A/B → full rollout. Behind a flag.' },
    { n: '09', h: 'Monitoring',          d: 'Latency, cost, drift, hallucination, abuse metrics in production.' },
    { n: '10', h: 'Feedback loop',       d: 'User signals + thumbs + edits → next training data.' },
    { n: '11', h: 'Retraining',          d: 'Schedule + trigger when drift + new data justifies a new run.' },
    { n: '12', h: 'Rollback',            d: 'Revert to previous version on regression. Has to be one click.' }
  ],
  concepts: [
    'Model registry — versioned weights + lineage + eval.',
    'Experiment tracking — every run reproducible from code + data + hyperparams.',
    'Feature store — consistent features online + offline.',
    'Eval suite — held-out + adversarial + safety + behavioural tests.',
    'CI/CD for ML — automated build, eval, gate before deploy.',
    'Canary + shadow deployment — let a small slice of traffic see the new model first.',
    'A/B tests — measure user impact, not just metrics.',
    'Rollback — a one-command return to the prior version.',
    'Drift monitoring — watch for input + output + accuracy drift over time.',
    'Red teaming — adversarial probes for safety + abuse + jailbreak failures.',
    'Audit logs — who deployed what, when, with what eval score.'
  ],
  tools: ['MLflow', 'Weights & Biases', 'Kubeflow', 'DVC', 'Feast', 'Argo Workflows', 'Airflow', 'Dagster', 'LangSmith', 'OpenTelemetry', 'Prometheus', 'Grafana'],
  punchline: 'A model that cannot be evaluated, versioned, monitored and rolled back is not production infrastructure. It is a demo.'
};

/* AI factory + reliability data */
var INFRA_FACTORY = {
  headline: 'AI factories: data centres built to manufacture intelligence',
  framing: 'An AI factory is not a normal data centre with GPUs. It is an integrated system designed to convert electricity, data and chips into model capability and tokens.',
  components: [
    'High-density racks (100–130+ kW)',
    'Liquid cooling (direct-to-chip or rear-door heat exchangers)',
    'High-voltage power distribution (medium-voltage step-down on-site)',
    'Cluster networking (NVLink + InfiniBand / AI Ethernet)',
    'GPU scheduling at tens of thousands of accelerators',
    'Storage pipelines tuned for multi-TB/s training feeds',
    'Model-serving stacks for inference at scale',
    'Operations + control rooms (24/7 SRE-style operation)',
    'Physical + cyber security',
    'Sovereign / regulatory compliance posture',
    'Uptime engineering (failover, redundancy, hot spares)',
    'Cost accounting at the rack + workload level'
  ],
  comparison: [
    { axis: 'Workload mix',        cloud: 'General-purpose: web, DBs, microservices, mixed-tenant.', factory: 'AI training + AI inference; tightly co-designed.' },
    { axis: 'Rack density',        cloud: '5–20 kW typical.',                                       factory: '40–130+ kW; liquid-cooled standard.' },
    { axis: 'Network topology',    cloud: 'Fat-tree Ethernet for north-south traffic.',              factory: 'Lossless east-west fabric: NVLink + InfiniBand or AI Ethernet.' },
    { axis: 'Storage profile',     cloud: 'Block + object + DBs.',                                  factory: 'Parallel filesystem + checkpoint + dataset feed.' },
    { axis: 'Cooling',             cloud: 'Air; some rear-door.',                                   factory: 'Liquid (direct-to-chip / immersion).' },
    { axis: 'Software stack',      cloud: 'Tenant-managed; many flavours.',                          factory: 'Vertically integrated: from CUDA up to serving stack.' },
    { axis: 'Tenancy',             cloud: 'Multi-tenant by default.',                                factory: 'Often single-tenant or large-tenant, with strict isolation.' }
  ],
  punchline: 'The AI factory is the industrial form of AI: where energy, chips, infrastructure and models merge into one production system.'
};

var INFRA_RELIABILITY = {
  headline: 'Production AI must be reliable, secure and auditable',
  metrics: [
    { h: 'Uptime',           d: 'How often the service is available. SLA-class targets: 99.9% / 99.95% / 99.99%.' },
    { h: 'Latency p50/p95/p99', d: 'Median, tail and worst-tail response time. Tails dominate user experience.' },
    { h: 'Throughput',       d: 'Tokens/sec or req/sec across the fleet. The headline capacity number.' },
    { h: 'Error rate',       d: '5xx, timeouts, model errors. Watch for spikes during deploys.' },
    { h: 'Queue time',       d: 'Time before the request even starts. Often dominates p99 under load.' },
    { h: 'GPU utilisation',  d: 'Real device utilisation, not just "GPU allocated". MFU for training.' },
    { h: 'Cost per token',   d: 'The economics metric. Tracks utilisation + model + batching choices.' },
    { h: 'Time to recovery', d: 'How fast the system gets back after a regional or model failure.' },
    { h: 'SLO burn rate',    d: 'How fast you are eating your error budget. Drives prioritisation.' }
  ],
  topics: [
    'Failover + retries (with circuit breakers + idempotency).',
    'Degraded mode (return a smaller model, cached answer, or partial response).',
    'Regional outages (DR plan + multi-region serving).',
    'Data privacy + tenant isolation (per-tenant keys, encryption, no cross-tenant leakage).',
    'Access control + secrets management (least privilege, short-lived tokens, rotation).',
    'Audit logs (who deployed what, who accessed what data, who promoted which model).',
    'Abuse + prompt-injection monitoring (input filters, output classifiers, escalation).',
    'Data leakage prevention (PII filters, training-data redaction, output scanners).',
    'Compliance posture (SOC 2, ISO 27001, GDPR, HIPAA where relevant).',
    'Incident response (paged within minutes; postmortem within days).'
  ],
  incidentFlow: [
    { h: 'Detection',          d: 'Alerts from metrics, logs, synthetic checks or user reports.' },
    { h: 'Triage',             d: 'Severity assessed; owners paged; war room opened.' },
    { h: 'Mitigation',         d: 'Failover, scale-out, traffic shed, kill switch.' },
    { h: 'Rollback / failover', d: 'Revert deploy; route around the failed region or model.' },
    { h: 'Comms',              d: 'Status page + customer comms; honest about scope and ETA.' },
    { h: 'Postmortem',         d: 'Blameless root cause; action items; follow-through.' },
    { h: 'Fix',                d: 'Permanent fix; new monitoring; tests; sometimes architecture change.' }
  ],
  punchline: 'AI infrastructure is not serious until it survives failures.'
};

/* Cost calculator presets */
var INFRA_CALC_PRESETS = [
  { id: 'startup-inf',  label: 'Startup inference cluster',     gpus: 16,    watts: 700, util: 60, pue: 1.4,  price: 0.08, hwCost: 30000, deprYears: 4, tps: 1500, tag: 'Small inference fleet for an early-stage product.' },
  { id: 'research-8',   label: '8-GPU research server',         gpus: 8,     watts: 700, util: 70, pue: 1.3,  price: 0.08, hwCost: 30000, deprYears: 4, tps: 1200, tag: 'Single HGX-class baseboard for an internal team.' },
  { id: 'training-1k',  label: '1,000-GPU training cluster',    gpus: 1000,  watts: 750, util: 80, pue: 1.25, price: 0.07, hwCost: 32000, deprYears: 4, tps: 2200, tag: 'Mid-tier training cluster with InfiniBand fabric.' },
  { id: 'factory-10k',  label: '10,000-GPU AI factory',         gpus: 10000, watts: 800, util: 80, pue: 1.20, price: 0.07, hwCost: 32000, deprYears: 4, tps: 2500, tag: 'Hyperscale AI factory; serves frontier training + inference.' },
  { id: 'frontier-100k', label: '100,000-GPU frontier cluster', gpus: 100000, watts: 800, util: 85, pue: 1.15, price: 0.06, hwCost: 32000, deprYears: 4, tps: 2800, tag: 'Frontier AI cluster — only a handful exist worldwide.' }
];

/* Bottleneck symptom-cause table */
var INFRA_BOTTLENECKS = [
  { symptom: 'GPUs idle, low utilisation',           causes: 'Slow data loader · network congestion · scheduler placement · CPU pre-processing bottleneck.' },
  { symptom: 'Latency spikes',                       causes: 'Bad batching · queue build-up · KV-cache pressure · routing churn · cold-start of large weights.' },
  { symptom: 'Training crashes',                     causes: 'Node failure · OOM · NCCL / network issue · checkpoint corruption · driver / firmware mismatch.' },
  { symptom: 'High cost per token',                  causes: 'Poor batching · low utilisation · oversized model for the task · weak quantisation strategy.' },
  { symptom: 'Inconsistent outputs',                 causes: 'Model versioning gap · prompt versioning gap · stale cache · A/B traffic leak.' },
  { symptom: 'Slow deployment',                      causes: 'Weak CI/CD · manual approvals · no model registry · brittle infra-as-code.' },
  { symptom: 'Frequent regional incidents',          causes: 'No DR plan · single AZ deploy · capacity not pre-warmed · no traffic shed strategy.' },
  { symptom: 'Compliance / audit gaps',              causes: 'Missing audit logs · no per-tenant isolation · weak access control · no data-handling agreement.' }
];

/* Misconceptions */
var INFRA_MISCONCEPTIONS = [
  { myth: 'Infrastructure just means cloud hosting.',                  truth: 'AI infra is compute + networking + storage + scheduling + serving + monitoring + power + cooling + ops. Cloud hosting is one slice.' },
  { myth: 'More GPUs automatically means faster AI.',                  truth: 'Bad networking, storage, scheduling or software can leave most of the GPUs idle. Utilisation is the metric.' },
  { myth: 'Training and inference use the same infrastructure.',       truth: 'They share hardware families but optimise for different things — throughput + sync + checkpoints vs latency + batching + KV cache.' },
  { myth: 'Kubernetes solves everything.',                              truth: 'Kubernetes is excellent for serving + control planes. Tightly-coupled training jobs need extensions like Volcano / KubeRay / Kueue or a separate scheduler.' },
  { myth: 'The model is the product.',                                 truth: 'Model + serving + monitoring + safety + data + UX is the product. The model alone is just weights.' },
  { myth: 'Latency is only a model problem.',                          truth: 'Routing, batching, queueing, networking, KV cache and cold starts all push p95 / p99 around.' },
  { myth: 'MLOps is only for big companies.',                          truth: 'Even a two-engineer team needs versioning, eval, deployment and rollback. Otherwise the system is one bad commit from broken.' },
  { myth: 'Cloud removes infrastructure problems.',                    truth: 'Cloud absorbs <em>some</em> problems. Cost, reliability, architecture and scaling decisions still belong to you.' },
  { myth: 'AI factories are just bigger data centres.',                 truth: 'They are accelerator-dense, liquid-cooled compute plants co-designed across chips, network, storage and serving software.' }
];

/* Strategic takeaways */
var INFRA_TAKEAWAYS = [
  'Energy decides how much compute can exist. Chips decide how fast it computes.',
  'Infrastructure decides whether chips become usable, reliable, scalable systems.',
  'Networking decides whether many GPUs act as one machine.',
  'Storage decides whether data can feed the cluster fast enough.',
  'Scheduling decides whether expensive compute is used efficiently.',
  'Serving decides whether models become products.',
  'MLOps decides whether AI can be improved safely and rolled back when it isn\'t.',
  'Observability decides whether failures can be seen, fixed and audited.',
  'AI factories are the industrial form of intelligence production.'
];

/* Sources, grouped */
var INFRA_SOURCES_GROUPED = [
  {
    group: 'Orchestration + scheduling',
    items: [
      { label: 'Kubernetes — official docs',                 url: 'https://kubernetes.io/docs/' },
      { label: 'Slurm Workload Manager — docs',              url: 'https://slurm.schedmd.com/documentation.html' },
      { label: 'Ray — official docs',                        url: 'https://docs.ray.io/' },
      { label: 'KubeRay + Volcano + Kueue (CNCF)',           url: 'https://www.cncf.io/' }
    ]
  },
  {
    group: 'Distributed training',
    items: [
      { label: 'PyTorch Distributed — overview',             url: 'https://pytorch.org/docs/stable/distributed.html' },
      { label: 'PyTorch FSDP — docs',                        url: 'https://pytorch.org/docs/stable/fsdp.html' },
      { label: 'JAX — Multi-process programming',            url: 'https://jax.readthedocs.io/en/latest/multi_process.html' },
      { label: 'NVIDIA Megatron-LM',                         url: 'https://github.com/NVIDIA/Megatron-LM' },
      { label: 'NVIDIA NCCL — collective communication',     url: 'https://docs.nvidia.com/deeplearning/nccl/' }
    ]
  },
  {
    group: 'Inference + serving',
    items: [
      { label: 'vLLM — docs',                                url: 'https://docs.vllm.ai/' },
      { label: 'NVIDIA TensorRT-LLM',                        url: 'https://github.com/NVIDIA/TensorRT-LLM' },
      { label: 'SGLang',                                     url: 'https://github.com/sgl-project/sglang' },
      { label: 'HuggingFace Text Generation Inference',      url: 'https://github.com/huggingface/text-generation-inference' },
      { label: 'NVIDIA Triton Inference Server',             url: 'https://github.com/triton-inference-server/server' }
    ]
  },
  {
    group: 'MLOps + observability',
    items: [
      { label: 'MLflow — docs',                              url: 'https://mlflow.org/docs/latest/index.html' },
      { label: 'Weights & Biases — docs',                    url: 'https://docs.wandb.ai/' },
      { label: 'Kubeflow — docs',                            url: 'https://www.kubeflow.org/docs/' },
      { label: 'OpenTelemetry — docs',                       url: 'https://opentelemetry.io/docs/' },
      { label: 'Prometheus — docs',                          url: 'https://prometheus.io/docs/' },
      { label: 'Grafana — docs',                             url: 'https://grafana.com/docs/' }
    ]
  },
  {
    group: 'Networking + hardware',
    items: [
      { label: 'NVIDIA networking + Spectrum-X',             url: 'https://www.nvidia.com/en-us/networking/' },
      { label: 'Ultra Ethernet Consortium',                  url: 'https://ultraethernet.org/' },
      { label: 'NVIDIA NVLink + NVSwitch',                   url: 'https://www.nvidia.com/en-us/data-center/nvlink/' }
    ]
  },
  {
    group: 'Benchmarks',
    items: [
      { label: 'MLCommons — MLPerf training + inference',    url: 'https://mlcommons.org/benchmarks/' }
    ]
  }
];
