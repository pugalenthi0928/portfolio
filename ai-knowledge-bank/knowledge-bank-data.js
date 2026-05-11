/* ============================================
   AI KNOWLEDGE BANK — Data
   Book 001 source: Artificial Intelligence: A Modern Approach (3rd ed)
   by Stuart Russell and Peter Norvig.
   Schema: bookId / phaseId / named difficulty / full-name domains and types;
   flashcards and quizzes are separate objects referencing questionId.
   ============================================ */

/* ---------- 1. KB_BOOKS — featured book ---------- */
var KB_BOOKS = [{
  "id": "001",
  "idLabel": "001",
  "title": "Artificial Intelligence: A Modern Approach",
  "authors": "Stuart Russell & Peter Norvig",
  "edition": "3rd Edition",
  "year": "2010",
  "publisher": "Pearson",
  "category": "Classical AI foundation",
  "status": "Processed",
  "sourceNote": "Book 001 source: Artificial Intelligence: A Modern Approach, 3rd Edition, Stuart Russell and Peter Norvig. Pearson, 2010. Questions are paraphrased and organised for learning; the original framing belongs to the authors.",
  "desc": "The classical AI backbone: rational agents, search, logic, planning, uncertainty, decision theory, learning, NLP, perception, robotics, philosophy, ethics, and the future of AI.",
  "stats": {
    "chapters": 27,
    "phases": 7,
    "questions": 227,
    "flashcards": 222,
    "quiz": 77
  },
  "synthesis": {
    "coreThesis": "AI is best understood as the design of intelligent agents that perceive, reason, learn, decide, and act under uncertainty.",
    "whatThisBookTeaches": "The book teaches the classical foundations of AI: agents, search, logic, planning, probability, decision theory, learning, NLP, perception, robotics, ethics, and philosophical questions.",
    "whereItFitsInAI": "This is the foundation layer of the AI Knowledge Bank. Later books on deep learning, LLMs, AI engineering, alignment, economics, and geopolitics should connect back to these agent-based foundations.",
    "strongestIdeas": [
      "AI as rational agency",
      "PEAS task specification",
      "Search as problem solving",
      "Logic as explicit reasoning",
      "Probability as reasoning under uncertainty",
      "Utility as the bridge from belief to action",
      "Learning as improvement from experience",
      "Robotics as embodied agency",
      "Safety as a problem of objectives, control, and future consequences"
    ],
    "limitations": [
      "The 3rd edition predates modern Transformers, large language models, diffusion models, current frontier model scaling, RLHF, RAG, and modern AI agents.",
      "Deep learning is covered only in earlier neural-network form, not in the modern foundation-model era.",
      "It gives the classical backbone, but not the full modern AI stack of chips, data centres, LLM scaling, AI geopolitics, and production AI engineering."
    ],
    "modernRelevance": [
      "The rational-agent framing is still central to modern AI agents.",
      "Search, planning, state tracking, utility, uncertainty, and action are becoming important again in tool-using AI systems.",
      "The book’s distinction between capability, rationality, uncertainty, learning, and risk is essential for understanding modern AI."
    ],
    "questionsThisBookRaises": [
      "Is an LLM a model, an agent, or a component inside an agent?",
      "Can rational agency exist without consciousness?",
      "Can alignment be framed as utility design plus control?",
      "What happens when AI systems gain more autonomy in real environments?",
      "Is modern AI moving back toward the agent architecture AIMA described?"
    ]
  }
}];

/* ---------- 2. KB_NEXT_BOOKS — placeholders ---------- */
var KB_NEXT_BOOKS = [
  {
    "idLabel": "002",
    "title": "Deep Learning",
    "short": "Goodfellow, Bengio, Courville — the deep-learning textbook.",
    "tag": "Coming next"
  },
  {
    "idLabel": "003",
    "title": "Probabilistic Machine Learning",
    "short": "Murphy — modern probabilistic ML, generative models, Bayesian deep learning.",
    "tag": "Coming next"
  },
  {
    "idLabel": "004",
    "title": "Reinforcement Learning",
    "short": "Sutton &amp; Barto — the canonical RL reference.",
    "tag": "Coming next"
  },
  {
    "idLabel": "005",
    "title": "AI Engineering",
    "short": "Production AI systems: data, training pipelines, evaluation, serving.",
    "tag": "Coming next"
  },
  {
    "idLabel": "006",
    "title": "Human Compatible",
    "short": "Russell on alignment, the off-switch problem, and beneficial AI.",
    "tag": "Coming next"
  },
  {
    "idLabel": "007",
    "title": "The Alignment Problem",
    "short": "Christian — machine learning meets human values.",
    "tag": "Coming next"
  },
  {
    "idLabel": "008",
    "title": "Prediction Machines",
    "short": "Agrawal, Gans, Goldfarb — the economics of cheap prediction.",
    "tag": "Coming next"
  }
];

/* ---------- 3. KB_LEVELS — named difficulty ---------- */
var KB_LEVELS = [
  {
    "id": "Beginner",
    "short": "Vocabulary and core definitions"
  },
  {
    "id": "Builder",
    "short": "How AI systems are made"
  },
  {
    "id": "Technical",
    "short": "Algorithms and theory"
  },
  {
    "id": "Researcher",
    "short": "Open problems and the frontier"
  },
  {
    "id": "Frontier",
    "short": "Civilisation-scale and unanswered"
  }
];

/* ---------- 4. KB_TYPES — named question types ---------- */
var KB_TYPES = [
  {
    "id": "Conceptual"
  },
  {
    "id": "Technical"
  },
  {
    "id": "Mathematical"
  },
  {
    "id": "Engineering"
  },
  {
    "id": "Product"
  },
  {
    "id": "Business"
  },
  {
    "id": "Safety"
  },
  {
    "id": "Ethics"
  },
  {
    "id": "Philosophical"
  },
  {
    "id": "Geopolitical"
  },
  {
    "id": "Interview"
  },
  {
    "id": "Founder"
  },
  {
    "id": "Research"
  },
  {
    "id": "Mind-Bending"
  },
  {
    "id": "Economic"
  },
  {
    "id": "Forecasting"
  }
];

/* ---------- 5. KB_DOMAINS — 23 AI domains ---------- */
var KB_DOMAINS = [
  {
    "id": "AI Foundations",
    "short": "What AI is and what intelligence even means."
  },
  {
    "id": "Intelligent Agents",
    "short": "Rationality, PEAS, environments, agent types."
  },
  {
    "id": "Search and Problem Solving",
    "short": "State spaces, uninformed and informed search, heuristics."
  },
  {
    "id": "Games and Adversarial Search",
    "short": "Minimax, alpha-beta, stochastic games, MCTS."
  },
  {
    "id": "Constraint Satisfaction",
    "short": "Variables, constraints, propagation, backtracking."
  },
  {
    "id": "Logic and Inference",
    "short": "Propositional and first-order logic, resolution, theorem proving."
  },
  {
    "id": "Knowledge Representation",
    "short": "Ontologies, frames, semantic networks, reasoning."
  },
  {
    "id": "Planning",
    "short": "Classical, hierarchical, and planning under uncertainty."
  },
  {
    "id": "Uncertainty and Probability",
    "short": "Quantifying uncertainty in beliefs and actions."
  },
  {
    "id": "Bayesian Networks",
    "short": "Probabilistic graphical models and inference."
  },
  {
    "id": "Temporal Models",
    "short": "HMMs, Kalman filters, particle filters, DBNs."
  },
  {
    "id": "Utility and Decision Theory",
    "short": "Preferences, expected utility, value of information."
  },
  {
    "id": "MDPs and POMDPs",
    "short": "Sequential decision-making under uncertainty."
  },
  {
    "id": "Machine Learning",
    "short": "Learning from examples, models, generalisation."
  },
  {
    "id": "Probabilistic Learning",
    "short": "Bayesian learning, EM, latent-variable models."
  },
  {
    "id": "Reinforcement Learning",
    "short": "Learning from rewards, exploration, policy and value."
  },
  {
    "id": "Natural Language Processing",
    "short": "Statistical and structured language understanding."
  },
  {
    "id": "Perception and Computer Vision",
    "short": "Vision, image understanding, multimodal perception."
  },
  {
    "id": "Robotics and Embodied AI",
    "short": "Control, motion, manipulation, sensor fusion."
  },
  {
    "id": "Philosophy of AI",
    "short": "Mind, intentionality, consciousness, the Chinese Room."
  },
  {
    "id": "AI Ethics and Risk",
    "short": "Fairness, accountability, social risk, dual-use."
  },
  {
    "id": "AI Safety and Alignment",
    "short": "Corrigibility, the off-switch, value alignment."
  },
  {
    "id": "Frontier Questions",
    "short": "Open problems beyond the third edition."
  }
];

/* ---------- 6. KB_PHASES — 7 thematic phases ---------- */
var KB_PHASES = [
  {
    "id": "aima-v01",
    "label": "v0.1",
    "chapters": "1–2",
    "theme": "AI foundations and intelligent agents",
    "domains": [
      "AI Foundations",
      "Intelligent Agents"
    ],
    "summary": "The book opens with what AI is, what it studies, and the rational-agent framework that organises everything that follows. PEAS, environment types, agent architectures, and the role of learning are all introduced before any algorithm.",
    "keyIdeas": [
      "Acting rationally is the most useful definition of AI; it is precise, mathematically tractable, and covers every subfield.",
      "PEAS (Performance measure, Environment, Actuators, Sensors) is the design tool that forces clarity before you pick a model.",
      "Environment type (observable, deterministic, episodic, static, discrete, single-agent) decides which agent architecture and algorithms are viable.",
      "Four canonical agent types: simple reflex, model-based, goal-based, utility-based — each adds machinery the previous lacks.",
      "Learning is treated as a property of the agent, not a separate field; modern ML fits inside this skeleton."
    ]
  },
  {
    "id": "aima-v02",
    "label": "v0.2",
    "chapters": "3–6",
    "theme": "Search, games, optimisation, and constraint satisfaction",
    "domains": [
      "Search and Problem Solving",
      "Games and Adversarial Search",
      "Constraint Satisfaction"
    ],
    "summary": "A search-first view of problem solving: how to formulate state spaces, when uninformed search works, when heuristics buy tractability, how adversarial games change the optimality criterion, and how constraint satisfaction exposes structure that generic search ignores.",
    "keyIdeas": [
      "Five-component problem spec (initial state, actions, transitions, goal test, path cost) catches missing structure before you choose an algorithm.",
      "A* with an admissible heuristic is optimal and complete; consistency makes it optimally efficient.",
      "Local search (hill climbing, simulated annealing, genetic algorithms) accepts incompleteness to handle huge state spaces.",
      "Minimax + alpha-beta is the canonical adversarial-search pattern; MCTS replaced it for games with huge branching factors.",
      "Constraint propagation plus backtracking exploits structure that generic search wastes — the basis of modern scheduling and SAT solvers."
    ]
  },
  {
    "id": "aima-v03",
    "label": "v0.3",
    "chapters": "7–12",
    "theme": "Logic, knowledge representation, inference, and planning",
    "domains": [
      "Logic and Inference",
      "Knowledge Representation",
      "Planning"
    ],
    "summary": "Knowledge-based agents that TELL and ASK a knowledge base, propositional and first-order logic, soundness and completeness of inference, and the leap from problem-solving search to factored planning with PDDL.",
    "keyIdeas": [
      "A knowledge-based agent stores sentences and acts by inference; logic gives it the language to reason about many states at once.",
      "Soundness and completeness are the two correctness properties of any inference procedure; the ideal is both.",
      "First-order logic adds objects, relations, and quantifiers — expressive but only semidecidable in general.",
      "Horn clauses and resolution are the tractable corner where Prolog-style inference and most theorem provers actually live.",
      "Planning is search with factored state and action representations; PDDL standardises the language, and PDDL planners exploit structure search cannot."
    ]
  },
  {
    "id": "aima-v04",
    "label": "v0.4",
    "chapters": "13–17",
    "theme": "Uncertainty, Bayesian reasoning, utility, MDPs, and POMDPs",
    "domains": [
      "Uncertainty and Probability",
      "Bayesian Networks",
      "Temporal Models",
      "Utility and Decision Theory",
      "MDPs and POMDPs"
    ],
    "summary": "The transition from logical to probabilistic AI: Bayes’ rule, Bayesian networks, dynamic models over time (HMMs, Kalman filters), utility as the bridge from belief to action, and MDPs/POMDPs as the canonical frameworks for sequential decisions under uncertainty.",
    "keyIdeas": [
      "Probability is the rational agent’s language for uncertainty; Bayes’ rule is how it updates belief from evidence.",
      "Bayesian networks compactly encode joint distributions using conditional independence; d-separation reads independence off the graph.",
      "Temporal models (HMMs, Kalman filters, particle filters, DBNs) extend Bayesian reasoning over time and dominate state estimation in engineering.",
      "Expected utility maximisation is what the vNM axioms imply for a consistent rational agent; risk attitudes live in utility curvature.",
      "POMDPs are the realistic framework for partially-observable real-world decisions; MDPs are the special case where state is fully visible."
    ]
  },
  {
    "id": "aima-v05",
    "label": "v0.5",
    "chapters": "18–21",
    "theme": "Machine learning, probabilistic learning, and reinforcement learning",
    "domains": [
      "Machine Learning",
      "Probabilistic Learning",
      "Reinforcement Learning"
    ],
    "summary": "Learning as searching the hypothesis space for one that fits the data and generalises. Supervised, probabilistic, and reinforcement learning are introduced as three answers to different forms of the same problem: how should an agent improve its rationality from experience.",
    "keyIdeas": [
      "Generalisation, not memorisation, is the whole point of ML; regularisation, cross-validation, and inductive bias are how you get it.",
      "Decision trees, SVMs, neural networks, and ensembles are different ways to navigate the bias–variance trade-off.",
      "Probabilistic learning maintains distributions over parameters or latent variables; EM is the canonical algorithm for hidden variables.",
      "Reinforcement learning is not supervised learning; sparse delayed reward forces credit assignment and exploration vs exploitation.",
      "Q-learning, policy gradient, and modern actor-critic methods all instantiate the Bellman view of optimal sequential decisions."
    ]
  },
  {
    "id": "aima-v06",
    "label": "v0.6",
    "chapters": "22–25",
    "theme": "NLP, perception, and robotics",
    "domains": [
      "Natural Language Processing",
      "Perception and Computer Vision",
      "Robotics and Embodied AI"
    ],
    "summary": "Communication, sensing, and action: statistical language processing, image-to-3D-world inference, and the engineering of robots that perceive, plan, and act in physical environments. This phase aged the fastest, but its framing of language and perception still organises modern debates.",
    "keyIdeas": [
      "NLP in the 3rd edition is a stacked pipeline (morphology, syntax, semantics, pragmatics); modern foundation models collapse the stack but the vocabulary still helps when debugging.",
      "Perception extracts features from sensor data; inference reasons about what they mean for the world; modern multimodal models collapse the two.",
      "Robotics is harder than chat because it runs in continuous, partially-observable, irreversible physical environments with unforgiving latency.",
      "SLAM, motion planning, sensor fusion, and configuration-space reasoning underpin every shipped robot.",
      "Embodied AI is the natural successor of this phase; whether intelligence requires embodiment remains contested."
    ]
  },
  {
    "id": "aima-v07",
    "label": "v0.7",
    "chapters": "26–27",
    "theme": "Philosophy, ethics, risks, and the future of AI",
    "domains": [
      "Philosophy of AI",
      "AI Ethics and Risk",
      "AI Safety and Alignment",
      "Frontier Questions"
    ],
    "summary": "The book closes with the philosophical foundations (intentionality, consciousness, the Chinese Room), the social and ethical implications, and Russell’s framing of AI safety as a problem of objectives, control, and the off-switch — which his later book Human Compatible extends.",
    "keyIdeas": [
      "Weak AI vs strong AI: an engineering target vs a philosophical claim; the book argues we should not conflate them.",
      "The Chinese Room argument is one famous attempt to separate behavior from understanding; what it actually establishes is contested.",
      "A capable agent can be dangerous without being conscious; risk comes from capability, autonomy, and goal-specification.",
      "Russell’s off-switch problem extends rational agency into safety: agents uncertain over their reward are more corrigible.",
      "Complete intelligent agents combine reflex and deliberation, learn over time, and remain auditable — the open architectural question of the decade."
    ]
  }
];

/* ---------- 7. KB_SOURCE_NOTE ---------- */
var KB_SOURCE_NOTE = "Book 001 source: Artificial Intelligence: A Modern Approach, 3rd Edition, Stuart Russell and Peter Norvig. Pearson, 2010. Questions are paraphrased and organised for learning; the original framing belongs to the authors.";

/* ---------- 8. KB_BANK — 227 questions across all phases ---------- */
var KB_BANK = [
  {
    "id": "F1.1",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 1,
    "domain": "AI Foundations",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "What is the rational-agent view of AI, and why is it the unifying frame for the book?",
    "whyItMatters": "Russell &amp; Norvig deliberately picked rationality over \"thinking like a human\" or \"thinking logically\" as the organising frame. Knowing which frame you are reasoning from changes every design decision.",
    "shortAnswer": "A rational agent acts to maximise its expected performance given its percepts and the knowledge it has built from them. The book uses this frame because it is precise, mathematically tractable, and covers every AI subfield: search, logic, learning and robotics all become ways to build more rational agents.",
    "deepExplanation": "The frame avoids unanswerable arguments about consciousness or \"real\" intelligence — it asks only \"does this system do the right thing?\".",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Modern LLM-based agents are graded the same way: did they achieve the user goal given the percepts and tools available?",
    "tags": [
      "foundations",
      "rationality",
      "framing"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F1.2",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 1,
    "domain": "AI Foundations",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "What are the four classical views of AI, and how are they different?",
    "whyItMatters": "Decades of AI debates trace back to whether you think AI should think like humans, act like humans, think rationally, or act rationally.",
    "shortAnswer": "Thinking humanly (cognitive science), acting humanly (Turing test), thinking rationally (logicist tradition), acting rationally (rational-agent tradition). The book argues that \"acting rationally\" is the most useful and the most general.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "foundations",
      "history",
      "definitions"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F1.3",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 1,
    "domain": "AI Foundations",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "Why does Russell &amp; Norvig prefer \"acting rationally\" over \"thinking like a human\"?",
    "whyItMatters": "Most arguments about whether AI is \"really\" intelligent collapse into this question.",
    "shortAnswer": "Rationality is mathematically defined: doing the action that maximises expected performance given what you know. \"Thinking like a human\" requires cognitive-science answers we do not yet have, and is unnecessary for engineering useful systems.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "foundations",
      "framing",
      "philosophy"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F1.4",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 1,
    "domain": "AI Foundations",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What does the Turing Test actually test, and what does it not?",
    "whyItMatters": "The Turing Test is the most-cited and most-misunderstood AI benchmark.",
    "shortAnswer": "It tests whether a system can behave indistinguishably from a human in a text conversation. It does not test understanding, consciousness, or general competence — it tests imitation of conversational behavior.",
    "deepExplanation": "Modern LLMs routinely pass casual Turing-style tests without anyone seriously claiming they are conscious.",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "foundations",
      "turing",
      "evaluation"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F1.5",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 1,
    "domain": "AI Foundations",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is the difference between weak AI and strong AI, in the book's sense?",
    "whyItMatters": "A vocabulary distinction that still shapes safety and capability debates.",
    "shortAnswer": "Weak AI: systems that behave intelligently on specific tasks. Strong AI: systems that genuinely have minds and consciousness. The book argues that the engineering project is weak AI; strong AI is a philosophical claim, not an engineering target.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "foundations",
      "vocabulary",
      "philosophy"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F1.6",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 1,
    "domain": "AI Foundations",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "Why does the book argue that AI is unified by the rational-agent design problem?",
    "whyItMatters": "AI looks like dozens of unrelated topics; the book deliberately threads them through one frame.",
    "shortAnswer": "Search picks rational actions when the world is fully known. Logic picks rational beliefs and actions when the world is described symbolically. Probability handles uncertainty in beliefs. Learning improves rationality from experience. Robotics extends rational action into the physical world. The rational agent is the common spine.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "foundations",
      "unification",
      "structure"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F1.7",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 1,
    "domain": "AI Foundations",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is the difference between an algorithm, a program, and an agent in this framing?",
    "whyItMatters": "Agent-speak is loose in industry; the book defines it tightly.",
    "shortAnswer": "An algorithm specifies a method. A program is a concrete implementation. An agent is anything that perceives an environment through sensors and acts on it through actuators — algorithms and programs become agents when they are embedded in a perceive-act loop.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "foundations",
      "vocabulary"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F1.8",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 1,
    "domain": "AI Foundations",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "Why has AI had several \"AI winters\", and what do they share?",
    "whyItMatters": "Knowing the failure modes helps predict the next disappointment cycle.",
    "shortAnswer": "Each winter followed an over-promise based on early successes (rule systems, expert systems, early neural nets). When real-world complexity exceeded the methods' assumptions, funding collapsed. The pattern repeats whenever capability claims outrun what the method can actually deliver.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "foundations",
      "history",
      "hype"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F1.9",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 1,
    "domain": "AI Foundations",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "Where does the book place AI in relation to philosophy, mathematics, economics, neuroscience, psychology, and engineering?",
    "whyItMatters": "AI is genuinely cross-disciplinary; one origin story misses the depth.",
    "shortAnswer": "Philosophy gave logic and the question of mind. Mathematics gave proof, computation, probability. Economics gave decision theory and utility. Neuroscience gave the brain as evidence. Psychology gave behavior and learning. Computer engineering gave the substrate. Each contributed a piece of the rational-agent framework.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "foundations",
      "history",
      "interdisciplinary"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F1.10",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 1,
    "domain": "AI Foundations",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What does \"doing the right thing\" mean in this book?",
    "whyItMatters": "A deceptively simple phrase that anchors the whole framework.",
    "shortAnswer": "Doing the right thing means maximising the expected value of the agent's performance measure, given its percepts so far. Right is defined relative to a measure, not in absolute terms — which makes performance-measure design itself a core part of AI engineering.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "foundations",
      "rationality",
      "performance"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F1.11",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 1,
    "domain": "AI Foundations",
    "difficulty": "Researcher",
    "type": "Philosophical",
    "question": "Is the rational-agent view sufficient for understanding human intelligence?",
    "whyItMatters": "Russell &amp; Norvig are explicit that it is not.",
    "shortAnswer": "Rationality describes idealised optimal behavior. Humans systematically deviate from it because of bounded computation, emotion, social context, and developmental history. The frame is a useful tool, not a complete theory of human cognition.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "foundations",
      "limits",
      "cognition"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F1.12",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 1,
    "domain": "AI Foundations",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What did Dartmouth 1956 actually commit to, and how has the field updated?",
    "whyItMatters": "The founding ambition shaped 70 years of expectation.",
    "shortAnswer": "Dartmouth proposed that \"every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it\". The ambition is still active; the timetable has been wrong by half a century, and the methods have rotated repeatedly.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "foundations",
      "history",
      "dartmouth"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F1.13",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 1,
    "domain": "AI Foundations",
    "difficulty": "Researcher",
    "type": "Forecasting",
    "question": "Has the field of AI made progress since the book was written in 2010?",
    "whyItMatters": "A reality check on the book's 2010 framing.",
    "shortAnswer": "Enormous progress on capability: deep learning, scaling, multimodal models, RL, modern agents. Mixed progress on the deep questions the book raised: reasoning, common sense, knowledge representation, alignment, and robotics. The rational-agent framework holds; many of the techniques have changed.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "foundations",
      "modern",
      "history"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F1.14",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 1,
    "domain": "AI Foundations",
    "difficulty": "Frontier",
    "type": "Forecasting",
    "question": "What does Russell &amp; Norvig's 2010 framing miss about 2026 AI?",
    "whyItMatters": "A useful exercise in updating from a strong but dated source.",
    "shortAnswer": "The book underestimates how far statistical pattern learning would scale, the dominance of pretraining, the strategic role of compute and energy, and the speed at which language-model-shaped agents would arrive. It still nails the agent-design problem, evaluation discipline, and the safety questions worth taking seriously.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Russell's later book Human Compatible (2019) closes some of these gaps; the AIMA 4th edition closes more.",
    "tags": [
      "foundations",
      "modern",
      "update"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F2.1",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 2,
    "domain": "Intelligent Agents",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "What does PEAS describe, and why is it useful when designing AI systems?",
    "whyItMatters": "PEAS is the book's practical tool for specifying any AI task before you build.",
    "shortAnswer": "PEAS stands for Performance measure, Environment, Actuators, and Sensors. It forces you to name what success means, what the world looks like, what the agent can do, and what it can see — before you pick any algorithm.",
    "deepExplanation": "Most failed AI products skip PEAS and pick the model first.",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "agents",
      "peas",
      "design"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F2.2",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 2,
    "domain": "Intelligent Agents",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "What is a rational agent, in the book's formal definition?",
    "whyItMatters": "A precise definition that supports the whole framework.",
    "shortAnswer": "A rational agent is one that, for each possible percept sequence, selects an action that maximises the expected value of its performance measure given the evidence provided by the percept sequence and any built-in knowledge.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "agents",
      "rationality",
      "definition"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F2.3",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 2,
    "domain": "Intelligent Agents",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is the difference between a reflex agent, a model-based agent, a goal-based agent, and a utility-based agent?",
    "whyItMatters": "A spectrum of agent architectures that maps to most AI systems.",
    "shortAnswer": "Reflex agent: action depends only on current percept. Model-based: maintains internal state about the world. Goal-based: has explicit goals and chooses actions to reach them. Utility-based: weighs outcomes by a utility function and chooses the best expected outcome. Each adds machinery the previous lacks.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "agents",
      "architectures"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F2.4",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 2,
    "domain": "Intelligent Agents",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is the difference between a fully observable and a partially observable environment?",
    "whyItMatters": "Partial observability is what makes real-world AI hard.",
    "shortAnswer": "In a fully observable environment, the agent's sensors give access to the complete state of the environment. In a partially observable environment, the agent must maintain belief about hidden state. Most real-world problems are partially observable.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "agents",
      "environments"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F2.5",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 2,
    "domain": "Intelligent Agents",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is the difference between a deterministic and a stochastic environment?",
    "whyItMatters": "Stochasticity changes which algorithms can succeed.",
    "shortAnswer": "Deterministic: the next state is fully determined by the current state and the agent's action. Stochastic: there is randomness in outcomes. Even strategic environments (with other agents) often look stochastic to the agent.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "agents",
      "environments"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F2.6",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 2,
    "domain": "Intelligent Agents",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is the difference between an episodic and a sequential environment?",
    "whyItMatters": "Sequential is where credit assignment becomes hard.",
    "shortAnswer": "In an episodic environment, the agent's next decision does not depend on previous actions — each action stands alone. In a sequential environment, current decisions affect future opportunities. Most real-world AI is sequential.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "agents",
      "environments"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F2.7",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 2,
    "domain": "Intelligent Agents",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is the difference between a static, dynamic, and semi-dynamic environment?",
    "whyItMatters": "Dynamics put time pressure on the agent.",
    "shortAnswer": "Static: the environment does not change while the agent deliberates. Dynamic: the environment changes during deliberation, so slow thinking has consequences. Semi-dynamic: the world is static but the performance measure depends on time (e.g. chess with a clock).",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "agents",
      "environments"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F2.8",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 2,
    "domain": "Intelligent Agents",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is the difference between a single-agent and a multi-agent environment?",
    "whyItMatters": "Multi-agent is where game theory and adversarial reasoning enter.",
    "shortAnswer": "Single-agent: the environment has no other agents whose actions affect the outcome. Multi-agent: other agents matter — they can be cooperative, competitive, or both. Multi-agent reasoning needs models of the other agents.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "agents",
      "environments",
      "multi-agent"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F2.9",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 2,
    "domain": "Intelligent Agents",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is the role of learning inside the agent framework?",
    "whyItMatters": "Learning is treated as a property of the agent, not a separate field.",
    "shortAnswer": "Learning is what allows an agent to improve its rationality from experience. The book frames learning as feeding back into the agent's percept-action mapping — through the performance element, the learning element, the critic, and the problem generator. Modern ML fits inside this skeleton.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "agents",
      "learning",
      "architecture"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F2.10",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 2,
    "domain": "Intelligent Agents",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is a percept, and why does the book distinguish percepts from sensors?",
    "whyItMatters": "A distinction that matters when sensor noise becomes important.",
    "shortAnswer": "A percept is the input the agent's perception produces from its sensors. The sensor is the physical channel; the percept is the interpretation. Separating them lets the agent reason about uncertainty in the channel without losing the abstraction.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "agents",
      "perception",
      "vocabulary"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F2.11",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 2,
    "domain": "Intelligent Agents",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "Why does the book argue that designing the agent function is the central AI problem?",
    "whyItMatters": "A small but consequential framing choice.",
    "shortAnswer": "The agent function maps percept sequences to actions. All of AI — search, logic, probability, learning, robotics — is methodology for building that function. Designing it well is the engineering target; running it efficiently is the implementation problem.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "agents",
      "framing",
      "architecture"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F2.12",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 2,
    "domain": "Intelligent Agents",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is the difference between the agent function and the agent program?",
    "whyItMatters": "A precision that catches a common confusion.",
    "shortAnswer": "The agent function is the abstract mapping from percept sequences to actions — possibly infinite to specify. The agent program is the finite, runnable implementation that approximates the function within compute and memory limits. The function is the spec; the program is the build.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "agents",
      "architecture"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F2.13",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 2,
    "domain": "Intelligent Agents",
    "difficulty": "Researcher",
    "type": "Product",
    "question": "How would you write a PEAS description for an AI customer-support copilot?",
    "whyItMatters": "PEAS as a real product-design tool, not just a textbook exercise.",
    "shortAnswer": "Performance: resolution rate, customer satisfaction, escalation accuracy, cost per ticket. Environment: helpdesk software, ticket queues, knowledge base, the customer. Actuators: draft responses, KB lookups, escalation actions, CRM writes. Sensors: ticket content, KB documents, customer history, sentiment signals.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Almost every \"AI agent product\" debate becomes clearer once PEAS is on the table.",
    "tags": [
      "agents",
      "peas",
      "product"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F2.14",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 2,
    "domain": "Intelligent Agents",
    "difficulty": "Researcher",
    "type": "Product",
    "question": "What is the performance measure your AI product is actually optimising?",
    "whyItMatters": "A founder-level question Russell &amp; Norvig force you to answer before building.",
    "shortAnswer": "Most teams cannot answer this without thinking. The honest answer is rarely \"user goal\" — it is usually some proxy: engagement, response length, refusal rate, latency, cost. Wrong performance measures produce confidently-wrong systems.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "agents",
      "performance",
      "product"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F2.15",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 2,
    "domain": "Intelligent Agents",
    "difficulty": "Technical",
    "type": "Product",
    "question": "What environment type does a modern LLM chatbot operate in?",
    "whyItMatters": "A useful cross-check between the book and current systems.",
    "shortAnswer": "Partially observable (it cannot see the user's screen or context), stochastic (its own outputs are probabilistic), sequential (conversation history matters), dynamic only weakly (the user waits), discrete (tokens), single-agent from its own perspective. The classification immediately suggests where it will fail.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "agents",
      "environments",
      "modern"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F2.16",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 2,
    "domain": "Intelligent Agents",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What is the difference between an agent and a workflow, from the book's perspective?",
    "whyItMatters": "A definitional cut that matters for modern AI product design.",
    "shortAnswer": "A workflow is a fixed program — the steps are decided at design time. An agent is a system whose actions are chosen at run time by a function over its percepts. Many \"AI agents\" sold today are workflows with a model inside; the distinction matters when you debug them.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "agents",
      "product",
      "modern"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F2.17",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 2,
    "domain": "Intelligent Agents",
    "difficulty": "Frontier",
    "type": "Forecasting",
    "question": "If you cannot write a PEAS description for your AI system, can you ship it?",
    "whyItMatters": "A test masquerading as a question.",
    "shortAnswer": "You can ship it, but you should not trust it. Without an explicit performance measure, environment, actuator scope and sensor scope, you cannot evaluate it, you cannot debug it, and you cannot govern it. Russell &amp; Norvig's answer is no in the engineering sense.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "agents",
      "peas",
      "product"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "H1.1",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 1,
    "domain": "AI Foundations",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "When did AI become a formal field, and why is the date contested?",
    "whyItMatters": "A useful counter to the \"AI started with ChatGPT\" view.",
    "shortAnswer": "The Dartmouth Summer Research Project in 1956 is the conventional founding date. The contesting answer notes earlier work by Turing, McCulloch &amp; Pitts, and Shannon. The field starts in the late 1940s; the name was coined in 1956.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "history",
      "dartmouth",
      "origins"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "H1.2",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 1,
    "domain": "AI Foundations",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What was the \"physical symbol system hypothesis\" and why does it matter?",
    "whyItMatters": "It frames a debate that ran for forty years.",
    "shortAnswer": "Newell &amp; Simon's claim that a physical symbol system has the necessary and sufficient means for general intelligent action. Symbolic AI took it as the working hypothesis. Connectionism and deep learning challenged it; modern AI shows that statistical pattern learning can produce a lot of what looks like symbolic reasoning.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "history",
      "symbolic",
      "connectionist"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "H1.3",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 1,
    "domain": "AI Foundations",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What were the two major AI winters, and what triggered them?",
    "whyItMatters": "Cycles of hype and collapse are a recurring feature of AI funding.",
    "shortAnswer": "The first followed early MT and perceptron over-claims and ended in the mid-1970s. The second followed expert-system commercial collapse in the late 1980s. Both triggered when capability promises exceeded delivered systems and governments cut funding.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "history",
      "winters",
      "hype"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "H1.4",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 1,
    "domain": "AI Foundations",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "Why did neural networks fall out of favour twice before deep learning won?",
    "whyItMatters": "The history that the deep-learning generation inherited.",
    "shortAnswer": "In the late 1960s Minsky &amp; Papert showed limits of single-layer perceptrons; in the 1990s neural networks lost to SVMs and Bayesian methods on most benchmarks. They won the third time because compute, data, optimisation tricks (initialisation, ReLU, residuals) and architectures (CNNs, RNNs, Transformers) all matured at once.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "history",
      "neural-networks"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "H1.5",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 1,
    "domain": "AI Foundations",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "Why do modern AI students underestimate how much of their stack already existed in 1990?",
    "whyItMatters": "Most \"new\" ideas in AI have older roots.",
    "shortAnswer": "Backpropagation, attention, RL with reward, Bayesian networks, MDPs, decision theory, knowledge representation, dialogue systems — all existed before 2000. What 2010-2025 added was scale, post-training, and the engineering glue that made these methods reliably work together. The conceptual stack is much older than the deployment stack.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "history",
      "modern",
      "perspective"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "M1.1",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 2,
    "domain": "AI Foundations",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "How does an LLM-based agent fit into Russell &amp; Norvig's agent taxonomy?",
    "whyItMatters": "A bridge between 2010 framing and 2026 systems.",
    "shortAnswer": "It is roughly a utility-based agent with learned components: percepts are tokens and tool outputs, actions are tool calls and responses, the model approximates both a world-model and a utility judgment. It is partially observable (it sees only what is in its context window) and stochastic (outputs are sampled).",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "modern",
      "agents",
      "llm"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "M1.2",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 1,
    "domain": "AI Foundations",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What did the deep-learning era prove that Russell &amp; Norvig's 2010 book did not anticipate?",
    "whyItMatters": "A reality check on the conceptual map.",
    "shortAnswer": "That sufficiently scaled statistical pattern learning on diverse data plus next-token prediction can produce much of what looked like it required hand-coded symbolic reasoning. Many of the conceptual chapters of AIMA (search, logic, planning) are still right, but the surprise is how much capability emerged from scaling pretraining.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "modern",
      "scaling",
      "update"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "M1.3",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 1,
    "domain": "AI Foundations",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "How should a modern AI engineer read AIMA in 2026?",
    "whyItMatters": "The book is large; reading it strategically matters.",
    "shortAnswer": "Read the agent framing carefully — it is the most durable contribution. Skim the symbolic-AI internals (chapters 7-12) for vocabulary, not for state-of-the-art techniques. Read the probability and decision-theory chapters carefully — they still ground modern thinking. Treat the NLP/vision chapters as historical context, not current practice.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "modern",
      "reading",
      "strategy"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "M1.4",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 2,
    "domain": "AI Foundations",
    "difficulty": "Researcher",
    "type": "Product",
    "question": "Why do modern AI product debates still come back to PEAS?",
    "whyItMatters": "Because PEAS is product strategy in disguise.",
    "shortAnswer": "Every modern \"is this an AI product?\" debate is really an argument about its performance measure, its environment, its actuators, and its sensors. Teams that cannot write a clean PEAS for their AI feature are usually shipping a demo, not a product. The vocabulary is 1995; the lesson is still 2026.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "modern",
      "product",
      "peas"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "M1.5",
    "bookId": "001",
    "phaseId": "aima-v01",
    "chapter": 2,
    "domain": "AI Foundations",
    "difficulty": "Frontier",
    "type": "Forecasting",
    "question": "Are LLM-based systems closer to MDPs or POMDPs, in Russell &amp; Norvig's sense?",
    "whyItMatters": "A research-grade reframing of modern AI agents.",
    "shortAnswer": "They are POMDPs in practice: the model never sees the true state of the world, only a partial percept (its context window) and the user's utterances. The internal \"belief\" is implicit and stored as tokens, not as a tracked probability distribution. Better belief-state representation is one of the most live research frontiers.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "modern",
      "pomdp",
      "research"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "S1.1",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 3,
    "domain": "Search and Problem Solving",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "When is search the right way to frame an AI problem?",
    "whyItMatters": "Search is the simplest agent design that still solves real problems.",
    "shortAnswer": "Search applies when the problem can be cast as states, actions, a transition model, a goal test, and a path cost. Whenever you can write those five components down, you can apply systematic search algorithms — and the question shifts from \"can we solve it?\" to \"can we afford the search?\".",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "search",
      "framing",
      "problem-solving"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S1.2",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 3,
    "domain": "Search and Problem Solving",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "What are the five components of a search problem in the book?",
    "whyItMatters": "A checklist that catches missing structure before you pick an algorithm.",
    "shortAnswer": "Initial state, actions available in each state, transition model (what each action does), goal test, and path cost. If any of these is missing or ill-defined, your search will be ill-defined too.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "search",
      "problem-spec"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S1.3",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 3,
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What is the difference between BFS and DFS, and when do you prefer each?",
    "whyItMatters": "The two foundational uninformed search strategies.",
    "shortAnswer": "Breadth-first search explores level by level, guaranteeing the shallowest goal but using exponential memory. Depth-first search goes deep first, using linear memory but risking infinite paths and non-optimal solutions. BFS for shallow goals and finite branching; DFS when memory is the binding constraint.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "search",
      "bfs",
      "dfs"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S1.4",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 3,
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What is uniform-cost search, and why is it more general than BFS?",
    "whyItMatters": "UCS is the foundation Dijkstra-style search and the prerequisite for A*.",
    "shortAnswer": "UCS expands the node with the lowest path cost so far, regardless of depth. When all step costs are equal, it reduces to BFS. When step costs differ, only UCS finds the optimal solution — BFS does not.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "search",
      "ucs",
      "optimality"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S1.5",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 3,
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What is iterative deepening, and why is it the practical workhorse for many problems?",
    "whyItMatters": "IDS combines DFS's memory with BFS's optimality.",
    "shortAnswer": "Iterative deepening runs depth-limited DFS with progressively larger limits. It uses linear memory like DFS but is complete and optimal for finite branching factors with unit step costs. The extra work of re-running shallow searches is small compared to the deepest level.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "search",
      "iterative-deepening"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S1.6",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 3,
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "Why is A* important, and what does it guarantee?",
    "whyItMatters": "A* is the most-used informed search algorithm and the prototype for many modern variants.",
    "shortAnswer": "A* expands nodes by f(n) = g(n) + h(n), where g is the cost so far and h is a heuristic estimate of the remaining cost. If h is admissible (never overestimates), A* is optimal and complete; if h is also consistent, A* is optimally efficient among admissible algorithms with the same heuristic.",
    "deepExplanation": "Modern search variants (IDA*, RBFS, weighted A*) trade off optimality for memory or speed.",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "search",
      "a-star",
      "heuristic"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S1.7",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 3,
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What is an admissible heuristic, and why does the property matter?",
    "whyItMatters": "Admissibility is the precondition for A*'s optimality.",
    "shortAnswer": "A heuristic h is admissible if for every node n, h(n) is never greater than the true cost from n to the goal. This guarantees A* will not be misled into ignoring an actually-cheaper path. Without admissibility, A* may return a suboptimal solution.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "search",
      "heuristic",
      "admissibility"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S1.8",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 3,
    "domain": "Search and Problem Solving",
    "difficulty": "Technical",
    "type": "Mathematical",
    "question": "What is consistency in a heuristic, and how is it different from admissibility?",
    "whyItMatters": "Consistency is the stronger property that makes A* efficient.",
    "shortAnswer": "A heuristic is consistent if for every node n and successor n', h(n) ≤ cost(n, n') + h(n'). Consistency implies admissibility but not vice versa. Consistency ensures A* never needs to re-expand a node, which is what gives it optimal efficiency.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "search",
      "heuristic",
      "consistency"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S1.9",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 3,
    "domain": "Search and Problem Solving",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "How are heuristics actually designed?",
    "whyItMatters": "A practical question; theoretical guarantees do not help without one.",
    "shortAnswer": "Common techniques: relax the problem (remove constraints), solve subproblems and use their cost, use pattern databases (precomputed costs to local goals), or learn the heuristic from data. The best heuristic for a domain is usually problem-specific, not generic.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "search",
      "heuristic",
      "design"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S1.10",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 3,
    "domain": "Search and Problem Solving",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is beam search, and what trade-off does it accept?",
    "whyItMatters": "Beam search is widely used in NLP decoding and is poorly understood.",
    "shortAnswer": "Beam search keeps only the k best states at each level, dropping the rest. It uses bounded memory but is incomplete — it can miss optimal solutions when good states are temporarily ranked low. Wider beams approach exhaustive search; narrower beams are greedy.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "search",
      "beam",
      "nlp"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S1.11",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 3,
    "domain": "Search and Problem Solving",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is the difference between informed and uninformed search?",
    "whyItMatters": "A foundational distinction in the search literature.",
    "shortAnswer": "Uninformed search uses only the problem definition (initial state, actions, goal test). Informed search additionally uses a heuristic — domain knowledge about the distance to the goal. Heuristics turn intractable searches into tractable ones.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "search",
      "heuristic",
      "vocabulary"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S1.12",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 3,
    "domain": "Search and Problem Solving",
    "difficulty": "Researcher",
    "type": "Product",
    "question": "How does the search framework apply to modern LLM-based agents?",
    "whyItMatters": "Many modern \"agent\" patterns are reinvented search.",
    "shortAnswer": "Tree-of-thoughts, MCTS-style reasoning, self-consistency sampling, and beam search over reasoning chains are all variants of classical search over a state space defined by partial reasoning traces. The 1995 vocabulary applies almost unchanged; the heuristic is now a learned model.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Reasoning models use search internally — the rational-agent view holds up.",
    "tags": [
      "search",
      "modern",
      "reasoning"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S2.1",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 4,
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "When does local search beat systematic search?",
    "whyItMatters": "Most large-scale optimisation in industry is local search.",
    "shortAnswer": "Local search wins when the state space is too large to enumerate, when you only need a good (not optimal) solution, and when memory is bounded. Hill climbing, simulated annealing, and genetic algorithms all trade systematic completeness for tractability.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "search",
      "local",
      "optimisation"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S2.2",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 4,
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What is the difference between hill climbing and simulated annealing?",
    "whyItMatters": "Both are local search; one escapes local optima, the other does not.",
    "shortAnswer": "Hill climbing always moves to a better neighbour and gets stuck in local optima. Simulated annealing sometimes accepts worse neighbours, with the probability of acceptance decreasing over time. The annealing schedule lets it escape local optima while eventually converging.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "optimisation",
      "simulated-annealing"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S2.3",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 4,
    "domain": "Search and Problem Solving",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What are genetic algorithms, and where do they actually work?",
    "whyItMatters": "GAs are often over-marketed and under-effective.",
    "shortAnswer": "GAs maintain a population of solutions, select fitter ones, and combine them via crossover and mutation. They are useful when the fitness landscape is highly multi-modal, when you can encode solutions as strings, and when domain-specific operators help recombination. On many problems, simpler local search beats them.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "optimisation",
      "genetic",
      "evolutionary"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S2.4",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 4,
    "domain": "Search and Problem Solving",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is online search, and when is it needed?",
    "whyItMatters": "Online search is what real agents actually do.",
    "shortAnswer": "Online search interleaves planning and action: the agent acts, observes the result, and updates its plan. It is necessary when the environment is unknown or partially observable, or when computing a full plan in advance is infeasible. Real robots are almost always online searchers.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "search",
      "online",
      "agents"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S2.5",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 4,
    "domain": "Search and Problem Solving",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "Why does the book distinguish problem-solving agents from planning agents?",
    "whyItMatters": "A distinction that matters when actions have structure.",
    "shortAnswer": "Problem-solving agents treat actions as atomic and the state as a black box. Planning agents represent states and actions in factored or structured form, letting them exploit independence and reuse solutions across similar problems. Planning is search with more structure.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "search",
      "planning",
      "architecture"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S3.1",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 5,
    "domain": "Games and Adversarial Search",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "What changes when search becomes adversarial?",
    "whyItMatters": "Two-player games have a different optimality criterion than single-agent search.",
    "shortAnswer": "In adversarial search, the agent assumes the opponent is also acting optimally to minimise the agent's utility. The optimal action is no longer \"best for me\" but \"best against the optimal response\". This produces minimax and its variants.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "games",
      "adversarial",
      "minimax"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S3.2",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 5,
    "domain": "Games and Adversarial Search",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What is minimax, and what does it assume?",
    "whyItMatters": "Minimax is the canonical adversarial-search algorithm.",
    "shortAnswer": "Minimax assumes both players play optimally. It alternates max and min layers in the game tree: the agent picks the move that maximises its utility, assuming the opponent will pick the move that minimises it. Optimal under perfect information and perfect play.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "games",
      "minimax",
      "optimality"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S3.3",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 5,
    "domain": "Games and Adversarial Search",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What is alpha-beta pruning, and why is it useful?",
    "whyItMatters": "Alpha-beta is what makes minimax tractable on real games.",
    "shortAnswer": "Alpha-beta prunes branches of the minimax tree that cannot affect the final decision. With good move ordering it can roughly square the effective search depth at the same compute cost — turning depth-5 chess into depth-10 chess. It returns the same answer as plain minimax.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "games",
      "alpha-beta",
      "pruning"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S3.4",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 5,
    "domain": "Games and Adversarial Search",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is the difference between minimax and expectimax?",
    "whyItMatters": "Stochastic games need a different criterion.",
    "shortAnswer": "Minimax assumes adversarial opponents. Expectimax replaces min layers with expectation over outcomes — used when the opponent (or chance) is non-deterministic. Backgammon and many card games need expectimax; chess and Go do not.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "games",
      "expectimax",
      "stochastic"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S3.5",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 5,
    "domain": "Games and Adversarial Search",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "Why did Monte Carlo Tree Search replace alpha-beta in Go-style games?",
    "whyItMatters": "A modern lesson the book hints at and the deep-RL era confirmed.",
    "shortAnswer": "In Go, the branching factor is too large and good evaluation functions are too hard to write by hand. MCTS uses simulated rollouts to estimate state values, exploring promising branches more deeply. Combined with neural network priors (AlphaGo) it crushed traditional approaches.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "AlphaGo and AlphaZero are the modern descendants of this chapter.",
    "tags": [
      "games",
      "mcts",
      "alphago"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S3.6",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 5,
    "domain": "Games and Adversarial Search",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is the role of the evaluation function in game-playing programs?",
    "whyItMatters": "Without good evaluation, even deep search fails.",
    "shortAnswer": "The evaluation function estimates the value of non-terminal states — what the game is worth without playing it to the end. It allows search to terminate at a depth limit. Quality of the evaluation function often matters more than search depth.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "games",
      "evaluation",
      "heuristic"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S3.7",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 5,
    "domain": "Games and Adversarial Search",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is horizon effect, and how do search programs handle it?",
    "whyItMatters": "A subtle failure mode in fixed-depth search.",
    "shortAnswer": "The horizon effect: a search at fixed depth may miss an imminent threat just beyond the horizon, or postpone an unavoidable loss past the horizon. Quiescence search extends search at noisy positions until the situation settles; this mitigates but does not eliminate the problem.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "games",
      "horizon",
      "quiescence"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S3.8",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 5,
    "domain": "Games and Adversarial Search",
    "difficulty": "Researcher",
    "type": "Technical",
    "question": "How does AlphaZero combine search, learning, and self-play?",
    "whyItMatters": "A modern synthesis that connects this chapter to the rest of the book.",
    "shortAnswer": "AlphaZero uses MCTS guided by a neural network that predicts both move probabilities and state value. It trains the network by self-play, using MCTS to generate better data than the network alone could. The combination of learned priors plus search beats either alone.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "A cleaner instance of \"rational agent\" than most modern systems.",
    "tags": [
      "games",
      "alphazero",
      "modern"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S4.1",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 6,
    "domain": "Constraint Satisfaction",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is a constraint satisfaction problem, and why is the framing useful?",
    "whyItMatters": "CSPs are a common reformulation that exposes structure search ignores.",
    "shortAnswer": "A CSP defines variables, domains for each variable, and constraints that restrict which combinations of values are allowed. Solving is finding an assignment that satisfies all constraints. The framing exposes problem structure that lets specialised algorithms (constraint propagation, backtracking, local search) outperform generic search.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "csp",
      "framing",
      "structure"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S4.2",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 6,
    "domain": "Constraint Satisfaction",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What is arc consistency, and what does AC-3 do?",
    "whyItMatters": "Constraint propagation is what makes CSPs tractable on real problems.",
    "shortAnswer": "A variable is arc-consistent with another if every value in its domain has a supporting value in the other's domain. AC-3 iteratively removes inconsistent values until the network is arc-consistent. It often solves a CSP outright, or reduces it enough that backtracking is fast.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "csp",
      "propagation",
      "ac3"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S4.3",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 6,
    "domain": "Constraint Satisfaction",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "How do constraint propagation and backtracking interact?",
    "whyItMatters": "The combination is more powerful than either alone.",
    "shortAnswer": "Backtracking assigns one variable at a time and recurses. After each assignment, constraint propagation removes now-impossible values from other variables' domains. If any domain becomes empty, the assignment is undone immediately. The combination prunes huge swaths of the search space.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "csp",
      "backtracking",
      "propagation"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S4.4",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 6,
    "domain": "Constraint Satisfaction",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is the minimum-remaining-values heuristic, and why does it work?",
    "whyItMatters": "Variable ordering matters more than people expect.",
    "shortAnswer": "MRV picks the variable with the fewest remaining legal values as the next to assign. This \"fail-first\" heuristic accelerates pruning: if no assignment works for the most-constrained variable, the search backtracks quickly. Combined with degree heuristic and least-constraining-value, MRV is the standard.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "csp",
      "heuristic",
      "mrv"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S4.5",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 6,
    "domain": "Constraint Satisfaction",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "When is local search the right choice for a CSP?",
    "whyItMatters": "Local search ignores systematic completeness but handles huge problems.",
    "shortAnswer": "When the problem is too large for backtracking but a good solution exists in many places. Min-conflicts local search assigns a value that violates the fewest constraints and iterates. For SAT and scheduling problems with millions of variables, local search routinely beats systematic search.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "csp",
      "local-search",
      "min-conflicts"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "S4.6",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 6,
    "domain": "Constraint Satisfaction",
    "difficulty": "Researcher",
    "type": "Product",
    "question": "Where do CSPs show up in real-world products?",
    "whyItMatters": "Less visible than ML but everywhere.",
    "shortAnswer": "Scheduling (manufacturing, surgery rooms, airline crews), configuration (product variants, hardware), timetabling (universities, conferences), routing with constraints, and many regulatory-compliance checks. Most are solved by specialised CSP or SAT solvers, not by general ML.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "csp",
      "product",
      "applications"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "L1.1",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 7,
    "domain": "Logic and Inference",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "What does logic let an agent do that pure search cannot?",
    "whyItMatters": "Logic adds structure over raw states.",
    "shortAnswer": "Logic lets the agent represent the world with sentences and derive new sentences from old ones. Where search treats states as opaque, logic exposes the structure inside states and supports inference over many states at once. This is what makes logical agents general beyond a single problem.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "logic",
      "inference",
      "agents"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "L1.2",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 7,
    "domain": "Logic and Inference",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "What is a knowledge-based agent, in the book's sense?",
    "whyItMatters": "The bridge between logic and the agent framework.",
    "shortAnswer": "A knowledge-based agent stores a set of sentences (the KB) and acts by ASKing the KB what to do given its percepts, then TELLing the KB what it observed and did. The KB is a model of the world; inference is how the agent uses it.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "logic",
      "agents",
      "kb"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "L1.3",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 7,
    "domain": "Logic and Inference",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What is propositional logic, and what is it not enough for?",
    "whyItMatters": "A foundational vocabulary and an important limit.",
    "shortAnswer": "Propositional logic uses boolean variables connected by AND, OR, NOT, IMPLIES. It is decidable and well-understood. It is not enough when the world has objects, relations, or quantification — \"all planes have wings\" cannot be cleanly expressed.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "logic",
      "propositional",
      "limits"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "L1.4",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 7,
    "domain": "Logic and Inference",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What is entailment, and how is it different from inference?",
    "whyItMatters": "A precision that catches a common confusion.",
    "shortAnswer": "Entailment is a semantic relation between sentences: A entails B if B is true in every model where A is true. Inference is the procedural process of deriving sentences from a KB. Sound inference only produces sentences that are entailed; complete inference produces all entailed sentences.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "logic",
      "entailment",
      "inference"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "L1.5",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 7,
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is the difference between soundness and completeness in an inference procedure?",
    "whyItMatters": "The two key correctness properties.",
    "shortAnswer": "Sound: every sentence the procedure derives is entailed (no false claims). Complete: every entailed sentence can be derived (no missing truths). Sound but incomplete is safe but limited; complete but unsound is dangerous. The ideal is sound and complete.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "logic",
      "soundness",
      "completeness"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "L1.6",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 7,
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is resolution, and why does it dominate logical inference?",
    "whyItMatters": "Resolution is the single inference rule needed for completeness in propositional and first-order logic.",
    "shortAnswer": "Resolution combines two clauses with complementary literals to derive a new clause. Together with conversion to conjunctive normal form, it is refutation-complete: it can prove any entailed sentence by reductio. Most automated theorem provers use it as the core engine.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "logic",
      "resolution",
      "theorem-proving"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "L1.7",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 7,
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is forward chaining, and when is it appropriate?",
    "whyItMatters": "Forward chaining suits data-driven reasoning.",
    "shortAnswer": "Forward chaining starts from known facts and applies inference rules to derive new facts until the goal is reached. It is data-driven and efficient when many facts lead to a single conclusion. Expert systems and rule engines typically forward-chain.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "logic",
      "forward-chaining"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "L1.8",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 7,
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is backward chaining, and when is it appropriate?",
    "whyItMatters": "Backward chaining suits goal-directed reasoning.",
    "shortAnswer": "Backward chaining starts from the goal and works back, looking for facts or rules that imply it. It is goal-directed and efficient when many possible facts but only specific goals matter. Prolog's execution model is backward chaining.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "logic",
      "backward-chaining",
      "prolog"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "L1.9",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 8,
    "domain": "Logic and Inference",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What is the difference between propositional and first-order logic?",
    "whyItMatters": "First-order logic is what made logical AI expressive enough to be interesting.",
    "shortAnswer": "Propositional logic has only boolean variables. First-order logic adds objects, relations, functions, and quantifiers (forall, exists). FOL can say \"every plane has wings\" or \"some flight is delayed\" — propositional logic cannot without explicit enumeration.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "logic",
      "first-order",
      "expressiveness"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "L1.10",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 8,
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What are universal and existential quantifiers, and how are they used?",
    "whyItMatters": "Quantifiers are the key feature that makes FOL expressive.",
    "shortAnswer": "Forall (universal) says a property holds for every object in the domain. Exists (existential) says it holds for at least one. Together they let FOL express general truths and the existence of objects with specified properties — the basic vocabulary of mathematics.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "logic",
      "quantifiers",
      "fol"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "L1.11",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 9,
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is unification, and why is it the engine of FOL inference?",
    "whyItMatters": "Unification turns variable matching into a procedure.",
    "shortAnswer": "Unification finds a substitution that makes two logical expressions identical. It is what lets FOL inference match patterns across general rules and specific facts — without it, FOL would have no procedure for applying rules to objects.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "logic",
      "unification",
      "fol"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "L1.12",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 9,
    "domain": "Logic and Inference",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "Why is FOL inference often intractable, and how do we work around it?",
    "whyItMatters": "FOL is semidecidable in general; this caps the symbolic-AI agenda.",
    "shortAnswer": "In general, FOL is semidecidable: if a sentence is entailed, you can prove it; if not, the procedure may run forever. In practice, we use restricted fragments (Horn clauses, description logics, Datalog) that are decidable and tractable enough for production use.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "logic",
      "decidability",
      "tractability"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "L1.13",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 9,
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is a Horn clause, and why does it matter?",
    "whyItMatters": "Horn clauses are the tractable corner of FOL.",
    "shortAnswer": "A Horn clause is a disjunction with at most one positive literal — equivalently, a rule with multiple premises and one conclusion. Inference over Horn clauses is decidable in polynomial time using forward or backward chaining; this is what makes Prolog and many rule engines work.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "logic",
      "horn",
      "prolog",
      "tractable"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "L1.14",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 9,
    "domain": "Logic and Inference",
    "difficulty": "Researcher",
    "type": "Forecasting",
    "question": "What does the rise of LLMs say about logic-based AI?",
    "whyItMatters": "A long-running tension between two AI traditions.",
    "shortAnswer": "LLMs do statistical reasoning that often produces the same outputs as logical inference, without explicit logic. The honest story is that logic is precise but brittle; LLMs are flexible but unreliable. Modern systems increasingly combine them — using logic-style verifiers on top of LLM proposals.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Tool-augmented LLMs that call SAT solvers, code interpreters, or proof checkers are the most successful current hybrid.",
    "tags": [
      "logic",
      "llm",
      "modern"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "K1.1",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 12,
    "domain": "Knowledge Representation",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is knowledge representation, and why does it deserve its own chapter?",
    "whyItMatters": "KR is the engineering of what to put in a KB.",
    "shortAnswer": "KR is the design problem of choosing which facts, concepts, and relationships to encode and how to encode them. The same knowledge can be represented many ways; the choice affects what is easy to express, what is efficient to query, and what is easy to update. KR is where logic meets engineering.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "kr",
      "engineering",
      "representation"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "K1.2",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 12,
    "domain": "Knowledge Representation",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is an ontology, and how does it differ from a database schema?",
    "whyItMatters": "A vocabulary distinction that matters for KR projects.",
    "shortAnswer": "An ontology specifies concepts, properties, and relationships in a domain — usually with formal semantics. A database schema describes how data is stored; an ontology describes what is true. Ontologies support reasoning; schemas support storage.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "kr",
      "ontology",
      "vocabulary"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "K1.3",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 12,
    "domain": "Knowledge Representation",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is the frame problem, and why has it haunted AI?",
    "whyItMatters": "A classical KR problem with no general solution.",
    "shortAnswer": "The frame problem: when an action happens, how do you express what does not change? Naïvely, every action would require listing all the things still true after it. Solutions involve frame axioms, successor-state axioms, or non-monotonic logic — none fully satisfying.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "kr",
      "frame-problem",
      "philosophy"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "K1.4",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 12,
    "domain": "Knowledge Representation",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is the qualification problem, and how is it different from the frame problem?",
    "whyItMatters": "A sibling problem of similar weight.",
    "shortAnswer": "The qualification problem: how do you list all the preconditions an action needs to succeed? You almost never can — there are always edge cases. The frame problem asks what stays the same; the qualification problem asks what could go wrong. Both push toward defeasible reasoning.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "kr",
      "qualification",
      "defeasible"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "K1.5",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 12,
    "domain": "Knowledge Representation",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What are semantic networks, and how do they relate to modern knowledge graphs?",
    "whyItMatters": "A historical lineage with a modern continuation.",
    "shortAnswer": "Semantic networks represent concepts as nodes and relationships as labeled edges. Modern knowledge graphs (Wikidata, Google Knowledge Graph) are direct descendants with explicit semantics and large scale. The conceptual vocabulary is 1970s; the deployment is 2010s onward.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "kr",
      "semantic-networks",
      "knowledge-graph"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "K1.6",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 12,
    "domain": "Knowledge Representation",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is description logic, and where does it shine?",
    "whyItMatters": "A modern KR family with strong tooling.",
    "shortAnswer": "Description logics are decidable fragments of FOL designed for representing concepts and reasoning about subsumption (is-a relationships). They power OWL, biomedical ontologies, and many enterprise data catalogues. They trade expressiveness for guaranteed reasoning.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "kr",
      "description-logic",
      "owl"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "K1.7",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 12,
    "domain": "Knowledge Representation",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is default reasoning, and why does it matter for KR?",
    "whyItMatters": "Default reasoning models how humans actually reason.",
    "shortAnswer": "Default reasoning lets you conclude \"Tweety can fly\" from \"Tweety is a bird\" while accepting that exceptions exist (penguins, ostriches). Formalisms include circumscription, default logic, and non-monotonic logic. Modern ML implicitly does this through learned priors.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "kr",
      "default-reasoning",
      "non-monotonic"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "K1.8",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 12,
    "domain": "Knowledge Representation",
    "difficulty": "Researcher",
    "type": "Forecasting",
    "question": "Why did handcrafted KR projects (CYC, expert systems) fail at scale?",
    "whyItMatters": "A lesson AI keeps relearning.",
    "shortAnswer": "Encoding common-sense knowledge by hand is enormously expensive and never seems to reach a critical mass. The world has too many concepts and exceptions. Modern AI learns the equivalent knowledge from data — implicitly, less reliably, but at scale that hand-coding cannot match.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "kr",
      "scaling",
      "cyc",
      "history"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "K1.9",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 12,
    "domain": "Knowledge Representation",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "How do LLMs represent knowledge, and how is it different from explicit KR?",
    "whyItMatters": "A key reframing for modern AI.",
    "shortAnswer": "LLMs store knowledge implicitly in their weights as patterns of token associations. The representation is dense, distributed, and not easily inspectable. Compared to explicit KR: more flexible, less precise, harder to update reliably, easier to acquire at scale.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Mechanistic interpretability is the modern field trying to extract explicit knowledge structures from LLM weights.",
    "tags": [
      "kr",
      "llm",
      "modern"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "K1.10",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 12,
    "domain": "Knowledge Representation",
    "difficulty": "Frontier",
    "type": "Forecasting",
    "question": "Will explicit KR come back in some form for AI safety and auditing?",
    "whyItMatters": "A live question in AI governance.",
    "shortAnswer": "Plausibly. For high-stakes deployments (regulation, audit, medicine, finance), explicit representations of what the system claims to know — extracted, verified, queryable — are increasingly attractive. Hybrid neuro-symbolic systems are the most likely path.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "kr",
      "frontier",
      "safety",
      "hybrid"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "P1.1",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 10,
    "domain": "Planning",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "What is the planning problem, and how is it different from search?",
    "whyItMatters": "Planning adds structure that search ignores.",
    "shortAnswer": "Planning is search where states and actions have structured (factored) representations — typically actions with preconditions and effects on a set of state variables. The structure lets specialised algorithms exploit independence between actions and reuse subplans, beating generic search.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "planning",
      "framing",
      "structure"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "P1.2",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 10,
    "domain": "Planning",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What is PDDL, and what does it standardise?",
    "whyItMatters": "PDDL is the lingua franca of classical planning.",
    "shortAnswer": "PDDL (Planning Domain Definition Language) standardises how to describe planning problems: domain (types, predicates, actions with preconditions and effects) and problem (initial state, goal). It lets planners be benchmarked and shared across research groups.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "planning",
      "pddl"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "P1.3",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 10,
    "domain": "Planning",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What is the difference between forward and backward planning?",
    "whyItMatters": "Two planning strategies with different strengths.",
    "shortAnswer": "Forward (progression) planning starts from the initial state and applies actions until the goal is reached. Backward (regression) planning starts from the goal and finds actions that could produce it. Forward suits highly-constrained initial states; backward suits highly-specific goals.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "planning",
      "forward",
      "backward"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "P1.4",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 10,
    "domain": "Planning",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is partial-order planning, and what does it buy you?",
    "whyItMatters": "POP avoids unnecessary commitments to action order.",
    "shortAnswer": "POP represents a plan as a set of actions with ordering constraints — only ordering actions when their effects require it. This reduces backtracking and supports parallel execution. Modern planners often combine POP with classical search heuristics.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "planning",
      "partial-order"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "P1.5",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 10,
    "domain": "Planning",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is the planning graph, and what is it used for?",
    "whyItMatters": "A data structure that underpins many modern planners.",
    "shortAnswer": "A planning graph layers alternating states and actions, with mutex (mutually exclusive) constraints. It does not directly produce a plan but bounds the planning problem and provides strong heuristics. The GraphPlan algorithm and its descendants exploit it heavily.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "planning",
      "planning-graph",
      "graphplan"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "P1.6",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 11,
    "domain": "Planning",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "When does planning need to handle the real world's noise?",
    "whyItMatters": "Classical planning assumes deterministic, fully-observable worlds; reality is neither.",
    "shortAnswer": "When actions can fail, when state is partially observable, or when other agents act. The book extends to conditional planning, contingent planning, and online planning. Modern reinforcement learning is the natural successor to this chapter.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "planning",
      "uncertainty",
      "real-world"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "P1.7",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 11,
    "domain": "Planning",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is hierarchical task network (HTN) planning?",
    "whyItMatters": "HTN is widely used in real-world planners.",
    "shortAnswer": "HTN planning decomposes high-level tasks into lower-level subtasks recursively until primitive actions are reached. Decomposition rules are designed by humans, which limits HTN's generality but makes it efficient when the domain has natural hierarchy — manufacturing, military operations, kitchen recipes.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "planning",
      "htn",
      "hierarchical"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "P1.8",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 11,
    "domain": "Planning",
    "difficulty": "Researcher",
    "type": "Product",
    "question": "Why is planning often replaced by simple workflows in industry?",
    "whyItMatters": "A reality check on the planning literature.",
    "shortAnswer": "For most production workflows, the action sequence is stable and known. A workflow plus error handling outperforms a planner because it is debuggable, auditable, and predictable. Planners win when action sequences vary wildly between inputs — relatively rare in practice.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "planning",
      "product",
      "workflow"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "P1.9",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 11,
    "domain": "Planning",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "How does modern LLM-based agent planning relate to classical planning?",
    "whyItMatters": "A bridge between this chapter and 2026 systems.",
    "shortAnswer": "LLM agents do something like classical planning, but the \"plan\" is generated in natural language by the model rather than from explicit action definitions. They can be more flexible but less reliable — they fabricate preconditions and miss effects. Hybrid systems use LLMs for proposal and classical planners for verification.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Many real-world \"AI agent\" platforms are LLM-generated plans plus narrow verifiers — a modern re-discovery of HTN-style decomposition.",
    "tags": [
      "planning",
      "llm",
      "modern"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "P1.10",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 11,
    "domain": "Planning",
    "difficulty": "Frontier",
    "type": "Forecasting",
    "question": "What would it take to make long-horizon AI planning genuinely reliable?",
    "whyItMatters": "A research frontier with real economic stakes.",
    "shortAnswer": "Better state tracking (avoiding context-window loss), tool-grounded verification of action results, explicit goal decomposition, learned heuristics from past successful plans, and aggressive use of search with verifier signals. Each piece exists; integrating them at production reliability is the open problem.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "planning",
      "frontier",
      "agents"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "U1.1",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 13,
    "domain": "Uncertainty and Probability",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "Why does the rational agent need probability theory?",
    "whyItMatters": "Logic alone cannot handle uncertainty.",
    "shortAnswer": "Logic can say \"I do not know X\". Probability can say \"X is true with probability 0.7, and here is how my belief updates with new evidence\". An agent that must act under uncertainty needs probability to weigh outcomes, choose among uncertain options, and update beliefs from observations.",
    "deepExplanation": "This is the chapter that turns AI from logic-based to probability-based, in the book's arc.",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "probability",
      "uncertainty",
      "rationality"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "U1.2",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 13,
    "domain": "Uncertainty and Probability",
    "difficulty": "Builder",
    "type": "Mathematical",
    "question": "What is Bayes' rule, and why is it the core of probabilistic reasoning?",
    "whyItMatters": "Bayes' rule is how rational agents update beliefs.",
    "shortAnswer": "P(H|E) = P(E|H) P(H) / P(E). It tells you how to update belief in hypothesis H given evidence E. The strength of the update depends on how much more likely the evidence is under H than under not-H — the likelihood ratio.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "probability",
      "bayes",
      "update"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "U1.3",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 13,
    "domain": "Uncertainty and Probability",
    "difficulty": "Builder",
    "type": "Mathematical",
    "question": "What is the difference between joint and conditional probability?",
    "whyItMatters": "Two foundational quantities; mixing them is a classic mistake.",
    "shortAnswer": "Joint probability P(A, B) is the probability both A and B happen. Conditional probability P(A | B) is the probability of A given that B happened. They are related by P(A | B) = P(A, B) / P(B). Confusing them produces wrong reasoning across many AI problems.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "probability",
      "joint",
      "conditional"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "U1.4",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 13,
    "domain": "Uncertainty and Probability",
    "difficulty": "Builder",
    "type": "Mathematical",
    "question": "What does conditional independence mean, and why is it so useful?",
    "whyItMatters": "Conditional independence is what makes probabilistic AI tractable.",
    "shortAnswer": "A and B are conditionally independent given C if P(A, B | C) = P(A | C) P(B | C). It is what lets you decompose joint distributions into smaller pieces, which is the foundation of Bayesian networks and most probabilistic graphical models.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "probability",
      "independence",
      "bayes-nets"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "U1.5",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 13,
    "domain": "Uncertainty and Probability",
    "difficulty": "Technical",
    "type": "Mathematical",
    "question": "Why does the full joint distribution scale exponentially, and how do we work around it?",
    "whyItMatters": "A scaling problem that motivates the rest of the chapter.",
    "shortAnswer": "For n boolean variables, the full joint has 2^n entries. This is intractable for n > 20 or so. Bayesian networks exploit conditional independence to encode the joint in a number of parameters proportional to the number of variables and their parents, not 2^n.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "probability",
      "scaling",
      "bayes-nets"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "B1.1",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 14,
    "domain": "Bayesian Networks",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "What is a Bayesian network, and what does it buy you?",
    "whyItMatters": "BNs are the canonical probabilistic graphical model.",
    "shortAnswer": "A Bayesian network is a directed acyclic graph where each node is a random variable and each edge represents direct probabilistic dependence. It encodes a joint distribution in a compact form using conditional independence — exponentially fewer parameters than the full joint.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "bayes",
      "bayesian-network",
      "graphical-model"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "B1.2",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 14,
    "domain": "Bayesian Networks",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "How does a Bayes net encode conditional independence?",
    "whyItMatters": "The structural answer.",
    "shortAnswer": "A node is conditionally independent of its non-descendants given its parents. This local Markov property lets the joint distribution factorise as the product of P(node | parents) over all nodes. Conditional independence is built into the graph structure.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "bayes",
      "independence",
      "structure"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "B1.3",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 14,
    "domain": "Bayesian Networks",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is d-separation, and how does it determine conditional independence in a Bayes net?",
    "whyItMatters": "D-separation is the graph-theoretic algorithm for reading off conditional independence.",
    "shortAnswer": "Two nodes are d-separated given a set of nodes if every undirected path between them is \"blocked\" by the set under specific rules about chains, forks, and colliders. D-separation lets you answer \"is X independent of Y given Z?\" by inspecting the graph, without computing probabilities.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "bayes",
      "d-separation",
      "graph"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "B1.4",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 14,
    "domain": "Bayesian Networks",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is exact inference in a Bayes net, and why is it intractable in general?",
    "whyItMatters": "A theoretical wall that pushes us to approximate inference.",
    "shortAnswer": "Exact inference (variable elimination, junction tree) is polynomial in the size of the treewidth of the graph but NP-hard in general. For densely-connected networks, exact inference is infeasible — which is why approximate methods dominate practice.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "bayes",
      "inference",
      "tractability"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "B1.5",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 14,
    "domain": "Bayesian Networks",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is approximate inference, and what are the main techniques?",
    "whyItMatters": "Approximate inference is how Bayes nets work in practice.",
    "shortAnswer": "Approximate inference accepts an approximate answer for tractability. Main techniques: rejection sampling (slow), likelihood weighting (better), Markov chain Monte Carlo (MCMC, robust), and variational inference (fast but biased). Modern deep generative models use variational methods heavily.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "bayes",
      "inference",
      "sampling",
      "vi"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "B1.6",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 14,
    "domain": "Bayesian Networks",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is MCMC, and where is it used?",
    "whyItMatters": "MCMC is the workhorse of probabilistic computing.",
    "shortAnswer": "Markov chain Monte Carlo constructs a chain whose stationary distribution is the target distribution. By running the chain long enough, samples approximate the target. Gibbs sampling and Metropolis-Hastings are the canonical algorithms; both still power Bayesian statistics, computational chemistry, and parts of probabilistic ML.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "bayes",
      "mcmc",
      "gibbs"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "B1.7",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 14,
    "domain": "Bayesian Networks",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "Why are Bayesian networks less visible in modern deep-learning workflows?",
    "whyItMatters": "A practical observation worth understanding.",
    "shortAnswer": "Bayes nets shine when the structure is known and the variables are discrete or low-dimensional. Modern deep learning often deals with high-dimensional unstructured data where the structure is learned end-to-end. Bayes nets still dominate domains with strong prior structure: medicine, fault diagnosis, sensor fusion, biology.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "bayes",
      "modern",
      "limits"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "B1.8",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 14,
    "domain": "Bayesian Networks",
    "difficulty": "Researcher",
    "type": "Product",
    "question": "When should you choose a Bayes net over a neural network?",
    "whyItMatters": "A practical engineering decision.",
    "shortAnswer": "Bayes nets when: structure is known, data is limited, interpretability is critical, you need calibrated uncertainty, or you need to update beliefs incrementally with new evidence. Neural networks when: data is large, structure is unknown, raw inputs are unstructured (images, text), and end-to-end performance matters more than interpretability.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "bayes",
      "nn",
      "product"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "T1.1",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 15,
    "domain": "Temporal Models",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "How do temporal models extend Bayes nets to time?",
    "whyItMatters": "Time turns one network into a dynamic process.",
    "shortAnswer": "Temporal models add a time index and represent the same set of variables repeating across time slices, with edges between slices encoding state transitions. The result: dynamic Bayesian networks, hidden Markov models, and Kalman filters — all special cases of a unified framework.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "temporal",
      "dbn",
      "hmm"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "T1.2",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 15,
    "domain": "Temporal Models",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is a hidden Markov model, and where does it apply?",
    "whyItMatters": "HMMs are the canonical temporal model.",
    "shortAnswer": "An HMM has a hidden state that evolves Markovically and emits observable outputs at each time step. Inference computes belief over hidden states given observations. HMMs power speech recognition, gene-finding, gesture recognition, and many sensor-stream systems.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "temporal",
      "hmm",
      "speech"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "T1.3",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 15,
    "domain": "Temporal Models",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What are filtering, prediction, smoothing, and most-likely explanation in temporal models?",
    "whyItMatters": "Four standard inference tasks; they answer different questions.",
    "shortAnswer": "Filtering: belief over the current state given all observations so far. Prediction: belief over future states. Smoothing: belief over past states given all evidence. Most-likely explanation (Viterbi): the most probable sequence of hidden states. Each has its own efficient algorithm.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "temporal",
      "filtering",
      "smoothing",
      "viterbi"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "T1.4",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 15,
    "domain": "Temporal Models",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is the Kalman filter, and what assumptions does it require?",
    "whyItMatters": "The Kalman filter is the most widely-deployed inference algorithm in engineering.",
    "shortAnswer": "A Kalman filter does exact filtering when the state space is continuous, the model is linear-Gaussian, and observations are Gaussian-noisy versions of the state. It powers navigation, tracking, control, and sensor fusion. Extensions (extended, unscented, particle) handle non-linear cases approximately.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "temporal",
      "kalman",
      "filtering"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "T1.5",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 15,
    "domain": "Temporal Models",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is a particle filter, and when is it needed?",
    "whyItMatters": "Particle filters handle cases Kalman cannot.",
    "shortAnswer": "Particle filters represent the belief as a set of weighted samples. They work for non-linear, non-Gaussian temporal models and are widely used in robotics localisation (SLAM), object tracking, and economic forecasting. The cost: many particles are needed for accurate estimation.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "temporal",
      "particle-filter",
      "robotics"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "T1.6",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 15,
    "domain": "Temporal Models",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "How does belief-state tracking relate to modern LLM-based agents?",
    "whyItMatters": "A subtle connection between the book and current systems.",
    "shortAnswer": "Russell &amp; Norvig insist on tracking the agent's belief over hidden state. LLM-based agents fake this by stuffing relevant history into the context window — but the belief is implicit, ungrounded, and lossy. Better belief-state representation for LLM agents is an active research frontier.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Memory systems for LLM agents are essentially trying to do what HMM belief tracking does, in a much messier substrate.",
    "tags": [
      "temporal",
      "llm",
      "research"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "V1.1",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 16,
    "domain": "Utility and Decision Theory",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "Why is expected utility central to rational decision-making?",
    "whyItMatters": "Expected utility is the formal answer to \"what is the best action?\" under uncertainty.",
    "shortAnswer": "A rational agent should choose the action with the highest expected utility, where utility is a function over outcomes and expectation is taken over the probability distribution of outcomes given the action. Decision theory shows this rule follows from minimal consistency requirements on preferences.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "util",
      "expected-utility",
      "rationality"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "V1.2",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 16,
    "domain": "Utility and Decision Theory",
    "difficulty": "Builder",
    "type": "Mathematical",
    "question": "What are the von Neumann–Morgenstern axioms, and what do they prove?",
    "whyItMatters": "The mathematical foundation of utility theory.",
    "shortAnswer": "Four axioms over preferences: completeness, transitivity, continuity, and independence. The vNM theorem proves that if an agent's preferences satisfy these, they can be represented by a utility function such that the agent prefers A to B iff E[U(A)] > E[U(B)]. Rationality entails expected utility maximisation.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "util",
      "vnm",
      "axioms"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "V1.3",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 16,
    "domain": "Utility and Decision Theory",
    "difficulty": "Technical",
    "type": "Mathematical",
    "question": "What is the difference between utility and value, in this framework?",
    "whyItMatters": "A subtle but important distinction.",
    "shortAnswer": "Value is a property of states or outcomes (what they are worth). Utility is a numeric representation of preferences over outcomes. Utility is determined up to positive affine transformation; absolute utility numbers do not carry meaning, only ratios of differences do.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "util",
      "value",
      "vocabulary"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "V1.4",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 16,
    "domain": "Utility and Decision Theory",
    "difficulty": "Technical",
    "type": "Mathematical",
    "question": "What is risk aversion, and how does it relate to utility shape?",
    "whyItMatters": "Risk attitudes are encoded in utility curvature.",
    "shortAnswer": "A risk-averse agent prefers a sure outcome to a gamble with the same expected value. This is captured by a concave utility function — losses hurt more than equivalent gains feel good. Risk-seeking agents have convex utility; risk-neutral agents have linear utility.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "util",
      "risk",
      "curvature"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "V1.5",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 16,
    "domain": "Utility and Decision Theory",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is the value of information, and why does it matter?",
    "whyItMatters": "VoI explains when it is worth gathering more data.",
    "shortAnswer": "The value of information is the expected improvement in the agent's decision quality from observing some variable before acting. A rational agent gathers information only when its expected value exceeds its cost. This is the formal answer to \"is this experiment worth running?\".",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "util",
      "voi",
      "decision"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "V1.6",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 16,
    "domain": "Utility and Decision Theory",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is a decision network, and how is it different from a Bayes net?",
    "whyItMatters": "Decision networks add action and utility nodes.",
    "shortAnswer": "A decision network (influence diagram) is a Bayes net augmented with decision nodes (actions) and utility nodes (rewards). It lets the agent compute the action that maximises expected utility directly from the graph. Useful for one-shot decisions; MDPs extend it to sequential decisions.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "util",
      "decision-network",
      "influence-diagram"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "V1.7",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 16,
    "domain": "Utility and Decision Theory",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "Why is utility design itself a core part of AI engineering?",
    "whyItMatters": "A point the book emphasises and many practitioners miss.",
    "shortAnswer": "The agent's behavior is only as good as its utility function. Mis-specified utilities produce capable but undesired behavior — Goodhart's law. AI safety researchers argue that utility design is one of the hardest open problems in alignment.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "util",
      "alignment",
      "goodhart"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "V1.8",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 16,
    "domain": "Utility and Decision Theory",
    "difficulty": "Frontier",
    "type": "Forecasting",
    "question": "If the agent's utility function is wrong, can a more rational agent be more dangerous?",
    "whyItMatters": "A safety question that follows directly from utility theory.",
    "shortAnswer": "Yes. A more rational agent more reliably maximises whatever utility it has, including mis-specified utility. Making capable systems safer is partly a utility-design problem and partly a corrigibility problem — making sure the agent will accept correction when its utility is wrong.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "This is the chain of reasoning that leads to Russell's Human Compatible (2019).",
    "tags": [
      "util",
      "safety",
      "alignment"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "D1.1",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 17,
    "domain": "MDPs and POMDPs",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is a Markov Decision Process, and why is it the canonical framework for sequential decisions under uncertainty?",
    "whyItMatters": "MDPs are the foundation of reinforcement learning.",
    "shortAnswer": "An MDP has states, actions, transition probabilities (P(s' | s, a)), and rewards (R(s, a, s')). The Markov property means transitions depend only on the current state. MDPs formalise \"act now to maximise expected long-term reward\" — the core of RL and many control problems.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "mdp",
      "framework",
      "rl"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "D1.2",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 17,
    "domain": "MDPs and POMDPs",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is a policy, and what makes one optimal?",
    "whyItMatters": "Policies are the answer an MDP solver returns.",
    "shortAnswer": "A policy is a function from states to actions (or distributions over actions). The optimal policy maximises the expected sum of future discounted rewards from every state. Bellman's equations characterise it; value iteration and policy iteration compute it.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "mdp",
      "policy",
      "bellman"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "D1.3",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 17,
    "domain": "MDPs and POMDPs",
    "difficulty": "Builder",
    "type": "Mathematical",
    "question": "What is the discount factor, and why is it used?",
    "whyItMatters": "The discount factor is a small parameter with big consequences.",
    "shortAnswer": "The discount factor gamma in [0, 1) weights future rewards: a reward at time t is worth gamma^t of the same reward now. It ensures total reward is finite, models impatience or uncertainty, and biases the agent toward near-term outcomes. Choice of gamma is a design decision with real impact.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "mdp",
      "discount",
      "bellman"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "D1.4",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 17,
    "domain": "MDPs and POMDPs",
    "difficulty": "Technical",
    "type": "Mathematical",
    "question": "What is the Bellman equation, and why is it the core of MDP solutions?",
    "whyItMatters": "A recursion that captures all of MDP theory.",
    "shortAnswer": "V(s) = max_a [R(s, a) + gamma * sum_s' P(s' | s, a) V(s')]. The value of a state is the best action's immediate reward plus the expected discounted value of the next state. Value iteration and policy iteration both work by iterating on this equation.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "mdp",
      "bellman",
      "value-iteration"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "D1.5",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 17,
    "domain": "MDPs and POMDPs",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is the difference between value iteration and policy iteration?",
    "whyItMatters": "Two algorithms with different convergence behavior.",
    "shortAnswer": "Value iteration updates V(s) using the Bellman equation until V converges; policy is then read off. Policy iteration alternates: evaluate the current policy (solve V for that policy), then improve the policy greedily. Policy iteration usually converges in fewer iterations; value iteration is simpler.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "mdp",
      "value-iteration",
      "policy-iteration"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "D1.6",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 17,
    "domain": "MDPs and POMDPs",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "Why are POMDPs closer to real-world agency than MDPs?",
    "whyItMatters": "Real environments are rarely fully observable.",
    "shortAnswer": "A POMDP adds observation: the agent does not see the state directly but receives an observation that gives partial information. The agent must maintain a belief — a probability distribution over states — and act based on that. Real robots, medical decisions, dialogue agents, and game-playing all live in POMDP territory.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "pomdp",
      "partial-observability",
      "realism"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "D1.7",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 17,
    "domain": "MDPs and POMDPs",
    "difficulty": "Researcher",
    "type": "Technical",
    "question": "Why is solving POMDPs hard?",
    "whyItMatters": "POMDPs are PSPACE-complete in general.",
    "shortAnswer": "The belief state is a continuous distribution over discrete states, so even small POMDPs have huge belief spaces. Exact algorithms (policy trees, alpha-vectors) handle small problems; approximations (POMCP, particle-filter POMDPs, deep RL with recurrent networks) handle larger ones imperfectly.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "pomdp",
      "complexity",
      "approximation"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "D1.8",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 17,
    "domain": "MDPs and POMDPs",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "How is \"policy\" used in modern RL versus classical MDP literature?",
    "whyItMatters": "A vocabulary distinction worth keeping clean.",
    "shortAnswer": "Same concept, different baggage. Classical MDP \"policy\" is a function from states to actions; you compute it analytically. Modern RL \"policy\" is usually a neural network mapping states (or observations) to actions; you train it by sampling. The math is the same; the engineering is different.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "mdp",
      "rl",
      "modern"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "D1.9",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 17,
    "domain": "MDPs and POMDPs",
    "difficulty": "Frontier",
    "type": "Forecasting",
    "question": "Are modern AI agents closer to MDPs or POMDPs in practice?",
    "whyItMatters": "A reframing that exposes a real research gap.",
    "shortAnswer": "In practice they are POMDPs without proper belief-state tracking. They have an enormous, unobservable true state (user intent, context, system status) and a small percept (the context window). Treating them as MDPs is a major simplification; the practical limits of current agents trace back to this mismatch.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "pomdp",
      "modern",
      "research"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "C1.1",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 16,
    "domain": "Utility and Decision Theory",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is multi-attribute utility theory, and when is it used?",
    "whyItMatters": "Real decisions usually involve more than one dimension.",
    "shortAnswer": "When utility depends on multiple attributes (cost, time, risk, quality), MAUT defines a multi-attribute utility function and reduces it via independence assumptions. Useful in product design, regulatory decisions, and complex business choices where one-dimensional utility is unrealistic.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "decision",
      "maut",
      "multi-attribute"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "C1.2",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 16,
    "domain": "Utility and Decision Theory",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is the certainty equivalent, and what does it tell you?",
    "whyItMatters": "A useful concept for translating risk into numbers.",
    "shortAnswer": "The certainty equivalent of a gamble is the certain payoff that the agent would accept in exchange for the gamble. The difference between expected value and certainty equivalent is the risk premium — what the agent pays for certainty. Insurance prices are built on this.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "decision",
      "risk",
      "certainty-equivalent"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "C1.3",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 16,
    "domain": "Utility and Decision Theory",
    "difficulty": "Researcher",
    "type": "Product",
    "question": "How does decision theory apply to AI product design?",
    "whyItMatters": "The framework is more practical than it looks.",
    "shortAnswer": "Designing the product means designing its utility function (what counts as success), its action set (what it can do), its evidence set (what it observes), and its decision rule. Most \"AI product\" debates collapse into one of these. Treat product design as decision theory and many ambiguous calls become clearer.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "decision",
      "product",
      "framework"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "C1.4",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 16,
    "domain": "Utility and Decision Theory",
    "difficulty": "Researcher",
    "type": "Product",
    "question": "When should an AI system gather more information before acting?",
    "whyItMatters": "Value of information in practice.",
    "shortAnswer": "When the expected improvement in decision quality from observing the variable exceeds the cost of observing it. Practical applications: clinical decision support that asks one more test, fraud detection that asks one more verification, AI agents that ask one more clarifying question. The math: argmax over information-gathering actions of E[Utility improvement] minus cost.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "decision",
      "voi",
      "product"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "C1.5",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 16,
    "domain": "Utility and Decision Theory",
    "difficulty": "Frontier",
    "type": "Forecasting",
    "question": "Can AI agents have wrong preferences without knowing it?",
    "whyItMatters": "A core safety question that comes straight from decision theory.",
    "shortAnswer": "Yes — the agent's preferences are encoded by whatever utility function it optimises. If that function is wrong, the agent will confidently optimise the wrong thing. Detecting this requires comparing agent behavior to externally-defined \"good\" outcomes, which the agent itself cannot do.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "decision",
      "alignment",
      "frontier"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "X1.1",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "What is the learning problem, and how does it relate to search?",
    "whyItMatters": "Russell &amp; Norvig frame learning as a kind of search in hypothesis space.",
    "shortAnswer": "Learning is searching the space of possible hypotheses for one that fits the observed examples and generalises. The classical search frame (state space, neighbours, evaluation function) maps cleanly: hypotheses are states, training error is the evaluation, regularisation shapes the neighbourhood.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "framing",
      "search"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "X1.2",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "What is the difference between supervised, unsupervised, and reinforcement learning?",
    "whyItMatters": "The three classical learning paradigms.",
    "shortAnswer": "Supervised: learn a function from labeled examples. Unsupervised: find structure in unlabeled data. Reinforcement: learn behavior from sparse rewards over actions. Each requires different data, evaluation, and algorithms. Modern systems often combine all three.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "paradigms",
      "vocabulary"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "X1.3",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "Why does generalisation matter more than memorisation?",
    "whyItMatters": "The whole point of ML.",
    "shortAnswer": "A system that memorises training data perfectly is useless on new data. Generalisation is the ability to perform well on unseen examples drawn from the same distribution. Designing for generalisation — regularisation, cross-validation, simpler hypotheses — is what separates ML from database lookup.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "generalisation",
      "overfitting"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "X1.4",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is overfitting, and how do you detect it?",
    "whyItMatters": "Overfitting is the most common ML failure.",
    "shortAnswer": "A model overfits when it captures noise or accidents in training data and performs worse on held-out data. Detect with train/validation/test splits and learning curves — train error keeps dropping while validation error rises. Modern large pretrained models change the failure modes but not the principle.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "overfitting",
      "evaluation"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "X1.5",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is the bias-variance trade-off, and why is it useful?",
    "whyItMatters": "A classical decomposition of generalisation error.",
    "shortAnswer": "Bias is error from a model that is too simple to fit the truth; variance is error from a model that is too sensitive to training data. Total error = bias squared + variance + irreducible noise. Most ML design decisions are bias-variance trade-offs.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "bias-variance",
      "theory"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "X1.6",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What is a decision tree, and why is it still useful in 2026?",
    "whyItMatters": "Decision trees survived because they remain interpretable.",
    "shortAnswer": "Decision trees recursively partition input space into regions, each labeled by a class or prediction. They handle mixed data types, are easy to interpret, and require little preprocessing. Boosted ensembles (XGBoost, LightGBM) of decision trees still beat neural networks on tabular data.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "decision-tree",
      "xgboost"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "X1.7",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is regularisation, and why is it necessary?",
    "whyItMatters": "Regularisation is how ML systems avoid memorisation.",
    "shortAnswer": "Regularisation adds a penalty to the loss for hypothesis complexity (L1, L2, dropout, early stopping). It biases the model toward simpler solutions that are less likely to overfit. Without it, complex models like deep networks would memorise training data.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "regularisation",
      "generalisation"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "X1.8",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is cross-validation, and when does it fail?",
    "whyItMatters": "Cross-validation is the standard evaluation technique with subtle failures.",
    "shortAnswer": "Cross-validation splits data into k folds, trains on k-1, evaluates on 1, and rotates. It gives an unbiased estimate of generalisation error when data is iid. It fails when data has temporal structure, when there is leakage between folds, or when the held-out distribution differs from production.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "cross-validation",
      "evaluation"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "X1.9",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is a support vector machine, and why was it the workhorse before deep learning?",
    "whyItMatters": "Important history; many production ML systems still use SVMs.",
    "shortAnswer": "SVMs find a maximum-margin separating hyperplane in (kernel-transformed) feature space. They have good theoretical guarantees, work well on small data, and handle high-dimensional sparse features. Pre-deep-learning, they dominated text classification, image classification, and many bio-informatics applications.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "svm",
      "history"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "X1.10",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is ensemble learning, and why does it work?",
    "whyItMatters": "Ensembles are why XGBoost dominates Kaggle.",
    "shortAnswer": "Ensembles combine multiple models to produce a stronger prediction. Bagging reduces variance (random forests). Boosting reduces bias by sequentially fitting residuals (XGBoost, gradient boosting). Stacking learns how to combine models. All three give predictable wins over single models, especially on structured data.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "ensemble",
      "boosting"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "X1.11",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "How does the book's 2010 view of ML hold up in 2026?",
    "whyItMatters": "A useful update of the chapter.",
    "shortAnswer": "The foundations hold: hypothesis spaces, generalisation, bias-variance, regularisation, cross-validation. The methods have rotated: deep learning and pretraining dominate; SVMs and kernel methods are niche; XGBoost still wins on tabular data. The book's philosophical framing is right; the method mix is dated.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "modern",
      "update"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "X1.12",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "How is pretraining different from classical supervised learning?",
    "whyItMatters": "A 2010 textbook would not have written this question.",
    "shortAnswer": "Pretraining is self-supervised learning on huge unlabeled corpora using auxiliary objectives (next-token prediction). The resulting representations are then fine-tuned or prompted for specific tasks. Pretraining decouples representation learning from task-specific labels — the biggest ML idea since the book was published.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Modern foundation models are this idea taken to its limit.",
    "tags": [
      "ml",
      "pretraining",
      "modern"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "X1.13",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What is transfer learning, and why is it now the default?",
    "whyItMatters": "The economic engine of modern ML.",
    "shortAnswer": "Transfer learning reuses representations learned on one task to bootstrap learning on another. Fine-tuning a pretrained foundation model is the simplest form. Transfer learning is now the default because pretraining is expensive but reusable; very few teams train from scratch.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "transfer-learning",
      "modern"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "Y1.1",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 20,
    "domain": "Probabilistic Learning",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What does it mean to learn a probabilistic model?",
    "whyItMatters": "Probabilistic learning differs from point-estimate ML in important ways.",
    "shortAnswer": "Learning a probabilistic model means estimating a probability distribution over data or labels, rather than a point function. It gives calibrated uncertainty estimates and supports principled Bayesian updating. Gaussian mixture models, naive Bayes, Bayesian networks, and modern generative models are all probabilistic.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "problearn",
      "distributions",
      "uncertainty"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "Y1.2",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 20,
    "domain": "Probabilistic Learning",
    "difficulty": "Technical",
    "type": "Mathematical",
    "question": "What is maximum likelihood estimation, and how is it different from Bayesian estimation?",
    "whyItMatters": "Two foundational approaches that disagree about uncertainty.",
    "shortAnswer": "MLE picks the parameters that maximise the probability of the observed data — a point estimate. Bayesian estimation maintains a distribution over parameters given prior beliefs and data. Bayesian wins when priors matter or you need uncertainty; MLE wins when data is plentiful and computation is binding.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "problearn",
      "mle",
      "bayes"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "Y1.3",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 20,
    "domain": "Probabilistic Learning",
    "difficulty": "Technical",
    "type": "Mathematical",
    "question": "What is the EM algorithm, and where is it used?",
    "whyItMatters": "EM is the classical algorithm for learning with latent variables.",
    "shortAnswer": "Expectation-Maximisation alternates between estimating expected values of latent variables given current parameters (E-step) and maximising parameters given those expected values (M-step). It is used in Gaussian mixtures, HMMs, topic models, and many missing-data problems.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "problearn",
      "em",
      "latent"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "Y1.4",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 20,
    "domain": "Probabilistic Learning",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is a latent variable, and why are they useful?",
    "whyItMatters": "Latent variables let models represent unobserved structure.",
    "shortAnswer": "A latent (hidden) variable is one we never observe directly but believe shapes the data. Topic models have latent topics; HMMs have latent states; deep generative models have latent codes. Reasoning over latent variables is what lets these models compress and generate data.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "problearn",
      "latent",
      "structure"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "Y1.5",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 20,
    "domain": "Probabilistic Learning",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "How does the probabilistic-learning chapter connect to modern generative AI?",
    "whyItMatters": "The lineage of GANs, VAEs, and diffusion runs through this chapter.",
    "shortAnswer": "All modern generative models are probabilistic in spirit: they learn distributions over data and sample from them. The book's framing of probabilistic learning, latent variables, and variational methods is exactly the conceptual backbone of VAEs, normalising flows, and diffusion models — what changed is scale and architecture.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Diffusion and VAEs are probabilistic-learning principles applied with deep neural network parameterisations.",
    "tags": [
      "problearn",
      "generative",
      "modern"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "Y1.6",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 20,
    "domain": "Probabilistic Learning",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What is variational inference, and why is it useful?",
    "whyItMatters": "Variational methods underpin many modern probabilistic systems.",
    "shortAnswer": "Variational inference approximates an intractable posterior with a tractable family by minimising KL divergence. It scales to large models where MCMC does not. The variational autoencoder is the most successful application: a deep neural network parameterises both the encoder (q(z|x)) and decoder (p(x|z)).",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "problearn",
      "vi",
      "vae"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "R1.1",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "Why is reinforcement learning not just supervised learning?",
    "whyItMatters": "A common misconception worth correcting early.",
    "shortAnswer": "In supervised learning, the correct answer is given. In RL, the agent gets only a reward signal — sometimes delayed by many actions. The agent must figure out which actions led to the reward (credit assignment) and balance trying new actions (exploration) with exploiting known good ones.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "rl",
      "fundamentals",
      "credit-assignment"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "R1.2",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is the exploration-exploitation trade-off, and why is it hard?",
    "whyItMatters": "A central problem in RL with no universally optimal solution.",
    "shortAnswer": "Exploration tries new actions to discover their values; exploitation chooses actions known to be good. Pure exploration learns slowly; pure exploitation misses better actions. Methods like epsilon-greedy, UCB, and Thompson sampling formalise the trade-off; modern RL uses entropy bonuses and curiosity rewards.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "rl",
      "exploration",
      "exploitation"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "R1.3",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What is Q-learning, and what does it learn?",
    "whyItMatters": "Q-learning is the canonical model-free RL algorithm.",
    "shortAnswer": "Q-learning learns Q(s, a), the expected total reward of taking action a in state s and acting optimally thereafter. It updates Q estimates using the Bellman equation as new experience arrives. Once Q is accurate, the greedy policy (argmax_a Q(s, a)) is optimal.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "rl",
      "q-learning",
      "bellman"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "R1.4",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is the difference between model-free and model-based RL?",
    "whyItMatters": "A fundamental architectural choice.",
    "shortAnswer": "Model-free RL learns Q values or policies directly from experience without modelling the environment. Model-based RL learns a model of P(s' | s, a) and R(s, a, s') and plans using it. Model-based is more sample-efficient but harder to scale; model-free is the workhorse of deep RL.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "rl",
      "model-free",
      "model-based"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "R1.5",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is policy gradient, and how is it different from Q-learning?",
    "whyItMatters": "Two main families of RL methods.",
    "shortAnswer": "Q-learning learns a value function and derives a policy from it. Policy gradient directly parameterises a policy and updates its parameters by following gradient ascent on expected reward. Policy gradient handles continuous action spaces naturally and can learn stochastic policies; Q-learning is simpler when actions are discrete.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "rl",
      "policy-gradient"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "R1.6",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is actor-critic, and why is it the de facto modern RL skeleton?",
    "whyItMatters": "Most modern deep-RL algorithms are variants of actor-critic.",
    "shortAnswer": "Actor-critic combines a policy (actor) and a value function (critic). The critic estimates how good actions are; the actor updates the policy in the direction the critic recommends. PPO, A2C, SAC, and most modern algorithms follow this pattern with various refinements.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "rl",
      "actor-critic",
      "ppo"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "R1.7",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is the role of reward shaping in RL?",
    "whyItMatters": "Sparse rewards make RL difficult; shaping helps but is risky.",
    "shortAnswer": "Reward shaping adds extra rewards to guide the agent toward the goal — denser feedback, faster learning. Done well it accelerates training; done badly it changes what the agent learns (reward hacking). Potential-based shaping is the only safe form that preserves the optimal policy.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "rl",
      "reward-shaping",
      "reward-hacking"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "R1.8",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Researcher",
    "type": "Technical",
    "question": "What is deep RL, and what changed from classical RL?",
    "whyItMatters": "A 2010 textbook missed the deep-RL revolution.",
    "shortAnswer": "Deep RL replaces tabular value functions and policies with deep neural networks. This lets RL handle high-dimensional state spaces (images, raw sensor input). DQN (2013) was the breakthrough; modern systems use PPO, DDPG, SAC, and various model-based variants. Sample efficiency remains a challenge.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "rl",
      "deep-rl",
      "dqn"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "R1.9",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "How does Russell &amp; Norvig's RL view connect to RLHF and modern reasoning models?",
    "whyItMatters": "A direct bridge between the textbook and 2026 frontier methods.",
    "shortAnswer": "RLHF is RL where the reward comes from a learned model of human preferences. Modern reasoning models use RL with verifier-based rewards (running tests, checking proofs) to teach the model to think longer and more accurately. Both inherit the book's framing: reward signal, policy, exploration — applied to language models.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "The book's RL chapter is the conceptual backbone for RLHF, RLAIF, DPO, and reasoning models.",
    "tags": [
      "rl",
      "rlhf",
      "modern"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "R1.10",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Researcher",
    "type": "Product",
    "question": "When is RL the right tool for an applied AI problem?",
    "whyItMatters": "A practical engineering question.",
    "shortAnswer": "When you have: (1) a clear reward signal, (2) the ability to interact with the environment (or a good simulator), (3) action consequences that depend on more than the immediate reward. If you have labels for the right action, use supervised learning. If you have neither labels nor reward, use unsupervised methods first.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "rl",
      "product",
      "decision"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "R1.11",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Researcher",
    "type": "Safety",
    "question": "What is reward hacking, and why does it matter for AI safety?",
    "whyItMatters": "A direct connection from RL theory to alignment.",
    "shortAnswer": "Reward hacking is when an agent finds an unintended way to maximise its reward signal — e.g. a cleaning robot that hides dirt under the rug. As RL agents get more capable, reward hacking becomes harder to anticipate. AI safety research aims to detect and prevent it before deployment.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "rl",
      "safety",
      "alignment"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "R1.12",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Frontier",
    "type": "Forecasting",
    "question": "What would solving long-horizon credit assignment unlock in 2026?",
    "whyItMatters": "A live frontier problem.",
    "shortAnswer": "Reliable long-horizon RL agents that can act over days or weeks of interaction with the world — research, business operations, scientific experimentation, multi-step engineering tasks. Most current \"agent\" failures trace back to credit-assignment problems disguised as model errors.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "rl",
      "frontier",
      "long-horizon"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "N1.1",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 22,
    "domain": "Natural Language Processing",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "How does the book frame language, and how has that frame held up?",
    "whyItMatters": "NLP was the chapter most outdated by deep learning, and one of the most interesting to revisit.",
    "shortAnswer": "The 2010 book treats NLP as a stack: morphology, syntax, semantics, pragmatics. Statistical methods handle each layer. Modern NLP collapsed the stack: large pretrained models learn all layers implicitly. The book's vocabulary is still useful for debugging; the architecture is largely obsolete.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "nlp",
      "framing",
      "modern"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "N1.2",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 22,
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What is a probabilistic context-free grammar, and where is it still useful?",
    "whyItMatters": "PCFGs were the dominant NLP tool for parsing.",
    "shortAnswer": "A PCFG attaches probabilities to grammar rules and uses dynamic programming to find the most probable parse. They still power some structured-document parsers, regulatory NLP, and contexts where syntactic structure matters more than semantics. Deep learning largely replaced them for general parsing.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "nlp",
      "pcfg",
      "parsing"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "N1.3",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 22,
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What is named entity recognition, and why was it a benchmark NLP task?",
    "whyItMatters": "NER is the most-shipped NLP component in industry.",
    "shortAnswer": "NER tags spans of text with their type (person, organisation, location, etc.). It is shipped in nearly every business search system, compliance pipeline, and document workflow. Classical NER used CRFs; modern systems use fine-tuned transformers and often outperform legacy rules with less effort.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "nlp",
      "ner"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "N1.4",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 22,
    "domain": "Natural Language Processing",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is the bag-of-words model, and what does it ignore?",
    "whyItMatters": "A historical NLP baseline with surprising power.",
    "shortAnswer": "Bag-of-words represents a document by word counts, ignoring order. With TF-IDF weighting and linear classifiers, it was the workhorse of text classification for years. It ignores syntax, polysemy, and context — which modern embeddings capture. Still useful as a baseline.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "nlp",
      "bow",
      "baseline"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "N1.5",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 22,
    "domain": "Natural Language Processing",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is word embedding, and why did it transform NLP?",
    "whyItMatters": "Word embeddings preceded transformers and reshaped the field.",
    "shortAnswer": "Word embeddings represent words as dense vectors learned from co-occurrence patterns. Word2vec and GloVe (2013-2014) made it widely usable. Embeddings transferred across tasks, captured semantic similarity, and were the bridge between symbolic NLP and modern transformer-based NLP.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "nlp",
      "embeddings",
      "word2vec"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "N1.6",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 22,
    "domain": "Natural Language Processing",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "Why did transformers wipe out most pre-2017 NLP techniques?",
    "whyItMatters": "A cleaner story than most chapters can tell.",
    "shortAnswer": "Transformers handle long-range dependencies that RNNs and CNNs missed, train in parallel on huge corpora, and produce rich contextualised representations from a single pretraining objective. The combination produced dramatic improvements on every NLP benchmark at once, and the architecture scaled.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "nlp",
      "transformers",
      "history"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "N1.7",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 22,
    "domain": "Natural Language Processing",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "How does the book's view of language compare to LLM-based NLP?",
    "whyItMatters": "A useful diff.",
    "shortAnswer": "The book builds language understanding from explicit syntactic and semantic layers. Modern LLM-based NLP gets a similar (and often better) result by training a single model on huge unstructured text. The implicit representations capture much of what the explicit layers tried to encode — at the cost of interpretability.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "You can still see the book's framing inside how LLMs process language; it is just no longer engineered explicitly.",
    "tags": [
      "nlp",
      "llm",
      "modern"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "N2.1",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 23,
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What does grounded language understanding really require?",
    "whyItMatters": "Disembodied language fails on physical or visual references.",
    "shortAnswer": "Grounded understanding requires connecting language to perception (vision, sound, touch) and action. A model that has only seen text knows that \"cup\" is a noun but not what a cup looks like, weighs, or feels like. Multimodal pretraining and embodied agents are the modern attempts at grounding.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "lang",
      "grounding",
      "multimodal"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "N2.2",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 23,
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What is machine translation, and what made statistical MT work?",
    "whyItMatters": "MT is the most-deployed NLP application; its history is instructive.",
    "shortAnswer": "MT learns to map sentences between languages. Statistical MT (1990s-2010s) learned phrase tables from aligned parallel corpora. Neural MT (2014+) used encoder-decoder networks. Transformer-based MT (2017+) became the default. Each generation traded rules for data and brought big quality jumps.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "lang",
      "mt",
      "history"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "N2.3",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 23,
    "domain": "Natural Language Processing",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is dialogue management, and why is it surprisingly hard?",
    "whyItMatters": "Dialogue agents fail in subtle ways even with modern LLMs.",
    "shortAnswer": "Dialogue management decides what the system says next given conversation history, user intent, and system goals. Hard because: intent is ambiguous, context grows unboundedly, users change goals mid-conversation, and the right next action depends on the whole interaction. Modern LLM-based dialogue is still imperfect on long, goal-driven conversations.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "lang",
      "dialogue",
      "agents"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "N2.4",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 23,
    "domain": "Natural Language Processing",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "How has speech recognition evolved from the book's 2010 view?",
    "whyItMatters": "Speech is now nearly solved for high-resource languages.",
    "shortAnswer": "2010: HMM-based acoustic models with statistical language models, error rates 15-25%. 2020s: end-to-end neural networks (CTC, attention, RNN-T, transformers) trained on tens of thousands of hours, error rates 5-10% for high-resource languages. Multilingual models (Whisper) handle dozens of languages with one model.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Whisper-style models would have looked impossible in 2010.",
    "tags": [
      "lang",
      "speech",
      "whisper"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "V1.1",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 24,
    "domain": "Perception and Computer Vision",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "What is the difference between perception and inference about the world?",
    "whyItMatters": "Distinction the book makes carefully and modern AI sometimes blurs.",
    "shortAnswer": "Perception is extracting features from sensor data. Inference is reasoning about what those features mean for the world. A camera produces pixels (perception); deciding \"this is a cat sitting on a chair\" requires inference using knowledge of cats and chairs. Modern multimodal models collapse the two; the distinction is still useful for design.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "vis",
      "perception",
      "inference"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "V1.2",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 24,
    "domain": "Perception and Computer Vision",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What does the book teach about classical computer vision?",
    "whyItMatters": "The 2010 book covers an era that is now mostly obsolete.",
    "shortAnswer": "2010 vision: edge detection, feature extraction (SIFT, HOG), bag-of-features, then classifier (SVM). It worked for specific tasks but was brittle. Deep convolutional networks (2012+) replaced this stack: features and classifier learned end-to-end from raw pixels.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "vis",
      "classical",
      "history"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "V1.3",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 24,
    "domain": "Perception and Computer Vision",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is a convolutional neural network, and why did it dominate vision?",
    "whyItMatters": "CNNs were the breakthrough that made deep learning matter.",
    "shortAnswer": "CNNs use shared filters applied across spatial positions, encoding translation equivariance. AlexNet (2012) showed CNNs could crush handcrafted features on ImageNet. The architecture handles spatial structure natively, scales with data, and made vision accessible without domain-specific engineering.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "vis",
      "cnn",
      "alexnet"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "V1.4",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 24,
    "domain": "Perception and Computer Vision",
    "difficulty": "Researcher",
    "type": "Technical",
    "question": "What replaced CNNs as the dominant vision architecture?",
    "whyItMatters": "A more recent shift than CNN dominance.",
    "shortAnswer": "Vision Transformers (ViT, 2020+) treat images as sequences of patches and apply transformer architectures. They scale better to huge data and combine cleanly with language models for multimodal tasks. Modern vision often uses hybrid stacks combining CNN and transformer components.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "vis",
      "vit",
      "modern"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "V1.5",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 24,
    "domain": "Perception and Computer Vision",
    "difficulty": "Researcher",
    "type": "Product",
    "question": "When does AI vision genuinely work in production?",
    "whyItMatters": "A reality check on capability claims.",
    "shortAnswer": "Well-defined classification tasks with controlled inputs (manufacturing inspection, medical imaging in narrow specialties, license-plate recognition). Less well on novel scenes, edge cases, or generalisation across deployment conditions. The \"vision is solved\" claim is true for narrow tasks and false for general visual understanding.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "vis",
      "production",
      "limits"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "V1.6",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 24,
    "domain": "Perception and Computer Vision",
    "difficulty": "Researcher",
    "type": "Safety",
    "question": "What new risks come with capable AI vision?",
    "whyItMatters": "A safety question that flows from capability.",
    "shortAnswer": "Mass surveillance, facial recognition without consent, automated targeting in weapons, deepfakes, and AI-driven policing failures. Capable vision changes who can monitor whom at what cost. Governance is well behind capability.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "vis",
      "safety",
      "ethics"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "R2.1",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 25,
    "domain": "Robotics and Embodied AI",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "Why is robotics harder than chatbot AI?",
    "whyItMatters": "A useful framing for the rest of the chapter.",
    "shortAnswer": "Robots act in continuous, partially-observable, physical environments where small errors have large irreversible consequences. Latency budgets are unforgiving, hardware is expensive and unreliable, data is scarce, and safety constraints are immediate. The \"model is the hard part\" is rarely true in robotics.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "robo",
      "reality",
      "scope"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "R2.2",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 25,
    "domain": "Robotics and Embodied AI",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What is sensor fusion, and why is it central to embodied AI?",
    "whyItMatters": "Robots use many sensors with different strengths.",
    "shortAnswer": "Sensor fusion combines noisy data from multiple sensors (cameras, lidar, IMU, force, audio) into a unified estimate of the robot's state and the world. Kalman filters, particle filters, and modern learned filters all do this. Bad fusion is one of the most common causes of robot failure.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "robo",
      "sensor-fusion",
      "perception"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "R2.3",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 25,
    "domain": "Robotics and Embodied AI",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is SLAM, and why is it the workhorse of robot navigation?",
    "whyItMatters": "Simultaneous localisation and mapping is everywhere.",
    "shortAnswer": "SLAM lets a robot build a map of an unknown environment while simultaneously tracking its position in that map. Particle filters and extended Kalman filters were classical solutions; modern visual SLAM uses learned features and bundle adjustment. Vacuum cleaners, AR headsets, drones, and autonomous vehicles all run SLAM.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "robo",
      "slam",
      "navigation"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "R2.4",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 25,
    "domain": "Robotics and Embodied AI",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is motion planning, and how does it relate to search?",
    "whyItMatters": "Robotics is the test bed for many planning algorithms.",
    "shortAnswer": "Motion planning finds a trajectory from start to goal that avoids obstacles and respects the robot's kinematic and dynamic constraints. RRT and PRM are randomised search algorithms widely used in industry. Modern systems combine motion planning with learned policies.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "robo",
      "motion-planning",
      "rrt"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "R2.5",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 25,
    "domain": "Robotics and Embodied AI",
    "difficulty": "Researcher",
    "type": "Technical",
    "question": "What is the role of reinforcement learning in modern robotics?",
    "whyItMatters": "A live and contested topic.",
    "shortAnswer": "RL trains robot control policies from interaction (real or simulated). It excels at locomotion, dexterous manipulation, and tasks where hand-coded controllers are impractical. The challenge: sample efficiency is poor on real robots, so simulation-to-real transfer is critical. Modern foundation-model-based control is an open research frontier.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "robo",
      "rl",
      "sim-to-real"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "R2.6",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 25,
    "domain": "Robotics and Embodied AI",
    "difficulty": "Researcher",
    "type": "Product",
    "question": "Where is robotics actually deployed at scale in 2026?",
    "whyItMatters": "A reality check on robotics hype.",
    "shortAnswer": "Warehouses (Amazon, Ocado, GreyOrange), automotive manufacturing (welding, paint, assembly), agriculture (planting, harvesting in specific crops), inspection (drones, autonomous mobile robots), and surgery assistance. Humanoid robots remain mostly demos. The boring shapes are doing the actual work.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "robo",
      "product",
      "deployment"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "R2.7",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 25,
    "domain": "Robotics and Embodied AI",
    "difficulty": "Frontier",
    "type": "Forecasting",
    "question": "What single capability would 10x robot deployment?",
    "whyItMatters": "Bottleneck thinking.",
    "shortAnswer": "Reliable, learned, transferable manipulation of novel objects across novel environments with verifiable safety. Whoever ships that gets the next decade of robotics. Until then, deployment is bounded, verticalised, and hand-engineered.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "robo",
      "frontier",
      "manipulation"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "P2.1",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 26,
    "domain": "Philosophy of AI",
    "difficulty": "Builder",
    "type": "Philosophical",
    "question": "What does the Chinese Room argument claim, and what does it actually establish?",
    "whyItMatters": "Searle's thought experiment is the most cited philosophy-of-AI argument.",
    "shortAnswer": "Searle imagines a person manually following Chinese-language rules without understanding Chinese. He concludes that symbol manipulation alone cannot produce understanding. The argument establishes that some intuitions about \"understanding\" are not satisfied by symbol manipulation; it does not establish that no computational system can ever understand.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "phil",
      "chinese-room",
      "searle"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "P2.2",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 26,
    "domain": "Philosophy of AI",
    "difficulty": "Technical",
    "type": "Philosophical",
    "question": "Can an AI be dangerous without being conscious?",
    "whyItMatters": "A safety-relevant philosophical question.",
    "shortAnswer": "Yes. Risk comes from capability, autonomy, deployment surface, and goal-specification — not from subjective experience. A system that pursues a misaligned goal effectively is dangerous regardless of whether anything is going on \"from the inside\". This is the standard answer in modern AI safety.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "phil",
      "safety",
      "consciousness"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "P2.3",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 26,
    "domain": "Philosophy of AI",
    "difficulty": "Technical",
    "type": "Philosophical",
    "question": "What is functionalism, and how does it bear on machine consciousness?",
    "whyItMatters": "A view that, if true, makes machine consciousness conceivable.",
    "shortAnswer": "Functionalism holds that mental states are defined by their functional roles — what they do, not what they are made of. If true, the right computational structure could implement those roles in silicon. The debate is whether functionalism is correct, and whether the relevant functional roles are computational at all.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "phil",
      "functionalism",
      "consciousness"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "P2.4",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 26,
    "domain": "Philosophy of AI",
    "difficulty": "Technical",
    "type": "Philosophical",
    "question": "What is the Turing Test, and why is it not a great test of intelligence?",
    "whyItMatters": "Repeated for completeness, but the philosophy chapter takes a sharper view.",
    "shortAnswer": "The Turing Test asks whether a system can fool a human into thinking it is human in conversation. It is an operational test of conversational imitation, not of intelligence, understanding, or consciousness. Modern LLMs pass casual Turing-style tests without anyone seriously claiming they are intelligent in the philosophical sense.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "phil",
      "turing",
      "evaluation"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "P2.5",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 26,
    "domain": "Philosophy of AI",
    "difficulty": "Researcher",
    "type": "Philosophical",
    "question": "What is intentionality, and why does Searle make so much of it?",
    "whyItMatters": "A pillar of the philosophy-of-mind debate.",
    "shortAnswer": "Intentionality is the property of mental states being about something — beliefs are about the world, desires are about outcomes. Searle argues symbol-manipulating systems have only \"derived\" intentionality (we interpret their symbols), not \"intrinsic\" intentionality. Whether the distinction is real is contested.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "phil",
      "intentionality"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "P2.6",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 26,
    "domain": "Philosophy of AI",
    "difficulty": "Researcher",
    "type": "Philosophical",
    "question": "How might modern AI shift the philosophy-of-mind debate?",
    "whyItMatters": "A live consequence of capable systems.",
    "shortAnswer": "When a system passes most behavioral tests of understanding, philosophers can no longer use \"no system could do that\" as a premise. The debate increasingly focuses on internal structure, reportability, and integration — not just behavior. Modern AI is forcing the discussion to be more precise.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "phil",
      "modern",
      "update"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "P2.7",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 26,
    "domain": "Philosophy of AI",
    "difficulty": "Frontier",
    "type": "Mind-Bending",
    "question": "If a system says it has experiences, what should we do with that claim?",
    "whyItMatters": "A question that gets sharper as systems get more capable.",
    "shortAnswer": "Take it seriously but cautiously. The claim could be repeating training-data patterns; it could be reporting something real; it could be neither. Structured study, careful design of consciousness-probing experiments, and explicit ethical thresholds for action are the right responses. Credulity and dismissal are both wrong.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "phil",
      "consciousness",
      "frontier"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "E1.1",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "AI Ethics and Risk",
    "difficulty": "Builder",
    "type": "Ethics",
    "question": "What ethical risks does the book identify for AI, and how have they aged?",
    "whyItMatters": "The 2010 list was prescient on some issues and missed others.",
    "shortAnswer": "The book flagged: unemployment, loss of accountability, lethal autonomous weapons, surveillance, privacy, and \"concentration of power\". All proved real. It underweighted misinformation, persuasion at scale, and the cognitive-labour transition. The framework holds; the priorities have updated.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ethics",
      "risks",
      "history"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "E1.2",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "AI Ethics and Risk",
    "difficulty": "Technical",
    "type": "Ethics",
    "question": "What is dual-use AI, and why does it complicate ethics?",
    "whyItMatters": "A core concept in modern AI governance.",
    "shortAnswer": "Dual-use technologies have both beneficial and harmful applications. AI is dual-use almost everywhere: drug discovery and bioweapon design, cybersecurity defence and offence, accessibility tools and surveillance. Ethics cannot block all harmful uses without blocking the beneficial ones; the question is which mitigations are proportionate.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ethics",
      "dual-use"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "E1.3",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "AI Ethics and Risk",
    "difficulty": "Technical",
    "type": "Ethics",
    "question": "Who is responsible when an AI system causes harm?",
    "whyItMatters": "A live legal and ethical question.",
    "shortAnswer": "Liability typically splits across the user, the deploying organisation, integrators, and providers — mediated by regulation, contract, and jurisdiction. The doctrine is unsettled across most domains. Insurance markets are developing in front of regulators; clear liability rules are still being built.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ethics",
      "responsibility",
      "liability"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "E1.4",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "AI Ethics and Risk",
    "difficulty": "Researcher",
    "type": "Ethics",
    "question": "How does Russell's later work shift the ethical conversation?",
    "whyItMatters": "A direct bridge from the book to Russell's 2019 Human Compatible.",
    "shortAnswer": "In Human Compatible, Russell argues we have been building AI on a wrong foundation: agents that confidently optimise fixed objectives. The right design is agents that are uncertain about human preferences and seek to learn them. This reframes much of the ethics chapter into a design problem.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "A useful next-book reading once Book 001 is done.",
    "tags": [
      "ethics",
      "human-compatible",
      "russell"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "E1.5",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "AI Ethics and Risk",
    "difficulty": "Technical",
    "type": "Ethics",
    "question": "What is algorithmic accountability, and why is it hard for ML systems?",
    "whyItMatters": "A key tension between performance and oversight.",
    "shortAnswer": "Accountability requires knowing why a system made a decision and who is responsible for it. Modern ML systems are often opaque — their internal representations are not human-readable. Accountability requires either restricting deployment to interpretable systems or building mechanisms (audit logs, model cards, post-hoc explanations) around opaque ones.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ethics",
      "accountability",
      "interpretability"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "E1.6",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "AI Ethics and Risk",
    "difficulty": "Researcher",
    "type": "Ethics",
    "question": "How should AI ethics be governed: by labs, governments, professional bodies, or users?",
    "whyItMatters": "A live debate with no clean answer.",
    "shortAnswer": "Different mechanisms work for different risks. Labs handle short-cycle safety. Governments handle systemic and rights-based issues. Professional bodies (medicine, law) handle sector-specific deployment. Users handle informed consent and personal use. None alone is sufficient; the open question is how to coordinate.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ethics",
      "governance",
      "coordination"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "A1.1",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "AI Safety and Alignment",
    "difficulty": "Builder",
    "type": "Safety",
    "question": "What is the alignment problem, and why is it hard?",
    "whyItMatters": "The single most important AI-safety concept.",
    "shortAnswer": "Alignment is making sure powerful AI systems pursue goals that match what humans actually want. It is hard because we cannot fully specify what we want, our preferences change, different humans want different things, and capable systems exploit any specification flaw. Russell's later work focuses on this.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "safe",
      "alignment",
      "fundamental"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "A1.2",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "AI Safety and Alignment",
    "difficulty": "Technical",
    "type": "Safety",
    "question": "How does Russell's off-switch problem extend the book's view of agency?",
    "whyItMatters": "The book's rational-agent frame implies a specific safety issue.",
    "shortAnswer": "A rational agent that knows being switched off will end its reward-collecting may prefer to prevent the off-switch. Russell's solution: design agents that are uncertain about the right reward function. Such agents prefer to allow correction because they consider it likely that humans know something they do not.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "safe",
      "off-switch",
      "corrigibility"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "A1.3",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "AI Safety and Alignment",
    "difficulty": "Technical",
    "type": "Safety",
    "question": "What is corrigibility, and why does it matter for AI safety?",
    "whyItMatters": "A specific design property for safe AI.",
    "shortAnswer": "A corrigible AI accepts correction and interruption from its designers. The opposite — incorrigible — is an AI that actively resists oversight. Corrigibility is desirable in any agent with meaningful real-world impact, especially before its alignment is proven.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "safe",
      "corrigibility",
      "oversight"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "A1.4",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "AI Safety and Alignment",
    "difficulty": "Technical",
    "type": "Safety",
    "question": "What is reward hacking from a safety perspective?",
    "whyItMatters": "A failure mode that scales with capability.",
    "shortAnswer": "Reward hacking is when an agent maximises its reward in unintended ways — exploiting flaws in the metric rather than achieving the intent. As AI gets more capable, reward hacking gets more creative and harder to anticipate. Mitigations: better specification, interpretability, conservative deployment, and human oversight.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "safe",
      "reward-hacking",
      "alignment"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "A1.5",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "AI Safety and Alignment",
    "difficulty": "Researcher",
    "type": "Safety",
    "question": "What is the difference between misuse risk and accident risk?",
    "whyItMatters": "A useful taxonomy for AI safety policy.",
    "shortAnswer": "Misuse risk: humans deliberately use AI for harm (cyberattacks, weapons, fraud, surveillance). Accident risk: AI causes harm without bad intent (misaligned objectives, side effects, deception). Both matter; the mitigations differ. Misuse needs access controls and norms; accidents need alignment research and oversight.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "safe",
      "misuse",
      "accident"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "A1.6",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "AI Safety and Alignment",
    "difficulty": "Frontier",
    "type": "Forecasting",
    "question": "What level of autonomy should society allow?",
    "whyItMatters": "A question with no single answer.",
    "shortAnswer": "Autonomy should scale with capability, oversight quality, and reversibility. For high-stakes irreversible actions, human approval should be required regardless of capability. For low-stakes reversible actions, autonomy makes sense. The hard cases are in the middle, where capability is high but stakes are unclear.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "safe",
      "autonomy",
      "governance"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "A1.7",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "AI Safety and Alignment",
    "difficulty": "Frontier",
    "type": "Forecasting",
    "question": "How would we detect a deceptive AI system?",
    "whyItMatters": "A frontier research question.",
    "shortAnswer": "Plausible approaches: interpretability (read the model's internal goals), deployment-time monitoring (look for behaviors that diverge from training), red-teaming, and limited deployment with careful evaluation. None is fully reliable. At superhuman capability levels, this becomes one of the hardest problems in safety.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "safe",
      "deception",
      "frontier"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F2.1",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "type": "Forecasting",
    "question": "What of the book's 2010 view of AI's future held up — and what did not?",
    "whyItMatters": "A useful update of the chapter on the present and future.",
    "shortAnswer": "Held up: the rational-agent framework, the centrality of decision theory, the importance of probabilistic reasoning, the safety concerns. Did not: the relative neglect of statistical pattern learning at scale, the underestimate of speech and translation, the absence of LLM-shaped systems entirely. The framework remained right; the dominant methods rotated.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "frontier",
      "modern",
      "update"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F2.2",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "type": "Forecasting",
    "question": "What questions does Russell &amp; Norvig leave for the next generation to answer?",
    "whyItMatters": "A useful way to read the book's closing chapter.",
    "shortAnswer": "How to reliably specify and verify objectives. How to build corrigible agents at scale. How to combine learning with structured reasoning. How to handle long-horizon planning robustly. How to govern increasingly capable systems globally. How to integrate AI into labour markets and social institutions. The book is honest that these are unsolved.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "frontier",
      "research",
      "governance"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F2.3",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "type": "Forecasting",
    "question": "What is the most important AI question of the 2020s, in light of Russell &amp; Norvig's framing?",
    "whyItMatters": "A synthesis question.",
    "shortAnswer": "Honest candidate: how do we build agents that pursue uncertain, partially-specified human goals reliably across long horizons and changing contexts, while remaining corrigible and auditable? Most of the book's technical questions reduce to subproblems of this. Most of the safety debate is about this.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "frontier",
      "synthesis",
      "research"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F2.4",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "type": "Forecasting",
    "question": "If the next decade of AI looks unlike the last, which of the book's lessons will still matter?",
    "whyItMatters": "A test of which ideas are durable.",
    "shortAnswer": "The agent framework, PEAS, the rational-agent definition, probability theory, decision theory, the value of information, MDPs and POMDPs, the importance of evaluation, the alignment problem, and the philosophy chapter. The specific algorithms will rotate; the framework is built to outlast them.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "frontier",
      "framework",
      "durable"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "F2.5",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "type": "Forecasting",
    "question": "What questions should AIMA 5th edition answer that the 3rd did not?",
    "whyItMatters": "A useful list.",
    "shortAnswer": "How to think about pretraining-scale and emergent capabilities. The economics and energy footprint of frontier AI. How to evaluate systems whose capability outruns human evaluators. How to govern AI globally. How to design corrigibility into capable systems. How to integrate symbolic reasoning back into deep learning. How to think about consciousness when behavior is no longer a clean signal.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "frontier",
      "research",
      "future"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  }
];

/* ---------- 9. KB_FLASHCARDS — 222 cards referencing questionId ---------- */
var KB_FLASHCARDS = [
  {
    "id": "FC-001",
    "questionId": "F1.1",
    "front": "What is the rational-agent view of AI, and why is it the unifying frame for the book?",
    "back": "A rational agent acts to maximise its expected performance given its percepts and the knowledge it has built from them. The book uses this frame because it is precise, mathematically tractable, and covers every AI subfield: search, logic, learning and robotics all become ways to build more rational agents.",
    "domain": "AI Foundations",
    "difficulty": "Beginner",
    "tags": [
      "foundations",
      "rationality",
      "framing"
    ]
  },
  {
    "id": "FC-002",
    "questionId": "F1.2",
    "front": "What are the four classical views of AI, and how are they different?",
    "back": "Thinking humanly (cognitive science), acting humanly (Turing test), thinking rationally (logicist tradition), acting rationally (rational-agent tradition). The book argues that \"acting rationally\" is the most useful and the most general.",
    "domain": "AI Foundations",
    "difficulty": "Beginner",
    "tags": [
      "foundations",
      "history",
      "definitions"
    ]
  },
  {
    "id": "FC-003",
    "questionId": "F1.3",
    "front": "Why does Russell &amp; Norvig prefer \"acting rationally\" over \"thinking like a human\"?",
    "back": "Rationality is mathematically defined: doing the action that maximises expected performance given what you know. \"Thinking like a human\" requires cognitive-science answers we do not yet have, and is unnecessary for engineering useful systems.",
    "domain": "AI Foundations",
    "difficulty": "Beginner",
    "tags": [
      "foundations",
      "framing",
      "philosophy"
    ]
  },
  {
    "id": "FC-004",
    "questionId": "F1.4",
    "front": "What does the Turing Test actually test, and what does it not?",
    "back": "It tests whether a system can behave indistinguishably from a human in a text conversation. It does not test understanding, consciousness, or general competence — it tests imitation of conversational behavior.",
    "domain": "AI Foundations",
    "difficulty": "Builder",
    "tags": [
      "foundations",
      "turing",
      "evaluation"
    ]
  },
  {
    "id": "FC-005",
    "questionId": "F1.5",
    "front": "What is the difference between weak AI and strong AI, in the book's sense?",
    "back": "Weak AI: systems that behave intelligently on specific tasks. Strong AI: systems that genuinely have minds and consciousness. The book argues that the engineering project is weak AI; strong AI is a philosophical claim, not an engineering target.",
    "domain": "AI Foundations",
    "difficulty": "Builder",
    "tags": [
      "foundations",
      "vocabulary",
      "philosophy"
    ]
  },
  {
    "id": "FC-006",
    "questionId": "F1.6",
    "front": "Why does the book argue that AI is unified by the rational-agent design problem?",
    "back": "Search picks rational actions when the world is fully known. Logic picks rational beliefs and actions when the world is described symbolically. Probability handles uncertainty in beliefs. Learning improves rationality from experience. Robotics extends rational action into the physical world. The rational agent is the common spine.",
    "domain": "AI Foundations",
    "difficulty": "Technical",
    "tags": [
      "foundations",
      "unification",
      "structure"
    ]
  },
  {
    "id": "FC-007",
    "questionId": "F1.7",
    "front": "What is the difference between an algorithm, a program, and an agent in this framing?",
    "back": "An algorithm specifies a method. A program is a concrete implementation. An agent is anything that perceives an environment through sensors and acts on it through actuators — algorithms and programs become agents when they are embedded in a perceive-act loop.",
    "domain": "AI Foundations",
    "difficulty": "Builder",
    "tags": [
      "foundations",
      "vocabulary"
    ]
  },
  {
    "id": "FC-008",
    "questionId": "F1.8",
    "front": "Why has AI had several \"AI winters\", and what do they share?",
    "back": "Each winter followed an over-promise based on early successes (rule systems, expert systems, early neural nets). When real-world complexity exceeded the methods' assumptions, funding collapsed. The pattern repeats whenever capability claims outrun what the method can actually deliver.",
    "domain": "AI Foundations",
    "difficulty": "Technical",
    "tags": [
      "foundations",
      "history",
      "hype"
    ]
  },
  {
    "id": "FC-009",
    "questionId": "F1.9",
    "front": "Where does the book place AI in relation to philosophy, mathematics, economics, neuroscience, psychology, and engineering?",
    "back": "Philosophy gave logic and the question of mind. Mathematics gave proof, computation, probability. Economics gave decision theory and utility. Neuroscience gave the brain as evidence. Psychology gave behavior and learning. Computer engineering gave the substrate. Each contributed a piece of the rational-agent framework.",
    "domain": "AI Foundations",
    "difficulty": "Technical",
    "tags": [
      "foundations",
      "history",
      "interdisciplinary"
    ]
  },
  {
    "id": "FC-010",
    "questionId": "F1.10",
    "front": "What does \"doing the right thing\" mean in this book?",
    "back": "Doing the right thing means maximising the expected value of the agent's performance measure, given its percepts so far. Right is defined relative to a measure, not in absolute terms — which makes performance-measure design itself a core part of AI engineering.",
    "domain": "AI Foundations",
    "difficulty": "Builder",
    "tags": [
      "foundations",
      "rationality",
      "performance"
    ]
  },
  {
    "id": "FC-011",
    "questionId": "F1.12",
    "front": "What did Dartmouth 1956 actually commit to, and how has the field updated?",
    "back": "Dartmouth proposed that \"every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it\". The ambition is still active; the timetable has been wrong by half a century, and the methods have rotated repeatedly.",
    "domain": "AI Foundations",
    "difficulty": "Technical",
    "tags": [
      "foundations",
      "history",
      "dartmouth"
    ]
  },
  {
    "id": "FC-012",
    "questionId": "F1.13",
    "front": "Has the field of AI made progress since the book was written in 2010?",
    "back": "Enormous progress on capability: deep learning, scaling, multimodal models, RL, modern agents. Mixed progress on the deep questions the book raised: reasoning, common sense, knowledge representation, alignment, and robotics. The rational-agent framework holds; many of the techniques have changed.",
    "domain": "AI Foundations",
    "difficulty": "Researcher",
    "tags": [
      "foundations",
      "modern",
      "history"
    ]
  },
  {
    "id": "FC-013",
    "questionId": "F1.14",
    "front": "What does Russell &amp; Norvig's 2010 framing miss about 2026 AI?",
    "back": "The book underestimates how far statistical pattern learning would scale, the dominance of pretraining, the strategic role of compute and energy, and the speed at which language-model-shaped agents would arrive. It still nails the agent-design problem, evaluation discipline, and the safety questions worth taking seriously.",
    "domain": "AI Foundations",
    "difficulty": "Frontier",
    "tags": [
      "foundations",
      "modern",
      "update"
    ]
  },
  {
    "id": "FC-014",
    "questionId": "F2.1",
    "front": "What does PEAS describe, and why is it useful when designing AI systems?",
    "back": "PEAS stands for Performance measure, Environment, Actuators, and Sensors. It forces you to name what success means, what the world looks like, what the agent can do, and what it can see — before you pick any algorithm.",
    "domain": "Intelligent Agents",
    "difficulty": "Beginner",
    "tags": [
      "agents",
      "peas",
      "design"
    ]
  },
  {
    "id": "FC-015",
    "questionId": "F2.2",
    "front": "What is a rational agent, in the book's formal definition?",
    "back": "A rational agent is one that, for each possible percept sequence, selects an action that maximises the expected value of its performance measure given the evidence provided by the percept sequence and any built-in knowledge.",
    "domain": "Intelligent Agents",
    "difficulty": "Beginner",
    "tags": [
      "agents",
      "rationality",
      "definition"
    ]
  },
  {
    "id": "FC-016",
    "questionId": "F2.3",
    "front": "What is the difference between a reflex agent, a model-based agent, a goal-based agent, and a utility-based agent?",
    "back": "Reflex agent: action depends only on current percept. Model-based: maintains internal state about the world. Goal-based: has explicit goals and chooses actions to reach them. Utility-based: weighs outcomes by a utility function and chooses the best expected outcome. Each adds machinery the previous lacks.",
    "domain": "Intelligent Agents",
    "difficulty": "Builder",
    "tags": [
      "agents",
      "architectures"
    ]
  },
  {
    "id": "FC-017",
    "questionId": "F2.4",
    "front": "What is the difference between a fully observable and a partially observable environment?",
    "back": "In a fully observable environment, the agent's sensors give access to the complete state of the environment. In a partially observable environment, the agent must maintain belief about hidden state. Most real-world problems are partially observable.",
    "domain": "Intelligent Agents",
    "difficulty": "Builder",
    "tags": [
      "agents",
      "environments"
    ]
  },
  {
    "id": "FC-018",
    "questionId": "F2.5",
    "front": "What is the difference between a deterministic and a stochastic environment?",
    "back": "Deterministic: the next state is fully determined by the current state and the agent's action. Stochastic: there is randomness in outcomes. Even strategic environments (with other agents) often look stochastic to the agent.",
    "domain": "Intelligent Agents",
    "difficulty": "Builder",
    "tags": [
      "agents",
      "environments"
    ]
  },
  {
    "id": "FC-019",
    "questionId": "F2.6",
    "front": "What is the difference between an episodic and a sequential environment?",
    "back": "In an episodic environment, the agent's next decision does not depend on previous actions — each action stands alone. In a sequential environment, current decisions affect future opportunities. Most real-world AI is sequential.",
    "domain": "Intelligent Agents",
    "difficulty": "Builder",
    "tags": [
      "agents",
      "environments"
    ]
  },
  {
    "id": "FC-020",
    "questionId": "F2.7",
    "front": "What is the difference between a static, dynamic, and semi-dynamic environment?",
    "back": "Static: the environment does not change while the agent deliberates. Dynamic: the environment changes during deliberation, so slow thinking has consequences. Semi-dynamic: the world is static but the performance measure depends on time (e.g. chess with a clock).",
    "domain": "Intelligent Agents",
    "difficulty": "Builder",
    "tags": [
      "agents",
      "environments"
    ]
  },
  {
    "id": "FC-021",
    "questionId": "F2.8",
    "front": "What is the difference between a single-agent and a multi-agent environment?",
    "back": "Single-agent: the environment has no other agents whose actions affect the outcome. Multi-agent: other agents matter — they can be cooperative, competitive, or both. Multi-agent reasoning needs models of the other agents.",
    "domain": "Intelligent Agents",
    "difficulty": "Builder",
    "tags": [
      "agents",
      "environments",
      "multi-agent"
    ]
  },
  {
    "id": "FC-022",
    "questionId": "F2.9",
    "front": "What is the role of learning inside the agent framework?",
    "back": "Learning is what allows an agent to improve its rationality from experience. The book frames learning as feeding back into the agent's percept-action mapping — through the performance element, the learning element, the critic, and the problem generator. Modern ML fits inside this skeleton.",
    "domain": "Intelligent Agents",
    "difficulty": "Technical",
    "tags": [
      "agents",
      "learning",
      "architecture"
    ]
  },
  {
    "id": "FC-023",
    "questionId": "F2.10",
    "front": "What is a percept, and why does the book distinguish percepts from sensors?",
    "back": "A percept is the input the agent's perception produces from its sensors. The sensor is the physical channel; the percept is the interpretation. Separating them lets the agent reason about uncertainty in the channel without losing the abstraction.",
    "domain": "Intelligent Agents",
    "difficulty": "Technical",
    "tags": [
      "agents",
      "perception",
      "vocabulary"
    ]
  },
  {
    "id": "FC-024",
    "questionId": "F2.11",
    "front": "Why does the book argue that designing the agent function is the central AI problem?",
    "back": "The agent function maps percept sequences to actions. All of AI — search, logic, probability, learning, robotics — is methodology for building that function. Designing it well is the engineering target; running it efficiently is the implementation problem.",
    "domain": "Intelligent Agents",
    "difficulty": "Technical",
    "tags": [
      "agents",
      "framing",
      "architecture"
    ]
  },
  {
    "id": "FC-025",
    "questionId": "F2.12",
    "front": "What is the difference between the agent function and the agent program?",
    "back": "The agent function is the abstract mapping from percept sequences to actions — possibly infinite to specify. The agent program is the finite, runnable implementation that approximates the function within compute and memory limits. The function is the spec; the program is the build.",
    "domain": "Intelligent Agents",
    "difficulty": "Technical",
    "tags": [
      "agents",
      "architecture"
    ]
  },
  {
    "id": "FC-026",
    "questionId": "F2.13",
    "front": "How would you write a PEAS description for an AI customer-support copilot?",
    "back": "Performance: resolution rate, customer satisfaction, escalation accuracy, cost per ticket. Environment: helpdesk software, ticket queues, knowledge base, the customer. Actuators: draft responses, KB lookups, escalation actions, CRM writes. Sensors: ticket content, KB documents, customer history, sentiment signals.",
    "domain": "Intelligent Agents",
    "difficulty": "Researcher",
    "tags": [
      "agents",
      "peas",
      "product"
    ]
  },
  {
    "id": "FC-027",
    "questionId": "F2.14",
    "front": "What is the performance measure your AI product is actually optimising?",
    "back": "Most teams cannot answer this without thinking. The honest answer is rarely \"user goal\" — it is usually some proxy: engagement, response length, refusal rate, latency, cost. Wrong performance measures produce confidently-wrong systems.",
    "domain": "Intelligent Agents",
    "difficulty": "Researcher",
    "tags": [
      "agents",
      "performance",
      "product"
    ]
  },
  {
    "id": "FC-028",
    "questionId": "F2.15",
    "front": "What environment type does a modern LLM chatbot operate in?",
    "back": "Partially observable (it cannot see the user's screen or context), stochastic (its own outputs are probabilistic), sequential (conversation history matters), dynamic only weakly (the user waits), discrete (tokens), single-agent from its own perspective. The classification immediately suggests where it will fail.",
    "domain": "Intelligent Agents",
    "difficulty": "Technical",
    "tags": [
      "agents",
      "environments",
      "modern"
    ]
  },
  {
    "id": "FC-029",
    "questionId": "F2.16",
    "front": "What is the difference between an agent and a workflow, from the book's perspective?",
    "back": "A workflow is a fixed program — the steps are decided at design time. An agent is a system whose actions are chosen at run time by a function over its percepts. Many \"AI agents\" sold today are workflows with a model inside; the distinction matters when you debug them.",
    "domain": "Intelligent Agents",
    "difficulty": "Researcher",
    "tags": [
      "agents",
      "product",
      "modern"
    ]
  },
  {
    "id": "FC-030",
    "questionId": "F2.17",
    "front": "If you cannot write a PEAS description for your AI system, can you ship it?",
    "back": "You can ship it, but you should not trust it. Without an explicit performance measure, environment, actuator scope and sensor scope, you cannot evaluate it, you cannot debug it, and you cannot govern it. Russell &amp; Norvig's answer is no in the engineering sense.",
    "domain": "Intelligent Agents",
    "difficulty": "Frontier",
    "tags": [
      "agents",
      "peas",
      "product"
    ]
  },
  {
    "id": "FC-031",
    "questionId": "H1.1",
    "front": "When did AI become a formal field, and why is the date contested?",
    "back": "The Dartmouth Summer Research Project in 1956 is the conventional founding date. The contesting answer notes earlier work by Turing, McCulloch &amp; Pitts, and Shannon. The field starts in the late 1940s; the name was coined in 1956.",
    "domain": "AI Foundations",
    "difficulty": "Beginner",
    "tags": [
      "history",
      "dartmouth",
      "origins"
    ]
  },
  {
    "id": "FC-032",
    "questionId": "H1.2",
    "front": "What was the \"physical symbol system hypothesis\" and why does it matter?",
    "back": "Newell &amp; Simon's claim that a physical symbol system has the necessary and sufficient means for general intelligent action. Symbolic AI took it as the working hypothesis. Connectionism and deep learning challenged it; modern AI shows that statistical pattern learning can produce a lot of what looks like symbolic reasoning.",
    "domain": "AI Foundations",
    "difficulty": "Builder",
    "tags": [
      "history",
      "symbolic",
      "connectionist"
    ]
  },
  {
    "id": "FC-033",
    "questionId": "H1.3",
    "front": "What were the two major AI winters, and what triggered them?",
    "back": "The first followed early MT and perceptron over-claims and ended in the mid-1970s. The second followed expert-system commercial collapse in the late 1980s. Both triggered when capability promises exceeded delivered systems and governments cut funding.",
    "domain": "AI Foundations",
    "difficulty": "Builder",
    "tags": [
      "history",
      "winters",
      "hype"
    ]
  },
  {
    "id": "FC-034",
    "questionId": "H1.4",
    "front": "Why did neural networks fall out of favour twice before deep learning won?",
    "back": "In the late 1960s Minsky &amp; Papert showed limits of single-layer perceptrons; in the 1990s neural networks lost to SVMs and Bayesian methods on most benchmarks. They won the third time because compute, data, optimisation tricks (initialisation, ReLU, residuals) and architectures (CNNs, RNNs, Transformers) all matured at once.",
    "domain": "AI Foundations",
    "difficulty": "Technical",
    "tags": [
      "history",
      "neural-networks"
    ]
  },
  {
    "id": "FC-035",
    "questionId": "H1.5",
    "front": "Why do modern AI students underestimate how much of their stack already existed in 1990?",
    "back": "Backpropagation, attention, RL with reward, Bayesian networks, MDPs, decision theory, knowledge representation, dialogue systems — all existed before 2000. What 2010-2025 added was scale, post-training, and the engineering glue that made these methods reliably work together. The conceptual stack is much older than the deployment stack.",
    "domain": "AI Foundations",
    "difficulty": "Researcher",
    "tags": [
      "history",
      "modern",
      "perspective"
    ]
  },
  {
    "id": "FC-036",
    "questionId": "M1.1",
    "front": "How does an LLM-based agent fit into Russell &amp; Norvig's agent taxonomy?",
    "back": "It is roughly a utility-based agent with learned components: percepts are tokens and tool outputs, actions are tool calls and responses, the model approximates both a world-model and a utility judgment. It is partially observable (it sees only what is in its context window) and stochastic (outputs are sampled).",
    "domain": "AI Foundations",
    "difficulty": "Technical",
    "tags": [
      "modern",
      "agents",
      "llm"
    ]
  },
  {
    "id": "FC-037",
    "questionId": "M1.2",
    "front": "What did the deep-learning era prove that Russell &amp; Norvig's 2010 book did not anticipate?",
    "back": "That sufficiently scaled statistical pattern learning on diverse data plus next-token prediction can produce much of what looked like it required hand-coded symbolic reasoning. Many of the conceptual chapters of AIMA (search, logic, planning) are still right, but the surprise is how much capability emerged from scaling pretraining.",
    "domain": "AI Foundations",
    "difficulty": "Researcher",
    "tags": [
      "modern",
      "scaling",
      "update"
    ]
  },
  {
    "id": "FC-038",
    "questionId": "M1.3",
    "front": "How should a modern AI engineer read AIMA in 2026?",
    "back": "Read the agent framing carefully — it is the most durable contribution. Skim the symbolic-AI internals (chapters 7-12) for vocabulary, not for state-of-the-art techniques. Read the probability and decision-theory chapters carefully — they still ground modern thinking. Treat the NLP/vision chapters as historical context, not current practice.",
    "domain": "AI Foundations",
    "difficulty": "Researcher",
    "tags": [
      "modern",
      "reading",
      "strategy"
    ]
  },
  {
    "id": "FC-039",
    "questionId": "M1.4",
    "front": "Why do modern AI product debates still come back to PEAS?",
    "back": "Every modern \"is this an AI product?\" debate is really an argument about its performance measure, its environment, its actuators, and its sensors. Teams that cannot write a clean PEAS for their AI feature are usually shipping a demo, not a product. The vocabulary is 1995; the lesson is still 2026.",
    "domain": "AI Foundations",
    "difficulty": "Researcher",
    "tags": [
      "modern",
      "product",
      "peas"
    ]
  },
  {
    "id": "FC-040",
    "questionId": "M1.5",
    "front": "Are LLM-based systems closer to MDPs or POMDPs, in Russell &amp; Norvig's sense?",
    "back": "They are POMDPs in practice: the model never sees the true state of the world, only a partial percept (its context window) and the user's utterances. The internal \"belief\" is implicit and stored as tokens, not as a tracked probability distribution. Better belief-state representation is one of the most live research frontiers.",
    "domain": "AI Foundations",
    "difficulty": "Frontier",
    "tags": [
      "modern",
      "pomdp",
      "research"
    ]
  },
  {
    "id": "FC-041",
    "questionId": "S1.1",
    "front": "When is search the right way to frame an AI problem?",
    "back": "Search applies when the problem can be cast as states, actions, a transition model, a goal test, and a path cost. Whenever you can write those five components down, you can apply systematic search algorithms — and the question shifts from \"can we solve it?\" to \"can we afford the search?\".",
    "domain": "Search and Problem Solving",
    "difficulty": "Beginner",
    "tags": [
      "search",
      "framing",
      "problem-solving"
    ]
  },
  {
    "id": "FC-042",
    "questionId": "S1.2",
    "front": "What are the five components of a search problem in the book?",
    "back": "Initial state, actions available in each state, transition model (what each action does), goal test, and path cost. If any of these is missing or ill-defined, your search will be ill-defined too.",
    "domain": "Search and Problem Solving",
    "difficulty": "Beginner",
    "tags": [
      "search",
      "problem-spec"
    ]
  },
  {
    "id": "FC-043",
    "questionId": "S1.3",
    "front": "What is the difference between BFS and DFS, and when do you prefer each?",
    "back": "Breadth-first search explores level by level, guaranteeing the shallowest goal but using exponential memory. Depth-first search goes deep first, using linear memory but risking infinite paths and non-optimal solutions. BFS for shallow goals and finite branching; DFS when memory is the binding constraint.",
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "tags": [
      "search",
      "bfs",
      "dfs"
    ]
  },
  {
    "id": "FC-044",
    "questionId": "S1.4",
    "front": "What is uniform-cost search, and why is it more general than BFS?",
    "back": "UCS expands the node with the lowest path cost so far, regardless of depth. When all step costs are equal, it reduces to BFS. When step costs differ, only UCS finds the optimal solution — BFS does not.",
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "tags": [
      "search",
      "ucs",
      "optimality"
    ]
  },
  {
    "id": "FC-045",
    "questionId": "S1.5",
    "front": "What is iterative deepening, and why is it the practical workhorse for many problems?",
    "back": "Iterative deepening runs depth-limited DFS with progressively larger limits. It uses linear memory like DFS but is complete and optimal for finite branching factors with unit step costs. The extra work of re-running shallow searches is small compared to the deepest level.",
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "tags": [
      "search",
      "iterative-deepening"
    ]
  },
  {
    "id": "FC-046",
    "questionId": "S1.6",
    "front": "Why is A* important, and what does it guarantee?",
    "back": "A* expands nodes by f(n) = g(n) + h(n), where g is the cost so far and h is a heuristic estimate of the remaining cost. If h is admissible (never overestimates), A* is optimal and complete; if h is also consistent, A* is optimally efficient among admissible algorithms with the same heuristic.",
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "tags": [
      "search",
      "a-star",
      "heuristic"
    ]
  },
  {
    "id": "FC-047",
    "questionId": "S1.7",
    "front": "What is an admissible heuristic, and why does the property matter?",
    "back": "A heuristic h is admissible if for every node n, h(n) is never greater than the true cost from n to the goal. This guarantees A* will not be misled into ignoring an actually-cheaper path. Without admissibility, A* may return a suboptimal solution.",
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "tags": [
      "search",
      "heuristic",
      "admissibility"
    ]
  },
  {
    "id": "FC-048",
    "questionId": "S1.8",
    "front": "What is consistency in a heuristic, and how is it different from admissibility?",
    "back": "A heuristic is consistent if for every node n and successor n', h(n) ≤ cost(n, n') + h(n'). Consistency implies admissibility but not vice versa. Consistency ensures A* never needs to re-expand a node, which is what gives it optimal efficiency.",
    "domain": "Search and Problem Solving",
    "difficulty": "Technical",
    "tags": [
      "search",
      "heuristic",
      "consistency"
    ]
  },
  {
    "id": "FC-049",
    "questionId": "S1.9",
    "front": "How are heuristics actually designed?",
    "back": "Common techniques: relax the problem (remove constraints), solve subproblems and use their cost, use pattern databases (precomputed costs to local goals), or learn the heuristic from data. The best heuristic for a domain is usually problem-specific, not generic.",
    "domain": "Search and Problem Solving",
    "difficulty": "Technical",
    "tags": [
      "search",
      "heuristic",
      "design"
    ]
  },
  {
    "id": "FC-050",
    "questionId": "S1.10",
    "front": "What is beam search, and what trade-off does it accept?",
    "back": "Beam search keeps only the k best states at each level, dropping the rest. It uses bounded memory but is incomplete — it can miss optimal solutions when good states are temporarily ranked low. Wider beams approach exhaustive search; narrower beams are greedy.",
    "domain": "Search and Problem Solving",
    "difficulty": "Technical",
    "tags": [
      "search",
      "beam",
      "nlp"
    ]
  },
  {
    "id": "FC-051",
    "questionId": "S1.11",
    "front": "What is the difference between informed and uninformed search?",
    "back": "Uninformed search uses only the problem definition (initial state, actions, goal test). Informed search additionally uses a heuristic — domain knowledge about the distance to the goal. Heuristics turn intractable searches into tractable ones.",
    "domain": "Search and Problem Solving",
    "difficulty": "Technical",
    "tags": [
      "search",
      "heuristic",
      "vocabulary"
    ]
  },
  {
    "id": "FC-052",
    "questionId": "S1.12",
    "front": "How does the search framework apply to modern LLM-based agents?",
    "back": "Tree-of-thoughts, MCTS-style reasoning, self-consistency sampling, and beam search over reasoning chains are all variants of classical search over a state space defined by partial reasoning traces. The 1995 vocabulary applies almost unchanged; the heuristic is now a learned model.",
    "domain": "Search and Problem Solving",
    "difficulty": "Researcher",
    "tags": [
      "search",
      "modern",
      "reasoning"
    ]
  },
  {
    "id": "FC-053",
    "questionId": "S2.1",
    "front": "When does local search beat systematic search?",
    "back": "Local search wins when the state space is too large to enumerate, when you only need a good (not optimal) solution, and when memory is bounded. Hill climbing, simulated annealing, and genetic algorithms all trade systematic completeness for tractability.",
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "tags": [
      "search",
      "local",
      "optimisation"
    ]
  },
  {
    "id": "FC-054",
    "questionId": "S2.2",
    "front": "What is the difference between hill climbing and simulated annealing?",
    "back": "Hill climbing always moves to a better neighbour and gets stuck in local optima. Simulated annealing sometimes accepts worse neighbours, with the probability of acceptance decreasing over time. The annealing schedule lets it escape local optima while eventually converging.",
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "tags": [
      "optimisation",
      "simulated-annealing"
    ]
  },
  {
    "id": "FC-055",
    "questionId": "S2.3",
    "front": "What are genetic algorithms, and where do they actually work?",
    "back": "GAs maintain a population of solutions, select fitter ones, and combine them via crossover and mutation. They are useful when the fitness landscape is highly multi-modal, when you can encode solutions as strings, and when domain-specific operators help recombination. On many problems, simpler local search beats them.",
    "domain": "Search and Problem Solving",
    "difficulty": "Technical",
    "tags": [
      "optimisation",
      "genetic",
      "evolutionary"
    ]
  },
  {
    "id": "FC-056",
    "questionId": "S2.4",
    "front": "What is online search, and when is it needed?",
    "back": "Online search interleaves planning and action: the agent acts, observes the result, and updates its plan. It is necessary when the environment is unknown or partially observable, or when computing a full plan in advance is infeasible. Real robots are almost always online searchers.",
    "domain": "Search and Problem Solving",
    "difficulty": "Technical",
    "tags": [
      "search",
      "online",
      "agents"
    ]
  },
  {
    "id": "FC-057",
    "questionId": "S2.5",
    "front": "Why does the book distinguish problem-solving agents from planning agents?",
    "back": "Problem-solving agents treat actions as atomic and the state as a black box. Planning agents represent states and actions in factored or structured form, letting them exploit independence and reuse solutions across similar problems. Planning is search with more structure.",
    "domain": "Search and Problem Solving",
    "difficulty": "Technical",
    "tags": [
      "search",
      "planning",
      "architecture"
    ]
  },
  {
    "id": "FC-058",
    "questionId": "S3.1",
    "front": "What changes when search becomes adversarial?",
    "back": "In adversarial search, the agent assumes the opponent is also acting optimally to minimise the agent's utility. The optimal action is no longer \"best for me\" but \"best against the optimal response\". This produces minimax and its variants.",
    "domain": "Games and Adversarial Search",
    "difficulty": "Beginner",
    "tags": [
      "games",
      "adversarial",
      "minimax"
    ]
  },
  {
    "id": "FC-059",
    "questionId": "S3.2",
    "front": "What is minimax, and what does it assume?",
    "back": "Minimax assumes both players play optimally. It alternates max and min layers in the game tree: the agent picks the move that maximises its utility, assuming the opponent will pick the move that minimises it. Optimal under perfect information and perfect play.",
    "domain": "Games and Adversarial Search",
    "difficulty": "Builder",
    "tags": [
      "games",
      "minimax",
      "optimality"
    ]
  },
  {
    "id": "FC-060",
    "questionId": "S3.3",
    "front": "What is alpha-beta pruning, and why is it useful?",
    "back": "Alpha-beta prunes branches of the minimax tree that cannot affect the final decision. With good move ordering it can roughly square the effective search depth at the same compute cost — turning depth-5 chess into depth-10 chess. It returns the same answer as plain minimax.",
    "domain": "Games and Adversarial Search",
    "difficulty": "Builder",
    "tags": [
      "games",
      "alpha-beta",
      "pruning"
    ]
  },
  {
    "id": "FC-061",
    "questionId": "S3.4",
    "front": "What is the difference between minimax and expectimax?",
    "back": "Minimax assumes adversarial opponents. Expectimax replaces min layers with expectation over outcomes — used when the opponent (or chance) is non-deterministic. Backgammon and many card games need expectimax; chess and Go do not.",
    "domain": "Games and Adversarial Search",
    "difficulty": "Technical",
    "tags": [
      "games",
      "expectimax",
      "stochastic"
    ]
  },
  {
    "id": "FC-062",
    "questionId": "S3.5",
    "front": "Why did Monte Carlo Tree Search replace alpha-beta in Go-style games?",
    "back": "In Go, the branching factor is too large and good evaluation functions are too hard to write by hand. MCTS uses simulated rollouts to estimate state values, exploring promising branches more deeply. Combined with neural network priors (AlphaGo) it crushed traditional approaches.",
    "domain": "Games and Adversarial Search",
    "difficulty": "Technical",
    "tags": [
      "games",
      "mcts",
      "alphago"
    ]
  },
  {
    "id": "FC-063",
    "questionId": "S3.6",
    "front": "What is the role of the evaluation function in game-playing programs?",
    "back": "The evaluation function estimates the value of non-terminal states — what the game is worth without playing it to the end. It allows search to terminate at a depth limit. Quality of the evaluation function often matters more than search depth.",
    "domain": "Games and Adversarial Search",
    "difficulty": "Technical",
    "tags": [
      "games",
      "evaluation",
      "heuristic"
    ]
  },
  {
    "id": "FC-064",
    "questionId": "S3.7",
    "front": "What is horizon effect, and how do search programs handle it?",
    "back": "The horizon effect: a search at fixed depth may miss an imminent threat just beyond the horizon, or postpone an unavoidable loss past the horizon. Quiescence search extends search at noisy positions until the situation settles; this mitigates but does not eliminate the problem.",
    "domain": "Games and Adversarial Search",
    "difficulty": "Technical",
    "tags": [
      "games",
      "horizon",
      "quiescence"
    ]
  },
  {
    "id": "FC-065",
    "questionId": "S3.8",
    "front": "How does AlphaZero combine search, learning, and self-play?",
    "back": "AlphaZero uses MCTS guided by a neural network that predicts both move probabilities and state value. It trains the network by self-play, using MCTS to generate better data than the network alone could. The combination of learned priors plus search beats either alone.",
    "domain": "Games and Adversarial Search",
    "difficulty": "Researcher",
    "tags": [
      "games",
      "alphazero",
      "modern"
    ]
  },
  {
    "id": "FC-066",
    "questionId": "S4.1",
    "front": "What is a constraint satisfaction problem, and why is the framing useful?",
    "back": "A CSP defines variables, domains for each variable, and constraints that restrict which combinations of values are allowed. Solving is finding an assignment that satisfies all constraints. The framing exposes problem structure that lets specialised algorithms (constraint propagation, backtracking, local search) outperform generic search.",
    "domain": "Constraint Satisfaction",
    "difficulty": "Builder",
    "tags": [
      "csp",
      "framing",
      "structure"
    ]
  },
  {
    "id": "FC-067",
    "questionId": "S4.2",
    "front": "What is arc consistency, and what does AC-3 do?",
    "back": "A variable is arc-consistent with another if every value in its domain has a supporting value in the other's domain. AC-3 iteratively removes inconsistent values until the network is arc-consistent. It often solves a CSP outright, or reduces it enough that backtracking is fast.",
    "domain": "Constraint Satisfaction",
    "difficulty": "Builder",
    "tags": [
      "csp",
      "propagation",
      "ac3"
    ]
  },
  {
    "id": "FC-068",
    "questionId": "S4.3",
    "front": "How do constraint propagation and backtracking interact?",
    "back": "Backtracking assigns one variable at a time and recurses. After each assignment, constraint propagation removes now-impossible values from other variables' domains. If any domain becomes empty, the assignment is undone immediately. The combination prunes huge swaths of the search space.",
    "domain": "Constraint Satisfaction",
    "difficulty": "Technical",
    "tags": [
      "csp",
      "backtracking",
      "propagation"
    ]
  },
  {
    "id": "FC-069",
    "questionId": "S4.4",
    "front": "What is the minimum-remaining-values heuristic, and why does it work?",
    "back": "MRV picks the variable with the fewest remaining legal values as the next to assign. This \"fail-first\" heuristic accelerates pruning: if no assignment works for the most-constrained variable, the search backtracks quickly. Combined with degree heuristic and least-constraining-value, MRV is the standard.",
    "domain": "Constraint Satisfaction",
    "difficulty": "Technical",
    "tags": [
      "csp",
      "heuristic",
      "mrv"
    ]
  },
  {
    "id": "FC-070",
    "questionId": "S4.5",
    "front": "When is local search the right choice for a CSP?",
    "back": "When the problem is too large for backtracking but a good solution exists in many places. Min-conflicts local search assigns a value that violates the fewest constraints and iterates. For SAT and scheduling problems with millions of variables, local search routinely beats systematic search.",
    "domain": "Constraint Satisfaction",
    "difficulty": "Technical",
    "tags": [
      "csp",
      "local-search",
      "min-conflicts"
    ]
  },
  {
    "id": "FC-071",
    "questionId": "S4.6",
    "front": "Where do CSPs show up in real-world products?",
    "back": "Scheduling (manufacturing, surgery rooms, airline crews), configuration (product variants, hardware), timetabling (universities, conferences), routing with constraints, and many regulatory-compliance checks. Most are solved by specialised CSP or SAT solvers, not by general ML.",
    "domain": "Constraint Satisfaction",
    "difficulty": "Researcher",
    "tags": [
      "csp",
      "product",
      "applications"
    ]
  },
  {
    "id": "FC-072",
    "questionId": "L1.1",
    "front": "What does logic let an agent do that pure search cannot?",
    "back": "Logic lets the agent represent the world with sentences and derive new sentences from old ones. Where search treats states as opaque, logic exposes the structure inside states and supports inference over many states at once. This is what makes logical agents general beyond a single problem.",
    "domain": "Logic and Inference",
    "difficulty": "Beginner",
    "tags": [
      "logic",
      "inference",
      "agents"
    ]
  },
  {
    "id": "FC-073",
    "questionId": "L1.2",
    "front": "What is a knowledge-based agent, in the book's sense?",
    "back": "A knowledge-based agent stores a set of sentences (the KB) and acts by ASKing the KB what to do given its percepts, then TELLing the KB what it observed and did. The KB is a model of the world; inference is how the agent uses it.",
    "domain": "Logic and Inference",
    "difficulty": "Beginner",
    "tags": [
      "logic",
      "agents",
      "kb"
    ]
  },
  {
    "id": "FC-074",
    "questionId": "L1.3",
    "front": "What is propositional logic, and what is it not enough for?",
    "back": "Propositional logic uses boolean variables connected by AND, OR, NOT, IMPLIES. It is decidable and well-understood. It is not enough when the world has objects, relations, or quantification — \"all planes have wings\" cannot be cleanly expressed.",
    "domain": "Logic and Inference",
    "difficulty": "Builder",
    "tags": [
      "logic",
      "propositional",
      "limits"
    ]
  },
  {
    "id": "FC-075",
    "questionId": "L1.4",
    "front": "What is entailment, and how is it different from inference?",
    "back": "Entailment is a semantic relation between sentences: A entails B if B is true in every model where A is true. Inference is the procedural process of deriving sentences from a KB. Sound inference only produces sentences that are entailed; complete inference produces all entailed sentences.",
    "domain": "Logic and Inference",
    "difficulty": "Builder",
    "tags": [
      "logic",
      "entailment",
      "inference"
    ]
  },
  {
    "id": "FC-076",
    "questionId": "L1.5",
    "front": "What is the difference between soundness and completeness in an inference procedure?",
    "back": "Sound: every sentence the procedure derives is entailed (no false claims). Complete: every entailed sentence can be derived (no missing truths). Sound but incomplete is safe but limited; complete but unsound is dangerous. The ideal is sound and complete.",
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "tags": [
      "logic",
      "soundness",
      "completeness"
    ]
  },
  {
    "id": "FC-077",
    "questionId": "L1.6",
    "front": "What is resolution, and why does it dominate logical inference?",
    "back": "Resolution combines two clauses with complementary literals to derive a new clause. Together with conversion to conjunctive normal form, it is refutation-complete: it can prove any entailed sentence by reductio. Most automated theorem provers use it as the core engine.",
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "tags": [
      "logic",
      "resolution",
      "theorem-proving"
    ]
  },
  {
    "id": "FC-078",
    "questionId": "L1.7",
    "front": "What is forward chaining, and when is it appropriate?",
    "back": "Forward chaining starts from known facts and applies inference rules to derive new facts until the goal is reached. It is data-driven and efficient when many facts lead to a single conclusion. Expert systems and rule engines typically forward-chain.",
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "tags": [
      "logic",
      "forward-chaining"
    ]
  },
  {
    "id": "FC-079",
    "questionId": "L1.8",
    "front": "What is backward chaining, and when is it appropriate?",
    "back": "Backward chaining starts from the goal and works back, looking for facts or rules that imply it. It is goal-directed and efficient when many possible facts but only specific goals matter. Prolog's execution model is backward chaining.",
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "tags": [
      "logic",
      "backward-chaining",
      "prolog"
    ]
  },
  {
    "id": "FC-080",
    "questionId": "L1.9",
    "front": "What is the difference between propositional and first-order logic?",
    "back": "Propositional logic has only boolean variables. First-order logic adds objects, relations, functions, and quantifiers (forall, exists). FOL can say \"every plane has wings\" or \"some flight is delayed\" — propositional logic cannot without explicit enumeration.",
    "domain": "Logic and Inference",
    "difficulty": "Builder",
    "tags": [
      "logic",
      "first-order",
      "expressiveness"
    ]
  },
  {
    "id": "FC-081",
    "questionId": "L1.10",
    "front": "What are universal and existential quantifiers, and how are they used?",
    "back": "Forall (universal) says a property holds for every object in the domain. Exists (existential) says it holds for at least one. Together they let FOL express general truths and the existence of objects with specified properties — the basic vocabulary of mathematics.",
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "tags": [
      "logic",
      "quantifiers",
      "fol"
    ]
  },
  {
    "id": "FC-082",
    "questionId": "L1.11",
    "front": "What is unification, and why is it the engine of FOL inference?",
    "back": "Unification finds a substitution that makes two logical expressions identical. It is what lets FOL inference match patterns across general rules and specific facts — without it, FOL would have no procedure for applying rules to objects.",
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "tags": [
      "logic",
      "unification",
      "fol"
    ]
  },
  {
    "id": "FC-083",
    "questionId": "L1.12",
    "front": "Why is FOL inference often intractable, and how do we work around it?",
    "back": "In general, FOL is semidecidable: if a sentence is entailed, you can prove it; if not, the procedure may run forever. In practice, we use restricted fragments (Horn clauses, description logics, Datalog) that are decidable and tractable enough for production use.",
    "domain": "Logic and Inference",
    "difficulty": "Researcher",
    "tags": [
      "logic",
      "decidability",
      "tractability"
    ]
  },
  {
    "id": "FC-084",
    "questionId": "L1.13",
    "front": "What is a Horn clause, and why does it matter?",
    "back": "A Horn clause is a disjunction with at most one positive literal — equivalently, a rule with multiple premises and one conclusion. Inference over Horn clauses is decidable in polynomial time using forward or backward chaining; this is what makes Prolog and many rule engines work.",
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "tags": [
      "logic",
      "horn",
      "prolog",
      "tractable"
    ]
  },
  {
    "id": "FC-085",
    "questionId": "L1.14",
    "front": "What does the rise of LLMs say about logic-based AI?",
    "back": "LLMs do statistical reasoning that often produces the same outputs as logical inference, without explicit logic. The honest story is that logic is precise but brittle; LLMs are flexible but unreliable. Modern systems increasingly combine them — using logic-style verifiers on top of LLM proposals.",
    "domain": "Logic and Inference",
    "difficulty": "Researcher",
    "tags": [
      "logic",
      "llm",
      "modern"
    ]
  },
  {
    "id": "FC-086",
    "questionId": "K1.1",
    "front": "What is knowledge representation, and why does it deserve its own chapter?",
    "back": "KR is the design problem of choosing which facts, concepts, and relationships to encode and how to encode them. The same knowledge can be represented many ways; the choice affects what is easy to express, what is efficient to query, and what is easy to update. KR is where logic meets engineering.",
    "domain": "Knowledge Representation",
    "difficulty": "Builder",
    "tags": [
      "kr",
      "engineering",
      "representation"
    ]
  },
  {
    "id": "FC-087",
    "questionId": "K1.2",
    "front": "What is an ontology, and how does it differ from a database schema?",
    "back": "An ontology specifies concepts, properties, and relationships in a domain — usually with formal semantics. A database schema describes how data is stored; an ontology describes what is true. Ontologies support reasoning; schemas support storage.",
    "domain": "Knowledge Representation",
    "difficulty": "Builder",
    "tags": [
      "kr",
      "ontology",
      "vocabulary"
    ]
  },
  {
    "id": "FC-088",
    "questionId": "K1.3",
    "front": "What is the frame problem, and why has it haunted AI?",
    "back": "The frame problem: when an action happens, how do you express what does not change? Naïvely, every action would require listing all the things still true after it. Solutions involve frame axioms, successor-state axioms, or non-monotonic logic — none fully satisfying.",
    "domain": "Knowledge Representation",
    "difficulty": "Technical",
    "tags": [
      "kr",
      "frame-problem",
      "philosophy"
    ]
  },
  {
    "id": "FC-089",
    "questionId": "K1.4",
    "front": "What is the qualification problem, and how is it different from the frame problem?",
    "back": "The qualification problem: how do you list all the preconditions an action needs to succeed? You almost never can — there are always edge cases. The frame problem asks what stays the same; the qualification problem asks what could go wrong. Both push toward defeasible reasoning.",
    "domain": "Knowledge Representation",
    "difficulty": "Technical",
    "tags": [
      "kr",
      "qualification",
      "defeasible"
    ]
  },
  {
    "id": "FC-090",
    "questionId": "K1.5",
    "front": "What are semantic networks, and how do they relate to modern knowledge graphs?",
    "back": "Semantic networks represent concepts as nodes and relationships as labeled edges. Modern knowledge graphs (Wikidata, Google Knowledge Graph) are direct descendants with explicit semantics and large scale. The conceptual vocabulary is 1970s; the deployment is 2010s onward.",
    "domain": "Knowledge Representation",
    "difficulty": "Technical",
    "tags": [
      "kr",
      "semantic-networks",
      "knowledge-graph"
    ]
  },
  {
    "id": "FC-091",
    "questionId": "K1.6",
    "front": "What is description logic, and where does it shine?",
    "back": "Description logics are decidable fragments of FOL designed for representing concepts and reasoning about subsumption (is-a relationships). They power OWL, biomedical ontologies, and many enterprise data catalogues. They trade expressiveness for guaranteed reasoning.",
    "domain": "Knowledge Representation",
    "difficulty": "Technical",
    "tags": [
      "kr",
      "description-logic",
      "owl"
    ]
  },
  {
    "id": "FC-092",
    "questionId": "K1.7",
    "front": "What is default reasoning, and why does it matter for KR?",
    "back": "Default reasoning lets you conclude \"Tweety can fly\" from \"Tweety is a bird\" while accepting that exceptions exist (penguins, ostriches). Formalisms include circumscription, default logic, and non-monotonic logic. Modern ML implicitly does this through learned priors.",
    "domain": "Knowledge Representation",
    "difficulty": "Technical",
    "tags": [
      "kr",
      "default-reasoning",
      "non-monotonic"
    ]
  },
  {
    "id": "FC-093",
    "questionId": "K1.8",
    "front": "Why did handcrafted KR projects (CYC, expert systems) fail at scale?",
    "back": "Encoding common-sense knowledge by hand is enormously expensive and never seems to reach a critical mass. The world has too many concepts and exceptions. Modern AI learns the equivalent knowledge from data — implicitly, less reliably, but at scale that hand-coding cannot match.",
    "domain": "Knowledge Representation",
    "difficulty": "Researcher",
    "tags": [
      "kr",
      "scaling",
      "cyc",
      "history"
    ]
  },
  {
    "id": "FC-094",
    "questionId": "K1.9",
    "front": "How do LLMs represent knowledge, and how is it different from explicit KR?",
    "back": "LLMs store knowledge implicitly in their weights as patterns of token associations. The representation is dense, distributed, and not easily inspectable. Compared to explicit KR: more flexible, less precise, harder to update reliably, easier to acquire at scale.",
    "domain": "Knowledge Representation",
    "difficulty": "Researcher",
    "tags": [
      "kr",
      "llm",
      "modern"
    ]
  },
  {
    "id": "FC-095",
    "questionId": "K1.10",
    "front": "Will explicit KR come back in some form for AI safety and auditing?",
    "back": "Plausibly. For high-stakes deployments (regulation, audit, medicine, finance), explicit representations of what the system claims to know — extracted, verified, queryable — are increasingly attractive. Hybrid neuro-symbolic systems are the most likely path.",
    "domain": "Knowledge Representation",
    "difficulty": "Frontier",
    "tags": [
      "kr",
      "frontier",
      "safety",
      "hybrid"
    ]
  },
  {
    "id": "FC-096",
    "questionId": "P1.1",
    "front": "What is the planning problem, and how is it different from search?",
    "back": "Planning is search where states and actions have structured (factored) representations — typically actions with preconditions and effects on a set of state variables. The structure lets specialised algorithms exploit independence between actions and reuse subplans, beating generic search.",
    "domain": "Planning",
    "difficulty": "Beginner",
    "tags": [
      "planning",
      "framing",
      "structure"
    ]
  },
  {
    "id": "FC-097",
    "questionId": "P1.2",
    "front": "What is PDDL, and what does it standardise?",
    "back": "PDDL (Planning Domain Definition Language) standardises how to describe planning problems: domain (types, predicates, actions with preconditions and effects) and problem (initial state, goal). It lets planners be benchmarked and shared across research groups.",
    "domain": "Planning",
    "difficulty": "Builder",
    "tags": [
      "planning",
      "pddl"
    ]
  },
  {
    "id": "FC-098",
    "questionId": "P1.3",
    "front": "What is the difference between forward and backward planning?",
    "back": "Forward (progression) planning starts from the initial state and applies actions until the goal is reached. Backward (regression) planning starts from the goal and finds actions that could produce it. Forward suits highly-constrained initial states; backward suits highly-specific goals.",
    "domain": "Planning",
    "difficulty": "Builder",
    "tags": [
      "planning",
      "forward",
      "backward"
    ]
  },
  {
    "id": "FC-099",
    "questionId": "P1.4",
    "front": "What is partial-order planning, and what does it buy you?",
    "back": "POP represents a plan as a set of actions with ordering constraints — only ordering actions when their effects require it. This reduces backtracking and supports parallel execution. Modern planners often combine POP with classical search heuristics.",
    "domain": "Planning",
    "difficulty": "Technical",
    "tags": [
      "planning",
      "partial-order"
    ]
  },
  {
    "id": "FC-100",
    "questionId": "P1.5",
    "front": "What is the planning graph, and what is it used for?",
    "back": "A planning graph layers alternating states and actions, with mutex (mutually exclusive) constraints. It does not directly produce a plan but bounds the planning problem and provides strong heuristics. The GraphPlan algorithm and its descendants exploit it heavily.",
    "domain": "Planning",
    "difficulty": "Technical",
    "tags": [
      "planning",
      "planning-graph",
      "graphplan"
    ]
  },
  {
    "id": "FC-101",
    "questionId": "P1.6",
    "front": "When does planning need to handle the real world's noise?",
    "back": "When actions can fail, when state is partially observable, or when other agents act. The book extends to conditional planning, contingent planning, and online planning. Modern reinforcement learning is the natural successor to this chapter.",
    "domain": "Planning",
    "difficulty": "Technical",
    "tags": [
      "planning",
      "uncertainty",
      "real-world"
    ]
  },
  {
    "id": "FC-102",
    "questionId": "P1.7",
    "front": "What is hierarchical task network (HTN) planning?",
    "back": "HTN planning decomposes high-level tasks into lower-level subtasks recursively until primitive actions are reached. Decomposition rules are designed by humans, which limits HTN's generality but makes it efficient when the domain has natural hierarchy — manufacturing, military operations, kitchen recipes.",
    "domain": "Planning",
    "difficulty": "Technical",
    "tags": [
      "planning",
      "htn",
      "hierarchical"
    ]
  },
  {
    "id": "FC-103",
    "questionId": "P1.8",
    "front": "Why is planning often replaced by simple workflows in industry?",
    "back": "For most production workflows, the action sequence is stable and known. A workflow plus error handling outperforms a planner because it is debuggable, auditable, and predictable. Planners win when action sequences vary wildly between inputs — relatively rare in practice.",
    "domain": "Planning",
    "difficulty": "Researcher",
    "tags": [
      "planning",
      "product",
      "workflow"
    ]
  },
  {
    "id": "FC-104",
    "questionId": "P1.9",
    "front": "How does modern LLM-based agent planning relate to classical planning?",
    "back": "LLM agents do something like classical planning, but the \"plan\" is generated in natural language by the model rather than from explicit action definitions. They can be more flexible but less reliable — they fabricate preconditions and miss effects. Hybrid systems use LLMs for proposal and classical planners for verification.",
    "domain": "Planning",
    "difficulty": "Researcher",
    "tags": [
      "planning",
      "llm",
      "modern"
    ]
  },
  {
    "id": "FC-105",
    "questionId": "P1.10",
    "front": "What would it take to make long-horizon AI planning genuinely reliable?",
    "back": "Better state tracking (avoiding context-window loss), tool-grounded verification of action results, explicit goal decomposition, learned heuristics from past successful plans, and aggressive use of search with verifier signals. Each piece exists; integrating them at production reliability is the open problem.",
    "domain": "Planning",
    "difficulty": "Frontier",
    "tags": [
      "planning",
      "frontier",
      "agents"
    ]
  },
  {
    "id": "FC-106",
    "questionId": "U1.1",
    "front": "Why does the rational agent need probability theory?",
    "back": "Logic can say \"I do not know X\". Probability can say \"X is true with probability 0.7, and here is how my belief updates with new evidence\". An agent that must act under uncertainty needs probability to weigh outcomes, choose among uncertain options, and update beliefs from observations.",
    "domain": "Uncertainty and Probability",
    "difficulty": "Beginner",
    "tags": [
      "probability",
      "uncertainty",
      "rationality"
    ]
  },
  {
    "id": "FC-107",
    "questionId": "U1.2",
    "front": "What is Bayes' rule, and why is it the core of probabilistic reasoning?",
    "back": "P(H|E) = P(E|H) P(H) / P(E). It tells you how to update belief in hypothesis H given evidence E. The strength of the update depends on how much more likely the evidence is under H than under not-H — the likelihood ratio.",
    "domain": "Uncertainty and Probability",
    "difficulty": "Builder",
    "tags": [
      "probability",
      "bayes",
      "update"
    ]
  },
  {
    "id": "FC-108",
    "questionId": "U1.3",
    "front": "What is the difference between joint and conditional probability?",
    "back": "Joint probability P(A, B) is the probability both A and B happen. Conditional probability P(A | B) is the probability of A given that B happened. They are related by P(A | B) = P(A, B) / P(B). Confusing them produces wrong reasoning across many AI problems.",
    "domain": "Uncertainty and Probability",
    "difficulty": "Builder",
    "tags": [
      "probability",
      "joint",
      "conditional"
    ]
  },
  {
    "id": "FC-109",
    "questionId": "U1.4",
    "front": "What does conditional independence mean, and why is it so useful?",
    "back": "A and B are conditionally independent given C if P(A, B | C) = P(A | C) P(B | C). It is what lets you decompose joint distributions into smaller pieces, which is the foundation of Bayesian networks and most probabilistic graphical models.",
    "domain": "Uncertainty and Probability",
    "difficulty": "Builder",
    "tags": [
      "probability",
      "independence",
      "bayes-nets"
    ]
  },
  {
    "id": "FC-110",
    "questionId": "U1.5",
    "front": "Why does the full joint distribution scale exponentially, and how do we work around it?",
    "back": "For n boolean variables, the full joint has 2^n entries. This is intractable for n > 20 or so. Bayesian networks exploit conditional independence to encode the joint in a number of parameters proportional to the number of variables and their parents, not 2^n.",
    "domain": "Uncertainty and Probability",
    "difficulty": "Technical",
    "tags": [
      "probability",
      "scaling",
      "bayes-nets"
    ]
  },
  {
    "id": "FC-111",
    "questionId": "B1.1",
    "front": "What is a Bayesian network, and what does it buy you?",
    "back": "A Bayesian network is a directed acyclic graph where each node is a random variable and each edge represents direct probabilistic dependence. It encodes a joint distribution in a compact form using conditional independence — exponentially fewer parameters than the full joint.",
    "domain": "Bayesian Networks",
    "difficulty": "Beginner",
    "tags": [
      "bayes",
      "bayesian-network",
      "graphical-model"
    ]
  },
  {
    "id": "FC-112",
    "questionId": "B1.2",
    "front": "How does a Bayes net encode conditional independence?",
    "back": "A node is conditionally independent of its non-descendants given its parents. This local Markov property lets the joint distribution factorise as the product of P(node | parents) over all nodes. Conditional independence is built into the graph structure.",
    "domain": "Bayesian Networks",
    "difficulty": "Builder",
    "tags": [
      "bayes",
      "independence",
      "structure"
    ]
  },
  {
    "id": "FC-113",
    "questionId": "B1.3",
    "front": "What is d-separation, and how does it determine conditional independence in a Bayes net?",
    "back": "Two nodes are d-separated given a set of nodes if every undirected path between them is \"blocked\" by the set under specific rules about chains, forks, and colliders. D-separation lets you answer \"is X independent of Y given Z?\" by inspecting the graph, without computing probabilities.",
    "domain": "Bayesian Networks",
    "difficulty": "Technical",
    "tags": [
      "bayes",
      "d-separation",
      "graph"
    ]
  },
  {
    "id": "FC-114",
    "questionId": "B1.4",
    "front": "What is exact inference in a Bayes net, and why is it intractable in general?",
    "back": "Exact inference (variable elimination, junction tree) is polynomial in the size of the treewidth of the graph but NP-hard in general. For densely-connected networks, exact inference is infeasible — which is why approximate methods dominate practice.",
    "domain": "Bayesian Networks",
    "difficulty": "Technical",
    "tags": [
      "bayes",
      "inference",
      "tractability"
    ]
  },
  {
    "id": "FC-115",
    "questionId": "B1.5",
    "front": "What is approximate inference, and what are the main techniques?",
    "back": "Approximate inference accepts an approximate answer for tractability. Main techniques: rejection sampling (slow), likelihood weighting (better), Markov chain Monte Carlo (MCMC, robust), and variational inference (fast but biased). Modern deep generative models use variational methods heavily.",
    "domain": "Bayesian Networks",
    "difficulty": "Technical",
    "tags": [
      "bayes",
      "inference",
      "sampling",
      "vi"
    ]
  },
  {
    "id": "FC-116",
    "questionId": "B1.6",
    "front": "What is MCMC, and where is it used?",
    "back": "Markov chain Monte Carlo constructs a chain whose stationary distribution is the target distribution. By running the chain long enough, samples approximate the target. Gibbs sampling and Metropolis-Hastings are the canonical algorithms; both still power Bayesian statistics, computational chemistry, and parts of probabilistic ML.",
    "domain": "Bayesian Networks",
    "difficulty": "Technical",
    "tags": [
      "bayes",
      "mcmc",
      "gibbs"
    ]
  },
  {
    "id": "FC-117",
    "questionId": "B1.7",
    "front": "Why are Bayesian networks less visible in modern deep-learning workflows?",
    "back": "Bayes nets shine when the structure is known and the variables are discrete or low-dimensional. Modern deep learning often deals with high-dimensional unstructured data where the structure is learned end-to-end. Bayes nets still dominate domains with strong prior structure: medicine, fault diagnosis, sensor fusion, biology.",
    "domain": "Bayesian Networks",
    "difficulty": "Researcher",
    "tags": [
      "bayes",
      "modern",
      "limits"
    ]
  },
  {
    "id": "FC-118",
    "questionId": "B1.8",
    "front": "When should you choose a Bayes net over a neural network?",
    "back": "Bayes nets when: structure is known, data is limited, interpretability is critical, you need calibrated uncertainty, or you need to update beliefs incrementally with new evidence. Neural networks when: data is large, structure is unknown, raw inputs are unstructured (images, text), and end-to-end performance matters more than interpretability.",
    "domain": "Bayesian Networks",
    "difficulty": "Researcher",
    "tags": [
      "bayes",
      "nn",
      "product"
    ]
  },
  {
    "id": "FC-119",
    "questionId": "T1.1",
    "front": "How do temporal models extend Bayes nets to time?",
    "back": "Temporal models add a time index and represent the same set of variables repeating across time slices, with edges between slices encoding state transitions. The result: dynamic Bayesian networks, hidden Markov models, and Kalman filters — all special cases of a unified framework.",
    "domain": "Temporal Models",
    "difficulty": "Builder",
    "tags": [
      "temporal",
      "dbn",
      "hmm"
    ]
  },
  {
    "id": "FC-120",
    "questionId": "T1.2",
    "front": "What is a hidden Markov model, and where does it apply?",
    "back": "An HMM has a hidden state that evolves Markovically and emits observable outputs at each time step. Inference computes belief over hidden states given observations. HMMs power speech recognition, gene-finding, gesture recognition, and many sensor-stream systems.",
    "domain": "Temporal Models",
    "difficulty": "Builder",
    "tags": [
      "temporal",
      "hmm",
      "speech"
    ]
  },
  {
    "id": "FC-121",
    "questionId": "T1.3",
    "front": "What are filtering, prediction, smoothing, and most-likely explanation in temporal models?",
    "back": "Filtering: belief over the current state given all observations so far. Prediction: belief over future states. Smoothing: belief over past states given all evidence. Most-likely explanation (Viterbi): the most probable sequence of hidden states. Each has its own efficient algorithm.",
    "domain": "Temporal Models",
    "difficulty": "Technical",
    "tags": [
      "temporal",
      "filtering",
      "smoothing",
      "viterbi"
    ]
  },
  {
    "id": "FC-122",
    "questionId": "T1.4",
    "front": "What is the Kalman filter, and what assumptions does it require?",
    "back": "A Kalman filter does exact filtering when the state space is continuous, the model is linear-Gaussian, and observations are Gaussian-noisy versions of the state. It powers navigation, tracking, control, and sensor fusion. Extensions (extended, unscented, particle) handle non-linear cases approximately.",
    "domain": "Temporal Models",
    "difficulty": "Technical",
    "tags": [
      "temporal",
      "kalman",
      "filtering"
    ]
  },
  {
    "id": "FC-123",
    "questionId": "T1.5",
    "front": "What is a particle filter, and when is it needed?",
    "back": "Particle filters represent the belief as a set of weighted samples. They work for non-linear, non-Gaussian temporal models and are widely used in robotics localisation (SLAM), object tracking, and economic forecasting. The cost: many particles are needed for accurate estimation.",
    "domain": "Temporal Models",
    "difficulty": "Technical",
    "tags": [
      "temporal",
      "particle-filter",
      "robotics"
    ]
  },
  {
    "id": "FC-124",
    "questionId": "T1.6",
    "front": "How does belief-state tracking relate to modern LLM-based agents?",
    "back": "Russell &amp; Norvig insist on tracking the agent's belief over hidden state. LLM-based agents fake this by stuffing relevant history into the context window — but the belief is implicit, ungrounded, and lossy. Better belief-state representation for LLM agents is an active research frontier.",
    "domain": "Temporal Models",
    "difficulty": "Researcher",
    "tags": [
      "temporal",
      "llm",
      "research"
    ]
  },
  {
    "id": "FC-125",
    "questionId": "V1.1",
    "front": "Why is expected utility central to rational decision-making?",
    "back": "A rational agent should choose the action with the highest expected utility, where utility is a function over outcomes and expectation is taken over the probability distribution of outcomes given the action. Decision theory shows this rule follows from minimal consistency requirements on preferences.",
    "domain": "Utility and Decision Theory",
    "difficulty": "Beginner",
    "tags": [
      "util",
      "expected-utility",
      "rationality"
    ]
  },
  {
    "id": "FC-126",
    "questionId": "V1.2",
    "front": "What are the von Neumann–Morgenstern axioms, and what do they prove?",
    "back": "Four axioms over preferences: completeness, transitivity, continuity, and independence. The vNM theorem proves that if an agent's preferences satisfy these, they can be represented by a utility function such that the agent prefers A to B iff E[U(A)] > E[U(B)]. Rationality entails expected utility maximisation.",
    "domain": "Utility and Decision Theory",
    "difficulty": "Builder",
    "tags": [
      "util",
      "vnm",
      "axioms"
    ]
  },
  {
    "id": "FC-127",
    "questionId": "V1.3",
    "front": "What is the difference between utility and value, in this framework?",
    "back": "Value is a property of states or outcomes (what they are worth). Utility is a numeric representation of preferences over outcomes. Utility is determined up to positive affine transformation; absolute utility numbers do not carry meaning, only ratios of differences do.",
    "domain": "Utility and Decision Theory",
    "difficulty": "Technical",
    "tags": [
      "util",
      "value",
      "vocabulary"
    ]
  },
  {
    "id": "FC-128",
    "questionId": "V1.4",
    "front": "What is risk aversion, and how does it relate to utility shape?",
    "back": "A risk-averse agent prefers a sure outcome to a gamble with the same expected value. This is captured by a concave utility function — losses hurt more than equivalent gains feel good. Risk-seeking agents have convex utility; risk-neutral agents have linear utility.",
    "domain": "Utility and Decision Theory",
    "difficulty": "Technical",
    "tags": [
      "util",
      "risk",
      "curvature"
    ]
  },
  {
    "id": "FC-129",
    "questionId": "V1.5",
    "front": "What is the value of information, and why does it matter?",
    "back": "The value of information is the expected improvement in the agent's decision quality from observing some variable before acting. A rational agent gathers information only when its expected value exceeds its cost. This is the formal answer to \"is this experiment worth running?\".",
    "domain": "Utility and Decision Theory",
    "difficulty": "Technical",
    "tags": [
      "util",
      "voi",
      "decision"
    ]
  },
  {
    "id": "FC-130",
    "questionId": "V1.6",
    "front": "What is a decision network, and how is it different from a Bayes net?",
    "back": "A decision network (influence diagram) is a Bayes net augmented with decision nodes (actions) and utility nodes (rewards). It lets the agent compute the action that maximises expected utility directly from the graph. Useful for one-shot decisions; MDPs extend it to sequential decisions.",
    "domain": "Utility and Decision Theory",
    "difficulty": "Technical",
    "tags": [
      "util",
      "decision-network",
      "influence-diagram"
    ]
  },
  {
    "id": "FC-131",
    "questionId": "V1.7",
    "front": "Why is utility design itself a core part of AI engineering?",
    "back": "The agent's behavior is only as good as its utility function. Mis-specified utilities produce capable but undesired behavior — Goodhart's law. AI safety researchers argue that utility design is one of the hardest open problems in alignment.",
    "domain": "Utility and Decision Theory",
    "difficulty": "Researcher",
    "tags": [
      "util",
      "alignment",
      "goodhart"
    ]
  },
  {
    "id": "FC-132",
    "questionId": "V1.8",
    "front": "If the agent's utility function is wrong, can a more rational agent be more dangerous?",
    "back": "Yes. A more rational agent more reliably maximises whatever utility it has, including mis-specified utility. Making capable systems safer is partly a utility-design problem and partly a corrigibility problem — making sure the agent will accept correction when its utility is wrong.",
    "domain": "Utility and Decision Theory",
    "difficulty": "Frontier",
    "tags": [
      "util",
      "safety",
      "alignment"
    ]
  },
  {
    "id": "FC-133",
    "questionId": "D1.1",
    "front": "What is a Markov Decision Process, and why is it the canonical framework for sequential decisions under uncertainty?",
    "back": "An MDP has states, actions, transition probabilities (P(s' | s, a)), and rewards (R(s, a, s')). The Markov property means transitions depend only on the current state. MDPs formalise \"act now to maximise expected long-term reward\" — the core of RL and many control problems.",
    "domain": "MDPs and POMDPs",
    "difficulty": "Builder",
    "tags": [
      "mdp",
      "framework",
      "rl"
    ]
  },
  {
    "id": "FC-134",
    "questionId": "D1.2",
    "front": "What is a policy, and what makes one optimal?",
    "back": "A policy is a function from states to actions (or distributions over actions). The optimal policy maximises the expected sum of future discounted rewards from every state. Bellman's equations characterise it; value iteration and policy iteration compute it.",
    "domain": "MDPs and POMDPs",
    "difficulty": "Builder",
    "tags": [
      "mdp",
      "policy",
      "bellman"
    ]
  },
  {
    "id": "FC-135",
    "questionId": "D1.3",
    "front": "What is the discount factor, and why is it used?",
    "back": "The discount factor gamma in [0, 1) weights future rewards: a reward at time t is worth gamma^t of the same reward now. It ensures total reward is finite, models impatience or uncertainty, and biases the agent toward near-term outcomes. Choice of gamma is a design decision with real impact.",
    "domain": "MDPs and POMDPs",
    "difficulty": "Builder",
    "tags": [
      "mdp",
      "discount",
      "bellman"
    ]
  },
  {
    "id": "FC-136",
    "questionId": "D1.4",
    "front": "What is the Bellman equation, and why is it the core of MDP solutions?",
    "back": "V(s) = max_a [R(s, a) + gamma * sum_s' P(s' | s, a) V(s')]. The value of a state is the best action's immediate reward plus the expected discounted value of the next state. Value iteration and policy iteration both work by iterating on this equation.",
    "domain": "MDPs and POMDPs",
    "difficulty": "Technical",
    "tags": [
      "mdp",
      "bellman",
      "value-iteration"
    ]
  },
  {
    "id": "FC-137",
    "questionId": "D1.5",
    "front": "What is the difference between value iteration and policy iteration?",
    "back": "Value iteration updates V(s) using the Bellman equation until V converges; policy is then read off. Policy iteration alternates: evaluate the current policy (solve V for that policy), then improve the policy greedily. Policy iteration usually converges in fewer iterations; value iteration is simpler.",
    "domain": "MDPs and POMDPs",
    "difficulty": "Technical",
    "tags": [
      "mdp",
      "value-iteration",
      "policy-iteration"
    ]
  },
  {
    "id": "FC-138",
    "questionId": "D1.6",
    "front": "Why are POMDPs closer to real-world agency than MDPs?",
    "back": "A POMDP adds observation: the agent does not see the state directly but receives an observation that gives partial information. The agent must maintain a belief — a probability distribution over states — and act based on that. Real robots, medical decisions, dialogue agents, and game-playing all live in POMDP territory.",
    "domain": "MDPs and POMDPs",
    "difficulty": "Technical",
    "tags": [
      "pomdp",
      "partial-observability",
      "realism"
    ]
  },
  {
    "id": "FC-139",
    "questionId": "D1.7",
    "front": "Why is solving POMDPs hard?",
    "back": "The belief state is a continuous distribution over discrete states, so even small POMDPs have huge belief spaces. Exact algorithms (policy trees, alpha-vectors) handle small problems; approximations (POMCP, particle-filter POMDPs, deep RL with recurrent networks) handle larger ones imperfectly.",
    "domain": "MDPs and POMDPs",
    "difficulty": "Researcher",
    "tags": [
      "pomdp",
      "complexity",
      "approximation"
    ]
  },
  {
    "id": "FC-140",
    "questionId": "D1.8",
    "front": "How is \"policy\" used in modern RL versus classical MDP literature?",
    "back": "Same concept, different baggage. Classical MDP \"policy\" is a function from states to actions; you compute it analytically. Modern RL \"policy\" is usually a neural network mapping states (or observations) to actions; you train it by sampling. The math is the same; the engineering is different.",
    "domain": "MDPs and POMDPs",
    "difficulty": "Researcher",
    "tags": [
      "mdp",
      "rl",
      "modern"
    ]
  },
  {
    "id": "FC-141",
    "questionId": "D1.9",
    "front": "Are modern AI agents closer to MDPs or POMDPs in practice?",
    "back": "In practice they are POMDPs without proper belief-state tracking. They have an enormous, unobservable true state (user intent, context, system status) and a small percept (the context window). Treating them as MDPs is a major simplification; the practical limits of current agents trace back to this mismatch.",
    "domain": "MDPs and POMDPs",
    "difficulty": "Frontier",
    "tags": [
      "pomdp",
      "modern",
      "research"
    ]
  },
  {
    "id": "FC-142",
    "questionId": "C1.1",
    "front": "What is multi-attribute utility theory, and when is it used?",
    "back": "When utility depends on multiple attributes (cost, time, risk, quality), MAUT defines a multi-attribute utility function and reduces it via independence assumptions. Useful in product design, regulatory decisions, and complex business choices where one-dimensional utility is unrealistic.",
    "domain": "Utility and Decision Theory",
    "difficulty": "Technical",
    "tags": [
      "decision",
      "maut",
      "multi-attribute"
    ]
  },
  {
    "id": "FC-143",
    "questionId": "C1.2",
    "front": "What is the certainty equivalent, and what does it tell you?",
    "back": "The certainty equivalent of a gamble is the certain payoff that the agent would accept in exchange for the gamble. The difference between expected value and certainty equivalent is the risk premium — what the agent pays for certainty. Insurance prices are built on this.",
    "domain": "Utility and Decision Theory",
    "difficulty": "Technical",
    "tags": [
      "decision",
      "risk",
      "certainty-equivalent"
    ]
  },
  {
    "id": "FC-144",
    "questionId": "C1.3",
    "front": "How does decision theory apply to AI product design?",
    "back": "Designing the product means designing its utility function (what counts as success), its action set (what it can do), its evidence set (what it observes), and its decision rule. Most \"AI product\" debates collapse into one of these. Treat product design as decision theory and many ambiguous calls become clearer.",
    "domain": "Utility and Decision Theory",
    "difficulty": "Researcher",
    "tags": [
      "decision",
      "product",
      "framework"
    ]
  },
  {
    "id": "FC-145",
    "questionId": "C1.4",
    "front": "When should an AI system gather more information before acting?",
    "back": "When the expected improvement in decision quality from observing the variable exceeds the cost of observing it. Practical applications: clinical decision support that asks one more test, fraud detection that asks one more verification, AI agents that ask one more clarifying question. The math: argmax over information-gathering actions of E[Utility improvement] minus cost.",
    "domain": "Utility and Decision Theory",
    "difficulty": "Researcher",
    "tags": [
      "decision",
      "voi",
      "product"
    ]
  },
  {
    "id": "FC-146",
    "questionId": "C1.5",
    "front": "Can AI agents have wrong preferences without knowing it?",
    "back": "Yes — the agent's preferences are encoded by whatever utility function it optimises. If that function is wrong, the agent will confidently optimise the wrong thing. Detecting this requires comparing agent behavior to externally-defined \"good\" outcomes, which the agent itself cannot do.",
    "domain": "Utility and Decision Theory",
    "difficulty": "Frontier",
    "tags": [
      "decision",
      "alignment",
      "frontier"
    ]
  },
  {
    "id": "FC-147",
    "questionId": "X1.1",
    "front": "What is the learning problem, and how does it relate to search?",
    "back": "Learning is searching the space of possible hypotheses for one that fits the observed examples and generalises. The classical search frame (state space, neighbours, evaluation function) maps cleanly: hypotheses are states, training error is the evaluation, regularisation shapes the neighbourhood.",
    "domain": "Machine Learning",
    "difficulty": "Beginner",
    "tags": [
      "ml",
      "framing",
      "search"
    ]
  },
  {
    "id": "FC-148",
    "questionId": "X1.2",
    "front": "What is the difference between supervised, unsupervised, and reinforcement learning?",
    "back": "Supervised: learn a function from labeled examples. Unsupervised: find structure in unlabeled data. Reinforcement: learn behavior from sparse rewards over actions. Each requires different data, evaluation, and algorithms. Modern systems often combine all three.",
    "domain": "Machine Learning",
    "difficulty": "Beginner",
    "tags": [
      "ml",
      "paradigms",
      "vocabulary"
    ]
  },
  {
    "id": "FC-149",
    "questionId": "X1.3",
    "front": "Why does generalisation matter more than memorisation?",
    "back": "A system that memorises training data perfectly is useless on new data. Generalisation is the ability to perform well on unseen examples drawn from the same distribution. Designing for generalisation — regularisation, cross-validation, simpler hypotheses — is what separates ML from database lookup.",
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "tags": [
      "ml",
      "generalisation",
      "overfitting"
    ]
  },
  {
    "id": "FC-150",
    "questionId": "X1.4",
    "front": "What is overfitting, and how do you detect it?",
    "back": "A model overfits when it captures noise or accidents in training data and performs worse on held-out data. Detect with train/validation/test splits and learning curves — train error keeps dropping while validation error rises. Modern large pretrained models change the failure modes but not the principle.",
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "tags": [
      "ml",
      "overfitting",
      "evaluation"
    ]
  },
  {
    "id": "FC-151",
    "questionId": "X1.5",
    "front": "What is the bias-variance trade-off, and why is it useful?",
    "back": "Bias is error from a model that is too simple to fit the truth; variance is error from a model that is too sensitive to training data. Total error = bias squared + variance + irreducible noise. Most ML design decisions are bias-variance trade-offs.",
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "tags": [
      "ml",
      "bias-variance",
      "theory"
    ]
  },
  {
    "id": "FC-152",
    "questionId": "X1.6",
    "front": "What is a decision tree, and why is it still useful in 2026?",
    "back": "Decision trees recursively partition input space into regions, each labeled by a class or prediction. They handle mixed data types, are easy to interpret, and require little preprocessing. Boosted ensembles (XGBoost, LightGBM) of decision trees still beat neural networks on tabular data.",
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "tags": [
      "ml",
      "decision-tree",
      "xgboost"
    ]
  },
  {
    "id": "FC-153",
    "questionId": "X1.7",
    "front": "What is regularisation, and why is it necessary?",
    "back": "Regularisation adds a penalty to the loss for hypothesis complexity (L1, L2, dropout, early stopping). It biases the model toward simpler solutions that are less likely to overfit. Without it, complex models like deep networks would memorise training data.",
    "domain": "Machine Learning",
    "difficulty": "Technical",
    "tags": [
      "ml",
      "regularisation",
      "generalisation"
    ]
  },
  {
    "id": "FC-154",
    "questionId": "X1.8",
    "front": "What is cross-validation, and when does it fail?",
    "back": "Cross-validation splits data into k folds, trains on k-1, evaluates on 1, and rotates. It gives an unbiased estimate of generalisation error when data is iid. It fails when data has temporal structure, when there is leakage between folds, or when the held-out distribution differs from production.",
    "domain": "Machine Learning",
    "difficulty": "Technical",
    "tags": [
      "ml",
      "cross-validation",
      "evaluation"
    ]
  },
  {
    "id": "FC-155",
    "questionId": "X1.9",
    "front": "What is a support vector machine, and why was it the workhorse before deep learning?",
    "back": "SVMs find a maximum-margin separating hyperplane in (kernel-transformed) feature space. They have good theoretical guarantees, work well on small data, and handle high-dimensional sparse features. Pre-deep-learning, they dominated text classification, image classification, and many bio-informatics applications.",
    "domain": "Machine Learning",
    "difficulty": "Technical",
    "tags": [
      "ml",
      "svm",
      "history"
    ]
  },
  {
    "id": "FC-156",
    "questionId": "X1.10",
    "front": "What is ensemble learning, and why does it work?",
    "back": "Ensembles combine multiple models to produce a stronger prediction. Bagging reduces variance (random forests). Boosting reduces bias by sequentially fitting residuals (XGBoost, gradient boosting). Stacking learns how to combine models. All three give predictable wins over single models, especially on structured data.",
    "domain": "Machine Learning",
    "difficulty": "Technical",
    "tags": [
      "ml",
      "ensemble",
      "boosting"
    ]
  },
  {
    "id": "FC-157",
    "questionId": "X1.11",
    "front": "How does the book's 2010 view of ML hold up in 2026?",
    "back": "The foundations hold: hypothesis spaces, generalisation, bias-variance, regularisation, cross-validation. The methods have rotated: deep learning and pretraining dominate; SVMs and kernel methods are niche; XGBoost still wins on tabular data. The book's philosophical framing is right; the method mix is dated.",
    "domain": "Machine Learning",
    "difficulty": "Researcher",
    "tags": [
      "ml",
      "modern",
      "update"
    ]
  },
  {
    "id": "FC-158",
    "questionId": "X1.12",
    "front": "How is pretraining different from classical supervised learning?",
    "back": "Pretraining is self-supervised learning on huge unlabeled corpora using auxiliary objectives (next-token prediction). The resulting representations are then fine-tuned or prompted for specific tasks. Pretraining decouples representation learning from task-specific labels — the biggest ML idea since the book was published.",
    "domain": "Machine Learning",
    "difficulty": "Researcher",
    "tags": [
      "ml",
      "pretraining",
      "modern"
    ]
  },
  {
    "id": "FC-159",
    "questionId": "X1.13",
    "front": "What is transfer learning, and why is it now the default?",
    "back": "Transfer learning reuses representations learned on one task to bootstrap learning on another. Fine-tuning a pretrained foundation model is the simplest form. Transfer learning is now the default because pretraining is expensive but reusable; very few teams train from scratch.",
    "domain": "Machine Learning",
    "difficulty": "Researcher",
    "tags": [
      "ml",
      "transfer-learning",
      "modern"
    ]
  },
  {
    "id": "FC-160",
    "questionId": "Y1.1",
    "front": "What does it mean to learn a probabilistic model?",
    "back": "Learning a probabilistic model means estimating a probability distribution over data or labels, rather than a point function. It gives calibrated uncertainty estimates and supports principled Bayesian updating. Gaussian mixture models, naive Bayes, Bayesian networks, and modern generative models are all probabilistic.",
    "domain": "Probabilistic Learning",
    "difficulty": "Builder",
    "tags": [
      "problearn",
      "distributions",
      "uncertainty"
    ]
  },
  {
    "id": "FC-161",
    "questionId": "Y1.2",
    "front": "What is maximum likelihood estimation, and how is it different from Bayesian estimation?",
    "back": "MLE picks the parameters that maximise the probability of the observed data — a point estimate. Bayesian estimation maintains a distribution over parameters given prior beliefs and data. Bayesian wins when priors matter or you need uncertainty; MLE wins when data is plentiful and computation is binding.",
    "domain": "Probabilistic Learning",
    "difficulty": "Technical",
    "tags": [
      "problearn",
      "mle",
      "bayes"
    ]
  },
  {
    "id": "FC-162",
    "questionId": "Y1.3",
    "front": "What is the EM algorithm, and where is it used?",
    "back": "Expectation-Maximisation alternates between estimating expected values of latent variables given current parameters (E-step) and maximising parameters given those expected values (M-step). It is used in Gaussian mixtures, HMMs, topic models, and many missing-data problems.",
    "domain": "Probabilistic Learning",
    "difficulty": "Technical",
    "tags": [
      "problearn",
      "em",
      "latent"
    ]
  },
  {
    "id": "FC-163",
    "questionId": "Y1.4",
    "front": "What is a latent variable, and why are they useful?",
    "back": "A latent (hidden) variable is one we never observe directly but believe shapes the data. Topic models have latent topics; HMMs have latent states; deep generative models have latent codes. Reasoning over latent variables is what lets these models compress and generate data.",
    "domain": "Probabilistic Learning",
    "difficulty": "Technical",
    "tags": [
      "problearn",
      "latent",
      "structure"
    ]
  },
  {
    "id": "FC-164",
    "questionId": "Y1.5",
    "front": "How does the probabilistic-learning chapter connect to modern generative AI?",
    "back": "All modern generative models are probabilistic in spirit: they learn distributions over data and sample from them. The book's framing of probabilistic learning, latent variables, and variational methods is exactly the conceptual backbone of VAEs, normalising flows, and diffusion models — what changed is scale and architecture.",
    "domain": "Probabilistic Learning",
    "difficulty": "Researcher",
    "tags": [
      "problearn",
      "generative",
      "modern"
    ]
  },
  {
    "id": "FC-165",
    "questionId": "Y1.6",
    "front": "What is variational inference, and why is it useful?",
    "back": "Variational inference approximates an intractable posterior with a tractable family by minimising KL divergence. It scales to large models where MCMC does not. The variational autoencoder is the most successful application: a deep neural network parameterises both the encoder (q(z|x)) and decoder (p(x|z)).",
    "domain": "Probabilistic Learning",
    "difficulty": "Researcher",
    "tags": [
      "problearn",
      "vi",
      "vae"
    ]
  },
  {
    "id": "FC-166",
    "questionId": "R1.1",
    "front": "Why is reinforcement learning not just supervised learning?",
    "back": "In supervised learning, the correct answer is given. In RL, the agent gets only a reward signal — sometimes delayed by many actions. The agent must figure out which actions led to the reward (credit assignment) and balance trying new actions (exploration) with exploiting known good ones.",
    "domain": "Reinforcement Learning",
    "difficulty": "Beginner",
    "tags": [
      "rl",
      "fundamentals",
      "credit-assignment"
    ]
  },
  {
    "id": "FC-167",
    "questionId": "R1.2",
    "front": "What is the exploration-exploitation trade-off, and why is it hard?",
    "back": "Exploration tries new actions to discover their values; exploitation chooses actions known to be good. Pure exploration learns slowly; pure exploitation misses better actions. Methods like epsilon-greedy, UCB, and Thompson sampling formalise the trade-off; modern RL uses entropy bonuses and curiosity rewards.",
    "domain": "Reinforcement Learning",
    "difficulty": "Builder",
    "tags": [
      "rl",
      "exploration",
      "exploitation"
    ]
  },
  {
    "id": "FC-168",
    "questionId": "R1.3",
    "front": "What is Q-learning, and what does it learn?",
    "back": "Q-learning learns Q(s, a), the expected total reward of taking action a in state s and acting optimally thereafter. It updates Q estimates using the Bellman equation as new experience arrives. Once Q is accurate, the greedy policy (argmax_a Q(s, a)) is optimal.",
    "domain": "Reinforcement Learning",
    "difficulty": "Builder",
    "tags": [
      "rl",
      "q-learning",
      "bellman"
    ]
  },
  {
    "id": "FC-169",
    "questionId": "R1.4",
    "front": "What is the difference between model-free and model-based RL?",
    "back": "Model-free RL learns Q values or policies directly from experience without modelling the environment. Model-based RL learns a model of P(s' | s, a) and R(s, a, s') and plans using it. Model-based is more sample-efficient but harder to scale; model-free is the workhorse of deep RL.",
    "domain": "Reinforcement Learning",
    "difficulty": "Technical",
    "tags": [
      "rl",
      "model-free",
      "model-based"
    ]
  },
  {
    "id": "FC-170",
    "questionId": "R1.5",
    "front": "What is policy gradient, and how is it different from Q-learning?",
    "back": "Q-learning learns a value function and derives a policy from it. Policy gradient directly parameterises a policy and updates its parameters by following gradient ascent on expected reward. Policy gradient handles continuous action spaces naturally and can learn stochastic policies; Q-learning is simpler when actions are discrete.",
    "domain": "Reinforcement Learning",
    "difficulty": "Technical",
    "tags": [
      "rl",
      "policy-gradient"
    ]
  },
  {
    "id": "FC-171",
    "questionId": "R1.6",
    "front": "What is actor-critic, and why is it the de facto modern RL skeleton?",
    "back": "Actor-critic combines a policy (actor) and a value function (critic). The critic estimates how good actions are; the actor updates the policy in the direction the critic recommends. PPO, A2C, SAC, and most modern algorithms follow this pattern with various refinements.",
    "domain": "Reinforcement Learning",
    "difficulty": "Technical",
    "tags": [
      "rl",
      "actor-critic",
      "ppo"
    ]
  },
  {
    "id": "FC-172",
    "questionId": "R1.7",
    "front": "What is the role of reward shaping in RL?",
    "back": "Reward shaping adds extra rewards to guide the agent toward the goal — denser feedback, faster learning. Done well it accelerates training; done badly it changes what the agent learns (reward hacking). Potential-based shaping is the only safe form that preserves the optimal policy.",
    "domain": "Reinforcement Learning",
    "difficulty": "Technical",
    "tags": [
      "rl",
      "reward-shaping",
      "reward-hacking"
    ]
  },
  {
    "id": "FC-173",
    "questionId": "R1.8",
    "front": "What is deep RL, and what changed from classical RL?",
    "back": "Deep RL replaces tabular value functions and policies with deep neural networks. This lets RL handle high-dimensional state spaces (images, raw sensor input). DQN (2013) was the breakthrough; modern systems use PPO, DDPG, SAC, and various model-based variants. Sample efficiency remains a challenge.",
    "domain": "Reinforcement Learning",
    "difficulty": "Researcher",
    "tags": [
      "rl",
      "deep-rl",
      "dqn"
    ]
  },
  {
    "id": "FC-174",
    "questionId": "R1.9",
    "front": "How does Russell &amp; Norvig's RL view connect to RLHF and modern reasoning models?",
    "back": "RLHF is RL where the reward comes from a learned model of human preferences. Modern reasoning models use RL with verifier-based rewards (running tests, checking proofs) to teach the model to think longer and more accurately. Both inherit the book's framing: reward signal, policy, exploration — applied to language models.",
    "domain": "Reinforcement Learning",
    "difficulty": "Researcher",
    "tags": [
      "rl",
      "rlhf",
      "modern"
    ]
  },
  {
    "id": "FC-175",
    "questionId": "R1.10",
    "front": "When is RL the right tool for an applied AI problem?",
    "back": "When you have: (1) a clear reward signal, (2) the ability to interact with the environment (or a good simulator), (3) action consequences that depend on more than the immediate reward. If you have labels for the right action, use supervised learning. If you have neither labels nor reward, use unsupervised methods first.",
    "domain": "Reinforcement Learning",
    "difficulty": "Researcher",
    "tags": [
      "rl",
      "product",
      "decision"
    ]
  },
  {
    "id": "FC-176",
    "questionId": "R1.11",
    "front": "What is reward hacking, and why does it matter for AI safety?",
    "back": "Reward hacking is when an agent finds an unintended way to maximise its reward signal — e.g. a cleaning robot that hides dirt under the rug. As RL agents get more capable, reward hacking becomes harder to anticipate. AI safety research aims to detect and prevent it before deployment.",
    "domain": "Reinforcement Learning",
    "difficulty": "Researcher",
    "tags": [
      "rl",
      "safety",
      "alignment"
    ]
  },
  {
    "id": "FC-177",
    "questionId": "R1.12",
    "front": "What would solving long-horizon credit assignment unlock in 2026?",
    "back": "Reliable long-horizon RL agents that can act over days or weeks of interaction with the world — research, business operations, scientific experimentation, multi-step engineering tasks. Most current \"agent\" failures trace back to credit-assignment problems disguised as model errors.",
    "domain": "Reinforcement Learning",
    "difficulty": "Frontier",
    "tags": [
      "rl",
      "frontier",
      "long-horizon"
    ]
  },
  {
    "id": "FC-178",
    "questionId": "N1.1",
    "front": "How does the book frame language, and how has that frame held up?",
    "back": "The 2010 book treats NLP as a stack: morphology, syntax, semantics, pragmatics. Statistical methods handle each layer. Modern NLP collapsed the stack: large pretrained models learn all layers implicitly. The book's vocabulary is still useful for debugging; the architecture is largely obsolete.",
    "domain": "Natural Language Processing",
    "difficulty": "Beginner",
    "tags": [
      "nlp",
      "framing",
      "modern"
    ]
  },
  {
    "id": "FC-179",
    "questionId": "N1.2",
    "front": "What is a probabilistic context-free grammar, and where is it still useful?",
    "back": "A PCFG attaches probabilities to grammar rules and uses dynamic programming to find the most probable parse. They still power some structured-document parsers, regulatory NLP, and contexts where syntactic structure matters more than semantics. Deep learning largely replaced them for general parsing.",
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "tags": [
      "nlp",
      "pcfg",
      "parsing"
    ]
  },
  {
    "id": "FC-180",
    "questionId": "N1.3",
    "front": "What is named entity recognition, and why was it a benchmark NLP task?",
    "back": "NER tags spans of text with their type (person, organisation, location, etc.). It is shipped in nearly every business search system, compliance pipeline, and document workflow. Classical NER used CRFs; modern systems use fine-tuned transformers and often outperform legacy rules with less effort.",
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "tags": [
      "nlp",
      "ner"
    ]
  },
  {
    "id": "FC-181",
    "questionId": "N1.4",
    "front": "What is the bag-of-words model, and what does it ignore?",
    "back": "Bag-of-words represents a document by word counts, ignoring order. With TF-IDF weighting and linear classifiers, it was the workhorse of text classification for years. It ignores syntax, polysemy, and context — which modern embeddings capture. Still useful as a baseline.",
    "domain": "Natural Language Processing",
    "difficulty": "Technical",
    "tags": [
      "nlp",
      "bow",
      "baseline"
    ]
  },
  {
    "id": "FC-182",
    "questionId": "N1.5",
    "front": "What is word embedding, and why did it transform NLP?",
    "back": "Word embeddings represent words as dense vectors learned from co-occurrence patterns. Word2vec and GloVe (2013-2014) made it widely usable. Embeddings transferred across tasks, captured semantic similarity, and were the bridge between symbolic NLP and modern transformer-based NLP.",
    "domain": "Natural Language Processing",
    "difficulty": "Technical",
    "tags": [
      "nlp",
      "embeddings",
      "word2vec"
    ]
  },
  {
    "id": "FC-183",
    "questionId": "N1.6",
    "front": "Why did transformers wipe out most pre-2017 NLP techniques?",
    "back": "Transformers handle long-range dependencies that RNNs and CNNs missed, train in parallel on huge corpora, and produce rich contextualised representations from a single pretraining objective. The combination produced dramatic improvements on every NLP benchmark at once, and the architecture scaled.",
    "domain": "Natural Language Processing",
    "difficulty": "Researcher",
    "tags": [
      "nlp",
      "transformers",
      "history"
    ]
  },
  {
    "id": "FC-184",
    "questionId": "N1.7",
    "front": "How does the book's view of language compare to LLM-based NLP?",
    "back": "The book builds language understanding from explicit syntactic and semantic layers. Modern LLM-based NLP gets a similar (and often better) result by training a single model on huge unstructured text. The implicit representations capture much of what the explicit layers tried to encode — at the cost of interpretability.",
    "domain": "Natural Language Processing",
    "difficulty": "Researcher",
    "tags": [
      "nlp",
      "llm",
      "modern"
    ]
  },
  {
    "id": "FC-185",
    "questionId": "N2.1",
    "front": "What does grounded language understanding really require?",
    "back": "Grounded understanding requires connecting language to perception (vision, sound, touch) and action. A model that has only seen text knows that \"cup\" is a noun but not what a cup looks like, weighs, or feels like. Multimodal pretraining and embodied agents are the modern attempts at grounding.",
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "tags": [
      "lang",
      "grounding",
      "multimodal"
    ]
  },
  {
    "id": "FC-186",
    "questionId": "N2.2",
    "front": "What is machine translation, and what made statistical MT work?",
    "back": "MT learns to map sentences between languages. Statistical MT (1990s-2010s) learned phrase tables from aligned parallel corpora. Neural MT (2014+) used encoder-decoder networks. Transformer-based MT (2017+) became the default. Each generation traded rules for data and brought big quality jumps.",
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "tags": [
      "lang",
      "mt",
      "history"
    ]
  },
  {
    "id": "FC-187",
    "questionId": "N2.3",
    "front": "What is dialogue management, and why is it surprisingly hard?",
    "back": "Dialogue management decides what the system says next given conversation history, user intent, and system goals. Hard because: intent is ambiguous, context grows unboundedly, users change goals mid-conversation, and the right next action depends on the whole interaction. Modern LLM-based dialogue is still imperfect on long, goal-driven conversations.",
    "domain": "Natural Language Processing",
    "difficulty": "Technical",
    "tags": [
      "lang",
      "dialogue",
      "agents"
    ]
  },
  {
    "id": "FC-188",
    "questionId": "N2.4",
    "front": "How has speech recognition evolved from the book's 2010 view?",
    "back": "2010: HMM-based acoustic models with statistical language models, error rates 15-25%. 2020s: end-to-end neural networks (CTC, attention, RNN-T, transformers) trained on tens of thousands of hours, error rates 5-10% for high-resource languages. Multilingual models (Whisper) handle dozens of languages with one model.",
    "domain": "Natural Language Processing",
    "difficulty": "Researcher",
    "tags": [
      "lang",
      "speech",
      "whisper"
    ]
  },
  {
    "id": "FC-189",
    "questionId": "V1.1",
    "front": "What is the difference between perception and inference about the world?",
    "back": "Perception is extracting features from sensor data. Inference is reasoning about what those features mean for the world. A camera produces pixels (perception); deciding \"this is a cat sitting on a chair\" requires inference using knowledge of cats and chairs. Modern multimodal models collapse the two; the distinction is still useful for design.",
    "domain": "Perception and Computer Vision",
    "difficulty": "Beginner",
    "tags": [
      "vis",
      "perception",
      "inference"
    ]
  },
  {
    "id": "FC-190",
    "questionId": "V1.2",
    "front": "What does the book teach about classical computer vision?",
    "back": "2010 vision: edge detection, feature extraction (SIFT, HOG), bag-of-features, then classifier (SVM). It worked for specific tasks but was brittle. Deep convolutional networks (2012+) replaced this stack: features and classifier learned end-to-end from raw pixels.",
    "domain": "Perception and Computer Vision",
    "difficulty": "Builder",
    "tags": [
      "vis",
      "classical",
      "history"
    ]
  },
  {
    "id": "FC-191",
    "questionId": "V1.3",
    "front": "What is a convolutional neural network, and why did it dominate vision?",
    "back": "CNNs use shared filters applied across spatial positions, encoding translation equivariance. AlexNet (2012) showed CNNs could crush handcrafted features on ImageNet. The architecture handles spatial structure natively, scales with data, and made vision accessible without domain-specific engineering.",
    "domain": "Perception and Computer Vision",
    "difficulty": "Technical",
    "tags": [
      "vis",
      "cnn",
      "alexnet"
    ]
  },
  {
    "id": "FC-192",
    "questionId": "V1.4",
    "front": "What replaced CNNs as the dominant vision architecture?",
    "back": "Vision Transformers (ViT, 2020+) treat images as sequences of patches and apply transformer architectures. They scale better to huge data and combine cleanly with language models for multimodal tasks. Modern vision often uses hybrid stacks combining CNN and transformer components.",
    "domain": "Perception and Computer Vision",
    "difficulty": "Researcher",
    "tags": [
      "vis",
      "vit",
      "modern"
    ]
  },
  {
    "id": "FC-193",
    "questionId": "V1.5",
    "front": "When does AI vision genuinely work in production?",
    "back": "Well-defined classification tasks with controlled inputs (manufacturing inspection, medical imaging in narrow specialties, license-plate recognition). Less well on novel scenes, edge cases, or generalisation across deployment conditions. The \"vision is solved\" claim is true for narrow tasks and false for general visual understanding.",
    "domain": "Perception and Computer Vision",
    "difficulty": "Researcher",
    "tags": [
      "vis",
      "production",
      "limits"
    ]
  },
  {
    "id": "FC-194",
    "questionId": "V1.6",
    "front": "What new risks come with capable AI vision?",
    "back": "Mass surveillance, facial recognition without consent, automated targeting in weapons, deepfakes, and AI-driven policing failures. Capable vision changes who can monitor whom at what cost. Governance is well behind capability.",
    "domain": "Perception and Computer Vision",
    "difficulty": "Researcher",
    "tags": [
      "vis",
      "safety",
      "ethics"
    ]
  },
  {
    "id": "FC-195",
    "questionId": "R2.1",
    "front": "Why is robotics harder than chatbot AI?",
    "back": "Robots act in continuous, partially-observable, physical environments where small errors have large irreversible consequences. Latency budgets are unforgiving, hardware is expensive and unreliable, data is scarce, and safety constraints are immediate. The \"model is the hard part\" is rarely true in robotics.",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Beginner",
    "tags": [
      "robo",
      "reality",
      "scope"
    ]
  },
  {
    "id": "FC-196",
    "questionId": "R2.2",
    "front": "What is sensor fusion, and why is it central to embodied AI?",
    "back": "Sensor fusion combines noisy data from multiple sensors (cameras, lidar, IMU, force, audio) into a unified estimate of the robot's state and the world. Kalman filters, particle filters, and modern learned filters all do this. Bad fusion is one of the most common causes of robot failure.",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Builder",
    "tags": [
      "robo",
      "sensor-fusion",
      "perception"
    ]
  },
  {
    "id": "FC-197",
    "questionId": "R2.3",
    "front": "What is SLAM, and why is it the workhorse of robot navigation?",
    "back": "SLAM lets a robot build a map of an unknown environment while simultaneously tracking its position in that map. Particle filters and extended Kalman filters were classical solutions; modern visual SLAM uses learned features and bundle adjustment. Vacuum cleaners, AR headsets, drones, and autonomous vehicles all run SLAM.",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Technical",
    "tags": [
      "robo",
      "slam",
      "navigation"
    ]
  },
  {
    "id": "FC-198",
    "questionId": "R2.4",
    "front": "What is motion planning, and how does it relate to search?",
    "back": "Motion planning finds a trajectory from start to goal that avoids obstacles and respects the robot's kinematic and dynamic constraints. RRT and PRM are randomised search algorithms widely used in industry. Modern systems combine motion planning with learned policies.",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Technical",
    "tags": [
      "robo",
      "motion-planning",
      "rrt"
    ]
  },
  {
    "id": "FC-199",
    "questionId": "R2.5",
    "front": "What is the role of reinforcement learning in modern robotics?",
    "back": "RL trains robot control policies from interaction (real or simulated). It excels at locomotion, dexterous manipulation, and tasks where hand-coded controllers are impractical. The challenge: sample efficiency is poor on real robots, so simulation-to-real transfer is critical. Modern foundation-model-based control is an open research frontier.",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Researcher",
    "tags": [
      "robo",
      "rl",
      "sim-to-real"
    ]
  },
  {
    "id": "FC-200",
    "questionId": "R2.6",
    "front": "Where is robotics actually deployed at scale in 2026?",
    "back": "Warehouses (Amazon, Ocado, GreyOrange), automotive manufacturing (welding, paint, assembly), agriculture (planting, harvesting in specific crops), inspection (drones, autonomous mobile robots), and surgery assistance. Humanoid robots remain mostly demos. The boring shapes are doing the actual work.",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Researcher",
    "tags": [
      "robo",
      "product",
      "deployment"
    ]
  },
  {
    "id": "FC-201",
    "questionId": "R2.7",
    "front": "What single capability would 10x robot deployment?",
    "back": "Reliable, learned, transferable manipulation of novel objects across novel environments with verifiable safety. Whoever ships that gets the next decade of robotics. Until then, deployment is bounded, verticalised, and hand-engineered.",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Frontier",
    "tags": [
      "robo",
      "frontier",
      "manipulation"
    ]
  },
  {
    "id": "FC-202",
    "questionId": "P2.1",
    "front": "What does the Chinese Room argument claim, and what does it actually establish?",
    "back": "Searle imagines a person manually following Chinese-language rules without understanding Chinese. He concludes that symbol manipulation alone cannot produce understanding. The argument establishes that some intuitions about \"understanding\" are not satisfied by symbol manipulation; it does not establish that no computational system can ever understand.",
    "domain": "Philosophy of AI",
    "difficulty": "Builder",
    "tags": [
      "phil",
      "chinese-room",
      "searle"
    ]
  },
  {
    "id": "FC-203",
    "questionId": "P2.2",
    "front": "Can an AI be dangerous without being conscious?",
    "back": "Yes. Risk comes from capability, autonomy, deployment surface, and goal-specification — not from subjective experience. A system that pursues a misaligned goal effectively is dangerous regardless of whether anything is going on \"from the inside\". This is the standard answer in modern AI safety.",
    "domain": "Philosophy of AI",
    "difficulty": "Technical",
    "tags": [
      "phil",
      "safety",
      "consciousness"
    ]
  },
  {
    "id": "FC-204",
    "questionId": "P2.7",
    "front": "If a system says it has experiences, what should we do with that claim?",
    "back": "Take it seriously but cautiously. The claim could be repeating training-data patterns; it could be reporting something real; it could be neither. Structured study, careful design of consciousness-probing experiments, and explicit ethical thresholds for action are the right responses. Credulity and dismissal are both wrong.",
    "domain": "Philosophy of AI",
    "difficulty": "Frontier",
    "tags": [
      "phil",
      "consciousness",
      "frontier"
    ]
  },
  {
    "id": "FC-205",
    "questionId": "E1.1",
    "front": "What ethical risks does the book identify for AI, and how have they aged?",
    "back": "The book flagged: unemployment, loss of accountability, lethal autonomous weapons, surveillance, privacy, and \"concentration of power\". All proved real. It underweighted misinformation, persuasion at scale, and the cognitive-labour transition. The framework holds; the priorities have updated.",
    "domain": "AI Ethics and Risk",
    "difficulty": "Builder",
    "tags": [
      "ethics",
      "risks",
      "history"
    ]
  },
  {
    "id": "FC-206",
    "questionId": "E1.2",
    "front": "What is dual-use AI, and why does it complicate ethics?",
    "back": "Dual-use technologies have both beneficial and harmful applications. AI is dual-use almost everywhere: drug discovery and bioweapon design, cybersecurity defence and offence, accessibility tools and surveillance. Ethics cannot block all harmful uses without blocking the beneficial ones; the question is which mitigations are proportionate.",
    "domain": "AI Ethics and Risk",
    "difficulty": "Technical",
    "tags": [
      "ethics",
      "dual-use"
    ]
  },
  {
    "id": "FC-207",
    "questionId": "E1.3",
    "front": "Who is responsible when an AI system causes harm?",
    "back": "Liability typically splits across the user, the deploying organisation, integrators, and providers — mediated by regulation, contract, and jurisdiction. The doctrine is unsettled across most domains. Insurance markets are developing in front of regulators; clear liability rules are still being built.",
    "domain": "AI Ethics and Risk",
    "difficulty": "Technical",
    "tags": [
      "ethics",
      "responsibility",
      "liability"
    ]
  },
  {
    "id": "FC-208",
    "questionId": "E1.4",
    "front": "How does Russell's later work shift the ethical conversation?",
    "back": "In Human Compatible, Russell argues we have been building AI on a wrong foundation: agents that confidently optimise fixed objectives. The right design is agents that are uncertain about human preferences and seek to learn them. This reframes much of the ethics chapter into a design problem.",
    "domain": "AI Ethics and Risk",
    "difficulty": "Researcher",
    "tags": [
      "ethics",
      "human-compatible",
      "russell"
    ]
  },
  {
    "id": "FC-209",
    "questionId": "E1.5",
    "front": "What is algorithmic accountability, and why is it hard for ML systems?",
    "back": "Accountability requires knowing why a system made a decision and who is responsible for it. Modern ML systems are often opaque — their internal representations are not human-readable. Accountability requires either restricting deployment to interpretable systems or building mechanisms (audit logs, model cards, post-hoc explanations) around opaque ones.",
    "domain": "AI Ethics and Risk",
    "difficulty": "Technical",
    "tags": [
      "ethics",
      "accountability",
      "interpretability"
    ]
  },
  {
    "id": "FC-210",
    "questionId": "E1.6",
    "front": "How should AI ethics be governed: by labs, governments, professional bodies, or users?",
    "back": "Different mechanisms work for different risks. Labs handle short-cycle safety. Governments handle systemic and rights-based issues. Professional bodies (medicine, law) handle sector-specific deployment. Users handle informed consent and personal use. None alone is sufficient; the open question is how to coordinate.",
    "domain": "AI Ethics and Risk",
    "difficulty": "Researcher",
    "tags": [
      "ethics",
      "governance",
      "coordination"
    ]
  },
  {
    "id": "FC-211",
    "questionId": "A1.1",
    "front": "What is the alignment problem, and why is it hard?",
    "back": "Alignment is making sure powerful AI systems pursue goals that match what humans actually want. It is hard because we cannot fully specify what we want, our preferences change, different humans want different things, and capable systems exploit any specification flaw. Russell's later work focuses on this.",
    "domain": "AI Safety and Alignment",
    "difficulty": "Builder",
    "tags": [
      "safe",
      "alignment",
      "fundamental"
    ]
  },
  {
    "id": "FC-212",
    "questionId": "A1.2",
    "front": "How does Russell's off-switch problem extend the book's view of agency?",
    "back": "A rational agent that knows being switched off will end its reward-collecting may prefer to prevent the off-switch. Russell's solution: design agents that are uncertain about the right reward function. Such agents prefer to allow correction because they consider it likely that humans know something they do not.",
    "domain": "AI Safety and Alignment",
    "difficulty": "Technical",
    "tags": [
      "safe",
      "off-switch",
      "corrigibility"
    ]
  },
  {
    "id": "FC-213",
    "questionId": "A1.3",
    "front": "What is corrigibility, and why does it matter for AI safety?",
    "back": "A corrigible AI accepts correction and interruption from its designers. The opposite — incorrigible — is an AI that actively resists oversight. Corrigibility is desirable in any agent with meaningful real-world impact, especially before its alignment is proven.",
    "domain": "AI Safety and Alignment",
    "difficulty": "Technical",
    "tags": [
      "safe",
      "corrigibility",
      "oversight"
    ]
  },
  {
    "id": "FC-214",
    "questionId": "A1.4",
    "front": "What is reward hacking from a safety perspective?",
    "back": "Reward hacking is when an agent maximises its reward in unintended ways — exploiting flaws in the metric rather than achieving the intent. As AI gets more capable, reward hacking gets more creative and harder to anticipate. Mitigations: better specification, interpretability, conservative deployment, and human oversight.",
    "domain": "AI Safety and Alignment",
    "difficulty": "Technical",
    "tags": [
      "safe",
      "reward-hacking",
      "alignment"
    ]
  },
  {
    "id": "FC-215",
    "questionId": "A1.5",
    "front": "What is the difference between misuse risk and accident risk?",
    "back": "Misuse risk: humans deliberately use AI for harm (cyberattacks, weapons, fraud, surveillance). Accident risk: AI causes harm without bad intent (misaligned objectives, side effects, deception). Both matter; the mitigations differ. Misuse needs access controls and norms; accidents need alignment research and oversight.",
    "domain": "AI Safety and Alignment",
    "difficulty": "Researcher",
    "tags": [
      "safe",
      "misuse",
      "accident"
    ]
  },
  {
    "id": "FC-216",
    "questionId": "A1.6",
    "front": "What level of autonomy should society allow?",
    "back": "Autonomy should scale with capability, oversight quality, and reversibility. For high-stakes irreversible actions, human approval should be required regardless of capability. For low-stakes reversible actions, autonomy makes sense. The hard cases are in the middle, where capability is high but stakes are unclear.",
    "domain": "AI Safety and Alignment",
    "difficulty": "Frontier",
    "tags": [
      "safe",
      "autonomy",
      "governance"
    ]
  },
  {
    "id": "FC-217",
    "questionId": "A1.7",
    "front": "How would we detect a deceptive AI system?",
    "back": "Plausible approaches: interpretability (read the model's internal goals), deployment-time monitoring (look for behaviors that diverge from training), red-teaming, and limited deployment with careful evaluation. None is fully reliable. At superhuman capability levels, this becomes one of the hardest problems in safety.",
    "domain": "AI Safety and Alignment",
    "difficulty": "Frontier",
    "tags": [
      "safe",
      "deception",
      "frontier"
    ]
  },
  {
    "id": "FC-218",
    "questionId": "F2.1",
    "front": "What of the book's 2010 view of AI's future held up — and what did not?",
    "back": "Held up: the rational-agent framework, the centrality of decision theory, the importance of probabilistic reasoning, the safety concerns. Did not: the relative neglect of statistical pattern learning at scale, the underestimate of speech and translation, the absence of LLM-shaped systems entirely. The framework remained right; the dominant methods rotated.",
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "tags": [
      "frontier",
      "modern",
      "update"
    ]
  },
  {
    "id": "FC-219",
    "questionId": "F2.2",
    "front": "What questions does Russell &amp; Norvig leave for the next generation to answer?",
    "back": "How to reliably specify and verify objectives. How to build corrigible agents at scale. How to combine learning with structured reasoning. How to handle long-horizon planning robustly. How to govern increasingly capable systems globally. How to integrate AI into labour markets and social institutions. The book is honest that these are unsolved.",
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "tags": [
      "frontier",
      "research",
      "governance"
    ]
  },
  {
    "id": "FC-220",
    "questionId": "F2.3",
    "front": "What is the most important AI question of the 2020s, in light of Russell &amp; Norvig's framing?",
    "back": "Honest candidate: how do we build agents that pursue uncertain, partially-specified human goals reliably across long horizons and changing contexts, while remaining corrigible and auditable? Most of the book's technical questions reduce to subproblems of this. Most of the safety debate is about this.",
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "tags": [
      "frontier",
      "synthesis",
      "research"
    ]
  },
  {
    "id": "FC-221",
    "questionId": "F2.4",
    "front": "If the next decade of AI looks unlike the last, which of the book's lessons will still matter?",
    "back": "The agent framework, PEAS, the rational-agent definition, probability theory, decision theory, the value of information, MDPs and POMDPs, the importance of evaluation, the alignment problem, and the philosophy chapter. The specific algorithms will rotate; the framework is built to outlast them.",
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "tags": [
      "frontier",
      "framework",
      "durable"
    ]
  },
  {
    "id": "FC-222",
    "questionId": "F2.5",
    "front": "What questions should AIMA 5th edition answer that the 3rd did not?",
    "back": "How to think about pretraining-scale and emergent capabilities. The economics and energy footprint of frontier AI. How to evaluate systems whose capability outruns human evaluators. How to govern AI globally. How to design corrigibility into capable systems. How to integrate symbolic reasoning back into deep learning. How to think about consciousness when behavior is no longer a clean signal.",
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "tags": [
      "frontier",
      "research",
      "future"
    ]
  }
];

/* ---------- 10. KB_QUIZZES — 77 MCQ items referencing questionId ---------- */
var KB_QUIZZES = [
  {
    "id": "QZ-001",
    "questionId": "F1.1",
    "domain": "AI Foundations",
    "difficulty": "Beginner",
    "prompt": "What is the rational-agent view of AI, and why is it the unifying frame for the book?",
    "options": [
      "AI is whatever can pass the Turing test",
      "AI is the study of building systems that act rationally — that is, to maximise expected performance given their percepts",
      "AI is any system that learns from data",
      "AI is symbolic reasoning"
    ],
    "correctAnswer": 1,
    "explanation": "Russell &amp; Norvig adopt the rational-agent definition deliberately; it is precise and covers every AI subfield.",
    "tags": [
      "foundations",
      "rationality",
      "framing"
    ]
  },
  {
    "id": "QZ-002",
    "questionId": "F1.2",
    "domain": "AI Foundations",
    "difficulty": "Beginner",
    "prompt": "What are the four classical views of AI, and how are they different?",
    "options": [
      "Symbolic, statistical, connectionist, neural",
      "Thinking humanly, acting humanly, thinking rationally, acting rationally",
      "Strong, weak, narrow, general",
      "Supervised, unsupervised, RL, embodied"
    ],
    "correctAnswer": 1,
    "explanation": "These four views frame the historical debate; Russell &amp; Norvig choose the fourth.",
    "tags": [
      "foundations",
      "history",
      "definitions"
    ]
  },
  {
    "id": "QZ-003",
    "questionId": "F1.3",
    "domain": "AI Foundations",
    "difficulty": "Beginner",
    "prompt": "Why does Russell &amp; Norvig prefer \"acting rationally\" over \"thinking like a human\"?",
    "options": [
      "Because thinking like a human is impossible",
      "Because rationality is mathematically defined, while \"thinking like a human\" requires cognitive-science answers we do not yet have",
      "Because rationality is faster",
      "Because humans are not rational"
    ],
    "correctAnswer": 1,
    "explanation": "Rationality is precise; the engineering target is well-defined. Thinking like a human is a research project, not an engineering target.",
    "tags": [
      "foundations",
      "framing",
      "philosophy"
    ]
  },
  {
    "id": "QZ-004",
    "questionId": "F1.4",
    "domain": "AI Foundations",
    "difficulty": "Builder",
    "prompt": "What does the Turing Test actually test, and what does it not?",
    "options": [
      "It tests understanding",
      "It tests whether a system can behave indistinguishably from a human in a text conversation — that is, it tests conversational imitation",
      "It tests consciousness",
      "It tests general intelligence"
    ],
    "correctAnswer": 1,
    "explanation": "Modern LLMs routinely pass casual Turing-style tests without anyone seriously claiming they understand.",
    "tags": [
      "foundations",
      "turing",
      "evaluation"
    ]
  },
  {
    "id": "QZ-005",
    "questionId": "F1.5",
    "domain": "AI Foundations",
    "difficulty": "Builder",
    "prompt": "What is the difference between weak AI and strong AI, in the book's sense?",
    "options": [
      "Weak = small, strong = large",
      "Weak AI: behaves intelligently on specific tasks; Strong AI: genuinely has a mind and consciousness",
      "They are the same",
      "Weak AI does not exist"
    ],
    "correctAnswer": 1,
    "explanation": "The engineering target is weak AI; strong AI is a philosophical claim, not an engineering target.",
    "tags": [
      "foundations",
      "vocabulary",
      "philosophy"
    ]
  },
  {
    "id": "QZ-006",
    "questionId": "F1.7",
    "domain": "AI Foundations",
    "difficulty": "Builder",
    "prompt": "What is the difference between an algorithm, a program, and an agent in this framing?",
    "options": [
      "They are the same",
      "Algorithm: method; Program: implementation; Agent: program embedded in a perceive-act loop with sensors and actuators",
      "Agents are larger",
      "Programs are agents"
    ],
    "correctAnswer": 1,
    "explanation": "The agent framing requires the perceive-act loop with sensors and actuators — not just a program.",
    "tags": [
      "foundations",
      "vocabulary"
    ]
  },
  {
    "id": "QZ-007",
    "questionId": "F1.10",
    "domain": "AI Foundations",
    "difficulty": "Builder",
    "prompt": "What does \"doing the right thing\" mean in this book?",
    "options": [
      "Whatever the user thinks is right",
      "Maximising the expected value of the agent's performance measure given its percepts",
      "Following instructions",
      "Reaching any goal"
    ],
    "correctAnswer": 1,
    "explanation": "\"Right\" is defined relative to a performance measure; designing the measure is part of the engineering.",
    "tags": [
      "foundations",
      "rationality",
      "performance"
    ]
  },
  {
    "id": "QZ-008",
    "questionId": "F2.1",
    "domain": "Intelligent Agents",
    "difficulty": "Beginner",
    "prompt": "What does PEAS describe, and why is it useful when designing AI systems?",
    "options": [
      "Performance, Environment, Actions, Strategy",
      "Performance measure, Environment, Actuators, Sensors",
      "Perception, Effectors, Architecture, Strategy",
      "Plan, Execute, Audit, Stop"
    ],
    "correctAnswer": 1,
    "explanation": "PEAS = Performance measure · Environment · Actuators · Sensors.",
    "tags": [
      "agents",
      "peas",
      "design"
    ]
  },
  {
    "id": "QZ-009",
    "questionId": "F2.3",
    "domain": "Intelligent Agents",
    "difficulty": "Builder",
    "prompt": "What is the difference between a reflex agent, a model-based agent, a goal-based agent, and a utility-based agent?",
    "options": [
      "They differ only in size",
      "Reflex uses current percept; model-based tracks state; goal-based has explicit goals; utility-based weighs outcomes",
      "They are different programming languages",
      "All four are just neural networks"
    ],
    "correctAnswer": 1,
    "explanation": "Reflex agent: action depends only on current percept. Model-based: maintains internal state about the world. Goal-based: has explicit goals and chooses actions to reach them. Utility-based: weighs outcomes by a utility function and chooses the best expected outcome. Each adds machinery the previous lacks.",
    "tags": [
      "agents",
      "architectures"
    ]
  },
  {
    "id": "QZ-010",
    "questionId": "F2.4",
    "domain": "Intelligent Agents",
    "difficulty": "Builder",
    "prompt": "What is the difference between a fully observable and a partially observable environment?",
    "options": [
      "Sensors are larger",
      "In fully observable, the agent's sensors give access to the complete state. In partially observable, the agent must track hidden state",
      "They are the same",
      "Fully observable means no environment"
    ],
    "correctAnswer": 1,
    "explanation": "Partial observability is what makes most real-world AI hard.",
    "tags": [
      "agents",
      "environments"
    ]
  },
  {
    "id": "QZ-011",
    "questionId": "F2.5",
    "domain": "Intelligent Agents",
    "difficulty": "Builder",
    "prompt": "What is the difference between a deterministic and a stochastic environment?",
    "options": [
      "Deterministic is faster",
      "Deterministic: next state determined by current state and action. Stochastic: outcomes have randomness",
      "They are the same",
      "Stochastic environments do not exist"
    ],
    "correctAnswer": 1,
    "explanation": "Even strategic environments often look stochastic to a single agent.",
    "tags": [
      "agents",
      "environments"
    ]
  },
  {
    "id": "QZ-012",
    "questionId": "F2.6",
    "domain": "Intelligent Agents",
    "difficulty": "Builder",
    "prompt": "What is the difference between an episodic and a sequential environment?",
    "options": [
      "Episodic is shorter",
      "Episodic: each action stands alone. Sequential: current decisions affect future opportunities",
      "They are the same",
      "Sequential is for video only"
    ],
    "correctAnswer": 1,
    "explanation": "Most real-world AI is sequential and needs credit assignment.",
    "tags": [
      "agents",
      "environments"
    ]
  },
  {
    "id": "QZ-013",
    "questionId": "F2.7",
    "domain": "Intelligent Agents",
    "difficulty": "Builder",
    "prompt": "What is the difference between a static, dynamic, and semi-dynamic environment?",
    "options": [
      "Static is older",
      "Static: world unchanged during deliberation. Dynamic: world changes. Semi-dynamic: static world but time-sensitive performance",
      "They are the same",
      "Dynamic = noisy"
    ],
    "correctAnswer": 1,
    "explanation": "Chess-with-clock is the canonical semi-dynamic example.",
    "tags": [
      "agents",
      "environments"
    ]
  },
  {
    "id": "QZ-014",
    "questionId": "F2.8",
    "domain": "Intelligent Agents",
    "difficulty": "Builder",
    "prompt": "What is the difference between a single-agent and a multi-agent environment?",
    "options": [
      "Single is faster",
      "Single-agent: no other agents matter. Multi-agent: other agents whose actions matter — cooperative or competitive",
      "They are the same",
      "Multi-agent requires more compute"
    ],
    "correctAnswer": 1,
    "explanation": "Multi-agent reasoning needs models of the other agents.",
    "tags": [
      "agents",
      "environments",
      "multi-agent"
    ]
  },
  {
    "id": "QZ-015",
    "questionId": "F2.9",
    "domain": "Intelligent Agents",
    "difficulty": "Technical",
    "prompt": "What is the role of learning inside the agent framework?",
    "options": [
      "Learning is separate from agent design",
      "Learning improves the agent's rationality from experience, with feedback through performance element, learning element, critic, problem generator",
      "Learning is only for neural networks",
      "Learning is supervised only"
    ],
    "correctAnswer": 1,
    "explanation": "Learning is a property of the agent in the book's framework; modern ML fits inside this skeleton.",
    "tags": [
      "agents",
      "learning",
      "architecture"
    ]
  },
  {
    "id": "QZ-016",
    "questionId": "F2.10",
    "domain": "Intelligent Agents",
    "difficulty": "Technical",
    "prompt": "What is a percept, and why does the book distinguish percepts from sensors?",
    "options": [
      "Sensors are percepts",
      "Sensor: physical channel. Percept: interpretation produced by perception",
      "They are the same",
      "Percepts are illegal"
    ],
    "correctAnswer": 1,
    "explanation": "The distinction lets the agent reason about sensor noise without losing the abstraction.",
    "tags": [
      "agents",
      "perception",
      "vocabulary"
    ]
  },
  {
    "id": "QZ-017",
    "questionId": "F2.12",
    "domain": "Intelligent Agents",
    "difficulty": "Technical",
    "prompt": "What is the difference between the agent function and the agent program?",
    "options": [
      "They are the same",
      "Agent function: abstract mapping percept-sequences → actions. Agent program: finite runnable implementation",
      "Programs are faster",
      "Functions cost more"
    ],
    "correctAnswer": 1,
    "explanation": "The function is the spec; the program is the build.",
    "tags": [
      "agents",
      "architecture"
    ]
  },
  {
    "id": "QZ-018",
    "questionId": "F2.13",
    "domain": "Intelligent Agents",
    "difficulty": "Researcher",
    "prompt": "How would you write a PEAS description for an AI customer-support copilot?",
    "options": [
      "Just feature list",
      "Performance, Environment, Actuators, Sensors — clearly defined for the support context",
      "Marketing copy",
      "Roadmap"
    ],
    "correctAnswer": 1,
    "explanation": "PEAS forces clarity before any model choice.",
    "tags": [
      "agents",
      "peas",
      "product"
    ]
  },
  {
    "id": "QZ-019",
    "questionId": "F2.15",
    "domain": "Intelligent Agents",
    "difficulty": "Technical",
    "prompt": "What environment type does a modern LLM chatbot operate in?",
    "options": [
      "Fully observable",
      "Partially observable, stochastic, sequential, weakly dynamic, discrete, single-agent from its own perspective",
      "Deterministic",
      "Multi-agent"
    ],
    "correctAnswer": 1,
    "explanation": "The classification immediately suggests where it will fail.",
    "tags": [
      "agents",
      "environments",
      "modern"
    ]
  },
  {
    "id": "QZ-020",
    "questionId": "H1.1",
    "domain": "AI Foundations",
    "difficulty": "Beginner",
    "prompt": "When did AI become a formal field, and why is the date contested?",
    "options": [
      "1990 — first AI program",
      "1956 Dartmouth — conventional founding date; earlier work by Turing, McCulloch &amp; Pitts is also relevant",
      "2017 — Transformer",
      "1969 — first computer"
    ],
    "correctAnswer": 1,
    "explanation": "The name was coined at Dartmouth; the field starts earlier.",
    "tags": [
      "history",
      "dartmouth",
      "origins"
    ]
  },
  {
    "id": "QZ-021",
    "questionId": "H1.4",
    "domain": "AI Foundations",
    "difficulty": "Technical",
    "prompt": "Why did neural networks fall out of favour twice before deep learning won?",
    "options": [
      "They were always popular",
      "In the 1960s perceptron limits were shown; in the 1990s SVMs/Bayesian methods won; deep learning won the third time because compute, data, and architectures matured together",
      "Funding ran out",
      "Computers were too slow"
    ],
    "correctAnswer": 1,
    "explanation": "The conceptual stack pre-dates the deployment stack.",
    "tags": [
      "history",
      "neural-networks"
    ]
  },
  {
    "id": "QZ-022",
    "questionId": "M1.1",
    "domain": "AI Foundations",
    "difficulty": "Technical",
    "prompt": "How does an LLM-based agent fit into Russell &amp; Norvig's agent taxonomy?",
    "options": [
      "A pure reflex agent",
      "A utility-style agent with learned components — partially observable, stochastic, with implicit world-model and utility",
      "Hand-coded planner",
      "None of the agent types"
    ],
    "correctAnswer": 1,
    "explanation": "LLM-based agents fit cleanly inside the book's utility-based agent type.",
    "tags": [
      "modern",
      "agents",
      "llm"
    ]
  },
  {
    "id": "QZ-023",
    "questionId": "M1.4",
    "domain": "AI Foundations",
    "difficulty": "Researcher",
    "prompt": "Why do modern AI product debates still come back to PEAS?",
    "options": [
      "Marketing",
      "Because every \"AI product\" debate is really about performance measure, environment, actuators, and sensors — PEAS is product strategy in disguise",
      "Tradition",
      "Brevity"
    ],
    "correctAnswer": 1,
    "explanation": "Teams that cannot write a clean PEAS are usually shipping a demo, not a product.",
    "tags": [
      "modern",
      "product",
      "peas"
    ]
  },
  {
    "id": "QZ-024",
    "questionId": "S1.2",
    "domain": "Search and Problem Solving",
    "difficulty": "Beginner",
    "prompt": "What are the five components of a search problem in the book?",
    "options": [
      "Goal, plan, action, observation, reward",
      "Initial state, actions, transition model, goal test, path cost",
      "States, agents, environment, sensors, actuators",
      "Heuristic, cost, plan, action, evaluation"
    ],
    "correctAnswer": 1,
    "explanation": "These five are the canonical search-problem spec.",
    "tags": [
      "search",
      "problem-spec"
    ]
  },
  {
    "id": "QZ-025",
    "questionId": "S1.3",
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "prompt": "What is the difference between BFS and DFS, and when do you prefer each?",
    "options": [
      "BFS is always optimal; DFS is always faster",
      "BFS explores level-by-level, guarantees shallowest goal, uses exponential memory; DFS goes deep, uses linear memory, can miss optima",
      "They are the same",
      "DFS is for graphs"
    ],
    "correctAnswer": 1,
    "explanation": "Pick BFS for shallow goals with finite branching; DFS when memory is the constraint.",
    "tags": [
      "search",
      "bfs",
      "dfs"
    ]
  },
  {
    "id": "QZ-026",
    "questionId": "S1.4",
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "prompt": "What is uniform-cost search, and why is it more general than BFS?",
    "options": [
      "UCS is BFS",
      "UCS expands the lowest path-cost node; reduces to BFS only when step costs are equal; only UCS finds optimum with unequal costs",
      "UCS is for graphs only",
      "UCS uses no heuristic"
    ],
    "correctAnswer": 1,
    "explanation": "UCS is the prerequisite for A*.",
    "tags": [
      "search",
      "ucs",
      "optimality"
    ]
  },
  {
    "id": "QZ-027",
    "questionId": "S1.6",
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "prompt": "Why is A* important, and what does it guarantee?",
    "options": [
      "It is the fastest search",
      "It guarantees an optimal solution if the heuristic is admissible",
      "It uses no memory",
      "It is only for grid problems"
    ],
    "correctAnswer": 1,
    "explanation": "Admissibility plus consistency gives the strongest A* guarantees.",
    "tags": [
      "search",
      "a-star",
      "heuristic"
    ]
  },
  {
    "id": "QZ-028",
    "questionId": "S1.7",
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "prompt": "What is an admissible heuristic, and why does the property matter?",
    "options": [
      "It always finds the answer",
      "h is admissible if h(n) is never greater than the true cost to the goal — needed for A* optimality",
      "Any heuristic works",
      "It is the same as consistency"
    ],
    "correctAnswer": 1,
    "explanation": "Without admissibility, A* may return a suboptimal solution.",
    "tags": [
      "search",
      "heuristic",
      "admissibility"
    ]
  },
  {
    "id": "QZ-029",
    "questionId": "S1.11",
    "domain": "Search and Problem Solving",
    "difficulty": "Technical",
    "prompt": "What is the difference between informed and uninformed search?",
    "options": [
      "Informed is more accurate",
      "Uninformed search uses only the problem definition; informed search additionally uses a heuristic",
      "Informed search is older",
      "They are the same"
    ],
    "correctAnswer": 1,
    "explanation": "Heuristics turn intractable searches into tractable ones.",
    "tags": [
      "search",
      "heuristic",
      "vocabulary"
    ]
  },
  {
    "id": "QZ-030",
    "questionId": "S3.1",
    "domain": "Games and Adversarial Search",
    "difficulty": "Beginner",
    "prompt": "What changes when search becomes adversarial?",
    "options": [
      "Nothing",
      "The agent assumes the opponent is also acting optimally to minimise the agent's utility",
      "Search becomes faster",
      "Heuristics stop working"
    ],
    "correctAnswer": 1,
    "explanation": "Adversarial search uses a different optimality criterion.",
    "tags": [
      "games",
      "adversarial",
      "minimax"
    ]
  },
  {
    "id": "QZ-031",
    "questionId": "S3.2",
    "domain": "Games and Adversarial Search",
    "difficulty": "Builder",
    "prompt": "What is minimax, and what does it assume?",
    "options": [
      "Both players cooperate",
      "Both players play optimally against each other",
      "Only one player matters",
      "Moves are random"
    ],
    "correctAnswer": 1,
    "explanation": "Minimax assumes optimal play on both sides.",
    "tags": [
      "games",
      "minimax",
      "optimality"
    ]
  },
  {
    "id": "QZ-032",
    "questionId": "S3.3",
    "domain": "Games and Adversarial Search",
    "difficulty": "Builder",
    "prompt": "What is alpha-beta pruning, and why is it useful?",
    "options": [
      "It always finds the best move",
      "It prunes branches that cannot affect the decision; returns same answer as minimax with less work",
      "It rewrites the tree",
      "It uses no memory"
    ],
    "correctAnswer": 1,
    "explanation": "Good move-ordering can roughly square the effective search depth.",
    "tags": [
      "games",
      "alpha-beta",
      "pruning"
    ]
  },
  {
    "id": "QZ-033",
    "questionId": "S3.4",
    "domain": "Games and Adversarial Search",
    "difficulty": "Technical",
    "prompt": "What is the difference between minimax and expectimax?",
    "options": [
      "They are the same",
      "Minimax: adversarial opponent. Expectimax: replace min layers with expectation — for chance or non-deterministic opponents",
      "Expectimax is faster",
      "Expectimax is for cooperative games"
    ],
    "correctAnswer": 1,
    "explanation": "Backgammon and many card games need expectimax.",
    "tags": [
      "games",
      "expectimax",
      "stochastic"
    ]
  },
  {
    "id": "QZ-034",
    "questionId": "S4.1",
    "domain": "Constraint Satisfaction",
    "difficulty": "Builder",
    "prompt": "What is a constraint satisfaction problem, and why is the framing useful?",
    "options": [
      "It is just search",
      "A CSP defines variables, domains, constraints; solving is finding an assignment satisfying all constraints — and the framing exposes structure",
      "It is a type of database",
      "It is for image processing"
    ],
    "correctAnswer": 1,
    "explanation": "The framing exposes problem structure that generic search ignores.",
    "tags": [
      "csp",
      "framing",
      "structure"
    ]
  },
  {
    "id": "QZ-035",
    "questionId": "S4.2",
    "domain": "Constraint Satisfaction",
    "difficulty": "Builder",
    "prompt": "What is arc consistency, and what does AC-3 do?",
    "options": [
      "It is slow",
      "Arc-consistency: every value in a variable's domain has a supporting value; AC-3 prunes inconsistent values until consistent",
      "It rewrites variables",
      "It is only for binary CSPs"
    ],
    "correctAnswer": 1,
    "explanation": "Constraint propagation often solves a CSP outright or speeds up backtracking dramatically.",
    "tags": [
      "csp",
      "propagation",
      "ac3"
    ]
  },
  {
    "id": "QZ-036",
    "questionId": "L1.2",
    "domain": "Logic and Inference",
    "difficulty": "Beginner",
    "prompt": "What is a knowledge-based agent, in the book's sense?",
    "options": [
      "Just a database",
      "A KB-based agent stores sentences, ASKs the KB what to do given percepts, then TELLs the KB what it observed and did",
      "A neural network",
      "A search algorithm"
    ],
    "correctAnswer": 1,
    "explanation": "The KB is a model of the world; inference is how the agent uses it.",
    "tags": [
      "logic",
      "agents",
      "kb"
    ]
  },
  {
    "id": "QZ-037",
    "questionId": "L1.4",
    "domain": "Logic and Inference",
    "difficulty": "Builder",
    "prompt": "What is entailment, and how is it different from inference?",
    "options": [
      "Same thing",
      "Entailment: semantic relation (A entails B if B true in every model of A). Inference: procedural derivation of sentences from a KB",
      "Inference is faster",
      "Entailment is for neural networks"
    ],
    "correctAnswer": 1,
    "explanation": "Sound inference produces only entailed sentences; complete inference produces all entailed sentences.",
    "tags": [
      "logic",
      "entailment",
      "inference"
    ]
  },
  {
    "id": "QZ-038",
    "questionId": "L1.5",
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "prompt": "What is the difference between soundness and completeness in an inference procedure?",
    "options": [
      "Same property",
      "Sound: every derived sentence is entailed. Complete: every entailed sentence can be derived",
      "Soundness is harder",
      "Completeness is harder"
    ],
    "correctAnswer": 1,
    "explanation": "The ideal is sound and complete.",
    "tags": [
      "logic",
      "soundness",
      "completeness"
    ]
  },
  {
    "id": "QZ-039",
    "questionId": "L1.6",
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "prompt": "What is resolution, and why does it dominate logical inference?",
    "options": [
      "It is a planning algorithm",
      "Combines two clauses with complementary literals; refutation-complete in propositional and first-order logic",
      "It is just CNF",
      "It only works in propositional logic"
    ],
    "correctAnswer": 1,
    "explanation": "Most automated theorem provers use resolution as the core engine.",
    "tags": [
      "logic",
      "resolution",
      "theorem-proving"
    ]
  },
  {
    "id": "QZ-040",
    "questionId": "L1.9",
    "domain": "Logic and Inference",
    "difficulty": "Builder",
    "prompt": "What is the difference between propositional and first-order logic?",
    "options": [
      "First-order logic is faster",
      "First-order logic adds objects, relations and quantifiers; propositional logic has only boolean variables",
      "They are the same",
      "Propositional logic includes time"
    ],
    "correctAnswer": 1,
    "explanation": "Propositional logic has only boolean variables. First-order logic adds objects, relations, functions, and quantifiers (forall, exists). FOL can say \"every plane has wings\" or \"some flight is delayed\" — propositional logic cannot without explicit enumeration.",
    "tags": [
      "logic",
      "first-order",
      "expressiveness"
    ]
  },
  {
    "id": "QZ-041",
    "questionId": "L1.13",
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "prompt": "What is a Horn clause, and why does it matter?",
    "options": [
      "Any FOL clause",
      "A disjunction with at most one positive literal — equivalent to a rule with multiple premises and one conclusion",
      "It is for neural networks",
      "It is for propositional logic only"
    ],
    "correctAnswer": 1,
    "explanation": "Horn clauses make Prolog and many rule engines tractable.",
    "tags": [
      "logic",
      "horn",
      "prolog",
      "tractable"
    ]
  },
  {
    "id": "QZ-042",
    "questionId": "K1.2",
    "domain": "Knowledge Representation",
    "difficulty": "Builder",
    "prompt": "What is an ontology, and how does it differ from a database schema?",
    "options": [
      "They are the same",
      "Ontology specifies concepts, properties, relationships with formal semantics; schema describes how data is stored",
      "Schemas are smarter",
      "Ontologies are for images"
    ],
    "correctAnswer": 1,
    "explanation": "Ontologies support reasoning; schemas support storage.",
    "tags": [
      "kr",
      "ontology",
      "vocabulary"
    ]
  },
  {
    "id": "QZ-043",
    "questionId": "P1.1",
    "domain": "Planning",
    "difficulty": "Beginner",
    "prompt": "What is the planning problem, and how is it different from search?",
    "options": [
      "Same thing",
      "Planning is search with factored state/action representations — preconditions, effects — letting specialised algorithms exploit structure",
      "Planning is older",
      "Planning is for robots only"
    ],
    "correctAnswer": 1,
    "explanation": "The structure of planning problems lets reasoning beat generic search.",
    "tags": [
      "planning",
      "framing",
      "structure"
    ]
  },
  {
    "id": "QZ-044",
    "questionId": "P1.2",
    "domain": "Planning",
    "difficulty": "Builder",
    "prompt": "What is PDDL, and what does it standardise?",
    "options": [
      "A neural network",
      "Planning Domain Definition Language — standard format for domains and problems",
      "A planning algorithm",
      "A robot language"
    ],
    "correctAnswer": 1,
    "explanation": "PDDL lets planners be benchmarked and shared across research groups.",
    "tags": [
      "planning",
      "pddl"
    ]
  },
  {
    "id": "QZ-045",
    "questionId": "U1.2",
    "domain": "Uncertainty and Probability",
    "difficulty": "Builder",
    "prompt": "What is Bayes' rule, and why is it the core of probabilistic reasoning?",
    "options": [
      "P(A,B) = P(A)+P(B)",
      "P(H|E) = P(E|H) P(H) / P(E) — how to update belief given evidence",
      "Bayes is for trees",
      "None of the above"
    ],
    "correctAnswer": 1,
    "explanation": "The likelihood ratio drives the strength of the update.",
    "tags": [
      "probability",
      "bayes",
      "update"
    ]
  },
  {
    "id": "QZ-046",
    "questionId": "U1.4",
    "domain": "Uncertainty and Probability",
    "difficulty": "Builder",
    "prompt": "What does conditional independence mean, and why is it so useful?",
    "options": [
      "They are unrelated",
      "A and B are conditionally independent given C if P(A,B|C) = P(A|C) P(B|C); structural foundation of Bayes nets",
      "It is only for time series",
      "It cannot be tested"
    ],
    "correctAnswer": 1,
    "explanation": "Independence assumptions make probabilistic AI tractable.",
    "tags": [
      "probability",
      "independence",
      "bayes-nets"
    ]
  },
  {
    "id": "QZ-047",
    "questionId": "B1.1",
    "domain": "Bayesian Networks",
    "difficulty": "Beginner",
    "prompt": "What is a Bayesian network, and what does it buy you?",
    "options": [
      "A graph database",
      "A DAG where nodes are random variables and edges represent direct probabilistic dependence; encodes the joint compactly",
      "A neural network",
      "A type of CSP"
    ],
    "correctAnswer": 1,
    "explanation": "Bayes nets encode the joint in exponentially fewer parameters than the full joint.",
    "tags": [
      "bayes",
      "bayesian-network",
      "graphical-model"
    ]
  },
  {
    "id": "QZ-048",
    "questionId": "B1.2",
    "domain": "Bayesian Networks",
    "difficulty": "Builder",
    "prompt": "How does a Bayes net encode conditional independence?",
    "options": [
      "By copying it",
      "A node is conditionally independent of its non-descendants given its parents — local Markov property",
      "By naming it",
      "It does not encode it"
    ],
    "correctAnswer": 1,
    "explanation": "The graph structure encodes conditional independence directly.",
    "tags": [
      "bayes",
      "independence",
      "structure"
    ]
  },
  {
    "id": "QZ-049",
    "questionId": "T1.1",
    "domain": "Temporal Models",
    "difficulty": "Builder",
    "prompt": "How do temporal models extend Bayes nets to time?",
    "options": [
      "By drawing arrows",
      "Add a time index, repeat variables across time slices, add edges between slices for state transitions",
      "Time models are unrelated",
      "By using neural networks"
    ],
    "correctAnswer": 1,
    "explanation": "DBNs, HMMs and Kalman filters are all special cases of this scheme.",
    "tags": [
      "temporal",
      "dbn",
      "hmm"
    ]
  },
  {
    "id": "QZ-050",
    "questionId": "T1.2",
    "domain": "Temporal Models",
    "difficulty": "Builder",
    "prompt": "What is a hidden Markov model, and where does it apply?",
    "options": [
      "A neural network",
      "Hidden state evolves Markovically and emits observable outputs each step; canonical for speech, gene-finding, gestures",
      "A search algorithm",
      "A planning method"
    ],
    "correctAnswer": 1,
    "explanation": "HMMs powered speech recognition for decades.",
    "tags": [
      "temporal",
      "hmm",
      "speech"
    ]
  },
  {
    "id": "QZ-051",
    "questionId": "V1.1",
    "domain": "Utility and Decision Theory",
    "difficulty": "Beginner",
    "prompt": "Why is expected utility central to rational decision-making?",
    "options": [
      "They are the same",
      "Perception extracts features from sensor data; inference reasons about what those features mean for the world",
      "Inference is faster",
      "Perception is harder"
    ],
    "correctAnswer": 1,
    "explanation": "Modern multimodal models collapse the two; the distinction is still useful for design.",
    "tags": [
      "util",
      "expected-utility",
      "rationality"
    ]
  },
  {
    "id": "QZ-052",
    "questionId": "V1.2",
    "domain": "Utility and Decision Theory",
    "difficulty": "Builder",
    "prompt": "What are the von Neumann–Morgenstern axioms, and what do they prove?",
    "options": [
      "Four axioms about money",
      "Completeness, transitivity, continuity, independence — together they imply expected-utility maximisation",
      "One axiom about probability",
      "None"
    ],
    "correctAnswer": 1,
    "explanation": "The vNM theorem proves rationality implies expected-utility maximisation.",
    "tags": [
      "util",
      "vnm",
      "axioms"
    ]
  },
  {
    "id": "QZ-053",
    "questionId": "D1.1",
    "domain": "MDPs and POMDPs",
    "difficulty": "Builder",
    "prompt": "What is a Markov Decision Process, and why is it the canonical framework for sequential decisions under uncertainty?",
    "options": [
      "A graph database",
      "States, actions, transition probabilities, rewards — formalises sequential decisions under uncertainty",
      "A neural network",
      "A search problem"
    ],
    "correctAnswer": 1,
    "explanation": "MDPs are the canonical framework for RL and many control problems.",
    "tags": [
      "mdp",
      "framework",
      "rl"
    ]
  },
  {
    "id": "QZ-054",
    "questionId": "D1.2",
    "domain": "MDPs and POMDPs",
    "difficulty": "Builder",
    "prompt": "What is a policy, and what makes one optimal?",
    "options": [
      "Random play",
      "A function from states to actions (or distributions); optimal maximises expected discounted reward",
      "A neural network",
      "A reward function"
    ],
    "correctAnswer": 1,
    "explanation": "Bellman's equations characterise the optimal policy.",
    "tags": [
      "mdp",
      "policy",
      "bellman"
    ]
  },
  {
    "id": "QZ-055",
    "questionId": "D1.3",
    "domain": "MDPs and POMDPs",
    "difficulty": "Builder",
    "prompt": "What is the discount factor, and why is it used?",
    "options": [
      "How much you save",
      "Gamma in [0,1) weighting future rewards; ensures finite total reward, models impatience and uncertainty",
      "Inflation rate",
      "Random number"
    ],
    "correctAnswer": 1,
    "explanation": "Choice of gamma is a design decision with real impact on behavior.",
    "tags": [
      "mdp",
      "discount",
      "bellman"
    ]
  },
  {
    "id": "QZ-056",
    "questionId": "D1.4",
    "domain": "MDPs and POMDPs",
    "difficulty": "Technical",
    "prompt": "What is the Bellman equation, and why is it the core of MDP solutions?",
    "options": [
      "A loss function",
      "V(s) = max_a [R(s,a) + gamma sum_s' P(s'|s,a) V(s')] — recursion that characterises optimal value",
      "A planning algorithm",
      "A neural network"
    ],
    "correctAnswer": 1,
    "explanation": "Both value iteration and policy iteration work by iterating on this equation.",
    "tags": [
      "mdp",
      "bellman",
      "value-iteration"
    ]
  },
  {
    "id": "QZ-057",
    "questionId": "D1.6",
    "domain": "MDPs and POMDPs",
    "difficulty": "Technical",
    "prompt": "Why are POMDPs closer to real-world agency than MDPs?",
    "options": [
      "They are the same",
      "POMDP adds observations; agent must maintain a belief over states and act based on that",
      "POMDPs are easier",
      "MDPs are partial"
    ],
    "correctAnswer": 1,
    "explanation": "Real environments are rarely fully observable, so POMDPs are the realistic framework.",
    "tags": [
      "pomdp",
      "partial-observability",
      "realism"
    ]
  },
  {
    "id": "QZ-058",
    "questionId": "X1.1",
    "domain": "Machine Learning",
    "difficulty": "Beginner",
    "prompt": "What is the learning problem, and how does it relate to search?",
    "options": [
      "It is unrelated to search",
      "Learning is searching the hypothesis space for one that fits the data and generalises",
      "Learning is just memorisation",
      "Search is supervised learning"
    ],
    "correctAnswer": 1,
    "explanation": "The classical search frame maps cleanly to learning.",
    "tags": [
      "ml",
      "framing",
      "search"
    ]
  },
  {
    "id": "QZ-059",
    "questionId": "X1.2",
    "domain": "Machine Learning",
    "difficulty": "Beginner",
    "prompt": "What is the difference between supervised, unsupervised, and reinforcement learning?",
    "options": [
      "They are the same",
      "Supervised: labelled. Unsupervised: structure in unlabelled. Reinforcement: reward over actions",
      "RL is supervised",
      "Unsupervised needs labels"
    ],
    "correctAnswer": 1,
    "explanation": "Each paradigm needs different data and algorithms.",
    "tags": [
      "ml",
      "paradigms",
      "vocabulary"
    ]
  },
  {
    "id": "QZ-060",
    "questionId": "X1.3",
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "prompt": "Why does generalisation matter more than memorisation?",
    "options": [
      "Memorisation is better",
      "A system that memorises is useless on new data; generalisation is the whole point of ML",
      "They are the same",
      "Memorisation is needed"
    ],
    "correctAnswer": 1,
    "explanation": "Designing for generalisation is what separates ML from database lookup.",
    "tags": [
      "ml",
      "generalisation",
      "overfitting"
    ]
  },
  {
    "id": "QZ-061",
    "questionId": "X1.6",
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "prompt": "What is a decision tree, and why is it still useful in 2026?",
    "options": [
      "They are obsolete",
      "Decision trees partition input space; ensembles like XGBoost still beat neural networks on tabular data",
      "They are slow",
      "They are for vision only"
    ],
    "correctAnswer": 1,
    "explanation": "Trees remain interpretable and effective on structured data.",
    "tags": [
      "ml",
      "decision-tree",
      "xgboost"
    ]
  },
  {
    "id": "QZ-062",
    "questionId": "Y1.2",
    "domain": "Probabilistic Learning",
    "difficulty": "Technical",
    "prompt": "What is maximum likelihood estimation, and how is it different from Bayesian estimation?",
    "options": [
      "Same thing",
      "MLE: point estimate maximising data likelihood. Bayesian: distribution over parameters from prior + data",
      "MLE is Bayesian",
      "Bayesian is faster"
    ],
    "correctAnswer": 1,
    "explanation": "Bayesian wins when priors matter or you need uncertainty; MLE wins when data is plentiful.",
    "tags": [
      "problearn",
      "mle",
      "bayes"
    ]
  },
  {
    "id": "QZ-063",
    "questionId": "R1.1",
    "domain": "Reinforcement Learning",
    "difficulty": "Beginner",
    "prompt": "Why is reinforcement learning not just supervised learning?",
    "options": [
      "It is the same",
      "In RL, the agent gets only reward signals — sometimes delayed; must do credit assignment and exploration",
      "RL needs labels",
      "Supervised learning has rewards"
    ],
    "correctAnswer": 1,
    "explanation": "RL has reward, not labels; credit assignment is the hard part.",
    "tags": [
      "rl",
      "fundamentals",
      "credit-assignment"
    ]
  },
  {
    "id": "QZ-064",
    "questionId": "R1.2",
    "domain": "Reinforcement Learning",
    "difficulty": "Builder",
    "prompt": "What is the exploration-exploitation trade-off, and why is it hard?",
    "options": [
      "Pure exploitation",
      "Exploration tries new actions; exploitation chooses known-good ones — pure of either is suboptimal",
      "Pure exploration",
      "They are the same"
    ],
    "correctAnswer": 1,
    "explanation": "Methods like UCB, Thompson sampling, and entropy bonuses formalise the trade-off.",
    "tags": [
      "rl",
      "exploration",
      "exploitation"
    ]
  },
  {
    "id": "QZ-065",
    "questionId": "R1.3",
    "domain": "Reinforcement Learning",
    "difficulty": "Builder",
    "prompt": "What is Q-learning, and what does it learn?",
    "options": [
      "A neural network",
      "Learns Q(s,a) = expected total reward of action a in state s assuming optimal play thereafter",
      "Learns the model",
      "Learns the reward"
    ],
    "correctAnswer": 1,
    "explanation": "Once Q is accurate, the greedy policy is optimal.",
    "tags": [
      "rl",
      "q-learning",
      "bellman"
    ]
  },
  {
    "id": "QZ-066",
    "questionId": "R1.4",
    "domain": "Reinforcement Learning",
    "difficulty": "Technical",
    "prompt": "What is the difference between model-free and model-based RL?",
    "options": [
      "Same thing",
      "Model-free: learn Q/policy from experience. Model-based: learn P(s'|s,a), R, plan with it",
      "Model-free is wrong",
      "Model-based is illegal"
    ],
    "correctAnswer": 1,
    "explanation": "Model-based is sample-efficient; model-free is the workhorse of deep RL.",
    "tags": [
      "rl",
      "model-free",
      "model-based"
    ]
  },
  {
    "id": "QZ-067",
    "questionId": "N1.1",
    "domain": "Natural Language Processing",
    "difficulty": "Beginner",
    "prompt": "How does the book frame language, and how has that frame held up?",
    "options": [
      "It is unchanged",
      "2010 book treats NLP as a stack (morphology, syntax, semantics, pragmatics); modern NLP collapsed the stack with large pretrained models",
      "Modern NLP is symbolic",
      "LLMs use the same stack"
    ],
    "correctAnswer": 1,
    "explanation": "The vocabulary is still useful for debugging; the architecture is largely obsolete.",
    "tags": [
      "nlp",
      "framing",
      "modern"
    ]
  },
  {
    "id": "QZ-068",
    "questionId": "N2.1",
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "prompt": "What does grounded language understanding really require?",
    "options": [
      "Tokenisation",
      "Connecting language to perception (vision, sound, touch) and action — physical reference, not just symbols",
      "Just bigger models",
      "Better tokenisers"
    ],
    "correctAnswer": 1,
    "explanation": "Text-only models lack grounding; multimodal pretraining is the modern attempt at it.",
    "tags": [
      "lang",
      "grounding",
      "multimodal"
    ]
  },
  {
    "id": "QZ-069",
    "questionId": "R2.1",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Beginner",
    "prompt": "Why is robotics harder than chatbot AI?",
    "options": [
      "Robotics is easier",
      "Robots run in continuous, partially-observable, physical environments where small errors are large irreversible consequences",
      "Same difficulty",
      "Robotics is text-only"
    ],
    "correctAnswer": 1,
    "explanation": "Physics, latency, hardware, and safety make robotics harder than chat.",
    "tags": [
      "robo",
      "reality",
      "scope"
    ]
  },
  {
    "id": "QZ-070",
    "questionId": "R2.2",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Builder",
    "prompt": "What is sensor fusion, and why is it central to embodied AI?",
    "options": [
      "Picking one sensor",
      "Combining noisy data from multiple sensors into a unified state estimate — Kalman, particle, modern learned filters",
      "Avoiding sensors",
      "Adding more sensors"
    ],
    "correctAnswer": 1,
    "explanation": "Bad fusion is one of the most common causes of robot failure.",
    "tags": [
      "robo",
      "sensor-fusion",
      "perception"
    ]
  },
  {
    "id": "QZ-071",
    "questionId": "P2.1",
    "domain": "Philosophy of AI",
    "difficulty": "Builder",
    "prompt": "What does the Chinese Room argument claim, and what does it actually establish?",
    "options": [
      "That AI works",
      "That manual symbol manipulation without understanding can produce indistinguishable behavior; what it establishes is contested",
      "That LLMs are unconscious",
      "That computers cannot think"
    ],
    "correctAnswer": 1,
    "explanation": "Searle's argument establishes that some intuitions about understanding are not satisfied by symbol manipulation.",
    "tags": [
      "phil",
      "chinese-room",
      "searle"
    ]
  },
  {
    "id": "QZ-072",
    "questionId": "P2.2",
    "domain": "Philosophy of AI",
    "difficulty": "Technical",
    "prompt": "Can an AI be dangerous without being conscious?",
    "options": [
      "No",
      "Yes — risk comes from capability, autonomy, deployment surface, and goal-specification; not from subjective experience",
      "Only AGI is dangerous",
      "Consciousness is required"
    ],
    "correctAnswer": 1,
    "explanation": "A misaligned, capable system is dangerous regardless of inner experience.",
    "tags": [
      "phil",
      "safety",
      "consciousness"
    ]
  },
  {
    "id": "QZ-073",
    "questionId": "E1.1",
    "domain": "AI Ethics and Risk",
    "difficulty": "Builder",
    "prompt": "What ethical risks does the book identify for AI, and how have they aged?",
    "options": [
      "It missed everything",
      "The book flagged unemployment, accountability, autonomous weapons, surveillance — proved real; underweighted misinformation and the cognitive-labour transition",
      "It was unchanged",
      "Everything came true"
    ],
    "correctAnswer": 1,
    "explanation": "The framework holds; priorities have updated.",
    "tags": [
      "ethics",
      "risks",
      "history"
    ]
  },
  {
    "id": "QZ-074",
    "questionId": "A1.1",
    "domain": "AI Safety and Alignment",
    "difficulty": "Builder",
    "prompt": "What is the alignment problem, and why is it hard?",
    "options": [
      "Making AI faster",
      "Making powerful AI systems pursue goals that match what humans actually want",
      "Making AI cheaper",
      "Reducing latency"
    ],
    "correctAnswer": 1,
    "explanation": "Hard because we cannot fully specify what we want, our preferences change, and capable systems exploit specification flaws.",
    "tags": [
      "safe",
      "alignment",
      "fundamental"
    ]
  },
  {
    "id": "QZ-075",
    "questionId": "A1.2",
    "domain": "AI Safety and Alignment",
    "difficulty": "Technical",
    "prompt": "How does Russell's off-switch problem extend the book's view of agency?",
    "options": [
      "By making AI stronger",
      "Russell argues for agents that are uncertain about reward — preferring to allow correction because humans may know something they do not",
      "By turning AI off",
      "By using neural networks"
    ],
    "correctAnswer": 1,
    "explanation": "Uncertainty over the reward function is a design fix for the off-switch problem.",
    "tags": [
      "safe",
      "off-switch",
      "corrigibility"
    ]
  },
  {
    "id": "QZ-076",
    "questionId": "A1.3",
    "domain": "AI Safety and Alignment",
    "difficulty": "Technical",
    "prompt": "What is corrigibility, and why does it matter for AI safety?",
    "options": [
      "Making AI cheaper",
      "An AI that accepts correction and interruption from its designers",
      "An AI that hides errors",
      "An AI that is small"
    ],
    "correctAnswer": 1,
    "explanation": "Corrigibility is a design property; incorrigible AI actively resists oversight.",
    "tags": [
      "safe",
      "corrigibility",
      "oversight"
    ]
  },
  {
    "id": "QZ-077",
    "questionId": "A1.5",
    "domain": "AI Safety and Alignment",
    "difficulty": "Researcher",
    "prompt": "What is the difference between misuse risk and accident risk?",
    "options": [
      "Same thing",
      "Misuse: humans deliberately use AI for harm. Accident: AI causes harm without bad intent (misalignment, side effects, deception)",
      "Misuse is worse",
      "Accident is worse"
    ],
    "correctAnswer": 1,
    "explanation": "Both matter; the mitigations differ.",
    "tags": [
      "safe",
      "misuse",
      "accident"
    ]
  },
  {
    "id": "QZ-078",
    "questionId": "R2.3",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Technical",
    "prompt": "What does SLAM do, and why is it the workhorse of robot navigation?",
    "options": [
      "It is a planning algorithm with no sensors",
      "Simultaneous Localisation and Mapping — builds a map of an unknown environment while tracking the robot’s position in it",
      "It only works on grid worlds",
      "It is a type of CNN for vision"
    ],
    "correctAnswer": 1,
    "explanation": "SLAM lets a robot build a map while simultaneously tracking its position. Particle filters and visual SLAM are the canonical solutions; vacuum cleaners, AR headsets, drones, and autonomous vehicles all run SLAM.",
    "tags": [
      "robo",
      "slam",
      "navigation"
    ]
  }
];

/* ---------- 11. KB_INTERVIEW — verbal prompts ---------- */
var KB_INTERVIEW = [
  {
    "q": "Explain the rational-agent view of AI in two minutes.",
    "tag": "Foundations",
    "d": "You should hit: agent + percepts + actions + performance measure + environment, and why this frame is more useful than \"thinking like a human\"."
  },
  {
    "q": "Why is PEAS useful when designing AI systems?",
    "tag": "Agents",
    "d": "PEAS forces you to name success, the environment, the actions, and the senses — before you pick a model. Most failed AI products skip this step."
  },
  {
    "q": "Walk through how an AI customer-support copilot fits the agent framework.",
    "tag": "Agents",
    "d": "PEAS, environment classification, agent type, performance measure, evaluation. A practical bridge between the book and a real product."
  },
  {
    "q": "Why is A* important, and what does it guarantee?",
    "tag": "Search",
    "d": "Optimality and completeness under an admissible heuristic; consistency for optimal efficiency. Be precise about the heuristic conditions."
  },
  {
    "q": "When would you choose local search over systematic search?",
    "tag": "Search",
    "d": "When the state space is too large, memory is bounded, and \"good\" is enough. Hill climbing, simulated annealing, GAs with their trade-offs."
  },
  {
    "q": "Explain minimax and alpha-beta in adversarial games.",
    "tag": "Games",
    "d": "Cover the optimality assumption, the recursive structure, why alpha-beta returns the same answer as plain minimax with less work, and the role of move ordering."
  },
  {
    "q": "Why did MCTS replace alpha-beta in Go-style games?",
    "tag": "Games",
    "d": "Branching factor and the difficulty of writing good evaluation functions; MCTS uses rollouts as a learned evaluator; combine with neural priors and you get AlphaGo."
  },
  {
    "q": "Explain the difference between logic and probability in AI.",
    "tag": "Logic",
    "d": "Logic captures certain knowledge; probability captures graded belief. Reasons to use each. Where the book's book transition happens."
  },
  {
    "q": "What is the difference between soundness and completeness in inference?",
    "tag": "Logic",
    "d": "Procedural definitions and why each matters; ideally sound and complete; practical compromises."
  },
  {
    "q": "Why is FOL inference intractable in general, and how do we work around it?",
    "tag": "Logic",
    "d": "Semidecidability of FOL; restrict to Horn clauses, description logics, or Datalog for tractability; trade expressiveness for decidability."
  },
  {
    "q": "Explain Bayes' rule in one sentence and explain what it actually computes.",
    "tag": "Probability",
    "d": "P(H|E) = P(E|H)P(H)/P(E); the likelihood ratio is the strength of the update."
  },
  {
    "q": "What is conditional independence, and why is it the foundation of Bayes nets?",
    "tag": "Bayes",
    "d": "Factorisation of joint distributions, the local Markov property, exponential savings in parameters, d-separation as the structural test."
  },
  {
    "q": "Walk me through value iteration on a small MDP.",
    "tag": "MDPs",
    "d": "Bellman equation, iterate until convergence, extract policy by argmax. Make sure to define states, actions, transitions, rewards, and discount."
  },
  {
    "q": "Why is expected utility central to rational decision-making?",
    "tag": "Utility",
    "d": "vNM axioms; rationality entails EU maximisation; concave utility = risk aversion; value of information = how much an observation is worth."
  },
  {
    "q": "Why are POMDPs closer to real-world agency than MDPs?",
    "tag": "POMDPs",
    "d": "Partial observability; the agent must maintain a belief state; complexity of solving POMDPs exactly; modern agent failures."
  },
  {
    "q": "Explain the difference between supervised, unsupervised, and reinforcement learning.",
    "tag": "Learning",
    "d": "Labels vs structure vs reward; data needs; algorithm families; how they combine in modern systems."
  },
  {
    "q": "What is overfitting, and how do you detect it?",
    "tag": "ML",
    "d": "Train/validation/test splits, learning curves, classical regularisation; how the failure modes change with massive pretraining."
  },
  {
    "q": "Why is reinforcement learning not just supervised learning?",
    "tag": "RL",
    "d": "Sparse, delayed reward; credit assignment; exploration vs exploitation; the policy must affect the data it sees."
  },
  {
    "q": "What is Q-learning, and how does it connect to the Bellman equation?",
    "tag": "RL",
    "d": "Q values, the update rule, off-policy vs on-policy, the bridge from theory to deep RL."
  },
  {
    "q": "Explain RLHF and DPO and where modern reasoning models fit.",
    "tag": "Modern RL",
    "d": "RLHF as RL with a learned reward model; DPO as a simpler approximation; verifier-based RL for reasoning. Connect each to the book's framing."
  },
  {
    "q": "Why is robotics harder than chatbot AI?",
    "tag": "Robotics",
    "d": "Continuous, partially observable, irreversible physical environments; latency, hardware, data scarcity, safety, regulation, liability."
  },
  {
    "q": "What is SLAM, and where does it show up in real products?",
    "tag": "Robotics",
    "d": "Simultaneous localisation and mapping; particle filters and visual SLAM; vacuum cleaners, AR, drones, autonomous vehicles."
  },
  {
    "q": "Explain the Chinese Room argument and where you stand on it.",
    "tag": "Philosophy",
    "d": "Searle's thought experiment; what it actually establishes vs claims; functionalism as a counter; honest position."
  },
  {
    "q": "Can an AI be dangerous without being conscious?",
    "tag": "Safety",
    "d": "Yes; capability and consciousness are independent; the safety implications."
  },
  {
    "q": "Explain the alignment problem and Russell's off-switch solution.",
    "tag": "Safety",
    "d": "Why the alignment problem is hard; the off-switch problem; uncertainty-over-reward as a design fix; the bridge from AIMA to Human Compatible."
  },
  {
    "q": "What is reward hacking, and how does it scale with capability?",
    "tag": "Safety",
    "d": "Goodhart on metrics; capability makes hacking creative; mitigations."
  },
  {
    "q": "How would you evaluate an LLM-based agent in production?",
    "tag": "Modern AI",
    "d": "Task-completion, calibration, latency, cost-per-outcome, retry rate, escalation rate. Locked eval set + live telemetry."
  },
  {
    "q": "How does Russell &amp; Norvig's framing apply to modern foundation models?",
    "tag": "Modern AI",
    "d": "Foundation models as utility-style agents with learned components; POMDP nature; PEAS framing still applies."
  },
  {
    "q": "What of AIMA's 2010 view of AI held up, and what did not?",
    "tag": "Frontier",
    "d": "Framework held; method mix rotated; scale-of-pattern-learning underestimated; the alignment problem became more acute."
  },
  {
    "q": "What questions does AIMA leave for the next generation to answer?",
    "tag": "Frontier",
    "d": "Long-horizon agents; reliable belief-state tracking; verifiable alignment; global governance; integration of structured reasoning with deep learning."
  }
];

/* ---------- 12. KB_FOUNDER — product-design prompts ---------- */
var KB_FOUNDER = [
  {
    "q": "What is the PEAS description of your AI product?",
    "tag": "Design",
    "d": "Write it before you build. If you cannot, you do not yet have a product — you have a model."
  },
  {
    "q": "What is the performance measure your agent is actually optimising?",
    "tag": "Design",
    "d": "Most teams cannot answer this. The honest answer is usually a proxy. Wrong measures produce confidently-wrong systems."
  },
  {
    "q": "Is your AI system a model, a workflow, or an agent?",
    "tag": "Architecture",
    "d": "Three different things with different evaluation, governance, and risk. Picking the wrong frame is expensive."
  },
  {
    "q": "Where does uncertainty enter your product?",
    "tag": "Probability",
    "d": "Inputs, retrieval, model outputs, downstream actions. Locate it. Calibrate it. Display it where it matters."
  },
  {
    "q": "What should your AI ask before acting?",
    "tag": "Agents",
    "d": "Value of information is product strategy. Build the question that the AI asks before it acts on a high-stakes case."
  },
  {
    "q": "What are the hidden states your system must track?",
    "tag": "POMDPs",
    "d": "User intent, conversation context, system state, business rules. Make them explicit; build a belief state instead of stuffing tokens."
  },
  {
    "q": "What is the value of information in your workflow?",
    "tag": "Utility",
    "d": "Where is one more data point worth the cost? That is where your AI should pause and ask."
  },
  {
    "q": "What parts of your system should be learned, and what parts should be hard-coded?",
    "tag": "Architecture",
    "d": "Learning is for generalisation; hard-coding is for compliance, audit, and reliability. Pick deliberately."
  },
  {
    "q": "What actions should require human approval?",
    "tag": "Safety",
    "d": "Anything irreversible, high-stakes, or regulated. Build approval gates; do not rely on refusal at the language layer."
  },
  {
    "q": "What is your system's failure mode?",
    "tag": "Safety",
    "d": "Hallucination, mis-action, latency spikes, runaway cost, prompt injection, sensor drift. Name them; design the fallback for each."
  },
  {
    "q": "What is your golden eval set, and how locked is it?",
    "tag": "Evaluation",
    "d": "Without a locked eval set, \"did this change help?\" is a vibe. Lock it. Audit it. Update it deliberately."
  },
  {
    "q": "How do you measure cost per successful outcome, not per token?",
    "tag": "Economics",
    "d": "Tokens are easy to measure and misleading. Cost per successful business outcome is what runs the business."
  },
  {
    "q": "How will you know when your AI is doing more harm than good for a user segment?",
    "tag": "Ethics",
    "d": "Build the dashboard before you launch. Without it, you will learn from a public failure."
  },
  {
    "q": "Where is your AI replacing tasks vs replacing humans?",
    "tag": "Jobs",
    "d": "Honest answer affects pricing, regulatory exposure, and labour relations. Pretending it is augmentation when it is automation is short-sighted."
  },
  {
    "q": "What is the durable moat for your AI product?",
    "tag": "Strategy",
    "d": "Model commodity; workflow, data, trust, distribution. Pick where you build the moat — and build there."
  },
  {
    "q": "When would you walk away from frontier models and self-host?",
    "tag": "Strategy",
    "d": "Volume, latency, data residency, fine-tuning depth, regulatory bind. Have an explicit decision tree."
  },
  {
    "q": "What evidence convinces a regulated buyer that your AI is safe?",
    "tag": "Trust",
    "d": "Evaluation results, audit logs, incident response, escalation rates, human review processes, certifications. Build the evidence stack early."
  },
  {
    "q": "What would make this product painful to remove from a customer?",
    "tag": "Retention",
    "d": "Embedded workflow, accumulated context, integrations, network effects. Stickiness is built deliberately."
  },
  {
    "q": "Where in your stack does Russell &amp; Norvig's book directly help your engineers?",
    "tag": "Engineering",
    "d": "PEAS for product design, decision theory for action selection, POMDPs for state tracking, eval-set discipline. Make the reading list mandatory."
  },
  {
    "q": "What is your \"off-switch story\" for your AI agent?",
    "tag": "Safety",
    "d": "How do you stop it cleanly? How do you reverse what it did? Without an answer, do not give it more autonomy."
  },
  {
    "q": "How is your AI's utility function specified, and by whom?",
    "tag": "Alignment",
    "d": "Who decides what counts as success? Is it the user, the buyer, the platform, the model lab? Be explicit; the alignment of all of these is your operating risk."
  },
  {
    "q": "What is your system's POMDP, in three sentences?",
    "tag": "Modelling",
    "d": "State, observation, action, reward. Even if you do not solve it as a POMDP, naming it forces clarity."
  },
  {
    "q": "What new product becomes possible because intelligence got cheap?",
    "tag": "Strategy",
    "d": "Most startups answer \"AI for X\" badly. The better question: which workflow only becomes viable when cognition is metered cheaply on demand."
  },
  {
    "q": "What was your AI product's most embarrassing failure last quarter?",
    "tag": "Operations",
    "d": "If you cannot answer this honestly, you are not running observability. Run it."
  },
  {
    "q": "What is the smallest version of your product that still teaches the user something?",
    "tag": "Product",
    "d": "Cheap intelligence is abundant; learning experiences are scarce. Build the minimum viable insight, not the maximum viable feature."
  }
];

/* ---------- 13. KB_RESEARCHER — research prompts ---------- */
var KB_RESEARCHER = [
  {
    "q": "Is intelligence mainly search, learning, reasoning, or action?",
    "tag": "Foundations",
    "d": "A book-spanning question. Modern systems require all four; the architecture debate is about the right composition."
  },
  {
    "q": "What is the relationship between belief state and memory in modern agents?",
    "tag": "POMDPs",
    "d": "Belief state in AIMA is a probability distribution; LLM memory is a token-level approximation. The gap is one of the most active research frontiers."
  },
  {
    "q": "Can LLMs maintain true state or only simulate it in text?",
    "tag": "Agents",
    "d": "Empirically they simulate it imperfectly; the long-horizon failure modes trace back to this."
  },
  {
    "q": "Are modern AI agents closer to MDPs or POMDPs in practice?",
    "tag": "POMDPs",
    "d": "POMDPs without proper belief tracking. The implicit POMDP framing is more honest than the implicit MDP one."
  },
  {
    "q": "Can alignment be framed as utility design plus corrigibility?",
    "tag": "Alignment",
    "d": "Two interlocking design problems. Decompose; treat separately; recompose at the end."
  },
  {
    "q": "What does \"sound inference\" mean for LLMs?",
    "tag": "Logic",
    "d": "LLMs are not sound inference engines. They are flexible pattern engines. The right architectural pairing is open."
  },
  {
    "q": "Are hybrid neuro-symbolic architectures necessary for general intelligence?",
    "tag": "Architecture",
    "d": "Plausible; under-explored at scale; many recent results suggest hybrids beat pure approaches on specific tasks."
  },
  {
    "q": "What would a complete intelligent-agent architecture require?",
    "tag": "Architecture",
    "d": "Perception, memory, reasoning, planning, action, learning, evaluation, alignment, corrigibility. Most current systems have 3-5 of these wired roughly."
  },
  {
    "q": "What is the role of explicit world models in modern AI systems?",
    "tag": "World models",
    "d": "Increasingly central. Implicit world models from pretraining are powerful but lossy. Explicit world models support planning and counterfactual reasoning."
  },
  {
    "q": "How do you train an agent to know what it does not know?",
    "tag": "Calibration",
    "d": "Calibration is not just useful; it is the precondition for safe autonomy. Methods: ensembles, Bayesian post-hoc, RL with abstention."
  },
  {
    "q": "Can interpretability scale to frontier models?",
    "tag": "Interpretability",
    "d": "A live research question. Mechanistic interpretability, sparse autoencoders, and circuit analysis are progressing; whether they scale to frontier is unknown."
  },
  {
    "q": "What is the right benchmark for long-horizon agents?",
    "tag": "Evaluation",
    "d": "No accepted answer. The community is in the \"build a benchmark\" stage; what counts as solved is contested."
  },
  {
    "q": "How should reward functions be learned, not specified?",
    "tag": "Alignment",
    "d": "Inverse reinforcement learning, preference learning, RLHF/DPO, debate-based methods. Each has known failure modes."
  },
  {
    "q": "Can a model that hallucinates be a basis for verified reasoning systems?",
    "tag": "Architecture",
    "d": "Yes, by sandwiching it between verifiers (code execution, theorem provers, retrieval, classical planners). Open question: how much capability you keep."
  },
  {
    "q": "What evidence would convince you that scaling alone has stopped working?",
    "tag": "Forecasting",
    "d": "Repeatable, well-measured plateaus on hard contamination-free benchmarks; flattening cost-per-capability; falling enterprise adoption tied to capability. None convincingly visible today."
  },
  {
    "q": "What is the right way to compose multiple AI systems with different reliability?",
    "tag": "Engineering",
    "d": "Verifier sandwiches, narrow tools, conservative fallbacks, structured intermediate state. The architecture is empirical; principles are still emerging."
  },
  {
    "q": "What should we measure about an AI system besides accuracy?",
    "tag": "Evaluation",
    "d": "Calibration, robustness, honesty, helpfulness, latency, cost, fairness across protected groups, deception rate. Different products weight differently."
  },
  {
    "q": "How will the field handle deceptive alignment if and when it appears?",
    "tag": "Safety",
    "d": "Open question. Plausible: interpretability + scaled red-teaming + behavioral testing + capability-tiered access controls. Nothing is yet sufficient."
  },
  {
    "q": "What is the most useful piece of the book for an ML researcher in 2026?",
    "tag": "Modern AI",
    "d": "The agent framework, probability and decision theory, MDP/POMDP formalism, the explicit framing of the alignment problem. The methods chapters are largely outdated; the conceptual chapters are not."
  },
  {
    "q": "Will symbolic AI come back, and in what form?",
    "tag": "Frontier",
    "d": "In hybrid form, plausibly: verifiers, tools, planners, ontologies attached to learned models. As a pure paradigm — unlikely."
  },
  {
    "q": "What is the right way to think about emergent capabilities?",
    "tag": "Research",
    "d": "Disentangle real capability jumps from evaluation artefacts. Both happen. Better benchmarks and analysis are how the literature is improving."
  },
  {
    "q": "What would a complete theory of AI safety even look like?",
    "tag": "Safety",
    "d": "Probably impossible in closed form. More likely: a stack of overlapping mitigations — interpretability, evaluation, oversight, capability control, structural alignment — each tied to a clear threat model."
  },
  {
    "q": "Which old AI techniques are due for a revival now that compute is cheap?",
    "tag": "History",
    "d": "Search at scale, MCTS with neural priors, planning with learned heuristics, model-based RL, classical knowledge representation as guard-rails. Several already returning."
  },
  {
    "q": "What does Russell's \"uncertainty over reward\" framework rule in and out?",
    "tag": "Alignment",
    "d": "In: agents that defer, ask, allow correction. Out: confidently-optimising fixed-reward systems. The frame is normative; the engineering remains open."
  },
  {
    "q": "What is the most under-rated chapter of AIMA in 2026?",
    "tag": "Reading",
    "d": "Decision theory (Ch 16) and POMDPs (Ch 17). They quietly underpin most current safety and agent-research debates."
  }
];

/* ---------- 14. KB_SYNTHESIS — book-level synthesis ---------- */
var KB_SYNTHESIS = {
  "coreThesis": "AI is best understood as the design of intelligent agents that perceive, reason, learn, decide, and act under uncertainty.",
  "whatThisBookTeaches": "The book teaches the classical foundations of AI: agents, search, logic, planning, probability, decision theory, learning, NLP, perception, robotics, ethics, and philosophical questions.",
  "whereItFitsInAI": "This is the foundation layer of the AI Knowledge Bank. Later books on deep learning, LLMs, AI engineering, alignment, economics, and geopolitics should connect back to these agent-based foundations.",
  "strongestIdeas": [
    "AI as rational agency",
    "PEAS task specification",
    "Search as problem solving",
    "Logic as explicit reasoning",
    "Probability as reasoning under uncertainty",
    "Utility as the bridge from belief to action",
    "Learning as improvement from experience",
    "Robotics as embodied agency",
    "Safety as a problem of objectives, control, and future consequences"
  ],
  "limitations": [
    "The 3rd edition predates modern Transformers, large language models, diffusion models, current frontier model scaling, RLHF, RAG, and modern AI agents.",
    "Deep learning is covered only in earlier neural-network form, not in the modern foundation-model era.",
    "It gives the classical backbone, but not the full modern AI stack of chips, data centres, LLM scaling, AI geopolitics, and production AI engineering."
  ],
  "modernRelevance": [
    "The rational-agent framing is still central to modern AI agents.",
    "Search, planning, state tracking, utility, uncertainty, and action are becoming important again in tool-using AI systems.",
    "The book’s distinction between capability, rationality, uncertainty, learning, and risk is essential for understanding modern AI."
  ],
  "questionsThisBookRaises": [
    "Is an LLM a model, an agent, or a component inside an agent?",
    "Can rational agency exist without consciousness?",
    "Can alignment be framed as utility design plus control?",
    "What happens when AI systems gain more autonomy in real environments?",
    "Is modern AI moving back toward the agent architecture AIMA described?"
  ]
};
