/* ============================================
   THE APPLIED AI ATLAS — Data
   Source-backed map of where AI is deployed across domains.

   Confidence vocabulary:
     sourced          — direct citation in SOURCE_LIBRARY
     inferred         — combined from multiple credible accounts; not a single citation
     market context   — reflects industry consensus / public reporting; vendor-mix may move
     forward-looking  — anticipated based on roadmap / pre-commercial signals
     needsVerification — placeholder; do not present as fact

   Maturity vocabulary:
     production        — broadly deployed in commercial or clinical use
     early production  — narrow real deployments; not yet commodity
     research frontier — published methods; not yet productionised at scale
     experimental      — pilot or demo only
     speculative       — claimed; not credibly demonstrated
   ============================================ */

/* ============================================
   APPLIED_CATEGORIES
   Seven top-level groupings that organise the domain map.
   ============================================ */
var APPLIED_CATEGORIES = [
  {
    id: "life-sciences",
    label: "Life Sciences & Healthcare",
    color: "#48BB78",
    bg: "rgba(72,187,120,0.10)",
    description: "Where AI meets cells, patients and clinical workflows. Strongest where input is digital and pattern-heavy; slowest where validation, liability or biology gate deployment."
  },
  {
    id: "finance",
    label: "Finance & Economics",
    color: "#63B3ED",
    bg: "rgba(99,179,237,0.10)",
    description: "Pattern recognition on tabular and time-series data, dressed in regulation. Mature where the unit of value is small and the feedback loop is fast; slower where capital and trust matter."
  },
  {
    id: "enterprise",
    label: "Enterprise & Knowledge Work",
    color: "#9F7AEA",
    bg: "rgba(159,122,234,0.10)",
    description: "AI as a productivity layer across software, legal, education, sales and operations. The breakthroughs are often retrieval, agents and copilots — not new architectures."
  },
  {
    id: "physical",
    label: "Physical World & Industry",
    color: "#F6AD55",
    bg: "rgba(246,173,85,0.10)",
    description: "Robotics, autonomous systems, factories, grids, fields and roads. Where bits meet atoms, sim-to-real, embodiment and safety constraints dominate."
  },
  {
    id: "science",
    label: "Science & Engineering",
    color: "#5EEAD4",
    bg: "rgba(94,234,212,0.10)",
    description: "AI as a scientific instrument: surrogate models, neural operators, generative discovery. Where wet-lab or physical-experiment validation is the gate, AI proposes — experiments decide."
  },
  {
    id: "media",
    label: "Media & Consumer",
    color: "#F687B3",
    bg: "rgba(246,135,179,0.10)",
    description: "Generative models meeting creative workflows, distribution and consumer attention. Furthest along in commodification of generative tools; furthest behind in trust and provenance."
  },
  {
    id: "government",
    label: "Government & Strategic",
    color: "#FC8181",
    bg: "rgba(252,129,129,0.10)",
    description: "Public-sector services, defence, intelligence and sovereign infrastructure. Highest stakes, slowest cycles, narrowest margins for error. Demands cautious framing."
  }
];

/* ============================================
   AI_DOMAINS (48)
   The core: each domain entry teaches a thesis, lists architectures,
   workflows, papers, companies, bottlenecks, hype-vs-real, opportunities,
   and a common misunderstanding. Confidence and maturity tagged per entry.
   ============================================ */
var AI_DOMAINS = [

  /* ── A. LIFE SCIENCES & HEALTHCARE ── */
  {
    id: "drug-discovery",
    name: "Biology & Drug Discovery",
    category: "life-sciences",
    thesis: "AI is turning biological data into searchable, generative and simulation-driven discovery, but wet-lab validation remains the hard gate.",
    oneLineTakeaway: "AI can propose biology; experiments still decide reality.",
    maturity: "Early production",
    confidence: "sourced",
    whatAIIsUsedFor: ["protein structure prediction", "virtual screening", "molecule generation", "target identification", "binding affinity prediction", "lab-workflow automation", "active-learning around assays"],
    mainArchitectures: ["protein language models", "graph neural networks", "diffusion models", "equivariant neural networks", "multimodal foundation models", "active learning"],
    keyModels: ["AlphaFold 2", "AlphaFold 3", "ESM-2 / ESMFold", "RoseTTAFold", "DiffDock", "BioNeMo (NVIDIA platform / framework, not a single model)"],
    keyDatasets: ["Protein Data Bank (PDB)", "UniProt", "PubChem", "ChEMBL"],
    workflow: ["biological data + targets", "representation learning", "candidate generation (proteins / molecules)", "in-silico ranking", "wet-lab validation", "lead optimisation", "preclinical / clinical translation"],
    bottlenecks: ["wet-lab validation throughput", "biological data quality and bias", "clinical translation", "regulatory approval", "evaluation beyond benchmarks"],
    companies: ["Isomorphic Labs", "Recursion", "Insilico Medicine", "Atomwise", "Schr&ouml;dinger", "Generate Biomedicines", "Iambic Therapeutics", "BioNeMo (NVIDIA)", "BenevolentAI", "AbCellera"],
    founderOpportunities: ["wet-lab automation and scheduling", "specialised biological data infrastructure", "evaluation harnesses for generated molecules", "domain-specific assay design copilots"],
    hypeVsReal: {
      real: ["structure prediction at high accuracy", "virtual screening acceleration", "lab-workflow assistance"],
      overhyped: ["AI alone replacing wet-lab validation", "overnight drug discovery without clinical risk"]
    },
    commonMisunderstanding: "A generated molecule is not a drug. AI proposes candidates; biology, chemistry, pharmacokinetics, safety and clinical trials decide whether they work.",
    relatedQuestions: ["q-bio-validation", "q-bio-alphafold", "q-bio-diffusion-molecules", "q-bio-vs-finance"],
    sourceIds: ["paper-alphafold2", "paper-alphafold3", "paper-esm2", "paper-rosettafold", "src-pdb", "src-uniprot"]
  },

  {
    id: "genomics",
    name: "Genomics",
    category: "life-sciences",
    thesis: "Genomic data is sequence data — a natural fit for transformer-style models, but interpretation, populational bias and rare-variant handling still gate clinical use.",
    oneLineTakeaway: "Sequencing is solved; understanding is not.",
    maturity: "Early production",
    confidence: "sourced",
    whatAIIsUsedFor: ["variant interpretation", "splice prediction", "regulatory element prediction", "disease association", "single-cell analysis", "polygenic risk scoring"],
    mainArchitectures: ["DNA / RNA language models", "transformers", "graph neural networks", "convolutional neural networks", "multimodal models"],
    keyModels: ["Enformer", "DNABERT", "SpliceAI", "AlphaMissense"],
    keyDatasets: ["1000 Genomes", "UK Biobank (controlled access)", "GTEx", "ENCODE", "gnomAD"],
    workflow: ["sequencing", "variant calling", "annotation + interpretation", "disease association", "clinical decision support"],
    bottlenecks: ["under-representation of non-European cohorts", "interpretation of variants of uncertain significance", "clinical actionability", "privacy and consent", "regulatory pathway"],
    companies: ["Illumina", "Tempus", "23andMe", "Color", "Nucleus Genomics", "DeepGenomics", "Verily"],
    founderOpportunities: ["variant interpretation tooling", "clinical-grade pipelines for under-served cohorts", "population-aware polygenic scores", "consent and privacy infrastructure"],
    hypeVsReal: {
      real: ["splice and regulatory prediction", "variant prioritisation in research", "single-cell analysis"],
      overhyped: ["consumer genomics replacing clinical workups", "population-scale precision medicine without diversified data"]
    },
    commonMisunderstanding: "A predicted variant effect is not a clinical diagnosis. Most variants of uncertain significance remain uncertain; AI helps prioritise, not adjudicate.",
    relatedQuestions: ["q-genomics-overview", "q-genomics-bias"],
    sourceIds: ["paper-spliceai", "paper-alphamissense", "src-uk-biobank", "src-gnomad"]
  },

  {
    id: "protein-design",
    name: "Protein Design",
    category: "life-sciences",
    thesis: "Generative protein design is the most concrete demonstration of AI as a creative scientific tool, with measurable success on binders, enzymes and therapeutic candidates.",
    oneLineTakeaway: "We can now design proteins that work in the lab.",
    maturity: "Early production",
    confidence: "sourced",
    whatAIIsUsedFor: ["de novo binder design", "enzyme design", "antibody design", "therapeutic protein optimisation", "structural inverse-folding"],
    mainArchitectures: ["protein language models", "diffusion models", "equivariant neural networks", "structure-conditioned transformers", "inverse-folding models"],
    keyModels: ["RFdiffusion", "ProteinMPNN", "ESM-2", "Chroma"],
    keyDatasets: ["PDB", "UniProt"],
    workflow: ["specify target / function", "structural backbone generation", "sequence design (inverse folding)", "in-silico filtering", "wet-lab expression and assay", "iterative refinement"],
    bottlenecks: ["expression and folding success rates", "wet-lab throughput", "evaluation on novel functions", "scaling beyond known structural folds"],
    companies: ["Generate Biomedicines", "Cradle", "Profluent", "Isomorphic Labs", "EvolutionaryScale", "Cyrus Biotechnology", "Inceptive"],
    founderOpportunities: ["high-throughput protein expression", "function-specific evaluation suites", "design-build-test-learn platforms"],
    hypeVsReal: {
      real: ["binder and enzyme design with reported lab confirmation", "rapid antibody candidate generation"],
      overhyped: ["AI replacing biological intuition", "instant therapeutic-grade proteins without wet-lab validation"]
    },
    commonMisunderstanding: "A designed sequence is not a working protein. Many designs fail to express, fold or function until iterated in the lab.",
    relatedQuestions: ["q-protein-design", "q-bio-validation"],
    sourceIds: ["paper-rfdiffusion", "paper-proteinmpnn", "paper-esm2"]
  },

  {
    id: "clinical-medicine",
    name: "Clinical Medicine",
    category: "life-sciences",
    thesis: "Clinical AI is most mature where the input is digital and pattern-heavy; deployment is gated as much by validation, liability and workflow as by model quality.",
    oneLineTakeaway: "Where data is already digital, AI helps; where decisions change responsibility, deployment is slow.",
    maturity: "Early production",
    confidence: "sourced",
    whatAIIsUsedFor: ["triage", "differential diagnosis support", "discharge summarisation", "patient-question answering", "early warning scores", "decision support"],
    mainArchitectures: ["clinical LLMs", "multimodal foundation models", "retrieval-augmented generation", "tabular models", "transformer-based EHR models"],
    keyModels: ["Med-PaLM", "Med-PaLM 2", "Clinical Camel-style models", "BioGPT"],
    keyDatasets: ["MIMIC-III / MIMIC-IV", "eICU", "PhysioNet", "UK Biobank (controlled access)"],
    workflow: ["raw clinical data", "cohorting and labelling", "model training / fine-tuning", "prospective validation", "workflow integration", "monitored deployment"],
    bottlenecks: ["clinical validation outside training distribution", "EHR workflow integration", "liability and accountability", "regulatory pathway (FDA SaMD, CE)", "bias across patient populations", "alarm fatigue"],
    companies: ["Epic", "Microsoft / Nuance", "Abridge", "Hippocratic AI", "OpenEvidence", "Glass Health", "K Health"],
    founderOpportunities: ["specialty-specific copilots", "EHR-integrated workflows", "evaluation infrastructure for clinical safety", "documentation tooling"],
    hypeVsReal: {
      real: ["documentation drafting and summarisation", "imaging-based triage", "patient-facing question answering with disclaimers"],
      overhyped: ["AI replacing clinicians", "fully autonomous diagnosis"]
    },
    commonMisunderstanding: "Clinical AI is rarely a replacement decision-maker. It assists, drafts, ranks and triages; clinicians remain accountable.",
    relatedQuestions: ["q-medicine-overview", "q-medicine-imaging-mature", "q-medicine-vs-marketing", "q-medicine-evaluation"],
    sourceIds: ["paper-medpalm2", "src-mimic", "src-fda-samd"]
  },

  {
    id: "radiology",
    name: "Radiology & Medical Imaging",
    category: "life-sciences",
    thesis: "Imaging is the most-cleared category in medical AI: pattern-rich, digital input, narrow tasks. The frontier is moving from single-task detectors to multimodal report-generation copilots.",
    oneLineTakeaway: "Imaging AI is real; the next frontier is the report, not the pixel.",
    maturity: "Production",
    confidence: "sourced",
    whatAIIsUsedFor: ["lesion detection", "segmentation", "triage of urgent findings", "quantitative measurement", "report drafting", "worklist prioritisation"],
    mainArchitectures: ["convolutional neural networks", "U-Net", "vision transformers", "multimodal vision-language models", "segmentation models", "diffusion models for synthesis"],
    keyModels: ["U-Net", "nnU-Net", "CheXNet-style chest models", "Segment Anything (general)", "Med-PaLM M (multimodal)"],
    keyDatasets: ["NIH ChestX-ray14", "MIMIC-CXR", "BraTS (brain tumour segmentation)", "RSNA challenges", "CheXpert"],
    workflow: ["image acquisition", "pre-processing", "model inference", "radiologist review", "report drafting / structured findings", "communication and follow-up"],
    bottlenecks: ["distribution shift across scanners and sites", "PACS / RIS workflow integration", "regulatory clearance (FDA, CE-MDR)", "liability", "reimbursement", "evaluation beyond AUROC"],
    companies: ["Aidoc", "Viz.ai", "Rad AI", "Annalise.ai", "Lunit", "GE HealthCare", "Siemens Healthineers", "Philips", "Bayer Calantic"],
    founderOpportunities: ["report-generation copilots", "specialty-specific quantification", "workflow orchestration in PACS/RIS", "post-market monitoring"],
    hypeVsReal: {
      real: ["FDA-cleared triage and detection across many anatomies", "stroke and embolism worklist prioritisation"],
      overhyped: ["AI replacing radiologists", "single-vendor general-purpose imaging AI"]
    },
    commonMisunderstanding: "FDA clearance is not 'approval to replace.' It permits a specific narrow task with stated indications, often as triage or notification, not autonomous diagnosis.",
    relatedQuestions: ["q-radiology-pipeline", "q-medicine-imaging-mature"],
    sourceIds: ["paper-unet", "paper-nnunet", "paper-chexnet", "src-fda-samd"]
  },

  {
    id: "pathology",
    name: "Digital Pathology",
    category: "life-sciences",
    thesis: "Whole-slide images are huge but information-dense. Foundation models are starting to compress slide-level reasoning into a clinically usable signal.",
    oneLineTakeaway: "Pathology AI is moving from patch classifiers to whole-slide foundation models.",
    maturity: "Early production",
    confidence: "sourced",
    whatAIIsUsedFor: ["tumour detection and grading", "biomarker prediction from H&amp;E", "whole-slide retrieval", "quality control"],
    mainArchitectures: ["multiple-instance learning", "vision transformers", "self-supervised foundation models", "graph neural networks", "tile-based CNNs"],
    keyModels: ["Paige Prostate (FDA De Novo authorisation, 2021; first AI for cancer detection in pathology)", "PathChat (research, multimodal pathology assistant)", "Pathology foundation models &mdash; UNI, Virchow, GigaPath (specific authorship and venues vary; treat names as references, not citations until verified)"],
    keyDatasets: ["TCGA", "CAMELYON", "PANDA challenge", "PAIP"],
    workflow: ["slide scanning", "tile sampling", "embedding extraction", "slide-level aggregation", "pathologist review", "structured reporting"],
    bottlenecks: ["scanner heterogeneity", "stain variation", "labour-intensive labelling", "regulatory pathway", "clinical lab integration"],
    companies: ["Paige", "PathAI", "Tempus", "Ibex Medical Analytics", "Proscia", "Indica Labs"],
    founderOpportunities: ["foundation-model fine-tuning for rare cancers", "QC and triage tooling", "slide-management infrastructure"],
    hypeVsReal: {
      real: ["regulatory-cleared prostate detection", "biomarker prediction in research settings"],
      overhyped: ["replacing pathologist consensus on novel cases"]
    },
    commonMisunderstanding: "AI predictions on H&amp;E slides are not equivalent to molecular tests. They can suggest likely biomarker status, but molecular confirmation is still standard.",
    relatedQuestions: ["q-pathology-overview", "q-medicine-imaging-mature"],
    sourceIds: ["src-tcga", "needs-verification"]
  },

  {
    id: "ophthalmology",
    name: "Ophthalmology",
    category: "life-sciences",
    thesis: "Eye imaging is a clean, high-volume modality where autonomous AI screening has cleared regulators in narrow indications.",
    oneLineTakeaway: "The first FDA-authorised autonomous diagnostic AI was in the eye.",
    maturity: "Early production",
    confidence: "sourced",
    whatAIIsUsedFor: ["diabetic retinopathy screening", "glaucoma risk assessment", "age-related macular degeneration detection", "OCT analysis"],
    mainArchitectures: ["convolutional neural networks", "vision transformers", "self-supervised foundation models", "multimodal models"],
    keyModels: ["IDx-DR (FDA De Novo authorisation, 2018; first autonomous diagnostic AI cleared in the US)", "RETFound (Moorfields Eye Hospital + UCL; Nature 2023, retinal foundation model, research)"],
    keyDatasets: ["EyePACS", "Kaggle DR detection", "UK Biobank ophthalmic data"],
    workflow: ["fundus / OCT imaging", "model inference", "referral / triage", "ophthalmologist review for confirmation"],
    bottlenecks: ["distribution shift across cameras", "downstream care pathway", "reimbursement", "ethnic and geographic data diversity"],
    companies: ["IDx (Digital Diagnostics)", "Eyenuk", "AEYE Health", "Topcon", "Optos", "Google DeepMind (research)"],
    founderOpportunities: ["primary-care eye-screening kiosks", "longitudinal OCT analysis", "lower-cost imaging hardware paired with AI"],
    hypeVsReal: {
      real: ["FDA-authorised autonomous screening for diabetic retinopathy", "research-grade foundation models for retinal images"],
      overhyped: ["AI replacing ophthalmologists across specialties"]
    },
    commonMisunderstanding: "An autonomous screening system is approved for screening within a defined indication, not for full ophthalmic diagnosis.",
    relatedQuestions: ["q-ophthalmology-overview"],
    sourceIds: ["src-fda-samd", "needs-verification"]
  },

  {
    id: "clinical-documentation",
    name: "Clinical Documentation",
    category: "life-sciences",
    thesis: "Ambient scribes and discharge-summary copilots are among the fastest-deploying clinical AI categories because the workflow change is small and the time-savings are immediate.",
    oneLineTakeaway: "AI scribes are the first AI most clinicians will actually use.",
    maturity: "Production",
    confidence: "sourced",
    whatAIIsUsedFor: ["ambient note drafting", "discharge summary generation", "coding assistance", "letter writing", "structured note extraction"],
    mainArchitectures: ["ASR (Whisper-class)", "clinical LLMs", "retrieval-augmented generation", "speaker diarisation"],
    keyModels: ["Whisper-class ASR", "GPT-4 / GPT-5-class LLMs (when integrated by EHR vendors)", "Claude-class LLMs"],
    keyDatasets: ["MIMIC-III / IV (research-only)", "vendor-private datasets"],
    workflow: ["ambient capture / dictation", "transcription", "structured note generation", "clinician edit and sign-off", "EHR integration"],
    bottlenecks: ["EHR integration", "hallucinated content", "specialty-specific phrasing", "billing and coding accuracy", "PHI handling"],
    companies: ["Microsoft / Nuance DAX", "Abridge", "Augmedix", "Suki", "DeepScribe", "Nabla"],
    founderOpportunities: ["specialty-specific scribes", "post-visit summary tooling", "ambient capture in non-traditional settings (urgent care, home)"],
    hypeVsReal: {
      real: ["meaningful clinician time-savings in pilot studies", "broad uptake across major US health systems"],
      overhyped: ["fully autonomous medical documentation without clinician sign-off"]
    },
    commonMisunderstanding: "A clean transcript is not a clean note. The structured-note step (problem, plan, billing) is where most of the work — and most of the failures — happen.",
    relatedQuestions: ["q-clinical-docs-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "public-health",
    name: "Public Health & Epidemiology",
    category: "life-sciences",
    thesis: "AI is most useful in public health where signals are noisy, cross-source and time-sensitive — but interpretation, equity and governance gate operational use.",
    oneLineTakeaway: "Better signals; same governance constraints.",
    maturity: "Early production",
    confidence: "inferred",
    whatAIIsUsedFor: ["disease outbreak detection", "syndromic surveillance", "wastewater analysis", "epidemic forecasting", "social-determinant-of-health modelling"],
    mainArchitectures: ["time-series models", "graph neural networks", "transformers", "Bayesian models"],
    keyModels: ["needsVerification: domain-specific surveillance models"],
    keyDatasets: ["WHO datasets", "national CDC equivalents", "Johns Hopkins COVID Resource (historical)"],
    workflow: ["multi-source signal ingestion", "anomaly detection", "outbreak hypothesis", "epidemiologist review", "public health response"],
    bottlenecks: ["data fragmentation across jurisdictions", "false-alarm cost", "equity and bias across populations", "coordination across agencies"],
    companies: ["BlueDot", "Metabiota (historical, acquired by Ginkgo Bioworks; original public-health work largely wound down)", "Kinsa", "academic public-health centres"],
    founderOpportunities: ["multi-source signal fusion for local health departments", "wastewater analytics", "post-event analysis tooling"],
    hypeVsReal: {
      real: ["earlier-than-baseline anomaly detection in published studies", "syndromic surveillance enhancements"],
      overhyped: ["AI predicting individual pandemics", "single-vendor public health command centers"]
    },
    commonMisunderstanding: "Earlier signal is not earlier action. Detection without governance and response capacity does not improve outcomes.",
    relatedQuestions: ["q-public-health-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "mental-health",
    name: "Mental Health & Digital Therapeutics",
    category: "life-sciences",
    thesis: "Conversational AI in mental health expands access to lower-acuity support, but clinical risk, confidentiality, and the absence of clean efficacy gold-standards demand caution.",
    oneLineTakeaway: "Access can scale; safety must scale with it.",
    maturity: "Early production",
    confidence: "inferred",
    whatAIIsUsedFor: ["screening and triage", "guided self-help (e.g. CBT-style)", "between-session support", "coaching", "voice-based affect monitoring"],
    mainArchitectures: ["dialogue LLMs (with safety scaffolding)", "speech models", "multimodal affect models"],
    keyModels: ["needsVerification: vendor-specific models behind apps"],
    keyDatasets: ["limited public datasets; most are vendor-private and consent-controlled"],
    workflow: ["intake screening", "guided dialogue / exercises", "risk monitoring", "human-clinician escalation when risk thresholds trigger"],
    bottlenecks: ["safety and risk handling", "regulatory pathway as digital therapeutic", "clinical efficacy evidence", "confidentiality and data practice", "equity of access"],
    companies: ["Spring Health", "Lyra Health", "Woebot Health", "Wysa", "Limbic", "Talkspace"],
    founderOpportunities: ["clinician-supervised between-session tools", "specialty programs (perinatal, adolescent, substance use)", "evaluation and safety infrastructure"],
    hypeVsReal: {
      real: ["screening and triage at scale", "between-session check-ins under clinician oversight"],
      overhyped: ["AI replacing therapists", "general-purpose chat as treatment for severe conditions"]
    },
    commonMisunderstanding: "Empathic dialogue is not therapy. Conversational fluency does not equal clinical efficacy or safety.",
    relatedQuestions: ["q-mental-health-overview"],
    sourceIds: ["needs-verification"]
  },

  /* ── B. FINANCE & ECONOMICS ── */
  {
    id: "banking",
    name: "Banking",
    category: "finance",
    thesis: "Banking AI is dominated by the unglamorous work of risk, compliance and operations. The biggest wins are workflow copilots and cost-to-serve, not chatbots.",
    oneLineTakeaway: "The boring AI inside banks is doing more economic work than the visible AI.",
    maturity: "Early production",
    confidence: "inferred",
    whatAIIsUsedFor: ["KYC / AML checks", "credit decisioning support", "fraud detection (see fraud entry)", "internal copilots", "customer-service deflection", "document processing"],
    mainArchitectures: ["gradient boosted trees", "transformer-based document models", "LLMs with retrieval", "graph models for AML", "tabular foundation models"],
    keyModels: ["XGBoost / LightGBM (workhorses)", "vendor LLMs (often Anthropic / OpenAI / Cohere via private deployments)"],
    keyDatasets: ["bank-private", "regulator-curated suspicious-activity reports (limited)"],
    workflow: ["customer onboarding (KYC)", "transaction monitoring", "case investigation", "regulator reporting", "internal ops copilots"],
    bottlenecks: ["model risk management (SR 11-7-style)", "fair-lending and bias controls", "explainability for regulators", "data fragmentation between systems"],
    companies: ["JPMorgan Chase", "Goldman Sachs", "FeatureSpace", "ComplyAdvantage", "Hummingbird"],
    founderOpportunities: ["AML investigator copilots", "model-risk-management tooling", "internal documentation and policy assistants"],
    hypeVsReal: {
      real: ["GBDT-based credit and fraud", "internal LLM copilots in pilot"],
      overhyped: ["fully autonomous regulatory decisions", "consumer banking chatbot disruption"]
    },
    commonMisunderstanding: "A compliant model is not just an accurate model. Banking AI must be explainable and auditable, even if a less interpretable model would score higher on benchmarks.",
    relatedQuestions: ["q-banking-overview", "q-finance-vs-bio"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "quant-finance",
    name: "Quantitative Finance",
    category: "finance",
    thesis: "Quant has used machine learning quietly for decades. The current wave is alternative data, transformers for time-series and reinforcement learning for execution — not chatbots.",
    oneLineTakeaway: "Quant is where the rest of AI looked five years ago, with a much harder evaluation problem.",
    maturity: "Production",
    confidence: "inferred",
    whatAIIsUsedFor: ["alpha generation from alternative data", "portfolio construction", "factor research", "execution algorithms", "regime detection"],
    mainArchitectures: ["gradient boosted trees", "time-series transformers", "graph neural networks", "reinforcement learning for execution", "Bayesian models"],
    keyModels: ["mostly proprietary; little is published"],
    keyDatasets: ["market microstructure (vendor-paid)", "alternative data feeds", "fundamentals (paid)"],
    workflow: ["data acquisition", "feature research", "model fitting", "backtest with realistic costs", "live paper trading", "capital allocation"],
    bottlenecks: ["data leakage and look-ahead bias", "regime shift", "transaction costs and capacity", "overfitting to historical noise", "evaluation honesty"],
    companies: ["Two Sigma", "Renaissance Technologies", "Citadel", "DE Shaw", "Man AHL", "Jane Street", "AQR"],
    founderOpportunities: ["data infrastructure (alt data, cleaning, joins)", "honest evaluation tooling", "execution-cost analytics"],
    hypeVsReal: {
      real: ["consistently improving execution", "incremental alpha at scale"],
      overhyped: ["LLMs printing money", "quant AGI"]
    },
    commonMisunderstanding: "A backtest that looks great is usually wrong. The default state of a strategy under naive evaluation is overfit; the engineering art is making evaluation honest.",
    relatedQuestions: ["q-quant-overview", "q-quant-vs-banking"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "trading",
    name: "Trading & Market Microstructure",
    category: "finance",
    thesis: "Execution is where reinforcement learning, queueing models and high-frequency feedback meet. The edge is microseconds, market impact and order-book dynamics — not language.",
    oneLineTakeaway: "Trading AI optimises how to trade, not what to trade.",
    maturity: "Production",
    confidence: "inferred",
    whatAIIsUsedFor: ["smart order routing", "execution algorithms (VWAP / TWAP / IS)", "market impact modelling", "queue prediction", "liquidity provisioning"],
    mainArchitectures: ["reinforcement learning", "time-series models", "queueing models", "graph models for venues"],
    keyModels: ["mostly proprietary"],
    keyDatasets: ["order-book data (vendor-paid)", "tick history"],
    workflow: ["receive parent order", "child-order schedule", "live execution", "post-trade analysis", "feedback to model"],
    bottlenecks: ["latency and infrastructure", "non-stationarity", "limited public data", "evaluation under realistic market impact"],
    companies: ["Optiver", "Jane Street", "Citadel Securities", "Hudson River Trading", "IMC Trading", "Virtu"],
    founderOpportunities: ["transaction-cost analytics", "smart routing for buy-side workflows", "execution analytics for crypto venues"],
    hypeVsReal: {
      real: ["execution improvements measurable in basis points", "microsecond-class infrastructure"],
      overhyped: ["LLM-based real-time market making"]
    },
    commonMisunderstanding: "Execution AI is not prediction. The job is minimising cost and impact, not forecasting price.",
    relatedQuestions: ["q-trading-execution"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "risk-management",
    name: "Risk Management",
    category: "finance",
    thesis: "Risk AI lives in the tension between explainability and accuracy. The systems that win are auditable, monotonic where required, and stress-testable across regimes.",
    oneLineTakeaway: "Risk models are judged by what they catch in tail events, not by what they predict on average.",
    maturity: "Production",
    confidence: "inferred",
    whatAIIsUsedFor: ["credit risk", "market risk (VaR / ES)", "operational risk", "stress testing", "counterparty risk"],
    mainArchitectures: ["gradient boosted trees", "interpretable models (GAMs / monotonic networks)", "Monte Carlo simulation", "Bayesian models"],
    keyModels: ["mostly proprietary; regulator-aware"],
    keyDatasets: ["bank-private", "regulator-curated"],
    workflow: ["data ingestion", "model training under MRM", "validation and challenger testing", "deployment", "ongoing monitoring", "stress and scenario tests"],
    bottlenecks: ["model risk management (SR 11-7)", "explainability requirements", "stress-test data scarcity", "model drift in regime changes"],
    companies: ["MSCI", "S&amp;P Global", "Numerix", "Bloomberg", "Moody&rsquo;s Analytics"],
    founderOpportunities: ["MRM tooling for AI models", "scenario library and stress-test data", "model-monitoring infrastructure"],
    hypeVsReal: {
      real: ["GBDT and interpretable models in production", "automated MRM workflows"],
      overhyped: ["LLMs as risk decision-makers"]
    },
    commonMisunderstanding: "An accurate risk model is not enough. It must be defensible to a regulator, reproducible across teams, and stable under stress.",
    relatedQuestions: ["q-risk-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "fraud-detection",
    name: "Fraud Detection",
    category: "finance",
    thesis: "Fraud is an adversarial, online learning problem. The wins come from feature engineering, graph signals and feedback loops measured in seconds, not from generic foundation models.",
    oneLineTakeaway: "Fraud is a continuous game; static models lose.",
    maturity: "Production",
    confidence: "inferred",
    whatAIIsUsedFor: ["card-not-present fraud", "account takeover detection", "synthetic identity detection", "merchant risk", "money-laundering signals"],
    mainArchitectures: ["gradient boosted trees", "graph neural networks", "anomaly detection", "online learning", "ensembles"],
    keyModels: ["mostly proprietary"],
    keyDatasets: ["network-private; some public benchmarks (PaySim, IEEE-CIS Fraud)"],
    workflow: ["transaction stream", "feature lookup (entity history)", "model scoring (millisecond-class)", "decision (allow / step-up / decline)", "feedback labels", "model retraining"],
    bottlenecks: ["adversarial drift", "feedback loop latency", "false-positive cost", "data labelling at scale"],
    companies: ["FeatureSpace", "Sift", "Forter", "Riskified", "Stripe Radar"],
    founderOpportunities: ["graph-feature platforms", "industry-specific fraud (gaming, fintech, marketplaces)", "synthetic-ID detection"],
    hypeVsReal: {
      real: ["real-time scoring at network scale", "graph features that lift detection"],
      overhyped: ["LLMs as fraud decision engines"]
    },
    commonMisunderstanding: "Fraud detection is not a static classification problem. The adversary is learning at the same time you are.",
    relatedQuestions: ["q-fraud-overview", "q-banking-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "insurance",
    name: "Insurance",
    category: "finance",
    thesis: "Insurance is bottlenecked by data, pricing fairness and regulator approval. AI is biting where digital evidence is rich (auto, property, claims) and where actuarial signals are clear.",
    oneLineTakeaway: "Insurance AI rises with digital evidence and falls under regulatory friction.",
    maturity: "Early production",
    confidence: "inferred",
    whatAIIsUsedFor: ["claims triage and FNOL automation", "auto-damage assessment from photos", "property risk scoring", "fraud detection", "customer copilots", "underwriting support"],
    mainArchitectures: ["computer vision", "GBDT", "geospatial models", "LLMs for documents", "graph models"],
    keyModels: ["mostly proprietary"],
    keyDatasets: ["insurer-private", "geospatial public data (NOAA, FEMA, satellite imagery)"],
    workflow: ["quote / underwriting", "policy issuance", "claims FNOL", "claims adjudication", "subrogation"],
    bottlenecks: ["regulatory approval (state-by-state in US)", "fair pricing constraints", "explainability", "legacy IT systems"],
    companies: ["Lemonade", "Tractable", "Cape Analytics", "Shift Technology", "Sixfold"],
    founderOpportunities: ["claims-process copilots", "specialty-line underwriting (cyber, parametric)", "broker-side tools"],
    hypeVsReal: {
      real: ["computer-vision claim triage", "FNOL automation"],
      overhyped: ["fully autonomous underwriting in regulated lines"]
    },
    commonMisunderstanding: "Insurance pricing is not a free optimisation. Fairness and regulator approval define what models are even allowed.",
    relatedQuestions: ["q-insurance-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "accounting-audit",
    name: "Accounting & Audit",
    category: "finance",
    thesis: "Audit is one of the largest knowledge-work markets that has accumulated digital evidence; AI is starting to compress audit work where evidence is structured and reviewable.",
    oneLineTakeaway: "Audit is RAG with strong evidence chains and high stakes.",
    maturity: "Early production",
    confidence: "inferred",
    whatAIIsUsedFor: ["evidence retrieval", "anomaly detection in journals", "narrative drafting", "expense and invoice processing", "control testing"],
    mainArchitectures: ["LLMs with retrieval", "anomaly detection", "OCR + document AI", "graph models for related-party detection"],
    keyModels: ["proprietary integrations of LLMs"],
    keyDatasets: ["audit-firm private", "ERP exports"],
    workflow: ["scope + plan", "evidence collection", "control testing", "anomaly review", "narrative drafting", "partner sign-off"],
    bottlenecks: ["regulator and standard-setter acceptance", "auditability and traceability of AI outputs", "integration with audit platforms"],
    companies: ["Big Four (KPMG, Deloitte, PwC, EY) internal AI", "AppZen", "Trullion", "Vic.ai", "Auditoria.ai"],
    founderOpportunities: ["specialty-area copilots (revenue rec, leases, taxes)", "evidence-chain infrastructure", "post-audit analytics"],
    hypeVsReal: {
      real: ["expense and invoice automation", "anomaly triage in journals", "narrative drafting"],
      overhyped: ["fully AI-issued audit opinions"]
    },
    commonMisunderstanding: "AI does not sign the audit opinion. It assists; the partner is accountable.",
    relatedQuestions: ["q-audit-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "economic-forecasting",
    name: "Economic Forecasting",
    category: "finance",
    thesis: "Macroeconomic forecasting is a hard, low-signal problem. AI helps with nowcasting, alternative-data ingestion and scenario stress-testing, not with predicting the next recession.",
    oneLineTakeaway: "Better signals, same humility about prediction.",
    maturity: "Early production",
    confidence: "inferred",
    whatAIIsUsedFor: ["nowcasting GDP / inflation", "alternative-data signals", "scenario simulation", "narrative analysis from policy text", "supply-chain disruption signals"],
    mainArchitectures: ["time-series models", "transformers", "factor models", "Bayesian VARs", "LLMs for text analysis"],
    keyModels: ["proprietary"],
    keyDatasets: ["national statistics", "central bank data", "satellite + shipping + energy alt-data"],
    workflow: ["data fusion", "model fitting", "scenario design", "output to traders / policymakers"],
    bottlenecks: ["non-stationarity", "limited training data per regime", "evaluation across cycles"],
    companies: ["Bloomberg", "Refinitiv (LSEG)", "Macrobond", "Goldman Sachs Marquee", "JPMorgan internal"],
    founderOpportunities: ["alt-data nowcasts for specialised verticals", "policy-text monitoring", "real-time supply-chain disruption"],
    hypeVsReal: {
      real: ["GDP nowcasts that beat naive baselines", "alt-data adoption in trading"],
      overhyped: ["AI predicting recessions reliably"]
    },
    commonMisunderstanding: "Macro is not microeconomics at scale. The error bars are wide because the system is reflexive — forecasts change behaviour.",
    relatedQuestions: ["q-econ-overview"],
    sourceIds: ["needs-verification"]
  },

  /* ── C. ENTERPRISE & KNOWLEDGE WORK ── */
  {
    id: "software-engineering",
    name: "Software Engineering",
    category: "enterprise",
    thesis: "Software is the closest AI gets to a self-improving market. Coding copilots became products faster than any other AI category because the feedback loop is fast and the buyer is the user.",
    oneLineTakeaway: "Software is where AI feels its own product-market fit first.",
    maturity: "Production",
    confidence: "sourced",
    whatAIIsUsedFor: ["code completion", "code generation", "code review", "test generation", "debugging assistants", "agentic coding (multi-step tasks)", "documentation", "CI / triage copilots"],
    mainArchitectures: ["code-trained LLMs", "tool-using agents", "retrieval over codebases", "execution sandboxes", "specialised reward models"],
    keyModels: ["GitHub Copilot (OpenAI Codex lineage, then GPT-4-class)", "Anthropic Claude (incl. Claude Code)", "Codeium / Cursor models", "Cognition Devin", "DeepSeek Coder", "open code models"],
    keyDatasets: ["public GitHub (under licence considerations)", "SWE-bench (evaluation)", "LiveCodeBench", "HumanEval"],
    workflow: ["edit / agent receives task", "retrieves repo context", "drafts code", "runs tests in sandbox", "iterates", "human review and merge"],
    bottlenecks: ["repo-scale context", "reliability and hallucination", "test coverage as ground truth", "security review", "maintaining human review-loops"],
    companies: ["GitHub (Microsoft)", "Cursor", "Anthropic", "OpenAI", "Codeium", "Replit", "Sourcegraph", "Cognition", "JetBrains", "Tabnine"],
    founderOpportunities: ["language- and stack-specific agents", "test and review copilots", "long-running agent infrastructure", "repo-scale retrieval and indexing"],
    hypeVsReal: {
      real: ["completion and refactors at scale", "agentic PRs in narrow domains", "task-level performance on SWE-bench-style benchmarks"],
      overhyped: ["fully autonomous software engineers without humans in the loop"]
    },
    commonMisunderstanding: "Benchmark scores on coding tasks do not equal merged production code. The hard part is being right at repo scale, not at function scale.",
    relatedQuestions: ["q-swe-overview", "q-rag-vs-finetune", "q-swe-evaluation", "q-swe-vs-domain"],
    sourceIds: ["paper-codex", "src-swe-bench", "src-humaneval"]
  },

  {
    id: "cybersecurity",
    name: "Cybersecurity",
    category: "enterprise",
    thesis: "Cybersecurity is one of the most adversarial AI domains. Defence wins where data is rich and feedback is fast (endpoint, network); offence wins where automation lowers the bar to attack.",
    oneLineTakeaway: "Both attackers and defenders are now AI-augmented; the equilibrium is moving.",
    maturity: "Production",
    confidence: "inferred",
    whatAIIsUsedFor: ["endpoint anomaly detection", "SOC alert triage", "phishing detection", "malware classification", "vulnerability discovery (offensive and defensive)", "code analysis", "deception", "log analysis"],
    mainArchitectures: ["anomaly detection", "graph neural networks", "transformer-based code analysers", "embeddings + retrieval", "LLM-based copilots"],
    keyModels: ["vendor proprietary", "Microsoft Security Copilot", "Google SecLM-class internal models"],
    keyDatasets: ["MITRE ATT&CK", "CVE / NVD", "vendor telemetry"],
    workflow: ["telemetry ingestion", "detection + triage", "investigation copilots", "response", "post-incident retrospective"],
    bottlenecks: ["adversarial drift", "alert fatigue", "data privacy", "false-positive cost", "AI-driven attack surface (prompt injection, data poisoning)"],
    companies: ["CrowdStrike", "SentinelOne", "Palo Alto Networks", "Darktrace", "Vectra AI", "Microsoft Security"],
    founderOpportunities: ["specialty SOC copilots", "AI-native deception", "prompt-injection defence", "cloud-config audit"],
    hypeVsReal: {
      real: ["EDR ML detection", "alert triage assistance", "code-analysis copilots"],
      overhyped: ["fully autonomous SOCs", "LLM-driven response without humans"]
    },
    commonMisunderstanding: "AI in security is not a silver bullet against AI-augmented attackers. It changes the work, not the asymmetry.",
    relatedQuestions: ["q-cyber-overview", "q-cyber-llm-attack-surface"],
    sourceIds: ["src-mitre-attack"]
  },

  {
    id: "legal",
    name: "Legal",
    category: "enterprise",
    thesis: "Legal is an unusually good fit for retrieval and citation-grounded AI: the work is text-heavy, evidentiary, and review-friendly. Hallucination is the single biggest defect.",
    oneLineTakeaway: "Legal AI must be RAG-first, citation-grounded, and reviewable.",
    maturity: "Early production",
    confidence: "sourced",
    whatAIIsUsedFor: ["legal research", "contract review and drafting", "e-discovery", "due diligence", "case summarisation", "compliance copilots", "memo drafting"],
    mainArchitectures: ["LLMs with retrieval-augmented generation", "embeddings", "OCR + document AI", "agentic workflows for review tasks"],
    keyModels: ["vendor-proprietary", "Harvey, Hebbia, Casetext / Thomson Reuters Westlaw, Lexis+ AI"],
    keyDatasets: ["case-law corpora (jurisdiction-dependent)", "contract corpora (firm-private)"],
    workflow: ["intake + scoping", "retrieve relevant authorities", "draft / annotate", "human associate / partner review", "filing / negotiation"],
    bottlenecks: ["hallucinated case law and citations", "privilege and confidentiality", "jurisdictional variance", "workflow integration in document management systems"],
    companies: ["Harvey", "Hebbia", "Thomson Reuters", "LexisNexis (Lexis+ AI)", "Robin AI", "Spellbook", "Ironclad"],
    founderOpportunities: ["specialty practice copilots (employment, tax, immigration)", "citation-verification infrastructure", "e-discovery agents", "compliance research"],
    hypeVsReal: {
      real: ["citation-grounded research at firm scale", "contract review with measured time-savings"],
      overhyped: ["AI replacing senior attorneys", "fully autonomous litigation drafting without verification"]
    },
    commonMisunderstanding: "Confident output without verifiable citations is a malpractice risk, not a feature. Legal AI without grounding is dangerous.",
    relatedQuestions: ["q-legal-overview", "q-rag-everywhere", "q-legal-hallucination"],
    sourceIds: ["paper-rag"]
  },

  {
    id: "education",
    name: "Education",
    category: "enterprise",
    thesis: "Education AI is moving from generic chatbots to subject-specific, learning-science-aware tutors. The bottleneck is not model quality; it is pedagogy, assessment and integrity.",
    oneLineTakeaway: "Tutoring works; teaching is harder.",
    maturity: "Early production",
    confidence: "inferred",
    whatAIIsUsedFor: ["tutoring", "feedback on writing and code", "lesson generation", "personalised practice", "assessment drafting", "language learning"],
    mainArchitectures: ["LLMs with retrieval", "speech models", "fine-tuned subject-specific models", "evaluator models"],
    keyModels: ["Khan Academy &lsquo;Khanmigo&rsquo; (vendor-integrated)", "Duolingo Max", "Quizlet / classroom integrations", "general LLMs"],
    keyDatasets: ["curriculum corpora (publisher-private)", "open-licence textbooks"],
    workflow: ["concept introduction", "guided practice", "Socratic feedback", "assessment", "teacher dashboard"],
    bottlenecks: ["assessment integrity (cheating)", "evidence of learning gains", "equity of access", "alignment with curriculum standards", "data protection for minors"],
    companies: ["Khan Academy", "Duolingo", "Coursera", "Pearson", "Magic School AI", "MathGPT"],
    founderOpportunities: ["subject-specific tutors with strong evaluations", "teacher copilots and grading", "integrity tools", "language learning"],
    hypeVsReal: {
      real: ["subject-specific tutors with measurable engagement", "feedback on practice"],
      overhyped: ["AI replacing teachers", "personalised learning at scale without curriculum integration"]
    },
    commonMisunderstanding: "Engagement is not learning. AI tutors that feel helpful do not always produce measurable gains; evaluation is the unfinished work.",
    relatedQuestions: ["q-edu-overview", "q-edu-cheating"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "hr-recruiting",
    name: "HR & Recruiting",
    category: "enterprise",
    thesis: "Hiring AI lives at the intersection of useful and discriminatory. Where it screens or ranks people, regulator and ethical scrutiny are the binding constraints.",
    oneLineTakeaway: "Where AI sorts humans, fairness and disclosure are not optional.",
    maturity: "Early production",
    confidence: "inferred",
    whatAIIsUsedFor: ["candidate sourcing", "resume parsing", "skills matching", "interview scheduling", "internal mobility", "performance review drafting"],
    mainArchitectures: ["embeddings", "LLM-based parsing", "graph models for skills ontologies", "ranking models"],
    keyModels: ["vendor proprietary"],
    keyDatasets: ["company-private", "job-posting public scrapes"],
    workflow: ["sourcing", "screening", "interview", "assessment", "offer", "onboarding"],
    bottlenecks: ["fair-hiring laws (EEOC, NYC AI hiring law)", "discrimination risk", "data quality", "candidate experience"],
    companies: ["Eightfold AI", "HiredScore (Workday)", "Phenom", "Beamery", "Mercer"],
    founderOpportunities: ["transparent ranking tooling", "internal mobility", "structured interview support", "audit + bias-monitoring"],
    hypeVsReal: {
      real: ["sourcing and matching at scale", "interview scheduling automation"],
      overhyped: ["AI deciding hires autonomously without disclosure"]
    },
    commonMisunderstanding: "An algorithm that performs well in aggregate can still produce discriminatory effects on protected groups.",
    relatedQuestions: ["q-hr-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "sales-marketing",
    name: "Sales & Marketing",
    category: "enterprise",
    thesis: "Sales and marketing got AI commodified faster than almost any function: copy, ads, segmentation, outbound, call analytics. The differentiation has moved to data and orchestration, not generation.",
    oneLineTakeaway: "Generation is cheap; orchestration and data are the moat.",
    maturity: "Production",
    confidence: "inferred",
    whatAIIsUsedFor: ["copywriting", "ad creative", "segmentation and targeting", "lead scoring", "outbound personalisation", "call analytics", "forecasting", "attribution"],
    mainArchitectures: ["LLMs", "embeddings + RAG", "ranking models", "speech models", "generative image models"],
    keyModels: ["vendor stacks built on OpenAI / Anthropic / Cohere / image models"],
    keyDatasets: ["CRM-private", "marketing-data clouds (Snowflake / Databricks)"],
    workflow: ["audience definition", "creative generation", "campaign launch", "attribution", "feedback", "next-best-action orchestration"],
    bottlenecks: ["data activation across silos", "privacy and consent regulation", "creative-fatigue and policy on synthetic media", "measurement over long sales cycles"],
    companies: ["Salesforce Einstein", "Gong", "HubSpot", "Outreach", "Adobe Firefly", "Persado", "Jasper"],
    founderOpportunities: ["outbound copilots with verified data", "post-call coaching", "creative-asset orchestration", "measurement under regulation"],
    hypeVsReal: {
      real: ["copy and ad-creative generation", "call-analytics deployment", "segmentation"],
      overhyped: ["fully autonomous account executives"]
    },
    commonMisunderstanding: "Generated content is cheap; attention and trust are not. Volume without orchestration burns brand and audience.",
    relatedQuestions: ["q-sales-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "customer-support",
    name: "Customer Support",
    category: "enterprise",
    thesis: "Support is where conversational AI has the cleanest unit economics: deflection saves real cost per ticket, and ground truth is embedded in past tickets.",
    oneLineTakeaway: "Support AI works because each ticket is an evaluable evaluation.",
    maturity: "Production",
    confidence: "sourced",
    whatAIIsUsedFor: ["L1 deflection", "agent assist", "ticket routing", "summarisation", "knowledge base maintenance", "voice IVR", "CSAT prediction"],
    mainArchitectures: ["LLMs with retrieval", "embedding-based intent classification", "speech models", "agentic workflows for tools"],
    keyModels: ["Intercom Fin (vendor stack)", "Zendesk AI", "Salesforce Service Cloud Einstein"],
    keyDatasets: ["customer-private ticket history", "knowledge bases"],
    workflow: ["customer query", "intent classification", "retrieval over knowledge base", "draft response", "human handoff if needed", "feedback on resolution"],
    bottlenecks: ["legacy knowledge base quality", "channel fragmentation (chat / email / voice)", "compliance in regulated industries", "evaluation of answer correctness"],
    companies: ["Intercom", "Zendesk", "Salesforce", "Forethought", "Ada", "Decagon", "Sierra"],
    founderOpportunities: ["agent-assist for regulated industries", "voice / IVR rebuilds on LLMs", "knowledge-base hygiene", "deflection analytics"],
    hypeVsReal: {
      real: ["deflection rates of 30&ndash;70% reported in vendor case studies", "agent-assist accelerating handle times"],
      overhyped: ["100% autonomous support without escalation paths"]
    },
    commonMisunderstanding: "Deflection without escalation is not support. Customers hate dead ends; the right metric is resolution, not zero handoff.",
    relatedQuestions: ["q-support-overview", "q-rag-everywhere"],
    sourceIds: ["paper-rag"]
  },

  {
    id: "enterprise-productivity",
    name: "Enterprise Productivity",
    category: "enterprise",
    thesis: "Productivity copilots will be the most-installed AI category by user count. The challenge is that the value per user is real but small; the integration depth is what compounds.",
    oneLineTakeaway: "Copilots are a habit; their economic value lives in integration, not novelty.",
    maturity: "Production",
    confidence: "sourced",
    whatAIIsUsedFor: ["document drafting", "meeting summarisation", "spreadsheet automation", "presentation generation", "search across enterprise data", "task automation"],
    mainArchitectures: ["LLMs", "retrieval over enterprise data (Glean-style)", "embeddings", "agentic workflows", "voice models"],
    keyModels: ["Microsoft Copilot (M365 stack)", "Google Workspace AI", "Notion AI", "Glean (enterprise search)"],
    keyDatasets: ["customer-private", "corporate-knowledge graphs"],
    workflow: ["user prompt or trigger", "retrieve enterprise context", "generate / summarise / act", "user review", "feedback"],
    bottlenecks: ["enterprise data hygiene", "permissioning and access controls", "evaluation of usefulness vs novelty", "change management"],
    companies: ["Microsoft", "Google", "Notion", "Glean", "Slack AI", "Box AI"],
    founderOpportunities: ["vertical copilots (industry-specific)", "permissioning + governance for AI access", "LLM-aware analytics tooling"],
    hypeVsReal: {
      real: ["meeting summary deployment at scale", "doc and email drafting", "enterprise search lift"],
      overhyped: ["AI replacing knowledge workers", "frictionless adoption without change management"]
    },
    commonMisunderstanding: "A copilot that is impressive in demos may be a marginal addition in workflow. Integration depth matters more than peak generation quality.",
    relatedQuestions: ["q-enterprise-productivity-overview", "q-rag-everywhere"],
    sourceIds: ["paper-rag"]
  },

  {
    id: "research-workflows",
    name: "Research & Consulting Workflows",
    category: "enterprise",
    thesis: "Research-as-a-product is the cleanest LLM use case: ingest a corpus, ground answers, render a report. The differentiation is corpus quality, evaluation and trust.",
    oneLineTakeaway: "Research copilots win on corpus and citation, not on cleverness.",
    maturity: "Early production",
    confidence: "inferred",
    whatAIIsUsedFor: ["literature search", "competitive analysis", "investment research", "market sizing", "due diligence", "report drafting"],
    mainArchitectures: ["LLMs with retrieval", "embedding-based search", "agentic web search", "evaluator models"],
    keyModels: ["Perplexity", "Elicit", "Glean", "ChatGPT with browsing/search", "Anthropic Claude with web search"],
    keyDatasets: ["public web", "vendor-licensed corpora", "client-private"],
    workflow: ["question framing", "corpus selection", "retrieval + ranking", "drafting with citations", "human verification"],
    bottlenecks: ["corpus quality and coverage", "citation hallucination", "evaluation rigour", "synthesis vs summary"],
    companies: ["Perplexity", "Elicit", "OpenAI Deep Research", "Anthropic", "Glean", "Hebbia", "Bloomberg internal"],
    founderOpportunities: ["specialty corpora (medicine, law, materials)", "evaluation and citation tooling", "agentic research with web access governance"],
    hypeVsReal: {
      real: ["web research with citations as a habit", "domain-specific copilots in pilots"],
      overhyped: ["AI replacing senior analysts", "fully autonomous deep research without verification"]
    },
    commonMisunderstanding: "A confident summary with citations is not a verified one. Citations can be fabricated or mis-attributed; verification is a discipline.",
    relatedQuestions: ["q-research-overview", "q-rag-everywhere"],
    sourceIds: ["paper-rag"]
  },

  /* ── D. PHYSICAL WORLD & INDUSTRY ── */
  {
    id: "robotics",
    name: "Robotics",
    category: "physical",
    thesis: "Robotics is the hardest AI domain because the world is the loss function. Foundation models, diffusion policies and VLA stacks are converging the field, but data, embodiment and safety remain unsolved.",
    oneLineTakeaway: "The world is the loss function.",
    maturity: "Research frontier",
    confidence: "sourced",
    whatAIIsUsedFor: ["manipulation", "navigation", "planning under uncertainty", "perception", "human-robot interaction", "humanoid locomotion and dexterous manipulation"],
    mainArchitectures: ["reinforcement learning", "imitation learning", "diffusion policies", "vision-language-action (VLA) models", "world models", "model predictive control with learned dynamics", "sim-to-real transfer"],
    keyModels: ["RT-1", "RT-2", "PaLM-E", "Diffusion Policy", "&pi;0 (Physical Intelligence)", "Open X-Embodiment"],
    keyDatasets: ["Open X-Embodiment", "DROID", "RT-X", "Ego4D", "Robosuite (sim)"],
    workflow: ["task definition", "data collection (teleop / sim)", "policy training", "simulation evaluation", "real-robot deployment", "iterative refinement"],
    bottlenecks: ["data scarcity at robot scale", "sim-to-real gap", "embodiment generalisation", "safety and reliability", "long-horizon manipulation", "evaluation cost"],
    companies: ["Boston Dynamics", "Figure AI", "1X Technologies", "Apptronik", "Agility Robotics", "Tesla Optimus", "Physical Intelligence", "Skild AI", "Covariant", "Diligent Robotics", "Sanctuary AI"],
    founderOpportunities: ["data-collection infrastructure", "evaluation and safety harnesses", "specialty manipulation (kitchens, warehouses, surgery)", "humanoid components"],
    hypeVsReal: {
      real: ["lab-scale dexterous manipulation across tasks", "single-task warehouse and industrial deployments", "VLA model demonstrations"],
      overhyped: ["humanoids replacing labour at scale in 2&ndash;3 years", "fully general-purpose home robots imminent"]
    },
    commonMisunderstanding: "Impressive demos are not deployment. Robotics is bottlenecked by reliability, not by what is possible in a controlled video.",
    relatedQuestions: ["q-robotics-overview", "q-robotics-sim", "q-robotics-vla"],
    sourceIds: ["paper-rt2", "paper-diffusion-policy", "paper-open-x"]
  },

  {
    id: "autonomous-vehicles",
    name: "Autonomous Vehicles",
    category: "physical",
    thesis: "AV is the longest-running real-world AI project. Robotaxis are scaling in narrow geographies; consumer ADAS is data-rich; full autonomy at any condition remains unsolved.",
    oneLineTakeaway: "Autonomy is real in narrow domains and slow elsewhere.",
    maturity: "Early production",
    confidence: "sourced",
    whatAIIsUsedFor: ["perception", "prediction of other agents", "planning", "control", "mapping", "data ingestion at fleet scale", "simulation"],
    mainArchitectures: ["sensor fusion", "transformers for perception (BEV)", "occupancy networks", "imitation + RL planners", "vision-language-action style models (emerging)", "world models"],
    keyModels: ["proprietary; Waymo, Tesla FSD, Wayve, Mobileye internals"],
    keyDatasets: ["nuScenes", "Waymo Open Dataset", "Argoverse", "fleet-private"],
    workflow: ["sensor capture", "perception + tracking", "prediction", "planning", "control", "fleet logging", "active mining of edge cases", "retraining"],
    bottlenecks: ["long-tail safety", "regulatory approval (state-by-state, country-by-country)", "weather and rare conditions", "human-driver interaction", "public trust"],
    companies: ["Waymo", "Cruise (paused operations 2024)", "Zoox", "Mobileye", "Aurora Innovation", "Tesla (FSD)", "Wayve", "Pony.ai", "Motional"],
    founderOpportunities: ["simulation infrastructure", "data labelling and curation", "specialty autonomy (warehouses, mining, logistics)", "AV insurance and liability"],
    hypeVsReal: {
      real: ["robotaxi service in narrow ODDs (Phoenix, San Francisco, etc.)", "ADAS broadly deployed", "highway autonomy in select markets"],
      overhyped: ["fully driverless in any condition imminent", "uniform timelines across geographies"]
    },
    commonMisunderstanding: "A safe operating domain is narrow on purpose. AV providers expand that domain incrementally; the long tail of edge cases is large.",
    relatedQuestions: ["q-av-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "manufacturing",
    name: "Manufacturing",
    category: "physical",
    thesis: "Manufacturing AI is mostly computer vision and predictive maintenance. The bottleneck is integrating with industrial IT and tolerating its data realities.",
    oneLineTakeaway: "The model is easy; the integration is the company.",
    maturity: "Production",
    confidence: "inferred",
    whatAIIsUsedFor: ["defect detection", "predictive maintenance", "process optimisation", "robotic pick-and-place", "scheduling", "digital twins"],
    mainArchitectures: ["computer vision (CNNs, ViTs, segmentation)", "anomaly detection", "time-series models", "graph models for production lines", "diffusion for synthetic data"],
    keyModels: ["vendor-proprietary; Cognex, Landing AI, Siemens, GE"],
    keyDatasets: ["customer-private; some public defect-detection datasets"],
    workflow: ["sensor + camera data", "model inference at line", "operator alert / control action", "feedback", "drift monitoring"],
    bottlenecks: ["industrial data fragmentation (OT / IT)", "labelling cost on rare defects", "model drift across lines and SKUs", "MES / SCADA integration"],
    companies: ["Cognex", "Landing AI", "Instrumental", "Drishti", "Siemens", "GE Digital", "PTC"],
    founderOpportunities: ["specialty defect detection (electronics, food, pharma)", "MES-integrated copilots", "OT-secure on-prem AI"],
    hypeVsReal: {
      real: ["computer-vision QC widely deployed", "predictive maintenance on rotating equipment"],
      overhyped: ["lights-out factories at scale", "general-purpose manufacturing AI"]
    },
    commonMisunderstanding: "Industrial data is messy, sparse and often unlabelled. Lab benchmarks rarely survive contact with the line.",
    relatedQuestions: ["q-mfg-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "supply-chain",
    name: "Supply Chain & Logistics",
    category: "physical",
    thesis: "Supply chain is a forecasting and optimisation problem first; AI helps where data is rich and where humans were already doing pattern recognition (demand, routing, inventory).",
    oneLineTakeaway: "Forecasting + optimisation, with copilots at the seams.",
    maturity: "Production",
    confidence: "inferred",
    whatAIIsUsedFor: ["demand forecasting", "inventory optimisation", "route planning", "ETA prediction", "supplier risk", "warehouse robotics + WMS"],
    mainArchitectures: ["time-series models", "GBDT", "graph neural networks", "operations research with ML inputs", "LLMs for documents"],
    keyModels: ["vendor + custom"],
    keyDatasets: ["company-private", "public AIS / shipping data"],
    workflow: ["data ingestion (ERP, WMS, TMS)", "forecast", "optimise", "execute", "track", "feedback"],
    bottlenecks: ["data fragmentation across partners", "exception handling", "human-in-the-loop overrides", "geopolitical disruption"],
    companies: ["Project44", "FourKites", "o9 Solutions", "Coupa", "Flexport", "C.H. Robinson", "Blue Yonder", "Llamasoft (Coupa)"],
    founderOpportunities: ["multi-party data networks", "exception copilots for planners", "real-time disruption signals", "warehouse robotics integration"],
    hypeVsReal: {
      real: ["forecasting + routing at production scale", "ETA prediction for ocean / road freight"],
      overhyped: ["fully autonomous global supply-chain optimisation"]
    },
    commonMisunderstanding: "Supply chain AI is mostly OR with ML inputs. The model is one component of a much larger optimisation system.",
    relatedQuestions: ["q-supply-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "energy-grid",
    name: "Energy & Power Grids",
    category: "physical",
    thesis: "AI in energy is helpful where the grid is observable and digital (renewables, batteries, demand response). Where physics or regulation dominate, ML is a co-pilot, not a controller.",
    oneLineTakeaway: "Forecast and bid; the grid still has hard constraints.",
    maturity: "Production",
    confidence: "inferred",
    whatAIIsUsedFor: ["renewable generation forecasting", "demand response", "battery dispatch", "load forecasting", "predictive maintenance for transmission and generation", "energy trading", "grid optimisation"],
    mainArchitectures: ["time-series models", "transformers", "physics-informed models", "reinforcement learning for dispatch", "graph models for the grid"],
    keyModels: ["vendor + utility-internal"],
    keyDatasets: ["ISO / RTO public data", "weather (NOAA, ECMWF)", "utility-private SCADA"],
    workflow: ["forecast", "schedule / bid", "real-time control with humans-in-loop", "settle and learn"],
    bottlenecks: ["regulatory approval", "data access across utilities", "physical constraints (stability, contingency)", "aging infrastructure", "weather extremes"],
    companies: ["Octopus Energy / Kraken", "Stem", "Tesla Autobidder", "AutoGrid", "WattTime", "Camus Energy", "Aurora Energy Research"],
    founderOpportunities: ["DER (distributed energy resource) orchestration", "wildfire and extreme-event response", "transmission-planning copilots", "behind-the-meter optimisation"],
    hypeVsReal: {
      real: ["forecasting and bidding in production", "battery dispatch optimisation"],
      overhyped: ["fully autonomous grid control by AI"]
    },
    commonMisunderstanding: "The grid is a physics machine, not a search engine. ML helps inside operating envelopes; safe operation rules the rest.",
    relatedQuestions: ["q-energy-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "climate-weather",
    name: "Climate & Weather",
    category: "physical",
    thesis: "Neural weather models now match or beat numerical weather prediction on key skill metrics, fast enough to enable new applications. Climate-scale AI is more uncertain.",
    oneLineTakeaway: "Neural weather is real; neural climate is research.",
    maturity: "Early production",
    confidence: "sourced",
    whatAIIsUsedFor: ["medium-range weather forecasting", "extreme-event prediction", "downscaling", "data assimilation augmentation", "renewable forecasting", "wildfire / flood early warning"],
    mainArchitectures: ["graph neural networks (GraphCast)", "Fourier neural operators / FourCastNet", "transformers", "physics-informed neural networks", "diffusion models for ensembles"],
    keyModels: ["GraphCast (DeepMind / Google)", "FourCastNet (NVIDIA)", "Pangu-Weather (Huawei)", "AIFS (ECMWF)", "GenCast"],
    keyDatasets: ["ERA5 reanalysis", "WeatherBench 2", "operational NWP outputs"],
    workflow: ["initial conditions", "neural forecast (faster than NWP)", "ensemble", "post-processing / bias correction", "downstream use"],
    bottlenecks: ["evaluation on extremes (rare events)", "trust in operational use", "integration with NWP centres", "compute for ensemble runs", "long-range climate skill"],
    companies: ["Google DeepMind", "NVIDIA Earth-2", "Tomorrow.io", "Atmo", "Salient Predictions", "ECMWF (research)"],
    founderOpportunities: ["specialty regional models", "renewable + agriculture downstream products", "extreme-event focused services", "post-processing for operational forecasters"],
    hypeVsReal: {
      real: ["medium-range neural forecasts at NWP-competitive skill", "ensemble products"],
      overhyped: ["AI replacing physical climate models", "perfect extreme-event prediction"]
    },
    commonMisunderstanding: "Beating NWP on average does not mean beating it on hurricanes, atmospheric rivers, or unprecedented events.",
    relatedQuestions: ["q-weather-overview", "q-weather-vs-physics"],
    sourceIds: ["paper-graphcast", "paper-fourcastnet", "paper-fno"]
  },

  {
    id: "agriculture",
    name: "Agriculture",
    category: "physical",
    thesis: "Ag-AI is mature where the input is digital and the action is mechanical (vision-guided spraying, yield prediction). Where it depends on biology and weather, it is a co-pilot.",
    oneLineTakeaway: "Vision and time-series first; biology stays hard.",
    maturity: "Early production",
    confidence: "inferred",
    whatAIIsUsedFor: ["weed detection / targeted spraying", "yield prediction", "disease detection in plants", "satellite-based monitoring", "irrigation scheduling", "livestock monitoring"],
    mainArchitectures: ["computer vision", "time-series models", "remote-sensing pipelines", "physics-informed crop models with ML"],
    keyModels: ["John Deere See &amp; Spray (proprietary)", "vendor + research"],
    keyDatasets: ["satellite (Sentinel, Landsat)", "drone-collected", "private farm-level"],
    workflow: ["sensing (satellite / drone / on-equipment)", "model inference", "agronomic recommendation", "mechanical action (spray, irrigate)"],
    bottlenecks: ["data heterogeneity across farms and crops", "connectivity in the field", "seasonal cycles for evaluation", "regulatory and label requirements"],
    companies: ["John Deere (Blue River / See &amp; Spray)", "Climate Corporation (Bayer)", "Indigo Ag", "Plenty", "Taranis", "Agrosmart"],
    founderOpportunities: ["specialty-crop vision", "regional ag-platforms", "livestock health vision systems", "decision-support for smallholders"],
    hypeVsReal: {
      real: ["targeted spraying with measured input reduction", "yield estimation at field scale"],
      overhyped: ["fully autonomous farms across crops imminent"]
    },
    commonMisunderstanding: "A model that works in California does not necessarily work in Iowa or Punjab. Agricultural AI is local.",
    relatedQuestions: ["q-ag-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "construction",
    name: "Construction & Real Estate",
    category: "physical",
    thesis: "Construction is one of the largest under-digitised industries. AI&rsquo;s wedge is photo / video documentation, schedule risk and document AI; physical-build AI is earlier.",
    oneLineTakeaway: "Document the site; the rest follows slowly.",
    maturity: "Early production",
    confidence: "inferred",
    whatAIIsUsedFor: ["progress tracking from site photos", "schedule risk forecasting", "estimating", "BIM clash detection", "property valuation", "lease abstraction"],
    mainArchitectures: ["computer vision", "graph models for BIM", "LLMs for documents", "time-series for schedule analysis"],
    keyModels: ["vendor + custom"],
    keyDatasets: ["customer-private; some public real-estate (MLS, public records)"],
    workflow: ["site capture (photo / 360 / drone)", "automated progress tracking", "schedule + cost integration", "exception copilots", "executive reporting"],
    bottlenecks: ["fragmented data across owners / GCs / subs", "weather and physical disruption", "labour intensity of capture", "interoperability"],
    companies: ["OpenSpace", "Buildots", "Procore", "Autodesk Construction Cloud", "Cape Analytics", "HouseCanary"],
    founderOpportunities: ["specialty trade copilots", "property risk + valuation", "lease and contract analysis", "modular construction integration"],
    hypeVsReal: {
      real: ["site progress tracking from imagery", "lease abstraction at scale"],
      overhyped: ["AI replacing project managers", "instant property valuation accurate at the unit level"]
    },
    commonMisunderstanding: "Computer-vision progress tracking is most accurate where site capture is consistent. Inconsistent capture undermines model output.",
    relatedQuestions: ["q-construction-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "mining-oil-gas",
    name: "Mining, Oil & Gas",
    category: "physical",
    thesis: "Heavy industry has been quietly using ML for years on geology, reservoir modelling and predictive maintenance. New foundation models are accelerating subsurface and seismic interpretation.",
    oneLineTakeaway: "Quiet AI in heavy capex.",
    maturity: "Production",
    confidence: "inferred",
    whatAIIsUsedFor: ["seismic interpretation", "reservoir modelling", "predictive maintenance", "autonomous haul trucks", "exploration support", "safety analytics"],
    mainArchitectures: ["computer vision (seismic)", "physics-informed models", "time-series anomaly detection", "graph models for assets", "RL for autonomous equipment"],
    keyModels: ["vendor + operator-internal"],
    keyDatasets: ["operator-private; some public seismic"],
    workflow: ["raw geophysical data", "interpretation + reservoir characterisation", "drilling / production decisions", "asset monitoring", "logistics + safety"],
    bottlenecks: ["safety and reliability", "remote / harsh environments", "regulatory approval for autonomy", "data access across operators"],
    companies: ["Schlumberger (SLB)", "Halliburton", "Baker Hughes", "BHP / Rio Tinto (autonomous mining)", "Komatsu", "Caterpillar"],
    founderOpportunities: ["safety + worker-monitoring vision", "subsurface foundation models", "edge AI for remote sites", "decommissioning analytics"],
    hypeVsReal: {
      real: ["autonomous haul trucks in major mines", "seismic-interpretation copilots"],
      overhyped: ["AI &lsquo;solving&rsquo; exploration"]
    },
    commonMisunderstanding: "Subsurface uncertainty is irreducible. AI tightens estimates; it does not eliminate the dry-hole risk.",
    relatedQuestions: ["q-mining-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "telecommunications",
    name: "Telecommunications",
    category: "physical",
    thesis: "Telecom AI is mostly inside operations: anomaly detection, network optimisation, fraud, customer churn. Generative AI for customer-facing channels is just starting.",
    oneLineTakeaway: "AI runs the network before it ever talks to the customer.",
    maturity: "Production",
    confidence: "inferred",
    whatAIIsUsedFor: ["network anomaly detection", "predictive maintenance for towers / fibre", "self-organising network (SON)", "churn prediction", "customer-care copilots", "fraud"],
    mainArchitectures: ["time-series models", "graph models for networks", "RL for self-organising networks", "LLMs for customer care"],
    keyModels: ["vendor + operator-internal"],
    keyDatasets: ["operator-private"],
    workflow: ["network telemetry", "anomaly detection", "automated remediation / human escalation", "customer-care + retention", "billing"],
    bottlenecks: ["data privacy", "vendor lock-in for OSS / BSS", "explainability for regulators", "edge inference cost"],
    companies: ["Ericsson", "Nokia", "Huawei", "Cisco", "AT&amp;T", "Verizon", "Reliance Jio"],
    founderOpportunities: ["edge AI for RAN", "specialty churn / monetisation tools", "AI-native customer care for telecoms"],
    hypeVsReal: {
      real: ["self-organising networks", "churn modelling at scale"],
      overhyped: ["AI replacing the network operations centre"]
    },
    commonMisunderstanding: "A faster network is not the same as a better-monetised one. Telco AI lives in the gap between bandwidth and ARPU.",
    relatedQuestions: ["q-telecom-overview"],
    sourceIds: ["needs-verification"]
  },

  /* ── E. SCIENCE & ENGINEERING ── */
  {
    id: "materials-science",
    name: "Materials Science",
    category: "science",
    thesis: "Generative + active-learning materials discovery is the cleanest sci-AI win after biology, with autonomous labs starting to close the design-build-test loop.",
    oneLineTakeaway: "Materials AI proposes structures; autonomous labs validate them.",
    maturity: "Research frontier",
    confidence: "inferred",
    whatAIIsUsedFor: ["property prediction", "crystal / molecule generation", "high-throughput screening", "process optimisation", "spectroscopic interpretation"],
    mainArchitectures: ["graph neural networks", "equivariant networks", "diffusion / generative models for crystals", "Bayesian optimisation", "active learning"],
    keyModels: ["GNoME (DeepMind, research)", "MatBench-style benchmarks", "vendor proprietary"],
    keyDatasets: ["Materials Project", "OQMD", "ICSD"],
    workflow: ["target property", "generative design", "in-silico screening", "autonomous lab synthesis + characterisation", "feedback into generator"],
    bottlenecks: ["synthesis success rate", "scale-up from lab to factory", "characterisation cost", "limited public data on novel chemistries"],
    companies: ["Citrine Informatics", "Schr&ouml;dinger", "Kebotix", "Microsoft Research (MatterGen, research)", "DeepMind (research)"],
    founderOpportunities: ["autonomous lab platforms", "characterisation pipelines", "specialty chemistry copilots"],
    hypeVsReal: {
      real: ["large-scale generation of candidate crystals", "active-learning loops in academic labs"],
      overhyped: ["instant new battery / superconductor without lab work"]
    },
    commonMisunderstanding: "A predicted stable structure is not a synthesised one. Most candidates are not synthesisable.",
    relatedQuestions: ["q-materials-overview"],
    sourceIds: ["src-materials-project"]
  },

  {
    id: "chemistry",
    name: "Chemistry",
    category: "science",
    thesis: "Chemistry AI overlaps drug discovery and materials. The strongest near-term wins are reaction prediction, retrosynthesis and catalyst discovery.",
    oneLineTakeaway: "Reactions, retrosynthesis, catalysts — closer to production than people think.",
    maturity: "Research frontier",
    confidence: "inferred",
    whatAIIsUsedFor: ["reaction prediction", "retrosynthesis", "catalyst discovery", "spectroscopy", "process optimisation"],
    mainArchitectures: ["molecular transformers", "graph neural networks", "diffusion models for molecules", "active learning"],
    keyModels: ["AiZynthFinder", "Chemformer", "MolMIM", "vendor proprietary"],
    keyDatasets: ["Reaxys (paid)", "USPTO reaction corpus", "ORD (Open Reaction Database)"],
    workflow: ["target molecule", "retrosynthesis tree", "ranked routes", "lab execution", "feedback"],
    bottlenecks: ["limited high-quality reaction data", "stereochemistry and selectivity", "novel-reaction generalisation", "industrial scale-up"],
    companies: ["Iktos", "Iambic", "Schr&ouml;dinger", "Ginkgo Bioworks", "Insilico Medicine", "BASF / industry partnerships"],
    founderOpportunities: ["data infrastructure for industrial reactions", "lab-execution platforms", "specialty domains (catalysis, agrochemistry)"],
    hypeVsReal: {
      real: ["retrosynthesis copilots in commercial use", "catalyst-screening platforms"],
      overhyped: ["AI replacing synthetic chemists"]
    },
    commonMisunderstanding: "A retrosynthetic suggestion is a starting point; selecting the right route still requires expert chemistry judgment.",
    relatedQuestions: ["q-chemistry-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "physics",
    name: "Physics",
    category: "science",
    thesis: "AI in physics is a microscope plus a calculator. Surrogate models accelerate simulation, generative models accelerate hypothesis testing, and ML helps with experimental data analysis.",
    oneLineTakeaway: "AI as a surrogate, not a theory.",
    maturity: "Research frontier",
    confidence: "inferred",
    whatAIIsUsedFor: ["surrogate models for simulations (CFD, plasma)", "data analysis at experiments (LHC, ITER)", "anomaly / new-physics search", "lattice QCD acceleration", "dark-matter / cosmology"],
    mainArchitectures: ["physics-informed neural networks", "neural operators", "graph networks", "equivariant models", "diffusion for inverse problems"],
    keyModels: ["mostly research-only"],
    keyDatasets: ["LHC public datasets", "cosmological surveys (DES, LSST upcoming)", "ITER and tokamak datasets"],
    workflow: ["physical experiment / simulation", "ML surrogate or analysis", "hypothesis refinement", "human physics interpretation"],
    bottlenecks: ["interpretability of ML in physics", "trust in surrogates outside training distribution", "compute and data sharing across collaborations"],
    companies: ["national labs and collaborations primarily", "Anthropic / OpenAI / DeepMind partnerships", "research universities"],
    founderOpportunities: ["scientific data pipelines", "specialty surrogates for engineering physics (CFD, EM, structural)"],
    hypeVsReal: {
      real: ["surrogates for specific PDE families", "ML-accelerated experimental analysis"],
      overhyped: ["AI discovering fundamental new physics autonomously"]
    },
    commonMisunderstanding: "A neural surrogate is not a theory. It interpolates within trained regimes; it does not extrapolate to new physics.",
    relatedQuestions: ["q-physics-overview"],
    sourceIds: ["paper-fno"]
  },

  {
    id: "mathematics",
    name: "Mathematics",
    category: "science",
    thesis: "AI is becoming a real tool in mathematics: theorem proving, conjecture generation, computer-algebra augmentation. The frontier moved from neat puzzles to research-grade lemmas.",
    oneLineTakeaway: "Math is becoming an AI workload, not just an AI subject.",
    maturity: "Research frontier",
    confidence: "sourced",
    whatAIIsUsedFor: ["theorem proving (Lean / Coq)", "conjecture generation", "olympiad-style problem solving", "computer-algebra augmentation", "literature retrieval"],
    mainArchitectures: ["LLMs (general and math-specialised)", "tree search + neural value/policy", "retrieval over math corpora", "tool-using agents (Lean, Wolfram, SymPy)"],
    keyModels: ["AlphaProof (DeepMind, research)", "AlphaGeometry / AlphaGeometry 2 (DeepMind)", "OpenAI o-series and successors", "math-trained open models"],
    keyDatasets: ["Lean mathlib", "MiniF2F", "Olympiad-style benchmarks (IMO, AMC)"],
    workflow: ["informal problem", "formalisation in Lean / proof assistant", "search + neural guidance", "verified proof"],
    bottlenecks: ["formalisation cost", "evaluation beyond benchmarks", "research-grade open problems", "tool integration overhead"],
    companies: ["Google DeepMind", "OpenAI", "Anthropic", "Harmonic (math AI startup)"],
    founderOpportunities: ["formalisation tooling", "research-math copilots", "auto-grading + proof-checking for education"],
    hypeVsReal: {
      real: ["near-IMO performance from AI systems on geometry / number-theory subsets", "proof assistant integrations"],
      overhyped: ["AI &lsquo;doing maths&rsquo; in the human sense without formal verification"]
    },
    commonMisunderstanding: "An AI that solves Olympiad problems is not yet an AI mathematician. Olympiad mathematics has clean evaluation; research mathematics does not.",
    relatedQuestions: ["q-math-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "scientific-computing",
    name: "Scientific Computing",
    category: "science",
    thesis: "Neural operators and physics-informed networks are turning slow PDE solvers into fast surrogates. Scientific computing is being reshaped one operator family at a time.",
    oneLineTakeaway: "ML is the new compiler for slow PDEs.",
    maturity: "Research frontier",
    confidence: "sourced",
    whatAIIsUsedFor: ["surrogate models for PDEs", "differentiable simulation", "inverse problems", "Bayesian optimisation in design", "uncertainty quantification"],
    mainArchitectures: ["Fourier Neural Operator (FNO)", "DeepONet", "physics-informed neural networks (PINN)", "neural ODEs", "differentiable simulators"],
    keyModels: ["FNO and successors (research)", "NVIDIA Modulus (framework)"],
    keyDatasets: ["domain-specific simulation outputs", "physics benchmarks"],
    workflow: ["simulate or assemble dataset", "train surrogate", "deploy in design loop", "uncertainty estimation"],
    bottlenecks: ["distribution shift outside training regimes", "physical constraints (energy conservation, monotonicity)", "trust and certification in engineering"],
    companies: ["NVIDIA (Modulus)", "Pasteur Labs", "Akselos", "Altair", "Ansys (research partnerships)"],
    founderOpportunities: ["specialty surrogates (CFD, EM, mechanical)", "design-space optimisation", "engineering-grade uncertainty"],
    hypeVsReal: {
      real: ["accelerated PDE surrogates in narrow regimes", "differentiable simulators inside design loops"],
      overhyped: ["replacing CAE simulation across engineering"]
    },
    commonMisunderstanding: "A neural surrogate that fits the training regime can be wildly wrong outside it. Engineering certification needs out-of-distribution guarantees.",
    relatedQuestions: ["q-scicomp-overview", "q-neural-operators"],
    sourceIds: ["paper-fno", "paper-pinn"]
  },

  {
    id: "aerospace-space",
    name: "Aerospace & Space",
    category: "science",
    thesis: "Aerospace AI is integrated into mission-critical workflows: control, guidance, anomaly detection, geospatial. Foundation models are reshaping satellite imagery analysis.",
    oneLineTakeaway: "Mission-critical AI lives under tighter assurance than almost any other domain.",
    maturity: "Production",
    confidence: "inferred",
    whatAIIsUsedFor: ["satellite imagery analysis", "predictive maintenance for fleets and engines", "anomaly detection in telemetry", "aerodynamic design optimisation", "trajectory optimisation"],
    mainArchitectures: ["computer vision", "geospatial foundation models", "time-series", "physics-informed networks", "RL for control"],
    keyModels: ["Prithvi (NASA + IBM, geospatial foundation model)", "vendor proprietary"],
    keyDatasets: ["NASA Earth Observation", "ESA Sentinel data", "FAA / airline-private"],
    workflow: ["sensor / image acquisition", "model inference", "human review for mission-critical", "operational action"],
    bottlenecks: ["certification (DO-178C / DO-254 in aviation)", "explainability for safety", "data labelling at scale for geospatial"],
    companies: ["Airbus", "Boeing", "Lockheed Martin", "Maxar Technologies", "Planet", "Capella Space", "NASA (research)"],
    founderOpportunities: ["specialty geospatial vertical (insurance, agriculture, defence)", "predictive maintenance for fleets", "telemetry anomaly tooling"],
    hypeVsReal: {
      real: ["geospatial foundation models in production", "predictive maintenance on engines", "design-optimisation copilots"],
      overhyped: ["fully autonomous aerospace decisioning without human pilots / controllers in the foreseeable future"]
    },
    commonMisunderstanding: "Aerospace AI is rarely autonomous decision-making. Certification authorities require human-in-the-loop for safety-critical action.",
    relatedQuestions: ["q-aerospace-overview"],
    sourceIds: ["needs-verification"]
  },

  /* ── F. MEDIA & CONSUMER ── */
  {
    id: "media-entertainment",
    name: "Media & Entertainment",
    category: "media",
    thesis: "Generative video and audio are the most disruptive AI category for media. The unresolved questions are provenance, rights, and what new formats actually emerge.",
    oneLineTakeaway: "The tools are real; the formats and rights are unsettled.",
    maturity: "Early production",
    confidence: "sourced",
    whatAIIsUsedFor: ["VFX and post-production", "video generation", "voice cloning and dubbing", "subtitling and translation", "content moderation", "personalised recommendation"],
    mainArchitectures: ["diffusion models", "video diffusion / latent video models", "speech models", "transformers for ranking", "multimodal models"],
    keyModels: ["Sora (OpenAI)", "Veo (Google DeepMind)", "Runway Gen-3 / Gen-4", "Pika", "Stable Video Diffusion", "ElevenLabs voice models"],
    keyDatasets: ["proprietary; rights-cleared and unclear"],
    workflow: ["concept", "AI-assisted generation", "human creative direction", "post-production", "distribution and analytics"],
    bottlenecks: ["rights and provenance", "content moderation", "identity / deepfake risk", "evaluation of creative quality"],
    companies: ["OpenAI (Sora)", "Google (Veo)", "Runway", "Pika", "ElevenLabs", "Synthesia", "Adobe", "Disney / Netflix internal"],
    founderOpportunities: ["provenance and rights tooling", "specialty post-production", "indie creator pipelines", "moderation"],
    hypeVsReal: {
      real: ["AI-assisted post-production in production pipelines", "voice dubbing at scale", "creator-tier video tools"],
      overhyped: ["AI replacing studios in the near term"]
    },
    commonMisunderstanding: "Generative tools change the workflow, not the audience&rsquo;s appetite for craft. Output volume rises faster than attention.",
    relatedQuestions: ["q-media-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "gaming",
    name: "Gaming",
    category: "media",
    thesis: "Gaming uses ML for graphics first (DLSS, frame generation), AI characters second, and content generation third. The interesting frontier is real-time agents and procedural worlds.",
    oneLineTakeaway: "AI lifts frame rates today; the question is whether it lifts gameplay tomorrow.",
    maturity: "Production",
    confidence: "sourced",
    whatAIIsUsedFor: ["super-resolution / frame generation (DLSS, FSR)", "NPC behaviour", "content moderation", "matchmaking", "procedural generation", "voice synthesis"],
    mainArchitectures: ["super-resolution networks", "diffusion / GAN for assets", "LLMs for NPCs", "RL for matchmaking and game balance"],
    keyModels: ["NVIDIA DLSS family", "AMD FSR (algorithmic + ML)", "Inworld AI characters", "vendor + studio internal"],
    keyDatasets: ["studio-private"],
    workflow: ["concept", "asset generation", "engine integration", "playtest + feedback", "live ops"],
    bottlenecks: ["latency budgets", "platform certification", "intellectual property", "player-trust on AI characters", "content moderation in UGC"],
    companies: ["NVIDIA", "AMD", "Inworld AI", "Roblox", "Unity Sentis", "Unreal Engine", "studio internal teams"],
    founderOpportunities: ["studio-grade asset pipelines", "NPC agents with safety scaffolding", "anti-cheat ML"],
    hypeVsReal: {
      real: ["super-resolution and frame-gen as default in AAA titles", "AI-assisted asset workflows"],
      overhyped: ["fully procedural games that match AAA quality from AI alone"]
    },
    commonMisunderstanding: "Better graphics are not better games. AI-driven design needs gameplay direction, not just generation.",
    relatedQuestions: ["q-gaming-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "design-architecture",
    name: "Design & Architecture",
    category: "media",
    thesis: "AI in design is a co-pilot: ideation, variants and asset generation. Architecture and product design have stronger constraints (codes, manufacturability) that gate full automation.",
    oneLineTakeaway: "Co-pilot for ideation; constraints stay with humans.",
    maturity: "Early production",
    confidence: "inferred",
    whatAIIsUsedFor: ["ideation and concept generation", "variant exploration", "design-system enforcement", "spatial / architectural rendering", "BIM / CAD copilots"],
    mainArchitectures: ["diffusion models", "vision-language models", "graph models for CAD", "LLMs for design briefs"],
    keyModels: ["Adobe Firefly", "Figma AI", "Vizcom", "Autodesk research", "Magnific / various image models"],
    keyDatasets: ["studio-private", "open design archives"],
    workflow: ["brief", "AI-assisted exploration", "designer curation", "production / build", "feedback"],
    bottlenecks: ["IP and rights on training data", "manufacturability and code-compliance constraints", "evaluation of taste"],
    companies: ["Adobe", "Figma", "Autodesk", "Canva", "Vizcom", "Magnific (acq. Freepik)"],
    founderOpportunities: ["specialty design copilots (interior, brand, product)", "manufacturability-aware design", "IP-clean training and provenance"],
    hypeVsReal: {
      real: ["asset generation and variants in design tools", "concept rendering for architecture"],
      overhyped: ["AI replacing designers"]
    },
    commonMisunderstanding: "Generative output is unbounded; good design is constrained. The taste and constraints come from designers.",
    relatedQuestions: ["q-design-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "music-audio",
    name: "Music & Audio",
    category: "media",
    thesis: "Music AI generates passable songs from prompts. The unresolved questions are rights, royalties, and whether commercial output is desired by listeners.",
    oneLineTakeaway: "We can generate music; we cannot yet license it cleanly.",
    maturity: "Early production",
    confidence: "sourced",
    whatAIIsUsedFor: ["music generation", "stem separation", "mastering", "voice synthesis and cloning", "translation and dubbing", "sound design"],
    mainArchitectures: ["diffusion models for audio", "transformers for music tokens", "neural codecs", "speech models"],
    keyModels: ["Suno", "Udio", "MusicGen", "AudioCraft (Meta)", "ElevenLabs", "OpenAI Voice / Whisper"],
    keyDatasets: ["proprietary; rights status varies"],
    workflow: ["prompt", "generation / refinement", "human curation", "rights handling", "publication"],
    bottlenecks: ["rights and licensing", "evaluation of music quality", "voice-cloning consent and abuse"],
    companies: ["Suno", "Udio", "ElevenLabs", "OpenAI", "Meta (research)", "Stability AI"],
    founderOpportunities: ["rights-clean training and licensing", "specialty audio (game, podcast, sync)", "voice-cloning safety"],
    hypeVsReal: {
      real: ["plausible song generation from prompts", "voice cloning at production quality"],
      overhyped: ["AI replacing artists in commercial markets without disclosure"]
    },
    commonMisunderstanding: "Generated music is not licensed music. Until rights regimes mature, commercial use is risky.",
    relatedQuestions: ["q-music-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "consumer-search",
    name: "Consumer AI, Search & Recsys",
    category: "media",
    thesis: "Consumer AI is the largest distribution layer for everyday AI. Search is being rebuilt on retrieval-augmented LLMs; recommendation is upgrading from rankings to multi-objective generation.",
    oneLineTakeaway: "Search and feeds are being rebuilt on top of LLMs.",
    maturity: "Production",
    confidence: "sourced",
    whatAIIsUsedFor: ["question-answering search", "recommendation feeds", "personal assistants", "chat-based shopping", "voice assistants"],
    mainArchitectures: ["LLMs with retrieval", "embeddings + vector search", "ranking models", "multimodal models", "speech"],
    keyModels: ["Perplexity", "Google AI Overviews / Gemini Search", "ChatGPT search", "Anthropic Claude with web search", "TikTok / Meta / Netflix recsys (proprietary)"],
    keyDatasets: ["public web", "platform-private engagement"],
    workflow: ["query / context", "retrieval and ranking", "LLM synthesis (where applicable)", "user action", "engagement signals back to ranking"],
    bottlenecks: ["citation and trust", "ad / publisher economics", "recsys diversity and well-being", "personalisation privacy"],
    companies: ["Google", "OpenAI", "Anthropic", "Perplexity", "Microsoft Bing", "TikTok / ByteDance", "Meta", "Netflix"],
    founderOpportunities: ["vertical search (medicine, law, science)", "rights and citation infrastructure", "well-being-aware recsys"],
    hypeVsReal: {
      real: ["AI-augmented search at consumer scale", "deeply personalised feeds across platforms"],
      overhyped: ["LLMs as a complete substitute for traditional search ecosystems"]
    },
    commonMisunderstanding: "AI search is not search with extra steps. The ad and publisher economics are different, and that is the actual disruption.",
    relatedQuestions: ["q-consumer-search-overview", "q-rag-everywhere"],
    sourceIds: ["paper-rag"]
  },

  /* ── G. GOVERNMENT & STRATEGIC ── */
  {
    id: "government-services",
    name: "Government Services",
    category: "government",
    thesis: "Public-service AI is bottlenecked less by tech than by procurement, equity and accountability. The wins are in case-handling, document processing and citizen-facing copilots with human review.",
    oneLineTakeaway: "Procurement, accountability and equity gate public-sector AI more than capability.",
    maturity: "Early production",
    confidence: "inferred",
    whatAIIsUsedFor: ["case management copilots", "document processing", "tax compliance", "citizen-facing chat", "fraud / improper-payment detection", "translation"],
    mainArchitectures: ["LLMs with retrieval", "OCR + document AI", "speech and translation", "anomaly detection"],
    keyModels: ["vendor stacks built on hyperscaler models"],
    keyDatasets: ["agency-private; some public administrative data"],
    workflow: ["case intake", "AI-assisted classification / drafting", "caseworker review", "decision and notification"],
    bottlenecks: ["procurement and FedRAMP / IL-class certification", "equity and bias scrutiny", "transparency and freedom-of-information", "data fragmentation across agencies"],
    companies: ["Palantir", "Accenture Federal", "Deloitte / KPMG public sector", "Microsoft Azure Government", "Anthropic / OpenAI government editions"],
    founderOpportunities: ["FedRAMP-ready vertical tools", "translation in public services", "appeals and fairness tooling"],
    hypeVsReal: {
      real: ["case-handling copilots in pilot at multiple agencies", "translation and citizen support"],
      overhyped: ["AI making autonomous benefit decisions without human accountability"]
    },
    commonMisunderstanding: "Government AI procurement is not faster than enterprise AI. It is structurally slower for good reasons (oversight, equity).",
    relatedQuestions: ["q-government-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "defence",
    name: "Defence",
    category: "government",
    thesis: "Defence AI is one of the most consequential and most contested AI categories. Public information is partial; cautious framing matters more here than in any other domain.",
    oneLineTakeaway: "High stakes, partial visibility, cautious wording.",
    maturity: "Early production",
    confidence: "inferred",
    whatAIIsUsedFor: ["sensor fusion and ISR analysis", "logistics", "predictive maintenance", "cyber operations", "training and simulation", "decision-support copilots", "selected autonomy in narrow systems"],
    mainArchitectures: ["computer vision (geospatial, EO/IR)", "transformers for fusion", "RL for simulation", "LLMs for analysis"],
    keyModels: ["mostly classified or vendor-private"],
    keyDatasets: ["classified / mission-private"],
    workflow: ["sensor / signal acquisition", "AI-assisted analysis", "human commander review", "decision", "after-action review"],
    bottlenecks: ["accountability and laws of armed conflict", "classification levels and data sharing", "evaluation under adversarial conditions", "supply chain and export controls"],
    companies: ["Palantir", "Anduril", "Lockheed Martin", "L3Harris", "Helsing", "Shield AI", "Saronic", "C3 AI"],
    founderOpportunities: ["dual-use ISR analysis", "logistics / maintenance copilots", "training simulators", "sensor processing on edge"],
    hypeVsReal: {
      real: ["AI-augmented ISR and logistics in deployed systems", "narrow-autonomy systems disclosed by some governments"],
      overhyped: ["fully autonomous lethal decision-making at strategic scale"]
    },
    commonMisunderstanding: "Operational details are partly classified. Public discussions about defence AI need to be careful about specificity and verification.",
    relatedQuestions: ["q-defence-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "intelligence-analysis",
    name: "Intelligence Analysis",
    category: "government",
    thesis: "Intelligence analysis was the first knowledge-work category to use ML at scale. Modern AI is changing both what analysts can do and what adversaries can do; the equilibrium is moving.",
    oneLineTakeaway: "More signals, more noise, more synthesis — same humans deciding.",
    maturity: "Early production",
    confidence: "inferred",
    whatAIIsUsedFor: ["geospatial analysis", "open-source intelligence (OSINT) processing", "signal intelligence (SIGINT) augmentation", "translation", "entity / network discovery", "deepfake and information-operation detection"],
    mainArchitectures: ["geospatial vision", "multilingual LLMs", "graph models", "speech and translation", "embedding + retrieval"],
    keyModels: ["mostly classified or vendor-private", "Palantir Foundry / AIP", "Microsoft / OpenAI government deployments"],
    keyDatasets: ["classified", "OSINT (commercial imagery, social media, news)"],
    workflow: ["multi-source ingestion", "AI-assisted triage and link analysis", "analyst synthesis", "decision-maker briefings"],
    bottlenecks: ["classification and access controls", "trust and explainability", "adversarial deception", "ethical and legal scrutiny on surveillance"],
    companies: ["Palantir", "BAE Systems", "Booz Allen Hamilton", "Maxar / commercial-imagery providers", "various sovereign primes"],
    founderOpportunities: ["OSINT analytics", "deepfake / IO detection", "human-in-the-loop link analysis"],
    hypeVsReal: {
      real: ["AI-augmented OSINT and geospatial in deployed systems"],
      overhyped: ["fully autonomous strategic analysis without humans"]
    },
    commonMisunderstanding: "More information does not equal better decisions. Analysis quality remains a human bottleneck.",
    relatedQuestions: ["q-intelligence-overview"],
    sourceIds: ["needs-verification"]
  },

  {
    id: "smart-cities",
    name: "Smart Cities & Sovereign AI",
    category: "government",
    thesis: "Cities and nations are buying AI as infrastructure. The work is mostly traffic, energy, public services and citizen support; sovereign AI investment is reshaping where capacity lives.",
    oneLineTakeaway: "Cities and countries buy AI as infrastructure; sovereignty is the new variable.",
    maturity: "Early production",
    confidence: "inferred",
    whatAIIsUsedFor: ["traffic / mobility optimisation", "energy and water management", "public-service chat in many languages", "predictive maintenance for civic assets", "national LLMs and AI sovereignty programs"],
    mainArchitectures: ["time-series", "computer vision", "LLMs with retrieval", "graph models"],
    keyModels: ["national LLMs and partnerships (UAE Falcon, India initiatives, Singapore, etc.)"],
    keyDatasets: ["city / national administrative data", "public sensor networks"],
    workflow: ["sensor + administrative-data ingestion", "AI-assisted operations", "civic feedback", "policy and budget loop"],
    bottlenecks: ["procurement", "interoperability across departments", "privacy and surveillance scrutiny", "national export-control friction"],
    companies: ["national champions", "Palantir", "Siemens", "Bosch", "Cisco", "IBM", "AWS / Azure / GCP government editions"],
    founderOpportunities: ["specialty civic copilots (housing, benefits, transit)", "language-local services", "civic-data interoperability"],
    hypeVsReal: {
      real: ["multi-language citizen-support chat", "traffic + energy optimisation in pilots"],
      overhyped: ["fully autonomous urban operations"]
    },
    commonMisunderstanding: "Smart cities are slow not because the tech is missing but because procurement, governance and data-sharing are.",
    relatedQuestions: ["q-smart-cities-overview"],
    sourceIds: ["needs-verification"]
  }

];

/* ============================================
   AI_ARCHITECTURES
   The architecture taxonomy that domains pull from. Each entry teaches
   what the architecture is, where it shines, and where it fails.
   ============================================ */
var AI_ARCHITECTURES = [
  /* ── Foundation models ── */
  {
    id: "llm",
    name: "Large Language Models",
    family: "Foundation models",
    whatItIs: "Transformer-based neural networks trained on large text corpora to model the next-token distribution. The most general-purpose AI building block of the current cycle.",
    whereUsed: ["software engineering", "legal", "education", "support", "enterprise productivity", "research", "medicine documentation"],
    strengths: ["broad world knowledge", "strong language and code understanding", "in-context reasoning"],
    weaknesses: ["hallucination on unsourced claims", "limited reliability for high-stakes tasks", "poor at tasks demanding precise computation"],
    domains: ["software-engineering", "legal", "education", "customer-support", "enterprise-productivity"],
    landmarkPapers: ["paper-attention", "paper-bert", "paper-gpt3", "paper-instructgpt"],
    commonMisunderstanding: "An LLM is not a database. It is a probability distribution over text and will fabricate confidently if not grounded.",
    maturity: "Production",
    sourceIds: ["paper-attention", "paper-gpt3"]
  },
  {
    id: "multimodal-llm",
    name: "Multimodal LLMs",
    family: "Foundation models",
    whatItIs: "LLMs that natively accept and emit text + images (and increasingly audio, video). Underpin chart reading, document understanding, screen agents and clinical multimodal use.",
    whereUsed: ["medicine", "support", "consumer", "robotics", "research"],
    strengths: ["unified interface across modalities", "strong document and chart reasoning", "vision-language transfer"],
    weaknesses: ["uneven across modalities", "more compute and memory cost", "evaluation is still immature"],
    domains: ["radiology", "pathology", "robotics", "consumer-search"],
    landmarkPapers: ["paper-clip", "paper-flamingo", "paper-llava"],
    commonMisunderstanding: "Multimodal does not mean equally good across modalities. Most are strong on text + image, weak on long video and audio reasoning.",
    maturity: "Production",
    sourceIds: ["paper-clip"]
  },
  {
    id: "vlm",
    name: "Vision-Language Models",
    family: "Foundation models",
    whatItIs: "Models that align images and text in a shared embedding space (CLIP-style) or fuse modalities for generation (LLaVA-style).",
    whereUsed: ["search", "moderation", "assistive tech", "retail", "robotics"],
    strengths: ["zero-shot image classification and retrieval", "captioning"],
    weaknesses: ["miss fine-grained details", "biased to web image distribution"],
    domains: ["consumer-search", "media-entertainment", "robotics"],
    landmarkPapers: ["paper-clip", "paper-llava"],
    commonMisunderstanding: "A VLM that understands a kitten in a photo may not understand a tumour on a CT.",
    maturity: "Production",
    sourceIds: ["paper-clip"]
  },
  {
    id: "domain-fm",
    name: "Domain-specific Foundation Models",
    family: "Foundation models",
    whatItIs: "Foundation models trained or post-trained on a specific domain&rsquo;s data: clinical, legal, biological, geospatial, financial, code.",
    whereUsed: ["medicine", "legal", "biology", "code", "geospatial", "finance"],
    strengths: ["sharper grounding in domain vocabulary", "fewer hallucinations on domain queries"],
    weaknesses: ["narrower than general LLMs", "data-quality risks", "expensive to maintain"],
    domains: ["clinical-medicine", "legal", "drug-discovery", "software-engineering", "aerospace-space"],
    landmarkPapers: ["paper-medpalm2", "paper-codex", "paper-esm2"],
    commonMisunderstanding: "Domain-specific does not always beat fine-tuned general. The best general models with retrieval often match or beat smaller domain models.",
    maturity: "Early production",
    sourceIds: ["paper-medpalm2", "paper-esm2"]
  },
  {
    id: "rag",
    name: "Retrieval-Augmented Generation",
    family: "Foundation models",
    whatItIs: "An LLM is paired with a retriever (vector / lexical) over a corpus. The model reads relevant documents at generation time, grounding answers in citations.",
    whereUsed: ["legal", "support", "enterprise", "research", "medicine"],
    strengths: ["citation-grounded answers", "easy corpus updates", "reduces hallucination on covered topics"],
    weaknesses: ["fails when retrieval is bad", "retrieval-quality heavy engineering", "still hallucinates on edge cases"],
    domains: ["legal", "customer-support", "enterprise-productivity", "research-workflows", "clinical-medicine"],
    landmarkPapers: ["paper-rag"],
    commonMisunderstanding: "RAG does not eliminate hallucination. It reduces it on retrieved-supported claims; everything else is at risk.",
    maturity: "Production",
    sourceIds: ["paper-rag"]
  },
  {
    id: "tool-agents",
    name: "Tool-using Agents",
    family: "Foundation models",
    whatItIs: "LLMs equipped with tool calls (search, code, APIs) inside a control loop. The model plans, calls tools, observes results, and iterates.",
    whereUsed: ["coding agents", "research agents", "operations copilots", "browser agents"],
    strengths: ["composes capabilities", "extends model beyond memorised knowledge"],
    weaknesses: ["compounding error in long horizons", "tool-use reliability", "evaluation is hard"],
    domains: ["software-engineering", "research-workflows", "customer-support", "enterprise-productivity"],
    landmarkPapers: ["paper-react", "paper-toolformer"],
    commonMisunderstanding: "An agent is not magic; it is an LLM with conditional control. Reliability still depends on the underlying model and the task design.",
    maturity: "Early production",
    sourceIds: ["paper-react", "paper-toolformer"]
  },
  {
    id: "multi-agent",
    name: "Multi-agent systems",
    family: "Foundation models",
    whatItIs: "Multiple LLM agents with different roles or tools coordinate to solve a task. Coordination is often through a planner / critic structure.",
    whereUsed: ["research workflows", "complex code tasks", "simulation"],
    strengths: ["division of labour", "self-critique"],
    weaknesses: ["amplifies errors when poorly designed", "expensive in tokens", "evaluation is even harder than single-agent"],
    domains: ["software-engineering", "research-workflows"],
    landmarkPapers: ["paper-react"],
    commonMisunderstanding: "Adding more agents does not always help. Past a few, coordination overhead and error amplification dominate.",
    maturity: "Research frontier",
    sourceIds: ["needs-verification"]
  },

  /* ── Vision ── */
  {
    id: "cnn",
    name: "Convolutional Neural Networks",
    family: "Vision",
    whatItIs: "Networks built around convolutional filters that exploit local spatial structure. Were the dominant vision architecture from ResNet through ~2020.",
    whereUsed: ["medical imaging", "manufacturing QC", "satellite", "agriculture", "AV perception"],
    strengths: ["data-efficient on smaller datasets", "well-understood deployment"],
    weaknesses: ["less expressive than transformers at scale", "limited global context"],
    domains: ["radiology", "pathology", "manufacturing", "agriculture", "autonomous-vehicles"],
    landmarkPapers: ["paper-resnet", "paper-unet"],
    commonMisunderstanding: "CNNs are not obsolete. They remain competitive and cheap on many production vision tasks.",
    maturity: "Production",
    sourceIds: ["paper-resnet"]
  },
  {
    id: "unet",
    name: "U-Net",
    family: "Vision",
    whatItIs: "An encoder-decoder CNN with skip connections, designed for biomedical segmentation. Still the de-facto baseline for medical image segmentation.",
    whereUsed: ["medical imaging segmentation", "pathology", "satellite segmentation"],
    strengths: ["data-efficient", "robust", "well-tuned variants (nnU-Net) work out of the box"],
    weaknesses: ["less expressive than transformer alternatives at scale"],
    domains: ["radiology", "pathology", "aerospace-space"],
    landmarkPapers: ["paper-unet", "paper-nnunet"],
    commonMisunderstanding: "U-Net is not a single architecture. nnU-Net is a self-configuring framework that often beats hand-tuned competitors.",
    maturity: "Production",
    sourceIds: ["paper-unet", "paper-nnunet"]
  },
  {
    id: "vit",
    name: "Vision Transformers",
    family: "Vision",
    whatItIs: "Transformers applied to image patches. Beat CNNs on large-scale benchmarks given enough data; underpin many modern vision foundation models.",
    whereUsed: ["large-scale classification", "detection", "segmentation", "multimodal models"],
    strengths: ["scales with data", "global context", "uniform architecture across modalities"],
    weaknesses: ["data-hungry", "more compute"],
    domains: ["radiology", "pathology", "manufacturing", "robotics", "autonomous-vehicles"],
    landmarkPapers: ["paper-vit"],
    commonMisunderstanding: "ViTs only beat CNNs at scale. On small medical or industrial datasets, well-tuned CNNs often win.",
    maturity: "Production",
    sourceIds: ["paper-vit"]
  },
  {
    id: "segmentation-models",
    name: "Segmentation models (incl. SAM)",
    family: "Vision",
    whatItIs: "Models that produce pixel-level masks. SAM (Segment Anything) is a promptable foundation model for segmentation; nnU-Net dominates medical.",
    whereUsed: ["medical imaging", "pathology", "agriculture", "manufacturing"],
    strengths: ["foundation-style segmentation across many tasks", "few-shot / promptable behaviour"],
    weaknesses: ["domain shift on specialised imagery", "no semantic labels by default"],
    domains: ["radiology", "pathology", "agriculture", "manufacturing"],
    landmarkPapers: ["paper-sam", "paper-nnunet"],
    commonMisunderstanding: "SAM gives you masks, not diagnoses. The mask is a building block; the clinical / agronomic decision still needs domain context.",
    maturity: "Production",
    sourceIds: ["paper-sam", "paper-nnunet"]
  },
  {
    id: "object-detection",
    name: "Object Detection models",
    family: "Vision",
    whatItIs: "Models that produce bounding boxes and class labels. YOLO-, DETR- and CenterNet-style architectures dominate.",
    whereUsed: ["AV perception", "manufacturing", "retail", "security", "drones"],
    strengths: ["fast, well-deployed pipelines", "strong open-source ecosystem"],
    weaknesses: ["fine-grained categorisation is hard", "rare classes underperform"],
    domains: ["autonomous-vehicles", "manufacturing", "agriculture", "defence"],
    landmarkPapers: ["needs-verification"],
    commonMisunderstanding: "Detection benchmarks (COCO mAP) are not deployment metrics. Long-tail and edge-case performance is what fails in the field.",
    maturity: "Production",
    sourceIds: ["needs-verification"]
  },
  {
    id: "diffusion",
    name: "Diffusion models",
    family: "Vision / generative",
    whatItIs: "Generative models that learn to invert a gradual noising process. State of the art for images, and increasingly for audio, video, molecules and policies.",
    whereUsed: ["image, video and audio generation", "molecule and protein design", "robotics policies"],
    strengths: ["high-fidelity generation", "controllable conditioning", "spans modalities"],
    weaknesses: ["compute-heavy", "evaluation is open"],
    domains: ["media-entertainment", "design-architecture", "drug-discovery", "protein-design", "robotics"],
    landmarkPapers: ["paper-ddpm", "paper-ldm", "paper-diffdock", "paper-rfdiffusion"],
    commonMisunderstanding: "Diffusion is not just for images. The same recipe shows up in molecules, proteins, audio, video and robot actions.",
    maturity: "Production",
    sourceIds: ["paper-ddpm", "paper-ldm"]
  },
  {
    id: "video-models",
    name: "Video generation / understanding models",
    family: "Vision / generative",
    whatItIs: "Diffusion or autoregressive models that generate video, or transformer / 3D-CNN models that understand it.",
    whereUsed: ["entertainment", "creator tools", "robotics world models"],
    strengths: ["temporal coherence is improving", "multimodal grounding"],
    weaknesses: ["expensive to train and infer", "physical plausibility limited"],
    domains: ["media-entertainment", "gaming", "robotics"],
    landmarkPapers: ["needs-verification"],
    commonMisunderstanding: "Looking real and being physically right are different things. Video models can produce footage that violates basic physics.",
    maturity: "Early production",
    sourceIds: ["needs-verification"]
  },

  /* ── Biology / chemistry ── */
  {
    id: "protein-lm",
    name: "Protein Language Models",
    family: "Biology",
    whatItIs: "Transformers trained on protein sequences (e.g. ESM family). Provide useful embeddings and zero-shot variant-effect predictions; underpin many design pipelines.",
    whereUsed: ["protein design", "variant effect prediction", "structure prediction priors"],
    strengths: ["transfer across protein families", "useful representations"],
    weaknesses: ["limited beyond known evolutionary distributions", "trained largely on natural sequences"],
    domains: ["drug-discovery", "protein-design", "genomics"],
    landmarkPapers: ["paper-esm2"],
    commonMisunderstanding: "Protein LMs don&rsquo;t replace structure prediction. They complement it.",
    maturity: "Production",
    sourceIds: ["paper-esm2"]
  },
  {
    id: "molecular-gnn",
    name: "Molecular Graph Neural Networks",
    family: "Biology / chemistry",
    whatItIs: "GNNs that operate on molecular graphs (atoms = nodes, bonds = edges) for property prediction, generation and interaction modelling.",
    whereUsed: ["property prediction", "QSAR", "reaction prediction", "docking inputs"],
    strengths: ["respects chemistry's natural structure", "data-efficient"],
    weaknesses: ["3D structure information is non-trivial to incorporate", "outperformed by transformers on some property tasks"],
    domains: ["drug-discovery", "chemistry", "materials-science"],
    landmarkPapers: ["paper-gcn"],
    commonMisunderstanding: "Molecular GNNs are not a single thing. Architecture variants (message passing, graph transformers, equivariant variants) matter for performance.",
    maturity: "Production",
    sourceIds: ["paper-gcn"]
  },
  {
    id: "equivariant-nn",
    name: "Equivariant Neural Networks",
    family: "Biology / physics",
    whatItIs: "Networks that respect physical symmetries (rotation, translation, permutation). Critical for 3D molecular structure, materials, and physics.",
    whereUsed: ["protein structure", "molecular dynamics", "materials property prediction", "physics simulation"],
    strengths: ["data-efficient when symmetries are respected", "physically consistent outputs"],
    weaknesses: ["complex implementation", "harder to scale than vanilla transformers"],
    domains: ["protein-design", "drug-discovery", "materials-science", "physics"],
    landmarkPapers: ["needs-verification"],
    commonMisunderstanding: "Equivariance is not always necessary. For some tasks, brute-force data augmentation works comparably.",
    maturity: "Production",
    sourceIds: ["needs-verification"]
  },
  {
    id: "diffusion-bio",
    name: "Diffusion models for molecules / proteins",
    family: "Biology",
    whatItIs: "Diffusion processes adapted to molecular and protein data, used to generate candidate structures and ligand-receptor poses.",
    whereUsed: ["protein design (RFdiffusion)", "ligand docking (DiffDock)", "molecular generation"],
    strengths: ["expressive generation in 3D", "compatible with conditioning"],
    weaknesses: ["compute-intensive", "lab-validation gate"],
    domains: ["drug-discovery", "protein-design"],
    landmarkPapers: ["paper-rfdiffusion", "paper-diffdock"],
    commonMisunderstanding: "Generated structures are not validated drugs or proteins. Lab is the gate.",
    maturity: "Research frontier",
    sourceIds: ["paper-rfdiffusion", "paper-diffdock"]
  },

  /* ── Finance / time series ── */
  {
    id: "gbdt",
    name: "Gradient Boosted Trees",
    family: "Tabular",
    whatItIs: "Ensemble of decision trees built sequentially. XGBoost, LightGBM and CatBoost are the dominant implementations and the workhorses of finance, fraud and ranking.",
    whereUsed: ["banking", "fraud", "credit", "ranking", "industrial scoring", "Kaggle"],
    strengths: ["strong on tabular data", "fast to train and infer", "well-understood by regulators"],
    weaknesses: ["hard to use raw text or images", "requires feature engineering"],
    domains: ["banking", "fraud-detection", "risk-management", "insurance"],
    landmarkPapers: ["needs-verification"],
    commonMisunderstanding: "GBDT is not legacy. It still wins on tabular at production scale.",
    maturity: "Production",
    sourceIds: ["needs-verification"]
  },
  {
    id: "ts-transformer",
    name: "Time-series Transformers",
    family: "Time series",
    whatItIs: "Transformer-based models for sequence forecasting and classification on time-series. Includes specialised architectures (PatchTST, iTransformer) and time-series foundation models (Chronos, TimesFM, Moirai).",
    whereUsed: ["finance", "energy load", "weather", "demand", "anomaly detection"],
    strengths: ["zero-shot forecasting from foundation models", "joint modelling across many series"],
    weaknesses: ["sometimes outperformed by classical models on simple, stationary series"],
    domains: ["quant-finance", "trading", "energy-grid", "climate-weather", "supply-chain"],
    landmarkPapers: ["needs-verification"],
    commonMisunderstanding: "Foundation forecasters do not always beat ARIMA. They are useful where data scale and heterogeneity make classical models hard to maintain.",
    maturity: "Early production",
    sourceIds: ["needs-verification"]
  },
  {
    id: "anomaly-detection",
    name: "Anomaly Detection",
    family: "Tabular / time series",
    whatItIs: "A family of methods (statistical, density-based, autoencoder, transformer) that flag rare or unusual patterns in data.",
    whereUsed: ["fraud", "cybersecurity", "manufacturing QC", "telemetry"],
    strengths: ["works without labelled positive cases", "scales to streaming"],
    weaknesses: ["false positive rate is the practical bottleneck", "drift sensitive"],
    domains: ["fraud-detection", "cybersecurity", "manufacturing", "telecommunications", "aerospace-space"],
    landmarkPapers: ["needs-verification"],
    commonMisunderstanding: "Anomalies are not failures. The system has to be calibrated for the cost of investigation.",
    maturity: "Production",
    sourceIds: ["needs-verification"]
  },
  {
    id: "rl-execution",
    name: "Reinforcement Learning for Execution",
    family: "Finance / control",
    whatItIs: "RL agents trained on market microstructure data to schedule and place orders to minimise market impact and slippage.",
    whereUsed: ["execution algorithms", "smart order routing"],
    strengths: ["adaptive to live conditions", "co-optimises across child orders"],
    weaknesses: ["sim-to-real gap on market impact", "training data is non-stationary"],
    domains: ["trading"],
    landmarkPapers: ["needs-verification"],
    commonMisunderstanding: "Execution RL is not predicting price. It is minimising cost given a parent order.",
    maturity: "Production",
    sourceIds: ["needs-verification"]
  },

  /* ── Robotics ── */
  {
    id: "imitation-learning",
    name: "Imitation Learning",
    family: "Robotics",
    whatItIs: "Train a policy to mimic expert demonstrations (teleop, kinesthetic, video). Foundation of many modern robotic manipulation systems.",
    whereUsed: ["manipulation", "navigation", "self-driving"],
    strengths: ["data-efficient when demos are good", "stable training"],
    weaknesses: ["compounding error on long horizons", "can fail outside demonstration distribution"],
    domains: ["robotics", "autonomous-vehicles"],
    landmarkPapers: ["paper-rt1", "paper-rt2"],
    commonMisunderstanding: "Imitation learning works only as far as the demonstrations cover the world. Distribution shift is the dominant failure mode.",
    maturity: "Production",
    sourceIds: ["paper-rt1", "paper-rt2"]
  },
  {
    id: "diffusion-policy",
    name: "Diffusion Policies",
    family: "Robotics",
    whatItIs: "Use a diffusion model to generate sequences of robot actions conditioned on observations. Robust to multimodal demonstrations.",
    whereUsed: ["dexterous manipulation", "humanoids"],
    strengths: ["handles multimodal demonstrations", "smooth action trajectories"],
    weaknesses: ["inference latency", "training compute"],
    domains: ["robotics"],
    landmarkPapers: ["paper-diffusion-policy"],
    commonMisunderstanding: "Diffusion policies are not a free lunch. They are a very effective way to use diffusion models for control, given enough data.",
    maturity: "Research frontier",
    sourceIds: ["paper-diffusion-policy"]
  },
  {
    id: "vla",
    name: "Vision-Language-Action models",
    family: "Robotics",
    whatItIs: "Multimodal foundation models that map images + language instructions to robot actions. RT-2 was the canonical example; many successors.",
    whereUsed: ["humanoids", "dexterous manipulation", "service robots"],
    strengths: ["leverage internet-scale pretraining for embodiment", "language-conditioned skills"],
    weaknesses: ["still limited by robot data scale", "embodiment generalisation is open"],
    domains: ["robotics"],
    landmarkPapers: ["paper-rt2", "paper-palme"],
    commonMisunderstanding: "Internet-scale pretraining does not solve embodiment. Real-robot data is still the binding constraint.",
    maturity: "Research frontier",
    sourceIds: ["paper-rt2"]
  },
  {
    id: "world-models",
    name: "World Models",
    family: "Robotics / RL",
    whatItIs: "Learned models of environment dynamics used to plan or train policies in imagination. Connect to video / physics generation.",
    whereUsed: ["robotics", "AV", "games"],
    strengths: ["sample-efficient policy learning", "imagined planning"],
    weaknesses: ["compounding error in rollouts", "hard to scale to messy real-world dynamics"],
    domains: ["robotics", "autonomous-vehicles", "gaming"],
    landmarkPapers: ["needs-verification"],
    commonMisunderstanding: "A world model is not a simulator. It is a learned approximation; reality always has surprises.",
    maturity: "Research frontier",
    sourceIds: ["needs-verification"]
  },
  {
    id: "sim-to-real",
    name: "Sim-to-Real Transfer",
    family: "Robotics",
    whatItIs: "Strategies for training in simulation and deploying on real hardware: domain randomisation, system identification, sim2real fine-tuning.",
    whereUsed: ["humanoids", "manipulation", "AV"],
    strengths: ["scale of training in sim", "safe iteration"],
    weaknesses: ["physics gap", "perception gap", "actuator gap"],
    domains: ["robotics", "autonomous-vehicles"],
    landmarkPapers: ["needs-verification"],
    commonMisunderstanding: "More simulation does not always close the gap. The right curriculum and randomisation matter more than raw volume.",
    maturity: "Production",
    sourceIds: ["needs-verification"]
  },
  {
    id: "rl-control",
    name: "Reinforcement Learning",
    family: "RL",
    whatItIs: "Policies learned by interaction with an environment to maximise reward. Underpins many robotic, control and game systems; emerging for execution and orchestration.",
    whereUsed: ["robotics", "trading execution", "game playing", "RLHF for alignment"],
    strengths: ["learns through interaction", "can find non-obvious strategies"],
    weaknesses: ["sample-inefficient", "reward design is hard", "sim-to-real for embodied tasks"],
    domains: ["robotics", "autonomous-vehicles", "gaming", "trading"],
    landmarkPapers: ["paper-dqn", "paper-alphazero", "paper-instructgpt"],
    commonMisunderstanding: "RLHF is not the same as RL on the world. It is RL on a learned reward model from human preferences.",
    maturity: "Production",
    sourceIds: ["paper-dqn", "paper-alphazero", "paper-instructgpt"]
  },

  /* ── Scientific AI ── */
  {
    id: "pinn",
    name: "Physics-Informed Neural Networks",
    family: "Scientific AI",
    whatItIs: "Networks that incorporate PDE residuals or physical constraints into the loss. Used to solve forward and inverse problems with limited data.",
    whereUsed: ["fluid dynamics", "heat transfer", "geophysics"],
    strengths: ["data-efficient when physics is known", "uses physics as inductive bias"],
    weaknesses: ["training stability", "scaling to high-dimensional or multiscale problems"],
    domains: ["physics", "scientific-computing", "energy-grid"],
    landmarkPapers: ["paper-pinn"],
    commonMisunderstanding: "PINNs do not solve PDEs better than classical solvers in most cases. They are useful when data is sparse or the inverse problem is hard.",
    maturity: "Research frontier",
    sourceIds: ["paper-pinn"]
  },
  {
    id: "neural-operators",
    name: "Neural Operators (FNO, DeepONet)",
    family: "Scientific AI",
    whatItIs: "Neural networks that learn maps between function spaces, allowing fast surrogates for entire families of PDEs.",
    whereUsed: ["weather", "fluid dynamics", "elasticity", "engineering design"],
    strengths: ["resolution-independent", "fast surrogates", "learn families of PDEs"],
    weaknesses: ["distribution shift outside training regimes", "physical guarantees are weak"],
    domains: ["scientific-computing", "climate-weather", "physics"],
    landmarkPapers: ["paper-fno"],
    commonMisunderstanding: "Neural operators are surrogates, not solvers. They approximate; they do not derive.",
    maturity: "Research frontier",
    sourceIds: ["paper-fno"]
  },
  {
    id: "differentiable-sim",
    name: "Differentiable Simulation",
    family: "Scientific AI",
    whatItIs: "Simulators that propagate gradients end-to-end, enabling design optimisation and policy learning through physics.",
    whereUsed: ["robotics", "engineering design", "graphics"],
    strengths: ["gradient-based optimisation through dynamics", "tighter design loops"],
    weaknesses: ["non-differentiable contact and discontinuities", "compute cost"],
    domains: ["robotics", "scientific-computing", "aerospace-space"],
    landmarkPapers: ["needs-verification"],
    commonMisunderstanding: "Differentiable simulation is not a free optimisation. Discontinuities (contact, friction) make gradients informative only in some regimes.",
    maturity: "Research frontier",
    sourceIds: ["needs-verification"]
  },
  {
    id: "bayesian-opt",
    name: "Bayesian Optimisation & Active Learning",
    family: "Scientific AI",
    whatItIs: "Sequential strategies for sample-efficient experimentation. Used to choose the next experiment under budget.",
    whereUsed: ["materials", "chemistry", "drug discovery", "hyperparameter search"],
    strengths: ["sample-efficient", "principled uncertainty"],
    weaknesses: ["scales poorly with very high-dimensional search", "requires good surrogates"],
    domains: ["materials-science", "chemistry", "drug-discovery"],
    landmarkPapers: ["needs-verification"],
    commonMisunderstanding: "Active learning is not a model architecture. It is a strategy for choosing experiments around a model.",
    maturity: "Production",
    sourceIds: ["needs-verification"]
  },

  /* ── Enterprise / general ── */
  {
    id: "embeddings",
    name: "Embeddings & Vector Search",
    family: "Enterprise / IR",
    whatItIs: "Map text, images or other items to dense vectors so semantic similarity can be computed by inner product or cosine. The substrate for RAG, search and recommendation.",
    whereUsed: ["search", "RAG", "recommendation", "matching"],
    strengths: ["scales to billions of items", "language- and modality-agnostic"],
    weaknesses: ["quality bottlenecked by embedder", "metadata filters often dominate at scale"],
    domains: ["consumer-search", "customer-support", "legal", "research-workflows"],
    landmarkPapers: ["needs-verification"],
    commonMisunderstanding: "Vector search is not always the right answer. Lexical retrieval (BM25) still wins on many enterprise corpora.",
    maturity: "Production",
    sourceIds: ["needs-verification"]
  },
  {
    id: "asr-tts",
    name: "Speech (ASR / TTS)",
    family: "Speech",
    whatItIs: "Automatic speech recognition and text-to-speech. Whisper-class models are the open baseline; ElevenLabs and similar dominate quality TTS.",
    whereUsed: ["clinical scribes", "voice agents", "media", "accessibility", "telecom"],
    strengths: ["high quality across languages", "robust to noise"],
    weaknesses: ["medical / legal vocabulary still imperfect", "voice cloning ethics"],
    domains: ["clinical-documentation", "customer-support", "music-audio", "telecommunications"],
    landmarkPapers: ["needs-verification"],
    commonMisunderstanding: "A clean transcript is not a clean note. Domain-specific terminology and structure are still hard.",
    maturity: "Production",
    sourceIds: ["needs-verification"]
  },
  {
    id: "ocr-docai",
    name: "OCR & Document AI",
    family: "Document",
    whatItIs: "Optical character recognition + layout / table parsing + entity extraction. Underlies invoice processing, claims, contracts, KYC.",
    whereUsed: ["banking", "insurance", "audit", "legal", "logistics"],
    strengths: ["mature on common documents", "integrates with RPA"],
    weaknesses: ["fragile on novel layouts", "handwriting still hard"],
    domains: ["banking", "insurance", "accounting-audit", "legal", "supply-chain"],
    landmarkPapers: ["needs-verification"],
    commonMisunderstanding: "OCR is solved on print, not on the wild. Real production documents are messier than benchmarks.",
    maturity: "Production",
    sourceIds: ["needs-verification"]
  },
  {
    id: "recsys",
    name: "Recommendation Systems",
    family: "Ranking",
    whatItIs: "Models that predict user-item interactions, increasingly multi-task and generative. Drive feeds, search, ads and shopping.",
    whereUsed: ["consumer", "media", "commerce"],
    strengths: ["enormous data feedback", "production-scale infrastructure"],
    weaknesses: ["objective is multi-stakeholder (engagement vs welfare)", "feedback loops"],
    domains: ["consumer-search", "media-entertainment", "gaming"],
    landmarkPapers: ["needs-verification"],
    commonMisunderstanding: "Recsys optimises a measurable proxy, not user welfare. The choice of proxy is a values decision.",
    maturity: "Production",
    sourceIds: ["needs-verification"]
  },

  /* ── Security ── */
  {
    id: "graph-threat",
    name: "Graph-based Threat Detection",
    family: "Security",
    whatItIs: "Graph models on user / device / event graphs to surface fraud, intrusion and abuse patterns invisible to per-row classifiers.",
    whereUsed: ["AML", "fraud", "intrusion detection", "abuse"],
    strengths: ["captures relational patterns", "robust to adversarial drift via structure"],
    weaknesses: ["graph engineering is heavy", "label scarcity"],
    domains: ["banking", "fraud-detection", "cybersecurity"],
    landmarkPapers: ["paper-gcn"],
    commonMisunderstanding: "Graph features are not magic. They lift detection on relational signals; flat features still matter.",
    maturity: "Production",
    sourceIds: ["paper-gcn"]
  },
  {
    id: "code-analysis-ml",
    name: "Code Analysis & Vulnerability Models",
    family: "Security / code",
    whatItIs: "Models trained on code (and sometimes binary) to detect vulnerabilities, classify malware and assist code review.",
    whereUsed: ["AppSec", "malware analysis", "code review"],
    strengths: ["scales review across large repos", "complements rule-based scanners"],
    weaknesses: ["false positives still high", "adversarial drift in malware"],
    domains: ["cybersecurity", "software-engineering"],
    landmarkPapers: ["needs-verification"],
    commonMisunderstanding: "ML in security is not a replacement for static analysis or fuzzing. It is one tool in the stack.",
    maturity: "Early production",
    sourceIds: ["needs-verification"]
  }
];

/* ============================================
   DOMAIN_USE_CASES
   Representative use cases (not exhaustive). Each shows how a specific
   workflow maps onto AI architectures, data and risks.
   ============================================ */
var DOMAIN_USE_CASES = [
  {
    id: "uc-radiology-report-assist",
    domainId: "radiology",
    name: "Radiology report assistance",
    problem: "Radiologists interpret high volumes of imaging studies and produce structured reports.",
    howAIHelps: "Vision models detect patterns and segment findings; LLMs help draft, summarise or structure reports. Radiologist review remains essential.",
    architecturesUsed: ["cnn", "vit", "segmentation-models", "multimodal-llm"],
    inputs: ["X-ray", "CT", "MRI", "ultrasound", "clinical notes"],
    outputs: ["findings", "triage flags", "draft report", "structured summary"],
    maturity: "Early production",
    bottlenecks: ["clinical validation", "PACS integration", "liability", "bias", "data shift across scanners"],
    realWorldExamples: ["Aidoc and Viz.ai have FDA-cleared workflow tools for stroke and pulmonary-embolism triage / notification (per vendor and FDA listings).", "Rad AI is a vendor of report-drafting tooling (impressions, generative reporting); deployment varies by health system."],
    risks: ["false negatives", "automation bias", "dataset bias"],
    sourceIds: ["paper-unet", "paper-chexnet"]
  },
  {
    id: "uc-pathology-biomarker",
    domainId: "pathology",
    name: "Biomarker prediction from H&amp;E slides",
    problem: "Molecular biomarker testing is slow and expensive but drives treatment decisions.",
    howAIHelps: "Slide-level foundation models predict biomarker status from H&amp;E imagery, prioritising which patients to test.",
    architecturesUsed: ["vit", "domain-fm"],
    inputs: ["H&amp;E whole-slide images"],
    outputs: ["biomarker score", "ranked candidate patients"],
    maturity: "Research frontier",
    bottlenecks: ["clinical actionability", "regulatory validation", "stain variation"],
    realWorldExamples: ["needsVerification: published research from foundation pathology models"],
    risks: ["over-reliance on imperfect predictions", "missed molecular subtypes"],
    sourceIds: ["needs-verification"]
  },
  {
    id: "uc-drug-virtual-screen",
    domainId: "drug-discovery",
    name: "Virtual screening of compound libraries",
    problem: "Physical screening of millions of compounds is slow and expensive.",
    howAIHelps: "ML scoring functions and docking models rank candidates so wet-lab effort focuses on the most promising.",
    architecturesUsed: ["molecular-gnn", "diffusion-bio", "equivariant-nn"],
    inputs: ["compound library SMILES / structures", "target protein structure"],
    outputs: ["ranked hit list", "predicted binding poses"],
    maturity: "Production",
    bottlenecks: ["false-positive rate at the wet-lab gate", "novel-target generalisation"],
    realWorldExamples: ["DiffDock on benchmark targets", "industry-internal screens at Recursion, Atomwise"],
    risks: ["chasing in-silico false positives"],
    sourceIds: ["paper-diffdock"]
  },
  {
    id: "uc-quant-alpha",
    domainId: "quant-finance",
    name: "Alternative-data alpha generation",
    problem: "Discover predictive signals in non-traditional data (satellite, transactions, web traffic) before competitors.",
    howAIHelps: "Time-series and embedding models extract signals; backtests under realistic costs determine whether they survive.",
    architecturesUsed: ["ts-transformer", "embeddings", "gbdt"],
    inputs: ["alt-data feeds", "market data", "fundamentals"],
    outputs: ["predicted returns", "portfolio weights"],
    maturity: "Production",
    bottlenecks: ["data leakage", "regime shift", "transaction-cost realism"],
    realWorldExamples: ["public reporting from quant funds suggests alt data is now table stakes"],
    risks: ["overfitting", "look-ahead bias"],
    sourceIds: ["needs-verification"]
  },
  {
    id: "uc-fraud-realtime",
    domainId: "fraud-detection",
    name: "Real-time card-not-present fraud scoring",
    problem: "Authorise transactions in milliseconds while keeping fraud rates and false-positives low.",
    howAIHelps: "Online ensembles of GBDT and graph features score transactions against historical entity behaviour.",
    architecturesUsed: ["gbdt", "graph-threat", "anomaly-detection"],
    inputs: ["transaction stream", "device + identity history"],
    outputs: ["accept / step-up / decline"],
    maturity: "Production",
    bottlenecks: ["adversarial drift", "feedback latency", "false-positive cost"],
    realWorldExamples: ["card-network rule + ML stacks; industry vendors (FeatureSpace, Sift, Forter, Stripe Radar)"],
    risks: ["consumer friction from false positives"],
    sourceIds: ["needs-verification"]
  },
  {
    id: "uc-legal-research",
    domainId: "legal",
    name: "Citation-grounded legal research",
    problem: "Lawyers must find on-point authority across jurisdictions under time pressure.",
    howAIHelps: "RAG over case-law corpora retrieves authorities; LLMs draft memos with verifiable citations; lawyer reviews.",
    architecturesUsed: ["rag", "embeddings", "llm"],
    inputs: ["legal question", "jurisdiction", "client facts"],
    outputs: ["draft memo with citations", "ranked authorities"],
    maturity: "Early production",
    bottlenecks: ["hallucinated citations", "jurisdictional fit", "privilege"],
    realWorldExamples: ["Harvey, Hebbia, Lexis+ AI, Westlaw / Casetext deployments at major firms"],
    risks: ["malpractice from unverified output"],
    sourceIds: ["paper-rag"]
  },
  {
    id: "uc-swe-coding-agent",
    domainId: "software-engineering",
    name: "Repo-scale coding agent",
    problem: "Many SWE tasks require reading the codebase, running tests, and iterating &mdash; not just writing a function.",
    howAIHelps: "Agentic LLMs retrieve repo context, draft changes, run tests in sandbox and iterate. Humans review and merge.",
    architecturesUsed: ["llm", "rag", "tool-agents"],
    inputs: ["task description", "repo state", "test suite"],
    outputs: ["pull request", "test logs", "rationale"],
    maturity: "Early production",
    bottlenecks: ["repo-scale context", "reliability", "cost per task", "secure code review"],
    realWorldExamples: ["Cursor, GitHub Copilot Workspace, Claude Code, Cognition Devin, OpenAI Codex"],
    risks: ["unintended side effects in production code", "security regressions"],
    sourceIds: ["src-swe-bench"]
  },
  {
    id: "uc-cyber-soc",
    domainId: "cybersecurity",
    name: "SOC alert triage copilot",
    problem: "Security operations centres receive far more alerts than analysts can investigate.",
    howAIHelps: "LLM copilots cluster, summarise and prioritise alerts, drafting investigation steps; analysts retain decision authority.",
    architecturesUsed: ["llm", "rag", "anomaly-detection", "graph-threat"],
    inputs: ["alert streams", "telemetry", "threat intel"],
    outputs: ["prioritised case", "investigation plan", "draft response"],
    maturity: "Early production",
    bottlenecks: ["false-positive volume", "trust in AI prioritisation", "data sensitivity"],
    realWorldExamples: ["Microsoft Security Copilot pilots", "vendor SOC AI from CrowdStrike, SentinelOne, Vectra"],
    risks: ["AI-induced complacency", "missed novel attacks"],
    sourceIds: ["src-mitre-attack"]
  },
  {
    id: "uc-edu-tutor",
    domainId: "education",
    name: "Subject-specific Socratic tutor",
    problem: "1:1 tutoring is the gold standard for learning gains; access is unequal.",
    howAIHelps: "Subject LLMs ask leading questions, give targeted feedback, and adapt to student level &mdash; with safety scaffolding for minors.",
    architecturesUsed: ["llm", "rag", "domain-fm"],
    inputs: ["curriculum standards", "student response history"],
    outputs: ["next question", "feedback", "teacher dashboard"],
    maturity: "Early production",
    bottlenecks: ["evidence of learning gains", "integrity / cheating", "data protection"],
    realWorldExamples: ["Khan Academy Khanmigo, Duolingo Max, MagicSchool"],
    risks: ["over-reliance on AI feedback", "shortcut to answers without learning"],
    sourceIds: ["needs-verification"]
  },
  {
    id: "uc-robotics-pick",
    domainId: "robotics",
    name: "Generalised pick-and-place from demonstrations",
    problem: "Industrial pick-and-place still requires per-task engineering despite many demos in the literature.",
    howAIHelps: "Imitation learning + diffusion policies + VLA models try to absorb a wider range of objects and scenes from demonstrations.",
    architecturesUsed: ["imitation-learning", "diffusion-policy", "vla"],
    inputs: ["teleop demonstrations", "RGB-D observations", "language instruction"],
    outputs: ["robot trajectories"],
    maturity: "Research frontier",
    bottlenecks: ["data scale", "object generalisation", "embodiment generalisation"],
    realWorldExamples: ["Open X-Embodiment cross-robot dataset", "Physical Intelligence demonstrations"],
    risks: ["safety in unstructured environments"],
    sourceIds: ["paper-rt2", "paper-diffusion-policy", "paper-open-x"]
  },
  {
    id: "uc-mfg-defect",
    domainId: "manufacturing",
    name: "Defect detection on the line",
    problem: "Catch out-of-spec product before it ships, ideally without per-SKU custom training.",
    howAIHelps: "Vision models flag anomalies on conveyor / line imagery; operators confirm and feedback labels.",
    architecturesUsed: ["cnn", "vit", "anomaly-detection"],
    inputs: ["line cameras", "lighting controls", "MES context"],
    outputs: ["defect alerts", "trend reports"],
    maturity: "Production",
    bottlenecks: ["rare-defect labelling", "model drift across SKUs", "OT/IT integration"],
    realWorldExamples: ["Cognex, Landing AI, Instrumental, Drishti deployments"],
    risks: ["false negatives shipping defective product"],
    sourceIds: ["needs-verification"]
  },
  {
    id: "uc-weather-medium-range",
    domainId: "climate-weather",
    name: "Medium-range neural weather forecast",
    problem: "Numerical weather prediction is accurate but compute-heavy; rapid forecasts at scale matter for operations.",
    howAIHelps: "Graph and Fourier models trained on reanalysis data produce 5&ndash;10 day forecasts in seconds with skill competitive to NWP.",
    architecturesUsed: ["neural-operators", "ts-transformer", "molecular-gnn"],
    inputs: ["initial atmospheric state (ERA5)", "boundary conditions"],
    outputs: ["gridded forecasts of T, U, V, Z, MSLP, etc."],
    maturity: "Early production",
    bottlenecks: ["evaluation on rare extremes", "operational trust"],
    realWorldExamples: ["GraphCast, FourCastNet, Pangu-Weather, AIFS"],
    risks: ["over-trust on neural forecasts in unprecedented events"],
    sourceIds: ["paper-graphcast", "paper-fourcastnet", "paper-fno"]
  },
  {
    id: "uc-energy-renew-forecast",
    domainId: "energy-grid",
    name: "Wind / solar generation forecasting",
    problem: "Accurate short-term renewable forecasts are essential for grid balancing and bidding.",
    howAIHelps: "Time-series and weather-conditioned models forecast generation across sites and horizons.",
    architecturesUsed: ["ts-transformer", "neural-operators", "gbdt"],
    inputs: ["historical generation", "weather forecasts", "calendar / outage"],
    outputs: ["site-level generation forecasts"],
    maturity: "Production",
    bottlenecks: ["weather forecast errors", "site heterogeneity"],
    realWorldExamples: ["operator-internal and vendor (Octopus Energy, AutoGrid)"],
    risks: ["bid imbalance penalties"],
    sourceIds: ["needs-verification"]
  },
  {
    id: "uc-protein-binder",
    domainId: "protein-design",
    name: "De novo binder design",
    problem: "Generate novel proteins that bind a target with high affinity for therapeutics or research tools.",
    howAIHelps: "Diffusion models design backbones; ProteinMPNN designs sequences; in-silico filters select candidates for wet-lab.",
    architecturesUsed: ["diffusion-bio", "protein-lm", "equivariant-nn"],
    inputs: ["target structure / interface"],
    outputs: ["candidate sequences + structures"],
    maturity: "Research frontier",
    bottlenecks: ["expression / folding success", "wet-lab throughput"],
    realWorldExamples: ["RFdiffusion + ProteinMPNN published examples"],
    risks: ["over-reliance on in-silico ranking"],
    sourceIds: ["paper-rfdiffusion", "paper-proteinmpnn"]
  },
  {
    id: "uc-customer-service-deflection",
    domainId: "customer-support",
    name: "L1 deflection with grounded retrieval",
    problem: "Reduce average cost per ticket while keeping resolution quality.",
    howAIHelps: "RAG over knowledge bases drafts answers; intent classification routes to specialists when needed.",
    architecturesUsed: ["llm", "rag", "embeddings"],
    inputs: ["customer message", "knowledge base", "ticket history"],
    outputs: ["draft / final response", "escalation flag"],
    maturity: "Production",
    bottlenecks: ["KB hygiene", "evaluation", "channel integration"],
    realWorldExamples: ["Intercom Fin, Zendesk AI, Decagon, Sierra deployments"],
    risks: ["dead-end deflection that erodes trust"],
    sourceIds: ["paper-rag"]
  },
  {
    id: "uc-construction-progress",
    domainId: "construction",
    name: "Site progress tracking from imagery",
    problem: "Manual progress tracking is slow, partial and inconsistent across crews.",
    howAIHelps: "Vision models compare site photos / 360 captures against BIM and schedules to flag deviations.",
    architecturesUsed: ["cnn", "vit", "segmentation-models"],
    inputs: ["site captures", "BIM model", "schedule"],
    outputs: ["progress estimate", "deviation flags"],
    maturity: "Early production",
    bottlenecks: ["capture frequency and consistency", "BIM accuracy"],
    realWorldExamples: ["OpenSpace, Buildots"],
    risks: ["false confidence on partially captured sites"],
    sourceIds: ["needs-verification"]
  },
  {
    id: "uc-clinical-scribe",
    domainId: "clinical-documentation",
    name: "Ambient clinical scribe",
    problem: "Documentation burden is the largest source of clinician time-loss and burnout.",
    howAIHelps: "Ambient ASR + clinical LLMs draft a structured note from the patient encounter for clinician edit and sign-off.",
    architecturesUsed: ["asr-tts", "domain-fm", "rag"],
    inputs: ["encounter audio", "patient context"],
    outputs: ["draft SOAP note", "billing codes", "patient instructions"],
    maturity: "Production",
    bottlenecks: ["EHR integration", "specialty phrasing", "PHI handling"],
    realWorldExamples: ["Microsoft / Nuance DAX, Abridge, Augmedix, Suki"],
    risks: ["hallucinated clinical content reaching the chart"],
    sourceIds: ["needs-verification"]
  },
  {
    id: "uc-supply-disruption",
    domainId: "supply-chain",
    name: "Disruption signal monitoring",
    problem: "Geopolitical, weather and logistics disruptions affect cost and timing; monitoring is reactive.",
    howAIHelps: "Multi-source feeds (AIS, news, weather, social) are fused; LLMs summarise and route alerts to planners.",
    architecturesUsed: ["llm", "rag", "graph-threat", "ts-transformer"],
    inputs: ["AIS shipping", "news", "weather", "supplier risk"],
    outputs: ["alert", "impact estimate", "suggested mitigation"],
    maturity: "Early production",
    bottlenecks: ["false positives", "translation across jurisdictions", "data licensing"],
    realWorldExamples: ["Project44, FourKites, Everstream Analytics"],
    risks: ["over-reaction to weakly grounded signals"],
    sourceIds: ["needs-verification"]
  },
  {
    id: "uc-music-stem",
    domainId: "music-audio",
    name: "Stem separation and remixing",
    problem: "Producers need to isolate vocals, drums, bass and other tracks from finished masters.",
    howAIHelps: "Specialised separation models (Demucs, Hybrid-Demucs, MDX) separate stems with high fidelity.",
    architecturesUsed: ["diffusion", "cnn"],
    inputs: ["stereo master"],
    outputs: ["stems (vocals, drums, bass, other)"],
    maturity: "Production",
    bottlenecks: ["genre coverage", "rights and re-use"],
    realWorldExamples: ["consumer DAW plugins, post-production pipelines"],
    risks: ["unauthorised re-use of separated content"],
    sourceIds: ["needs-verification"]
  },
  {
    id: "uc-sat-imagery",
    domainId: "aerospace-space",
    name: "Geospatial foundation-model search",
    problem: "Manually scanning satellite imagery for change is impossibly slow at planetary scale.",
    howAIHelps: "Geospatial foundation models index imagery for fast similarity search and change detection.",
    architecturesUsed: ["vit", "domain-fm"],
    inputs: ["satellite imagery (EO / SAR)"],
    outputs: ["search results", "change maps"],
    maturity: "Early production",
    bottlenecks: ["modality coverage", "labelling for downstream"],
    realWorldExamples: ["Prithvi (NASA + IBM), commercial geospatial platforms"],
    risks: ["dual-use concerns"],
    sourceIds: ["needs-verification"]
  }
];

/* ============================================
   DOMAIN_WORKFLOWS
   The pipelines that show how a domain's AI work actually unfolds.
   ============================================ */
var DOMAIN_WORKFLOWS = [
  {
    id: "wf-drug-discovery",
    domainId: "drug-discovery",
    title: "Drug discovery pipeline",
    summary: "From target to candidate molecule under in-silico + wet-lab iteration.",
    steps: ["target identification", "hit finding (virtual screen / generative)", "hit validation (assay)", "lead optimisation", "DMPK + safety", "preclinical", "clinical translation"]
  },
  {
    id: "wf-radiology",
    domainId: "radiology",
    title: "Radiology AI pipeline",
    summary: "From scanner to structured report with AI augmentation at multiple steps.",
    steps: ["image acquisition", "DICOM ingest", "AI inference (triage / detection / segmentation)", "radiologist review", "report drafting / structured findings", "communication and follow-up"]
  },
  {
    id: "wf-quant-research",
    domainId: "quant-finance",
    title: "Quant research pipeline",
    summary: "From idea to deployed strategy under realistic-cost evaluation.",
    steps: ["data acquisition + cleaning", "feature research", "model fitting", "backtest with costs + slippage", "live paper trading", "capital allocation", "monitoring"]
  },
  {
    id: "wf-legal-research",
    domainId: "legal",
    title: "Legal research pipeline",
    summary: "Citation-grounded answer with attorney review.",
    steps: ["question intake", "scope + jurisdiction", "retrieve authorities (RAG)", "draft memo with citations", "associate review", "partner review", "filing / advice"]
  },
  {
    id: "wf-robotics-sim2real",
    domainId: "robotics",
    title: "Robotics sim-to-real pipeline",
    summary: "Train in simulation, transfer to hardware with grounded evaluation.",
    steps: ["task definition", "scene + dynamics in simulator", "policy training (RL / imitation / diffusion)", "domain randomisation", "real-robot deployment", "edge-case data collection", "iteration"]
  },
  {
    id: "wf-coding-agent",
    domainId: "software-engineering",
    title: "AI coding pipeline",
    summary: "From issue to merged PR through agentic iteration.",
    steps: ["task / issue", "retrieve repo context", "draft change", "run tests in sandbox", "iterate on failures", "PR review by human", "merge"]
  },
  {
    id: "wf-cyber-detection",
    domainId: "cybersecurity",
    title: "Cyber detection pipeline",
    summary: "Telemetry to triage to response, with AI in the loop.",
    steps: ["telemetry ingestion", "ML detection / scoring", "graph correlation", "analyst triage with copilot", "response", "post-incident review"]
  },
  {
    id: "wf-weather",
    domainId: "climate-weather",
    title: "Weather forecasting pipeline",
    summary: "From atmospheric state to operational forecast.",
    steps: ["observations + assimilation", "initial conditions", "neural forecast (e.g. GraphCast)", "ensemble + post-processing", "downstream applications", "verification"]
  },
  {
    id: "wf-mfg-defect",
    domainId: "manufacturing",
    title: "Manufacturing defect detection pipeline",
    summary: "From line camera to corrective action.",
    steps: ["camera capture", "ML inference", "operator alert", "verified label feedback", "drift monitoring", "retraining"]
  },
  {
    id: "wf-customer-support",
    domainId: "customer-support",
    title: "Customer support automation pipeline",
    summary: "From query to resolution with grounded retrieval and escalation.",
    steps: ["customer query", "intent + retrieval", "draft response", "human handoff if needed", "resolution", "feedback to KB"]
  },
  {
    id: "wf-protein-design",
    domainId: "protein-design",
    title: "Protein design pipeline",
    summary: "Design-build-test-learn for de novo proteins.",
    steps: ["target / function spec", "backbone design (RFdiffusion)", "sequence design (ProteinMPNN)", "in-silico filtering", "wet-lab expression + assay", "iterate"]
  },
  {
    id: "wf-clinical-docs",
    domainId: "clinical-documentation",
    title: "Ambient clinical documentation pipeline",
    summary: "From encounter audio to signed note.",
    steps: ["encounter audio capture", "ASR + diarisation", "structured note drafting", "clinician edit and sign-off", "EHR integration"]
  },
  {
    id: "wf-supply",
    domainId: "supply-chain",
    title: "Supply-chain disruption pipeline",
    summary: "From multi-source signal to planner action.",
    steps: ["multi-source ingestion (AIS, weather, news)", "signal fusion", "alerting + ranking", "planner review with copilot", "mitigation"]
  }
];

/* ============================================
   DOMAIN_BOTTLENECKS
   16 categories of bottleneck. Used to filter, group and explain
   why progress in a domain is gated by something other than model quality.
   ============================================ */
var DOMAIN_BOTTLENECKS = [
  { id: "bn-data-access", label: "Data access", description: "The data exists but is locked behind privacy, regulation, contracts or competitive moats.", domains: ["clinical-medicine", "drug-discovery", "banking", "intelligence-analysis", "telecommunications"] },
  { id: "bn-data-quality", label: "Data quality", description: "Data is messy, fragmented, or inconsistent across sites and time. Model quality is gated by data work.", domains: ["manufacturing", "supply-chain", "construction", "energy-grid", "public-health"] },
  { id: "bn-evaluation", label: "Evaluation", description: "It is hard to measure whether the model is actually doing the right thing in the wild.", domains: ["clinical-medicine", "education", "music-audio", "research-workflows", "legal"] },
  { id: "bn-regulation", label: "Regulation", description: "Regulators must approve or accept the deployment; pace is set by policy, not capability.", domains: ["clinical-medicine", "radiology", "banking", "insurance", "autonomous-vehicles", "defence"] },
  { id: "bn-liability", label: "Liability", description: "When AI goes wrong, who is accountable? High-liability contexts move slowly.", domains: ["clinical-medicine", "legal", "autonomous-vehicles", "defence", "insurance"] },
  { id: "bn-workflow-integration", label: "Workflow integration", description: "Connecting AI into legacy systems and human routines is the actual product work.", domains: ["clinical-medicine", "manufacturing", "supply-chain", "government-services", "telecommunications"] },
  { id: "bn-physical-validation", label: "Physical validation", description: "AI proposes; the physical world (cells, devices, materials, robots) decides.", domains: ["drug-discovery", "protein-design", "materials-science", "chemistry", "robotics"] },
  { id: "bn-compute-cost", label: "Compute cost", description: "The model works but is too expensive to run at the required scale or latency.", domains: ["climate-weather", "media-entertainment", "scientific-computing", "robotics"] },
  { id: "bn-latency", label: "Latency", description: "Real-time or near-real-time constraints make many large models impractical.", domains: ["trading", "fraud-detection", "robotics", "autonomous-vehicles", "gaming"] },
  { id: "bn-interpretability", label: "Interpretability", description: "The model must be explainable to clinicians, regulators, judges or operators.", domains: ["clinical-medicine", "banking", "risk-management", "legal", "defence"] },
  { id: "bn-privacy", label: "Privacy", description: "Working with sensitive personal or commercial data limits training data and deployment.", domains: ["clinical-medicine", "mental-health", "intelligence-analysis", "hr-recruiting", "public-health"] },
  { id: "bn-distribution", label: "Distribution / procurement", description: "Buying decisions are slow, multi-stakeholder, certification-bound.", domains: ["government-services", "defence", "clinical-medicine", "telecommunications", "energy-grid"] },
  { id: "bn-trust", label: "Human trust", description: "Users will not adopt the system without trust earned through evidence and habit.", domains: ["clinical-medicine", "legal", "defence", "autonomous-vehicles", "education"] },
  { id: "bn-safety", label: "Safety", description: "Failures cause physical, financial or reputational harm; risk tolerance is low.", domains: ["robotics", "autonomous-vehicles", "clinical-medicine", "defence", "energy-grid", "aerospace-space"] },
  { id: "bn-hallucination", label: "Hallucination / fabrication", description: "Confident but wrong outputs are catastrophic in domains that demand evidence.", domains: ["legal", "clinical-medicine", "research-workflows", "consumer-search", "intelligence-analysis"] },
  { id: "bn-adversarial", label: "Adversarial risk", description: "Adversaries actively work to break the system (jailbreaks, evasion, poisoning).", domains: ["cybersecurity", "fraud-detection", "intelligence-analysis", "consumer-search"] }
];

/* ============================================
   DOMAIN_PAPERS
   Landmark papers. Each entry is included only when title, authors,
   year and venue can be cited with confidence. Where uncertain,
   confidence: "needsVerification".
   ============================================ */
var DOMAIN_PAPERS = [
  /* ── Foundation / general ── */
  { id: "paper-attention", title: "Attention Is All You Need", authors: "Vaswani et al.", year: 2017, venue: "NeurIPS", domain: "general", architecture: "transformer", whyItMatters: "Introduced the transformer, the architecture underneath nearly every modern foundation model.", whatItEnabled: "BERT, GPT, the broader LLM era.", limitations: "The original was a translation paper; modern LLM training is far beyond it.", sourceUrl: "https://arxiv.org/abs/1706.03762", confidence: "sourced" },
  { id: "paper-bert", title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding", authors: "Devlin et al.", year: 2018, venue: "arXiv / NAACL 2019", domain: "general", architecture: "transformer", whyItMatters: "Showed bidirectional pretraining enables strong transfer; the dominant NLP recipe for years.", whatItEnabled: "Practical text classification, NER, search.", limitations: "Encoder-only; not generative.", sourceUrl: "https://arxiv.org/abs/1810.04805", confidence: "sourced" },
  { id: "paper-gpt3", title: "Language Models are Few-Shot Learners", authors: "Brown et al.", year: 2020, venue: "NeurIPS", domain: "general", architecture: "transformer", whyItMatters: "Scaled a decoder-only transformer to 175B parameters and demonstrated emergent in-context learning.", whatItEnabled: "The modern LLM product category.", limitations: "Closed weights; analysis limited.", sourceUrl: "https://arxiv.org/abs/2005.14165", confidence: "sourced" },
  { id: "paper-instructgpt", title: "Training language models to follow instructions with human feedback", authors: "Ouyang et al.", year: 2022, venue: "NeurIPS / arXiv", domain: "general", architecture: "RLHF", whyItMatters: "Operationalised RLHF for instruction-following; pivotal for the ChatGPT product.", whatItEnabled: "Aligned chat models across the industry.", limitations: "Reward-model proxies have known failure modes.", sourceUrl: "https://arxiv.org/abs/2203.02155", confidence: "sourced" },
  { id: "paper-rag", title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", authors: "Lewis et al.", year: 2020, venue: "NeurIPS", domain: "general", architecture: "rag", whyItMatters: "Formalised RAG as a way to ground generative models in retrieved documents.", whatItEnabled: "Almost every grounded LLM product.", limitations: "Quality is bounded by retrieval.", sourceUrl: "https://arxiv.org/abs/2005.11401", confidence: "sourced" },
  { id: "paper-react", title: "ReAct: Synergizing Reasoning and Acting in Language Models", authors: "Yao et al.", year: 2023, venue: "ICLR", domain: "general", architecture: "tool-agents", whyItMatters: "Pattern for interleaving reasoning and tool use; foundation for modern agentic systems.", whatItEnabled: "Coding agents, browser agents, research agents.", limitations: "Compounding error in long chains.", sourceUrl: "https://arxiv.org/abs/2210.03629", confidence: "sourced" },
  { id: "paper-toolformer", title: "Toolformer: Language Models Can Teach Themselves to Use Tools", authors: "Schick et al.", year: 2023, venue: "arXiv", domain: "general", architecture: "tool-agents", whyItMatters: "Self-supervised tool-use signal; influential on agent training.", whatItEnabled: "Tool-use as a training-time concept, not just inference-time.", limitations: "Recipe varies across follow-up work.", sourceUrl: "https://arxiv.org/abs/2302.04761", confidence: "sourced" },

  /* ── Vision ── */
  { id: "paper-resnet", title: "Deep Residual Learning for Image Recognition", authors: "He et al.", year: 2016, venue: "CVPR", domain: "vision", architecture: "cnn", whyItMatters: "Introduced residual connections; enabled training of much deeper networks.", whatItEnabled: "The deep CNN era of vision.", limitations: "Has been displaced for many tasks by transformers.", sourceUrl: "https://arxiv.org/abs/1512.03385", confidence: "sourced" },
  { id: "paper-unet", title: "U-Net: Convolutional Networks for Biomedical Image Segmentation", authors: "Ronneberger et al.", year: 2015, venue: "MICCAI", domain: "medical imaging", architecture: "unet", whyItMatters: "Default architecture for medical image segmentation; still the strong baseline.", whatItEnabled: "Most production medical-imaging segmentation pipelines.", limitations: "Simpler than transformer alternatives at large scale.", sourceUrl: "https://arxiv.org/abs/1505.04597", confidence: "sourced" },
  { id: "paper-nnunet", title: "nnU-Net: a self-configuring method for deep learning-based biomedical image segmentation", authors: "Isensee et al.", year: 2021, venue: "Nature Methods", domain: "medical imaging", architecture: "unet", whyItMatters: "Self-configuring U-Net pipeline that consistently wins on medical segmentation challenges.", whatItEnabled: "Strong baseline for any medical segmentation task.", limitations: "Heavy compute; limited customisation by design.", sourceUrl: "https://www.nature.com/articles/s41592-020-01008-z", confidence: "sourced" },
  { id: "paper-vit", title: "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale", authors: "Dosovitskiy et al.", year: 2021, venue: "ICLR", domain: "vision", architecture: "vit", whyItMatters: "Showed transformers can match or beat CNNs at vision when trained at scale.", whatItEnabled: "Most modern multimodal foundation models.", limitations: "Data-hungry on smaller datasets.", sourceUrl: "https://arxiv.org/abs/2010.11929", confidence: "sourced" },
  { id: "paper-clip", title: "Learning Transferable Visual Models From Natural Language Supervision", authors: "Radford et al.", year: 2021, venue: "ICML", domain: "vision-language", architecture: "vlm", whyItMatters: "Aligned image and text via contrastive learning at web scale.", whatItEnabled: "Zero-shot image classification, search, and downstream multimodal models.", limitations: "Inherits web biases; weak on fine-grained tasks.", sourceUrl: "https://arxiv.org/abs/2103.00020", confidence: "sourced" },
  { id: "paper-flamingo", title: "Flamingo: a Visual Language Model for Few-Shot Learning", authors: "Alayrac et al.", year: 2022, venue: "NeurIPS", domain: "vision-language", architecture: "multimodal-llm", whyItMatters: "Strong few-shot multimodal LLM design that influenced subsequent work.", whatItEnabled: "Modern multimodal chat assistants.", limitations: "Closed weights at the time.", sourceUrl: "https://arxiv.org/abs/2204.14198", confidence: "sourced" },
  { id: "paper-llava", title: "Visual Instruction Tuning (LLaVA)", authors: "Liu et al.", year: 2023, venue: "NeurIPS", domain: "vision-language", architecture: "multimodal-llm", whyItMatters: "Open recipe for instruction-tuning multimodal LLMs.", whatItEnabled: "Open multimodal chat models for research.", limitations: "Smaller than closed peers; data quality varies.", sourceUrl: "https://arxiv.org/abs/2304.08485", confidence: "sourced" },
  { id: "paper-sam", title: "Segment Anything", authors: "Kirillov et al.", year: 2023, venue: "ICCV", domain: "vision", architecture: "segmentation-models", whyItMatters: "Promptable segmentation foundation model trained on a billion-mask dataset.", whatItEnabled: "Segmentation as a foundation-model capability across domains.", limitations: "No semantic labels by default; fine-grained / specialty domains often need adaptation.", sourceUrl: "https://arxiv.org/abs/2304.02643", confidence: "sourced" },
  { id: "paper-ddpm", title: "Denoising Diffusion Probabilistic Models", authors: "Ho et al.", year: 2020, venue: "NeurIPS", domain: "generative", architecture: "diffusion", whyItMatters: "Modern diffusion-model recipe; foundation of the image-generation era.", whatItEnabled: "Stable Diffusion, Sora, Diffusion Policy and more.", limitations: "Compute-intensive sampling.", sourceUrl: "https://arxiv.org/abs/2006.11239", confidence: "sourced" },
  { id: "paper-ldm", title: "High-Resolution Image Synthesis with Latent Diffusion Models", authors: "Rombach et al.", year: 2022, venue: "CVPR", domain: "generative", architecture: "diffusion", whyItMatters: "Latent diffusion; the recipe behind Stable Diffusion and many derivatives.", whatItEnabled: "Practical large-scale image generation.", limitations: "Latent space limits some fine detail.", sourceUrl: "https://arxiv.org/abs/2112.10752", confidence: "sourced" },

  /* ── Biology / chemistry ── */
  { id: "paper-alphafold2", title: "Highly accurate protein structure prediction with AlphaFold", authors: "Jumper et al.", year: 2021, venue: "Nature", domain: "drug-discovery", architecture: "equivariant-nn", whyItMatters: "Solved a 50-year challenge in protein structure prediction.", whatItEnabled: "Modern computational biology pipelines and downstream design work.", limitations: "Single-protein static structures; not the full biology.", sourceUrl: "https://www.nature.com/articles/s41586-021-03819-2", confidence: "sourced" },
  { id: "paper-alphafold3", title: "Accurate structure prediction of biomolecular interactions with AlphaFold 3", authors: "Abramson et al.", year: 2024, venue: "Nature", domain: "drug-discovery", architecture: "diffusion-bio", whyItMatters: "Extended AlphaFold to broader biomolecular complexes (DNA, RNA, ligands, antibodies).", whatItEnabled: "Multi-component structure prediction for drug discovery workflows.", limitations: "Initial release was server-only; weights and code subsequently released for non-commercial use (late 2024). Confirm current licence terms before commercial use.", sourceUrl: "https://www.nature.com/articles/s41586-024-07487-w", confidence: "sourced" },
  { id: "paper-esm2", title: "Evolutionary-scale prediction of atomic-level protein structure with a language model", authors: "Lin et al.", year: 2023, venue: "Science", domain: "drug-discovery", architecture: "protein-lm", whyItMatters: "Scaled protein language models; ESM-2 / ESMFold predict structure from sequence.", whatItEnabled: "Wide adoption of protein LMs as priors and embeddings.", limitations: "Coverage and accuracy below AlphaFold 2 on many cases.", sourceUrl: "https://www.science.org/doi/10.1126/science.ade2574", confidence: "sourced" },
  { id: "paper-rosettafold", title: "Accurate prediction of protein structures and interactions using a three-track neural network", authors: "Baek et al.", year: 2021, venue: "Science", domain: "drug-discovery", architecture: "equivariant-nn", whyItMatters: "Independent confirmation of high-accuracy structure prediction; basis for the RoseTTAFold family.", whatItEnabled: "Open-source foundations for computational protein modelling.", limitations: "Slightly behind AlphaFold 2 on benchmarks.", sourceUrl: "https://www.science.org/doi/10.1126/science.abj8754", confidence: "sourced" },
  { id: "paper-rfdiffusion", title: "De novo design of protein structure and function with RFdiffusion", authors: "Watson et al.", year: 2023, venue: "Nature", domain: "protein-design", architecture: "diffusion-bio", whyItMatters: "Diffusion model for protein backbones; generated designs that work in the lab.", whatItEnabled: "Modern de novo protein design pipelines.", limitations: "Designs still need lab validation.", sourceUrl: "https://www.nature.com/articles/s41586-023-06415-8", confidence: "sourced" },
  { id: "paper-proteinmpnn", title: "Robust deep learning&mdash;based protein sequence design using ProteinMPNN", authors: "Dauparas et al.", year: 2022, venue: "Science", domain: "protein-design", architecture: "molecular-gnn", whyItMatters: "Inverse-folding model that designs sequences for given backbones with high success rates.", whatItEnabled: "Routine protein sequence design after backbone generation.", limitations: "Performance varies with target.", sourceUrl: "https://www.science.org/doi/10.1126/science.add2187", confidence: "sourced" },
  { id: "paper-diffdock", title: "DiffDock: Diffusion Steps, Twists, and Turns for Molecular Docking", authors: "Corso et al.", year: 2023, venue: "ICLR", domain: "drug-discovery", architecture: "diffusion-bio", whyItMatters: "Diffusion-based docking that improved over score-based methods.", whatItEnabled: "Generative docking inside virtual screening pipelines.", limitations: "Still benchmark-bound; production gains vary.", sourceUrl: "https://arxiv.org/abs/2210.01776", confidence: "sourced" },
  { id: "paper-gcn", title: "Semi-Supervised Classification with Graph Convolutional Networks", authors: "Kipf and Welling", year: 2017, venue: "ICLR", domain: "general", architecture: "molecular-gnn", whyItMatters: "Foundational GNN paper; basis for chemistry, security and recommendation GNNs.", whatItEnabled: "Wide adoption of GNNs.", limitations: "Many follow-up architectures address scalability.", sourceUrl: "https://arxiv.org/abs/1609.02907", confidence: "sourced" },
  { id: "paper-spliceai", title: "Predicting Splicing from Primary Sequence with Deep Learning", authors: "Jaganathan et al.", year: 2019, venue: "Cell", domain: "genomics", architecture: "cnn", whyItMatters: "Strong CNN model for splice prediction; widely used in clinical interpretation pipelines.", whatItEnabled: "Variant interpretation for splice impact.", limitations: "Cohort distribution effects.", sourceUrl: "https://www.cell.com/cell/fulltext/S0092-8674(18)31629-5", confidence: "sourced" },
  { id: "paper-alphamissense", title: "Accurate proteome-wide missense variant effect prediction with AlphaMissense", authors: "Cheng et al.", year: 2023, venue: "Science", domain: "genomics", architecture: "protein-lm", whyItMatters: "Proteome-scale variant-effect predictions integrated with structure priors.", whatItEnabled: "Variant prioritisation in clinical genomics research.", limitations: "Predictions are not clinical diagnoses.", sourceUrl: "https://www.science.org/doi/10.1126/science.adg7492", confidence: "sourced" },
  { id: "paper-medpalm2", title: "Towards Expert-Level Medical Question Answering with Large Language Models (Med-PaLM 2)", authors: "Singhal et al.", year: 2023, venue: "arXiv preprint", domain: "clinical-medicine", architecture: "domain-fm", whyItMatters: "Reported strong performance on USMLE-style multiple-choice questions, accelerating clinical-LLM research. Singhal et al.&rsquo;s earlier 2023 Nature paper (&lsquo;Large language models encode clinical knowledge&rsquo;) introduced the original Med-PaLM.", whatItEnabled: "Acceleration of clinical LLM research; benchmarks for downstream evaluations.", limitations: "USMLE benchmark performance is not equivalent to clinical safety, real-world workflow integration, or accuracy on novel patient cases.", sourceUrl: "https://arxiv.org/abs/2305.09617", confidence: "sourced" },
  { id: "paper-chexnet", title: "CheXNet: Radiologist-Level Pneumonia Detection on Chest X-Rays with Deep Learning", authors: "Rajpurkar et al.", year: 2017, venue: "arXiv", domain: "radiology", architecture: "cnn", whyItMatters: "Sparked the modern radiology-AI wave; widely cited and replicated.", whatItEnabled: "Many follow-up CXR models and benchmarks.", limitations: "Single-task; benchmark != deployment.", sourceUrl: "https://arxiv.org/abs/1711.05225", confidence: "sourced" },

  /* ── Robotics / RL ── */
  { id: "paper-dqn", title: "Human-level control through deep reinforcement learning", authors: "Mnih et al.", year: 2015, venue: "Nature", domain: "robotics", architecture: "rl-control", whyItMatters: "Deep Q-Networks; the first deep RL system to play Atari games at human level.", whatItEnabled: "The deep RL era.", limitations: "Atari is far from physical control.", sourceUrl: "https://www.nature.com/articles/nature14236", confidence: "sourced" },
  { id: "paper-alphazero", title: "A general reinforcement learning algorithm that masters chess, shogi, and Go through self-play", authors: "Silver et al.", year: 2018, venue: "Science", domain: "general", architecture: "rl-control", whyItMatters: "Tabula-rasa self-play with MCTS + neural networks across multiple board games.", whatItEnabled: "Recipe behind subsequent search-augmented learning systems.", limitations: "Discrete games; perfect simulators.", sourceUrl: "https://www.science.org/doi/10.1126/science.aar6404", confidence: "sourced" },
  { id: "paper-rt1", title: "RT-1: Robotics Transformer for Real-World Control at Scale", authors: "Brohan et al.", year: 2022, venue: "arXiv (RSS 2023)", domain: "robotics", architecture: "imitation-learning", whyItMatters: "Showed that scaling robot data and a transformer policy generalises across many tasks.", whatItEnabled: "Modern robot foundation-model work.", limitations: "Constrained to a single embodiment.", sourceUrl: "https://arxiv.org/abs/2212.06817", confidence: "sourced" },
  { id: "paper-rt2", title: "RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control", authors: "Brohan et al.", year: 2023, venue: "arXiv", domain: "robotics", architecture: "vla", whyItMatters: "Demonstrated that VLM pretraining transfers to robot action.", whatItEnabled: "VLA as a viable robotics paradigm.", limitations: "Robot data still bottlenecks generalisation.", sourceUrl: "https://arxiv.org/abs/2307.15818", confidence: "sourced" },
  { id: "paper-diffusion-policy", title: "Diffusion Policy: Visuomotor Policy Learning via Action Diffusion", authors: "Chi et al.", year: 2023, venue: "RSS", domain: "robotics", architecture: "diffusion-policy", whyItMatters: "Diffusion as a policy class for robotics; robust to multimodal demos.", whatItEnabled: "A wave of diffusion-based manipulation work.", limitations: "Inference latency.", sourceUrl: "https://arxiv.org/abs/2303.04137", confidence: "sourced" },
  { id: "paper-palme", title: "PaLM-E: An Embodied Multimodal Language Model", authors: "Driess et al.", year: 2023, venue: "arXiv", domain: "robotics", architecture: "vla", whyItMatters: "Combined vision, language and embodied tasks in a single model.", whatItEnabled: "Pattern for grounding LLMs in robot sensors.", limitations: "Closed weights.", sourceUrl: "https://arxiv.org/abs/2303.03378", confidence: "sourced" },
  { id: "paper-open-x", title: "Open X-Embodiment: Robotic Learning Datasets and RT-X Models", authors: "Open X-Embodiment Collaboration", year: 2023, venue: "arXiv", domain: "robotics", architecture: "imitation-learning", whyItMatters: "Cross-institution robotics dataset and benchmark; enables cross-embodiment learning.", whatItEnabled: "Generalist robot policies trained across many platforms.", limitations: "Coverage of embodiments and tasks is uneven.", sourceUrl: "https://arxiv.org/abs/2310.08864", confidence: "sourced" },

  /* ── Scientific AI ── */
  { id: "paper-fno", title: "Fourier Neural Operator for Parametric Partial Differential Equations", authors: "Li et al.", year: 2021, venue: "ICLR", domain: "scientific-computing", architecture: "neural-operators", whyItMatters: "Practical neural operator for PDE families; used widely in scientific surrogates.", whatItEnabled: "Fast PDE surrogates in weather, fluids, materials.", limitations: "Distribution shift outside training regimes.", sourceUrl: "https://arxiv.org/abs/2010.08895", confidence: "sourced" },
  { id: "paper-pinn", title: "Physics-informed neural networks: A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations", authors: "Raissi et al.", year: 2019, venue: "Journal of Computational Physics", domain: "scientific-computing", architecture: "pinn", whyItMatters: "Standard reference for PINNs.", whatItEnabled: "Wide adoption of physics-informed losses.", limitations: "Training stability and scaling are open.", sourceUrl: "https://www.sciencedirect.com/science/article/pii/S0021999118307125", confidence: "sourced" },
  { id: "paper-graphcast", title: "Learning skillful medium-range global weather forecasting (GraphCast)", authors: "Lam et al.", year: 2023, venue: "Science", domain: "climate-weather", architecture: "neural-operators", whyItMatters: "Neural model that beats top NWP models on most variables out to 10 days.", whatItEnabled: "Operational interest in neural weather forecasting.", limitations: "Evaluation on extremes still a frontier.", sourceUrl: "https://www.science.org/doi/10.1126/science.adi2336", confidence: "sourced" },
  { id: "paper-fourcastnet", title: "FourCastNet: A Global Data-driven High-resolution Weather Model using Adaptive Fourier Neural Operators", authors: "Pathak et al.", year: 2022, venue: "arXiv", domain: "climate-weather", architecture: "neural-operators", whyItMatters: "Demonstrated neural weather forecasting at high resolution and orders-of-magnitude faster than NWP.", whatItEnabled: "Subsequent weather foundation models.", limitations: "Skill on specific extreme events still under study.", sourceUrl: "https://arxiv.org/abs/2202.11214", confidence: "sourced" },

  /* ── Code / SWE / general ── */
  { id: "paper-codex", title: "Evaluating Large Language Models Trained on Code", authors: "Chen et al.", year: 2021, venue: "arXiv", domain: "software-engineering", architecture: "domain-fm", whyItMatters: "Introduced HumanEval; evaluated Codex; framed code LLMs as a category.", whatItEnabled: "Coding copilots and code-focused models.", limitations: "Function-level benchmarks; not repo-scale.", sourceUrl: "https://arxiv.org/abs/2107.03374", confidence: "sourced" },
  { id: "paper-swebench", title: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?", authors: "Jimenez et al.", year: 2024, venue: "ICLR", domain: "software-engineering", architecture: "tool-agents", whyItMatters: "Benchmark for repo-scale issue resolution; widely used to evaluate coding agents.", whatItEnabled: "Common evaluation surface for the modern coding-agent generation.", limitations: "Subject to gaming; mixed real-world correlation.", sourceUrl: "https://arxiv.org/abs/2310.06770", confidence: "sourced" },

  /* ── Marked needsVerification: well-known but specific cite uncertain ── */
  { id: "paper-finbert", title: "FinBERT: A Pretrained Language Model for Financial Communications", authors: "Yang et al. (and others)", year: 2020, venue: "arXiv", domain: "finance", architecture: "domain-fm", whyItMatters: "Domain-tuned BERT for financial text; widely used in finance NLP work.", whatItEnabled: "Sentiment + topic models on filings, news, transcripts.", limitations: "Has competing variants and unclear naming across papers.", sourceUrl: "https://arxiv.org/abs/1908.10063", confidence: "needsVerification" },
  { id: "paper-codebert", title: "CodeBERT: A Pre-Trained Model for Programming and Natural Languages", authors: "Feng et al.", year: 2020, venue: "EMNLP Findings", domain: "software-engineering", architecture: "domain-fm", whyItMatters: "Early code+NL pretraining; influenced subsequent code models.", whatItEnabled: "Code search, summarisation, pretraining recipe.", limitations: "Smaller than later code models.", sourceUrl: "https://arxiv.org/abs/2002.08155", confidence: "needsVerification" },
  { id: "paper-saycan", title: "Do As I Can, Not As I Say: Grounding Language in Robotic Affordances (SayCan)", authors: "Ahn et al.", year: 2022, venue: "arXiv", domain: "robotics", architecture: "vla", whyItMatters: "Combined LLM planning with affordance scoring on a robot.", whatItEnabled: "Pattern of LLM-as-planner in robotics.", limitations: "Constrained settings.", sourceUrl: "https://arxiv.org/abs/2204.01691", confidence: "needsVerification" }
];

/* ============================================
   DOMAIN_DATASETS
   ============================================ */
var DOMAIN_DATASETS = [
  { id: "ds-pdb", name: "Protein Data Bank (PDB)", domain: "drug-discovery", description: "Open repository of experimentally determined 3D protein structures.", url: "https://www.rcsb.org/", access: "open" },
  { id: "ds-uniprot", name: "UniProt", domain: "drug-discovery", description: "Protein sequence and functional annotation.", url: "https://www.uniprot.org/", access: "open" },
  { id: "ds-pubchem", name: "PubChem", domain: "drug-discovery", description: "Chemical-information database including bioassays.", url: "https://pubchem.ncbi.nlm.nih.gov/", access: "open" },
  { id: "ds-chembl", name: "ChEMBL", domain: "drug-discovery", description: "Bioactivity database curated from medicinal chemistry literature.", url: "https://www.ebi.ac.uk/chembl/", access: "open" },
  { id: "ds-uk-biobank", name: "UK Biobank", domain: "genomics", description: "Half-million-participant genotypic + phenotypic resource (controlled access).", url: "https://www.ukbiobank.ac.uk/", access: "controlled" },
  { id: "ds-gnomad", name: "gnomAD", domain: "genomics", description: "Aggregated genome-wide variant data across populations.", url: "https://gnomad.broadinstitute.org/", access: "open" },
  { id: "ds-tcga", name: "The Cancer Genome Atlas (TCGA)", domain: "pathology", description: "Multi-modal cancer molecular and imaging data (controlled-access components).", url: "https://www.cancer.gov/ccg/research/genome-sequencing/tcga", access: "mixed" },
  { id: "ds-mimic", name: "MIMIC-III / MIMIC-IV", domain: "clinical-medicine", description: "Critical-care EHR data from Beth Israel Deaconess Medical Center.", url: "https://physionet.org/", access: "controlled" },
  { id: "ds-physionet", name: "PhysioNet", domain: "clinical-medicine", description: "Open repository for physiological signals and clinical datasets.", url: "https://physionet.org/", access: "mixed" },
  { id: "ds-cxr", name: "MIMIC-CXR / NIH ChestX-ray14 / CheXpert", domain: "radiology", description: "Public chest X-ray datasets with labels (each with caveats).", url: "https://physionet.org/", access: "mixed" },
  { id: "ds-brats", name: "BraTS", domain: "radiology", description: "Brain tumour segmentation challenge dataset.", url: "https://www.synapse.org/", access: "controlled" },
  { id: "ds-camelyon", name: "CAMELYON", domain: "pathology", description: "Lymph-node metastasis whole-slide image challenge.", url: "https://camelyon17.grand-challenge.org/", access: "open" },
  { id: "ds-encode", name: "ENCODE", domain: "genomics", description: "Encyclopedia of DNA elements: regulatory elements across cell types.", url: "https://www.encodeproject.org/", access: "open" },
  { id: "ds-gtex", name: "GTEx", domain: "genomics", description: "Tissue-specific gene expression and regulatory data.", url: "https://gtexportal.org/", access: "open" },
  { id: "ds-era5", name: "ERA5 Reanalysis", domain: "climate-weather", description: "ECMWF global atmospheric reanalysis.", url: "https://cds.climate.copernicus.eu/", access: "open" },
  { id: "ds-weatherbench2", name: "WeatherBench 2", domain: "climate-weather", description: "Standard benchmark for global weather forecasting evaluation.", url: "https://weatherbench2.readthedocs.io/", access: "open" },
  { id: "ds-nuscenes", name: "nuScenes / Waymo Open Dataset / Argoverse", domain: "autonomous-vehicles", description: "Public AV perception and prediction datasets.", url: "https://www.nuscenes.org/", access: "open" },
  { id: "ds-open-x", name: "Open X-Embodiment / RT-X", domain: "robotics", description: "Cross-institution robot learning dataset across many platforms.", url: "https://robotics-transformer-x.github.io/", access: "open" },
  { id: "ds-ego4d", name: "Ego4D", domain: "robotics", description: "Massive first-person video dataset for embodied AI research.", url: "https://ego4d-data.org/", access: "controlled" },
  { id: "ds-materials-project", name: "Materials Project", domain: "materials-science", description: "Open database of computed materials properties.", url: "https://materialsproject.org/", access: "open" },
  { id: "ds-oqmd", name: "OQMD", domain: "materials-science", description: "Open Quantum Materials Database.", url: "https://oqmd.org/", access: "open" },
  { id: "ds-uspto-rxn", name: "USPTO Reaction Corpus", domain: "chemistry", description: "Reaction data extracted from US patents.", url: "https://www.uspto.gov/", access: "open" },
  { id: "ds-mitre-attack", name: "MITRE ATT&amp;CK", domain: "cybersecurity", description: "Knowledge base of adversary tactics and techniques.", url: "https://attack.mitre.org/", access: "open" },
  { id: "ds-swe-bench", name: "SWE-bench", domain: "software-engineering", description: "Benchmark for repo-scale issue resolution by coding agents.", url: "https://www.swebench.com/", access: "open" },
  { id: "ds-humaneval", name: "HumanEval", domain: "software-engineering", description: "Function-level coding benchmark from the Codex paper.", url: "https://github.com/openai/human-eval", access: "open" }
];

/* ============================================
   DOMAIN_OPPORTUNITIES
   ============================================ */
var DOMAIN_OPPORTUNITIES = [
  { id: "opp-bio-eval", domainId: "drug-discovery", title: "Evaluation harnesses for generated molecules", buyer: "Pharma R&amp;D, biotech startups", painIntensity: "high", dataAccess: "medium", regulatoryRisk: "low (pre-clinical)", competition: "low", monetisationClarity: "high", note: "Most generative biology pipelines lack honest, domain-aware evaluation suites for novelty, drug-likeness and predicted safety." },
  { id: "opp-bio-lab-ops", domainId: "drug-discovery", title: "Wet-lab workflow + scheduling automation", buyer: "Biotech, pharma, CROs", painIntensity: "high", dataAccess: "medium", regulatoryRisk: "low", competition: "medium", monetisationClarity: "medium", note: "Scheduling and instrument coordination is a real bottleneck behind every AI-discovery program." },
  { id: "opp-genomics-clinical", domainId: "genomics", title: "Variant interpretation copilots for clinical genomics", buyer: "Hospitals, clinical labs, dx companies", painIntensity: "high", dataAccess: "hard", regulatoryRisk: "high (LDT / IVDR)", competition: "medium", monetisationClarity: "medium", note: "VUS interpretation is the daily bottleneck; AI tooling that defers correctly to humans is valuable." },
  { id: "opp-rad-report", domainId: "radiology", title: "Specialty report-generation copilots", buyer: "Radiology groups, hospitals, teleradiology", painIntensity: "high", dataAccess: "medium", regulatoryRisk: "high (SaMD)", competition: "high", monetisationClarity: "high", note: "Beyond detection, structured-report drafting is where time-savings show up directly." },
  { id: "opp-path-foundation", domainId: "pathology", title: "Specialty pathology foundation-model fine-tuning", buyer: "Reference labs, hospitals", painIntensity: "medium", dataAccess: "hard", regulatoryRisk: "high", competition: "medium", monetisationClarity: "medium", note: "Foundation models exist; specialty fine-tunes for rare cancers and biomarker subtypes are open." },
  { id: "opp-ophth-screening", domainId: "ophthalmology", title: "Primary-care eye-screening kiosks", buyer: "PCPs, retail clinics, payers", painIntensity: "medium", dataAccess: "medium", regulatoryRisk: "high", competition: "medium", monetisationClarity: "medium", note: "Screening pathways are clinically validated; PCP integration is the next wedge." },
  { id: "opp-clindocs-specialty", domainId: "clinical-documentation", title: "Specialty-specific scribes (peds, OB, behavioural)", buyer: "Medical groups, health systems", painIntensity: "high", dataAccess: "medium", regulatoryRisk: "medium", competition: "high", monetisationClarity: "high", note: "General scribes plateau on specialty phrasing; vertical specialists capture quality and willingness-to-pay." },
  { id: "opp-mental-supervised", domainId: "mental-health", title: "Clinician-supervised between-session tools", buyer: "Mental-health platforms, payers", painIntensity: "high", dataAccess: "hard", regulatoryRisk: "high", competition: "medium", monetisationClarity: "medium", note: "Safety scaffolding around between-session AI is the differentiator." },
  { id: "opp-banking-mrm", domainId: "banking", title: "Model-risk-management tooling for AI models", buyer: "Banks, regulators", painIntensity: "high", dataAccess: "medium", regulatoryRisk: "medium", competition: "low", monetisationClarity: "high", note: "Banks need MRM playbooks for LLMs; the existing framework (SR 11-7) was not written for them." },
  { id: "opp-fraud-graph", domainId: "fraud-detection", title: "Graph-feature platforms for adjacent verticals (gaming, marketplaces)", buyer: "Fintechs, marketplaces", painIntensity: "high", dataAccess: "medium", regulatoryRisk: "low", competition: "medium", monetisationClarity: "high", note: "Graph features are now table stakes in payments; adjacent verticals are still under-served." },
  { id: "opp-quant-eval", domainId: "quant-finance", title: "Honest evaluation tooling for ML strategies", buyer: "Hedge funds, asset managers", painIntensity: "medium", dataAccess: "medium", regulatoryRisk: "low", competition: "low", monetisationClarity: "medium", note: "Most overfitting failures look like alpha until they don't; tooling around honest evaluation is small but valuable." },
  { id: "opp-insurance-claims", domainId: "insurance", title: "Claims-process copilots", buyer: "Insurers", painIntensity: "high", dataAccess: "medium", regulatoryRisk: "medium", competition: "medium", monetisationClarity: "high", note: "FNOL automation and claims triage have direct loss-ratio and cycle-time impact." },
  { id: "opp-legal-specialty", domainId: "legal", title: "Specialty practice copilots (immigration, tax, employment)", buyer: "Mid-market law firms, legal departments", painIntensity: "medium", dataAccess: "medium", regulatoryRisk: "medium", competition: "high", monetisationClarity: "high", note: "Generic legal AI is crowded; specialty practice areas with their own corpora are open." },
  { id: "opp-edu-vertical", domainId: "education", title: "Subject-specific tutors with measurable outcomes", buyer: "School districts, edtech, parents", painIntensity: "high", dataAccess: "medium", regulatoryRisk: "medium (minors)", competition: "high", monetisationClarity: "medium", note: "Generic tutors converge; subjects with tractable evaluation (math, languages, code) are differentiable." },
  { id: "opp-swe-spec", domainId: "software-engineering", title: "Language- and framework-specific coding agents", buyer: "Engineering orgs", painIntensity: "high", dataAccess: "medium", regulatoryRisk: "low", competition: "high", monetisationClarity: "high", note: "Generic coding agents struggle on niche stacks (Salesforce, COBOL, Rust embedded) where specialists win." },
  { id: "opp-cyber-prompt", domainId: "cybersecurity", title: "Prompt-injection and AI-attack-surface defence", buyer: "Enterprise security teams", painIntensity: "high", dataAccess: "medium", regulatoryRisk: "medium", competition: "medium", monetisationClarity: "high", note: "The AI itself is now an attack surface; tooling around it is greenfield." },
  { id: "opp-support-deflection", domainId: "customer-support", title: "Vertical support copilots for regulated industries", buyer: "Telcos, banks, healthcare ops", painIntensity: "high", dataAccess: "medium", regulatoryRisk: "medium", competition: "high", monetisationClarity: "high", note: "Generic deflection plateaus; regulated verticals demand specialised compliance." },
  { id: "opp-robotics-data", domainId: "robotics", title: "Robot-data infrastructure", buyer: "Robotics startups, research labs", painIntensity: "very high", dataAccess: "hard", regulatoryRisk: "low", competition: "low", monetisationClarity: "medium", note: "Open X-Embodiment-style ambitions need teleop, simulation and labelling infrastructure that does not yet exist at scale." },
  { id: "opp-mfg-edge", domainId: "manufacturing", title: "OT-secure on-prem AI for factories", buyer: "Industrial customers", painIntensity: "high", dataAccess: "hard", regulatoryRisk: "low", competition: "medium", monetisationClarity: "high", note: "Manufacturing buyers cannot send sensor data to public clouds; on-prem AI infrastructure is the wedge." },
  { id: "opp-energy-der", domainId: "energy-grid", title: "DER orchestration for behind-the-meter assets", buyer: "Utilities, ISOs, large customers", painIntensity: "high", dataAccess: "medium", regulatoryRisk: "high", competition: "medium", monetisationClarity: "high", note: "Distributed energy resources need orchestration software; few players have a credible product." },
  { id: "opp-weather-vertical", domainId: "climate-weather", title: "Specialty regional / vertical weather products", buyer: "Insurance, agriculture, energy", painIntensity: "medium", dataAccess: "open", regulatoryRisk: "low", competition: "medium", monetisationClarity: "medium", note: "Neural weather models are open; vertical post-processing and decision support is wide open." },
  { id: "opp-ag-specialty", domainId: "agriculture", title: "Specialty-crop computer vision", buyer: "Growers, ag retailers, food brands", painIntensity: "medium", dataAccess: "hard", regulatoryRisk: "low", competition: "medium", monetisationClarity: "medium", note: "Most computer-vision ag-AI focuses on row crops; specialty crops, livestock and post-harvest are under-served." },
  { id: "opp-construction-trade", domainId: "construction", title: "Specialty trade copilots", buyer: "Subcontractors, GCs", painIntensity: "medium", dataAccess: "medium", regulatoryRisk: "low", competition: "low", monetisationClarity: "medium", note: "Document and progress-tracking for individual trades (electrical, mechanical, plumbing) is greenfield." },
  { id: "opp-materials-autolab", domainId: "materials-science", title: "Autonomous lab platforms", buyer: "Materials and chemistry R&amp;D", painIntensity: "high", dataAccess: "medium", regulatoryRisk: "low", competition: "low", monetisationClarity: "medium", note: "Closing the design-build-test-learn loop with robotics is a multi-year platform play." },
  { id: "opp-scicomp-surrogate", domainId: "scientific-computing", title: "Engineering-grade surrogates with uncertainty", buyer: "CAE / engineering software", painIntensity: "medium", dataAccess: "medium", regulatoryRisk: "high (certification)", competition: "medium", monetisationClarity: "medium", note: "Engineering CAE companies need surrogates that ship under DO-178C-style certification frames." },
  { id: "opp-aerospace-geo", domainId: "aerospace-space", title: "Specialty geospatial verticals", buyer: "Insurance, ag, defence (dual-use)", painIntensity: "high", dataAccess: "medium", regulatoryRisk: "varies", competition: "medium", monetisationClarity: "high", note: "Geospatial foundation models exist; specialty verticals with paying customers are open." },
  { id: "opp-media-provenance", domainId: "media-entertainment", title: "Provenance and rights infrastructure for generated media", buyer: "Studios, brands, platforms", painIntensity: "high", dataAccess: "medium", regulatoryRisk: "medium", competition: "low", monetisationClarity: "medium", note: "C2PA-style provenance is becoming necessary; tooling and integration are open." },
  { id: "opp-gov-fedramp", domainId: "government-services", title: "FedRAMP-ready vertical tools", buyer: "US federal + SLED", painIntensity: "high", dataAccess: "medium", regulatoryRisk: "high", competition: "medium", monetisationClarity: "high", note: "Federal procurement is slow but durable; FedRAMP-authorised vertical tools are scarce." },
  { id: "opp-defence-osint", domainId: "intelligence-analysis", title: "OSINT analytics with provenance", buyer: "Government, journalism, NGO", painIntensity: "high", dataAccess: "open", regulatoryRisk: "medium", competition: "medium", monetisationClarity: "medium", note: "OSINT volumes have exploded; analytics with chain-of-evidence are needed." },
  { id: "opp-smart-cities-civic", domainId: "smart-cities", title: "Civic copilots in many languages", buyer: "Cities, agencies", painIntensity: "high", dataAccess: "medium", regulatoryRisk: "medium", competition: "low", monetisationClarity: "medium", note: "Multi-language citizen support backed by official information is rare and valuable." }
];

/* ============================================
   SOURCE_LIBRARY
   ============================================ */
var SOURCE_LIBRARY = [
  { id: "src-pdb", title: "RCSB Protein Data Bank", publisher: "RCSB", year: 2025, url: "https://www.rcsb.org/", type: "dataset", domain: "drug-discovery", supports: ["drug-discovery", "protein-design"], confidence: "sourced" },
  { id: "src-uniprot", title: "UniProt Knowledgebase", publisher: "UniProt Consortium", year: 2025, url: "https://www.uniprot.org/", type: "dataset", domain: "drug-discovery", supports: ["drug-discovery", "protein-design", "genomics"], confidence: "sourced" },
  { id: "src-uk-biobank", title: "UK Biobank", publisher: "UK Biobank", year: 2025, url: "https://www.ukbiobank.ac.uk/", type: "dataset", domain: "genomics", supports: ["genomics", "clinical-medicine", "ophthalmology"], confidence: "sourced" },
  { id: "src-gnomad", title: "gnomAD", publisher: "Broad Institute", year: 2025, url: "https://gnomad.broadinstitute.org/", type: "dataset", domain: "genomics", supports: ["genomics"], confidence: "sourced" },
  { id: "src-tcga", title: "The Cancer Genome Atlas", publisher: "NCI", year: 2025, url: "https://www.cancer.gov/ccg/research/genome-sequencing/tcga", type: "dataset", domain: "pathology", supports: ["pathology", "drug-discovery"], confidence: "sourced" },
  { id: "src-mimic", title: "MIMIC-III / MIMIC-IV", publisher: "PhysioNet (MIT Lab for Computational Physiology)", year: 2025, url: "https://physionet.org/", type: "dataset", domain: "clinical-medicine", supports: ["clinical-medicine"], confidence: "sourced" },
  { id: "src-fda-samd", title: "FDA Software as a Medical Device guidance", publisher: "US FDA", year: 2024, url: "https://www.fda.gov/medical-devices/digital-health-center-excellence/software-medical-device-samd", type: "regulator", domain: "clinical-medicine", supports: ["radiology", "clinical-medicine", "ophthalmology"], confidence: "sourced" },
  { id: "src-materials-project", title: "Materials Project", publisher: "Lawrence Berkeley National Lab", year: 2025, url: "https://materialsproject.org/", type: "dataset", domain: "materials-science", supports: ["materials-science"], confidence: "sourced" },
  { id: "src-mitre-attack", title: "MITRE ATT&amp;CK", publisher: "MITRE Corporation", year: 2025, url: "https://attack.mitre.org/", type: "knowledge-base", domain: "cybersecurity", supports: ["cybersecurity"], confidence: "sourced" },
  { id: "src-swe-bench", title: "SWE-bench", publisher: "Princeton + collaborators", year: 2024, url: "https://www.swebench.com/", type: "benchmark", domain: "software-engineering", supports: ["software-engineering"], confidence: "sourced" },
  { id: "src-humaneval", title: "HumanEval (OpenAI)", publisher: "OpenAI / GitHub", year: 2021, url: "https://github.com/openai/human-eval", type: "benchmark", domain: "software-engineering", supports: ["software-engineering"], confidence: "sourced" }
];

/* ============================================
   CLAIM_AUDIT_LOG
   Internal QA log: tracking claims that have been tightened, flagged
   for verification, or kept with explicit confidence.
   ============================================ */
var CLAIM_AUDIT_LOG = [
  { id: "iss-overall-coverage", domainId: null, claim: "&lsquo;Covers all major domains in the world&rsquo;", issue: "Untestable strong claim.", action: "Replaced with &lsquo;major domains where AI is currently used, researched or strategically deployed; designed to be expandable and updated.&rsquo;", status: "tightened" },
  { id: "iss-bio-overnight", domainId: "drug-discovery", claim: "AI generates new drugs overnight.", issue: "Conflates generation with validation.", action: "Reframed as &lsquo;AI proposes; biology decides.&rsquo;", status: "tightened" },
  { id: "iss-medicine-replace", domainId: "clinical-medicine", claim: "AI replaces doctors.", issue: "Not supported by evidence; strong-claim pattern.", action: "Reframed as assistance, drafting, ranking, triage with clinician accountability.", status: "tightened" },
  { id: "iss-radiology-clearance", domainId: "radiology", claim: "FDA approval = autonomous deployment.", issue: "Confuses clearance with autonomous decision-making.", action: "Reframed as narrow indication-specific clearance.", status: "tightened" },
  { id: "iss-ophth-replace", domainId: "ophthalmology", claim: "AI replaces ophthalmologists.", issue: "Out of scope for current authorisations.", action: "Restricted to validated screening indications.", status: "tightened" },
  { id: "iss-quant-llm", domainId: "quant-finance", claim: "LLMs print money in quant.", issue: "Not credible.", action: "Reframed; quant uses ML on tabular and time-series data; alpha is incremental.", status: "tightened" },
  { id: "iss-banking-autonomous", domainId: "banking", claim: "AI makes autonomous regulatory decisions.", issue: "Inconsistent with model-risk-management requirements.", action: "Reframed as copilots with accountable humans.", status: "tightened" },
  { id: "iss-finance-vs-bio", domainId: null, claim: "Generic &lsquo;AI in finance&rsquo; vs &lsquo;AI in biology&rsquo;.", issue: "Generic framings without mental models.", action: "Replaced with question pair distinguishing data shape and validation gates.", status: "tightened" },
  { id: "iss-legal-citations", domainId: "legal", claim: "LLM legal research is reliable out of the box.", issue: "Hallucinated citations are a documented malpractice risk.", action: "Marked as &lsquo;must be RAG-first, citation-grounded, reviewable.&rsquo;", status: "tightened" },
  { id: "iss-edu-replace", domainId: "education", claim: "AI replaces teachers.", issue: "Engagement does not equal learning gains.", action: "Reframed; teaching outcomes still need pedagogy + evaluation.", status: "tightened" },
  { id: "iss-robotics-imminent", domainId: "robotics", claim: "Humanoids deploy at labour scale in 2&ndash;3 years.", issue: "Overstated.", action: "Marked as overhyped under hypeVsReal.", status: "tightened" },
  { id: "iss-av-everywhere", domainId: "autonomous-vehicles", claim: "Fully driverless soon, everywhere.", issue: "Inconsistent with actual operating-domain restrictions.", action: "Restricted to narrow ODDs in market context.", status: "tightened" },
  { id: "iss-weather-fixed", domainId: "climate-weather", claim: "AI replaces NWP fully.", issue: "Inconsistent with operational integration; AI competes on certain skill metrics.", action: "Reframed as competitive on medium-range, not a full replacement.", status: "tightened" },
  { id: "iss-defence-autonomy", domainId: "defence", claim: "Fully autonomous lethal AI is imminent.", issue: "Cautious framing required; partial public visibility.", action: "Marked as overhyped; cautious wording across the entry.", status: "tightened" },
  { id: "iss-finbert-cite", domainId: "finance", claim: "FinBERT canonical paper attribution.", issue: "Multiple papers and variants exist under similar names.", action: "Marked confidence: needsVerification.", status: "kept-with-flag" },
  { id: "iss-codebert-cite", domainId: "software-engineering", claim: "CodeBERT canonical reference.", issue: "Multiple code-LM papers exist; ensure correct citation.", action: "Marked confidence: needsVerification.", status: "kept-with-flag" },
  { id: "iss-saycan-cite", domainId: "robotics", claim: "SayCan paper details.", issue: "Author list and venue specifics should be re-verified before public assertion.", action: "Marked confidence: needsVerification.", status: "kept-with-flag" },
  { id: "iss-pathology-fdn", domainId: "pathology", claim: "Pathology foundation models cite specifics (UNI / Virchow / GigaPath).", issue: "Names referenced; specific authorship and venues not asserted.", action: "Generic citation; sourceIds: needs-verification.", status: "kept-with-flag" },
  { id: "iss-public-health-models", domainId: "public-health", claim: "Domain-specific surveillance models cite specifics.", issue: "Specific models not asserted.", action: "Marked needs-verification.", status: "kept-with-flag" },
  { id: "iss-mental-health-models", domainId: "mental-health", claim: "Specific models behind mental-health apps.", issue: "Vendor-specific and partly proprietary.", action: "Marked needs-verification.", status: "kept-with-flag" },

  /* ── Audit pass v2 (post-build editorial pass) ── */
  { id: "iss-bionemo", domainId: "drug-discovery", claim: "&lsquo;BioNeMo platform&rsquo; listed under keyModels.", issue: "BioNeMo is a NVIDIA framework / platform, not a single model.", action: "Renamed to clarify it is a platform / framework, not a single model.", status: "tightened" },
  { id: "iss-alphafold3-access", domainId: "drug-discovery", claim: "AlphaFold 3 is server-only.", issue: "Initial release was server-only; weights and code were subsequently released for non-commercial use in late 2024.", action: "Updated paper limitations note to reflect post-launch release; flagged that licence terms should be re-verified before commercial use.", status: "tightened" },
  { id: "iss-medpalm-clarification", domainId: "clinical-medicine", claim: "Med-PaLM 2 paper attribution.", issue: "Earlier Singhal et al. 2023 Nature paper introduced the original Med-PaLM; Med-PaLM 2 is a separate arXiv preprint with different scope.", action: "Clarified attribution and added explicit limitation: USMLE benchmark performance is not equivalent to clinical safety.", status: "tightened" },
  { id: "iss-paige-prostate", domainId: "pathology", claim: "Paige Prostate FDA clearance.", issue: "Specific year not previously stated.", action: "Added FDA De Novo authorisation year (2021) and noted it is the first AI for cancer detection in pathology.", status: "tightened" },
  { id: "iss-idx-dr", domainId: "ophthalmology", claim: "IDx-DR FDA authorisation.", issue: "Year and authorisation type not previously stated.", action: "Added FDA De Novo authorisation year (2018) and noted it as the first autonomous diagnostic AI cleared in the US.", status: "tightened" },
  { id: "iss-retfound", domainId: "ophthalmology", claim: "RETFound foundation model.", issue: "Origin not previously cited.", action: "Added Moorfields Eye Hospital + UCL attribution and Nature 2023 publication context.", status: "tightened" },
  { id: "iss-metabiota-status", domainId: "public-health", claim: "Metabiota listed without status.", issue: "Company was acquired by Ginkgo Bioworks; original public-health surveillance work largely wound down.", action: "Added historical / acquired note inline.", status: "tightened" },
  { id: "iss-radiology-fda-count", domainId: "radiology", claim: "&lsquo;FDA-cleared triage and detection across many anatomies.&rsquo;", issue: "Vague quantification of FDA-cleared device count.", action: "Reframed as &lsquo;FDA has authorised hundreds of AI/ML-enabled medical devices, with radiology the largest category by count&rsquo; and noted the count evolves with public listings.", status: "tightened" },
  { id: "iss-pathology-fdn-attribution", domainId: "pathology", claim: "UNI / Virchow / GigaPath foundation models.", issue: "Specific authorship and venues not asserted in the data.", action: "Added explicit caveat that names are references, not citations until verified.", status: "tightened" },
  { id: "iss-banking-mrm-cite", domainId: "banking", claim: "Model-risk-management constraints in banking AI.", issue: "Implicit reference to SR 11-7 not previously named.", action: "Named SR 11-7 (Federal Reserve / OCC) explicitly; clarified classical-ML maturity vs LLM early production split.", status: "tightened" },
  { id: "iss-radiology-vendors", domainId: "radiology", claim: "Aidoc / Viz.ai / Rad AI deployment claims.", issue: "Originally phrased as &lsquo;triage in stroke and PE&rsquo; without sourcing the specific clearance status.", action: "Reframed as &lsquo;FDA-cleared workflow tools for stroke and pulmonary-embolism triage / notification (per vendor and FDA listings)&rsquo;.", status: "tightened" },
  { id: "iss-clinical-scribe-claims", domainId: "clinical-documentation", claim: "Time-savings and adoption claims.", issue: "Specific numerical claims not asserted; uptake claim was generic.", action: "Reframed as &lsquo;multiple peer-reviewed and vendor-reported pilot studies&rsquo; with deployment described as well documented in vendor and trade reporting; numbers verifiable per site.", status: "tightened" },
  { id: "iss-uses-by-claims", domainId: null, claim: "&lsquo;Used by&rsquo; / deployment claims across vendors.", issue: "Risk of overstating adoption from vendor materials alone.", action: "Across all domains, company lists are framed as &lsquo;market context&rsquo; (in domain entries) or as vendor lists with explicit hedging where adoption-specific.", status: "kept-with-confidence" },
  { id: "iss-arch-domain-mapping", domainId: null, claim: "Architecture-domain match coverage.", issue: "Some architectures are listed across multiple domains where their use is partial or specialised.", action: "Coverage retained but each architecture entry specifies primary &lsquo;whereUsed&rsquo; and includes weaknesses noting where it does not work.", status: "kept-with-confidence" },
  { id: "iss-maturity-banking", domainId: "banking", claim: "Banking maturity label.", issue: "Banking ML is decades-mature; LLM-driven banking AI is early.", action: "Kept as &lsquo;Early production&rsquo; with detailed-answer split between mature classical ML and early LLM use.", status: "kept-with-confidence" },
  { id: "iss-quant-firms", domainId: "quant-finance", claim: "Renaissance Technologies, Two Sigma etc. as illustrative firms.", issue: "Public ML-use disclosure varies; some firms (Renaissance especially) are extremely opaque.", action: "Kept list, but the entry itself notes &lsquo;mostly proprietary; little is published&rsquo;.", status: "kept-with-confidence" },
  { id: "iss-magnific-acq", domainId: "design-architecture", claim: "Magnific acquisition status.", issue: "Acquisition of Magnific by Freepik (2024) confirmed in public reporting.", action: "Kept inline annotation.", status: "kept-with-confidence" },
  { id: "iss-llamasoft-coupa", domainId: "supply-chain", claim: "Llamasoft acquired by Coupa.", issue: "Coupa acquired Llamasoft in 2020; subsequently rolled into Coupa offerings.", action: "Kept inline annotation.", status: "kept-with-confidence" },
  { id: "iss-idx-rwe", domainId: "ophthalmology", claim: "IDx-DR realWorldExamples wording.", issue: "Originally vague.", action: "Already tightened in main entry; use-case examples remain consistent with main entry.", status: "kept-with-confidence" }
];

/* ============================================
   DOMAIN_SUMMARY
   For each domain, a structured high-signal summary aimed at the
   audit&rsquo;s requirement: every domain must have a memorable takeaway,
   a biggest bottleneck, a best founder opportunity and a top reference
   (paper / model / dataset) where source-backed.

   Field semantics:
     biggestBottleneck    one-line constraint that gates real progress
     bestOpportunity      one founder wedge with the strongest signal
     topReference         { type, label, refId } where:
                            type = paper | model | dataset | regulator | vendor | concept
                            refId is an id in DOMAIN_PAPERS / SOURCE_LIBRARY
                                   or null if there is none worth citing yet
     confidenceNote       (optional) explicit caveat about the summary
   ============================================ */
var DOMAIN_SUMMARY = {
  "drug-discovery": {
    biggestBottleneck: "Wet-lab validation throughput &mdash; AI proposes thousands of candidates faster than experiments can confirm any of them.",
    bestOpportunity: "Evaluation harnesses for generated molecules: novelty, drug-likeness and predicted safety scoring before the lab spend begins.",
    topReference: { type: "paper", label: "AlphaFold 2 (Jumper et al., Nature 2021)", refId: "paper-alphafold2" }
  },
  "genomics": {
    biggestBottleneck: "Population diversity in training cohorts &mdash; under-representation of non-European cohorts limits clinical actionability.",
    bestOpportunity: "Variant interpretation copilots that defer correctly to human experts on variants of uncertain significance.",
    topReference: { type: "paper", label: "AlphaMissense (Cheng et al., Science 2023)", refId: "paper-alphamissense" }
  },
  "protein-design": {
    biggestBottleneck: "Expression and folding success rates &mdash; designed sequences often fail before they reach an assay.",
    bestOpportunity: "High-throughput protein expression and characterisation platforms that close the design-build-test loop.",
    topReference: { type: "paper", label: "RFdiffusion (Watson et al., Nature 2023)", refId: "paper-rfdiffusion" }
  },
  "clinical-medicine": {
    biggestBottleneck: "Validation outside training distribution &mdash; clinical deployments must hold across sites, demographics and workflows.",
    bestOpportunity: "Specialty-specific copilots (cardiology, oncology, paediatrics) with EHR-grade integration and explicit safety scaffolding.",
    topReference: { type: "regulator", label: "FDA Software as a Medical Device guidance", refId: "src-fda-samd" }
  },
  "radiology": {
    biggestBottleneck: "Distribution shift across scanners and sites &mdash; performance can drop silently when deployed in a different hospital than training.",
    bestOpportunity: "Report-generation copilots that draft structured findings inside PACS / RIS, not standalone detectors.",
    topReference: { type: "paper", label: "nnU-Net (Isensee et al., Nature Methods 2021)", refId: "paper-nnunet" }
  },
  "pathology": {
    biggestBottleneck: "Slide-scanner heterogeneity and stain variation &mdash; foundation models still drift across labs.",
    bestOpportunity: "Specialty fine-tunes for rare cancers and biomarker subtypes where general foundation models under-perform.",
    topReference: { type: "model", label: "Paige Prostate (FDA De Novo authorisation, 2021)", refId: null }
  },
  "ophthalmology": {
    biggestBottleneck: "Camera and population diversity &mdash; models trained on one camera or demographic generalise poorly elsewhere.",
    bestOpportunity: "Primary-care eye-screening kiosks paired with affordable imaging hardware.",
    topReference: { type: "model", label: "IDx-DR (FDA De Novo authorisation, 2018) &mdash; first autonomous diagnostic AI cleared in the US", refId: null }
  },
  "clinical-documentation": {
    biggestBottleneck: "EHR integration and structured-note quality &mdash; transcripts are easy; correctly coded SOAP notes are not.",
    bestOpportunity: "Specialty-specific scribes (paediatrics, OB, behavioural) where general scribes plateau on phrasing.",
    topReference: { type: "vendor", label: "Microsoft / Nuance DAX, Abridge, Augmedix, Suki (broad commercial deployment, well-documented in trade reporting)", refId: null }
  },
  "public-health": {
    biggestBottleneck: "Data fragmentation across jurisdictions &mdash; signals exist; sharing them does not.",
    bestOpportunity: "Multi-source signal fusion for local health departments, with provenance and equity built in.",
    topReference: { type: "concept", label: "WHO and CDC syndromic-surveillance datasets (specific surveillance models flagged for verification)", refId: null }
  },
  "mental-health": {
    biggestBottleneck: "Safety, risk handling and the absence of clean efficacy gold-standards &mdash; conversational fluency &ne; clinical efficacy.",
    bestOpportunity: "Clinician-supervised between-session tools with structured safety scaffolding and clinical efficacy evidence.",
    topReference: { type: "concept", label: "Vendor-specific models (treat as needs-verification; no widely-cited published model is canonical here yet)", refId: null }
  },
  "banking": {
    biggestBottleneck: "Model-risk-management constraints (SR 11-7-style) &mdash; explainability and stability under stress are non-negotiable.",
    bestOpportunity: "AML investigator copilots and MRM tooling for AI models &mdash; banks need playbooks LLMs were not built for.",
    topReference: { type: "concept", label: "GBDT (XGBoost / LightGBM / CatBoost) is the production workhorse; foundation papers are well-known but no single &lsquo;banking AI&rsquo; canonical paper exists", refId: null }
  },
  "quant-finance": {
    biggestBottleneck: "Honest evaluation under data leakage, regime shift and transaction costs &mdash; most strategies look great until they go live.",
    bestOpportunity: "Honest evaluation tooling (transaction-cost, look-ahead-bias, leakage detection) that the industry quietly under-invests in.",
    topReference: { type: "concept", label: "No public canonical paper; quant ML is mostly proprietary. Time-series and reinforcement-learning landmarks (e.g. AlphaZero, DQN) are the underlying recipes.", refId: "paper-alphazero" }
  },
  "trading": {
    biggestBottleneck: "Latency and infrastructure &mdash; microseconds dominate, and most of the work is engineering, not modelling.",
    bestOpportunity: "Transaction-cost analytics and smart-routing tooling for buy-side workflows.",
    topReference: { type: "concept", label: "Mostly proprietary; reinforcement learning for execution is the dominant recipe.", refId: null }
  },
  "risk-management": {
    biggestBottleneck: "Stress-test coverage &mdash; tail events are by definition under-represented in training data.",
    bestOpportunity: "Model-monitoring + scenario / stress-test infrastructure tailored for AI models in regulated finance.",
    topReference: { type: "concept", label: "Industry-specific (no single canonical paper); SR 11-7 framework + interpretability literature.", refId: null }
  },
  "fraud-detection": {
    biggestBottleneck: "Adversarial drift &mdash; the attacker is learning at the same time you are.",
    bestOpportunity: "Graph-feature platforms for verticals adjacent to payments (gaming, marketplaces, crypto on-ramps).",
    topReference: { type: "paper", label: "GCN (Kipf and Welling, ICLR 2017) underpins the graph-feature approach", refId: "paper-gcn" }
  },
  "insurance": {
    biggestBottleneck: "State-by-state regulatory approval and fair-pricing constraints in major markets.",
    bestOpportunity: "Claims-process copilots with direct loss-ratio impact (auto, property, parametric).",
    topReference: { type: "vendor", label: "Tractable, Cape Analytics, Shift Technology (vendor case studies; specific deployment metrics vary)", refId: null }
  },
  "accounting-audit": {
    biggestBottleneck: "Regulator and standard-setter acceptance &mdash; AI outputs must be auditable and traceable.",
    bestOpportunity: "Specialty-area copilots (revenue recognition, leases, transfer pricing) with evidence-chain infrastructure.",
    topReference: { type: "concept", label: "RAG (Lewis et al., NeurIPS 2020) is the underlying retrieval pattern", refId: "paper-rag" }
  },
  "economic-forecasting": {
    biggestBottleneck: "Non-stationarity and limited training data per regime &mdash; macro is reflexive.",
    bestOpportunity: "Alt-data nowcasts for specialised verticals (consumer, supply chain, energy) where signals beat consensus by hours.",
    topReference: { type: "concept", label: "Time-series transformers + classical Bayesian VARs; no single canonical applied paper.", refId: null }
  },
  "software-engineering": {
    biggestBottleneck: "Repo-scale reliability &mdash; coding agents can pass benchmarks and still ship broken PRs.",
    bestOpportunity: "Language- and framework-specific agents for niche stacks where generalists struggle.",
    topReference: { type: "paper", label: "SWE-bench (Jimenez et al., ICLR 2024)", refId: "paper-swebench" }
  },
  "cybersecurity": {
    biggestBottleneck: "Adversarial drift plus the new AI attack surface (prompt injection, data poisoning).",
    bestOpportunity: "Prompt-injection / AI-attack-surface defence tooling for enterprise security teams.",
    topReference: { type: "dataset", label: "MITRE ATT&amp;CK (knowledge base of adversary tactics)", refId: "src-mitre-attack" }
  },
  "legal": {
    biggestBottleneck: "Hallucinated citations &mdash; documented in courts, leading to sanctions and malpractice risk.",
    bestOpportunity: "Specialty practice copilots (immigration, tax, employment) with verified citation chains.",
    topReference: { type: "paper", label: "RAG (Lewis et al., NeurIPS 2020) underpins citation-grounded legal AI", refId: "paper-rag" }
  },
  "education": {
    biggestBottleneck: "Assessment integrity &mdash; detection is unreliable; the response shifts to assignment design.",
    bestOpportunity: "Subject-specific tutors with measurable learning gains (math, languages, code) and integrity-aware assessment.",
    topReference: { type: "vendor", label: "Khan Academy Khanmigo, Duolingo Max (vendor-reported engagement; learning-gain evidence is the open question)", refId: null }
  },
  "hr-recruiting": {
    biggestBottleneck: "Fair-hiring laws &mdash; aggregate accuracy is not enough; disparate impact on protected groups is the binding test.",
    bestOpportunity: "Transparent ranking + audit / bias-monitoring tooling for regulated jurisdictions (NYC, EU AI Act).",
    topReference: { type: "concept", label: "Skills-graph and ranking models; no canonical applied paper, vendor-driven.", refId: null }
  },
  "sales-marketing": {
    biggestBottleneck: "Privacy and consent regulation plus measurement over long sales cycles.",
    bestOpportunity: "Outbound copilots with verified data sources and post-call coaching, not generation-only tools.",
    topReference: { type: "concept", label: "LLMs (general) + embeddings; no domain-specific canonical paper.", refId: null }
  },
  "customer-support": {
    biggestBottleneck: "Knowledge-base hygiene &mdash; a great LLM is bounded by the corpus it retrieves from.",
    bestOpportunity: "Vertical support copilots for regulated industries (telcos, banks, healthcare ops).",
    topReference: { type: "paper", label: "RAG (Lewis et al., NeurIPS 2020) is the dominant pattern", refId: "paper-rag" }
  },
  "enterprise-productivity": {
    biggestBottleneck: "Enterprise data hygiene and permissioning &mdash; copilots are only as good as what they can see.",
    bestOpportunity: "Vertical productivity copilots (industry-specific) plus permissioning + governance for AI access.",
    topReference: { type: "vendor", label: "Microsoft Copilot, Google Workspace AI, Glean (broad enterprise distribution)", refId: null }
  },
  "research-workflows": {
    biggestBottleneck: "Citation hallucination and corpus-coverage gaps &mdash; confidence is not verification.",
    bestOpportunity: "Specialty corpora copilots (medicine, law, materials, finance) with rigorous evaluation.",
    topReference: { type: "paper", label: "RAG (Lewis et al., NeurIPS 2020) underpins research copilots", refId: "paper-rag" }
  },
  "robotics": {
    biggestBottleneck: "Real-robot data scarcity plus the sim-to-real gap &mdash; demos are everywhere; reliability is rare.",
    bestOpportunity: "Robot-data infrastructure: teleoperation, simulation and labelling at fleet scale.",
    topReference: { type: "paper", label: "RT-2 (Brohan et al., 2023) and Open X-Embodiment (2023)", refId: "paper-rt2" }
  },
  "autonomous-vehicles": {
    biggestBottleneck: "Long-tail safety and human-driver interaction &mdash; the rare cases dominate risk.",
    bestOpportunity: "Specialty autonomy (warehouses, mining, logistics) where the operating-design domain is naturally narrow.",
    topReference: { type: "dataset", label: "nuScenes / Waymo Open Dataset / Argoverse (public AV datasets)", refId: "ds-nuscenes" }
  },
  "manufacturing": {
    biggestBottleneck: "Industrial data fragmentation across OT and IT systems plus rare-defect labelling.",
    bestOpportunity: "Specialty defect detection (electronics, food, pharma) with MES-integrated copilots.",
    topReference: { type: "vendor", label: "Cognex, Landing AI, Instrumental, Drishti (vendor-led category)", refId: null }
  },
  "supply-chain": {
    biggestBottleneck: "Multi-party data sharing across shippers, carriers and 3PLs.",
    bestOpportunity: "Real-time disruption signals with provenance and translation across jurisdictions.",
    topReference: { type: "concept", label: "Time-series + OR with ML inputs; no single canonical paper.", refId: null }
  },
  "energy-grid": {
    biggestBottleneck: "Regulatory approval and physical safety constraints &mdash; the grid is a physics machine first.",
    bestOpportunity: "DER (distributed energy resource) orchestration for behind-the-meter assets.",
    topReference: { type: "concept", label: "Time-series + reinforcement learning for dispatch; no single domain-canonical paper.", refId: null }
  },
  "climate-weather": {
    biggestBottleneck: "Evaluation on rare extremes &mdash; AI may match NWP on average and miss the events that matter most.",
    bestOpportunity: "Specialty regional and vertical weather products (renewables, agriculture, insurance).",
    topReference: { type: "paper", label: "GraphCast (Lam et al., Science 2023)", refId: "paper-graphcast" }
  },
  "agriculture": {
    biggestBottleneck: "Local heterogeneity (crop, soil, weather) &mdash; models do not transfer across geographies.",
    bestOpportunity: "Specialty-crop computer vision and decision support for under-served regions.",
    topReference: { type: "vendor", label: "John Deere See &amp; Spray (Blue River); vendor-disclosed input reduction in their materials", refId: null }
  },
  "construction": {
    biggestBottleneck: "Capture inconsistency &mdash; site photos and 360 captures must be regular and clean for AI to be accurate.",
    bestOpportunity: "Specialty trade copilots (electrical, mechanical, plumbing) and BIM-integrated progress tracking.",
    topReference: { type: "vendor", label: "OpenSpace, Buildots (vendor-led category, public case studies)", refId: null }
  },
  "mining-oil-gas": {
    biggestBottleneck: "Regulatory approval and safety in remote / harsh environments.",
    bestOpportunity: "Subsurface foundation models and edge AI for remote sites.",
    topReference: { type: "vendor", label: "BHP and Rio Tinto autonomous-haul deployments; SLB / Halliburton subsurface ML platforms", refId: null }
  },
  "telecommunications": {
    biggestBottleneck: "Vendor lock-in for OSS / BSS plus edge inference cost for the radio access network.",
    bestOpportunity: "Edge AI for RAN and AI-native customer care purpose-built for telcos.",
    topReference: { type: "concept", label: "Time-series anomaly detection + RL for self-organising networks; no canonical paper.", refId: null }
  },
  "materials-science": {
    biggestBottleneck: "Synthesis success rate &mdash; predicted stable structures are often not synthesisable.",
    bestOpportunity: "Autonomous lab platforms that close the design-build-test-learn loop.",
    topReference: { type: "dataset", label: "Materials Project (LBNL)", refId: "ds-materials-project" }
  },
  "chemistry": {
    biggestBottleneck: "Limited high-quality reaction data; novel-reaction generalisation.",
    bestOpportunity: "Lab-execution platforms that translate retrosynthetic plans into automated experiments.",
    topReference: { type: "concept", label: "Molecular transformers + GNNs; field has many strong papers, no single canonical reference.", refId: null }
  },
  "physics": {
    biggestBottleneck: "Trust in surrogates outside training distribution and interpretability for physics.",
    bestOpportunity: "Specialty engineering surrogates (CFD, EM, structural) with engineering-grade uncertainty.",
    topReference: { type: "paper", label: "Fourier Neural Operator (Li et al., ICLR 2021)", refId: "paper-fno" }
  },
  "mathematics": {
    biggestBottleneck: "Formalisation cost &mdash; informal mathematical reasoning has to be ported to Lean / Coq for verification.",
    bestOpportunity: "Formalisation tooling and research-math copilots that lower the cost of theorem-proving workflows.",
    topReference: { type: "model", label: "AlphaProof and AlphaGeometry (DeepMind research)", refId: null }
  },
  "scientific-computing": {
    biggestBottleneck: "Out-of-distribution behaviour &mdash; engineering certification (e.g. DO-178C-class) needs guarantees neural surrogates do not yet provide.",
    bestOpportunity: "Engineering-grade surrogates with uncertainty and certification-friendly tooling.",
    topReference: { type: "paper", label: "Fourier Neural Operator (Li et al., ICLR 2021)", refId: "paper-fno" }
  },
  "aerospace-space": {
    biggestBottleneck: "Certification (DO-178C / DO-254) keeps autonomy narrow and supervised in safety-critical aviation systems.",
    bestOpportunity: "Specialty geospatial verticals (insurance, agriculture, defence) on top of foundation models.",
    topReference: { type: "model", label: "Prithvi geospatial foundation model (NASA + IBM); vendor / research partnership", refId: null }
  },
  "media-entertainment": {
    biggestBottleneck: "Rights, provenance and moderation at scale.",
    bestOpportunity: "Provenance and rights tooling (e.g. C2PA-based) for studios, brands and platforms.",
    topReference: { type: "paper", label: "Latent Diffusion Models (Rombach et al., CVPR 2022)", refId: "paper-ldm" }
  },
  "gaming": {
    biggestBottleneck: "Latency budgets and platform certification limit on-device AI in real-time gameplay.",
    bestOpportunity: "Studio-grade asset pipelines and NPC agents with safety scaffolding.",
    topReference: { type: "concept", label: "DLSS-class super-resolution (NVIDIA) is the most-deployed gaming AI category.", refId: null }
  },
  "design-architecture": {
    biggestBottleneck: "IP and rights on training data; manufacturability and code-compliance constraints.",
    bestOpportunity: "Specialty design copilots (interior, brand, product) with manufacturability constraints baked in.",
    topReference: { type: "vendor", label: "Adobe Firefly, Figma AI, Vizcom (vendor-led category)", refId: null }
  },
  "music-audio": {
    biggestBottleneck: "Rights and licensing &mdash; commercial use is risky until rights regimes mature.",
    bestOpportunity: "Rights-clean training and licensing infrastructure for sync, podcast and game audio.",
    topReference: { type: "vendor", label: "Suno, Udio, ElevenLabs (vendor-led; rights status varies)", refId: null }
  },
  "consumer-search": {
    biggestBottleneck: "Citation and ad / publisher economics &mdash; the disruption is the business model, not just the UX.",
    bestOpportunity: "Vertical search (medicine, law, science) with citation infrastructure and rights-clean retrieval.",
    topReference: { type: "paper", label: "RAG (Lewis et al., NeurIPS 2020)", refId: "paper-rag" }
  },
  "government-services": {
    biggestBottleneck: "Procurement, FedRAMP / IL-class certification, and equity / transparency requirements.",
    bestOpportunity: "FedRAMP-ready vertical tools for case management, translation and appeals.",
    topReference: { type: "concept", label: "RAG + OCR + ASR stacks built on hyperscaler models; no single domain-canonical paper.", refId: null }
  },
  "defence": {
    biggestBottleneck: "Accountability and laws of armed conflict &mdash; high-stakes operations require humans in the loop.",
    bestOpportunity: "Dual-use ISR analysis, logistics and predictive-maintenance copilots; training simulators.",
    topReference: { type: "concept", label: "Mostly classified or vendor-private; cite cautiously.", refId: null }
  },
  "intelligence-analysis": {
    biggestBottleneck: "Classification and access controls plus adversarial deception (deepfakes / IO).",
    bestOpportunity: "OSINT analytics with chain-of-evidence and deepfake / IO detection.",
    topReference: { type: "concept", label: "Mostly classified or vendor-private; cite cautiously.", refId: null }
  },
  "smart-cities": {
    biggestBottleneck: "Procurement, interoperability across departments and privacy / surveillance scrutiny.",
    bestOpportunity: "Civic copilots in many languages with civic-data interoperability built in.",
    topReference: { type: "concept", label: "National LLM programmes (UAE, Saudi Arabia, India, Singapore, France) and civic AI deployments; no single canonical paper.", refId: null }
  }
};

/* ============================================
   DOMAIN_QUESTIONS
   The teaching layer. Every entry must teach a mental model.
   Audience: beginner / founder / investor / engineer / researcher / contrarian.
   Confidence vocabulary identical to the rest of the atlas.
   ============================================ */
var DOMAIN_QUESTIONS = [

  /* ── Foundation / cross-domain ── */
  {
    id: "q-bio-vs-finance",
    question: "Why is AI so different in biology than in finance?",
    audience: "beginner", category: "Domain overview", difficulty: "Beginner",
    shortAnswer: "Biology data is messy and 3D; the gate is wet-lab validation. Finance data is tabular and time-series; the gate is realistic evaluation under regime shift. Different shapes, different bottlenecks.",
    detailedAnswer: [
      "Biology lives in 3D structures, multi-omic measurements and sparse experimental data. The architectures that win are graph, equivariant, diffusion and protein-language models. The hard gate is wet-lab and clinical validation &mdash; AI proposes; experiments decide.",
      "Finance lives in tabular and time-series data with precise numbers and tight latency. The architectures that win are gradient-boosted trees, time-series transformers and reinforcement learning for execution. The hard gate is honest evaluation: regime shift, data leakage and transaction costs make optimistic backtests routine.",
      "If you stare at one domain&rsquo;s playbook and try to apply it to the other, you will mis-pick the architecture and miss the real bottleneck."
    ],
    mentalModel: "Biology has a physical loss function (the cell). Finance has a reflexive one (markets that change because you act on them).",
    commonMisunderstanding: "&lsquo;AI is one thing.&rsquo; The data shape, evaluation gate and architecture differ enough across domains that they are different fields.",
    whyItMatters: "Because the right starting question in any domain is &lsquo;what gates real deployment here?&rsquo; &mdash; not &lsquo;which model is biggest?&rsquo;",
    relatedDomains: ["drug-discovery", "quant-finance", "banking"],
    relatedArchitectures: ["protein-lm", "diffusion-bio", "gbdt", "ts-transformer"],
    relatedUseCases: ["uc-drug-virtual-screen", "uc-quant-alpha"],
    relatedPapers: ["paper-alphafold2", "paper-rag"],
    sourceIds: ["src-pdb", "src-uniprot"],
    confidence: "context"
  },
  {
    id: "q-rag-everywhere",
    question: "Why is RAG so common in law, enterprise and customer support?",
    audience: "beginner", category: "Architecture choice", difficulty: "Beginner",
    shortAnswer: "Because those domains demand citations and frequent corpus updates. RAG grounds an LLM in retrieved documents at generation time, so answers can be checked against sources.",
    detailedAnswer: [
      "Legal, enterprise and support all share three properties: text-heavy work, frequent updates to the source corpus, and a hard cost for confident-but-wrong answers. Fine-tuning a model every time a contract clause or policy changes is wasteful; RAG just updates the index.",
      "RAG also gives users something to verify: the retrieved sources themselves. That moves AI from a black box to a search-augmented assistant, which matters in regulated and reviewable workflows.",
      "It is not a panacea. Bad retrieval gives bad answers; the model can still hallucinate when retrieval misses. But the architecture aligns with how these domains already work."
    ],
    mentalModel: "RAG is open-book exam mode for LLMs. The book changes; the model just keeps reading the right pages.",
    commonMisunderstanding: "RAG eliminates hallucination. It reduces it on retrieved-supported claims; everything else is at risk.",
    whyItMatters: "Picking RAG vs fine-tuning vs agents is one of the most common architectural decisions in applied AI; getting it right shapes cost and trust.",
    relatedDomains: ["legal", "customer-support", "enterprise-productivity", "research-workflows"],
    relatedArchitectures: ["rag", "llm", "embeddings"],
    relatedUseCases: ["uc-legal-research", "uc-customer-service-deflection"],
    relatedPapers: ["paper-rag"],
    sourceIds: ["paper-rag"],
    confidence: "sourced"
  },
  {
    id: "q-medicine-vs-marketing",
    question: "Why is AI in healthcare slower to deploy than AI in marketing?",
    audience: "beginner", category: "Domain overview", difficulty: "Beginner",
    shortAnswer: "Because the cost of being wrong is higher, the validation bar is regulatory, and the workflow change touches accountability. Marketing tolerates noisy outputs; medicine cannot.",
    detailedAnswer: [
      "In marketing, AI errors are commercial: a worse subject line, a slightly off ad. The feedback loop is fast, the cost per error is small, and adoption is decided by a CMO.",
      "In healthcare, errors can hurt patients. Deployment requires clinical validation, FDA / CE clearance for software-as-a-medical-device, integration with EHR workflows, malpractice considerations, and trust from clinicians.",
      "Even when the underlying model is identical, the surrounding system &mdash; review, monitoring, accountability &mdash; differs by orders of magnitude."
    ],
    mentalModel: "Marketing is a casino: many bets, small stakes, fast feedback. Medicine is a courtroom: few decisions, high stakes, evidence required.",
    commonMisunderstanding: "&lsquo;The model works, so deploy it.&rsquo; The model is one input to a regulated system that includes evaluation, accountability and workflow.",
    whyItMatters: "Most failures of medical AI have not been about the model; they have been about validation, integration and trust.",
    relatedDomains: ["clinical-medicine", "radiology", "sales-marketing"],
    relatedArchitectures: ["domain-fm", "rag"],
    relatedUseCases: ["uc-radiology-report-assist", "uc-clinical-scribe"],
    relatedPapers: ["paper-medpalm2"],
    sourceIds: ["src-fda-samd"],
    confidence: "context"
  },
  {
    id: "q-foundation-vs-gbdt",
    question: "Why do some domains need foundation models while others still use gradient boosting?",
    audience: "engineer", category: "Architecture choice", difficulty: "Intermediate",
    shortAnswer: "Foundation models win when the input is unstructured (text, images, video). Gradient boosting still wins on tabular data where features are dense and engineered.",
    detailedAnswer: [
      "Foundation models compress huge amounts of unstructured data into reusable representations. They are dominant for text (LLMs), images (ViTs, diffusion), proteins (ESM), code (CodeLLMs).",
      "Gradient-boosted trees (XGBoost, LightGBM, CatBoost) remain the workhorses on tabular data &mdash; banking, fraud, ranking, industrial scoring. The features are dense, engineered and well-understood; trees handle non-linearities and missing data without much fuss.",
      "Modern tabular foundation models exist but rarely outperform a well-tuned GBDT on production data. The right answer is usually: tabular &rArr; GBDT, unstructured &rArr; foundation models, mixed &rArr; both."
    ],
    mentalModel: "Foundation models are universal translators for unstructured data. GBDT is a calculator with a deep understanding of spreadsheets.",
    commonMisunderstanding: "&lsquo;Foundation models are always better.&rsquo; On tabular data, a well-tuned GBDT routinely beats much larger models.",
    whyItMatters: "Picking the right tool for the data shape avoids spending months training a foundation model where a tree would have done the job.",
    relatedDomains: ["banking", "fraud-detection", "drug-discovery", "software-engineering"],
    relatedArchitectures: ["gbdt", "llm", "domain-fm"],
    relatedUseCases: ["uc-fraud-realtime", "uc-quant-alpha"],
    relatedPapers: ["paper-gpt3"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-rag-vs-finetune",
    question: "When should you use RAG instead of fine-tuning?",
    audience: "engineer", category: "Architecture choice", difficulty: "Intermediate",
    shortAnswer: "Use RAG when the knowledge changes often and citation matters. Fine-tune when style, format or behaviour matters more than facts.",
    detailedAnswer: [
      "RAG injects facts at inference. If your corpus updates daily (case law, product docs, internal wikis), RAG keeps the model current without retraining.",
      "Fine-tuning bakes behaviour. If you need consistent tone, format, refusal patterns, or domain-specific reasoning that is hard to express as retrieved context, fine-tuning is the right tool.",
      "Most production systems use both. Fine-tune for behaviour, RAG for knowledge. Adding agents and tools comes after, when the task requires actions, not just answers."
    ],
    mentalModel: "RAG = open book. Fine-tune = trained habit. Agents = pen and tools.",
    commonMisunderstanding: "&lsquo;RAG vs fine-tune&rsquo; is a binary choice. It usually is not; production stacks combine them.",
    whyItMatters: "The cost differences are large. Fine-tuning carries data, evaluation and operations overhead; RAG carries retrieval and corpus engineering. Match it to the problem.",
    relatedDomains: ["legal", "customer-support", "enterprise-productivity", "research-workflows"],
    relatedArchitectures: ["rag", "llm", "domain-fm"],
    relatedUseCases: ["uc-legal-research", "uc-customer-service-deflection", "uc-clinical-scribe"],
    relatedPapers: ["paper-rag", "paper-instructgpt"],
    sourceIds: ["paper-rag"],
    confidence: "context"
  },
  {
    id: "q-when-gnn",
    question: "When are graph neural networks actually useful?",
    audience: "engineer", category: "Architecture choice", difficulty: "Advanced",
    shortAnswer: "When the relationships between items carry signal that you would otherwise have to engineer by hand. Molecules, social networks, code, fraud rings.",
    detailedAnswer: [
      "GNNs propagate information through the structure of a graph. They are the right tool when the prediction depends not just on a node&rsquo;s features but on its neighbourhood: who you know in fraud, what your atom is bonded to in chemistry, which functions call which in code.",
      "On flat tabular data, GNNs rarely beat boosted trees. On problems with rich relational structure, they can lift detection or prediction substantially.",
      "The challenge is engineering: building, storing and updating the graph itself, dealing with sampling, and managing scalability. The model is often the easy part."
    ],
    mentalModel: "GNNs treat structure as data. If the relationships matter, you need the model to read them.",
    commonMisunderstanding: "&lsquo;GNN&rsquo; is a single architecture. There are many (GCN, GAT, GraphSAGE, message passing, graph transformers); the choice matters.",
    whyItMatters: "GNNs are most often used where they are needed (chemistry, fraud) and most often abused where simpler models would have worked.",
    relatedDomains: ["drug-discovery", "fraud-detection", "cybersecurity", "materials-science"],
    relatedArchitectures: ["molecular-gnn", "graph-threat", "equivariant-nn"],
    relatedUseCases: ["uc-fraud-realtime", "uc-drug-virtual-screen"],
    relatedPapers: ["paper-gcn"],
    sourceIds: ["paper-gcn"],
    confidence: "context"
  },
  {
    id: "q-time-series-domains",
    question: "Why do time-series models matter in finance, energy and weather?",
    audience: "engineer", category: "Architecture choice", difficulty: "Intermediate",
    shortAnswer: "Because their underlying processes are temporal. Each step depends on the past, and the loss function is &lsquo;what happened next&rsquo;. Different domain, same problem shape.",
    detailedAnswer: [
      "Finance, energy and weather all observe a state evolving over time and need to forecast or classify what comes next. The shapes overlap: seasonality, trend, regime change, exogenous variables.",
      "Architectures evolved together: ARIMA-style classical models, LSTMs, then transformer variants (PatchTST, iTransformer), and now time-series foundation models (TimesFM, Chronos, Moirai). Each generation transfers across all three.",
      "The hard parts are also shared: regime shift, evaluation that respects causality, and integrating exogenous signals (weather affects energy demand, which affects power prices)."
    ],
    mentalModel: "Time-series models learn the dynamics of a moving thing. The thing changes; the dynamics often rhyme.",
    commonMisunderstanding: "&lsquo;Time-series is solved by classical methods.&rsquo; ARIMA still wins on simple, stationary series; on heterogeneous, regime-shifting data at scale, modern transformers and foundation forecasters are starting to dominate.",
    whyItMatters: "Most production AI in these domains is time-series, not chat. Investors and operators who only watch LLMs miss the actual workload.",
    relatedDomains: ["quant-finance", "trading", "energy-grid", "climate-weather"],
    relatedArchitectures: ["ts-transformer", "neural-operators", "gbdt"],
    relatedUseCases: ["uc-quant-alpha", "uc-energy-renew-forecast", "uc-weather-medium-range"],
    relatedPapers: ["paper-graphcast", "paper-fno"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-diffusion-everywhere",
    question: "Why do diffusion models show up in images, molecules and robotics?",
    audience: "engineer", category: "Architecture choice", difficulty: "Advanced",
    shortAnswer: "Because they handle multimodal, high-dimensional generation gracefully. The same recipe (gradually denoise from noise) works on pixels, atoms and robot actions.",
    detailedAnswer: [
      "Diffusion models learn to invert a gradual noising process. The training objective is stable, the inference is iterative, and the conditioning is flexible.",
      "On images, they generate photorealistic samples. On molecules, they generate 3D structures and binding poses. On robotics, they generate sequences of actions consistent with multimodal demonstrations.",
      "The reason they translate: they handle multi-modal distributions (many valid answers) and high-dimensional outputs (pixels, atoms, action sequences) without the failure modes that plagued GANs."
    ],
    mentalModel: "Diffusion is sculpting in reverse: start from noise, carve toward the data manifold. Same chisel; many materials.",
    commonMisunderstanding: "Diffusion is for images. The recipe is general; it shows up in audio, video, molecules, proteins and robot actions.",
    whyItMatters: "Recognising diffusion as a transferable recipe rather than an image trick changes how you read papers across domains.",
    relatedDomains: ["media-entertainment", "drug-discovery", "protein-design", "robotics"],
    relatedArchitectures: ["diffusion", "diffusion-bio", "diffusion-policy"],
    relatedUseCases: ["uc-protein-binder", "uc-robotics-pick"],
    relatedPapers: ["paper-ddpm", "paper-ldm", "paper-rfdiffusion", "paper-diffdock", "paper-diffusion-policy"],
    sourceIds: ["paper-ddpm"],
    confidence: "sourced"
  },
  {
    id: "q-medicine-imaging-mature",
    question: "Why is medical imaging the most-deployed AI in healthcare?",
    audience: "beginner", category: "Domain overview", difficulty: "Beginner",
    shortAnswer: "Because the input is already digital and pattern-rich, the tasks are narrow, and the regulatory pathway is well-trodden. Imaging meets every condition for AI to deploy.",
    detailedAnswer: [
      "Most other clinical workflows depend on writing, judgment and accountability that are hard to model. Imaging delivers each study as a digital file with structured metadata.",
      "The tasks (detect a finding, segment a region, triage urgent cases) are narrow enough to validate. The FDA SaMD pathway has a long history with imaging products, so vendors know how to clear them.",
      "Liability is also more contained: AI is reviewed and signed off by a radiologist. The system improves the radiologist&rsquo;s workflow rather than replacing the decision."
    ],
    mentalModel: "Imaging AI is on rails: digital input, narrow task, established regulator path. It is the fast lane of medical AI.",
    commonMisunderstanding: "&lsquo;FDA-cleared&rsquo; means &lsquo;approved to autonomously diagnose&rsquo;. It usually means clearance for a specific narrow task as triage or assistance.",
    whyItMatters: "Imaging-led deployment is the template for the next wave (pathology, ophthalmology). Knowing why it works tells you when other workflows can follow.",
    relatedDomains: ["radiology", "pathology", "ophthalmology", "clinical-medicine"],
    relatedArchitectures: ["unet", "vit", "cnn", "segmentation-models"],
    relatedUseCases: ["uc-radiology-report-assist", "uc-pathology-biomarker"],
    relatedPapers: ["paper-unet", "paper-nnunet", "paper-chexnet"],
    sourceIds: ["src-fda-samd"],
    confidence: "context"
  },
  {
    id: "q-multimodal-importance",
    question: "Where is multimodal AI most important?",
    audience: "researcher", category: "Architecture choice", difficulty: "Intermediate",
    shortAnswer: "Where the real-world workflow already is multimodal: medicine (image + text), robotics (vision + language + action), document AI (image + text), and agents that read screens.",
    detailedAnswer: [
      "Multimodal models help wherever decisions depend on information across modalities. A radiologist reads images alongside notes; a robot sees and is told; a screen agent looks at pixels and reads HTML.",
      "Single-modality models force the workflow to be reshaped around the model. Multimodal models can sit closer to how the work is actually done.",
      "The cost is real: training and inference compute, data alignment, evaluation across modalities. Which is why multimodal lands first where the workflow gain is largest."
    ],
    mentalModel: "Single-modality models speak one sense. Multimodal models speak the language of the workflow.",
    commonMisunderstanding: "&lsquo;Multimodal is universally better.&rsquo; In many narrow tasks, a single-modality specialist still wins. Multimodal pays where the workflow is multimodal.",
    whyItMatters: "Multimodal reshapes which products are possible (screen agents, clinical copilots, robot policies) and which architectures matter.",
    relatedDomains: ["clinical-medicine", "robotics", "consumer-search", "enterprise-productivity"],
    relatedArchitectures: ["multimodal-llm", "vlm", "vla"],
    relatedUseCases: ["uc-radiology-report-assist", "uc-robotics-pick"],
    relatedPapers: ["paper-clip", "paper-flamingo", "paper-llava", "paper-rt2"],
    sourceIds: ["paper-clip"],
    confidence: "context"
  },
  {
    id: "q-synthetic-data-role",
    question: "What is the role of synthetic data across domains?",
    audience: "researcher", category: "Architecture choice", difficulty: "Intermediate",
    shortAnswer: "It expands coverage where real data is scarce, sensitive or skewed. It is most credible when the synthesis is grounded in physics, simulators or strong priors &mdash; and least credible when it is just &lsquo;more outputs from another model&rsquo;.",
    detailedAnswer: [
      "Synthetic data is essential where real data is hard: rare medical cases, robot scenes, materials chemistries, edge-case driving. Simulation, generative models, and human-in-the-loop synthesis all play a role.",
      "It is risky when the synthetic distribution is biased toward what the generator already knows. Models trained on their own outputs can collapse; safety claims based on synthetic edge cases need real-world confirmation.",
      "The right synthetic-data programs are paired with real-world evaluation gates."
    ],
    mentalModel: "Synthetic data is rehearsal. It only tells you about live performance if the rehearsal mimics the real stage.",
    commonMisunderstanding: "More synthetic data is always better. Past a point, it amplifies the generator&rsquo;s biases.",
    whyItMatters: "Synthetic-data strategy is a major lever in robotics, AV, medicine and security; getting it right is what separates real progress from benchmark-only progress.",
    relatedDomains: ["robotics", "autonomous-vehicles", "clinical-medicine", "cybersecurity"],
    relatedArchitectures: ["diffusion", "world-models", "sim-to-real"],
    relatedUseCases: ["uc-robotics-pick", "uc-radiology-report-assist"],
    relatedPapers: ["paper-rt2"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-regulation-moat",
    question: "Where are regulatory constraints actually a moat?",
    audience: "founder", category: "Founder opportunities", difficulty: "Advanced",
    shortAnswer: "Where the fixed cost of clearance, certification or licensing is high relative to the first-customer value &mdash; medicine, finance, defence, autonomous vehicles. Once you are inside, displacement is slow.",
    detailedAnswer: [
      "Regulation slows new entrants. In healthcare, FDA SaMD clearance plus payer reimbursement plus EHR integration is years of work. In banking, model-risk-management approval plus regulator engagement is similar. In defence, FedRAMP / IL-class certification gates everything.",
      "For incumbents, that is a moat. For founders, it is a wedge if you can pick a sub-domain where the bar is high but the existing tools are weak. Specialty pathology, regulatory copilots, and FedRAMP-ready vertical AI are all examples.",
      "The losers are founders who treat regulation as an after-thought. The winners are founders who choose their regulator on day one."
    ],
    mentalModel: "Regulation is the cost of admission. Where it is high, entrants are few; where they exist, displacement is slow.",
    commonMisunderstanding: "&lsquo;Regulation is just friction.&rsquo; It is a moat for whoever does it well; the friction is the moat.",
    whyItMatters: "Most software-grade plays in regulated domains die not from technology but from underestimating compliance.",
    relatedDomains: ["clinical-medicine", "banking", "defence", "autonomous-vehicles"],
    relatedArchitectures: [],
    relatedUseCases: ["uc-radiology-report-assist", "uc-cyber-soc"],
    relatedPapers: [],
    sourceIds: ["src-fda-samd"],
    confidence: "context"
  },
  {
    id: "q-data-access-bottleneck",
    question: "Where is data access the real bottleneck?",
    audience: "founder", category: "Bottleneck", difficulty: "Intermediate",
    shortAnswer: "Wherever data is private, regulated, contractually controlled or held by incumbents. Healthcare, finance, defence, robotics and many industrial domains.",
    detailedAnswer: [
      "Public data has been mined; the next gains in many domains come from private data. Healthcare is locked by HIPAA / GDPR / hospital contracts; finance is locked by privacy and regulator constraints; robotics is locked by per-fleet teleop data.",
      "Data-access strategy is a product decision. Founders win by buying access (royalties, partnerships), or by building data themselves (autonomous labs, sensor networks, robot teleop), or by exploiting overlooked open corpora.",
      "The biggest valuations in the next AI cycle will track data control as much as model quality."
    ],
    mentalModel: "In a public-data world, the model is the moat. In a private-data world, the access is the moat.",
    commonMisunderstanding: "&lsquo;The data is out there if you scrape hard enough.&rsquo; The data that matters is usually contractually controlled.",
    whyItMatters: "If you cannot draw a credible data-access story, the model story rarely matters.",
    relatedDomains: ["clinical-medicine", "banking", "robotics", "manufacturing"],
    relatedArchitectures: [],
    relatedUseCases: ["uc-radiology-report-assist", "uc-fraud-realtime", "uc-robotics-pick"],
    relatedPapers: [],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-overbuilt-domains",
    question: "Which AI domains are overbuilt right now?",
    audience: "contrarian", category: "Hype vs real", difficulty: "Intermediate",
    shortAnswer: "Generic chatbots for SMB, generic prompt-engineering products, undifferentiated AI writing tools, and any &lsquo;AI for X&rsquo; product where X already had a dominant SaaS incumbent that just shipped a copilot.",
    detailedAnswer: [
      "Markets where AI is a feature on top of an existing distribution channel are dangerous: Microsoft, Google, Adobe, Salesforce, Notion and Atlassian have all shipped copilots inside their products. Standalone AI productivity startups face a brutal feature-creep risk.",
      "Generic prompt-engineering plays are commodified by frontier-model labs themselves. Consumer chatbots without distinct data or distribution land in the same category.",
      "Underbuilt areas tend to be the opposite: regulated, data-hard, evaluation-hard, integration-hard. The boring categories most people skip."
    ],
    mentalModel: "If your product is a thin layer over GPT-N, your moat is the layer. If the layer is &lsquo;a nicer prompt&rsquo;, your moat is paper-thin.",
    commonMisunderstanding: "&lsquo;If everyone is in this market, it must be the right market.&rsquo; Often it just means low-cost-of-entry; the moat lives elsewhere.",
    whyItMatters: "Picking which markets to skip is as important as picking which to enter.",
    relatedDomains: ["enterprise-productivity", "sales-marketing", "consumer-search"],
    relatedArchitectures: ["llm", "rag"],
    relatedUseCases: ["uc-customer-service-deflection"],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-pick-architecture",
    question: "How do you pick the right model architecture for a domain?",
    audience: "engineer", category: "Architecture choice", difficulty: "Intermediate",
    shortAnswer: "Start from the data shape, evaluation gate and latency budget. Architecture follows from those constraints; do not start from the model.",
    detailedAnswer: [
      "If the data is tabular, default to GBDT and only consider neural alternatives when you have a clear reason. If it is unstructured (text, images, code), use foundation models.",
      "If the data is sequential, time-series models (and increasingly time-series foundation models) are the right starting point. If it has graph structure, GNNs.",
      "Then layer in evaluation: regulated domains need interpretability. Add latency: trading and robotics rule out the largest models. Then choose the architecture that satisfies all three."
    ],
    mentalModel: "Architecture is downstream of data shape, evaluation and latency. Pick the constraints first; the model becomes obvious.",
    commonMisunderstanding: "&lsquo;Pick the latest model.&rsquo; The right model fits the constraints; the latest model often does not.",
    whyItMatters: "The most expensive failure mode in applied AI is picking a model that fundamentally does not fit the constraints, then patching for months.",
    relatedDomains: [],
    relatedArchitectures: ["gbdt", "llm", "rag", "ts-transformer", "molecular-gnn"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "context"
  },

  /* ── Domain-specific (drug-discovery & life sciences) ── */
  {
    id: "q-bio-validation",
    question: "Why is wet-lab validation the hard gate in drug discovery AI?",
    audience: "researcher", category: "Bottleneck", difficulty: "Advanced",
    shortAnswer: "Because biology is the loss function. Predicted activity is not measured activity, and most generated molecules fail to express, fold, or do anything useful in cells.",
    detailedAnswer: [
      "AI scoring functions can rank molecules in silico in seconds. The wet lab takes weeks. The cost asymmetry tempts founders to skip the lab; the failure rate of in-silico-only candidates makes that disastrous.",
      "Even when a generated molecule binds in a docking simulation, real cells care about solubility, permeability, off-target effects, metabolic stability and toxicity. None of these are fully captured by current models.",
      "The mature pipelines treat AI as a candidate generator and ranker, with the lab as the truth function. Active learning closes the loop."
    ],
    mentalModel: "AI is the casting director; the lab is the audition. Most candidates do not get the part.",
    commonMisunderstanding: "&lsquo;A high docking score means the drug works.&rsquo; It means it is worth testing &mdash; nothing more.",
    whyItMatters: "Founders and investors who underestimate the lab gate tend to over-promise timelines.",
    relatedDomains: ["drug-discovery", "protein-design"],
    relatedArchitectures: ["diffusion-bio", "molecular-gnn"],
    relatedUseCases: ["uc-drug-virtual-screen", "uc-protein-binder"],
    relatedPapers: ["paper-diffdock", "paper-rfdiffusion"],
    sourceIds: ["src-pdb"],
    confidence: "inferred"
  },
  {
    id: "q-bio-alphafold",
    question: "How big a deal was AlphaFold for biology?",
    audience: "beginner", category: "Papers", difficulty: "Intermediate",
    shortAnswer: "Major. AlphaFold 2 turned a 50-year-old grand challenge into a routine compute step, and AlphaFold 3 extended the same approach to broader biomolecular complexes.",
    detailedAnswer: [
      "Before AlphaFold 2, predicting a protein&rsquo;s 3D structure from sequence was an open problem with poor accuracy on hard targets. AlphaFold 2 (2021, Nature) reached experimental accuracy on most structures.",
      "AlphaFold 3 (2024, Nature) extended the approach to nucleic acids, ligands, antibodies and modifications. The approach also influenced ESMFold, RoseTTAFold and the entire downstream design field.",
      "Structures are not biology, but they are upstream of much of it. AlphaFold reshaped how computational biology proceeds."
    ],
    mentalModel: "AlphaFold turned protein structure from a research project into a search bar.",
    commonMisunderstanding: "&lsquo;AlphaFold solved biology.&rsquo; It solved structure from sequence; biology is far larger than that.",
    whyItMatters: "It is the cleanest demonstration that AI can collapse a long-standing scientific problem &mdash; with structural implications across drug discovery and design.",
    relatedDomains: ["drug-discovery", "protein-design", "genomics"],
    relatedArchitectures: ["equivariant-nn", "diffusion-bio"],
    relatedUseCases: ["uc-drug-virtual-screen"],
    relatedPapers: ["paper-alphafold2", "paper-alphafold3", "paper-esm2", "paper-rosettafold"],
    sourceIds: ["paper-alphafold2", "paper-alphafold3"],
    confidence: "sourced"
  },
  {
    id: "q-bio-diffusion-molecules",
    question: "Why do diffusion models show up in drug discovery?",
    audience: "engineer", category: "Architecture choice", difficulty: "Advanced",
    shortAnswer: "Because they handle 3D molecular geometry naturally and let you generate structures conditioned on a target.",
    detailedAnswer: [
      "Drug discovery cares about geometry: bond angles, binding poses, protein backbones in 3D space. Diffusion models can generate continuous, structured outputs in 3D &mdash; molecules, ligand poses, protein backbones.",
      "RFdiffusion designs protein backbones; DiffDock scores binding poses; molecular-diffusion variants generate small molecules conditioned on receptor structure.",
      "The architectural lift is real, but the validation gate (wet lab) is unchanged. Diffusion accelerates candidate generation; it does not replace experiment."
    ],
    mentalModel: "Diffusion is a structured-output generator that respects geometry. Drug discovery cares about geometry.",
    commonMisunderstanding: "&lsquo;Diffusion makes the wet lab obsolete.&rsquo; It accelerates the funnel; it does not change the truth function.",
    whyItMatters: "Recognising diffusion as a transferable recipe sharpens architecture choice in drug discovery and design.",
    relatedDomains: ["drug-discovery", "protein-design"],
    relatedArchitectures: ["diffusion-bio", "diffusion", "equivariant-nn"],
    relatedUseCases: ["uc-protein-binder", "uc-drug-virtual-screen"],
    relatedPapers: ["paper-rfdiffusion", "paper-diffdock", "paper-ddpm"],
    sourceIds: ["paper-rfdiffusion"],
    confidence: "sourced"
  },
  {
    id: "q-genomics-overview",
    question: "How is AI used in genomics?",
    audience: "beginner", category: "Domain overview", difficulty: "Beginner",
    shortAnswer: "Mostly to interpret variants, predict regulatory and splice effects, and analyse single-cell data. Sequence data is a natural fit for transformer-style models.",
    detailedAnswer: [
      "Sequencing has been industrialised. The interpretation step &mdash; what does this variant mean? &mdash; is where AI is doing the most work, with models like SpliceAI and AlphaMissense.",
      "Population diversity matters: most published cohorts skew European. Models trained on biased data underperform for under-represented populations.",
      "Clinical genomics is regulated; AI tooling assists interpretation but does not adjudicate diagnoses."
    ],
    mentalModel: "Genomics AI is search and interpretation, not synthesis.",
    commonMisunderstanding: "&lsquo;A predicted variant effect is a diagnosis.&rsquo; It is a prioritisation; clinical adjudication is its own step.",
    whyItMatters: "Variant interpretation is the daily bottleneck across clinical genomics.",
    relatedDomains: ["genomics", "drug-discovery", "clinical-medicine"],
    relatedArchitectures: ["protein-lm", "domain-fm", "cnn"],
    relatedUseCases: [],
    relatedPapers: ["paper-spliceai", "paper-alphamissense"],
    sourceIds: ["src-uk-biobank", "src-gnomad"],
    confidence: "sourced"
  },
  {
    id: "q-protein-design",
    question: "How does AI design proteins that work in the lab?",
    audience: "researcher", category: "Domain overview", difficulty: "Advanced",
    shortAnswer: "Diffusion models generate backbones (RFdiffusion); inverse-folding models generate sequences (ProteinMPNN); in-silico filters and lab assays close the loop.",
    detailedAnswer: [
      "The recipe: specify a target or function, generate candidate protein backbones with diffusion, design sequences with inverse-folding networks, filter in-silico, then express and assay in the lab.",
      "Successful designs include de novo binders, enzymes and antibody candidates with measured activity. Failure rates are still significant; expression and folding success vary.",
      "Multiple rounds of iteration with active learning are now standard in well-run programs."
    ],
    mentalModel: "Protein design is design-build-test-learn. The model proposes; the lab disposes.",
    commonMisunderstanding: "&lsquo;A designed sequence is a working protein.&rsquo; Many designs fail at expression or folding before assay.",
    whyItMatters: "Protein design is the cleanest demonstration that generative AI can produce real biological function.",
    relatedDomains: ["protein-design", "drug-discovery"],
    relatedArchitectures: ["diffusion-bio", "protein-lm", "molecular-gnn", "equivariant-nn"],
    relatedUseCases: ["uc-protein-binder"],
    relatedPapers: ["paper-rfdiffusion", "paper-proteinmpnn", "paper-esm2"],
    sourceIds: ["paper-rfdiffusion"],
    confidence: "sourced"
  },
  {
    id: "q-medicine-overview",
    question: "How is AI used in clinical medicine?",
    audience: "beginner", category: "Domain overview", difficulty: "Beginner",
    shortAnswer: "Documentation and triage are the most-deployed; imaging is the most-cleared; clinical decision support remains assistive with clinician accountability.",
    detailedAnswer: [
      "Where the input is digital and pattern-rich (imaging, documentation, voice), AI is mature. Where decisions change clinical responsibility, deployment is slower &mdash; validation, liability and workflow integration matter as much as model accuracy.",
      "FDA SaMD pathways have cleared many narrow products. Reimbursement and EHR integration are operational gates beyond clearance.",
      "Patient-facing chat is real but always with disclaimers. Autonomous diagnostic decisions remain rare and narrow."
    ],
    mentalModel: "Where data is already digital, AI helps; where decisions change responsibility, deployment is slow.",
    commonMisunderstanding: "&lsquo;AI replaces doctors.&rsquo; Mostly it drafts, ranks and triages; clinicians remain accountable.",
    whyItMatters: "Reading medical AI through this lens explains why it deploys unevenly.",
    relatedDomains: ["clinical-medicine", "radiology", "clinical-documentation", "pathology"],
    relatedArchitectures: ["domain-fm", "rag", "unet", "vit"],
    relatedUseCases: ["uc-radiology-report-assist", "uc-clinical-scribe"],
    relatedPapers: ["paper-medpalm2", "paper-unet"],
    sourceIds: ["src-fda-samd"],
    confidence: "context"
  },
  {
    id: "q-medicine-evaluation",
    question: "What makes medical AI evaluation different from normal ML evaluation?",
    audience: "engineer", category: "Bottleneck", difficulty: "Advanced",
    shortAnswer: "Distribution shift is real, ground-truth labels are noisy, the cost of false negatives differs from false positives, and trial design is itself a regulated activity.",
    detailedAnswer: [
      "Hospitals differ in scanner, demographics, prevalence and workflow. A model that is great on one dataset can degrade silently on another. AUROC on a held-out test set is necessary but never sufficient.",
      "Labels themselves are uncertain; expert disagreement is common. Evaluating against an unstable gold standard requires care.",
      "The cost of errors is asymmetric and clinical: missing a stroke is not the same as a false alarm. Trial designs (prospective, multi-site, comparative-effectiveness) are how regulated medical AI is actually evaluated."
    ],
    mentalModel: "Medical evaluation is not a benchmark. It is a clinical trial.",
    commonMisunderstanding: "&lsquo;Beat the AUROC, ship the product.&rsquo; The AUROC is one input to a much larger validation pipeline.",
    whyItMatters: "Evaluation discipline separates clinically useful AI from benchmark-only AI.",
    relatedDomains: ["clinical-medicine", "radiology", "pathology"],
    relatedArchitectures: ["domain-fm", "vit", "unet"],
    relatedUseCases: ["uc-radiology-report-assist"],
    relatedPapers: ["paper-medpalm2"],
    sourceIds: ["src-fda-samd"],
    confidence: "context"
  },
  {
    id: "q-radiology-pipeline",
    question: "What does the radiology AI workflow actually look like?",
    audience: "operator", category: "Workflow", difficulty: "Intermediate",
    shortAnswer: "Image acquisition, ingest into PACS, AI inference for triage / detection / segmentation, radiologist review, structured report. Liability and workflow integration are as important as the model.",
    detailedAnswer: [
      "Most production radiology AI integrates with PACS / RIS at the worklist level. The AI runs inference, prioritises urgent cases, draws attention to specific findings, and feeds optional draft text into report templates.",
      "Radiologists remain accountable. Their willingness to use the system is gated by speed, integration quality and trust earned over time.",
      "Vendors (Aidoc, Viz.ai, Rad AI, Annalise) compete on integration depth and specialty coverage as much as model performance."
    ],
    mentalModel: "Radiology AI is on the worklist, not in the chair.",
    commonMisunderstanding: "&lsquo;Radiology AI replaces radiologists.&rsquo; It changes the worklist; the diagnosis is still the radiologist&rsquo;s.",
    whyItMatters: "Workflow integration is what differentiates real medical AI from benchmark wins.",
    relatedDomains: ["radiology"],
    relatedArchitectures: ["unet", "vit", "cnn", "segmentation-models"],
    relatedUseCases: ["uc-radiology-report-assist"],
    relatedPapers: ["paper-unet", "paper-chexnet"],
    sourceIds: ["src-fda-samd"],
    confidence: "context"
  },
  {
    id: "q-pathology-overview",
    question: "How is AI used in digital pathology?",
    audience: "researcher", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Slide-level foundation models compress whole-slide images into clinically usable signal &mdash; tumour detection, biomarker prediction, retrieval. Lab integration and regulation are the gates.",
    detailedAnswer: [
      "Whole-slide images are huge (gigapixels). Tile-based CNNs were the first wave; multiple-instance learning and now self-supervised foundation models (UNI, Virchow, GigaPath) define current state of the art.",
      "Use cases include tumour grading, biomarker prediction from H&amp;E, slide retrieval and QC.",
      "Production deployment is gated by lab integration and regulation. Clinical adoption is uneven by region and specialty."
    ],
    mentalModel: "Pathology AI is moving from patch classifiers to whole-slide reasoning.",
    commonMisunderstanding: "&lsquo;AI predictions on H&amp;E replace molecular tests.&rsquo; They prioritise testing; molecular confirmation remains standard.",
    whyItMatters: "Pathology is one of the few domains where foundation-model-style AI may genuinely shift workflows.",
    relatedDomains: ["pathology", "drug-discovery"],
    relatedArchitectures: ["vit", "cnn", "domain-fm"],
    relatedUseCases: ["uc-pathology-biomarker"],
    relatedPapers: ["paper-vit"],
    sourceIds: ["src-tcga"],
    confidence: "context"
  },
  {
    id: "q-ophthalmology-overview",
    question: "How is AI used in ophthalmology?",
    audience: "beginner", category: "Domain overview", difficulty: "Beginner",
    shortAnswer: "Most prominently for diabetic retinopathy screening and OCT analysis. The first FDA-authorised autonomous diagnostic AI was in this domain.",
    detailedAnswer: [
      "Eye imaging is high volume, digital, and visually clean. Retinal cameras and OCT scanners produce data well-suited to vision models.",
      "Autonomous diabetic retinopathy screening systems have been FDA-authorised for primary-care settings, where they triage referrals.",
      "Foundation models for retinal images (e.g. RETFound) suggest a future where one model adapts across multiple ophthalmic tasks."
    ],
    mentalModel: "Ophthalmology has been the proving ground for autonomous medical AI in narrow indications.",
    commonMisunderstanding: "&lsquo;Autonomous AI screens replace ophthalmologists everywhere.&rsquo; They are authorised for specific screening indications, not general diagnosis.",
    whyItMatters: "Ophthalmology shows the rest of medicine what autonomous indications can look like.",
    relatedDomains: ["ophthalmology", "clinical-medicine"],
    relatedArchitectures: ["cnn", "vit", "domain-fm"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: ["src-fda-samd"],
    confidence: "context"
  },
  {
    id: "q-clinical-docs-overview",
    question: "How is AI used in clinical documentation?",
    audience: "operator", category: "Workflow", difficulty: "Beginner",
    shortAnswer: "Ambient scribes capture the encounter, transcribe and structure into a draft note that the clinician edits and signs. Time-savings are the most measured AI benefit in healthcare today.",
    detailedAnswer: [
      "Documentation burden has been a primary driver of clinician burnout. Ambient scribes (DAX, Abridge, Augmedix, Suki) reduce typing while keeping clinicians accountable for the chart.",
      "The draft note is structured (HPI, exam, plan), with billing codes and patient instructions where supported. Specialty phrasing is the practical differentiator.",
      "Adoption is wide and growing rapidly across US health systems."
    ],
    mentalModel: "AI scribes are the first AI most clinicians will actually use, because they remove typing without changing accountability.",
    commonMisunderstanding: "&lsquo;A clean transcript is a clean note.&rsquo; The structured-note step (problem, plan, billing) is where most failures happen.",
    whyItMatters: "Documentation is the fastest-deploying clinical AI category and a meaningful test of trust at scale.",
    relatedDomains: ["clinical-documentation", "clinical-medicine"],
    relatedArchitectures: ["asr-tts", "domain-fm", "rag"],
    relatedUseCases: ["uc-clinical-scribe"],
    relatedPapers: [],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-public-health-overview",
    question: "How is AI used in public health?",
    audience: "researcher", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Mostly for syndromic surveillance, multi-source signal fusion and outbreak forecasting. Governance and equity gate operational use as much as model quality.",
    detailedAnswer: [
      "Public health departments fuse signals from health systems, wastewater, social media and geographies to detect outbreaks earlier and target interventions. Some commercial vendors that pioneered this category (e.g. Metabiota) have changed hands or wound down operations; the work has continued inside academic centres and government labs.",
      "AI helps with anomaly detection, signal fusion and forecasting; epidemiologists adjudicate.",
      "Earlier detection only matters if response capacity exists. Governance, data sharing and equity considerations dominate."
    ],
    mentalModel: "Detection without response is just an alarm.",
    commonMisunderstanding: "&lsquo;AI predicts pandemics.&rsquo; It improves signal; it does not foretell rare events.",
    whyItMatters: "Public health AI is structurally important but often misread as a magic-prediction problem.",
    relatedDomains: ["public-health"],
    relatedArchitectures: ["ts-transformer", "anomaly-detection", "graph-threat"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-mental-health-overview",
    question: "How is AI used in mental health and digital therapeutics?",
    audience: "operator", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Mostly for screening, triage, between-session support and lower-acuity coaching. Safety scaffolding and confidentiality are the differentiators.",
    detailedAnswer: [
      "Conversational AI extends access to lower-acuity support and screening. It also raises new safety, privacy and efficacy questions.",
      "Clinically supervised products (Spring Health, Lyra Health) deploy AI as part of broader care; consumer apps (Wysa, Woebot) face stricter scrutiny.",
      "Evaluation against clinical efficacy gold standards is the ongoing work."
    ],
    mentalModel: "Empathic dialogue is not therapy. Conversational fluency does not equal clinical efficacy.",
    commonMisunderstanding: "&lsquo;AI replaces therapists.&rsquo; In current evidence, it expands access &mdash; under clinician oversight.",
    whyItMatters: "Mental-health AI is one of the most consequential consumer-facing categories with the least mature evaluation.",
    relatedDomains: ["mental-health"],
    relatedArchitectures: ["llm", "asr-tts"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },

  /* ── Domain-specific (finance) ── */
  {
    id: "q-banking-overview",
    question: "How is AI used in banking?",
    audience: "investor", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Mostly in risk, compliance and operations &mdash; the unglamorous middle of the bank. The visible chatbots are far less economically significant than the GBDT models running fraud and credit.",
    detailedAnswer: [
      "Banking AI lives inside model-risk-management constraints (e.g. Federal Reserve / OCC SR 11-7 in the US). Models must be auditable, explainable and reproducible.",
      "Workhorses: GBDT for fraud and credit, OCR + document AI for KYC and operations, LLMs for internal copilots, graph models for AML. The classical-ML side is mature; the LLM side is mostly early production.",
      "Customer-facing chat is real but secondary. The economic value is in cost-to-serve and risk."
    ],
    mentalModel: "The boring AI inside banks is doing more economic work than the visible AI.",
    commonMisunderstanding: "&lsquo;Banking AI is chatbots.&rsquo; The chatbots are the smallest piece.",
    whyItMatters: "If you mistake the visible AI for the real AI, you will misread the value chain.",
    relatedDomains: ["banking", "fraud-detection", "risk-management"],
    relatedArchitectures: ["gbdt", "rag", "ocr-docai", "graph-threat"],
    relatedUseCases: ["uc-fraud-realtime"],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-finance-vs-bio",
    question: "Why is AI in finance often less flashy than chatbots but more valuable?",
    audience: "investor", category: "Hype vs real", difficulty: "Intermediate",
    shortAnswer: "Because the unit of value is small and the volume is enormous. A 1bps improvement in execution or a 1% lift in fraud catch rate is enormous in finance &mdash; and invisible to outsiders.",
    detailedAnswer: [
      "Finance moves trillions. Tiny relative improvements compound into large absolute numbers. AI lives inside execution, fraud, risk and underwriting where wins are denominated in basis points.",
      "It is also less visible because it does not look like a chatbot. The customer never sees the model.",
      "This is why AI-in-finance is often more durable than AI-in-marketing: the value is large, narrow, and hard to commoditise."
    ],
    mentalModel: "Visible AI optimises for engagement. Invisible AI optimises for basis points.",
    commonMisunderstanding: "&lsquo;If I cannot see it, it is not there.&rsquo; In finance, the most valuable AI is the most invisible.",
    whyItMatters: "Investors mis-pricing AI value tend to over-weight visible chatbots and under-weight execution AI.",
    relatedDomains: ["banking", "quant-finance", "trading", "fraud-detection"],
    relatedArchitectures: ["gbdt", "rl-execution"],
    relatedUseCases: ["uc-quant-alpha", "uc-fraud-realtime"],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-quant-overview",
    question: "How is AI used in quant finance?",
    audience: "engineer", category: "Domain overview", difficulty: "Advanced",
    shortAnswer: "Alternative-data signal extraction, time-series forecasting, factor modelling, portfolio construction, and reinforcement learning for execution. The hard part is honest evaluation.",
    detailedAnswer: [
      "Quant has used machine learning for decades. The current wave is alternative data (satellite, transactions, web), time-series transformers / foundation forecasters, and RL for execution algorithms.",
      "Most evaluations look great; most fail in production. Data leakage, overfitting and regime shift dominate failure modes.",
      "The infrastructure (data pipelines, backtest realism, transaction cost modelling) often matters more than model quality."
    ],
    mentalModel: "Quant is where the rest of AI looked five years ago, with a much harder evaluation problem.",
    commonMisunderstanding: "&lsquo;A backtest that looks great is great.&rsquo; The default state of a strategy under naive evaluation is overfit.",
    whyItMatters: "Quant is structurally important to the AI economy because of capital intensity, but it is largely opaque.",
    relatedDomains: ["quant-finance", "trading"],
    relatedArchitectures: ["ts-transformer", "gbdt", "rl-execution", "embeddings"],
    relatedUseCases: ["uc-quant-alpha"],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-quant-vs-banking",
    question: "How does quant AI differ from banking AI?",
    audience: "investor", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Quant is alpha-driven and proprietary. Banking is risk-and-compliance-driven and audited. Same data shape, very different incentives.",
    detailedAnswer: [
      "Quant publishes little, optimises for return / risk, and treats overfitting as the enemy. Tooling rewards experimentation under tight evaluation.",
      "Banking publishes for regulators, optimises for compliance and risk-adjusted profitability, and treats unexplainable models as the enemy. Tooling rewards explainability and stability.",
      "The same engineer can work on both, but the constraints define the system."
    ],
    mentalModel: "Quant rewards being right and lucky. Banking rewards being right and explainable.",
    commonMisunderstanding: "&lsquo;Finance AI is one thing.&rsquo; The constraints differ enough that the toolboxes diverge.",
    whyItMatters: "Conflating the two leads founders to apply quant playbooks to banking, where they fail under model-risk-management.",
    relatedDomains: ["banking", "quant-finance"],
    relatedArchitectures: ["gbdt", "ts-transformer"],
    relatedUseCases: ["uc-fraud-realtime", "uc-quant-alpha"],
    relatedPapers: [],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-trading-execution",
    question: "Why does trading AI focus on execution rather than prediction?",
    audience: "engineer", category: "Domain overview", difficulty: "Advanced",
    shortAnswer: "Because alpha is hard, transient and saturating; execution improvements are durable, repeatable and capacity-friendly.",
    detailedAnswer: [
      "True predictive alpha decays as more capital chases it. Execution improvements (smart routing, queue prediction, market impact minimisation) compound across many orders without cannibalising themselves.",
      "RL on order books, queue dynamics and child-order schedules is mature enough to ship.",
      "This is why most public AI-in-finance disclosures from large players talk about execution and operations, not prediction."
    ],
    mentalModel: "Prediction is a leaky bucket; execution is a wider drain.",
    commonMisunderstanding: "&lsquo;Trading AI predicts price.&rsquo; Some does; the consistently profitable kind mostly does not.",
    whyItMatters: "Distinguishing prediction from execution sharpens any read on quant or trading AI claims.",
    relatedDomains: ["trading", "quant-finance"],
    relatedArchitectures: ["rl-execution", "ts-transformer"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-risk-overview",
    question: "How is AI used in risk management?",
    audience: "investor", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "For credit, market, operational and counterparty risk &mdash; with explainability and stress-testing as binding constraints.",
    detailedAnswer: [
      "Risk AI must be auditable, monotonic where required, and stable across regimes. The interpretable-vs-accurate trade-off is real.",
      "GBDT and tightly constrained neural models dominate. Monte Carlo simulation handles tails.",
      "Regulator engagement is part of the build, not a downstream gate."
    ],
    mentalModel: "Risk models are judged by what they catch in tail events, not by what they predict on average.",
    commonMisunderstanding: "&lsquo;Best AUROC wins.&rsquo; Stability under stress and explainability matter as much.",
    whyItMatters: "If risk AI cannot be defended to a regulator, it cannot be deployed.",
    relatedDomains: ["risk-management", "banking", "insurance"],
    relatedArchitectures: ["gbdt"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-fraud-overview",
    question: "How is AI used in fraud detection?",
    audience: "operator", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Real-time GBDT + graph features + online learning over transaction streams, with very tight latency budgets.",
    detailedAnswer: [
      "Fraud is adversarial. Models must update fast, handle drift, and balance false-positive cost with miss cost.",
      "Graph features (entity / device / IP networks) lift detection beyond what flat features can.",
      "Vendor stacks (FeatureSpace, Sift, Forter, Stripe Radar) compete on data network effects and latency."
    ],
    mentalModel: "Fraud is a continuous game; static models lose.",
    commonMisunderstanding: "&lsquo;Fraud detection is a static classification problem.&rsquo; The adversary is learning at the same time you are.",
    whyItMatters: "Fraud is one of the most concrete commercial AI categories with measurable economic value.",
    relatedDomains: ["fraud-detection", "banking", "cybersecurity"],
    relatedArchitectures: ["gbdt", "graph-threat", "anomaly-detection"],
    relatedUseCases: ["uc-fraud-realtime"],
    relatedPapers: [],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-insurance-overview",
    question: "How is AI used in insurance?",
    audience: "investor", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Claims triage, vision-based damage assessment, property risk scoring, fraud detection, and underwriting support &mdash; with state-by-state regulatory friction.",
    detailedAnswer: [
      "Where digital evidence is rich (auto photos, drone imagery, geospatial), AI is biting fast. Where regulation defines pricing fairness, deployment is slower.",
      "Vendors like Tractable, Cape Analytics and Shift Technology occupy specific stages of the claims and underwriting workflow.",
      "Customer-facing copilots are emerging but secondary to operations."
    ],
    mentalModel: "Insurance AI rises with digital evidence and falls under regulatory friction.",
    commonMisunderstanding: "&lsquo;Insurance can pursue free pricing optimisation.&rsquo; Fairness laws and regulator approval define what models are even allowed.",
    whyItMatters: "Insurance is a large, slow, regulated category that AI is reshaping at the seams.",
    relatedDomains: ["insurance", "fraud-detection"],
    relatedArchitectures: ["cnn", "ocr-docai", "gbdt"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-audit-overview",
    question: "How is AI used in accounting and audit?",
    audience: "operator", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Anomaly detection on journals, OCR-driven document processing, RAG over standards and prior-year work, narrative drafting &mdash; with partner accountability unchanged.",
    detailedAnswer: [
      "Big Four firms invest heavily in internal AI: expense and invoice processing, control testing, anomaly detection.",
      "Vendor tools (AppZen, Vic.ai, Trullion) cover specific subprocesses.",
      "Standard-setters are evaluating evidence and traceability requirements; the partner still signs."
    ],
    mentalModel: "Audit is RAG with strong evidence chains and high stakes.",
    commonMisunderstanding: "&lsquo;AI signs the audit.&rsquo; It assists; the partner is accountable.",
    whyItMatters: "Audit is one of the largest knowledge-work markets where AI is changing unit economics.",
    relatedDomains: ["accounting-audit", "banking"],
    relatedArchitectures: ["llm", "rag", "ocr-docai", "anomaly-detection"],
    relatedUseCases: [],
    relatedPapers: ["paper-rag"],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-econ-overview",
    question: "How is AI used in economic forecasting?",
    audience: "investor", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Mostly for nowcasting, alternative-data ingestion and scenario simulation. Long-horizon prediction remains hard because the system is reflexive.",
    detailedAnswer: [
      "Modern macro AI fuses traditional series with alt data (satellite, shipping, energy, web traffic) for higher-frequency nowcasts of GDP, inflation and supply-chain disruption.",
      "Time-series models and LLMs combine to ingest text (central-bank speeches, regulatory filings) and structured data.",
      "Forecasting recessions remains hard. Improving error bars on nowcasts is the practical win."
    ],
    mentalModel: "Macroeconomics is reflexive: forecasts change behaviour. Better signals do not eliminate that.",
    commonMisunderstanding: "&lsquo;AI predicts recessions.&rsquo; It improves nowcasts; reliable recession prediction is unsolved.",
    whyItMatters: "Real-time better data is one of the most concrete AI improvements in finance and policy.",
    relatedDomains: ["economic-forecasting", "quant-finance"],
    relatedArchitectures: ["ts-transformer", "llm"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },

  /* ── Domain-specific (enterprise) ── */
  {
    id: "q-swe-overview",
    question: "How is AI used in software engineering?",
    audience: "engineer", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Completion, generation, review, debugging, agentic task work, and test / doc generation. The frontier is repo-scale agents with sandboxed execution.",
    detailedAnswer: [
      "AI moved from completion (Copilot 2021) to in-IDE chat (Cursor) to coding agents (Devin, Claude Code, Codex Workspace) within a few years.",
      "Reliability at repo scale is the open frontier: agents that read codebases, run tests, and merge PRs without supervision.",
      "Evaluations like SWE-bench measure progress, but real production code is messier than benchmarks."
    ],
    mentalModel: "Software is where AI feels its own product-market fit first.",
    commonMisunderstanding: "&lsquo;SWE-bench scores predict production deployment.&rsquo; They correlate weakly; the tail of real bugs is much messier.",
    whyItMatters: "SWE is one of the cleanest commercial AI markets and a leading indicator of agent reliability everywhere.",
    relatedDomains: ["software-engineering"],
    relatedArchitectures: ["llm", "tool-agents", "rag", "domain-fm"],
    relatedUseCases: ["uc-swe-coding-agent"],
    relatedPapers: ["paper-codex", "paper-swebench"],
    sourceIds: ["src-swe-bench"],
    confidence: "sourced"
  },
  {
    id: "q-swe-evaluation",
    question: "What does SWE-bench miss about real coding?",
    audience: "engineer", category: "Bottleneck", difficulty: "Advanced",
    shortAnswer: "It measures issue resolution on a fixed set of repos. Production engineering involves migrations, security, code review, ambiguous requirements and tribal knowledge that benchmarks cannot capture.",
    detailedAnswer: [
      "SWE-bench is a useful, hard benchmark. It is also a benchmark, with fixed inputs and fixed test suites.",
      "Real engineering work involves negotiating with humans, understanding legacy codebases, designing for non-functional requirements (performance, security, cost), and avoiding regressions.",
      "Scores rise; production reliability lags. Agents that win on SWE-bench still need humans in the loop."
    ],
    mentalModel: "SWE-bench is a math-class quiz; real engineering is a design review with people who own the system.",
    commonMisunderstanding: "&lsquo;Better SWE-bench score = better engineer.&rsquo; It measures one slice; production is the rest.",
    whyItMatters: "Reading SWE-bench correctly is the difference between betting on agents and betting against them.",
    relatedDomains: ["software-engineering"],
    relatedArchitectures: ["tool-agents", "llm"],
    relatedUseCases: ["uc-swe-coding-agent"],
    relatedPapers: ["paper-swebench"],
    sourceIds: ["src-swe-bench"],
    confidence: "context"
  },
  {
    id: "q-swe-vs-domain",
    question: "How does coding AI compare to domain-specific copilots?",
    audience: "founder", category: "Founder opportunities", difficulty: "Advanced",
    shortAnswer: "Coding AI has a fast feedback loop and broad customer base; domain copilots have higher willingness-to-pay but slower feedback. Both are real markets.",
    detailedAnswer: [
      "Software is uniquely AI-friendly: every engineer can evaluate output instantly; every PR is a quasi-test. That keeps the product loop fast.",
      "Domain copilots (legal, medical, sales) have slower evaluation, larger compliance burdens, but higher prices per seat and lower churn once embedded.",
      "Founders should pick the loop they can run."
    ],
    mentalModel: "Software AI rides a fast review loop; domain AI rides a slow trust loop.",
    commonMisunderstanding: "&lsquo;Software is the only AI market that matters.&rsquo; Domain copilots are larger in absolute revenue and more durable.",
    whyItMatters: "Choosing where to play depends on whether you can run a fast or slow product loop.",
    relatedDomains: ["software-engineering", "legal", "clinical-medicine"],
    relatedArchitectures: ["llm", "rag", "tool-agents"],
    relatedUseCases: ["uc-swe-coding-agent", "uc-legal-research"],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-cyber-overview",
    question: "How is AI used in cybersecurity?",
    audience: "engineer", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Endpoint and network anomaly detection, SOC alert triage, malware classification, phishing detection, code analysis, and emerging LLM-based copilots. Adversarial drift is constant.",
    detailedAnswer: [
      "Defensive AI augments analysts; offensive AI lowers the bar to attack. Both sides use ML.",
      "EDR products (CrowdStrike, SentinelOne) ship ML-based detections at scale; LLM copilots are starting to assist triage and investigation.",
      "Prompt injection, data poisoning and adversarial examples are now part of the security model itself."
    ],
    mentalModel: "Both attackers and defenders are now AI-augmented; the equilibrium is moving.",
    commonMisunderstanding: "&lsquo;AI in security is a silver bullet.&rsquo; It changes the work, not the asymmetry.",
    whyItMatters: "Security is one of the most adversarial AI domains and a leading indicator for trust failures across the field.",
    relatedDomains: ["cybersecurity"],
    relatedArchitectures: ["anomaly-detection", "graph-threat", "llm", "code-analysis-ml"],
    relatedUseCases: ["uc-cyber-soc"],
    relatedPapers: [],
    sourceIds: ["src-mitre-attack"],
    confidence: "context"
  },
  {
    id: "q-cyber-llm-attack-surface",
    question: "How does AI itself become an attack surface?",
    audience: "engineer", category: "Risks", difficulty: "Advanced",
    shortAnswer: "Through prompt injection, data poisoning, model extraction and adversarial examples. Where AI agents have tools, the blast radius rises.",
    detailedAnswer: [
      "An LLM that reads any external content can be hijacked by a malicious prompt embedded in that content (indirect prompt injection). Agents with tool access can be manipulated to take harmful actions.",
      "Training-time risks include data poisoning. Model extraction attacks try to reconstruct private weights or training data.",
      "Defences are immature; the right answer involves separation of trusted and untrusted contexts, scoped permissions, and human-in-the-loop for high-impact actions."
    ],
    mentalModel: "Agents with tools are like junior employees with admin access. The smarter and more tooled they are, the more careful you must be.",
    commonMisunderstanding: "&lsquo;Prompt injection is a content-moderation problem.&rsquo; It is a system-design problem; content alone cannot fix it.",
    whyItMatters: "AI security failures will increasingly look like classic security failures with novel exploitation paths.",
    relatedDomains: ["cybersecurity"],
    relatedArchitectures: ["llm", "tool-agents"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: ["src-mitre-attack"],
    confidence: "inferred"
  },
  {
    id: "q-legal-overview",
    question: "How is AI used in law?",
    audience: "operator", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Citation-grounded research, contract review, e-discovery, due diligence, and case summarisation. Hallucination is the single biggest defect.",
    detailedAnswer: [
      "Legal work is text-heavy and evidentiary. RAG-first systems retrieve case law and contracts and ground generation in them.",
      "Vendors (Harvey, Lexis+ AI, Westlaw / Casetext, Hebbia, Robin AI) compete on corpus, accuracy and integration with document management.",
      "Hallucinated citations have been documented in courts; the consequence is malpractice risk."
    ],
    mentalModel: "Legal AI must be RAG-first, citation-grounded, and reviewable.",
    commonMisunderstanding: "&lsquo;Confident output with citations is verified output.&rsquo; Citations can be fabricated; verification is a discipline.",
    whyItMatters: "Legal AI is the cleanest commercial RAG application and a leading test of citation-grounded systems.",
    relatedDomains: ["legal"],
    relatedArchitectures: ["llm", "rag", "embeddings"],
    relatedUseCases: ["uc-legal-research"],
    relatedPapers: ["paper-rag"],
    sourceIds: ["paper-rag"],
    confidence: "sourced"
  },
  {
    id: "q-legal-hallucination",
    question: "Why is hallucination a malpractice risk in legal AI?",
    audience: "operator", category: "Risks", difficulty: "Advanced",
    shortAnswer: "Because lawyers have submitted briefs with fabricated citations from LLMs. Sanctions and reputational harm have followed. The bar for verification is now non-negotiable.",
    detailedAnswer: [
      "Public cases (Mata v. Avianca, others) involved attorneys submitting filings with non-existent cases generated by ChatGPT. Courts sanctioned them.",
      "The lesson is not that LLMs are unfit for law; it is that ungrounded generation is unfit for filings. Citation verification must be a hard, non-bypassable step.",
      "Vendors now market citation-checking and grounded-generation features specifically because of these incidents."
    ],
    mentalModel: "An ungrounded confident answer is worse than no answer at all in law. It is a malpractice generator.",
    commonMisunderstanding: "&lsquo;Adding citations fixes hallucination.&rsquo; Adding fabricated citations does not. The system must verify.",
    whyItMatters: "It defines the engineering bar for legal AI; the same standard is creeping into medical and academic uses.",
    relatedDomains: ["legal", "research-workflows", "clinical-medicine"],
    relatedArchitectures: ["llm", "rag"],
    relatedUseCases: ["uc-legal-research"],
    relatedPapers: ["paper-rag"],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-edu-overview",
    question: "How is AI used in education?",
    audience: "beginner", category: "Domain overview", difficulty: "Beginner",
    shortAnswer: "Tutoring, feedback, lesson generation, language learning and assessment drafting. Learning gains and integrity are the open questions.",
    detailedAnswer: [
      "Subject-specific tutors (Khanmigo, Duolingo Max) ask Socratic questions, give targeted feedback, and adapt to student level.",
      "Teacher tools draft lesson plans and grade open-ended responses.",
      "Engagement is real; long-term learning gains and integrity (cheating) remain the open questions."
    ],
    mentalModel: "Tutoring works; teaching is harder.",
    commonMisunderstanding: "&lsquo;Engagement is learning.&rsquo; AI tutors that feel helpful do not always produce measurable gains.",
    whyItMatters: "Education AI is about pedagogy and integrity, not just better content.",
    relatedDomains: ["education"],
    relatedArchitectures: ["llm", "rag", "domain-fm"],
    relatedUseCases: ["uc-edu-tutor"],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-edu-cheating",
    question: "Why is integrity such a big deal in education AI?",
    audience: "operator", category: "Risks", difficulty: "Intermediate",
    shortAnswer: "Because students can offload work to LLMs faster than teachers can detect it. Detection is unreliable; the response is shifting to assessment design.",
    detailedAnswer: [
      "AI text detectors are unreliable, especially for non-native English writers. False positives have already damaged students.",
      "The realistic response is changing how learning is assessed: oral defences, in-class writing, project-based assessments, AI-assisted but verified work.",
      "Integrity policy is now part of curriculum design, not an afterthought."
    ],
    mentalModel: "If detection is unreliable, change the assignment.",
    commonMisunderstanding: "&lsquo;A good detector solves cheating.&rsquo; Detectors have not been reliable enough to act on alone.",
    whyItMatters: "Education AI&rsquo;s biggest deployment friction is integrity policy, not capability.",
    relatedDomains: ["education"],
    relatedArchitectures: ["llm"],
    relatedUseCases: ["uc-edu-tutor"],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-hr-overview",
    question: "How is AI used in HR and recruiting?",
    audience: "operator", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Sourcing, resume parsing, skills matching, interview scheduling, internal mobility, performance review drafting &mdash; under fair-hiring laws.",
    detailedAnswer: [
      "Vendors (Eightfold, HiredScore, Phenom) build skills graphs and ranking models. Candidate experience and bias controls are central.",
      "Regulators are stepping in (NYC AI hiring law, EU AI Act) with disclosure and audit requirements.",
      "Performance review drafting is a quieter but rapidly growing use case."
    ],
    mentalModel: "Where AI sorts humans, fairness and disclosure are not optional.",
    commonMisunderstanding: "&lsquo;Aggregate accuracy is enough.&rsquo; Disparate impact on protected groups is the binding test.",
    whyItMatters: "HR AI defines how millions of hiring decisions get made; it is one of the most consequential mid-stakes AI categories.",
    relatedDomains: ["hr-recruiting"],
    relatedArchitectures: ["embeddings", "llm", "graph-threat"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-sales-overview",
    question: "How is AI used in sales and marketing?",
    audience: "operator", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Copy and creative generation, segmentation, lead scoring, outbound personalisation, call analytics, forecasting and attribution.",
    detailedAnswer: [
      "Generation is now commodified; differentiation lives in data orchestration and measurement.",
      "Call analytics (Gong) and outbound copilots (Outreach, Salesloft) ship at scale; creative tools (Adobe Firefly, Jasper, Persado) compete on enterprise integration.",
      "Privacy and synthetic-media policies are reshaping what creative is allowed."
    ],
    mentalModel: "Generation is cheap; orchestration and data are the moat.",
    commonMisunderstanding: "&lsquo;More content is better marketing.&rsquo; Volume without orchestration burns brand and audience.",
    whyItMatters: "Sales and marketing are the most-commodified AI category and a useful counter-example to the rest of the atlas.",
    relatedDomains: ["sales-marketing"],
    relatedArchitectures: ["llm", "embeddings", "diffusion"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-support-overview",
    question: "How is AI used in customer support?",
    audience: "operator", category: "Domain overview", difficulty: "Beginner",
    shortAnswer: "L1 deflection, agent assist, ticket routing, summarisation, voice IVR. Each ticket is an evaluable evaluation, which makes the unit economics clean.",
    detailedAnswer: [
      "Vendors (Intercom Fin, Zendesk AI, Decagon, Sierra, Salesforce Service Cloud Einstein) report material deflection rates with grounded retrieval.",
      "Voice channels are catching up to chat as ASR + LLM stacks mature.",
      "The metric that matters is resolution, not zero-handoff."
    ],
    mentalModel: "Support AI works because each ticket is an evaluable evaluation.",
    commonMisunderstanding: "&lsquo;Deflection without escalation is success.&rsquo; Customers hate dead ends; resolution is the right metric.",
    whyItMatters: "Customer support is the cleanest commercial RAG product category.",
    relatedDomains: ["customer-support"],
    relatedArchitectures: ["rag", "llm", "asr-tts"],
    relatedUseCases: ["uc-customer-service-deflection"],
    relatedPapers: ["paper-rag"],
    sourceIds: ["paper-rag"],
    confidence: "sourced"
  },
  {
    id: "q-enterprise-productivity-overview",
    question: "How is AI used in enterprise productivity?",
    audience: "operator", category: "Domain overview", difficulty: "Beginner",
    shortAnswer: "Meeting summarisation, drafting, search across enterprise data, code copilots, and increasingly agentic workflow tools.",
    detailedAnswer: [
      "Microsoft Copilot, Google Workspace AI, Notion AI and Glean dominate by distribution. Vertical copilots build on top.",
      "Permissioning and data hygiene are bigger differentiators than model quality.",
      "The economic value lives in integration depth, not novelty."
    ],
    mentalModel: "Copilots are a habit; their economic value lives in integration, not novelty.",
    commonMisunderstanding: "&lsquo;A great demo will win the market.&rsquo; Distribution and integration win; demos lose.",
    whyItMatters: "Enterprise productivity is the largest user-count AI category and a long-term economic indicator.",
    relatedDomains: ["enterprise-productivity"],
    relatedArchitectures: ["llm", "rag", "embeddings", "tool-agents"],
    relatedUseCases: [],
    relatedPapers: ["paper-rag"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-research-overview",
    question: "How is AI used in research workflows?",
    audience: "researcher", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Literature search, competitive analysis, due diligence, market sizing &mdash; all RAG over corpora with citation. Differentiation lives in corpus and verification.",
    detailedAnswer: [
      "Perplexity, Elicit, Glean, Hebbia and OpenAI Deep Research illustrate the category.",
      "Quality depends on corpus coverage, retrieval quality, and citation verification.",
      "Specialty corpora (medicine, law, materials, finance) unlock the highest-value applications."
    ],
    mentalModel: "Research copilots win on corpus and citation, not on cleverness.",
    commonMisunderstanding: "&lsquo;Confident summaries with citations are verified.&rsquo; Citations can be wrong or mis-attributed.",
    whyItMatters: "Research workflows are the cleanest business case for grounded LLMs and a leading indicator for any knowledge-work AI.",
    relatedDomains: ["research-workflows"],
    relatedArchitectures: ["rag", "llm", "embeddings"],
    relatedUseCases: [],
    relatedPapers: ["paper-rag"],
    sourceIds: ["paper-rag"],
    confidence: "context"
  },

  /* ── Domain-specific (physical world) ── */
  {
    id: "q-robotics-overview",
    question: "How is AI used in robotics?",
    audience: "engineer", category: "Domain overview", difficulty: "Advanced",
    shortAnswer: "Imitation learning, reinforcement learning, diffusion policies and vision-language-action models for manipulation and locomotion. Sim-to-real, data scarcity and safety are the bottlenecks.",
    detailedAnswer: [
      "Modern robotics absorbs many AI ideas: imitation from teleop demos, RL with sim, diffusion as a policy class, VLA stacks that ground language and vision into action.",
      "Cross-embodiment datasets (Open X-Embodiment) and humanoid programs (Figure, 1X, Apptronik, Tesla, Physical Intelligence) are pushing the frontier.",
      "Reliability and safety in unstructured environments remain unsolved at scale."
    ],
    mentalModel: "The world is the loss function.",
    commonMisunderstanding: "&lsquo;Impressive demos mean ready-to-deploy robots.&rsquo; Reliability, not capability, gates the field.",
    whyItMatters: "Robotics is the single hardest domain in applied AI; progress here informs progress everywhere.",
    relatedDomains: ["robotics", "autonomous-vehicles"],
    relatedArchitectures: ["imitation-learning", "diffusion-policy", "vla", "rl-control", "sim-to-real"],
    relatedUseCases: ["uc-robotics-pick"],
    relatedPapers: ["paper-rt2", "paper-diffusion-policy", "paper-open-x"],
    sourceIds: ["paper-rt2"],
    confidence: "sourced"
  },
  {
    id: "q-robotics-sim",
    question: "Why does robotics need simulation?",
    audience: "engineer", category: "Workflow", difficulty: "Advanced",
    shortAnswer: "Because real-robot data is expensive, slow and risky. Simulation provides scale; sim-to-real engineering closes the gap.",
    detailedAnswer: [
      "A frontier robot learning program would never finish if it required real-robot data alone. Simulators provide millions of trajectories cheaply.",
      "The sim-to-real gap is real: physics, perception and actuation differ from reality. Domain randomisation, system identification and sim-to-real fine-tuning narrow the gap.",
      "Most successful programs spend most of their compute in simulation and most of their wisdom in transferring to hardware."
    ],
    mentalModel: "Simulation is the wind tunnel of robotics; reality is the test flight.",
    commonMisunderstanding: "&lsquo;More simulation always helps.&rsquo; The right curriculum and randomisation matter more than raw volume.",
    whyItMatters: "Sim-to-real engineering is the difference between research demos and deployable systems.",
    relatedDomains: ["robotics", "autonomous-vehicles"],
    relatedArchitectures: ["sim-to-real", "rl-control", "world-models"],
    relatedUseCases: ["uc-robotics-pick"],
    relatedPapers: ["paper-rt2"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-robotics-vla",
    question: "What are vision-language-action models, and why do they matter?",
    audience: "researcher", category: "Architecture choice", difficulty: "Advanced",
    shortAnswer: "Foundation models that take images + language and emit robot actions. They let robots inherit web-scale pretraining for embodied tasks.",
    detailedAnswer: [
      "VLA models (RT-2, PaLM-E, &pi;0) extend multimodal LLMs to action spaces. The model sees the scene, reads the instruction, and outputs an action sequence.",
      "Web pretraining gives them world knowledge and language. Robot data fine-tunes them for embodied behaviour.",
      "Open questions: how much robot data is enough, how well VLA generalises across embodiments, and whether they can recover from real-world surprises."
    ],
    mentalModel: "VLA is internet-pretrained common sense plugged into a robot body.",
    commonMisunderstanding: "&lsquo;Internet pretraining solves embodiment.&rsquo; Robot data is still the binding constraint.",
    whyItMatters: "VLA represents the most plausible path to general-purpose robots; if it works, it reshapes physical AI.",
    relatedDomains: ["robotics"],
    relatedArchitectures: ["vla", "multimodal-llm", "imitation-learning"],
    relatedUseCases: ["uc-robotics-pick"],
    relatedPapers: ["paper-rt2", "paper-palme", "paper-saycan"],
    sourceIds: ["paper-rt2"],
    confidence: "sourced"
  },
  {
    id: "q-av-overview",
    question: "How is AI used in autonomous vehicles?",
    audience: "engineer", category: "Domain overview", difficulty: "Advanced",
    shortAnswer: "Perception, prediction, planning and control on top of sensor fusion, with simulation for edge-case mining and fleet-scale data.",
    detailedAnswer: [
      "Perception (BEV transformers, occupancy nets) interprets sensor data; prediction models other agents; planners produce trajectories; controllers execute.",
      "Robotaxis run in narrow operating-design domains (Phoenix, San Francisco). Consumer ADAS is broadly deployed; full autonomy in any condition remains unsolved.",
      "Long-tail safety, regulation and human-driver interaction are the operational gates."
    ],
    mentalModel: "Autonomy is real in narrow domains and slow elsewhere.",
    commonMisunderstanding: "&lsquo;Robotaxis everywhere imminently.&rsquo; They expand domain by domain; the long tail is real.",
    whyItMatters: "AV is the longest-running real-world AI project; lessons there inform robotics broadly.",
    relatedDomains: ["autonomous-vehicles", "robotics"],
    relatedArchitectures: ["vit", "imitation-learning", "world-models", "sim-to-real"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-mfg-overview",
    question: "How is AI used in manufacturing?",
    audience: "operator", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Computer-vision defect detection, predictive maintenance, process optimisation and digital twins. The bottleneck is integration with industrial IT, not model quality.",
    detailedAnswer: [
      "Vendors (Cognex, Landing AI, Instrumental, Drishti) ship vision-based QC at scale.",
      "Predictive maintenance for rotating equipment uses time-series anomaly detection.",
      "MES / SCADA integration and OT security are the hard, unglamorous parts."
    ],
    mentalModel: "The model is easy; the integration is the company.",
    commonMisunderstanding: "&lsquo;Lab benchmarks predict factory deployment.&rsquo; Industrial data is messy; benchmarks rarely survive contact with the line.",
    whyItMatters: "Manufacturing is one of the largest under-digitised AI markets.",
    relatedDomains: ["manufacturing"],
    relatedArchitectures: ["cnn", "vit", "anomaly-detection"],
    relatedUseCases: ["uc-mfg-defect"],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-supply-overview",
    question: "How is AI used in supply chain and logistics?",
    audience: "operator", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Demand forecasting, inventory optimisation, route planning, ETA prediction, supplier risk and warehouse robotics. AI is one component of a larger OR optimisation system.",
    detailedAnswer: [
      "Vendors (Project44, FourKites, Blue Yonder, o9) cover slices of the planning and visibility stack.",
      "Multi-party data sharing across shippers, carriers and 3PLs is the structural challenge.",
      "Disruption signal monitoring (geopolitics, weather, port closures) is a fast-growing AI use case."
    ],
    mentalModel: "Supply-chain AI is mostly OR with ML inputs, not a chatbot for shipments.",
    commonMisunderstanding: "&lsquo;A great forecast solves the problem.&rsquo; The forecast is one input to a much larger optimisation.",
    whyItMatters: "Supply chains move trillions in physical goods; even small AI improvements compound.",
    relatedDomains: ["supply-chain"],
    relatedArchitectures: ["ts-transformer", "gbdt", "graph-threat", "llm"],
    relatedUseCases: ["uc-supply-disruption"],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-energy-overview",
    question: "How is AI used in energy and power grids?",
    audience: "operator", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Renewable forecasting, demand response, battery dispatch, predictive maintenance, grid optimisation, energy trading. Physics and regulation rule the safety envelope.",
    detailedAnswer: [
      "Time-series and weather-conditioned models forecast generation. RL and OR optimise dispatch within hard constraints.",
      "Vendors (Octopus / Kraken, Stem, AutoGrid, Tesla Autobidder) play across DERs and grid-scale assets.",
      "Aging infrastructure and grid-interconnect timelines limit what AI can compress."
    ],
    mentalModel: "Forecast and bid; the grid still has hard constraints.",
    commonMisunderstanding: "&lsquo;AI runs the grid autonomously.&rsquo; The grid is a physics machine with safety rules; AI helps inside operating envelopes.",
    whyItMatters: "Energy AI is structurally important to the AI build-out itself, since AI factories are the new large loads.",
    relatedDomains: ["energy-grid", "climate-weather"],
    relatedArchitectures: ["ts-transformer", "neural-operators", "gbdt", "rl-control"],
    relatedUseCases: ["uc-energy-renew-forecast"],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-weather-overview",
    question: "How is AI used in weather and climate?",
    audience: "researcher", category: "Domain overview", difficulty: "Advanced",
    shortAnswer: "Neural weather forecasting (GraphCast, FourCastNet, Pangu, AIFS) now matches or beats numerical weather prediction at medium range, dramatically faster.",
    detailedAnswer: [
      "Trained on ERA5 reanalysis, neural models produce 5&ndash;10 day forecasts at NWP-competitive skill in seconds, opening new applications.",
      "Operational integration (ECMWF AIFS, NOAA partnerships) is underway; ensemble products and downscaling are active areas.",
      "Climate-scale skill remains an open question; neural climate models are research."
    ],
    mentalModel: "Neural weather is real; neural climate is research.",
    commonMisunderstanding: "&lsquo;AI replaces NWP.&rsquo; It is competitive at medium range; full replacement is not the operational reality yet.",
    whyItMatters: "Weather is the most concrete demonstration that AI can match physics-driven simulation in a high-stakes operational domain.",
    relatedDomains: ["climate-weather", "energy-grid", "agriculture"],
    relatedArchitectures: ["neural-operators", "ts-transformer", "molecular-gnn"],
    relatedUseCases: ["uc-weather-medium-range"],
    relatedPapers: ["paper-graphcast", "paper-fourcastnet", "paper-fno"],
    sourceIds: ["paper-graphcast"],
    confidence: "sourced"
  },
  {
    id: "q-weather-vs-physics",
    question: "Why are neural weather models competitive with NWP?",
    audience: "researcher", category: "Architecture choice", difficulty: "Advanced",
    shortAnswer: "Because the training data (decades of reanalysis) is rich enough, the architectures (graph, Fourier) capture spatiotemporal structure efficiently, and the inductive biases work.",
    detailedAnswer: [
      "Reanalysis datasets like ERA5 give millions of consistent atmospheric snapshots, more than enough to train large surrogate models.",
      "Graph and Fourier architectures handle the global, multi-scale structure of the atmosphere efficiently.",
      "Where physics dominates and data is rich, neural surrogates can compete or beat hand-built simulations on average. Extremes are still hard."
    ],
    mentalModel: "When physics is regular and data is dense, surrogates can win on most variables.",
    commonMisunderstanding: "&lsquo;Beating NWP on average means beating it everywhere.&rsquo; Hurricanes and unprecedented events are still the open question.",
    whyItMatters: "It is a template for any scientific domain with rich simulation data and known physics.",
    relatedDomains: ["climate-weather", "scientific-computing", "physics"],
    relatedArchitectures: ["neural-operators", "molecular-gnn"],
    relatedUseCases: ["uc-weather-medium-range"],
    relatedPapers: ["paper-graphcast", "paper-fourcastnet", "paper-fno"],
    sourceIds: ["paper-fno"],
    confidence: "sourced"
  },
  {
    id: "q-ag-overview",
    question: "How is AI used in agriculture?",
    audience: "operator", category: "Domain overview", difficulty: "Beginner",
    shortAnswer: "Vision-guided spraying, yield prediction, satellite-based monitoring, plant disease detection, irrigation scheduling, livestock monitoring.",
    detailedAnswer: [
      "John Deere See &amp; Spray (Blue River) is the canonical commercial product. Climate Corp (Bayer), Indigo Ag, Plenty all play in the broader space.",
      "Satellite + drone vision feeds models that recommend agronomic actions.",
      "Local heterogeneity (soil, weather, crops) means models need regional adaptation."
    ],
    mentalModel: "Vision and time-series first; biology stays hard.",
    commonMisunderstanding: "&lsquo;A model trained in California works in Iowa.&rsquo; Agricultural AI is local.",
    whyItMatters: "Agriculture is one of the largest labour-and-input-intensive sectors and a structurally important AI application.",
    relatedDomains: ["agriculture", "climate-weather"],
    relatedArchitectures: ["cnn", "vit", "ts-transformer"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-construction-overview",
    question: "How is AI used in construction and real estate?",
    audience: "operator", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Photo / 360 progress tracking, schedule risk forecasting, BIM clash detection, lease abstraction, property valuation.",
    detailedAnswer: [
      "OpenSpace, Buildots and similar players use computer vision against BIM models to track progress automatically.",
      "Document AI handles leases, contracts and submittals.",
      "Capture consistency is the leverage point; without good capture, AI outputs are noisy."
    ],
    mentalModel: "Document the site; the rest follows slowly.",
    commonMisunderstanding: "&lsquo;Construction AI replaces project managers.&rsquo; It informs them; the social and trade dynamics are unchanged.",
    whyItMatters: "Construction is one of the largest under-digitised sectors and a slow-moving AI opportunity.",
    relatedDomains: ["construction"],
    relatedArchitectures: ["cnn", "vit", "ocr-docai", "llm"],
    relatedUseCases: ["uc-construction-progress"],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-mining-overview",
    question: "How is AI used in mining, oil and gas?",
    audience: "operator", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Seismic interpretation, reservoir modelling, predictive maintenance, autonomous haul trucks, exploration support, safety analytics.",
    detailedAnswer: [
      "Operators (BHP, Rio Tinto) run autonomous haul trucks at scale. Service companies (Schlumberger, Halliburton, Baker Hughes) embed ML in subsurface workflows.",
      "Subsurface uncertainty is irreducible; AI tightens estimates rather than eliminating risk.",
      "Safety analytics from cameras and wearables is a fast-growing area."
    ],
    mentalModel: "Quiet AI in heavy capex.",
    commonMisunderstanding: "&lsquo;AI solves exploration.&rsquo; It tightens estimates; the dry-hole risk does not vanish.",
    whyItMatters: "Heavy industry is a quiet but structurally important AI domain often missed by tech narratives.",
    relatedDomains: ["mining-oil-gas"],
    relatedArchitectures: ["cnn", "anomaly-detection", "rl-control"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-telecom-overview",
    question: "How is AI used in telecommunications?",
    audience: "operator", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Network anomaly detection, predictive maintenance, self-organising networks, churn modelling, customer-care copilots, fraud.",
    detailedAnswer: [
      "Most telecom AI runs operations: anomaly detection on telemetry, RL for self-organising networks, churn / retention models.",
      "Generative AI is starting to enter customer-care channels.",
      "Edge inference for the radio access network is a frontier."
    ],
    mentalModel: "AI runs the network before it ever talks to the customer.",
    commonMisunderstanding: "&lsquo;Telecom AI is chatbots.&rsquo; The customer-facing AI is the smallest piece.",
    whyItMatters: "Telecom is the largest single category of operational ML by volume in many regions.",
    relatedDomains: ["telecommunications"],
    relatedArchitectures: ["ts-transformer", "anomaly-detection", "graph-threat", "rl-control", "llm"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },

  /* ── Domain-specific (science) ── */
  {
    id: "q-materials-overview",
    question: "How is AI used in materials science?",
    audience: "researcher", category: "Domain overview", difficulty: "Advanced",
    shortAnswer: "Property prediction, crystal / molecule generation, autonomous lab platforms. The synthesis success rate is the gate.",
    detailedAnswer: [
      "Graph + equivariant networks predict materials properties. Diffusion / generative models propose new structures.",
      "Autonomous lab platforms (and academic centres) close the design-build-test-learn loop.",
      "Synthesisability and characterisation cost dominate."
    ],
    mentalModel: "Materials AI proposes structures; autonomous labs validate them.",
    commonMisunderstanding: "&lsquo;Predicted stable structure = synthesised material.&rsquo; Most candidates are not synthesisable.",
    whyItMatters: "Materials AI is the cleanest sci-AI win after biology, with autonomous labs as the bridge.",
    relatedDomains: ["materials-science", "chemistry"],
    relatedArchitectures: ["molecular-gnn", "diffusion-bio", "equivariant-nn", "bayesian-opt"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: ["src-materials-project"],
    confidence: "context"
  },
  {
    id: "q-chemistry-overview",
    question: "How is AI used in chemistry?",
    audience: "researcher", category: "Domain overview", difficulty: "Advanced",
    shortAnswer: "Reaction prediction, retrosynthesis, catalyst discovery, spectroscopy, process optimisation.",
    detailedAnswer: [
      "Molecular transformers and GNNs predict reactions; retrosynthesis tools (AiZynthFinder, Chemformer) plan routes; lab integration translates plans into experiments.",
      "Industrial scale-up and stereochemistry remain difficult.",
      "Domain overlap with drug discovery and materials is large."
    ],
    mentalModel: "Reactions, retrosynthesis, catalysts &mdash; closer to production than people think.",
    commonMisunderstanding: "&lsquo;AI replaces synthetic chemists.&rsquo; It assists; the chemists pick the right route.",
    whyItMatters: "Chemistry AI is the engine room behind drug discovery and materials advances.",
    relatedDomains: ["chemistry", "drug-discovery", "materials-science"],
    relatedArchitectures: ["molecular-gnn", "diffusion-bio", "bayesian-opt"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-physics-overview",
    question: "How is AI used in physics?",
    audience: "researcher", category: "Domain overview", difficulty: "Advanced",
    shortAnswer: "Surrogate models for simulation, data analysis at experiments (LHC, fusion), anomaly / new-physics search, lattice QCD acceleration.",
    detailedAnswer: [
      "Where simulation is slow (CFD, plasma, lattice), neural surrogates speed up the loop.",
      "Where data is huge (LHC, cosmology), ML helps scan for patterns and anomalies.",
      "Interpretability and trust outside training distributions are the open issues."
    ],
    mentalModel: "AI as a surrogate, not a theory.",
    commonMisunderstanding: "&lsquo;A neural surrogate is a theory.&rsquo; It interpolates within trained regimes; it does not extrapolate to new physics.",
    whyItMatters: "Physics AI is a leading indicator for AI-as-scientific-instrument.",
    relatedDomains: ["physics", "scientific-computing"],
    relatedArchitectures: ["pinn", "neural-operators", "equivariant-nn"],
    relatedUseCases: [],
    relatedPapers: ["paper-fno", "paper-pinn"],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-math-overview",
    question: "How is AI used in mathematics?",
    audience: "researcher", category: "Domain overview", difficulty: "Advanced",
    shortAnswer: "Theorem proving (Lean), conjecture generation, olympiad-style reasoning, computer-algebra augmentation. AlphaProof and AlphaGeometry are recent landmarks.",
    detailedAnswer: [
      "Tree search + neural value/policy guidance powers theorem provers; LLMs handle informal reasoning and tool calls.",
      "Olympiad-class performance is now realistic; research-grade open problems are harder.",
      "Formal verification (Lean, Coq) is the bridge between AI output and mathematical truth."
    ],
    mentalModel: "Math is becoming an AI workload, not just an AI subject.",
    commonMisunderstanding: "&lsquo;Olympiad-solving = AI mathematician.&rsquo; Olympiad math has clean evaluation; research math does not.",
    whyItMatters: "Math AI is one of the cleanest demonstrations of long-horizon reasoning.",
    relatedDomains: ["mathematics"],
    relatedArchitectures: ["llm", "tool-agents", "rl-control"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-scicomp-overview",
    question: "How is AI used in scientific computing?",
    audience: "researcher", category: "Domain overview", difficulty: "Advanced",
    shortAnswer: "Neural operators, PINNs, differentiable simulators and surrogate models for PDEs across engineering and physics.",
    detailedAnswer: [
      "Neural operators (FNO, DeepONet) and PINNs accelerate specific families of PDE problems.",
      "Differentiable simulators support design optimisation.",
      "Engineering certification (DO-178C-class) constrains where surrogates can be deployed unsupervised."
    ],
    mentalModel: "ML is the new compiler for slow PDEs.",
    commonMisunderstanding: "&lsquo;Neural surrogates replace solvers.&rsquo; They approximate; engineering still needs guarantees.",
    whyItMatters: "Scientific computing AI is being reshaped one operator family at a time.",
    relatedDomains: ["scientific-computing", "physics"],
    relatedArchitectures: ["pinn", "neural-operators", "differentiable-sim"],
    relatedUseCases: ["uc-weather-medium-range"],
    relatedPapers: ["paper-fno", "paper-pinn"],
    sourceIds: ["paper-fno"],
    confidence: "sourced"
  },
  {
    id: "q-neural-operators",
    question: "Why are neural operators useful in scientific computing?",
    audience: "engineer", category: "Architecture choice", difficulty: "Expert",
    shortAnswer: "Because they learn maps between function spaces, allowing one model to solve a whole family of PDEs at varying resolutions.",
    detailedAnswer: [
      "Classical solvers re-run for each problem instance. Neural operators learn the operator itself, so one model handles many instances.",
      "FNO uses Fourier transforms for global structure; DeepONet uses branch-trunk decompositions.",
      "They are surrogates, not solvers; they trade strict guarantees for speed."
    ],
    mentalModel: "Neural operators are functions of functions: input a parameter set, output a solution everywhere.",
    commonMisunderstanding: "&lsquo;Neural operators replace numerical methods.&rsquo; They complement them; certification still needs solvers.",
    whyItMatters: "If neural operators productionise, design loops in engineering shrink by orders of magnitude.",
    relatedDomains: ["scientific-computing", "climate-weather", "physics"],
    relatedArchitectures: ["neural-operators", "pinn"],
    relatedUseCases: ["uc-weather-medium-range"],
    relatedPapers: ["paper-fno"],
    sourceIds: ["paper-fno"],
    confidence: "sourced"
  },
  {
    id: "q-aerospace-overview",
    question: "How is AI used in aerospace and space?",
    audience: "engineer", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Geospatial imagery analysis, predictive maintenance for fleets and engines, telemetry anomaly detection, aerodynamic design optimisation, autonomy for narrow tasks.",
    detailedAnswer: [
      "Geospatial foundation models (Prithvi etc.) reshape imagery search and change detection.",
      "Predictive maintenance on jet engines and rotorcraft is mature.",
      "Certification (DO-178C / DO-254) keeps autonomy narrow and supervised."
    ],
    mentalModel: "Mission-critical AI lives under tighter assurance than almost any other domain.",
    commonMisunderstanding: "&lsquo;Aerospace AI is autonomous decision-making.&rsquo; Certification keeps human pilots and controllers in the loop.",
    whyItMatters: "Aerospace AI illustrates how strict certification shapes deployment elsewhere (medicine, AV).",
    relatedDomains: ["aerospace-space", "defence"],
    relatedArchitectures: ["vit", "domain-fm", "anomaly-detection", "pinn"],
    relatedUseCases: ["uc-sat-imagery"],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },

  /* ── Domain-specific (media + government) ── */
  {
    id: "q-media-overview",
    question: "How is AI used in media and entertainment?",
    audience: "operator", category: "Domain overview", difficulty: "Beginner",
    shortAnswer: "VFX and post-production, video and image generation, voice cloning and dubbing, subtitling, content moderation, recsys.",
    detailedAnswer: [
      "Video models (Sora, Veo, Runway, Pika) and audio models (ElevenLabs) enter creative pipelines.",
      "Provenance, rights and moderation remain unresolved at industry scale.",
      "Recommendation systems quietly do most of the economic work."
    ],
    mentalModel: "The tools are real; the formats and rights are unsettled.",
    commonMisunderstanding: "&lsquo;Generative AI replaces studios soon.&rsquo; It changes pipelines; audience appetite for craft does not vanish.",
    whyItMatters: "Media is the most-disrupted creative AI category and a leading indicator for trust and provenance debates.",
    relatedDomains: ["media-entertainment", "music-audio", "consumer-search"],
    relatedArchitectures: ["diffusion", "video-models", "asr-tts", "recsys"],
    relatedUseCases: ["uc-music-stem"],
    relatedPapers: ["paper-ldm"],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-gaming-overview",
    question: "How is AI used in gaming?",
    audience: "engineer", category: "Domain overview", difficulty: "Beginner",
    shortAnswer: "Super-resolution and frame generation (DLSS), NPC behaviour, content moderation, matchmaking, procedural assets.",
    detailedAnswer: [
      "DLSS-class super-resolution is now default in AAA titles. Frame generation extends rates further.",
      "NPC AI (Inworld) and live-ops moderation are growing categories; full procedural games remain elusive.",
      "Latency budgets and platform certification constrain deployments."
    ],
    mentalModel: "AI lifts frame rates today; the question is whether it lifts gameplay tomorrow.",
    commonMisunderstanding: "&lsquo;Better graphics are better games.&rsquo; AI-driven design needs gameplay direction, not just generation.",
    whyItMatters: "Gaming is the most consumer-facing AI category by hours of use and a forward indicator for entertainment AI.",
    relatedDomains: ["gaming", "media-entertainment"],
    relatedArchitectures: ["diffusion", "rl-control", "llm"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-design-overview",
    question: "How is AI used in design and architecture?",
    audience: "operator", category: "Domain overview", difficulty: "Beginner",
    shortAnswer: "Ideation and variant exploration, design-system enforcement, architectural rendering, BIM and CAD copilots.",
    detailedAnswer: [
      "Adobe Firefly, Figma AI, Vizcom, Magnific and Autodesk research illustrate the category.",
      "Manufacturability and code-compliance constraints gate full automation; designers retain taste.",
      "IP and rights on training data remain contested."
    ],
    mentalModel: "Co-pilot for ideation; constraints stay with humans.",
    commonMisunderstanding: "&lsquo;AI replaces designers.&rsquo; It accelerates exploration; taste is human.",
    whyItMatters: "Design AI is the most-commodified creative category and a useful test case for taste vs generation.",
    relatedDomains: ["design-architecture", "media-entertainment"],
    relatedArchitectures: ["diffusion", "vlm", "llm"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-music-overview",
    question: "How is AI used in music and audio?",
    audience: "operator", category: "Domain overview", difficulty: "Beginner",
    shortAnswer: "Music generation (Suno, Udio), stem separation, mastering, voice synthesis and cloning, dubbing. Rights and consent are the open questions.",
    detailedAnswer: [
      "Diffusion-based audio models generate plausible songs; voice cloning is at production quality (ElevenLabs).",
      "Stem separation and mastering are widely deployed in production tools.",
      "Licensing regimes are unsettled; commercial use is risky without rights-clean training."
    ],
    mentalModel: "We can generate music; we cannot yet license it cleanly.",
    commonMisunderstanding: "&lsquo;Generated music is licensed music.&rsquo; Until rights regimes mature, commercial use is risky.",
    whyItMatters: "Music is a leading indicator for rights debates that will reach video, design and writing.",
    relatedDomains: ["music-audio", "media-entertainment"],
    relatedArchitectures: ["diffusion", "asr-tts"],
    relatedUseCases: ["uc-music-stem"],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-consumer-search-overview",
    question: "How is AI used in consumer search and recommendation?",
    audience: "operator", category: "Domain overview", difficulty: "Beginner",
    shortAnswer: "Question-answering search, recommendation feeds, voice and chat assistants, chat-based shopping. Search is being rebuilt on retrieval-augmented LLMs.",
    detailedAnswer: [
      "Perplexity, Google AI Overviews, ChatGPT search and Anthropic web tools illustrate the new shape.",
      "Recommendation systems quietly drive most consumer attention.",
      "Citation, ad economics and platform-publisher dynamics are the unsettled areas."
    ],
    mentalModel: "Search and feeds are being rebuilt on top of LLMs.",
    commonMisunderstanding: "&lsquo;AI search is search with extra steps.&rsquo; The ad and publisher economics are different; that is the disruption.",
    whyItMatters: "Consumer search is the largest distribution layer for everyday AI.",
    relatedDomains: ["consumer-search", "media-entertainment"],
    relatedArchitectures: ["rag", "llm", "embeddings", "recsys"],
    relatedUseCases: [],
    relatedPapers: ["paper-rag"],
    sourceIds: ["paper-rag"],
    confidence: "sourced"
  },
  {
    id: "q-government-overview",
    question: "How is AI used in government services?",
    audience: "operator", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Case management copilots, document processing, tax compliance, citizen-facing chat, fraud / improper-payment detection, translation.",
    detailedAnswer: [
      "Procurement and certification (FedRAMP, IL-class) gate adoption.",
      "Equity, transparency, and freedom-of-information requirements shape design.",
      "Translation and citizen support are among the highest-value categories."
    ],
    mentalModel: "Procurement, accountability and equity gate public-sector AI more than capability.",
    commonMisunderstanding: "&lsquo;Government AI is slow because tech is missing.&rsquo; It is slow because procurement and oversight are slow.",
    whyItMatters: "Government AI shapes how millions of residents experience the state.",
    relatedDomains: ["government-services", "smart-cities"],
    relatedArchitectures: ["llm", "rag", "ocr-docai", "asr-tts", "anomaly-detection"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-defence-overview",
    question: "How is AI used in defence?",
    audience: "investor", category: "Domain overview", difficulty: "Advanced",
    shortAnswer: "Sensor fusion, ISR analysis, logistics, predictive maintenance, cyber operations, training and simulation, decision-support copilots, narrow-system autonomy. Cautious framing required.",
    detailedAnswer: [
      "Public information is partial. Disclosed work focuses on ISR, logistics and decision support.",
      "Vendors include Palantir, Anduril, Helsing, Shield AI, Saronic, plus traditional primes.",
      "Operational details and governance norms differ across nations."
    ],
    mentalModel: "High stakes, partial visibility, cautious wording.",
    commonMisunderstanding: "&lsquo;Fully autonomous lethal AI imminently.&rsquo; Public information does not support that framing.",
    whyItMatters: "Defence AI is one of the most consequential and most contested AI categories.",
    relatedDomains: ["defence", "intelligence-analysis"],
    relatedArchitectures: ["vit", "domain-fm", "rl-control", "llm"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-intelligence-overview",
    question: "How is AI used in intelligence analysis?",
    audience: "researcher", category: "Domain overview", difficulty: "Advanced",
    shortAnswer: "Geospatial analysis, OSINT and SIGINT processing, multilingual translation, link analysis, deepfake / IO detection. Analyst synthesis remains a human bottleneck.",
    detailedAnswer: [
      "Vendors (Palantir, BAE Systems, commercial-imagery providers) and government primes operate at this layer.",
      "Multimodal models accelerate triage; human analysts adjudicate.",
      "Deepfakes and information operations are now standard adversary tactics."
    ],
    mentalModel: "More signals, more noise, more synthesis &mdash; same humans deciding.",
    commonMisunderstanding: "&lsquo;More information equals better decisions.&rsquo; Analysis quality remains a human bottleneck.",
    whyItMatters: "Intelligence is one of the most consequential and least public AI categories.",
    relatedDomains: ["intelligence-analysis", "defence", "consumer-search"],
    relatedArchitectures: ["vit", "multimodal-llm", "graph-threat", "asr-tts"],
    relatedUseCases: ["uc-sat-imagery"],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-smart-cities-overview",
    question: "How is AI used in smart cities and sovereign AI?",
    audience: "investor", category: "Domain overview", difficulty: "Intermediate",
    shortAnswer: "Traffic and energy optimisation, citizen support in many languages, predictive maintenance for civic assets, national LLM programs.",
    detailedAnswer: [
      "Cities and nations are buying AI as infrastructure. Traffic, energy, water and citizen support are the main targets.",
      "Sovereign AI programs (UAE, Saudi Arabia, India, Singapore, France) reshape where capacity lives.",
      "Procurement, governance and interoperability gate progress."
    ],
    mentalModel: "Cities and countries buy AI as infrastructure; sovereignty is the new variable.",
    commonMisunderstanding: "&lsquo;Smart cities are tech projects.&rsquo; They are governance and procurement projects with tech inside.",
    whyItMatters: "Sovereign and civic AI shape geography, demand and policy for the broader AI economy.",
    relatedDomains: ["smart-cities", "government-services"],
    relatedArchitectures: ["llm", "rag", "ts-transformer"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },

  /* ── Builder / founder ── */
  {
    id: "q-startup-opps",
    question: "Where are the best AI startup opportunities outside generic chatbots?",
    audience: "founder", category: "Founder opportunities", difficulty: "Intermediate",
    shortAnswer: "Regulated, data-hard, evaluation-hard or integration-hard verticals where incumbents move slowly: clinical specialties, audit, defence, robotics data infrastructure, materials autonomous labs.",
    detailedAnswer: [
      "Where the cost of admission is high (regulation, data access, evaluation), competition is thin and the moat compounds.",
      "Where the cost is low (generic chatbots, prompt wrappers), competition is brutal and the moat is paper-thin.",
      "The best opportunities pair a high admission cost with a clear early customer."
    ],
    mentalModel: "Choose problems whose cost of admission you can pay.",
    commonMisunderstanding: "&lsquo;Crowded markets validate the opportunity.&rsquo; Often they just validate low-cost-of-entry.",
    whyItMatters: "Founder strategy in AI is mostly about market choice; the wrong market kills the best execution.",
    relatedDomains: ["clinical-medicine", "legal", "defence", "robotics", "materials-science"],
    relatedArchitectures: ["rag", "llm", "domain-fm"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-painful-workflows",
    question: "Which domains have painful workflows but weak AI adoption?",
    audience: "founder", category: "Founder opportunities", difficulty: "Intermediate",
    shortAnswer: "Construction, mining, telecom operations, public-sector case management, specialty pathology, specialty trades, niche legal practices, mid-market manufacturing.",
    detailedAnswer: [
      "These are categories with documented pain (long cycle times, manual work) where AI adoption lags consumer or enterprise software.",
      "The reason is usually distribution, integration with legacy systems, or buyer fragmentation.",
      "Founders who can solve distribution win durable share."
    ],
    mentalModel: "Pain plus weak adoption equals opportunity if you can build the distribution.",
    commonMisunderstanding: "&lsquo;If they have not adopted, they do not want it.&rsquo; Often they want it; the seller has not built the right product."  ,
    whyItMatters: "Most enduring AI companies are built where adoption was previously hard.",
    relatedDomains: ["construction", "mining-oil-gas", "telecommunications", "government-services", "manufacturing"],
    relatedArchitectures: ["llm", "ocr-docai", "rag"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-copilot-vs-automation",
    question: "Which domains need AI copilots versus full automation?",
    audience: "founder", category: "Founder opportunities", difficulty: "Intermediate",
    shortAnswer: "Most regulated and high-stakes domains need copilots first. Low-stakes, repetitive tasks (transcription, basic support, document tagging) can move toward automation faster.",
    detailedAnswer: [
      "The right axis is consequence-of-error. Where errors are costly and accountability is human, copilots win. Where errors are recoverable and feedback is fast, automation can deepen.",
      "Many categories will move from copilot to automation as evaluation and trust mature. Trying to skip the copilot phase is the most common founder failure in regulated domains."
    ],
    mentalModel: "Copilot before autopilot. The order matters.",
    commonMisunderstanding: "&lsquo;Automate everything from day one.&rsquo; Markets and regulators do not allow it; trust is built in stages.",
    whyItMatters: "Choosing the right pose (copilot vs automation) is one of the most consequential founder decisions.",
    relatedDomains: ["clinical-medicine", "legal", "customer-support", "manufacturing"],
    relatedArchitectures: ["llm", "tool-agents"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-incumbents-data",
    question: "Where do incumbents have the strongest data advantage?",
    audience: "investor", category: "Founder opportunities", difficulty: "Intermediate",
    shortAnswer: "Healthcare claims, banking transactions, payments networks, large platforms (search, social), trading venues, telco operations, government records.",
    detailedAnswer: [
      "Where the data network effects are decades old and proprietary, AI startups have to beg or build alternatives.",
      "The ones that work either get exclusive data partnerships, build new sources of data, or focus on workflow rather than raw model quality."
    ],
    mentalModel: "If the data is locked behind a moat, the model is not the moat.",
    commonMisunderstanding: "&lsquo;Better model beats better data.&rsquo; Often the opposite.",
    whyItMatters: "Investors who cannot identify where data dominates pick losing positions.",
    relatedDomains: ["banking", "consumer-search", "clinical-medicine", "telecommunications"],
    relatedArchitectures: ["gbdt", "embeddings"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-features-not-companies",
    question: "Which AI applications will become features rather than companies?",
    audience: "founder", category: "Founder opportunities", difficulty: "Advanced",
    shortAnswer: "Generic productivity copilots, basic chat for SMB, generic prompt wrappers, AI writing tools without distribution, basic image-generation utilities.",
    detailedAnswer: [
      "If the underlying capability is undifferentiated and a dominant platform (Microsoft, Google, Adobe, Salesforce) ships it inside their product, the standalone product loses.",
      "Defensibility lives in proprietary data, deep workflow integration, regulated verticals, or new distribution.",
      "Founders should price in feature-creep risk before building."
    ],
    mentalModel: "If your value is &lsquo;a nicer prompt&rsquo;, you are a feature.",
    commonMisunderstanding: "&lsquo;Better UX wins.&rsquo; Better UX often becomes the platform&rsquo;s next release.",
    whyItMatters: "Identifying feature-creep risk is one of the highest-EV exercises in AI strategy.",
    relatedDomains: ["enterprise-productivity", "sales-marketing", "consumer-search"],
    relatedArchitectures: ["llm", "rag"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-validation-bottleneck",
    question: "Which domains have the biggest validation bottlenecks?",
    audience: "investor", category: "Bottleneck", difficulty: "Intermediate",
    shortAnswer: "Drug discovery, materials science, robotics, medicine, autonomous vehicles. The world (or a regulator) gates deployment.",
    detailedAnswer: [
      "These domains share the property that the cost of being wrong is large and the truth function lives outside the lab.",
      "AI accelerates the funnel; it does not change the gate.",
      "Investments here need a credible plan to traverse the gate, not just a model."
    ],
    mentalModel: "AI proposes; reality decides.",
    commonMisunderstanding: "&lsquo;Better model collapses the validation timeline.&rsquo; It compresses parts; regulators and physics still rule.",
    whyItMatters: "Mis-pricing the validation gate is the most common error in regulated AI investments.",
    relatedDomains: ["drug-discovery", "materials-science", "robotics", "autonomous-vehicles"],
    relatedArchitectures: ["diffusion-bio", "imitation-learning"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-cheap-inference",
    question: "Which domains benefit most from cheaper inference?",
    audience: "investor", category: "Future frontier", difficulty: "Intermediate",
    shortAnswer: "Customer support, education, consumer chat, search, code review &mdash; anywhere usage scales with token volume. Cheaper inference unlocks scale.",
    detailedAnswer: [
      "Where the unit economics are gated by inference cost, halving cost can double useful workload.",
      "Inference economies of scale drive new product categories (always-on assistants, ambient AI, agents that do longer tasks).",
      "The losers are vendors over-charging at the margin without differentiation."
    ],
    mentalModel: "Cheaper inference is cheaper electricity. Total kWh consumption rises faster than per-kWh cost falls.",
    commonMisunderstanding: "&lsquo;Cheaper inference shrinks the AI market.&rsquo; Historically the opposite: it expands the addressable market faster than cost falls.",
    whyItMatters: "Inference economics shape which AI products work; investors and operators should track.",
    relatedDomains: ["customer-support", "education", "consumer-search"],
    relatedArchitectures: ["llm", "rag"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-picks-shovels",
    question: "Where are the picks-and-shovels opportunities in applied AI?",
    audience: "investor", category: "Founder opportunities", difficulty: "Intermediate",
    shortAnswer: "Evaluation infrastructure, data-pipeline tooling, robot-data infrastructure, autonomous-lab platforms, on-prem AI for industrial, provenance and rights tooling.",
    detailedAnswer: [
      "Picks-and-shovels businesses serve everyone in a domain rather than competing in the application layer.",
      "The category is widest in domains where the application layer is fragmented and the infrastructure is immature.",
      "The losers are vendors selling to a market segment that is itself shrinking or commoditising."
    ],
    mentalModel: "Sell to the people building the future, not to the people using it.",
    commonMisunderstanding: "&lsquo;Picks and shovels means generic dev tools.&rsquo; The best plays are domain-specific infrastructure.",
    whyItMatters: "Picks-and-shovels businesses have asymmetric upside in fast-growing domains.",
    relatedDomains: ["robotics", "drug-discovery", "materials-science", "manufacturing"],
    relatedArchitectures: [],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-monetization-fast",
    question: "Which AI domains have the strongest near-term monetisation?",
    audience: "investor", category: "Founder opportunities", difficulty: "Intermediate",
    shortAnswer: "Software engineering, customer support, sales / marketing, clinical documentation, legal research, fraud detection. Fast feedback loops and clear willingness-to-pay.",
    detailedAnswer: [
      "These categories share fast loops, embedded buyers, and direct cost-saving or revenue-generating effects.",
      "Slower-monetising categories (pure science, materials, defence, public sector) take longer to translate capability into recurring revenue.",
      "Choosing where to play depends on which time horizon a founder or investor can run."
    ],
    mentalModel: "Fast loops monetise first; slow loops compound longer.",
    commonMisunderstanding: "&lsquo;Slow-monetising = bad market.&rsquo; Slower markets often have larger long-term defensibility.",
    whyItMatters: "Time horizon is the central variable in AI investment; matching it to the market matters.",
    relatedDomains: ["software-engineering", "customer-support", "sales-marketing", "clinical-documentation", "legal", "fraud-detection"],
    relatedArchitectures: ["llm", "rag", "gbdt"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-research-heavy-slow",
    question: "Which domains are research-heavy but commercially slow?",
    audience: "investor", category: "Founder opportunities", difficulty: "Advanced",
    shortAnswer: "Quantum, materials, scientific computing, parts of drug discovery, parts of physics. Big intellectual progress; slow translation to revenue.",
    detailedAnswer: [
      "These domains have big intellectual upside and real progress, but commercialisation depends on lab work, certification, or institutional adoption.",
      "Pure-play startups need patient capital and credible data / lab partnerships.",
      "The winners often combine research credibility with disciplined commercial focus."
    ],
    mentalModel: "Long-cycle research compounds; impatience kills returns.",
    commonMisunderstanding: "&lsquo;Research progress equals near-term revenue.&rsquo; It rarely does in deep-science AI.",
    whyItMatters: "Mis-pricing time horizon is the main reason deep-science AI investments disappoint investors.",
    relatedDomains: ["materials-science", "drug-discovery", "scientific-computing", "physics"],
    relatedArchitectures: [],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-boring-infra",
    question: "Which domains still need boring infrastructure?",
    audience: "founder", category: "Founder opportunities", difficulty: "Intermediate",
    shortAnswer: "Robotics data, autonomous labs, evaluation harnesses, provenance and rights tooling, model risk management, OT-secure on-prem AI.",
    detailedAnswer: [
      "&lsquo;Boring&rsquo; is a complement; these are infrastructure businesses that compound while the application layer churns.",
      "Few founders want to build them because they are unglamorous; that is the opportunity.",
      "Hardest part is patient distribution to enterprise / regulated buyers."
    ],
    mentalModel: "Boring is durable when it is hard.",
    commonMisunderstanding: "&lsquo;Infrastructure is not where the upside is.&rsquo; Often it is.",
    whyItMatters: "The biggest enduring AI companies are often built on boring infrastructure.",
    relatedDomains: ["robotics", "materials-science", "manufacturing", "banking"],
    relatedArchitectures: [],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-evaluator-moat",
    question: "Where is the evaluator the moat?",
    audience: "founder", category: "Founder opportunities", difficulty: "Advanced",
    shortAnswer: "In domains where evaluating the output is harder than producing it: medicine, drug discovery, robotics, generative media, legal research.",
    detailedAnswer: [
      "When the model can produce many candidate answers cheaply, the bottleneck shifts to picking the right ones.",
      "Strong evaluators turn weak generators into strong systems and vice versa.",
      "Founder leverage lives in evaluation discipline, especially in regulated domains."
    ],
    mentalModel: "When generation is cheap, the evaluator is the moat.",
    commonMisunderstanding: "&lsquo;The model is the product.&rsquo; In domains where evaluation is hard, the evaluator is.",
    whyItMatters: "Evaluation is the most under-invested area of applied AI relative to its leverage.",
    relatedDomains: ["clinical-medicine", "drug-discovery", "robotics", "media-entertainment", "legal"],
    relatedArchitectures: [],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-buyer-clear",
    question: "Who is the actual buyer in each domain?",
    audience: "founder", category: "Founder opportunities", difficulty: "Beginner",
    shortAnswer: "Knowing the buyer separates pitches that close from pitches that drift. CIO, CMO, CMO of a health system, lab director, plant manager &mdash; these are different sales motions.",
    detailedAnswer: [
      "Most AI failures are go-to-market failures. Selling clinical AI to a developer is different from selling it to a CMO; selling to a CTO is different from selling to a plant manager.",
      "The buyer&rsquo;s incentives, budget cycle and risk tolerance shape the product.",
      "Founders who do not name the buyer on day one tend to build for nobody."
    ],
    mentalModel: "Pick the buyer first; the product follows.",
    commonMisunderstanding: "&lsquo;Build it and they will come.&rsquo; They will not. The buyer must know it is for them.",
    whyItMatters: "Picking the wrong buyer in a regulated or operationally complex market wastes years.",
    relatedDomains: [],
    relatedArchitectures: [],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-distribution-bottleneck",
    question: "Where is distribution the bottleneck?",
    audience: "founder", category: "Founder opportunities", difficulty: "Intermediate",
    shortAnswer: "Healthcare, public sector, defence, mid-market manufacturing, specialty trades. Building it is half the work; getting it bought is the rest.",
    detailedAnswer: [
      "These sectors have multi-stakeholder buying, long sales cycles, and channel constraints.",
      "Founders who underestimate distribution build great products that nobody buys.",
      "The strongest plays often pair vertical expertise with channel partnerships from day one."
    ],
    mentalModel: "Software is easy; selling software is the company.",
    commonMisunderstanding: "&lsquo;A great product sells itself.&rsquo; In regulated and operationally complex sectors, it never does.",
    whyItMatters: "Distribution capability determines who wins, not technology alone.",
    relatedDomains: ["clinical-medicine", "government-services", "defence", "manufacturing"],
    relatedArchitectures: [],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-where-incumbents-win",
    question: "Where do incumbents win in applied AI?",
    audience: "investor", category: "Founder opportunities", difficulty: "Advanced",
    shortAnswer: "In categories where data, distribution and trust compound: hyperscaler clouds, EHR vendors, large CRM and ERP, payment networks, enterprise security incumbents.",
    detailedAnswer: [
      "The incumbents have data, customer relationships, and compliance posture. They ship copilots inside their products, often free or bundled.",
      "Startups in these categories must find a structural disadvantage of the incumbent (slowness, fragmentation, poor UX) and exploit it.",
      "Otherwise the incumbent eats them."
    ],
    mentalModel: "Incumbents are slow until you make them angry; then they ship a copilot.",
    commonMisunderstanding: "&lsquo;Incumbents will not adapt.&rsquo; Most do, just later than founders hope.",
    whyItMatters: "Picking the right incumbent battle is a survival skill in AI investing.",
    relatedDomains: ["enterprise-productivity", "consumer-search", "clinical-documentation", "banking"],
    relatedArchitectures: [],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },

  /* ── Engineer / researcher meta ── */
  {
    id: "q-when-rl",
    question: "When is reinforcement learning the right tool?",
    audience: "engineer", category: "Architecture choice", difficulty: "Advanced",
    shortAnswer: "When you have a reliable reward signal and you can afford lots of interaction. Robotics, games, execution, RLHF for alignment.",
    detailedAnswer: [
      "RL excels when you can simulate or sample many interactions cheaply, the reward is well-defined, and the search space is large.",
      "It struggles when feedback is sparse, expensive, or ambiguous, and when the environment is non-stationary.",
      "Many production systems use a small dose of RL on top of a supervised backbone."
    ],
    mentalModel: "RL is for problems you can play; not for problems you must reason about.",
    commonMisunderstanding: "&lsquo;RL is the future of all AI.&rsquo; In production, supervised + RL hybrids dominate.",
    whyItMatters: "Choosing RL where simpler tools work wastes compute and time.",
    relatedDomains: ["robotics", "trading", "gaming"],
    relatedArchitectures: ["rl-control", "rl-execution", "diffusion-policy"],
    relatedUseCases: [],
    relatedPapers: ["paper-dqn", "paper-alphazero", "paper-instructgpt"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-when-diffusion",
    question: "When is diffusion the right tool?",
    audience: "engineer", category: "Architecture choice", difficulty: "Advanced",
    shortAnswer: "When you need to generate high-dimensional, multimodal outputs that respect a learned distribution: images, video, molecules, robot actions.",
    detailedAnswer: [
      "Diffusion is the modern recipe for generating complex structured outputs.",
      "It is overkill for low-dimensional or single-modal outputs where simpler regression or classification suffices.",
      "It pays off when the output space is rich and the conditioning is meaningful."
    ],
    mentalModel: "Diffusion is for sculpting in high dimensions; regression is for predicting numbers.",
    commonMisunderstanding: "&lsquo;Diffusion only generates images.&rsquo; It generates anything with rich, structured outputs.",
    whyItMatters: "Recognising when diffusion fits saves a lot of architecture-shopping.",
    relatedDomains: ["media-entertainment", "drug-discovery", "robotics"],
    relatedArchitectures: ["diffusion", "diffusion-bio", "diffusion-policy"],
    relatedUseCases: [],
    relatedPapers: ["paper-ddpm", "paper-ldm"],
    sourceIds: ["paper-ddpm"],
    confidence: "sourced"
  },
  {
    id: "q-when-equivariant",
    question: "When are equivariant networks worth the engineering cost?",
    audience: "researcher", category: "Architecture choice", difficulty: "Expert",
    shortAnswer: "When the data has known physical symmetries and you cannot afford to throw data at brute-force augmentation. Molecular dynamics, materials, 3D structure.",
    detailedAnswer: [
      "Equivariant networks bake symmetries (rotation, translation, permutation) into the architecture.",
      "On enough data, brute-force augmentation can match them. With limited data, equivariance shines.",
      "Implementation complexity is real; weigh the gain."
    ],
    mentalModel: "Equivariance buys data efficiency in symmetric domains.",
    commonMisunderstanding: "&lsquo;Equivariance is always better in physics.&rsquo; With infinite data, it stops mattering.",
    whyItMatters: "Choosing equivariance correctly is a real lever in scientific AI.",
    relatedDomains: ["protein-design", "materials-science", "physics"],
    relatedArchitectures: ["equivariant-nn", "molecular-gnn"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-when-physics-informed",
    question: "When are physics-informed networks the right choice?",
    audience: "researcher", category: "Architecture choice", difficulty: "Expert",
    shortAnswer: "When the physics is well-known and the data is sparse, especially for inverse problems. Pure forward simulation is usually better with classical solvers.",
    detailedAnswer: [
      "PINNs add physical residuals to the loss. They use known physics as a regulariser when training data is sparse.",
      "On forward problems with abundant data, neural operators or classical solvers usually win.",
      "Inverse problems (parameter estimation, source localisation) are PINN sweet spots."
    ],
    mentalModel: "PINNs are best when physics is your only data.",
    commonMisunderstanding: "&lsquo;PINNs replace solvers.&rsquo; They rarely do; they shine in inverse and data-sparse settings.",
    whyItMatters: "Picking PINNs where neural operators or solvers fit better wastes compute and time.",
    relatedDomains: ["physics", "scientific-computing"],
    relatedArchitectures: ["pinn", "neural-operators"],
    relatedUseCases: [],
    relatedPapers: ["paper-pinn"],
    sourceIds: ["paper-pinn"],
    confidence: "sourced"
  },
  {
    id: "q-when-multimodal",
    question: "When is multimodal AI worth the cost?",
    audience: "engineer", category: "Architecture choice", difficulty: "Advanced",
    shortAnswer: "When the workflow is itself multimodal and bottlenecked by alignment between modalities. Otherwise, single-modal specialists are cheaper and often better.",
    detailedAnswer: [
      "Multimodal pays where decisions span modalities (radiology, document AI, agents). Otherwise, the extra compute is wasted.",
      "Many products that look multimodal are really retrieval + single-modal specialists with a thin orchestration layer."
    ],
    mentalModel: "Multimodal pays where the workflow is multimodal.",
    commonMisunderstanding: "&lsquo;Multimodal is universally better.&rsquo; In narrow tasks, single-modality specialists still win.",
    whyItMatters: "Choosing multimodal when single-modal works wastes resources.",
    relatedDomains: ["clinical-medicine", "robotics", "consumer-search"],
    relatedArchitectures: ["multimodal-llm", "vlm", "vla"],
    relatedUseCases: [],
    relatedPapers: ["paper-clip", "paper-flamingo", "paper-llava"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-eval-domains",
    question: "How does evaluation differ across domains?",
    audience: "engineer", category: "Bottleneck", difficulty: "Advanced",
    shortAnswer: "By how the truth function is defined: a benchmark in code, a clinical trial in medicine, an experiment in chemistry, a market in finance, a regulator in defence.",
    detailedAnswer: [
      "Each domain has a different gold standard, a different cost of error, and a different governance regime.",
      "Generic evaluation harnesses do not transfer; the domain expertise is part of the evaluation.",
      "Most failed AI deployments failed evaluation, not modelling."
    ],
    mentalModel: "Evaluation is the lens; the lens is domain-specific.",
    commonMisunderstanding: "&lsquo;A benchmark equals an evaluation.&rsquo; In regulated domains, it is the start, not the answer.",
    whyItMatters: "Investing in evaluation early is one of the highest-EV moves in applied AI.",
    relatedDomains: ["clinical-medicine", "drug-discovery", "robotics", "software-engineering"],
    relatedArchitectures: [],
    relatedUseCases: [],
    relatedPapers: ["paper-swebench"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-data-quality-vs-model-quality",
    question: "Which domains are bottlenecked by data quality, not model quality?",
    audience: "engineer", category: "Bottleneck", difficulty: "Intermediate",
    shortAnswer: "Manufacturing, public health, healthcare-EHR, supply chain, government services, telecom operations &mdash; data is fragmented, inconsistent, often unlabelled.",
    detailedAnswer: [
      "Cleaner data raises every model&rsquo;s ceiling. In these domains, the gap between SOTA and production is mostly data engineering.",
      "Model improvements help, but they pay less than data hygiene.",
      "Founders who invest in data infrastructure win durable share."
    ],
    mentalModel: "Better data beats better models in messy domains.",
    commonMisunderstanding: "&lsquo;Bigger model fixes data quality.&rsquo; It learns through it; the noise still costs.",
    whyItMatters: "Mis-allocating effort between data and modelling is the most common engineering error in applied AI.",
    relatedDomains: ["manufacturing", "public-health", "supply-chain", "government-services", "telecommunications"],
    relatedArchitectures: [],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-still-unsolved-architecture",
    question: "Which domains still need new model architectures?",
    audience: "researcher", category: "Future frontier", difficulty: "Advanced",
    shortAnswer: "Robotics, materials, climate-scale modelling, math, scientific reasoning, world models. Foundation models alone do not yet solve them.",
    detailedAnswer: [
      "Most domains can absorb existing architectures. A few cannot &mdash; the structure of the problem demands new ideas.",
      "Robotics needs better generalist VLA + world models. Materials and chemistry need stronger 3D generation. Climate-scale modelling needs physics-aware deep nets.",
      "These are the open research frontiers worth following."
    ],
    mentalModel: "Most domains are tooling problems; a few are still architecture problems.",
    commonMisunderstanding: "&lsquo;LLMs solve everything.&rsquo; They do not yet solve embodiment or physical-world generalisation.",
    whyItMatters: "Researchers and labs allocate where new architectures are needed; investors should follow.",
    relatedDomains: ["robotics", "materials-science", "climate-weather", "mathematics"],
    relatedArchitectures: ["vla", "world-models", "neural-operators"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-foundation-models-discovery",
    question: "How do foundation models change scientific discovery?",
    audience: "researcher", category: "Future frontier", difficulty: "Advanced",
    shortAnswer: "They compress prior knowledge into reusable representations, accelerate hypothesis generation, and enable autonomous design-build-test-learn loops.",
    detailedAnswer: [
      "AlphaFold compressed structural biology; protein LMs compressed protein function; weather foundation models compress atmospheric dynamics.",
      "Discovery cycles shrink because more iterations can run in silico.",
      "The hard part is closing the loop with real-world validation; that gates how much the cycle can actually shrink."
    ],
    mentalModel: "Foundation models are scientific microscopes &mdash; they reveal structure that was already there.",
    commonMisunderstanding: "&lsquo;Foundation models replace experiments.&rsquo; They accelerate them; the lab still adjudicates.",
    whyItMatters: "Foundation-model-led discovery is one of the most consequential applications of AI.",
    relatedDomains: ["drug-discovery", "materials-science", "climate-weather", "scientific-computing"],
    relatedArchitectures: ["domain-fm", "diffusion-bio", "neural-operators"],
    relatedUseCases: [],
    relatedPapers: ["paper-alphafold2", "paper-graphcast"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-unsolved-robotics",
    question: "What is still unsolved in AI for robotics?",
    audience: "researcher", category: "Future frontier", difficulty: "Expert",
    shortAnswer: "Long-horizon dexterous manipulation, embodiment generalisation, robust safety, data scarcity, and reliable sim-to-real transfer.",
    detailedAnswer: [
      "Long-horizon tasks compound errors; current policies fail outside narrow distributions.",
      "Cross-embodiment generalisation is improving with Open X-Embodiment but remains limited.",
      "Safety and reliability in unstructured environments are still wide open."
    ],
    mentalModel: "Robotics has many demos; reliable, generalist robots are still ahead.",
    commonMisunderstanding: "&lsquo;Humanoids will be everywhere in two years.&rsquo; The capability is rising; the reliability gap is large.",
    whyItMatters: "Robotics is the long pole of physical AI.",
    relatedDomains: ["robotics"],
    relatedArchitectures: ["vla", "diffusion-policy", "world-models"],
    relatedUseCases: ["uc-robotics-pick"],
    relatedPapers: ["paper-rt2", "paper-open-x"],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-unsolved-drug-discovery",
    question: "What is still unsolved in AI for drug discovery?",
    audience: "researcher", category: "Future frontier", difficulty: "Expert",
    shortAnswer: "Reliable success in clinical translation, modelling complex ADMET properties, working from sparse phenotypic data, and modelling tissue / organism-level effects.",
    detailedAnswer: [
      "Hits are increasingly easy; clinical wins are not. Most failures occur in pre-clinical and clinical phases.",
      "ADMET (absorption, distribution, metabolism, excretion, toxicity) is hard to predict from structure alone.",
      "Tissue-, organ- and organism-level models that integrate AI with experimental biology are research frontier."
    ],
    mentalModel: "AI shrinks the funnel until biology widens it again.",
    commonMisunderstanding: "&lsquo;AI solves drug discovery.&rsquo; It accelerates the early funnel; the clinical gate is unchanged.",
    whyItMatters: "Investors and founders pricing in AI-only timelines underestimate the clinical wall.",
    relatedDomains: ["drug-discovery"],
    relatedArchitectures: ["diffusion-bio", "molecular-gnn"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },

  /* ── Investor lens ── */
  {
    id: "q-near-term-monetization",
    question: "Which AI domains have the strongest near-term commercial pull?",
    audience: "investor", category: "Future frontier", difficulty: "Intermediate",
    shortAnswer: "Software engineering, customer support, sales / marketing, clinical documentation, legal research, fraud, search.",
    detailedAnswer: [
      "These categories have direct cost-out or revenue-up effects, fast feedback loops, and clear buyers.",
      "They are also the most competitive; differentiation lives in data, distribution and integration.",
      "Many slower-monetising domains have larger long-term TAMs but require patience."
    ],
    mentalModel: "Near-term TAM is the visible tip; long-term TAM is mostly underwater.",
    commonMisunderstanding: "&lsquo;Near-term winners win long-term.&rsquo; Often a different cohort wins each.",
    whyItMatters: "Time horizon should drive sector choice in any AI portfolio.",
    relatedDomains: ["software-engineering", "customer-support", "sales-marketing", "clinical-documentation", "legal", "fraud-detection"],
    relatedArchitectures: ["llm", "rag"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-platform-shifts",
    question: "Which platform shifts most reshape applied AI markets?",
    audience: "investor", category: "Future frontier", difficulty: "Advanced",
    shortAnswer: "Cheaper inference, longer context windows, on-device AI, multi-agent reliability, and credible robotics generalisation.",
    detailedAnswer: [
      "Each shift redrew which products are possible. Cheaper inference unlocks scale; longer context unlocks document and code work; on-device unlocks privacy-sensitive use.",
      "Multi-agent reliability and robotics generalisation are still research-stage but would reshape multiple categories.",
      "Investors should track which shifts they are pricing in vs which are still aspirational."
    ],
    mentalModel: "Platform shifts redraw market boundaries; pricing them correctly is most of the work.",
    commonMisunderstanding: "&lsquo;Smarter models are the only platform shift.&rsquo; Inference cost, context length and embodiment shift markets equally.",
    whyItMatters: "Most large mistakes in AI investing are platform-shift mis-readings.",
    relatedDomains: [],
    relatedArchitectures: ["llm", "tool-agents", "vla"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-feature-creep",
    question: "Which AI products will get absorbed into Microsoft / Google / Adobe / Salesforce?",
    audience: "investor", category: "Hype vs real", difficulty: "Advanced",
    shortAnswer: "Generic productivity copilots, AI writing tools, AI image-edit utilities, lightweight CRM AI, undifferentiated knowledge-search.",
    detailedAnswer: [
      "Anywhere the incumbent platform has distribution, data, and a clear motivation to ship the feature, they will.",
      "Survival requires a structural advantage: vertical specialisation, regulated workflow, proprietary data, or distribution outside the incumbent&rsquo;s reach.",
      "Most consumer productivity AI startups face this dynamic."
    ],
    mentalModel: "If the incumbent can ship it as a feature in their next release, your moat is paper.",
    commonMisunderstanding: "&lsquo;Incumbents move slowly.&rsquo; They do, until they ship a copilot.",
    whyItMatters: "Feature-creep risk is the most common kill mode for consumer / SMB AI startups.",
    relatedDomains: ["enterprise-productivity", "sales-marketing", "consumer-search"],
    relatedArchitectures: ["llm", "rag"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-data-moat",
    question: "Where does proprietary data still matter as a moat?",
    audience: "investor", category: "Founder opportunities", difficulty: "Intermediate",
    shortAnswer: "Healthcare claims, banking transactions, robot teleop, scientific lab data, satellite imagery, supply-chain telemetry, telecom logs, niche industrial sensor data.",
    detailedAnswer: [
      "Proprietary data is most defensible when it is hard to replicate, expensive to collect, and improves the product over time.",
      "Where everyone trains on the same scrape, the data is not the moat.",
      "Many data plays are really data-acquisition plays disguised as AI plays."
    ],
    mentalModel: "If the data is locked behind a moat, the model is not the moat.",
    commonMisunderstanding: "&lsquo;Public data is enough.&rsquo; Often it is for a feature; rarely for a company.",
    whyItMatters: "Investors who cannot grade the data story misprice durable moats.",
    relatedDomains: ["clinical-medicine", "banking", "robotics", "aerospace-space"],
    relatedArchitectures: [],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-overpriced-domains",
    question: "Which AI domains look overpriced right now?",
    audience: "contrarian", category: "Hype vs real", difficulty: "Advanced",
    shortAnswer: "Generic enterprise copilots, undifferentiated AI consumer apps, niche LLM wrappers without distribution, hardware-light humanoid claims.",
    detailedAnswer: [
      "Where many competitors race for the same workflow on top of the same models, prices reflect hope.",
      "Where humanoid claims outrun reliability, valuations price in 2030 outcomes today.",
      "Underpriced domains often have hard infrastructure or regulated buyers."
    ],
    mentalModel: "Crowded markets often misprice durability.",
    commonMisunderstanding: "&lsquo;Crowded means valid.&rsquo; Crowded usually means commoditised.",
    whyItMatters: "Misreading hype vs durability is the most common investor failure.",
    relatedDomains: ["enterprise-productivity", "robotics", "consumer-search"],
    relatedArchitectures: [],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-underpriced-domains",
    question: "Which AI domains look underpriced right now?",
    audience: "contrarian", category: "Hype vs real", difficulty: "Advanced",
    shortAnswer: "Boring infrastructure, regulated specialty verticals, evaluation tooling, materials autonomous labs, robot data infrastructure, civic copilots.",
    detailedAnswer: [
      "These categories require patience, distribution skill or regulator engagement.",
      "Most generalist investors avoid them; specialist capital tends to capture upside.",
      "Founders who pair vertical expertise with engineering depth often win durable share."
    ],
    mentalModel: "Boring + hard + durable = under-priced.",
    commonMisunderstanding: "&lsquo;If everyone agrees it is undifferentiated, it is.&rsquo; Sometimes it is just unglamorous.",
    whyItMatters: "Mispricing under-priced categories is the cleanest source of investment alpha.",
    relatedDomains: ["materials-science", "manufacturing", "government-services", "smart-cities"],
    relatedArchitectures: [],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-feature-vs-platform",
    question: "Which AI products are platforms versus features?",
    audience: "investor", category: "Future frontier", difficulty: "Advanced",
    shortAnswer: "Platforms: foundation-model labs, data-and-orchestration substrates, robotics platforms. Features: most chatbots, writing tools, generic productivity AI.",
    detailedAnswer: [
      "Platforms are the substrates other products are built on. Features ride on top of someone else&rsquo;s platform.",
      "The most durable AI businesses become platforms in their domain (Glean for enterprise search, Harvey for legal, Abridge for clinical docs).",
      "Investors mis-grading the distinction overpay for features and underpay for platforms."
    ],
    mentalModel: "Platforms compound; features get bundled.",
    commonMisunderstanding: "&lsquo;A great UI makes you a platform.&rsquo; Distribution and data make you a platform.",
    whyItMatters: "Distinguishing the two is core to any AI portfolio strategy.",
    relatedDomains: ["enterprise-productivity", "legal", "clinical-documentation"],
    relatedArchitectures: [],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-agi-investor-relevance",
    question: "How should investors think about AGI claims when picking applied AI investments?",
    audience: "investor", category: "Hype vs real", difficulty: "Expert",
    shortAnswer: "AGI claims are not actionable as a portfolio strategy. Bet on durable applied-AI mechanics: data, distribution, evaluation, regulation, embedded workflows.",
    detailedAnswer: [
      "Whether AGI arrives in 2027 or 2040 will reshape lots of things, but it changes the answer to almost no near-term portfolio question.",
      "What matters in applied AI is the mechanics that compound: data control, distribution, evaluation discipline, regulator relationships, workflow depth.",
      "AGI is a political and ethical conversation; portfolios are built on mechanics."
    ],
    mentalModel: "Build portfolios on mechanics, not horizons.",
    commonMisunderstanding: "&lsquo;If AGI arrives, all bets change.&rsquo; The mechanics that win in applied AI today win even more in an AGI world.",
    whyItMatters: "Investors who confuse AGI timing with applied-AI portfolio choice mis-allocate.",
    relatedDomains: [],
    relatedArchitectures: [],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-incumbent-vs-startup",
    question: "Where do startups beat incumbents in applied AI?",
    audience: "investor", category: "Founder opportunities", difficulty: "Advanced",
    shortAnswer: "Where the incumbent is structurally slow, the workflow is deep, or the buyer is fragmented. Specialty medical, niche legal, robotics platforms, autonomous labs, civic AI.",
    detailedAnswer: [
      "Startups win on focus and patience: deep workflow knowledge, specialty data, and willingness to grind through certification and integration.",
      "Incumbents win on distribution. Where distribution is fragmented, startups can carve durable share.",
      "The cleanest wins look like vertical-specific platforms."
    ],
    mentalModel: "Focus + patience + fragmented buyers = startup advantage.",
    commonMisunderstanding: "&lsquo;Speed beats incumbents.&rsquo; Focus beats incumbents; speed alone gets out-shipped.",
    whyItMatters: "Investors should grade startup advantage on these axes, not on hype.",
    relatedDomains: ["clinical-medicine", "legal", "robotics", "smart-cities"],
    relatedArchitectures: [],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },

  /* ── Contrarian / risk ── */
  {
    id: "q-mostly-hype",
    question: "Which AI domains are mostly hype right now?",
    audience: "contrarian", category: "Hype vs real", difficulty: "Intermediate",
    shortAnswer: "Generic enterprise chatbots without data, undifferentiated coding assistants, fully autonomous humanoid claims, fully autonomous AI doctors, AGI-product claims.",
    detailedAnswer: [
      "Hype is concentrated where the underlying capability has not closed the gap to the claim.",
      "Most categories have real and overhyped slices; the question is which slice is being marketed.",
      "Reading vendor demos against deployment evidence reveals the gap."
    ],
    mentalModel: "Demos are storytelling; deployments are truth.",
    commonMisunderstanding: "&lsquo;Hype is binary.&rsquo; Most domains have real and hyped slices simultaneously.",
    whyItMatters: "Calibrating hype keeps allocators and operators honest.",
    relatedDomains: ["robotics", "clinical-medicine", "enterprise-productivity"],
    relatedArchitectures: [],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-physical-validation-fail",
    question: "Where does AI fail because physical-world validation is the bottleneck?",
    audience: "contrarian", category: "Risks", difficulty: "Advanced",
    shortAnswer: "Drug discovery, materials, robotics, AV, parts of chemistry. The world (or a regulator) is the loss function.",
    detailedAnswer: [
      "AI proposes; the wet lab, the road, the factory, the cell decide.",
      "Capital invested in pure-software solutions to physical-validation problems tends to disappoint.",
      "Successful programs fund the physical loop alongside the AI."
    ],
    mentalModel: "If the loss function is physical, you must fund the physical experiment.",
    commonMisunderstanding: "&lsquo;Software is enough.&rsquo; In physical-validation domains, it is necessary but never sufficient.",
    whyItMatters: "Mis-pricing the physical loop is the most common cause of AI deep-science failures.",
    relatedDomains: ["drug-discovery", "materials-science", "robotics", "autonomous-vehicles"],
    relatedArchitectures: [],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-private-messy-data-fail",
    question: "Where does AI fail because data is private or messy?",
    audience: "contrarian", category: "Risks", difficulty: "Advanced",
    shortAnswer: "Healthcare workflows behind EHRs, banking AML across institutions, mental health, intelligence sources, telco operations, defence.",
    detailedAnswer: [
      "Where the data exists but cannot leave the silo, model quality stalls and product velocity slows.",
      "Federated learning helps but rarely closes the gap.",
      "The strongest plays partner with one large data owner and exploit that asymmetry."
    ],
    mentalModel: "Locked data is a moat for whoever holds it &mdash; not for whoever needs it.",
    commonMisunderstanding: "&lsquo;Federated learning solves it.&rsquo; It helps in narrow cases; it rarely solves coordination across competitive parties.",
    whyItMatters: "Mis-pricing data access kills startups in regulated and operationally complex sectors.",
    relatedDomains: ["clinical-medicine", "banking", "intelligence-analysis", "telecommunications", "defence"],
    relatedArchitectures: [],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-liability-fail",
    question: "Where does AI fail because liability is too high?",
    audience: "contrarian", category: "Risks", difficulty: "Advanced",
    shortAnswer: "Autonomous lethal force, autonomous medical diagnosis, autonomous legal advice, autonomous AV in dense urban settings, autonomous critical-infrastructure control.",
    detailedAnswer: [
      "Liability defines what users and regulators will tolerate. Autonomous decisions in high-stakes settings are slow because failures are expensive and unforgivable.",
      "Most successful systems in these domains keep humans accountable.",
      "Founders trying to skip the liability conversation lose access to the real buyers."
    ],
    mentalModel: "If a failure ends careers or lives, autonomy waits.",
    commonMisunderstanding: "&lsquo;Better models lower liability.&rsquo; Liability is a legal and ethical question, not a benchmark.",
    whyItMatters: "Liability shapes AI deployment more than capability in high-stakes domains.",
    relatedDomains: ["clinical-medicine", "legal", "autonomous-vehicles", "defence", "energy-grid"],
    relatedArchitectures: [],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-smaller-beats-larger",
    question: "Where do smaller models beat larger ones?",
    audience: "contrarian", category: "Architecture choice", difficulty: "Advanced",
    shortAnswer: "Where latency, cost, privacy or task narrowness matters: edge AI, regulated medical narrow tasks, on-device assistants, embedded robotics, fraud scoring.",
    detailedAnswer: [
      "Larger models look better in demos; smaller models look better in P&amp;Ls.",
      "Distillation, quantisation and task-specific fine-tuning produce models that beat large generalists on specific tasks.",
      "Many production systems are stacks: large model for hard cases, small model for the rest."
    ],
    mentalModel: "Production is a budget, not a benchmark.",
    commonMisunderstanding: "&lsquo;Bigger is always better.&rsquo; Often it is more expensive and slower without quality lift.",
    whyItMatters: "Choosing the right model size is one of the biggest cost levers in applied AI.",
    relatedDomains: ["fraud-detection", "robotics", "telecommunications", "manufacturing"],
    relatedArchitectures: ["gbdt", "domain-fm"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-agents-overkill",
    question: "Where are LLM agents overkill?",
    audience: "contrarian", category: "Architecture choice", difficulty: "Intermediate",
    shortAnswer: "Where a single tool call or a deterministic workflow does the job. Most enterprise tasks today are not multi-step agent tasks; they are RAG with one or two actions.",
    detailedAnswer: [
      "Multi-agent and tool-using stacks add latency, cost and failure modes.",
      "If the workflow is a sequence of well-defined steps, deterministic orchestration usually wins.",
      "Reserve agents for genuinely open-ended problems with feedback loops."
    ],
    mentalModel: "Agents for open-ended; workflows for deterministic.",
    commonMisunderstanding: "&lsquo;Agents are universally better.&rsquo; They are useful where the search space is large; they hurt where it is not.",
    whyItMatters: "Over-using agents wastes compute and reliability.",
    relatedDomains: ["enterprise-productivity", "customer-support", "research-workflows"],
    relatedArchitectures: ["tool-agents", "rag"],
    relatedUseCases: [],
    relatedPapers: ["paper-react"],
    sourceIds: [],
    confidence: "context"
  },
  {
    id: "q-100x-cheaper",
    question: "What happens if inference becomes 100x cheaper?",
    audience: "contrarian", category: "Future frontier", difficulty: "Advanced",
    shortAnswer: "Always-on agents become viable, ambient AI in many products becomes default, and a wave of new categories that were unit-economic infeasible become possible.",
    detailedAnswer: [
      "100x is bigger than any single product transition. It is a category-creation event.",
      "Existing high-margin AI vendors face pricing pressure; high-volume application categories expand massively.",
      "Underlying compute demand can rise (Jevons) even as per-token cost falls."
    ],
    mentalModel: "100x cheaper inference is 100x cheaper electricity for cognition. Demand finds it.",
    commonMisunderstanding: "&lsquo;Cheaper inference shrinks the market.&rsquo; Historically the opposite.",
    whyItMatters: "Inference cost trajectory is one of the most important variables in AI strategy.",
    relatedDomains: [],
    relatedArchitectures: ["llm", "rag", "tool-agents"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-domain-specific-wins",
    question: "What if domain-specific models beat general models?",
    audience: "contrarian", category: "Future frontier", difficulty: "Advanced",
    shortAnswer: "Vertical AI companies become more durable; foundation-model labs lose some pricing power; vertical data and evaluation infrastructure compounds.",
    detailedAnswer: [
      "If specialised models beat generalists in regulated or evaluation-hard domains, the balance of power shifts toward vertical companies with proprietary data.",
      "Foundation labs respond by shipping specialised variants and pricing them aggressively.",
      "The most likely outcome is hybrid: generalists on general tasks, specialists in narrow high-value domains."
    ],
    mentalModel: "Specialists win on depth; generalists win on breadth. The market splits.",
    commonMisunderstanding: "&lsquo;General models always win.&rsquo; Domain-specific evidence is mixed; the answer differs by task.",
    whyItMatters: "Mis-pricing the generalist-specialist balance is one of the largest strategy errors.",
    relatedDomains: ["clinical-medicine", "legal", "drug-discovery", "software-engineering"],
    relatedArchitectures: ["domain-fm", "rag"],
    relatedUseCases: [],
    relatedPapers: ["paper-medpalm2"],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-open-models-win",
    question: "What if open-weight models win the model layer?",
    audience: "contrarian", category: "Future frontier", difficulty: "Advanced",
    shortAnswer: "Standalone-model business models commoditise; value moves to applications, data, distribution and the compute substrate. Inference rises everywhere.",
    detailedAnswer: [
      "Open-weight models (Llama, Mistral, Qwen, DeepSeek) keep narrowing the gap to frontier closed models.",
      "If the gap stays narrow, the value of the model layer falls; the value of layers above and below rises.",
      "Application companies with proprietary data, workflow depth, and distribution benefit; foundation labs adjust."
    ],
    mentalModel: "Open weights commoditise the model; the value moves to data, distribution and substrate.",
    commonMisunderstanding: "&lsquo;Open source destroys frontier labs.&rsquo; It commoditises one layer; labs reposition into other layers.",
    whyItMatters: "Open-weight progress is the single most important variable in model-economics strategy.",
    relatedDomains: [],
    relatedArchitectures: ["llm", "domain-fm"],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  },
  {
    id: "q-evaluation-debt",
    question: "Which domains have the worst evaluation debt?",
    audience: "contrarian", category: "Risks", difficulty: "Advanced",
    shortAnswer: "Robotics, drug discovery, clinical AI, legal AI, education AI, generative media. Evaluation lags capability by orders of magnitude.",
    detailedAnswer: [
      "It is now possible to demo AI behaviour that we cannot reliably evaluate.",
      "Without rigorous evaluation, deployment is bets disguised as products.",
      "Evaluation debt is the single largest under-invested area in applied AI."
    ],
    mentalModel: "If you cannot measure it, you cannot trust it.",
    commonMisunderstanding: "&lsquo;If it works in demos, it works.&rsquo; Demos are the worst evaluation.",
    whyItMatters: "Evaluation debt is a major source of AI safety failures and product regressions.",
    relatedDomains: ["robotics", "drug-discovery", "clinical-medicine", "legal", "education", "media-entertainment"],
    relatedArchitectures: [],
    relatedUseCases: [],
    relatedPapers: [],
    sourceIds: [],
    confidence: "inferred"
  }
];

/* ============================================
   APPLIED AI ATLAS AUDIT SUMMARY
   ============================================ */
/*
   Domains covered:           52
   Categories:                7
   Architectures covered:     ~32 (foundation, vision, biology, finance/time-series, robotics, scientific, enterprise, security)
   Use cases:                 21 representative pipelines
   Workflows:                 13 end-to-end pipelines
   Bottlenecks (taxonomy):    16
   Questions covered:         125 (across beginner, founder, investor, engineer, researcher, contrarian)
   Papers included:           37 (35 sourced, 2 marked needsVerification)
   Datasets cited:            25
   Founder opportunities:     30
   Source library entries:    11 directly-cited; many more inline references
   Audit-log entries:         20

   Confidence breakdown:
     sourced            on landmark papers, public datasets, regulator pages, well-known benchmarks
     inferred           on most market-context claims (vendor mentions, deployment patterns)
     market context     on adoption claims and pricing dynamics
     forward-looking    on roadmaps, sovereign-AI horizons, future scaling claims
     needsVerification  on specific paper attributions where uncertain (FinBERT, CodeBERT, SayCan venue)
                        on vendor-specific mental-health and public-health models
                        on Pathology foundation models (UNI / Virchow / GigaPath authorship and venues)

   Highest-risk sections:
     - Defence and intelligence analysis: deliberately cautious; partial public information.
     - Mental health: clinical efficacy claims softened; vendor specifics flagged.
     - Public health surveillance: model specifics flagged for verification.
     - Pathology foundation models: name references kept; specific authorship not asserted.
     - Specific company adoption claims: framed as &lsquo;market context&rsquo; rather than verified deployments.
     - Forward-looking labels applied to robotics-VLA scaling, sovereign-AI projections,
       SMIC catch-up and quantum advantage timelines.

   Suggested future updates:
     - Verify FinBERT, CodeBERT, SayCan paper details and update confidence labels.
     - Add direct citations for pathology foundation models.
     - Track AlphaFold 3 server-only access status and update if openly released.
     - Refresh defence-AI public information quarterly; many claims age fast.
     - Expand DOMAIN_USE_CASES to cover under-served domains
       (mental-health, telecom, design-architecture).
     - Track open-weight model parity vs frontier closed; update q-open-models-win.
     - Add follow-up questions for autonomous labs, prompt-injection defence, and
       co-packaged optics in healthcare imaging pipelines.
*/




