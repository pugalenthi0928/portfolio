/* ============================================
   APPLICATIONS LAYER — Deep-Dive Data
   ============================================
   This is a strategic map of the AI applications layer, not a
   vendor catalogue. Industry cards, agent architectures,
   selection matrices and calculators are illustrative tools for
   product builders, operators and investors. Specific products
   are mentioned only as concrete examples; vendor claims are
   labelled where used. Anchored in operator-grade sources:
   official product docs, Stanford AI Index, Microsoft Work
   Trend Index, NBER / academic productivity studies, and
   credible operator playbooks.
   ============================================ */

/* Five overview pill-cards */
var APPS_TOPICS = [
  {
    id: 'patterns', label: 'Application patterns', tab: 'patterns',
    short: 'Copilot · autopilot · agent · RAG · document · workflow · decision-support · creative · search · operating layer.',
    long: 'Ten canonical shapes of AI product. Most real applications are one of these or a composition. Understanding the shape comes before picking the model.'
  },
  {
    id: 'value', label: 'Value levers', tab: 'value',
    short: 'Speed, cost, quality, scale, access, revenue, risk, learning.',
    long: 'AI applications create value through one or more of eight levers. If a product cannot point at a clear lever, it is not yet a product.'
  },
  {
    id: 'agents', label: 'Useful agents', tab: 'agents',
    short: 'Agents become useful when constrained, tool-connected, observable, and integrated.',
    long: 'Most useful agents are not autonomous employees. They are supervised systems that automate bounded work with permissions, evaluation and rollback.'
  },
  {
    id: 'building', label: 'Building & selection', tab: 'building',
    short: 'Pick the right workflow. Connect the right context. Measure the right outcome.',
    long: 'A practical scoring matrix, ten architecture blueprints, a 12-step strategy playbook and the moats that make AI products defensible.'
  },
  {
    id: 'trust', label: 'Trust, metrics, ROI', tab: 'trust',
    short: 'Trust + governance + metrics decide whether the app survives in the enterprise.',
    long: 'Enterprise adoption blockers, risks + controls, the metrics framework, the diagnostic table and the cost-per-successful-outcome lens that matters.'
  }
];

/* Top-of-section briefing — eight punchy truths */
var APPS_INTEL_SUMMARY = [
  { h: 'The model is not the application.',                                      d: 'The application is model + workflow + data + UX + integration + evaluation. Pick the model after you have designed the system.' },
  { h: 'The best AI apps complete valuable work, not just answer questions.',     d: 'Drafting an email is not the job. Sending the right email to the right lead, logged in CRM, is the job.' },
  { h: 'AI value shows up as speed, quality, cost, personalisation or decision support.', d: 'If a product cannot point at one of these levers, it is not yet a product — it is a feature waiting for a use case.' },
  { h: 'The most durable AI apps are workflow-native, not chatbot-only.',          d: 'A great chatbot inside an HR app loses to a great HR app with a chatbot inside it.' },
  { h: 'Agents become useful when they are constrained, tool-connected and observable.', d: 'Bounded goals, scoped permissions, real evaluations, audit logs, rollback. The agents that ship are supervised systems, not autonomous employees.' },
  { h: 'Vertical AI can beat generic assistants when it owns the workflow.',       d: 'Domain data, compliance logic, integrations and distribution all compound. Generic assistants cannot copy distribution + trust.' },
  { h: 'The hardest part of AI apps is rarely the model.',                          d: 'It is trust, integration, adoption, evaluation and change management. The model is one engineer-month; the rest is everything.' },
  { h: 'The winning products combine models, tools, memory, retrieval, review, and domain UX.', d: 'No single technique wins. The product that composes them with discipline wins.' }
];

/* Visual flow: user problem to outcome (and back) */
var APPS_FLOW = [
  { id: 'problem',  h: 'User problem',         d: 'A real, recurring, valuable job the user is trying to complete.' },
  { id: 'workflow', h: 'Workflow',             d: 'The actual steps, handoffs, approvals and exceptions today — drawn before any model is touched.' },
  { id: 'context',  h: 'Data / context',       d: 'CRM, docs, emails, tickets, files, policies, calendar, search — what the model needs to do its job.' },
  { id: 'system',   h: 'Model system',         d: 'LLM, multimodal, embedding, reranker, OCR, speech, reasoning — chosen for the task.' },
  { id: 'tool',     h: 'Tool / action',        d: 'API calls, browser, code execution, email, calendar, CRM writes, ticket updates.' },
  { id: 'validate', h: 'Validation',           d: 'Schema check, citation alignment, business rule gate, confidence threshold.' },
  { id: 'human',    h: 'Human review',         d: 'For high-risk outputs and irreversible actions. Never optional in regulated work.' },
  { id: 'outcome',  h: 'Outcome',              d: 'A delivered piece of work — sent message, updated record, generated report, completed task.' },
  { id: 'feedback', h: 'Feedback loop',        d: 'Thumbs · edits · acceptance · rework time · escalation rate → next eval set + next release.' }
];

/* Apps 101 — primitives */
var APPS_PRIMITIVES = [
  { h: 'AI application',         d: 'A product or workflow that uses models to help users understand, generate, decide, automate or act.' },
  { h: 'Wrapper',                d: 'A thin interface around a model API. Not always bad — but weak if it has no workflow, data, distribution or defensibility.' },
  { h: 'Workflow-native AI app', d: 'Designed around the user\'s actual job steps, not around a chat box. The model fits inside the work.' },
  { h: 'Copilot',                d: 'AI assists a human; the human stays in control. Suggestions, completions, drafts, reviews.' },
  { h: 'Agent',                  d: 'AI pursues a goal across multiple steps using tools, memory and feedback. Useful when bounded.' },
  { h: 'Human-in-the-loop',      d: 'Humans review, approve, correct or supervise AI outputs. Mandatory for high-risk work.' },
  { h: 'AI automation',          d: 'Replacing or compressing repetitive work steps using model + tool + workflow. Boundary clearly defined.' },
  { h: 'AI augmentation',        d: 'Helping humans do higher-quality work faster without removing the human. Often the better fit than full automation.' },
  { h: 'Vertical AI',            d: 'Built for a specific industry, role, dataset or workflow. Owns context that a generalist cannot copy.' },
  { h: 'Product-market fit (AI flavour)', d: 'Users repeatedly trust the system for a valuable job and would be upset if it disappeared.' }
];

/* Common confusions */
var APPS_CONFUSIONS = [
  { wrong: 'A chatbot is automatically an application',          right: 'Most chatbots are demos. An application is a system that completes valuable work repeatedly.' },
  { wrong: 'A demo is a product',                                 right: 'Demos optimise the happy path. Products survive the unhappy ones.' },
  { wrong: 'An agent is automatically useful',                    right: 'Useful agents are bounded, tool-connected, observable and integrated. Most "agents" demoed online are not yet useful in production.' },
  { wrong: 'Automation is always better than augmentation',       right: 'Many high-value tasks are better augmented than automated — augmentation keeps the human accountable and learning.' },
  { wrong: 'More model intelligence fixes poor workflow design',  right: 'The wrong workflow with a smarter model is still the wrong workflow. Workflow design is upstream of model choice.' },
  { wrong: 'High output quality = business value',                right: 'Quality is necessary, not sufficient. Distribution, integration, trust and adoption decide whether quality becomes value.' }
];

/* The 9-layer application stack */
var APPS_STACK = [
  { id: 'user',     n: '01', h: 'User / job',          items: ['Who is the user?', 'What job are they trying to complete?', 'What pain, cost, risk or delay exists today?', 'How often does this job happen?', 'What does success look like for them?'], note: 'If you cannot answer these in two sentences, the application does not exist yet.' },
  { id: 'workflow', n: '02', h: 'Workflow',            items: ['Steps + handoffs', 'Approvals', 'Exceptions + edge cases', 'Deadlines', 'Collaboration', 'Compliance'], note: 'Map the human process before any model is touched. The model fits inside the workflow, not the other way around.' },
  { id: 'context',  n: '03', h: 'Context / data',      items: ['User data', 'Company documents', 'CRM', 'Email + tickets', 'Databases + files', 'Policies', 'Calendar', 'External web / search'], note: 'The product\'s data advantage often matters more than the model. Context is moat.' },
  { id: 'system',   n: '04', h: 'Model system',        items: ['LLM', 'Multimodal model', 'Embedding model', 'Reranker', 'Speech model', 'OCR / document model', 'Image / video model', 'Reasoning model', 'Small / fast model'], note: 'Most real apps use multiple models. Right-sizing each call is the work.' },
  { id: 'tool',     n: '05', h: 'Tool / action',       items: ['APIs', 'Browser', 'Code execution', 'Email', 'Calendar', 'CRM', 'Payments', 'Documents', 'Database writes', 'Ticket updates', 'Workflow automation'], note: 'Doing > saying. Action turns advice into work.' },
  { id: 'trust',    n: '06', h: 'Trust + safety',      items: ['Validation', 'Citations + evidence', 'Permissions', 'Human approval gates', 'Audit logs', 'Guardrails', 'Data privacy', 'Security'], note: 'Trust is a feature, not an afterthought. Without it, regulated industries do not adopt.' },
  { id: 'ux',       n: '07', h: 'UX',                  items: ['Chat', 'Forms', 'Dashboards', 'Side panels', 'Inline suggestions', 'Review queues', 'Notifications', 'Voice', 'Agent activity timeline', 'Ambient automation'], note: 'AI UX is different — outputs are probabilistic. Design for correction, not perfection.' },
  { id: 'eval',     n: '08', h: 'Evaluation',          items: ['Task success', 'User acceptance', 'Accuracy', 'Hallucination rate', 'Cost per task', 'Time saved', 'Latency', 'Error rate', 'Human override rate'], note: 'A product without evals is a vibe. Build the eval loop on day one.' },
  { id: 'business', n: '09', h: 'Business',            items: ['Pricing', 'Distribution', 'Onboarding', 'Switching costs', 'ROI', 'Compliance', 'Support', 'Retention'], note: 'The application has to be sellable, deployable, retainable and profitable. Engineering excellence does not pay the bills alone.' }
];

/* Demo vs product comparison */
var APPS_DEMO_VS_PRODUCT = [
  { axis: 'User',           demo: 'Founder + a small group of investors and friends.',                       product: 'A team or paying customer using it for real work.',                          platform: 'Many teams across many companies, each with their own admin, policies and workflows.' },
  { axis: 'Data',           demo: 'Hand-picked golden examples that look great in a screenshot.',             product: 'Real customer data with edge cases, gaps, quirks and PII.',                  platform: 'Multi-tenant data + per-tenant context, isolation and lineage.' },
  { axis: 'Workflow',       demo: 'Chat box on a blank canvas.',                                              product: 'Embedded inside the existing tool the user already uses.',                   platform: 'Many workflows wired through one AI fabric — context, memory, routing, tools.' },
  { axis: 'Reliability',    demo: 'Works on the happy path the founder rehearsed.',                           product: 'Works on the long tail of unhappy paths; degrades gracefully.',              platform: 'SLA-grade · multi-region · graceful degradation · tested failure modes.' },
  { axis: 'Evaluation',     demo: '"Looks good to me".',                                                      product: 'Locked golden eval set + production telemetry on every release.',            platform: 'Continuous evaluation · per-tenant · per-feature · regression dashboards.' },
  { axis: 'Security',       demo: 'Founder\'s personal API key.',                                              product: 'SSO · RBAC · secrets · tenant isolation · audit logs.',                       platform: 'SOC 2 / ISO / HIPAA where relevant · region pinning · customer-managed keys · data-residency controls.' },
  { axis: 'Integration',    demo: 'Standalone web page.',                                                     product: 'Wired into one or two systems of record (CRM, ticketing, docs).',            platform: 'Deep integrations across many systems via fabric, partners and connectors.' },
  { axis: 'Human review',   demo: 'Founder reads the outputs.',                                               product: 'Reviewer queue with SLAs, calibration and escalation rules.',                platform: 'Configurable review per tenant, risk tier and regulator; pluggable approvers.' },
  { axis: 'Cost control',   demo: 'Unbounded API spend.',                                                     product: 'Routing · caching · quotas · per-tenant accounting.',                          platform: 'Policy-driven routing · capacity planning · cost-per-outcome dashboards.' },
  { axis: 'Trust',          demo: 'Vibes; the demo "felt magical".',                                          product: 'Evidence + citations + audit log + reviewable history.',                     platform: 'Third-party attestations · customer references · transparency reports · governance forum.' },
  { axis: 'Business value', demo: 'Likes on social media.',                                                   product: 'Recurring revenue · retention · audited time / cost savings.',               platform: 'Category-defining workflow · ecosystem leverage · partner + data-network effects.' },
  { axis: 'Retention',      demo: 'One wow; then forgotten in a week.',                                       product: 'Weekly habit; the user\'s default for that job.',                              platform: 'Embedded into how the organisation works — replacing it would break workflows.' }
];

/* Thirteen canonical application patterns */
var APPS_PATTERNS = [
  { id: '1',  name: 'Thin wrapper',              best: 'Quick UI on top of a model API; useful for prototypes, niche tools and content sites.',           risk: 'Not a moat. Easy to copy. Dies the moment a frontier vendor ships the same surface.',        example: 'Single-prompt chat sites, basic "AI [verb]" tools, prompt marketplaces.' },
  { id: '2',  name: 'Copilot',                   best: 'Writing, coding, analysis, design, support, sales — human stays in control.',                       risk: 'Becomes a nice-to-have autocomplete if not workflow-native.',                                  example: 'GitHub Copilot, Cursor, Notion AI, Microsoft 365 Copilot, Salesforce Einstein.' },
  { id: '3',  name: 'Autopilot',                 best: 'Bounded, repeatable, low-risk, measurable workflows.',                                              risk: 'Unsafe if actions are poorly constrained.',                                                    example: 'Auto-tagging, auto-routing, auto-categorisation, scheduled report generation.' },
  { id: '4',  name: 'RAG knowledge assistant',   best: 'Company knowledge, policies, research, support knowledge bases.',                                   risk: 'Bad retrieval, weak citations, outdated data.',                                                example: 'Glean, internal RAG over Confluence / Notion / SharePoint, Harvey for legal research.' },
  { id: '5',  name: 'Document intelligence',     best: 'Legal, finance, healthcare, compliance, insurance, operations.',                                    risk: 'Layout errors, hallucinated extraction, missing evidence.',                                    example: 'Contract review, invoice processing, claims intake, KYC + AML.' },
  { id: '6',  name: 'Human-in-the-loop system',   best: 'High-risk regulated work — legal, medical, finance, compliance, enterprise ops.',                  risk: 'Review process becomes the bottleneck if every output needs review.',                          example: 'AI drafts a clinical note, contract redline or compliance response; human approves.' },
  { id: '7',  name: 'Workflow automation',       best: 'Back-office, sales ops, HR, finance ops, compliance ops.',                                          risk: 'Integration depth + exception handling decides whether it ships.',                              example: 'Sales-ops sequencing, invoice approval, onboarding workflow, control evidence.' },
  { id: '8',  name: 'Agent',                     best: 'Multi-step tasks with clear goals, scoped tools and feedback.',                                     risk: 'Loops, wrong tool use, hallucinated state, security issues.',                                  example: 'Coding agent, browser-use agent, ops agent, sales prospecting agent.' },
  { id: '9',  name: 'Decision-support system',    best: 'High-stakes domains where humans must remain accountable.',                                         risk: 'Overtrust + hidden errors.',                                                                    example: 'Underwriting support, clinical decision support, risk scoring, fraud triage.' },
  { id: '10', name: 'Creative generation',        best: 'Marketing, media, design, content, video, audio.',                                                  risk: 'Sameness, copyright, brand inconsistency.',                                                     example: 'Image + video generation, ad creative, voice cloning, product imagery.' },
  { id: '11', name: 'AI search / discovery',      best: 'Research, commerce, enterprise knowledge, recruiting.',                                             risk: 'Retrieval quality + trust.',                                                                    example: 'Perplexity, Glean, Algolia AI, vertical research tools.' },
  { id: '12', name: 'Vertical AI system',         best: 'A single industry or role where context, workflow, compliance and distribution are owned.',         risk: 'Small market or slow enterprise adoption.',                                                     example: 'Harvey (legal), Sierra (CX), Abridge (clinical), OpenEvidence (clinical Q&amp;A).' },
  { id: '13', name: 'AI operating layer',         best: 'High-frequency knowledge work spanning multiple tools.',                                            risk: 'Permissioning, reliability, user adoption, integration complexity.',                            example: 'Cross-tool agents, AI desktop assistants, internal "AI ops" stacks.' }
];

/* AI UX patterns */
var APPS_UX_PATTERNS = [
  'Chat interface', 'Side-panel assistant', 'Inline autocomplete', 'Document workspace', 'Review queue',
  'Dashboard', 'Command palette', 'Workflow builder', 'Voice interface', 'Agent activity timeline',
  'Citations + evidence panel', 'Approval buttons', 'Confidence / uncertainty cues', 'Undo + rollback',
  'Human escalation', 'Feedback buttons'
];
var APPS_UX_PRINCIPLES = [
  { h: 'Make uncertainty visible',           d: 'Show confidence, sources or "not sure" — never pretend to be certain.' },
  { h: 'Show sources when facts matter',     d: 'Citations, evidence panels, links to the underlying record.' },
  { h: 'Let users edit, approve, reject, retry', d: 'Probabilistic outputs need correction surfaces; design for them.' },
  { h: 'Keep humans in control on high-risk actions', d: 'Approval gates for irreversible, regulated, or expensive actions.' },
  { h: 'Make the next action obvious',        d: 'Models drift; products focus. Surface the next-best step inside the workflow.' },
  { h: 'Avoid hiding important reasoning',    d: 'For analytical or compliance work, surface the chain so users can audit it.' },
  { h: 'Design for correction, not perfection', d: 'AI products that recover well beat AI products that try to be flawless.' },
  { h: 'Log what happened',                   d: 'Replayable traces are how you fix yesterday\'s bug and answer today\'s audit.' }
];

/* Value levers */
var APPS_VALUE_LEVERS = [
  { h: 'Speed',          d: 'Completes work faster · reduces waiting time · shortens research and drafting cycles.' },
  { h: 'Cost',           d: 'Reduces labour on repetitive tasks · reduces support load · reduces rework.' },
  { h: 'Quality',        d: 'Fewer mistakes · better consistency · stronger analysis · better personalisation.' },
  { h: 'Scale',          d: 'Lets one person do more · handles more customers · automates long-tail work.' },
  { h: 'Access',         d: 'Gives expert-like support to non-experts · lowers skill barriers · makes complex tools usable.' },
  { h: 'Revenue',        d: 'Improves conversion · unlocks new products · increases retention · supports premium pricing.' },
  { h: 'Risk reduction', d: 'Catches errors · improves compliance · documents decisions · creates audit trails.' },
  { h: 'Learning',       d: 'Tutors users · explains systems · gives feedback · accelerates onboarding.' }
];
var APPS_VALUE_TEST = [
  'Time saved per task or per user.',
  'Money saved per workflow.',
  'Revenue gained per closed loop.',
  'Quality lifted on a measurable rubric.',
  'Risk reduced on a tracked metric.',
  'Access expanded to a new user segment.',
  'User experience improved (acceptance rate, NPS, return rate).'
];

/* 16 industry cards */
var APPS_INDUSTRIES = [
  {
    h: 'Software engineering',
    cases: 'Coding agents, testing, code review, repo search, debugging, documentation.',
    wedge: 'Repo + diff + test integration; per-codebase context.',
    data: 'Private repos, issue trackers, CI logs.',
    risk: 'Subtle bugs, security regressions, merged hallucinations.',
    money: 'Per-seat / per-repo SaaS, usage-based on agents.',
    avoid: 'Frontier model on every keystroke; cost runs away.'
  },
  {
    h: 'Customer support',
    cases: 'Support agents, ticket triage, RAG over knowledge base, response drafting, escalation.',
    wedge: 'Helpdesk + KB integration; macros + brand voice.',
    data: 'Past tickets, KB articles, product docs, CSAT signals.',
    risk: 'Wrong answers on policy + refunds; brand-tone slips.',
    money: 'Per-agent seat or per-resolved-ticket pricing.',
    avoid: 'Frustrating chatbot wall before a human; escalation must be one click.'
  },
  {
    h: 'Sales + marketing',
    cases: 'Lead research, outbound personalisation, CRM updates, campaign generation, call analysis.',
    wedge: 'CRM + outbound + intent data inside the rep\'s daily flow.',
    data: 'CRM, email, calendar, web data, intent signals.',
    risk: 'Spammy + impersonal outreach; deliverability + brand damage.',
    money: 'Per-seat SaaS or revenue-share on closed pipeline.',
    avoid: 'AI-generated mass email blast — high reply rate to spam folder.'
  },
  {
    h: 'Legal',
    cases: 'Contract review, policy analysis, discovery, legal research, clause extraction, compliance workflows.',
    wedge: 'Per-firm + per-jurisdiction playbooks; matter context.',
    data: 'Contracts, matter files, opinions, regulatory texts.',
    risk: 'Cited but wrong; jurisdiction errors; privilege leakage.',
    money: 'Per-seat enterprise SaaS; per-matter pricing.',
    avoid: 'Replacing lawyer judgement on advice; always lawyer-of-record.'
  },
  {
    h: 'Finance + accounting',
    cases: 'Reconciliation, invoice processing, financial analysis, fraud + risk review, reporting.',
    wedge: 'ERP + GL + bank-feed integration; structured outputs with audit trail.',
    data: 'GL, AP/AR, bank feeds, contracts, statements.',
    risk: 'Material misstatement; auditor + regulator scrutiny.',
    money: 'Per-seat or per-transaction.',
    avoid: 'Auto-posting to GL without human sign-off in regulated entities.'
  },
  {
    h: 'Healthcare',
    cases: 'Clinical documentation, patient triage support, medical-imaging assistance, admin automation.',
    wedge: 'EHR integration; HIPAA + HL7 + FHIR; clinician workflow ownership.',
    data: 'EHR, imaging, clinical notes, claims.',
    risk: 'High. Diagnosis + treatment require strong clinical governance.',
    money: 'Per-clinician seat; per-encounter; payer-side savings models.',
    avoid: 'Autonomous diagnosis. Outputs are always recommendations, never decisions.'
  },
  {
    h: 'Education',
    cases: 'Tutoring, feedback, curriculum generation, study planning, assessment support.',
    wedge: 'Per-student personalisation + teacher workflow integration.',
    data: 'Curriculum, assignments, student responses, learning standards.',
    risk: 'Bad pedagogy at scale; cheating + plagiarism arms race.',
    money: 'Per-student SaaS; institutional licensing; B2C subscriptions.',
    avoid: 'Replacing the teacher feedback loop; design for augmentation.'
  },
  {
    h: 'Real estate + property',
    cases: 'Listing generation, document review, compliance, lead management, valuation support, property research.',
    wedge: 'MLS + CRM + transaction-doc workflow.',
    data: 'Listings, transactions, market comps, public records.',
    risk: 'Compliance (Fair Housing, ASIC, ACMA spam, AML / KYC).',
    money: 'Per-agent seat; per-transaction add-ons.',
    avoid: 'Generated listings + outreach without compliance review.'
  },
  {
    h: 'Compliance + GRC',
    cases: 'Policy mapping, evidence collection, audit trails, control monitoring, regulatory change tracking.',
    wedge: 'Framework-aware automation (SOC 2, ISO, HIPAA, NIST, etc.).',
    data: 'Policies, controls, evidence, ticketing, identity systems.',
    risk: 'Auditor signoff; missing evidence = audit failure.',
    money: 'Per-control or per-framework SaaS.',
    avoid: 'Letting AI write controls without human compliance approval.'
  },
  {
    h: 'Insurance',
    cases: 'Claims intake, document analysis, fraud triage, policy comparison, customer support.',
    wedge: 'Claims platform + adjuster workflow + carrier-specific rules.',
    data: 'Claims, policies, photos, statements, customer history.',
    risk: 'Bad-faith claims handling exposure; bias in fraud scoring.',
    money: 'Per-claim or per-policy pricing.',
    avoid: 'Automated denial without human review on contested claims.'
  },
  {
    h: 'Recruiting + HR',
    cases: 'Resume screening support, interview notes, onboarding, employee support.',
    wedge: 'ATS + HRIS + onboarding flow integration.',
    data: 'Applications, job descriptions, employee records, performance signals.',
    risk: 'Discrimination liability; privacy; surveillance perception.',
    money: 'Per-seat or per-hire pricing.',
    avoid: 'Auto-rejection without human review; biased ranking models.'
  },
  {
    h: 'Manufacturing + supply chain',
    cases: 'Predictive maintenance, quality inspection, planning, procurement, inventory intelligence.',
    wedge: 'OT + ERP + sensor data integration.',
    data: 'Sensors, MES, ERP, supplier records, telematics.',
    risk: 'Equipment damage from bad action; safety + uptime stakes.',
    money: 'Per-line, per-asset, or savings-share pricing.',
    avoid: 'Closed-loop control without human-in-the-loop on safety-critical systems.'
  },
  {
    h: 'Retail + ecommerce',
    cases: 'Product search, recommendations, merchandising, support, review analysis.',
    wedge: 'Catalogue + behaviour + content + ad-stack integration.',
    data: 'Catalogue, browse + purchase history, reviews, returns.',
    risk: 'Brand voice; pricing errors; misleading product claims.',
    money: 'Per-merchant SaaS, GMV-share, advertising uplift models.',
    avoid: 'AI-generated product copy without brand + legal review.'
  },
  {
    h: 'Media + entertainment',
    cases: 'Content creation, localisation, editing, asset search, storyboarding.',
    wedge: 'Asset library + production-tool integration.',
    data: 'Footage, scripts, assets, talent + rights metadata.',
    risk: 'Copyright + IP; talent + likeness rights; deepfake liability.',
    money: 'Per-seat creative tooling; per-asset processing fees.',
    avoid: 'Generated assets without rights + provenance trail.'
  },
  {
    h: 'Scientific research',
    cases: 'Literature review, experiment planning, data analysis, simulation support.',
    wedge: 'Domain ontologies + lab systems + experiment metadata.',
    data: 'Papers, experiments, instruments, datasets.',
    risk: 'Hallucinated citations; reproducibility; misuse.',
    money: 'Per-lab SaaS, institutional contracts, productivity-share.',
    avoid: 'AI-only literature reviews without expert verification.'
  },
  {
    h: 'Government + public sector',
    cases: 'Citizen services, document processing, policy analysis, accessibility.',
    wedge: 'Per-agency workflow + procurement + privacy controls.',
    data: 'Cases, regulations, citizen records (with strict privacy).',
    risk: 'High. Procurement, privacy, accountability, accessibility, freedom-of-information.',
    money: 'Per-agency contracts; multi-year procurement.',
    avoid: 'Black-box automated decisions affecting citizen rights.'
  }
];

/* Vertical vs horizontal AI */
var APPS_VERTICAL_HORIZONTAL = {
  horizontal: { h: 'Horizontal AI', best: 'General assistant; broad capability; flexible; easy to start.', weak: 'Weaker domain workflow ownership; harder to defend on context.' },
  vertical:   { h: 'Vertical AI',    best: 'Specific industry / workflow; domain data; compliance logic; purpose-built UX; deeper integrations; stronger switching costs.', weak: 'Slower to build; smaller TAM; harder to expand outside the wedge.' },
  verticalWins: [
    'Owns proprietary or hard-to-access data.',
    'Owns the workflow integration in the system the user already uses.',
    'Owns domain trust + compliance language.',
    'Owns the distribution channel (partner, regulator, marketplace).',
    'Repeats high-value tasks measurably.',
    'Has a real human-review loop that compounds.'
  ],
  horizontalWins: [
    'Task is broad and unconstrained.',
    'User needs flexible reasoning across many domains.',
    'Workflows vary; no obvious wedge.',
    'Speed-to-deploy matters more than depth.',
    'Domain risk is low and audit needs are minimal.'
  ],
  examples: [
    'Generic chatbot vs legal contract review workflow.',
    'Generic assistant vs compliance evidence platform.',
    'Generic writing tool vs sales workflow inside the CRM.',
    'Generic document summariser vs insurance claims processing system.'
  ]
};

/* Agents — architecture, types, failures */
var APPS_AGENT_ARCH = [
  { h: 'Goal',                d: 'A bounded, finite objective with a success criterion.' },
  { h: 'Planner',             d: 'Decompose the goal into a sequence of steps.' },
  { h: 'Task decomposition',  d: 'Each step has a clear input, output and tool choice.' },
  { h: 'Tool choice',         d: 'Pick the right tool from a scoped registry — not "all tools all the time".' },
  { h: 'Action',              d: 'Call the tool with structured args.' },
  { h: 'Observation',         d: 'Read the tool output; parse + ground.' },
  { h: 'Validation',          d: 'Schema check, business rule gate, confidence threshold.' },
  { h: 'Memory / state',      d: 'Update working memory; persist what is reusable.' },
  { h: 'Continue / stop',     d: 'Re-plan or finish based on success criterion + budget.' },
  { h: 'Report / approval',   d: 'Hand off to human or downstream system with full audit trail.' }
];
var APPS_AGENT_TYPES = [
  { h: 'Research agent',          d: 'Gathers + synthesises information from search, docs, internal knowledge.' },
  { h: 'Coding agent',            d: 'Reads repo + tests, plans, edits, runs tests, opens PRs.' },
  { h: 'Browser / computer-use',  d: 'Drives a browser or desktop to complete bounded tasks.' },
  { h: 'Sales agent',             d: 'Researches leads, drafts personalisation, logs CRM, surfaces hand-offs.' },
  { h: 'Support agent',           d: 'Triages, retrieves KB, drafts response, escalates with full context.' },
  { h: 'Operations agent',        d: 'Runs back-office workflows (accounts, onboarding, ops tickets).' },
  { h: 'Compliance agent',        d: 'Maps controls to evidence, drafts audit responses, monitors drift.' },
  { h: 'Data analyst agent',      d: 'Translates questions into queries, runs them, produces charts + commentary.' },
  { h: 'Personal assistant',      d: 'Email, calendar, tasks; private to the user.' },
  { h: 'Multi-agent workflow',    d: 'Specialist agents orchestrated by a planner; rarely worth it before single-agent works.' }
];
var APPS_AGENT_FAILURES = [
  'Vague goal → wanders, never finishes.',
  'Too many tools → confused planner, wrong tool calls.',
  'Weak permissions → wide blast radius when something goes wrong.',
  'No stopping criteria → infinite loops, runaway costs.',
  'No validation → hallucinated state passed downstream.',
  'No audit logs → impossible to debug or replay.',
  'No rollback → bad action is permanent.',
  'Prompt injection → tool output controls the agent.',
  'Hallucinated state → believes a tool succeeded when it failed.',
  'Expensive loops → reasoning + tool calls without budget.',
  'Brittle browser automation → DOM changes break the agent.',
  'Poor evals → "did the task complete" is unmeasured.'
];
/* Ten-question agent usefulness test — answer before turning a workflow into an agent */
var APPS_AGENT_TEST = [
  { q: 'Is the task multi-step?',                                          d: 'A one-shot LLM call is not an agent. If the workflow is single-turn, an agent is overkill.' },
  { q: 'Does it need real tools?',                                         d: 'If everything fits inside the prompt, you do not need an agent. Tools = APIs, browsers, code, databases.' },
  { q: 'Is the goal clear?',                                               d: 'Agents wander when the success criterion is fuzzy. Write the goal as a measurable end state.' },
  { q: 'Can success be measured?',                                         d: 'If you cannot grade the output, you cannot improve the agent. Build the rubric first.' },
  { q: 'Can mistakes be detected?',                                        d: 'Validation gates, schema checks, business rules — without these, errors compound silently.' },
  { q: 'Are permissions controlled?',                                      d: 'Scope tools, scope data, scope blast radius. No "all tools all the time".' },
  { q: 'Is there a human approval path?',                                  d: 'For irreversible or high-risk actions, human-in-the-loop is non-negotiable.' },
  { q: 'Is there an audit trail?',                                         d: 'Every plan, tool call, observation and final action must be replayable.' },
  { q: 'Can the action be undone?',                                        d: 'Reversible side effects beat irreversible ones; design for rollback before launch.' },
  { q: 'Is autonomy actually better than a simpler workflow?',             d: 'A deterministic pipeline often beats a clever agent. Justify autonomy on outcome, not novelty.' }
];
var APPS_AGENT_TEST_PUNCHLINE = 'Most useful agents are not fully autonomous. They are supervised systems that automate bounded work.';

/* Workflow wedge — start narrow */
var APPS_WEDGES = [
  { id: 'support',     h: 'Customer support',  d: 'Triage the ticket, draft the response, cite the policy, escalate when needed, log the outcome.', chain: ['Ticket triage', 'Draft response', 'Cite policy', 'Human escalation', 'Update ticket'] },
  { id: 'sales',       h: 'Sales',             d: 'Research the lead, personalise the outreach, draft the message, log it in CRM, learn from the reply.',  chain: ['Lead research', 'Personalisation', 'Message draft', 'CRM logging', 'Reply analysis'] },
  { id: 'legal',       h: 'Legal',             d: 'Upload the contract, extract clauses, flag risks, attach evidence, route to a lawyer for redline.',     chain: ['Contract upload', 'Clause extraction', 'Risk flags', 'Evidence', 'Lawyer review', 'Redline'] },
  { id: 'compliance',  h: 'Compliance',        d: 'Map regulation to controls, gather evidence, find gaps, write the report, get signoff.',                  chain: ['Regulation', 'Control mapping', 'Evidence collection', 'Gap detection', 'Report', 'Signoff'] },
  { id: 'healthcare',  h: 'Healthcare admin',  d: 'Intake the document, extract the fields, support coding, summarise, route to a clinician for review.',  chain: ['Document intake', 'Extraction', 'Coding support', 'Summary', 'Human review', 'System update'] },
  { id: 'coding',      h: 'Coding',            d: 'From issue to merged PR — context, plan, edit, tests, diff, approval, ship.',                            chain: ['Issue', 'Repo context', 'Plan', 'Code edit', 'Tests', 'Diff', 'Approval', 'Merge'] },
  { id: 'realestate',  h: 'Real estate',       d: 'From lead to listing — context, comps, document support, agent review.',                                 chain: ['Lead / property query', 'Listing context', 'Comparable properties', 'Document support', 'Agent review'] }
];
var APPS_WEDGES_RULE = 'Start narrow. Win a workflow. Then expand.';

/* Enterprise adoption */
var APPS_ADOPTION = {
  blockers: [
    'Data access + governance.',
    'Security approval.',
    'Privacy + data residency.',
    'Compliance + regulator posture.',
    'Integration with existing tools.',
    'Change management + employee trust.',
    'Unclear ROI.',
    'Hallucination + reliability risk.',
    'Procurement + legal review.',
    'Lack of evaluation.',
    'No clear product owner.'
  ],
  path: [
    { h: 'Pilot',           d: 'A single team, single workflow, well-scoped success metric.' },
    { h: 'Narrow workflow', d: 'Win one job before expanding to a second.' },
    { h: 'Eval set',        d: 'Locked golden examples + production telemetry.' },
    { h: 'Security review', d: 'SSO, RBAC, secrets, tenant isolation, vendor due diligence.' },
    { h: 'Integration',     d: 'Wired into the existing system of record.' },
    { h: 'Human review',    d: 'Approval gates on high-risk paths.' },
    { h: 'ROI measurement', d: 'Time saved · money saved · revenue · risk reduced — picked before launch.' },
    { h: 'Rollout',         d: 'Phase by team / region / risk tier.' },
    { h: 'Monitoring',      d: 'Latency · cost · quality · safety · escalation rate live.' },
    { h: 'Expansion',       d: 'Only after the narrow workflow has proven repeatable ROI.' }
  ],
  buyerQuestions: [
    'What workflow does this improve?',
    'What data does it need to access?',
    'Who approves outputs and actions?',
    'What happens when it is wrong?',
    'How is quality measured?',
    'How is cost controlled?',
    'What systems does it integrate with?',
    'What audit trail exists?',
    'What is the security model?',
    'What user behaviour changes are required?'
  ],
  punchline: 'Enterprise AI adoption is not blocked by lack of models. It is blocked by trust, integration, governance and measurable workflow value.'
};

/* Architecture examples — A through J */
var APPS_ARCH_EXAMPLES = [
  { id: 'A', h: 'Customer support AI',          flow: ['User ticket', 'Intent detection', 'Knowledge retrieval', 'Draft response', 'Confidence check', 'Human escalation', 'Ticket update', 'Analytics'] },
  { id: 'B', h: 'Sales outbound assistant',     flow: ['Lead source', 'Enrichment', 'ICP matching', 'Personalisation', 'Message draft', 'Human approval', 'CRM logging', 'Reply analysis'] },
  { id: 'C', h: 'Legal contract review',        flow: ['Contract upload', 'Clause extraction', 'Policy comparison', 'Risk flags', 'Citation + evidence', 'Lawyer review', 'Redlines', 'Audit log'] },
  { id: 'D', h: 'Compliance evidence assistant', flow: ['Regulation / control framework', 'Evidence collection', 'Document mapping', 'Gap detection', 'Report generation', 'Human signoff', 'Audit trail'] },
  { id: 'E', h: 'Healthcare admin assistant',   flow: ['Patient / document intake', 'Extraction', 'Coding support', 'Summarisation', 'Clinician / admin review', 'System update'] },
  { id: 'F', h: 'Education tutor',              flow: ['Student goal', 'Diagnostic quiz', 'Personalised explanation', 'Practice', 'Feedback', 'Progress tracking', 'Teacher / parent insight'] },
  { id: 'G', h: 'Coding agent',                 flow: ['Issue', 'Repo context', 'Plan', 'Code edit', 'Tests', 'Diff', 'Human review', 'Merge'] },
  { id: 'H', h: 'Data analyst agent',           flow: ['Question', 'Database schema', 'Query plan', 'SQL / code execution', 'Chart / table', 'Interpretation', 'Validation', 'Report'] },
  { id: 'I', h: 'Real estate AI assistant',     flow: ['Lead / property query', 'Listing + context retrieval', 'Comparable properties', 'Compliance + document support', 'Message or report', 'Agent review'] },
  { id: 'J', h: 'Personal productivity agent',  flow: ['Email + calendar + tasks', 'Prioritisation', 'Draft actions', 'Reminders', 'Approval', 'Execution', 'Daily summary'] }
];

/* App selection / scoring matrix — 13 criteria */
var APPS_SELECTION_CRITERIA = [
  { h: 'Pain intensity',           d: 'How painful is the current process? Low → 1, severe + visible → 5.' },
  { h: 'Frequency of task',        d: 'How often does this happen per user? Rare → 1, daily → 5.' },
  { h: 'Economic value',           d: 'How much money / time / risk per occurrence? Low → 1, high → 5.' },
  { h: 'Data availability',        d: 'Can the system reach the data it needs? Hard → 1, easy → 5.' },
  { h: 'Workflow clarity',         d: 'Is the human process well-understood + repeatable? Vague → 1, mapped → 5.' },
  { h: 'Error tolerance',          d: 'How much can the system get wrong? Zero tolerance → 1, easy to recover → 5.' },
  { h: 'Integration difficulty',   d: 'How hard to wire into existing systems? Brutal → 1, plug-in → 5.' },
  { h: 'Buyer urgency',            d: 'Is someone willing to pay this quarter? Indifferent → 1, on fire → 5.' },
  { h: 'Distribution access',      d: 'Can you reach the buyer? None → 1, embedded channel → 5.' },
  { h: 'Regulatory risk',          d: 'How regulated is the workflow? Heavy → 1, light → 5.' },
  { h: 'Model capability fit',     d: 'Do current models reliably handle this? Stretch → 1, comfortable → 5.' },
  { h: 'Defensibility',            d: 'How copiable is this by a generalist? Trivial → 1, deep moat → 5.' },
  { h: 'Willingness to pay',       d: 'Is the buyer used to paying for this? No → 1, established budget → 5.' }
];
var APPS_SELECTION_GUIDE = {
  good: [
    'Painful + frequent + expensive.',
    'Measurable success criterion.',
    'Accessible data + clear workflow.',
    'Manageable risk + buyer urgency.',
    'A real distribution path exists.'
  ],
  bad: [
    'Vague pain or low frequency.',
    'No clear buyer or budget.',
    'No measurable ROI.',
    'High-risk with no governance plan.',
    'Depends on perfect model behaviour.',
    'Easy for a generic assistant to replace overnight.'
  ],
  punchline: 'Do not ask "can AI do this?". Ask "does this workflow create enough value when AI improves it?"'
};

/* Moats + defensibility */
var APPS_MOATS_STRONG = [
  'Proprietary workflow data.',
  'Deep system integrations.',
  'Distribution channel + brand.',
  'Regulatory + compliance expertise.',
  'Human feedback loop that compounds.',
  'Domain-specific evaluation datasets.',
  'Switching costs (contracts, integrations, retraining).',
  'Network effects (per-vertical or per-tenant).',
  'Vertical specialisation + ontology.',
  'Cost advantage from routing / caching / self-host.',
  'Operational expertise (incident, audit, SLA).',
  'Embedded customer process.',
  'Unique dataset or labelled corpus.',
  'Better UX + faster adoption.',
  'Repeated trust + reliability.'
];
var APPS_MOATS_WEAK = [
  'Prompt wrapper.',
  'Generic chatbot.',
  'Thin UI on top of a public model.',
  'No workflow ownership.',
  'No data advantage.',
  'No distribution.',
  'No cost advantage.',
  'No trust + safety layer.'
];

/* Metrics + ROI */
var APPS_METRICS = {
  user:        ['Activation', 'Retention', 'Repeat usage', 'Task completion', 'User satisfaction', 'Acceptance rate', 'Override rate'],
  quality:     ['Accuracy', 'Citation correctness', 'Hallucination rate', 'Extraction accuracy', 'Tool success rate', 'Human review pass rate'],
  operational: ['Time saved', 'Cost per task', 'Latency', 'Throughput', 'Escalation rate', 'Error rate', 'Uptime'],
  business:    ['Revenue uplift', 'Conversion rate', 'Churn reduction', 'Support cost reduction', 'Margin improvement', 'Customer acquisition', 'Expansion revenue'],
  risk:        ['Unsafe output rate', 'Privacy incidents', 'Compliance exceptions', 'Audit failures', 'Human intervention rate']
};
var APPS_ROI_NOTE = 'ROI = value created − total cost of AI system. Costs include model / API spend, engineering, integrations, data preparation, human review, monitoring, support, compliance and change management.';
var APPS_ROI_PUNCHLINE = 'Cost per token is interesting. Cost per successful business outcome is what matters.';

/* Trust + risk + controls */
var APPS_RISKS = [
  'Hallucination',
  'Wrong action',
  'Data leakage',
  'Prompt injection',
  'Privacy breach',
  'Over-automation',
  'Bias + discrimination',
  'Unsafe medical / legal / financial advice',
  'Copyright / IP risk',
  'Employee surveillance perception',
  'Customer trust failure',
  'Audit gaps'
];
var APPS_CONTROLS = [
  'Human approval for high-risk actions.',
  'Citation + evidence display.',
  'Permissioned tool access.',
  'Sandboxed execution.',
  'Audit logs + replay.',
  'Role-based access control.',
  'Data minimisation.',
  'Red-team + adversarial evals.',
  'Policy checks (input + output).',
  'Model evals on every release.',
  'Rollback / undo paths.',
  'Incident response playbooks.'
];
var APPS_TRUST_PRINCIPLE = 'Trustworthy AI applications are not just accurate. They are observable, controllable, auditable, reversible and clear about uncertainty.';

/* Diagnostic table — Symptom · Cause · First check · Fix */
var APPS_BOTTLENECKS = [
  { symptom: 'Users try it once and stop',                cause: 'Weak workflow fit or no repeated valuable job.',                          check: 'Retention curve · task frequency · time saved.',                       fix: 'Narrow the use case; integrate deeper into the user\'s daily workflow.' },
  { symptom: 'Output looks impressive but is not useful',  cause: 'Demo mindset — happy-path output, no workflow tie.',                       check: 'What does the user do with the output?',                                fix: 'Wire output into the next step (CRM, ticket, doc); reduce manual handoff.' },
  { symptom: 'App hallucinates facts',                     cause: 'Weak grounding; missing or low-quality retrieval.',                        check: 'Retrieval recall · citation rate · source quality.',                    fix: 'Add or improve RAG; require citations; gate confident output on coverage.' },
  { symptom: 'Agent takes wrong action',                   cause: 'Tool descriptions unclear; permissions too broad.',                        check: 'Tool descriptions · permission scope · per-tool eval.',                  fix: 'Tighten tool docs; restrict permissions; add approval gate; per-tool evals.' },
  { symptom: 'Support bot frustrates users',               cause: 'No clean path to human; rigid script.',                                    check: 'Escalation rate · CSAT · drop-off events.',                              fix: 'One-click human escalation; let bot do triage + draft, not all answers.' },
  { symptom: 'RAG cannot find obvious info',                cause: 'Chunking, embedding, reranker or metadata problem.',                       check: 'Top-k recall · retrieved chunks · query rewriting.',                     fix: 'Better chunking; add reranker; query rewriting; evaluate retrieval separately.' },
  { symptom: 'Sales assistant sounds generic',              cause: 'No personalisation context; no enrichment.',                                check: 'Inputs into the prompt · ICP match · CRM fields used.',                  fix: 'Pull live CRM context; specialise per ICP; brand voice rules.' },
  { symptom: 'Legal / compliance app lacks trust',          cause: 'No citations; no scope; no human-of-record.',                              check: 'Citation rate · jurisdiction handling · review queue.',                  fix: 'Mandatory citations; jurisdiction tagging; lawyer / compliance review.' },
  { symptom: 'Cost explodes',                              cause: 'No routing, no caching, frontier model on every request.',                  check: 'Cost-per-task · cache hit rate · model mix · token sprawl.',             fix: 'Add prompt cache; route by complexity; rightsize model; cap reasoning budget.' },
  { symptom: 'Latency too high',                           cause: 'Long context, reasoning model on a fast-path query, cold start.',           check: 'TTFT · tokens · model route · reasoning budget.',                        fix: 'Trim context; route to faster tier; pre-warm; stream early tokens.' },
  { symptom: 'Enterprise buyer stalls',                    cause: 'Security, integration, evaluation or governance gaps.',                     check: 'Security questionnaire · integration plan · eval evidence.',             fix: 'Pre-build SOC 2 + DPA package; reference customer; production eval set.' },
  { symptom: 'Users do not trust it',                       cause: 'Hidden reasoning, no citations, opaque actions.',                          check: 'Where does the user see uncertainty + sources?',                         fix: 'Surface evidence + confidence; show sources; allow edit + reject + retry.' },
  { symptom: 'Reviewers reject most outputs',               cause: 'Quality below the human bar for that task.',                                check: 'Override rate · root-cause sample · prompt + model version.',            fix: 'Re-evaluate model fit; better prompt; better context; or pull the feature.' },
  { symptom: 'Integrations keep breaking',                 cause: 'Brittle scrapers, undocumented APIs, no monitoring.',                       check: 'Integration uptime · contract drift · synthetic checks.',                fix: 'Move to first-party APIs; add contract tests; monitor synthetic flows.' },
  { symptom: 'Replaced by generic ChatGPT',                cause: 'No workflow ownership, no data advantage, no distribution.',                check: 'Where do users go for the same job?',                                    fix: 'Move into the system of record; own a slice generic assistants cannot copy.' },
  { symptom: 'Works in demo, fails in production',          cause: 'Demo runs the happy path; production runs the long tail + load.',           check: 'Production telemetry · long-tail eval set · load + concurrency.',         fix: 'Build a real eval set from production traces; load-test; add fallback + rate limit.' }
];

/* Bad application patterns */
var APPS_BAD_PATTERNS = [
  { h: 'Chatbot for everything',                         d: 'A chat box jammed in front of a workflow that should have been a form, table or button.' },
  { h: 'Thin wrapper with no workflow',                   d: 'A prompt + UI on top of a public API. No data, no integration, no defensibility.' },
  { h: 'Agent with too many tools',                       d: 'Confused planner; wrong tool calls; impossible-to-debug traces.' },
  { h: 'No human approval for risky actions',             d: 'Money / law / health / compliance with no gate. One bad output = real-world harm.' },
  { h: 'No evaluation dataset',                           d: 'Vibes-only deploys. Regressions ship; you find out from support tickets.' },
  { h: 'No source grounding',                              d: 'Confident answers with no citations. Users find the hallucinations before you do.' },
  { h: 'No integration with user systems',                 d: 'AI lives outside the tools the user already lives in. They forget about it.' },
  { h: 'No clear buyer',                                    d: 'Cool to demo; nobody has the budget; nobody owns the workflow.' },
  { h: 'No measurable ROI',                                 d: 'You cannot answer "how much value did this create this quarter?". Procurement will not save you.' },
  { h: 'No cost tracking',                                  d: 'Cost explosions detected by finance, not engineering.' },
  { h: 'No error recovery',                                  d: 'Bad output cannot be undone, retried or escalated. Trust collapses.' },
  { h: 'No trust layer',                                    d: 'Generic policy filters; no domain controls; no audit logs.' },
  { h: 'No onboarding',                                     d: 'Users cannot figure out the first valuable interaction within a minute.' },
  { h: 'No domain expertise',                               d: 'Built by AI engineers with no domain operator on the team.' },
  { h: 'No distribution advantage',                         d: 'Same problem, ten startups, no proprietary channel.' },
  { h: 'Automating before understanding the workflow',      d: 'Automation amplifies a broken process; map first, automate second.' },
  { h: 'Solving low-value tasks with expensive models',     d: 'Frontier reasoning model on a 5-token classification.' },
  { h: 'Replacing humans where augmentation is better',     d: 'Augmentation often outperforms automation — and keeps the human accountable.' },
  { h: 'Building for hype',                                  d: 'Reasoning, multimodal, agents, MCP… picked because they are trending, not because the product needs them.' },
  { h: 'Single-vendor dependency with no fallback',         d: 'One outage, one rate-limit change, one price hike — and the product breaks.' }
];

/* Maturity model — Levels 0–5 */
var APPS_MATURITY = [
  { lvl: '0', name: 'Demo',                  d: 'Prompt or prototype. No real users. No evals. No integration.',                                                            tells: 'Lives on a slide deck or a single laptop.' },
  { lvl: '1', name: 'Useful assistant',      d: 'Solves a narrow task. Basic prompt + model. Some logging. Manual review.',                                                  tells: 'A few internal users return weekly; nothing is automated.' },
  { lvl: '2', name: 'Workflow tool',          d: 'Embedded in a real workflow. Uses user / company context. Saves time or improves quality. Has basic metrics.',              tells: 'You can answer "what did this save us last month?".' },
  { lvl: '3', name: 'Production AI product', d: 'Integrations · evaluation · monitoring · fallback · human review · cost tracking · security controls.',                     tells: 'You have a paging rotation; you have rolled back at least once.' },
  { lvl: '4', name: 'Vertical AI system',     d: 'Domain-specific workflow · proprietary data loop · strong evaluation · compliance / trust layer · repeatable ROI · retention.', tells: 'Customers renew because the system became part of how they work.' },
  { lvl: '5', name: 'AI operating layer',     d: 'Coordinates multiple workflows; uses multiple models / tools; memory · routing · permissions · observability; part of how the org works.', tells: 'Removing the AI layer would break daily operations.' }
];

/* 12-step strategy playbook */
var APPS_PLAYBOOK = [
  { n: '01', h: 'Pick a painful recurring workflow',     d: 'High-frequency, expensive, measurable. Resist "interesting" in favour of "valuable + repeated".' },
  { n: '02', h: 'Map the current human process',          d: 'Steps · approvals · exceptions · handoffs · time per step. Before any model is touched.' },
  { n: '03', h: 'Identify where AI helps',                d: 'Generate · search · extract · decide · automate · monitor. Be specific.' },
  { n: '04', h: 'Decide copilot vs autopilot vs agent',   d: 'Pick the smallest pattern that solves the problem. Escalate later.' },
  { n: '05', h: 'Connect the right context / data',       d: 'CRM · docs · email · DB · search. Without context, the model is generic.' },
  { n: '06', h: 'Build a narrow prototype',                d: 'One workflow · one persona · one success metric.' },
  { n: '07', h: 'Create an evaluation set',                d: 'Hand-curated examples + production traces. Locked, versioned.' },
  { n: '08', h: 'Add human review where risk is high',    d: 'Approval queues, escalation flows, audit trails.' },
  { n: '09', h: 'Measure time saved · quality · cost · retention', d: 'Pick metrics before launch; report weekly.' },
  { n: '10', h: 'Integrate into the existing workflow',   d: 'Move into the system of record. Stop being a separate tab.' },
  { n: '11', h: 'Add routing · caching · fallback · observability', d: 'Production hygiene. Cost + reliability decide whether the product survives.' },
  { n: '12', h: 'Expand only after the narrow workflow works', d: 'Win the wedge. Then expand by adjacency, not ambition.' }
];
var APPS_PLAYBOOK_RULE = 'Start narrow. Win a workflow. Then expand.';

/* Cost calculator presets — illustrative */
var APPS_CALC_PRESETS = [
  { id: 'support',     label: 'Support assistant',         users: 50,   tasks: 200,  minSaved: 4,  labour: 35, revenue: 0,    modelCost: 0.05, reviewCost: 0.10, ops: 12000, errorCost: 600,  price: 80,  tag: 'Per-agent SaaS for a small support team.' },
  { id: 'sales',       label: 'Sales assistant',           users: 30,   tasks: 80,   minSaved: 6,  labour: 80, revenue: 5,    modelCost: 0.12, reviewCost: 0.05, ops: 18000, errorCost: 800,  price: 250, tag: 'Per-rep AI assistant inside the CRM.' },
  { id: 'compliance',  label: 'Compliance assistant',      users: 10,   tasks: 30,   minSaved: 12, labour: 120, revenue: 0,    modelCost: 0.40, reviewCost: 1.00, ops: 35000, errorCost: 5000, price: 1200, tag: 'Vertical compliance / GRC platform.' },
  { id: 'doc',         label: 'Document extraction tool',   users: 25,  tasks: 400,  minSaved: 5,  labour: 50, revenue: 0,    modelCost: 0.08, reviewCost: 0.20, ops: 22000, errorCost: 1500, price: 200, tag: 'Per-document automation for back-office teams.' },
  { id: 'coding',      label: 'Coding assistant',          users: 200, tasks: 50,   minSaved: 7,  labour: 95, revenue: 0,    modelCost: 0.15, reviewCost: 0,    ops: 30000, errorCost: 1000, price: 39,  tag: 'Per-seat coding copilot for a software org.' },
  { id: 'research',    label: 'Research assistant',         users: 40,  tasks: 25,   minSaved: 30, labour: 110, revenue: 0,    modelCost: 0.50, reviewCost: 0.30, ops: 25000, errorCost: 1200, price: 250, tag: 'Per-analyst research workspace with reasoning model.' },
  { id: 'voice',       label: 'Voice agent',               users: 0,   tasks: 6000, minSaved: 2,  labour: 30, revenue: 1.5,  modelCost: 0.40, reviewCost: 0.05, ops: 30000, errorCost: 2500, price: 0,   tag: 'High-volume voice agent (per-minute economics).' }
];

/* Strategic takeaways — five-line stack framing */
var APPS_TAKEAWAYS = [
  'Energy decides whether compute can exist.',
  'Chips decide how efficiently electricity becomes computation.',
  'Infrastructure decides whether computation becomes a reliable system.',
  'Models decide what the system can understand, generate, reason about and act on.',
  'Applications decide where capability creates value.'
];

/* Misconceptions — kept short; the deeper "bad patterns" list does the heavy lifting */
var APPS_MISCONCEPTIONS = [
  { myth: 'Smarter model = better product.',                        truth: 'Workflow fit, integration, distribution and trust decide the product. Capability is necessary, not sufficient.' },
  { myth: 'A wrapper is always a bad business.',                    truth: 'A thin wrapper without a wedge is. A "wrapper" with proprietary data, distribution and workflow is a category-leader in waiting.' },
  { myth: 'Agents will automate every job.',                        truth: 'Agents automate bounded, repeatable, measurable tasks well. The rest of the job — judgement, trust, accountability, change — is still human.' },
  { myth: 'Chat is the right interface for AI.',                    truth: 'Sometimes. Often the right interface is a button, a side panel, a review queue or an ambient action — not a chat box.' },
  { myth: 'Vertical AI always beats horizontal AI.',                truth: 'When the task is broad and the user values flexibility, horizontal wins. Vertical wins when context, compliance and distribution compound.' },
  { myth: 'Open-source AI products will commoditise the layer.',     truth: 'Open weights commoditise the model. They do not commoditise data, integration, distribution, trust or operational excellence.' },
  { myth: 'A great demo means production is close.',                 truth: 'Demos are 1% of the work. The 99% is the unhappy path: errors, edge cases, security, evaluation, audit.' },
  { myth: 'AI will eliminate enterprise software.',                 truth: 'AI is reshaping the seats above the database, not the database itself. Most "AI native" products end up enterprise software with AI inside.' }
];

/* Sources, grouped */
var APPS_SOURCES_GROUPED = [
  {
    group: 'Operator + product docs',
    items: [
      { label: 'OpenAI — platform + agent SDK',                 url: 'https://platform.openai.com/docs' },
      { label: 'Anthropic Claude — docs + system cards',         url: 'https://docs.anthropic.com/' },
      { label: 'Google AI — docs (Gemini, Vertex AI)',           url: 'https://ai.google.dev/' },
      { label: 'Microsoft Copilot product hub',                  url: 'https://www.microsoft.com/en-us/microsoft-copilot' },
      { label: 'GitHub Copilot product page',                    url: 'https://github.com/features/copilot' },
      { label: 'Cursor product docs',                            url: 'https://docs.cursor.com/' },
      { label: 'Glean product overview',                         url: 'https://www.glean.com/product' },
      { label: 'Harvey product overview',                        url: 'https://www.harvey.ai/' },
      { label: 'Sierra customer-experience product overview',    url: 'https://sierra.ai/' },
      { label: 'Perplexity product page',                        url: 'https://www.perplexity.ai/' },
      { label: 'Salesforce Einstein + Agentforce',               url: 'https://www.salesforce.com/agentforce/' },
      { label: 'ServiceNow Now Assist',                          url: 'https://www.servicenow.com/products/now-assist.html' },
      { label: 'Intercom Fin product page',                      url: 'https://www.intercom.com/fin' }
    ]
  },
  {
    group: 'Strategy + research',
    items: [
      { label: 'Stanford AI Index',                              url: 'https://aiindex.stanford.edu/' },
      { label: 'Microsoft Work Trend Index',                     url: 'https://www.microsoft.com/en-us/worklab/work-trend-index' },
      { label: 'McKinsey on generative AI',                      url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai' },
      { label: 'BCG on enterprise AI',                           url: 'https://www.bcg.com/capabilities/artificial-intelligence' },
      { label: 'Bain on AI in the enterprise',                   url: 'https://www.bain.com/insights/topics/artificial-intelligence/' },
      { label: 'Gartner Hype Cycle for AI (use carefully)',      url: 'https://www.gartner.com/en/articles/what-s-new-in-the-2024-gartner-hype-cycle-for-ai' }
    ]
  },
  {
    group: 'Productivity + workforce',
    items: [
      { label: 'NBER + academic productivity studies (search)',  url: 'https://www.nber.org/' },
      { label: 'METR — agent + time-horizon evaluations',        url: 'https://metr.org/' },
      { label: 'MLCommons — MLPerf',                              url: 'https://mlcommons.org/benchmarks/' }
    ]
  },
  {
    group: 'Safety + governance',
    items: [
      { label: 'NIST AI Risk Management Framework',              url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
      { label: 'OECD AI Principles',                             url: 'https://oecd.ai/en/ai-principles' },
      { label: 'EU AI Act overview',                             url: 'https://artificialintelligenceact.eu/' }
    ]
  }
];
