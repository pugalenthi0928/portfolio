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
   AI_DOMAINS (52)
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
    landmarkPapers: ["src-yolo", "src-detr"],
    commonMisunderstanding: "Detection benchmarks (COCO mAP) are not deployment metrics. Long-tail and edge-case performance is what fails in the field.",
    maturity: "Production",
    sourceIds: ["src-yolo", "src-detr"]
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
    landmarkPapers: ["src-sora-tr", "src-ldm", "src-ddpm"],
    commonMisunderstanding: "Looking real and being physically right are different things. Video models can produce footage that violates basic physics.",
    maturity: "Early production",
    sourceIds: ["src-sora-tr", "src-ldm", "src-ddpm"]
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
    landmarkPapers: ["src-egnn"],
    commonMisunderstanding: "Equivariance is not always necessary. For some tasks, brute-force data augmentation works comparably.",
    maturity: "Production",
    sourceIds: ["src-egnn"]
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
    landmarkPapers: ["src-xgboost", "src-lightgbm"],
    commonMisunderstanding: "GBDT is not legacy. It still wins on tabular at production scale.",
    maturity: "Production",
    sourceIds: ["src-xgboost", "src-lightgbm"]
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
    landmarkPapers: ["src-temporal-fusion", "src-attention-is-all"],
    commonMisunderstanding: "Foundation forecasters do not always beat ARIMA. They are useful where data scale and heterogeneity make classical models hard to maintain.",
    maturity: "Early production",
    sourceIds: ["src-temporal-fusion", "src-attention-is-all"]
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
    landmarkPapers: ["src-isolation-forest"],
    commonMisunderstanding: "Anomalies are not failures. The system has to be calibrated for the cost of investigation.",
    maturity: "Production",
    sourceIds: ["src-isolation-forest"]
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
    landmarkPapers: ["src-deep-rl-execution"],
    commonMisunderstanding: "Execution RL is not predicting price. It is minimising cost given a parent order.",
    maturity: "Production",
    sourceIds: ["src-deep-rl-execution"]
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
    landmarkPapers: ["src-world-models", "src-dreamer-v3"],
    commonMisunderstanding: "A world model is not a simulator. It is a learned approximation; reality always has surprises.",
    maturity: "Research frontier",
    sourceIds: ["src-world-models", "src-dreamer-v3"]
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
    landmarkPapers: ["src-rt-x", "src-pi-zero"],
    commonMisunderstanding: "More simulation does not always close the gap. The right curriculum and randomisation matter more than raw volume.",
    maturity: "Production",
    sourceIds: ["src-rt-x", "src-pi-zero"]
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
    landmarkPapers: ["src-graphcast", "src-fourcastnet"],
    commonMisunderstanding: "Differentiable simulation is not a free optimisation. Discontinuities (contact, friction) make gradients informative only in some regimes.",
    maturity: "Research frontier",
    sourceIds: ["src-graphcast", "src-fourcastnet"]
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
    landmarkPapers: ["src-bayes-opt-snoek"],
    commonMisunderstanding: "Active learning is not a model architecture. It is a strategy for choosing experiments around a model.",
    maturity: "Production",
    sourceIds: ["src-bayes-opt-snoek"]
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
    landmarkPapers: ["src-word2vec", "src-sbert", "src-hnsw", "src-mteb"],
    commonMisunderstanding: "Vector search is not always the right answer. Lexical retrieval (BM25) still wins on many enterprise corpora.",
    maturity: "Production",
    sourceIds: ["src-word2vec", "src-sbert", "src-hnsw", "src-mteb"]
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
    landmarkPapers: ["src-whisper"],
    commonMisunderstanding: "A clean transcript is not a clean note. Domain-specific terminology and structure are still hard.",
    maturity: "Production",
    sourceIds: ["src-whisper"]
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
    landmarkPapers: ["src-donut"],
    commonMisunderstanding: "OCR is solved on print, not on the wild. Real production documents are messier than benchmarks.",
    maturity: "Production",
    sourceIds: ["src-donut"]
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
    landmarkPapers: ["src-wide-deep"],
    commonMisunderstanding: "Recsys optimises a measurable proxy, not user welfare. The choice of proxy is a values decision.",
    maturity: "Production",
    sourceIds: ["src-wide-deep"]
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
    landmarkPapers: ["src-swe-bench", "src-humaneval"],
    commonMisunderstanding: "ML in security is not a replacement for static analysis or fuzzing. It is one tool in the stack.",
    maturity: "Early production",
    sourceIds: ["src-swe-bench", "src-humaneval"]
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
  { id: "paper-attention", title: "Attention Is All You Need", authors: "Vaswani et al.", year: 2017, venue: "NeurIPS", domain: "general", architecture: "transformer", whyItMatters: "Introduced the transformer, the architecture underneath nearly every modern foundation model.", whatItEnabled: "BERT, GPT, the broader LLM era.", limitations: "The original was a translation paper; modern LLM training is far beyond it.", sourceUrl: "https://arxiv.org/abs/1706.03762", confidence: "sourced" , sourceIds: ["src-attention-is-all"] },
  { id: "paper-bert", title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding", authors: "Devlin et al.", year: 2018, venue: "arXiv / NAACL 2019", domain: "general", architecture: "transformer", whyItMatters: "Showed bidirectional pretraining enables strong transfer; the dominant NLP recipe for years.", whatItEnabled: "Practical text classification, NER, search.", limitations: "Encoder-only; not generative.", sourceUrl: "https://arxiv.org/abs/1810.04805", confidence: "sourced" , sourceIds: ["src-bert"] },
  { id: "paper-gpt3", title: "Language Models are Few-Shot Learners", authors: "Brown et al.", year: 2020, venue: "NeurIPS", domain: "general", architecture: "transformer", whyItMatters: "Scaled a decoder-only transformer to 175B parameters and demonstrated emergent in-context learning.", whatItEnabled: "The modern LLM product category.", limitations: "Closed weights; analysis limited.", sourceUrl: "https://arxiv.org/abs/2005.14165", confidence: "sourced" , sourceIds: ["src-gpt3"] },
  { id: "paper-instructgpt", title: "Training language models to follow instructions with human feedback", authors: "Ouyang et al.", year: 2022, venue: "NeurIPS / arXiv", domain: "general", architecture: "RLHF", whyItMatters: "Operationalised RLHF for instruction-following; pivotal for the ChatGPT product.", whatItEnabled: "Aligned chat models across the industry.", limitations: "Reward-model proxies have known failure modes.", sourceUrl: "https://arxiv.org/abs/2203.02155", confidence: "sourced" , sourceIds: ["src-instructgpt"] },
  { id: "paper-rag", title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", authors: "Lewis et al.", year: 2020, venue: "NeurIPS", domain: "general", architecture: "rag", whyItMatters: "Formalised RAG as a way to ground generative models in retrieved documents.", whatItEnabled: "Almost every grounded LLM product.", limitations: "Quality is bounded by retrieval.", sourceUrl: "https://arxiv.org/abs/2005.11401", confidence: "inferred" },
  { id: "paper-react", title: "ReAct: Synergizing Reasoning and Acting in Language Models", authors: "Yao et al.", year: 2023, venue: "ICLR", domain: "general", architecture: "tool-agents", whyItMatters: "Pattern for interleaving reasoning and tool use; foundation for modern agentic systems.", whatItEnabled: "Coding agents, browser agents, research agents.", limitations: "Compounding error in long chains.", sourceUrl: "https://arxiv.org/abs/2210.03629", confidence: "inferred" },
  { id: "paper-toolformer", title: "Toolformer: Language Models Can Teach Themselves to Use Tools", authors: "Schick et al.", year: 2023, venue: "arXiv", domain: "general", architecture: "tool-agents", whyItMatters: "Self-supervised tool-use signal; influential on agent training.", whatItEnabled: "Tool-use as a training-time concept, not just inference-time.", limitations: "Recipe varies across follow-up work.", sourceUrl: "https://arxiv.org/abs/2302.04761", confidence: "inferred" },

  /* ── Vision ── */
  { id: "paper-resnet", title: "Deep Residual Learning for Image Recognition", authors: "He et al.", year: 2016, venue: "CVPR", domain: "vision", architecture: "cnn", whyItMatters: "Introduced residual connections; enabled training of much deeper networks.", whatItEnabled: "The deep CNN era of vision.", limitations: "Has been displaced for many tasks by transformers.", sourceUrl: "https://arxiv.org/abs/1512.03385", confidence: "inferred" },
  { id: "paper-unet", title: "U-Net: Convolutional Networks for Biomedical Image Segmentation", authors: "Ronneberger et al.", year: 2015, venue: "MICCAI", domain: "medical imaging", architecture: "unet", whyItMatters: "Default architecture for medical image segmentation; still the strong baseline.", whatItEnabled: "Most production medical-imaging segmentation pipelines.", limitations: "Simpler than transformer alternatives at large scale.", sourceUrl: "https://arxiv.org/abs/1505.04597", confidence: "inferred" },
  { id: "paper-nnunet", title: "nnU-Net: a self-configuring method for deep learning-based biomedical image segmentation", authors: "Isensee et al.", year: 2021, venue: "Nature Methods", domain: "medical imaging", architecture: "unet", whyItMatters: "Self-configuring U-Net pipeline that consistently wins on medical segmentation challenges.", whatItEnabled: "Strong baseline for any medical segmentation task.", limitations: "Heavy compute; limited customisation by design.", sourceUrl: "https://www.nature.com/articles/s41592-020-01008-z", confidence: "inferred" },
  { id: "paper-vit", title: "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale", authors: "Dosovitskiy et al.", year: 2021, venue: "ICLR", domain: "vision", architecture: "vit", whyItMatters: "Showed transformers can match or beat CNNs at vision when trained at scale.", whatItEnabled: "Most modern multimodal foundation models.", limitations: "Data-hungry on smaller datasets.", sourceUrl: "https://arxiv.org/abs/2010.11929", confidence: "sourced" , sourceIds: ["src-vit"] },
  { id: "paper-clip", title: "Learning Transferable Visual Models From Natural Language Supervision", authors: "Radford et al.", year: 2021, venue: "ICML", domain: "vision-language", architecture: "vlm", whyItMatters: "Aligned image and text via contrastive learning at web scale.", whatItEnabled: "Zero-shot image classification, search, and downstream multimodal models.", limitations: "Inherits web biases; weak on fine-grained tasks.", sourceUrl: "https://arxiv.org/abs/2103.00020", confidence: "sourced" , sourceIds: ["src-clip"] },
  { id: "paper-flamingo", title: "Flamingo: a Visual Language Model for Few-Shot Learning", authors: "Alayrac et al.", year: 2022, venue: "NeurIPS", domain: "vision-language", architecture: "multimodal-llm", whyItMatters: "Strong few-shot multimodal LLM design that influenced subsequent work.", whatItEnabled: "Modern multimodal chat assistants.", limitations: "Closed weights at the time.", sourceUrl: "https://arxiv.org/abs/2204.14198", confidence: "inferred" },
  { id: "paper-llava", title: "Visual Instruction Tuning (LLaVA)", authors: "Liu et al.", year: 2023, venue: "NeurIPS", domain: "vision-language", architecture: "multimodal-llm", whyItMatters: "Open recipe for instruction-tuning multimodal LLMs.", whatItEnabled: "Open multimodal chat models for research.", limitations: "Smaller than closed peers; data quality varies.", sourceUrl: "https://arxiv.org/abs/2304.08485", confidence: "inferred" },
  { id: "paper-sam", title: "Segment Anything", authors: "Kirillov et al.", year: 2023, venue: "ICCV", domain: "vision", architecture: "segmentation-models", whyItMatters: "Promptable segmentation foundation model trained on a billion-mask dataset.", whatItEnabled: "Segmentation as a foundation-model capability across domains.", limitations: "No semantic labels by default; fine-grained / specialty domains often need adaptation.", sourceUrl: "https://arxiv.org/abs/2304.02643", confidence: "sourced" , sourceIds: ["src-sam"] },
  { id: "paper-ddpm", title: "Denoising Diffusion Probabilistic Models", authors: "Ho et al.", year: 2020, venue: "NeurIPS", domain: "generative", architecture: "diffusion", whyItMatters: "Modern diffusion-model recipe; foundation of the image-generation era.", whatItEnabled: "Stable Diffusion, Sora, Diffusion Policy and more.", limitations: "Compute-intensive sampling.", sourceUrl: "https://arxiv.org/abs/2006.11239", confidence: "sourced" , sourceIds: ["src-ddpm"] },
  { id: "paper-ldm", title: "High-Resolution Image Synthesis with Latent Diffusion Models", authors: "Rombach et al.", year: 2022, venue: "CVPR", domain: "generative", architecture: "diffusion", whyItMatters: "Latent diffusion; the recipe behind Stable Diffusion and many derivatives.", whatItEnabled: "Practical large-scale image generation.", limitations: "Latent space limits some fine detail.", sourceUrl: "https://arxiv.org/abs/2112.10752", confidence: "sourced" , sourceIds: ["src-ldm"] },

  /* ── Biology / chemistry ── */
  { id: "paper-alphafold2", title: "Highly accurate protein structure prediction with AlphaFold", authors: "Jumper et al.", year: 2021, venue: "Nature", domain: "drug-discovery", architecture: "equivariant-nn", whyItMatters: "Solved a 50-year challenge in protein structure prediction.", whatItEnabled: "Modern computational biology pipelines and downstream design work.", limitations: "Single-protein static structures; not the full biology.", sourceUrl: "https://www.nature.com/articles/s41586-021-03819-2", confidence: "sourced" , sourceIds: ["src-alphafold2"] },
  { id: "paper-alphafold3", title: "Accurate structure prediction of biomolecular interactions with AlphaFold 3", authors: "Abramson et al.", year: 2024, venue: "Nature", domain: "drug-discovery", architecture: "diffusion-bio", whyItMatters: "Extended AlphaFold to broader biomolecular complexes (DNA, RNA, ligands, antibodies).", whatItEnabled: "Multi-component structure prediction for drug discovery workflows.", limitations: "Initial release was server-only; weights and code subsequently released for non-commercial use (late 2024). Confirm current licence terms before commercial use.", sourceUrl: "https://www.nature.com/articles/s41586-024-07487-w", confidence: "sourced" , sourceIds: ["src-alphafold3"] },
  { id: "paper-esm2", title: "Evolutionary-scale prediction of atomic-level protein structure with a language model", authors: "Lin et al.", year: 2023, venue: "Science", domain: "drug-discovery", architecture: "protein-lm", whyItMatters: "Scaled protein language models; ESM-2 / ESMFold predict structure from sequence.", whatItEnabled: "Wide adoption of protein LMs as priors and embeddings.", limitations: "Coverage and accuracy below AlphaFold 2 on many cases.", sourceUrl: "https://www.science.org/doi/10.1126/science.ade2574", confidence: "inferred" },
  { id: "paper-rosettafold", title: "Accurate prediction of protein structures and interactions using a three-track neural network", authors: "Baek et al.", year: 2021, venue: "Science", domain: "drug-discovery", architecture: "equivariant-nn", whyItMatters: "Independent confirmation of high-accuracy structure prediction; basis for the RoseTTAFold family.", whatItEnabled: "Open-source foundations for computational protein modelling.", limitations: "Slightly behind AlphaFold 2 on benchmarks.", sourceUrl: "https://www.science.org/doi/10.1126/science.abj8754", confidence: "inferred" },
  { id: "paper-rfdiffusion", title: "De novo design of protein structure and function with RFdiffusion", authors: "Watson et al.", year: 2023, venue: "Nature", domain: "protein-design", architecture: "diffusion-bio", whyItMatters: "Diffusion model for protein backbones; generated designs that work in the lab.", whatItEnabled: "Modern de novo protein design pipelines.", limitations: "Designs still need lab validation.", sourceUrl: "https://www.nature.com/articles/s41586-023-06415-8", confidence: "inferred" },
  { id: "paper-proteinmpnn", title: "Robust deep learning&mdash;based protein sequence design using ProteinMPNN", authors: "Dauparas et al.", year: 2022, venue: "Science", domain: "protein-design", architecture: "molecular-gnn", whyItMatters: "Inverse-folding model that designs sequences for given backbones with high success rates.", whatItEnabled: "Routine protein sequence design after backbone generation.", limitations: "Performance varies with target.", sourceUrl: "https://www.science.org/doi/10.1126/science.add2187", confidence: "inferred" },
  { id: "paper-diffdock", title: "DiffDock: Diffusion Steps, Twists, and Turns for Molecular Docking", authors: "Corso et al.", year: 2023, venue: "ICLR", domain: "drug-discovery", architecture: "diffusion-bio", whyItMatters: "Diffusion-based docking that improved over score-based methods.", whatItEnabled: "Generative docking inside virtual screening pipelines.", limitations: "Still benchmark-bound; production gains vary.", sourceUrl: "https://arxiv.org/abs/2210.01776", confidence: "inferred" },
  { id: "paper-gcn", title: "Semi-Supervised Classification with Graph Convolutional Networks", authors: "Kipf and Welling", year: 2017, venue: "ICLR", domain: "general", architecture: "molecular-gnn", whyItMatters: "Foundational GNN paper; basis for chemistry, security and recommendation GNNs.", whatItEnabled: "Wide adoption of GNNs.", limitations: "Many follow-up architectures address scalability.", sourceUrl: "https://arxiv.org/abs/1609.02907", confidence: "inferred" },
  { id: "paper-spliceai", title: "Predicting Splicing from Primary Sequence with Deep Learning", authors: "Jaganathan et al.", year: 2019, venue: "Cell", domain: "genomics", architecture: "cnn", whyItMatters: "Strong CNN model for splice prediction; widely used in clinical interpretation pipelines.", whatItEnabled: "Variant interpretation for splice impact.", limitations: "Cohort distribution effects.", sourceUrl: "https://www.cell.com/cell/fulltext/S0092-8674(18)31629-5", confidence: "inferred" },
  { id: "paper-alphamissense", title: "Accurate proteome-wide missense variant effect prediction with AlphaMissense", authors: "Cheng et al.", year: 2023, venue: "Science", domain: "genomics", architecture: "protein-lm", whyItMatters: "Proteome-scale variant-effect predictions integrated with structure priors.", whatItEnabled: "Variant prioritisation in clinical genomics research.", limitations: "Predictions are not clinical diagnoses.", sourceUrl: "https://www.science.org/doi/10.1126/science.adg7492", confidence: "inferred" },
  { id: "paper-medpalm2", title: "Towards Expert-Level Medical Question Answering with Large Language Models (Med-PaLM 2)", authors: "Singhal et al.", year: 2023, venue: "arXiv preprint", domain: "clinical-medicine", architecture: "domain-fm", whyItMatters: "Reported strong performance on USMLE-style multiple-choice questions, accelerating clinical-LLM research. Singhal et al.&rsquo;s earlier 2023 Nature paper (&lsquo;Large language models encode clinical knowledge&rsquo;) introduced the original Med-PaLM.", whatItEnabled: "Acceleration of clinical LLM research; benchmarks for downstream evaluations.", limitations: "USMLE benchmark performance is not equivalent to clinical safety, real-world workflow integration, or accuracy on novel patient cases.", sourceUrl: "https://arxiv.org/abs/2305.09617", confidence: "inferred" },
  { id: "paper-chexnet", title: "CheXNet: Radiologist-Level Pneumonia Detection on Chest X-Rays with Deep Learning", authors: "Rajpurkar et al.", year: 2017, venue: "arXiv", domain: "radiology", architecture: "cnn", whyItMatters: "Sparked the modern radiology-AI wave; widely cited and replicated.", whatItEnabled: "Many follow-up CXR models and benchmarks.", limitations: "Single-task; benchmark != deployment.", sourceUrl: "https://arxiv.org/abs/1711.05225", confidence: "inferred" },

  /* ── Robotics / RL ── */
  { id: "paper-dqn", title: "Human-level control through deep reinforcement learning", authors: "Mnih et al.", year: 2015, venue: "Nature", domain: "robotics", architecture: "rl-control", whyItMatters: "Deep Q-Networks; the first deep RL system to play Atari games at human level.", whatItEnabled: "The deep RL era.", limitations: "Atari is far from physical control.", sourceUrl: "https://www.nature.com/articles/nature14236", confidence: "inferred" },
  { id: "paper-alphazero", title: "A general reinforcement learning algorithm that masters chess, shogi, and Go through self-play", authors: "Silver et al.", year: 2018, venue: "Science", domain: "general", architecture: "rl-control", whyItMatters: "Tabula-rasa self-play with MCTS + neural networks across multiple board games.", whatItEnabled: "Recipe behind subsequent search-augmented learning systems.", limitations: "Discrete games; perfect simulators.", sourceUrl: "https://www.science.org/doi/10.1126/science.aar6404", confidence: "inferred" },
  { id: "paper-rt1", title: "RT-1: Robotics Transformer for Real-World Control at Scale", authors: "Brohan et al.", year: 2022, venue: "arXiv (RSS 2023)", domain: "robotics", architecture: "imitation-learning", whyItMatters: "Showed that scaling robot data and a transformer policy generalises across many tasks.", whatItEnabled: "Modern robot foundation-model work.", limitations: "Constrained to a single embodiment.", sourceUrl: "https://arxiv.org/abs/2212.06817", confidence: "sourced" , sourceIds: ["src-rt2"] },
  { id: "paper-rt2", title: "RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control", authors: "Brohan et al.", year: 2023, venue: "arXiv", domain: "robotics", architecture: "vla", whyItMatters: "Demonstrated that VLM pretraining transfers to robot action.", whatItEnabled: "VLA as a viable robotics paradigm.", limitations: "Robot data still bottlenecks generalisation.", sourceUrl: "https://arxiv.org/abs/2307.15818", confidence: "sourced" , sourceIds: ["src-rt2"] },
  { id: "paper-diffusion-policy", title: "Diffusion Policy: Visuomotor Policy Learning via Action Diffusion", authors: "Chi et al.", year: 2023, venue: "RSS", domain: "robotics", architecture: "diffusion-policy", whyItMatters: "Diffusion as a policy class for robotics; robust to multimodal demos.", whatItEnabled: "A wave of diffusion-based manipulation work.", limitations: "Inference latency.", sourceUrl: "https://arxiv.org/abs/2303.04137", confidence: "sourced" , sourceIds: ["src-diffusion-policy"] },
  { id: "paper-palme", title: "PaLM-E: An Embodied Multimodal Language Model", authors: "Driess et al.", year: 2023, venue: "arXiv", domain: "robotics", architecture: "vla", whyItMatters: "Combined vision, language and embodied tasks in a single model.", whatItEnabled: "Pattern for grounding LLMs in robot sensors.", limitations: "Closed weights.", sourceUrl: "https://arxiv.org/abs/2303.03378", confidence: "inferred" },
  { id: "paper-open-x", title: "Open X-Embodiment: Robotic Learning Datasets and RT-X Models", authors: "Open X-Embodiment Collaboration", year: 2023, venue: "arXiv", domain: "robotics", architecture: "imitation-learning", whyItMatters: "Cross-institution robotics dataset and benchmark; enables cross-embodiment learning.", whatItEnabled: "Generalist robot policies trained across many platforms.", limitations: "Coverage of embodiments and tasks is uneven.", sourceUrl: "https://arxiv.org/abs/2310.08864", confidence: "sourced" , sourceIds: ["src-rt-x"] },

  /* ── Scientific AI ── */
  { id: "paper-fno", title: "Fourier Neural Operator for Parametric Partial Differential Equations", authors: "Li et al.", year: 2021, venue: "ICLR", domain: "scientific-computing", architecture: "neural-operators", whyItMatters: "Practical neural operator for PDE families; used widely in scientific surrogates.", whatItEnabled: "Fast PDE surrogates in weather, fluids, materials.", limitations: "Distribution shift outside training regimes.", sourceUrl: "https://arxiv.org/abs/2010.08895", confidence: "sourced" , sourceIds: ["src-fourcastnet"] },
  { id: "paper-pinn", title: "Physics-informed neural networks: A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations", authors: "Raissi et al.", year: 2019, venue: "Journal of Computational Physics", domain: "scientific-computing", architecture: "pinn", whyItMatters: "Standard reference for PINNs.", whatItEnabled: "Wide adoption of physics-informed losses.", limitations: "Training stability and scaling are open.", sourceUrl: "https://www.sciencedirect.com/science/article/pii/S0021999118307125", confidence: "inferred" },
  { id: "paper-graphcast", title: "Learning skillful medium-range global weather forecasting (GraphCast)", authors: "Lam et al.", year: 2023, venue: "Science", domain: "climate-weather", architecture: "neural-operators", whyItMatters: "Neural model that beats top NWP models on most variables out to 10 days.", whatItEnabled: "Operational interest in neural weather forecasting.", limitations: "Evaluation on extremes still a frontier.", sourceUrl: "https://www.science.org/doi/10.1126/science.adi2336", confidence: "sourced" , sourceIds: ["src-graphcast"] },
  { id: "paper-fourcastnet", title: "FourCastNet: A Global Data-driven High-resolution Weather Model using Adaptive Fourier Neural Operators", authors: "Pathak et al.", year: 2022, venue: "arXiv", domain: "climate-weather", architecture: "neural-operators", whyItMatters: "Demonstrated neural weather forecasting at high resolution and orders-of-magnitude faster than NWP.", whatItEnabled: "Subsequent weather foundation models.", limitations: "Skill on specific extreme events still under study.", sourceUrl: "https://arxiv.org/abs/2202.11214", confidence: "inferred" },

  /* ── Code / SWE / general ── */
  { id: "paper-codex", title: "Evaluating Large Language Models Trained on Code", authors: "Chen et al.", year: 2021, venue: "arXiv", domain: "software-engineering", architecture: "domain-fm", whyItMatters: "Introduced HumanEval; evaluated Codex; framed code LLMs as a category.", whatItEnabled: "Coding copilots and code-focused models.", limitations: "Function-level benchmarks; not repo-scale.", sourceUrl: "https://arxiv.org/abs/2107.03374", confidence: "sourced" , sourceIds: ["src-humaneval"] },
  { id: "paper-swebench", title: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?", authors: "Jimenez et al.", year: 2024, venue: "ICLR", domain: "software-engineering", architecture: "tool-agents", whyItMatters: "Benchmark for repo-scale issue resolution; widely used to evaluate coding agents.", whatItEnabled: "Common evaluation surface for the modern coding-agent generation.", limitations: "Subject to gaming; mixed real-world correlation.", sourceUrl: "https://arxiv.org/abs/2310.06770", confidence: "sourced" , sourceIds: ["src-swe-bench"] },

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
  /* --- Datasets --- */
  { id: "src-pdb", title: "RCSB Protein Data Bank", publisher: "RCSB", year: 2025, url: "https://www.rcsb.org/", type: "dataset", supports: ["drug-discovery", "protein-design"], confidence: "inferred" },
  { id: "src-uniprot", title: "UniProt Knowledgebase", publisher: "UniProt Consortium", year: 2025, url: "https://www.uniprot.org/", type: "dataset", supports: ["drug-discovery", "protein-design", "genomics"], confidence: "inferred" },
  { id: "src-uk-biobank", title: "UK Biobank", publisher: "UK Biobank", year: 2025, url: "https://www.ukbiobank.ac.uk/", type: "dataset", supports: ["genomics", "clinical-medicine", "ophthalmology"], confidence: "inferred" },
  { id: "src-gnomad", title: "gnomAD", publisher: "Broad Institute", year: 2025, url: "https://gnomad.broadinstitute.org/", type: "dataset", supports: ["genomics"], confidence: "sourced" },
  { id: "src-clinvar", title: "ClinVar variant interpretation database", publisher: "NCBI / NIH", year: 2025, url: "https://www.ncbi.nlm.nih.gov/clinvar/", type: "dataset", supports: ["genomics", "clinical-medicine"], confidence: "sourced" },
  { id: "src-tcga", title: "The Cancer Genome Atlas", publisher: "NCI", year: 2025, url: "https://www.cancer.gov/ccg/research/genome-sequencing/tcga", type: "dataset", supports: ["pathology", "drug-discovery"], confidence: "sourced" },
  { id: "src-mimic", title: "MIMIC-III / MIMIC-IV critical-care database", publisher: "PhysioNet (MIT Lab for Computational Physiology)", year: 2025, url: "https://physionet.org/content/mimiciv/", type: "dataset", supports: ["clinical-medicine"], confidence: "sourced" },
  { id: "src-imagenet", title: "ImageNet large-scale visual recognition dataset", publisher: "Stanford / Princeton", year: 2009, url: "https://www.image-net.org/", type: "dataset", supports: ["robotics", "autonomous-vehicles", "media-entertainment"], confidence: "sourced" },
  { id: "src-era5", title: "ERA5 reanalysis", publisher: "ECMWF / Copernicus", year: 2024, url: "https://cds.climate.copernicus.eu/datasets/reanalysis-era5-single-levels", type: "dataset", supports: ["climate-weather"], confidence: "sourced" },
  { id: "src-weatherbench-2", title: "WeatherBench 2", publisher: "Google Research / ECMWF", year: 2024, url: "https://sites.research.google/weatherbench/", type: "benchmark", supports: ["climate-weather"], confidence: "sourced" },
  { id: "src-materials-project", title: "Materials Project", publisher: "Lawrence Berkeley National Lab", year: 2025, url: "https://materialsproject.org/", type: "dataset", supports: ["materials-science"], confidence: "sourced" },
  { id: "src-oqmd", title: "Open Quantum Materials Database", publisher: "Northwestern", year: 2024, url: "https://oqmd.org/", type: "dataset", supports: ["materials-science"], confidence: "sourced" },
  { id: "src-ieee-cis-fraud", title: "IEEE-CIS Fraud Detection competition dataset", publisher: "IEEE / Vesta / Kaggle", year: 2019, url: "https://www.kaggle.com/competitions/ieee-fraud-detection", type: "dataset", supports: ["fraud-detection"], confidence: "sourced" },
  { id: "src-finbench", title: "FinBench (financial NLP benchmark suite)", publisher: "Various", year: 2024, url: "https://arxiv.org/abs/2406.14497", type: "benchmark", supports: ["banking", "quant-finance"], confidence: "needsVerification" },

  /* --- Foundational + frontier ML papers --- */
  { id: "src-attention-is-all", title: "Attention Is All You Need (Transformer)", publisher: "Vaswani et al., NeurIPS", year: 2017, url: "https://arxiv.org/abs/1706.03762", type: "paper", supports: ["software-engineering", "robotics", "clinical-medicine", "legal", "media-entertainment"], confidence: "sourced" },
  { id: "src-bert", title: "BERT: Pre-training of Deep Bidirectional Transformers", publisher: "Devlin et al., NAACL", year: 2019, url: "https://arxiv.org/abs/1810.04805", type: "paper", supports: ["legal", "enterprise-productivity"], confidence: "sourced" },
  { id: "src-gpt3", title: "Language Models are Few-Shot Learners (GPT-3)", publisher: "Brown et al., NeurIPS", year: 2020, url: "https://arxiv.org/abs/2005.14165", type: "paper", supports: ["enterprise-productivity", "consumer-search", "education"], confidence: "sourced" },
  { id: "src-instructgpt", title: "Training language models to follow instructions with human feedback (InstructGPT / RLHF)", publisher: "Ouyang et al., NeurIPS", year: 2022, url: "https://arxiv.org/abs/2203.02155", type: "paper", supports: ["enterprise-productivity", "customer-support"], confidence: "sourced" },
  { id: "src-constitutional-ai", title: "Constitutional AI: Harmlessness from AI Feedback", publisher: "Bai et al., Anthropic", year: 2022, url: "https://arxiv.org/abs/2212.08073", type: "paper", supports: ["enterprise-productivity"], confidence: "sourced" },
  { id: "src-vit", title: "An Image Is Worth 16x16 Words: Transformers for Image Recognition (ViT)", publisher: "Dosovitskiy et al., ICLR", year: 2021, url: "https://arxiv.org/abs/2010.11929", type: "paper", supports: ["radiology", "pathology", "manufacturing", "aerospace-space"], confidence: "sourced" },
  { id: "src-clip", title: "Learning Transferable Visual Models From Natural Language Supervision (CLIP)", publisher: "Radford et al., OpenAI / ICML", year: 2021, url: "https://arxiv.org/abs/2103.00020", type: "paper", supports: ["media-entertainment", "consumer-search"], confidence: "sourced" },
  { id: "src-sam", title: "Segment Anything", publisher: "Kirillov et al., Meta AI", year: 2023, url: "https://arxiv.org/abs/2304.02643", type: "paper", supports: ["pathology", "manufacturing", "aerospace-space"], confidence: "sourced" },
  { id: "src-ddpm", title: "Denoising Diffusion Probabilistic Models", publisher: "Ho et al., NeurIPS", year: 2020, url: "https://arxiv.org/abs/2006.11239", type: "paper", supports: ["media-entertainment", "robotics"], confidence: "sourced" },
  { id: "src-ldm", title: "High-Resolution Image Synthesis with Latent Diffusion Models", publisher: "Rombach et al., CVPR", year: 2022, url: "https://arxiv.org/abs/2112.10752", type: "paper", supports: ["media-entertainment"], confidence: "sourced" },
  { id: "src-flash-attention", title: "FlashAttention: Fast and Memory-Efficient Exact Attention", publisher: "Dao et al., NeurIPS", year: 2022, url: "https://arxiv.org/abs/2205.14135", type: "paper", supports: ["enterprise-productivity"], confidence: "sourced" },
  { id: "src-switch-transformer", title: "Switch Transformer (mixture-of-experts)", publisher: "Fedus et al., JMLR", year: 2022, url: "https://arxiv.org/abs/2101.03961", type: "paper", supports: ["enterprise-productivity"], confidence: "sourced" },
  { id: "src-dpo", title: "Direct Preference Optimization", publisher: "Rafailov et al., NeurIPS", year: 2023, url: "https://arxiv.org/abs/2305.18290", type: "paper", supports: ["enterprise-productivity"], confidence: "sourced" },

  /* --- Domain breakthroughs --- */
  { id: "src-alphafold2", title: "Highly accurate protein structure prediction with AlphaFold", publisher: "Jumper et al., Nature", year: 2021, url: "https://www.nature.com/articles/s41586-021-03819-2", type: "paper", supports: ["drug-discovery", "protein-design"], confidence: "sourced" },
  { id: "src-alphafold3", title: "Accurate structure prediction of biomolecular interactions with AlphaFold 3", publisher: "Abramson et al., Nature", year: 2024, url: "https://www.nature.com/articles/s41586-024-07487-w", type: "paper", supports: ["drug-discovery", "protein-design"], confidence: "sourced" },
  { id: "src-graphcast", title: "GraphCast: Learning skillful medium-range global weather forecasting", publisher: "Lam et al., Science", year: 2023, url: "https://www.science.org/doi/10.1126/science.adi2336", type: "paper", supports: ["climate-weather"], confidence: "sourced" },
  { id: "src-pangu-weather", title: "Accurate medium-range global weather forecasting with 3D neural networks (Pangu-Weather)", publisher: "Bi et al., Nature", year: 2023, url: "https://www.nature.com/articles/s41586-023-06185-3", type: "paper", supports: ["climate-weather"], confidence: "sourced" },
  { id: "src-fourcastnet", title: "FourCastNet: Adaptive Fourier neural operators for weather forecasting", publisher: "Pathak et al.", year: 2022, url: "https://arxiv.org/abs/2202.11214", type: "paper", supports: ["climate-weather", "scientific-computing"], confidence: "sourced" },
  { id: "src-rt2", title: "RT-2: Vision-Language-Action Models", publisher: "Google DeepMind", year: 2023, url: "https://robotics-transformer2.github.io/", type: "paper", supports: ["robotics"], confidence: "sourced" },
  { id: "src-rt-x", title: "Open X-Embodiment / RT-X", publisher: "Open X-Embodiment Collaboration", year: 2024, url: "https://robotics-transformer-x.github.io/", type: "paper", supports: ["robotics"], confidence: "sourced" },
  { id: "src-openvla", title: "OpenVLA: An Open-Source Vision-Language-Action Model", publisher: "Kim et al.", year: 2024, url: "https://openvla.github.io/", type: "paper", supports: ["robotics"], confidence: "sourced" },
  { id: "src-diffusion-policy", title: "Diffusion Policy: Visuomotor Policy Learning via Action Diffusion", publisher: "Chi et al., RSS", year: 2023, url: "https://arxiv.org/abs/2303.04137", type: "paper", supports: ["robotics"], confidence: "sourced" },
  { id: "src-bloomberggpt", title: "BloombergGPT: A Large Language Model for Finance", publisher: "Wu et al., Bloomberg", year: 2023, url: "https://arxiv.org/abs/2303.17564", type: "paper", supports: ["banking", "quant-finance"], confidence: "sourced" },
  { id: "src-swe-bench", title: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?", publisher: "Jimenez et al., Princeton", year: 2024, url: "https://www.swebench.com/", type: "benchmark", supports: ["software-engineering"], confidence: "sourced" },
  { id: "src-humaneval", title: "Evaluating Large Language Models Trained on Code (HumanEval)", publisher: "Chen et al., OpenAI", year: 2021, url: "https://arxiv.org/abs/2107.03374", type: "benchmark", supports: ["software-engineering"], confidence: "sourced" },
  { id: "src-lstm-sepsis-wong", title: "External Validation of a Widely Implemented Proprietary Sepsis Prediction Model in Hospitalized Patients", publisher: "Wong et al., JAMA Internal Medicine", year: 2021, url: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2781307", type: "paper", supports: ["clinical-medicine"], confidence: "sourced" },
  { id: "src-fda-samd", title: "FDA Software as a Medical Device (SaMD) guidance", publisher: "US FDA", year: 2024, url: "https://www.fda.gov/medical-devices/digital-health-center-excellence/software-medical-device-samd", type: "regulator", supports: ["clinical-medicine", "radiology", "pathology", "ophthalmology"], confidence: "sourced" },
  { id: "src-radiology-fda-list", title: "FDA-cleared AI/ML enabled medical devices list", publisher: "US FDA", year: 2024, url: "https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-aiml-enabled-medical-devices", type: "regulator", supports: ["radiology", "pathology", "clinical-medicine", "ophthalmology"], confidence: "sourced" },
  { id: "src-idx-dr", title: "IDx-DR autonomous diabetic retinopathy AI (FDA De Novo)", publisher: "US FDA", year: 2018, url: "https://www.fda.gov/news-events/press-announcements/fda-permits-marketing-artificial-intelligence-based-device-detect-certain-diabetes-related-eye", type: "regulator", supports: ["ophthalmology"], confidence: "sourced" },
  { id: "src-eu-ai-act", title: "EU Artificial Intelligence Act (Regulation 2024/1689)", publisher: "European Commission", year: 2024, url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj", type: "regulator", supports: ["clinical-medicine", "hr-recruiting", "education", "government-services", "defence"], confidence: "sourced" },
  { id: "src-nyc-aedt", title: "NYC Local Law 144 (Automated Employment Decision Tools)", publisher: "NYC Department of Consumer and Worker Protection", year: 2023, url: "https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page", type: "regulator", supports: ["hr-recruiting"], confidence: "sourced" },
  { id: "src-nist-ai-rmf", title: "NIST AI Risk Management Framework", publisher: "NIST", year: 2023, url: "https://www.nist.gov/itl/ai-risk-management-framework", type: "regulator", supports: ["clinical-medicine", "banking", "government-services", "cybersecurity"], confidence: "sourced" },
  { id: "src-sr-11-7", title: "SR 11-7: Guidance on Model Risk Management", publisher: "US Federal Reserve", year: 2011, url: "https://www.federalreserve.gov/supervisionreg/srletters/sr1107.htm", type: "regulator", supports: ["banking", "quant-finance"], confidence: "sourced" },
  { id: "src-mifid-ii-best-ex", title: "MiFID II best-execution requirements (RTS 27/28)", publisher: "European Securities and Markets Authority", year: 2018, url: "https://www.esma.europa.eu/policy-rules/mifid-ii-and-mifir", type: "regulator", supports: ["trading", "quant-finance"], confidence: "sourced" },
  { id: "src-fcra", title: "Fair Credit Reporting Act", publisher: "US Federal Trade Commission", year: 1970, url: "https://www.ftc.gov/legal-library/browse/statutes/fair-credit-reporting-act", type: "regulator", supports: ["banking"], confidence: "sourced" },
  { id: "src-ecoa-reg-b", title: "Equal Credit Opportunity Act (Regulation B)", publisher: "Consumer Financial Protection Bureau", year: 2024, url: "https://www.consumerfinance.gov/rules-policy/regulations/1002/", type: "regulator", supports: ["banking"], confidence: "sourced" },
  { id: "src-cfpb-credit-ai", title: "CFPB circular on credit-decision adverse-action notices in AI/complex models", publisher: "CFPB", year: 2022, url: "https://www.consumerfinance.gov/about-us/newsroom/cfpb-acts-to-protect-the-public-from-black-box-credit-models-using-complex-algorithms/", type: "regulator", supports: ["banking"], confidence: "sourced" },
  { id: "src-hipaa", title: "HIPAA Privacy and Security Rules", publisher: "US HHS Office for Civil Rights", year: 2024, url: "https://www.hhs.gov/hipaa/index.html", type: "regulator", supports: ["clinical-medicine", "clinical-documentation", "radiology"], confidence: "sourced" },
  { id: "src-fedramp", title: "FedRAMP Authorisation Programme", publisher: "GSA / FedRAMP PMO", year: 2024, url: "https://www.fedramp.gov/", type: "regulator", supports: ["government-services", "defence"], confidence: "sourced" },
  { id: "src-c2pa", title: "C2PA Content Credentials Specification", publisher: "Coalition for Content Provenance and Authenticity", year: 2024, url: "https://c2pa.org/specifications/", type: "standard", supports: ["media-entertainment", "intelligence-analysis"], confidence: "sourced" },
  { id: "src-mitre-attack", title: "MITRE ATT&amp;CK", publisher: "MITRE Corporation", year: 2025, url: "https://attack.mitre.org/", type: "knowledge-base", supports: ["cybersecurity"], confidence: "sourced" },
  { id: "src-nvd-cve", title: "National Vulnerability Database (NVD) and CVE Programme", publisher: "NIST + MITRE", year: 2025, url: "https://nvd.nist.gov/", type: "knowledge-base", supports: ["cybersecurity"], confidence: "sourced" },
  { id: "src-darpa-aixcc", title: "DARPA AI Cyber Challenge", publisher: "DARPA", year: 2024, url: "https://aicyberchallenge.com/", type: "programme", supports: ["cybersecurity"], confidence: "sourced" },
  { id: "src-acmg-vus", title: "ACMG/AMP standards and guidelines for variant interpretation", publisher: "American College of Medical Genetics and Genomics", year: 2015, url: "https://www.acmg.net/docs/Standards_Guidelines_for_the_Interpretation_of_Sequence_Variants.pdf", type: "guideline", supports: ["genomics", "clinical-medicine"], confidence: "sourced" },
  { id: "src-cms-cpt-rpm", title: "CMS Remote Patient Monitoring CPT 99453/99454 code set", publisher: "Centers for Medicare and Medicaid Services", year: 2024, url: "https://www.cms.gov/medicare/medicare-fee-for-service-payment/physicianfeesched", type: "regulator", supports: ["clinical-medicine"], confidence: "sourced" },
  { id: "src-ferc-2222", title: "FERC Order 2222 (DER participation in wholesale markets)", publisher: "US FERC", year: 2020, url: "https://www.ferc.gov/sites/default/files/2020-09/E-1_0.pdf", type: "regulator", supports: ["energy-grid"], confidence: "sourced" },
  { id: "src-nerc-cip", title: "NERC Critical Infrastructure Protection (CIP) standards", publisher: "North American Electric Reliability Corporation", year: 2024, url: "https://www.nerc.com/pa/Stand/Pages/CIPStandards.aspx", type: "regulator", supports: ["energy-grid"], confidence: "sourced" },
  { id: "src-pcaob", title: "PCAOB auditing standards and inspection reports", publisher: "Public Company Accounting Oversight Board", year: 2024, url: "https://pcaobus.org/oversight/standards", type: "regulator", supports: ["accounting-audit"], confidence: "sourced" },
  { id: "src-nhtsa-ads", title: "NHTSA standing general order on ADS / Level 2 reporting", publisher: "US NHTSA", year: 2024, url: "https://www.nhtsa.gov/laws-regulations/standing-general-order-crash-reporting", type: "regulator", supports: ["autonomous-vehicles"], confidence: "sourced" },
  { id: "src-cruise-pause", title: "GM Cruise California DMV permit suspension (2023)", publisher: "California DMV", year: 2023, url: "https://www.dmv.ca.gov/portal/news-and-media/dmv-statement-on-cruise-llc-suspension/", type: "regulator", supports: ["autonomous-vehicles"], confidence: "sourced" },
  { id: "src-dod-ai-strategy", title: "US DoD Data, Analytics, and AI Adoption Strategy", publisher: "US Department of Defense", year: 2023, url: "https://media.defense.gov/2023/Nov/02/2003333300/-1/-1/1/DOD_DATA_ANALYTICS_AI_ADOPTION_STRATEGY.PDF", type: "regulator", supports: ["defence", "intelligence-analysis"], confidence: "sourced" },
  { id: "src-hf-leaderboard", title: "Hugging Face Open LLM Leaderboard", publisher: "Hugging Face", year: 2024, url: "https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard", type: "benchmark", supports: ["enterprise-productivity"], confidence: "sourced" },
  { id: "src-mmlu", title: "MMLU: Measuring Massive Multitask Language Understanding", publisher: "Hendrycks et al.", year: 2021, url: "https://arxiv.org/abs/2009.03300", type: "benchmark", supports: ["enterprise-productivity"], confidence: "sourced" },
  { id: "src-mteb", title: "MTEB: Massive Text Embedding Benchmark", publisher: "Muennighoff et al.", year: 2023, url: "https://arxiv.org/abs/2210.07316", type: "benchmark", supports: ["enterprise-productivity", "legal", "consumer-search"], confidence: "sourced" },
  { id: "src-mlperf", title: "MLPerf Inference + Training benchmarks", publisher: "MLCommons", year: 2024, url: "https://mlcommons.org/benchmarks/", type: "benchmark", supports: ["enterprise-productivity"], confidence: "sourced" },
  { id: "src-deepseek-v3", title: "DeepSeek-V3 technical report", publisher: "DeepSeek-AI", year: 2024, url: "https://arxiv.org/abs/2412.19437", type: "paper", supports: ["enterprise-productivity"], confidence: "sourced" },
  { id: "src-llama3", title: "The Llama 3 Herd of Models", publisher: "Meta AI", year: 2024, url: "https://arxiv.org/abs/2407.21783", type: "paper", supports: ["enterprise-productivity"], confidence: "sourced" },
  { id: "src-claude-card", title: "Claude 3 / 3.5 model cards", publisher: "Anthropic", year: 2024, url: "https://www.anthropic.com/news/claude-3-family", type: "model-card", supports: ["enterprise-productivity", "software-engineering"], confidence: "sourced" },
  { id: "src-gpt4-card", title: "GPT-4 technical report and system card", publisher: "OpenAI", year: 2023, url: "https://arxiv.org/abs/2303.08774", type: "model-card", supports: ["enterprise-productivity", "education"], confidence: "sourced" },
  { id: "src-sora-tr", title: "Sora technical report", publisher: "OpenAI", year: 2024, url: "https://openai.com/index/video-generation-models-as-world-simulators/", type: "model-card", supports: ["media-entertainment"], confidence: "sourced" },
  { id: "src-aladdin-ai", title: "BlackRock Aladdin Copilot announcement", publisher: "BlackRock", year: 2024, url: "https://www.blackrock.com/aladdin/products/aladdin-copilot", type: "vendor-disclosure", supports: ["quant-finance"], confidence: "needsVerification" },
  { id: "src-tesla-ai-day", title: "Tesla AI Day talks (2021/2022)", publisher: "Tesla", year: 2022, url: "https://www.youtube.com/watch?v=ODSJsviD_SU", type: "vendor-disclosure", supports: ["autonomous-vehicles", "robotics"], confidence: "needsVerification" },
  { id: "src-tempus-s1", title: "Tempus AI S-1 / 10-K filings", publisher: "US SEC", year: 2024, url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001717115", type: "filing", supports: ["clinical-medicine"], confidence: "needsVerification" },
  { id: "src-semianalysis", title: "SemiAnalysis (Dylan Patel) industry research", publisher: "SemiAnalysis", year: 2024, url: "https://www.semianalysis.com/", type: "industry-analyst", supports: ["enterprise-productivity"], confidence: "needsVerification" },
  { id: "src-tsmc-capex", title: "TSMC quarterly results + capex disclosures", publisher: "TSMC Investor Relations", year: 2024, url: "https://investor.tsmc.com/english/quarterly-results", type: "filing", supports: ["enterprise-productivity"], confidence: "sourced" },
  { id: "src-rfm1", title: "Covariant RFM-1 (Robotics Foundation Model) announcement", publisher: "Covariant", year: 2024, url: "https://covariant.ai/insights/introducing-rfm-1-giving-robots-human-like-reasoning-capabilities/", type: "vendor-disclosure", supports: ["robotics"], confidence: "sourced" },
  { id: "src-pi-zero", title: "Physical Intelligence Pi-0 (general-purpose robot policy)", publisher: "Physical Intelligence", year: 2024, url: "https://www.physicalintelligence.company/blog/pi0", type: "vendor-disclosure", supports: ["robotics"], confidence: "sourced" },
  { id: "src-deepmind-cooling", title: "DeepMind data-centre cooling RL deployment", publisher: "Google / DeepMind", year: 2018, url: "https://deepmind.google/discover/blog/safety-first-ai-for-autonomous-data-centre-cooling-and-industrial-control/", type: "vendor-disclosure", supports: ["energy-grid"], confidence: "sourced" },

  /* --- Canonical papers added in credibility hardening pass 3 --- */
  { id: "src-whisper", title: "Robust Speech Recognition via Large-Scale Weak Supervision (Whisper)", publisher: "Radford et al., OpenAI", year: 2022, url: "https://arxiv.org/abs/2212.04356", type: "paper", supports: ["clinical-documentation", "customer-support", "media-entertainment"], confidence: "sourced" },
  { id: "src-word2vec", title: "Efficient Estimation of Word Representations in Vector Space (word2vec)", publisher: "Mikolov et al.", year: 2013, url: "https://arxiv.org/abs/1301.3781", type: "paper", supports: ["consumer-search", "enterprise-productivity", "legal"], confidence: "sourced" },
  { id: "src-sbert", title: "Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks", publisher: "Reimers and Gurevych, EMNLP", year: 2019, url: "https://arxiv.org/abs/1908.10084", type: "paper", supports: ["legal", "consumer-search", "enterprise-productivity"], confidence: "sourced" },
  { id: "src-hnsw", title: "Efficient and robust approximate nearest neighbor search using HNSW graphs", publisher: "Malkov and Yashunin", year: 2016, url: "https://arxiv.org/abs/1603.09320", type: "paper", supports: ["consumer-search", "enterprise-productivity"], confidence: "sourced" },
  { id: "src-yolo", title: "You Only Look Once: Unified, Real-Time Object Detection (YOLO)", publisher: "Redmon et al., CVPR", year: 2016, url: "https://arxiv.org/abs/1506.02640", type: "paper", supports: ["manufacturing", "robotics", "autonomous-vehicles"], confidence: "sourced" },
  { id: "src-detr", title: "End-to-End Object Detection with Transformers (DETR)", publisher: "Carion et al., Meta AI", year: 2020, url: "https://arxiv.org/abs/2005.12872", type: "paper", supports: ["manufacturing", "robotics", "autonomous-vehicles"], confidence: "sourced" },
  { id: "src-donut", title: "OCR-free Document Understanding Transformer (Donut)", publisher: "Kim et al., NAVER", year: 2022, url: "https://arxiv.org/abs/2111.15664", type: "paper", supports: ["banking", "insurance", "legal", "clinical-documentation"], confidence: "sourced" },
  { id: "src-wide-deep", title: "Wide & Deep Learning for Recommender Systems", publisher: "Cheng et al., Google", year: 2016, url: "https://arxiv.org/abs/1606.07792", type: "paper", supports: ["media-entertainment", "consumer-search"], confidence: "sourced" },
  { id: "src-dqn", title: "Human-level control through deep reinforcement learning (DQN)", publisher: "Mnih et al., Nature (DeepMind)", year: 2015, url: "https://www.nature.com/articles/nature14236", type: "paper", supports: ["robotics", "trading"], confidence: "sourced" },
  { id: "src-muzero", title: "Mastering Atari, Go, chess and shogi by planning with a learned model (MuZero)", publisher: "Schrittwieser et al., Nature (DeepMind)", year: 2020, url: "https://www.nature.com/articles/s41586-020-03051-4", type: "paper", supports: ["robotics", "scientific-computing"], confidence: "sourced" },
  { id: "src-world-models", title: "World Models (Ha & Schmidhuber)", publisher: "Ha and Schmidhuber, NeurIPS", year: 2018, url: "https://arxiv.org/abs/1803.10122", type: "paper", supports: ["robotics", "autonomous-vehicles"], confidence: "sourced" },
  { id: "src-dreamer-v3", title: "Mastering Diverse Domains through World Models (DreamerV3)", publisher: "Hafner et al., DeepMind", year: 2023, url: "https://arxiv.org/abs/2301.04104", type: "paper", supports: ["robotics"], confidence: "sourced" },
  { id: "src-egnn", title: "E(n) Equivariant Graph Neural Networks", publisher: "Satorras et al., ICML", year: 2021, url: "https://arxiv.org/abs/2102.09844", type: "paper", supports: ["materials-science", "drug-discovery", "chemistry"], confidence: "sourced" },
  { id: "src-lightgbm", title: "LightGBM: A Highly Efficient Gradient Boosting Decision Tree", publisher: "Ke et al., NeurIPS", year: 2017, url: "https://papers.nips.cc/paper/6907-lightgbm-a-highly-efficient-gradient-boosting-decision-tree", type: "paper", supports: ["banking", "fraud-detection", "insurance"], confidence: "sourced" },
  { id: "src-xgboost", title: "XGBoost: A Scalable Tree Boosting System", publisher: "Chen and Guestrin, KDD", year: 2016, url: "https://arxiv.org/abs/1603.02754", type: "paper", supports: ["banking", "fraud-detection", "quant-finance"], confidence: "sourced" },
  { id: "src-bayes-opt-snoek", title: "Practical Bayesian Optimization of Machine Learning Algorithms", publisher: "Snoek et al., NeurIPS", year: 2012, url: "https://arxiv.org/abs/1206.2944", type: "paper", supports: ["materials-science", "scientific-computing"], confidence: "sourced" },
  { id: "src-temporal-fusion", title: "Temporal Fusion Transformers for Interpretable Multi-horizon Time Series Forecasting", publisher: "Lim et al.", year: 2021, url: "https://arxiv.org/abs/1912.09363", type: "paper", supports: ["energy-grid", "supply-chain", "trading"], confidence: "sourced" },
  { id: "src-isolation-forest", title: "Isolation Forest", publisher: "Liu, Ting, Zhou, ICDM", year: 2008, url: "https://ieeexplore.ieee.org/document/4781136", type: "paper", supports: ["fraud-detection", "cybersecurity"], confidence: "sourced" },
  { id: "src-deep-rl-execution", title: "Reinforcement Learning for Order Execution (Nevmyvaka et al.)", publisher: "Nevmyvaka, Feng, Kearns, ICML", year: 2006, url: "https://www.cis.upenn.edu/~mkearns/papers/rlexec.pdf", type: "paper", supports: ["trading"], confidence: "sourced" },
  { id: "src-vllm", title: "Efficient Memory Management for Large Language Model Serving with PagedAttention (vLLM)", publisher: "Kwon et al.", year: 2023, url: "https://arxiv.org/abs/2309.06180", type: "paper", supports: ["enterprise-productivity"], confidence: "sourced" },
  { id: "src-mteb-2", title: "MTEB Massive Text Embedding Benchmark (extended)", publisher: "Muennighoff et al., HuggingFace", year: 2024, url: "https://huggingface.co/spaces/mteb/leaderboard", type: "benchmark", supports: ["enterprise-productivity", "legal", "consumer-search"], confidence: "sourced" }
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
    confidence: "marketContext"
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
  },

];

/* ============================================
   FOUNDER_OPPORTUNITIES — The Brutal Capitalist Map
   ============================================
   Where the money might be hiding. Specific enough that a founder
   can imagine building it. Conservative on validation claims:
   any company / fund / customer reference not directly cited is
   marked needsVerification.

   Capitalist read scale (subjective; intended as a starting frame):
     willingnessToPay     low | medium | high | very high
     salesCycle           short (<1 month) | medium (1-3 months) |
                          long (3-9 months) | enterprise-long (9+ months)
     distributionDifficulty low | medium | high
     dataAccessDifficulty   low | medium | high
     regulatoryDifficulty   low | medium | high
     incumbentRisk          low | medium | high
     marginPotential        low | medium | high
     defensibility          low | medium | high
     speedToRevenue         fast | moderate | slow
     ventureScalePotential  low | medium | high | massive
   ============================================ */
var FOUNDER_OPPORTUNITIES = [
  /* ── Healthcare / Bio ── */
  {
    id: "opp-prior-auth-specialty",
    domainId: "clinical-medicine",
    title: "Prior-authorisation automation for specialty clinics",
    short: "Document extraction + payer-policy RAG + human review for high-volume repeat procedures.",
    opportunityType: "vertical AI",
    status: "validated",
    confidence: "inferred",
    corePain: "Prior-authorisation paperwork delays cash collection and burns out staff; payer-specific rules drift constantly.",
    buyer: "Clinic administrator / revenue cycle leader",
    user: "Billing / authorisation staff",
    budgetOwner: "Practice owner or RCM service",
    urgency: "Direct hit on cash-flow timing and staff retention",
    whyNow: "LLMs can read payer policies and patient charts at production cost. Documentation is digital. Reimbursement-cycle pain is widespread post-COVID.",
    whyBeforeNowWasHard: "Pre-LLM, payer-specific policy reasoning required handcrafted rules per insurer per procedure.",
    existingValidation: {
      companies: ["Cohere Health (PA workflow tooling)", "Olive Health (historical, struggled)", "Co:Helm", "Itiliti Health"],
      analogues: ["Document AI vendors for claims (Shift Technology, Tractable in adjacent insurance)"],
      ycCompanies: ["needsVerification"],
      a16zRelevantTheses: ["needsVerification"],
      chinaAnalogues: ["needsVerification"],
      publicSignals: ["Sustained KLAS / RCM analyst attention; multiple Series A/B rounds in PA / RCM AI"]
    },
    brutalCapitalistRead: {
      willingnessToPay: "high",
      salesCycle: "medium",
      distributionDifficulty: "medium",
      dataAccessDifficulty: "medium",
      regulatoryDifficulty: "medium",
      incumbentRisk: "medium",
      marginPotential: "high",
      defensibility: "medium",
      speedToRevenue: "moderate",
      ventureScalePotential: "high"
    },
    wedge: "One specialty (orthopaedics or cardiology) with high repeat-procedure volume per clinic.",
    firstCustomer: "Mid-size specialty groups (10-40 providers) with their own RCM team.",
    mvp: "PA-letter draft + payer-policy retrieval + denial-prediction per procedure.",
    pricingHypothesis: "$0.50&ndash;$3 per submission or 5&ndash;10% of recovered revenue.",
    goToMarket: "Specialty-society partnerships, RCM-vendor channels, then direct to MSOs.",
    whatToAvoid: "Trying to be horizontal across all specialties on day one.",
    whyThisCouldFail: "Payer policies change faster than the corpus refresh; one big hallucinated claim erodes trust.",
    whyThisCouldWin: "Direct cash-flow improvement + measurable denials reduction is hard for buyers to ignore.",
    uberLyftGrabLogic: {
      validatedBy: "Cohere Health and similar players have raised meaningful capital in this layer",
      secondMoverAngle: "Specialty-vertical depth that horizontal RCM AI cannot match",
      localisationOrVerticalisation: "Specialty + payer-mix + state combinations create dozens of verticalisable wedges",
      smarterExecutionVariant: "Combine PA with denial-management and contract-rate analytics into one revenue-recovery layer"
    },
    notYetDoneWellBecause: ["Most incumbents are workflow-only with rule engines", "Vertical-specific evaluation discipline is rare"],
    whatChangedRecently: ["LLMs that can read 100-page payer policies cheaply", "Health-system pressure on RCM cost-to-collect"],
    sourceIds: ["src-hipaa"]
  },
  {
    id: "opp-radiology-report-copilot",
    domainId: "radiology",
    title: "Radiology report-generation copilot",
    short: "Structured-finding draft generation in PACS, beyond detection.",
    opportunityType: "vertical AI",
    status: "validated",
    confidence: "sourced",
    corePain: "Radiologists spend large fractions of their time dictating and structuring reports; existing AI focuses on detection, not the report.",
    buyer: "Radiology group CMO or hospital imaging informatics director",
    user: "Radiologists",
    budgetOwner: "Radiology group / health system",
    urgency: "Worsening radiologist shortage and burnout",
    whyNow: "Multimodal foundation models (CXR + report) can draft impressions; FDA pathways for note-drafting are clearer than for autonomous diagnosis.",
    whyBeforeNowWasHard: "Pre-multimodal models, image-to-structured-text required hand-tuned templates per modality.",
    existingValidation: {
      companies: ["Rad AI (impressions)", "Aidoc / Annalise (extending into reporting)", "Bayer Calantic platform (reporting integrations)"],
      analogues: ["Ambient clinical scribes (Nuance DAX / Abridge) prove that doc-drafting buyers exist."],
      ycCompanies: ["needsVerification"],
      a16zRelevantTheses: ["needsVerification"],
      chinaAnalogues: ["needsVerification"],
      publicSignals: ["Multiple Series B/C rounds in radiology AI report tooling"]
    },
    brutalCapitalistRead: {
      willingnessToPay: "high",
      salesCycle: "long",
      distributionDifficulty: "high",
      dataAccessDifficulty: "high",
      regulatoryDifficulty: "high",
      incumbentRisk: "high",
      marginPotential: "high",
      defensibility: "high",
      speedToRevenue: "slow",
      ventureScalePotential: "high"
    },
    wedge: "One modality (chest X-ray or ED CT) where impression-drafting saves the most time.",
    firstCustomer: "Outpatient imaging chains with their own radiologist pool.",
    mvp: "PACS-integrated draft impression + structured findings + measurement extraction.",
    pricingHypothesis: "Per-study fee or seat-based for radiologists.",
    goToMarket: "PACS / RIS partnerships, teleradiology channels, large outpatient chains.",
    whatToAvoid: "Selling to academic medical centres first &mdash; sales cycle too long.",
    whyThisCouldFail: "Hospitals consolidate AI procurement under marketplaces (Aidoc, Bayer Calantic) and squeeze pricing.",
    whyThisCouldWin: "Workflow-deep integration plus measurable time-savings creates a sticky habit.",
    uberLyftGrabLogic: {
      validatedBy: "Rad AI and similar are already monetising drafting workflows",
      secondMoverAngle: "Specialty modality depth (mammography, MSK MRI) underserved by horizontal players",
      localisationOrVerticalisation: "Country-level radiology workflow norms vary; per-region wedges exist",
      smarterExecutionVariant: "Pair drafting with peer-review and QA tooling"
    },
    notYetDoneWellBecause: ["FDA pathway uncertainty for full report generation", "Radiologist trust takes years to build"],
    whatChangedRecently: ["Multimodal models that can read both images and structured patient context"],
    sourceIds: ["paper-chexnet", "src-fda-samd", "src-radiology-fda-list"]
  },
  {
    id: "opp-bio-eval-harness",
    domainId: "drug-discovery",
    title: "Honest evaluation harnesses for generative biology",
    short: "Per-target benchmarks + lab-correlation tracking + retrospective scoring across published programs.",
    opportunityType: "infrastructure",
    status: "underexplored",
    confidence: "inferred",
    corePain: "Generative biology programs publish in-silico wins that often do not survive the wet lab; no shared eval discipline exists.",
    buyer: "Biotech CTO / VP of computational biology",
    user: "Computational biology and ML teams",
    budgetOwner: "R&amp;D leadership",
    urgency: "Investors and boards are demanding wet-lab-correlated metrics, not just docking scores.",
    whyNow: "AlphaFold-class models created a generation of ML-bio teams who need shared benchmarks; capital pressure is rising.",
    whyBeforeNowWasHard: "Few ML-bio teams existed at scale; the eval problem was niche.",
    existingValidation: {
      companies: ["needsVerification: most known players (BenevolentAI, Recursion) build internal harnesses"],
      analogues: ["Hugging Face Eval, Papers with Code on the AI side"],
      ycCompanies: ["needsVerification"],
      a16zRelevantTheses: ["needsVerification"],
      chinaAnalogues: ["needsVerification"],
      publicSignals: ["Increased calls in the literature for retrospective benchmarks on lab outcomes"]
    },
    brutalCapitalistRead: {
      willingnessToPay: "medium",
      salesCycle: "medium",
      distributionDifficulty: "medium",
      dataAccessDifficulty: "high",
      regulatoryDifficulty: "low",
      incumbentRisk: "low",
      marginPotential: "medium",
      defensibility: "high",
      speedToRevenue: "moderate",
      ventureScalePotential: "medium"
    },
    wedge: "Evaluation suite for one target class (kinase inhibitors or antibody binders).",
    firstCustomer: "AI-first biotech with a small ML team but no eval discipline.",
    mvp: "Lab-correlation dashboard fed from internal teleop data + curated public benchmarks.",
    pricingHypothesis: "$50K&ndash;$300K seat-licence per scientific team.",
    goToMarket: "Sell into ML-bio communities, then channel through CROs.",
    whatToAvoid: "Starting from in-silico-only metrics that biotech teams already mistrust.",
    whyThisCouldFail: "Biotechs prefer to keep eval data internal as a moat.",
    whyThisCouldWin: "If the harness becomes the de-facto standard, it owns the &lsquo;Hugging Face of ML-bio eval&rsquo; position.",
    uberLyftGrabLogic: {
      validatedBy: "needsVerification",
      secondMoverAngle: "Most ML-bio teams have not productised their eval; first credible third-party suite wins mindshare",
      localisationOrVerticalisation: "Per-modality (small-molecule, antibody, peptide) verticals each need their own suite",
      smarterExecutionVariant: "Pair eval with synthetic data and retrospective lab-outcome ingestion"
    },
    notYetDoneWellBecause: ["Lab data is locked", "ML-bio teams under-invest in eval discipline"],
    whatChangedRecently: ["AI-first biotechs reaching the failure-replication phase of generative pipelines"],
    sourceIds: ["src-alphafold3"]
  },

  /* ── Finance / Business ── */
  {
    id: "opp-aml-investigator-copilot",
    domainId: "banking",
    title: "AML investigator copilot",
    short: "LLM + graph features that draft case narratives and pull entity history for SAR investigators.",
    opportunityType: "agentic workflow",
    status: "validated",
    confidence: "inferred",
    corePain: "AML investigators spend hours manually building case narratives from disconnected systems; SAR backlogs are large.",
    buyer: "Bank financial-crime / AML head",
    user: "AML investigators",
    budgetOwner: "Compliance / financial crime budget",
    urgency: "Regulator pressure on SAR timeliness; rising fraud volumes",
    whyNow: "LLMs can synthesise across transaction history, KYC notes and OSINT; graph features have matured at scale.",
    whyBeforeNowWasHard: "Banks could not legally send case data to general LLMs; on-prem / private-cloud LLMs are now viable.",
    existingValidation: {
      companies: ["ComplyAdvantage", "Hummingbird", "Quantexa", "FeatureSpace (broader fraud)"],
      analogues: ["SAR automation tools, KYC vendors"],
      ycCompanies: ["needsVerification"],
      a16zRelevantTheses: ["needsVerification"],
      chinaAnalogues: ["needsVerification"],
      publicSignals: ["Multi-billion-dollar AML fines have made the case for investment obvious"]
    },
    brutalCapitalistRead: {
      willingnessToPay: "very high",
      salesCycle: "enterprise-long",
      distributionDifficulty: "high",
      dataAccessDifficulty: "high",
      regulatoryDifficulty: "high",
      incumbentRisk: "high",
      marginPotential: "high",
      defensibility: "high",
      speedToRevenue: "slow",
      ventureScalePotential: "high"
    },
    wedge: "One bank tier (mid-market US community banks under USD 50B in assets) where investigator headcount is the binding constraint.",
    firstCustomer: "Mid-market US community / regional bank.",
    mvp: "Case-summary copilot inside an existing case-management UI.",
    pricingHypothesis: "$50&ndash;$200 per investigator per month, or per-case fee.",
    goToMarket: "Case-management vendor channels, FinCEN-aware service partners.",
    whatToAvoid: "Trying to be a SAR-filing replacement; remain a copilot.",
    whyThisCouldFail: "Tier-1 banks prefer to build internally; mid-market banks may consolidate to one vendor.",
    whyThisCouldWin: "Direct ROI in investigator productivity; high regulator visibility.",
    uberLyftGrabLogic: {
      validatedBy: "Mature category (Quantexa, ComplyAdvantage)",
      secondMoverAngle: "Mid-market focus; foreign-bank focus; specific predicate-offence specialisation (human trafficking, sanctions evasion)",
      localisationOrVerticalisation: "Country-specific AML regimes (UK SAR, EU 6AMLD, AUSTRAC)",
      smarterExecutionVariant: "Pair investigator copilot with proactive case-prioritisation"
    },
    notYetDoneWellBecause: ["Case management is fragmented and on-prem", "Investigators distrust ML black boxes"],
    whatChangedRecently: ["Private-LLM deployment options inside banks", "Regulator acceptance of model-explainability frameworks"],
    sourceIds: ["needs-verification"]
  },
  {
    id: "opp-quant-eval-tooling",
    domainId: "quant-finance",
    title: "Honest evaluation tooling for quant ML strategies",
    short: "Look-ahead / leakage detection, transaction-cost realism and capacity-aware backtesting.",
    opportunityType: "devtool",
    status: "underexplored",
    confidence: "inferred",
    corePain: "Most quant ML strategies overfit silently; eval tooling lags model tooling.",
    buyer: "Hedge fund head of research",
    user: "Quant researchers",
    budgetOwner: "Research / risk management",
    urgency: "Capital pressure on alpha discovery cycles is rising.",
    whyNow: "Foundation forecasters and time-series transformers proliferate; eval discipline lags far behind.",
    whyBeforeNowWasHard: "Quant funds preferred to keep eval discipline as a competitive secret.",
    existingValidation: {
      companies: ["WorldQuant Brain (quasi-public eval)", "Numerai (public benchmarks)"],
      analogues: ["Hugging Face Eval / Papers with Code analogues"],
      ycCompanies: ["needsVerification"],
      a16zRelevantTheses: ["needsVerification"],
      chinaAnalogues: ["needsVerification"],
      publicSignals: ["Public discussion of LLM-driven backtesting failures; rising regime-shift discourse"]
    },
    brutalCapitalistRead: {
      willingnessToPay: "high",
      salesCycle: "medium",
      distributionDifficulty: "high",
      dataAccessDifficulty: "high",
      regulatoryDifficulty: "low",
      incumbentRisk: "low",
      marginPotential: "high",
      defensibility: "high",
      speedToRevenue: "moderate",
      ventureScalePotential: "medium"
    },
    wedge: "One asset class (US equities or crypto) with rich public market data.",
    firstCustomer: "Mid-size systematic fund or family office.",
    mvp: "Eval-as-a-service with leakage detection, cost realism, and capacity-aware metrics.",
    pricingHypothesis: "$50K&ndash;$500K per fund seat licence.",
    goToMarket: "Quant conferences, university quant clubs, fund channel partners.",
    whatToAvoid: "Trying to be a full backtester; pair with QuantConnect / Backtrader.",
    whyThisCouldFail: "Top funds build internal tools; mid-tier may not pay for the depth.",
    whyThisCouldWin: "Becomes the &lsquo;academic standard&rsquo; for honest eval; consulting and audit channel emerges.",
    uberLyftGrabLogic: {
      validatedBy: "Numerai signals appetite for eval-driven competitions",
      secondMoverAngle: "Audit-grade tooling for funds reporting to LPs",
      localisationOrVerticalisation: "Per-asset-class verticals",
      smarterExecutionVariant: "Pair with LLM-driven research-thesis generation and falsification"
    },
    notYetDoneWellBecause: ["Funds keep tools private", "Eval is unglamorous"],
    whatChangedRecently: ["Public LLM-quant failures driving regulator interest in honest backtests"],
    sourceIds: ["src-mifid-ii-best-ex", "src-sr-11-7"]
  },

  /* ── Enterprise ── */
  {
    id: "opp-swe-vertical-agents",
    domainId: "software-engineering",
    title: "Language- and framework-specific coding agents",
    short: "Repo-scale agents tuned for niche stacks (Salesforce Apex, COBOL migration, Rust embedded, SAP ABAP).",
    opportunityType: "vertical AI",
    status: "validated",
    confidence: "inferred",
    corePain: "Generalist coding agents (Cursor, Copilot, Claude Code) plateau on niche stacks where training data is thin.",
    buyer: "VP of engineering / CTO at companies running niche stacks",
    user: "Specialist developers",
    budgetOwner: "Engineering budget",
    urgency: "Talent in niche stacks (COBOL, ABAP, Apex) is scarce; modernisation pressure is rising.",
    whyNow: "Frontier model fine-tuning APIs make domain-specific coding agents tractable; SWE-bench raised the bar.",
    whyBeforeNowWasHard: "Pre-LLM, code translation tools were brittle and per-language.",
    existingValidation: {
      companies: ["Mainframe modernisation: Hexaware / Asysco / Microfocus", "Salesforce Einstein for Apex", "Sourcegraph for code search"],
      analogues: ["Cursor / Cognition Devin in horizontal coding"],
      ycCompanies: ["needsVerification"],
      a16zRelevantTheses: ["a16z dev-tools and AI engineering theses"],
      chinaAnalogues: ["needsVerification"],
      publicSignals: ["High enterprise modernisation spend; SWE-bench-class benchmarks pulling research interest"]
    },
    brutalCapitalistRead: {
      willingnessToPay: "very high",
      salesCycle: "long",
      distributionDifficulty: "high",
      dataAccessDifficulty: "high",
      regulatoryDifficulty: "low",
      incumbentRisk: "medium",
      marginPotential: "high",
      defensibility: "high",
      speedToRevenue: "moderate",
      ventureScalePotential: "high"
    },
    wedge: "One stack (e.g. Salesforce Apex or SAP ABAP) with high willingness to pay and limited talent.",
    firstCustomer: "Large enterprise running 5+M lines of code on the niche stack.",
    mvp: "Agent + RAG over enterprise codebase; first 5 customer-specific patterns automated.",
    pricingHypothesis: "$50K&ndash;$500K seat / org / year.",
    goToMarket: "System integrator (Accenture, Deloitte) channel partnerships.",
    whatToAvoid: "Trying to compete with horizontal coding agents head-on.",
    whyThisCouldFail: "Hyperscaler &lsquo;everything bagels&rsquo; (Copilot, Code Whisperer, Vertex) bundle the niche later.",
    whyThisCouldWin: "Stack-specific evaluation, ontologies and human-in-the-loop trust take years to replicate.",
    uberLyftGrabLogic: {
      validatedBy: "Modernisation services market is multi-billion",
      secondMoverAngle: "Pair migration with modernisation and security review",
      localisationOrVerticalisation: "Per-region: Japanese SAP / Korean banking COBOL etc.",
      smarterExecutionVariant: "Combine code-rewrite with test-coverage generation"
    },
    notYetDoneWellBecause: ["Niche stack data is rare", "System integrators have not productised this depth"],
    whatChangedRecently: ["LLMs that follow long codebases", "SWE-bench raising the evaluation bar"],
    sourceIds: ["paper-swebench", "src-swe-bench"]
  },
  {
    id: "opp-legal-citation-verification",
    domainId: "legal",
    title: "Citation-verification middleware for legal AI",
    short: "Layer that catches hallucinated case-law citations before any LLM output reaches a brief.",
    opportunityType: "infrastructure",
    status: "validated",
    confidence: "sourced",
    corePain: "Documented sanctions for attorneys submitting fabricated citations make hallucination a binary risk for any legal LLM stack.",
    buyer: "GC / Innovation lead at law firms or in-house teams",
    user: "Associates and counsel using LLMs",
    budgetOwner: "Practice innovation / risk",
    urgency: "Documented public cases of judicial sanctions for fabricated citations.",
    whyNow: "Every legal AI buyer demands a verification layer; pure-RAG legal vendors are fighting the same problem.",
    whyBeforeNowWasHard: "Pre-LLM, the problem did not exist at scale; pre-2024, public case law was the bar.",
    existingValidation: {
      companies: ["Harvey (in-house verification)", "Lexis+ AI (citation-graded answers)", "Casetext (Thomson Reuters)"],
      analogues: ["Plagiarism / fact-check tools"],
      ycCompanies: ["needsVerification"],
      a16zRelevantTheses: ["a16z legal AI thesis"],
      chinaAnalogues: ["needsVerification"],
      publicSignals: ["Mata v. Avianca, multiple judicial sanctions in 2023-2024"]
    },
    brutalCapitalistRead: {
      willingnessToPay: "high",
      salesCycle: "medium",
      distributionDifficulty: "medium",
      dataAccessDifficulty: "low",
      regulatoryDifficulty: "low",
      incumbentRisk: "high",
      marginPotential: "high",
      defensibility: "medium",
      speedToRevenue: "fast",
      ventureScalePotential: "medium"
    },
    wedge: "API + sidecar that verifies citations from any legal LLM output across multiple corpora.",
    firstCustomer: "Mid-size US law firm using horizontal legal AI.",
    mvp: "Public case law (federal + state) coverage + sanctions-watchlist + Bluebook formatting.",
    pricingHypothesis: "Per-citation fee or seat-based.",
    goToMarket: "Bar-association partnerships, law-firm innovation channels.",
    whatToAvoid: "Trying to be a full legal LLM &mdash; stay a sidecar.",
    whyThisCouldFail: "Major legal AI vendors absorb the function as a feature.",
    whyThisCouldWin: "Becomes the de-facto verification layer; charges everyone a small toll.",
    uberLyftGrabLogic: {
      validatedBy: "Public sanctions cases drive demand",
      secondMoverAngle: "Per-jurisdiction depth (UK, Canada, India, EU)",
      localisationOrVerticalisation: "Country-specific citation styles",
      smarterExecutionVariant: "Pair verification with privilege / confidentiality checks"
    },
    notYetDoneWellBecause: ["Existing vendors fold verification into their own stack and underinvest in third-party APIs"],
    whatChangedRecently: ["Public sanctions cases", "Bar-association guidance on LLM use"],
    sourceIds: ["paper-rag"]
  },
  {
    id: "opp-customer-support-vertical",
    domainId: "customer-support",
    title: "Vertical support copilots for regulated industries",
    short: "Telco / bank / healthcare-ops support agents with grounded retrieval and compliance checks.",
    opportunityType: "vertical AI",
    status: "validated",
    confidence: "inferred",
    corePain: "Generic support deflection plateaus; regulated industries demand retrieval-grounded answers, audit trails and compliance constraints.",
    buyer: "Head of customer service / VP CX",
    user: "Customer support agents and L1 chatbots",
    budgetOwner: "Customer-experience or operations budget",
    urgency: "Cost-to-serve pressure; rising regulatory expectations on chatbot disclosures.",
    whyNow: "Foundation models are good enough; private-cloud deployment is mature; horizontal support AI (Intercom Fin, Zendesk AI) plateaus on regulated content.",
    whyBeforeNowWasHard: "Pre-LLM, support flows were rule-based and brittle.",
    existingValidation: {
      companies: ["Intercom Fin (horizontal)", "Zendesk AI (horizontal)", "Forethought", "Decagon", "Sierra"],
      analogues: ["Telco-specific NPS tools, regulated-industry CCaaS players"],
      ycCompanies: ["needsVerification"],
      a16zRelevantTheses: ["a16z agentic AI / vertical agents thesis"],
      chinaAnalogues: ["needsVerification"],
      publicSignals: ["Vendor case studies report 30-70% deflection"]
    },
    brutalCapitalistRead: {
      willingnessToPay: "high",
      salesCycle: "medium",
      distributionDifficulty: "medium",
      dataAccessDifficulty: "medium",
      regulatoryDifficulty: "medium",
      incumbentRisk: "high",
      marginPotential: "high",
      defensibility: "medium",
      speedToRevenue: "moderate",
      ventureScalePotential: "high"
    },
    wedge: "One regulated vertical (telcos in a region; insurance claims).",
    firstCustomer: "Mid-size regulated operator (telco, insurer, healthcare services).",
    mvp: "Vertical knowledge base + intent classification + agent-assist + compliance gating.",
    pricingHypothesis: "Per-resolved-ticket fee or seat-based.",
    goToMarket: "CCaaS partner channel + direct to mid-market.",
    whatToAvoid: "Generic horizontal support AI &mdash; the incumbents own that.",
    whyThisCouldFail: "Hyperscaler bundling pulls the floor of pricing down.",
    whyThisCouldWin: "Vertical compliance content and integration depth take years for horizontals to replicate.",
    uberLyftGrabLogic: {
      validatedBy: "Intercom Fin / Decagon / Sierra category formation",
      secondMoverAngle: "Per-vertical compliance depth",
      localisationOrVerticalisation: "Country-specific telco regulators / health-ops playbooks",
      smarterExecutionVariant: "Pair support with proactive churn-prevention"
    },
    notYetDoneWellBecause: ["Compliance is an afterthought in horizontal vendors"],
    whatChangedRecently: ["Mature private-LLM deployment", "Customer pressure on resolution metrics"],
    sourceIds: ["paper-rag"]
  },
  {
    id: "opp-cybersec-prompt-injection",
    domainId: "cybersecurity",
    title: "Prompt-injection / AI attack-surface defence",
    short: "Tooling for the new attack surface where the AI agent itself is the target.",
    opportunityType: "infrastructure",
    status: "underexplored",
    confidence: "inferred",
    corePain: "Indirect prompt injection, model extraction and data poisoning are now real threats; mature tooling barely exists.",
    buyer: "CISO / AppSec lead",
    user: "Security engineers running AI products",
    budgetOwner: "Security budget",
    urgency: "Public examples of agent jailbreaks; regulator interest rising.",
    whyNow: "Every enterprise is shipping agents that can read external content; classical AppSec does not cover prompt injection.",
    whyBeforeNowWasHard: "Agents with tool access at scale did not exist.",
    existingValidation: {
      companies: ["Lakera", "Robust Intelligence", "Hiddenlayer", "Protect AI"],
      analogues: ["WAF / RASP vendors"],
      ycCompanies: ["needsVerification"],
      a16zRelevantTheses: ["a16z security + AI thesis"],
      chinaAnalogues: ["needsVerification"],
      publicSignals: ["MITRE ATLAS framework", "OWASP LLM Top 10"]
    },
    brutalCapitalistRead: {
      willingnessToPay: "high",
      salesCycle: "long",
      distributionDifficulty: "medium",
      dataAccessDifficulty: "low",
      regulatoryDifficulty: "low",
      incumbentRisk: "medium",
      marginPotential: "high",
      defensibility: "medium",
      speedToRevenue: "moderate",
      ventureScalePotential: "high"
    },
    wedge: "Sidecar that scans agent inputs and outputs; integrates with major LLM gateways.",
    firstCustomer: "Mid-large enterprise running customer-facing agents.",
    mvp: "Pattern-based + ML-based prompt-injection detection + audit log.",
    pricingHypothesis: "Per-call fee or seat-based.",
    goToMarket: "AppSec channel; CISO networks; LLM gateway partnerships.",
    whatToAvoid: "Trying to be a full LLM-Ops platform.",
    whyThisCouldFail: "Hyperscaler safety APIs (Azure AI Content Safety, Anthropic / OpenAI guardrails) absorb the basic detection layer.",
    whyThisCouldWin: "Becomes a board-level checkbox; becomes regulatory expectation.",
    uberLyftGrabLogic: {
      validatedBy: "Lakera / Robust Intelligence / Protect AI funding rounds",
      secondMoverAngle: "Per-deployment-pattern depth (agentic, RAG, multimodal)",
      localisationOrVerticalisation: "Sector-specific (banking AI, healthcare AI)",
      smarterExecutionVariant: "Pair injection defence with model lineage / supply-chain attestation"
    },
    notYetDoneWellBecause: ["Field is too young", "Detection patterns are still being built"],
    whatChangedRecently: ["MITRE ATLAS, OWASP LLM Top 10", "Public agent jailbreaks"],
    sourceIds: ["src-mitre-attack"]
  },

  /* ── Physical world ── */
  {
    id: "opp-robot-data-infrastructure",
    domainId: "robotics",
    title: "Robot-data infrastructure (teleop + simulation + labelling)",
    short: "Pick-and-shovel for the robotics-foundation-model era.",
    opportunityType: "infrastructure",
    status: "underexplored",
    confidence: "inferred",
    corePain: "Robotics teams need millions of trajectories; teleop + sim + labelling tooling is fragmented and bespoke.",
    buyer: "VP of robotics / autonomy",
    user: "Robotics engineers + ML teams",
    budgetOwner: "Engineering / R&amp;D budget",
    urgency: "Open X-Embodiment-class ambitions are forcing a data-scale reckoning.",
    whyNow: "VLA models proved that more data &rarr; better generalisation; teams are now starved of high-quality data.",
    whyBeforeNowWasHard: "Pre-VLA, it was unclear if scaled robot data was useful.",
    existingValidation: {
      companies: ["Scale AI (general data ops)", "Tigris (teleop)", "Mech-Mind (industrial)", "Physical Intelligence (vertically integrated)"],
      analogues: ["Roboflow for vision"],
      ycCompanies: ["needsVerification"],
      a16zRelevantTheses: ["a16z robotics theses"],
      chinaAnalogues: ["needsVerification"],
      publicSignals: ["Open X-Embodiment cross-institution dataset effort"]
    },
    brutalCapitalistRead: {
      willingnessToPay: "high",
      salesCycle: "medium",
      distributionDifficulty: "medium",
      dataAccessDifficulty: "high",
      regulatoryDifficulty: "low",
      incumbentRisk: "medium",
      marginPotential: "high",
      defensibility: "high",
      speedToRevenue: "moderate",
      ventureScalePotential: "high"
    },
    wedge: "Teleop + curation + labelling for one embodiment family (mobile-manipulators or humanoids).",
    firstCustomer: "Series A/B robotics startups.",
    mvp: "Teleop SDK + cloud annotation + structured action vocabulary.",
    pricingHypothesis: "Per-trajectory fee + platform subscription.",
    goToMarket: "Direct to robotics startups; partnerships with simulator vendors.",
    whatToAvoid: "Trying to build the foundation model and the infrastructure.",
    whyThisCouldFail: "Vertically integrated players (Physical Intelligence, Skild, 1X) keep their data internal.",
    whyThisCouldWin: "Becomes the substrate that smaller robotics teams cannot live without.",
    uberLyftGrabLogic: {
      validatedBy: "Scale AI&rsquo;s success in vision/text data ops",
      secondMoverAngle: "Specialty per embodiment family (humanoid, dexterous-hand, mobile)",
      localisationOrVerticalisation: "Industry-specific (kitchens, warehouses, surgery)",
      smarterExecutionVariant: "Combine teleop with synthetic-data and policy-evaluation services"
    },
    notYetDoneWellBecause: ["Robotics startups under-invest in data infrastructure", "Teleop tools are bespoke"],
    whatChangedRecently: ["VLA wave", "Open X-Embodiment", "Humanoid funding wave"],
    sourceIds: ["paper-rt2", "paper-open-x", "src-rt-x", "src-pi-zero"]
  },
  {
    id: "opp-mfg-edge-ai",
    domainId: "manufacturing",
    title: "OT-secure on-prem AI for factories",
    short: "Edge AI box + control-plane that runs vision / time-series models on the line without sending data to the cloud.",
    opportunityType: "hardware-adjacent",
    status: "validated",
    confidence: "inferred",
    corePain: "Industrial buyers cannot send sensor / camera data off-site; existing AI vendors are cloud-first.",
    buyer: "VP manufacturing / plant manager / OT security lead",
    user: "Process engineers and operators",
    budgetOwner: "Operations / capex",
    urgency: "Production lines are losing efficiency to defect rates and unplanned downtime.",
    whyNow: "Edge GPUs / NPUs (NVIDIA Jetson, Intel / AMD edge) are mature; on-prem foundation-model deployment is finally tractable.",
    whyBeforeNowWasHard: "Edge inference was not strong enough; OT integration was custom per site.",
    existingValidation: {
      companies: ["Cognex (vision QC)", "Landing AI", "Instrumental", "Drishti", "Augury (acoustic anomaly)"],
      analogues: ["MES / SCADA vendors moving toward AI"],
      ycCompanies: ["needsVerification"],
      a16zRelevantTheses: ["a16z industrial AI theses"],
      chinaAnalogues: ["needsVerification"],
      publicSignals: ["Industrial CapEx surveys reporting AI adoption growth"]
    },
    brutalCapitalistRead: {
      willingnessToPay: "high",
      salesCycle: "long",
      distributionDifficulty: "high",
      dataAccessDifficulty: "high",
      regulatoryDifficulty: "low",
      incumbentRisk: "medium",
      marginPotential: "high",
      defensibility: "high",
      speedToRevenue: "slow",
      ventureScalePotential: "high"
    },
    wedge: "One vertical (electronics QC, food and beverage line monitoring).",
    firstCustomer: "Tier-2 contract manufacturer with multiple lines.",
    mvp: "Edge appliance + vision / time-series models + dashboard.",
    pricingHypothesis: "Hardware + recurring software fee per line.",
    goToMarket: "Systems-integrator channel + industrial OEM partnerships.",
    whatToAvoid: "Cloud-only architecture in OT environments.",
    whyThisCouldFail: "OEMs (Siemens, Rockwell) bundle the function and squeeze pricing.",
    whyThisCouldWin: "Vertical depth + on-prem trust take years to replicate.",
    uberLyftGrabLogic: {
      validatedBy: "Landing AI / Instrumental / Augury established the category",
      secondMoverAngle: "Specialty industries (battery cell QC, semi-fab, food-grade)",
      localisationOrVerticalisation: "Country-specific industrial bases (German Mittelstand, Korean / Taiwan electronics)",
      smarterExecutionVariant: "Pair QC with predictive maintenance and energy optimisation"
    },
    notYetDoneWellBecause: ["Industrial sites distrust generic SaaS vendors", "OT data is siloed"],
    whatChangedRecently: ["Edge GPU/NPU maturity", "On-prem LLM deployment"],
    sourceIds: ["needs-verification"]
  },
  {
    id: "opp-energy-der-orchestration",
    domainId: "energy-grid",
    title: "DER orchestration for behind-the-meter assets",
    short: "Software that coordinates rooftop solar + batteries + EV chargers + smart loads to bid into wholesale and ancillary markets.",
    opportunityType: "infrastructure",
    status: "validated",
    confidence: "inferred",
    corePain: "Distributed energy resources (DERs) are growing fast; orchestration software lags physical capacity.",
    buyer: "Utility / community choice aggregator / large C&amp;I customer",
    user: "Energy ops teams, building managers",
    budgetOwner: "Operations / sustainability budget",
    urgency: "Grid congestion, FERC Order 2222 enabling DER aggregation, AI-data-centre load growth.",
    whyNow: "Time-series and RL models can do real-time dispatch; FERC 2222 created the market structure.",
    whyBeforeNowWasHard: "Pre-2222, DER aggregators had no clean wholesale-market path.",
    existingValidation: {
      companies: ["Octopus Energy / Kraken", "Stem", "AutoGrid", "Tesla Autobidder", "Camus Energy"],
      analogues: ["Demand-response aggregators (Enel X, EnerNOC)"],
      ycCompanies: ["needsVerification"],
      a16zRelevantTheses: ["a16z American Dynamism theses"],
      chinaAnalogues: ["needsVerification"],
      publicSignals: ["FERC Order 2222 implementation across ISOs"]
    },
    brutalCapitalistRead: {
      willingnessToPay: "high",
      salesCycle: "long",
      distributionDifficulty: "high",
      dataAccessDifficulty: "medium",
      regulatoryDifficulty: "high",
      incumbentRisk: "medium",
      marginPotential: "high",
      defensibility: "high",
      speedToRevenue: "slow",
      ventureScalePotential: "high"
    },
    wedge: "One ISO market (CAISO, ERCOT, NYISO) + one asset class (battery + solar).",
    firstCustomer: "Mid-size aggregator or large commercial portfolio operator.",
    mvp: "Forecasting + dispatch optimisation + bidding adapter for one market.",
    pricingHypothesis: "Performance fee on energy savings or % of revenue from market participation.",
    goToMarket: "Utility / aggregator partnerships; direct-to-large-customer.",
    whatToAvoid: "Trying to be horizontal across all DER types from day one.",
    whyThisCouldFail: "Utility regulator shifts; market design changes; long sales cycle exhausts capital.",
    whyThisCouldWin: "Few credible operators; high willingness to pay; sticky deployments.",
    uberLyftGrabLogic: {
      validatedBy: "Octopus Kraken licensing globally; Tesla Autobidder",
      secondMoverAngle: "Per-ISO depth; per-asset-class focus",
      localisationOrVerticalisation: "EU / UK / India / Australia regulator regimes",
      smarterExecutionVariant: "Combine DER orchestration with AI-factory power services"
    },
    notYetDoneWellBecause: ["Energy markets are politically complex", "Software talent rarely overlaps with energy expertise"],
    whatChangedRecently: ["FERC 2222 implementation", "AI-data-centre demand pulling new attention to grid"],
    sourceIds: ["src-ferc-2222", "src-nerc-cip"]
  },
  {
    id: "opp-materials-autonomous-lab",
    domainId: "materials-science",
    title: "Autonomous lab platform for specialty materials",
    short: "Robot-driven lab + ML loop for a specific materials class (battery cells, photovoltaics, catalysts).",
    opportunityType: "infrastructure",
    status: "research-dependent",
    confidence: "forwardLooking",
    corePain: "Synthesis success rate is the binding bottleneck for ML-driven materials; autonomous labs close the loop.",
    buyer: "Industrial R&amp;D head / national lab director",
    user: "Materials scientists",
    budgetOwner: "R&amp;D budget",
    urgency: "Battery / clean-energy demand is forcing accelerated materials discovery.",
    whyNow: "Lab robotics are mature; characterisation tools are digital; foundation models for materials are emerging.",
    whyBeforeNowWasHard: "Lab automation lacked closed-loop ML integration.",
    existingValidation: {
      companies: ["Citrine Informatics", "Kebotix", "Aionics", "Atomic Industries", "Microsoft Research (MatterGen)"],
      analogues: ["Strateos / Emerald Cloud Lab in bio"],
      ycCompanies: ["needsVerification"],
      a16zRelevantTheses: ["a16z American Dynamism theses"],
      chinaAnalogues: ["needsVerification"],
      publicSignals: ["DeepMind GNoME paper (Nature)"]
    },
    brutalCapitalistRead: {
      willingnessToPay: "high",
      salesCycle: "long",
      distributionDifficulty: "high",
      dataAccessDifficulty: "high",
      regulatoryDifficulty: "low",
      incumbentRisk: "low",
      marginPotential: "high",
      defensibility: "high",
      speedToRevenue: "slow",
      ventureScalePotential: "high"
    },
    wedge: "One materials class with high commercial pull (Li-metal anodes, perovskite cells).",
    firstCustomer: "Battery / clean-energy industrial R&amp;D centre or national lab.",
    mvp: "Closed-loop synthesis + characterisation + ML-driven design for one chemistry.",
    pricingHypothesis: "Multi-year R&amp;D contracts.",
    goToMarket: "Direct to industrial R&amp;D + national-lab partnerships.",
    whatToAvoid: "Trying to be horizontal across all materials.",
    whyThisCouldFail: "Long capital cycles; long synthesis-to-product timelines.",
    whyThisCouldWin: "If the loop succeeds, founder owns the substrate of next-decade materials.",
    uberLyftGrabLogic: {
      validatedBy: "DeepMind GNoME shows AI-driven discovery is real",
      secondMoverAngle: "Vertical specialisation",
      localisationOrVerticalisation: "Country-specific national-lab partnerships",
      smarterExecutionVariant: "Combine lab platform with material-data licensing business"
    },
    notYetDoneWellBecause: ["Closed-loop labs are bespoke and academic"],
    whatChangedRecently: ["Lab robotics maturity", "Materials foundation models"],
    sourceIds: ["src-materials-project"]
  },

  /* ── Media / Consumer ── */
  {
    id: "opp-media-provenance",
    domainId: "media-entertainment",
    title: "Provenance &amp; rights infrastructure for generated media",
    short: "C2PA-style provenance + rights management for studios, brands and platforms.",
    opportunityType: "infrastructure",
    status: "underexplored",
    confidence: "inferred",
    corePain: "Studios / brands / platforms cannot prove provenance of media; deepfake risk and rights confusion are growing.",
    buyer: "Studio rights / brand-safety lead / platform integrity",
    user: "Producers and rights teams",
    budgetOwner: "Legal / brand-safety / integrity",
    urgency: "EU AI Act provenance obligations; election-cycle deepfake pressure.",
    whyNow: "C2PA standard is maturing; major platforms (Adobe, Microsoft, Google) are committing.",
    whyBeforeNowWasHard: "Provenance lacked a standard.",
    existingValidation: {
      companies: ["Adobe Content Credentials", "Truepic", "Microsoft", "Sony"],
      analogues: ["Watermark vendors, DRM"],
      ycCompanies: ["needsVerification"],
      a16zRelevantTheses: ["needsVerification"],
      chinaAnalogues: ["needsVerification"],
      publicSignals: ["EU AI Act provenance requirements; C2PA growth"]
    },
    brutalCapitalistRead: {
      willingnessToPay: "medium",
      salesCycle: "long",
      distributionDifficulty: "high",
      dataAccessDifficulty: "low",
      regulatoryDifficulty: "medium",
      incumbentRisk: "high",
      marginPotential: "medium",
      defensibility: "medium",
      speedToRevenue: "moderate",
      ventureScalePotential: "medium"
    },
    wedge: "Provenance / rights API for one platform category (creator tools, ad platforms).",
    firstCustomer: "Mid-size creator-platform or studio.",
    mvp: "C2PA signing + verification API + dashboard.",
    pricingHypothesis: "Per-asset fee + enterprise platform fee.",
    goToMarket: "Studio / platform partnerships; standards-body proximity.",
    whatToAvoid: "Trying to be the only provenance vendor.",
    whyThisCouldFail: "Adobe / Microsoft / Google bundle provenance into their stacks.",
    whyThisCouldWin: "Platform-neutral middleware finds a permanent niche.",
    uberLyftGrabLogic: {
      validatedBy: "C2PA standard adoption",
      secondMoverAngle: "Platform-neutral middleware",
      localisationOrVerticalisation: "Per-jurisdiction rights regimes",
      smarterExecutionVariant: "Combine provenance with rights-clearance marketplaces"
    },
    notYetDoneWellBecause: ["Standards are still maturing"],
    whatChangedRecently: ["EU AI Act", "C2PA momentum"],
    sourceIds: ["needs-verification"]
  },

  /* ── Strategic ── */
  {
    id: "opp-osint-with-provenance",
    domainId: "intelligence-analysis",
    title: "OSINT analytics with chain-of-evidence",
    short: "Multilingual OSINT ingestion + entity resolution + verifiable provenance for analysts.",
    opportunityType: "vertical AI",
    status: "validated",
    confidence: "inferred",
    corePain: "OSINT volumes have exploded; analysts need verifiable evidence chains, not just summaries.",
    buyer: "Government analyst leads / journalism / NGO investigators",
    user: "Intelligence analysts and investigators",
    budgetOwner: "Programme budget",
    urgency: "Information-operations and deepfake threats are scaling; EU / US guidance pushing provenance.",
    whyNow: "Multimodal LLMs + entity resolution + provenance standards combine.",
    whyBeforeNowWasHard: "Pre-LLM, multilingual OSINT was per-language and brittle.",
    existingValidation: {
      companies: ["Palantir", "BAE Systems", "Maxar / commercial-imagery", "Bellingcat (NGO)"],
      analogues: ["AML-graph players (Quantexa)"],
      ycCompanies: ["needsVerification"],
      a16zRelevantTheses: ["a16z American Dynamism / defence theses"],
      chinaAnalogues: ["needsVerification"],
      publicSignals: ["Bellingcat methodology has gone mainstream"]
    },
    brutalCapitalistRead: {
      willingnessToPay: "high",
      salesCycle: "enterprise-long",
      distributionDifficulty: "high",
      dataAccessDifficulty: "low",
      regulatoryDifficulty: "high",
      incumbentRisk: "high",
      marginPotential: "high",
      defensibility: "high",
      speedToRevenue: "slow",
      ventureScalePotential: "high"
    },
    wedge: "One use case (sanctions evasion tracking, election-integrity monitoring).",
    firstCustomer: "Government agency or major news organisation.",
    mvp: "Multilingual ingestion + entity graph + provenance log + analyst UI.",
    pricingHypothesis: "Multi-million programme contracts.",
    goToMarket: "Government primes; civil society partnerships.",
    whatToAvoid: "Selling to operational military without explicit licence; selling without provenance.",
    whyThisCouldFail: "Palantir-class incumbents close the gap.",
    whyThisCouldWin: "Modern UX + provenance can outflank legacy primes.",
    uberLyftGrabLogic: {
      validatedBy: "Palantir + Bellingcat methodology",
      secondMoverAngle: "Civilian / NGO market underserved",
      localisationOrVerticalisation: "Per-region: Europe, Asia, Africa",
      smarterExecutionVariant: "Combine OSINT with deepfake / IO detection"
    },
    notYetDoneWellBecause: ["Legacy primes have weak UX", "Provenance is still emerging"],
    whatChangedRecently: ["Multilingual LLMs", "Provenance standards"],
    sourceIds: ["src-c2pa", "src-dod-ai-strategy"]
  },

  /* ── Architecture-driven contrarian ── */

  /* ===== Phase 2.A founder-opportunity expansion (28 new) ===== */
  /* Compact-line format. Same schema fields the renderer reads (short, corePain, brutalCapitalistRead, existingValidation, whyThisCouldFail/Win, etc.). */

  { id: "opp-denial-mgmt-mid-market", domainId: "clinical-medicine", title: "Denial-management copilot for mid-market health systems", short: "Recover revenue lost to payer denials with payer-policy RAG and cited appeal letters; humans approve and submit.", opportunityType: "vertical AI", status: "validated", confidence: "inferred", corePain: "Mid-market hospitals leak a meaningful share of revenue to denials they do not have staff to appeal in time (industry-reported denial rates vary widely by payer mix).", buyer: "Health-system CFO", user: "RCM staff", budgetOwner: "Finance", urgency: "Direct revenue loss; timely-filing windows are hard", whyNow: "LLMs can read payer policies + EHR notes at production cost; payer rules drift faster than rule engines update.", whyBeforeNowWasHard: "Per-payer rule engines required armies of analysts.", notYetDoneWellBecause: ["Most incumbents focus on KP-1 hospitals only", "Specialty-line denial logic differs from inpatient"], whatChangedRecently: ["RAG over payer policy PDFs is now reliable", "Health systems opening RCM AI budgets"], existingValidation: { companies: ["Waystar", "AKASA", "Adonis"], analogues: ["RCM SaaS"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: ["needsVerification"], publicSignals: ["RCM AI Series A/B activity post-2023"] }, brutalCapitalistRead: { willingnessToPay: "very high", salesCycle: "long", buyerSophistication: "high", dataAccess: "medium", regulatoryBurden: "medium", competition: "high", defensibility: "medium", speedToRevenue: "medium", capitalIntensity: "low", smallTeamFeasibility: "high", ventureScalePotential: "high" }, uberLyftGrabLogic: { validatedBy: "RCM SaaS market", secondMoverAngle: "Specialty lines (orthopaedics, oncology) under-served", localisationOrVerticalisation: "Verticalise per specialty + payer mix", smarterExecutionVariant: "Outcome-priced per recovered dollar" }, wedge: "Win one denial-heavy specialty, then cross-sell adjacent service lines.", firstCustomer: "10-bed-to-300-bed hospitals or specialty practice groups", mvp: "Drop-in workflow alongside Epic Resolute / Cerner Patient Accounting that drafts cited appeal letters", pricingHypothesis: "% of recovered denials or per-appeal", goToMarket: "Land via revenue-cycle directors; expand via payer-mix references", whyThisCouldFail: "Incumbents bundle into RCM contracts; payer policy access can be cut off", whyThisCouldWin: "Cash-flow ROI is provable in 60-90 days", whatToAvoid: "Generic RCM platforms without specialty depth", isFeatureProductOrCompany: "company", workflowId: "wf-claims-denial-mgmt", sourceIds: ["src-hipaa"] },

  { id: "opp-medical-coding-specialty", domainId: "clinical-documentation", title: "Specialty-aware medical-coding copilot", short: "Coder-as-reviewer, AI-as-drafter for under-served specialties (orthopaedics, oncology, cardiology) with audit trail.", opportunityType: "vertical AI", status: "validated", confidence: "inferred", corePain: "Generic CAC tools miss specialty-specific procedure nuances; coders still read every chart.", buyer: "Health-system CFO", user: "Coders", budgetOwner: "Finance", urgency: "Coder shortages are structural", whyNow: "Domain LLMs + RAG over coding rulebooks make specialty-specific coding viable.", whyBeforeNowWasHard: "Pre-LLM CAC tools were rule-based and missed specialty edge cases.", notYetDoneWellBecause: ["Existing leaders won inpatient first; specialty practices are still manual"], whatChangedRecently: ["Domain-FM medical models", "Solventum spin-off opened consolidation gap"], existingValidation: { companies: ["3M / Solventum", "Iodine Software", "Microsoft / Nuance"], analogues: ["CAC tools"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["Coder labour-market tightness"] }, brutalCapitalistRead: { willingnessToPay: "high", salesCycle: "long", buyerSophistication: "high", dataAccess: "high", regulatoryBurden: "medium", competition: "high", defensibility: "medium", speedToRevenue: "slow", capitalIntensity: "low", smallTeamFeasibility: "medium", ventureScalePotential: "medium" }, uberLyftGrabLogic: { validatedBy: "3M coding category", secondMoverAngle: "Specialty depth", localisationOrVerticalisation: "Per specialty + per payer mix", smarterExecutionVariant: "Audit-first coder UX" }, wedge: "Capture two specialty practice groups; expand to system-wide", firstCustomer: "Specialty MSOs (e.g., GI, oncology, ortho)", mvp: "Coder cockpit that pre-populates ICD-10/CPT with rationale and rulebook citations", pricingHypothesis: "Per-encounter or seat", goToMarket: "Specialty MSO conferences + RCM partner channels", whyThisCouldFail: "Incumbent bundling and audit liability fears", whyThisCouldWin: "Compliance-grade audit trail beats black-box AI", whatToAvoid: "Pure auto-code without coder UX", isFeatureProductOrCompany: "company", workflowId: "wf-medical-coding", sourceIds: [] },

  { id: "opp-clinic-rcm-copilot", domainId: "clinical-medicine", title: "Specialist-clinic RCM copilot", short: "End-to-end RCM AI for 5-50 provider specialty groups: scheduling, eligibility, prior auth, coding, denials.", opportunityType: "boring cashflow", status: "underexplored", confidence: "inferred", corePain: "Independent specialty groups can't afford full RCM software stacks but lose money to admin.", buyer: "Practice owner / RCM lead", user: "Front desk + billing staff", budgetOwner: "Practice", urgency: "Owners feel margin compression directly", whyNow: "LLM agents can integrate with PMS systems via screen-scraping when APIs are absent.", whyBeforeNowWasHard: "Cost of integration exceeded ROI for small clinics.", notYetDoneWellBecause: ["Vendors target health systems"], whatChangedRecently: ["Browser-use agents make legacy PMS integrations cheaper"], existingValidation: { companies: ["Tebra", "Greenway", "Athena (large only)"], analogues: ["Verticalised RCM"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["Independent practice consolidation"] }, brutalCapitalistRead: { willingnessToPay: "high", salesCycle: "medium", buyerSophistication: "medium", dataAccess: "medium", regulatoryBurden: "medium", competition: "medium", defensibility: "medium", speedToRevenue: "medium", capitalIntensity: "low", smallTeamFeasibility: "high", ventureScalePotential: "medium" }, uberLyftGrabLogic: { validatedBy: "Independent-practice RCM SaaS", secondMoverAngle: "AI-native end-to-end vs partial point tools", localisationOrVerticalisation: "Per specialty + per PMS", smarterExecutionVariant: "Outcome-priced services" }, wedge: "Pick one specialty (derm, ortho), prove revenue lift, expand", firstCustomer: "10-25 provider specialty groups", mvp: "Agentic copilot that drives the existing PMS UI for repetitive ops", pricingHypothesis: "% of collections", goToMarket: "Specialty MSO networks", whyThisCouldFail: "PMS access policy changes; integrations become unreliable", whyThisCouldWin: "Owner-buyer pain + clear ROI", whatToAvoid: "Generic dashboards", isFeatureProductOrCompany: "company", sourceIds: ["src-hipaa"] },

  { id: "opp-broker-submission-triage", domainId: "insurance", title: "Broker submission triage for specialty insurance", short: "Read messy broker emails + ACORDs, rank submissions, pre-fill underwriting workbench.", opportunityType: "vertical AI", status: "validated", confidence: "inferred", corePain: "Specialty insurers reject most submissions but spend hours triaging each (declined-quote ratios reported above 70% in some lines).", buyer: "Chief Underwriting Officer", user: "Underwriting assistants", budgetOwner: "Underwriting", urgency: "Hard ratio pressure post-reinsurance hardening", whyNow: "LLMs are good enough at email + form extraction with citation back to source.", whyBeforeNowWasHard: "Broker-format chaos broke OCR-only systems.", notYetDoneWellBecause: ["Federato / Cytora target medium-large carriers", "MGA segment under-served"], whatChangedRecently: ["MGA proliferation", "AI-native UW workbenches"], existingValidation: { companies: ["Federato", "Cytora"], analogues: ["UW workbenches"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["Hard-market UW pressure"] }, brutalCapitalistRead: { willingnessToPay: "high", salesCycle: "long", buyerSophistication: "high", dataAccess: "high", regulatoryBurden: "medium", competition: "medium", defensibility: "medium", speedToRevenue: "medium", capitalIntensity: "low", smallTeamFeasibility: "high", ventureScalePotential: "medium" }, uberLyftGrabLogic: { validatedBy: "Cytora et al.", secondMoverAngle: "MGA / specialty focus", localisationOrVerticalisation: "Per LOB", smarterExecutionVariant: "Embedded analyst-in-the-loop pricing" }, wedge: "Win one specialty LOB at one MGA", firstCustomer: "MGAs + specialty carriers", mvp: "Email-to-workbench extractor with appetite scoring", pricingHypothesis: "Per-submission or seat", goToMarket: "Specialty broker conferences", whyThisCouldFail: "Carrier IT lock-in; mis-extraction risk", whyThisCouldWin: "Hit-ratio improvement is countable", whatToAvoid: "Generic 'AI for insurance'", isFeatureProductOrCompany: "company", sourceIds: [] },

  { id: "opp-aml-onboarding-fintech", domainId: "fraud-detection", title: "AML onboarding + EDD copilot for mid-market fintechs", short: "KYC/EDD playbook automation with citations to source documents and watchlist evidence.", opportunityType: "vertical AI", status: "underexplored", confidence: "inferred", corePain: "Onboarding analysts read 20-50 docs per high-risk file and re-do work across systems.", buyer: "Compliance lead / MLRO", user: "Onboarding analysts", budgetOwner: "Compliance", urgency: "Regulator scrutiny is rising on fintechs", whyNow: "LLM + RAG can summarise sanctions, adverse-media, beneficial-ownership chains.", whyBeforeNowWasHard: "Pre-LLM, free-text reasoning over heterogeneous documents was unreliable.", notYetDoneWellBecause: ["Incumbents focus on detection / monitoring, not onboarding"], whatChangedRecently: ["Fintech BaaS scrutiny post-2023", "Synapse-style failures"], existingValidation: { companies: ["Hummingbird", "Quantifind", "Sardine (adjacent)"], analogues: ["AML platforms"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["MLRO labour shortage"] }, brutalCapitalistRead: { willingnessToPay: "high", salesCycle: "medium", buyerSophistication: "high", dataAccess: "high", regulatoryBurden: "high", competition: "medium", defensibility: "medium", speedToRevenue: "medium", capitalIntensity: "low", smallTeamFeasibility: "high", ventureScalePotential: "medium" }, uberLyftGrabLogic: { validatedBy: "AML SaaS market", secondMoverAngle: "Onboarding-only wedge", localisationOrVerticalisation: "Jurisdictional rule packs", smarterExecutionVariant: "Audit-first design from day 1" }, wedge: "BaaS sponsor banks + neobank programmes", firstCustomer: "Series A-D fintechs / sponsor banks", mvp: "EDD-file generator with cited evidence and reviewer cockpit", pricingHypothesis: "Per-EDD + seat", goToMarket: "BaaS partner networks + compliance conferences", whyThisCouldFail: "Regulators may demand proven explainability; opaque LLMs disqualified", whyThisCouldWin: "Direct ROI on analyst time + reduced regulator findings", whatToAvoid: "End-to-end auto-decisioning", isFeatureProductOrCompany: "company", workflowId: "wf-aml-investigator", sourceIds: [] },

  { id: "opp-best-ex-evidence-tool", domainId: "trading", title: "Best-execution evidence + TCA platform for mid-market buy-side", short: "Auto-generate MiFID/best-ex evidence packs with explainable trade attribution.", opportunityType: "boring cashflow", status: "underexplored", confidence: "inferred", corePain: "Mid-tier buy-side firms lack BlackRock-grade TCA but face the same regulator expectations.", buyer: "Head of trading / Compliance", user: "Traders, compliance", budgetOwner: "Trading", urgency: "Annual regulator best-ex review pressure", whyNow: "LLM narratives + cheap compute make per-trade explanations economic.", whyBeforeNowWasHard: "TCA was either expensive or shallow.", notYetDoneWellBecause: ["Incumbents target tier-1 only"], whatChangedRecently: ["Open price data; cheap LLM text generation"], existingValidation: { companies: ["BMLL", "big.exchange (research)", "ITG / Virtu Analytics"], analogues: ["TCA platforms"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["MiFID II best-ex enforcement"] }, brutalCapitalistRead: { willingnessToPay: "high", salesCycle: "long", buyerSophistication: "high", dataAccess: "medium", regulatoryBurden: "high", competition: "medium", defensibility: "medium", speedToRevenue: "slow", capitalIntensity: "low", smallTeamFeasibility: "medium", ventureScalePotential: "medium" }, uberLyftGrabLogic: { validatedBy: "TCA market", secondMoverAngle: "Mid-tier focus", localisationOrVerticalisation: "Per-asset-class", smarterExecutionVariant: "Auto-narrated per-trade evidence" }, wedge: "One asset class for one mid-market firm; expand", firstCustomer: "Asset managers $5-50B AUM", mvp: "Per-trade evidence pack + scheduled regulator deck", pricingHypothesis: "Platform fee", goToMarket: "Industry conferences + compliance officers", whyThisCouldFail: "Vendor lock with OMS providers", whyThisCouldWin: "Compliance-budget allocations rising", whatToAvoid: "Becoming a regulator-scapegoat product", isFeatureProductOrCompany: "company", workflowId: "wf-execution-algo", sourceIds: ["src-mifid-ii-best-ex"] },

  { id: "opp-small-law-litigation-ai", domainId: "legal", title: "Litigation copilot for small + mid-market firms", short: "Discovery + chronology + brief drafting with citation verification, priced for 5-50 attorney firms.", opportunityType: "vertical AI", status: "validated", confidence: "inferred", corePain: "Small firms can't afford Harvey-grade tooling but lose cases to better-resourced opponents.", buyer: "Managing partner", user: "Litigation associates", budgetOwner: "Firm", urgency: "Client cost pressure + paralegal shortage", whyNow: "RAG + citation verification is now table-stakes; pricing has fallen.", whyBeforeNowWasHard: "Citation hallucinations and per-jurisdiction precedent.", notYetDoneWellBecause: ["Tier-1 vendors target Am Law 200"], whatChangedRecently: ["Per-jurisdiction RAG corpora available"], existingValidation: { companies: ["EvenUp", "Casetext (CoCounsel)", "Spellbook"], analogues: ["Practice-mgmt SaaS"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["Solo / small firm AI conferences"] }, brutalCapitalistRead: { willingnessToPay: "medium", salesCycle: "medium", buyerSophistication: "medium", dataAccess: "medium", regulatoryBurden: "medium", competition: "high", defensibility: "medium", speedToRevenue: "medium", capitalIntensity: "low", smallTeamFeasibility: "high", ventureScalePotential: "medium" }, uberLyftGrabLogic: { validatedBy: "EvenUp model", secondMoverAngle: "Litigation-only wedge by jurisdiction", localisationOrVerticalisation: "Per state / federal circuit", smarterExecutionVariant: "Outcome-priced demand letters" }, wedge: "Plaintiff-side personal-injury firms in 1-2 states", firstCustomer: "5-50 attorney litigation firms", mvp: "Case-chronology + demand-letter generator with bates-cited evidence", pricingHypothesis: "Seat or per-case", goToMarket: "State bar CLE channels", whyThisCouldFail: "Bar-rule changes restrict AI use", whyThisCouldWin: "Direct paralegal-cost displacement", whatToAvoid: "Generic 'legal AI'", isFeatureProductOrCompany: "company", workflowId: "wf-ediscovery", sourceIds: [] },

  { id: "opp-audit-evidence-extractor", domainId: "accounting-audit", title: "Audit-evidence extractor for mid-tier accounting firms", short: "Automate substantive testing: ingest invoices, contracts, ledgers; cross-tie evidence to PCAOB sampling plan.", opportunityType: "vertical AI", status: "underexplored", confidence: "inferred", corePain: "Mid-tier firms lose audits to Big-4 because of staffing, not insight; AI can level the field.", buyer: "Audit partner", user: "Audit seniors / staff", budgetOwner: "Firm", urgency: "Auditor shortage + PCAOB scrutiny rising", whyNow: "LLMs read messy financial documents reliably with cited evidence trails.", whyBeforeNowWasHard: "OCR-only systems missed context.", notYetDoneWellBecause: ["MindBridge / Trullion target specific niches"], whatChangedRecently: ["PCAOB audit-quality findings push automation"], existingValidation: { companies: ["MindBridge", "Trullion", "FloQast (close, not audit)"], analogues: ["Audit analytics"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["PCAOB enforcement themes"] }, brutalCapitalistRead: { willingnessToPay: "high", salesCycle: "long", buyerSophistication: "high", dataAccess: "high", regulatoryBurden: "high", competition: "medium", defensibility: "medium", speedToRevenue: "slow", capitalIntensity: "low", smallTeamFeasibility: "medium", ventureScalePotential: "medium" }, uberLyftGrabLogic: { validatedBy: "Audit-tech category", secondMoverAngle: "Mid-tier focus", localisationOrVerticalisation: "Per-industry test routines", smarterExecutionVariant: "Compliance-grade audit trail by default" }, wedge: "Substantive testing for one industry", firstCustomer: "Mid-tier firms ($10-100M revenue)", mvp: "Substantive-test workpaper generator with evidence cross-tie", pricingHypothesis: "Per-engagement or seat", goToMarket: "AICPA + state society networks", whyThisCouldFail: "Liability concerns block uptake", whyThisCouldWin: "Auditor shortage forces automation", whatToAvoid: "Replacing audit judgment", isFeatureProductOrCompany: "company", sourceIds: ["src-pcaob"] },

  { id: "opp-construction-rfi-copilot", domainId: "construction", title: "Construction RFI / submittal copilot", short: "Read drawings + specs + emails, draft RFIs / submittals with traceable evidence to plan sheets.", opportunityType: "vertical AI", status: "underexplored", confidence: "inferred", corePain: "PMs lose hours writing RFIs and submittal logs; mistakes drive change orders.", buyer: "Construction PM / VDC director", user: "Project engineers", budgetOwner: "Project", urgency: "Schedule + cost pressure", whyNow: "VLMs can interpret construction drawings and tie text to plan sheets.", whyBeforeNowWasHard: "Multi-modal drawing understanding was poor.", notYetDoneWellBecause: ["Procore / Autodesk integrate, but AI is shallow"], whatChangedRecently: ["VLM accuracy on engineering drawings"], existingValidation: { companies: ["Document Crunch", "Beam AI", "Procore Copilot"], analogues: ["Construction SaaS"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["Construction-tech AI rounds 2024-25"] }, brutalCapitalistRead: { willingnessToPay: "medium", salesCycle: "medium", buyerSophistication: "medium", dataAccess: "high", regulatoryBurden: "low", competition: "medium", defensibility: "medium", speedToRevenue: "medium", capitalIntensity: "low", smallTeamFeasibility: "high", ventureScalePotential: "medium" }, uberLyftGrabLogic: { validatedBy: "Construction PM SaaS market", secondMoverAngle: "Specialty trade focus (MEP, structural)", localisationOrVerticalisation: "Per trade", smarterExecutionVariant: "Drawing-aware deep linking" }, wedge: "Specialty trades on commercial projects", firstCustomer: "Mid-market GCs + specialty trade subs", mvp: "RFI drafter integrated to Procore / Autodesk", pricingHypothesis: "Per-project or seat", goToMarket: "ENR top-400 + specialty trade associations", whyThisCouldFail: "Procore bundles AI; trade-data fragmentation", whyThisCouldWin: "Direct schedule + change-order ROI", whatToAvoid: "Just text chatbots without drawing grounding", isFeatureProductOrCompany: "company", sourceIds: [] },

  { id: "opp-real-estate-deal-room", domainId: "enterprise-productivity", title: "AI deal room for commercial real-estate", short: "Read leases + rent rolls + market comps; produce underwriting memos with citation back to source.", opportunityType: "vertical AI", status: "underexplored", confidence: "inferred", corePain: "CRE acquisition teams spend weeks abstracting leases and modeling deals.", buyer: "CRE acquisitions head", user: "Analysts", budgetOwner: "Acquisitions", urgency: "Deal velocity in distressed markets", whyNow: "LLMs handle complex lease terms and market data with citations.", whyBeforeNowWasHard: "Lease abstracting was offshored, not automated.", notYetDoneWellBecause: ["Argus + CoStar dominate but lack AI depth"], whatChangedRecently: ["LLM accuracy on legal text", "Distressed CRE market"], existingValidation: { companies: ["Leverton (acquired)", "Lobby AI", "EliseAI (adjacent)"], analogues: ["Real-estate analytics"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["CRE distressed re-pricing"] }, brutalCapitalistRead: { willingnessToPay: "high", salesCycle: "medium", buyerSophistication: "high", dataAccess: "medium", regulatoryBurden: "low", competition: "medium", defensibility: "medium", speedToRevenue: "medium", capitalIntensity: "low", smallTeamFeasibility: "high", ventureScalePotential: "medium" }, uberLyftGrabLogic: { validatedBy: "CRE analytics market", secondMoverAngle: "Acquisition-side workflow vs leasing", localisationOrVerticalisation: "By asset class", smarterExecutionVariant: "Outcome-priced underwriting hours" }, wedge: "Multifamily acquisitions for one geography", firstCustomer: "Mid-market PE-backed CRE firms", mvp: "Lease-abstraction + underwriting-memo generator", pricingHypothesis: "Per-deal or seat", goToMarket: "CRE conferences + asset-class brokers", whyThisCouldFail: "CoStar bundling", whyThisCouldWin: "Cycle-time advantage in distressed market", whatToAvoid: "Generic 'AI for real estate'", isFeatureProductOrCompany: "company", sourceIds: [] },

  { id: "opp-soc-noise-reducer", domainId: "cybersecurity", title: "SOC alert noise reducer for mid-market", short: "Triage + correlate alerts; deflect a large share of low-risk alerts with cited reasoning, escalate the rest with a full evidence timeline.", opportunityType: "vertical AI", status: "validated", confidence: "inferred", corePain: "Mid-market SOCs drown in alerts; analyst burnout is the rate-limiter.", buyer: "CISO / Director SecOps", user: "SOC analysts", budgetOwner: "Security", urgency: "Analyst attrition + breach risk", whyNow: "LLMs reason over heterogeneous logs with traceable evidence.", whyBeforeNowWasHard: "SIEM rule engines were brittle.", notYetDoneWellBecause: ["Incumbents target Fortune 500 SOCs only"], whatChangedRecently: ["MDR market consolidation; budgets opening for AI"], existingValidation: { companies: ["Dropzone AI", "Prophet Security", "Torq", "Microsoft Security Copilot"], analogues: ["MDR / SOAR"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["SOC analyst-shortage reports"] }, brutalCapitalistRead: { willingnessToPay: "high", salesCycle: "medium", buyerSophistication: "high", dataAccess: "medium", regulatoryBurden: "medium", competition: "high", defensibility: "medium", speedToRevenue: "medium", capitalIntensity: "low", smallTeamFeasibility: "high", ventureScalePotential: "high" }, uberLyftGrabLogic: { validatedBy: "MDR / SOAR market", secondMoverAngle: "Mid-market wedge", localisationOrVerticalisation: "Per-industry detection logic", smarterExecutionVariant: "Per-deflected-alert pricing" }, wedge: "Mid-market with one SIEM stack (Splunk, Sentinel)", firstCustomer: "500-5000 employee firms with internal SOC", mvp: "Triage assistant on top of existing SIEM with full-evidence chain", pricingHypothesis: "Per-alert or seat", goToMarket: "MSP channel + CISO peer networks", whyThisCouldFail: "False-negative liability; vendor bundling", whyThisCouldWin: "Cost savings + analyst retention measurable", whatToAvoid: "Auto-remediation without human-in-the-loop", isFeatureProductOrCompany: "company", workflowId: "wf-soc-triage", sourceIds: ["src-mitre-attack"] },

  { id: "opp-vuln-research-platform", domainId: "cybersecurity", title: "AI vuln-research + autopatch platform", short: "Scan repos + binaries; find vulns with reproducible PoC; suggest patches with regression-tests.", opportunityType: "infrastructure", status: "underexplored", confidence: "needsVerification", corePain: "Vendors face SBOM + ransomware pressure; vuln research is bottlenecked by senior researchers.", buyer: "Vendor CISO / product security", user: "Security engineers", budgetOwner: "Security R&amp;D", urgency: "Disclosure timing + customer SLA pressure", whyNow: "Code-aware LLMs and agentic fuzzing approach human-bug-finder quality on simple bugs.", whyBeforeNowWasHard: "Path explosion + non-reproducibility.", notYetDoneWellBecause: ["Most products focus on SAST detection, not patch + reproduce"], whatChangedRecently: ["Agentic fuzz + LLM-assisted exploitation reaching parity on benchmarks"], existingValidation: { companies: ["ZeroPath", "Snyk Code", "GitHub Advanced Security"], analogues: ["SAST vendors"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["DARPA AIxCC publicity"] }, brutalCapitalistRead: { willingnessToPay: "high", salesCycle: "long", buyerSophistication: "high", dataAccess: "medium", regulatoryBurden: "medium", competition: "high", defensibility: "medium", speedToRevenue: "slow", capitalIntensity: "medium", smallTeamFeasibility: "medium", ventureScalePotential: "high" }, uberLyftGrabLogic: { validatedBy: "SAST market", secondMoverAngle: "End-to-end PoC + patch", localisationOrVerticalisation: "Per stack", smarterExecutionVariant: "Pay-per-found-vuln" }, wedge: "Open-source projects with bounty programmes; expand to vendor security teams", firstCustomer: "ISVs with paid bug bounty programmes", mvp: "Repo scanner that opens reproducible PoC + patch PR", pricingHypothesis: "Per-finding + seat", goToMarket: "Bug-bounty platform + ISV CISO outreach", whyThisCouldFail: "False-positive overload", whyThisCouldWin: "Time-to-patch is a board-level metric", whatToAvoid: "Building offensive-only tools", isFeatureProductOrCompany: "company", workflowId: "wf-vuln-discovery", sourceIds: ["src-darpa-aixcc", "src-mitre-attack", "src-nvd-cve"] },

  { id: "opp-mfg-qa-vision", domainId: "manufacturing", title: "Vision QA per discrete-mfg line", short: "Camera + edge + few-shot vision QA tuned to one part family; deploy in days, not months.", opportunityType: "boring cashflow", status: "validated", confidence: "inferred", corePain: "Defect detection is set-up-cost-bound; per-line classical CV projects underwhelm.", buyer: "Plant manager / Quality director", user: "Line operators + QC", budgetOwner: "Operations", urgency: "Customer reject rates + warranty claims", whyNow: "Vision FMs need 10-100 samples for new part families instead of 10K.", whyBeforeNowWasHard: "Each part family needed a custom dataset.", notYetDoneWellBecause: ["Incumbents target large OEMs"], whatChangedRecently: ["Vision FMs + edge accelerators"], existingValidation: { companies: ["Landing AI", "Cognex (incumbent)", "Augmentir"], analogues: ["Vision-system vendors"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["Reshoring + Industry 4.0 budgets"] }, brutalCapitalistRead: { willingnessToPay: "high", salesCycle: "medium", buyerSophistication: "medium", dataAccess: "high", regulatoryBurden: "low", competition: "medium", defensibility: "medium", speedToRevenue: "medium", capitalIntensity: "medium", smallTeamFeasibility: "medium", ventureScalePotential: "medium" }, uberLyftGrabLogic: { validatedBy: "Cognex era", secondMoverAngle: "Few-shot vs custom datasets", localisationOrVerticalisation: "Per part family", smarterExecutionVariant: "Service-priced per defect caught" }, wedge: "Tier-2 / Tier-3 automotive suppliers", firstCustomer: "Mid-market discrete manufacturers", mvp: "Plug-and-play camera + edge box + cloud trainer for one part family", pricingHypothesis: "Per-line monthly + setup", goToMarket: "Industry 4.0 expos + system integrators", whyThisCouldFail: "Cognex retrofits AI; integrators bundle", whyThisCouldWin: "Time-to-deploy advantage", whatToAvoid: "Generic 'vision AI for factories'", isFeatureProductOrCompany: "company", workflowId: "wf-mfg-defect-detection", sourceIds: [] },

  { id: "opp-logistics-dispatch-copilot", domainId: "supply-chain", title: "Logistics dispatcher copilot", short: "AI assistant for last-mile + middle-mile dispatch: load-tendering, exception handling, customer comms.", opportunityType: "boring cashflow", status: "validated", confidence: "inferred", corePain: "Dispatchers handle 30-50 calls per shift on exceptions; throughput-limited by humans.", buyer: "VP Operations / Dispatch manager", user: "Dispatchers", budgetOwner: "Operations", urgency: "Driver shortage + freight margin pressure", whyNow: "LLMs handle messy unstructured comms; tool agents update TMS.", whyBeforeNowWasHard: "TMS systems were brittle.", notYetDoneWellBecause: ["Big TMS vendors haven't shipped agentic UX"], whatChangedRecently: ["Voice-AI + agent stack maturity"], existingValidation: { companies: ["FreightWaves AI", "Optimal Dynamics", "HappyRobot (voice for freight)"], analogues: ["TMS"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["Trucking AI funding"] }, brutalCapitalistRead: { willingnessToPay: "medium", salesCycle: "medium", buyerSophistication: "medium", dataAccess: "high", regulatoryBurden: "low", competition: "high", defensibility: "medium", speedToRevenue: "medium", capitalIntensity: "low", smallTeamFeasibility: "high", ventureScalePotential: "medium" }, uberLyftGrabLogic: { validatedBy: "TMS + brokerage", secondMoverAngle: "Agentic vs UI-only", localisationOrVerticalisation: "Per mode (LTL, FTL, last mile)", smarterExecutionVariant: "Per-ton-mile pricing" }, wedge: "Mid-market LTL or 3PL", firstCustomer: "Brokers + 3PLs", mvp: "Voice + chat copilot with TMS write-back", pricingHypothesis: "Seat or per-load", goToMarket: "Freight broker conferences", whyThisCouldFail: "Driver-side resistance + telecom integration", whyThisCouldWin: "Direct dispatcher productivity ROI", whatToAvoid: "Replacing dispatchers", isFeatureProductOrCompany: "company", sourceIds: [] },

  { id: "opp-call-center-vertical-coach", domainId: "customer-support", title: "Vertical contact-center coaching platform", short: "ASR + LLM coaching for compliance-heavy contact centres (insurance, healthcare, debt collection).", opportunityType: "vertical AI", status: "validated", confidence: "inferred", corePain: "Mid-tier contact centres need compliance-aware coaching but tools are tier-1 priced.", buyer: "VP CX / Operations", user: "Agents + supervisors", budgetOwner: "Operations", urgency: "Regulatory fines + churn", whyNow: "ASR cost dropped; LLMs do compliance-aware tagging well.", whyBeforeNowWasHard: "Speech analytics was rule-based and shallow.", notYetDoneWellBecause: ["Incumbents target enterprise"], whatChangedRecently: ["Whisper-class ASR + cheap LLMs"], existingValidation: { companies: ["NICE inContact (incumbent)", "Observe.AI", "Level AI"], analogues: ["Speech analytics"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["CFPB fines on debt collection"] }, brutalCapitalistRead: { willingnessToPay: "medium", salesCycle: "medium", buyerSophistication: "medium", dataAccess: "high", regulatoryBurden: "high", competition: "high", defensibility: "medium", speedToRevenue: "medium", capitalIntensity: "low", smallTeamFeasibility: "high", ventureScalePotential: "medium" }, uberLyftGrabLogic: { validatedBy: "Speech-analytics market", secondMoverAngle: "Compliance-vertical wedge", localisationOrVerticalisation: "Per regulated vertical", smarterExecutionVariant: "Outcome-priced compliance fines avoided" }, wedge: "Debt-collection + insurance call centres", firstCustomer: "Mid-tier BPOs + in-house centres", mvp: "Real-time agent assist + supervisor dashboard with regulator-ready evidence", pricingHypothesis: "Seat + compliance pack", goToMarket: "BPO conferences + risk-officer outreach", whyThisCouldFail: "Voice-first agents (e.g., AI representatives) eat into demand", whyThisCouldWin: "Compliance-as-a-feature", whatToAvoid: "Generic CX SaaS", isFeatureProductOrCompany: "company", workflowId: "wf-customer-support-automation", sourceIds: [] },

  { id: "opp-test-gen-vertical", domainId: "software-engineering", title: "Test-generation for legacy stacks", short: "Auto-generate tests + repro for legacy languages (COBOL, Java EE, .NET Framework) ahead of migration.", opportunityType: "second-mover", status: "underexplored", confidence: "inferred", corePain: "Enterprises can't modernise legacy code without test coverage that doesn't exist.", buyer: "VP Engineering / CIO", user: "Engineers", budgetOwner: "Engineering", urgency: "Mainframe modernisation initiatives", whyNow: "LLMs handle older languages well enough with retrieval over docs.", whyBeforeNowWasHard: "Tooling targeted modern languages only.", notYetDoneWellBecause: ["Diffblue / Codium target current stacks"], whatChangedRecently: ["Mainframe modernisation budget cycles"], existingValidation: { companies: ["Diffblue", "Codium / Qodo", "TIQQE (consulting)"], analogues: ["Test gen"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["Mainframe modernisation deals"] }, brutalCapitalistRead: { willingnessToPay: "high", salesCycle: "long", buyerSophistication: "high", dataAccess: "medium", regulatoryBurden: "low", competition: "low", defensibility: "medium", speedToRevenue: "slow", capitalIntensity: "low", smallTeamFeasibility: "medium", ventureScalePotential: "medium" }, uberLyftGrabLogic: { validatedBy: "Mainframe SaaS", secondMoverAngle: "Legacy language depth", localisationOrVerticalisation: "Per stack", smarterExecutionVariant: "Coupled to migration consulting" }, wedge: "Insurance + banking COBOL estates", firstCustomer: "Banks, insurers, government", mvp: "Coverage + repro + test generator for one legacy stack", pricingHypothesis: "Project-priced or seat", goToMarket: "SI partnerships", whyThisCouldFail: "SI bundling", whyThisCouldWin: "Genuine cycle-time win on migration", whatToAvoid: "Yet another modern-language test bot", isFeatureProductOrCompany: "company", sourceIds: [] },

  { id: "opp-edu-tutor-vertical", domainId: "education", title: "Curriculum-anchored AI tutor for K-12 districts", short: "Tutor anchored to district-approved curriculum, with teacher-supervised remediation paths.", opportunityType: "vertical AI", status: "underexplored", confidence: "needsVerification", corePain: "Districts buy curriculum and tutoring separately; AI is pulling them together.", buyer: "District curriculum director", user: "Teachers + students", budgetOwner: "District", urgency: "Post-pandemic learning loss + Title funds", whyNow: "RAG over curriculum + state standards is reliable; voice is good enough.", whyBeforeNowWasHard: "Tutors couldn't be aligned to local curriculum.", notYetDoneWellBecause: ["Khanmigo + MagicSchool target nationwide; district customisation is rare"], whatChangedRecently: ["State AI policies + voice-AI maturity"], existingValidation: { companies: ["Khan Academy / Khanmigo", "MagicSchool", "Eedi (UK)"], analogues: ["EdTech SaaS"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: ["Squirrel AI (claims)"], publicSignals: ["State ESSER spending"] }, brutalCapitalistRead: { willingnessToPay: "low", salesCycle: "very long", buyerSophistication: "medium", dataAccess: "medium", regulatoryBurden: "medium", competition: "high", defensibility: "low", speedToRevenue: "slow", capitalIntensity: "low", smallTeamFeasibility: "medium", ventureScalePotential: "medium" }, uberLyftGrabLogic: { validatedBy: "EdTech", secondMoverAngle: "District-level customisation", localisationOrVerticalisation: "Per state standards", smarterExecutionVariant: "Outcome-priced on assessment lift" }, wedge: "One state + one curriculum vendor", firstCustomer: "Mid-size districts (5-50K students)", mvp: "Curriculum-anchored tutor + teacher dashboard with safety guardrails", pricingHypothesis: "Per-student annual", goToMarket: "ESSER spending windows + state RFPs", whyThisCouldFail: "Procurement cycles + measurement difficulty", whyThisCouldWin: "Title-funds buyer alignment", whatToAvoid: "Generic chatbot tutors", isFeatureProductOrCompany: "company", workflowId: "wf-ai-tutoring", sourceIds: ["src-eu-ai-act"] },

  { id: "opp-sci-elN-ai", domainId: "research-workflows", title: "Lab-notebook AI for life sciences", short: "Read protocols + lab data + literature; suggest next experiment with cited reasoning.", opportunityType: "research-frontier", status: "underexplored", confidence: "forwardLooking", corePain: "Researchers re-do experiments, miss prior art, and lose context across grants.", buyer: "Lab PI / R&amp;D director", user: "Researchers", budgetOwner: "Lab grant", urgency: "Throughput + reproducibility pressure", whyNow: "Domain-FM in bio + structured ELN data accessible.", whyBeforeNowWasHard: "ELN data was siloed; ML models couldn't read protocols.", notYetDoneWellBecause: ["Benchling integrates AI but shallow"], whatChangedRecently: ["Domain-FMs in bio"], existingValidation: { companies: ["Benchling", "Sapio Sciences", "AmplifyBio"], analogues: ["ELN"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["Self-driving lab DARPA programmes"] }, brutalCapitalistRead: { willingnessToPay: "medium", salesCycle: "long", buyerSophistication: "high", dataAccess: "medium", regulatoryBurden: "medium", competition: "medium", defensibility: "high", speedToRevenue: "slow", capitalIntensity: "medium", smallTeamFeasibility: "medium", ventureScalePotential: "medium" }, uberLyftGrabLogic: { validatedBy: "ELN market", secondMoverAngle: "AI-native ELN", localisationOrVerticalisation: "Per modality (cell, protein, small molecule)", smarterExecutionVariant: "Charge per insight or per-time saved" }, wedge: "Industrial bio + biotech R&amp;D", firstCustomer: "Industrial bio + small biotechs", mvp: "ELN companion that suggests next experiment with citations", pricingHypothesis: "Seat + data-platform fee", goToMarket: "Bio conferences + R&amp;D heads", whyThisCouldFail: "Benchling owns workflow", whyThisCouldWin: "Real reproducibility + insight ROI", whatToAvoid: "Generic 'AI for science'", isFeatureProductOrCompany: "company", sourceIds: ["needs-verification"] },

  { id: "opp-government-foia", domainId: "government-services", title: "FOIA / records redaction copilot", short: "Read large records corpora; redact PII / privileged content with audit trail; deliver in days not months.", opportunityType: "vertical AI", status: "underexplored", confidence: "inferred", corePain: "Agencies face record-request backlogs measured in years.", buyer: "Agency FOIA officer", user: "Records staff", budgetOwner: "Agency", urgency: "Statutory response timelines + court orders", whyNow: "LLMs redact reliably with reviewer cockpit.", whyBeforeNowWasHard: "Rule-based redaction missed context.", notYetDoneWellBecause: ["FedTech is slow; AI vendors avoid agencies"], whatChangedRecently: ["FedRAMP-compatible LLM offerings"], existingValidation: { companies: ["Casepoint", "Veritone Public Sector", "Palantir Foundry"], analogues: ["E-discovery for government"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["Federal AI plans + state RFPs"] }, brutalCapitalistRead: { willingnessToPay: "high", salesCycle: "very long", buyerSophistication: "medium", dataAccess: "medium", regulatoryBurden: "high", competition: "low", defensibility: "high", speedToRevenue: "slow", capitalIntensity: "medium", smallTeamFeasibility: "medium", ventureScalePotential: "medium" }, uberLyftGrabLogic: { validatedBy: "GovTech + e-discovery", secondMoverAngle: "AI-native + FedRAMP", localisationOrVerticalisation: "Per agency", smarterExecutionVariant: "Compliance-grade default" }, wedge: "State AGs + federal agencies with backlog", firstCustomer: "State + federal records offices", mvp: "Redaction + audit-trail tool integrated to records-management systems", pricingHypothesis: "Per-page or contract", goToMarket: "Federal SI partnerships + State CIO networks", whyThisCouldFail: "Procurement cycles", whyThisCouldWin: "Court-order pressure forces adoption", whatToAvoid: "Generic AI marketed at govt", isFeatureProductOrCompany: "company", sourceIds: ["src-fedramp"] },

  { id: "opp-eval-vertical-platform", domainId: "research-workflows", title: "Vertical eval-as-a-product platform", short: "Per-domain eval suites + LLM-as-judge calibration sold to AI product teams in regulated verticals.", opportunityType: "infrastructure", status: "underexplored", confidence: "inferred", corePain: "Every vertical AI startup builds the same broken eval harness from scratch.", buyer: "AI product lead", user: "ML engineers", budgetOwner: "Eng / Product", urgency: "Eval debt is the silent killer of AI products", whyNow: "LLM-as-judge has matured; gold-set authoring is cheap.", whyBeforeNowWasHard: "No precedent for eval-as-a-product.", notYetDoneWellBecause: ["Braintrust + Galileo target horizontal teams"], whatChangedRecently: ["Vertical AI startups need regulator-grade evals"], existingValidation: { companies: ["Braintrust", "Galileo", "Arize AI", "LangSmith"], analogues: ["Observability"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["Eval debt growing as AI product count grows"] }, brutalCapitalistRead: { willingnessToPay: "medium", salesCycle: "medium", buyerSophistication: "high", dataAccess: "medium", regulatoryBurden: "medium", competition: "high", defensibility: "medium", speedToRevenue: "medium", capitalIntensity: "low", smallTeamFeasibility: "high", ventureScalePotential: "medium" }, uberLyftGrabLogic: { validatedBy: "Observability category", secondMoverAngle: "Vertical depth + gold sets", localisationOrVerticalisation: "Per vertical", smarterExecutionVariant: "Pre-built domain gold sets" }, wedge: "Pick one vertical (legal AI, clinical AI), become standard", firstCustomer: "Vertical AI startups + enterprise AI teams", mvp: "Vertical eval pack + judge calibration + dashboards", pricingHypothesis: "Seat + per-eval-run", goToMarket: "Conferences + vertical AI Slack networks", whyThisCouldFail: "Horizontal vendors release vertical templates", whyThisCouldWin: "Domain quality is the moat", whatToAvoid: "Becoming a thin wrapper on LangSmith", isFeatureProductOrCompany: "product", sourceIds: ["src-mmlu", "src-mteb"] },

  { id: "opp-trust-layer-vertical-llm", domainId: "enterprise-productivity", title: "Trust + governance layer for vertical AI", short: "Permissioning + audit + redaction + policy gates as a vendor-neutral middle layer for regulated AI products.", opportunityType: "infrastructure", status: "underexplored", confidence: "inferred", corePain: "Every AI vendor re-implements permissions, audit, redaction; buyers have no horizontal control plane.", buyer: "CIO / CISO / Compliance", user: "AI admins", budgetOwner: "IT", urgency: "Regulator scrutiny + customer audits", whyNow: "Buyers want a control plane; AI vendors want a partnership rather than building it.", whyBeforeNowWasHard: "Standards weren't there; surface area too large.", notYetDoneWellBecause: ["DSPM and DLP vendors haven't shipped AI-aware control planes"], whatChangedRecently: ["NIST AI RMF + EU AI Act push"], existingValidation: { companies: ["Cyera (DSPM)", "Securiti", "Cranium"], analogues: ["DLP / DSPM"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["EU AI Act timing"] }, brutalCapitalistRead: { willingnessToPay: "high", salesCycle: "long", buyerSophistication: "high", dataAccess: "medium", regulatoryBurden: "high", competition: "medium", defensibility: "high", speedToRevenue: "slow", capitalIntensity: "medium", smallTeamFeasibility: "medium", ventureScalePotential: "high" }, uberLyftGrabLogic: { validatedBy: "DSPM + IAM markets", secondMoverAngle: "AI-native control plane", localisationOrVerticalisation: "Per regulated industry", smarterExecutionVariant: "Bundled audit packs" }, wedge: "Regulated buyers using 5+ AI vendors", firstCustomer: "F500 with mature AI-portfolio governance need", mvp: "Vendor-neutral control plane with audit + redaction APIs", pricingHypothesis: "Platform fee + per-vendor", goToMarket: "CISO + Chief AI Officer outreach", whyThisCouldFail: "Hyperscaler bundles", whyThisCouldWin: "Buyers hate vendor lock-in for governance", whatToAvoid: "Becoming a feature of one AI vendor", isFeatureProductOrCompany: "company", sourceIds: ["src-eu-ai-act", "src-nist-ai-rmf"] },

  { id: "opp-rwd-trial-design", domainId: "drug-discovery", title: "Real-world-data trial design copilot", short: "Use EHR + claims data + literature to design trials with realistic enrolment + endpoint feasibility.", opportunityType: "research-frontier", status: "research-dependent", confidence: "needsVerification", corePain: "Trials fail enrolment or pick infeasible endpoints; current tools are siloed.", buyer: "Sponsor / CRO biostatistician", user: "Trial designers", budgetOwner: "Clinical operations", urgency: "Trial cost + timing pressure", whyNow: "RWD platforms + LLMs can simulate enrolment and feasibility.", whyBeforeNowWasHard: "RWD was inaccessible.", notYetDoneWellBecause: ["TriNetX + Aetion focus on RWD; AI-native trial design is new"], whatChangedRecently: ["FDA RWE guidance + tokenised claims data"], existingValidation: { companies: ["TriNetX", "Aetion", "Saama"], analogues: ["RWD platforms"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["RWE guidance documents"] }, brutalCapitalistRead: { willingnessToPay: "high", salesCycle: "very long", buyerSophistication: "high", dataAccess: "high", regulatoryBurden: "high", competition: "medium", defensibility: "medium", speedToRevenue: "slow", capitalIntensity: "medium", smallTeamFeasibility: "medium", ventureScalePotential: "high" }, uberLyftGrabLogic: { validatedBy: "TriNetX scale", secondMoverAngle: "AI-native trial design", localisationOrVerticalisation: "Per therapeutic area", smarterExecutionVariant: "Outcome-tied to enrolment" }, wedge: "Single therapeutic area at a mid-size sponsor", firstCustomer: "Mid-size pharma + biotechs", mvp: "Trial-design copilot using one disease area", pricingHypothesis: "Per-trial fee", goToMarket: "Biostatistician + clinical-operations conferences", whyThisCouldFail: "Data access policies tighten", whyThisCouldWin: "Enrolment savings are huge", whatToAvoid: "Auto-generating protocols without expert review", isFeatureProductOrCompany: "product", workflowId: "wf-clinical-trial-matching", sourceIds: ["needs-verification"] },


  { id: "opp-ag-vision-yield", domainId: "agriculture", title: "Crop yield + disease forecasting per region", short: "Satellite + drone vision + weather to forecast yield + disease at field-level for ag insurers + advisors.", opportunityType: "second-mover", status: "underexplored", confidence: "inferred", corePain: "Insurers and advisors lack high-resolution yield + disease forecasts at the right cadence.", buyer: "Ag insurer / cooperative", user: "Agronomists, claims adjusters", budgetOwner: "Insurance / agribusiness", urgency: "Climate volatility raising claim variance", whyNow: "Cheap satellite revisit + accurate vision FMs.", whyBeforeNowWasHard: "Image cadence cost + crop-vision specialisation.", notYetDoneWellBecause: ["Climate Corp targets large players"], whatChangedRecently: ["Planet + commercial smallsats; vision FMs"], existingValidation: { companies: ["Climate Corp / Bayer", "Indigo Ag", "Atlas AI"], analogues: ["Ag analytics"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["Crop-insurance loss ratios"] }, brutalCapitalistRead: { willingnessToPay: "medium", salesCycle: "medium", buyerSophistication: "medium", dataAccess: "high", regulatoryBurden: "low", competition: "medium", defensibility: "medium", speedToRevenue: "medium", capitalIntensity: "medium", smallTeamFeasibility: "medium", ventureScalePotential: "medium" }, uberLyftGrabLogic: { validatedBy: "Ag-tech market", secondMoverAngle: "Region + crop specialisation", localisationOrVerticalisation: "Per crop region", smarterExecutionVariant: "Outcome-priced per-claim" }, wedge: "One crop in one region", firstCustomer: "Mid-tier ag insurers + cooperatives", mvp: "Forecast service for one crop with drone + satellite hybrid", pricingHypothesis: "Per-acre or per-claim", goToMarket: "Insurance + cooperative networks", whyThisCouldFail: "Climate Corp bundling", whyThisCouldWin: "Region-specific accuracy", whatToAvoid: "Generic 'ag AI'", isFeatureProductOrCompany: "company", sourceIds: [] },

  { id: "opp-recruit-ranking-explainable", domainId: "hr-recruiting", title: "Explainable candidate ranking for regulated hiring", short: "AI ranking with NYC AEDT-style audit + four-fifths monitoring built in; sold to HR teams in regulated geos.", opportunityType: "compliance", status: "underexplored", confidence: "needsVerification", corePain: "Existing AI ranking tools fail under audit; HR teams need defensible ranking.", buyer: "VP Talent / Compliance", user: "Recruiters", budgetOwner: "HR", urgency: "NYC AEDT + EU AI Act + state laws", whyNow: "Regulated buyers can't use uncalibrated AI.", whyBeforeNowWasHard: "AI ranking + bias audit was a research, not product, problem.", notYetDoneWellBecause: ["Eightfold + HireVue face scrutiny"], whatChangedRecently: ["State AI hiring laws"], existingValidation: { companies: ["Eightfold", "HireVue", "Workday"], analogues: ["HR-tech"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["NYC AEDT enforcement"] }, brutalCapitalistRead: { willingnessToPay: "high", salesCycle: "long", buyerSophistication: "high", dataAccess: "medium", regulatoryBurden: "high", competition: "medium", defensibility: "high", speedToRevenue: "slow", capitalIntensity: "low", smallTeamFeasibility: "medium", ventureScalePotential: "medium" }, uberLyftGrabLogic: { validatedBy: "HR-tech market", secondMoverAngle: "Compliance-first design", localisationOrVerticalisation: "Per jurisdiction", smarterExecutionVariant: "Audit packs as product" }, wedge: "Multi-state employers under AEDT", firstCustomer: "F500 with NYC offices", mvp: "Audit-grade ranking SaaS with monitoring", pricingHypothesis: "Per-hire or seat", goToMarket: "HR compliance conferences", whyThisCouldFail: "Workday bundles audit packs", whyThisCouldWin: "Tier-1 HR vendors are too slow on compliance", whatToAvoid: "Black-box rankings", isFeatureProductOrCompany: "company", workflowId: "wf-hr-screening", sourceIds: ["src-nyc-aedt", "src-eu-ai-act"] },


  { id: "opp-bio-eval-interp", domainId: "drug-discovery", title: "Generative-bio interpretability + eval", short: "Interpret protein / molecule generative model outputs with experimental confidence scores tied to wet-lab data.", opportunityType: "research-frontier", status: "research-dependent", confidence: "forwardLooking", corePain: "Drug-design teams accept or reject generative-model outputs without calibrated confidence.", buyer: "Computational chemistry head", user: "Computational scientists", budgetOwner: "R&amp;D", urgency: "Pre-clinical attrition + cost pressure", whyNow: "Wet-lab feedback loops are now machine-readable.", whyBeforeNowWasHard: "Bio data was sparse + idiosyncratic.", notYetDoneWellBecause: ["Generate Biomedicines + Cradle build internally; no horizontal product yet"], whatChangedRecently: ["Public protein-FMs + open lab data"], existingValidation: { companies: ["Generate Biomedicines (internal)", "Cradle (proprietary)", "Iambic Therapeutics"], analogues: ["Computational chemistry tooling"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["Bio-AI startup wave"] }, brutalCapitalistRead: { willingnessToPay: "high", salesCycle: "long", buyerSophistication: "high", dataAccess: "medium", regulatoryBurden: "medium", competition: "low", defensibility: "high", speedToRevenue: "slow", capitalIntensity: "medium", smallTeamFeasibility: "medium", ventureScalePotential: "high" }, uberLyftGrabLogic: { validatedBy: "AlphaFold-era tooling", secondMoverAngle: "Horizontal interpretability", localisationOrVerticalisation: "Per modality", smarterExecutionVariant: "Pay per eval batch" }, wedge: "Mid-size biotechs without in-house ML", firstCustomer: "Mid-size biotechs + CROs", mvp: "Interpretability + confidence scoring service for top open models", pricingHypothesis: "Per-batch + platform", goToMarket: "Computational chemistry conferences", whyThisCouldFail: "Customers expect this for free from model providers", whyThisCouldWin: "Wet-lab feedback creates a moat", whatToAvoid: "Generic 'AI for bio'", isFeatureProductOrCompany: "product", workflowId: "wf-virtual-screening", sourceIds: ["needs-verification"] },

  { id: "opp-fleet-ev-optim", domainId: "supply-chain", title: "Commercial EV fleet optimisation", short: "Routing + charging scheduling + demand-response for commercial EV fleets with grid integration.", opportunityType: "second-mover", status: "underexplored", confidence: "inferred", corePain: "Commercial EV fleets lose money to bad charging schedules and route choices.", buyer: "Fleet ops head", user: "Dispatchers, drivers", budgetOwner: "Operations", urgency: "Diesel cost + emission regs", whyNow: "Grid pricing + EV telematics now real-time.", whyBeforeNowWasHard: "Telemetry was poor.", notYetDoneWellBecause: ["Telematics vendors don't optimise for charging"], whatChangedRecently: ["EV truck deployment + grid TOU pricing"], existingValidation: { companies: ["Geotab", "Samsara", "Voltera"], analogues: ["Telematics"], ycCompanies: ["needsVerification"], a16zRelevantTheses: ["needsVerification"], chinaAnalogues: [], publicSignals: ["State diesel-truck phase-out laws"] }, brutalCapitalistRead: { willingnessToPay: "high", salesCycle: "medium", buyerSophistication: "medium", dataAccess: "medium", regulatoryBurden: "medium", competition: "medium", defensibility: "medium", speedToRevenue: "medium", capitalIntensity: "medium", smallTeamFeasibility: "medium", ventureScalePotential: "medium" }, uberLyftGrabLogic: { validatedBy: "Telematics", secondMoverAngle: "EV-native + grid integration", localisationOrVerticalisation: "Per region's grid pricing", smarterExecutionVariant: "Charge for energy savings" }, wedge: "Last-mile delivery fleets", firstCustomer: "Mid-market last-mile + fleet operators", mvp: "Routing + charging optimiser tied to telematics", pricingHypothesis: "Per-vehicle monthly", goToMarket: "Fleet partnerships", whyThisCouldFail: "Samsara bundles", whyThisCouldWin: "Direct savings", whatToAvoid: "Generic fleet management", isFeatureProductOrCompany: "company", sourceIds: [] },


];

/* ============================================
   BOTTLENECK_DOSSIERS — Detailed per-domain bottleneck intel
   ============================================
   Each dossier teaches a bottleneck: what it is, why it persists,
   who it hurts, who is solving it and what would break it open.
   ============================================ */
var BOTTLENECK_DOSSIERS = [
  { id: "bn-clinical-validation", domainId: "clinical-medicine", title: "Clinical validation across sites and populations", bottleneckType: "evaluation", severity: "critical", maturityImpact: "Blocks production", confidence: "sourced", explanation: "A model that performs well on its training cohort can degrade silently on a different scanner, demographic, or workflow. Buyers need evidence beyond AUROC.", whyItExists: ["Hospitals differ in scanners, demographics and prevalence", "Most studies are single-centre retrospective", "Distribution shift is the rule"], evidence: ["FDA SaMD guidance on real-world performance monitoring"], sourceIds: ["src-fda-samd", "src-radiology-fda-list", "src-lstm-sepsis-wong"], affectedUseCases: ["uc-radiology-report-assist", "uc-pathology-biomarker"], affectedArchitectures: ["cnn", "vit", "domain-fm"], affectedCompanies: ["Aidoc", "Viz.ai", "Paige", "PathAI"], firstOrderEffects: ["Slow procurement; pilot-to-production gap"], secondOrderEffects: ["Vendor consolidation around buyers who can show multi-site evidence"], whoIsTryingToSolveIt: ["FDA real-world monitoring", "Multi-site research consortia", "Vendors with site-specific fine-tuning"], whatWouldBreakItOpen: ["Continuous-learning regulatory pathways", "Federated evaluation infrastructure"], whatStillDoesNotWork: ["Most public benchmarks are single-centre"], founderOpportunity: "Federated evaluation + site-specific monitoring infrastructure for medical AI.", investorSignal: "Companies with proactive multi-site validation are more durable than single-cohort AUROC stories.", interviewQuestion: "What does it actually take to validate a clinical AI model across 50 hospitals on three continents?" },
  { id: "bn-ehr-workflow", domainId: "clinical-medicine", title: "EHR workflow integration", bottleneckType: "workflow", severity: "high", maturityImpact: "slows adoption", confidence: "inferred", explanation: "Clinical AI lives or dies inside Epic / Cerner workflows. Even excellent models fail if they require context-switching.", whyItExists: ["EHR APIs are limited and vendor-specific", "Hospital IT cycles are slow"], evidence: ["Ambient-scribe vendors highlight Epic / Cerner integration as their primary moat"], sourceIds: ["needs-verification"], affectedUseCases: ["uc-clinical-scribe", "uc-radiology-report-assist"], affectedArchitectures: ["domain-fm", "rag", "asr-tts"], affectedCompanies: ["Abridge", "Microsoft / Nuance", "Augmedix"], firstOrderEffects: ["Long sales cycles", "Vendor preference for EHR-blessed partners"], secondOrderEffects: ["Epic / Cerner partnerships becoming gating", "Health systems consolidating AI under EHR vendor"], whoIsTryingToSolveIt: ["EHR vendors (Epic GPT, Cerner AI)", "FHIR + SMART community"], whatWouldBreakItOpen: ["EHR AI marketplaces with clear pricing", "Mature FHIR R5 deployments"], whatStillDoesNotWork: ["Cross-encounter context awareness"], founderOpportunity: "EHR-integration middleware that sits between LLMs and Epic / Cerner.", investorSignal: "Workflow integration depth is a more durable moat than model quality in clinical AI.", interviewQuestion: "Can a clinical AI startup win without an Epic preferred-partner status?" },
  { id: "bn-medical-liability", domainId: "clinical-medicine", title: "Medical liability and accountability", bottleneckType: "liability", severity: "critical", maturityImpact: "Blocks production", confidence: "marketContext", explanation: "When AI errs in clinical decisions, who is liable: vendor, hospital, clinician? Without clarity, autonomous decision-making cannot scale.", whyItExists: ["Tort law treats clinicians as accountable", "Vendors limit indemnification"], evidence: ["AMA / specialty societies publishing AI guidance"], sourceIds: ["src-fda-samd", "src-radiology-fda-list"], affectedUseCases: ["uc-radiology-report-assist", "uc-pathology-biomarker"], affectedArchitectures: ["domain-fm"], affectedCompanies: ["all clinical-AI vendors"], firstOrderEffects: ["AI confined to assistive role"], secondOrderEffects: ["Liability-insurance products tailored to AI"], whoIsTryingToSolveIt: ["Specialty societies", "Insurers", "Regulators iterating on SaMD"], whatWouldBreakItOpen: ["Federal AI liability framework"], whatStillDoesNotWork: ["No clear precedent for autonomous diagnostic AI liability"], founderOpportunity: "Liability-insurance products and AI compliance attestation tooling.", investorSignal: "Clinical AI vendors that pre-build evidence packs are more durable.", interviewQuestion: "What single legal change would most accelerate autonomous clinical AI?" },
  { id: "bn-wet-lab", domainId: "drug-discovery", title: "Wet-lab validation throughput", bottleneckType: "physical validation", severity: "critical", maturityImpact: "Blocks production", confidence: "marketContext", explanation: "AI proposes thousands of candidates faster than the lab can confirm any of them. The lab is the loss function.", whyItExists: ["Synthesis is hard", "Assays are expensive", "Biology is high-variance"], evidence: ["RFdiffusion / ProteinMPNN papers report explicit wet-lab confirmation rates"], sourceIds: ["paper-rfdiffusion", "paper-proteinmpnn"], affectedUseCases: ["uc-drug-virtual-screen", "uc-protein-binder"], affectedArchitectures: ["diffusion-bio", "protein-lm", "molecular-gnn"], affectedCompanies: ["Isomorphic Labs", "Generate Biomedicines", "Recursion"], firstOrderEffects: ["Long timelines from in-silico hit to assay confirmation"], secondOrderEffects: ["Vendors with in-house labs gain a structural edge"], whoIsTryingToSolveIt: ["Strateos, Emerald Cloud Lab", "Cradle, Genesis"], whatWouldBreakItOpen: ["Cheaper combinatorial chemistry; modular synthesis"], whatStillDoesNotWork: ["Robust translation from in-silico hits to clinical candidates"], founderOpportunity: "Lab automation + ML eval harnesses tied to wet-lab outcomes.", investorSignal: "AI-first biotechs with in-house wet-lab loops are more durable than software-only platforms.", interviewQuestion: "What is the smallest wet-lab capability a generative-bio startup must own to be credible?" },
  { id: "bn-clinical-translation", domainId: "drug-discovery", title: "Clinical translation", bottleneckType: "physical validation", severity: "critical", maturityImpact: "Blocks production", confidence: "marketContext", explanation: "AI accelerates the early funnel but does not change clinical-trial failure rates; ADMET, tissue-level effects and stratification still gate approvals.", whyItExists: ["Biology is hierarchical", "Animal models translate poorly", "Patient heterogeneity is irreducible"], evidence: ["Industry-wide clinical attrition rates"], sourceIds: ["needs-verification"], affectedUseCases: ["uc-drug-virtual-screen", "uc-protein-binder"], affectedArchitectures: ["diffusion-bio", "protein-lm"], affectedCompanies: ["AI biotech generally"], firstOrderEffects: ["Long capital cycles"], secondOrderEffects: ["Big-pharma partnerships favour AI biotechs that have made it through Phase 2"], whoIsTryingToSolveIt: ["Isomorphic Labs, Insitro, Recursion", "Tempus, Flatiron"], whatWouldBreakItOpen: ["Biomarker-driven trial design"], whatStillDoesNotWork: ["Tissue-level effects from molecular structure"], founderOpportunity: "AI-driven trial-design and patient-stratification tooling.", investorSignal: "Phase 1 / 2 AI-discovered assets are the validation milestones.", interviewQuestion: "Will AI shift Phase 2 success rates, or only accelerate the path to Phase 1?" },
  { id: "bn-quant-eval", domainId: "quant-finance", title: "Honest evaluation under leakage and regime shift", bottleneckType: "evaluation", severity: "high", maturityImpact: "increases cost", confidence: "inferred", explanation: "Most ML strategies look great in backtests and fail in production. Look-ahead bias, capacity constraints, and regime shift are the silent killers.", whyItExists: ["Markets are reflexive", "Public datasets bake in survivorship bias"], evidence: ["Public fund failures attributed to ML overfitting"], sourceIds: ["src-mifid-ii-best-ex"], affectedUseCases: ["uc-quant-alpha"], affectedArchitectures: ["ts-transformer", "gbdt", "rl-execution"], affectedCompanies: ["all quant funds"], firstOrderEffects: ["Wasted capital on overfit strategies"], secondOrderEffects: ["Eval discipline becomes a moat"], whoIsTryingToSolveIt: ["Numerai", "Internal research-platform teams"], whatWouldBreakItOpen: ["Standardised eval suites for quant ML"], whatStillDoesNotWork: ["Most public benchmarks ignore transaction costs and capacity"], founderOpportunity: "Audit-grade backtesting and leakage-detection tooling.", investorSignal: "Quant-AI startups boasting only sharpe without capacity / cost realism are over-claiming.", interviewQuestion: "What evaluation discipline separates a real quant alpha from a backtest fantasy?" },
  { id: "bn-quant-capacity", domainId: "quant-finance", title: "Capacity and transaction costs", bottleneckType: "economics", severity: "high", maturityImpact: "limits scaling", confidence: "inferred", explanation: "Strategies that look profitable on paper get crushed by their own market impact at scale.", whyItExists: ["Liquidity is finite per-asset", "Slippage scales with size"], evidence: ["Public fund disclosures describing capacity constraints"], sourceIds: ["needs-verification"], affectedUseCases: ["uc-quant-alpha"], affectedArchitectures: ["rl-execution", "ts-transformer"], affectedCompanies: ["all quant funds"], firstOrderEffects: ["Strategies wind down once capital exceeds capacity"], secondOrderEffects: ["Multi-strategy funds dominate at scale"], whoIsTryingToSolveIt: ["Execution-optimisation teams"], whatWouldBreakItOpen: ["Better cross-venue liquidity"], whatStillDoesNotWork: ["Capacity prediction in tail-event markets"], founderOpportunity: "Capacity-aware execution and routing tooling.", investorSignal: "Quant-AI startups must show capacity awareness in their pitches.", interviewQuestion: "How do you measure the capacity of an ML alpha, and how do you avoid eating your own returns?" },
  { id: "bn-legal-hallucination", domainId: "legal", title: "Hallucinated citations and malpractice risk", bottleneckType: "trust", severity: "critical", maturityImpact: "Blocks production", confidence: "sourced", explanation: "Documented sanctions for attorneys submitting fabricated citations make hallucination a binary risk in legal AI.", whyItExists: ["LLMs fabricate confidently", "Citation-graph coverage is uneven"], evidence: ["Mata v. Avianca and similar cases"], sourceIds: ["paper-rag"], affectedUseCases: ["uc-legal-research"], affectedArchitectures: ["llm", "rag"], affectedCompanies: ["Harvey", "Lexis+ AI", "Westlaw / Casetext"], firstOrderEffects: ["Mandatory citation-verification layers"], secondOrderEffects: ["Bar-association guidance", "Liability-insurance products"], whoIsTryingToSolveIt: ["Legal AI vendors", "Bar ethics committees"], whatWouldBreakItOpen: ["Audit-grade RAG with citation-graph fidelity"], whatStillDoesNotWork: ["Cross-jurisdictional citation coverage"], founderOpportunity: "Citation-verification middleware sold across legal AI vendors.", investorSignal: "Legal AI vendors with grounded retrieval + verification are more durable than pure-LLM products.", interviewQuestion: "What is the failure mode you most fear in legal AI?" },
  { id: "bn-legal-jurisdictional", domainId: "legal", title: "Jurisdictional fragmentation", bottleneckType: "data", severity: "high", maturityImpact: "limits scaling", confidence: "marketContext", explanation: "Law differs across jurisdictions; corpus coverage and citation rules are non-trivial per country / state.", whyItExists: ["Legal systems differ structurally", "Public corpora are uneven"], evidence: ["Westlaw / Lexis coverage skews common-law"], sourceIds: ["needs-verification"], affectedUseCases: ["uc-legal-research"], affectedArchitectures: ["rag", "embeddings"], affectedCompanies: ["Harvey", "Lexis+ AI", "Robin AI"], firstOrderEffects: ["Slow per-jurisdiction expansion"], secondOrderEffects: ["Country-specific legal AI champions emerge"], whoIsTryingToSolveIt: ["Major vendors expanding region by region"], whatWouldBreakItOpen: ["Open multi-jurisdictional case-law corpora"], whatStillDoesNotWork: ["Comparative law analysis"], founderOpportunity: "Per-jurisdiction legal AI champions in Asia, Latin America and Africa.", investorSignal: "Country-specific legal AI is an underrated wedge.", interviewQuestion: "Where will the next regional legal-AI champion be built outside the US and UK?" },
  { id: "bn-edu-outcomes", domainId: "education", title: "Measuring learning outcomes", bottleneckType: "evaluation", severity: "high", maturityImpact: "limits scaling", confidence: "inferred", explanation: "AI tutoring shows engagement gains, but durable, transferable learning gains are hard to measure.", whyItExists: ["Learning is multi-year and confounded", "RCTs on AI products are rare"], evidence: ["Khan Academy + Duolingo published studies (limited)"], sourceIds: ["needs-verification"], affectedUseCases: ["uc-edu-tutor"], affectedArchitectures: ["llm", "rag"], affectedCompanies: ["Khan Academy", "Duolingo", "Magic School AI"], firstOrderEffects: ["Procurement gates on rigorous evidence"], secondOrderEffects: ["Vendors investing in RCT-grade evidence become preferred"], whoIsTryingToSolveIt: ["IES-funded research", "Vendor-internal studies"], whatWouldBreakItOpen: ["Federally funded RCTs of AI tutoring at scale"], whatStillDoesNotWork: ["Demonstrated transfer to standardised testing"], founderOpportunity: "Rigorous, RCT-grade evaluation tooling for ed-tech.", investorSignal: "Vendors with credible third-party effectiveness studies are more durable.", interviewQuestion: "What evidence would convince you that an AI tutor produces durable learning gains?" },
  { id: "bn-edu-integrity", domainId: "education", title: "Assessment integrity", bottleneckType: "trust", severity: "high", maturityImpact: "slows adoption", confidence: "marketContext", explanation: "AI text detectors are unreliable; schools shift to assessment-design changes.", whyItExists: ["LLM output is hard to distinguish from human writing", "False positives harm students"], evidence: ["Public studies showing detector unreliability"], sourceIds: ["needs-verification"], affectedUseCases: ["uc-edu-tutor"], affectedArchitectures: ["llm"], affectedCompanies: ["Turnitin", "Copyleaks", "GPTZero"], firstOrderEffects: ["Decline in confidence in AI-text detectors"], secondOrderEffects: ["Curriculum redesign and AI-aware assessments"], whoIsTryingToSolveIt: ["Curriculum / assessment redesign by educators"], whatWouldBreakItOpen: ["AI-aware assessment standards"], whatStillDoesNotWork: ["Reliable detection across languages and styles"], founderOpportunity: "Assessment redesign and authoring tooling for AI-aware assignments.", investorSignal: "Bet on assessment redesign vendors, not detection vendors.", interviewQuestion: "If detection cannot work, what is the right way to redesign assessments?" },
  { id: "bn-robotics-data", domainId: "robotics", title: "Real-robot data scarcity", bottleneckType: "data", severity: "critical", maturityImpact: "Blocks production", confidence: "sourced", explanation: "VLA models proved scale wins; real-robot trajectories are expensive; embodiment generalisation is unsolved.", whyItExists: ["Hardware is expensive", "Teleop is slow"], evidence: ["RT-2 / Open X-Embodiment papers report data-scale dependencies"], sourceIds: ["paper-rt2", "paper-open-x"], affectedUseCases: ["uc-robotics-pick"], affectedArchitectures: ["vla", "imitation-learning", "diffusion-policy"], affectedCompanies: ["Figure", "1X", "Apptronik", "Physical Intelligence", "Skild"], firstOrderEffects: ["Slow generalisation", "High cost per learned skill"], secondOrderEffects: ["Vertically integrated data players win", "Open-data efforts become valuable"], whoIsTryingToSolveIt: ["Open X-Embodiment", "Physical Intelligence", "Tigris"], whatWouldBreakItOpen: ["Cross-embodiment foundation models that transfer with little new data"], whatStillDoesNotWork: ["Generalisation across kitchens, factories and homes"], founderOpportunity: "Robot-data infrastructure (teleop + sim + labelling).", investorSignal: "Robotics startups without a data-scale plan are research projects.", interviewQuestion: "What is the minimum data scale at which VLA models start to generalise across embodiments?" },
  { id: "bn-robotics-sim2real", domainId: "robotics", title: "Sim-to-real gap", bottleneckType: "physical validation", severity: "high", maturityImpact: "increases cost", confidence: "marketContext", explanation: "Simulation is cheap; sim-to-real gap remains. Domain randomisation and sim2real fine-tuning are imperfect.", whyItExists: ["Real-world physics has long-tail edge cases", "Sensor differences"], evidence: ["Academic surveys on sim-to-real"], sourceIds: ["needs-verification"], affectedUseCases: ["uc-robotics-pick"], affectedArchitectures: ["sim-to-real", "rl-control", "world-models"], affectedCompanies: ["Boston Dynamics", "Figure", "Tesla Optimus", "Skild"], firstOrderEffects: ["Long iteration cycles"], secondOrderEffects: ["Differentiable simulators become valuable"], whoIsTryingToSolveIt: ["NVIDIA Isaac Sim", "Genesis simulator"], whatWouldBreakItOpen: ["Photoreal high-fidelity physics simulation"], whatStillDoesNotWork: ["Contact-rich manipulation in unstructured environments"], founderOpportunity: "High-fidelity simulation infrastructure for one embodiment family.", investorSignal: "Watch sim-to-real benchmarks that include contact-rich tasks.", interviewQuestion: "What is the most-overlooked aspect of the sim-to-real gap?" },
  { id: "bn-robotics-safety", domainId: "robotics", title: "Safety in unstructured environments", bottleneckType: "safety", severity: "critical", maturityImpact: "Blocks production", confidence: "marketContext", explanation: "Robots that act in human environments must be safe under failure; ISO and regulator frameworks lag the technology.", whyItExists: ["Long-tail physical scenarios", "Lack of standards for general-purpose robots"], evidence: ["ISO 10218, ISO/TS 15066 industrial; humanoid standards still emerging"], sourceIds: ["needs-verification"], affectedUseCases: ["uc-robotics-pick"], affectedArchitectures: ["vla", "imitation-learning"], affectedCompanies: ["Figure", "1X", "Apptronik"], firstOrderEffects: ["Confined deployment domains"], secondOrderEffects: ["Standards bodies developing humanoid frameworks"], whoIsTryingToSolveIt: ["IEEE / ISO working groups", "Vendor safety teams"], whatWouldBreakItOpen: ["Industry-wide humanoid safety standards"], whatStillDoesNotWork: ["Safety guarantees under distribution shift"], founderOpportunity: "Safety-evaluation harnesses and certification tooling for humanoids.", investorSignal: "Safety evidence is the gating factor for non-industrial humanoid deployment.", interviewQuestion: "What safety evidence would convince a regulator to allow humanoids in homes?" },
  { id: "bn-mfg-ot-it", domainId: "manufacturing", title: "OT / IT integration and dirty data", bottleneckType: "data", severity: "high", maturityImpact: "slows adoption", confidence: "inferred", explanation: "Industrial sites have decades of legacy SCADA / MES; data is fragmented, noisy and locked behind OT-security boundaries.", whyItExists: ["Legacy systems", "OT-IT separation for security"], evidence: ["Industrial-AI vendor case studies emphasise integration cost"], sourceIds: ["needs-verification"], affectedUseCases: ["uc-mfg-defect"], affectedArchitectures: ["cnn", "anomaly-detection"], affectedCompanies: ["Cognex", "Landing AI", "Augury", "Drishti"], firstOrderEffects: ["High services revenue per deployment"], secondOrderEffects: ["OT-secure on-prem AI vendors emerge"], whoIsTryingToSolveIt: ["Industrial OEMs (Siemens, Rockwell)"], whatWouldBreakItOpen: ["Standardised industrial data models (UNS / ISA-95)"], whatStillDoesNotWork: ["Cross-line data interoperability"], founderOpportunity: "OT-secure on-prem AI infrastructure.", investorSignal: "Industrial-AI vendors with deep OEM partnerships scale faster.", interviewQuestion: "What unifying data model would unlock manufacturing AI at scale?" },
  { id: "bn-energy-grid-physics", domainId: "energy-grid", title: "Grid reliability and safety constraints", bottleneckType: "safety", severity: "critical", maturityImpact: "Blocks production", confidence: "marketContext", explanation: "AI helps inside operating envelopes; grid stability and N-1 reliability are physics + regulator domains.", whyItExists: ["Grid stability is non-linear", "Safety standards require deterministic control"], evidence: ["NERC reliability standards"], sourceIds: ["needs-verification"], affectedUseCases: ["uc-energy-renew-forecast"], affectedArchitectures: ["ts-transformer", "rl-control"], affectedCompanies: ["Octopus Kraken", "AutoGrid"], firstOrderEffects: ["AI-as-co-pilot, not autopilot, in grid control rooms"], secondOrderEffects: ["Hybrid optimisation systems combining ML and OR"], whoIsTryingToSolveIt: ["Vendors with hybrid ML + OR systems"], whatWouldBreakItOpen: ["Verifiable safety wrappers around ML control"], whatStillDoesNotWork: ["Real-time AI control under N-1 contingencies"], founderOpportunity: "Verifiable safety wrappers and audit tools for AI control.", investorSignal: "Grid AI startups must show regulator-aware design from day one.", interviewQuestion: "What is the maximum scope of decisions you would let AI make autonomously on a grid?" },
  { id: "bn-defence-accountability", domainId: "defence", title: "Accountability and laws of armed conflict", bottleneckType: "regulation", severity: "critical", maturityImpact: "Blocks production", confidence: "marketContext", explanation: "LOAC requires humans in the loop for high-stakes operations; autonomous lethal AI is publicly contested.", whyItExists: ["LOAC compliance requires accountability", "International norms vary"], evidence: ["DoD Directive 3000.09"], sourceIds: ["src-dod-ai-strategy"], affectedUseCases: [], affectedArchitectures: ["vla", "rl-control"], affectedCompanies: ["Anduril", "Palantir", "Helsing", "Shield AI"], firstOrderEffects: ["AI confined to ISR / logistics / decision-support"], secondOrderEffects: ["Procurement processes favouring auditable systems"], whoIsTryingToSolveIt: ["Defence primes, regulators, NGOs"], whatWouldBreakItOpen: ["International norms / treaties on autonomous weapons"], whatStillDoesNotWork: ["Autonomous engagement at strategic scale"], founderOpportunity: "Auditable decision-support and ISR analytics; not autonomous lethal capability.", investorSignal: "Defence-AI vendors that publish governance frameworks are more durable.", interviewQuestion: "What is the single most important governance question for defence AI in the next decade?" },
  { id: "bn-banking-mrm", domainId: "banking", title: "Model-risk-management constraints", bottleneckType: "regulation", severity: "high", maturityImpact: "increases cost", confidence: "sourced", explanation: "SR 11-7-style frameworks require auditability, explainability and stability; LLMs are hard to validate under those frameworks.", whyItExists: ["Regulator expectations", "Bank governance standards"], evidence: ["SR 11-7 (Federal Reserve / OCC)"], sourceIds: ["src-sr-11-7", "src-ecoa-reg-b"], affectedUseCases: ["uc-fraud-realtime"], affectedArchitectures: ["llm", "gbdt"], affectedCompanies: ["all banks"], firstOrderEffects: ["LLM use confined to internal copilots"], secondOrderEffects: ["MRM tooling vendors emerge as a category"], whoIsTryingToSolveIt: ["Internal MRM teams", "Tooling startups"], whatWouldBreakItOpen: ["Regulator-blessed reference frameworks for LLM MRM"], whatStillDoesNotWork: ["Reproducible LLM behaviour under adversarial inputs"], founderOpportunity: "LLM-MRM tooling and audit infrastructure.", investorSignal: "Banks publicly disclosing MRM frameworks for LLMs are signalling readiness.", interviewQuestion: "What is the smallest regulator-blessed pattern for deploying LLMs into a regulated bank?" },
  { id: "bn-radiology-shift", domainId: "radiology", title: "Hidden: scanner / vendor distribution shift", bottleneckType: "data", severity: "high", maturityImpact: "slows adoption", confidence: "inferred", explanation: "Models trained on one scanner manufacturer drift on another; subtle but production-blocking.", whyItExists: ["Hardware-specific noise patterns", "Different acquisition protocols"], evidence: ["External-validation studies in radiology AI literature"], sourceIds: ["src-lstm-sepsis-wong"], affectedUseCases: ["uc-radiology-report-assist"], affectedArchitectures: ["cnn", "vit"], affectedCompanies: ["Aidoc", "Annalise.ai"], firstOrderEffects: ["Per-site fine-tuning required"], secondOrderEffects: ["Vendor preference for similar scanner mix"], whoIsTryingToSolveIt: ["Domain-adaptation researchers"], whatWouldBreakItOpen: ["Scanner-invariant pretraining"], whatStillDoesNotWork: ["Fully scanner-invariant models"], founderOpportunity: "Scanner-aware monitoring infrastructure.", investorSignal: "Track external-validation breadth as a quality marker.", interviewQuestion: "How much of an AUROC drop on external scanners is acceptable for clinical deployment?" },
  { id: "bn-llm-eval-debt", domainId: "research-workflows", title: "Hidden: evaluation debt across LLM products", bottleneckType: "evaluation", severity: "critical", maturityImpact: "Blocks production", confidence: "inferred", explanation: "Most AI products ship without rigorous evaluation; LLM-as-judge is everywhere but unaudited.", whyItExists: ["Eval is unsexy", "Generation faster than measurement"], evidence: ["State of AI Engineering reports"], sourceIds: ["src-mmlu", "src-mteb"], affectedUseCases: ["uc-customer-service-deflection", "uc-legal-research"], affectedArchitectures: ["llm", "rag", "tool-agents"], affectedCompanies: ["all AI product companies"], firstOrderEffects: ["Quality regressions ship", "Trust erodes"], secondOrderEffects: ["Eval becomes the moat"], whoIsTryingToSolveIt: ["Braintrust, Galileo, Arize, LangSmith"], whatWouldBreakItOpen: ["Audit-grade eval marketplaces"], whatStillDoesNotWork: ["LLM-as-judge calibration"], founderOpportunity: "Vertical eval marketplaces (legal, medical).", investorSignal: "AI product companies investing in eval are more durable.", interviewQuestion: "Where does LLM-as-judge calibration fail most catastrophically?" },
  { id: "bn-cyber-attack-surface", domainId: "cybersecurity", title: "AI itself as attack surface", bottleneckType: "safety", severity: "high", maturityImpact: "slows adoption", confidence: "inferred", explanation: "Indirect prompt injection, model extraction, data poisoning are now real threats; mature tooling barely exists.", whyItExists: ["Agents with tool access didn&rsquo;t exist at scale before"], evidence: ["MITRE ATLAS, OWASP LLM Top 10"], sourceIds: ["src-mitre-attack", "src-nvd-cve"], affectedUseCases: ["uc-cyber-soc"], affectedArchitectures: ["llm", "tool-agents"], affectedCompanies: ["all enterprises shipping agents"], firstOrderEffects: ["Conservative agent rollouts"], secondOrderEffects: ["AI-security category formation"], whoIsTryingToSolveIt: ["Lakera", "Robust Intelligence", "Hiddenlayer", "Protect AI"], whatWouldBreakItOpen: ["Standardised agent-security frameworks"], whatStillDoesNotWork: ["Defending against novel injection patterns"], founderOpportunity: "Agent-security middleware and audit.", investorSignal: "AI-security category will become board-level checkbox.", interviewQuestion: "What is the cybersecurity equivalent of OWASP for AI agents?" },
  { id: "bn-climate-extremes", domainId: "climate-weather", title: "Evaluation on rare extremes", bottleneckType: "evaluation", severity: "high", maturityImpact: "limits scaling", confidence: "marketContext", explanation: "Neural weather may match NWP on average and miss the events that matter most (hurricanes, atmospheric rivers).", whyItExists: ["Rare events are by definition under-represented in training data"], evidence: ["Weather research community discussions"], sourceIds: ["paper-graphcast"], affectedUseCases: ["uc-weather-medium-range"], affectedArchitectures: ["neural-operators", "ts-transformer"], affectedCompanies: ["Google DeepMind", "NVIDIA Earth-2", "Tomorrow.io"], firstOrderEffects: ["NWP retains operational role"], secondOrderEffects: ["Hybrid systems combining ML + physics"], whoIsTryingToSolveIt: ["Operational forecasters (ECMWF AIFS)", "Vendors building hybrid stacks"], whatWouldBreakItOpen: ["Extreme-event-aware training and evaluation"], whatStillDoesNotWork: ["Reliable hurricane intensity forecasting"], founderOpportunity: "Specialty regional / vertical weather products.", investorSignal: "Vertical weather AI may outperform horizontal.", interviewQuestion: "Will neural weather models ever fully replace NWP?" },
  { id: "bn-autonomous-vehicle-tail", domainId: "autonomous-vehicles", title: "Long-tail safety", bottleneckType: "safety", severity: "critical", maturityImpact: "Blocks production", confidence: "sourced", explanation: "Robotaxis run in narrow ODDs because the long tail of edge cases is enormous.", whyItExists: ["Open-world physics", "Human-driver interactions are unpredictable"], evidence: ["NHTSA disclosures, Cruise pause"], sourceIds: ["src-nhtsa-ads", "src-cruise-pause"], affectedUseCases: [], affectedArchitectures: ["vit", "imitation-learning", "world-models"], affectedCompanies: ["Waymo", "Tesla FSD", "Mobileye"], firstOrderEffects: ["Slow ODD expansion"], secondOrderEffects: ["Specialty autonomy in narrow domains wins"], whoIsTryingToSolveIt: ["Robotaxi operators", "ADAS providers"], whatWouldBreakItOpen: ["Foundation-model-class generalisation across edge cases"], whatStillDoesNotWork: ["Reliable urban robotaxis at scale globally"], founderOpportunity: "Specialty autonomy (mining, warehouses, logistics).", investorSignal: "Watch for ODD expansion cadence as the truth signal.", interviewQuestion: "What ODD expansion rate would you take as proof robotaxis are scaling?" },
  { id: "bn-government-procurement", domainId: "government-services", title: "Procurement and certification", bottleneckType: "distribution", severity: "high", maturityImpact: "slows adoption", confidence: "marketContext", explanation: "Federal / state buyers want AI but procurement is gated by FedRAMP / IL-class certification.", whyItExists: ["Risk-averse public-sector culture", "Multi-stakeholder procurement"], evidence: ["FedRAMP authorisation timelines"], sourceIds: ["src-fedramp"], affectedUseCases: [], affectedArchitectures: ["llm", "rag"], affectedCompanies: ["Palantir", "Anduril", "Microsoft", "Anthropic / OpenAI government editions"], firstOrderEffects: ["Long sales cycles"], secondOrderEffects: ["Defensible incumbency once authorised"], whoIsTryingToSolveIt: ["GSA, DoD CIO offices", "Hyperscaler GovCloud"], whatWouldBreakItOpen: ["Streamlined FedRAMP for AI"], whatStillDoesNotWork: ["Cross-agency interoperability"], founderOpportunity: "FedRAMP-ready vertical tools.", investorSignal: "FedRAMP authorisation is a moat.", interviewQuestion: "How would you re-design FedRAMP for AI?" },

  /* ===== Phase 2.A bottleneck expansion (16 new) ===== */
  { id: "bn-rag-permissioning", domainId: "enterprise-productivity", title: "RAG permissioning + ACL drift", bottleneckType: "trust", severity: "high", maturityImpact: "Caps enterprise rollouts", confidence: "inferred", explanation: "Enterprise RAG products leak content because access control lists drift between source SaaS and the search index.", whyItExists: ["No common ACL spec across SaaS vendors", "Sync lag between source-of-truth permissions and the index"], evidence: ["Multiple public 'AI search' incidents involving over-broad retrieval"], sourceIds: ["needs-verification"], affectedUseCases: [], affectedArchitectures: ["rag", "embeddings"], affectedCompanies: ["Glean", "Microsoft 365 Copilot", "Notion AI"], firstOrderEffects: ["Enterprises gate AI rollouts behind audits"], secondOrderEffects: ["Permissioning becomes a moat"], whoIsTryingToSolveIt: ["Glean", "Microsoft Copilot", "DSPM vendors"], whatWouldBreakItOpen: ["Common AI-aware ACL spec"], whatStillDoesNotWork: ["Cross-vendor permission propagation"], founderOpportunity: "Trust + governance layer for vertical AI.", investorSignal: "Watch for incidents that delay rollouts.", interviewQuestion: "Who owns ACL drift in an enterprise RAG product?" },

  { id: "bn-eval-debt", domainId: "research-workflows", title: "Eval debt across AI products", bottleneckType: "evaluation", severity: "high", maturityImpact: "Caps reliability", confidence: "inferred", explanation: "Most AI products run with eval suites that don't reflect production traffic; regressions ship undetected.", whyItExists: ["Gold-set authoring is expensive", "LLM-as-judge needs calibration"], evidence: ["Public regression incidents"], sourceIds: [], affectedUseCases: [], affectedArchitectures: ["llm", "tool-agents"], affectedCompanies: ["Most AI startups"], firstOrderEffects: ["Quality regressions ship"], secondOrderEffects: ["Eval-as-a-product market"], whoIsTryingToSolveIt: ["Braintrust", "Galileo", "Arize"], whatWouldBreakItOpen: ["Standardised vertical gold sets"], whatStillDoesNotWork: ["Continuous eval under domain shift"], founderOpportunity: "Vertical eval-as-a-product platforms.", investorSignal: "Quality dashboards are an underappreciated moat.", interviewQuestion: "Where does LLM-as-judge fail catastrophically?" },

  { id: "bn-prompt-injection-attack-surface", domainId: "cybersecurity", title: "Prompt injection + agent attack surface", bottleneckType: "safety", severity: "critical", maturityImpact: "Caps agent rollouts", confidence: "inferred", explanation: "Agentic systems combine retrieval with tool use; untrusted retrieved content can hijack agent actions.", whyItExists: ["LLMs treat retrieved content as instructions", "Tools have side effects"], evidence: ["Public PoCs against major agent products"], sourceIds: ["src-mitre-attack"], affectedUseCases: [], affectedArchitectures: ["tool-agents", "rag"], affectedCompanies: ["All agent vendors"], firstOrderEffects: ["Customers cap autonomy"], secondOrderEffects: ["Sandboxing + content provenance markets grow"], whoIsTryingToSolveIt: ["Anthropic safety", "Microsoft", "Specialised AI security vendors"], whatWouldBreakItOpen: ["Provenance + signed content + structured tool contracts"], whatStillDoesNotWork: ["Cross-vendor defenses"], founderOpportunity: "Prompt-injection defence + agent attack surface.", investorSignal: "Watch for high-severity incidents.", interviewQuestion: "What is the right interface for trustworthy agents?" },

  { id: "bn-agent-long-horizon", domainId: "software-engineering", title: "Agent long-horizon reliability", bottleneckType: "evaluation", severity: "high", maturityImpact: "Limits autonomy", confidence: "inferred", explanation: "Errors compound over multi-step tasks; agents hit reliability ceilings far below human pros.", whyItExists: ["Compounding error", "Weak verification at each step"], evidence: ["SWE-bench-style benchmarks plateauing on harder tasks"], sourceIds: ["src-swe-bench", "src-humaneval"], affectedUseCases: [], affectedArchitectures: ["tool-agents", "llm"], affectedCompanies: ["Cursor", "Anthropic", "Cognition", "OpenAI"], firstOrderEffects: ["Human-in-the-loop required"], secondOrderEffects: ["Per-step verification tools become essential"], whoIsTryingToSolveIt: ["All agent labs"], whatWouldBreakItOpen: ["Test-time verification + better post-training"], whatStillDoesNotWork: ["Multi-day uninterrupted autonomy"], founderOpportunity: "Verification + sandboxing tooling.", investorSignal: "Reliability benchmarks beat capability benchmarks.", interviewQuestion: "What is the unit of progress for agent reliability?" },

  { id: "bn-coding-context", domainId: "software-engineering", title: "Repo-scale context windows", bottleneckType: "compute", severity: "medium", maturityImpact: "Caps quality on large repos", confidence: "inferred", explanation: "Coding agents need millions of tokens of repo context but pay quadratic compute and degrade in quality.", whyItExists: ["Long-context attention is expensive and lossy"], evidence: ["Quality drop in long-context benchmarks"], sourceIds: [], affectedUseCases: [], affectedArchitectures: ["llm", "embeddings"], affectedCompanies: ["Cursor", "Anysphere", "GitHub Copilot"], firstOrderEffects: ["Retrieval + chunking become first-class"], secondOrderEffects: ["Code-aware retrieval is a moat"], whoIsTryingToSolveIt: ["All coding-AI labs"], whatWouldBreakItOpen: ["Better code-aware retrieval + linear-attention models"], whatStillDoesNotWork: ["Holistic repo refactors"], founderOpportunity: "Code-aware retrieval + memory.", investorSignal: "Watch for code-aware long-context products.", interviewQuestion: "How would you design code retrieval beyond embeddings?" },

  { id: "bn-clinical-eval-portability", domainId: "clinical-medicine", title: "Clinical model portability across sites", bottleneckType: "evaluation", severity: "high", maturityImpact: "Limits multi-site deployment", confidence: "needsVerification", explanation: "Clinical models often perform well at training site and degrade at new sites due to scanner / population shift.", whyItExists: ["Site-specific data distributions", "Scanner / vendor variance"], evidence: ["Multiple radiology AI re-validation studies"], sourceIds: ["src-lstm-sepsis-wong"], affectedUseCases: [], affectedArchitectures: ["cnn", "vit", "domain-fm"], affectedCompanies: ["Aidoc", "Viz.ai", "PathAI"], firstOrderEffects: ["Per-site re-validation cost"], secondOrderEffects: ["Calibration + monitoring infra is essential"], whoIsTryingToSolveIt: ["Clinical AI vendors", "Hospitals' AI governance committees"], whatWouldBreakItOpen: ["Cross-site distribution-shift datasets + calibration tooling"], whatStillDoesNotWork: ["Plug-and-play deployment"], founderOpportunity: "Multi-site validation infrastructure.", investorSignal: "Clinical AI moat is portability, not accuracy.", interviewQuestion: "Why do clinical AI models break across sites?" },








  { id: "bn-data-center-power", domainId: "energy-grid", title: "Data-centre power + interconnection", bottleneckType: "compute", severity: "critical", maturityImpact: "Caps frontier scaling", confidence: "sourced", explanation: "Frontier AI training is hitting power and interconnection limits faster than chip supply.", whyItExists: ["Grid build-out lead times", "Substation + transmission constraints"], evidence: ["Hyperscaler power deals + nuclear PPA news"], sourceIds: ["src-deepmind-cooling"], affectedUseCases: [], affectedArchitectures: ["llm", "multimodal-llm"], affectedCompanies: ["Microsoft", "Google", "AWS", "Meta", "OpenAI", "Anthropic"], firstOrderEffects: ["Sites located by power, not chips"], secondOrderEffects: ["Energy + AI tightly coupled"], whoIsTryingToSolveIt: ["Hyperscalers + utilities + DOE"], whatWouldBreakItOpen: ["Faster interconnect approvals + on-site generation"], whatStillDoesNotWork: ["Sub-12-month new site build-outs"], founderOpportunity: "Data-centre energy + cooling optimisation.", investorSignal: "Track power PPAs.", interviewQuestion: "What is the rate-limiter for AI scale today?" },

  { id: "bn-domestic-fab-capacity", domainId: "telecommunications", title: "Advanced-node fab capacity + packaging", bottleneckType: "compute", severity: "critical", maturityImpact: "Caps GPU supply", confidence: "sourced", explanation: "Advanced-node fab and CoWoS packaging capacity is concentrated and slow to expand.", whyItExists: ["TSMC + ASML concentration", "CoWoS bottlenecks"], evidence: ["TSMC capex disclosures, NVIDIA supply commentary"], sourceIds: ["src-tsmc-capex"], affectedUseCases: [], affectedArchitectures: ["llm", "multimodal-llm"], affectedCompanies: ["NVIDIA", "AMD", "Apple", "TSMC"], firstOrderEffects: ["GPU lead times remain long"], secondOrderEffects: ["Custom silicon investments accelerate"], whoIsTryingToSolveIt: ["TSMC", "Intel Foundry", "Samsung", "ASML"], whatWouldBreakItOpen: ["New fabs + packaging capacity"], whatStillDoesNotWork: ["Quick capacity ramp-ups"], founderOpportunity: "Niche packaging + interconnect plays.", investorSignal: "Track CoWoS capacity reports.", interviewQuestion: "Where is the silicon supply chain most fragile?" },

];

/* ============================================
   COMPANY_AI_STRATEGIES — How the giants play the game
   ============================================
   Concise strategy profiles for the firms that shape the AI economy.
   Architecture claims are best-effort; if a specific internal technique
   is not publicly disclosed, it is marked needsVerification.
   ============================================ */
var COMPANY_AI_STRATEGIES = [
  { id: "openai", company: "OpenAI", category: "Frontier model lab", thesis: "Scaling laws + post-training (RLHF + RLAIF) + o-series reasoning + product distribution build the most-used AI platform.", confidence: "marketContext", aiProducts: ["GPT-4 / 4o / GPT-5-class", "ChatGPT", "DALL-E", "Sora", "Operator (agent)", "Whisper", "Codex"], architecturesUsed: [{architectureId: "llm", usedFor: "general-purpose models", confidence: "sourced", evidence: "Public papers"}, {architectureId: "multimodal-llm", usedFor: "GPT-4o / GPT-5-class", confidence: "sourced", evidence: "Model cards"}, {architectureId: "rl-control", usedFor: "RLHF + reasoning post-training", confidence: "sourced", evidence: "InstructGPT paper"}, {architectureId: "diffusion", usedFor: "DALL-E / Sora", confidence: "sourced", evidence: "Technical reports"}], dataAdvantage: "Deep RLHF data, ChatGPT interaction telemetry, publisher partnerships.", computeStack: "Microsoft Azure primary; reportedly evaluating custom silicon", deploymentSurface: "API + ChatGPT consumer + Microsoft Copilot + Apple Intelligence", businessAdvantage: "Largest paid-AI distribution today; brand; release cadence", revenueLogic: "API + ChatGPT subscriptions + enterprise; gross-margin pressure from frontier compute", comparisonCompanies: ["Anthropic", "Google DeepMind", "xAI", "Meta AI"], biggestOpenQuestions: ["Whether scaling laws keep paying", "Custom silicon strategy", "Agentic product reliability", "Microsoft strategic alignment"], sources: ["src-gpt4-card", "src-instructgpt", "src-sora-tr"] },
  { id: "anthropic", company: "Anthropic", category: "Frontier model lab", thesis: "Safety-grounded scaling + interpretability + Constitutional AI as differentiation; Claude as enterprise-grade frontier model.", confidence: "marketContext", aiProducts: ["Claude family", "Claude Code", "Claude API", "Claude on AWS Bedrock + Google Vertex"], architecturesUsed: [{architectureId: "llm", usedFor: "Claude family", confidence: "sourced", evidence: "Public model cards"}, {architectureId: "rl-control", usedFor: "RLHF + Constitutional AI", confidence: "sourced", evidence: "Public papers"}, {architectureId: "tool-agents", usedFor: "Claude Code, computer use", confidence: "sourced", evidence: "Product launches"}], dataAdvantage: "Curated and licenced datasets; strong RLHF data; Constitutional AI process", computeStack: "AWS Trainium / Inferentia + Google TPU partnerships; multi-cloud", deploymentSurface: "API + AWS Bedrock + Google Vertex + Slack / Notion + IDE integrations", businessAdvantage: "Enterprise trust; safety brand; strong coding model", revenueLogic: "Enterprise + API + consumer (Claude.ai)", comparisonCompanies: ["OpenAI", "Google DeepMind", "xAI"], biggestOpenQuestions: ["Scale relative to OpenAI", "Constitutional AI scaling limits", "Cloud-partner dependencies"], sources: ["src-claude-card", "src-constitutional-ai"] },
  { id: "google-deepmind", company: "Google DeepMind", category: "Frontier model lab + research", thesis: "Verticalised research (AlphaFold, AlphaZero, GraphCast) + Gemini frontier scaling + Google product integration.", confidence: "marketContext", aiProducts: ["Gemini family", "AlphaFold", "AlphaZero", "GraphCast", "Imagen / Veo", "AlphaMissense", "AlphaProof / AlphaGeometry", "Gemini Robotics"], architecturesUsed: [{architectureId: "llm", usedFor: "Gemini", confidence: "sourced", evidence: "Public model cards"}, {architectureId: "diffusion", usedFor: "Imagen, Veo", confidence: "sourced", evidence: "Public papers"}, {architectureId: "neural-operators", usedFor: "GraphCast", confidence: "sourced", evidence: "Science 2023"}, {architectureId: "diffusion-bio", usedFor: "AlphaFold 3", confidence: "sourced", evidence: "Nature 2024"}], dataAdvantage: "YouTube / Search / Maps / Android telemetry; proprietary scientific datasets", computeStack: "Google TPU (in-house) + GPU; deep co-design", deploymentSurface: "Search AI Overviews, Workspace, Vertex AI, Pixel, Android, Chrome, YouTube, Waymo", businessAdvantage: "Search distribution; in-house silicon; deep research bench", revenueLogic: "Ads + cloud + hardware", comparisonCompanies: ["OpenAI", "Anthropic", "Meta AI", "Microsoft"], biggestOpenQuestions: ["Search-revenue cannibalisation by AI Overviews", "Gemini quality cycles", "TPU vs GPU long-term"], sources: ["src-alphafold2", "src-alphafold3", "src-graphcast", "src-rt2", "src-deepmind-cooling"] },
  { id: "xai", company: "xAI", category: "Frontier model lab", thesis: "Compute-first scaling + X distribution + Tesla data adjacencies.", confidence: "inferred", aiProducts: ["Grok models", "Colossus supercomputer"], architecturesUsed: [{architectureId: "llm", usedFor: "Grok family", confidence: "inferred", evidence: "needsVerification"}], dataAdvantage: "X social-graph data; possible Tesla telemetry channels (verify)", computeStack: "Colossus cluster (publicly disclosed scale; specifics to be verified)", deploymentSurface: "X integration; standalone Grok app and API", businessAdvantage: "X distribution; founder relationships across XAI / Tesla / SpaceX", revenueLogic: "Subscription (X Premium tiers) + API", comparisonCompanies: ["OpenAI", "Anthropic", "Google DeepMind"], biggestOpenQuestions: ["Grok performance vs frontier", "Tesla data integration depth", "Capital efficiency"], sources: ["needs-verification"] },
  { id: "meta-ai", company: "Meta AI / FAIR", category: "Frontier model lab + open-source", thesis: "Open-weight Llama + global consumer distribution + research excellence in PyTorch / SAM / DINO.", confidence: "marketContext", aiProducts: ["Llama 3.x / 4 (per roadmap)", "Segment Anything", "PyTorch", "Meta AI assistant", "AudioCraft", "Ego4D"], architecturesUsed: [{architectureId: "llm", usedFor: "Llama", confidence: "sourced", evidence: "Public papers"}, {architectureId: "vit", usedFor: "DINO / SAM", confidence: "sourced", evidence: "Public papers"}, {architectureId: "segmentation-models", usedFor: "SAM / SAM 2", confidence: "sourced", evidence: "Public papers"}], dataAdvantage: "Facebook / Instagram / WhatsApp scale data; Ego4D-style video", computeStack: "MTIA in-house silicon + NVIDIA GPUs", deploymentSurface: "WhatsApp, Instagram, Messenger, Ray-Ban Meta, Quest", businessAdvantage: "Open-weight ecosystem; consumer distribution; in-house silicon path", revenueLogic: "Ads + hardware + future API", comparisonCompanies: ["OpenAI", "Google DeepMind", "Mistral", "DeepSeek"], biggestOpenQuestions: ["Open-weight commercial pull", "MTIA timelines", "AR / consumer AI revenue"], sources: ["src-llama3", "src-sam"] },
  { id: "mistral", company: "Mistral AI", category: "Frontier model lab (open-weight + commercial)", thesis: "European open-weight champion + Mixture-of-Experts + sovereign-friendly deployment.", confidence: "inferred", aiProducts: ["Mistral Large", "Mixtral", "Codestral", "Le Chat"], architecturesUsed: [{architectureId: "llm", usedFor: "Mistral / Mixtral", confidence: "sourced", evidence: "Public model cards"}], dataAdvantage: "Curated multilingual data; European-friendly licencing", computeStack: "GPU clusters; sovereign-infra partnerships", deploymentSurface: "API + on-prem / sovereign + cloud channels", businessAdvantage: "European sovereign-AI brand; open-weight credibility", revenueLogic: "API + enterprise + government", comparisonCompanies: ["OpenAI", "Anthropic", "Cohere", "Meta Llama"], biggestOpenQuestions: ["Compute capital relative to US labs", "EU AI Act implications"], sources: ["needs-verification"] },
  { id: "deepseek", company: "DeepSeek", category: "Frontier model lab (open-weight, China-origin)", thesis: "Compute-efficient training + open-weight releases that move the global frontier without US-class compute.", confidence: "inferred", aiProducts: ["DeepSeek-V3", "DeepSeek-R1"], architecturesUsed: [{architectureId: "llm", usedFor: "DeepSeek-V3 / R1", confidence: "sourced", evidence: "Public technical reports"}], dataAdvantage: "Curated training data; engineering efficiency", computeStack: "H800 / H100-class clusters (verify specifics)", deploymentSurface: "Open-weight + API", businessAdvantage: "Open-weight credibility; engineering brand", revenueLogic: "Mostly research-driven; commercial roadmap unclear", comparisonCompanies: ["Meta Llama", "Mistral", "Qwen"], biggestOpenQuestions: ["Long-term commercial roadmap", "China-export-control implications"], sources: ["src-deepseek-v3"] , publicEvidence: ["DeepSeek-V3 + DeepSeek-R1 technical reports (arxiv papers)","Public weights + tokenizer + benchmark scores"], inferredStack: ["Mixture-of-experts plus reasoning-style RL post-training, per published reports","Cost-per-token claims based on disclosed training compute"], unknowns: ["Sustained frontier credibility cycle-over-cycle relative to Anthropic / OpenAI","Hardware mix beyond what is disclosed (sanctioned vs non-sanctioned silicon)"] },
  { id: "alibaba-qwen", company: "Alibaba Qwen", category: "Frontier model lab (open-weight, China)", thesis: "Multi-language + large open-weight family + Alibaba Cloud distribution.", confidence: "inferred", aiProducts: ["Qwen 2 / 2.5 / 3 series", "Qwen-Coder", "Qwen-VL", "Tongyi platform"], architecturesUsed: [{architectureId: "llm", usedFor: "Qwen series", confidence: "sourced", evidence: "Hugging Face releases"}, {architectureId: "multimodal-llm", usedFor: "Qwen-VL", confidence: "sourced", evidence: "Public papers"}], dataAdvantage: "Chinese / multilingual web; e-commerce data", computeStack: "Alibaba Cloud (Hanguang AI chips + GPU mix)", deploymentSurface: "Alibaba Cloud + open-weight", businessAdvantage: "China / Asia distribution; multilingual depth", revenueLogic: "Cloud + enterprise", comparisonCompanies: ["DeepSeek", "Mistral", "Meta Llama"], biggestOpenQuestions: ["Export-control constraints", "Global commercial penetration"], sources: ["needs-verification"] },
  { id: "nvidia", company: "NVIDIA", category: "AI compute platform", thesis: "GPU + CUDA + NVLink + InfiniBand + Mellanox + system designs (NVL72) + software (TensorRT, NIM, Run:AI) make the dominant AI compute substrate.", confidence: "sourced", aiProducts: ["H100 / H200 / B100 / B200 / GB200 NVL72 / GB300 / Rubin", "CUDA, cuDNN, NCCL", "TensorRT, Triton, NIM", "Omniverse, Isaac, Cosmos", "BioNeMo, CUDA-Q"], architecturesUsed: [{architectureId: "llm", usedFor: "Customer training / inference", confidence: "sourced", evidence: "Public NVIDIA + customer disclosures"}], dataAdvantage: "Cross-customer telemetry; CUDA developer ecosystem", computeStack: "Own silicon (Blackwell, Rubin); CoWoS at TSMC; Quantum InfiniBand, Spectrum-X", deploymentSurface: "Cloud + sovereign + enterprise", businessAdvantage: "Hardware + software + networking + system design integration; CUDA lock-in", revenueLogic: "Hardware + software + systems", comparisonCompanies: ["AMD", "Google TPU", "AWS Trainium", "Microsoft Maia", "Cerebras", "Groq"], biggestOpenQuestions: ["Hyperscaler ASIC erosion of margin", "CUDA vs Triton vs ROCm long-term", "Physical AI revenue contribution"], sources: ["src-mlperf"] },
  { id: "google-tpu", company: "Google TPU", category: "AI compute platform (in-house)", thesis: "Vertically integrated TPU + Google software stack avoids NVIDIA tax; co-designed with Gemini.", confidence: "marketContext", aiProducts: ["TPU v4 / v5e / v5p / Trillium", "Vertex AI Cloud TPU"], architecturesUsed: [{architectureId: "llm", usedFor: "Gemini training", confidence: "sourced", evidence: "Public Google statements"}], dataAdvantage: "Internal Google workloads + Vertex customers", computeStack: "TPU + Borg + Pathways", deploymentSurface: "Google Cloud Vertex AI + internal Google workloads", businessAdvantage: "Workload-specific optimisation; cost advantage on internal use", revenueLogic: "Google Cloud; internal cost savings", comparisonCompanies: ["NVIDIA", "AWS Trainium", "AMD", "Microsoft Maia"], biggestOpenQuestions: ["External TPU adoption rate", "Software ecosystem vs CUDA"], sources: ["needs-verification"] },
  { id: "aws-silicon", company: "AWS (Trainium / Inferentia)", category: "AI compute platform (hyperscaler in-house)", thesis: "Cost reduction on internal workloads + customer pull for Trainium2-class compute.", confidence: "marketContext", aiProducts: ["Trainium2", "Inferentia2", "Graviton (CPU)"], architecturesUsed: [{architectureId: "llm", usedFor: "Anthropic + others training on Trainium2", confidence: "sourced", evidence: "Anthropic public partnership announcements"}], dataAdvantage: "AWS customer base", computeStack: "Trainium + Neuron SDK", deploymentSurface: "AWS Bedrock + EC2", businessAdvantage: "Cost vs NVIDIA; Anthropic partnership pulls volume", revenueLogic: "AWS cloud margin", comparisonCompanies: ["NVIDIA", "Google TPU", "Microsoft Maia"], biggestOpenQuestions: ["Trainium2 frontier adoption", "Long-term Anthropic alignment"], sources: ["needs-verification"] },
  { id: "microsoft-maia", company: "Microsoft Maia / Cobalt", category: "AI compute platform (hyperscaler in-house)", thesis: "Vertical AI stack inside Azure that complements OpenAI partnership and reduces NVIDIA dependency over time.", confidence: "inferred", aiProducts: ["Maia 100", "Cobalt 100"], architecturesUsed: [{architectureId: "llm", usedFor: "Internal workloads + Azure AI", confidence: "inferred", evidence: "needsVerification"}], dataAdvantage: "Azure + M365 telemetry", computeStack: "Maia + NVIDIA GPU mix", deploymentSurface: "Azure", businessAdvantage: "Bundling with M365 / Azure", revenueLogic: "Cloud margin", comparisonCompanies: ["NVIDIA", "Google TPU", "AWS Trainium"], biggestOpenQuestions: ["Maia frontier-training capability", "OpenAI strategic alignment"], sources: ["needs-verification"] },
  { id: "amd", company: "AMD", category: "AI compute platform", thesis: "MI300 / MI325 / MI355 + ROCm software + GPU networking; closing the gap with NVIDIA on memory bandwidth + cost.", confidence: "marketContext", aiProducts: ["MI300X / MI325X / MI355", "ROCm"], architecturesUsed: [{architectureId: "llm", usedFor: "Customer training + inference", confidence: "sourced", evidence: "Public customer announcements"}], dataAdvantage: "Customer telemetry across hyperscaler base", computeStack: "Own silicon + co-packaged-optics roadmap", deploymentSurface: "Hyperscaler + enterprise", businessAdvantage: "Cost / memory bandwidth advantage on selected workloads", revenueLogic: "Data centre GPU sales", comparisonCompanies: ["NVIDIA", "Google TPU", "AWS Trainium"], biggestOpenQuestions: ["ROCm vs CUDA software gap", "Frontier-cluster credibility"], sources: ["needs-verification"] },
  { id: "cerebras", company: "Cerebras", category: "AI compute platform (specialty)", thesis: "Wafer-scale CS-3 architecture + extreme inference speed + cloud service.", confidence: "marketContext", aiProducts: ["CS-3", "Cerebras Cloud"], architecturesUsed: [{architectureId: "llm", usedFor: "Customer inference at speed", confidence: "sourced", evidence: "Public benchmarks"}], dataAdvantage: "Specialty compute customer base", computeStack: "Wafer-scale chip + cluster scale via Memory-X / Swarm-X", deploymentSurface: "Cerebras Cloud + on-prem", businessAdvantage: "Extreme inference latency for specific workloads", revenueLogic: "Hardware + cloud", comparisonCompanies: ["NVIDIA", "Groq", "SambaNova"], biggestOpenQuestions: ["Frontier training viability", "Long-term cost per token"], sources: ["needs-verification"] },
  { id: "groq", company: "Groq", category: "AI compute platform (inference specialty)", thesis: "LPU architecture + extreme inference latency + GroqCloud as developer-friendly alternative.", confidence: "marketContext", aiProducts: ["LPU silicon", "GroqCloud"], architecturesUsed: [{architectureId: "llm", usedFor: "Inference of open-weight LLMs at high throughput", confidence: "sourced", evidence: "Public benchmarks"}], dataAdvantage: "Cloud telemetry across customer base", computeStack: "LPU silicon + custom interconnect", deploymentSurface: "GroqCloud + sovereign / on-prem", businessAdvantage: "Low-latency inference; developer-friendly pricing", revenueLogic: "Cloud subscription / per-token", comparisonCompanies: ["Cerebras", "SambaNova", "NVIDIA inference"], biggestOpenQuestions: ["Sustainability of pricing", "Frontier model support cadence"], sources: ["needs-verification"] },
  { id: "tesla-ai", company: "Tesla", category: "Automotive / Robotics / AI Infrastructure", thesis: "Vehicles, robots and autonomy as data-generating embodied-AI platforms; in-house compute (Dojo) + frontier vision models.", confidence: "needsVerification", aiProducts: ["FSD", "Optimus", "Autopilot", "Dojo"], architecturesUsed: [{architectureId: "vit", usedFor: "Perception", confidence: "inferred", evidence: "Tesla AI Day talks"}, {architectureId: "imitation-learning", usedFor: "Driving policy (end-to-end)", confidence: "needsVerification", evidence: "Verify via Tesla AI Day"}, {architectureId: "vla", usedFor: "Optimus locomotion / manipulation", confidence: "inferred", evidence: "Optimus public demos"}], dataAdvantage: "Massive fleet telemetry; growing humanoid trajectory data", computeStack: "Dojo D1 + NVIDIA GPUs; FSD on-vehicle", deploymentSurface: "Vehicles + Optimus + Tesla Cloud", businessAdvantage: "Embodied data scale unmatched in industry; vertical integration", revenueLogic: "Vehicle sales + FSD + future Optimus + future robotaxi", comparisonCompanies: ["Waymo", "Cruise", "Mobileye", "Wayve", "Figure", "1X"], biggestOpenQuestions: ["FSD true safety vs human baseline", "Optimus commercial roadmap", "Dojo vs NVIDIA economics"], sources: ["src-tesla-ai-day", "src-nhtsa-ads", "src-cruise-pause"] , publicEvidence: ["Vehicle-fleet telemetry at scale (Tesla AI Day 2021/2022)","In-house compute referred to as Dojo (public talks)","NHTSA standing order requires Tesla to report L2 ADAS crashes (regulator-side evidence)"], inferredStack: ["Vision-led perception based on transformer-style architectures (consistent with public talks; specific layers undisclosed)","End-to-end policy training via imitation learning is plausible from public messaging but full training recipe is undisclosed","Optimus humanoid policy stack overlaps with FSD compute infra, by Tesla messaging"], unknowns: ["Whether current FSD uses an explicit world model or is end-to-end policy only","Dojo cluster scale, utilisation, and cost per training run vs NVIDIA-based clusters","Robotaxi unit economics + ODD (operational design domain) expansion rate beyond a few cities"] },
  { id: "coreweave", company: "CoreWeave", category: "GPU cloud (neocloud)", thesis: "GPU-only specialty cloud with bare-metal + InfiniBand for AI training and inference; preferred capacity for frontier labs.", confidence: "marketContext", aiProducts: ["GPU IaaS"], architecturesUsed: [], dataAdvantage: "Multi-customer GPU utilisation telemetry", computeStack: "NVIDIA GPUs + InfiniBand + Spectrum-X", deploymentSurface: "Direct + cloud partner", businessAdvantage: "First-at-scale on new NVIDIA platforms; bare-metal preferred by frontier labs", revenueLogic: "GPU IaaS", comparisonCompanies: ["AWS", "Azure", "GCP", "Lambda", "Crusoe"], biggestOpenQuestions: ["Long-term hyperscaler competition", "Capital efficiency"], sources: ["needs-verification"] },
  { id: "azure", company: "Microsoft Azure", category: "Hyperscaler cloud", thesis: "OpenAI exclusivity + Maia in-house + M365 distribution + GB200/GB300 first-at-scale deployments.", confidence: "inferred", aiProducts: ["Azure OpenAI Service", "GitHub Copilot", "Microsoft Copilot", "Azure AI Studio"], architecturesUsed: [], dataAdvantage: "M365 + LinkedIn + GitHub + enterprise data", computeStack: "NVIDIA + Maia + Cobalt", deploymentSurface: "Azure + M365 + Windows", businessAdvantage: "Distribution + OpenAI partnership + enterprise", revenueLogic: "Cloud + M365 + Copilot", comparisonCompanies: ["AWS", "GCP", "Oracle"], biggestOpenQuestions: ["OpenAI long-term", "Maia frontier-training viability"], sources: ["needs-verification"] },
  { id: "waymo", company: "Waymo", category: "Autonomous vehicles", thesis: "Operational robotaxi service in narrow ODDs (Phoenix, SF, LA, Austin) + multi-modal sensor stack + custom compute.", confidence: "sourced", aiProducts: ["Waymo Driver", "Waymo One"], architecturesUsed: [{architectureId: "vit", usedFor: "Perception (BEV / occupancy)", confidence: "inferred", evidence: "Waymo blog and papers"}, {architectureId: "imitation-learning", usedFor: "Planning / driving", confidence: "inferred", evidence: "needsVerification"}], dataAdvantage: "Decade-long Phoenix data + multi-city deployment", computeStack: "Custom on-vehicle + Google TPU for training", deploymentSurface: "Waymo One in select cities", businessAdvantage: "Operating-domain depth; Alphabet capital", revenueLogic: "Per-ride fare; long-term licensing", comparisonCompanies: ["Cruise (paused)", "Tesla FSD", "Zoox", "Pony.ai", "Wayve"], biggestOpenQuestions: ["ODD expansion pace", "Unit economics at scale", "Uber integration"], sources: ["src-nhtsa-ads", "src-cruise-pause"] , publicEvidence: ["Public NHTSA + DMV reporting on driverless miles (NHTSA standing order)","Robotaxi commercial operations in San Francisco, Phoenix, Los Angeles, Austin (public service area maps)","Independent safety reports published periodically"], inferredStack: ["Multi-sensor fusion (lidar + radar + camera) plus ML perception is standard for the robotaxi category; Waymo specifics consistent with public papers","Foundation-model-style components for prediction / planning are reportedly under research"], unknowns: ["Per-mile economics + intervention rate detail at current ODD","Specific planning / prediction architecture beyond high-level disclosures"] },
  { id: "figure", company: "Figure AI", category: "Humanoid robotics", thesis: "Commercial humanoids for industrial then consumer; partnerships with BMW etc.; in-house foundation model (Helix).", confidence: "marketContext", aiProducts: ["Figure 02", "Helix"], architecturesUsed: [{architectureId: "vla", usedFor: "Helix policy", confidence: "inferred", evidence: "Public demos"}], dataAdvantage: "Customer-deployment telemetry", computeStack: "On-robot compute + cloud training", deploymentSurface: "Industrial customers", businessAdvantage: "First-mover in commercial humanoid deployment", revenueLogic: "Hardware sales / leases; long-term services", comparisonCompanies: ["1X", "Apptronik", "Tesla Optimus", "Boston Dynamics", "Sanctuary AI"], biggestOpenQuestions: ["Reliability at scale", "Unit economics", "Foundation-model generalisation"], sources: ["needs-verification"] , publicEvidence: ["Public demos of bipedal locomotion + manipulation tasks","Disclosed partnership with OpenAI for language-conditioned policies (joint announcement)"], inferredStack: ["VLA-class policy architecture for language-conditioned manipulation, consistent with public field direction","On-robot perception likely transformer-based (industry-standard); specifics not disclosed"], unknowns: ["Real fleet size, hours of teleop data collected, and customer count","Cost-per-task vs human labour benchmark","Production deployments outside controlled demos"] },
  { id: "physical-intelligence", company: "Physical Intelligence (Pi)", category: "Robotics foundation models", thesis: "Generalist robot foundation models on diverse embodiments; sell models / services rather than hardware.", confidence: "marketContext", aiProducts: ["&pi;0", "&pi;0.5"], architecturesUsed: [{architectureId: "vla", usedFor: "Generalist policies", confidence: "sourced", evidence: "Public papers"}], dataAdvantage: "Cross-embodiment data collection", computeStack: "GPU clusters", deploymentSurface: "Research + commercial robotics partnerships", businessAdvantage: "Cross-embodiment generalisation lead", revenueLogic: "Model licensing / services", comparisonCompanies: ["Skild AI", "Covariant", "Boston Dynamics AI Institute"], biggestOpenQuestions: ["Commercial revenue path", "Embodiment generalisation limits"], sources: ["needs-verification"] },
  { id: "isomorphic-labs", company: "Isomorphic Labs", category: "AI drug discovery", thesis: "AlphaFold-class structure prediction + generative biology + pharma partnerships.", confidence: "marketContext", aiProducts: ["AlphaFold platform internal use", "Drug-discovery platform"], architecturesUsed: [{architectureId: "diffusion-bio", usedFor: "Structure prediction / design", confidence: "sourced", evidence: "Nature 2024"}, {architectureId: "protein-lm", usedFor: "Sequence reasoning", confidence: "sourced", evidence: "Public papers"}], dataAdvantage: "Alphabet research ecosystem", computeStack: "Google Cloud + TPU", deploymentSurface: "Pharma partnerships (Lilly, Novartis)", businessAdvantage: "DeepMind heritage; AlphaFold", revenueLogic: "Multi-year pharma partnerships", comparisonCompanies: ["Recursion", "Insilico Medicine", "Generate Biomedicines"], biggestOpenQuestions: ["Clinical-translation evidence", "Capital independence"], sources: ["needs-verification"] },
  { id: "abridge", company: "Abridge", category: "Clinical documentation", thesis: "Ambient clinical scribes deeply integrated with Epic / Cerner; high-velocity health-system deployment.", confidence: "marketContext", aiProducts: ["Abridge clinical scribe"], architecturesUsed: [{architectureId: "asr-tts", usedFor: "Speech recognition", confidence: "inferred", evidence: "Vendor materials"}, {architectureId: "domain-fm", usedFor: "Clinical-note generation", confidence: "inferred", evidence: "Vendor materials"}], dataAdvantage: "Health-system encounter data", computeStack: "Cloud + on-prem options", deploymentSurface: "Health-system EHR integration", businessAdvantage: "Specialty integration depth + clinician trust", revenueLogic: "Per-clinician seat licence", comparisonCompanies: ["Microsoft / Nuance DAX", "Augmedix", "Suki", "DeepScribe"], biggestOpenQuestions: ["Clinician-time-savings durability", "AI procurement consolidation"], sources: ["needs-verification"] },
  { id: "palantir", company: "Palantir", category: "Government / enterprise analytics", thesis: "Foundry + AIP for ontologies and operational AI; deep government and enterprise relationships.", confidence: "marketContext", aiProducts: ["Foundry", "Apollo", "AIP"], architecturesUsed: [{architectureId: "rag", usedFor: "Ontology-grounded LLM responses", confidence: "inferred", evidence: "Vendor materials"}, {architectureId: "tool-agents", usedFor: "Operational workflows", confidence: "inferred", evidence: "Vendor materials"}], dataAdvantage: "Customer ontologies + government integrations", computeStack: "Cloud + on-prem", deploymentSurface: "Government, defence, large enterprise", businessAdvantage: "Ontology depth + procurement know-how", revenueLogic: "Multi-year contracts", comparisonCompanies: ["BAE Systems", "Booz Allen", "C3 AI"], biggestOpenQuestions: ["Mid-market expansion", "AIP differentiation vs hyperscaler clouds"], sources: ["needs-verification"] },
  { id: "stripe", company: "Stripe", category: "Payments / fraud", thesis: "Real-time fraud (Radar) + billing + AI agents for commerce; deep payments-graph data.", confidence: "marketContext", aiProducts: ["Radar", "Stripe Tax", "Stripe Sigma", "Stripe Issuing"], architecturesUsed: [{architectureId: "gbdt", usedFor: "Real-time fraud scoring", confidence: "sourced", evidence: "Public Stripe engineering posts"}, {architectureId: "graph-threat", usedFor: "Network fraud", confidence: "sourced", evidence: "Public Stripe engineering posts"}], dataAdvantage: "Payments graph at internet scale", computeStack: "Cloud + custom infrastructure", deploymentSurface: "Stripe API / dashboard", businessAdvantage: "Payments graph + developer experience", revenueLogic: "Per-transaction fee + value-added services", comparisonCompanies: ["Adyen", "PayPal", "FeatureSpace (Visa)"], biggestOpenQuestions: ["LLM agentic commerce", "Long-term Visa / Mastercard relationship"], sources: ["needs-verification"] },
  { id: "github-copilot", company: "GitHub Copilot (Microsoft)", category: "Developer tools", thesis: "Default coding copilot inside the dominant code host; multi-model backend.", confidence: "inferred", aiProducts: ["Copilot Individual / Business / Enterprise", "Copilot Workspace"], architecturesUsed: [{architectureId: "domain-fm", usedFor: "Code completion", confidence: "sourced", evidence: "Public OpenAI / Microsoft announcements"}, {architectureId: "tool-agents", usedFor: "Copilot Workspace agentic flows", confidence: "sourced", evidence: "Product launches"}], dataAdvantage: "GitHub repositories + developer telemetry", computeStack: "Azure", deploymentSurface: "GitHub + IDE integrations", businessAdvantage: "Distribution; default placement", revenueLogic: "Seat-based subscriptions", comparisonCompanies: ["Cursor / Anysphere", "Anthropic Claude Code", "Codeium / Windsurf", "JetBrains AI"], biggestOpenQuestions: ["Cursor competition", "Agentic reliability", "OpenAI vs Anthropic backend mix"], sources: ["needs-verification"] },
  { id: "cursor", company: "Cursor (Anysphere)", category: "Developer tools", thesis: "Best-in-class developer AI experience built around frontier models; agent depth.", confidence: "inferred", aiProducts: ["Cursor IDE", "Cursor Composer", "Cursor Agents"], architecturesUsed: [{architectureId: "tool-agents", usedFor: "Agentic editing", confidence: "inferred", evidence: "Public product launches"}], dataAdvantage: "Developer-session telemetry", computeStack: "Multi-model backend", deploymentSurface: "Cursor IDE", businessAdvantage: "Developer love; rapid iteration", revenueLogic: "Seat subscriptions", comparisonCompanies: ["GitHub Copilot", "Claude Code", "Replit Agent"], biggestOpenQuestions: ["Hyperscaler bundling risk", "Long-term backend strategy"], sources: ["needs-verification"] },
  { id: "harvey", company: "Harvey", category: "Legal AI", thesis: "Default legal AI for large law firms; deep RAG over client + firm data; partnerships with Big Law.", confidence: "marketContext", aiProducts: ["Harvey Assistant", "Harvey Vault", "Harvey Workflows"], architecturesUsed: [{architectureId: "rag", usedFor: "Legal research grounding", confidence: "inferred", evidence: "Vendor materials"}], dataAdvantage: "Big-law deployments", computeStack: "Cloud (Azure / OpenAI)", deploymentSurface: "Direct to law firms", businessAdvantage: "Brand + Big Law relationships", revenueLogic: "Seat / firm subscriptions", comparisonCompanies: ["Lexis+ AI", "Casetext (Thomson Reuters)", "Robin AI", "Spellbook"], biggestOpenQuestions: ["Mid-market expansion", "Vendor lock-in vs OpenAI dependence"], sources: ["needs-verification"] },
  { id: "glean", company: "Glean", category: "Enterprise search / productivity", thesis: "Permission-aware enterprise RAG + workplace agents; default enterprise-knowledge surface.", confidence: "marketContext", aiProducts: ["Glean Assistant", "Glean Search", "Glean Apps"], architecturesUsed: [{architectureId: "rag", usedFor: "Enterprise search", confidence: "inferred", evidence: "Vendor materials"}, {architectureId: "embeddings", usedFor: "Semantic retrieval", confidence: "inferred", evidence: "Vendor materials"}], dataAdvantage: "Permissioned enterprise corpus", computeStack: "Cloud (multi-cloud)", deploymentSurface: "Enterprise SaaS", businessAdvantage: "Permissioning depth; data hygiene", revenueLogic: "Per-seat enterprise subscription", comparisonCompanies: ["Microsoft Copilot for M365", "Notion AI", "Slack AI"], biggestOpenQuestions: ["Hyperscaler bundling risk", "Long-term defensibility"], sources: ["needs-verification"] },
  { id: "tiktok-bytedance", company: "TikTok / ByteDance", category: "Consumer recommendation", thesis: "Recsys depth at planetary scale; Doubao consumer LLM + creator-tools strategy.", confidence: "marketContext", aiProducts: ["TikTok recsys", "Doubao", "Coze"], architecturesUsed: [{architectureId: "recsys", usedFor: "TikTok feed", confidence: "sourced", evidence: "Public engineering posts"}, {architectureId: "llm", usedFor: "Doubao", confidence: "sourced", evidence: "Public model releases"}], dataAdvantage: "Massive engagement telemetry", computeStack: "China + global cloud mix", deploymentSurface: "TikTok + Douyin + China consumer apps", businessAdvantage: "Recsys + creator network", revenueLogic: "Ads + e-commerce", comparisonCompanies: ["Meta", "YouTube", "Snap", "Kuaishou"], biggestOpenQuestions: ["US regulatory pressure", "Doubao global penetration"], sources: ["needs-verification"] },
  { id: "elevenlabs", company: "ElevenLabs", category: "Audio / voice AI", thesis: "Best-in-class voice cloning + dubbing + creator tools; expanding into agents.", confidence: "marketContext", aiProducts: ["Voice generation", "Voice cloning", "Conversational AI", "Dubbing"], architecturesUsed: [{architectureId: "asr-tts", usedFor: "TTS / speech synthesis", confidence: "sourced", evidence: "Public model releases"}], dataAdvantage: "Voice-data scale + customer telemetry", computeStack: "Cloud GPU", deploymentSurface: "Web + API + creator tools", businessAdvantage: "Quality + developer ecosystem", revenueLogic: "Subscription + API", comparisonCompanies: ["OpenAI Voice", "Suno", "Udio", "Google Audio"], biggestOpenQuestions: ["Rights / consent governance", "Hyperscaler audio competition"], sources: ["needs-verification"] },
  { id: "perplexity", company: "Perplexity", category: "Consumer search / agent", thesis: "AI-native search with citations + agentic browser + sovereign distribution partnerships.", confidence: "marketContext", aiProducts: ["Perplexity Search", "Perplexity Pro", "Comet"], architecturesUsed: [{architectureId: "rag", usedFor: "Citation-grounded search", confidence: "inferred", evidence: "Vendor materials"}, {architectureId: "tool-agents", usedFor: "Agentic browsing", confidence: "inferred", evidence: "Vendor materials"}], dataAdvantage: "Search query telemetry", computeStack: "Multi-cloud frontier-model backends", deploymentSurface: "Web + iOS / Android + browser", businessAdvantage: "Citation-grounded brand + agentic vision", revenueLogic: "Subscription + API + future ads", comparisonCompanies: ["Google Gemini Search", "OpenAI Search", "Anthropic web"], biggestOpenQuestions: ["Search-revenue model", "Frontier-model dependency"], sources: ["needs-verification"] },

  /* ===== Phase 2.A company gameboard expansion (18 new) ===== */

  { id: "cohere", company: "Cohere", category: "Frontier model lab (enterprise)", thesis: "Enterprise-first frontier models + sovereign + RAG-native fine-tuning.", confidence: "marketContext", aiProducts: ["Command R / R+", "Embed", "Rerank"], architecturesUsed: [{architectureId: "llm", usedFor: "General-purpose models tuned for retrieval", confidence: "sourced", evidence: "Public model cards"}, {architectureId: "embeddings", usedFor: "Embed / Rerank", confidence: "sourced", evidence: "Public products"}], dataAdvantage: "Enterprise + sovereign deployment data", computeStack: "Multi-cloud + Oracle partnership", deploymentSurface: "API + Oracle Cloud + Bedrock", businessAdvantage: "Enterprise + RAG pedigree; founder pedigree", revenueLogic: "Enterprise + API", comparisonCompanies: ["Anthropic", "Mistral", "OpenAI"], biggestOpenQuestions: ["Frontier scaling without consumer", "Sovereign-AI revenue mix"], sources: ["needs-verification"] , publicEvidence: ["Command R / R+ + Embed + Rerank model releases","Oracle Cloud + AWS Bedrock + Google Vertex availability"], inferredStack: ["Retrieval-augmented architecture plus enterprise fine-tuning (consistent with product positioning)","Sovereign-AI deployments per public partnership announcements"], unknowns: ["Frontier-scale revenue + deployment depth vs OpenAI / Anthropic","Specific sovereign customer revenue contributions"] },

  { id: "salesforce", company: "Salesforce", category: "Enterprise SaaS + AI", thesis: "Agentforce as autonomous business agents on top of CRM + Data Cloud.", confidence: "marketContext", aiProducts: ["Einstein", "Agentforce", "Data Cloud + AI"], architecturesUsed: [{architectureId: "tool-agents", usedFor: "Agentforce", confidence: "sourced", evidence: "Dreamforce announcements"}, {architectureId: "rag", usedFor: "Data Cloud retrieval", confidence: "inferred", evidence: "Product launches"}], dataAdvantage: "CRM + customer data; Data Cloud", computeStack: "Public cloud", deploymentSurface: "Salesforce SaaS surface", businessAdvantage: "Distribution into F500 + customer ownership", revenueLogic: "Per-action / per-conversation pricing for Agentforce", comparisonCompanies: ["ServiceNow", "Microsoft Dynamics", "Oracle"], biggestOpenQuestions: ["Per-action pricing economics", "Reliability of agent autonomy"], sources: ["needs-verification"] },


  { id: "databricks", company: "Databricks", category: "Data + AI platform", thesis: "Unified data + AI platform with Mosaic AI for fine-tuning + serving on lakehouse.", confidence: "marketContext", aiProducts: ["Databricks Mosaic AI", "DBRX", "Genie + AI/BI"], architecturesUsed: [{architectureId: "llm", usedFor: "DBRX + customer fine-tunes", confidence: "sourced", evidence: "Public model release"}, {architectureId: "rag", usedFor: "AI/BI Genie + Vector Search", confidence: "inferred", evidence: "Product launches"}], dataAdvantage: "Lakehouse customer data", computeStack: "Multi-cloud", deploymentSurface: "Databricks workspace", businessAdvantage: "Lakehouse moat + Mosaic acquisition", revenueLogic: "Compute + AI platform consumption", comparisonCompanies: ["Snowflake", "Microsoft Fabric", "Google BigQuery"], biggestOpenQuestions: ["Snowflake competitive position", "Open-weight model competitiveness"], sources: ["needs-verification"] },




  { id: "boston-dynamics", company: "Boston Dynamics", category: "Robotics", thesis: "Atlas (electric) + Stretch + Spot deployments backed by Hyundai industrial scale.", confidence: "needsVerification", aiProducts: ["Atlas", "Spot", "Stretch", "Orbit"], architecturesUsed: [{architectureId: "rl-control", usedFor: "Locomotion + manipulation", confidence: "inferred", evidence: "Vendor materials"}, {architectureId: "vit", usedFor: "Perception", confidence: "inferred", evidence: "Vendor materials"}], dataAdvantage: "Decade+ of robot-control data; Hyundai industrial deployments", computeStack: "On-robot + cloud", deploymentSurface: "Industrial / inspection", businessAdvantage: "Proven control engineering; brand", revenueLogic: "Robot sales + service", comparisonCompanies: ["ANYbotics", "Agility", "Figure"], biggestOpenQuestions: ["Atlas commercialisation timeline", "AI policy depth"], sources: ["needs-verification"] , publicEvidence: ["Decade+ of public locomotion + manipulation research and product launches (Spot, Stretch, Atlas)","Hyundai industrial deployment partnerships"], inferredStack: ["Classical model-predictive control + RL hybrid for legged locomotion (consistent with public papers)","Perception likely transformer-based on Atlas; specifics undisclosed"], unknowns: ["Atlas (electric) commercial readiness timeline","Depth of foundation-model use in current control stack"] },


  { id: "tempus", company: "Tempus AI", category: "Healthcare / clinical AI", thesis: "Multi-modal clinical data platform + AI applications across oncology, cardiology, neurology.", confidence: "needsVerification", aiProducts: ["Tempus Lens", "Tempus One", "Tempus Next"], architecturesUsed: [{architectureId: "domain-fm", usedFor: "Clinical FM", confidence: "inferred", evidence: "Vendor materials"}, {architectureId: "vit", usedFor: "Pathology + imaging", confidence: "inferred", evidence: "Vendor materials"}], dataAdvantage: "Tempus oncology + cardiology data", computeStack: "Cloud", deploymentSurface: "Clinician + pharma surfaces", businessAdvantage: "Data + clinician network", revenueLogic: "Diagnostics + pharma data + AI applications", comparisonCompanies: ["Flatiron", "PathAI", "Concert AI"], biggestOpenQuestions: ["Path to profitability", "Clinical AI deployment scale"], sources: ["src-tempus-s1"] , publicEvidence: ["Tempus AI S-1 / 10-K filings (US SEC)","Disclosed pharma partnerships + diagnostic product portfolio"], inferredStack: ["Multi-modal clinical data + ML applications across oncology, cardiology, neurology","Domain-tuned models for specific clinical / research tasks"], unknowns: ["Whether internal models meet a strict foundation-model definition vs domain-tuned models","Per-product clinical efficacy cited in public studies"] },


  { id: "bloomberg", company: "Bloomberg", category: "Finance data + AI", thesis: "BloombergGPT + AI-assisted analyst tools sit on top of Bloomberg's market + alternative data.", confidence: "marketContext", aiProducts: ["BloombergGPT (research)", "AI on the Terminal", "Bloomberg AI tools"], architecturesUsed: [{architectureId: "domain-fm", usedFor: "Finance LLM", confidence: "sourced", evidence: "BloombergGPT paper"}, {architectureId: "rag", usedFor: "Terminal AI", confidence: "inferred", evidence: "Product launches"}], dataAdvantage: "Bloomberg market + alt data + chat archive", computeStack: "Hybrid", deploymentSurface: "Bloomberg Terminal", businessAdvantage: "Distribution + curated data", revenueLogic: "Terminal subscription + enterprise", comparisonCompanies: ["FactSet", "Refinitiv (LSEG)", "S&amp;P Capital IQ"], biggestOpenQuestions: ["Open vs proprietary AI strategy", "Terminal AI monetisation"], sources: ["needs-verification"] },

  { id: "blackrock-aladdin", company: "BlackRock Aladdin", category: "Finance platform + AI", thesis: "Aladdin as AI-augmented investment + risk platform across asset managers; private + public markets.", confidence: "needsVerification", aiProducts: ["Aladdin", "eFront", "Aladdin AI capabilities (Aladdin Copilot)"], architecturesUsed: [{architectureId: "ts-transformer", usedFor: "Risk modelling", confidence: "inferred", evidence: "Vendor materials"}, {architectureId: "llm", usedFor: "Aladdin Copilot", confidence: "sourced", evidence: "Public announcements"}], dataAdvantage: "Aladdin client portfolios + transactions", computeStack: "Hybrid", deploymentSurface: "Aladdin SaaS", businessAdvantage: "Distribution to asset managers + risk depth", revenueLogic: "Aladdin platform fees", comparisonCompanies: ["MSCI", "FactSet", "SimCorp"], biggestOpenQuestions: ["Aladdin AI consumption", "Private-market expansion"], sources: ["src-aladdin-ai"] , publicEvidence: ["Aladdin Copilot product announcement (BlackRock vendor page)","Public investor-day disclosures of AI investment"], inferredStack: ["Aladdin platform integrates risk + portfolio + analytics; AI layer is a copilot on top","Mix of in-house and vendor LLMs (specific partner vs in-house unclear)"], unknowns: ["Specific LLM partner(s) or in-house model identity","Customer activation rate and revenue contribution from Aladdin Copilot"] },


  { id: "runway", company: "Runway", category: "Generative video", thesis: "Best-in-class generative video product for film + creative; partnerships with studios.", confidence: "marketContext", aiProducts: ["Gen-3 Alpha", "Gen-4", "Act-One"], architecturesUsed: [{architectureId: "video-models", usedFor: "Generative video", confidence: "sourced", evidence: "Public model releases"}, {architectureId: "diffusion", usedFor: "Image / video generation", confidence: "sourced", evidence: "Public papers"}], dataAdvantage: "Curated training data + creator usage", computeStack: "Cloud GPU", deploymentSurface: "Web + API", businessAdvantage: "Creator brand + film studio relationships", revenueLogic: "Subscription + API + studio deals", comparisonCompanies: ["OpenAI Sora", "Pika", "Luma"], biggestOpenQuestions: ["Sora competitive pressure", "Film studio adoption depth"], sources: ["needs-verification"] , publicEvidence: ["Public Gen-3 Alpha / Gen-4 / Act-One model releases","Disclosed partnerships with film studios"], inferredStack: ["Video diffusion architecture consistent with the broader latent-diffusion + temporal-conditioning category","Curated training data plus creator usage telemetry"], unknowns: ["Comparative quality vs Sora / Veo across genres","Studio adoption depth vs per-creator subscription revenue mix"] },



];

/* ============================================
   COMPANY_STARTUP_OPPORTUNITIES
   ============================================
   Per-company &lsquo;what a startup can copy or localise&rsquo; map.
   Surfaces in the company strategy panel. Designed to be honest about
   where second-mover or vertical execution is realistic and where
   incumbent advantages are too deep.
   ============================================ */
var COMPANY_STARTUP_OPPORTUNITIES = {
  "openai": "Vertical agentic products on OpenAI&rsquo;s API where ChatGPT&rsquo;s horizontal experience under-serves a domain &mdash; legal, medical, audit. Avoid generic chat-assistant clones.",
  "anthropic": "Enterprise-trust + safety-grounded vertical agents (Claude Code-style) for niche stacks; sovereign / regulated Claude deployments at the country level.",
  "google-deepmind": "Pick research artefacts that Google does not productise (AlphaProof, AlphaGeometry-class) and build vertical wrappers; vertical Gemini deployments outside Google&rsquo;s direct reach.",
  "xai": "X-distribution adjacent products; verticalised Grok deployments where X is the audience; do not try to compete on frontier scale.",
  "meta-ai": "Open-weight Llama fine-tuning for specific verticals + sovereign deployments; AR-glasses-adjacent assistants in geographies Meta under-serves.",
  "mistral": "Sovereign / regulated EU and partner-country deployments; Mistral fine-tunes for industries where US frontier-model use is contested.",
  "deepseek": "DeepSeek-quality open-weight models hosted with audit + compliance + privacy guarantees for regulated buyers; do not compete head-on with US closed labs.",
  "alibaba-qwen": "Qwen-based multilingual products outside China; Asian-language vertical AI outside the Alibaba Cloud reach.",
  "nvidia": "Picks-and-shovels infrastructure: model-serving, eval, observability, training data infrastructure; do not build silicon. Use NVIDIA dev-kits and inference clouds (Inception programme).",
  "google-tpu": "Workloads that exploit TPU-specific cost curves on Vertex; do not assume external TPU access at the frontier.",
  "aws-silicon": "Vertical applications on AWS Bedrock + Trainium2 cost curves; integrate Anthropic + open-weight models via Bedrock.",
  "microsoft-maia": "M365 / Azure-integrated vertical copilots; channel through Microsoft partner network.",
  "amd": "Inference-cost-driven workloads on MI300X / MI325X for cost-sensitive deployments; sovereign / on-prem AI where AMD has political traction.",
  "cerebras": "Latency-bound inference applications (real-time conversational, search, code completion) where wafer-scale latency wins.",
  "groq": "Latency-bound inference applications; high-throughput code / chat / agent products where per-token cost matters.",
  "tesla-ai": "Adjacent embodied-AI verticals (warehouse, delivery, last-mile) where Tesla does not compete; specialty sensors and autonomy stacks.",
  "coreweave": "Pure-play GPU-cloud orchestration software; SaaS for GPU teleop / data infrastructure; tooling for neocloud customers.",
  "azure": "M365 + Azure-native vertical copilots; FedRAMP-aligned vertical tools.",
  "waymo": "Specialty autonomy outside Waymo&rsquo;s ODD: warehouses, mining, ports, agriculture; AV simulation / data tooling.",
  "figure": "Humanoid teleop, simulation, evaluation and skill-marketplace infrastructure; do not build a competing humanoid unless the form factor is genuinely different.",
  "physical-intelligence": "Robotics evaluation, simulation and teleop infrastructure that Physical Intelligence customers and competitors both need.",
  "isomorphic-labs": "Lab-automation, evaluation and active-learning infrastructure for AI-bio teams; specialty vertical bio-AI in modalities Isomorphic ignores.",
  "abridge": "Specialty-specific scribes (paediatrics, OB, mental health, dentistry); ambient AI for non-traditional clinical settings.",
  "palantir": "Mid-market and SLED-scale ontology + operational AI that Palantir does not chase; FedRAMP-aligned vertical tools.",
  "stripe": "Vertical fraud / risk graph platforms beyond payments (gaming, marketplaces, crypto on-ramps); compliance copilots tightly integrated with Stripe.",
  "github-copilot": "Language- and stack-specific coding agents (Salesforce Apex, COBOL, ABAP, Rust embedded); developer-tools verticals Copilot under-serves.",
  "cursor": "Industry-specific IDEs (legal drafting, scientific notebooks, product design) inspired by Cursor&rsquo;s UX patterns.",
  "harvey": "Specialty practice copilots (immigration, tax, employment, IP) and per-jurisdiction legal AI champions in Asia, LatAm, Africa.",
  "glean": "Vertical enterprise search for highly regulated industries (banking, defence, healthcare ops); sovereign-cloud Glean analogues.",
  "tiktok-bytedance": "Recsys-style platforms for adjacent verticals (live commerce, education, sports); creator-tools verticalised by language.",
  "elevenlabs": "Voice + audio for specific verticals (audiobooks, accessibility, dubbing, gaming); on-device voice AI.",
  "perplexity": "Vertical search (medicine, law, finance, science) with stronger evaluation, citation infrastructure, and rights-clean retrieval."
};

/* Audit-pass v3 entries appended to CLAIM_AUDIT_LOG below */
CLAIM_AUDIT_LOG.push(
  { id: "iss-fdo-ycA16z", domainId: null, claim: "YC / a16z / Sequoia / Bessemer references inside founder dossiers.", issue: "Specific theses or portfolio companies are not cited via primary sources.", action: "All such references inside FOUNDER_OPPORTUNITIES are flagged needsVerification or framed as &lsquo;a16z thesis&rsquo; / &lsquo;YC analogue&rsquo; without specifying portfolio companies.", status: "kept-with-flag" },
  { id: "iss-fdo-china", domainId: null, claim: "China analogues inside founder dossiers.", issue: "China company analogues are not consistently sourced.", action: "All such references are flagged needsVerification.", status: "kept-with-flag" },
  { id: "iss-cs-arch-confidence", domainId: null, claim: "Company architecture claims.", issue: "Specific internal architectures are not always public.", action: "All architecturesUsed entries carry per-claim confidence flags; sourced reserved for public papers / model cards / engineering posts; otherwise inferred or needsVerification.", status: "kept-with-confidence" },
  { id: "iss-cs-startup-opportunity", domainId: null, claim: "&lsquo;What a startup can copy or localise&rsquo;.", issue: "Audit feedback requested an explicit startup-opportunity field per company.", action: "Added COMPANY_STARTUP_OPPORTUNITIES map; surfaced inside the company strategy panel.", status: "tightened" },
  { id: "iss-questions-categories", domainId: null, claim: "Question coverage across math of AI / GPU / infrastructure / agents / robotics / biology / quant / SWE / geopolitics / human history.", issue: "Audit feedback requested deeper coverage in these categories.", action: "Added 90 mastery-grade questions across the requested categories. Total GREAT_AI_QUESTIONS now 154; combined with 126 domain questions the Q&amp;A bank is 280+.", status: "tightened" },
  { id: "iss-bottleneck-evidence", domainId: null, claim: "Bottleneck evidence and confidence.", issue: "Several bottleneck dossiers cite generic regulator / standards-body evidence without per-claim sourcing.", action: "All bottleneck dossiers carry confidence flags; evidence arrays cite the framework names. Specific per-bottleneck publications still flagged for deeper verification.", status: "kept-with-flag" }
);


/* ============================================
   GREAT_AI_QUESTIONS — Mastery-grade question bank
   ============================================
   Not a FAQ. A &lsquo;mastery question system&rsquo; for founders, investors,
   researchers and operators. Each question carries why it matters,
   what a great answer covers, follow-ups, and pointers.
   ============================================ */
var GREAT_AI_QUESTIONS = [
  /* ── A. Core intelligence / math of AI ── */
  { id: "q-scaling-laws-hold-break", question: "Where do scaling laws still hold, and where do they break?", category: "Scaling &amp; Intelligence", audience: "Researcher", difficulty: "advanced", whyThisQuestionMatters: "Scaling laws are the most actionable empirical claim in AI; their durability decides capex strategy.", whatAGreatAnswerShouldCover: ["Distinction between data-, compute- and parameter-scaling", "Domains where scaling has persisted (language, code, vision)", "Domains where it visibly bends (math reasoning, embodied control)", "Role of synthetic data and self-improvement"], followUps: ["What signals would convince you that scaling has broken in language?"], relatedDomains: ["software-engineering", "robotics", "drug-discovery"], relatedArchitectures: ["llm", "vla"], relatedCompanies: ["openai", "anthropic", "google-deepmind"], relatedPapers: ["paper-gpt3", "paper-instructgpt"], sourceIds: [], confidence: "marketContext" },
  { id: "q-loss-function-game", question: "What is the actual loss function being optimised inside a frontier-model lab?", category: "Scaling &amp; Intelligence", audience: "Researcher", difficulty: "advanced", whyThisQuestionMatters: "&lsquo;Next-token loss&rsquo; is the textbook answer; the real loss is a stack of pre-training, post-training, RLHF, RLAIF, RM, internal evals, and product-feedback signals.", whatAGreatAnswerShouldCover: ["Pre-training loss + scaling laws", "Post-training: SFT + DPO + RLHF + RLAIF", "Reward modelling and reward hacking", "Eval-driven training (o-series)"], followUps: ["Where do labs disagree most about the right loss?"], relatedDomains: [], relatedArchitectures: ["llm", "rl-control"], relatedCompanies: ["openai", "anthropic", "google-deepmind"], relatedPapers: ["paper-instructgpt"], sourceIds: [], confidence: "inferred" },
  { id: "q-emergence-real", question: "Is emergence a real phenomenon, or a benchmark artefact?", category: "Scaling &amp; Intelligence", audience: "Researcher", difficulty: "expert", whyThisQuestionMatters: "Emergence shapes how labs allocate compute and how investors value scaling.", whatAGreatAnswerShouldCover: ["Brown-Schaeffer-Koyejo critique on metric choice", "Smooth vs sharp scaling curves", "Genuine capability vs measurement artefact"], followUps: ["What would it take to settle the emergence debate empirically?"], relatedDomains: [], relatedArchitectures: ["llm"], relatedCompanies: ["google-deepmind", "openai"], relatedPapers: [], sourceIds: ["needs-verification"], confidence: "marketContext" },
  { id: "q-attention-vs-future", question: "Is the transformer architecture permanent, or do we move past attention?", category: "Scaling &amp; Intelligence", audience: "Researcher", difficulty: "advanced", whyThisQuestionMatters: "If a post-transformer recipe wins, the entire compute and software stack is repriced.", whatAGreatAnswerShouldCover: ["State-space models (Mamba)", "Mixture-of-Experts at scale", "Memory + retrieval hybrids", "Hardware-software co-design constraints"], followUps: ["Which architecture would win first if cheap inference were 100x cheaper?"], relatedDomains: [], relatedArchitectures: ["llm", "tool-agents"], relatedCompanies: ["openai", "anthropic", "google-deepmind"], relatedPapers: ["paper-attention"], sourceIds: [], confidence: "marketContext" },
  { id: "q-reasoning-vs-memorisation", question: "How do you distinguish real reasoning from sophisticated memorisation?", category: "Scaling &amp; Intelligence", audience: "Researcher", difficulty: "advanced", whyThisQuestionMatters: "Decides whether o-series reasoning models represent a genuine new capability axis.", whatAGreatAnswerShouldCover: ["Compositionality tests", "Out-of-distribution generalisation", "Programs / tools as scaffolding", "Process supervision vs outcome supervision"], followUps: ["What benchmark would convince you a model truly reasons?"], relatedDomains: ["mathematics"], relatedArchitectures: ["llm", "rl-control"], relatedCompanies: ["openai", "google-deepmind"], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-world-models", question: "Are world models necessary for general intelligence, or a research detour?", category: "Scaling &amp; Intelligence", audience: "Researcher", difficulty: "expert", whyThisQuestionMatters: "Reshapes how robotics, autonomous systems and agents are designed.", whatAGreatAnswerShouldCover: ["Dyna / Dreamer line of work", "Video diffusion as world model", "Embodied AI debate"], followUps: ["Will robotics succeed without explicit world models?"], relatedDomains: ["robotics"], relatedArchitectures: ["world-models", "diffusion", "vla"], relatedCompanies: ["google-deepmind", "physical-intelligence"], relatedPapers: ["paper-rt2"], sourceIds: [], confidence: "marketContext" },
  { id: "q-rag-or-finetune", question: "When should you use RAG, when should you fine-tune, and when should you do both?", category: "Architecture choice", audience: "Engineer", difficulty: "intermediate", whyThisQuestionMatters: "One of the most-asked architectural questions in production AI.", whatAGreatAnswerShouldCover: ["RAG = changing knowledge", "Fine-tune = changing behaviour / format", "Hybrid stacks", "Data freshness and citation requirements"], followUps: ["When is it correct to skip both and prompt-engineer?"], relatedDomains: ["legal", "customer-support", "enterprise-productivity"], relatedArchitectures: ["rag", "llm"], relatedCompanies: ["harvey", "glean"], relatedPapers: ["paper-rag"], sourceIds: [], confidence: "marketContext" },
  { id: "q-agent-reliability", question: "What is the unit of progress for agent reliability?", category: "Architecture choice", audience: "Engineer", difficulty: "advanced", whyThisQuestionMatters: "Agent products are gated by long-horizon reliability, not single-step capability.", whatAGreatAnswerShouldCover: ["Per-step accuracy vs end-to-end success", "Tool-use error rates", "Long-horizon planning / memory", "Recovery from failure"], followUps: ["What number of consecutive correct tool calls would convince you agents are production-ready?"], relatedDomains: ["software-engineering", "research-workflows"], relatedArchitectures: ["tool-agents", "multi-agent"], relatedCompanies: ["openai", "anthropic", "cursor"], relatedPapers: ["paper-react", "paper-toolformer"], sourceIds: [], confidence: "inferred" },
  { id: "q-evaluation-strategy", question: "How do you know your AI product is actually getting better?", category: "Evaluation", audience: "Engineer", difficulty: "advanced", whyThisQuestionMatters: "Eval is the most-under-invested layer of applied AI; teams ship regressions silently.", whatAGreatAnswerShouldCover: ["Offline benchmarks vs production traces", "LLM-as-judge calibration", "Human-in-the-loop gold sets", "Distribution drift monitoring"], followUps: ["Where does LLM-as-judge fail catastrophically?"], relatedDomains: ["legal", "clinical-medicine"], relatedArchitectures: ["llm", "rag"], relatedCompanies: ["openai", "anthropic"], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-synthetic-data-limits", question: "Where does synthetic data help, and where does it backfire?", category: "Data", audience: "Researcher", difficulty: "advanced", whyThisQuestionMatters: "Synthetic data is the lever for scaling beyond available human data; misused, it amplifies biases.", whatAGreatAnswerShouldCover: ["Distillation", "Self-play and constitutional AI", "Mode collapse / model collapse", "Diversity preservation"], followUps: ["What is the maximum % of training data that can be synthetic before quality degrades?"], relatedDomains: ["robotics", "drug-discovery"], relatedArchitectures: ["llm", "diffusion"], relatedCompanies: ["openai", "anthropic", "physical-intelligence"], relatedPapers: [], sourceIds: [], confidence: "inferred" },

  /* ── B. Infrastructure / hardware ── */
  { id: "q-gpu-vs-asic", question: "Why does NVIDIA still beat custom ASICs at frontier-scale training?", category: "Infrastructure", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Decides whether hyperscaler ASICs erode NVIDIA&rsquo;s data-centre margin.", whatAGreatAnswerShouldCover: ["CUDA software depth", "Networking (NVLink, InfiniBand, Spectrum-X)", "Reference systems (NVL72)", "Generation cadence"], followUps: ["What single ASIC programme is most likely to cross the gap?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["nvidia", "google-tpu", "aws-silicon", "microsoft-maia", "amd"], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-memory-bandwidth-wall", question: "Why does memory bandwidth, not FLOPS, decide modern AI economics?", category: "Infrastructure", audience: "Engineer", difficulty: "intermediate", whyThisQuestionMatters: "Inference is bandwidth-bound; capex strategy follows HBM, not FLOPS.", whatAGreatAnswerShouldCover: ["Arithmetic intensity", "HBM3 / HBM3E / HBM4 generations", "MoE routing economics", "KV-cache and context cost"], followUps: ["What KV-cache innovation would most change inference unit economics?"], relatedDomains: [], relatedArchitectures: ["llm"], relatedCompanies: ["nvidia", "amd", "cerebras", "groq"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-interconnect-moat", question: "Why is interconnect (NVLink, InfiniBand, Spectrum-X) part of the moat?", category: "Infrastructure", audience: "Engineer", difficulty: "advanced", whyThisQuestionMatters: "Modern training scales with collective-operation efficiency.", whatAGreatAnswerShouldCover: ["NCCL collectives", "Bandwidth and topology", "Failure domains in 100K-GPU clusters"], followUps: ["What would it take for Ethernet-based fabrics to fully replace InfiniBand at the frontier?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["nvidia"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-inference-economics", question: "What is the true unit cost of a token at frontier scale?", category: "Infrastructure", audience: "Operator", difficulty: "advanced", whyThisQuestionMatters: "Drives every consumer- and enterprise-AI pricing decision.", whatAGreatAnswerShouldCover: ["Power, cooling, capex amortisation", "MFU and utilisation", "Batching and KV-cache reuse", "Hyperscaler vs neocloud"], followUps: ["What would 100x cheaper inference unlock that is unit-economic-impossible today?"], relatedDomains: [], relatedArchitectures: ["llm"], relatedCompanies: ["nvidia", "azure", "coreweave"], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-distributed-training-failure", question: "How does a 100K-GPU run survive failure rates that would kill a server?", category: "Infrastructure", audience: "Engineer", difficulty: "expert", whyThisQuestionMatters: "Frontier training is more like running a refinery than running a program.", whatAGreatAnswerShouldCover: ["Checkpointing strategy", "Fault-tolerant parallelism (FSDP, ZeRO)", "Hot spares and orchestration", "Network failure isolation"], followUps: ["What is the largest cluster size where current orchestration scales?"], relatedDomains: [], relatedArchitectures: ["llm"], relatedCompanies: ["nvidia", "azure", "coreweave"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-power-bottleneck", question: "Why is power, not GPUs, the binding constraint on AI build-outs?", category: "Infrastructure", audience: "Investor", difficulty: "intermediate", whyThisQuestionMatters: "Sets the real cap on the next decade of training and inference.", whatAGreatAnswerShouldCover: ["Grid interconnect timelines", "Transformer shortages", "Behind-the-meter strategies (stranded gas, SMRs)", "Sovereign AI politics"], followUps: ["Which region will hit the power wall first?"], relatedDomains: ["energy-grid"], relatedArchitectures: [], relatedCompanies: ["nvidia", "azure", "coreweave"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-hbm-cowos-supply", question: "How fragile is the HBM and CoWoS supply chain?", category: "Infrastructure", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "These two layers gate every frontier accelerator on Earth.", whatAGreatAnswerShouldCover: ["SK hynix / Micron / Samsung shares", "TSMC CoWoS-S vs L vs R", "Geographic concentration"], followUps: ["What single supply-chain event would most disrupt frontier AI in 18 months?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["nvidia"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-co-packaged-optics", question: "When does co-packaged optics become economically necessary?", category: "Infrastructure", audience: "Engineer", difficulty: "expert", whyThisQuestionMatters: "Bandwidth scaling will force CPO; the timing reshapes networking incumbents.", whatAGreatAnswerShouldCover: ["Pluggable optics power limits", "Switch-ASIC integration", "Reliability and repair", "Vendor landscape (Broadcom, Marvell, NVIDIA)"], followUps: ["Which lab will be first to deploy CPO in production at scale?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["nvidia"], relatedPapers: [], sourceIds: [], confidence: "forwardLooking" },
  { id: "q-ai-factory-meaning", question: "What does it actually mean to call a data centre an AI factory?", category: "Infrastructure", audience: "Operator", difficulty: "intermediate", whyThisQuestionMatters: "Forces a unit-economics framing on AI infrastructure.", whatAGreatAnswerShouldCover: ["Tokens per kWh", "Capex amortisation per token", "Utilisation across workloads", "Industrial parallels"], followUps: ["What is the unit of production: tokens, reasoning steps, robot policies, or simulations?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["nvidia"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-cuda-moat", question: "What is the most under-appreciated part of the CUDA moat?", category: "Infrastructure", audience: "Engineer", difficulty: "advanced", whyThisQuestionMatters: "Decides how fast hyperscaler ASICs and AMD ROCm can erode NVIDIA.", whatAGreatAnswerShouldCover: ["Library depth (cuDNN, NCCL, CUTLASS)", "Backwards compatibility", "Tooling ecosystem", "Developer workflow"], followUps: ["What single CUDA capability is hardest to replicate?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["nvidia"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-china-stack", question: "How does the China AI stack diverge from the US stack?", category: "Infrastructure", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Export controls + domestic substitution drive a parallel ecosystem.", whatAGreatAnswerShouldCover: ["Huawei Ascend, Moore Threads", "DeepSeek + Qwen open-weight strategy", "Domestic HBM + advanced packaging", "Sovereign AI in China"], followUps: ["Which Chinese player is most likely to break out globally?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["alibaba-qwen", "deepseek"], relatedPapers: [], sourceIds: [], confidence: "inferred" },

  /* ── C. Company strategy ── */
  { id: "q-openai-moat", question: "What is OpenAI&rsquo;s real moat beyond ChatGPT?", category: "Company strategy", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Sets up valuation thesis for the whole frontier-lab category.", whatAGreatAnswerShouldCover: ["Distribution (consumer + Microsoft)", "RLHF + reasoning post-training data", "Product velocity", "Compute access via Azure"], followUps: ["What kills OpenAI: Microsoft tension, capital intensity, or model parity?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["openai", "azure"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-anthropic-strategy", question: "What is Anthropic&rsquo;s real strategic edge?", category: "Company strategy", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Determines whether the safety-first positioning is product strategy or branding.", whatAGreatAnswerShouldCover: ["Constitutional AI", "Enterprise trust", "Coding model strength", "Multi-cloud distribution"], followUps: ["Where is Anthropic structurally weaker than OpenAI?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["anthropic"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-google-deepmind-distribution", question: "Why does Google have so much AI but so little narrative?", category: "Company strategy", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Decides whether Search&rsquo;s AI Overviews cannibalise the ad business.", whatAGreatAnswerShouldCover: ["Search-revenue cannibalisation risk", "Gemini cycles", "TPU + DeepMind research", "Workspace integration"], followUps: ["What one Google product would single-handedly demonstrate AI dominance?"], relatedDomains: ["consumer-search"], relatedArchitectures: [], relatedCompanies: ["google-deepmind", "google-tpu"], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-tesla-data-edge", question: "Does Tesla&rsquo;s embodied data give it a real AI advantage?", category: "Company strategy", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Bridges autonomy and humanoid theses.", whatAGreatAnswerShouldCover: ["Fleet scale", "End-to-end vs modular planning", "Optimus data collection", "Dojo economics"], followUps: ["What evidence would settle the FSD-vs-Waymo debate?"], relatedDomains: ["autonomous-vehicles", "robotics"], relatedArchitectures: ["vit", "vla"], relatedCompanies: ["tesla-ai", "waymo"], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-meta-open-weights", question: "What is Meta really buying with Llama&rsquo;s open-weight strategy?", category: "Company strategy", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Frames the open-vs-closed strategic axis.", whatAGreatAnswerShouldCover: ["Talent flywheel", "Commodifying competitor advantage", "Ad-targeting + AR/VR integration", "Sovereign AI partnerships"], followUps: ["What would change if Llama 5 closed weights?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["meta-ai"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-deepseek-implications", question: "What did DeepSeek-R1 actually prove?", category: "Company strategy", audience: "Investor", difficulty: "expert", whyThisQuestionMatters: "Repriced the cost-of-frontier debate overnight.", whatAGreatAnswerShouldCover: ["Compute efficiency claims", "Reasoning post-training quality", "Open-weight commercial implications", "China export-control reading"], followUps: ["What part of DeepSeek&rsquo;s claims is hardest to verify independently?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["deepseek"], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-hyperscaler-asic-thesis", question: "If every hyperscaler builds custom silicon, what does NVIDIA actually lose?", category: "Company strategy", audience: "Investor", difficulty: "expert", whyThisQuestionMatters: "Central question for next-decade AI compute valuation.", whatAGreatAnswerShouldCover: ["Internal vs external workloads", "Software lock-in via CUDA", "Networking + systems integration", "Frontier-training cadence"], followUps: ["What part of NVIDIA&rsquo;s value capture might actually become stronger?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["nvidia", "google-tpu", "aws-silicon", "microsoft-maia", "meta-ai"], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-cursor-vs-copilot", question: "Does Cursor have a structural advantage over GitHub Copilot?", category: "Company strategy", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Tests whether dev-tools UX can outweigh distribution.", whatAGreatAnswerShouldCover: ["Speed of iteration", "Multi-model backends", "Agentic depth", "Hyperscaler bundling risk"], followUps: ["Where does Cursor&rsquo;s advantage erode?"], relatedDomains: ["software-engineering"], relatedArchitectures: ["tool-agents"], relatedCompanies: ["cursor", "github-copilot"], relatedPapers: ["paper-swebench"], sourceIds: [], confidence: "inferred" },
  { id: "q-physical-intelligence-strategy", question: "Will robotics foundation-model labs sell software or hardware?", category: "Company strategy", audience: "Investor", difficulty: "expert", whyThisQuestionMatters: "Decides the structure of the physical-AI economy.", whatAGreatAnswerShouldCover: ["Pi vs Figure vs 1X strategies", "Hardware partnerships", "Cross-embodiment generalisation", "Capital intensity"], followUps: ["Which company will be the &lsquo;NVIDIA of robotics&rsquo;?"], relatedDomains: ["robotics"], relatedArchitectures: ["vla"], relatedCompanies: ["physical-intelligence", "figure", "tesla-ai"], relatedPapers: ["paper-rt2", "paper-open-x"], sourceIds: [], confidence: "forwardLooking" },

  /* ── D. Domain questions ── */
  { id: "q-bio-vs-software-pace", question: "Why is software-AI iterating faster than bio-AI despite similar talent?", category: "Domains", audience: "Founder", difficulty: "intermediate", whyThisQuestionMatters: "Explains why bio capital cycles are decade-class.", whatAGreatAnswerShouldCover: ["Wet-lab feedback loop", "Clinical translation", "Regulatory cycle", "Capital intensity"], followUps: ["What would shrink bio cycles by 5x?"], relatedDomains: ["drug-discovery", "software-engineering"], relatedArchitectures: [], relatedCompanies: ["isomorphic-labs"], relatedPapers: ["paper-alphafold2"], sourceIds: [], confidence: "marketContext" },
  { id: "q-medicine-imaging-mature", question: "Why is medical imaging the most-deployed AI in healthcare?", category: "Domains", audience: "Beginner", difficulty: "beginner", whyThisQuestionMatters: "Reveals why digital + pattern-rich + narrow tasks deploy first in regulated domains.", whatAGreatAnswerShouldCover: ["Digital input + structured workflow", "Narrow tasks", "FDA SaMD pathway", "Liability containment"], followUps: ["Which other clinical workflows fit the same pattern?"], relatedDomains: ["radiology", "pathology", "ophthalmology"], relatedArchitectures: ["unet", "vit"], relatedCompanies: ["abridge"], relatedPapers: ["paper-unet", "paper-nnunet"], sourceIds: ["src-fda-samd"], confidence: "marketContext" },
  { id: "q-quant-vs-banking-ai", question: "How does quant AI differ from banking AI?", category: "Domains", audience: "Investor", difficulty: "intermediate", whyThisQuestionMatters: "Conflating the two leads founders to apply quant playbooks where they fail under MRM.", whatAGreatAnswerShouldCover: ["Alpha vs auditability", "Eval discipline", "Regulator expectations", "Research velocity"], followUps: ["Which bank function is closest to quant in AI maturity?"], relatedDomains: ["banking", "quant-finance"], relatedArchitectures: ["gbdt", "ts-transformer"], relatedCompanies: ["palantir"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-legal-rag-default", question: "Why is legal AI a RAG-first market?", category: "Domains", audience: "Operator", difficulty: "intermediate", whyThisQuestionMatters: "Explains the dominant architecture choice in legal.", whatAGreatAnswerShouldCover: ["Citation-grounding requirements", "Privilege / privacy", "Jurisdictional fragmentation", "Liability"], followUps: ["When is fine-tuning the right legal-AI choice?"], relatedDomains: ["legal"], relatedArchitectures: ["rag", "llm"], relatedCompanies: ["harvey"], relatedPapers: ["paper-rag"], sourceIds: [], confidence: "sourced" },
  { id: "q-edu-tutoring-evidence", question: "What evidence would convince you AI tutoring works?", category: "Domains", audience: "Researcher", difficulty: "advanced", whyThisQuestionMatters: "Frames the evidence-bar for ed-tech procurement.", whatAGreatAnswerShouldCover: ["RCT-grade studies", "Transfer to standardised testing", "Long-term retention", "Equity gaps"], followUps: ["Which subject is most likely to show robust gains first?"], relatedDomains: ["education"], relatedArchitectures: ["llm", "rag"], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-robotics-data-scale", question: "What data scale would unlock generalist humanoids?", category: "Domains", audience: "Researcher", difficulty: "advanced", whyThisQuestionMatters: "Sets the budget for humanoid R&amp;D.", whatAGreatAnswerShouldCover: ["Open X-Embodiment scale", "Cross-embodiment transfer", "Sim-to-real ratio", "Per-task vs cross-task budget"], followUps: ["What is the most-overlooked data type today?"], relatedDomains: ["robotics"], relatedArchitectures: ["vla", "diffusion-policy"], relatedCompanies: ["physical-intelligence", "figure", "tesla-ai"], relatedPapers: ["paper-rt2", "paper-open-x"], sourceIds: [], confidence: "marketContext" },
  { id: "q-av-true-deployment", question: "What evidence would convince you robotaxis are scaling globally?", category: "Domains", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Separates real ODD expansion from press releases.", whatAGreatAnswerShouldCover: ["ODD coverage area + complexity", "Disengagement and intervention rates", "Price per ride vs human baseline", "Unit economics"], followUps: ["What ODD expansion rate would you take as proof?"], relatedDomains: ["autonomous-vehicles"], relatedArchitectures: [], relatedCompanies: ["waymo", "tesla-ai"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-mfg-onprem-ai", question: "Why is manufacturing AI mostly on-prem?", category: "Domains", audience: "Operator", difficulty: "intermediate", whyThisQuestionMatters: "Explains why hyperscalers under-penetrate factories.", whatAGreatAnswerShouldCover: ["OT-IT separation", "Latency and reliability", "Data sovereignty", "Legacy SCADA / MES"], followUps: ["What would change if hyperscalers shipped industrial-grade edge AI?"], relatedDomains: ["manufacturing"], relatedArchitectures: ["cnn", "anomaly-detection"], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-energy-ai-control", question: "How much grid-control authority should AI have?", category: "Domains", audience: "Operator", difficulty: "advanced", whyThisQuestionMatters: "Decides where energy-AI startups can play.", whatAGreatAnswerShouldCover: ["Inside-the-envelope vs envelope-defining decisions", "Hybrid ML + OR", "Regulator constraints", "Failure modes"], followUps: ["What single decision would you let an AI make autonomously on a grid?"], relatedDomains: ["energy-grid"], relatedArchitectures: ["ts-transformer", "rl-control"], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-weather-ai-replace", question: "Will neural weather models fully replace numerical weather prediction?", category: "Domains", audience: "Researcher", difficulty: "advanced", whyThisQuestionMatters: "Frames whether AI is a tool inside operational forecasting or a substitute.", whatAGreatAnswerShouldCover: ["GraphCast / FourCastNet / Pangu / AIFS", "Performance on extremes", "Operational integration", "Hybrid systems"], followUps: ["What event would settle the debate?"], relatedDomains: ["climate-weather"], relatedArchitectures: ["neural-operators"], relatedCompanies: ["google-deepmind"], relatedPapers: ["paper-graphcast", "paper-fourcastnet"], sourceIds: [], confidence: "marketContext" },
  { id: "q-defence-autonomy-line", question: "Where is the line for autonomous AI in defence?", category: "Domains", audience: "Operator", difficulty: "expert", whyThisQuestionMatters: "Frames defence-AI investment thesis under LOAC and DoD policy.", whatAGreatAnswerShouldCover: ["Decision authority", "ISR / logistics vs lethal", "International norms", "Auditability"], followUps: ["What governance shift would most accelerate defence AI?"], relatedDomains: ["defence"], relatedArchitectures: [], relatedCompanies: ["palantir"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-cyber-ai-attack-surface", question: "How does AI itself become an attack surface?", category: "Domains", audience: "Engineer", difficulty: "advanced", whyThisQuestionMatters: "Indirect prompt injection and model extraction are now real threats.", whatAGreatAnswerShouldCover: ["Indirect prompt injection", "Data poisoning", "Model extraction", "Agent privilege escalation"], followUps: ["What is the OWASP / MITRE equivalent for agents?"], relatedDomains: ["cybersecurity"], relatedArchitectures: ["llm", "tool-agents"], relatedCompanies: [], relatedPapers: [], sourceIds: ["src-mitre-attack"], confidence: "inferred" },
  { id: "q-coding-ai-real-bottleneck", question: "What is the real bottleneck for coding agents in production?", category: "Domains", audience: "Engineer", difficulty: "advanced", whyThisQuestionMatters: "Separates SWE-bench wins from production reliability.", whatAGreatAnswerShouldCover: ["Repo-scale context", "Test coverage as ground truth", "Security review", "Long-horizon reliability"], followUps: ["What benchmark would you trust to predict real adoption?"], relatedDomains: ["software-engineering"], relatedArchitectures: ["tool-agents"], relatedCompanies: ["cursor", "github-copilot", "anthropic"], relatedPapers: ["paper-swebench"], sourceIds: ["src-swe-bench"], confidence: "marketContext" },
  { id: "q-science-ai-foundation", question: "How will foundation models change scientific discovery?", category: "Domains", audience: "Researcher", difficulty: "advanced", whyThisQuestionMatters: "Reframes how labs allocate compute and grants.", whatAGreatAnswerShouldCover: ["AlphaFold-class wins", "Material discovery", "Lab automation", "Hybrid ML + simulation"], followUps: ["Which scientific domain is closest to its AlphaFold moment?"], relatedDomains: ["materials-science", "chemistry", "physics"], relatedArchitectures: ["diffusion-bio", "neural-operators"], relatedCompanies: ["google-deepmind", "isomorphic-labs"], relatedPapers: ["paper-alphafold2", "paper-graphcast", "paper-fno"], sourceIds: [], confidence: "marketContext" },

  /* ── E. Founder / market ── */
  { id: "q-overbuilt-zones", question: "Where is AI overbuilt right now?", category: "Founder &amp; market", audience: "Founder", difficulty: "intermediate", whyThisQuestionMatters: "Saves capital and team time.", whatAGreatAnswerShouldCover: ["Generic SMB chatbots", "Undifferentiated coding agents", "Hardware-light humanoid claims", "Generic enterprise productivity"], followUps: ["Which crowded category will collapse first?"], relatedDomains: ["robotics", "enterprise-productivity"], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-second-mover-edge", question: "Where do second-mover startups win in AI?", category: "Founder &amp; market", audience: "Founder", difficulty: "advanced", whyThisQuestionMatters: "Most categories already have a leader; second-movers must verticalise or localise.", whatAGreatAnswerShouldCover: ["Verticalisation", "Localisation (country / industry)", "Smarter execution", "Boring-cashflow variants"], followUps: ["Which category is most ripe for a second-mover Uber?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-data-as-moat", question: "Where is proprietary data still a real moat?", category: "Founder &amp; market", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Most public-data moats are gone; durable ones are private.", whatAGreatAnswerShouldCover: ["Healthcare claims", "Banking transactions", "Robot teleop", "Industrial sensor", "Proprietary scientific datasets"], followUps: ["What category of data is the most under-priced today?"], relatedDomains: ["clinical-medicine", "robotics"], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-distribution-as-moat", question: "Where is distribution the moat in AI?", category: "Founder &amp; market", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Determines whether incumbents or startups win in a domain.", whatAGreatAnswerShouldCover: ["Hyperscaler bundling", "Vertical-SaaS incumbency", "Sovereign procurement", "Channel partnerships"], followUps: ["Which incumbent has the strongest AI distribution moat?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["azure", "google-deepmind"], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-regulation-as-moat", question: "Where does regulation work as a startup moat?", category: "Founder &amp; market", audience: "Founder", difficulty: "advanced", whyThisQuestionMatters: "Slow categories often have the most durable defensibility.", whatAGreatAnswerShouldCover: ["Healthcare / clinical AI", "Banking MRM", "Defence FedRAMP", "Insurance state-by-state"], followUps: ["Which regulator change would create the biggest opportunity?"], relatedDomains: ["clinical-medicine", "banking", "defence", "insurance"], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-painful-workflow-budget", question: "Which workflows are painful but actually have budget?", category: "Founder &amp; market", audience: "Founder", difficulty: "intermediate", whyThisQuestionMatters: "Pain without budget is a hobby.", whatAGreatAnswerShouldCover: ["RCM / prior-authorisation", "AML / fraud investigation", "Specialty trades", "Compliance"], followUps: ["Which workflow is most ignored by AI startups?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-agents-first-real", question: "Where will agents actually work in production first?", category: "Founder &amp; market", audience: "Engineer", difficulty: "advanced", whyThisQuestionMatters: "Frames where agentic infrastructure investment pays off.", whatAGreatAnswerShouldCover: ["Coding (sandboxed)", "Customer support (deflectable)", "Research (verifiable)", "Fraud / SOC investigation"], followUps: ["Which agent category will fail publicly first?"], relatedDomains: ["software-engineering", "customer-support"], relatedArchitectures: ["tool-agents"], relatedCompanies: ["cursor", "anthropic"], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-feature-vs-company", question: "What becomes a feature, and what becomes a company?", category: "Founder &amp; market", audience: "Founder", difficulty: "advanced", whyThisQuestionMatters: "Single most important strategic question for AI startups.", whatAGreatAnswerShouldCover: ["Specialised data + workflow depth", "Deep integration", "Regulated buyers", "Vertical taste"], followUps: ["Which famous AI startup is actually a feature in disguise?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-boring-cashflow", question: "Where are the boring cashflow AI businesses hiding?", category: "Founder &amp; market", audience: "Founder", difficulty: "intermediate", whyThisQuestionMatters: "Not every AI idea is a venture-scale company.", whatAGreatAnswerShouldCover: ["Trade copilots", "Compliance tooling", "Industrial QC", "Regional vertical tools"], followUps: ["Which boring AI business has the highest five-year IRR?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-evaluator-as-moat", question: "Where is the evaluator the moat?", category: "Founder &amp; market", audience: "Founder", difficulty: "advanced", whyThisQuestionMatters: "When generation is cheap, judging is the bottleneck.", whatAGreatAnswerShouldCover: ["Drug discovery", "Robotics", "Legal", "Generative media"], followUps: ["Which evaluator-as-product company will compound fastest?"], relatedDomains: ["drug-discovery", "robotics", "legal"], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },

  /* ── F. Civilizational ── */
  { id: "q-power-centralisation", question: "Will AI centralise or decentralise power?", category: "Civilizational", audience: "Public intellectual", difficulty: "expert", whyThisQuestionMatters: "Frames antitrust, governance and geopolitics.", whatAGreatAnswerShouldCover: ["Compute concentration", "Data concentration", "Regulatory capture risk", "Open-weight counterforces"], followUps: ["Which regulator should watch AI compute most closely?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-cheap-intelligence-labour", question: "What does cheap intelligence do to labour?", category: "Civilizational", audience: "Public intellectual", difficulty: "expert", whyThisQuestionMatters: "Frames the policy and political response of the next decade.", whatAGreatAnswerShouldCover: ["Task-level automation vs job-level displacement", "Cognitive vs manual", "Re-skilling pathways"], followUps: ["Which white-collar job will fall first?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-ai-truth", question: "What does AI do to truth?", category: "Civilizational", audience: "Public intellectual", difficulty: "expert", whyThisQuestionMatters: "Generative media + agentic search reshape epistemic infrastructure.", whatAGreatAnswerShouldCover: ["Provenance and watermarking", "Citation-grounded retrieval", "Information operations", "Trust hierarchies"], followUps: ["Which institution should own provenance standards?"], relatedDomains: ["consumer-search", "media-entertainment"], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-sovereign-ai-meaning", question: "What does sovereign AI actually mean?", category: "Civilizational", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Reshapes geography of AI compute.", whatAGreatAnswerShouldCover: ["Compute sovereignty", "Data sovereignty", "Model sovereignty", "Standards sovereignty"], followUps: ["Which country has the most credible sovereign AI plan?"], relatedDomains: ["smart-cities"], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-children-skills", question: "What should children learn in an AI era?", category: "Civilizational", audience: "Public intellectual", difficulty: "advanced", whyThisQuestionMatters: "Shapes ed-tech procurement and policy.", whatAGreatAnswerShouldCover: ["Verification and source-checking", "Computational thinking", "Communication", "Domain depth"], followUps: ["What single skill becomes most valuable?"], relatedDomains: ["education"], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-alignment-fail", question: "What happens if alignment fails?", category: "Civilizational", audience: "Public intellectual", difficulty: "expert", whyThisQuestionMatters: "Tail risk frames AI safety policy.", whatAGreatAnswerShouldCover: ["Misuse vs misalignment", "Misuse defences", "Containment + governance", "Recovery scenarios"], followUps: ["Which alignment failure mode is most under-priced?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["anthropic"], relatedPapers: [], sourceIds: [], confidence: "forwardLooking" },
  { id: "q-progress-slows", question: "What if AI progress slows for two years?", category: "Civilizational", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Stress-tests capex assumptions.", whatAGreatAnswerShouldCover: ["Capex digestion", "Application-layer scaling", "Custom silicon adoption", "Investor sentiment"], followUps: ["What category benefits most from a slowdown?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "forwardLooking" },
  { id: "q-no-compute-countries", question: "What does AI do to countries without compute?", category: "Civilizational", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Reframes development economics.", whatAGreatAnswerShouldCover: ["Cloud access dependencies", "Local-language model gaps", "Data sovereignty", "Talent flight"], followUps: ["Which country could lead the next-tier AI economy?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-intelligence-commodity", question: "What happens when intelligence becomes a commodity?", category: "Civilizational", audience: "Public intellectual", difficulty: "expert", whyThisQuestionMatters: "Reshapes value capture in every cognitive industry.", whatAGreatAnswerShouldCover: ["Service-layer collapse", "Tools, taste and trust as scarcity", "Distribution vs intelligence"], followUps: ["What becomes scarce when intelligence is cheap?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-ai-and-war", question: "What does AI do to war?", category: "Civilizational", audience: "Public intellectual", difficulty: "expert", whyThisQuestionMatters: "Frames defence-AI policy and geopolitics.", whatAGreatAnswerShouldCover: ["ISR scaling", "Logistics + maintenance", "Decision-support copilots", "Autonomy norms"], followUps: ["Which conflict will most reshape defence-AI norms?"], relatedDomains: ["defence"], relatedArchitectures: [], relatedCompanies: ["palantir"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },

  /* ── Math of AI ── */
  { id: "q-loss-landscape", question: "What does a loss landscape really look like in modern training?", category: "Math of AI", audience: "Researcher", difficulty: "expert", whyThisQuestionMatters: "Loss-landscape geometry decides why SGD generalises and where it fails.", whatAGreatAnswerShouldCover: ["Mode connectivity", "Sharp vs flat minima", "Implicit regularisation of SGD", "Lottery-ticket hypothesis"], followUps: ["Which empirical landscape result most surprised you in the last year?"], relatedDomains: [], relatedArchitectures: ["llm"], relatedCompanies: [], relatedPapers: [], sourceIds: ["needs-verification"], confidence: "marketContext" },
  { id: "q-why-transformers-generalise", question: "Why do transformers generalise so well outside their training distribution?", category: "Math of AI", audience: "Researcher", difficulty: "expert", whyThisQuestionMatters: "Generalisation is the loud claim every scaling-law thesis depends on.", whatAGreatAnswerShouldCover: ["Compositional reasoning", "Implicit retrieval", "Skill-mix theories", "Counter-examples"], followUps: ["Which generalisation failure most worries you?"], relatedDomains: [], relatedArchitectures: ["llm"], relatedCompanies: [], relatedPapers: ["paper-attention"], sourceIds: ["needs-verification"], confidence: "marketContext" },
  { id: "q-implicit-bias-sgd", question: "What is the implicit bias of SGD, and why does it matter for AI?", category: "Math of AI", audience: "Researcher", difficulty: "expert", whyThisQuestionMatters: "Implicit bias explains why deep learning works at all.", whatAGreatAnswerShouldCover: ["Margin maximisation", "Edge of stability", "Sharpness-aware minimisation"], followUps: ["What single experiment would best falsify the popular intuition?"], relatedDomains: [], relatedArchitectures: ["llm"], relatedCompanies: [], relatedPapers: [], sourceIds: ["needs-verification"], confidence: "inferred" },
  { id: "q-rlhf-true-loss", question: "What is the true loss function inside RLHF / RLAIF stacks?", category: "Math of AI", audience: "Researcher", difficulty: "advanced", whyThisQuestionMatters: "RLHF talks about preferences but actually optimises reward-model proxies.", whatAGreatAnswerShouldCover: ["Reward modelling", "KL constraints", "Reward hacking", "Process supervision"], followUps: ["Where do reward models systematically fail?"], relatedDomains: [], relatedArchitectures: ["llm", "rl-control"], relatedCompanies: ["openai", "anthropic"], relatedPapers: ["paper-instructgpt"], sourceIds: [], confidence: "marketContext" },
  { id: "q-softmax-breaks", question: "Where does softmax break in modern AI?", category: "Math of AI", audience: "Engineer", difficulty: "advanced", whyThisQuestionMatters: "Softmax shows up in attention, classification and routing; its limits matter.", whatAGreatAnswerShouldCover: ["Long-context attention dispersion", "MoE routing instability", "Numerical issues at scale"], followUps: ["What replaces softmax for the next generation?"], relatedDomains: [], relatedArchitectures: ["llm"], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-memorisation-vs-learning", question: "How do you tell memorisation from genuine learning in a frontier model?", category: "Math of AI", audience: "Researcher", difficulty: "advanced", whyThisQuestionMatters: "Drives benchmark validity and the AGI debate.", whatAGreatAnswerShouldCover: ["Compositional probes", "Out-of-distribution holdouts", "Influence functions"], followUps: ["Which benchmark is most contaminated today?"], relatedDomains: ["software-engineering", "mathematics"], relatedArchitectures: ["llm"], relatedCompanies: [], relatedPapers: ["paper-swebench"], sourceIds: [], confidence: "inferred" },
  { id: "q-many-paths-same-function", question: "Why do many different training trajectories converge on similar functions?", category: "Math of AI", audience: "Researcher", difficulty: "expert", whyThisQuestionMatters: "Convergence to similar solutions hints at the geometry of learning.", whatAGreatAnswerShouldCover: ["Linear mode connectivity", "Mechanistic interpretability findings", "Universality conjecture"], followUps: ["What finding would falsify universality?"], relatedDomains: [], relatedArchitectures: ["llm"], relatedCompanies: [], relatedPapers: [], sourceIds: ["needs-verification"], confidence: "inferred" },
  { id: "q-double-descent", question: "Is double descent still important, or did scale absorb it?", category: "Math of AI", audience: "Researcher", difficulty: "advanced", whyThisQuestionMatters: "Double descent reframed how we think about overfitting; relevance at frontier scale is contested.", whatAGreatAnswerShouldCover: ["Original observations", "Effects at frontier scale", "Practical implications for sizing models"], followUps: ["At what model scale does double descent stop being practically interesting?"], relatedDomains: [], relatedArchitectures: ["llm"], relatedCompanies: [], relatedPapers: [], sourceIds: ["needs-verification"], confidence: "inferred" },
  { id: "q-data-quality-vs-scale", question: "Where does data quality beat data scale, and where does it lose?", category: "Math of AI", audience: "Researcher", difficulty: "advanced", whyThisQuestionMatters: "Datasets like FineWeb, DCLM and Phi argue quality wins; web-scale partisans disagree.", whatAGreatAnswerShouldCover: ["Curated vs filtered web corpora", "Synthetic + distilled data", "Domain-specific data"], followUps: ["Which sub-domain most rewards quality over scale?"], relatedDomains: [], relatedArchitectures: ["llm"], relatedCompanies: ["meta-ai", "anthropic", "openai"], relatedPapers: [], sourceIds: ["needs-verification"], confidence: "inferred" },
  { id: "q-scaling-by-modality", question: "How do scaling laws differ across language, vision, biology and robotics?", category: "Math of AI", audience: "Researcher", difficulty: "expert", whyThisQuestionMatters: "Scaling laws are not universal; capex bets depend on which modality scales how.", whatAGreatAnswerShouldCover: ["Language: stable scaling", "Vision: data + compute trade-offs", "Biology: data-scarce", "Robotics: data + embodiment + sim-to-real"], followUps: ["Which modality has the most-broken scaling story?"], relatedDomains: ["drug-discovery", "robotics"], relatedArchitectures: ["llm", "vit", "vla"], relatedCompanies: ["physical-intelligence", "isomorphic-labs"], relatedPapers: ["paper-rt2", "paper-alphafold2"], sourceIds: [], confidence: "marketContext" },

  /* ── GPU / TPU / ASIC ── */
  { id: "q-nvidia-software-moat", question: "Is NVIDIA&rsquo;s software the moat, not the silicon?", category: "GPU / TPU / ASIC", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Determines whether Trainium / Maia / TPU programmes can erode NVIDIA&rsquo;s margin.", whatAGreatAnswerShouldCover: ["CUDA / cuDNN / NCCL depth", "Backward compatibility", "Tooling and ecosystem", "Triton (NVIDIA) vs Triton (OpenAI compiler)"], followUps: ["Which library is hardest to clone?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["nvidia"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-tpu-edge-vs-gpu", question: "What does TPU actually do better than GPU for Google internally?", category: "GPU / TPU / ASIC", audience: "Engineer", difficulty: "advanced", whyThisQuestionMatters: "Probes hyperscaler-vertical-silicon thesis with the longest-running example.", whatAGreatAnswerShouldCover: ["Workload co-design", "Pathways framework", "Cost per Gemini-class training", "Pod-scale interconnect"], followUps: ["Could Google externalise TPU at scale?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["google-tpu", "google-deepmind"], relatedPapers: [], sourceIds: ["needs-verification"], confidence: "inferred" },
  { id: "q-asics-hard-with-billions", question: "Why are AI ASICs still hard to design even with billions of dollars?", category: "GPU / TPU / ASIC", audience: "Investor", difficulty: "expert", whyThisQuestionMatters: "Explains why even Microsoft Maia and AWS Trainium are still chasing NVIDIA.", whatAGreatAnswerShouldCover: ["EDA + IP licensing cost", "Tape-out + yield risk", "Software ecosystem replication", "HBM / packaging supply"], followUps: ["What is the smallest viable AI-ASIC programme?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["microsoft-maia", "aws-silicon"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-bandwidth-tokens-watt", question: "What is the relationship between memory bandwidth and tokens-per-watt?", category: "GPU / TPU / ASIC", audience: "Engineer", difficulty: "advanced", whyThisQuestionMatters: "Tokens-per-watt is the unit that determines AI factory economics.", whatAGreatAnswerShouldCover: ["HBM3E / HBM4 generations", "Arithmetic intensity", "KV-cache reuse"], followUps: ["What is the hardest layer to optimise: HBM, networking or KV-cache?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["nvidia", "amd"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-networking-vs-flops", question: "Why is networking more strategic than raw FLOPS in modern AI?", category: "GPU / TPU / ASIC", audience: "Engineer", difficulty: "advanced", whyThisQuestionMatters: "Frontier training is bounded by collective-operation efficiency, not single-GPU throughput.", whatAGreatAnswerShouldCover: ["NVLink fabric", "InfiniBand / Spectrum-X", "NCCL collectives", "Topology and failure domains"], followUps: ["What single networking decision do you most disagree with at the frontier?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["nvidia"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-cuda-port-cost", question: "When does the cost of CUDA porting exceed the saving of switching silicon?", category: "GPU / TPU / ASIC", audience: "Operator", difficulty: "advanced", whyThisQuestionMatters: "Operationalises the CUDA moat thesis.", whatAGreatAnswerShouldCover: ["Cost of regression testing", "Maintaining two backends", "Workload-mix sensitivity"], followUps: ["Which workload is most CUDA-tied today?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["nvidia", "amd"], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-rocm-gap", question: "What does the ROCm gap really look like in production?", category: "GPU / TPU / ASIC", audience: "Engineer", difficulty: "advanced", whyThisQuestionMatters: "ROCm parity claims need to be tested workload-by-workload.", whatAGreatAnswerShouldCover: ["Operator coverage", "Library completeness", "Frontier-training credibility"], followUps: ["Which framework will close the gap fastest?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["amd", "nvidia"], relatedPapers: [], sourceIds: ["needs-verification"], confidence: "inferred" },
  { id: "q-cluster-lifetime", question: "What is the useful lifetime of a frontier-training cluster?", category: "GPU / TPU / ASIC", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Frames depreciation cycles for hyperscalers and neoclouds.", whatAGreatAnswerShouldCover: ["3-vs-5-year depreciation choices", "Workload pipeline", "Resale and repurpose"], followUps: ["Whose accounting is closest to reality?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["nvidia", "azure", "coreweave"], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-internal-asic-pricing", question: "How do hyperscalers price their own ASICs internally vs external NVIDIA?", category: "GPU / TPU / ASIC", audience: "Investor", difficulty: "expert", whyThisQuestionMatters: "Internal transfer pricing reveals how seriously a hyperscaler treats its silicon programme.", whatAGreatAnswerShouldCover: ["Capital allocation", "Internal customer guarantees", "Capacity planning"], followUps: ["Whose internal pricing is most aggressive?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["google-tpu", "aws-silicon", "microsoft-maia"], relatedPapers: [], sourceIds: ["needs-verification"], confidence: "needsVerification" },
  { id: "q-right-metric-silicon", question: "What is the right metric for AI silicon: tokens-per-watt, FLOPS-per-dollar or something else?", category: "GPU / TPU / ASIC", audience: "Engineer", difficulty: "advanced", whyThisQuestionMatters: "Different metrics favour different vendors.", whatAGreatAnswerShouldCover: ["Workload-specific metrics", "MFU vs hardware peak", "End-to-end cost per task"], followUps: ["Which metric is most gameable?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["nvidia", "amd", "cerebras", "groq"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },

  /* ── Infrastructure economics ── */
  { id: "q-true-token-cost", question: "What is the true marginal cost of one frontier-class token?", category: "Infrastructure economics", audience: "Operator", difficulty: "expert", whyThisQuestionMatters: "Drives every consumer and enterprise pricing decision.", whatAGreatAnswerShouldCover: ["Capex amortisation", "Power + cooling", "Networking + storage", "Software + RLHF amortisation"], followUps: ["Whose published pricing is closest to actual marginal cost?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["openai", "anthropic", "google-deepmind"], relatedPapers: [], sourceIds: ["needs-verification"], confidence: "inferred" },
  { id: "q-utilisation-mixed", question: "How does utilisation actually work in mixed-workload AI data centres?", category: "Infrastructure economics", audience: "Operator", difficulty: "advanced", whyThisQuestionMatters: "Mixed workloads change the simple training/inference framing.", whatAGreatAnswerShouldCover: ["Time-of-day mix", "Spot vs reserved", "Inference burst capacity"], followUps: ["What single workload type is most under-utilised?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["azure", "coreweave"], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-inference-vs-training-mix", question: "Why does inference economics dominate training economics over time?", category: "Infrastructure economics", audience: "Investor", difficulty: "intermediate", whyThisQuestionMatters: "Capex strategy diverges as inference compounds.", whatAGreatAnswerShouldCover: ["Token volume vs training run", "TensorRT / vLLM / inference engines", "Batched vs interactive serving"], followUps: ["At what year does inference exceed training compute by 10x?"], relatedDomains: [], relatedArchitectures: ["llm"], relatedCompanies: ["nvidia", "openai"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-ai-factory-pricing-2030", question: "What does AI factory pricing look like in 2030?", category: "Infrastructure economics", audience: "Investor", difficulty: "expert", whyThisQuestionMatters: "Frames long-horizon capex strategy.", whatAGreatAnswerShouldCover: ["Tokens-per-watt trajectory", "Inference economies of scale", "Substitute compute (TPU, ASIC)"], followUps: ["What is the most-likely floor for inference pricing in 2030?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["nvidia", "openai", "azure"], relatedPapers: [], sourceIds: ["needs-verification"], confidence: "forwardLooking" },
  { id: "q-power-vs-compute-capex", question: "How much of AI capex is power and cooling vs compute?", category: "Infrastructure economics", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Frames where infrastructure-AI investments live.", whatAGreatAnswerShouldCover: ["Compute capex ratios", "Cooling overhead", "Power purchase agreements"], followUps: ["Which input is most under-priced in 2026?"], relatedDomains: ["energy-grid"], relatedArchitectures: [], relatedCompanies: ["azure", "coreweave"], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-power-binding-constraint", question: "What changes if power becomes the binding constraint on AI growth?", category: "Infrastructure economics", audience: "Investor", difficulty: "expert", whyThisQuestionMatters: "Determines whose capex programmes scale and whose stall.", whatAGreatAnswerShouldCover: ["Behind-the-meter strategies", "Sovereign-AI relocation", "Compute geography"], followUps: ["Which region hits the wall first?"], relatedDomains: ["energy-grid"], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-agent-unit-economics", question: "What are the unit economics of agents vs chat?", category: "Infrastructure economics", audience: "Operator", difficulty: "advanced", whyThisQuestionMatters: "Agents consume far more tokens per task than chat; pricing has to follow.", whatAGreatAnswerShouldCover: ["Tokens per task", "Tool-use latency", "Reasoning token bursts"], followUps: ["Which agentic product has solved its unit economics?"], relatedDomains: ["software-engineering", "research-workflows"], relatedArchitectures: ["tool-agents"], relatedCompanies: ["openai", "anthropic", "cursor"], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-pricing-routing-platform", question: "How do you price a model-routing or LLM-gateway platform?", category: "Infrastructure economics", audience: "Founder", difficulty: "advanced", whyThisQuestionMatters: "Routing is one of the most-built infrastructure layers; pricing is unsettled.", whatAGreatAnswerShouldCover: ["Token mark-up", "Caching savings", "Premium support tier"], followUps: ["Whose pricing model becomes the standard?"], relatedDomains: ["enterprise-productivity"], relatedArchitectures: ["llm"], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-neocloud-pricing-edge", question: "Why are neoclouds priced more aggressively than hyperscalers?", category: "Infrastructure economics", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "CoreWeave / Lambda / Crusoe pricing reveals the GPU-cloud economics.", whatAGreatAnswerShouldCover: ["Specialty cost structure", "Bare-metal preference", "Capex-cycle timing"], followUps: ["What forces hyperscalers to match?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["coreweave", "azure"], relatedPapers: [], sourceIds: ["needs-verification"], confidence: "inferred" },
  { id: "q-anthropic-openai-own-dc", question: "What happens to hyperscaler cloud margins if Anthropic / OpenAI build their own data centres?", category: "Infrastructure economics", audience: "Investor", difficulty: "expert", whyThisQuestionMatters: "Captures a long-tail strategic risk.", whatAGreatAnswerShouldCover: ["Capital intensity", "Power-PPA capability", "Hyperscaler customer migration"], followUps: ["Which lab is most likely to make the move first?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["anthropic", "openai", "azure", "aws-silicon"], relatedPapers: [], sourceIds: [], confidence: "forwardLooking" },

  /* ── Agents ── */
  { id: "q-agent-architectural-10x", question: "What architectural change would 10x agent reliability?", category: "Agents", audience: "Engineer", difficulty: "expert", whyThisQuestionMatters: "Agent reliability is the single biggest product gap.", whatAGreatAnswerShouldCover: ["Better long-horizon memory", "Verification + critic models", "Tool-use reliability", "Cost-aware planning"], followUps: ["What single benchmark would track this?"], relatedDomains: [], relatedArchitectures: ["tool-agents", "multi-agent"], relatedCompanies: ["openai", "anthropic", "cursor"], relatedPapers: ["paper-react"], sourceIds: [], confidence: "inferred" },
  { id: "q-agent-memory", question: "How does memory work for long-running agents?", category: "Agents", audience: "Engineer", difficulty: "advanced", whyThisQuestionMatters: "Memory underpins agentic reliability.", whatAGreatAnswerShouldCover: ["Episodic vs semantic memory", "Vector / hybrid retrieval", "Compaction"], followUps: ["What benchmark would prove memory works?"], relatedDomains: [], relatedArchitectures: ["tool-agents", "rag"], relatedCompanies: ["openai", "anthropic"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-agent-verification-interface", question: "What is the right interface for agent verification?", category: "Agents", audience: "Founder", difficulty: "advanced", whyThisQuestionMatters: "Enterprises need to audit agent actions.", whatAGreatAnswerShouldCover: ["Action log + audit trail", "Replayability", "Approval gates"], followUps: ["Which audit primitive is most under-built?"], relatedDomains: ["enterprise-productivity"], relatedArchitectures: ["tool-agents"], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-multi-agent-beat-single", question: "Where do multi-agent systems beat single-agent solutions?", category: "Agents", audience: "Researcher", difficulty: "advanced", whyThisQuestionMatters: "Most multi-agent demos exaggerate gains.", whatAGreatAnswerShouldCover: ["Division of labour", "Critic + actor", "Specialised expertise"], followUps: ["When does the coordination cost dominate?"], relatedDomains: ["software-engineering"], relatedArchitectures: ["multi-agent"], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-browser-use-brittle", question: "Why is browser-use so brittle?", category: "Agents", audience: "Engineer", difficulty: "advanced", whyThisQuestionMatters: "Browser-use is the canonical agent demo and the canonical failure case.", whatAGreatAnswerShouldCover: ["DOM diffing", "Anti-bot defences", "Long-horizon planning"], followUps: ["What changes when web sites are designed for agents?"], relatedDomains: [], relatedArchitectures: ["tool-agents"], relatedCompanies: ["openai", "anthropic"], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-cross-company-agents", question: "What happens when agents from different companies start calling each other?", category: "Agents", audience: "Founder", difficulty: "expert", whyThisQuestionMatters: "Agent-to-agent commerce is the next protocol layer.", whatAGreatAnswerShouldCover: ["Agent identity", "Authentication and payment", "Standards (MCP, schemas)"], followUps: ["What standard do you bet on?"], relatedDomains: ["enterprise-productivity"], relatedArchitectures: ["tool-agents", "multi-agent"], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "forwardLooking" },
  { id: "q-agent-billing", question: "How should an enterprise pay for an agent&rsquo;s actions?", category: "Agents", audience: "Founder", difficulty: "advanced", whyThisQuestionMatters: "Billing model determines commercial scaling.", whatAGreatAnswerShouldCover: ["Per-task vs per-token vs outcome-based", "Risk-sharing", "SLAs"], followUps: ["Which industry sets the precedent?"], relatedDomains: ["customer-support", "research-workflows"], relatedArchitectures: ["tool-agents"], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-finetune-vs-prompt-agent", question: "What role does fine-tuning play vs prompting for agentic systems?", category: "Agents", audience: "Engineer", difficulty: "advanced", whyThisQuestionMatters: "Most agent deployments rely on prompting; fine-tuning is the contested next layer.", whatAGreatAnswerShouldCover: ["Behavioural fine-tuning", "Tool-use SFT", "Reasoning post-training"], followUps: ["Which agent product type benefits most from fine-tuning?"], relatedDomains: [], relatedArchitectures: ["tool-agents", "llm"], relatedCompanies: ["openai", "anthropic"], relatedPapers: ["paper-instructgpt"], sourceIds: [], confidence: "inferred" },
  { id: "q-agent-eval-bench", question: "What benchmark would convince you agents are production-ready?", category: "Agents", audience: "Engineer", difficulty: "advanced", whyThisQuestionMatters: "Most agent benchmarks understate real-world failure rates.", whatAGreatAnswerShouldCover: ["Multi-day stability", "Recovery from failure", "Cost ceiling per task"], followUps: ["Which existing benchmark is most predictive?"], relatedDomains: ["software-engineering"], relatedArchitectures: ["tool-agents"], relatedCompanies: ["cursor", "anthropic"], relatedPapers: ["paper-swebench"], sourceIds: ["src-swe-bench"], confidence: "inferred" },
  { id: "q-coding-agents-first", question: "Why are coding agents the first to work in production?", category: "Agents", audience: "Founder", difficulty: "intermediate", whyThisQuestionMatters: "Coding agents are the proof point for the broader agent thesis.", whatAGreatAnswerShouldCover: ["Sandboxed execution", "Fast feedback (test runs)", "Public benchmarks", "Developer payor base"], followUps: ["Which non-coding category will follow?"], relatedDomains: ["software-engineering"], relatedArchitectures: ["tool-agents"], relatedCompanies: ["cursor", "anthropic", "github-copilot"], relatedPapers: ["paper-swebench"], sourceIds: ["src-swe-bench"], confidence: "marketContext" },

  /* ── Robotics ── */
  { id: "q-robot-data-floor", question: "What data scale would unlock generalist humanoids?", category: "Robotics", audience: "Researcher", difficulty: "expert", whyThisQuestionMatters: "Data scale gates the next decade of humanoid R&amp;D.", whatAGreatAnswerShouldCover: ["Open X-Embodiment cross-embodiment scale", "Per-embodiment data depth", "Sim-to-real ratio"], followUps: ["What is the smallest credible humanoid data programme?"], relatedDomains: ["robotics"], relatedArchitectures: ["vla"], relatedCompanies: ["physical-intelligence", "figure", "tesla-ai"], relatedPapers: ["paper-rt2", "paper-open-x"], sourceIds: [], confidence: "marketContext" },
  { id: "q-sim2real-real-cost", question: "Why is sim-to-real harder than people think?", category: "Robotics", audience: "Researcher", difficulty: "advanced", whyThisQuestionMatters: "Most sim-to-real failures are about the perception gap, not physics.", whatAGreatAnswerShouldCover: ["Perception gap", "Contact / friction", "Domain randomisation pitfalls"], followUps: ["What is the most-overlooked sim-to-real failure mode?"], relatedDomains: ["robotics"], relatedArchitectures: ["sim-to-real", "world-models"], relatedCompanies: ["physical-intelligence"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-humanoid-reliability", question: "What does real reliability look like for a deployed humanoid?", category: "Robotics", audience: "Operator", difficulty: "advanced", whyThisQuestionMatters: "Demos do not predict deployments.", whatAGreatAnswerShouldCover: ["MTBF metrics", "Recovery from failure", "Maintenance schedule"], followUps: ["What target MTBF would a logistics customer accept?"], relatedDomains: ["robotics"], relatedArchitectures: [], relatedCompanies: ["figure", "tesla-ai"], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-robotics-fm-sell-or-keep", question: "Will robotics foundation models be sold or kept internal?", category: "Robotics", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Frames the structure of the physical-AI economy.", whatAGreatAnswerShouldCover: ["Physical Intelligence approach", "Vertically integrated humanoid players", "Hardware vs software margin"], followUps: ["Which market structure do you bet on?"], relatedDomains: ["robotics"], relatedArchitectures: ["vla"], relatedCompanies: ["physical-intelligence", "figure", "tesla-ai"], relatedPapers: [], sourceIds: [], confidence: "forwardLooking" },
  { id: "q-warehouse-form-factor", question: "What is the right humanoid form factor for warehouses?", category: "Robotics", audience: "Operator", difficulty: "advanced", whyThisQuestionMatters: "Warehouse is the most credible early humanoid market.", whatAGreatAnswerShouldCover: ["Bipedal vs wheeled-base", "Dexterity vs payload", "Safety footprint"], followUps: ["What single design choice most increases ROI?"], relatedDomains: ["robotics", "supply-chain"], relatedArchitectures: [], relatedCompanies: ["figure"], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-robotic-kitchens-fail", question: "Why have robotic kitchens not worked yet?", category: "Robotics", audience: "Operator", difficulty: "advanced", whyThisQuestionMatters: "Kitchens are dexterity-rich and economically meaningful but have failed repeatedly.", whatAGreatAnswerShouldCover: ["Dexterity / contact-rich tasks", "Variability of inputs", "Maintenance costs"], followUps: ["Which subset of kitchen tasks is closest to feasible?"], relatedDomains: ["robotics"], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-tesla-fsd-data-buy", question: "What does Tesla FSD&rsquo;s data advantage actually buy?", category: "Robotics", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "FSD data is the canonical embodied-AI moat claim.", whatAGreatAnswerShouldCover: ["Edge-case mining", "Driving-policy training", "Optimus crossover"], followUps: ["What FSD metric should investors actually track?"], relatedDomains: ["autonomous-vehicles", "robotics"], relatedArchitectures: ["vit", "imitation-learning"], relatedCompanies: ["tesla-ai"], relatedPapers: [], sourceIds: ["needs-verification"], confidence: "inferred" },
  { id: "q-robot-as-platform", question: "When does a robot become a platform rather than an appliance?", category: "Robotics", audience: "Founder", difficulty: "advanced", whyThisQuestionMatters: "Platform-vs-appliance is the strategic question for every humanoid team.", whatAGreatAnswerShouldCover: ["Developer ecosystem", "Skill marketplaces", "Open standards"], followUps: ["Which humanoid will go platform first?"], relatedDomains: ["robotics"], relatedArchitectures: ["vla"], relatedCompanies: ["figure", "physical-intelligence"], relatedPapers: [], sourceIds: [], confidence: "forwardLooking" },
  { id: "q-humanoid-vs-vehicle-data", question: "What unique data does a humanoid generate that a vehicle does not?", category: "Robotics", audience: "Researcher", difficulty: "advanced", whyThisQuestionMatters: "Humanoid data shape differs from vehicle data; capex thesis follows.", whatAGreatAnswerShouldCover: ["Manipulation", "Indoor environments", "Human interaction"], followUps: ["Which humanoid data source is most valuable?"], relatedDomains: ["robotics"], relatedArchitectures: ["vla"], relatedCompanies: ["tesla-ai", "figure"], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-robot-safety-framework", question: "What is the right safety framework for general-purpose robots?", category: "Robotics", audience: "Operator", difficulty: "expert", whyThisQuestionMatters: "Standards are the gating constraint for non-industrial deployment.", whatAGreatAnswerShouldCover: ["ISO 10218 / TS 15066 industrial", "Emerging humanoid frameworks", "Human-robot interaction safety"], followUps: ["Which standards body is closest to issuing humanoid standards?"], relatedDomains: ["robotics"], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "marketContext" },

  /* ── Biology ── */
  { id: "q-alphafold-impact-real", question: "How much did AlphaFold actually change drug discovery?", category: "Biology", audience: "Researcher", difficulty: "advanced", whyThisQuestionMatters: "Calibrating AlphaFold&rsquo;s real impact disciplines bio-AI hype.", whatAGreatAnswerShouldCover: ["Structure prediction routinisation", "Downstream design / docking", "Clinical translation gap"], followUps: ["Which therapeutic area has gained most from AlphaFold?"], relatedDomains: ["drug-discovery", "protein-design"], relatedArchitectures: ["diffusion-bio", "protein-lm"], relatedCompanies: ["isomorphic-labs"], relatedPapers: ["paper-alphafold2", "paper-alphafold3"], sourceIds: [], confidence: "marketContext" },
  { id: "q-after-structure-prediction", question: "What is the real bottleneck after structure prediction?", category: "Biology", audience: "Researcher", difficulty: "advanced", whyThisQuestionMatters: "Structure prediction is solved; downstream is not.", whatAGreatAnswerShouldCover: ["Function prediction", "ADMET", "Lab synthesis", "Trial design"], followUps: ["Which downstream problem is closest to its AlphaFold moment?"], relatedDomains: ["drug-discovery"], relatedArchitectures: ["diffusion-bio", "molecular-gnn"], relatedCompanies: ["isomorphic-labs", "physical-intelligence"], relatedPapers: ["paper-rfdiffusion"], sourceIds: [], confidence: "marketContext" },
  { id: "q-protein-design-works", question: "Why does generative protein design actually work?", category: "Biology", audience: "Researcher", difficulty: "advanced", whyThisQuestionMatters: "Protein design is the most concrete generative-bio win.", whatAGreatAnswerShouldCover: ["Backbone diffusion", "Inverse folding", "Active learning"], followUps: ["What is the ceiling on de novo design success?"], relatedDomains: ["protein-design"], relatedArchitectures: ["diffusion-bio", "protein-lm"], relatedCompanies: [], relatedPapers: ["paper-rfdiffusion", "paper-proteinmpnn"], sourceIds: [], confidence: "sourced" },
  { id: "q-ai-driven-trial", question: "What does &lsquo;AI-driven&rsquo; mean in a clinical trial?", category: "Biology", audience: "Researcher", difficulty: "expert", whyThisQuestionMatters: "Most &lsquo;AI biotechs&rsquo; have not credibly run AI-discovered drugs through Phase 2.", whatAGreatAnswerShouldCover: ["Trial-design vs molecule discovery", "Patient stratification", "Endpoint selection"], followUps: ["What threshold counts as AI-driven by the FDA?"], relatedDomains: ["drug-discovery"], relatedArchitectures: [], relatedCompanies: ["isomorphic-labs"], relatedPapers: [], sourceIds: ["needs-verification"], confidence: "inferred" },
  { id: "q-biotech-graduates", question: "When does an AI biotech graduate to a real drug company?", category: "Biology", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Frames investor evaluation of AI-bio companies.", whatAGreatAnswerShouldCover: ["Phase 1 / 2 readouts", "Pharma partnerships", "Clinical attrition handling"], followUps: ["Which AI biotech is closest to graduation?"], relatedDomains: ["drug-discovery"], relatedArchitectures: [], relatedCompanies: ["isomorphic-labs"], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-data-scale-bio-vs-language", question: "What does data scale look like in biology vs language?", category: "Biology", audience: "Researcher", difficulty: "advanced", whyThisQuestionMatters: "Bio data is fundamentally smaller than language data.", whatAGreatAnswerShouldCover: ["Per-task assay scale", "Cross-target transfer", "Synthetic + simulation data"], followUps: ["Which biological data type is closest to internet-scale?"], relatedDomains: ["drug-discovery", "genomics"], relatedArchitectures: ["protein-lm"], relatedCompanies: [], relatedPapers: ["paper-esm2"], sourceIds: [], confidence: "marketContext" },
  { id: "q-biology-in-house-lab", question: "Why does ML in biology favour in-house labs?", category: "Biology", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Frames vertical-integration thesis in bio-AI.", whatAGreatAnswerShouldCover: ["Lab-correlated eval", "Active learning loops", "Data quality"], followUps: ["Which AI biotech&rsquo;s lab is most differentiated?"], relatedDomains: ["drug-discovery"], relatedArchitectures: [], relatedCompanies: ["isomorphic-labs"], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-generative-chem-bench", question: "What is the right benchmark for generative chemistry?", category: "Biology", audience: "Researcher", difficulty: "advanced", whyThisQuestionMatters: "Most generative-chemistry benchmarks reward novelty over usefulness.", whatAGreatAnswerShouldCover: ["Wet-lab confirmation", "ADMET predictions", "Synthesisability"], followUps: ["Which benchmark is most gameable?"], relatedDomains: ["drug-discovery", "chemistry"], relatedArchitectures: ["diffusion-bio"], relatedCompanies: [], relatedPapers: ["paper-diffdock"], sourceIds: [], confidence: "inferred" },
  { id: "q-ai-patient-stratification", question: "How does AI change patient stratification?", category: "Biology", audience: "Researcher", difficulty: "advanced", whyThisQuestionMatters: "Stratification is one of the highest-leverage AI uses in clinical research.", whatAGreatAnswerShouldCover: ["Multimodal patient data", "Subgroup discovery", "Trial recruitment"], followUps: ["Which therapeutic area gains the most?"], relatedDomains: ["clinical-medicine", "drug-discovery"], relatedArchitectures: ["domain-fm"], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-fda-evaluates-ai-driven", question: "What does the FDA actually evaluate when AI drives discovery?", category: "Biology", audience: "Operator", difficulty: "expert", whyThisQuestionMatters: "Regulatory framing for AI-driven drugs is still being written.", whatAGreatAnswerShouldCover: ["Mechanism of action", "Reproducibility", "Bias and external validation"], followUps: ["What single regulatory ruling would shape the next decade?"], relatedDomains: ["drug-discovery", "clinical-medicine"], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: ["src-fda-samd"], confidence: "marketContext" },

  /* ── Quant finance ── */
  { id: "q-quant-bench-vs-live", question: "What is the gap between quant ML benchmarks and live trading?", category: "Quant finance", audience: "Engineer", difficulty: "expert", whyThisQuestionMatters: "Most quant-AI claims fail to translate to live execution.", whatAGreatAnswerShouldCover: ["Capacity", "Slippage", "Regime shift", "Borrow / financing"], followUps: ["What single benchmark assumption most distorts results?"], relatedDomains: ["quant-finance", "trading"], relatedArchitectures: ["ts-transformer", "rl-execution"], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-quant-validate-regime-shift", question: "How do you validate an ML strategy under regime shift?", category: "Quant finance", audience: "Engineer", difficulty: "expert", whyThisQuestionMatters: "Most overfit failures look like alpha until the regime turns.", whatAGreatAnswerShouldCover: ["Walk-forward analysis", "Regime stratification", "Stress scenarios"], followUps: ["What is the smallest credible regime-shift validation?"], relatedDomains: ["quant-finance"], relatedArchitectures: ["ts-transformer"], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-llm-in-quant", question: "What is the actual role of LLMs in quant research?", category: "Quant finance", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Hype around LLM-driven trading exceeds the verifiable reality.", whatAGreatAnswerShouldCover: ["Text-data ingestion", "Research-thesis acceleration", "Compliance copilots"], followUps: ["Where do LLMs not yet help quant?"], relatedDomains: ["quant-finance"], relatedArchitectures: ["llm"], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-execution-vs-prediction", question: "Why is execution alpha more durable than prediction alpha?", category: "Quant finance", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Frames where ML investment in finance actually compounds.", whatAGreatAnswerShouldCover: ["Decay of predictive alpha", "Capacity-friendly execution", "Microstructure"], followUps: ["What happens if every venue runs RL execution?"], relatedDomains: ["trading", "quant-finance"], relatedArchitectures: ["rl-execution"], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-ai-macro-signals", question: "What macro signals does AI now ingest that humans cannot?", category: "Quant finance", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Frames the real-time-data thesis for macro AI.", whatAGreatAnswerShouldCover: ["Satellite imagery", "Shipping AIS", "Web traffic", "Alternative payment data"], followUps: ["Which signal is most over-priced?"], relatedDomains: ["economic-forecasting", "quant-finance"], relatedArchitectures: ["ts-transformer", "vit"], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },

  /* ── Software engineering ── */
  { id: "q-beyond-swe-bench", question: "What is the right benchmark beyond SWE-bench?", category: "Software engineering", audience: "Engineer", difficulty: "expert", whyThisQuestionMatters: "SWE-bench is gameable and limited to function-scale tasks.", whatAGreatAnswerShouldCover: ["Repo-scale benchmarks", "Multi-day stability", "Production regression coverage"], followUps: ["Whose evaluation framework is most credible?"], relatedDomains: ["software-engineering"], relatedArchitectures: ["tool-agents"], relatedCompanies: ["cursor", "anthropic", "github-copilot"], relatedPapers: ["paper-swebench"], sourceIds: ["src-swe-bench"], confidence: "marketContext" },
  { id: "q-coding-agents-more-or-less-code", question: "Will coding agents lead to more or less code?", category: "Software engineering", audience: "Engineer", difficulty: "advanced", whyThisQuestionMatters: "Frames the labour-impact thesis for software engineering.", whatAGreatAnswerShouldCover: ["Volume vs quality", "Refactor + delete", "Long-tail maintenance"], followUps: ["What is the right metric for engineering productivity?"], relatedDomains: ["software-engineering"], relatedArchitectures: ["tool-agents"], relatedCompanies: ["cursor", "github-copilot"], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-10x-engineer-2030", question: "What does a 10x engineer look like in 2030?", category: "Software engineering", audience: "Founder", difficulty: "advanced", whyThisQuestionMatters: "Frames hiring and team-design.", whatAGreatAnswerShouldCover: ["Architectural taste", "Verification ability", "Agent-orchestration"], followUps: ["What single skill becomes most rare?"], relatedDomains: ["software-engineering"], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "forwardLooking" },
  { id: "q-code-llm-fail-catastrophic", question: "Where do code-LLMs fail catastrophically?", category: "Software engineering", audience: "Engineer", difficulty: "advanced", whyThisQuestionMatters: "Predicts where production agents will produce harm.", whatAGreatAnswerShouldCover: ["Security", "Concurrency / race conditions", "Distributed systems", "Cross-service refactors"], followUps: ["Which class of bug is hardest for AI to spot?"], relatedDomains: ["software-engineering", "cybersecurity"], relatedArchitectures: ["tool-agents", "llm"], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-ai-code-verification", question: "What does verification look like for AI-written code?", category: "Software engineering", audience: "Engineer", difficulty: "expert", whyThisQuestionMatters: "Verification is the bottleneck for autonomous coding.", whatAGreatAnswerShouldCover: ["Property-based testing", "Formal methods", "Differential testing"], followUps: ["Which verification approach is most under-invested?"], relatedDomains: ["software-engineering"], relatedArchitectures: ["tool-agents"], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },

  /* ── Geopolitics ── */
  { id: "q-export-control-most-impactful", question: "What single export-control decision most reshapes global AI?", category: "Geopolitics", audience: "Investor", difficulty: "expert", whyThisQuestionMatters: "Export-control geography redraws the AI map.", whatAGreatAnswerShouldCover: ["EUV access", "GPU advanced-product rules", "HBM controls"], followUps: ["Which control is most likely to be relaxed?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-taiwan-strait-pricing", question: "How does Taiwan Strait risk price into AI capex?", category: "Geopolitics", audience: "Investor", difficulty: "expert", whyThisQuestionMatters: "Concentration of leading-edge silicon and packaging in Taiwan is the largest tail risk in the AI economy.", whatAGreatAnswerShouldCover: ["TSMC concentration", "Diversification options", "CHIPS Act + JASM + EU Chips Act"], followUps: ["What single mitigation move would be most credible?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-sovereign-ai-meaning-deep", question: "What does sovereign AI actually buy a country?", category: "Geopolitics", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Sovereign-AI spending is rising; the strategic logic varies by country.", whatAGreatAnswerShouldCover: ["Compute, data, model, standards sovereignty", "Talent retention", "Industrial policy"], followUps: ["Which country&rsquo;s programme is most coherent?"], relatedDomains: ["smart-cities", "government-services"], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-us-china-merge-or-fork", question: "Will the US-China AI bifurcation accelerate or merge?", category: "Geopolitics", audience: "Investor", difficulty: "expert", whyThisQuestionMatters: "Determines long-horizon supply-chain strategy.", whatAGreatAnswerShouldCover: ["Open-weight cross-pollination", "Hardware substitution", "Standards + governance"], followUps: ["What single event could cause re-merging?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["alibaba-qwen", "deepseek"], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-eu-ai-act-effect", question: "What does the EU AI Act actually do to deployment?", category: "Geopolitics", audience: "Operator", difficulty: "advanced", whyThisQuestionMatters: "EU AI Act compliance is the next regulatory floor.", whatAGreatAnswerShouldCover: ["High-risk-system rules", "Provenance requirements", "Foundation-model obligations"], followUps: ["Which clause has the biggest unintended consequence?"], relatedDomains: ["clinical-medicine", "media-entertainment", "consumer-search"], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: ["needs-verification"], confidence: "marketContext" },
  { id: "q-india-ai-playbook", question: "What does India&rsquo;s AI playbook need to look like?", category: "Geopolitics", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "India is the largest under-priced AI talent and consumer market.", whatAGreatAnswerShouldCover: ["Compute access", "Indic-language models", "Public-data infrastructure", "Sovereign-AI funding"], followUps: ["Which Indian institution leads?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: ["needs-verification"], confidence: "inferred" },
  { id: "q-gulf-ai-spend", question: "Why are Gulf states the surprise AI spenders?", category: "Geopolitics", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "UAE / Saudi sovereign-AI capex is reshaping global supply.", whatAGreatAnswerShouldCover: ["Sovereign capital", "Cheap energy", "Digital-economy ambitions"], followUps: ["Which deal is most strategically important?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-non-aligned-ai-power", question: "Which non-aligned country could break out as an AI power?", category: "Geopolitics", audience: "Investor", difficulty: "expert", whyThisQuestionMatters: "Non-aligned states with capital + energy may become surprise hubs.", whatAGreatAnswerShouldCover: ["Energy + capital + talent", "Sovereign-AI stance", "Export-control alignment"], followUps: ["What is the single biggest constraint for breakout countries?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "forwardLooking" },
  { id: "q-cheap-intelligence-soft-power", question: "How does cheap intelligence change soft power?", category: "Geopolitics", audience: "Public intellectual", difficulty: "expert", whyThisQuestionMatters: "Cheap intelligence reshapes information, narrative and influence.", whatAGreatAnswerShouldCover: ["Localised content production", "Information operations", "Diplomatic translation"], followUps: ["Which soft-power lever changes most?"], relatedDomains: ["media-entertainment", "consumer-search"], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-open-weights-geopolitics", question: "What is the role of open-weight models in geopolitics?", category: "Geopolitics", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Open-weight models bypass export controls and create leverage.", whatAGreatAnswerShouldCover: ["Llama / Mistral / Qwen / DeepSeek", "Sovereign deployments", "Counter-narrative capability"], followUps: ["Which open-weight model is most strategically used?"], relatedDomains: [], relatedArchitectures: ["llm"], relatedCompanies: ["meta-ai", "mistral", "alibaba-qwen", "deepseek"], relatedPapers: [], sourceIds: [], confidence: "inferred" },

  /* ── Human history ── */
  { id: "q-historical-analogue", question: "Which technological era is most analogous to AI?", category: "Human history", audience: "Public intellectual", difficulty: "advanced", whyThisQuestionMatters: "Forces explicit comparison and disciplines forecasting.", whatAGreatAnswerShouldCover: ["Electricity vs printing press vs internet vs nuclear", "Diffusion timelines", "Labour effects"], followUps: ["Which precedent is most over-cited?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-rhyme-electricity-or-printing", question: "Will AI rhyme more with electricity or with the printing press?", category: "Human history", audience: "Public intellectual", difficulty: "expert", whyThisQuestionMatters: "Sets expectations on diffusion speed and labour effects.", whatAGreatAnswerShouldCover: ["Electricity: utility-like diffusion", "Printing press: knowledge restructuring", "Differences in capital intensity"], followUps: ["Which scenario is the modal expectation?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-compute-cycles-prices", question: "What have past compute cycles taught us about long-term prices?", category: "Human history", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Mainframes, PCs, mobile and cloud all repeat patterns.", whatAGreatAnswerShouldCover: ["Moore&rsquo;s Law dynamics", "Cloud commoditisation", "Vertical integration"], followUps: ["Which past cycle most resembles AI capex today?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: ["nvidia"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-railroad-mania-lessons", question: "What did railroad mania teach us about infrastructure capex?", category: "Human history", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Railroad mania is the most-cited historical analogue for AI capex.", whatAGreatAnswerShouldCover: ["Capital destruction with infrastructure survival", "Standardisation cycles", "Bubble vs durable infrastructure"], followUps: ["Which AI infrastructure is most railroad-like?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-automation-labour-history", question: "What does the history of automation teach about labour displacement?", category: "Human history", audience: "Public intellectual", difficulty: "advanced", whyThisQuestionMatters: "Calibrates AI labour-displacement expectations.", whatAGreatAnswerShouldCover: ["Sectoral reallocation", "Wage polarisation", "Re-skilling lag"], followUps: ["Which sector is closest to a 1980s manufacturing-style shock?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-internet-boom-platform-app", question: "What did the internet boom teach about platforms vs applications?", category: "Human history", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "The internet&rsquo;s platform-vs-application dynamic repeats in AI.", whatAGreatAnswerShouldCover: ["Aggregation theory", "Distribution as moat", "Platform shifts that recurred"], followUps: ["Which AI platform is closest to becoming an aggregator?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-nuclear-vs-ai", question: "How does AI compare to nuclear power as a strategic technology?", category: "Human history", audience: "Public intellectual", difficulty: "expert", whyThisQuestionMatters: "Frames governance and proliferation analogues.", whatAGreatAnswerShouldCover: ["Diffusion control", "Civilian + military duality", "International governance regimes"], followUps: ["What is the right governance model?"], relatedDomains: ["defence"], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" },
  { id: "q-gps-ubiquity", question: "What has GPS taught us about ubiquitous AI infrastructure?", category: "Human history", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "GPS shows what happens when an infrastructure becomes effectively free.", whatAGreatAnswerShouldCover: ["Public-good provision", "Application explosion", "Strategic dependency"], followUps: ["Which AI capability is most likely to become GPS-like?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-search-to-ai-search", question: "What lessons from search engines apply to AI search?", category: "Human history", audience: "Investor", difficulty: "advanced", whyThisQuestionMatters: "Search and AI search share economic structure but differ in unit economics.", whatAGreatAnswerShouldCover: ["Ad model lessons", "Monetisation", "Trust hierarchies"], followUps: ["Which lesson applies least?"], relatedDomains: ["consumer-search"], relatedArchitectures: ["rag"], relatedCompanies: ["google-deepmind", "perplexity"], relatedPapers: [], sourceIds: [], confidence: "marketContext" },
  { id: "q-overlooked-precedent", question: "What is the most-overlooked precedent for AI&rsquo;s impact?", category: "Human history", audience: "Public intellectual", difficulty: "expert", whyThisQuestionMatters: "Forces creative analogue thinking.", whatAGreatAnswerShouldCover: ["Underused historical comparisons", "Unique features of AI", "Where analogies break"], followUps: ["What is the closest analogue you avoid mentioning publicly?"], relatedDomains: [], relatedArchitectures: [], relatedCompanies: [], relatedPapers: [], sourceIds: [], confidence: "inferred" }
];

/* ============================================
   INTERVIEW_QUESTION_SETS
   ============================================
   Curated interview banks. Designed so the questions themselves
   demonstrate fluency: technical, business, supply-chain and
   second-order.
   ============================================ */
var INTERVIEW_QUESTION_SETS = [
  {
    id: "interview-jensen-huang",
    name: "Jensen Huang interview set",
    target: "NVIDIA CEO",
    sections: [
      {
        title: "AI factories and inference economics",
        questions: [
          { id: "ji-tokens-unit", question: "When you describe data centres as AI factories, what is the actual unit of production: tokens, reasoning steps, robot policies, simulations, or something else?", whyItMatters: "Forces a precise unit-economics framing.", followUps: ["Does the unit change as agentic and reasoning workloads scale?"] },
          { id: "ji-power-plant-fab", question: "Is the long-term AI factory closer to a power plant, a semiconductor fab, or a cloud region?", whyItMatters: "Shapes both physical design and customer expectations.", followUps: ["Which analogue best fits a billion-dollar AI campus?"] },
          { id: "ji-bandwidth-vs-flops", question: "At what point does inference economics become more constrained by memory bandwidth and networking than raw FLOPS?", whyItMatters: "Explains why HBM and interconnect are NVIDIA&rsquo;s real long-term levers.", followUps: ["What HBM generation makes that pivot most visible?"] },
          { id: "ji-tokens-per-watt", question: "What does &lsquo;tokens per watt&rsquo; really mean operationally for a hyperscaler?", whyItMatters: "Pins down the inference unit economics conversation.", followUps: ["Which technique improves it most: better silicon, better software or better workload mix?"] }
        ]
      },
      {
        title: "NVIDIA moat and CUDA",
        questions: [
          { id: "ji-cuda-misconception", question: "What is the biggest misconception smart people have about CUDA?", whyItMatters: "Probes Jensen&rsquo;s view of competitor analysis.", followUps: ["Which CUDA capability is hardest to replicate?"] },
          { id: "ji-stack-hardest", question: "Which part of the stack is hardest to commoditise: GPU silicon, interconnect, CUDA libraries, systems integration, or the developer ecosystem?", whyItMatters: "Tests Jensen&rsquo;s long-term defensibility argument.", followUps: ["Which layer will be commoditised first?"] },
          { id: "ji-asics-strengthen", question: "If every hyperscaler builds custom silicon, what part of NVIDIA&rsquo;s value capture actually becomes stronger?", whyItMatters: "Inverts the conventional bear case.", followUps: ["Which hyperscaler is the strongest co-evolution partner, not competitor?"] },
          { id: "ji-rocm-when", question: "What would have to be true for ROCm to genuinely close the CUDA gap?", whyItMatters: "Tests an honest read of AMD.", followUps: ["What single library would you watch?"] }
        ]
      },
      {
        title: "Rubin, Blackwell and architecture",
        questions: [
          { id: "ji-rubin-bet", question: "Looking at Rubin and beyond, what is the bet you are making about workloads in 2027?", whyItMatters: "Tests architectural foresight.", followUps: ["Where could that bet be wrong?"] },
          { id: "ji-mega-package", question: "Are bigger packages and bigger systems the right answer, or is the future more about memory and interconnect?", whyItMatters: "Frames the system-level design philosophy.", followUps: ["What is the limit case?"] },
          { id: "ji-software-roadmap", question: "How do you align the software roadmap with three-year hardware bets?", whyItMatters: "Probes Jensen&rsquo;s executive playbook.", followUps: ["Which CUDA library is most coupled to a future architecture?"] }
        ]
      },
      {
        title: "HBM, CoWoS and supply chain",
        questions: [
          { id: "ji-hbm-supply-fragility", question: "How fragile do you think the HBM and CoWoS supply chain really is?", whyItMatters: "Tests Jensen&rsquo;s read on the supply-chain risk that defines NVIDIA&rsquo;s growth ceiling.", followUps: ["What would you most want diversified by 2027?"] },
          { id: "ji-cowos-variants", question: "Where do CoWoS-S vs L vs R fit into different products in your roadmap?", whyItMatters: "Probes packaging strategy.", followUps: ["Which variant is most under-appreciated?"] },
          { id: "ji-tsmc-arizona", question: "How does TSMC Arizona change the geography of advanced AI silicon?", whyItMatters: "Tests Jensen&rsquo;s read on geopolitical hedging.", followUps: ["Will the ecosystem follow, or stay in Taiwan?"] }
        ]
      },
      {
        title: "Hyperscaler ASICs and competition",
        questions: [
          { id: "ji-asic-actual-share", question: "What share of internal hyperscaler workloads do you think custom silicon will own in 2028?", whyItMatters: "Forces a quantitative bet.", followUps: ["Which hyperscaler is most credible at frontier training on its own silicon?"] },
          { id: "ji-google-tpu", question: "How do you frame the TPU&rsquo;s role inside Google vs your business?", whyItMatters: "Probes competitor framing.", followUps: ["What changes if Google externalises TPU more aggressively?"] },
          { id: "ji-china-ascend", question: "What do you think Huawei Ascend can and cannot do?", whyItMatters: "Tests Jensen&rsquo;s honest read on China.", followUps: ["What is the most-overlooked Chinese AI silicon program?"] }
        ]
      },
      {
        title: "Physical AI and robotics",
        questions: [
          { id: "ji-robot-platform", question: "Will robots be a new computing platform or an application category?", whyItMatters: "Frames Omniverse / Isaac / Cosmos value.", followUps: ["Which category proves it first?"] },
          { id: "ji-physical-ai-revenue", question: "When does physical AI become a meaningful slice of NVIDIA revenue?", whyItMatters: "Forces a timeline commitment.", followUps: ["Which vertical comes first?"] },
          { id: "ji-vla-bottleneck", question: "What is the real bottleneck to generalist humanoids today?", whyItMatters: "Tests Jensen&rsquo;s view of robotics R&amp;D.", followUps: ["Which lab will solve it first?"] }
        ]
      },
      {
        title: "Sovereign AI and geopolitics",
        questions: [
          { id: "ji-sovereign-ai", question: "What countries are most under-rated as future AI powers?", whyItMatters: "Probes Jensen&rsquo;s geopolitical read.", followUps: ["What policy would unlock the most demand?"] },
          { id: "ji-export-controls", question: "How do you operate around export controls that change every six months?", whyItMatters: "Tests adaptive supply-chain strategy.", followUps: ["What is the longest planning horizon you can credibly hold?"] }
        ]
      },
      {
        title: "Quantum-classical computing",
        questions: [
          { id: "ji-quantum-classical", question: "What does quantum computing need from classical acceleration before it becomes useful?", whyItMatters: "Probes Jensen&rsquo;s quantum thesis.", followUps: ["Which modality is closest to that?"] },
          { id: "ji-cuda-q", question: "How do you think CUDA-Q and NVQLink change the quantum ecosystem?", whyItMatters: "Frames NVIDIA&rsquo;s role.", followUps: ["What would convince you of quantum advantage in chemistry?"] }
        ]
      },
      {
        title: "Civilization-level questions",
        questions: [
          { id: "ji-cheap-intelligence", question: "If intelligence becomes effectively free, what does the world rearrange itself around?", whyItMatters: "Forces second-order thinking.", followUps: ["What becomes scarce?"] },
          { id: "ji-children", question: "What should your grandchildren learn now?", whyItMatters: "Probes Jensen&rsquo;s personal philosophy.", followUps: ["What would you tell a 12-year-old today?"] },
          { id: "ji-power-shift", question: "Will AI centralise or decentralise power, and which scenario do you actively design for?", whyItMatters: "Probes governance worldview.", followUps: ["Which institution worries you most?"] }
        ]
      }
    ]
  },
  {
    id: "interview-frontier-lab-ceo",
    name: "Frontier lab CEO interview set",
    target: "OpenAI / Anthropic / DeepMind / xAI / Mistral CEO",
    sections: [
      { title: "Scaling laws and capability frontier", questions: [
        { id: "fl-scaling-bet", question: "Where do you see scaling laws still paying, and where do they bend?", whyItMatters: "Pins down the most actionable empirical claim.", followUps: ["What benchmark would convince you they had broken?"] },
        { id: "fl-frontier-gap", question: "How do you measure your gap to the frontier honestly?", whyItMatters: "Tests internal eval discipline.", followUps: ["Which eval do you trust the least?"] }
      ]},
      { title: "Post-training and reasoning", questions: [
        { id: "fl-post-training", question: "What is the post-training recipe you think is most under-appreciated?", whyItMatters: "Probes the moat in RLHF / RLAIF / o-series-style methods.", followUps: ["What changes most in the next 12 months?"] }
      ]},
      { title: "Compute strategy", questions: [
        { id: "fl-compute-stack", question: "Which compute partner gives you the most leverage and which gives you the most risk?", whyItMatters: "Probes hyperscaler dependency.", followUps: ["What would force you to multi-cloud or build your own?"] }
      ]},
      { title: "Product and distribution", questions: [
        { id: "fl-product-bet", question: "Which surface (consumer chat, agents, enterprise, devices) will determine the next decade?", whyItMatters: "Frames product strategy.", followUps: ["Where do you under-invest today?"] }
      ]}
    ]
  },
  {
    id: "interview-ai-researcher",
    name: "AI researcher interview set",
    target: "Frontier-lab researcher / academic AI lead",
    sections: [
      { title: "Methods", questions: [
        { id: "ar-loss-design", question: "Which loss-function design is most under-appreciated right now?", whyItMatters: "Probes research originality.", followUps: ["What single experiment would you fund?"] },
        { id: "ar-eval", question: "Which standard eval is most misleading?", whyItMatters: "Tests research honesty.", followUps: ["What would replace it?"] }
      ]},
      { title: "Architectures", questions: [
        { id: "ar-architectures", question: "Which architecture are you watching outside transformers?", whyItMatters: "Frames the post-attention horizon.", followUps: ["What would have to be true for it to win?"] }
      ]},
      { title: "Open problems", questions: [
        { id: "ar-open-problem", question: "What is the most-overlooked open problem in your area?", whyItMatters: "Probes depth of field.", followUps: ["Why do most labs miss it?"] }
      ]}
    ]
  },
  {
    id: "interview-founder-operator",
    name: "Founder / operator interview set",
    target: "Vertical AI founder / product operator",
    sections: [
      { title: "Customer and pain", questions: [
        { id: "fo-buyer", question: "Who exactly is your buyer and how do you find them?", whyItMatters: "Most AI startups die on go-to-market.", followUps: ["What is the smallest first-customer cohort that proves demand?"] },
        { id: "fo-pain", question: "What is the single workflow pain you are removing?", whyItMatters: "Forces specificity.", followUps: ["Could the buyer build it themselves?"] }
      ]},
      { title: "Defensibility", questions: [
        { id: "fo-data", question: "What data do you accumulate that competitors cannot easily replicate?", whyItMatters: "Probes proprietary-data moat.", followUps: ["What customer would you not trade?"] },
        { id: "fo-incumbent", question: "Which incumbent kills you if they ship your feature?", whyItMatters: "Tests feature-vs-company risk.", followUps: ["What stops them?"] }
      ]},
      { title: "Eval and trust", questions: [
        { id: "fo-eval", question: "How do you know your AI product is improving?", whyItMatters: "Eval discipline is the modern moat.", followUps: ["What single metric do you watch first?"] }
      ]}
    ]
  },
  {
    id: "interview-ai-investor",
    name: "AI investor interview set",
    target: "VC partner / public-market investor",
    sections: [
      { title: "Market structure", questions: [
        { id: "vc-overbuilt", question: "Where is AI most overbuilt, and where is it under-built?", whyItMatters: "Probes portfolio thesis.", followUps: ["What is the next overbuilt category?"] },
        { id: "vc-data-moat", question: "Where is data still a real moat in 2026 and beyond?", whyItMatters: "Frames defensibility.", followUps: ["Which proprietary data type is most under-priced?"] }
      ]},
      { title: "Strategic bets", questions: [
        { id: "vc-pick-shovel", question: "Which picks-and-shovels businesses do you actually back?", whyItMatters: "Concretises infrastructure thesis.", followUps: ["What makes them durable?"] },
        { id: "vc-platform-vs-feature", question: "What looks like a company but is really a feature?", whyItMatters: "Tests editorial honesty.", followUps: ["Which famous AI startup is actually a feature?"] }
      ]},
      { title: "Macro", questions: [
        { id: "vc-power-cap", question: "When does power become the binding constraint on AI growth?", whyItMatters: "Frames capex.", followUps: ["Which region first?"] },
        { id: "vc-china-stack", question: "How do you price the rise of the China AI stack?", whyItMatters: "Frames geopolitical risk.", followUps: ["Which player is most credible globally?"] }
      ]}
    ]
  },
  {
    id: "interview-civilizational",
    name: "Civilizational interview set",
    target: "Public intellectual / policymaker",
    sections: [
      { title: "Power and governance", questions: [
        { id: "ci-power", question: "Will AI centralise or decentralise power, and what should regulators do today?", whyItMatters: "Frames antitrust + governance.", followUps: ["Which institution should lead?"] },
        { id: "ci-truth", question: "What does AI do to truth, and how do we reinforce verifiable information?", whyItMatters: "Frames provenance + media.", followUps: ["Which standard should win?"] }
      ]},
      { title: "Labour and education", questions: [
        { id: "ci-labour", question: "What does cheap intelligence do to labour and class?", whyItMatters: "Frames policy response.", followUps: ["What re-skilling actually works?"] },
        { id: "ci-children", question: "What should children learn now?", whyItMatters: "Forces personal stance.", followUps: ["What single skill becomes most valuable?"] }
      ]}
    ]
  },
  {
    id: "interview-domain-expert",
    name: "Domain expert interview set",
    target: "Clinical, legal, financial, energy or scientific expert with AI exposure",
    sections: [
      { title: "Validation", questions: [
        { id: "de-validation", question: "What evidence would convince you that an AI tool is genuinely safe in your domain?", whyItMatters: "Translates evaluation into domain language.", followUps: ["What would force you to recommend de-adoption?"] }
      ]},
      { title: "Workflow", questions: [
        { id: "de-workflow", question: "What workflow change would matter more than any model improvement?", whyItMatters: "Probes integration vs capability.", followUps: ["Why is no one solving it?"] }
      ]},
      { title: "Ethics and trust", questions: [
        { id: "de-trust", question: "What single ethical failure would set the field back five years?", whyItMatters: "Frames downside scenarios.", followUps: ["What would prevent it?"] }
      ]}
    ]
  }
];

/* ============================================
   INDUSTRY_WORKFLOWS &mdash; stepwise AI workflows by industry
   ============================================ */
var INDUSTRY_WORKFLOWS = [
  { id: "wf-radiology-reporting", domainId: "radiology", title: "Radiology report assistance workflow", industry: "Healthcare", maturity: "Production", confidence: "sourced", oneLineTakeaway: "AI enters radiology where images are already digital, but clinician review remains the safety gate.", workflowSteps: [
    { step: 1, name: "Image acquisition", actor: "Technologist + imaging system", input: "X-ray / CT / MRI / ultrasound", aiRole: "Mostly none; some scanners run protocol-QC AI.", dataUsed: ["DICOM image", "patient metadata"], architectures: [], output: "Imaging study ready for interpretation", humanReview: "Technologist + RIS", failureModes: ["poor image quality", "incorrect metadata", "protocol mismatch"] },
    { step: 2, name: "Triage / detection / segmentation", actor: "AI model + radiologist", input: "Medical image", aiRole: "Detect, segment or prioritise findings (stroke, PE, nodules).", dataUsed: ["medical image", "priors"], architectures: ["cnn", "vit", "segmentation-models", "multimodal-llm"], output: "triage flag, segmentation mask, candidate finding", humanReview: "Radiologist", failureModes: ["false negative", "false positive", "scanner distribution shift", "automation bias"] },
    { step: 3, name: "Report drafting", actor: "Radiologist + reporting system", input: "findings, measurements, clinical context", aiRole: "Draft structured impressions, suggest measurements, check consistency.", dataUsed: ["image findings", "clinical notes", "prior reports"], architectures: ["domain-fm", "rag", "asr-tts"], output: "draft report", humanReview: "Radiologist signs final report", failureModes: ["hallucinated finding", "missing uncertainty", "bad clinical phrasing"] },
    { step: 4, name: "Communication + follow-up", actor: "Reporting / EHR system", input: "Final signed report", aiRole: "Critical-finding notification routing, structured-finding extraction.", dataUsed: ["report", "patient context"], architectures: ["llm"], output: "EHR record + referrals", humanReview: "Care team", failureModes: ["missed critical-finding alerts", "EHR integration error"] }
  ], inputs: ["DICOM imaging", "clinical notes"], outputs: ["draft / signed report", "structured findings", "triage flags"], users: ["Radiologists"], buyers: ["Hospital imaging informatics director"], budgetOwners: ["Hospital / radiology group"], architecturesUsed: ["cnn", "vit", "segmentation-models", "domain-fm", "rag"], companiesUsingThisWorkflow: ["Aidoc", "Viz.ai", "Rad AI", "Annalise.ai"], relevantProducts: ["Aidoc cAI", "Viz.ai stroke", "Rad AI Impressions"], datasets: ["MIMIC-CXR", "NIH ChestX-ray14"], papers: ["paper-unet", "paper-nnunet", "paper-chexnet"], regulations: ["FDA SaMD"], bottlenecks: ["bn-clinical-validation", "bn-radiology-shift"], founderOpportunities: ["opp-radiology-report-copilot"], sourceIds: ["src-fda-samd", "src-radiology-fda-list"] },
  { id: "wf-pathology-slide-analysis", domainId: "pathology", title: "Pathology slide analysis workflow", industry: "Healthcare", maturity: "Early production", confidence: "sourced", oneLineTakeaway: "Whole-slide AI moves from patch classifiers toward slide-level foundation models.", workflowSteps: [
    { step: 1, name: "Slide preparation + scanning", actor: "Histotech + scanner", input: "Tissue, H&amp;E stain", aiRole: "QC checks on scan focus / coverage.", dataUsed: ["whole-slide image"], architectures: ["cnn"], output: "Whole-slide image", humanReview: "Histotech", failureModes: ["scanner artefact", "stain variance"] },
    { step: 2, name: "Tile sampling + embedding", actor: "AI pipeline", input: "WSI", aiRole: "Tile sampling + foundation-model embeddings.", dataUsed: ["whole-slide image"], architectures: ["vit", "domain-fm"], output: "Slide-level embeddings", humanReview: "QC pipeline", failureModes: ["unrepresentative sampling", "domain shift"] },
    { step: 3, name: "Slide-level prediction", actor: "AI model + pathologist", input: "Embeddings", aiRole: "Tumour detection, grading, biomarker prediction.", dataUsed: ["embedding", "patient context"], architectures: ["domain-fm", "molecular-gnn"], output: "Slide-level prediction with attention map", humanReview: "Pathologist sign-off", failureModes: ["off-distribution slides", "false biomarker calls"] },
    { step: 4, name: "Reporting + downstream actions", actor: "LIS / EHR", input: "Pathology report", aiRole: "Structured-report drafting and biomarker routing.", dataUsed: ["report", "molecular-test results"], architectures: ["domain-fm", "rag"], output: "Final pathology report", humanReview: "Pathologist + oncologist", failureModes: ["report ambiguity", "molecular-test mismatch"] }
  ], inputs: ["whole-slide images", "molecular tests"], outputs: ["slide-level prediction", "biomarker scores", "report"], users: ["Pathologists"], buyers: ["Lab director"], budgetOwners: ["Lab"], architecturesUsed: ["vit", "domain-fm", "cnn"], companiesUsingThisWorkflow: ["Paige", "PathAI", "Tempus", "Ibex"], relevantProducts: ["Paige Prostate"], datasets: ["TCGA", "CAMELYON", "PANDA"], papers: ["paper-vit"], regulations: ["FDA SaMD", "CLIA"], bottlenecks: ["bn-clinical-validation"], founderOpportunities: [], sourceIds: ["src-tcga", "src-fda-samd", "src-radiology-fda-list"] },
  { id: "wf-ophthalmology-screening", domainId: "ophthalmology", title: "Ophthalmology screening workflow", industry: "Healthcare", maturity: "Early production", confidence: "sourced", oneLineTakeaway: "First FDA De Novo authorisation of autonomous diagnostic AI was in this workflow (IDx-DR, 2018).", workflowSteps: [
    { step: 1, name: "Fundus / OCT capture", actor: "Tech + camera", input: "Patient eye", aiRole: "Image-quality checks.", dataUsed: ["fundus", "OCT"], architectures: ["cnn"], output: "Imaging study", humanReview: "Tech", failureModes: ["focus", "media opacity"] },
    { step: 2, name: "Disease detection", actor: "AI model", input: "Fundus / OCT", aiRole: "Detect DR / glaucoma / AMD.", dataUsed: ["image"], architectures: ["cnn", "vit", "domain-fm"], output: "Referable / non-referable", humanReview: "PCP / ophthalmologist", failureModes: ["camera shift", "rare-disease miss"] },
    { step: 3, name: "Referral + follow-up", actor: "Care coordinator", input: "AI decision", aiRole: "Schedule referral.", dataUsed: ["report"], architectures: ["llm"], output: "Referral", humanReview: "Ophthalmologist", failureModes: ["lost-to-follow-up"] }
  ], inputs: ["fundus", "OCT"], outputs: ["referral"], users: ["PCPs"], buyers: ["Primary-care networks"], budgetOwners: ["Payers"], architecturesUsed: ["cnn", "vit", "domain-fm"], companiesUsingThisWorkflow: ["IDx (Digital Diagnostics)", "Eyenuk", "AEYE Health"], relevantProducts: ["IDx-DR (FDA De Novo, 2018)"], datasets: ["EyePACS"], papers: [], regulations: ["FDA SaMD"], bottlenecks: ["bn-clinical-validation"], founderOpportunities: ["opp-ophth-screening"], sourceIds: ["src-fda-samd", "src-idx-dr"] },
  { id: "wf-clinical-scribe", domainId: "clinical-documentation", title: "Ambient clinical scribe workflow", industry: "Healthcare", maturity: "Production", confidence: "sourced", oneLineTakeaway: "AI scribes are the first AI most clinicians actually use.", workflowSteps: [
    { step: 1, name: "Encounter capture", actor: "Clinician + ambient mic", input: "Audio + consent", aiRole: "Diarisation + ASR.", dataUsed: ["encounter audio"], architectures: ["asr-tts"], output: "Transcript", humanReview: "None at this step", failureModes: ["mic placement", "noise"] },
    { step: 2, name: "Note drafting", actor: "Clinical LLM", input: "Transcript + EHR", aiRole: "Generate SOAP note + codes.", dataUsed: ["transcript", "EHR"], architectures: ["domain-fm", "rag"], output: "Draft note", humanReview: "Clinician", failureModes: ["hallucinated finding", "missing negatives"] },
    { step: 3, name: "EHR integration", actor: "EHR + RPA", input: "Signed note", aiRole: "Field-mapping.", dataUsed: ["EHR APIs"], architectures: ["llm"], output: "Note + orders + billing", humanReview: "Clinician", failureModes: ["field mismapping"] }
  ], inputs: ["audio", "EHR"], outputs: ["SOAP note", "billing codes"], users: ["Clinicians"], buyers: ["Health-system CIO"], budgetOwners: ["Health system"], architecturesUsed: ["asr-tts", "domain-fm", "rag"], companiesUsingThisWorkflow: ["Microsoft / Nuance DAX", "Abridge", "Augmedix"], relevantProducts: ["DAX Copilot", "Abridge"], datasets: [], papers: [], regulations: ["HIPAA"], bottlenecks: ["bn-ehr-workflow"], founderOpportunities: ["opp-clindocs-specialty"], sourceIds: ["src-hipaa"] },
  { id: "wf-prior-authorization", domainId: "clinical-medicine", title: "Prior authorisation / RCM workflow", industry: "Healthcare-admin", maturity: "Early production", confidence: "inferred", oneLineTakeaway: "Boring admin workflow with real money attached; classic vertical-AI wedge.", workflowSteps: [
    { step: 1, name: "Document intake", actor: "RCM staff + EHR", input: "Order, chart, supporting docs", aiRole: "OCR + structured extraction.", dataUsed: ["chart", "imaging report"], architectures: ["ocr-docai", "domain-fm"], output: "Structured case", humanReview: "RCM staff", failureModes: ["wrong code"] },
    { step: 2, name: "Payer-policy retrieval", actor: "RAG over policies", input: "Procedure + diagnosis + payer", aiRole: "Retrieve relevant policy clauses.", dataUsed: ["payer policies"], architectures: ["rag", "embeddings"], output: "Policy excerpts", humanReview: "Reviewer", failureModes: ["stale policy"] },
    { step: 3, name: "Submission drafting", actor: "LLM agent + reviewer", input: "Case + policy", aiRole: "Draft authorisation letter.", dataUsed: ["case data"], architectures: ["llm", "tool-agents"], output: "PA submission", humanReview: "Reviewer", failureModes: ["hallucinated criteria"] },
    { step: 4, name: "Denial / appeal", actor: "RCM + clinician", input: "Denial decision", aiRole: "Generate appeal.", dataUsed: ["denial reason"], architectures: ["llm", "rag"], output: "Appeal submission", humanReview: "Clinician", failureModes: ["missed deadline"] }
  ], inputs: ["chart", "policies"], outputs: ["PA submission", "appeal letter"], users: ["RCM staff"], buyers: ["Practice admin"], budgetOwners: ["Practice"], architecturesUsed: ["ocr-docai", "rag", "llm", "tool-agents"], companiesUsingThisWorkflow: ["Cohere Health", "Co:Helm"], relevantProducts: [], datasets: [], papers: ["paper-rag"], regulations: ["HIPAA"], bottlenecks: ["bn-ehr-workflow"], founderOpportunities: ["opp-prior-auth-specialty"], sourceIds: ["src-hipaa"] },
  { id: "wf-clinical-trial-matching", domainId: "clinical-medicine", title: "Clinical trial matching workflow", industry: "Healthcare", maturity: "Early production", confidence: "inferred", oneLineTakeaway: "Trial matching closes the most-leaky funnel in oncology and rare disease.", workflowSteps: [
    { step: 1, name: "Patient case ingestion", actor: "EHR + ingestion service", input: "Chart, imaging, molecular", aiRole: "Structured extraction.", dataUsed: ["chart", "molecular tests"], architectures: ["domain-fm"], output: "Structured patient profile", humanReview: "Coordinator", failureModes: ["missing data"] },
    { step: 2, name: "Eligibility matching", actor: "RAG over trials", input: "Patient profile + trials", aiRole: "Score eligibility per trial.", dataUsed: ["trial protocols"], architectures: ["rag", "embeddings"], output: "Ranked trials", humanReview: "Coordinator", failureModes: ["criteria misinterpretation"] },
    { step: 3, name: "Outreach + enrolment", actor: "Coordinator + agent", input: "Match list", aiRole: "Personalised outreach.", dataUsed: ["patient context"], architectures: ["llm", "tool-agents"], output: "Enrolment", humanReview: "Coordinator", failureModes: ["consent friction"] }
  ], inputs: ["EHR", "trial protocols"], outputs: ["matches"], users: ["Coordinators"], buyers: ["Cancer centres", "CROs"], budgetOwners: ["Sponsor"], architecturesUsed: ["domain-fm", "rag", "tool-agents"], companiesUsingThisWorkflow: ["Tempus", "Flatiron", "Concert AI"], relevantProducts: [], datasets: [], papers: ["paper-rag"], regulations: ["HIPAA", "ICH-GCP"], bottlenecks: ["bn-ehr-workflow"], founderOpportunities: [], sourceIds: [] },
  { id: "wf-protein-design", domainId: "protein-design", title: "De novo protein design workflow", industry: "Biology", maturity: "Research frontier", confidence: "sourced", oneLineTakeaway: "Design-build-test-learn loop where AI proposes; the lab decides.", workflowSteps: [
    { step: 1, name: "Target / function specification", actor: "Computational biologist", input: "Target structure", aiRole: "Encode constraints.", dataUsed: ["target"], architectures: [], output: "Design spec", humanReview: "Researcher", failureModes: ["under-constrained"] },
    { step: 2, name: "Backbone generation", actor: "RFdiffusion-class", input: "Constraints", aiRole: "Generate backbones.", dataUsed: ["PDB"], architectures: ["diffusion-bio", "equivariant-nn"], output: "Backbones", humanReview: "Researcher", failureModes: ["unrealistic geometry"] },
    { step: 3, name: "Sequence design", actor: "ProteinMPNN-class", input: "Backbone", aiRole: "Inverse folding.", dataUsed: ["PDB"], architectures: ["protein-lm", "molecular-gnn"], output: "Sequences", humanReview: "Researcher", failureModes: ["expression failure"] },
    { step: 4, name: "In-silico filtering", actor: "AI ensemble", input: "Candidates", aiRole: "Filter by quality + function.", dataUsed: ["candidates"], architectures: ["protein-lm"], output: "Top N", humanReview: "Researcher", failureModes: ["over-fit metrics"] },
    { step: 5, name: "Wet-lab build + assay", actor: "Lab", input: "Candidates", aiRole: "Track results.", dataUsed: ["assay data"], architectures: ["bayesian-opt"], output: "Validated proteins", humanReview: "Lab", failureModes: ["assay variance"] },
    { step: 6, name: "Iterate", actor: "Active-learning loop", input: "Lab data", aiRole: "Update generator + scorer.", dataUsed: ["assay history"], architectures: ["bayesian-opt"], output: "Improved candidates", humanReview: "Team", failureModes: ["loop divergence"] }
  ], inputs: ["target structure"], outputs: ["validated proteins"], users: ["Comp + wet-lab teams"], buyers: ["Biotech R&amp;D head"], budgetOwners: ["Biotech"], architecturesUsed: ["diffusion-bio", "protein-lm", "equivariant-nn", "bayesian-opt"], companiesUsingThisWorkflow: ["Generate Biomedicines", "Cradle", "Profluent", "Isomorphic Labs"], relevantProducts: ["RFdiffusion", "ProteinMPNN"], datasets: ["PDB", "UniProt"], papers: ["paper-rfdiffusion", "paper-proteinmpnn"], regulations: [], bottlenecks: ["bn-wet-lab"], founderOpportunities: ["opp-bio-eval-harness"], sourceIds: ["paper-rfdiffusion", "paper-proteinmpnn"] },
  { id: "wf-virtual-screening", domainId: "drug-discovery", title: "Virtual screening workflow", industry: "Biology", maturity: "Production", confidence: "sourced", oneLineTakeaway: "Compress a million-compound library to a wet-lab-tractable shortlist.", workflowSteps: [
    { step: 1, name: "Target structure prep", actor: "Computational chemist", input: "Receptor", aiRole: "Pocket detection.", dataUsed: ["receptor"], architectures: ["equivariant-nn"], output: "Prepped receptor", humanReview: "Researcher", failureModes: ["wrong pocket"] },
    { step: 2, name: "Library enumeration", actor: "Chem-info pipeline", input: "Library", aiRole: "Conformers / properties.", dataUsed: ["library"], architectures: ["molecular-gnn"], output: "Searchable library", humanReview: "Researcher", failureModes: ["protonation states"] },
    { step: 3, name: "Pose + score prediction", actor: "DiffDock-class", input: "Library + receptor", aiRole: "Predict pose + affinity.", dataUsed: ["library"], architectures: ["diffusion-bio", "molecular-gnn"], output: "Ranked hits", humanReview: "Researcher", failureModes: ["false positives"] },
    { step: 4, name: "Wet-lab confirmation", actor: "Lab", input: "Top N", aiRole: "Tracking + active learning.", dataUsed: ["assay results"], architectures: ["bayesian-opt"], output: "Confirmed hits", humanReview: "Lab", failureModes: ["assay noise"] }
  ], inputs: ["library", "receptor"], outputs: ["confirmed hits"], users: ["Comp chemists"], buyers: ["Pharma R&amp;D"], budgetOwners: ["Pharma"], architecturesUsed: ["diffusion-bio", "molecular-gnn"], companiesUsingThisWorkflow: ["Atomwise", "Schr&ouml;dinger", "Iambic"], relevantProducts: ["DiffDock"], datasets: ["PubChem", "ChEMBL"], papers: ["paper-diffdock"], regulations: [], bottlenecks: ["bn-wet-lab"], founderOpportunities: ["opp-bio-eval-harness"], sourceIds: ["paper-diffdock", "src-pdb"] },
  { id: "wf-fraud-detection", domainId: "fraud-detection", title: "Real-time fraud detection workflow", industry: "Finance", maturity: "Production", confidence: "sourced", oneLineTakeaway: "Online learning + graph features + sub-100ms decisions.", workflowSteps: [
    { step: 1, name: "Transaction stream", actor: "Payments platform", input: "Live transactions", aiRole: "Feature lookup.", dataUsed: ["entity graph"], architectures: ["embeddings", "graph-threat"], output: "Feature vector", humanReview: "n/a", failureModes: ["staleness"] },
    { step: 2, name: "Scoring", actor: "GBDT + graph", input: "Features", aiRole: "Score in milliseconds.", dataUsed: ["labels"], architectures: ["gbdt", "graph-threat"], output: "Decision", humanReview: "Investigators on flags", failureModes: ["adversarial drift"] },
    { step: 3, name: "Investigation + feedback", actor: "Analyst", input: "Flags", aiRole: "Case summarisation.", dataUsed: ["case"], architectures: ["llm"], output: "Decision + label", humanReview: "Analyst", failureModes: ["label lag"] },
    { step: 4, name: "Retraining", actor: "ML pipeline", input: "Labels", aiRole: "Online + batch retraining.", dataUsed: ["labels"], architectures: ["gbdt"], output: "Updated model", humanReview: "ML eng", failureModes: ["concept drift"] }
  ], inputs: ["transaction stream"], outputs: ["decision", "case"], users: ["Risk engineers"], buyers: ["Risk leadership"], budgetOwners: ["Risk"], architecturesUsed: ["gbdt", "graph-threat", "anomaly-detection", "llm"], companiesUsingThisWorkflow: ["Stripe Radar", "FeatureSpace", "Sift", "Forter"], relevantProducts: ["Stripe Radar"], datasets: ["IEEE-CIS Fraud"], papers: ["paper-gcn"], regulations: ["AML", "PCI-DSS"], bottlenecks: [], founderOpportunities: [], sourceIds: ["paper-gcn", "src-ieee-cis-fraud"] },
  { id: "wf-quant-research", domainId: "quant-finance", title: "Quant research workflow", industry: "Finance", maturity: "Production", confidence: "inferred", oneLineTakeaway: "Honest evaluation under leakage and capacity is the moat.", workflowSteps: [
    { step: 1, name: "Data acquisition + cleaning", actor: "Data eng", input: "Market + alt-data", aiRole: "Pipelines + cleaning.", dataUsed: ["market", "alt-data"], architectures: ["ts-transformer", "anomaly-detection"], output: "Research data", humanReview: "Data eng", failureModes: ["look-ahead"] },
    { step: 2, name: "Feature research", actor: "Quants", input: "Data", aiRole: "Alpha discovery.", dataUsed: ["features"], architectures: ["gbdt", "ts-transformer"], output: "Signals", humanReview: "Researcher", failureModes: ["multiple comparisons"] },
    { step: 3, name: "Backtest + capacity", actor: "Backtester", input: "Signals", aiRole: "Cost / capacity sim.", dataUsed: ["microstructure"], architectures: [], output: "PnL", humanReview: "Risk", failureModes: ["overfitting"] },
    { step: 4, name: "Live paper trading", actor: "Trading system", input: "Strategies", aiRole: "Live monitoring.", dataUsed: ["live"], architectures: ["rl-execution"], output: "Paper PnL", humanReview: "Risk + PM", failureModes: ["regime shift"] },
    { step: 5, name: "Capital allocation", actor: "PM", input: "Validated strategies", aiRole: "Risk-budget allocation.", dataUsed: ["live results"], architectures: [], output: "Live capital", humanReview: "CIO", failureModes: ["correlation blow-ups"] }
  ], inputs: ["market data"], outputs: ["live PnL"], users: ["Quants"], buyers: ["Hedge fund head of research"], budgetOwners: ["CIO"], architecturesUsed: ["ts-transformer", "gbdt", "rl-execution"], companiesUsingThisWorkflow: ["Two Sigma", "Renaissance", "Citadel", "Jane Street"], relevantProducts: [], datasets: [], papers: [], regulations: [], bottlenecks: [], founderOpportunities: ["opp-quant-eval-tooling"], sourceIds: [] },
  { id: "wf-aml-investigator", domainId: "banking", title: "AML investigator copilot workflow", industry: "Finance", maturity: "Early production", confidence: "inferred", oneLineTakeaway: "Investigators get LLM + graph features inside case management.", workflowSteps: [
    { step: 1, name: "Transaction monitoring", actor: "Bank monitoring system", input: "Transactions", aiRole: "Rule + ML alerting.", dataUsed: ["transactions", "KYC"], architectures: ["gbdt", "anomaly-detection"], output: "Alerts", humanReview: "Tier-1 reviewer", failureModes: ["alert fatigue"] },
    { step: 2, name: "Case construction", actor: "Investigator + LLM", input: "Alert + history", aiRole: "Auto-build case narrative.", dataUsed: ["customer history", "OSINT"], architectures: ["llm", "rag", "graph-threat"], output: "Draft case", humanReview: "Investigator", failureModes: ["hallucinated link"] },
    { step: 3, name: "SAR drafting", actor: "Investigator", input: "Case", aiRole: "Draft SAR narrative.", dataUsed: ["case"], architectures: ["llm"], output: "SAR submission", humanReview: "Compliance officer", failureModes: ["regulator critique"] }
  ], inputs: ["transactions", "KYC"], outputs: ["SAR submission"], users: ["Investigators"], buyers: ["AML head"], budgetOwners: ["Compliance"], architecturesUsed: ["llm", "rag", "graph-threat", "gbdt"], companiesUsingThisWorkflow: ["ComplyAdvantage", "Hummingbird", "Quantexa"], relevantProducts: [], datasets: [], papers: [], regulations: ["BSA", "FATF"], bottlenecks: ["bn-banking-mrm"], founderOpportunities: ["opp-aml-investigator-copilot"], sourceIds: [] },
  { id: "wf-legal-research", domainId: "legal", title: "Legal research workflow", industry: "Legal", maturity: "Early production", confidence: "sourced", oneLineTakeaway: "RAG-first; verifiable citations are non-negotiable.", workflowSteps: [
    { step: 1, name: "Question intake", actor: "Attorney + LLM", input: "Question + jurisdiction + facts", aiRole: "Clarify scope.", dataUsed: ["client matter"], architectures: ["llm"], output: "Research plan", humanReview: "Attorney", failureModes: ["unclear scope"] },
    { step: 2, name: "Authority retrieval", actor: "RAG", input: "Plan", aiRole: "Retrieve precedents.", dataUsed: ["case-law"], architectures: ["rag", "embeddings"], output: "Authorities", humanReview: "Attorney", failureModes: ["jurisdiction miss"] },
    { step: 3, name: "Memo drafting", actor: "LLM + attorney", input: "Authorities", aiRole: "Draft memo with citations.", dataUsed: ["case-law"], architectures: ["llm", "rag"], output: "Memo", humanReview: "Associate + partner", failureModes: ["hallucinated citation"] },
    { step: 4, name: "Verification + filing", actor: "Attorney", input: "Memo", aiRole: "Citation verification.", dataUsed: ["case-law"], architectures: ["rag"], output: "Filed brief", humanReview: "Partner", failureModes: ["malpractice exposure"] }
  ], inputs: ["question", "facts"], outputs: ["memo", "brief"], users: ["Attorneys"], buyers: ["GC"], budgetOwners: ["Firm"], architecturesUsed: ["rag", "llm", "embeddings"], companiesUsingThisWorkflow: ["Harvey", "Lexis+ AI", "Westlaw / Casetext"], relevantProducts: ["Lexis+ AI"], datasets: [], papers: ["paper-rag"], regulations: ["bar ethics"], bottlenecks: ["bn-legal-hallucination"], founderOpportunities: ["opp-legal-citation-verification"], sourceIds: ["paper-rag"] },
  { id: "wf-contract-review", domainId: "legal", title: "Contract review workflow", industry: "Legal", maturity: "Early production", confidence: "marketContext", oneLineTakeaway: "Markup + clause-library matching with attorney sign-off.", workflowSteps: [
    { step: 1, name: "Contract intake", actor: "OCR + DMS", input: "PDF contract", aiRole: "Convert + structure.", dataUsed: ["contract"], architectures: ["ocr-docai"], output: "Structured contract", humanReview: "Paralegal", failureModes: ["scan quality"] },
    { step: 2, name: "Issue spotting", actor: "Domain LLM", input: "Structured contract", aiRole: "Compare to clause library.", dataUsed: ["library"], architectures: ["domain-fm", "rag"], output: "Risk flags", humanReview: "Attorney", failureModes: ["niche-clause miss"] },
    { step: 3, name: "Negotiation drafting", actor: "Attorney + LLM", input: "Risk flags", aiRole: "Alternative language.", dataUsed: ["playbook"], architectures: ["llm"], output: "Markup", humanReview: "Attorney", failureModes: ["off-policy concession"] }
  ], inputs: ["contract"], outputs: ["redlined contract"], users: ["Attorneys"], buyers: ["GC"], budgetOwners: ["Legal"], architecturesUsed: ["ocr-docai", "rag", "llm"], companiesUsingThisWorkflow: ["Robin AI", "Spellbook", "Ironclad", "Harvey"], relevantProducts: [], datasets: [], papers: ["paper-rag"], regulations: [], bottlenecks: ["bn-legal-hallucination"], founderOpportunities: ["opp-legal-specialty"], sourceIds: [] },
  { id: "wf-ai-tutoring", domainId: "education", title: "AI tutoring workflow", industry: "Education", maturity: "Early production", confidence: "inferred", oneLineTakeaway: "Engagement is up; durable learning gains are the open question.", workflowSteps: [
    { step: 1, name: "Concept introduction", actor: "Tutor LLM", input: "Curriculum", aiRole: "Introduce Socratically.", dataUsed: ["curriculum"], architectures: ["llm", "rag"], output: "Lesson", humanReview: "Teacher", failureModes: ["misconception"] },
    { step: 2, name: "Practice + feedback", actor: "Tutor LLM", input: "Student response", aiRole: "Adaptive feedback.", dataUsed: ["student attempts"], architectures: ["llm"], output: "Feedback", humanReview: "Teacher", failureModes: ["over-helping"] },
    { step: 3, name: "Assessment", actor: "Evaluator", input: "Attempts", aiRole: "Score with rubric.", dataUsed: ["rubric"], architectures: ["llm"], output: "Skill update", humanReview: "Teacher", failureModes: ["construct misalignment"] }
  ], inputs: ["curriculum", "attempts"], outputs: ["progress report"], users: ["Students", "teachers"], buyers: ["Districts"], budgetOwners: ["School"], architecturesUsed: ["llm", "rag", "domain-fm"], companiesUsingThisWorkflow: ["Khan Academy", "Duolingo", "Magic School AI"], relevantProducts: [], datasets: [], papers: [], regulations: ["FERPA", "COPPA"], bottlenecks: ["bn-edu-outcomes", "bn-edu-integrity"], founderOpportunities: ["opp-edu-vertical"], sourceIds: [] },
  { id: "wf-coding-agent", domainId: "software-engineering", title: "Repo-aware coding agent workflow", industry: "Software", maturity: "Early production", confidence: "sourced", oneLineTakeaway: "Sandboxed execution + tests = the cleanest agent product loop.", workflowSteps: [
    { step: 1, name: "Task intake", actor: "Engineer", input: "Issue / spec", aiRole: "Disambiguate.", dataUsed: ["repo"], architectures: ["llm", "rag"], output: "Plan", humanReview: "Engineer", failureModes: ["scope creep"] },
    { step: 2, name: "Repo retrieval", actor: "Code RAG", input: "Plan", aiRole: "Pull relevant files.", dataUsed: ["repo"], architectures: ["embeddings", "rag"], output: "Context bundle", humanReview: "Agent self-check", failureModes: ["missing file"] },
    { step: 3, name: "Patch drafting", actor: "Coding agent", input: "Context", aiRole: "Generate diff.", dataUsed: ["repo", "tests"], architectures: ["llm", "tool-agents"], output: "Diff", humanReview: "Engineer", failureModes: ["repo-scale errors"] },
    { step: 4, name: "Test + iterate", actor: "Sandbox", input: "Diff", aiRole: "Run tests, iterate.", dataUsed: ["tests"], architectures: ["tool-agents"], output: "Passing diff or escalation", humanReview: "Engineer", failureModes: ["flaky tests"] },
    { step: 5, name: "PR + review", actor: "Engineer + agent", input: "Diff", aiRole: "PR description.", dataUsed: ["history"], architectures: ["llm"], output: "PR merged", humanReview: "Reviewer", failureModes: ["security regression"] }
  ], inputs: ["issue", "repo"], outputs: ["PR / merged change"], users: ["Engineers"], buyers: ["VP Eng / CTO"], budgetOwners: ["Eng"], architecturesUsed: ["llm", "rag", "tool-agents"], companiesUsingThisWorkflow: ["Cursor", "GitHub Copilot", "Claude Code", "Cognition Devin"], relevantProducts: [], datasets: ["SWE-bench"], papers: ["paper-swebench", "paper-codex"], regulations: [], bottlenecks: ["bn-llm-eval-debt"], founderOpportunities: ["opp-swe-vertical-agents"], sourceIds: ["src-swe-bench"] },
  { id: "wf-soc-triage", domainId: "cybersecurity", title: "SOC alert triage workflow", industry: "Cybersecurity", maturity: "Early production", confidence: "inferred", oneLineTakeaway: "Investigator copilot inside a SIEM, not a replacement.", workflowSteps: [
    { step: 1, name: "Telemetry ingestion", actor: "SIEM", input: "Logs", aiRole: "Anomaly detection + clustering.", dataUsed: ["telemetry"], architectures: ["anomaly-detection", "graph-threat"], output: "Alert clusters", humanReview: "Tier-1", failureModes: ["alert fatigue"] },
    { step: 2, name: "Triage copilot", actor: "Analyst + LLM", input: "Alerts + threat intel", aiRole: "Summarise, prioritise.", dataUsed: ["MITRE ATT&amp;CK"], architectures: ["llm", "rag"], output: "Prioritised case", humanReview: "Analyst", failureModes: ["under-investigated novel attack"] },
    { step: 3, name: "Response", actor: "Analyst + automation", input: "Case", aiRole: "Draft response actions.", dataUsed: ["playbooks"], architectures: ["llm", "tool-agents"], output: "Containment", humanReview: "Analyst", failureModes: ["over-automation"] }
  ], inputs: ["telemetry"], outputs: ["case + response"], users: ["Analysts"], buyers: ["CISO"], budgetOwners: ["Security"], architecturesUsed: ["llm", "rag", "anomaly-detection", "graph-threat"], companiesUsingThisWorkflow: ["CrowdStrike", "SentinelOne", "Microsoft Security Copilot", "Vectra AI"], relevantProducts: [], datasets: ["MITRE ATT&amp;CK"], papers: [], regulations: [], bottlenecks: ["bn-cyber-attack-surface"], founderOpportunities: ["opp-cybersec-prompt-injection"], sourceIds: ["src-mitre-attack"] },
  { id: "wf-imitation-learning", domainId: "robotics", title: "Imitation-learning robot workflow", industry: "Robotics", maturity: "Research frontier", confidence: "sourced", oneLineTakeaway: "Teleop + diffusion / VLA + sim-to-real.", workflowSteps: [
    { step: 1, name: "Teleop demonstration", actor: "Operator", input: "Tasks", aiRole: "Logging.", dataUsed: ["sensors", "actions"], architectures: [], output: "Trajectories", humanReview: "Teleop QA", failureModes: ["distribution narrow"] },
    { step: 2, name: "Policy training", actor: "ML team", input: "Demos", aiRole: "Train policy.", dataUsed: ["trajectories"], architectures: ["imitation-learning", "diffusion-policy", "vla"], output: "Policy", humanReview: "Researcher", failureModes: ["compounding error"] },
    { step: 3, name: "Sim evaluation", actor: "Simulator", input: "Policy", aiRole: "Stress-test.", dataUsed: ["sim worlds"], architectures: ["sim-to-real"], output: "Sim metrics", humanReview: "Researcher", failureModes: ["sim-real gap"] },
    { step: 4, name: "Real-robot deployment", actor: "Robot fleet", input: "Policy", aiRole: "Real execution.", dataUsed: ["fleet"], architectures: [], output: "Real metrics", humanReview: "Operations", failureModes: ["safety incident"] },
    { step: 5, name: "Edge-case mining", actor: "Data team", input: "Failures", aiRole: "Curate hard cases.", dataUsed: ["failures"], architectures: [], output: "Curated set", humanReview: "Data team", failureModes: ["mining bias"] }
  ], inputs: ["teleop demos"], outputs: ["deployable policy"], users: ["Robotics engineers"], buyers: ["VP robotics"], budgetOwners: ["R&amp;D"], architecturesUsed: ["imitation-learning", "diffusion-policy", "vla", "sim-to-real"], companiesUsingThisWorkflow: ["Physical Intelligence", "Figure", "1X", "Tesla Optimus", "Skild AI"], relevantProducts: ["RT-2", "&pi;0"], datasets: ["Open X-Embodiment"], papers: ["paper-rt2", "paper-diffusion-policy", "paper-open-x"], regulations: ["ISO 10218", "ISO/TS 15066"], bottlenecks: ["bn-robotics-data", "bn-robotics-sim2real"], founderOpportunities: ["opp-robot-data-infrastructure"], sourceIds: ["paper-rt2", "src-rt2", "src-rt-x", "src-openvla", "src-diffusion-policy", "src-pi-zero"] },
  { id: "wf-av-perception", domainId: "autonomous-vehicles", title: "AV perception + planning workflow", industry: "Autonomous vehicles", maturity: "Early production", confidence: "sourced", oneLineTakeaway: "Long-tail safety, not perception accuracy, gates expansion.", workflowSteps: [
    { step: 1, name: "Sensor capture", actor: "Vehicle stack", input: "Camera / lidar / radar", aiRole: "Sensor fusion.", dataUsed: ["sensors"], architectures: ["vit", "cnn"], output: "BEV / occupancy", humanReview: "Safety driver", failureModes: ["sensor occlusion"] },
    { step: 2, name: "Perception + tracking", actor: "Perception model", input: "BEV", aiRole: "Detect + track.", dataUsed: ["sensors"], architectures: ["vit", "cnn"], output: "Tracked agents", humanReview: "Safety driver", failureModes: ["rare-class miss"] },
    { step: 3, name: "Prediction + planning", actor: "Planner", input: "Tracks + map", aiRole: "Predict + plan trajectories.", dataUsed: ["tracks"], architectures: ["imitation-learning", "world-models"], output: "Trajectory", humanReview: "Safety driver", failureModes: ["mismatch"] },
    { step: 4, name: "Control + execution", actor: "Control system", input: "Trajectory", aiRole: "Low-level control.", dataUsed: ["actuator"], architectures: [], output: "Vehicle motion", humanReview: "Safety driver", failureModes: ["actuator delay"] },
    { step: 5, name: "Fleet learning", actor: "Data ops", input: "Edge cases", aiRole: "Mine + retrain.", dataUsed: ["fleet"], architectures: [], output: "New model", humanReview: "Engineering", failureModes: ["distribution shift"] }
  ], inputs: ["sensors"], outputs: ["vehicle motion"], users: ["Drivers"], buyers: ["AV operators / OEMs"], budgetOwners: ["AV operator"], architecturesUsed: ["vit", "cnn", "imitation-learning", "world-models"], companiesUsingThisWorkflow: ["Waymo", "Tesla FSD", "Mobileye", "Wayve"], relevantProducts: [], datasets: ["nuScenes", "Waymo Open Dataset"], papers: [], regulations: ["NHTSA"], bottlenecks: ["bn-autonomous-vehicle-tail"], founderOpportunities: [], sourceIds: ["src-nhtsa-ads", "src-cruise-pause"] },
  { id: "wf-mfg-defect-detection", domainId: "manufacturing", title: "Manufacturing defect detection workflow", industry: "Manufacturing", maturity: "Production", confidence: "inferred", oneLineTakeaway: "Vendor-led; OT-secure on-prem AI is the open lane.", workflowSteps: [
    { step: 1, name: "Line capture", actor: "Cameras", input: "Image", aiRole: "Pre-processing.", dataUsed: ["image"], architectures: ["cnn"], output: "Snapshot", humanReview: "Operator", failureModes: ["lighting drift"] },
    { step: 2, name: "Defect detection", actor: "Vision model", input: "Snapshot", aiRole: "Classify defects.", dataUsed: ["labels"], architectures: ["cnn", "vit", "anomaly-detection"], output: "Defect alerts", humanReview: "Operator", failureModes: ["rare classes"] },
    { step: 3, name: "Action + feedback", actor: "Operator + MES", input: "Alerts", aiRole: "Disposition + feedback labels.", dataUsed: ["MES"], architectures: [], output: "Disposition + label", humanReview: "Operator", failureModes: ["mislabel"] }
  ], inputs: ["camera"], outputs: ["defect actions"], users: ["Operators"], buyers: ["Plant manager"], budgetOwners: ["Operations"], architecturesUsed: ["cnn", "vit", "anomaly-detection"], companiesUsingThisWorkflow: ["Cognex", "Landing AI", "Instrumental", "Drishti"], relevantProducts: [], datasets: [], papers: [], regulations: [], bottlenecks: ["bn-mfg-ot-it"], founderOpportunities: ["opp-mfg-edge-ai"], sourceIds: [] },
  { id: "wf-renewable-forecast", domainId: "energy-grid", title: "Renewable generation forecasting workflow", industry: "Energy", maturity: "Production", confidence: "inferred", oneLineTakeaway: "Forecast + bid; the grid still has hard physical constraints.", workflowSteps: [
    { step: 1, name: "Data ingestion", actor: "Operations data team", input: "SCADA + weather", aiRole: "Pipelines.", dataUsed: ["SCADA", "NWP / neural forecasts"], architectures: ["ts-transformer"], output: "Cleaned features", humanReview: "Ops", failureModes: ["sensor outages"] },
    { step: 2, name: "Forecast", actor: "Time-series model", input: "Features", aiRole: "Forecast generation.", dataUsed: ["history"], architectures: ["ts-transformer", "neural-operators"], output: "Forecast", humanReview: "Trader", failureModes: ["weather error"] },
    { step: 3, name: "Bid / dispatch", actor: "Trader", input: "Forecast", aiRole: "Optimise bid + dispatch.", dataUsed: ["market"], architectures: ["rl-control"], output: "Bid + dispatch", humanReview: "Trader", failureModes: ["regime change"] }
  ], inputs: ["SCADA"], outputs: ["forecast", "bid"], users: ["Traders"], buyers: ["Utility"], budgetOwners: ["Operations"], architecturesUsed: ["ts-transformer", "rl-control", "neural-operators"], companiesUsingThisWorkflow: ["Octopus / Kraken", "Stem", "AutoGrid", "Tesla Autobidder"], relevantProducts: [], datasets: ["ISO data"], papers: [], regulations: ["FERC"], bottlenecks: ["bn-energy-grid-physics"], founderOpportunities: ["opp-energy-der-orchestration"], sourceIds: ["src-era5", "src-ferc-2222"] },
  { id: "wf-neural-weather", domainId: "climate-weather", title: "Neural weather forecasting workflow", industry: "Climate", maturity: "Early production", confidence: "sourced", oneLineTakeaway: "GraphCast / FourCastNet / Pangu / AIFS now competitive at medium range.", workflowSteps: [
    { step: 1, name: "Initial conditions", actor: "Operations", input: "Observations", aiRole: "Augment data assimilation.", dataUsed: ["satellite", "radar"], architectures: ["ts-transformer"], output: "Initial state", humanReview: "Forecaster", failureModes: ["observation gaps"] },
    { step: 2, name: "Neural forecast", actor: "Model", input: "Initial state", aiRole: "Forecast 5-10 days.", dataUsed: ["ERA5"], architectures: ["neural-operators"], output: "Gridded forecasts", humanReview: "Forecaster", failureModes: ["extreme miss"] },
    { step: 3, name: "Ensemble + post-processing", actor: "Ops centre", input: "Forecasts", aiRole: "Bias correction.", dataUsed: ["forecasts"], architectures: ["diffusion"], output: "Operational product", humanReview: "Forecaster", failureModes: ["under-dispersive"] },
    { step: 4, name: "Downstream applications", actor: "Industry", input: "Forecasts", aiRole: "Vertical decision support.", dataUsed: ["forecast"], architectures: ["llm"], output: "Decisions", humanReview: "User", failureModes: ["over-reliance"] }
  ], inputs: ["observations", "ERA5"], outputs: ["forecasts"], users: ["Forecasters"], buyers: ["NWP centres"], budgetOwners: ["Government"], architecturesUsed: ["neural-operators", "ts-transformer", "diffusion"], companiesUsingThisWorkflow: ["Google DeepMind", "NVIDIA Earth-2", "ECMWF", "Tomorrow.io"], relevantProducts: ["GraphCast", "FourCastNet", "AIFS"], datasets: ["ERA5", "WeatherBench 2"], papers: ["paper-graphcast", "paper-fourcastnet", "paper-fno"], regulations: [], bottlenecks: ["bn-climate-extremes"], founderOpportunities: [], sourceIds: ["paper-graphcast", "src-graphcast", "src-pangu-weather", "src-fourcastnet", "src-era5", "src-weatherbench-2"] },
  { id: "wf-precision-spray", domainId: "agriculture", title: "Precision spraying workflow", industry: "Agriculture", maturity: "Early production", confidence: "inferred", oneLineTakeaway: "Vision-guided actuator on a tractor; saves chemical input.", workflowSteps: [
    { step: 1, name: "Sensing", actor: "Tractor camera", input: "Crop image", aiRole: "Real-time inference.", dataUsed: ["image"], architectures: ["cnn", "vit"], output: "Weed / crop classification", humanReview: "Farmer", failureModes: ["lighting"] },
    { step: 2, name: "Targeted spraying", actor: "Sprayer", input: "Classification", aiRole: "Trigger nozzle.", dataUsed: ["model"], architectures: [], output: "Spray events", humanReview: "Farmer", failureModes: ["false positives"] },
    { step: 3, name: "Telemetry feedback", actor: "Cloud", input: "Run logs", aiRole: "Active learning.", dataUsed: ["fleet logs"], architectures: ["cnn"], output: "Model update", humanReview: "Eng", failureModes: ["region drift"] }
  ], inputs: ["camera"], outputs: ["spray events"], users: ["Farmers"], buyers: ["OEMs"], budgetOwners: ["Farm"], architecturesUsed: ["cnn", "vit"], companiesUsingThisWorkflow: ["John Deere See &amp; Spray (Blue River)"], relevantProducts: [], datasets: [], papers: [], regulations: ["EPA"], bottlenecks: [], founderOpportunities: ["opp-ag-specialty"], sourceIds: [] },
  { id: "wf-video-generation", domainId: "media-entertainment", title: "Video generation workflow", industry: "Media", maturity: "Early production", confidence: "sourced", oneLineTakeaway: "Generative video meets post-production; rights are unsettled.", workflowSteps: [
    { step: 1, name: "Concept + storyboard", actor: "Creator", input: "Brief", aiRole: "Storyboard generation.", dataUsed: ["brief"], architectures: ["llm", "diffusion"], output: "Storyboard", humanReview: "Creator", failureModes: ["IP conflicts"] },
    { step: 2, name: "Shot generation", actor: "Generative model", input: "Storyboard", aiRole: "Generate clips.", dataUsed: ["prompt"], architectures: ["diffusion", "video-models"], output: "Clips", humanReview: "Creator", failureModes: ["physics violations"] },
    { step: 3, name: "Edit + finishing", actor: "Editor", input: "Clips", aiRole: "Up-scaling, voice-over.", dataUsed: ["audio"], architectures: ["asr-tts", "diffusion"], output: "Final video", humanReview: "Creator", failureModes: ["watermark loss"] },
    { step: 4, name: "Distribution", actor: "Platform", input: "Final video", aiRole: "Recsys + moderation.", dataUsed: ["video"], architectures: ["recsys", "vit"], output: "Audience", humanReview: "Platform mod", failureModes: ["deepfake misuse"] }
  ], inputs: ["brief"], outputs: ["finished video"], users: ["Creators"], buyers: ["Studios", "platforms"], budgetOwners: ["Production"], architecturesUsed: ["diffusion", "video-models", "asr-tts", "recsys"], companiesUsingThisWorkflow: ["OpenAI Sora", "Google Veo", "Runway", "Pika"], relevantProducts: [], datasets: [], papers: ["paper-ldm"], regulations: ["EU AI Act provenance"], bottlenecks: [], founderOpportunities: ["opp-media-provenance"], sourceIds: ["paper-ldm", "src-sora-tr", "src-ldm", "src-ddpm"] },
  { id: "wf-citizen-case-management", domainId: "government-services", title: "Citizen case-management copilot workflow", industry: "Government", maturity: "Early production", confidence: "inferred", oneLineTakeaway: "Backlog reduction in benefits / immigration / health-services.", workflowSteps: [
    { step: 1, name: "Intake", actor: "Caseworker + portal", input: "Application", aiRole: "Multilingual translation + extraction.", dataUsed: ["application"], architectures: ["llm", "asr-tts", "ocr-docai"], output: "Structured case", humanReview: "Caseworker", failureModes: ["mistranslation"] },
    { step: 2, name: "Eligibility / case drafting", actor: "Caseworker + LLM", input: "Case + policy", aiRole: "Draft eligibility.", dataUsed: ["policy"], architectures: ["llm", "rag"], output: "Draft decision", humanReview: "Supervisor", failureModes: ["bias", "wrong policy"] },
    { step: 3, name: "Decision + appeal", actor: "Officer", input: "Draft", aiRole: "Audit + explainability.", dataUsed: ["case"], architectures: ["llm"], output: "Decision letter", humanReview: "Officer", failureModes: ["unappealable opacity"] }
  ], inputs: ["applications"], outputs: ["decisions"], users: ["Caseworkers"], buyers: ["Agency CIO"], budgetOwners: ["Agency"], architecturesUsed: ["llm", "rag", "asr-tts", "ocr-docai"], companiesUsingThisWorkflow: ["Palantir", "Accenture Federal", "Anthropic / OpenAI government editions"], relevantProducts: [], datasets: [], papers: [], regulations: ["FedRAMP"], bottlenecks: ["bn-government-procurement"], founderOpportunities: [], sourceIds: ["src-fedramp"] },

  /* ===== Phase 2.A workflow expansion (26 new) ===== */

  { id: "wf-claims-denial-mgmt", domainId: "clinical-medicine", title: "Claims denial management workflow", industry: "Healthcare-admin", maturity: "early production", confidence: "inferred", oneLineTakeaway: "Most US health-system revenue leakage is denial-driven; AI is being used to auto-draft appeals and re-classify denials.", workflowSteps: [
    { step: 1, name: "Denial intake from payer 835/277", actor: "RCM analyst", input: "Remittance + denial reason codes", aiRole: "Classify denial reason, route to queue.", dataUsed: ["EOB / 835"], architectures: ["ocr-docai", "llm"], output: "Tagged denial work item", humanReview: "RCM lead", failureModes: ["miscoded reason", "missing remit info"] },
    { step: 2, name: "Root-cause inference", actor: "AI agent", input: "Encounter, claim, payer policy", aiRole: "Identify likely missing documentation or policy mismatch.", dataUsed: ["EHR notes", "payer policy"], architectures: ["rag", "llm"], output: "Suspected root cause + cited policy", humanReview: "RCM analyst", failureModes: ["wrong policy version", "stale rule"] },
    { step: 3, name: "Appeal letter drafting", actor: "AI agent", input: "Encounter, evidence", aiRole: "Draft appeal with citations to clinical record.", dataUsed: ["clinical notes"], architectures: ["llm", "rag"], output: "Draft appeal", humanReview: "RCM manager", failureModes: ["fabricated citation"] },
    { step: 4, name: "Submit + track", actor: "RCM staff", input: "Approved appeal", aiRole: "Auto-submit via clearinghouse, track status.", dataUsed: ["clearinghouse APIs"], architectures: ["tool-agents"], output: "Recovered claim", humanReview: "RCM manager", failureModes: ["payer portal change", "timeout"] }
  ], inputs: ["denials"], outputs: ["appeals"], users: ["RCM staff"], buyers: ["Health-system CFO", "RCM service"], budgetOwners: ["Finance"], architecturesUsed: ["ocr-docai", "rag", "llm", "tool-agents"], companiesUsingThisWorkflow: ["Waystar", "AKASA", "Adonis"], relevantProducts: [], datasets: [], papers: [], regulations: ["HIPAA"], bottlenecks: ["bn-ehr-workflow"], founderOpportunities: [], sourceIds: ["src-hipaa"] },

  { id: "wf-medical-coding", domainId: "clinical-documentation", title: "Computer-assisted medical coding workflow", industry: "Healthcare-admin", maturity: "production", confidence: "inferred", oneLineTakeaway: "Encoder-assisted coding is mainstream; LLMs are now drafting full codes for human coder review.", workflowSteps: [
    { step: 1, name: "Encounter ingestion", actor: "Coder", input: "Notes, op reports, labs", aiRole: "Pre-extract diagnoses, procedures.", dataUsed: ["EHR"], architectures: ["domain-fm", "llm"], output: "Candidate ICD-10 / CPT codes", humanReview: "Coder", failureModes: ["missed comorbidity", "upcoding risk"] },
    { step: 2, name: "Code suggestion + DRG simulation", actor: "AI", input: "Candidate codes", aiRole: "Suggest DRG and revenue impact.", dataUsed: ["coding rulebooks"], architectures: ["rag", "llm"], output: "Recommended code set", humanReview: "Coding lead", failureModes: ["payer-specific deviation"] },
    { step: 3, name: "Coder review + sign-off", actor: "Certified coder", input: "Recommended codes", aiRole: "Explain rationale on demand.", dataUsed: [], architectures: ["llm"], output: "Final coded encounter", humanReview: "Coding lead", failureModes: ["coder fatigue"] },
    { step: 4, name: "Audit-trail logging", actor: "System", input: "All decisions", aiRole: "Log model rationale + coder edits.", dataUsed: [], architectures: [], output: "Audit log", humanReview: "Compliance", failureModes: ["log gaps"] }
  ], inputs: ["clinical notes"], outputs: ["billed codes"], users: ["Coders"], buyers: ["Health-system CFO"], budgetOwners: ["Finance"], architecturesUsed: ["domain-fm", "llm", "rag"], companiesUsingThisWorkflow: ["3M / Solventum", "Nuance / Microsoft", "Iodine Software"], relevantProducts: [], datasets: [], papers: [], regulations: ["OIG audit standards"], bottlenecks: ["bn-medical-liability"], founderOpportunities: [], sourceIds: [] },

  { id: "wf-sepsis-early-warning", domainId: "clinical-medicine", title: "Sepsis / deterioration early-warning workflow", industry: "Healthcare", maturity: "early production", confidence: "needsVerification", oneLineTakeaway: "Inpatient deterioration models alert clinicians to sepsis risk hours earlier; real-world performance varies widely by site.", workflowSteps: [
    { step: 1, name: "Continuous EHR feature stream", actor: "EHR / data pipeline", input: "Vitals, labs, meds, demographics", aiRole: "Construct rolling features.", dataUsed: ["EHR streams"], architectures: ["ts-transformer", "gbdt"], output: "Risk-score feature vector", humanReview: "None", failureModes: ["missing lab values", "data lag"] },
    { step: 2, name: "Risk model scoring", actor: "Model", input: "Feature vector", aiRole: "Output deterioration probability.", dataUsed: ["historic admissions"], architectures: ["gbdt", "ts-transformer"], output: "Risk score", humanReview: "Charge nurse", failureModes: ["dataset shift across sites"] },
    { step: 3, name: "Alert routing", actor: "EHR alert subsystem", input: "Score threshold", aiRole: "Send alert with explanation.", dataUsed: [], architectures: ["llm"], output: "Bedside alert + SBAR draft", humanReview: "Bedside RN", failureModes: ["alert fatigue", "false positives"] },
    { step: 4, name: "Clinician response + outcome capture", actor: "Care team", input: "Alert", aiRole: "Capture intervention + outcome for retraining.", dataUsed: ["EHR"], architectures: [], output: "Outcome label", humanReview: "Clinical lead", failureModes: ["outcome attribution"] }
  ], inputs: ["EHR streams"], outputs: ["alerts"], users: ["Clinicians"], buyers: ["Health-system CMO"], budgetOwners: ["Quality + safety"], architecturesUsed: ["gbdt", "ts-transformer", "llm"], companiesUsingThisWorkflow: ["Epic Sepsis Model", "Bayesian Health", "Dascena"], relevantProducts: [], datasets: ["MIMIC-III/IV (research)"], papers: [], regulations: ["FDA SaMD where claims are made"], bottlenecks: ["bn-clinical-validation", "bn-radiology-shift"], founderOpportunities: [], sourceIds: ["src-lstm-sepsis-wong", "src-mimic"] },

  { id: "wf-genomics-variant", domainId: "genomics", title: "Genomics variant interpretation workflow", industry: "Bio", maturity: "early production", confidence: "inferred", oneLineTakeaway: "Variant interpretation moves from rules-only to ML-assisted prioritisation, but final clinical reporting is still human-curated.", workflowSteps: [
    { step: 1, name: "Sequencing + variant calling", actor: "Lab pipeline", input: "FASTQ", aiRole: "Variant calling models complement classical callers.", dataUsed: ["reference genome"], architectures: ["domain-fm"], output: "VCF", humanReview: "Bioinformatics", failureModes: ["caller bias by ancestry"] },
    { step: 2, name: "Variant annotation + scoring", actor: "Annotation engine", input: "VCF", aiRole: "Score pathogenicity using ML models.", dataUsed: ["ClinVar", "gnomAD"], architectures: ["protein-lm", "domain-fm"], output: "Annotated variants", humanReview: "Clinical scientist", failureModes: ["under-represented ancestry"] },
    { step: 3, name: "Phenotype matching", actor: "AI agent", input: "Patient phenotype", aiRole: "Match variants to phenotype using HPO embeddings.", dataUsed: ["HPO"], architectures: ["embeddings", "rag"], output: "Ranked variant list", humanReview: "Geneticist", failureModes: ["sparse phenotype data"] },
    { step: 4, name: "Clinical report drafting", actor: "AI", input: "Top variants", aiRole: "Draft ACMG-style report; require sign-off.", dataUsed: ["ACMG guidelines"], architectures: ["llm", "rag"], output: "Draft report", humanReview: "Board-certified geneticist", failureModes: ["mis-classification of VUS"] }
  ], inputs: ["sequencing reads"], outputs: ["clinical report"], users: ["Clinical geneticists"], buyers: ["Genomics labs"], budgetOwners: ["Lab director"], architecturesUsed: ["domain-fm", "protein-lm", "rag", "llm"], companiesUsingThisWorkflow: ["Invitae", "Tempus", "Illumina"], relevantProducts: [], datasets: ["ClinVar", "gnomAD"], papers: [], regulations: ["CLIA", "CAP"], bottlenecks: ["bn-clinical-validation"], founderOpportunities: [], sourceIds: ["src-clinvar", "src-gnomad", "src-acmg-vus"] },


  { id: "wf-credit-underwriting", domainId: "banking", title: "Credit underwriting workflow", industry: "Finance", maturity: "production", confidence: "inferred", oneLineTakeaway: "Credit decisions are GBDT + scorecard primary, with LLMs increasingly used for narrative loan files and document extraction.", workflowSteps: [
    { step: 1, name: "Application + bureau pull", actor: "LOS", input: "Application + bureau report", aiRole: "OCR + entity extraction; KYC checks.", dataUsed: ["bureau"], architectures: ["ocr-docai", "anomaly-detection"], output: "Cleaned applicant record", humanReview: "Underwriter", failureModes: ["bureau lag", "thin file"] },
    { step: 2, name: "Score model + reason codes", actor: "Risk model", input: "Features", aiRole: "Output PD / LGD; produce reason codes.", dataUsed: ["historic loans"], architectures: ["gbdt"], output: "Score + reason codes", humanReview: "MRM", failureModes: ["disparate impact", "regime shift"] },
    { step: 3, name: "Document review + memo drafting", actor: "AI agent", input: "Bank statements, tax forms", aiRole: "Draft credit memo; flag inconsistencies.", dataUsed: ["doc OCR"], architectures: ["llm", "rag"], output: "Credit memo", humanReview: "Underwriter", failureModes: ["fabricated narrative"] },
    { step: 4, name: "Adverse-action + reporting", actor: "Compliance", input: "Decision + reason codes", aiRole: "Generate ECOA-compliant adverse-action notice.", dataUsed: [], architectures: ["llm"], output: "Notice", humanReview: "Compliance", failureModes: ["mis-stated reason code"] }
  ], inputs: ["applications"], outputs: ["credit decision"], users: ["Underwriters"], buyers: ["Bank / fintech CRO"], budgetOwners: ["Risk"], architecturesUsed: ["gbdt", "ocr-docai", "llm", "rag"], companiesUsingThisWorkflow: ["Upstart", "Zest AI", "Stripe Capital"], relevantProducts: [], datasets: [], papers: [], regulations: ["ECOA / Reg B", "FCRA", "SR 11-7 model risk"], bottlenecks: ["bn-banking-mrm"], founderOpportunities: [], sourceIds: ["src-sr-11-7", "src-ecoa-reg-b", "src-cfpb-credit-ai", "src-fcra"] },

  { id: "wf-claims-triage-insurance", domainId: "insurance", title: "Insurance claims triage workflow", industry: "Insurance", maturity: "early production", confidence: "inferred", oneLineTakeaway: "First-notice-of-loss triage is a wedge for AI: photo-based damage assessment + LLM intake reduces cycle time meaningfully.", workflowSteps: [
    { step: 1, name: "FNOL intake", actor: "Customer", input: "Voice/text/photos", aiRole: "ASR transcript + structured FNOL extraction.", dataUsed: [], architectures: ["asr-tts", "llm"], output: "Structured claim", humanReview: "Adjuster", failureModes: ["accent/noise", "ambiguous loss"] },
    { step: 2, name: "Damage assessment", actor: "Photo-AI", input: "Claimant photos", aiRole: "Estimate damage + likely repair cost band.", dataUsed: ["body-shop pricing"], architectures: ["cnn", "vit"], output: "Estimate band", humanReview: "Adjuster", failureModes: ["staged photos", "occluded damage"] },
    { step: 3, name: "Coverage check + fraud signals", actor: "Model + agent", input: "Policy + history", aiRole: "Check coverage; surface fraud risk.", dataUsed: ["policy", "claim history"], architectures: ["rag", "anomaly-detection", "graph-threat"], output: "Triage tier", humanReview: "Special-investigations", failureModes: ["false-positive fraud flag"] },
    { step: 4, name: "Adjuster decision + payout", actor: "Adjuster", input: "Triage", aiRole: "Draft adjuster notes + customer comms.", dataUsed: [], architectures: ["llm"], output: "Decision", humanReview: "Adjuster manager", failureModes: ["consumer-protection risk"] }
  ], inputs: ["FNOL"], outputs: ["payout"], users: ["Adjusters"], buyers: ["Claims VP"], budgetOwners: ["Claims"], architecturesUsed: ["asr-tts", "cnn", "vit", "rag", "anomaly-detection", "graph-threat", "llm"], companiesUsingThisWorkflow: ["Tractable", "CCC Intelligent Solutions", "Lemonade"], relevantProducts: [], datasets: [], papers: [], regulations: ["state DOI", "consumer protection"], bottlenecks: [], founderOpportunities: [], sourceIds: [] },


  { id: "wf-execution-algo", domainId: "trading", title: "Execution algorithm optimisation workflow", industry: "Finance", maturity: "production", confidence: "inferred", oneLineTakeaway: "Execution algos use ML to choose schedules / venues; alpha-from-execution is small per-trade but compounds.", workflowSteps: [
    { step: 1, name: "Order intake + parent strategy", actor: "PM / OMS", input: "Parent order, urgency, constraints", aiRole: "Suggest schedule (TWAP/VWAP/POV/IS).", dataUsed: ["historic prints"], architectures: ["rl-execution", "ts-transformer"], output: "Initial schedule", humanReview: "Trader", failureModes: ["thin liquidity"] },
    { step: 2, name: "Venue + child-order routing", actor: "SOR", input: "Child orders", aiRole: "Route based on real-time microstructure.", dataUsed: ["L2 book"], architectures: ["rl-execution"], output: "Routed orders", humanReview: "Trader", failureModes: ["adversarial flow"] },
    { step: 3, name: "Slippage attribution", actor: "TCA system", input: "Fills", aiRole: "Attribute cost vs benchmark; learn for next trade.", dataUsed: ["benchmarks"], architectures: ["ts-transformer"], output: "TCA report", humanReview: "Head of trading", failureModes: ["benchmark gaming"] },
    { step: 4, name: "Compliance + best-ex evidence", actor: "Compliance", input: "Trade record", aiRole: "Generate best-execution evidence.", dataUsed: [], architectures: ["llm"], output: "Best-ex memo", humanReview: "Compliance", failureModes: ["regulator scrutiny"] }
  ], inputs: ["parent orders"], outputs: ["fills"], users: ["Traders"], buyers: ["Head of trading"], budgetOwners: ["Trading"], architecturesUsed: ["rl-execution", "ts-transformer", "llm"], companiesUsingThisWorkflow: ["Citadel Securities", "Two Sigma Securities", "JP Morgan LOXM (public)"], relevantProducts: [], datasets: [], papers: [], regulations: ["MiFID II best-ex"], bottlenecks: ["bn-quant-eval", "bn-quant-capacity"], founderOpportunities: [], sourceIds: ["src-mifid-ii-best-ex"] },


  { id: "wf-ediscovery", domainId: "legal", title: "E-discovery / litigation document review workflow", industry: "Legal", maturity: "production", confidence: "inferred", oneLineTakeaway: "TAR is incumbent; LLMs are now competing on review quality + cost, but defensibility frameworks lag.", workflowSteps: [
    { step: 1, name: "Collection + culling", actor: "E-discovery vendor", input: "Custodian emails, files, chats", aiRole: "Dedupe + threading; first-pass relevance.", dataUsed: ["custodial data"], architectures: ["embeddings", "anomaly-detection"], output: "Reviewable corpus", humanReview: "E-discovery PM", failureModes: ["over-collection"] },
    { step: 2, name: "Predictive coding", actor: "Reviewer + model", input: "Sample tags", aiRole: "Train relevance model.", dataUsed: ["sample tags"], architectures: ["llm", "embeddings"], output: "Tagged corpus", humanReview: "Senior associate", failureModes: ["seed-set bias"] },
    { step: 3, name: "Privilege + PII review", actor: "AI + reviewer", input: "Candidate privileged docs", aiRole: "Detect privilege/PII candidates.", dataUsed: [], architectures: ["llm"], output: "Privilege log", humanReview: "Partner", failureModes: ["mis-classified privilege"] },
    { step: 4, name: "Production + chain-of-custody", actor: "Vendor", input: "Final set", aiRole: "Generate production set + audit trail.", dataUsed: [], architectures: [], output: "Production", humanReview: "Counsel", failureModes: ["over/under-production"] }
  ], inputs: ["custodial data"], outputs: ["production set"], users: ["Reviewers, partners"], buyers: ["Litigation partner"], budgetOwners: ["Client"], architecturesUsed: ["embeddings", "llm"], companiesUsingThisWorkflow: ["Relativity", "DISCO", "Reveal"], relevantProducts: [], datasets: [], papers: [], regulations: ["FRCP 26", "court protective orders"], bottlenecks: ["bn-legal-hallucination"], founderOpportunities: [], sourceIds: [] },


  { id: "wf-enterprise-rag", domainId: "enterprise-productivity", title: "Enterprise search / RAG assistant workflow", industry: "Enterprise", maturity: "early production", confidence: "inferred", oneLineTakeaway: "Most enterprise RAG fails on permissions and freshness, not retrieval quality; that is where the moat is built.", workflowSteps: [
    { step: 1, name: "Connector + permission sync", actor: "Admin", input: "SaaS sources (Drive, SharePoint, Slack, Confluence)", aiRole: "Sync content + ACLs continuously.", dataUsed: [], architectures: ["embeddings"], output: "Permissioned index", humanReview: "Admin", failureModes: ["ACL drift", "stale doc"] },
    { step: 2, name: "Query understanding", actor: "Assistant", input: "User query", aiRole: "Re-write, decompose, choose tools.", dataUsed: [], architectures: ["llm"], output: "Plan", humanReview: "User", failureModes: ["under-specified query"] },
    { step: 3, name: "Retrieve + answer with citations", actor: "Assistant", input: "Plan + permissioned index", aiRole: "Retrieve under permissions, draft answer with citations.", dataUsed: [], architectures: ["rag", "llm"], output: "Cited answer", humanReview: "User", failureModes: ["over-permissive retrieval", "stale doc"] },
    { step: 4, name: "Feedback + governance", actor: "Admin", input: "User upvotes / regrets", aiRole: "Flag policy-sensitive responses.", dataUsed: [], architectures: ["embeddings"], output: "Governance dashboard", humanReview: "Admin", failureModes: ["leakage event"] }
  ], inputs: ["enterprise content"], outputs: ["cited answers"], users: ["Knowledge workers"], buyers: ["CIO / CDO"], budgetOwners: ["IT"], architecturesUsed: ["embeddings", "rag", "llm"], companiesUsingThisWorkflow: ["Glean", "Microsoft 365 Copilot", "Notion AI"], relevantProducts: [], datasets: [], papers: [], regulations: ["enterprise data residency"], bottlenecks: ["bn-llm-eval-debt"], founderOpportunities: [], sourceIds: ["src-mteb"] },

  { id: "wf-customer-support-automation", domainId: "customer-support", title: "Customer-support agent automation workflow", industry: "Enterprise", maturity: "production", confidence: "inferred", oneLineTakeaway: "Auto-resolve ratio is the metric; macros + RAG + escalation policies decide the economics, not raw model quality.", workflowSteps: [
    { step: 1, name: "Channel ingest + identification", actor: "Support platform", input: "Email, chat, voice", aiRole: "Identify customer + intent; redact PII.", dataUsed: ["CRM"], architectures: ["asr-tts", "embeddings", "llm"], output: "Tagged ticket", humanReview: "QA sample", failureModes: ["mis-identification"] },
    { step: 2, name: "Knowledge retrieval + draft", actor: "Agent", input: "Intent + customer context", aiRole: "Retrieve KB + draft response with citations.", dataUsed: ["KB"], architectures: ["rag", "llm"], output: "Draft reply", humanReview: "Agent", failureModes: ["outdated KB"] },
    { step: 3, name: "Action via tools", actor: "Agent", input: "Approved actions", aiRole: "Execute refund / address change / order lookup.", dataUsed: ["systems APIs"], architectures: ["tool-agents"], output: "Action result", humanReview: "Manager for high-risk", failureModes: ["wrong API call", "policy bypass"] },
    { step: 4, name: "Resolution + measurement", actor: "Platform", input: "CSAT + auto-resolve", aiRole: "Score resolution + adjust escalation policy.", dataUsed: ["CSAT"], architectures: ["embeddings"], output: "Metrics", humanReview: "Support lead", failureModes: ["gaming CSAT"] }
  ], inputs: ["tickets"], outputs: ["resolutions"], users: ["Support agents"], buyers: ["Head of CX"], budgetOwners: ["Support"], architecturesUsed: ["asr-tts", "embeddings", "rag", "llm", "tool-agents"], companiesUsingThisWorkflow: ["Intercom Fin", "Sierra", "Decagon", "Zendesk AI"], relevantProducts: [], datasets: [], papers: [], regulations: ["consumer protection"], bottlenecks: [], founderOpportunities: [], sourceIds: [] },

  { id: "wf-sales-call-intelligence", domainId: "sales-marketing", title: "Sales-call intelligence workflow", industry: "Enterprise", maturity: "production", confidence: "inferred", oneLineTakeaway: "Recording + transcription + AI coaching has a real ROI argument: pipeline hygiene and forecast accuracy.", workflowSteps: [
    { step: 1, name: "Call capture + transcript", actor: "Recorder + ASR", input: "Audio", aiRole: "Diarisation + transcript.", dataUsed: [], architectures: ["asr-tts"], output: "Transcript", humanReview: "Rep / manager", failureModes: ["accent / cross-talk"] },
    { step: 2, name: "Topic + objection extraction", actor: "Model", input: "Transcript", aiRole: "Tag topics, objections, action items.", dataUsed: [], architectures: ["llm", "embeddings"], output: "Tagged call", humanReview: "Manager", failureModes: ["false-positive risk flags"] },
    { step: 3, name: "CRM update + next-best-action", actor: "Agent", input: "Tagged call + opp", aiRole: "Update CRM, suggest follow-up draft.", dataUsed: ["CRM"], architectures: ["tool-agents", "llm"], output: "Updated opp + draft email", humanReview: "Rep", failureModes: ["CRM hygiene drift"] },
    { step: 4, name: "Coaching + scorecard", actor: "AI", input: "Calls + outcomes", aiRole: "Coach reps; flag deals at risk.", dataUsed: ["closed-won/lost"], architectures: ["llm"], output: "Coaching dashboard", humanReview: "Sales lead", failureModes: ["coaching bias"] }
  ], inputs: ["sales calls"], outputs: ["pipeline insight"], users: ["Reps, managers"], buyers: ["VP Sales"], budgetOwners: ["Sales ops"], architecturesUsed: ["asr-tts", "llm", "embeddings", "tool-agents"], companiesUsingThisWorkflow: ["Gong", "Chorus", "Clari Copilot"], relevantProducts: [], datasets: [], papers: [], regulations: ["call-recording consent"], bottlenecks: [], founderOpportunities: [], sourceIds: [] },

  { id: "wf-hr-screening", domainId: "hr-recruiting", title: "Candidate screening / sourcing workflow", industry: "Enterprise", maturity: "early production", confidence: "needsVerification", oneLineTakeaway: "AI screening is heavily regulated and litigated; safe deployments are constrained to top-of-funnel and explainable rankings.", workflowSteps: [
    { step: 1, name: "JD + ICP intake", actor: "Recruiter", input: "Job description + ICP", aiRole: "Extract structured requirements.", dataUsed: [], architectures: ["llm", "embeddings"], output: "Structured JD", humanReview: "Recruiter", failureModes: ["vague JDs"] },
    { step: 2, name: "Candidate sourcing + ranking", actor: "Sourcer", input: "Talent pool + JD", aiRole: "Rank candidates with explanations.", dataUsed: ["pool"], architectures: ["embeddings", "llm"], output: "Ranked list", humanReview: "Recruiter", failureModes: ["protected-class proxy bias"] },
    { step: 3, name: "Outreach + scheduling", actor: "Agent", input: "Approved list", aiRole: "Personalised outreach + scheduling.", dataUsed: [], architectures: ["llm", "tool-agents"], output: "Booked screens", humanReview: "Recruiter", failureModes: ["spammy outreach"] },
    { step: 4, name: "Audit + bias monitoring", actor: "Compliance", input: "Decisions + demographics", aiRole: "Continuous bias / four-fifths monitoring.", dataUsed: [], architectures: ["embeddings"], output: "Audit log", humanReview: "Legal", failureModes: ["NYC AEDT-style violations"] }
  ], inputs: ["JDs", "candidate pool"], outputs: ["interviews"], users: ["Recruiters"], buyers: ["VP Talent"], budgetOwners: ["HR"], architecturesUsed: ["llm", "embeddings", "tool-agents"], companiesUsingThisWorkflow: ["Eightfold", "HireVue", "Paradox"], relevantProducts: [], datasets: [], papers: [], regulations: ["NYC Local Law 144 (AEDT)", "EEOC", "GDPR profiling"], bottlenecks: [], founderOpportunities: [], sourceIds: ["src-nyc-aedt", "src-eu-ai-act"] },



  { id: "wf-phishing-detection", domainId: "cybersecurity", title: "Phishing / BEC detection workflow", industry: "Cybersecurity", maturity: "production", confidence: "inferred", oneLineTakeaway: "Email security is a real AI workload; LLMs add polymorphism resistance but raise inference cost.", workflowSteps: [
    { step: 1, name: "Email ingest + parse", actor: "Email gateway", input: "Inbound mail + headers", aiRole: "Parse links, attachments, sender posture.", dataUsed: ["mail flow"], architectures: ["embeddings"], output: "Parsed message", humanReview: "Analyst sample", failureModes: ["encoding tricks"] },
    { step: 2, name: "Behaviour + identity check", actor: "Model", input: "Sender history + tenant graph", aiRole: "Detect identity-spoofing and unusual relationships.", dataUsed: ["org graph"], architectures: ["graph-threat", "anomaly-detection"], output: "Risk score", humanReview: "Analyst", failureModes: ["look-alike domains"] },
    { step: 3, name: "Content / intent classification", actor: "Model", input: "Body + URL / attachment", aiRole: "Classify phishing intent (BEC, credential, malware).", dataUsed: ["historic phishing"], architectures: ["llm", "embeddings"], output: "Intent label", humanReview: "Analyst", failureModes: ["adversarial paraphrase"] },
    { step: 4, name: "Quarantine + analyst feedback", actor: "Gateway", input: "Decision", aiRole: "Quarantine + log; learn from analyst overrides.", dataUsed: [], architectures: [], output: "Action", humanReview: "Analyst", failureModes: ["false positives blocking ops"] }
  ], inputs: ["email"], outputs: ["safe inbox"], users: ["Analysts"], buyers: ["CISO"], budgetOwners: ["Security"], architecturesUsed: ["embeddings", "graph-threat", "anomaly-detection", "llm"], companiesUsingThisWorkflow: ["Abnormal Security", "Microsoft Defender", "Proofpoint"], relevantProducts: [], datasets: [], papers: [], regulations: ["SOX, GDPR for content scanning"], bottlenecks: ["bn-cyber-attack-surface"], founderOpportunities: [], sourceIds: ["src-mitre-attack"] },

  { id: "wf-vuln-discovery", domainId: "cybersecurity", title: "Software vulnerability discovery workflow", industry: "Cybersecurity", maturity: "early production", confidence: "inferred", oneLineTakeaway: "AI augments fuzzers and SAST; finding 0-days at scale remains research, not product.", workflowSteps: [
    { step: 1, name: "Codebase intake", actor: "Scanner", input: "Source / binary", aiRole: "Lift to IR; build call graphs.", dataUsed: [], architectures: ["code-analysis-ml"], output: "IR + graph", humanReview: "Engineer", failureModes: ["build break"] },
    { step: 2, name: "AI-assisted bug-pattern search", actor: "Model", input: "IR", aiRole: "Hypothesise vulnerable patterns.", dataUsed: ["CVE corpus"], architectures: ["llm", "embeddings"], output: "Candidate vulns", humanReview: "Researcher", failureModes: ["false positives"] },
    { step: 3, name: "Triage + reproduction", actor: "Researcher", input: "Candidates", aiRole: "Generate inputs to reproduce; agent fuzzing.", dataUsed: [], architectures: ["tool-agents"], output: "Reproducible PoC", humanReview: "Researcher", failureModes: ["non-reproducible"] },
    { step: 4, name: "Disclosure + patch suggest", actor: "Researcher", input: "PoC", aiRole: "Draft disclosure + patch.", dataUsed: [], architectures: ["llm"], output: "Disclosure + patch", humanReview: "Vendor", failureModes: ["coordinated-disclosure timing"] }
  ], inputs: ["code"], outputs: ["disclosures"], users: ["Researchers"], buyers: ["CISO / vendor"], budgetOwners: ["Security R&amp;D"], architecturesUsed: ["code-analysis-ml", "llm", "embeddings", "tool-agents"], companiesUsingThisWorkflow: ["Google OSS-Fuzz + AI", "ZeroPath", "Snyk"], relevantProducts: [], datasets: [], papers: [], regulations: ["CVE numbering", "responsible disclosure"], bottlenecks: ["bn-cyber-attack-surface"], founderOpportunities: [], sourceIds: ["src-darpa-aixcc", "src-mitre-attack", "src-nvd-cve"] },

  { id: "wf-warehouse-picking", domainId: "robotics", title: "Warehouse picking + routing workflow", industry: "Robotics", maturity: "early production", confidence: "inferred", oneLineTakeaway: "Robotic picking has crossed feasibility for many SKUs; the gap is cost-per-pick and long-tail items.", workflowSteps: [
    { step: 1, name: "WMS task allocation", actor: "WMS", input: "Order list + inventory", aiRole: "Allocate orders to robots vs humans.", dataUsed: ["WMS"], architectures: ["bayesian-opt"], output: "Pick missions", humanReview: "Ops manager", failureModes: ["mis-allocation"] },
    { step: 2, name: "Perception + grasp planning", actor: "Robot perception", input: "Bin RGB-D", aiRole: "Detect items, plan grasps.", dataUsed: ["item models"], architectures: ["vit", "diffusion-policy", "vla"], output: "Grasp plan", humanReview: "None", failureModes: ["novel item", "cluttered bin"] },
    { step: 3, name: "Pick + place execution", actor: "Robot", input: "Grasp plan", aiRole: "Execute under reactive control.", dataUsed: [], architectures: ["diffusion-policy", "rl-control"], output: "Picked item", humanReview: "Human exception handler", failureModes: ["double picks", "drops"] },
    { step: 4, name: "Exception handling + retraining", actor: "Human + data ops", input: "Failed picks", aiRole: "Capture demonstrations; retrain.", dataUsed: ["teleop"], architectures: ["imitation-learning"], output: "Updated policy", humanReview: "Robotics lead", failureModes: ["overfit demos"] }
  ], inputs: ["orders"], outputs: ["picked + shipped"], users: ["Ops"], buyers: ["Logistics VP"], budgetOwners: ["Logistics"], architecturesUsed: ["vit", "diffusion-policy", "vla", "rl-control", "imitation-learning", "bayesian-opt"], companiesUsingThisWorkflow: ["Symbotic", "Covariant", "Berkshire Grey", "Amazon Robotics"], relevantProducts: [], datasets: [], papers: [], regulations: ["OSHA"], bottlenecks: ["bn-robotics-data", "bn-robotics-safety"], founderOpportunities: [], sourceIds: ["src-rfm1", "src-diffusion-policy"] },

  { id: "wf-predictive-maintenance", domainId: "manufacturing", title: "Predictive maintenance workflow", industry: "Manufacturing", maturity: "production", confidence: "inferred", oneLineTakeaway: "PdM works where sensors are dense and downtime is expensive; ROI dies in light-asset environments.", workflowSteps: [
    { step: 1, name: "Sensor + historian intake", actor: "Plant historian", input: "Vibration, current, temperature", aiRole: "Stream + clean.", dataUsed: ["historian"], architectures: ["ts-transformer"], output: "Asset features", humanReview: "Reliability engineer", failureModes: ["missing channels"] },
    { step: 2, name: "Anomaly + remaining-useful-life", actor: "Model", input: "Features", aiRole: "Detect anomaly + estimate RUL.", dataUsed: ["historic failures"], architectures: ["anomaly-detection", "ts-transformer"], output: "Risk + RUL", humanReview: "Reliability engineer", failureModes: ["concept drift after PM"] },
    { step: 3, name: "Work-order generation", actor: "CMMS", input: "Risk", aiRole: "Generate work order with parts list.", dataUsed: ["BOM"], architectures: ["llm"], output: "Work order", humanReview: "Maintenance planner", failureModes: ["wrong parts"] },
    { step: 4, name: "Closeout + retraining", actor: "Tech", input: "Repair record", aiRole: "Label outcome; retrain.", dataUsed: [], architectures: [], output: "Updated history", humanReview: "Reliability lead", failureModes: ["sparse failures"] }
  ], inputs: ["sensor data"], outputs: ["work orders"], users: ["Reliability + maintenance"], buyers: ["Plant manager"], budgetOwners: ["Operations"], architecturesUsed: ["ts-transformer", "anomaly-detection", "llm"], companiesUsingThisWorkflow: ["Augury", "Uptake", "GE Vernova"], relevantProducts: [], datasets: [], papers: [], regulations: [], bottlenecks: ["bn-mfg-ot-it"], founderOpportunities: [], sourceIds: [] },


  { id: "wf-grid-optimization", domainId: "energy-grid", title: "Grid + DER optimisation workflow", industry: "Energy", maturity: "early production", confidence: "needsVerification", oneLineTakeaway: "DERMS / VPP control is increasingly ML-assisted; the safety-critical inner loop remains classical.", workflowSteps: [
    { step: 1, name: "Telemetry + forecast intake", actor: "DERMS", input: "Solar / wind / load forecasts, AMI", aiRole: "Build operational forecast.", dataUsed: ["AMI", "weather"], architectures: ["ts-transformer"], output: "Forecast", humanReview: "Grid operator", failureModes: ["weather error"] },
    { step: 2, name: "Constrained optimisation", actor: "Optimizer", input: "Forecast + constraints", aiRole: "Solve dispatch under safety + reliability.", dataUsed: ["network model"], architectures: ["bayesian-opt", "rl-control"], output: "Setpoints", humanReview: "Operator", failureModes: ["unsafe setpoint"] },
    { step: 3, name: "Customer enrolment + flexibility", actor: "VPP platform", input: "Customer fleets", aiRole: "Co-ordinate behind-the-meter assets.", dataUsed: ["enrolled assets"], architectures: ["tool-agents"], output: "Dispatch", humanReview: "Operator", failureModes: ["customer opt-out"] },
    { step: 4, name: "Settlement + reporting", actor: "Settlement engine", input: "Realised dispatch", aiRole: "Settle vs market + regulator reporting.", dataUsed: [], architectures: [], output: "Reports", humanReview: "Compliance", failureModes: ["meter-data quality"] }
  ], inputs: ["telemetry"], outputs: ["dispatch"], users: ["Operators"], buyers: ["Utility VP"], budgetOwners: ["Operations"], architecturesUsed: ["ts-transformer", "bayesian-opt", "rl-control", "tool-agents"], companiesUsingThisWorkflow: ["AutoGrid (Schneider)", "Tesla VPP", "Octopus Kraken"], relevantProducts: [], datasets: [], papers: [], regulations: ["NERC CIP", "FERC orders"], bottlenecks: ["bn-energy-grid-physics"], founderOpportunities: [], sourceIds: ["src-ferc-2222", "src-nerc-cip"] },

  { id: "wf-materials-discovery", domainId: "materials-science", title: "Materials discovery autonomous lab workflow", industry: "Science", maturity: "research frontier", confidence: "forwardLooking", oneLineTakeaway: "ML-suggested candidates closed-looped with autonomous labs are the playbook; sample throughput remains the bottleneck.", workflowSteps: [
    { step: 1, name: "Property prediction", actor: "ML model", input: "Composition / structure", aiRole: "Predict properties (band gap, conductivity, stability).", dataUsed: ["Materials Project", "OQMD"], architectures: ["equivariant-nn", "molecular-gnn"], output: "Candidate ranking", humanReview: "Scientist", failureModes: ["distribution shift"] },
    { step: 2, name: "Active-learning suggestion", actor: "Optimizer", input: "Property predictions", aiRole: "Choose next experiment with uncertainty.", dataUsed: [], architectures: ["bayesian-opt", "active-learning"], output: "Experiment plan", humanReview: "PI", failureModes: ["exploit-only"] },
    { step: 3, name: "Robot synthesis + characterisation", actor: "Lab robot", input: "Experiment plan", aiRole: "Synthesize + characterize.", dataUsed: [], architectures: ["rl-control"], output: "Measurement", humanReview: "Lab scientist", failureModes: ["sample contamination"] },
    { step: 4, name: "Update + report", actor: "AI", input: "Result", aiRole: "Update model; draft report.", dataUsed: [], architectures: ["llm"], output: "Updated model + report", humanReview: "PI", failureModes: ["irreproducibility"] }
  ], inputs: ["compositions"], outputs: ["validated materials"], users: ["Materials scientists"], buyers: ["R&amp;D director"], budgetOwners: ["R&amp;D"], architecturesUsed: ["equivariant-nn", "molecular-gnn", "bayesian-opt", "rl-control", "llm"], companiesUsingThisWorkflow: ["A-Lab (LBNL)", "Kebotix", "Citrine Informatics", "Atomic Machines (R&amp;D)"], relevantProducts: [], datasets: ["Materials Project"], papers: [], regulations: [], bottlenecks: ["bn-wet-lab"], founderOpportunities: ["opp-materials-autonomous-lab"], sourceIds: ["src-materials-project", "src-oqmd"] },

  { id: "wf-satellite-imagery", domainId: "aerospace-space", title: "Satellite imagery analysis workflow", industry: "Aerospace", maturity: "production", confidence: "inferred", oneLineTakeaway: "Earth-observation analytics are mature for defence + insurance; differentiation is access to imagery cadence + tasking.", workflowSteps: [
    { step: 1, name: "Tasking + ingest", actor: "Constellation operator", input: "AOI + revisit need", aiRole: "Schedule capture; ingest tiles.", dataUsed: ["catalog"], architectures: ["embeddings"], output: "Imagery tiles", humanReview: "Mission planner", failureModes: ["cloud cover"] },
    { step: 2, name: "Detection + change", actor: "Model", input: "Tiles + history", aiRole: "Detect objects, change vs baseline.", dataUsed: ["historic tiles"], architectures: ["vit", "object-detection", "segmentation-models"], output: "Detections", humanReview: "Analyst", failureModes: ["seasonal change"] },
    { step: 3, name: "Analyst overlay + reporting", actor: "Analyst", input: "Detections", aiRole: "Caption + draft analyst report.", dataUsed: [], architectures: ["vlm", "llm", "rag"], output: "Report", humanReview: "Senior analyst", failureModes: ["over-claiming intent"] },
    { step: 4, name: "Customer delivery + tasking loop", actor: "Account team", input: "Report", aiRole: "Suggest next tasking based on customer interest.", dataUsed: [], architectures: ["embeddings"], output: "Task queue", humanReview: "Account team", failureModes: ["misaligned customer need"] }
  ], inputs: ["imagery"], outputs: ["analyst reports"], users: ["Analysts"], buyers: ["Defence / commercial intel"], budgetOwners: ["Mission"], architecturesUsed: ["embeddings", "vit", "object-detection", "segmentation-models", "vlm", "llm", "rag"], companiesUsingThisWorkflow: ["Planet Labs", "Maxar", "BlackSky", "Palantir"], relevantProducts: [], datasets: [], papers: [], regulations: ["NGA / DoD imagery rules", "ITAR / EAR"], bottlenecks: [], founderOpportunities: ["opp-osint-with-provenance"], sourceIds: ["src-sam", "src-c2pa"] }
];

/* ============================================
   WORKFLOW_MONEY_MAP &mdash; workflow &rarr; buyer &rarr; pain &rarr; AI &rarr; revenue
   ============================================ */
var WORKFLOW_MONEY_MAP = [
  { id: "money-radiology", workflowId: "wf-radiology-reporting", domainId: "radiology", buyer: "Hospital imaging informatics director / radiology-group CMO", user: "Radiologists", painfulJob: "Read studies, draft reports, communicate critical findings under volume pressure", aiSystem: "Triage / detection + structured-finding draft + report-generation copilot", architectures: ["cnn", "vit", "domain-fm", "rag"], revenueLogic: "Per-study fee or seat-based + measurable time saved", willingnessToPay: "high", salesDifficulty: "long", dataDifficulty: "high (PHI, scanner shift)", regulatoryDifficulty: "high (SaMD)", founderOpportunityIds: ["opp-radiology-report-copilot"], companies: ["Aidoc", "Viz.ai", "Rad AI"], confidence: "marketContext", sourceIds: ["src-fda-samd"] },
  { id: "money-pathology", workflowId: "wf-pathology-slide-analysis", domainId: "pathology", buyer: "Reference-lab director", user: "Pathologists", painfulJob: "Read whole-slide images, predict biomarkers, write reports", aiSystem: "Slide-level FM + biomarker prediction + report drafting", architectures: ["vit", "domain-fm"], revenueLogic: "Per-slide / per-test fee", willingnessToPay: "high", salesDifficulty: "long", dataDifficulty: "high", regulatoryDifficulty: "high", founderOpportunityIds: [], companies: ["Paige", "PathAI", "Tempus"], confidence: "marketContext", sourceIds: ["src-tcga"] },
  { id: "money-prior-auth", workflowId: "wf-prior-authorization", domainId: "clinical-medicine", buyer: "Practice admin / RCM service", user: "RCM staff", painfulJob: "Build PA cases, retrieve payer policy, submit, appeal", aiSystem: "OCR + payer-policy RAG + LLM agent", architectures: ["ocr-docai", "rag", "llm"], revenueLogic: "Per-submission fee or % of recovered revenue", willingnessToPay: "high", salesDifficulty: "medium", dataDifficulty: "medium", regulatoryDifficulty: "medium", founderOpportunityIds: ["opp-prior-auth-specialty"], companies: ["Cohere Health", "Co:Helm"], confidence: "inferred", sourceIds: [] },
  { id: "money-clinical-scribe", workflowId: "wf-clinical-scribe", domainId: "clinical-documentation", buyer: "Health-system CIO", user: "Clinicians", painfulJob: "Documenting encounters, coding visits", aiSystem: "Ambient ASR + clinical LLM + EHR integration", architectures: ["asr-tts", "domain-fm", "rag"], revenueLogic: "Per-clinician seat", willingnessToPay: "high", salesDifficulty: "long", dataDifficulty: "high", regulatoryDifficulty: "medium", founderOpportunityIds: ["opp-clindocs-specialty"], companies: ["Microsoft / Nuance DAX", "Abridge", "Augmedix"], confidence: "marketContext", sourceIds: [] },
  { id: "money-trial-matching", workflowId: "wf-clinical-trial-matching", domainId: "clinical-medicine", buyer: "Cancer centre / sponsor / CRO", user: "Trial coordinators", painfulJob: "Match patients to open trials and enrol", aiSystem: "EHR extraction + trial RAG + outreach agent", architectures: ["domain-fm", "rag", "tool-agents"], revenueLogic: "Per-enrolled-patient or sponsor contract", willingnessToPay: "high", salesDifficulty: "long", dataDifficulty: "high", regulatoryDifficulty: "high", founderOpportunityIds: [], companies: ["Tempus", "Flatiron", "Concert AI"], confidence: "inferred", sourceIds: [] },
  { id: "money-protein-design", workflowId: "wf-protein-design", domainId: "protein-design", buyer: "Biotech R&amp;D head", user: "Computational + wet-lab teams", painfulJob: "Design proteins that work in the lab", aiSystem: "RFdiffusion + ProteinMPNN + active learning", architectures: ["diffusion-bio", "protein-lm"], revenueLogic: "Multi-year R&amp;D contracts + milestones", willingnessToPay: "very high", salesDifficulty: "long", dataDifficulty: "high", regulatoryDifficulty: "low", founderOpportunityIds: ["opp-bio-eval-harness"], companies: ["Generate Biomedicines", "Cradle"], confidence: "sourced", sourceIds: ["paper-rfdiffusion"] },
  { id: "money-fraud", workflowId: "wf-fraud-detection", domainId: "fraud-detection", buyer: "Fintech / marketplace risk lead", user: "Risk engineers", painfulJob: "Score transactions in milliseconds with low FPR", aiSystem: "GBDT + graph features + online learning", architectures: ["gbdt", "graph-threat", "anomaly-detection"], revenueLogic: "Per-decision fee or platform fee", willingnessToPay: "high", salesDifficulty: "medium", dataDifficulty: "medium", regulatoryDifficulty: "medium", founderOpportunityIds: [], companies: ["Stripe Radar", "FeatureSpace", "Sift"], confidence: "marketContext", sourceIds: ["paper-gcn"] },
  { id: "money-aml", workflowId: "wf-aml-investigator", domainId: "banking", buyer: "AML head", user: "Investigators", painfulJob: "Build SAR cases under timeline pressure", aiSystem: "LLM + graph features inside case management", architectures: ["llm", "rag", "graph-threat"], revenueLogic: "Per-investigator seat", willingnessToPay: "very high", salesDifficulty: "enterprise-long", dataDifficulty: "high", regulatoryDifficulty: "high", founderOpportunityIds: ["opp-aml-investigator-copilot"], companies: ["ComplyAdvantage", "Quantexa"], confidence: "inferred", sourceIds: [] },
  { id: "money-quant-research", workflowId: "wf-quant-research", domainId: "quant-finance", buyer: "Hedge fund head of research", user: "Quants", painfulJob: "Honest backtesting + capacity modelling", aiSystem: "Audit-grade eval tooling + leakage detection", architectures: ["ts-transformer", "gbdt"], revenueLogic: "Seat licence", willingnessToPay: "high", salesDifficulty: "medium", dataDifficulty: "medium", regulatoryDifficulty: "low", founderOpportunityIds: ["opp-quant-eval-tooling"], companies: ["Numerai", "internal HF tooling"], confidence: "inferred", sourceIds: [] },
  { id: "money-legal-research", workflowId: "wf-legal-research", domainId: "legal", buyer: "Law-firm GC", user: "Attorneys", painfulJob: "Find on-point authority and avoid hallucinated citations", aiSystem: "Citation-grounded RAG + verification middleware", architectures: ["rag", "llm"], revenueLogic: "Seat-based subscription", willingnessToPay: "high", salesDifficulty: "medium", dataDifficulty: "low", regulatoryDifficulty: "low", founderOpportunityIds: ["opp-legal-citation-verification"], companies: ["Harvey", "Lexis+ AI"], confidence: "sourced", sourceIds: ["paper-rag"] },
  { id: "money-contract-review", workflowId: "wf-contract-review", domainId: "legal", buyer: "GC / in-house team", user: "Attorneys", painfulJob: "Compare contract to playbook, redline", aiSystem: "Document AI + clause library + LLM redlines", architectures: ["ocr-docai", "rag", "llm"], revenueLogic: "Seat-based + per-contract", willingnessToPay: "high", salesDifficulty: "medium", dataDifficulty: "medium", regulatoryDifficulty: "low", founderOpportunityIds: ["opp-legal-specialty"], companies: ["Robin AI", "Spellbook", "Ironclad"], confidence: "marketContext", sourceIds: [] },
  { id: "money-edu-tutor", workflowId: "wf-ai-tutoring", domainId: "education", buyer: "District / school", user: "Students + teachers", painfulJob: "Personalised practice with measurable gains", aiSystem: "Subject LLMs + adaptive feedback + teacher dashboard", architectures: ["llm", "rag"], revenueLogic: "Per-student or district licence", willingnessToPay: "medium", salesDifficulty: "long", dataDifficulty: "medium", regulatoryDifficulty: "medium", founderOpportunityIds: ["opp-edu-vertical"], companies: ["Khan Academy", "Duolingo"], confidence: "inferred", sourceIds: [] },
  { id: "money-coding-agent", workflowId: "wf-coding-agent", domainId: "software-engineering", buyer: "VP Eng / CTO", user: "Engineers", painfulJob: "Repo-scale tasks beyond completion", aiSystem: "Coding agent + sandboxed execution + tests", architectures: ["llm", "tool-agents", "rag"], revenueLogic: "Seat / usage", willingnessToPay: "very high", salesDifficulty: "medium", dataDifficulty: "low", regulatoryDifficulty: "low", founderOpportunityIds: ["opp-swe-vertical-agents"], companies: ["Cursor", "GitHub Copilot", "Anthropic Claude Code"], confidence: "sourced", sourceIds: ["src-swe-bench"] },
  { id: "money-soc-triage", workflowId: "wf-soc-triage", domainId: "cybersecurity", buyer: "CISO", user: "Analysts", painfulJob: "Alert overload, novel attacks", aiSystem: "Anomaly detection + LLM copilot + automation", architectures: ["llm", "rag", "anomaly-detection", "graph-threat"], revenueLogic: "Per-asset / seat", willingnessToPay: "high", salesDifficulty: "long", dataDifficulty: "medium", regulatoryDifficulty: "medium", founderOpportunityIds: ["opp-cybersec-prompt-injection"], companies: ["CrowdStrike", "SentinelOne", "Microsoft Security Copilot"], confidence: "inferred", sourceIds: ["src-mitre-attack"] },
  { id: "money-robotics", workflowId: "wf-imitation-learning", domainId: "robotics", buyer: "VP robotics", user: "ML + lab teams", painfulJob: "Build deployable policies with limited data", aiSystem: "Teleop + diffusion / VLA + sim-to-real", architectures: ["imitation-learning", "diffusion-policy", "vla", "sim-to-real"], revenueLogic: "Hardware + services + data infra", willingnessToPay: "high", salesDifficulty: "long", dataDifficulty: "very high", regulatoryDifficulty: "medium", founderOpportunityIds: ["opp-robot-data-infrastructure"], companies: ["Physical Intelligence", "Figure"], confidence: "sourced", sourceIds: ["paper-rt2"] },
  { id: "money-av", workflowId: "wf-av-perception", domainId: "autonomous-vehicles", buyer: "AV operators / OEMs", user: "Drivers", painfulJob: "Long-tail safety", aiSystem: "Perception + planning + simulation + fleet learning", architectures: ["vit", "imitation-learning", "world-models"], revenueLogic: "Per-ride or licence", willingnessToPay: "high", salesDifficulty: "very long", dataDifficulty: "high", regulatoryDifficulty: "very high", founderOpportunityIds: [], companies: ["Waymo", "Tesla", "Mobileye"], confidence: "marketContext", sourceIds: [] },
  { id: "money-mfg", workflowId: "wf-mfg-defect-detection", domainId: "manufacturing", buyer: "Plant manager", user: "Operators", painfulJob: "Catch defects before shipping", aiSystem: "Vision QC + anomaly detection", architectures: ["cnn", "vit", "anomaly-detection"], revenueLogic: "Hardware + recurring software", willingnessToPay: "high", salesDifficulty: "long", dataDifficulty: "high", regulatoryDifficulty: "low", founderOpportunityIds: ["opp-mfg-edge-ai"], companies: ["Cognex", "Landing AI", "Instrumental"], confidence: "inferred", sourceIds: [] },
  { id: "money-energy", workflowId: "wf-renewable-forecast", domainId: "energy-grid", buyer: "Utility / aggregator", user: "Traders / operators", painfulJob: "Forecast and bid renewables under uncertainty", aiSystem: "Time-series + RL dispatch", architectures: ["ts-transformer", "rl-control", "neural-operators"], revenueLogic: "Performance fee", willingnessToPay: "high", salesDifficulty: "long", dataDifficulty: "medium", regulatoryDifficulty: "high", founderOpportunityIds: ["opp-energy-der-orchestration"], companies: ["Octopus / Kraken", "Stem", "AutoGrid"], confidence: "inferred", sourceIds: [] },
  { id: "money-weather", workflowId: "wf-neural-weather", domainId: "climate-weather", buyer: "Operations centres + industry users", user: "Forecasters", painfulJob: "Fast accurate medium-range forecasts", aiSystem: "Neural weather + post-processing", architectures: ["neural-operators", "ts-transformer", "diffusion"], revenueLogic: "B2G subscriptions + B2B vertical", willingnessToPay: "medium", salesDifficulty: "medium", dataDifficulty: "low", regulatoryDifficulty: "low", founderOpportunityIds: [], companies: ["Google DeepMind", "NVIDIA Earth-2", "Tomorrow.io"], confidence: "sourced", sourceIds: ["paper-graphcast"] },
  { id: "money-precision-spray", workflowId: "wf-precision-spray", domainId: "agriculture", buyer: "OEMs / farms", user: "Farmers", painfulJob: "Reduce chemical input + cost", aiSystem: "Vision-guided spraying", architectures: ["cnn", "vit"], revenueLogic: "Hardware + recurring software", willingnessToPay: "medium", salesDifficulty: "medium", dataDifficulty: "medium", regulatoryDifficulty: "medium", founderOpportunityIds: ["opp-ag-specialty"], companies: ["John Deere See &amp; Spray (Blue River)"], confidence: "inferred", sourceIds: [] },
  { id: "money-video-gen", workflowId: "wf-video-generation", domainId: "media-entertainment", buyer: "Studios / brands / platforms", user: "Creators", painfulJob: "Create high-quality video at speed", aiSystem: "Diffusion video + voice + sound + provenance", architectures: ["diffusion", "video-models", "asr-tts"], revenueLogic: "Subscription / API / licensing", willingnessToPay: "medium", salesDifficulty: "medium", dataDifficulty: "high (rights)", regulatoryDifficulty: "medium", founderOpportunityIds: ["opp-media-provenance"], companies: ["OpenAI Sora", "Google Veo", "Runway"], confidence: "sourced", sourceIds: ["paper-ldm"] },
  { id: "money-government", workflowId: "wf-citizen-case-management", domainId: "government-services", buyer: "Agency CIO", user: "Caseworkers", painfulJob: "Case backlogs and language barriers", aiSystem: "Document AI + RAG + multilingual LLM", architectures: ["llm", "rag", "asr-tts", "ocr-docai"], revenueLogic: "Programme contract", willingnessToPay: "high", salesDifficulty: "very long", dataDifficulty: "medium", regulatoryDifficulty: "high", founderOpportunityIds: [], companies: ["Palantir"], confidence: "inferred", sourceIds: [] },

  /* ===== Phase 2.A money-map expansion (28 new) ===== */
  { id: "money-claims-denial", workflowId: "wf-claims-denial-mgmt", domainId: "clinical-medicine", buyer: "Health-system CFO", user: "RCM staff", painfulJob: "Recover revenue from payer denials before timely-filing limits", aiSystem: "OCR + payer-policy RAG + appeal-letter agent", architectures: ["ocr-docai", "rag", "llm", "tool-agents"], revenueLogic: "Per-recovered-dollar share or per-appeal", willingnessToPay: "very high", salesDifficulty: "long", dataDifficulty: "high", regulatoryDifficulty: "medium", founderOpportunityIds: [], companies: ["Waystar", "AKASA", "Adonis"], confidence: "inferred", sourceIds: [] },
  { id: "money-medical-coding", workflowId: "wf-medical-coding", domainId: "clinical-documentation", buyer: "Health-system CFO", user: "Coders", painfulJob: "Code encounters accurately under DRG / OIG audit risk", aiSystem: "Domain-FM + RAG over coding rulebooks + coder review", architectures: ["domain-fm", "rag", "llm"], revenueLogic: "Seat / per-encounter", willingnessToPay: "high", salesDifficulty: "long", dataDifficulty: "high", regulatoryDifficulty: "medium", founderOpportunityIds: [], companies: ["3M / Solventum", "Iodine Software", "Microsoft / Nuance"], confidence: "inferred", sourceIds: [] },
  { id: "money-sepsis", workflowId: "wf-sepsis-early-warning", domainId: "clinical-medicine", buyer: "Health-system CMO", user: "Bedside clinicians", painfulJob: "Catch deterioration earlier without alert fatigue", aiSystem: "Time-series risk model with site-specific calibration + LLM SBAR", architectures: ["ts-transformer", "gbdt", "llm"], revenueLogic: "Per-bed seat or value-based contract", willingnessToPay: "medium", salesDifficulty: "long", dataDifficulty: "high", regulatoryDifficulty: "high", founderOpportunityIds: [], companies: ["Bayesian Health", "Dascena", "Epic"], confidence: "needsVerification", sourceIds: ["src-lstm-sepsis-wong"] },
  { id: "money-genomics-variant", workflowId: "wf-genomics-variant", domainId: "genomics", buyer: "Lab director", user: "Clinical geneticists", painfulJob: "Triage and report variants of uncertain significance", aiSystem: "Variant-scoring ML + phenotype RAG + LLM report drafting", architectures: ["domain-fm", "protein-lm", "rag", "llm"], revenueLogic: "Per-test fee", willingnessToPay: "high", salesDifficulty: "long", dataDifficulty: "high", regulatoryDifficulty: "high", founderOpportunityIds: [], companies: ["Tempus", "Invitae", "Illumina"], confidence: "inferred", sourceIds: ["src-clinvar", "src-acmg-vus"] },
  { id: "money-credit-uw", workflowId: "wf-credit-underwriting", domainId: "banking", buyer: "Bank CRO / fintech CRO", user: "Underwriters", painfulJob: "Underwrite under SR 11-7 model risk and ECOA reason codes", aiSystem: "GBDT score + OCR + LLM credit memo + adverse-action notice", architectures: ["gbdt", "ocr-docai", "rag", "llm"], revenueLogic: "Per-application fee or platform seat", willingnessToPay: "high", salesDifficulty: "long", dataDifficulty: "high", regulatoryDifficulty: "high", founderOpportunityIds: [], companies: ["Upstart", "Zest AI", "Stripe Capital"], confidence: "inferred", sourceIds: ["src-sr-11-7", "src-ecoa-reg-b"] },
  { id: "money-claims-triage", workflowId: "wf-claims-triage-insurance", domainId: "insurance", buyer: "Claims VP", user: "Adjusters", painfulJob: "Triage FNOL and assess damage at scale", aiSystem: "Photo CV + ASR + fraud-graph + adjuster copilot", architectures: ["asr-tts", "cnn", "vit", "rag", "anomaly-detection", "graph-threat", "llm"], revenueLogic: "Per-claim fee", willingnessToPay: "high", salesDifficulty: "long", dataDifficulty: "medium", regulatoryDifficulty: "medium", founderOpportunityIds: [], companies: ["Tractable", "CCC", "Lemonade"], confidence: "inferred", sourceIds: [] },
  { id: "money-execution-algo", workflowId: "wf-execution-algo", domainId: "trading", buyer: "Head of trading", user: "Buy-side / sell-side traders", painfulJob: "Reduce slippage and document best-execution", aiSystem: "RL-execution + TCA + LLM best-ex memos", architectures: ["rl-execution", "ts-transformer", "llm"], revenueLogic: "Bps savings or platform fee", willingnessToPay: "very high", salesDifficulty: "very long", dataDifficulty: "high", regulatoryDifficulty: "high", founderOpportunityIds: [], companies: ["Citadel Securities", "Two Sigma Securities", "Quantitative Brokers"], confidence: "inferred", sourceIds: ["src-mifid-ii-best-ex"] },
  { id: "money-ediscovery", workflowId: "wf-ediscovery", domainId: "legal", buyer: "Litigation partner", user: "Reviewers", painfulJob: "Cull, code, and produce custodial data on schedule", aiSystem: "Embeddings + LLM relevance + privilege detection", architectures: ["embeddings", "llm"], revenueLogic: "Per-GB or per-document fee", willingnessToPay: "high", salesDifficulty: "long", dataDifficulty: "high", regulatoryDifficulty: "high", founderOpportunityIds: [], companies: ["Relativity", "DISCO", "Reveal"], confidence: "inferred", sourceIds: [] },
  { id: "money-enterprise-rag", workflowId: "wf-enterprise-rag", domainId: "enterprise-productivity", buyer: "CIO", user: "Knowledge workers", painfulJob: "Find and act on permissioned company information", aiSystem: "Permissioned connectors + retrieval + LLM with citations", architectures: ["embeddings", "rag", "llm"], revenueLogic: "Seat", willingnessToPay: "high", salesDifficulty: "long", dataDifficulty: "high", regulatoryDifficulty: "medium", founderOpportunityIds: [], companies: ["Glean", "Microsoft 365 Copilot", "Notion AI"], confidence: "inferred", sourceIds: [] },
  { id: "money-cs-automation", workflowId: "wf-customer-support-automation", domainId: "customer-support", buyer: "Head of CX", user: "Support agents", painfulJob: "Resolve tickets at scale within SLA", aiSystem: "RAG + LLM agent + tool actions", architectures: ["asr-tts", "embeddings", "rag", "llm", "tool-agents"], revenueLogic: "Per-resolution or seat", willingnessToPay: "high", salesDifficulty: "medium", dataDifficulty: "medium", regulatoryDifficulty: "low", founderOpportunityIds: ["opp-customer-support-vertical"], companies: ["Intercom Fin", "Sierra", "Decagon"], confidence: "inferred", sourceIds: [] },
  { id: "money-sales-call", workflowId: "wf-sales-call-intelligence", domainId: "sales-marketing", buyer: "VP Sales", user: "Reps + managers", painfulJob: "Forecast accuracy and rep coaching", aiSystem: "ASR + LLM tagging + tool-agent CRM updates", architectures: ["asr-tts", "llm", "embeddings", "tool-agents"], revenueLogic: "Seat", willingnessToPay: "high", salesDifficulty: "medium", dataDifficulty: "low", regulatoryDifficulty: "low", founderOpportunityIds: [], companies: ["Gong", "Chorus", "Clari Copilot"], confidence: "inferred", sourceIds: [] },
  { id: "money-hr-screen", workflowId: "wf-hr-screening", domainId: "hr-recruiting", buyer: "VP Talent", user: "Recruiters", painfulJob: "Source and rank candidates without bias", aiSystem: "Embeddings + LLM + agent outreach", architectures: ["llm", "embeddings", "tool-agents"], revenueLogic: "Seat or per-hire", willingnessToPay: "medium", salesDifficulty: "medium", dataDifficulty: "medium", regulatoryDifficulty: "high", founderOpportunityIds: [], companies: ["Eightfold", "HireVue", "Paradox"], confidence: "needsVerification", sourceIds: ["src-nyc-aedt"] },
  { id: "money-phishing", workflowId: "wf-phishing-detection", domainId: "cybersecurity", buyer: "CISO", user: "Analysts", painfulJob: "Stop BEC and credential phishing in inbox", aiSystem: "Identity + behaviour + content models with LLM intent", architectures: ["embeddings", "graph-threat", "anomaly-detection", "llm"], revenueLogic: "Seat / per-mailbox", willingnessToPay: "high", salesDifficulty: "medium", dataDifficulty: "medium", regulatoryDifficulty: "medium", founderOpportunityIds: ["opp-cybersec-prompt-injection"], companies: ["Abnormal Security", "Microsoft Defender", "Proofpoint"], confidence: "inferred", sourceIds: [] },
  { id: "money-vuln-discovery", workflowId: "wf-vuln-discovery", domainId: "cybersecurity", buyer: "CISO / vendor security", user: "Researchers", painfulJob: "Find vulns before adversaries", aiSystem: "Code-analysis ML + LLM + agent fuzzing", architectures: ["code-analysis-ml", "llm", "embeddings", "tool-agents"], revenueLogic: "Service or platform seat", willingnessToPay: "high", salesDifficulty: "long", dataDifficulty: "medium", regulatoryDifficulty: "medium", founderOpportunityIds: [], companies: ["ZeroPath", "Snyk", "Google OSS-Fuzz (research)"], confidence: "needsVerification", sourceIds: ["needs-verification"] },
  { id: "money-warehouse-pick", workflowId: "wf-warehouse-picking", domainId: "robotics", buyer: "Logistics VP", user: "Ops", painfulJob: "Reduce cost-per-pick under labour shortages", aiSystem: "Vision-action policy + WMS integration", architectures: ["vit", "diffusion-policy", "vla", "rl-control", "imitation-learning", "bayesian-opt"], revenueLogic: "Robotics-as-a-service or capex", willingnessToPay: "very high", salesDifficulty: "very long", dataDifficulty: "high", regulatoryDifficulty: "medium", founderOpportunityIds: ["opp-robot-data-infrastructure"], companies: ["Symbotic", "Covariant", "Berkshire Grey"], confidence: "inferred", sourceIds: [] },
  { id: "money-pdm", workflowId: "wf-predictive-maintenance", domainId: "manufacturing", buyer: "Plant manager", user: "Reliability + maintenance", painfulJob: "Reduce unplanned downtime in heavy industry", aiSystem: "Time-series anomaly + RUL + CMMS work-order generation", architectures: ["ts-transformer", "anomaly-detection", "llm"], revenueLogic: "Per-asset SaaS or shared savings", willingnessToPay: "high", salesDifficulty: "long", dataDifficulty: "high", regulatoryDifficulty: "low", founderOpportunityIds: ["opp-mfg-edge-ai"], companies: ["Augury", "Uptake", "GE Vernova"], confidence: "inferred", sourceIds: [] },
  { id: "money-grid-optim", workflowId: "wf-grid-optimization", domainId: "energy-grid", buyer: "Utility VP", user: "Operators", painfulJob: "Run reliable grid with rising DER + variable load", aiSystem: "Forecasting + constrained optimisation + VPP control", architectures: ["ts-transformer", "bayesian-opt", "rl-control", "tool-agents"], revenueLogic: "Platform fee + flexibility revenue share", willingnessToPay: "high", salesDifficulty: "very long", dataDifficulty: "high", regulatoryDifficulty: "high", founderOpportunityIds: ["opp-energy-der-orchestration"], companies: ["AutoGrid (Schneider)", "Tesla VPP", "Octopus Kraken"], confidence: "needsVerification", sourceIds: ["src-ferc-2222"] },
  { id: "money-materials-discovery", workflowId: "wf-materials-discovery", domainId: "materials-science", buyer: "R&amp;D director", user: "Materials scientists", painfulJob: "Find new materials with target properties faster", aiSystem: "Equivariant ML + active learning + autonomous robot lab", architectures: ["equivariant-nn", "molecular-gnn", "bayesian-opt", "rl-control", "llm"], revenueLogic: "Service contract or licensed materials", willingnessToPay: "high", salesDifficulty: "long", dataDifficulty: "high", regulatoryDifficulty: "low", founderOpportunityIds: ["opp-materials-autonomous-lab"], companies: ["Citrine Informatics", "Kebotix"], confidence: "forwardLooking", sourceIds: [] },
  { id: "money-satellite", workflowId: "wf-satellite-imagery", domainId: "aerospace-space", buyer: "Defence / commercial intel head", user: "Analysts", painfulJob: "Detect change and intent over AOI fast", aiSystem: "Detection + segmentation + VLM caption + RAG report", architectures: ["embeddings", "vit", "object-detection", "segmentation-models", "vlm", "llm", "rag"], revenueLogic: "Per-AOI or analytics seat", willingnessToPay: "very high", salesDifficulty: "very long", dataDifficulty: "high", regulatoryDifficulty: "high", founderOpportunityIds: ["opp-osint-with-provenance"], companies: ["Planet Labs", "Maxar", "BlackSky", "Palantir"], confidence: "inferred", sourceIds: [] },
  { id: "money-wf-imitation", workflowId: "wf-imitation-learning", domainId: "robotics", buyer: "Robotics CTO", user: "Robotics team", painfulJob: "Scale teleop demonstrations into reliable policies", aiSystem: "Teleop platform + diffusion policy + sim-to-real eval", architectures: ["imitation-learning", "diffusion-policy", "vla", "sim-to-real"], revenueLogic: "Platform seat / per-robot", willingnessToPay: "very high", salesDifficulty: "long", dataDifficulty: "very high", regulatoryDifficulty: "medium", founderOpportunityIds: ["opp-robot-data-infrastructure"], companies: ["Physical Intelligence", "Covariant", "Skild AI"], confidence: "forwardLooking", sourceIds: [] },
  { id: "money-coding-agent-2", workflowId: "wf-coding-agent", domainId: "software-engineering", buyer: "Engineering manager", user: "Engineers", painfulJob: "Reduce cycle time on changes; resolve bugs faster", aiSystem: "Repo-aware coding agent + tool use + tests as ground truth", architectures: ["llm", "tool-agents", "code-analysis-ml", "embeddings"], revenueLogic: "Seat", willingnessToPay: "high", salesDifficulty: "medium", dataDifficulty: "low", regulatoryDifficulty: "low", founderOpportunityIds: ["opp-swe-vertical-agents"], companies: ["Cursor", "Anthropic Claude Code", "GitHub Copilot"], confidence: "inferred", sourceIds: [] }
];

/* ============================================
   HIGH_VALUE_AI_ARCHITECTURES &mdash; learning playbook
   ============================================ */
var HIGH_VALUE_AI_ARCHITECTURES = [
  { id: "rag-playbook", baseArchId: "rag", name: "RAG (Retrieval-Augmented Generation)", learningPriority: "Must learn now", whyItMatters: "Default pattern for grounding LLMs in private corpora, with citations.", domains: ["legal", "customer-support", "enterprise-productivity", "research-workflows", "clinical-medicine"], workflowIds: ["wf-legal-research", "wf-aml-investigator", "wf-citizen-case-management", "wf-prior-authorization"], companyExamples: ["Harvey", "Glean", "Lexis+ AI"], whatItEnables: ["citation-grounded answers", "frequent corpus updates", "permission-aware retrieval"], whereItMakesMoney: ["legal", "support", "regulated documentation"], whereItFails: ["bad retrieval &rarr; bad answers", "unverified citations"], whatToLearn: ["embeddings", "chunking", "rerankers", "permissioning", "evals", "citation verification", "hybrid retrieval"], practicalProjects: ["RAG with citation-checking", "permissioned enterprise RAG", "vertical RAG for one regulated domain"], interviewQuestions: ["When should you not use RAG?", "What kills RAG quality first?"], confidence: "sourced" },
  { id: "agents-playbook", baseArchId: "tool-agents", name: "Tool-using agents", learningPriority: "Must learn now", whyItMatters: "Agents convert capability into product when paired with sandboxes.", domains: ["software-engineering", "research-workflows", "customer-support"], workflowIds: ["wf-coding-agent", "wf-prior-authorization"], companyExamples: ["Cursor", "Anthropic Claude Code", "OpenAI Operator"], whatItEnables: ["multi-step tasks", "tool calls", "verification loops"], whereItMakesMoney: ["coding", "research, support"], whereItFails: ["long-horizon error compounding", "tool reliability"], whatToLearn: ["function-calling", "MCP", "evals", "memory", "browser-use", "sandboxing"], practicalProjects: ["coding agent that fixes failing tests", "research agent that produces source-graded reports"], interviewQuestions: ["What is the unit of progress for agent reliability?"], confidence: "sourced" },
  { id: "evals-playbook", baseArchId: "embeddings", name: "Evals + LLM-as-judge", learningPriority: "Must learn now", whyItMatters: "Eval discipline is the modern moat.", domains: ["software-engineering", "legal", "clinical-medicine"], workflowIds: ["wf-coding-agent", "wf-legal-research"], companyExamples: ["Braintrust", "Galileo", "Arize", "LangSmith"], whatItEnables: ["regression detection", "production monitoring"], whereItMakesMoney: ["any AI product paying for production reliability"], whereItFails: ["LLM-as-judge calibration", "test-set leakage"], whatToLearn: ["offline eval design", "human gold sets", "LLM-as-judge calibration"], practicalProjects: ["build a per-domain eval suite", "calibrate LLM-as-judge"], interviewQuestions: ["Where does LLM-as-judge fail catastrophically?"], confidence: "marketContext" },
  { id: "embeddings-playbook", baseArchId: "embeddings", name: "Embeddings &amp; vector search", learningPriority: "Must learn now", whyItMatters: "Substrate for RAG, search, recommendation, similarity and dedup.", domains: ["legal", "consumer-search", "customer-support"], workflowIds: ["wf-legal-research", "wf-aml-investigator"], companyExamples: ["Glean", "Pinecone", "Weaviate"], whatItEnables: ["semantic retrieval", "deduplication", "anomaly clustering"], whereItMakesMoney: ["search and retrieval"], whereItFails: ["high-dimensional similarity collapse"], whatToLearn: ["sentence/text/code embeddings", "ANN indexes (HNSW, IVF-PQ)", "rerankers", "hybrid retrieval"], practicalProjects: ["build a hybrid search system", "cluster customer-support tickets"], interviewQuestions: ["When does lexical retrieval beat embeddings?"], confidence: "marketContext" },
  { id: "finetune-playbook", baseArchId: "llm", name: "Fine-tuning &amp; LoRA / PEFT", learningPriority: "High value", whyItMatters: "Behaviour control beats prompting in production.", domains: ["customer-support", "legal", "clinical-medicine"], workflowIds: [], companyExamples: ["vendors with fine-tuning APIs"], whatItEnables: ["style / behaviour / format consistency", "domain accuracy"], whereItMakesMoney: ["high-volume vertical workflows"], whereItFails: ["catastrophic forgetting", "small-data overfitting"], whatToLearn: ["data curation", "LoRA / QLoRA / PEFT", "DPO / preference data"], practicalProjects: ["fine-tune a small model for a vertical task"], interviewQuestions: ["When is fine-tuning the right choice over RAG?"], confidence: "marketContext" },
  { id: "synthetic-data-playbook", baseArchId: "diffusion", name: "Synthetic data", learningPriority: "High value", whyItMatters: "Distillation, fine-tuning, robotics simulation and bio data scaling.", domains: ["robotics", "drug-discovery", "software-engineering"], workflowIds: [], companyExamples: ["Anthropic", "OpenAI", "Physical Intelligence", "Cradle"], whatItEnables: ["data scaling", "simulation", "preference distillation"], whereItMakesMoney: ["data-poor verticals"], whereItFails: ["model collapse", "diversity loss"], whatToLearn: ["distillation", "domain randomisation", "self-play", "active learning"], practicalProjects: ["distil a smaller model from a larger one"], interviewQuestions: ["What is the maximum synthetic-data ratio before quality degrades?"], confidence: "inferred" },
  { id: "diffusion-playbook", baseArchId: "diffusion", name: "Diffusion models", learningPriority: "High value", whyItMatters: "Same recipe across images, audio, video, molecules, robot actions.", domains: ["media-entertainment", "robotics", "drug-discovery"], workflowIds: ["wf-video-generation", "wf-protein-design", "wf-imitation-learning"], companyExamples: ["OpenAI Sora", "Runway", "Generate Biomedicines", "Physical Intelligence"], whatItEnables: ["high-fidelity generation", "robotics policies", "molecular design"], whereItMakesMoney: ["creative tools", "robotics", "drug discovery"], whereItFails: ["physics violations", "long-video coherence"], whatToLearn: ["DDPM math", "score-matching", "guidance", "latent diffusion"], practicalProjects: ["small-image diffusion from scratch", "diffusion policy on a robot task"], interviewQuestions: ["Why does the same diffusion recipe work across modalities?"], confidence: "sourced" },
  { id: "vla-playbook", baseArchId: "vla", name: "Vision-Language-Action models", learningPriority: "High value", whyItMatters: "Bridges internet-pretraining with embodied control.", domains: ["robotics"], workflowIds: ["wf-imitation-learning"], companyExamples: ["Google DeepMind RT-2", "Physical Intelligence", "Figure"], whatItEnables: ["language-conditioned skills", "cross-embodiment generalisation"], whereItMakesMoney: ["humanoids and warehouse robots"], whereItFails: ["robot data scarcity"], whatToLearn: ["multimodal models", "imitation learning", "diffusion policies"], practicalProjects: ["RT-X-style data ingestion"], interviewQuestions: ["What is the minimum data scale at which VLA models generalise?"], confidence: "sourced" },
  { id: "ts-transformer-playbook", baseArchId: "ts-transformer", name: "Time-series transformers + foundation forecasters", learningPriority: "High value", whyItMatters: "Finance, energy, weather, demand and anomaly are time-series first.", domains: ["quant-finance", "energy-grid", "climate-weather", "supply-chain"], workflowIds: ["wf-quant-research", "wf-renewable-forecast", "wf-neural-weather"], companyExamples: ["Numerai", "Octopus / Kraken", "Tomorrow.io"], whatItEnables: ["zero-shot forecasting", "multi-series modelling"], whereItMakesMoney: ["operations + trading"], whereItFails: ["regime shift", "leakage"], whatToLearn: ["PatchTST / iTransformer", "Chronos / TimesFM / Moirai", "honest backtesting"], practicalProjects: ["foundation forecaster vs ARIMA"], interviewQuestions: ["When does ARIMA beat a foundation forecaster?"], confidence: "marketContext" },
  { id: "graph-playbook", baseArchId: "graph-threat", name: "Graph models (fraud, biology, recsys)", learningPriority: "High value", whyItMatters: "Where structure is signal, GNNs win.", domains: ["fraud-detection", "drug-discovery", "consumer-search"], workflowIds: ["wf-fraud-detection", "wf-aml-investigator", "wf-protein-design"], companyExamples: ["Stripe", "Quantexa", "Generate Biomedicines"], whatItEnables: ["relational signals", "anti-fraud uplift"], whereItMakesMoney: ["fraud, AML, chemistry"], whereItFails: ["small graphs", "sparse signals"], whatToLearn: ["GCN / GraphSAGE / GAT", "graph DBs"], practicalProjects: ["fraud-graph features"], interviewQuestions: ["When are GNNs overkill?"], confidence: "marketContext" },
  { id: "gbdt-playbook", baseArchId: "gbdt", name: "Gradient boosted trees", learningPriority: "Must learn now", whyItMatters: "Production workhorse for tabular: fraud, credit, ranking.", domains: ["banking", "fraud-detection", "risk-management"], workflowIds: ["wf-fraud-detection"], companyExamples: ["Stripe", "FeatureSpace"], whatItEnables: ["fast training, robust to noise"], whereItMakesMoney: ["banking + fraud + ranking"], whereItFails: ["unstructured data"], whatToLearn: ["XGBoost / LightGBM / CatBoost", "feature engineering", "calibration"], practicalProjects: ["replace a neural baseline with a tuned GBDT"], interviewQuestions: ["Why does GBDT still win on tabular?"], confidence: "marketContext" },
  { id: "anomaly-playbook", baseArchId: "anomaly-detection", name: "Anomaly detection", learningPriority: "High value", whyItMatters: "Fraud, cyber, manufacturing QC, telemetry.", domains: ["fraud-detection", "cybersecurity", "manufacturing"], workflowIds: ["wf-fraud-detection", "wf-soc-triage", "wf-mfg-defect-detection"], companyExamples: ["Stripe", "CrowdStrike", "Cognex"], whatItEnables: ["catch what you have not labelled"], whereItMakesMoney: ["risk + ops"], whereItFails: ["false-positive rate"], whatToLearn: ["Isolation Forest", "autoencoders", "transformer anomaly", "calibration"], practicalProjects: ["telemetry anomaly detection"], interviewQuestions: ["Why is calibration the practical bottleneck?"], confidence: "marketContext" },
  { id: "rl-execution-playbook", baseArchId: "rl-execution", name: "RL for execution + control", learningPriority: "Domain-specific", whyItMatters: "Trading execution + grid dispatch + robotics control.", domains: ["trading", "energy-grid", "robotics"], workflowIds: ["wf-renewable-forecast", "wf-imitation-learning"], companyExamples: ["Citadel Securities", "Octopus Kraken"], whatItEnables: ["adaptive control under live feedback"], whereItMakesMoney: ["execution + dispatch"], whereItFails: ["sim-to-real", "non-stationarity"], whatToLearn: ["PPO / SAC", "offline RL"], practicalProjects: ["RL trader on a simulated order book"], interviewQuestions: ["When is RL overkill?"], confidence: "inferred" },
  { id: "neural-operators-playbook", baseArchId: "neural-operators", name: "Neural operators (FNO / DeepONet)", learningPriority: "Domain-specific", whyItMatters: "Fast PDE surrogates: weather, fluids, materials.", domains: ["climate-weather", "scientific-computing"], workflowIds: ["wf-neural-weather"], companyExamples: ["Google DeepMind", "NVIDIA Earth-2"], whatItEnables: ["resolution-independent surrogates"], whereItMakesMoney: ["weather + engineering"], whereItFails: ["distribution shift"], whatToLearn: ["FNO / DeepONet / PINNs", "spectral methods"], practicalProjects: ["FNO for a 2D PDE"], interviewQuestions: ["When does PINN beat FNO?"], confidence: "sourced" },
  { id: "sim-to-real-playbook", baseArchId: "sim-to-real", name: "Sim-to-real transfer", learningPriority: "Domain-specific", whyItMatters: "Without sim-to-real, robotics policies stay in the lab.", domains: ["robotics", "autonomous-vehicles"], workflowIds: ["wf-imitation-learning", "wf-av-perception"], companyExamples: ["NVIDIA Isaac", "Physical Intelligence", "Tesla"], whatItEnables: ["scale beyond real-robot data"], whereItMakesMoney: ["humanoids + AV"], whereItFails: ["contact-rich tasks"], whatToLearn: ["domain randomisation", "system identification"], practicalProjects: ["sim2real on a small manipulator"], interviewQuestions: ["What is the most-overlooked sim-real gap?"], confidence: "marketContext" },
  { id: "mcp-protocol-playbook", baseArchId: "tool-agents", name: "MCP / agent protocols", learningPriority: "Must learn now", whyItMatters: "Agent-to-agent and agent-to-tool standards are forming now.", domains: ["software-engineering", "enterprise-productivity"], workflowIds: ["wf-coding-agent"], companyExamples: ["Anthropic (MCP)", "OpenAI Operator"], whatItEnables: ["standardised tool integration"], whereItMakesMoney: ["wherever agents interoperate"], whereItFails: ["security model maturity"], whatToLearn: ["MCP", "tool descriptions", "agent identity / auth"], practicalProjects: ["build an MCP server"], interviewQuestions: ["What standard wins for agent interop?"], confidence: "forwardLooking" },
  { id: "moe-playbook", baseArchId: "llm", name: "Mixture-of-Experts (MoE)", learningPriority: "High value", whyItMatters: "Cost-efficient scaling for frontier inference.", domains: [], workflowIds: [], companyExamples: ["Mistral (Mixtral)", "DeepSeek", "Google Gemini reportedly"], whatItEnables: ["sparser compute per token"], whereItMakesMoney: ["frontier inference cost"], whereItFails: ["routing instability"], whatToLearn: ["expert routing", "load balancing"], practicalProjects: ["small MoE from scratch"], interviewQuestions: ["When does MoE break down?"], confidence: "inferred" },
  { id: "kv-cache-playbook", baseArchId: "llm", name: "KV-cache + inference engineering", learningPriority: "High value", whyItMatters: "Token economics live in the KV cache.", domains: [], workflowIds: [], companyExamples: ["vLLM", "TensorRT-LLM"], whatItEnables: ["batched inference", "long-context economics"], whereItMakesMoney: ["any AI product paying for inference"], whereItFails: ["context-window memory"], whatToLearn: ["KV cache layout", "paged attention", "speculative decoding", "quantisation"], practicalProjects: ["benchmark inference engines"], interviewQuestions: ["What part of inference cost surprises engineers most?"], confidence: "marketContext" },
  { id: "vector-db-playbook", baseArchId: "embeddings", name: "Vector databases", learningPriority: "High value", whyItMatters: "Underneath every RAG / search product.", domains: ["customer-support", "consumer-search", "legal"], workflowIds: ["wf-legal-research", "wf-aml-investigator"], companyExamples: ["Pinecone", "Weaviate", "pgvector"], whatItEnables: ["scalable retrieval"], whereItMakesMoney: ["enterprise search"], whereItFails: ["small data over-engineering"], whatToLearn: ["HNSW", "IVF-PQ", "hybrid search"], practicalProjects: ["benchmark vector DBs"], interviewQuestions: ["When is pgvector enough?"], confidence: "marketContext" },
  { id: "distributed-training-playbook", baseArchId: "llm", name: "Distributed training", learningPriority: "Domain-specific", whyItMatters: "Frontier-scale training is a systems problem.", domains: [], workflowIds: [], companyExamples: ["NVIDIA", "Anthropic", "OpenAI"], whatItEnables: ["100K-GPU runs"], whereItMakesMoney: ["frontier labs only"], whereItFails: ["fault-tolerance"], whatToLearn: ["DDP / FSDP / ZeRO", "pipeline / tensor / expert parallelism"], practicalProjects: ["fault-tolerant training run"], interviewQuestions: ["What single training failure mode dominates?"], confidence: "marketContext" },
  { id: "physics-informed-playbook", baseArchId: "pinn", name: "Physics-informed networks", learningPriority: "Research frontier", whyItMatters: "Inverse problems and data-sparse science.", domains: ["physics", "scientific-computing"], workflowIds: [], companyExamples: ["NVIDIA Modulus"], whatItEnables: ["data-sparse modelling"], whereItMakesMoney: ["specialty engineering"], whereItFails: ["training stability"], whatToLearn: ["PINN tricks"], practicalProjects: ["PINN for a known PDE"], interviewQuestions: ["When does PINN actually win?"], confidence: "sourced" },
  { id: "domain-fm-playbook", baseArchId: "domain-fm", name: "Domain foundation models", learningPriority: "High value", whyItMatters: "Vertical foundation models concentrate value where data + workflow are domain-specific.", domains: ["clinical-medicine", "drug-discovery", "robotics"], workflowIds: [], companyExamples: ["Med-PaLM", "BioNeMo (NVIDIA)", "Cosmos (NVIDIA)"], whatItEnables: ["vocabulary, evals, products"], whereItMakesMoney: ["regulated verticals"], whereItFails: ["data scarcity"], whatToLearn: ["data curation", "vertical evals"], practicalProjects: ["fine-tune a small model on a domain"], interviewQuestions: ["When does domain pretraining beat fine-tuning + RAG?"], confidence: "inferred" },
  { id: "speech-playbook", baseArchId: "asr-tts", name: "Speech (ASR / TTS)", learningPriority: "High value", whyItMatters: "Clinical scribes, voice agents, dubbing, accessibility.", domains: ["clinical-documentation", "customer-support", "media-entertainment"], workflowIds: ["wf-clinical-scribe", "wf-citizen-case-management"], companyExamples: ["ElevenLabs", "OpenAI Voice", "Whisper"], whatItEnables: ["voice agents", "clinical scribes"], whereItMakesMoney: ["clinical docs + media"], whereItFails: ["specialty vocab"], whatToLearn: ["Whisper", "ElevenLabs API", "diarisation"], practicalProjects: ["build a voice agent"], interviewQuestions: ["What is the smallest voice-agent stack that ships?"], confidence: "marketContext" },
  { id: "ocr-docai-playbook", baseArchId: "ocr-docai", name: "OCR &amp; document AI", learningPriority: "High value", whyItMatters: "Banking, insurance, audit, legal, healthcare admin.", domains: ["banking", "insurance", "legal", "clinical-medicine"], workflowIds: ["wf-prior-authorization", "wf-aml-investigator", "wf-citizen-case-management", "wf-contract-review"], companyExamples: ["AppZen", "Trullion", "Tractable"], whatItEnables: ["forms + PDFs into structured data"], whereItMakesMoney: ["regulated paperwork"], whereItFails: ["handwriting", "novel layouts"], whatToLearn: ["layout-aware models", "table extraction"], practicalProjects: ["invoice extraction pipeline"], interviewQuestions: ["Why is OCR not solved on production documents?"], confidence: "marketContext" },
  { id: "recsys-playbook", baseArchId: "recsys", name: "Recommendation systems", learningPriority: "Domain-specific", whyItMatters: "TikTok / YouTube / Netflix / Spotify all run on it.", domains: ["consumer-search", "media-entertainment"], workflowIds: [], companyExamples: ["TikTok", "Netflix", "Spotify"], whatItEnables: ["consumer attention at scale"], whereItMakesMoney: ["ads + commerce"], whereItFails: ["objective gaming"], whatToLearn: ["two-tower models", "ranking", "online evaluation"], practicalProjects: ["small recsys on MovieLens"], interviewQuestions: ["What objective is your recsys really optimising?"], confidence: "marketContext" },
  { id: "world-models-playbook", baseArchId: "world-models", name: "World models", learningPriority: "Research frontier", whyItMatters: "Robotics / AV / planning under uncertainty.", domains: ["robotics", "autonomous-vehicles"], workflowIds: ["wf-imitation-learning", "wf-av-perception"], companyExamples: ["Google DeepMind", "Tesla", "NVIDIA Cosmos"], whatItEnables: ["imagination-based planning"], whereItMakesMoney: ["robotics infra (early)"], whereItFails: ["compounding error"], whatToLearn: ["video diffusion", "world-model recipes"], practicalProjects: ["small world-model demo"], interviewQuestions: ["When does a world model beat a policy?"], confidence: "forwardLooking" },
  { id: "active-learning-playbook", baseArchId: "bayesian-opt", name: "Active learning + Bayesian optimisation", learningPriority: "High value", whyItMatters: "Where experiments are expensive (bio, materials), this is the ROI lever.", domains: ["drug-discovery", "materials-science", "chemistry"], workflowIds: ["wf-protein-design", "wf-virtual-screening"], companyExamples: ["Cradle", "Generate Biomedicines"], whatItEnables: ["sample-efficient experimentation"], whereItMakesMoney: ["biotech, materials"], whereItFails: ["high-dimensional search"], whatToLearn: ["BO basics", "GP / surrogate models"], practicalProjects: ["BO on a small benchmark"], interviewQuestions: ["When does random search beat BO?"], confidence: "marketContext" },
  { id: "interpretability-playbook", baseArchId: "llm", name: "Mechanistic interpretability", learningPriority: "Research frontier", whyItMatters: "Reasoning trace + safety + regulator interest.", domains: [], workflowIds: [], companyExamples: ["Anthropic", "Google DeepMind"], whatItEnables: ["debugging models", "safety guarantees"], whereItMakesMoney: ["safety + audit infra"], whereItFails: ["compute cost"], whatToLearn: ["circuit analysis", "feature attribution", "sparse autoencoders"], practicalProjects: ["replicate a small mech-interp result"], interviewQuestions: ["What does mech-interp need to scale?"], confidence: "forwardLooking" },
  { id: "observability-playbook", baseArchId: "embeddings", name: "AI observability + monitoring", learningPriority: "Must learn now", whyItMatters: "You cannot run AI in production without it.", domains: [], workflowIds: ["wf-coding-agent"], companyExamples: ["Arize", "Galileo", "LangSmith", "Datadog"], whatItEnables: ["drift detection", "regression alerts"], whereItMakesMoney: ["AI infra"], whereItFails: ["sampling biases"], whatToLearn: ["traces", "evals", "drift metrics"], practicalProjects: ["build an LLM trace viewer"], interviewQuestions: ["What is the smallest credible AI observability stack?"], confidence: "marketContext" }
];

/* ============================================
   AI_LEARNING_ROADMAP &mdash; practical study paths
   ============================================ */
var AI_LEARNING_ROADMAP = [
  { id: "path-founder", title: "Founder / operator path", goal: "Find a real workflow, build a vertical AI product, sell it.", modules: [
    { name: "RAG &amp; document workflows", whyHighValue: "Most enterprise pain is text + policy + retrieval.", learn: ["embeddings", "chunking", "rerankers", "evals", "permissioning", "citation-checking"], projects: ["legal research bot with verified citations", "RAG over enterprise docs with role-based access"], domainsUnlocked: ["legal", "customer-support", "enterprise-productivity", "research-workflows"], companyExamples: ["Harvey", "Glean"], opportunityExamples: ["opp-legal-citation-verification", "opp-prior-auth-specialty"] },
    { name: "Agents that ship", whyHighValue: "Agents are the next product layer; verification is the moat.", learn: ["function-calling", "MCP", "evals", "memory", "browser-use", "sandboxing"], projects: ["coding agent with sandboxed tests", "research agent with citations"], domainsUnlocked: ["software-engineering", "research-workflows"], companyExamples: ["Cursor", "Anthropic Claude Code"], opportunityExamples: ["opp-swe-vertical-agents"] },
    { name: "Vertical workflow integration", whyHighValue: "Distribution + integration depth wins.", learn: ["industry data formats", "regulator constraints", "buyer psychology"], projects: ["one PA submission flow end-to-end"], domainsUnlocked: ["healthcare-admin", "legal", "insurance"], companyExamples: ["Cohere Health", "Robin AI"], opportunityExamples: ["opp-prior-auth-specialty", "opp-legal-specialty"] },
    { name: "Eval discipline", whyHighValue: "If you cannot measure it, customers cannot trust it.", learn: ["offline + online eval", "LLM-as-judge calibration", "drift detection"], projects: ["per-domain eval harness"], domainsUnlocked: [], companyExamples: ["Braintrust", "Arize"], opportunityExamples: [] }
  ]},
  { id: "path-engineer", title: "AI engineer path", goal: "Become dangerous at building production AI systems.", modules: [
    { name: "LLM serving + economics", whyHighValue: "You cannot reason about AI without inference economics.", learn: ["KV cache", "batching", "speculative decoding", "vLLM"], projects: ["benchmark inference engines"], domainsUnlocked: [], companyExamples: ["NVIDIA", "vLLM"], opportunityExamples: [] },
    { name: "RAG + retrieval engineering", whyHighValue: "Substrate of every grounded product.", learn: ["embeddings", "ANN indexes", "rerankers", "hybrid retrieval"], projects: ["hybrid retrieval system"], domainsUnlocked: ["legal", "customer-support"], companyExamples: ["Harvey", "Glean"], opportunityExamples: ["opp-legal-citation-verification"] },
    { name: "Fine-tuning + LoRA", whyHighValue: "Behaviour control + cost reduction.", learn: ["LoRA / QLoRA", "DPO / preference data", "data curation"], projects: ["fine-tune a small model for a vertical"], domainsUnlocked: [], companyExamples: ["Anthropic", "Mistral"], opportunityExamples: [] },
    { name: "Agents + tool use", whyHighValue: "Where capability becomes product.", learn: ["function-calling", "MCP", "evals", "memory", "sandboxing"], projects: ["coding agent with tests"], domainsUnlocked: ["software-engineering"], companyExamples: ["Cursor"], opportunityExamples: ["opp-swe-vertical-agents"] },
    { name: "Observability + safety", whyHighValue: "What separates demos from products.", learn: ["traces", "drift", "LLM-as-judge", "guardrails"], projects: ["observability dashboard"], domainsUnlocked: [], companyExamples: ["Arize", "Galileo"], opportunityExamples: [] }
  ]},
  { id: "path-researcher", title: "Applied AI researcher path", goal: "Publish + ship at the frontier of an industry.", modules: [
    { name: "Math of AI", whyHighValue: "Foundation for honest research.", learn: ["loss landscapes", "implicit bias of SGD", "scaling laws"], projects: ["replicate a scaling-law paper at small scale"], domainsUnlocked: [], companyExamples: [], opportunityExamples: [] },
    { name: "Domain pretraining + evals", whyHighValue: "Vertical foundation models are the long game.", learn: ["data curation", "domain evals", "RLAIF"], projects: ["small vertical foundation model"], domainsUnlocked: ["clinical-medicine", "drug-discovery"], companyExamples: ["Med-PaLM", "BioNeMo"], opportunityExamples: [] },
    { name: "Reasoning + RL post-training", whyHighValue: "Frontier of capability.", learn: ["RLHF", "RLAIF", "process supervision"], projects: ["small process-supervision pipeline"], domainsUnlocked: [], companyExamples: ["OpenAI", "Anthropic"], opportunityExamples: [] }
  ]},
  { id: "path-investor", title: "AI investor path", goal: "Underwrite category bets and avoid feature-level traps.", modules: [
    { name: "Market structure + supply chain", whyHighValue: "Capex thesis depends on it.", learn: ["NVIDIA / TSMC / HBM / CoWoS", "hyperscaler ASIC plays", "neoclouds"], projects: ["map flows of value across the stack"], domainsUnlocked: [], companyExamples: ["NVIDIA", "CoreWeave"], opportunityExamples: [] },
    { name: "Domain workflows + buyers", whyHighValue: "Where AI actually monetises.", learn: ["industry workflows", "buyer psychology", "regulator constraints"], projects: ["build founder dossiers per domain"], domainsUnlocked: ["clinical-medicine", "banking", "legal"], companyExamples: [], opportunityExamples: [] },
    { name: "Bottlenecks + risks", whyHighValue: "Pricing risk is the alpha.", learn: ["bottleneck taxonomies", "evaluation debt", "MRM"], projects: ["bottleneck dossier per portfolio thesis"], domainsUnlocked: [], companyExamples: [], opportunityExamples: [] }
  ]},
  { id: "path-robotics", title: "Robotics path", goal: "Build deployable robot policies + data infra.", modules: [
    { name: "Imitation + diffusion policies", whyHighValue: "Modern robot learning recipe.", learn: ["imitation learning", "diffusion policies", "VLA"], projects: ["RT-X-style ingestion"], domainsUnlocked: ["robotics"], companyExamples: ["Physical Intelligence", "Figure"], opportunityExamples: ["opp-robot-data-infrastructure"] },
    { name: "Sim-to-real", whyHighValue: "Without it, policies stay in the lab.", learn: ["domain randomisation", "system identification"], projects: ["sim2real on small manipulator"], domainsUnlocked: ["robotics", "autonomous-vehicles"], companyExamples: ["NVIDIA Isaac"], opportunityExamples: [] },
    { name: "Robot data infrastructure", whyHighValue: "Pick-and-shovel for the humanoid era.", learn: ["teleop tools", "data formats", "fleet learning"], projects: ["build a teleop SDK"], domainsUnlocked: ["robotics"], companyExamples: ["Physical Intelligence"], opportunityExamples: ["opp-robot-data-infrastructure"] }
  ]},
  { id: "path-bio", title: "Bio / healthcare AI path", goal: "Ship AI products in regulated bio + clinical settings.", modules: [
    { name: "Generative biology basics", whyHighValue: "Drug discovery is the most-watched applied-AI category.", learn: ["protein language models", "diffusion-bio", "molecular GNNs", "active learning"], projects: ["protein-design playground"], domainsUnlocked: ["drug-discovery", "protein-design"], companyExamples: ["Generate Biomedicines"], opportunityExamples: ["opp-bio-eval-harness"] },
    { name: "Clinical AI + regulation", whyHighValue: "Validation, liability and EHR are the gates.", learn: ["FDA SaMD", "clinical evaluation", "HIPAA", "EHR integration"], projects: ["spec-grade evaluation plan"], domainsUnlocked: ["clinical-medicine", "radiology", "pathology"], companyExamples: ["Aidoc", "Paige"], opportunityExamples: ["opp-radiology-report-copilot"] },
    { name: "Lab automation + data infra", whyHighValue: "Closed-loop labs are the future of generative biology.", learn: ["lab robotics", "DBTL loops", "data infra"], projects: ["DBTL-loop demo"], domainsUnlocked: ["materials-science", "drug-discovery"], companyExamples: ["Cradle"], opportunityExamples: ["opp-materials-autonomous-lab"] }
  ]},
  { id: "path-finance", title: "Quant / finance AI path", goal: "Run honest ML in financial markets.", modules: [
    { name: "Time-series + GBDT", whyHighValue: "The actual workhorses.", learn: ["GBDT", "time-series transformers", "honest backtesting"], projects: ["foundation forecaster vs ARIMA"], domainsUnlocked: ["quant-finance", "trading"], companyExamples: ["Two Sigma", "Numerai"], opportunityExamples: ["opp-quant-eval-tooling"] },
    { name: "Execution + RL", whyHighValue: "Durable alpha.", learn: ["microstructure", "RL execution"], projects: ["RL execution sim"], domainsUnlocked: ["trading"], companyExamples: ["Citadel Securities"], opportunityExamples: [] },
    { name: "Compliance + AML", whyHighValue: "Regulator-blessed AI is a moat.", learn: ["BSA / AML rules", "MRM (SR 11-7)"], projects: ["AML-graph features"], domainsUnlocked: ["banking"], companyExamples: ["ComplyAdvantage"], opportunityExamples: ["opp-aml-investigator-copilot"] }
  ]},
  { id: "path-enterprise", title: "Enterprise AI path", goal: "Sell durable AI inside large enterprises.", modules: [
    { name: "Permissioned RAG + governance", whyHighValue: "Enterprises buy what they can audit.", learn: ["permissioning", "data lineage", "governance"], projects: ["permissioned enterprise RAG"], domainsUnlocked: ["enterprise-productivity"], companyExamples: ["Glean", "Microsoft Copilot"], opportunityExamples: [] },
    { name: "Agent reliability + observability", whyHighValue: "Operations need stability, not novelty.", learn: ["agent evals", "drift", "guardrails"], projects: ["agent observability dashboard"], domainsUnlocked: ["enterprise-productivity", "customer-support"], companyExamples: ["Arize", "Galileo"], opportunityExamples: [] }
  ]},
  { id: "path-infrastructure", title: "AI infrastructure path", goal: "Run frontier-scale training and inference.", modules: [
    { name: "Inference engineering", whyHighValue: "Where token economics live.", learn: ["KV cache", "vLLM / TGI / TensorRT-LLM", "speculative decoding"], projects: ["benchmark inference engines"], domainsUnlocked: [], companyExamples: ["NVIDIA"], opportunityExamples: [] },
    { name: "Distributed training", whyHighValue: "Frontier scale is a systems problem.", learn: ["FSDP / ZeRO", "pipeline / tensor / expert parallelism"], projects: ["fault-tolerant training run"], domainsUnlocked: [], companyExamples: ["NVIDIA", "Anthropic"], opportunityExamples: [] },
    { name: "Compute supply chain", whyHighValue: "Cross-train into infra investing.", learn: ["NVIDIA / TSMC / HBM / CoWoS"], projects: ["map of compute supply chain"], domainsUnlocked: [], companyExamples: ["NVIDIA"], opportunityExamples: [] }
  ]},
  { id: "path-interviewer", title: "Interviewer / journalist path", goal: "Ask questions that signal mastery.", modules: [
    { name: "Mental models", whyHighValue: "Mental models compound.", learn: ["scaling laws", "inference economics", "data moats", "supply chain"], projects: ["build an interview brief per company"], domainsUnlocked: [], companyExamples: ["NVIDIA", "OpenAI"], opportunityExamples: [] },
    { name: "Sourcing + verification", whyHighValue: "Hype dies under follow-ups.", learn: ["source ladder", "evidence levels", "claim audits"], projects: ["audit five public claims"], domainsUnlocked: [], companyExamples: [], opportunityExamples: [] },
    { name: "Civilizational lens", whyHighValue: "Best interviews zoom in and out.", learn: ["history of compute", "labour displacement", "power and governance"], projects: ["civilizational question pack"], domainsUnlocked: [], companyExamples: [], opportunityExamples: [] }
  ]}
];

/* ============================================
   NEEDS_VERIFICATION_QUEUE — claims to chase
   ============================================
   Each entry pins a high-risk claim somewhere in this dataset.
   Use this list to drive the next round of source-hunting.
   ============================================ */

/* ============================================
   RESEARCH_STATUS — meta-audit pointer
   ============================================
   Where the atlas is strong, where it is weak, what to source-hunt next.
   ============================================ */
var RESEARCH_STATUS = {
  lastAudit: "2026-05-07",
  strongestAreas: [
    "Domain framing (52 domains with thesis, reality check, common misunderstanding)",
    "Workflow-to-money map (43 workflows linked 1:1 to buyer / pain / revenue rows)",
    "Confidence taxonomy applied across every entry (sourced / inferred / marketContext / forwardLooking / needsVerification)",
    "Learning roadmap (10 study paths with concrete projects + opportunities)",
    "Interview question room (7 sets of source-graded mastery questions)",
    "Source library (100+ canonical papers, regulators, datasets, benchmarks, model cards)"
  ],
  weakestAreas: [
    "Specific company architecture claims (Tesla, Figure, Boston Dynamics, Tempus, BlackRock &mdash; internal stacks rarely fully disclosed)",
    "YC / a16z / China analogue placeholders across founder dossiers (still flagged for verification per dossier)",
    "Vendor-specific deployment + revenue claims (most softened to qualitative ranges rather than specific %)",
    "Regulated-domain magnitude claims (clinical efficacy %, quant bps savings, mfg PdM ROI) &mdash; kept qualitative until each can be cited"
  ],
  nextSourceTargets: [
    "Tesla AI Day refreshed transcripts (current source dates from 2022)",
    "FDA AI/ML enabled medical devices list (refresh quarterly)",
    "YC public batch directory (verify per founder-dossier ycCompanies array)",
    "a16z published theses (American Dynamism / Bio / Enterprise / Consumer)",
    "SemiAnalysis recent posts (especially capacity / interconnect)",
    "Stanford AI Index annual report",
    "MLPerf inference + training results",
    "Frontier-lab model cards (Anthropic / OpenAI / Google DeepMind / Meta / DeepSeek / Cohere)",
    "Official company technical blogs (DeepMind, Anthropic, OpenAI, Meta AI, NVIDIA)"
  ],
  notes: [
    "Run window.APPLIED_DEV_CHECK = true or load with ?devcheck=1 to trigger devCheckIntegrity",
    "confidence:sourced + empty sourceIds is treated as a hard error by the dev check",
    "Architecture entries without a canonical paper (currently: multi-agent only) keep needsVerification rather than overclaiming"
  ]
};

var NEEDS_VERIFICATION_QUEUE = [
  /* Resolved with primary sources. The corresponding entry has been linked via sourceIds.
     Kept here so the audit trail is visible (resolution = source id). */
  { id: "nv-tesla-architecture", claim: "Tesla FSD internal architecture (end-to-end vs modular, world-model use).", entityRef: "COMPANY_AI_STRATEGIES.tesla-ai", riskLevel: "high", status: "linked-needs-update", suggestedSource: "src-tesla-ai-day", note: "Source linked but content predates current FSD; treat any specific architectural claim as needsVerification until refreshed by Tesla." },
  { id: "nv-tempus-fm", claim: "Tempus 'clinical foundation model' attribution.", entityRef: "COMPANY_AI_STRATEGIES.tempus", riskLevel: "medium", status: "linked-needs-update", suggestedSource: "src-tempus-s1", note: "S-1 / 10-K filings linked; FM-vs-fine-tune claim still needs Tempus engineering disclosure." },
  { id: "nv-blackrock-aladdin-copilot", claim: "Aladdin Copilot LLM stack and customer base.", entityRef: "COMPANY_AI_STRATEGIES.blackrock-aladdin", riskLevel: "medium", status: "linked-needs-update", suggestedSource: "src-aladdin-ai", note: "Vendor page linked; model partner vs in-house still undisclosed." },
  { id: "nv-sepsis-shift", claim: "Sepsis-model performance varies across sites.", entityRef: "INDUSTRY_WORKFLOWS.wf-sepsis-early-warning, BOTTLENECK_DOSSIERS.bn-clinical-eval-portability", riskLevel: "high", status: "resolved", suggestedSource: "src-lstm-sepsis-wong", note: "Wong et al. JAMA IM 2021 cited; covers the headline claim." },
  { id: "nv-edu-aedt", claim: "NYC AEDT enforcement scope + bias-audit form.", entityRef: "INDUSTRY_WORKFLOWS.wf-hr-screening, FOUNDER_OPPORTUNITIES.opp-recruit-ranking-explainable", riskLevel: "low", status: "resolved", suggestedSource: "src-nyc-aedt", note: "DCWP guidance linked." },
  { id: "nv-vuln-discovery-aixcc", claim: "AI vuln-discovery parity with human researchers.", entityRef: "INDUSTRY_WORKFLOWS.wf-vuln-discovery, FOUNDER_OPPORTUNITIES.opp-vuln-research-platform", riskLevel: "high", status: "linked-needs-update", suggestedSource: "src-darpa-aixcc", note: "Programme linked; per-result parity claims still needsVerification per result release." },
  { id: "nv-quant-execution-claims", claim: "Specific bps savings from execution algos.", entityRef: "INDUSTRY_WORKFLOWS.wf-execution-algo, FOUNDER_OPPORTUNITIES.opp-best-ex-evidence-tool", riskLevel: "medium", status: "soften", suggestedSource: "src-mifid-ii-best-ex", note: "MiFID II framework cited as buyer driver; do not quote specific bps unless from a primary venue or paper." },
  { id: "nv-rwd-trial-design", claim: "RWD-driven trial-design impact magnitudes.", entityRef: "FOUNDER_OPPORTUNITIES.opp-rwd-trial-design", riskLevel: "high", status: "soften", suggestedSource: "FDA RWE guidance (Dec 2023)", note: "Avoid quoting recruitment-time savings unless tied to a specific sponsor disclosure." },
  { id: "nv-clinical-shift", claim: "Cross-site degradation magnitude on radiology / dermatology AI.", entityRef: "BOTTLENECK_DOSSIERS.bn-radiology-shift, bn-clinical-eval-portability", riskLevel: "medium", status: "soften", suggestedSource: "Multiple re-validation papers (e.g., radiology AI external validation reviews)", note: "State qualitatively (significant) rather than with specific %." },
  { id: "nv-cowos-capacity", claim: "TSMC CoWoS capacity numbers.", entityRef: "BOTTLENECK_DOSSIERS.bn-domestic-fab-capacity", riskLevel: "medium", status: "linked-needs-update", suggestedSource: "src-tsmc-capex", note: "TSMC IR pages linked; refresh after each quarterly call." },
  { id: "nv-data-center-power", claim: "Data-centre interconnection lead times.", entityRef: "BOTTLENECK_DOSSIERS.bn-data-center-power", riskLevel: "medium", status: "soften", suggestedSource: "EPRI / DOE white papers + utility-specific filings", note: "Quote regional rather than universal figures, with citation." },
  { id: "nv-grid-vpp-roi", claim: "VPP / DERMS revenue / dispatch claims.", entityRef: "INDUSTRY_WORKFLOWS.wf-grid-optimization", riskLevel: "medium", status: "linked-needs-update", suggestedSource: "src-ferc-2222", note: "Wholesale-market enabling regulation linked; avoid specific revenue claims without operator disclosure." },
  { id: "nv-soc-deflection", claim: "SOC alert auto-deflection rates (70-90%).", entityRef: "FOUNDER_OPPORTUNITIES.opp-soc-noise-reducer", riskLevel: "medium", status: "soften", suggestedSource: "Mandiant / Forrester research", note: "Soften from specific percentage range to 'meaningful reduction with vendor variance'." },
  { id: "nv-mfg-pdm-uptime", claim: "Predictive-maintenance ROI % claims.", entityRef: "INDUSTRY_WORKFLOWS.wf-predictive-maintenance, FOUNDER_OPPORTUNITIES.opp-mfg-edge-ai", riskLevel: "medium", status: "soften", suggestedSource: "Augury / Uptake / GE Vernova case studies", note: "State qualitatively unless customer reference is verifiable." },
  { id: "nv-tcga-pathology", claim: "Pathology FM training-data attribution (UNI / Virchow / GigaPath).", entityRef: "INDUSTRY_WORKFLOWS.wf-pathology-slide-analysis", riskLevel: "medium", status: "open", suggestedSource: "Original FM papers + institutional dataset notes", note: "Avoid attributing FM training corpus without paper-level citation." },
  { id: "nv-cohere-financials", claim: "Cohere sovereign-AI / enterprise deployment scale.", entityRef: "COMPANY_AI_STRATEGIES.cohere", riskLevel: "medium", status: "open", suggestedSource: "Cohere customer announcements", note: "Pin to specific named customers; soften scale claims otherwise." },
  { id: "nv-sora-video-claims", claim: "Generative-video model capability comparisons (Sora / Veo / Gen-3).", entityRef: "COMPANY_AI_STRATEGIES.openai, runway, google-deepmind", riskLevel: "low", status: "open", suggestedSource: "Vendor model cards + community video benchmarks", note: "Refresh each release cycle." },
  /* Standing-policy placeholders — flagged across many founder dossiers, low individual risk */
  { id: "nv-yc-analogues", claim: "YC analogue lists are placeholder values.", entityRef: "FOUNDER_OPPORTUNITIES.*.existingValidation.ycCompanies", riskLevel: "low", status: "open", suggestedSource: "YC public batch directory + each company's site", note: "Replace placeholders with verified handles per dossier." },
  { id: "nv-a16z-theses", claim: "a16z thesis references are placeholder values.", entityRef: "FOUNDER_OPPORTUNITIES.*.existingValidation.a16zRelevantTheses", riskLevel: "low", status: "open", suggestedSource: "a16z published theses (American Dynamism / Bio / Enterprise / Consumer)", note: "Cite specific posts where used." },
  { id: "nv-china-analogues", claim: "China analogue mappings are placeholder values.", entityRef: "FOUNDER_OPPORTUNITIES.*.existingValidation.chinaAnalogues", riskLevel: "low", status: "open", suggestedSource: "Equal Ocean / 36Kr / TechNode coverage; CB Insights China", note: "Match by use case rather than generic mention." }
];

/* ============================================
   APPLIED AI ATLAS AUDIT SUMMARY (Phase 2.A + brutal review pass)
   ============================================
   Live counts (sharper, not bigger):
   Domains:                  52
   Architectures:            38
   Domain questions:         126
   Mastery questions:        154 (in GREAT_AI_QUESTIONS; combined with domain Qs = 280)
   Papers:                   45
   Industry workflows:       43 stepwise (down from 50 after brutal review; cut sub-features
                              and overlapping workflows)
   Workflow-to-money maps:   43 buyer-pain-architecture-revenue rows (1:1 with workflows)
   Founder opportunities:    41 dossiers (down from 51; cut generic / forward-looking /
                              capital-intensive / overlapping entries)
   Bottleneck dossiers:      32 domain-specific (down from 40; cut overlapping or
                              market-context-only entries)
   Company strategy profiles:40 (down from 50; cut overlapping and verification-heavy
                              profiles)
   Architecture playbook:    29 entries with learning-priority taxonomy
   Learning paths:           10 (founder, engineer, researcher, investor, robotics, bio,
                              finance, enterprise, infrastructure, interviewer)
   Interview question sets:  7 (Jensen, frontier-lab CEO, AI researcher, founder/operator,
                              AI investor, civilizational, domain expert)
   Source library entries:   82 (74 sourced, 5 needsVerification on vendor disclosures
                              that may shift, plus mixed; canonical papers, regulators,
                              datasets, benchmarks, model cards)
   Verification queue:       20 entries (status fields: 2 resolved, 6 linked-needs-
                              update, 6 soften, 6 open)
   Dev integrity check:      JS function devCheckIntegrity() runs on ?devcheck=1; it
                              verifies sourceIds resolve to SOURCE_LIBRARY or
                              DOMAIN_PAPERS, that domain / arch / workflow / opp /
                              bottleneck refs exist, and that confidence:sourced does
                              not coexist with empty or needs-verification sourceIds.

   Brutal review pass (this commit):
   - Removed ~17% across the data-heavy arrays (workflows, money map, opps, bottlenecks,
     companies)
   - Cuts skewed toward: generic entries that didn't teach a real mental model;
     overlap with stronger entries; forward-looking entries with weak founder paths;
     capital-intensive entries beyond a small team; market-context-only bottlenecks.
   - Promoted shaky-claim entries to needsVerification: tesla-ai (FSD architecture),
     blackrock-aladdin (Aladdin Copilot specifics), tempus (clinical FM attribution),
     boston-dynamics (AI policy depth).
   - Normalised confidence taxonomy: replaced legacy 'context' value with 'marketContext'
     across 164 entries to match the documented taxonomy.

   Highest-risk surviving sections:
     - Specific company architecture claims (each is confidence-flagged)
     - Clinical efficacy + reimbursement claims (sepsis early-warning, site portability)
     - Quant-execution savings figures (bps; framed loosely)
     - Robotics policy stacks (Figure / Boston Dynamics / Skild AI: mostly inferred)
     - Sovereign-AI claims (DeepSeek)
     - YC / a16z / China analogue placeholders (still flagged needsVerification)

   Confidence taxonomy:
     sourced            paper / public dataset / regulator / vendor disclosure
     inferred           multi-source consensus
     marketContext      industry-known dynamics (formerly 'context')
     forwardLooking     roadmap signal, not yet shipped
     needsVerification  placeholder, source-hunting required

   Suggested next updates:
     - Replace each NEEDS_VERIFICATION_QUEUE entry with at least one cited URL
     - Re-source Tesla / BlackRock / Tempus / Boston Dynamics architecture claims
       directly from primary disclosures
     - Add per-region depth where there is real signal (India fintech, China bio,
       EU sovereign), but only with direct sources
     - Avoid expansion until each surviving entry has a working source
*/




