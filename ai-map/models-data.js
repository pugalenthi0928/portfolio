/* ============================================
   MODELS LAYER — Deep-Dive Data
   ============================================
   Sourced from official model docs + system cards (OpenAI,
   Anthropic, Google DeepMind, Meta Llama, Mistral, Qwen, DeepSeek,
   xAI, Hugging Face), foundational papers (transformer / attention,
   diffusion, RLHF, RAG), MLCommons / MLPerf, Stanford AI Index,
   METR, and the LMSYS Chatbot Arena (where labelled). Vendor-
   claimed performance is flagged. Benchmarks change quickly; this
   tab is a framework, not a leaderboard.
   ============================================ */

/* Five overview pill-cards — top of the section */
var MODELS_TOPICS = [
  {
    id: 'architecture', label: 'Architecture',
    tab: 'stack',
    short: 'Transformers, MoE, diffusion, state-space — and why each shape exists.',
    long: 'Architecture decides what kinds of patterns the model can learn efficiently. Transformers won on language; diffusion won on images; MoE scales capacity without scaling cost.'
  },
  {
    id: 'training', label: 'Training pipeline',
    tab: 'training',
    short: 'Pretraining → SFT → preference → safety → tool-use → distillation.',
    long: 'A modern frontier model is not one training run. It is a pipeline: pretraining for breadth, fine-tuning for instruction following, RLHF / DPO for preferences, and post-training for tools, safety and reasoning.'
  },
  {
    id: 'capabilities', label: 'Capabilities',
    tab: 'training',
    short: 'Reasoning, multimodality, tool use, memory — increasingly inseparable.',
    long: 'Reasoning models trade latency for harder problems; multimodal models read images, audio, video and screens; tool-using models call code, browsers and APIs. The capability surface grew faster than the architecture changed.'
  },
  {
    id: 'building', label: 'Building products',
    tab: 'building',
    short: 'Choose the model. Add RAG, fine-tuning, memory, tools, evals.',
    long: 'The best AI product rarely uses one model. It uses a model system: routing, retrieval, memory, tools, evaluation, safety and cost control wrapped around the right model for the job.'
  },
  {
    id: 'evaluation', label: 'Evaluation & safety',
    tab: 'evaluation',
    short: 'Benchmarks are clues, not deployment decisions.',
    long: 'Public benchmarks saturate or get gamed. Real evaluation is task-specific: golden datasets, LLM-as-judge with calibration, human review, red teaming, A/B testing and production telemetry. Safety = controls, not just refusal behaviour.'
  }
];

/* Top-of-section briefing — seven sharp truths.
   Reframed as the model-systems executive summary. */
var MODELS_INTEL_SUMMARY = [
  { h: 'The model is not the product.',                              d: 'The product is model + workflow + data + tools + evaluation + UX. Choose the model last; design the system first.' },
  { h: 'The best model is not always the largest model.',            d: 'It is the model that fits the task, cost, latency, risk and context. Right-sizing is a feature, not a compromise.' },
  { h: 'Most serious AI products use multiple models, not one.',     d: 'Small for routing, medium for normal traffic, frontier for hard reasoning, specialist for OCR / embeddings / speech / image. One model = wasted dollars or wasted quality.' },
  { h: 'RAG, fine-tuning, long context, memory and tools solve different problems.', d: 'Confuse them and you build the wrong thing. Each has its own failure modes; each composes with the others.' },
  { h: 'Reasoning models are powerful — and slower and more expensive.', d: 'Use them where reasoning earns its cost. Default reasoning everywhere blows the bill without lifting quality on simple traffic.' },
  { h: 'Evaluation is the difference between a demo and a system.',  d: 'A model decision without an eval set is just a vibe. Evals are how you know quality changed — for better or worse.' },
  { h: 'Routing, caching and fallback are now product architecture decisions.', d: 'They sit alongside auth and rate limiting. The team that ignores them is paying for it twice — in cost and in incidents.' }
];

/* Visual flow: data to deployment loop */
var MODELS_FLOW = [
  { id: 'data',     h: 'Data',                  d: 'Web, licensed, synthetic, code, multimodal, human preference data.' },
  { id: 'objective', h: 'Training objective',   d: 'Next-token prediction, denoising, contrastive, preference loss.' },
  { id: 'arch',     h: 'Architecture',          d: 'Transformer, MoE, diffusion, state-space, encoder-decoder.' },
  { id: 'pretrain', h: 'Pretraining',           d: 'Long, expensive run that builds broad capability from scale.' },
  { id: 'posttrain', h: 'Post-training',        d: 'SFT, RLHF / DPO, safety tuning, tool-use, reasoning traces.' },
  { id: 'eval',     h: 'Evaluation',            d: 'Academic + safety + domain + production evals; never one number.' },
  { id: 'deploy',   h: 'Deployment',            d: 'API, self-hosted, edge, hybrid; routing + RAG + agent layers above.' },
  { id: 'feedback', h: 'Feedback',              d: 'User signals + telemetry + red-team finds → next dataset version.' }
];

/* Models 101 — primitive cards */
var MODELS_PRIMITIVES = [
  { h: 'What is a model?',     d: 'A learned system that transforms input into output. Text → text, image → label, prompt → code, audio → transcript, text → image.' },
  { h: 'Parameters',           d: 'Learned numbers inside the model. They store statistical patterns — not exact human-style understanding.' },
  { h: 'Tokens',               d: 'Pieces of text or data the model processes. Drive cost, speed and context length.' },
  { h: 'Context length',       d: 'How much information the model can attend to in one request. More is helpful but does not guarantee accuracy.' },
  { h: 'Inference',            d: 'Running the trained model to produce outputs. The thing your users actually pay for.' },
  { h: 'Training',             d: 'Adjusting weights using data + a loss function so future outputs improve.' },
  { h: 'Fine-tuning',          d: 'Updating or adapting a trained model for a narrower task or style.' },
  { h: 'Post-training',        d: 'Instruction tuning, preference optimisation, RLHF / RLAIF, safety tuning, tool-use tuning, reasoning tuning.' },
  { h: 'Grounding',            d: 'Connecting the model to external facts: search, databases, tools, documents, sensors.' },
  { h: 'Hallucination',        d: 'Plausible-looking output that is not supported by data or context. Reduce with grounding + evals + retrieval.' }
];

/* Common confusions that block clear thinking */
var MODELS_CONFUSIONS = [
  { wrong: 'Model size = intelligence',        right: 'Capability also depends on data quality, post-training, evaluation and routing. A well-tuned 8B model can beat a poorly-served 405B model on many real tasks.' },
  { wrong: 'Context length = memory',          right: 'Context is temporary input for one request. Memory is persistent state across requests, sessions and users — a separate engineering problem.' },
  { wrong: 'Fine-tuning = RAG',                 right: 'Fine-tuning changes behaviour and patterns. RAG injects facts into context. They solve different problems and are often used together.' },
  { wrong: 'Benchmark score = product quality', right: 'Benchmarks measure narrow skills; products are judged on task success, latency, cost, safety and reliability across real users.' },
  { wrong: 'Reasoning tokens = guaranteed truth', right: 'Long chains of thought can also reason from bad assumptions. Verification + grounding + evals matter more than length of reasoning.' }
];

/* The 8-layer model stack */
var MODELS_STACK = [
  { id: 'data',        n: '01', h: 'Data layer',                 items: ['Public web', 'Licensed corpora', 'Synthetic data', 'Code', 'Images', 'Video', 'Audio', 'Domain datasets', 'User feedback', 'Human preference data'], note: 'The single biggest determinant of capability. Quality, deduplication and licensing decide what the model can ever learn.' },
  { id: 'tokens',      n: '02', h: 'Tokenisation / representation', items: ['Tokens', 'Embeddings', 'Image patches', 'Audio features', 'Video frames', 'Multimodal embeddings'], note: 'How raw input becomes vectors. Tokenisation choices ripple into cost, context length and multilingual quality.' },
  { id: 'arch',        n: '03', h: 'Architecture',                items: ['Transformers (dense)', 'Mixture of Experts', 'Diffusion', 'State-space (Mamba / S4)', 'Encoder-decoder', 'Autoregressive decoder', 'Multimodal encoders'], note: 'The structural prior. Different shapes win on different modalities — transformers on text, diffusion on images, state-space for very long sequences.' },
  { id: 'objective',   n: '04', h: 'Training objective',          items: ['Next-token prediction', 'Masked modeling', 'Contrastive', 'Diffusion denoising', 'Reinforcement learning', 'Preference learning', 'Supervised fine-tuning'], note: 'What the model is rewarded for predicting. Determines what kind of skills emerge.' },
  { id: 'posttrain',   n: '05', h: 'Post-training',               items: ['Instruction tuning', 'RLHF', 'RLAIF', 'DPO / preference optimisation', 'Safety tuning', 'Tool-use tuning', 'Reasoning traces', 'Distillation'], note: 'Where raw capability becomes useful behaviour. Most of the gap between 2022 and 2025 lives here.' },
  { id: 'capability',  n: '06', h: 'Capability',                   items: ['Language', 'Reasoning', 'Code', 'Math', 'Vision', 'Audio', 'Planning', 'Tool use', 'Memory', 'Agents'], note: 'The surface most users see — but it is downstream of every layer above.' },
  { id: 'eval',        n: '07', h: 'Evaluation',                   items: ['Academic benchmarks', 'Coding benchmarks', 'Human preference evals', 'Safety evals', 'Domain evals', 'Red teaming', 'Production telemetry', 'Customer task success'], note: 'Single numbers lie. The honest answer is a portfolio of evals across many shapes.' },
  { id: 'deploy',      n: '08', h: 'Deployment',                   items: ['API', 'Self-hosted', 'Edge / on-device', 'Hybrid', 'Model router', 'RAG system', 'Agent system', 'Product workflow'], note: 'Where the model meets users. Decides perceived speed, perceived intelligence and per-request cost.' }
];

/* Transformer mental model */
var MODELS_TRANSFORMER = {
  headline: 'Why transformers changed AI',
  framing: 'Transformers process tokens through stacked attention + feed-forward blocks. Each token looks at every other token and updates its own representation. Stack enough of these blocks, train on enough data, and useful capabilities emerge — not because of one trick, but because the architecture scales cleanly with compute and data.',
  flow: [
    { h: 'Text', d: 'Raw input: chat, code, docs, URLs.' },
    { h: 'Tokens', d: 'Subword units. "Tokenisation" splits text consistently.' },
    { h: 'Embeddings', d: 'Each token becomes a vector in a learned space.' },
    { h: 'Attention blocks', d: 'Every token attends to all others through Query / Key / Value matrices.' },
    { h: 'Feed-forward', d: 'Per-token MLPs transform the representation.' },
    { h: 'Hidden states', d: 'Stacked layers build increasingly abstract patterns.' },
    { h: 'Output probabilities', d: 'Logits over the full vocabulary.' },
    { h: 'Next token', d: 'Sampling step (temperature, top-p, top-k).' }
  ],
  concepts: [
    { h: 'Self-attention',          d: 'Every token computes weights over every other token; the output is a weighted sum. The "look at relevant context" mechanism.' },
    { h: 'Query / Key / Value',     d: 'Three learned projections per token. Q × K = attention scores; V is what gets weighted and summed.' },
    { h: 'Attention heads',         d: 'Multiple parallel attention computations. Different heads learn different relationships.' },
    { h: 'Positional information',  d: 'Tokens have no order by default. Positional encodings (RoPE, ALiBi, learned) add order.' },
    { h: 'Feed-forward networks',   d: 'Per-token MLPs. The "transform the representation" half of each block.' },
    { h: 'Residual connections',    d: 'Each block adds its output to its input. Lets gradients flow through deep stacks.' },
    { h: 'Layer normalisation',     d: 'Stabilises training; usually applied before attention + FFN ("pre-norm").' },
    { h: 'Autoregressive generation', d: 'Sample a token, append to context, predict the next. The basic loop of every chat model.' },
    { h: 'Temperature + sampling',  d: 'Temperature flattens / sharpens the distribution; top-p / top-k cap which tokens are considered.' },
    { h: 'Logits + probabilities',  d: 'Softmax over logits gives the per-token distribution. Calibration here matters for confidence + tool use.' }
  ],
  punchline: 'Transformers made it practical to train large models that learn general patterns from huge datasets. But transformers alone are not enough — data, compute, post-training, evaluation and serving infrastructure decide whether the model becomes useful.'
};

/* Model families — comparison cards */
var MODELS_FAMILIES = [
  { name: 'Large language models',     short: 'LLMs', best: 'General language, code, reasoning, instruction following.', weak: 'Hallucination, factual uncertainty, context limits, cost.', examples: 'GPT, Claude, Gemini, Llama, Qwen, Mistral, DeepSeek, Grok.' },
  { name: 'Vision-language models',    short: 'VLMs', best: 'Document analysis, chart + image understanding, UI grounding, robotics perception.', weak: 'Counting, fine spatial reasoning, dense charts, medical nuance.', examples: 'GPT-4o-class, Claude with vision, Gemini, Qwen-VL, Llama vision.' },
  { name: 'Diffusion models',          short: 'Diffusion', best: 'Image, video and audio generation through iterative denoising.', weak: 'Controllability, consistency, physics, edit precision.', examples: 'Stable Diffusion, FLUX, Imagen, Sora-class, Midjourney.' },
  { name: 'Speech / audio models',     short: 'Speech', best: 'STT, TTS, voice agents, audio understanding, accessibility.', weak: 'Accents, noise, latency, privacy.', examples: 'Whisper, Deepgram, ElevenLabs, GPT-4o audio, Realtime API.' },
  { name: 'Embedding models',          short: 'Embed', best: 'Search, recommendations, RAG, clustering, deduplication.', weak: 'Domain fit, chunking, retrieval evaluation.', examples: 'OpenAI text-embedding, Cohere Embed, Voyage, BGE, E5.' },
  { name: 'Reranker models',           short: 'Rerank', best: 'Reordering retrieved results by relevance to lift RAG quality.', weak: 'Adds latency + cost on every retrieval.', examples: 'Cohere Rerank, Voyage Rerank, BGE Reranker, Jina Rerank.' },
  { name: 'Code models',               short: 'Code', best: 'Code generation, refactoring, debugging, repo + agentic coding.', weak: 'Subtle bugs, system-constraint blind spots, security.', examples: 'GPT-5-class, Claude code-tier, DeepSeek-Coder, Qwen-Coder, Codestral.' },
  { name: 'Reasoning models',          short: 'Reasoning', best: 'Math, coding, planning, deep analysis, agents.', weak: 'Slow + expensive; reasoning from bad assumptions still wrong.', examples: 'OpenAI o-series, Claude reasoning tiers, Gemini Thinking, DeepSeek-R1, Qwen reasoning.' },
  { name: 'World / robotics models',   short: 'World', best: 'Robotics, control, planning, embodied AI, simulation.', weak: 'Data, safety, sim-to-real transfer.', examples: 'Genie / Sora-style world models, robotics foundation models.' },
  { name: 'Small / edge models',       short: 'Edge', best: 'Privacy, latency, offline AI on phones, laptops, browsers.', weak: 'Smaller capability envelope; harder to fit frontier tasks.', examples: 'Llama-class small, Gemma, Phi, Apple Intelligence, MLX models.' }
];

/* The training pipeline — 14 stages */
var MODELS_TRAINING_PIPELINE = [
  { h: 'Data collection',       d: 'Web crawls, licensed corpora, synthetic generation, multimodal feeds.' },
  { h: 'Filtering',             d: 'Quality classifiers, language detection, NSFW + license + PII filters.' },
  { h: 'Deduplication',         d: 'Exact + fuzzy + semantic dedup. Reduces memorisation and wasted compute.' },
  { h: 'Tokenisation',          d: 'Subword segmentation. Decides cost + context economics for the life of the model.' },
  { h: 'Pretraining',           d: 'The big run. Builds broad capability from scale; the most expensive single step.' },
  { h: 'Evaluation',            d: 'Held-out perplexity, broad academic + safety evals; tells you what kind of model you got.' },
  { h: 'Supervised fine-tuning', d: 'Instruction-following examples teach the model to be helpful and stay on task.' },
  { h: 'Preference optimisation', d: 'RLHF / DPO / RLAIF aligns outputs with human or AI preferences.' },
  { h: 'Safety tuning',         d: 'Reduces harmful outputs. Side-effect: refusal behaviour. Trade-off carefully.' },
  { h: 'Tool-use tuning',       d: 'Teaches the model to call tools, browsers, code-runners, APIs reliably.' },
  { h: 'Distillation',          d: 'Transfer capability from a large teacher model to a smaller student. Often the route to deployable size.' },
  { h: 'Deployment',            d: 'Quantise, package, serve. The model leaves the lab.' },
  { h: 'Monitoring + feedback', d: 'Production telemetry, user signals, red-team finds.' },
  { h: 'Next version',          d: 'Better data + better recipes + better evals → next release.' }
];

/* Reasoning models */
var MODELS_REASONING = {
  headline: 'Reasoning models: inference-time compute becomes capability',
  framing: 'Traditional chat models try to answer quickly. Reasoning models can spend more compute before answering — generating internal traces, exploring branches, verifying steps. This makes them better on math, coding, planning and agents. It also makes them slower and more expensive. Reasoning does not guarantee truth.',
  concepts: [
    { h: 'Chain-of-thought',         d: 'Step-by-step reasoning written out before the final answer.' },
    { h: 'Hidden reasoning traces',  d: 'Some products run reasoning behind the scenes; users see only the answer.' },
    { h: 'Test-time compute',        d: 'Allocate more compute at inference for harder questions; the headline reasoning idea.' },
    { h: 'Verification',             d: 'Check the reasoning before committing — self-check, rules, code execution, search.' },
    { h: 'Self-correction',          d: 'Spot the mistake, revise, continue. Sometimes worse than getting it right the first time.' },
    { h: 'Tool-assisted reasoning',  d: 'Let the model call calculators, search, code, retrieval mid-reasoning.' },
    { h: 'Search-assisted reasoning', d: 'Tree search / beam search over reasoning paths; pick the best.' },
    { h: 'Planning + decomposition',  d: 'Break a hard task into sub-tasks; solve each.' },
    { h: 'Debate / reflection / critique', d: 'Multi-pass reasoning patterns: produce, critique, revise.' },
    { h: 'Reasoning budget',         d: 'How many tokens / steps the system is allowed to spend on a single answer.' }
  ],
  comparison: [
    { axis: 'Latency',          fast: 'Sub-second to a few seconds.',                                          reason: 'Tens of seconds to minutes for the hardest tasks.' },
    { axis: 'Cost per request',  fast: 'Cheap; many requests per dollar.',                                     reason: 'Expensive; reasoning tokens dominate the bill.' },
    { axis: 'Best use case',     fast: 'High-volume chat, summarisation, classification, simple coding.',     reason: 'Math, deep coding, planning, multi-step analysis, agent loops.' },
    { axis: 'Weakness',          fast: 'Underthinks complex problems; prone to confident wrong answers.',     reason: 'Overthinks simple problems; reasons from bad assumptions if context is wrong.' },
    { axis: 'Output style',      fast: 'Short, conversational.',                                              reason: 'Longer, more analytical; sometimes shows reasoning, sometimes hidden.' },
    { axis: 'Tool-use fit',       fast: 'OK for single-step tools.',                                          reason: 'Strong for multi-step tool chains, browser tasks, code agents.' },
    { axis: 'Coding fit',         fast: 'Good for snippets and refactors.',                                    reason: 'Better for repo-scale changes, debugging, agentic development.' },
    { axis: 'Math fit',           fast: 'Limited; arithmetic + word problems still error-prone.',             reason: 'Strong on competition-style math; verification still helps.' },
    { axis: 'Product fit',        fast: 'Default for most consumer + B2B chat.',                              reason: 'Pull in selectively — for hard tasks or premium tiers.' }
  ],
  whenUse: [
    'Complex coding (multi-file, repo-scale, debugging).',
    'Legal or policy analysis with cited sources.',
    'Financial analysis (modelling, edge-case reasoning).',
    'Math + scientific explanation.',
    'Multi-step planning, decomposition, route-finding.',
    'Agent workflows that touch tools, browsers, code-runners.',
    'Research synthesis across many sources.'
  ],
  whenAvoid: [
    'Simple classification + routing.',
    'Short copywriting + summarisation.',
    'FAQ answers from a small grounded corpus.',
    'High-volume, low-margin tasks where cost-per-request dominates.',
    'Latency-sensitive chat where simple models work.'
  ],
  punchline: 'Reasoning is not a tier. It is a budget. The right product spends it on the requests that need it.'
};

/* Multimodal */
var MODELS_MULTIMODAL = {
  headline: 'From text models to world-interface models',
  framing: 'Multimodal models accept more than text — image, audio, video, code, PDFs, spreadsheets, UI screenshots, sensor data — and can produce more than text in return. Real work is rarely just text, so this is where the model layer becomes a "world interface".',
  modalities: [
    { h: 'Text',                d: 'Chat, prompts, instructions, code as text.' },
    { h: 'Code',                d: 'Repo files, diffs, tests; sometimes a first-class modality with its own tokenizer.' },
    { h: 'Image',               d: 'Photos, diagrams, charts, screenshots, scientific imaging.' },
    { h: 'Audio',               d: 'Speech, music, environmental audio; via spectrograms or audio tokens.' },
    { h: 'Video',               d: 'Frames + temporal structure; one of the harder modalities to do at scale.' },
    { h: 'Documents',           d: 'PDFs, contracts, slide decks; layout matters as much as text.' },
    { h: 'Tables / spreadsheets', d: 'Structured rows + columns; reasoning over numbers + units.' },
    { h: 'UI / computer screen', d: 'Screenshots + accessibility trees; the substrate for browser + computer-use agents.' },
    { h: 'Tools / API calls',    d: 'Structured function calls; the action modality.' },
    { h: 'Robotics / sensor input', d: 'Lidar, cameras, IMUs; embodied AI input.' }
  ],
  concepts: [
    'Native multimodality: trained jointly across modalities from the start.',
    'Bolted-on multimodality: a vision adapter feeds a text-only model.',
    'Vision encoders (ViT-class, SigLIP) — turn pixels into tokens.',
    'Image patches — fixed-size tiles treated as visual tokens.',
    'Audio tokenisation — neural codec or spectrogram tokenisers.',
    'Video frame understanding — sample frames + temporal pooling or dedicated video encoders.',
    'Cross-modal attention — text tokens attend to image / audio / video tokens.',
    'Multimodal grounding — "where in the image is the cat?" capabilities.'
  ],
  useCases: [
    'Document intelligence + contract review.',
    'Medical imaging support (always with clinician oversight).',
    'UI automation + computer-use agents.',
    'Tutoring on diagrams, problems, screenshots.',
    'Robotics + perception.',
    'Design + creative tools.',
    'Video analysis + summarisation.',
    'Voice agents (real-time speech in + out).',
    'Scientific workflows (microscopy, astronomy, simulations).'
  ],
  warning: 'Seeing an image is not the same as understanding it perfectly. Multimodal models can still fail at counting, spatial reasoning, fine visual detail, charts, medical nuance and complex document layout.'
};

/* Open vs closed comparison */
var MODELS_OPEN_CLOSED = {
  closed: {
    h: 'Closed frontier models',
    examples: 'GPT (OpenAI), Claude (Anthropic), Gemini (Google DeepMind), Grok (xAI), proprietary Mistral models.',
    strong: ['Frontier performance', 'Managed API + reliability', 'Mature safety + abuse systems', 'Tool + agent ecosystem', 'Fast iteration on capability'],
    weak:   ['Cost at scale', 'Vendor dependency + API churn', 'Less control + transparency', 'Data-governance questions', 'Country / sovereignty concerns']
  },
  open: {
    h: 'Open-weight models',
    examples: 'Llama (Meta), Qwen (Alibaba), Mistral open models, DeepSeek, Gemma (Google), Falcon.',
    strong: ['Self-hosting + data control', 'Privacy + offline use', 'Customisation via fine-tunes + adapters', 'Sovereignty + on-prem deployment', 'Predictable cost at high volume'],
    weak:   ['Deployment + serving complexity', 'You own the safety responsibility', 'Hardware + ops cost', 'Evaluation burden moves to you', 'Fewer turn-key safety systems']
  },
  edge: {
    h: 'Local / edge models',
    examples: 'Apple Intelligence, on-device Llama / Gemma / Phi, MLX-class models, llama.cpp deployments.',
    strong: ['Privacy by default', 'Latency-free for local tasks', 'Offline capability', 'User-owned compute'],
    weak:   ['Capability ceiling vs frontier', 'Memory + battery + thermals', 'Update + rollback complexity', 'Eval burden + drift over hardware generations']
  },
  decisionClose: ['Speed-to-market matters more than infra optimisation.', 'Frontier quality decides product viability.', 'Team is small or non-infra-heavy.', 'Workload is uncertain or bursty.', 'You do not yet know your true workload.'],
  decisionOpen:  ['Data residency or sovereignty matters.', 'Predictable high volume makes self-hosting cheaper.', 'Domain customisation requires deep behaviour control.', 'Latency-critical or offline use is a hard requirement.', 'You can credibly own model + safety eval over time.'],
  decisionHybrid: ['Route hard reasoning to a closed frontier model.', 'Route cheap repetitive tasks to a small open / hosted model.', 'Run local models for privacy-sensitive paths.', 'Keep at least one fallback provider live.', 'Move workloads in-house only when the curve clearly bends.']
};

/* Frontier model landscape — strategic, not exhaustive */
var MODELS_LANDSCAPE = {
  closed: [
    { h: 'OpenAI',         strong: 'Reasoning, tool use, agent platform, multimodal voice / vision.', why: 'Sets capability + product expectations; broadest enterprise + developer adoption.', risk: 'Dependency, API change risk, premium frontier cost.' },
    { h: 'Anthropic',      strong: 'Claude family — long context, reasoning, coding agents, system cards on safety.', why: 'Strong enterprise + developer fit; coding + agent serious investment.', risk: 'Capacity availability, narrower modality coverage than rivals.' },
    { h: 'Google DeepMind', strong: 'Gemini family — long context, multimodal, deep integration with Google + Vertex.', why: 'Distribution + cloud integration; strong on multimodal + long-context.', risk: 'Product lifecycle complexity; cross-team coherence.' },
    { h: 'xAI',            strong: 'Grok family — real-time data, large training capacity (Memphis Colossus).', why: 'Frontier-tier player on a different distribution stack.', risk: 'Tool + agent ecosystem still maturing.' },
    { h: 'Mistral (closed)', strong: 'European frontier API offerings; strong cost-quality balance.', why: 'EU sovereignty + multilingual + cost-aware deployments.', risk: 'Smaller scale than US labs; capacity constraints at peak.' }
  ],
  open: [
    { h: 'Meta Llama',     strong: 'Most-used open-weight base in the world; broad ecosystem + tooling.', why: 'Default starting point for many self-host + customisation projects.', risk: 'Licence terms still vary; safety responsibility moves to you.' },
    { h: 'Qwen (Alibaba)', strong: 'Strong multilingual + multimodal + coding lines; very fast iteration.', why: 'Frontier-adjacent open weights; broad model-size spread.', risk: 'Geopolitics + data-residency interpretation in some markets.' },
    { h: 'DeepSeek',       strong: 'Reasoning + coding open models; reproducibility-friendly technical reports.', why: 'Pushed the open-model reasoning frontier in 2024–25.', risk: 'Geopolitics; HBM + serving cost at scale.' },
    { h: 'Mistral (open)', strong: 'Mixtral / Magistral / open small models with permissive licences.', why: 'Lightweight open baselines for European + cost-aware stacks.', risk: 'Smaller post-training muscle than frontier labs.' },
    { h: 'Google Gemma',   strong: 'Small + medium open weights from Google DeepMind ancestry.', why: 'Strong small-model option with safety + tooling support.', risk: 'Smaller capability envelope than frontier closed Gemini.' }
  ],
  specialists: [
    { h: 'Coding-specialist models',     d: 'DeepSeek-Coder, Qwen-Coder, Codestral, etc. Strong on repo + diff workloads when general models are too expensive.' },
    { h: 'Embeddings + rerankers',       d: 'OpenAI / Cohere / Voyage / BGE / E5 / Jina. The retrieval workhorses for RAG + search.' },
    { h: 'Speech models',                d: 'Whisper, Deepgram, ElevenLabs, GPT-4o realtime, native voice APIs. STT + TTS + voice agents.' },
    { h: 'Image generation',             d: 'FLUX, Stable Diffusion family, Midjourney, Imagen. Different aesthetics + control trade-offs.' },
    { h: 'Video models',                 d: 'Sora-class, Veo-class, Runway, Kling. Still expensive + workflow-immature.' },
    { h: 'OCR + document models',        d: 'Specialised layout-aware models (DocLayoutLM-style, dedicated VLMs) for enterprise extraction.' },
    { h: 'Medical + scientific models',  d: 'Med-PaLM-class, AlphaFold, materials models — narrow domains with high stakes; always paired with expert review.' }
  ]
};

/* Model selection matrix — practical "which model for which job?" */
var MODELS_SELECTION_MATRIX = [
  { workload: 'Customer support chatbot',  type: 'Mid-tier LLM + small model for routing', cap: 'Instruction following, retrieval grounding', latency: 'High', cost: 'High', risk: 'Medium', eval: 'Resolution rate · CSAT · escalation rate', avoid: 'Frontier model on every request — bill explodes.' },
  { workload: 'Code assistant',            type: 'Frontier or strong code-specialist',     cap: 'Code generation, repo grounding, tool use', latency: 'Medium', cost: 'Medium', risk: 'Medium', eval: 'Test pass rate · diff acceptance · review time', avoid: 'Tiny models pretending to be code agents.' },
  { workload: 'Deep research assistant',   type: 'Reasoning model + retrieval + tools',    cap: 'Multi-step reasoning, citations, web access', latency: 'Low', cost: 'Low', risk: 'Medium', eval: 'Source-grounding rate · expert review · time saved', avoid: 'No retrieval; hallucinated citations.' },
  { workload: 'Legal / policy analysis',   type: 'Reasoning model with strict citations',  cap: 'Long context, citation discipline, jurisdiction awareness', latency: 'Low', cost: 'Low', risk: 'Very high', eval: 'Cited-source accuracy · expert review · disclaimer compliance', avoid: 'Confident outputs without citations or human review.' },
  { workload: 'Financial analysis',        type: 'Reasoning + retrieval + code execution', cap: 'Math, structured data, scenario reasoning', latency: 'Low', cost: 'Low', risk: 'Very high', eval: 'Recompute audit · expert review · regression tests', avoid: 'Free-form math without code-execution verification.' },
  { workload: 'Medical document analysis', type: 'Reasoning model + clinician oversight',  cap: 'Long-context comprehension, conservative behaviour', latency: 'Low', cost: 'Low', risk: 'Very high', eval: 'Clinician review · false-negative tracking · safety evals', avoid: 'Auto-approval. Outputs as recommendations only.' },
  { workload: 'Sales email generation',    type: 'Mid-tier LLM with templates',            cap: 'Style control, tool use for personalisation', latency: 'High', cost: 'High', risk: 'Low', eval: 'Reply rate · brand tone · spam-flag rate', avoid: 'Frontier model when style + reliability matter more than reasoning.' },
  { workload: 'OCR / document extraction', type: 'Layout-aware doc model + LLM verifier',  cap: 'Layout, structure, tables, forms', latency: 'Medium', cost: 'Medium', risk: 'High', eval: 'Field-level F1 · structured-output validity · escalation rate', avoid: 'Plain LLM-only on long PDFs without a layout step.' },
  { workload: 'RAG knowledge base',        type: 'Retriever + reranker + mid-tier LLM',    cap: 'Retrieval, citations, freshness', latency: 'Medium', cost: 'Medium', risk: 'Medium', eval: 'Source-grounding · top-k recall · answer quality', avoid: 'No reranker, no chunking strategy, no eval set.' },
  { workload: 'Agentic browser / computer task', type: 'Reasoning + tool-use + sandbox', cap: 'Planning, multi-step tool use, recovery', latency: 'Low', cost: 'Low', risk: 'High', eval: 'Task success · steps-to-goal · safe-action rate', avoid: 'Unrestricted tool use without sandboxing or rollback.' },
  { workload: 'Voice assistant',           type: 'Realtime voice model or STT+LLM+TTS',    cap: 'Low-latency turn-taking, interruption handling', latency: 'Very high', cost: 'Medium', risk: 'Medium', eval: 'TTFB · interruption rate · transcript accuracy', avoid: 'Adding reasoning models in latency-critical paths.' },
  { workload: 'Image generation',          type: 'Diffusion + control + safety filters',   cap: 'Style, control, IP + content filters', latency: 'Low', cost: 'Low', risk: 'Medium', eval: 'Acceptance rate · prompt-adherence · safety rejection', avoid: 'No safety classifiers; no IP filter; no consent rules.' },
  { workload: 'Video analysis',            type: 'VLM with sampled frames or video model', cap: 'Temporal understanding, summarisation', latency: 'Low', cost: 'Low', risk: 'Medium', eval: 'Coverage · timestamp precision · cost per minute', avoid: 'Frame-by-frame full reasoning; cost runs away.' },
  { workload: 'Real-time classification',  type: 'Small fast LLM or classical model',      cap: 'Throughput, low cost', latency: 'Very high', cost: 'High', risk: 'Low', eval: 'Throughput · F1 · stable inference time', avoid: 'Frontier reasoning model on a 5ms-budget classifier.' },
  { workload: 'Edge / mobile AI',          type: 'Small quantised model on-device',        cap: 'Privacy, latency, offline', latency: 'Very high', cost: 'High', risk: 'Medium', eval: 'On-device latency · battery · OTA rollback', avoid: 'Shipping un-evaluated models without OTA + rollback.' }
];

/* RAG vs fine-tuning vs long context vs memory vs tool use */
var MODELS_KNOWLEDGE = {
  rag:  { h: 'RAG',         best: 'Factual knowledge, documents, policies, anything that changes.', weak: 'Retrieval quality, chunking, citations, stale data, bad ranking.' },
  ft:   { h: 'Fine-tuning', best: 'Style, format, narrow tasks, domain-specific patterns.',          weak: 'Does not reliably store facts; expensive; hard to evaluate.' },
  lc:   { h: 'Long context', best: 'Document review, codebase analysis, transcript analysis.',        weak: 'Expensive, slower, models may miss details inside huge contexts.' },
  mem:  { h: 'Memory',       best: 'Personalisation + long-running workflows.',                       weak: 'Privacy, stale preferences, contamination, incorrect recall.' },
  tool: { h: 'Tool use',     best: 'Up-to-date info + actions: search, DBs, code, calendars, CRM.',  weak: 'Tool errors, permissions, security, prompt injection.' },
  punchline: 'Fine-tuning is not the default answer. Most factual business systems should start with retrieval, evaluation and workflow design.'
};

/* Agents — the model becomes a system */
var MODELS_AGENTS = {
  headline: 'Models become agents when they can plan, use tools and act',
  framing: 'A chatbot answers. An agent pursues a goal through multiple steps. Agents need tools, memory, planning, feedback, permissions and monitoring. The model is one part of the agent system.',
  loop: [
    { h: 'Goal',        d: 'A clear, finite objective with a success criterion.' },
    { h: 'Plan',        d: 'Decompose the goal into steps; pick the next tool or action.' },
    { h: 'Act',         d: 'Call a tool, run code, browse, send a request.' },
    { h: 'Observe',     d: 'Read the tool output; parse + ground.' },
    { h: 'Update state', d: 'Update memory, plan, intermediate variables.' },
    { h: 'Continue / stop', d: 'Re-plan or finish based on success criterion + budget.' },
    { h: 'Report',      d: 'Hand off result + audit trail to the human or the next system.' }
  ],
  concepts: [
    'Tool calling + function calling.',
    'Planning and decomposition.',
    'Reflection + critique loops.',
    'Memory (per-session + persistent).',
    'Browser / computer use.',
    'Code execution sandboxes.',
    'API actions with scoped permissions.',
    'Multi-agent orchestration.',
    'Human-in-the-loop approval gates.',
    'Guardrails + content filters.',
    'Audit logs + replay.',
    'Sandboxing + blast-radius limits.'
  ],
  failures: [
    'Bad planning — wrong decomposition for the goal.',
    'Tool misuse — calls the wrong API, or the right one with bad args.',
    'Hallucinated state — believes a tool succeeded when it failed.',
    'Context loss — forgets earlier steps.',
    'Infinite loops — no robust stop condition.',
    'Prompt injection — tool output controls the agent.',
    'Over-delegation — humans approve too much, too fast.',
    'Weak evaluation — "did the task complete" is unmeasured.',
    'No rollback path — bad action is permanent.',
    'Unclear success criteria — "success" means different things to user + agent.'
  ],
  punchline: 'Most useful agents are not magical autonomous employees. They are constrained workflow systems with model reasoning inside them.'
};

/* Evaluation + benchmarks */
var MODELS_EVAL = {
  headline: 'Benchmarks are not reality',
  categories: [
    { h: 'Knowledge',   d: 'MMLU-style. Broad question-answering across domains.' },
    { h: 'Math',        d: 'GSM8K, MATH, AIME-style. Arithmetic + reasoning.' },
    { h: 'Science / reasoning', d: 'GPQA-style. Hard expert-level questions.' },
    { h: 'Coding',      d: 'SWE-bench, HumanEval-style. Functional code tests.' },
    { h: 'Chat preference', d: 'Pairwise human preference (e.g. LMSYS Chatbot Arena, where labelled).' },
    { h: 'Multimodal',  d: 'MMMU-style, document + chart benchmarks.' },
    { h: 'Agents',      d: 'Browser / computer / code task completion benchmarks.' },
    { h: 'Safety',      d: 'Jailbreak, misuse, bias, toxicity, privacy evals.' },
    { h: 'Production',  d: 'Customer task success, resolution rate, human acceptance, cost-per-task — your evals, your data.' }
  ],
  evalStack: [
    { h: 'Unit tests',          d: 'Deterministic checks: structured-output validity, format, schemas, citations.' },
    { h: 'Golden datasets',     d: 'Hand-curated examples with expert-graded answers; the regression net.' },
    { h: 'LLM-as-judge',        d: 'Calibrated against human ratings on a sample. Powerful but must be audited.' },
    { h: 'Human review',        d: 'Expert pairwise comparisons + qualitative analysis on tricky tasks.' },
    { h: 'Red teaming',         d: 'Adversarial probes for safety + abuse + jailbreak failures.' },
    { h: 'A/B testing',         d: 'Live traffic comparison; the closest thing to "production truth".' },
    { h: 'Production telemetry', d: 'Latency, cost, error rate, escalation, satisfaction over time.' },
    { h: 'Incident review',     d: 'Postmortems with root cause + action items + regression tests.' }
  ],
  warning: 'Never select a model from one leaderboard alone. Choose using your own workload, your own data, your own latency target, your own risk tolerance and your own cost structure.'
};

/* Safety + governance */
var MODELS_SAFETY = {
  headline: 'Capability without control is not production AI',
  framing: 'Models can be useful and risky at the same time. Safety is not just refusal behaviour — it is a system of evaluations, monitoring, controls, audits and human oversight.',
  risks: [
    'Hallucination + confident wrong answers.',
    'Prompt injection + tool-output injection.',
    'Data leakage (training data, user data, secrets).',
    'Privacy failure (PII, regulated data).',
    'Harmful instructions (CBRN, self-harm, weapons).',
    'Bias and unfair outcomes.',
    'Over-refusal that breaks legitimate workflows.',
    'Under-refusal on misuse.',
    'Sycophancy + reward-hacked behaviour.',
    'Model drift over time.',
    'Tool misuse + unsafe agent actions.',
    'Copyright / IP risk in outputs.',
    'High-stakes domain errors (medical, legal, financial).',
    'Persuasion + manipulation risks.'
  ],
  controls: [
    'System prompts + role separation.',
    'Tool permissions + scoped credentials.',
    'Retrieval grounding + citations.',
    'Model evals (capability + safety).',
    'Red teaming on every release.',
    'Monitoring + drift detection.',
    'Content filters (input + output).',
    'Human review on high-stakes outputs.',
    'Sandboxing + blast-radius limits.',
    'Logging + traces for replay.',
    'Rollback + circuit breakers.',
    'Incident response playbooks.',
    'Model + system cards.',
    'Data governance + DPA + tenant isolation.'
  ],
  punchline: 'A safe model is not only a model that refuses bad prompts. It is a model system that can be evaluated, monitored, constrained and improved.'
};

/* Cost calculator presets */
var MODELS_CALC_PRESETS = [
  { id: 'simple-chat',  label: 'Simple chatbot',         inTok: 800,   outTok: 400,   reqDay: 200000,  inPrice: 0.50, outPrice: 1.50, reasonMul: 1, cache: 0.30, retrieval: 0,    review: 0,    tag: 'B2C / B2B chat with mid-tier model.' },
  { id: 'rag',          label: 'RAG assistant',          inTok: 4000,  outTok: 600,   reqDay: 50000,   inPrice: 0.50, outPrice: 1.50, reasonMul: 1, cache: 0.40, retrieval: 0.001, review: 0,    tag: 'Document-grounded enterprise assistant.' },
  { id: 'coding-agent', label: 'Coding agent',           inTok: 6000,  outTok: 1500,  reqDay: 20000,   inPrice: 1.50, outPrice: 6.00, reasonMul: 2, cache: 0.50, retrieval: 0.0005, review: 0.02, tag: 'Multi-step agent with tool use + reasoning model.' },
  { id: 'deep-research', label: 'Deep research assistant', inTok: 12000, outTok: 3000,  reqDay: 5000,   inPrice: 1.50, outPrice: 6.00, reasonMul: 4, cache: 0.20, retrieval: 0.002, review: 0.05, tag: 'Reasoning model + heavy retrieval + occasional human review.' },
  { id: 'voice',        label: 'Voice agent',            inTok: 1500,  outTok: 800,   reqDay: 30000,   inPrice: 5.00, outPrice: 20.00, reasonMul: 1, cache: 0.10, retrieval: 0,    review: 0,    tag: 'Realtime voice in + out (premium pricing).' },
  { id: 'enterprise-doc', label: 'Enterprise document analyst', inTok: 8000, outTok: 1200, reqDay: 10000, inPrice: 1.50, outPrice: 6.00, reasonMul: 2, cache: 0.30, retrieval: 0.0015, review: 0.10, tag: 'Long-context + retrieval + structured output + human approval.' }
];

/* Where model products break — symptom · cause · first check · fix pattern */
var MODELS_BOTTLENECKS = [
  { symptom: 'Hallucinated answer',                              cause: 'Weak grounding; missing or low-quality retrieval; over-confident model.', check: 'Retrieval recall · citation rate · source quality.',                fix: 'Add or improve RAG; require citations; lower temperature; gate confident output on retrieval coverage.' },
  { symptom: 'Bad citation (cited but wrong)',                   cause: 'Citation generated post-hoc; citation step unverified.',                  check: 'Citation alignment vs answer; spot-check sample.',                  fix: 'Verify citations against retrieved chunks; reject answer if mismatch; red-team cite-step.' },
  { symptom: 'RAG answer misses obvious document',               cause: 'Retrieval / chunking / reranker / metadata problem.',                      check: 'Retrieved chunks + metadata; query rewriting; top-k recall.',         fix: 'Improve chunking; add reranker; add query rewriting; evaluate retrieval separately.' },
  { symptom: 'Agent loops forever',                              cause: 'Weak stopping criteria; no step budget; no success check.',                check: 'Agent state · tool logs · step budget · success criterion.',          fix: 'Add explicit success criterion + step budget + max-tool-calls; force re-plan or stop.' },
  { symptom: 'Agent uses wrong tool',                            cause: 'Tool descriptions are unclear; permissions are too permissive.',           check: 'Tool descriptions · permission scope · per-tool eval set.',           fix: 'Tighten tool docs + per-tool eval; restrict permissions; route by tool intent first.' },
  { symptom: 'Output is not valid JSON / schema',                cause: 'No schema validation; no retry; wrong serialisation path.',                check: 'JSON-schema validation · parser logs · retry strategy.',              fix: 'Use structured-output / JSON-schema mode; validate; retry with repair prompt.' },
  { symptom: 'Slow response',                                    cause: 'Long context or reasoning model on a fast-path query.',                    check: 'Token count · model route · reasoning budget · TTFT.',                fix: 'Route easy queries to a small model; cap reasoning budget; trim context.' },
  { symptom: 'High cost per request',                            cause: 'Wrong model size; no caching; no routing.',                                check: 'Cost-per-task · cache hit rate · model mix.',                         fix: 'Add prompt cache; route by complexity; rightsize model; quantise where viable.' },
  { symptom: 'User says answer is generic',                      cause: 'Weak context personalisation; no memory; same prompt for everyone.',       check: 'System prompt · retrieval scope · memory enabled?',                   fix: 'Add user context / memory; specialise system prompts per workflow.' },
  { symptom: 'Model refuses too much',                           cause: 'Over-tuned safety; over-broad system prompt.',                             check: 'Refusal rate · false-positive set · system prompt language.',         fix: 'Loosen system prompt; per-tenant policy; eval refusals on legitimate tasks.' },
  { symptom: 'Model takes an unsafe action',                     cause: 'Weak tool permissions; no approval gate; no sandboxing.',                  check: 'Tool permission scope · approval flow · audit logs.',                 fix: 'Scope tool tokens; add human approval gate; sandbox + blast-radius limits.' },
  { symptom: 'Long-context answer misses key point',             cause: 'Context overload; relevant chunk drowned by irrelevant content.',           check: 'Chunk order · context relevance · system prompt clarity.',            fix: 'Reduce context; rerank by relevance; pin key sources; ask the question first, content second.' },
  { symptom: 'Fine-tuned model becomes worse',                   cause: 'Capability regression on general tasks; bad eval set.',                    check: 'Pre / post regression suite · held-out evals · safety evals.',        fix: 'Train with mix of general + domain data; freeze layers selectively; revert + re-evaluate.' },
  { symptom: 'Open-source cheaper on paper, expensive in practice', cause: 'Underestimated infra + ops + eval cost; low utilisation.',              check: 'Real cost-per-token incl. infra · utilisation · eng time.',           fix: 'Compare fully-loaded TCO; consolidate workloads; or move to managed API for low-volume tasks.' },
  { symptom: 'Works in demo but fails in production',            cause: 'Demo runs on the happy path; production hits long tail + load.',           check: 'Production telemetry · long-tail eval set · load + concurrency.',      fix: 'Build a real eval set from production traces; load-test; add fallback + rate limiting.' }
];

/* Misconceptions — the catalogue */
var MODELS_MISCONCEPTIONS = [
  { myth: 'Bigger model means better model.',                      truth: 'Better depends on task, latency, cost, data quality and evaluation. A well-tuned mid-tier model can beat a huge poorly-served one on real tasks.' },
  { myth: 'Long context = memory.',                                truth: 'Context is temporary input. Memory is persistent stored information across sessions and users.' },
  { myth: 'RAG eliminates hallucinations.',                        truth: 'RAG <em>reduces</em> hallucinations only when retrieval + grounding work. Bad retrieval + confident model = confidently wrong.' },
  { myth: 'Fine-tuning teaches the model all company knowledge.',  truth: 'Fine-tuning changes behaviour and patterns. Retrieval is usually better for facts.' },
  { myth: 'Benchmarks tell you which model to use.',               truth: 'Benchmarks are clues, not deployment decisions. Test on your workload.' },
  { myth: 'Open-source models are always cheaper.',                truth: 'Hosting, GPUs, engineering, monitoring and utilisation can make self-hosting expensive at low or unstable volume.' },
  { myth: 'Agents are just prompts.',                              truth: 'Agents are systems: model + tools + memory + permissions + environment + evaluation.' },
  { myth: 'Reasoning models are always better.',                   truth: 'They are slower and more expensive; many tasks do not need deep reasoning.' },
  { myth: 'The model is the product.',                             truth: 'The product is model + workflow + UX + data + infrastructure + safety + evaluation.' },
  { myth: 'A good demo means production-ready.',                   truth: 'Production needs reliability, monitoring, cost control, safety and rollback. Demos optimise for the happy path; production lives in the unhappy ones.' }
];

/* Reference architectures */
var MODELS_REFERENCE_ARCHS = [
  { id: 'A', title: 'Simple AI chatbot',    when: 'Hosted model + thin app. Hours-to-deploy.', blocks: ['Frontend / chat UI', 'API gateway + auth + rate limit', 'Hosted model provider', 'Prompt template + version', 'Logging + traces', 'Lightweight feedback loop'] },
  { id: 'B', title: 'RAG knowledge assistant', when: 'Document-grounded answers with citations.', blocks: ['Documents + ingestion pipeline', 'Chunking + cleaning', 'Embeddings + vector DB', 'Retriever + reranker', 'Mid-tier LLM', 'Citations + grounding checks', 'Eval set + scheduled regression'] },
  { id: 'C', title: 'Coding agent',         when: 'Repo-aware multi-step coding agent.',           blocks: ['Repo access + read API', 'Planning model (reasoning tier)', 'Code-execution sandbox', 'Test runner', 'Patch generation + diff review', 'Human approval gate', 'Audit logs + replay'] },
  { id: 'D', title: 'Voice agent',          when: 'Realtime voice in + voice out.',                 blocks: ['Speech-to-text', 'LLM (or realtime voice model)', 'Tool calls', 'Text-to-speech', 'Latency monitoring', 'Interruption handling + barge-in', 'Transcript + audit log'] },
  { id: 'E', title: 'Enterprise document analyst', when: 'Long, regulated documents with structure.', blocks: ['OCR + document parser', 'Layout-aware model', 'Retrieval + reranker', 'Structured extraction (schema)', 'Validation + escalation', 'Human review queue', 'Audit trail'] },
  { id: 'F', title: 'Multimodal assistant', when: 'Image / video / document input + text output.',   blocks: ['Multimodal input pipeline', 'Native multimodal model', 'Tool layer', 'Grounding + citations', 'Safety classifiers (in + out)', 'Output renderer (text + visual)'] },
  { id: 'G', title: 'Autonomous workflow agent', when: 'Goal-driven multi-step task system.',         blocks: ['Goal + success criterion', 'Planner', 'Tool registry + permissions', 'Memory + state store', 'Execution sandbox', 'Evaluator + verifier', 'Human approval', 'Rollback path'] }
];

/* Strategic takeaways — five-line stack framing */
var MODELS_TAKEAWAYS = [
  'Energy decides whether compute can exist.',
  'Chips decide how efficiently electricity becomes computation.',
  'Infrastructure decides whether computation becomes a reliable system.',
  'Models decide what the system can understand, generate, reason about and act on.',
  'Applications decide where the capability becomes useful.'
];

/* ============================================
   PROMPT-TO-PRODUCT-OUTCOME FLOW (top-of-section, after intel)
   ============================================ */
var MODELS_OUTCOME_FLOW = [
  { h: 'User goal',           d: 'A clear thing the user is trying to accomplish in this product.' },
  { h: 'Task classification', d: 'Quick sort: easy chat, hard reasoning, code, retrieval, action, voice.' },
  { h: 'Model router',        d: 'Picks a tier: small / medium / specialist / frontier / reasoning / human.' },
  { h: 'Context builder',     d: 'Assembles system prompt, user context, retrieved chunks, memory, examples.' },
  { h: 'Retrieval / memory / tools', d: 'Pulls knowledge, looks up state, calls APIs / search / code execution.' },
  { h: 'Selected model',      d: 'The right model for the routed tier — possibly more than one per request.' },
  { h: 'Reasoning or fast response', d: 'Either a normal forward pass or an extended-thinking path.' },
  { h: 'Structured output',   d: 'JSON / schema / typed object the surrounding system can consume.' },
  { h: 'Validation',          d: 'Schema check, citation alignment, math recompute, business-rule gate.' },
  { h: 'Safety check',        d: 'Output classifier, content + IP filters, action-level approval gate.' },
  { h: 'User-facing answer / action', d: 'Streamed response, tool action, document, voice reply.' },
  { h: 'Feedback',            d: 'Thumbs · edit · accept · escalate · time-on-task.' },
  { h: 'Evaluation log',      d: 'Inputs, model, version, latency, cost, citations, outcome — all stored.' },
  { h: 'Improvement loop',    d: 'Eval set updates → routing tweaks → prompt + tool fixes → next release.' }
];

/* ============================================
   MODEL SYSTEM PATTERNS — seven canonical shapes
   ============================================ */
var MODELS_SYSTEM_PATTERNS = [
  {
    id: 'A', name: 'Simple chatbot',
    blocks: ['One model', 'Prompt template', 'Basic logging'],
    best: 'Low-risk Q&A or simple assistant UX.',
    breaks: 'When facts, workflow or reliability matter.'
  },
  {
    id: 'B', name: 'RAG assistant',
    blocks: ['Retriever', 'Reranker', 'Model with citations', 'Eval + feedback'],
    best: 'Company docs, policies, research, internal knowledge.',
    breaks: 'When retrieval quality is poor — bad chunks beat any model.'
  },
  {
    id: 'C', name: 'Model router',
    blocks: ['Small model for easy', 'Frontier for hard', 'Specialist for OCR / embed / speech / image / code'],
    best: 'Cost + quality balance across mixed traffic.',
    breaks: 'When routing is poorly evaluated or routes silently regress.'
  },
  {
    id: 'D', name: 'Agentic workflow',
    blocks: ['Planner', 'Tool registry', 'Memory', 'Permissions', 'Evaluator + audit'],
    best: 'Multi-step tasks: browser, computer-use, code, ops.',
    breaks: 'When goals, tool permissions or stopping criteria are weak.'
  },
  {
    id: 'E', name: 'Human-in-the-loop',
    blocks: ['Model drafts or analyses', 'Human reviews high-risk outputs', 'Audit log + rollback'],
    best: 'Legal, medical, finance, compliance, enterprise workflows.',
    breaks: 'When the review process is unclear or reviewers are saturated.'
  },
  {
    id: 'F', name: 'Fine-tuned specialist',
    blocks: ['Base model', 'Domain-tuned weights', 'Per-task system prompt', 'Regression evals'],
    best: 'Repeatable structured behaviour, narrow style, format consistency.',
    breaks: 'When used as a factual database — fine-tuning does not memorise reliably.'
  },
  {
    id: 'G', name: 'Local / private model',
    blocks: ['Self-hosted or on-device', 'Quantised weights', 'Local retrieval', 'Local audit'],
    best: 'Privacy, latency, offline, sovereignty.',
    breaks: 'When the team underestimates infra + serving + evaluation cost.'
  }
];

/* ============================================
   RAG / FT / LONG CONTEXT / MEMORY / TOOLS — decision tree
   ============================================ */
var MODELS_DECISION_TREE = {
  headline: 'RAG vs fine-tuning vs long context vs memory vs tools — a decision tree',
  steps: [
    { q: 'Does the model need changing or up-to-date facts?',                    a: 'Use RAG or tool / search.' },
    { q: 'Does it need a different style, format or repeated behaviour?',         a: 'Use fine-tuning or few-shot prompting.' },
    { q: 'Does it need to inspect a large document once?',                        a: 'Use long context.' },
    { q: 'Does it need to remember user preferences across sessions?',            a: 'Use memory.' },
    { q: 'Does it need to take action or reach live systems?',                    a: 'Use tools / APIs.' },
    { q: 'Is the task high-risk (legal, medical, money, compliance, security)?', a: 'Add human review, validation, audit logs and restricted permissions.' }
  ],
  punchline: 'Fine-tuning is usually not the first answer for factual knowledge. Retrieval, tools and evaluation usually come first.'
};

/* ============================================
   MODEL ROUTING LADDER
   ============================================ */
var MODELS_ROUTING_LADDER = [
  { lvl: '01', name: 'Rules / deterministic code',  d: 'Regex, lookup tables, classical ML — fastest + cheapest path. Use first whenever it works.' },
  { lvl: '02', name: 'Small model',                  d: 'Cheap, fast routing + classification + simple summarisation.' },
  { lvl: '03', name: 'Medium model',                 d: 'Default for most user requests. Mid-tier cost + latency.' },
  { lvl: '04', name: 'Specialist model',             d: 'Embeddings, reranker, OCR, speech, vision, code-tuned. Picked by intent, not size.' },
  { lvl: '05', name: 'Frontier model',               d: 'Premium reasoning + agent control on hard requests. Reserved for tasks that earn the cost.' },
  { lvl: '06', name: 'Reasoning model',              d: 'Extended-thinking budget for math, coding, planning, deep analysis. Pay only when it pays back.' },
  { lvl: '07', name: 'Human review',                 d: 'For high-stakes outputs: legal, medical, financial, compliance, irreversible actions.' }
];
var MODELS_ROUTING_ESCALATE = [
  'Model uncertainty is high (low-confidence logits, refusal, contradictory tools).',
  'Task is high-risk (money, health, law, compliance, reputation).',
  'User is paying for premium quality on this request.',
  'Previous tier failed validation or schema check.',
  'Answer needs deep, multi-step reasoning.',
  'Output affects irreversible actions, regulated domains or production data.'
];

/* ============================================
   REASONING — when-helps / when-wastes + 4-column comparison
   ============================================ */
var MODELS_REASONING_HELPS = [
  'Complex coding (multi-file, repo-scale, debugging).',
  'Math problems beyond pattern match.',
  'Multi-step planning + decomposition.',
  'Research synthesis across many sources.',
  'Agent workflows with tool chains.',
  'Legal / policy reasoning with cited sources.',
  'Financial analysis with edge cases.',
  'Scientific reasoning with verification.'
];
var MODELS_REASONING_WASTES = [
  'Simple summarisation.',
  'Classification.',
  'Extraction.',
  'FAQ answers from a small grounded corpus.',
  'Short copywriting.',
  'High-volume low-margin tasks.',
  'Latency-sensitive chat where simple models work.'
];
var MODELS_REASONING_TIERS = [
  { axis: 'Best for',         fast: 'High-volume chat, simple tasks.',                      reason: 'Math, deep coding, planning, multi-step analysis.',                tool: 'Reasoning that needs live data, code execution or retrieval.',  human: 'High-stakes outputs and irreversible actions.' },
  { axis: 'Cost',             fast: 'Cheap.',                                              reason: 'Expensive (reasoning tokens dominate).',                            tool: 'Reasoning cost + tool / retrieval cost.',                        human: 'Highest — human time + slower throughput.' },
  { axis: 'Latency',          fast: 'Sub-second to a few seconds.',                        reason: 'Tens of seconds to minutes on the hardest tasks.',                   tool: 'Reasoning + tool round-trip latency.',                            human: 'Minutes to hours.' },
  { axis: 'Risk',             fast: 'Confident wrong answers on hard tasks.',              reason: 'Reasons from bad assumptions if context is wrong.',                  tool: 'Tool errors propagate; verify each tool output.',                  human: 'Reviewer fatigue, inconsistency, escalation backlog.' },
  { axis: 'Failure mode',     fast: 'Underthinks; misses subtle steps.',                   reason: 'Overthinks simple problems; wastes tokens.',                         tool: 'Hallucinated tool results; bad arg passing.',                       human: 'Bottleneck; queue backlog.' },
  { axis: 'Product use case', fast: 'Default for most B2C + B2B chat.',                    reason: 'Premium tier, hard tasks, agent loops.',                             tool: 'Research, analytics, code execution, calc-heavy reasoning.',         human: 'Compliance, legal, medical, regulated outputs.' }
];

/* ============================================
   EVALUATION HARNESS
   ============================================ */
var MODELS_EVAL_HARNESS = {
  pipeline: [
    { h: 'Define task',                d: 'What does success look like? Precise input → expected output → grading rule.' },
    { h: 'Collect real examples',      d: 'From production traces, user logs, support tickets, support transcripts.' },
    { h: 'Build golden dataset',       d: 'Curated, expert-graded; locked + versioned; reused across model candidates.' },
    { h: 'Define pass / fail',         d: 'Exact-match, rubric, cite-aligned, schema-valid, task-completed, etc.' },
    { h: 'Run model candidates',       d: 'Same dataset, same prompts, same harness — change one variable at a time.' },
    { h: 'Compare quality + cost + latency', d: 'Tokens, $/task, p50 / p95 / p99, hallucination rate, citation rate.' },
    { h: 'Human review',               d: 'Expert pairwise comparisons + qualitative pass on tricky tasks.' },
    { h: 'Red-team',                   d: 'Adversarial prompts + safety + abuse cases; jailbreak suite.' },
    { h: 'Production A/B',             d: 'Live traffic comparison; the closest thing to "production truth".' },
    { h: 'Monitor failures',           d: 'Telemetry, drift, escalation, bad-citation rate, refusal rate.' },
    { h: 'Update eval set',            d: 'New failure → new golden example → next regression cycle.' }
  ],
  types: [
    { h: 'Exact match',           d: 'Substring or canonical-form comparison; for extraction + structured output.' },
    { h: 'Rubric grading',        d: 'Fixed checklist scored by humans or calibrated LLM-as-judge.' },
    { h: 'Human preference',      d: 'Pairwise comparison; the closest thing to "which one feels better".' },
    { h: 'Citation accuracy',     d: '% of answers whose citations actually support the claim.' },
    { h: 'Hallucination rate',    d: '% of unsupported claims relative to grounded sources.' },
    { h: 'Task completion',       d: 'For agents — did the goal get achieved end-to-end?' },
    { h: 'Tool success rate',     d: '% of tool calls that succeeded with correct args + parsed result.' },
    { h: 'Latency',               d: 'TTFT + p50 / p95 / p99 across the eval set.' },
    { h: 'Cost / successful task', d: 'Dollars spent per task that actually shipped.' },
    { h: 'Safety failure rate',   d: '% of cases that violate policy under red-team prompts.' },
    { h: 'User acceptance rate',  d: '% of outputs the user accepted, edited or thumbsed up.' }
  ],
  minViable: [
    { n: 20, label: 'Easy examples',           d: 'Sanity baseline: any reasonable model should pass.' },
    { n: 20, label: 'Normal examples',         d: 'The bulk of real traffic.' },
    { n: 20, label: 'Hard examples',           d: 'Long context, multi-step, ambiguous.' },
    { n: 20, label: 'Adversarial examples',    d: 'Prompt injection, tricky phrasing, near-policy boundaries.' },
    { n: 20, label: 'Real user examples',      d: 'Sampled from production traces (anonymised).' },
    { n: 10, label: 'Safety-sensitive examples', d: 'Sensitive topics, refusal expectations, jailbreak patterns.' }
  ],
  punchline: 'A model decision without an eval set is just a vibe.'
};

/* ============================================
   MODEL OBSERVABILITY — production control room
   ============================================ */
var MODELS_OBSERVABILITY = {
  headline: 'You cannot improve what you cannot observe.',
  metrics: [
    { h: 'Request volume',        d: 'Per-tenant + global RPS. Drives autoscaling + capacity decisions.' },
    { h: 'Input tokens',          d: 'Per-request + aggregate. Long-prompt drift = cost drift.' },
    { h: 'Output tokens',         d: 'Per-request + aggregate. Verbose models = expensive models.' },
    { h: 'Reasoning tokens',      d: 'Hidden / extended-thinking budget. Watch this independently.' },
    { h: 'Latency',               d: 'p50 / p95 / p99 across the model fleet.' },
    { h: 'Time to first token',   d: 'TTFT — the user-visible perceived speed.' },
    { h: 'Cost / request',        d: 'Per-model + per-route + per-tenant. The economics signal.' },
    { h: 'Cost / successful task', d: 'The metric that matters more than raw $/token.' },
    { h: 'Fallback rate',         d: '% of requests routed to a backup model / provider.' },
    { h: 'Tool-call success rate', d: '% of tool calls that returned a valid, parseable result.' },
    { h: 'Retrieval hit rate',    d: '% of RAG queries that returned a relevant chunk.' },
    { h: 'Citation accuracy',     d: '% of cited answers whose citations actually support the claim.' },
    { h: 'Hallucination reports', d: 'User flags + automated detector counts over time.' },
    { h: 'User thumbs up / down', d: 'The cheapest preference signal in production.' },
    { h: 'Safety filter rate',    d: 'Inputs blocked + outputs rewritten + approvals required.' },
    { h: 'Human escalation rate', d: '% of cases that reached a human reviewer.' },
    { h: 'Model version',         d: 'Pinned per request. Enables incident replay + regression tracing.' },
    { h: 'Prompt version',        d: 'Pinned per request. Enables prompt-level A/B + rollback.' }
  ],
  punchline: 'Model quality must be logged, measured and reviewed. Otherwise you are flying blind on the most expensive part of the product.'
};

/* ============================================
   BAD MODEL SYSTEM PATTERNS — anti-pattern catalogue
   ============================================ */
var MODELS_BAD_PATTERNS = [
  { h: 'One giant model for every task',         d: 'Frontier reasoning model on simple chat. Cost + latency tank without lifting quality on most traffic.' },
  { h: 'No evaluation dataset',                  d: 'Vibes-only deploys. Regressions ship; you find out from support tickets.' },
  { h: 'No model routing',                       d: 'Every request hits the same tier. Half are wasted; the other half are underserved.' },
  { h: 'No fallback model or provider',          d: 'Single-vendor outage = full outage. No graceful degradation path.' },
  { h: 'No source grounding',                    d: 'Confident answers with no citations. Users find the hallucinations before you do.' },
  { h: 'No schema validation on structured output', d: 'JSON parse errors in production. Retry-on-failure is not a strategy if you never check.' },
  { h: 'No human review for high-risk actions',  d: 'Money / law / health / compliance with no approval gate. One bad output = real-world harm.' },
  { h: 'Fine-tuning before testing RAG',          d: 'Expensive training run for a problem that retrieval would have solved.' },
  { h: 'Long context as a dumping ground',       d: '200k tokens stuffed in; the model misses the one chunk that mattered.' },
  { h: 'Agents with too many tools',             d: 'Confused planners; wrong tool calls; impossible-to-debug traces.' },
  { h: 'No permissioning for tools',             d: 'Tool credentials grant more than the agent ever needed. Blast radius is huge.' },
  { h: 'No prompt / model versioning',           d: 'You cannot reproduce yesterday\'s output. Bug reports become unanswerable.' },
  { h: 'No cost tracking',                       d: 'Cost explosions detected by finance, not engineering.' },
  { h: 'No latency tracking',                    d: 'Tail latency invisible until users churn.' },
  { h: 'No red-team testing',                    d: 'Found by users + journalists, not by the team.' },
  { h: 'Choosing models from leaderboards only', d: 'Generic ranking + adversarial test sets ≠ your workload. Test on your data.' },
  { h: 'Building with hype instead of workload', d: 'Reasoning, multimodal, agents, MCP… picked because they are trending, not because the product needs them.' }
];

/* ============================================
   MODEL MATURITY MODEL — Levels 0–5
   ============================================ */
var MODELS_MATURITY = [
  { lvl: '0', name: 'Demo',                d: 'Single prompt, manual testing, no evals, no logs.',
                                            tells: 'No deploys. No version pins. No telemetry.' },
  { lvl: '1', name: 'Prototype',           d: 'Prompt template + API call + basic app + manual feedback.',
                                            tells: 'Logs exist. Deploys are manual. Versioning is "ask the engineer".' },
  { lvl: '2', name: 'Early production',    d: 'Documented model choice + logging + basic eval set + fallback path + cost monitoring.',
                                            tells: 'You can answer "what model + prompt served that request?".' },
  { lvl: '3', name: 'Reliable product',    d: 'RAG / tools where needed, model routing, versioned prompts, evaluation pipeline, monitoring, human review on risky cases.',
                                            tells: 'You have a paging rotation; you have rolled back at least once.' },
  { lvl: '4', name: 'Model platform',      d: 'Reusable model gateway + standardised evals + safety controls + observability + multi-model routing + automated regression tests.',
                                            tells: 'Multiple teams ship on the same internal model gateway.' },
  { lvl: '5', name: 'Model operating system', d: 'Continuous feedback loop, adaptive routing, task-specific evals, cost-quality optimisation, governance, deployment discipline, human + automated review loops.',
                                            tells: 'Routing tunes itself on production data; regressions are caught before users see them.' }
];

/* ============================================
   FRONTIER LANDSCAPE — by ROLE, not vendor
   ============================================ */
var MODELS_LANDSCAPE_BY_ROLE = [
  { id: 'frontier',  h: 'Frontier reasoning + general intelligence',  d: 'The cutting edge of what models can do today.',                          fits: 'Hard agent tasks, math, deep coding, novel reasoning.',                      tradeoff: 'Cost + latency are the highest in the stack.',                                 evaluate: 'Hard reasoning + agent + adversarial set, on your workload.' },
  { id: 'enterprise', h: 'Enterprise-safe assistants',                 d: 'Frontier-tier with stronger safety, audit and contract guarantees.',     fits: 'Regulated industries, large companies, compliance-bound deployments.',         tradeoff: 'Slightly behind absolute frontier on raw capability.',                          evaluate: 'Safety + audit + contractual SLAs alongside capability.' },
  { id: 'open',      h: 'Open-weight ecosystems',                       d: 'Self-host, customise, run locally; you own the safety surface.',          fits: 'Predictable volume, privacy, sovereignty, customisation.',                      tradeoff: 'Deployment, ops + eval responsibility moves to you.',                            evaluate: 'TCO at your real volume; capability gap on your tasks; safety eval coverage.' },
  { id: 'coding',    h: 'Coding models',                                 d: 'Tuned for repo, diff, debugging + agentic dev.',                          fits: 'Code assistants, refactor agents, repo-scale tools.',                          tradeoff: 'Less general; can underperform frontier on non-code tasks.',                    evaluate: 'Test pass rate · diff acceptance · review time saved.' },
  { id: 'multimodal', h: 'Multimodal models',                            d: 'Text + image + audio + video + UI screenshots in one model.',             fits: 'Document, UI, perception + cross-modal reasoning.',                            tradeoff: 'Performance varies sharply by modality; charts + spatial reasoning still hard.', evaluate: 'Per-modality eval + grounding accuracy.' },
  { id: 'voice',     h: 'Voice / audio models',                          d: 'STT, TTS, realtime voice agents, audio understanding.',                   fits: 'Call centres, meetings, agents, accessibility.',                              tradeoff: 'Latency-sensitive; quality varies by accent + noise.',                          evaluate: 'WER, TTFB, interruption handling, accent + noise robustness.' },
  { id: 'image-video', h: 'Image / video generation',                    d: 'Diffusion or autoregressive generation of pixels + frames.',              fits: 'Creative tools, design, marketing, video, simulation.',                        tradeoff: 'Controllability + IP risk + content-policy nuance.',                            evaluate: 'Acceptance rate · prompt adherence · safety rejection · IP filter.' },
  { id: 'embed',     h: 'Embedding + reranker models',                  d: 'Turn data into vectors + reorder retrieved results.',                     fits: 'Search, RAG, recommendations, dedup, clustering.',                              tradeoff: 'Domain fit drives quality more than headline benchmarks.',                       evaluate: 'Top-k recall + reranker uplift on your corpus.' },
  { id: 'edge',      h: 'Small / on-device models',                      d: 'Run on phones, laptops, browsers, cars.',                                 fits: 'Privacy, latency, offline, user-owned compute.',                                tradeoff: 'Smaller capability envelope; OTA + battery + thermals.',                         evaluate: 'On-device latency · battery · OTA + rollback story.' },
  { id: 'agent',     h: 'Agent / computer-use models',                   d: 'Tuned for tool use, browser, computer, planning.',                       fits: 'Browser agents, ops automation, computer-use workflows.',                       tradeoff: 'Higher failure modes (loops, wrong tool, prompt injection).',                    evaluate: 'Task completion · steps-to-goal · safe-action rate.' }
];

/* ============================================
   CONCRETE PRODUCT ARCHITECTURE EXAMPLES — flow tracks
   ============================================ */
var MODELS_ARCH_EXAMPLES = [
  { id: 'A', h: 'RAG knowledge base',
    flow: ['Documents', 'Chunking', 'Embeddings', 'Vector DB', 'Reranker', 'Model', 'Citations', 'Feedback', 'Evals'] },
  { id: 'B', h: 'Sales assistant',
    flow: ['CRM context', 'Lead profile', 'Message generator', 'Tone guardrails', 'Human review', 'Send + log result'] },
  { id: 'C', h: 'Coding agent',
    flow: ['Repo index', 'Planner', 'Code model', 'Sandbox', 'Tests', 'Diff', 'Human approval', 'Merge'] },
  { id: 'D', h: 'Compliance analyst',
    flow: ['Policy docs', 'Retrieval', 'Compliance reasoning model', 'Citation validation', 'Human approval', 'Audit log'] },
  { id: 'E', h: 'Voice agent',
    flow: ['Speech-to-text', 'Dialogue manager', 'LLM + tool calls', 'Text-to-speech', 'Interruption handling', 'Call summary'] },
  { id: 'F', h: 'Research assistant',
    flow: ['Search', 'Source ranking', 'Extraction', 'Synthesis', 'Citation check', 'Uncertainty note', 'Report'] }
];

/* ============================================
   ECONOMICS INTERPRETATION — post-calculator commentary
   ============================================ */
var MODELS_ECON_INTERPRET = {
  headline: 'After the calculator: what is actually driving cost?',
  questions: [
    { q: 'What drives cost most?',                              d: 'Compare input × in-price vs output × out-price. Often output dominates because of long generations.' },
    { q: 'Is this workload input-heavy or output-heavy?',        d: 'Input-heavy (RAG, doc analysis) → caching helps. Output-heavy (writing, reasoning) → smaller model or better stop conditions help.' },
    { q: 'Would caching help?',                                  d: 'If the same prefix recurs (system prompt, knowledge base) — prompt caching can cut input cost 30–80%.' },
    { q: 'Would routing help?',                                  d: 'If only ~10% of requests need frontier reasoning, routing the rest to a smaller model is the highest-leverage change.' },
    { q: 'Would a smaller model work?',                          d: 'Run an A/B on user-graded outputs at the smaller tier. Most chat traffic is over-served.' },
    { q: 'Is human review the biggest cost?',                    d: 'If review % > 5% and DAU is non-trivial, review costs dominate. Tighten review criteria + add automated pre-checks.' },
    { q: 'Is latency target forcing expensive serving?',          d: 'Aggressive TTFT can pin you to a premium tier. Decide if the user actually feels the difference at p95.' }
  ],
  punchline: 'Cost per token matters. Cost per <em>successful task</em> matters more.'
};

/* ============================================
   SAFETY AS SYSTEM DESIGN — 9 control surfaces
   ============================================ */
var MODELS_SAFETY_SYSTEM = {
  headline: 'Safe AI is not just a polite model. It is a constrained, observable, testable system.',
  surfaces: [
    { h: 'Input safety',      d: 'Prompt-injection filters, content classifiers, tenant rate limits.' },
    { h: 'Output safety',     d: 'Output classifiers, policy checks, refusal calibration, citation validation.' },
    { h: 'Tool safety',       d: 'Per-tool permissions, allow-lists, sandboxing, dry-run mode for risky actions.' },
    { h: 'Data privacy',      d: 'PII redaction in + out, no-train flags, tenant isolation, regional data residency.' },
    { h: 'Retrieval safety',  d: 'Source grounding, citation verification, retrieved-content filters, freshness checks.' },
    { h: 'Agent safety',      d: 'Step budgets, success criteria, blast-radius limits, irreversible-action gates.' },
    { h: 'Human approval',    d: 'Approval queues for high-risk outputs / actions; reviewer training + load balancing.' },
    { h: 'Logging + audit',   d: 'Per-request model + prompt + tool versions; replayable traces; regulator-ready reports.' },
    { h: 'Incident response', d: 'Paging, kill-switches, rollback, status comms, blameless postmortems.' }
  ],
  controls: [
    'Role-based access on the model gateway.',
    'Tool permission levels (read · write · admin).',
    'Sandboxing for code execution + browser use.',
    'Approval gates for irreversible actions.',
    'Source citation required + verified.',
    'Schema validation on structured output.',
    'Restricted action allow-lists per agent.',
    'Capability + safety evals on every release.',
    'Red-team suites updated each cycle.',
    'Drift monitoring + escalation playbooks.',
    'One-click rollback to last-known-good.'
  ]
};

/* Sources, grouped */
var MODELS_SOURCES_GROUPED = [
  {
    group: 'Frontier closed-model docs',
    items: [
      { label: 'OpenAI — model docs + system cards',          url: 'https://platform.openai.com/docs/models' },
      { label: 'Anthropic Claude — docs + system cards',       url: 'https://docs.anthropic.com/' },
      { label: 'Google Gemini / Vertex AI — docs',             url: 'https://ai.google.dev/' },
      { label: 'xAI — docs',                                   url: 'https://docs.x.ai/' },
      { label: 'Mistral — docs',                               url: 'https://docs.mistral.ai/' }
    ]
  },
  {
    group: 'Open-weight ecosystems',
    items: [
      { label: 'Meta Llama — official model pages + cards',    url: 'https://llama.meta.com/' },
      { label: 'Qwen — official docs + Hugging Face',          url: 'https://github.com/QwenLM/Qwen' },
      { label: 'DeepSeek — technical reports + GitHub',        url: 'https://github.com/deepseek-ai' },
      { label: 'Google Gemma — model pages',                   url: 'https://ai.google.dev/gemma' },
      { label: 'Hugging Face — model cards + Open LLM leaderboard', url: 'https://huggingface.co/' }
    ]
  },
  {
    group: 'Foundational papers',
    items: [
      { label: 'Attention Is All You Need (Vaswani et al., 2017)', url: 'https://arxiv.org/abs/1706.03762' },
      { label: 'Diffusion models (Ho et al., 2020 — DDPM)',         url: 'https://arxiv.org/abs/2006.11239' },
      { label: 'RLHF (Christiano / Ouyang et al.)',                  url: 'https://arxiv.org/abs/2203.02155' },
      { label: 'Retrieval-augmented generation (Lewis et al., 2020)', url: 'https://arxiv.org/abs/2005.11401' },
      { label: 'DPO (Rafailov et al., 2023)',                        url: 'https://arxiv.org/abs/2305.18290' }
    ]
  },
  {
    group: 'Benchmarks + measurement',
    items: [
      { label: 'MLCommons — MLPerf training + inference + AILuminate', url: 'https://mlcommons.org/benchmarks/' },
      { label: 'Stanford AI Index',                                     url: 'https://aiindex.stanford.edu/' },
      { label: 'METR — time-horizon evaluations',                       url: 'https://metr.org/' },
      { label: 'LMSYS Chatbot Arena (use carefully)',                   url: 'https://lmarena.ai/' }
    ]
  },
  {
    group: 'Agents + tool use',
    items: [
      { label: 'OpenAI function calling + tools docs',          url: 'https://platform.openai.com/docs/guides/function-calling' },
      { label: 'Anthropic tool use docs',                       url: 'https://docs.anthropic.com/en/docs/build-with-claude/tool-use' },
      { label: 'Google function calling docs',                  url: 'https://ai.google.dev/gemini-api/docs/function-calling' }
    ]
  }
];
