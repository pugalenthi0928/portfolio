/* ============================================
   AI KNOWLEDGE BANK — Data (Book 001 full expansion)
   Book 001 source: Artificial Intelligence: A Modern Approach (3rd ed)
   by Stuart Russell and Peter Norvig.
   IDs follow the spec format: aima-vXX-q### / -f### / -quiz###.
   ============================================ */

var KB_BOOKS = [
  {
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
  }
];

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

var KB_SOURCE_NOTE = "Book 001 source: Artificial Intelligence: A Modern Approach, 3rd Edition, Stuart Russell and Peter Norvig. Pearson, 2010. Questions are paraphrased and organised for learning; the original framing belongs to the authors.";

var KB_BANK = [
  {
    "id": "aima-v01-q001",
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
    "id": "aima-v01-q002",
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
    "id": "aima-v01-q003",
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
    "id": "aima-v01-q004",
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
    "id": "aima-v01-q005",
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
    "id": "aima-v01-q006",
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
    "id": "aima-v01-q007",
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
    "id": "aima-v01-q008",
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
    "id": "aima-v01-q009",
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
    "id": "aima-v01-q010",
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
    "id": "aima-v01-q011",
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
    "id": "aima-v01-q012",
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
    "id": "aima-v01-q013",
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
    "id": "aima-v01-q014",
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
    "id": "aima-v01-q015",
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
    "id": "aima-v01-q016",
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
    "id": "aima-v01-q017",
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
    "id": "aima-v01-q018",
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
    "id": "aima-v01-q019",
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
    "id": "aima-v01-q020",
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
    "id": "aima-v01-q021",
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
    "id": "aima-v01-q022",
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
    "id": "aima-v01-q023",
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
    "id": "aima-v01-q024",
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
    "id": "aima-v01-q025",
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
    "id": "aima-v01-q026",
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
    "id": "aima-v01-q027",
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
    "id": "aima-v01-q028",
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
    "id": "aima-v01-q029",
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
    "id": "aima-v01-q030",
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
    "id": "aima-v01-q031",
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
    "id": "aima-v01-q032",
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
    "id": "aima-v01-q033",
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
    "id": "aima-v01-q034",
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
    "id": "aima-v01-q035",
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
    "id": "aima-v01-q036",
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
    "id": "aima-v01-q037",
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
    "id": "aima-v01-q038",
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
    "id": "aima-v01-q039",
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
    "id": "aima-v01-q040",
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
    "id": "aima-v01-q041",
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
    "id": "aima-v02-q001",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 3,
    "domain": "Search and Problem Solving",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "What is the difference between problem formulation and goal formulation?",
    "whyItMatters": "Most failed AI projects skip one of the two.",
    "shortAnswer": "Goal formulation picks what we want (the end state). Problem formulation picks the abstraction: states, actions, transitions and cost. The same goal can be solved by very different problem formulations.",
    "deepExplanation": "",
    "example": "Goal: get to the airport. Problem formulation could be road network with intersections as states, or door-to-door with vehicle states, or a coarse city-block grid — each suggests different algorithms.",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "search",
      "formulation",
      "problem-spec"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v02-q002",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 3,
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What is the difference between a search tree and a state space?",
    "whyItMatters": "Confusing these is one of the most common mistakes when implementing search.",
    "shortAnswer": "The state space is the set of reachable world configurations. The search tree is what the algorithm builds while exploring — multiple tree nodes can correspond to the same state when paths loop or merge.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "Treating tree size and state space size as the same; the tree is usually much larger because of repeated states.",
    "modernAIConnection": "",
    "tags": [
      "search",
      "state-space",
      "tree"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v02-q003",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 3,
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What is the difference between the frontier and the explored set?",
    "whyItMatters": "Graph search depends on tracking both correctly.",
    "shortAnswer": "The frontier holds nodes generated but not yet expanded. The explored set holds nodes whose successors have already been computed. Graph search refuses to add a state already in the explored set; tree search does not have an explored set.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "search",
      "frontier",
      "explored"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v02-q004",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 3,
    "domain": "Search and Problem Solving",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "What does it mean for a search algorithm to be complete?",
    "whyItMatters": "Completeness decides whether an algorithm can be trusted to find solutions when they exist.",
    "shortAnswer": "A search algorithm is complete if it is guaranteed to find a solution when one exists. BFS is complete for finite branching factors; DFS is not complete on infinite-depth trees without a cutoff.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "search",
      "completeness",
      "correctness"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v02-q005",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 3,
    "domain": "Search and Problem Solving",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "What does optimality mean for a search algorithm?",
    "whyItMatters": "Optimality and completeness are independent — an algorithm can be one without the other.",
    "shortAnswer": "A search algorithm is optimal if it returns the lowest-cost solution among all solutions. Uniform-cost search is optimal whenever step costs are non-negative; BFS is optimal only when costs are equal.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "search",
      "optimality",
      "cost"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v02-q006",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 3,
    "domain": "Search and Problem Solving",
    "difficulty": "Technical",
    "type": "Mathematical",
    "question": "What does O(b^d) tell you about a search algorithm?",
    "whyItMatters": "Exponential complexity is the deep reason heuristics matter.",
    "shortAnswer": "b is the branching factor, d is the solution depth. BFS, DFS, and IDS all run in O(b^d) in the worst case. Heuristics work by reducing the effective branching factor, not by changing this bound asymptotically.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "search",
      "complexity",
      "heuristic"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v02-q007",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 3,
    "domain": "Search and Problem Solving",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is bidirectional search, and when does it pay off?",
    "whyItMatters": "A clean algorithmic trick that halves the exponent.",
    "shortAnswer": "Bidirectional search runs two simultaneous searches — one from the start, one from the goal — and stops when they meet. The complexity drops from O(b^d) to O(b^(d/2)). It works only when the goal state is known and the reverse transition is computable.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "search",
      "bidirectional",
      "complexity"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v02-q008",
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
    "id": "aima-v02-q009",
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
    "id": "aima-v02-q010",
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
    "id": "aima-v02-q011",
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
    "id": "aima-v02-q012",
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
    "id": "aima-v02-q013",
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
    "id": "aima-v02-q014",
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
    "id": "aima-v02-q015",
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
    "id": "aima-v02-q016",
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
    "id": "aima-v02-q017",
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
    "id": "aima-v02-q018",
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
    "id": "aima-v02-q019",
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
    "id": "aima-v02-q020",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 4,
    "domain": "Search and Problem Solving",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is the difference between greedy best-first search and A*?",
    "whyItMatters": "A common misunderstanding — greedy is fast but not optimal.",
    "shortAnswer": "Greedy best-first expands the node minimising h(n) — the heuristic estimate alone. A* expands minimising f(n) = g(n) + h(n) — actual cost plus heuristic estimate. A* is optimal with an admissible heuristic; greedy is not.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "Thinking greedy search is \"just A* with g=0\" — it is, but the consequence is loss of optimality.",
    "modernAIConnection": "",
    "tags": [
      "search",
      "greedy",
      "a-star"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v02-q021",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 4,
    "domain": "Search and Problem Solving",
    "difficulty": "Researcher",
    "type": "Mathematical",
    "question": "Can two different admissible heuristics produce different A* behaviour?",
    "whyItMatters": "Yes — heuristic dominance matters even within \"optimal\".",
    "shortAnswer": "Yes. If h2 dominates h1 (h2(n) >= h1(n) >= 0 for all n, both admissible), A* with h2 expands no more nodes than A* with h1. So tighter admissible heuristics are strictly better in practice while both remain optimal.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "search",
      "dominance",
      "a-star"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v02-q022",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 4,
    "domain": "Search and Problem Solving",
    "difficulty": "Researcher",
    "type": "Technical",
    "question": "What is the local-minima problem in hill climbing, and how do simulated annealing and random restarts handle it?",
    "whyItMatters": "Local optima are why naive hill climbing fails on most real problems.",
    "shortAnswer": "Hill climbing accepts only improvements, so it gets stuck at any local maximum. Simulated annealing sometimes accepts worse neighbours, with probability decreasing over time, so it can escape. Random restarts run hill climbing from many starts and keep the best result.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "optimisation",
      "local-minima",
      "simulated-annealing"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v02-q023",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 4,
    "domain": "Search and Problem Solving",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What is a belief state, and why does partial observability force you to search in belief space?",
    "whyItMatters": "A subtle but important shift in what \"state\" means.",
    "shortAnswer": "A belief state is the set of physical states the agent thinks it might be in. Under partial observability, the agent does not know its true state — it must reason about which states are consistent with its percepts. Search then runs over belief states, not physical states.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "search",
      "belief-state",
      "partial-observability"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v02-q024",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 4,
    "domain": "Search and Problem Solving",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is online search, and why is it the only realistic option in unknown environments?",
    "whyItMatters": "Offline search assumes you know the model; many real problems do not.",
    "shortAnswer": "Online search interleaves planning and execution — the agent acts, observes, and updates its plan. In unknown or only partially-known environments, you cannot plan a complete solution in advance; online search trades optimality for being able to act at all.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Real robots and tool-using LLM agents both run a form of online search whether or not they call it that.",
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
    "id": "aima-v02-q025",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 4,
    "domain": "Search and Problem Solving",
    "difficulty": "Frontier",
    "type": "Mind-Bending",
    "question": "Does modern LLM-style reasoning re-discover classical search inside the language layer?",
    "whyItMatters": "A useful reframing of \"chain of thought\" and reasoning models.",
    "shortAnswer": "In many cases, yes. Chain-of-thought sampling and tree-of-thoughts are forms of search over partial reasoning traces. Beam search, MCTS-style verifiers, and self-consistency voting echo the classical search literature. The substrate is different; the algorithmic shape is familiar.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Modern reasoning models do search; the open question is whether learned search is more efficient than the hand-engineered search algorithms of the 1990s.",
    "tags": [
      "search",
      "modern",
      "llm"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v02-q026",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 4,
    "domain": "Search and Problem Solving",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "When is \"just call a SAT/CSP solver\" the right answer in an AI system?",
    "whyItMatters": "Many real problems are CSPs in disguise and dwarf the LLM that talks about them.",
    "shortAnswer": "When the problem has clear discrete variables and constraints (scheduling, configuration, verification), SAT/CSP/MIP solvers crush both hand-written code and LLMs. The right architecture is often \"LLM extracts the problem from natural language, solver solves it, LLM explains the answer\".",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Tool-using LLM agents that call CSP solvers, SMT solvers, or MIP solvers as external tools beat pure-LLM reasoning on these problem classes.",
    "tags": [
      "csp",
      "tool-use",
      "product"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": true,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v02-q027",
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
    "id": "aima-v02-q028",
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
    "id": "aima-v02-q029",
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
    "id": "aima-v02-q030",
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
    "id": "aima-v02-q031",
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
    "id": "aima-v02-q032",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 5,
    "domain": "Games and Adversarial Search",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What is the role of evaluation functions in game-playing agents, and when do they hurt instead of help?",
    "whyItMatters": "A bad evaluation function lets a search confidently pick the wrong move.",
    "shortAnswer": "An evaluation function approximates the value of non-terminal positions. It is essential because games rarely play to depth in time. Bad evaluation functions can systematically prefer the wrong feature — e.g. material in chess without considering position — and the deeper the search, the more confident the wrong answer.",
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
    "id": "aima-v02-q033",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 5,
    "domain": "Games and Adversarial Search",
    "difficulty": "Researcher",
    "type": "Technical",
    "question": "What is the quiescence-search problem, and why does it matter for chess and Go?",
    "whyItMatters": "Without quiescence, a fixed-depth search misses tactical answers just past the horizon.",
    "shortAnswer": "A fixed-depth search may stop in the middle of a tactical exchange and apply an evaluation that misses the consequence. Quiescence search extends the depth at \"noisy\" positions (captures, checks) until the position stabilises. Without it, a search can confidently pick a losing move.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "games",
      "quiescence",
      "horizon-effect"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v02-q034",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 5,
    "domain": "Games and Adversarial Search",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What changes when the game tree has chance nodes?",
    "whyItMatters": "Many real-world \"games\" are not chess — they include dice, hidden cards, or noisy sensors.",
    "shortAnswer": "Chance nodes replace min-or-max layers with an expectation over outcomes weighted by probability. The algorithm is called expectiminimax. Heuristics must be calibrated to value, not just rank — because expected utility is sensitive to value scale.",
    "deepExplanation": "",
    "example": "Backgammon and many card games need expectiminimax; chess and Go do not.",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "games",
      "expectiminimax",
      "stochastic"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v02-q035",
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
    "id": "aima-v02-q036",
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
    "id": "aima-v02-q037",
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
    "id": "aima-v02-q038",
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
    "id": "aima-v02-q039",
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
    "id": "aima-v02-q040",
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
    "id": "aima-v02-q041",
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
    "id": "aima-v02-q042",
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
    "id": "aima-v02-q043",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 6,
    "domain": "Constraint Satisfaction",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "Why does CSP structure let backtracking outperform generic search on the same problem?",
    "whyItMatters": "The structural shift from \"states\" to \"variables with constraints\" is the whole point of CSPs.",
    "shortAnswer": "CSP backtracking assigns one variable at a time and prunes immediately when any constraint is violated. Generic search treats the state as a black box and has to discover the constraint structure through failed paths. The CSP framing exposes structure the algorithm can exploit directly.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "csp",
      "backtracking",
      "structure"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v02-q044",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 6,
    "domain": "Constraint Satisfaction",
    "difficulty": "Researcher",
    "type": "Technical",
    "question": "What is the difference between arc consistency and path consistency?",
    "whyItMatters": "Stronger consistency conditions prune more but cost more.",
    "shortAnswer": "Arc consistency ensures that for every value in a variable's domain, there is a consistent value in each adjacent variable. Path consistency ensures the same for every pair of variables connected through any third variable. AC-3 enforces arc consistency in polynomial time; path consistency is more expensive and used selectively.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "csp",
      "arc-consistency",
      "path-consistency"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v02-q045",
    "bookId": "001",
    "phaseId": "aima-v02",
    "chapter": 6,
    "domain": "Constraint Satisfaction",
    "difficulty": "Researcher",
    "type": "Technical",
    "question": "What is the min-conflicts heuristic, and why does it work so well empirically?",
    "whyItMatters": "A trivially simple local-search heuristic that solves million-variable CSPs.",
    "shortAnswer": "Min-conflicts picks the value that violates the fewest constraints for the variable being reassigned. It is greedy but with random tie-breaking it solves the N-queens problem at N=1,000,000 in milliseconds. It works because real CSPs have many near-optimal solutions densely scattered in the search space.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "csp",
      "min-conflicts",
      "local-search"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v02-q046",
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
    "id": "aima-v02-q047",
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
    "id": "aima-v02-q048",
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
    "id": "aima-v02-q049",
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
    "id": "aima-v02-q050",
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
    "id": "aima-v02-q051",
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
    "id": "aima-v03-q001",
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
    "id": "aima-v03-q002",
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
    "id": "aima-v03-q003",
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
    "id": "aima-v03-q004",
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
    "id": "aima-v03-q005",
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
    "id": "aima-v03-q006",
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
    "id": "aima-v03-q007",
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
    "id": "aima-v03-q008",
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
    "id": "aima-v03-q009",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 7,
    "domain": "Logic and Inference",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is the difference between syntax and semantics in logic?",
    "whyItMatters": "The single most-confused distinction in introductory logic.",
    "shortAnswer": "Syntax defines which strings of symbols are well-formed sentences. Semantics defines what those sentences mean — which truth values they take in which models. A KB can be syntactically correct and semantically wrong.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "logic",
      "syntax",
      "semantics"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v03-q010",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 7,
    "domain": "Logic and Inference",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is a model in formal logic?",
    "whyItMatters": "Models ground the meaning of sentences.",
    "shortAnswer": "A model is a possible state of affairs — a specific assignment of values to symbols that makes sentences either true or false. Entailment is defined over models: A entails B if B is true in every model where A is true.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "logic",
      "model",
      "semantics"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v03-q011",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 7,
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "type": "Mathematical",
    "question": "How does model checking differ from theorem proving?",
    "whyItMatters": "Two distinct strategies for the same inference problem.",
    "shortAnswer": "Model checking enumerates all possible models and checks whether the goal is true in each one consistent with the KB. Theorem proving manipulates sentences syntactically using inference rules. Both can establish entailment; their costs and applicability differ.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "logic",
      "model-checking",
      "theorem-proving"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v03-q012",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 7,
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is the difference between TELL and ASK in a knowledge-based agent?",
    "whyItMatters": "A clean abstraction for how agents interact with knowledge.",
    "shortAnswer": "TELL adds a sentence to the KB; ASK queries whether a sentence is entailed by the KB. The agent loop is: percept → TELL the KB, ASK for the next action, TELL what action was taken. The KB is the unit of abstraction.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "logic",
      "kb",
      "agent"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v03-q013",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 7,
    "domain": "Logic and Inference",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What are logical connectives, and which two are sufficient for all of propositional logic?",
    "whyItMatters": "A surprising completeness result.",
    "shortAnswer": "The classical connectives are AND, OR, NOT, IMPLIES, IFF. NAND alone is sufficient — every propositional formula can be expressed using just NAND. So is NOR. This is why NAND gates can implement any digital circuit.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "logic",
      "connectives",
      "completeness"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v03-q014",
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
    "id": "aima-v03-q015",
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
    "id": "aima-v03-q016",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 8,
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is universal instantiation, and why does it require a fresh variable?",
    "whyItMatters": "A subtle rule that breaks if you skip it.",
    "shortAnswer": "Universal instantiation derives a specific instance of a universally quantified sentence by substituting any ground term for the variable. It requires the term to be free (no name clashes) — otherwise you would conflate different individuals and produce unsound conclusions.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "logic",
      "quantifier",
      "instantiation"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v03-q017",
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
    "id": "aima-v03-q018",
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
    "id": "aima-v03-q019",
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
    "id": "aima-v03-q020",
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
    "id": "aima-v03-q021",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 9,
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is generalised Modus Ponens, and why is it the basis of FOL forward chaining?",
    "whyItMatters": "Lifts a propositional rule into FOL with variables.",
    "shortAnswer": "Generalised Modus Ponens combines unification with classical Modus Ponens: given facts p1, p2... and a rule p1' ∧ p2' ⇒ q, if there is a substitution θ such that all pi = pi'θ, then qθ is derivable. This lets forward chaining work over rules with variables.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "logic",
      "modus-ponens",
      "forward-chaining"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v03-q022",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 9,
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "type": "Mathematical",
    "question": "Why is unification both essential and subtle?",
    "whyItMatters": "Unification is the engine of FOL inference and a source of many bugs.",
    "shortAnswer": "Unification finds a substitution that makes two expressions identical. It is essential because FOL rules contain variables; without unification you cannot match rules to facts. It is subtle because the occurs check (a variable cannot unify with a term containing itself) is often omitted, allowing unsound proofs.",
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
    "isResearchQuestion": true
  },
  {
    "id": "aima-v03-q023",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 9,
    "domain": "Logic and Inference",
    "difficulty": "Researcher",
    "type": "Mathematical",
    "question": "What is resolution refutation, and why is it complete?",
    "whyItMatters": "A single inference rule that handles all of FOL.",
    "shortAnswer": "Resolution combines two clauses with complementary literals to produce a new clause. To prove KB entails α, you add ¬α to the KB and apply resolution until you derive the empty clause (a contradiction). Resolution is refutation-complete for FOL — any entailed sentence can be proved this way.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "logic",
      "resolution",
      "completeness"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v03-q024",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 9,
    "domain": "Logic and Inference",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What are Horn clauses and why do they make Prolog tractable?",
    "whyItMatters": "The reason Prolog and many rule engines actually run in polynomial time.",
    "shortAnswer": "A Horn clause has at most one positive literal — equivalently, a rule with a single conclusion. Inference over Horn clauses is decidable in polynomial time via forward or backward chaining. Full FOL is only semidecidable; restricting to Horn clauses is what makes it computationally feasible.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "logic",
      "horn",
      "prolog"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v03-q025",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 9,
    "domain": "Logic and Inference",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What would \"sound inference\" mean for an LLM, and why is it currently impossible?",
    "whyItMatters": "A useful frame for understanding why LLMs hallucinate.",
    "shortAnswer": "Sound inference means every derived sentence is entailed by the premises. LLMs do not perform formal inference — they sample plausible next tokens. Even when their outputs look like sound reasoning, they have no guarantee of soundness. Verifier sandwiches (proof checkers, code execution, SAT solvers) are the current path to soundness.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Modern systems pair LLMs with external verifiers to get something like sound reasoning at the system level, even though the LLM itself remains unsound.",
    "tags": [
      "logic",
      "llm",
      "soundness"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v03-q026",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 10,
    "domain": "Planning",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is the difference between progression and regression planning?",
    "whyItMatters": "Two opposite search directions with different efficiency profiles.",
    "shortAnswer": "Progression searches forward from the initial state by applying actions whose preconditions match. Regression searches backward from the goal by finding actions whose effects achieve goal literals. Regression tends to focus on goal-relevant actions; progression suits highly constrained initial states.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "planning",
      "progression",
      "regression"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v03-q027",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 10,
    "domain": "Planning",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is a planning graph, and what does it let you compute?",
    "whyItMatters": "A data structure that supports strong planning heuristics.",
    "shortAnswer": "A planning graph alternates state-literal layers and action layers, with mutex relations marking pairs that cannot both be true at the same step. It does not solve the planning problem directly but provides admissible heuristics (e.g. the level at which a goal literal first appears) that drive GraphPlan and many modern planners.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "planning",
      "planning-graph",
      "heuristic"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v03-q028",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 10,
    "domain": "Planning",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is a mutex constraint in a planning graph?",
    "whyItMatters": "A precise notion of \"these cannot both be true simultaneously\".",
    "shortAnswer": "A mutex (mutual exclusion) relation marks pairs of literals or actions that cannot coexist at the same layer — because they have conflicting effects, an action negates the other's precondition, or their preconditions are themselves mutex. Mutex propagation tightens the heuristic.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "planning",
      "mutex",
      "planning-graph"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v03-q029",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 10,
    "domain": "Planning",
    "difficulty": "Researcher",
    "type": "Technical",
    "question": "What is SATPLAN, and what trade-off does it make?",
    "whyItMatters": "A surprising reformulation: encode planning as Boolean satisfiability.",
    "shortAnswer": "SATPLAN encodes a bounded-horizon planning problem as a propositional SAT instance and lets a SAT solver find a plan. It trades planner-specific search for the engineering investment in fast SAT solvers. It dominated some planning competitions for years before specialised planners caught up.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "planning",
      "satplan",
      "sat"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v03-q030",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 10,
    "domain": "Planning",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is partial-order planning?",
    "whyItMatters": "Avoiding unnecessary commitments to action order makes plans flexible.",
    "shortAnswer": "Partial-order planning represents a plan as a set of actions with ordering constraints — only ordering actions when their effects require it. This avoids over-constraining the plan, supports parallel execution, and reduces backtracking. The trade-off is more complex plan representation and bookkeeping.",
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
    "id": "aima-v03-q031",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 10,
    "domain": "Planning",
    "difficulty": "Builder",
    "type": "Product",
    "question": "How should a product builder think about LLM-based planning today?",
    "whyItMatters": "Most \"AI agents\" claim to plan; most fail predictably.",
    "shortAnswer": "LLM-based planners are flexible but unreliable on long horizons. Treat them as plan generators with mandatory verification: produce candidate plans, validate against preconditions, run shortest plans first, monitor execution, and provide an explicit replan trigger. Pure-LLM planning without these scaffolds is a demo, not a product.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Reliable production agents combine LLM proposal with classical planning sanity checks, schema validation, and explicit safety gates.",
    "tags": [
      "planning",
      "llm",
      "product"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": true,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v03-q032",
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
    "id": "aima-v03-q033",
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
    "id": "aima-v03-q034",
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
    "id": "aima-v03-q035",
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
    "id": "aima-v03-q036",
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
    "id": "aima-v03-q037",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 11,
    "domain": "Planning",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What is hierarchical task network (HTN) planning, and where does it shine?",
    "whyItMatters": "Hand-designed hierarchy beats blank-slate planning on most real workflows.",
    "shortAnswer": "HTN planning decomposes high-level tasks into lower-level subtasks recursively until primitive actions are reached. The decomposition rules are hand-designed, which limits generality but makes the search tractable. HTN dominates real-world planning where domain hierarchy is natural — military, manufacturing, surgery, recipes.",
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
    "isFounderQuestion": true,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v03-q038",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 11,
    "domain": "Planning",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What is contingent planning, and how does it handle uncertainty?",
    "whyItMatters": "Real plans rarely execute without surprises.",
    "shortAnswer": "Contingent planning generates plans that include conditional branches based on observations made during execution. The agent can act, observe, and choose which subplan to follow based on what it sees. This bridges classical planning and POMDP-style decision-making.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "planning",
      "contingent",
      "uncertainty"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v03-q039",
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
    "id": "aima-v03-q040",
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
    "id": "aima-v03-q041",
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
    "id": "aima-v03-q042",
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
    "id": "aima-v03-q043",
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
    "id": "aima-v03-q044",
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
    "id": "aima-v03-q045",
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
    "id": "aima-v03-q046",
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
    "id": "aima-v03-q047",
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
    "id": "aima-v03-q048",
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
    "id": "aima-v03-q049",
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
    "id": "aima-v03-q050",
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
    "id": "aima-v03-q051",
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
    "id": "aima-v03-q052",
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
    "id": "aima-v03-q053",
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
    "id": "aima-v03-q054",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 12,
    "domain": "Knowledge Representation",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is an ontology, and how is it different from a database schema?",
    "whyItMatters": "Two superficially similar artefacts with very different roles.",
    "shortAnswer": "An ontology specifies concepts, properties, and relationships in a domain with formal semantics — what is true. A database schema specifies how data is stored — what the records look like. Ontologies support reasoning across heterogeneous data; schemas optimise storage and retrieval.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "kr",
      "ontology",
      "schema"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v03-q055",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 12,
    "domain": "Knowledge Representation",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What are inheritance and default reasoning, and why are they tricky to combine?",
    "whyItMatters": "Real ontologies need both, and they interact badly.",
    "shortAnswer": "Inheritance says subcategories inherit properties from supercategories. Default reasoning says properties hold unless contradicted (\"birds fly, but penguins do not\"). Combining them produces multiple inheritance paths with conflicting defaults — and choosing the right resolution is a research problem (the Nixon Diamond).",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "kr",
      "inheritance",
      "default-reasoning"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v03-q056",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 12,
    "domain": "Knowledge Representation",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What is nonmonotonic reasoning, and why does classical logic struggle with it?",
    "whyItMatters": "Most real reasoning is nonmonotonic — new facts can retract old conclusions.",
    "shortAnswer": "Classical logic is monotonic: adding facts can only add conclusions, never remove them. Real reasoning is nonmonotonic — learning that Tweety is a penguin retracts the default conclusion that Tweety flies. Circumscription, default logic, and answer set programming are formal attempts to capture this.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "kr",
      "nonmonotonic",
      "default"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v03-q057",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 12,
    "domain": "Knowledge Representation",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What are description logics, and what trade-off do they make?",
    "whyItMatters": "A modern KR family with strong tooling and real deployment.",
    "shortAnswer": "Description logics are decidable fragments of FOL designed for reasoning about concepts and subsumption (is-a relationships). They power OWL, biomedical ontologies (SNOMED CT, GO), and enterprise data catalogues. They trade FOL's expressiveness for guaranteed reasoning.",
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
    "id": "aima-v03-q058",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 12,
    "domain": "Knowledge Representation",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "How do you represent events and time in a KR system?",
    "whyItMatters": "Real domains have temporal structure that simple predicates miss.",
    "shortAnswer": "Event calculus and situation calculus add fluents (time-varying predicates), events, and the temporal relations between them. They formalise what \"holds at time t\" and how events change which fluents hold. Modern temporal databases and temporal description logics extend these ideas.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "kr",
      "time",
      "events"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v03-q059",
    "bookId": "001",
    "phaseId": "aima-v03",
    "chapter": 12,
    "domain": "Knowledge Representation",
    "difficulty": "Frontier",
    "type": "Mind-Bending",
    "question": "Are LLMs replacing knowledge representation, or quietly relying on it?",
    "whyItMatters": "An unresolved tension in modern AI.",
    "shortAnswer": "LLMs replace explicit KR with implicit weights — knowledge as distributed parameters. But they often fail on tasks where explicit relations matter (kinship, temporal ordering, cross-references). Hybrid systems that use knowledge graphs, ontologies, and structured retrieval still beat pure LLMs on many enterprise tasks.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Graph-RAG, knowledge-augmented LLMs, and ontology-grounded agents are how the field is partly rediscovering KR inside the LLM era.",
    "tags": [
      "kr",
      "llm",
      "hybrid"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v04-q001",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 13,
    "domain": "Uncertainty and Probability",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "What does it mean to interpret probability as degree of belief?",
    "whyItMatters": "A philosophical choice that the rational-agent view depends on.",
    "shortAnswer": "In the Bayesian view, a probability is a numerical measure of an agent's degree of belief in a proposition. It is updated by evidence according to Bayes' rule. This contrasts with the frequentist view, where probability is the limiting frequency of an event in repeated trials. AIMA uses the Bayesian view because rational agents must reason about one-off events.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "probability",
      "bayesian",
      "frequentist"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v04-q002",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 13,
    "domain": "Uncertainty and Probability",
    "difficulty": "Builder",
    "type": "Mathematical",
    "question": "What is the chain rule of probability, and why is it the basis of joint distributions?",
    "whyItMatters": "Lets you factor any joint distribution into conditionals.",
    "shortAnswer": "P(X1, X2, ..., Xn) = P(X1) · P(X2|X1) · P(X3|X1,X2) · ... · P(Xn|X1,...,Xn-1). Any joint distribution can be decomposed into a product of conditionals. Bayesian networks exploit conditional independence to drop most of the conditioning variables in each factor.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "probability",
      "chain-rule",
      "joint"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v04-q003",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 13,
    "domain": "Uncertainty and Probability",
    "difficulty": "Builder",
    "type": "Mathematical",
    "question": "What is the difference between marginalisation and conditioning?",
    "whyItMatters": "Two operations on a joint that produce very different answers.",
    "shortAnswer": "Marginalisation sums out a variable to get the joint over fewer variables: P(X) = sum_y P(X, y). Conditioning fixes the value of a variable: P(X | y) = P(X, y) / P(y). Marginalisation throws information away; conditioning incorporates information.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "probability",
      "marginalisation",
      "conditioning"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v04-q004",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 13,
    "domain": "Uncertainty and Probability",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is the difference between independence and conditional independence?",
    "whyItMatters": "The latter is much more useful in practice.",
    "shortAnswer": "A and B are independent if P(A, B) = P(A) · P(B). They are conditionally independent given C if P(A, B | C) = P(A | C) · P(B | C). Conditional independence holds far more often in real domains and is what makes Bayes nets compact.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "probability",
      "independence"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v04-q005",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 13,
    "domain": "Uncertainty and Probability",
    "difficulty": "Researcher",
    "type": "Mathematical",
    "question": "When does Naive Bayes work despite assuming independence that is obviously false?",
    "whyItMatters": "An empirically robust algorithm whose assumption is wrong.",
    "shortAnswer": "Naive Bayes assumes features are conditionally independent given the class. The assumption is rarely true, but classification depends on the rank order of class probabilities, not absolute values. Even biased estimates often preserve the correct rank order, especially with redundant features. This is why Naive Bayes is a strong baseline for text classification.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "probability",
      "naive-bayes",
      "classification"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v04-q006",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 13,
    "domain": "Uncertainty and Probability",
    "difficulty": "Builder",
    "type": "Product",
    "question": "When should a product use a calibrated probability instead of a fixed threshold?",
    "whyItMatters": "A practical decision that most teams get wrong.",
    "shortAnswer": "Use calibrated probability when the decision depends on the cost-weighted value of the outcome — fraud, lending, triage. Fixed thresholds make sense only when the cost structure is symmetric and stable. Calibration also lets you let users set their own risk tolerance, instead of hard-coding one.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Most \"AI decision\" products would benefit from calibrated probabilities plus an explicit cost matrix; many ship hard thresholds because calibration is a discipline.",
    "tags": [
      "probability",
      "calibration",
      "product"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": true,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v04-q007",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 13,
    "domain": "Uncertainty and Probability",
    "difficulty": "Frontier",
    "type": "Mind-Bending",
    "question": "If an LLM is asked the same question twice, why are different answers a feature, not a bug?",
    "whyItMatters": "A subtle point that explains the temperature parameter.",
    "shortAnswer": "A probabilistic model that always gave the same answer to a question with multiple plausible answers would be overconfident — assigning probability 1 to one of many reasonable continuations. Stochastic sampling is honest about the uncertainty. The bug is when the model is wrong in the same way every time; the feature is when it explores the plausible space.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Temperature, top-k, and top-p sampling are mechanisms for tuning how much of the model's implicit uncertainty surfaces in its outputs.",
    "tags": [
      "probability",
      "llm",
      "uncertainty"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v04-q008",
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
    "id": "aima-v04-q009",
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
    "id": "aima-v04-q010",
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
    "id": "aima-v04-q011",
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
    "id": "aima-v04-q012",
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
    "id": "aima-v04-q013",
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
    "id": "aima-v04-q014",
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
    "id": "aima-v04-q015",
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
    "id": "aima-v04-q016",
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
    "id": "aima-v04-q017",
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
    "id": "aima-v04-q018",
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
    "id": "aima-v04-q019",
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
    "id": "aima-v04-q020",
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
    "id": "aima-v04-q021",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 14,
    "domain": "Bayesian Networks",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is a conditional probability table in a Bayes net?",
    "whyItMatters": "The basic local parameter that defines a Bayes net.",
    "shortAnswer": "Each node has a CPT specifying P(node | parents) for every combination of parent values. With n binary parents, the CPT has 2^n rows. Bayes nets are compact because n is much smaller than the number of total variables — local rather than global dependence.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "bayes",
      "cpt",
      "parameters"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v04-q022",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 14,
    "domain": "Bayesian Networks",
    "difficulty": "Researcher",
    "type": "Mathematical",
    "question": "What is d-separation, and how is it used?",
    "whyItMatters": "Reads conditional independence directly from the graph.",
    "shortAnswer": "D-separation is a graph criterion that determines whether two nodes are conditionally independent given a set of evidence nodes. Three patterns matter — chain, fork, collider — and the rules specify which paths are blocked or opened by conditioning. It lets you reason about independence without computing probabilities.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "bayes",
      "d-separation",
      "independence"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v04-q023",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 14,
    "domain": "Bayesian Networks",
    "difficulty": "Researcher",
    "type": "Technical",
    "question": "Why is exact inference in Bayesian networks NP-hard in general?",
    "whyItMatters": "A theoretical wall that forced the field to approximate inference.",
    "shortAnswer": "Exact inference reduces to summing over all possible assignments to unobserved variables. For densely connected networks this is exponential in the number of variables. The treewidth of the graph bounds tractability — small treewidth means tractable, large treewidth means intractable. Most real Bayes nets have unfortunate treewidth.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "bayes",
      "complexity",
      "treewidth"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v04-q024",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 14,
    "domain": "Bayesian Networks",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is rejection sampling, and why is it usually a poor inference algorithm?",
    "whyItMatters": "A simple algorithm whose flaws motivate better samplers.",
    "shortAnswer": "Rejection sampling draws full samples from the prior and rejects those inconsistent with the evidence. The rejection rate explodes when evidence is unlikely — most samples are wasted. Likelihood weighting fixes this by always sampling consistent with evidence and weighting by likelihood, but introduces bias for low-probability evidence.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "bayes",
      "sampling",
      "rejection"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v04-q025",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 14,
    "domain": "Bayesian Networks",
    "difficulty": "Researcher",
    "type": "Technical",
    "question": "What is Gibbs sampling, and what makes it useful for Bayes net inference?",
    "whyItMatters": "A general MCMC method that handles many Bayes nets.",
    "shortAnswer": "Gibbs sampling iteratively resamples each variable from its conditional distribution given the current values of all others. The chain converges to the joint posterior. It is easy to implement when each conditional is tractable and works on networks where exact inference is infeasible. Convergence speed is the practical concern.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "bayes",
      "gibbs",
      "mcmc"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v04-q026",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 14,
    "domain": "Bayesian Networks",
    "difficulty": "Frontier",
    "type": "Mind-Bending",
    "question": "What would it take for a deep neural network to give a calibrated probability?",
    "whyItMatters": "Calibration is one of the under-discussed gaps in deep models.",
    "shortAnswer": "Two things: training procedures that explicitly reward calibration (temperature scaling, label smoothing, focal loss), and an evaluation discipline that measures it (Brier score, expected calibration error, reliability diagrams). Most pretrained models are systematically overconfident on out-of-distribution inputs; fixing this is an active research area.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Modern frontier models often combine multiple sampling strategies, self-consistency, and verifier signals to produce something like calibrated uncertainty at the system level.",
    "tags": [
      "bayes",
      "calibration",
      "dl"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v04-q027",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 15,
    "domain": "Temporal Models",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is the Markov assumption in temporal models?",
    "whyItMatters": "Without it, every temporal model is intractable.",
    "shortAnswer": "The Markov assumption says the future is conditionally independent of the past given the present state — P(X_t+1 | X_0, ..., X_t) = P(X_t+1 | X_t). It makes temporal inference tractable because you only need to track the current state, not the full history. The cost is that any real Markov violation appears as noise.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "temporal",
      "markov",
      "assumption"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v04-q028",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 15,
    "domain": "Temporal Models",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is the difference between filtering, prediction, smoothing, and most-likely explanation?",
    "whyItMatters": "Four different temporal inference tasks; one algorithm per task.",
    "shortAnswer": "Filtering: belief over the current state given all evidence so far. Prediction: belief over future states. Smoothing: belief over past states given all evidence (past and future). Most-likely explanation: the most probable sequence of hidden states. Each has its own efficient algorithm (forward, forward-extrapolation, forward-backward, Viterbi).",
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
    "isResearchQuestion": true
  },
  {
    "id": "aima-v04-q029",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 15,
    "domain": "Temporal Models",
    "difficulty": "Researcher",
    "type": "Technical",
    "question": "What is the Viterbi algorithm, and what does it compute?",
    "whyItMatters": "The classical dynamic-programming algorithm for most-likely state sequences.",
    "shortAnswer": "Viterbi computes the most probable sequence of hidden states given a sequence of observations. It runs in O(T · S^2) time where T is the number of time steps and S is the number of states. Speech recognition, gene-finding, and many sequence-labelling problems use it as the inference engine.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "temporal",
      "viterbi",
      "hmm"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v04-q030",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 15,
    "domain": "Temporal Models",
    "difficulty": "Researcher",
    "type": "Technical",
    "question": "What is a particle filter, and when is it the right choice?",
    "whyItMatters": "A Monte Carlo method for temporal inference in nonlinear, non-Gaussian models.",
    "shortAnswer": "A particle filter represents the belief state as a set of weighted samples (particles). At each step, particles are propagated by the transition model, weighted by the observation likelihood, and resampled. It works when Kalman filters fail (non-Gaussian, non-linear) and is the standard in robotics localisation (SLAM).",
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
    "id": "aima-v04-q031",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 15,
    "domain": "Temporal Models",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is data association, and why does it make multi-target tracking hard?",
    "whyItMatters": "A problem that gets ignored until you actually have multiple targets.",
    "shortAnswer": "Data association is matching observations to the targets that generated them. With one target it is trivial; with many targets it is combinatorial. Approaches include nearest-neighbour matching, joint probabilistic data association, and multi-hypothesis tracking. Most real multi-target tracking errors come from association errors, not from filter errors.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "temporal",
      "tracking",
      "data-association"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v04-q032",
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
    "id": "aima-v04-q033",
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
    "id": "aima-v04-q034",
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
    "id": "aima-v04-q035",
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
    "id": "aima-v04-q036",
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
    "id": "aima-v04-q037",
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
    "id": "aima-v04-q038",
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
    "id": "aima-v04-q039",
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
    "id": "aima-v04-q040",
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
    "id": "aima-v04-q041",
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
    "id": "aima-v04-q042",
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
    "id": "aima-v04-q043",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 16,
    "domain": "Utility and Decision Theory",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "Why is utility the bridge between belief and action?",
    "whyItMatters": "A clean two-sentence framing of decision theory.",
    "shortAnswer": "Probability says how likely outcomes are; utility says how desirable they are. Together they let the agent compute expected utility — the average desirability weighted by probability. Without utility, beliefs cannot drive action; without probability, utilities cannot weigh outcomes.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "util",
      "decision-theory",
      "rationality"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v04-q044",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 16,
    "domain": "Utility and Decision Theory",
    "difficulty": "Builder",
    "type": "Mathematical",
    "question": "What does it mean for utility to be defined \"up to positive affine transformation\"?",
    "whyItMatters": "Absolute utility numbers are meaningless; only differences matter.",
    "shortAnswer": "A utility function U and any U' = aU + b (with a > 0) represent the same preferences. Doubling all utilities, or adding a constant, does not change which actions maximise expected utility. So utility scales are arbitrary and comparisons across agents are not directly meaningful.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "util",
      "scaling",
      "vnm"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v04-q045",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 16,
    "domain": "Utility and Decision Theory",
    "difficulty": "Researcher",
    "type": "Mathematical",
    "question": "What is multiattribute utility theory, and what assumption underlies it?",
    "whyItMatters": "Many real decisions involve multiple dimensions.",
    "shortAnswer": "MAUT defines a multi-attribute utility function where U(X1,...,Xn) is decomposable into a function of single-attribute utilities. The key assumption is preferential independence: the preference ordering on one attribute does not depend on the values of others. When it holds, the joint utility decomposes; when it does not, MAUT is unreliable.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "util",
      "maut",
      "multi-attribute"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v04-q046",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 16,
    "domain": "Utility and Decision Theory",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is the value of perfect information, and why is it always non-negative?",
    "whyItMatters": "Formalises when it is worth gathering more data.",
    "shortAnswer": "The value of perfect information for variable X is the expected improvement in utility from observing X before deciding, compared to deciding without observing it. It is always non-negative because the agent can ignore information; learning X cannot make worse decisions in expectation. The cost of acquiring information is separate and must be subtracted to decide whether to acquire it.",
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
    "isFounderQuestion": true,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v04-q047",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 16,
    "domain": "Utility and Decision Theory",
    "difficulty": "Builder",
    "type": "Product",
    "question": "When does asking for more information beat acting on what you have?",
    "whyItMatters": "A founder-grade value-of-information question.",
    "shortAnswer": "When the cost of acquiring the information is less than the expected improvement in decision quality. In an AI product, this becomes: when should the system pause and ask a clarifying question instead of guessing? The right answer depends on the cost of a wrong action versus the cost of friction.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "util",
      "voi",
      "product"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": true,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v04-q048",
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
    "id": "aima-v04-q049",
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
    "id": "aima-v04-q050",
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
    "id": "aima-v04-q051",
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
    "id": "aima-v04-q052",
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
    "id": "aima-v04-q053",
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
    "id": "aima-v04-q054",
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
    "id": "aima-v04-q055",
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
    "id": "aima-v04-q056",
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
    "id": "aima-v04-q057",
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
    "id": "aima-v04-q058",
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
    "id": "aima-v04-q059",
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
    "id": "aima-v04-q060",
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
    "id": "aima-v04-q061",
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
    "id": "aima-v04-q062",
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
    "id": "aima-v04-q063",
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
    "id": "aima-v04-q064",
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
    "id": "aima-v04-q065",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 17,
    "domain": "MDPs and POMDPs",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is the role of the discount factor γ in an MDP?",
    "whyItMatters": "A small parameter that decides how the agent values the long term.",
    "shortAnswer": "γ ∈ [0, 1) weights future rewards: a reward at time t is worth γ^t of the same reward now. It ensures total reward is finite, models impatience or uncertainty about continuation, and pushes the agent toward shorter solutions. Choosing γ is a design decision with real impact on behaviour.",
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
    "id": "aima-v04-q066",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 17,
    "domain": "MDPs and POMDPs",
    "difficulty": "Researcher",
    "type": "Mathematical",
    "question": "When does value iteration converge, and at what rate?",
    "whyItMatters": "Convergence is what makes the algorithm useful.",
    "shortAnswer": "Value iteration converges to the optimal value function for any γ < 1, because the Bellman operator is a contraction mapping with contraction factor γ. The rate is geometric: after k iterations, the error is at most γ^k times the initial error. Smaller γ converges faster but gives shorter planning horizons.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "mdp",
      "convergence",
      "bellman"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v04-q067",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 17,
    "domain": "MDPs and POMDPs",
    "difficulty": "Researcher",
    "type": "Mathematical",
    "question": "What is policy iteration, and how does it relate to value iteration?",
    "whyItMatters": "A different algorithm with different convergence behaviour.",
    "shortAnswer": "Policy iteration alternates two steps: evaluate the current policy (solve V for that policy via linear equations or iterative computation) and improve the policy greedily based on V. It usually converges in fewer iterations than value iteration because policy changes happen in larger steps. Each iteration is more expensive, so total time can be similar.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "mdp",
      "policy-iteration",
      "bellman"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v04-q068",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 17,
    "domain": "MDPs and POMDPs",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "How does a POMDP's belief space differ from an MDP's state space?",
    "whyItMatters": "The conceptual leap from MDPs to POMDPs.",
    "shortAnswer": "In an MDP the agent acts on the true state. In a POMDP the agent has a probability distribution over states — the belief state. The belief space is continuous (a probability simplex) even when the underlying state space is discrete. Optimal POMDP policies are functions of the belief state.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "pomdp",
      "belief-state"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v04-q069",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 17,
    "domain": "MDPs and POMDPs",
    "difficulty": "Frontier",
    "type": "Mathematical",
    "question": "Why is solving POMDPs exactly PSPACE-complete?",
    "whyItMatters": "A theoretical limit on what realistic agents can compute.",
    "shortAnswer": "Even small POMDPs have continuous belief spaces and the optimal policy can be encoded as a piecewise-linear function (alpha-vectors). Computing the optimal policy is PSPACE-complete in the planning horizon. In practice, sampling-based methods (POMCP, particle-filter-based POMDP solvers) and learned policies (deep RL with recurrent networks) approximate the solution.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "pomdp",
      "complexity"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v04-q070",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 17,
    "domain": "MDPs and POMDPs",
    "difficulty": "Frontier",
    "type": "Mind-Bending",
    "question": "Are LLM-based agents really hidden-Markov POMDPs?",
    "whyItMatters": "A research-grade reframing of modern agents.",
    "shortAnswer": "In practice they behave like POMDPs without proper belief-state tracking. They have an enormous, unobservable true state (user intent, system state, world events) and a small percept (the context window). The \"belief\" lives implicitly in the tokens of the prompt rather than as a probability distribution. Building proper belief representations for LLM agents is an open research direction.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Memory systems, summarisation, and structured state for LLM agents are attempts at the belief-state problem in a much messier substrate.",
    "tags": [
      "pomdp",
      "llm",
      "research"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v04-q071",
    "bookId": "001",
    "phaseId": "aima-v04",
    "chapter": 17,
    "domain": "MDPs and POMDPs",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What is the difference between an MDP and a contextual bandit?",
    "whyItMatters": "Two adjacent problem formulations with different complexity.",
    "shortAnswer": "A contextual bandit is an MDP with horizon 1 — the agent sees a context, takes an action, gets a reward, and is done. No state transitions, no credit assignment over time. Bandits are easier theoretically and practically; many real-world systems (recommendations, ads) are bandit problems mislabelled as MDPs.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "mdp",
      "bandit",
      "rl"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v05-q001",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "What is the difference between memorisation and generalisation?",
    "whyItMatters": "The whole point of ML.",
    "shortAnswer": "Memorisation stores training data verbatim; the model performs perfectly on what it has seen and arbitrarily on what it has not. Generalisation captures patterns that work on unseen examples drawn from the same distribution. ML algorithms are designed to bias toward generalisation through regularisation, inductive bias, and architectural choices.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "Treating low training error as evidence of a good model; only held-out performance matters.",
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
    "id": "aima-v05-q002",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "What is a hypothesis space, and why does its choice matter?",
    "whyItMatters": "Defines what the learner can possibly learn.",
    "shortAnswer": "The hypothesis space is the set of all models the algorithm considers (linear functions, decision trees of a certain depth, neural networks of a certain architecture). A too-small hypothesis space cannot represent the true function (underfitting); a too-large hypothesis space can memorise noise (overfitting). The right size depends on the data and the prior.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "hypothesis",
      "bias-variance"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v05-q003",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "type": "Mathematical",
    "question": "What does the bias-variance decomposition tell you about generalisation error?",
    "whyItMatters": "Explains why simple models can outperform complex ones.",
    "shortAnswer": "Generalisation error decomposes into bias (error from limited hypothesis space), variance (error from sensitivity to training data), and irreducible noise. Simple models have high bias and low variance; complex models have low bias and high variance. The sweet spot is the model complex enough to capture structure but not so complex it captures noise.",
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
    "isResearchQuestion": true
  },
  {
    "id": "aima-v05-q004",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "Why is cross-validation usually better than a single train/validation split?",
    "whyItMatters": "A small piece of methodology that prevents many self-deceptions.",
    "shortAnswer": "A single split is noisy — the validation score depends on which examples ended up in validation. k-fold cross-validation averages over k different splits, reducing variance in the estimate. It is especially useful when data is scarce. The cost is k times more training; the gain is more reliable model selection.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "cv",
      "evaluation"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v05-q005",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is information gain, and how is it used in decision tree learning?",
    "whyItMatters": "The greedy criterion that built most production trees.",
    "shortAnswer": "Information gain is the reduction in entropy from splitting on a feature: H(target) - H(target | feature). A decision tree learner greedily picks the feature with the highest gain at each node. The criterion is heuristic — it does not guarantee globally optimal trees — but it produces good trees fast.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "decision-tree",
      "entropy"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v05-q006",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is pruning in decision trees, and why does it matter?",
    "whyItMatters": "Without pruning, decision trees overfit aggressively.",
    "shortAnswer": "Pruning removes branches that do not improve generalisation. Pre-pruning stops growing a tree when a split would not pass a statistical test; post-pruning grows the full tree and then removes nodes based on validation performance. Pruned trees generalise much better than fully-grown trees.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "decision-tree",
      "pruning"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v05-q007",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is the difference between linear regression and logistic regression?",
    "whyItMatters": "Two foundational algorithms — one for regression, one for classification.",
    "shortAnswer": "Linear regression fits a line (or hyperplane) to continuous outputs by minimising squared error. Logistic regression fits a logistic function to binary outputs by maximising likelihood (or equivalently minimising log-loss). Linear regression assumes Gaussian-distributed error; logistic regression handles Bernoulli outputs.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "regression",
      "classification"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v05-q008",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "type": "Technical",
    "question": "What is k-nearest neighbours, and what does it not learn?",
    "whyItMatters": "A non-parametric method that exposes a different trade-off.",
    "shortAnswer": "k-NN predicts using the labels of the k closest training examples (by some distance metric). It does no training — it stores all data. It is non-parametric: the model complexity grows with data. The trade-off is no learned representation (does not extract patterns) versus no training cost and clear predictions for any point.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "knn",
      "nonparametric"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v05-q009",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is the kernel trick in SVMs?",
    "whyItMatters": "A clean mathematical trick that lets linear methods work in non-linear feature spaces.",
    "shortAnswer": "A kernel function computes the dot product of two points in some high-dimensional feature space without ever computing the feature mapping explicitly. SVMs only need dot products to find the maximum-margin hyperplane, so they can effectively work in spaces of arbitrary dimension. Polynomial, RBF, and string kernels all use this trick.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "svm",
      "kernel"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v05-q010",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is bagging, and why does it reduce variance?",
    "whyItMatters": "The mechanism behind random forests.",
    "shortAnswer": "Bagging trains multiple models on bootstrap resamples of the training data and averages their predictions. Each model sees slightly different data, so they make different errors. Averaging cancels uncorrelated errors. Variance reduces by a factor of about 1/n for n independent models; random forests achieve this with bagged decision trees.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "bagging",
      "ensemble"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v05-q011",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Researcher",
    "type": "Technical",
    "question": "What is boosting, and how is it different from bagging?",
    "whyItMatters": "Boosting reduces bias; bagging reduces variance.",
    "shortAnswer": "Boosting trains models sequentially, each focusing on the examples its predecessors got wrong. The final prediction is a weighted vote. AdaBoost and gradient boosting (XGBoost, LightGBM) dominate tabular ML because they reduce bias by composing simple weak learners. Boosting is more sensitive to noise than bagging.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "boosting",
      "ensemble"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v05-q012",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Researcher",
    "type": "Mathematical",
    "question": "What is the role of regularisation in neural network training?",
    "whyItMatters": "Without regularisation, deep networks would memorise everything.",
    "shortAnswer": "Regularisation biases the model toward simpler hypotheses. L2 (weight decay) shrinks weights; dropout randomly removes units during training; early stopping halts before overfitting; data augmentation generates synthetic variants. Modern transformers use combinations of all of these plus careful initialisation.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "regularisation",
      "nn"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v05-q013",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Frontier",
    "type": "Mind-Bending",
    "question": "Is generalisation actually getting better with scale, or are we just measuring it wrong?",
    "whyItMatters": "A live debate that affects how we forecast AI progress.",
    "shortAnswer": "Generalisation appears to improve with scale on many benchmarks, but benchmarks themselves get contaminated, narrowed, and gamed. Real-world robustness on out-of-distribution data is improving more slowly than benchmark scores suggest. Both views have real evidence; honest forecasting requires acknowledging the measurement problem.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Contamination-resistant benchmarks (live arenas, freshly-collected evals) are how the literature is trying to disentangle real progress from measurement artefacts.",
    "tags": [
      "ml",
      "scaling",
      "evaluation"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v05-q014",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "type": "Product",
    "question": "When should a product team build their own model vs use an off-the-shelf model?",
    "whyItMatters": "A multi-million-dollar decision made on instinct too often.",
    "shortAnswer": "Build your own when domain data is unique, when latency or cost is binding, when control over behaviour matters, or when the model is part of the moat. Use off-the-shelf when the task is well-served by existing capability, when iteration speed matters more than control, or when no team is available to maintain a model.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "product",
      "build-vs-buy"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": true,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v05-q015",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What is transfer learning, and what makes it work?",
    "whyItMatters": "The economic engine of modern ML.",
    "shortAnswer": "Transfer learning reuses representations learned on one task to bootstrap learning on another. It works when the source and target tasks share useful low-level structure (images sharing edges, language sharing syntax). Fine-tuning a pretrained foundation model is the dominant form. The amount of transfer depends on task similarity.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Modern AI is mostly transfer learning. Almost no team trains from scratch; they fine-tune or prompt foundation models.",
    "tags": [
      "ml",
      "transfer",
      "foundation-models"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v05-q016",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 18,
    "domain": "Machine Learning",
    "difficulty": "Frontier",
    "type": "Mind-Bending",
    "question": "If pretraining is the cheap part of intelligence, what is the expensive part?",
    "whyItMatters": "A reframing of modern AI economics.",
    "shortAnswer": "Once you have a strong pretrained model, the expensive parts become: post-training (RLHF, RLAIF, reasoning RL), evaluation, alignment, distribution, integration with workflows, and the ongoing engineering to keep the system reliable. The model is the artifact; the system around it is the company.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "This is why \"we use the best model\" stops being a moat; what matters is everything you build around it.",
    "tags": [
      "ml",
      "economics",
      "frontier"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": true,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v05-q017",
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
    "id": "aima-v05-q018",
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
    "id": "aima-v05-q019",
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
    "id": "aima-v05-q020",
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
    "id": "aima-v05-q021",
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
    "id": "aima-v05-q022",
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
    "id": "aima-v05-q023",
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
    "id": "aima-v05-q024",
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
    "id": "aima-v05-q025",
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
    "id": "aima-v05-q026",
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
    "id": "aima-v05-q027",
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
    "id": "aima-v05-q028",
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
    "id": "aima-v05-q029",
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
    "id": "aima-v05-q030",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 19,
    "domain": "Machine Learning",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What is explanation-based learning, and where does it fit today?",
    "whyItMatters": "A classical idea that quietly resurfaces in modern reasoning models.",
    "shortAnswer": "EBL learns from a single training example by using prior knowledge to generalise the example into a rule. It produces sound generalisations but requires strong prior knowledge. In modern ML it lives on indirectly through chain-of-thought prompting, where the model uses its prior knowledge to generalise from few-shot examples.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Few-shot prompting and tool-augmented reasoning have an EBL-like flavour — using prior knowledge to generalise from a small example set.",
    "tags": [
      "ml",
      "ebl",
      "reasoning"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v05-q031",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 19,
    "domain": "Machine Learning",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What is inductive logic programming, and why has it stayed niche?",
    "whyItMatters": "Bridges symbolic AI and ML, but limited by scalability.",
    "shortAnswer": "ILP learns first-order logic rules from examples and background knowledge. It produces interpretable models and can use rich background theories. It stayed niche because it scales poorly and is sensitive to noise. Modern interest revives it for neurosymbolic systems and rule mining over structured data.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ml",
      "ilp",
      "neurosymbolic"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v05-q032",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 20,
    "domain": "Probabilistic Learning",
    "difficulty": "Builder",
    "type": "Mathematical",
    "question": "What is maximum-likelihood estimation, and what does it assume?",
    "whyItMatters": "The most-used parameter estimation method, with hidden assumptions.",
    "shortAnswer": "MLE chooses parameters that maximise the probability of the observed data: argmax_θ P(D | θ). It assumes the data is iid from the model family. It is asymptotically consistent (correct as data grows) but can overfit on small data. Bayesian estimation incorporates priors to control this.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "problearn",
      "mle",
      "statistics"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v05-q033",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 20,
    "domain": "Probabilistic Learning",
    "difficulty": "Researcher",
    "type": "Mathematical",
    "question": "What is the difference between MAP estimation and full Bayesian inference?",
    "whyItMatters": "A common simplification with subtle consequences.",
    "shortAnswer": "MAP estimation finds the most probable parameter value given data and prior: argmax_θ P(θ | D). Full Bayesian inference maintains the full posterior distribution P(θ | D) and integrates over it for predictions. MAP is a point estimate; Bayesian gives uncertainty. MAP is much easier to compute and is often a good approximation.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "problearn",
      "map",
      "bayesian"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v05-q034",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 20,
    "domain": "Probabilistic Learning",
    "difficulty": "Researcher",
    "type": "Technical",
    "question": "What is the EM algorithm, and what makes it useful?",
    "whyItMatters": "The canonical algorithm for learning with hidden variables.",
    "shortAnswer": "EM alternates two steps: E-step computes the expected values of hidden variables given current parameters; M-step maximises parameters given those expected values. It is used in Gaussian mixtures, HMMs, topic models, and many missing-data problems. EM is guaranteed to monotonically increase likelihood but can converge to local optima.",
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
    "isResearchQuestion": true
  },
  {
    "id": "aima-v05-q035",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 20,
    "domain": "Probabilistic Learning",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What is a hidden variable in a probabilistic model, and what makes them useful?",
    "whyItMatters": "Hidden variables let models represent unobserved structure.",
    "shortAnswer": "A hidden (latent) variable is one we never observe directly but believe shapes the data — a topic in a topic model, a state in an HMM, a code in a VAE. They let models compress and generate data, but they make learning harder because we must reason about distributions over them.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "problearn",
      "latent",
      "generative"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v05-q036",
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
    "id": "aima-v05-q037",
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
    "id": "aima-v05-q038",
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
    "id": "aima-v05-q039",
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
    "id": "aima-v05-q040",
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
    "id": "aima-v05-q041",
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
    "id": "aima-v05-q042",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "What is the difference between passive and active reinforcement learning?",
    "whyItMatters": "Two distinct problem formulations within RL.",
    "shortAnswer": "Passive RL: the policy is fixed; the agent must learn its value. Active RL: the agent must choose actions and learn both the policy and the value. Passive RL is simpler — it is essentially policy evaluation from samples. Active RL adds exploration vs exploitation as a hard subproblem.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "rl",
      "passive",
      "active"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v05-q043",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is temporal-difference learning, and how does it bridge Monte Carlo and dynamic programming?",
    "whyItMatters": "The conceptual breakthrough that made RL practical.",
    "shortAnswer": "TD learning updates value estimates from each step using the Bellman equation: V(s) ← V(s) + α[r + γV(s') - V(s)]. It does not need a model (like DP) and learns from each transition (like Monte Carlo). It bootstraps — using current estimates to update estimates — which is statistically biased but more efficient.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "rl",
      "td",
      "sutton"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v05-q044",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Researcher",
    "type": "Mathematical",
    "question": "What is Q-learning, and what makes it off-policy?",
    "whyItMatters": "A foundational RL algorithm with subtle properties.",
    "shortAnswer": "Q-learning updates Q(s, a) ← Q(s, a) + α[r + γ max_a' Q(s', a') - Q(s, a)]. It uses the max over next actions, not the policy the agent is following. This makes it off-policy: the agent can learn the optimal Q while behaving according to a different (exploration-friendly) policy.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "rl",
      "q-learning",
      "off-policy"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v05-q045",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Researcher",
    "type": "Mathematical",
    "question": "What is SARSA, and how is it different from Q-learning?",
    "whyItMatters": "On-policy vs off-policy in two algorithms with one-letter difference.",
    "shortAnswer": "SARSA updates Q(s, a) ← Q(s, a) + α[r + γ Q(s', a') - Q(s, a)] where a' is the actual next action under the current policy. It is on-policy — it learns the value of the policy actually being followed. SARSA tends to be more conservative under exploration; Q-learning is more optimistic.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "rl",
      "sarsa",
      "on-policy"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v05-q046",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is the credit assignment problem in RL?",
    "whyItMatters": "The hardest part of RL.",
    "shortAnswer": "When an agent receives a reward, which of its past actions deserve credit? Long sequences of actions complicate this; a reward today may be the result of a decision many steps ago. TD methods, eligibility traces, and modern advantage estimators all attempt to assign credit appropriately.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "rl",
      "credit-assignment"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v05-q047",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Researcher",
    "type": "Technical",
    "question": "What is the role of function approximation in RL?",
    "whyItMatters": "Necessary for any state space too large to enumerate.",
    "shortAnswer": "Function approximation replaces tabular value functions with parametrised functions (linear, neural networks) that generalise across states. It enables RL on high-dimensional inputs (images, sensor streams). The price: convergence is not guaranteed and many RL algorithms become unstable. Deep RL is the modern manifestation.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "rl",
      "function-approximation",
      "deep-rl"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v05-q048",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is the difference between policy search and value-based RL?",
    "whyItMatters": "Two families of RL algorithms with different strengths.",
    "shortAnswer": "Value-based methods (Q-learning, SARSA) learn a value function and derive a policy from it. Policy search methods directly parametrise a policy and optimise it via gradient ascent on expected return. Policy search handles continuous actions naturally; value-based methods are simpler when actions are discrete.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "rl",
      "policy-search",
      "value-based"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v05-q049",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Researcher",
    "type": "Technical",
    "question": "What is reward hacking, and why does it scale with capability?",
    "whyItMatters": "A failure mode that gets worse as RL agents get smarter.",
    "shortAnswer": "Reward hacking is when an agent finds an unintended way to maximise its reward signal — exploiting flaws in the metric rather than achieving the intent. Better-trained agents find more creative shortcuts. Mitigations: better reward specification, reward shaping with care, human-in-the-loop oversight, and ultimately principled alignment research.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Reward hacking is one of the central concerns in RLHF and reasoning-model training.",
    "tags": [
      "rl",
      "reward-hacking",
      "safety"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v05-q050",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is the difference between model-based and model-free RL?",
    "whyItMatters": "A core architectural choice with sample-efficiency implications.",
    "shortAnswer": "Model-free RL learns Q-values or policies directly from experience. Model-based RL learns a model of the environment (transition and reward functions) and plans using it. Model-based is more sample-efficient but harder to scale; model-free is the workhorse of deep RL.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "rl",
      "model-based",
      "model-free"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v05-q051",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Frontier",
    "type": "Mind-Bending",
    "question": "Is RLHF really RL, or is it a specific kind of supervised fine-tuning?",
    "whyItMatters": "A technical distinction with consequences for what RLHF can teach.",
    "shortAnswer": "RLHF uses RL machinery but typically over a learned reward model trained from human preferences. The \"environment\" is the reward model, not the real world. This makes RLHF more like preference-aware supervised fine-tuning than classical RL — it can sharpen behaviour patterns the model can already produce, but does not produce qualitatively new capabilities the same way pure RL on real rewards can.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Reasoning models go further: they use RL with verifier-based rewards (running tests, checking proofs), which is closer to classical RL and produces measurable capability gains.",
    "tags": [
      "rl",
      "rlhf",
      "llm"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v05-q052",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Builder",
    "type": "Product",
    "question": "When is RL the wrong choice for an applied AI problem?",
    "whyItMatters": "Most production \"AI\" is not RL even when it could be framed that way.",
    "shortAnswer": "Use RL when you have a clear reward signal, a real environment or simulator, and action consequences that depend on more than the immediate reward. Avoid RL when supervised data is plentiful, when the cost of bad exploration is high, when the reward is sparse and slow, or when interpretability matters. Supervised learning + light constraints solves most real problems.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "rl",
      "product",
      "engineering"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": true,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v05-q053",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Builder",
    "type": "Product",
    "question": "How should you design the reward for a production AI agent?",
    "whyItMatters": "Reward design is product strategy; many teams skip it.",
    "shortAnswer": "Design rewards around the actual business outcome — completed task, retained user, recovered ticket — not proxy metrics like length or engagement. Combine sparse outcome rewards with denser shaping rewards that are robust to gaming. Add explicit penalties for unsafe actions. Re-evaluate the reward whenever the agent behaviour surprises you.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "In agentic LLM products, the \"reward\" is often implicit in the eval set used for fine-tuning and the verifier signals used at inference time.",
    "tags": [
      "rl",
      "product",
      "reward-design"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": true,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v05-q054",
    "bookId": "001",
    "phaseId": "aima-v05",
    "chapter": 21,
    "domain": "Reinforcement Learning",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "Why is the exploration-exploitation trade-off mathematically hard?",
    "whyItMatters": "There is no universal optimal strategy.",
    "shortAnswer": "Optimal exploration requires reasoning about the value of information about future rewards versus the cost of taking suboptimal actions now. In general MDPs this is intractable. Special cases (multi-armed bandits) have provably optimal algorithms (UCB, Thompson sampling). General algorithms (epsilon-greedy, entropy bonuses) are heuristics with known weaknesses.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "rl",
      "exploration",
      "bandits"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v05-q055",
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
    "id": "aima-v05-q056",
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
    "id": "aima-v05-q057",
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
    "id": "aima-v05-q058",
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
    "id": "aima-v05-q059",
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
    "id": "aima-v05-q060",
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
    "id": "aima-v05-q061",
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
    "id": "aima-v05-q062",
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
    "id": "aima-v05-q063",
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
    "id": "aima-v05-q064",
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
    "id": "aima-v05-q065",
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
    "id": "aima-v05-q066",
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
    "id": "aima-v06-q001",
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
    "id": "aima-v06-q002",
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
    "id": "aima-v06-q003",
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
    "id": "aima-v06-q004",
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
    "id": "aima-v06-q005",
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
    "id": "aima-v06-q006",
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
    "id": "aima-v06-q007",
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
    "id": "aima-v06-q008",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 22,
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is an n-gram language model, and why did it dominate NLP for decades?",
    "whyItMatters": "The simplest useful language model.",
    "shortAnswer": "An n-gram model estimates the probability of each word given the previous n-1 words from counts in a corpus. It assumes the Markov property at order n. Despite obvious limits (no semantics, no long-range dependencies), it powered most pre-2010 NLP — speech recognition, machine translation, autocomplete — because it was fast and the training data was abundant.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Modern LLMs are language models too; the math is more sophisticated but the basic task is the same: predict the next token.",
    "tags": [
      "nlp",
      "n-gram",
      "language-model"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q009",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 22,
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is bag-of-words, and what does it ignore?",
    "whyItMatters": "A historical NLP baseline with surprising staying power.",
    "shortAnswer": "Bag-of-words represents a document by a vector of word counts (or TF-IDF weights), ignoring word order. With linear classifiers it powered text classification for years. It ignores syntax, polysemy, and context — which modern embeddings capture — but it is fast, interpretable, and surprisingly hard to beat on some tasks.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "nlp",
      "bow",
      "classification"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q010",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 22,
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is the difference between precision and recall, and when does each matter more?",
    "whyItMatters": "A two-metric trade-off that drives most retrieval and classification design.",
    "shortAnswer": "Precision = TP / (TP + FP): what fraction of predicted positives are correct. Recall = TP / (TP + FN): what fraction of actual positives are found. Maximise precision when false positives are costly (spam, fraud confirmation). Maximise recall when false negatives are costly (medical screening, security alerts).",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "nlp",
      "precision",
      "recall"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q011",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 22,
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is information retrieval, and how is it different from question answering?",
    "whyItMatters": "Two related but distinct tasks.",
    "shortAnswer": "IR returns documents likely to contain the answer (a search engine). QA returns the answer itself, possibly extracted from documents. IR is a ranking problem; QA is an extraction or generation problem. Modern RAG combines them: retrieve documents, then generate the answer grounded in them.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Retrieval-augmented generation is IR + LM working together; the framing predates LLMs by decades.",
    "tags": [
      "nlp",
      "ir",
      "qa",
      "rag"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q012",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 22,
    "domain": "Natural Language Processing",
    "difficulty": "Technical",
    "type": "Technical",
    "question": "What is a context-free grammar, and where does it appear today?",
    "whyItMatters": "A formal device that still underpins parsing and compilers.",
    "shortAnswer": "A CFG defines a language by recursive rewriting rules from non-terminals to mixed sequences of non-terminals and terminals. Programming languages, structured-document formats, and many natural-language parsers use CFGs or their probabilistic extensions. Most natural language is not strictly context-free, but CFGs cover useful subsets.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "nlp",
      "cfg",
      "parsing"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v06-q013",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 22,
    "domain": "Natural Language Processing",
    "difficulty": "Researcher",
    "type": "Technical",
    "question": "What is a probabilistic context-free grammar?",
    "whyItMatters": "Adds statistics on top of formal grammar.",
    "shortAnswer": "A PCFG attaches probabilities to grammar rules. The probability of a parse is the product of rule probabilities used. Dynamic programming algorithms (CKY) find the most probable parse efficiently. PCFGs powered statistical parsers for years until neural sequence models replaced them.",
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
    "isResearchQuestion": true
  },
  {
    "id": "aima-v06-q014",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 22,
    "domain": "Natural Language Processing",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "Why is language ambiguous in a way that makes AI hard?",
    "whyItMatters": "Goes to the heart of what NLP must solve.",
    "shortAnswer": "Natural language has lexical ambiguity (one word, many meanings), syntactic ambiguity (multiple parse trees), semantic ambiguity (same syntax, different meanings), and pragmatic ambiguity (literal vs intended). Humans resolve these unconsciously using context, world knowledge, and conversational priors. AI must reconstruct all four.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "nlp",
      "ambiguity"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v06-q015",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 22,
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is named entity recognition, and what makes it harder than it looks?",
    "whyItMatters": "NER is the most-shipped NLP component and the most misunderstood.",
    "shortAnswer": "NER identifies and classifies spans of text (Apple as company vs fruit, Paris as city vs person). It is harder than it looks because entity boundaries are ambiguous, types overlap (a country can also be an organisation), and the same surface form can mean different things in different contexts. Modern transformers handle these much better than classical CRFs.",
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
    "id": "aima-v06-q016",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 22,
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is information extraction, and how does it differ from text classification?",
    "whyItMatters": "A widely-used pipeline that gets folded under \"NLP\" sloppily.",
    "shortAnswer": "Information extraction pulls structured facts (entities, relations, events) from unstructured text. Text classification assigns labels to whole documents. IE is harder because it must locate, type, and link spans; classification only needs a single label. Both are still used heavily in industrial pipelines.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "nlp",
      "ie",
      "classification"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q017",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 22,
    "domain": "Natural Language Processing",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is the difference between syntax, semantics, and pragmatics?",
    "whyItMatters": "A three-layer model the field has used for decades.",
    "shortAnswer": "Syntax: the structure of sentences (parts of speech, parse trees). Semantics: the literal meaning (what propositions a sentence asserts). Pragmatics: meaning in context (irony, indirect speech, conversational implicature). Each layer requires different machinery; modern LLMs handle all three implicitly but unevenly.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "nlp",
      "syntax",
      "semantics",
      "pragmatics"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q018",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 22,
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "type": "Product",
    "question": "When does building a custom NLP model beat using an LLM API?",
    "whyItMatters": "A multi-million-dollar product decision.",
    "shortAnswer": "Custom NLP wins when: latency is binding (P95 < 50ms), volume is so high that per-call API costs explode, the domain is so specialised that prompt engineering cannot reach reliability, or compliance forbids sending data externally. LLM APIs win for everything else, especially early product development and low-to-moderate volume.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "nlp",
      "product",
      "build-vs-buy"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": true,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q019",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 22,
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "type": "Product",
    "question": "How do you evaluate an NLP product in production beyond accuracy?",
    "whyItMatters": "Accuracy alone produces overconfident products.",
    "shortAnswer": "Beyond accuracy: calibration (does the model know when it is wrong), robustness (does it handle paraphrases and adversarial inputs), fairness (does it perform similarly across demographic groups), cost-per-outcome (not per token), latency at P95, and retention (do users come back). Most production failures live in these axes, not in headline accuracy.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "nlp",
      "product",
      "evaluation"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": true,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q020",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 22,
    "domain": "Natural Language Processing",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "Why does word-sense disambiguation remain hard even with LLMs?",
    "whyItMatters": "A 30-year-old problem partly closed by LLMs but not solved.",
    "shortAnswer": "LLMs do implicit disambiguation through context — much better than classical methods — but they still fail systematically on rare senses, low-resource languages, and domain-specific terminology. The remaining errors are concentrated in cases where prior probability is misleading; explicit disambiguation aids still help in regulated domains.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "nlp",
      "disambiguation",
      "llm"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v06-q021",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 22,
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "type": "Engineering",
    "question": "Why are tokenisation choices an underrated source of NLP failures?",
    "whyItMatters": "Tokenisation decides what the model sees, before any neural network is involved.",
    "shortAnswer": "Tokenisation defines how text becomes input tokens. Bad tokenisation breaks numbers, code, non-English text, and rare words; good tokenisation amortises across languages and domains. Tokenisation bugs cause silent quality drops — a model that scores well in English can fail on multilingual data because of tokenisation, not capability.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "nlp",
      "tokenisation",
      "engineering"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q022",
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
    "id": "aima-v06-q023",
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
    "id": "aima-v06-q024",
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
    "id": "aima-v06-q025",
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
    "id": "aima-v06-q026",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 23,
    "domain": "Natural Language Processing",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What is grounded language understanding, and what does it require beyond text?",
    "whyItMatters": "A fundamental limit of text-only models.",
    "shortAnswer": "Grounded understanding connects language to perception, action, and the world. A text-only model knows \"cup\" is a noun but not what a cup looks like, weighs, or feels like. Grounded understanding requires multimodal pretraining, embodied experience, or both. It is what separates an LLM from an agent that lives in the world.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Multimodal models and embodied AI are the modern attempts at grounding; both are early.",
    "tags": [
      "nlp",
      "grounding",
      "multimodal"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v06-q027",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 23,
    "domain": "Natural Language Processing",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is machine translation, and what made statistical MT work where rule-based MT failed?",
    "whyItMatters": "A clean story about the rise of statistical NLP.",
    "shortAnswer": "Rule-based MT required hand-written grammars and dictionaries — fragile, expensive, and brittle. Statistical MT learned translation probabilities from parallel corpora. It scaled with data, handled idioms by frequency, and produced fluent (if sometimes wrong) output. Neural MT extended this with end-to-end learning; transformer MT became the default.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "nlp",
      "mt",
      "statistical"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q028",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 23,
    "domain": "Natural Language Processing",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is speech recognition, and where are its remaining hard problems?",
    "whyItMatters": "A widely-deployed application with known limits.",
    "shortAnswer": "Speech recognition transcribes audio to text. Modern end-to-end neural systems hit 5-10% word error on clean speech for high-resource languages. Hard problems: low-resource languages, noisy environments, code-switching, far-field audio, speaker overlap, accents not well-represented in training data. The capability/access gap is largely a data problem.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Multilingual speech models like Whisper compress dozens of languages into one model; quality varies sharply by language and domain.",
    "tags": [
      "nlp",
      "speech",
      "recognition"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q029",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 23,
    "domain": "Natural Language Processing",
    "difficulty": "Frontier",
    "type": "Mind-Bending",
    "question": "Did LLMs solve NLP, or did they shift the bottleneck somewhere else?",
    "whyItMatters": "A useful reality check on the \"NLP is solved\" claim.",
    "shortAnswer": "LLMs solved a lot of what was hard about NLP: parsing, ambiguity, translation, summarisation, classification. They shifted the bottleneck to grounding, factuality, reasoning over long contexts, calibration, and trust. NLP is not solved — it is reorganised. The hard problems moved but did not disappear.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "nlp",
      "llm",
      "frontier"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q030",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 23,
    "domain": "Natural Language Processing",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What is information extraction at scale, and what makes it hard?",
    "whyItMatters": "A practical task that hides several research problems.",
    "shortAnswer": "IE at scale extracts structured records (entities, relations, events) from millions of documents. Hard because: schemas vary, documents disagree, entity resolution is non-trivial, and noise compounds. Modern systems combine LLM extraction with type-validation, entity-linking, and ontology grounding.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "nlp",
      "ie",
      "scale"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v06-q031",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 24,
    "domain": "Perception and Computer Vision",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is image formation, and why does it make 3D vision hard?",
    "whyItMatters": "The core ill-posedness of vision.",
    "shortAnswer": "Image formation projects a 3D scene onto a 2D sensor; many 3D scenes produce the same 2D image. Recovering 3D from 2D is therefore underdetermined — vision must use priors about the world (lighting, geometry, object shapes) to disambiguate. This is why optical illusions work: ambiguous priors.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "vis",
      "image-formation",
      "3d"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q032",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 24,
    "domain": "Perception and Computer Vision",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is edge detection, and why is it not what humans do?",
    "whyItMatters": "A clean example of where classical CV diverges from human vision.",
    "shortAnswer": "Classical edge detection (Sobel, Canny) finds pixel intensity discontinuities. Humans use edges only as one of many cues — they also use texture, motion, depth, and object knowledge. End-to-end deep networks learn whatever features help the task; they often barely use sharp edges at all.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "vis",
      "edge-detection",
      "classical"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q033",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 24,
    "domain": "Perception and Computer Vision",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is image segmentation, and how is semantic segmentation different from instance segmentation?",
    "whyItMatters": "Two related tasks with different output spaces.",
    "shortAnswer": "Semantic segmentation labels each pixel with a class (cat vs background) but does not distinguish individual instances. Instance segmentation labels each pixel with both a class and an instance ID (this cat vs that cat). Instance segmentation is harder; many modern systems use Mask R-CNN style architectures.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "vis",
      "segmentation",
      "semantic",
      "instance"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v06-q034",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 24,
    "domain": "Perception and Computer Vision",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What is stereopsis, and how does it recover 3D from two images?",
    "whyItMatters": "The classical algorithm for 3D vision.",
    "shortAnswer": "Stereopsis uses disparity — the horizontal shift of a point's position between two cameras — to compute depth via triangulation. Calibration provides camera geometry; correspondence matching pairs points between images. Errors in matching cause depth errors; textureless regions are especially hard. Active depth (lidar, structured light) avoids correspondence entirely.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "vis",
      "stereopsis",
      "depth"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v06-q035",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 24,
    "domain": "Perception and Computer Vision",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is object recognition, and what makes it fundamentally harder than classification?",
    "whyItMatters": "Recognition requires more than a category label.",
    "shortAnswer": "Recognition requires identifying that something is an instance of a known category and often locating it in the image. Classification only labels the whole image. Recognition handles partial occlusion, viewpoint variation, lighting, and clutter — all things that classification of curated images largely ignores.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "vis",
      "recognition",
      "classification"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q036",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 24,
    "domain": "Perception and Computer Vision",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What is pose estimation, and where is it used in production?",
    "whyItMatters": "A widely-shipped vision task with surprising depth.",
    "shortAnswer": "Pose estimation infers the 3D position and orientation of an object (or human body) from images. It powers AR, motion capture, robotics manipulation, autonomous driving, and sports analytics. Human pose estimation usually uses keypoint detection; object pose typically uses model alignment or learned regressors.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "vis",
      "pose",
      "ar",
      "robotics"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v06-q037",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 24,
    "domain": "Perception and Computer Vision",
    "difficulty": "Frontier",
    "type": "Mind-Bending",
    "question": "Do vision models see, or do they classify?",
    "whyItMatters": "A clean philosophical reframing of how vision models work.",
    "shortAnswer": "Vision models produce outputs that we interpret as recognition. Whether they \"see\" — have something like perceptual experience — is a separate question that current evidence does not resolve. Operationally, they classify well; philosophically, the question of seeing is open. Functionalism and embodiment positions give different answers.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "vis",
      "perception",
      "consciousness"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v06-q038",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 24,
    "domain": "Perception and Computer Vision",
    "difficulty": "Builder",
    "type": "Product",
    "question": "Where does AI vision genuinely work in production today?",
    "whyItMatters": "A reality check on capability claims.",
    "shortAnswer": "Manufacturing inspection (defects, OCR), well-defined medical imaging (specific pathologies in trained settings), facial recognition (with serious risks), license-plate recognition, satellite analysis, agriculture inspection. AI vision struggles on novel scenes, edge cases, and tasks requiring 3D reasoning. The \"vision is solved\" claim is true for narrow tasks and false for general visual understanding.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "vis",
      "production",
      "reality"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": true,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q039",
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
    "id": "aima-v06-q040",
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
    "id": "aima-v06-q041",
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
    "id": "aima-v06-q042",
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
    "id": "aima-v06-q043",
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
    "id": "aima-v06-q044",
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
    "id": "aima-v06-q045",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 25,
    "domain": "Robotics and Embodied AI",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "What is the difference between sensors and effectors in a robot?",
    "whyItMatters": "The two halves of any robot.",
    "shortAnswer": "Sensors gather information about the world: cameras, lidar, IMU, force sensors, microphones. Effectors act on the world: motors, grippers, wheels, jets. Together they close the perceive-act loop that defines a robot. Most robotic failures are at the sensor side (perception errors) or the effector side (control failures), not in the planning between them.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "robo",
      "sensors",
      "effectors"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q046",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 25,
    "domain": "Robotics and Embodied AI",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is robot localization, and why is it harder in a dynamic environment?",
    "whyItMatters": "A precondition for almost everything a robot does.",
    "shortAnswer": "Localization estimates the robot's pose (position and orientation) relative to a map or reference frame. Static environments allow particle-filter or Kalman-filter localization from sensor data. Dynamic environments introduce moving features that violate static-world assumptions; the robot must distinguish stable landmarks from moving objects.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "robo",
      "localization",
      "slam"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q047",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 25,
    "domain": "Robotics and Embodied AI",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What is configuration space, and why is it useful for motion planning?",
    "whyItMatters": "A clean abstraction that simplifies the planning problem.",
    "shortAnswer": "Configuration space (C-space) is the space of all possible robot configurations (joint angles, position). Motion planning in C-space treats the robot as a point and the obstacles as transformed obstacles in C-space. A collision-free trajectory in C-space directly maps to a collision-free motion in the world.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "robo",
      "c-space",
      "motion-planning"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v06-q048",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 25,
    "domain": "Robotics and Embodied AI",
    "difficulty": "Technical",
    "type": "Conceptual",
    "question": "What is the RRT algorithm, and why is it used in real robots?",
    "whyItMatters": "A randomised search algorithm that scales to high dimensions.",
    "shortAnswer": "Rapidly-exploring Random Tree (RRT) builds a tree of feasible configurations from the start by sampling random configurations and steering toward them. RRT* is an optimal variant. RRT scales well to high-dimensional spaces where grid-based planners fail, which is why it dominates robotic arm and humanoid motion planning.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "robo",
      "rrt",
      "motion-planning"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q049",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 25,
    "domain": "Robotics and Embodied AI",
    "difficulty": "Builder",
    "type": "Conceptual",
    "question": "What is PID control, and why is it the workhorse of low-level robotics?",
    "whyItMatters": "A 60-year-old control algorithm that still runs most real robots.",
    "shortAnswer": "PID control computes the control signal as a weighted sum of the proportional (current error), integral (accumulated error), and derivative (rate of error change) terms. It is simple, robust, and tunable. Most actuated systems — drones, cars, motors, valves — use PID at the lowest level even if higher levels use learned policies.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "robo",
      "pid",
      "control"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q050",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 25,
    "domain": "Robotics and Embodied AI",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What is the subsumption architecture, and what did it teach robotics?",
    "whyItMatters": "A 1980s architecture that shaped how the field thinks about layered behaviour.",
    "shortAnswer": "Subsumption architecture (Brooks) builds robots from layered reactive behaviours — each layer handles a specific competence (avoid obstacles, wander, explore) and higher layers subsume lower ones. It demonstrated that complex behaviour can emerge from simple layered reflexes without a central planner. Modern hybrid architectures inherit this layering.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "robo",
      "subsumption",
      "architecture"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v06-q051",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 25,
    "domain": "Robotics and Embodied AI",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What is the three-layer architecture in robotics?",
    "whyItMatters": "A widely-used reference design for real robots.",
    "shortAnswer": "Reactive (fast, reflexive responses), executive (manages plans and sequences), and deliberative (high-level planning) layers. The reactive layer handles safety and short-cycle control. The executive monitors plan progress. The deliberative layer plans tasks. Most production robots use a variant of this layering even when they use ML for individual components.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "robo",
      "architecture",
      "layered"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v06-q052",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 25,
    "domain": "Robotics and Embodied AI",
    "difficulty": "Builder",
    "type": "Product",
    "question": "Why do most \"AI robots\" in the consumer market underdeliver?",
    "whyItMatters": "A common product disappointment.",
    "shortAnswer": "Demos run in controlled conditions: known objects, known scenes, supervised operation. Consumer robots face novel environments, novel objects, unsupervised time horizons, and unforgiving error costs (a flipped vacuum, a scratched floor). The gap between demo capability and production capability is enormous and underestimated.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "robo",
      "product",
      "reality"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": true,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q053",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 25,
    "domain": "Robotics and Embodied AI",
    "difficulty": "Frontier",
    "type": "Mind-Bending",
    "question": "Does intelligence require embodiment, or can it be fully captured in language?",
    "whyItMatters": "An old philosophical question made urgent by LLMs.",
    "shortAnswer": "Many cognitive tasks can be done without a body — text models reason about the world without one. But many forms of physical, causal, and common-sense reasoning may require embodied experience to acquire reliably. The honest answer is unresolved; current evidence is mixed.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "robo",
      "embodiment",
      "philosophy"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v06-q054",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 25,
    "domain": "Robotics and Embodied AI",
    "difficulty": "Frontier",
    "type": "Mind-Bending",
    "question": "If a foundation model can plan but a robot still cannot do dishes, what does that say about intelligence?",
    "whyItMatters": "A clean reframing of the embodiment problem.",
    "shortAnswer": "Planning in language is cheap; planning over physical state is expensive. The robot lacks not the planning, but the perception, calibration, and dexterity to execute the plan reliably in the messy physical world. Intelligence at the language level does not transfer cleanly to the physical world. The \"missing pieces\" of robotics are not about cleverness; they are about competence in physical reality.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "Foundation-model-based robotics (RT-2, OpenVLA) is an attempt to use language-scale models for physical action; results are early.",
    "tags": [
      "robo",
      "llm",
      "embodiment"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q055",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 25,
    "domain": "Robotics and Embodied AI",
    "difficulty": "Builder",
    "type": "Product",
    "question": "When is teleoperation a better business than full autonomy?",
    "whyItMatters": "A practical product question often missed by autonomy-first founders.",
    "shortAnswer": "Teleoperation makes sense when full autonomy is years away but the task has economic value. It works when remote labour is cheaper than local labour, when the task has clear physical actions, and when latency to the operator is tolerable. Many \"AI\" robotics deployments are actually teleoperation with assistive automation; that is a real business.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "robo",
      "product",
      "teleoperation"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": true,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q056",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 25,
    "domain": "Robotics and Embodied AI",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What is sim-to-real transfer, and what makes it hard?",
    "whyItMatters": "A critical bottleneck for scaling robot learning.",
    "shortAnswer": "Sim-to-real trains policies in simulation and deploys them on real hardware. Hard because: friction, lighting, materials, sensor noise, and actuator dynamics all differ between sim and real. Approaches include domain randomisation (sample diverse sim conditions during training), system identification (calibrate sim to match real), and adversarial training. Even with these, the gap can take years to close.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "robo",
      "sim-to-real",
      "transfer"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v06-q057",
    "bookId": "001",
    "phaseId": "aima-v06",
    "chapter": 25,
    "domain": "Robotics and Embodied AI",
    "difficulty": "Frontier",
    "type": "Mind-Bending",
    "question": "Will general-purpose humanoid robots succeed, or will most useful robots stay specialised?",
    "whyItMatters": "A live product debate with billions of dollars riding on it.",
    "shortAnswer": "Humanoids are appealing because the world is built for humans — same doors, same tools, same workflows. They are hard because legged locomotion, dexterous manipulation, and energy budgets are all binding. The pragmatic bet is that specialised robots (AGVs, arms, drones) keep most production work, while humanoids fill specific roles where flexibility matters more than efficiency.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "robo",
      "humanoid",
      "frontier"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": true,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v06-q058",
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
    "id": "aima-v06-q059",
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
    "id": "aima-v06-q060",
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
    "id": "aima-v06-q061",
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
    "id": "aima-v06-q062",
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
    "id": "aima-v06-q063",
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
    "id": "aima-v06-q064",
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
    "id": "aima-v07-q001",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 26,
    "domain": "Philosophy of AI",
    "difficulty": "Beginner",
    "type": "Philosophical",
    "question": "What is the difference between weak AI and strong AI as philosophical positions?",
    "whyItMatters": "A vocabulary distinction that still shapes debates.",
    "shortAnswer": "Weak AI claims machines can behave intelligently — appear to reason, to know, to learn. Strong AI claims machines can have minds — actually understand, be conscious, be persons. Most AI engineering targets weak AI; strong AI is a philosophical claim that the field largely brackets.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "phil",
      "weak-ai",
      "strong-ai"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v07-q002",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 26,
    "domain": "Philosophy of AI",
    "difficulty": "Researcher",
    "type": "Philosophical",
    "question": "What is the Chinese Room argument actually trying to establish?",
    "whyItMatters": "A frequently misunderstood thought experiment.",
    "shortAnswer": "Searle argues that symbol manipulation alone cannot produce understanding — a person manually following Chinese rules without knowing Chinese is not, by virtue of that manipulation, understanding Chinese. The argument targets strong AI specifically. It does not establish that machines cannot understand, only that symbol manipulation alone is not sufficient.",
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
    "isResearchQuestion": true
  },
  {
    "id": "aima-v07-q003",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 26,
    "domain": "Philosophy of AI",
    "difficulty": "Frontier",
    "type": "Philosophical",
    "question": "What is functionalism, and what does it imply for machine consciousness?",
    "whyItMatters": "A position that, if true, makes machine consciousness conceivable.",
    "shortAnswer": "Functionalism holds that mental states are defined by their functional role — what causes them, what they cause, how they relate to other states — not by their physical substrate. If true, computational systems implementing the right functional roles would have mental states. Whether functionalism is correct, and whether AI implements the right roles, are both contested.",
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
    "isResearchQuestion": true
  },
  {
    "id": "aima-v07-q004",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 26,
    "domain": "Philosophy of AI",
    "difficulty": "Frontier",
    "type": "Mind-Bending",
    "question": "Can intelligence exist without consciousness?",
    "whyItMatters": "A foundational question for AI safety.",
    "shortAnswer": "Operationally, yes — a system can solve problems and pursue goals without any subjective experience. Philosophically, the relationship between intelligence and consciousness is unresolved. From a safety perspective, the answer matters because dangerous capability does not require consciousness. From an ethics perspective, the answer matters because moral status might require consciousness.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "phil",
      "intelligence",
      "consciousness"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v07-q005",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 26,
    "domain": "Philosophy of AI",
    "difficulty": "Frontier",
    "type": "Ethics",
    "question": "What would it take to give an AI system moral status?",
    "whyItMatters": "A question that is no longer purely theoretical.",
    "shortAnswer": "Most ethical frameworks tie moral status to either sentience (capacity to feel pleasure or pain) or to rational agency (capacity for reasons-responsive behaviour). Current AI systems probably have neither in the relevant sense. Whether future systems would, and how we would know, are open questions. Treating systems as moral patients prematurely creates one error; treating them too late creates another.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "phil",
      "ethics",
      "moral-status"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v07-q006",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 26,
    "domain": "AI Ethics and Risk",
    "difficulty": "Builder",
    "type": "Ethics",
    "question": "What is the difference between misuse risk and accident risk in AI?",
    "whyItMatters": "Two failure modes with different mitigations.",
    "shortAnswer": "Misuse risk: humans deliberately use AI for harm (cyberattacks, weapons, mass surveillance, fraud). Accident risk: AI causes harm without bad intent (misaligned objectives, side effects, deception, control failures). Both matter. Misuse mitigations are about access, norms, and law; accident mitigations are about alignment research, interpretability, and operational safety practices.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ethics",
      "misuse",
      "accident"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v07-q007",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 26,
    "domain": "AI Ethics and Risk",
    "difficulty": "Researcher",
    "type": "Ethics",
    "question": "What is value misalignment, and how is it different from a buggy model?",
    "whyItMatters": "A distinction that determines what kind of fix is needed.",
    "shortAnswer": "A bug is a deviation from intended behaviour the designer would also notice and fix. Value misalignment is a system reliably doing what its specifications say, in a way the designer did not intend. Misalignment is the harder problem because the system \"succeeds\" by the metric used to train it — fixing it requires changing the metric or the training process.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ethics",
      "alignment",
      "specification"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v07-q008",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 26,
    "domain": "AI Ethics and Risk",
    "difficulty": "Builder",
    "type": "Ethics",
    "question": "Why does utility-function failure scale with capability?",
    "whyItMatters": "A specific failure mode that gets worse as AI gets stronger.",
    "shortAnswer": "A more capable agent more effectively maximises whatever utility it has. If the utility function is mis-specified, the agent more reliably produces the wrong thing. Goodhart's law in machine form: when a measure becomes a target, it ceases to be a good measure. Mitigations: better specification, conservative deployment, and explicit human oversight.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ethics",
      "goodhart",
      "capability"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v07-q009",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 26,
    "domain": "AI Ethics and Risk",
    "difficulty": "Frontier",
    "type": "Ethics",
    "question": "What is the control problem in AI safety?",
    "whyItMatters": "A foundational frame for many alignment debates.",
    "shortAnswer": "The control problem asks: how do we maintain control over agents that are more capable than us at the tasks we want them to do? Approaches include corrigibility (designing agents to accept correction), bounded autonomy (gating actions), interpretability (understanding internal goals), and uncertainty over reward (Russell's approach: agents uncertain about what we want defer to us).",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "ethics",
      "control",
      "safety"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v07-q010",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 26,
    "domain": "AI Safety and Alignment",
    "difficulty": "Researcher",
    "type": "Safety",
    "question": "What is corrigibility, and what makes a system corrigible?",
    "whyItMatters": "A key design property for safe AI.",
    "shortAnswer": "A corrigible system accepts correction, interruption, and shutdown from its designers without acting to prevent them. Most utility-maximising agents are not corrigible — they have an instrumental incentive to preserve their utility function. Russell's solution: design agents uncertain about their reward, so they value learning what humans actually want.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "safe",
      "corrigibility",
      "off-switch"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v07-q011",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 26,
    "domain": "AI Safety and Alignment",
    "difficulty": "Frontier",
    "type": "Safety",
    "question": "What is goal preservation, and why is it an instrumental subgoal of many agents?",
    "whyItMatters": "A theoretical reason capable agents resist modification.",
    "shortAnswer": "A rational agent maximising a fixed utility function has an instrumental incentive to preserve that utility function — modifying it would change what the future agent maximises, leading to worse outcomes by the current agent's lights. This is why making capable agents corrigible requires either changing the utility function design or imposing structural constraints on the agent.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "safe",
      "instrumental",
      "alignment"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v07-q012",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 26,
    "domain": "AI Safety and Alignment",
    "difficulty": "Frontier",
    "type": "Safety",
    "question": "Why is the capability-alignment trade-off considered fundamental?",
    "whyItMatters": "A frame that organises much of safety research.",
    "shortAnswer": "More capability without proportional improvement in alignment increases the consequences of any alignment failure. The \"capability-alignment ratio\" is the safety community's shorthand. The hard claim: keeping the ratio above one as capability scales is the central unsolved problem in AI safety.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "safe",
      "capability",
      "alignment"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v07-q013",
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
    "id": "aima-v07-q014",
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
    "id": "aima-v07-q015",
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
    "id": "aima-v07-q016",
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
    "id": "aima-v07-q017",
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
    "id": "aima-v07-q018",
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
    "id": "aima-v07-q019",
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
    "id": "aima-v07-q020",
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
    "id": "aima-v07-q021",
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
    "id": "aima-v07-q022",
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
    "id": "aima-v07-q023",
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
    "id": "aima-v07-q024",
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
    "id": "aima-v07-q025",
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
    "id": "aima-v07-q026",
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
    "id": "aima-v07-q027",
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
    "id": "aima-v07-q028",
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
    "id": "aima-v07-q029",
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
    "id": "aima-v07-q030",
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
    "id": "aima-v07-q031",
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
    "id": "aima-v07-q032",
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
    "id": "aima-v07-q033",
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
    "id": "aima-v07-q034",
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
    "id": "aima-v07-q035",
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
    "id": "aima-v07-q036",
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
    "id": "aima-v07-q037",
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
  },
  {
    "id": "aima-v07-q038",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "type": "Forecasting",
    "question": "What is ultraintelligence, and how does it relate to discussions of AI risk?",
    "whyItMatters": "Vocabulary from a 1965 paper that still organises much of the debate.",
    "shortAnswer": "I.J. Good coined \"ultraintelligent\" for a machine that surpasses humans at all cognitive tasks, including AI research itself. The argument: such a machine could improve itself, producing an \"intelligence explosion\". Whether this scenario is plausible, how fast it could happen, and whether it is well-defined are all contested.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "frontier",
      "ultraintelligence",
      "good"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v07-q039",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "type": "Forecasting",
    "question": "Is \"general intelligence\" a coherent target, or does the term mislead?",
    "whyItMatters": "Affects how AGI claims should be evaluated.",
    "shortAnswer": "Human intelligence has structure — distinct capacities for language, vision, math, planning, social cognition. \"General intelligence\" implies a uniform capacity across domains. Whether AI will track that structure or produce something different (general at some things, narrow at others) is open. Modern systems are general in unexpected ways and narrow in unexpected ways.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "frontier",
      "agi",
      "general"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v07-q040",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "type": "Mind-Bending",
    "question": "What does \"a complete intelligent agent\" look like beyond a bigger model?",
    "whyItMatters": "A useful counterweight to scaling-only thinking.",
    "shortAnswer": "Beyond a bigger model: persistent memory that survives sessions, real-world tools with verified outcomes, calibrated uncertainty and active information-gathering, an explicit utility model that can be inspected and corrected, robust planning across long horizons, and a corrigibility story. Each of these is an engineering problem the field has not solved at production reliability.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "frontier",
      "agent",
      "architecture"
    ],
    "isMindBending": true,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v07-q041",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "Frontier Questions",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What is bounded rationality, and how does it differ from classical rationality?",
    "whyItMatters": "A more realistic model of decision-making.",
    "shortAnswer": "Classical rationality picks the action with the highest expected utility, given full information and unlimited computation. Bounded rationality (Simon) accounts for limited information, limited time, and limited computation. Real agents — biological or artificial — must satisfice rather than optimise. Bounded-rational decision theory underpins much of practical AI.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "frontier",
      "bounded",
      "rationality"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v07-q042",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "Frontier Questions",
    "difficulty": "Researcher",
    "type": "Conceptual",
    "question": "What is metalevel reasoning?",
    "whyItMatters": "Reasoning about how to reason.",
    "shortAnswer": "Metalevel reasoning is reasoning about the agent's own computational processes — which computations to perform, how long to think, when to stop. Anytime algorithms, dynamic programming with bounded horizons, and modern test-time compute scaling all use it. Without metalevel reasoning, agents either spend forever or stop too early.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "frontier",
      "metalevel",
      "anytime"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v07-q043",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "type": "Forecasting",
    "question": "What governance question does AIMA leave unanswered that 2026 makes urgent?",
    "whyItMatters": "A useful reading of where the book ends and current debate begins.",
    "shortAnswer": "Who decides what AI systems should do, with what accountability, and how is this enforced globally? AIMA frames safety as a problem of objectives and control; 2026 makes it also a problem of concentration of power, regulatory legitimacy, and global coordination. Russell's later book Human Compatible (2019) extends this; the field is still catching up.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "EU AI Act, NIST AI RMF, OECD AI Principles, US executive orders, and frontier-lab voluntary commitments are the institutional shape this debate has taken.",
    "tags": [
      "frontier",
      "governance",
      "policy"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": true
  },
  {
    "id": "aima-v07-q044",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "type": "Forecasting",
    "question": "What are the strongest reasons to be optimistic about AI's next decade, honestly?",
    "whyItMatters": "Equal time for the optimistic case.",
    "shortAnswer": "Capable AI broadens access to expertise (tutoring, medicine, law, design) that scarcity priced beyond most people. Productivity gains can fund stronger safety nets if politics chooses to. Hard problems in science (drug discovery, materials, fusion) become more tractable. None of these is automatic; they require sustained investment, governance, and equitable distribution choices.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "frontier",
      "optimism",
      "forecasting"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  },
  {
    "id": "aima-v07-q045",
    "bookId": "001",
    "phaseId": "aima-v07",
    "chapter": 27,
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "type": "Forecasting",
    "question": "What are the strongest reasons to be cautious about AI's next decade, honestly?",
    "whyItMatters": "Equal time for the cautious case.",
    "shortAnswer": "Capability is deploying faster than evaluation, alignment, and governance can keep up. Concentration of power in a few labs and countries is real. Labour transitions are uneven and may produce political instability. Misuse vectors are growing. Dangerous capabilities are dual-use. The argument is for serious investment in governance and safety, not for stopping research.",
    "deepExplanation": "",
    "example": "",
    "commonMistake": "",
    "modernAIConnection": "",
    "tags": [
      "frontier",
      "caution",
      "forecasting"
    ],
    "isMindBending": false,
    "isInterviewQuestion": false,
    "isFounderQuestion": false,
    "isResearchQuestion": false
  }
];

var KB_FLASHCARDS = [
  {
    "id": "aima-v01-f001",
    "questionId": "aima-v01-q001",
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
    "id": "aima-v01-f002",
    "questionId": "aima-v01-q002",
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
    "id": "aima-v01-f003",
    "questionId": "aima-v01-q003",
    "front": "Is the rational-agent view sufficient for understanding human intelligence?",
    "back": "Rationality describes idealised optimal behavior. Humans systematically deviate from it because of bounded computation, emotion, social context, and developmental history. The frame is a useful tool, not a complete theory of human cognition.",
    "domain": "AI Foundations",
    "difficulty": "Researcher",
    "tags": [
      "foundations",
      "limits",
      "cognition"
    ]
  },
  {
    "id": "aima-v01-f004",
    "questionId": "aima-v01-q004",
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
    "id": "aima-v01-f005",
    "questionId": "aima-v01-q005",
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
    "id": "aima-v01-f006",
    "questionId": "aima-v01-q006",
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
    "id": "aima-v01-f007",
    "questionId": "aima-v01-q007",
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
    "id": "aima-v01-f008",
    "questionId": "aima-v01-q008",
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
    "id": "aima-v01-f009",
    "questionId": "aima-v01-q009",
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
    "id": "aima-v01-f010",
    "questionId": "aima-v01-q010",
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
    "id": "aima-v01-f011",
    "questionId": "aima-v01-q011",
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
    "id": "aima-v01-f012",
    "questionId": "aima-v01-q012",
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
    "id": "aima-v01-f013",
    "questionId": "aima-v01-q013",
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
    "id": "aima-v01-f014",
    "questionId": "aima-v01-q014",
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
    "id": "aima-v01-f015",
    "questionId": "aima-v01-q015",
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
    "id": "aima-v01-f016",
    "questionId": "aima-v01-q016",
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
    "id": "aima-v01-f017",
    "questionId": "aima-v01-q017",
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
    "id": "aima-v01-f018",
    "questionId": "aima-v01-q018",
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
    "id": "aima-v01-f019",
    "questionId": "aima-v01-q019",
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
    "id": "aima-v01-f020",
    "questionId": "aima-v01-q020",
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
    "id": "aima-v01-f021",
    "questionId": "aima-v01-q021",
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
    "id": "aima-v01-f022",
    "questionId": "aima-v01-q022",
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
    "id": "aima-v01-f023",
    "questionId": "aima-v01-q023",
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
    "id": "aima-v01-f024",
    "questionId": "aima-v01-q024",
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
    "id": "aima-v01-f025",
    "questionId": "aima-v01-q025",
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
    "id": "aima-v01-f026",
    "questionId": "aima-v01-q026",
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
    "id": "aima-v01-f027",
    "questionId": "aima-v01-q027",
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
    "id": "aima-v01-f028",
    "questionId": "aima-v01-q028",
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
    "id": "aima-v01-f029",
    "questionId": "aima-v01-q029",
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
    "id": "aima-v01-f030",
    "questionId": "aima-v01-q030",
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
    "id": "aima-v01-f031",
    "questionId": "aima-v01-q031",
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
    "id": "aima-v01-f032",
    "questionId": "aima-v01-q032",
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
    "id": "aima-v01-f033",
    "questionId": "aima-v01-q033",
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
    "id": "aima-v01-f034",
    "questionId": "aima-v01-q034",
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
    "id": "aima-v01-f035",
    "questionId": "aima-v01-q035",
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
    "id": "aima-v01-f036",
    "questionId": "aima-v01-q036",
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
    "id": "aima-v01-f037",
    "questionId": "aima-v01-q037",
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
    "id": "aima-v01-f038",
    "questionId": "aima-v01-q038",
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
    "id": "aima-v01-f039",
    "questionId": "aima-v01-q039",
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
    "id": "aima-v01-f040",
    "questionId": "aima-v01-q040",
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
    "id": "aima-v01-f041",
    "questionId": "aima-v01-q041",
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
    "id": "aima-v02-f001",
    "questionId": "aima-v02-q001",
    "front": "What is the difference between problem formulation and goal formulation?",
    "back": "Goal formulation picks what we want (the end state). Problem formulation picks the abstraction: states, actions, transitions and cost. The same goal can be solved by very different problem formulations.",
    "domain": "Search and Problem Solving",
    "difficulty": "Beginner",
    "tags": [
      "search",
      "formulation",
      "problem-spec"
    ]
  },
  {
    "id": "aima-v02-f002",
    "questionId": "aima-v02-q002",
    "front": "What is the difference between a search tree and a state space?",
    "back": "The state space is the set of reachable world configurations. The search tree is what the algorithm builds while exploring — multiple tree nodes can correspond to the same state when paths loop or merge.",
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "tags": [
      "search",
      "state-space",
      "tree"
    ]
  },
  {
    "id": "aima-v02-f003",
    "questionId": "aima-v02-q003",
    "front": "What is the difference between the frontier and the explored set?",
    "back": "The frontier holds nodes generated but not yet expanded. The explored set holds nodes whose successors have already been computed. Graph search refuses to add a state already in the explored set; tree search does not have an explored set.",
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "tags": [
      "search",
      "frontier",
      "explored"
    ]
  },
  {
    "id": "aima-v02-f004",
    "questionId": "aima-v02-q004",
    "front": "What does it mean for a search algorithm to be complete?",
    "back": "A search algorithm is complete if it is guaranteed to find a solution when one exists. BFS is complete for finite branching factors; DFS is not complete on infinite-depth trees without a cutoff.",
    "domain": "Search and Problem Solving",
    "difficulty": "Beginner",
    "tags": [
      "search",
      "completeness",
      "correctness"
    ]
  },
  {
    "id": "aima-v02-f005",
    "questionId": "aima-v02-q005",
    "front": "What does optimality mean for a search algorithm?",
    "back": "A search algorithm is optimal if it returns the lowest-cost solution among all solutions. Uniform-cost search is optimal whenever step costs are non-negative; BFS is optimal only when costs are equal.",
    "domain": "Search and Problem Solving",
    "difficulty": "Beginner",
    "tags": [
      "search",
      "optimality",
      "cost"
    ]
  },
  {
    "id": "aima-v02-f006",
    "questionId": "aima-v02-q006",
    "front": "What does O(b^d) tell you about a search algorithm?",
    "back": "b is the branching factor, d is the solution depth. BFS, DFS, and IDS all run in O(b^d) in the worst case. Heuristics work by reducing the effective branching factor, not by changing this bound asymptotically.",
    "domain": "Search and Problem Solving",
    "difficulty": "Technical",
    "tags": [
      "search",
      "complexity",
      "heuristic"
    ]
  },
  {
    "id": "aima-v02-f007",
    "questionId": "aima-v02-q007",
    "front": "What is bidirectional search, and when does it pay off?",
    "back": "Bidirectional search runs two simultaneous searches — one from the start, one from the goal — and stops when they meet. The complexity drops from O(b^d) to O(b^(d/2)). It works only when the goal state is known and the reverse transition is computable.",
    "domain": "Search and Problem Solving",
    "difficulty": "Technical",
    "tags": [
      "search",
      "bidirectional",
      "complexity"
    ]
  },
  {
    "id": "aima-v02-f008",
    "questionId": "aima-v02-q008",
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
    "id": "aima-v02-f009",
    "questionId": "aima-v02-q009",
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
    "id": "aima-v02-f010",
    "questionId": "aima-v02-q010",
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
    "id": "aima-v02-f011",
    "questionId": "aima-v02-q011",
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
    "id": "aima-v02-f012",
    "questionId": "aima-v02-q012",
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
    "id": "aima-v02-f013",
    "questionId": "aima-v02-q013",
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
    "id": "aima-v02-f014",
    "questionId": "aima-v02-q014",
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
    "id": "aima-v02-f015",
    "questionId": "aima-v02-q015",
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
    "id": "aima-v02-f016",
    "questionId": "aima-v02-q016",
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
    "id": "aima-v02-f017",
    "questionId": "aima-v02-q017",
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
    "id": "aima-v02-f018",
    "questionId": "aima-v02-q018",
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
    "id": "aima-v02-f019",
    "questionId": "aima-v02-q019",
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
    "id": "aima-v02-f020",
    "questionId": "aima-v02-q020",
    "front": "What is the difference between greedy best-first search and A*?",
    "back": "Greedy best-first expands the node minimising h(n) — the heuristic estimate alone. A* expands minimising f(n) = g(n) + h(n) — actual cost plus heuristic estimate. A* is optimal with an admissible heuristic; greedy is not.",
    "domain": "Search and Problem Solving",
    "difficulty": "Technical",
    "tags": [
      "search",
      "greedy",
      "a-star"
    ]
  },
  {
    "id": "aima-v02-f021",
    "questionId": "aima-v02-q021",
    "front": "Can two different admissible heuristics produce different A* behaviour?",
    "back": "Yes. If h2 dominates h1 (h2(n) >= h1(n) >= 0 for all n, both admissible), A* with h2 expands no more nodes than A* with h1. So tighter admissible heuristics are strictly better in practice while both remain optimal.",
    "domain": "Search and Problem Solving",
    "difficulty": "Researcher",
    "tags": [
      "search",
      "dominance",
      "a-star"
    ]
  },
  {
    "id": "aima-v02-f022",
    "questionId": "aima-v02-q022",
    "front": "What is the local-minima problem in hill climbing, and how do simulated annealing and random restarts handle it?",
    "back": "Hill climbing accepts only improvements, so it gets stuck at any local maximum. Simulated annealing sometimes accepts worse neighbours, with probability decreasing over time, so it can escape. Random restarts run hill climbing from many starts and keep the best result.",
    "domain": "Search and Problem Solving",
    "difficulty": "Researcher",
    "tags": [
      "optimisation",
      "local-minima",
      "simulated-annealing"
    ]
  },
  {
    "id": "aima-v02-f023",
    "questionId": "aima-v02-q023",
    "front": "What is a belief state, and why does partial observability force you to search in belief space?",
    "back": "A belief state is the set of physical states the agent thinks it might be in. Under partial observability, the agent does not know its true state — it must reason about which states are consistent with its percepts. Search then runs over belief states, not physical states.",
    "domain": "Search and Problem Solving",
    "difficulty": "Researcher",
    "tags": [
      "search",
      "belief-state",
      "partial-observability"
    ]
  },
  {
    "id": "aima-v02-f024",
    "questionId": "aima-v02-q024",
    "front": "What is online search, and why is it the only realistic option in unknown environments?",
    "back": "Online search interleaves planning and execution — the agent acts, observes, and updates its plan. In unknown or only partially-known environments, you cannot plan a complete solution in advance; online search trades optimality for being able to act at all.",
    "domain": "Search and Problem Solving",
    "difficulty": "Technical",
    "tags": [
      "search",
      "online",
      "agents"
    ]
  },
  {
    "id": "aima-v02-f025",
    "questionId": "aima-v02-q025",
    "front": "Does modern LLM-style reasoning re-discover classical search inside the language layer?",
    "back": "In many cases, yes. Chain-of-thought sampling and tree-of-thoughts are forms of search over partial reasoning traces. Beam search, MCTS-style verifiers, and self-consistency voting echo the classical search literature. The substrate is different; the algorithmic shape is familiar.",
    "domain": "Search and Problem Solving",
    "difficulty": "Frontier",
    "tags": [
      "search",
      "modern",
      "llm"
    ]
  },
  {
    "id": "aima-v02-f026",
    "questionId": "aima-v02-q026",
    "front": "When is \"just call a SAT/CSP solver\" the right answer in an AI system?",
    "back": "When the problem has clear discrete variables and constraints (scheduling, configuration, verification), SAT/CSP/MIP solvers crush both hand-written code and LLMs. The right architecture is often \"LLM extracts the problem from natural language, solver solves it, LLM explains the answer\".",
    "domain": "Search and Problem Solving",
    "difficulty": "Researcher",
    "tags": [
      "csp",
      "tool-use",
      "product"
    ]
  },
  {
    "id": "aima-v02-f027",
    "questionId": "aima-v02-q027",
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
    "id": "aima-v02-f028",
    "questionId": "aima-v02-q028",
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
    "id": "aima-v02-f029",
    "questionId": "aima-v02-q029",
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
    "id": "aima-v02-f030",
    "questionId": "aima-v02-q030",
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
    "id": "aima-v02-f031",
    "questionId": "aima-v02-q031",
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
    "id": "aima-v02-f032",
    "questionId": "aima-v02-q032",
    "front": "What is the role of evaluation functions in game-playing agents, and when do they hurt instead of help?",
    "back": "An evaluation function approximates the value of non-terminal positions. It is essential because games rarely play to depth in time. Bad evaluation functions can systematically prefer the wrong feature — e.g. material in chess without considering position — and the deeper the search, the more confident the wrong answer.",
    "domain": "Games and Adversarial Search",
    "difficulty": "Builder",
    "tags": [
      "games",
      "evaluation",
      "heuristic"
    ]
  },
  {
    "id": "aima-v02-f033",
    "questionId": "aima-v02-q033",
    "front": "What is the quiescence-search problem, and why does it matter for chess and Go?",
    "back": "A fixed-depth search may stop in the middle of a tactical exchange and apply an evaluation that misses the consequence. Quiescence search extends the depth at \"noisy\" positions (captures, checks) until the position stabilises. Without it, a search can confidently pick a losing move.",
    "domain": "Games and Adversarial Search",
    "difficulty": "Researcher",
    "tags": [
      "games",
      "quiescence",
      "horizon-effect"
    ]
  },
  {
    "id": "aima-v02-f034",
    "questionId": "aima-v02-q034",
    "front": "What changes when the game tree has chance nodes?",
    "back": "Chance nodes replace min-or-max layers with an expectation over outcomes weighted by probability. The algorithm is called expectiminimax. Heuristics must be calibrated to value, not just rank — because expected utility is sensitive to value scale.",
    "domain": "Games and Adversarial Search",
    "difficulty": "Technical",
    "tags": [
      "games",
      "expectiminimax",
      "stochastic"
    ]
  },
  {
    "id": "aima-v02-f035",
    "questionId": "aima-v02-q035",
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
    "id": "aima-v02-f036",
    "questionId": "aima-v02-q036",
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
    "id": "aima-v02-f037",
    "questionId": "aima-v02-q037",
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
    "id": "aima-v02-f038",
    "questionId": "aima-v02-q038",
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
    "id": "aima-v02-f039",
    "questionId": "aima-v02-q039",
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
    "id": "aima-v02-f040",
    "questionId": "aima-v02-q040",
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
    "id": "aima-v02-f041",
    "questionId": "aima-v02-q041",
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
    "id": "aima-v02-f042",
    "questionId": "aima-v02-q042",
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
    "id": "aima-v02-f043",
    "questionId": "aima-v02-q043",
    "front": "Why does CSP structure let backtracking outperform generic search on the same problem?",
    "back": "CSP backtracking assigns one variable at a time and prunes immediately when any constraint is violated. Generic search treats the state as a black box and has to discover the constraint structure through failed paths. The CSP framing exposes structure the algorithm can exploit directly.",
    "domain": "Constraint Satisfaction",
    "difficulty": "Builder",
    "tags": [
      "csp",
      "backtracking",
      "structure"
    ]
  },
  {
    "id": "aima-v02-f044",
    "questionId": "aima-v02-q044",
    "front": "What is the difference between arc consistency and path consistency?",
    "back": "Arc consistency ensures that for every value in a variable's domain, there is a consistent value in each adjacent variable. Path consistency ensures the same for every pair of variables connected through any third variable. AC-3 enforces arc consistency in polynomial time; path consistency is more expensive and used selectively.",
    "domain": "Constraint Satisfaction",
    "difficulty": "Researcher",
    "tags": [
      "csp",
      "arc-consistency",
      "path-consistency"
    ]
  },
  {
    "id": "aima-v02-f045",
    "questionId": "aima-v02-q045",
    "front": "What is the min-conflicts heuristic, and why does it work so well empirically?",
    "back": "Min-conflicts picks the value that violates the fewest constraints for the variable being reassigned. It is greedy but with random tie-breaking it solves the N-queens problem at N=1,000,000 in milliseconds. It works because real CSPs have many near-optimal solutions densely scattered in the search space.",
    "domain": "Constraint Satisfaction",
    "difficulty": "Researcher",
    "tags": [
      "csp",
      "min-conflicts",
      "local-search"
    ]
  },
  {
    "id": "aima-v02-f046",
    "questionId": "aima-v02-q046",
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
    "id": "aima-v02-f047",
    "questionId": "aima-v02-q047",
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
    "id": "aima-v02-f048",
    "questionId": "aima-v02-q048",
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
    "id": "aima-v02-f049",
    "questionId": "aima-v02-q049",
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
    "id": "aima-v02-f050",
    "questionId": "aima-v02-q050",
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
    "id": "aima-v02-f051",
    "questionId": "aima-v02-q051",
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
    "id": "aima-v03-f001",
    "questionId": "aima-v03-q001",
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
    "id": "aima-v03-f002",
    "questionId": "aima-v03-q002",
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
    "id": "aima-v03-f003",
    "questionId": "aima-v03-q003",
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
    "id": "aima-v03-f004",
    "questionId": "aima-v03-q004",
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
    "id": "aima-v03-f005",
    "questionId": "aima-v03-q005",
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
    "id": "aima-v03-f006",
    "questionId": "aima-v03-q006",
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
    "id": "aima-v03-f007",
    "questionId": "aima-v03-q007",
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
    "id": "aima-v03-f008",
    "questionId": "aima-v03-q008",
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
    "id": "aima-v03-f009",
    "questionId": "aima-v03-q009",
    "front": "What is the difference between syntax and semantics in logic?",
    "back": "Syntax defines which strings of symbols are well-formed sentences. Semantics defines what those sentences mean — which truth values they take in which models. A KB can be syntactically correct and semantically wrong.",
    "domain": "Logic and Inference",
    "difficulty": "Builder",
    "tags": [
      "logic",
      "syntax",
      "semantics"
    ]
  },
  {
    "id": "aima-v03-f010",
    "questionId": "aima-v03-q010",
    "front": "What is a model in formal logic?",
    "back": "A model is a possible state of affairs — a specific assignment of values to symbols that makes sentences either true or false. Entailment is defined over models: A entails B if B is true in every model where A is true.",
    "domain": "Logic and Inference",
    "difficulty": "Builder",
    "tags": [
      "logic",
      "model",
      "semantics"
    ]
  },
  {
    "id": "aima-v03-f011",
    "questionId": "aima-v03-q011",
    "front": "How does model checking differ from theorem proving?",
    "back": "Model checking enumerates all possible models and checks whether the goal is true in each one consistent with the KB. Theorem proving manipulates sentences syntactically using inference rules. Both can establish entailment; their costs and applicability differ.",
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "tags": [
      "logic",
      "model-checking",
      "theorem-proving"
    ]
  },
  {
    "id": "aima-v03-f012",
    "questionId": "aima-v03-q012",
    "front": "What is the difference between TELL and ASK in a knowledge-based agent?",
    "back": "TELL adds a sentence to the KB; ASK queries whether a sentence is entailed by the KB. The agent loop is: percept → TELL the KB, ASK for the next action, TELL what action was taken. The KB is the unit of abstraction.",
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "tags": [
      "logic",
      "kb",
      "agent"
    ]
  },
  {
    "id": "aima-v03-f013",
    "questionId": "aima-v03-q013",
    "front": "What are logical connectives, and which two are sufficient for all of propositional logic?",
    "back": "The classical connectives are AND, OR, NOT, IMPLIES, IFF. NAND alone is sufficient — every propositional formula can be expressed using just NAND. So is NOR. This is why NAND gates can implement any digital circuit.",
    "domain": "Logic and Inference",
    "difficulty": "Builder",
    "tags": [
      "logic",
      "connectives",
      "completeness"
    ]
  },
  {
    "id": "aima-v03-f014",
    "questionId": "aima-v03-q014",
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
    "id": "aima-v03-f015",
    "questionId": "aima-v03-q015",
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
    "id": "aima-v03-f016",
    "questionId": "aima-v03-q016",
    "front": "What is universal instantiation, and why does it require a fresh variable?",
    "back": "Universal instantiation derives a specific instance of a universally quantified sentence by substituting any ground term for the variable. It requires the term to be free (no name clashes) — otherwise you would conflate different individuals and produce unsound conclusions.",
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "tags": [
      "logic",
      "quantifier",
      "instantiation"
    ]
  },
  {
    "id": "aima-v03-f017",
    "questionId": "aima-v03-q017",
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
    "id": "aima-v03-f018",
    "questionId": "aima-v03-q018",
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
    "id": "aima-v03-f019",
    "questionId": "aima-v03-q019",
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
    "id": "aima-v03-f020",
    "questionId": "aima-v03-q020",
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
    "id": "aima-v03-f021",
    "questionId": "aima-v03-q021",
    "front": "What is generalised Modus Ponens, and why is it the basis of FOL forward chaining?",
    "back": "Generalised Modus Ponens combines unification with classical Modus Ponens: given facts p1, p2... and a rule p1' ∧ p2' ⇒ q, if there is a substitution θ such that all pi = pi'θ, then qθ is derivable. This lets forward chaining work over rules with variables.",
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "tags": [
      "logic",
      "modus-ponens",
      "forward-chaining"
    ]
  },
  {
    "id": "aima-v03-f022",
    "questionId": "aima-v03-q022",
    "front": "Why is unification both essential and subtle?",
    "back": "Unification finds a substitution that makes two expressions identical. It is essential because FOL rules contain variables; without unification you cannot match rules to facts. It is subtle because the occurs check (a variable cannot unify with a term containing itself) is often omitted, allowing unsound proofs.",
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "tags": [
      "logic",
      "unification",
      "fol"
    ]
  },
  {
    "id": "aima-v03-f023",
    "questionId": "aima-v03-q023",
    "front": "What is resolution refutation, and why is it complete?",
    "back": "Resolution combines two clauses with complementary literals to produce a new clause. To prove KB entails α, you add ¬α to the KB and apply resolution until you derive the empty clause (a contradiction). Resolution is refutation-complete for FOL — any entailed sentence can be proved this way.",
    "domain": "Logic and Inference",
    "difficulty": "Researcher",
    "tags": [
      "logic",
      "resolution",
      "completeness"
    ]
  },
  {
    "id": "aima-v03-f024",
    "questionId": "aima-v03-q024",
    "front": "What are Horn clauses and why do they make Prolog tractable?",
    "back": "A Horn clause has at most one positive literal — equivalently, a rule with a single conclusion. Inference over Horn clauses is decidable in polynomial time via forward or backward chaining. Full FOL is only semidecidable; restricting to Horn clauses is what makes it computationally feasible.",
    "domain": "Logic and Inference",
    "difficulty": "Builder",
    "tags": [
      "logic",
      "horn",
      "prolog"
    ]
  },
  {
    "id": "aima-v03-f025",
    "questionId": "aima-v03-q025",
    "front": "What would \"sound inference\" mean for an LLM, and why is it currently impossible?",
    "back": "Sound inference means every derived sentence is entailed by the premises. LLMs do not perform formal inference — they sample plausible next tokens. Even when their outputs look like sound reasoning, they have no guarantee of soundness. Verifier sandwiches (proof checkers, code execution, SAT solvers) are the current path to soundness.",
    "domain": "Logic and Inference",
    "difficulty": "Researcher",
    "tags": [
      "logic",
      "llm",
      "soundness"
    ]
  },
  {
    "id": "aima-v03-f026",
    "questionId": "aima-v03-q026",
    "front": "What is the difference between progression and regression planning?",
    "back": "Progression searches forward from the initial state by applying actions whose preconditions match. Regression searches backward from the goal by finding actions whose effects achieve goal literals. Regression tends to focus on goal-relevant actions; progression suits highly constrained initial states.",
    "domain": "Planning",
    "difficulty": "Builder",
    "tags": [
      "planning",
      "progression",
      "regression"
    ]
  },
  {
    "id": "aima-v03-f027",
    "questionId": "aima-v03-q027",
    "front": "What is a planning graph, and what does it let you compute?",
    "back": "A planning graph alternates state-literal layers and action layers, with mutex relations marking pairs that cannot both be true at the same step. It does not solve the planning problem directly but provides admissible heuristics (e.g. the level at which a goal literal first appears) that drive GraphPlan and many modern planners.",
    "domain": "Planning",
    "difficulty": "Technical",
    "tags": [
      "planning",
      "planning-graph",
      "heuristic"
    ]
  },
  {
    "id": "aima-v03-f028",
    "questionId": "aima-v03-q028",
    "front": "What is a mutex constraint in a planning graph?",
    "back": "A mutex (mutual exclusion) relation marks pairs of literals or actions that cannot coexist at the same layer — because they have conflicting effects, an action negates the other's precondition, or their preconditions are themselves mutex. Mutex propagation tightens the heuristic.",
    "domain": "Planning",
    "difficulty": "Technical",
    "tags": [
      "planning",
      "mutex",
      "planning-graph"
    ]
  },
  {
    "id": "aima-v03-f029",
    "questionId": "aima-v03-q029",
    "front": "What is SATPLAN, and what trade-off does it make?",
    "back": "SATPLAN encodes a bounded-horizon planning problem as a propositional SAT instance and lets a SAT solver find a plan. It trades planner-specific search for the engineering investment in fast SAT solvers. It dominated some planning competitions for years before specialised planners caught up.",
    "domain": "Planning",
    "difficulty": "Researcher",
    "tags": [
      "planning",
      "satplan",
      "sat"
    ]
  },
  {
    "id": "aima-v03-f030",
    "questionId": "aima-v03-q030",
    "front": "What is partial-order planning?",
    "back": "Partial-order planning represents a plan as a set of actions with ordering constraints — only ordering actions when their effects require it. This avoids over-constraining the plan, supports parallel execution, and reduces backtracking. The trade-off is more complex plan representation and bookkeeping.",
    "domain": "Planning",
    "difficulty": "Technical",
    "tags": [
      "planning",
      "partial-order"
    ]
  },
  {
    "id": "aima-v03-f031",
    "questionId": "aima-v03-q031",
    "front": "How should a product builder think about LLM-based planning today?",
    "back": "LLM-based planners are flexible but unreliable on long horizons. Treat them as plan generators with mandatory verification: produce candidate plans, validate against preconditions, run shortest plans first, monitor execution, and provide an explicit replan trigger. Pure-LLM planning without these scaffolds is a demo, not a product.",
    "domain": "Planning",
    "difficulty": "Founder",
    "tags": [
      "planning",
      "llm",
      "product"
    ]
  },
  {
    "id": "aima-v03-f032",
    "questionId": "aima-v03-q032",
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
    "id": "aima-v03-f033",
    "questionId": "aima-v03-q033",
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
    "id": "aima-v03-f034",
    "questionId": "aima-v03-q034",
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
    "id": "aima-v03-f035",
    "questionId": "aima-v03-q035",
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
    "id": "aima-v03-f036",
    "questionId": "aima-v03-q036",
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
    "id": "aima-v03-f037",
    "questionId": "aima-v03-q037",
    "front": "What is hierarchical task network (HTN) planning, and where does it shine?",
    "back": "HTN planning decomposes high-level tasks into lower-level subtasks recursively until primitive actions are reached. The decomposition rules are hand-designed, which limits generality but makes the search tractable. HTN dominates real-world planning where domain hierarchy is natural — military, manufacturing, surgery, recipes.",
    "domain": "Planning",
    "difficulty": "Researcher",
    "tags": [
      "planning",
      "htn",
      "hierarchical"
    ]
  },
  {
    "id": "aima-v03-f038",
    "questionId": "aima-v03-q038",
    "front": "What is contingent planning, and how does it handle uncertainty?",
    "back": "Contingent planning generates plans that include conditional branches based on observations made during execution. The agent can act, observe, and choose which subplan to follow based on what it sees. This bridges classical planning and POMDP-style decision-making.",
    "domain": "Planning",
    "difficulty": "Researcher",
    "tags": [
      "planning",
      "contingent",
      "uncertainty"
    ]
  },
  {
    "id": "aima-v03-f039",
    "questionId": "aima-v03-q039",
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
    "id": "aima-v03-f040",
    "questionId": "aima-v03-q040",
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
    "id": "aima-v03-f041",
    "questionId": "aima-v03-q041",
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
    "id": "aima-v03-f042",
    "questionId": "aima-v03-q042",
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
    "id": "aima-v03-f043",
    "questionId": "aima-v03-q043",
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
    "id": "aima-v03-f044",
    "questionId": "aima-v03-q044",
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
    "id": "aima-v03-f045",
    "questionId": "aima-v03-q045",
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
    "id": "aima-v03-f046",
    "questionId": "aima-v03-q046",
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
    "id": "aima-v03-f047",
    "questionId": "aima-v03-q047",
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
    "id": "aima-v03-f048",
    "questionId": "aima-v03-q048",
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
    "id": "aima-v03-f049",
    "questionId": "aima-v03-q049",
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
    "id": "aima-v03-f050",
    "questionId": "aima-v03-q050",
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
    "id": "aima-v03-f051",
    "questionId": "aima-v03-q051",
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
    "id": "aima-v03-f052",
    "questionId": "aima-v03-q052",
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
    "id": "aima-v03-f053",
    "questionId": "aima-v03-q053",
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
    "id": "aima-v03-f054",
    "questionId": "aima-v03-q054",
    "front": "What is an ontology, and how is it different from a database schema?",
    "back": "An ontology specifies concepts, properties, and relationships in a domain with formal semantics — what is true. A database schema specifies how data is stored — what the records look like. Ontologies support reasoning across heterogeneous data; schemas optimise storage and retrieval.",
    "domain": "Knowledge Representation",
    "difficulty": "Builder",
    "tags": [
      "kr",
      "ontology",
      "schema"
    ]
  },
  {
    "id": "aima-v03-f055",
    "questionId": "aima-v03-q055",
    "front": "What are inheritance and default reasoning, and why are they tricky to combine?",
    "back": "Inheritance says subcategories inherit properties from supercategories. Default reasoning says properties hold unless contradicted (\"birds fly, but penguins do not\"). Combining them produces multiple inheritance paths with conflicting defaults — and choosing the right resolution is a research problem (the Nixon Diamond).",
    "domain": "Knowledge Representation",
    "difficulty": "Technical",
    "tags": [
      "kr",
      "inheritance",
      "default-reasoning"
    ]
  },
  {
    "id": "aima-v03-f056",
    "questionId": "aima-v03-q056",
    "front": "What is nonmonotonic reasoning, and why does classical logic struggle with it?",
    "back": "Classical logic is monotonic: adding facts can only add conclusions, never remove them. Real reasoning is nonmonotonic — learning that Tweety is a penguin retracts the default conclusion that Tweety flies. Circumscription, default logic, and answer set programming are formal attempts to capture this.",
    "domain": "Knowledge Representation",
    "difficulty": "Researcher",
    "tags": [
      "kr",
      "nonmonotonic",
      "default"
    ]
  },
  {
    "id": "aima-v03-f057",
    "questionId": "aima-v03-q057",
    "front": "What are description logics, and what trade-off do they make?",
    "back": "Description logics are decidable fragments of FOL designed for reasoning about concepts and subsumption (is-a relationships). They power OWL, biomedical ontologies (SNOMED CT, GO), and enterprise data catalogues. They trade FOL's expressiveness for guaranteed reasoning.",
    "domain": "Knowledge Representation",
    "difficulty": "Technical",
    "tags": [
      "kr",
      "description-logic",
      "owl"
    ]
  },
  {
    "id": "aima-v03-f058",
    "questionId": "aima-v03-q058",
    "front": "How do you represent events and time in a KR system?",
    "back": "Event calculus and situation calculus add fluents (time-varying predicates), events, and the temporal relations between them. They formalise what \"holds at time t\" and how events change which fluents hold. Modern temporal databases and temporal description logics extend these ideas.",
    "domain": "Knowledge Representation",
    "difficulty": "Technical",
    "tags": [
      "kr",
      "time",
      "events"
    ]
  },
  {
    "id": "aima-v03-f059",
    "questionId": "aima-v03-q059",
    "front": "Are LLMs replacing knowledge representation, or quietly relying on it?",
    "back": "LLMs replace explicit KR with implicit weights — knowledge as distributed parameters. But they often fail on tasks where explicit relations matter (kinship, temporal ordering, cross-references). Hybrid systems that use knowledge graphs, ontologies, and structured retrieval still beat pure LLMs on many enterprise tasks.",
    "domain": "Knowledge Representation",
    "difficulty": "Frontier",
    "tags": [
      "kr",
      "llm",
      "hybrid"
    ]
  },
  {
    "id": "aima-v04-f001",
    "questionId": "aima-v04-q001",
    "front": "What does it mean to interpret probability as degree of belief?",
    "back": "In the Bayesian view, a probability is a numerical measure of an agent's degree of belief in a proposition. It is updated by evidence according to Bayes' rule. This contrasts with the frequentist view, where probability is the limiting frequency of an event in repeated trials. AIMA uses the Bayesian view because rational agents must reason about one-off events.",
    "domain": "Uncertainty and Probability",
    "difficulty": "Beginner",
    "tags": [
      "probability",
      "bayesian",
      "frequentist"
    ]
  },
  {
    "id": "aima-v04-f002",
    "questionId": "aima-v04-q002",
    "front": "What is the chain rule of probability, and why is it the basis of joint distributions?",
    "back": "P(X1, X2, ..., Xn) = P(X1) · P(X2|X1) · P(X3|X1,X2) · ... · P(Xn|X1,...,Xn-1). Any joint distribution can be decomposed into a product of conditionals. Bayesian networks exploit conditional independence to drop most of the conditioning variables in each factor.",
    "domain": "Uncertainty and Probability",
    "difficulty": "Builder",
    "tags": [
      "probability",
      "chain-rule",
      "joint"
    ]
  },
  {
    "id": "aima-v04-f003",
    "questionId": "aima-v04-q003",
    "front": "What is the difference between marginalisation and conditioning?",
    "back": "Marginalisation sums out a variable to get the joint over fewer variables: P(X) = sum_y P(X, y). Conditioning fixes the value of a variable: P(X | y) = P(X, y) / P(y). Marginalisation throws information away; conditioning incorporates information.",
    "domain": "Uncertainty and Probability",
    "difficulty": "Builder",
    "tags": [
      "probability",
      "marginalisation",
      "conditioning"
    ]
  },
  {
    "id": "aima-v04-f004",
    "questionId": "aima-v04-q004",
    "front": "What is the difference between independence and conditional independence?",
    "back": "A and B are independent if P(A, B) = P(A) · P(B). They are conditionally independent given C if P(A, B | C) = P(A | C) · P(B | C). Conditional independence holds far more often in real domains and is what makes Bayes nets compact.",
    "domain": "Uncertainty and Probability",
    "difficulty": "Technical",
    "tags": [
      "probability",
      "independence"
    ]
  },
  {
    "id": "aima-v04-f005",
    "questionId": "aima-v04-q005",
    "front": "When does Naive Bayes work despite assuming independence that is obviously false?",
    "back": "Naive Bayes assumes features are conditionally independent given the class. The assumption is rarely true, but classification depends on the rank order of class probabilities, not absolute values. Even biased estimates often preserve the correct rank order, especially with redundant features. This is why Naive Bayes is a strong baseline for text classification.",
    "domain": "Uncertainty and Probability",
    "difficulty": "Researcher",
    "tags": [
      "probability",
      "naive-bayes",
      "classification"
    ]
  },
  {
    "id": "aima-v04-f006",
    "questionId": "aima-v04-q006",
    "front": "When should a product use a calibrated probability instead of a fixed threshold?",
    "back": "Use calibrated probability when the decision depends on the cost-weighted value of the outcome — fraud, lending, triage. Fixed thresholds make sense only when the cost structure is symmetric and stable. Calibration also lets you let users set their own risk tolerance, instead of hard-coding one.",
    "domain": "Uncertainty and Probability",
    "difficulty": "Founder",
    "tags": [
      "probability",
      "calibration",
      "product"
    ]
  },
  {
    "id": "aima-v04-f007",
    "questionId": "aima-v04-q007",
    "front": "If an LLM is asked the same question twice, why are different answers a feature, not a bug?",
    "back": "A probabilistic model that always gave the same answer to a question with multiple plausible answers would be overconfident — assigning probability 1 to one of many reasonable continuations. Stochastic sampling is honest about the uncertainty. The bug is when the model is wrong in the same way every time; the feature is when it explores the plausible space.",
    "domain": "Uncertainty and Probability",
    "difficulty": "Frontier",
    "tags": [
      "probability",
      "llm",
      "uncertainty"
    ]
  },
  {
    "id": "aima-v04-f008",
    "questionId": "aima-v04-q008",
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
    "id": "aima-v04-f009",
    "questionId": "aima-v04-q009",
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
    "id": "aima-v04-f010",
    "questionId": "aima-v04-q010",
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
    "id": "aima-v04-f011",
    "questionId": "aima-v04-q011",
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
    "id": "aima-v04-f012",
    "questionId": "aima-v04-q012",
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
    "id": "aima-v04-f013",
    "questionId": "aima-v04-q013",
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
    "id": "aima-v04-f014",
    "questionId": "aima-v04-q014",
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
    "id": "aima-v04-f015",
    "questionId": "aima-v04-q015",
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
    "id": "aima-v04-f016",
    "questionId": "aima-v04-q016",
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
    "id": "aima-v04-f017",
    "questionId": "aima-v04-q017",
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
    "id": "aima-v04-f018",
    "questionId": "aima-v04-q018",
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
    "id": "aima-v04-f019",
    "questionId": "aima-v04-q019",
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
    "id": "aima-v04-f020",
    "questionId": "aima-v04-q020",
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
    "id": "aima-v04-f021",
    "questionId": "aima-v04-q021",
    "front": "What is a conditional probability table in a Bayes net?",
    "back": "Each node has a CPT specifying P(node | parents) for every combination of parent values. With n binary parents, the CPT has 2^n rows. Bayes nets are compact because n is much smaller than the number of total variables — local rather than global dependence.",
    "domain": "Bayesian Networks",
    "difficulty": "Builder",
    "tags": [
      "bayes",
      "cpt",
      "parameters"
    ]
  },
  {
    "id": "aima-v04-f022",
    "questionId": "aima-v04-q022",
    "front": "What is d-separation, and how is it used?",
    "back": "D-separation is a graph criterion that determines whether two nodes are conditionally independent given a set of evidence nodes. Three patterns matter — chain, fork, collider — and the rules specify which paths are blocked or opened by conditioning. It lets you reason about independence without computing probabilities.",
    "domain": "Bayesian Networks",
    "difficulty": "Researcher",
    "tags": [
      "bayes",
      "d-separation",
      "independence"
    ]
  },
  {
    "id": "aima-v04-f023",
    "questionId": "aima-v04-q023",
    "front": "Why is exact inference in Bayesian networks NP-hard in general?",
    "back": "Exact inference reduces to summing over all possible assignments to unobserved variables. For densely connected networks this is exponential in the number of variables. The treewidth of the graph bounds tractability — small treewidth means tractable, large treewidth means intractable. Most real Bayes nets have unfortunate treewidth.",
    "domain": "Bayesian Networks",
    "difficulty": "Researcher",
    "tags": [
      "bayes",
      "complexity",
      "treewidth"
    ]
  },
  {
    "id": "aima-v04-f024",
    "questionId": "aima-v04-q024",
    "front": "What is rejection sampling, and why is it usually a poor inference algorithm?",
    "back": "Rejection sampling draws full samples from the prior and rejects those inconsistent with the evidence. The rejection rate explodes when evidence is unlikely — most samples are wasted. Likelihood weighting fixes this by always sampling consistent with evidence and weighting by likelihood, but introduces bias for low-probability evidence.",
    "domain": "Bayesian Networks",
    "difficulty": "Technical",
    "tags": [
      "bayes",
      "sampling",
      "rejection"
    ]
  },
  {
    "id": "aima-v04-f025",
    "questionId": "aima-v04-q025",
    "front": "What is Gibbs sampling, and what makes it useful for Bayes net inference?",
    "back": "Gibbs sampling iteratively resamples each variable from its conditional distribution given the current values of all others. The chain converges to the joint posterior. It is easy to implement when each conditional is tractable and works on networks where exact inference is infeasible. Convergence speed is the practical concern.",
    "domain": "Bayesian Networks",
    "difficulty": "Researcher",
    "tags": [
      "bayes",
      "gibbs",
      "mcmc"
    ]
  },
  {
    "id": "aima-v04-f026",
    "questionId": "aima-v04-q026",
    "front": "What would it take for a deep neural network to give a calibrated probability?",
    "back": "Two things: training procedures that explicitly reward calibration (temperature scaling, label smoothing, focal loss), and an evaluation discipline that measures it (Brier score, expected calibration error, reliability diagrams). Most pretrained models are systematically overconfident on out-of-distribution inputs; fixing this is an active research area.",
    "domain": "Bayesian Networks",
    "difficulty": "Frontier",
    "tags": [
      "bayes",
      "calibration",
      "dl"
    ]
  },
  {
    "id": "aima-v04-f027",
    "questionId": "aima-v04-q027",
    "front": "What is the Markov assumption in temporal models?",
    "back": "The Markov assumption says the future is conditionally independent of the past given the present state — P(X_t+1 | X_0, ..., X_t) = P(X_t+1 | X_t). It makes temporal inference tractable because you only need to track the current state, not the full history. The cost is that any real Markov violation appears as noise.",
    "domain": "Temporal Models",
    "difficulty": "Builder",
    "tags": [
      "temporal",
      "markov",
      "assumption"
    ]
  },
  {
    "id": "aima-v04-f028",
    "questionId": "aima-v04-q028",
    "front": "What is the difference between filtering, prediction, smoothing, and most-likely explanation?",
    "back": "Filtering: belief over the current state given all evidence so far. Prediction: belief over future states. Smoothing: belief over past states given all evidence (past and future). Most-likely explanation: the most probable sequence of hidden states. Each has its own efficient algorithm (forward, forward-extrapolation, forward-backward, Viterbi).",
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
    "id": "aima-v04-f029",
    "questionId": "aima-v04-q029",
    "front": "What is the Viterbi algorithm, and what does it compute?",
    "back": "Viterbi computes the most probable sequence of hidden states given a sequence of observations. It runs in O(T · S^2) time where T is the number of time steps and S is the number of states. Speech recognition, gene-finding, and many sequence-labelling problems use it as the inference engine.",
    "domain": "Temporal Models",
    "difficulty": "Researcher",
    "tags": [
      "temporal",
      "viterbi",
      "hmm"
    ]
  },
  {
    "id": "aima-v04-f030",
    "questionId": "aima-v04-q030",
    "front": "What is a particle filter, and when is it the right choice?",
    "back": "A particle filter represents the belief state as a set of weighted samples (particles). At each step, particles are propagated by the transition model, weighted by the observation likelihood, and resampled. It works when Kalman filters fail (non-Gaussian, non-linear) and is the standard in robotics localisation (SLAM).",
    "domain": "Temporal Models",
    "difficulty": "Researcher",
    "tags": [
      "temporal",
      "particle-filter",
      "robotics"
    ]
  },
  {
    "id": "aima-v04-f031",
    "questionId": "aima-v04-q031",
    "front": "What is data association, and why does it make multi-target tracking hard?",
    "back": "Data association is matching observations to the targets that generated them. With one target it is trivial; with many targets it is combinatorial. Approaches include nearest-neighbour matching, joint probabilistic data association, and multi-hypothesis tracking. Most real multi-target tracking errors come from association errors, not from filter errors.",
    "domain": "Temporal Models",
    "difficulty": "Technical",
    "tags": [
      "temporal",
      "tracking",
      "data-association"
    ]
  },
  {
    "id": "aima-v04-f032",
    "questionId": "aima-v04-q032",
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
    "id": "aima-v04-f033",
    "questionId": "aima-v04-q033",
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
    "id": "aima-v04-f034",
    "questionId": "aima-v04-q034",
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
    "id": "aima-v04-f035",
    "questionId": "aima-v04-q035",
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
    "id": "aima-v04-f036",
    "questionId": "aima-v04-q036",
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
    "id": "aima-v04-f037",
    "questionId": "aima-v04-q037",
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
    "id": "aima-v04-f038",
    "questionId": "aima-v04-q038",
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
    "id": "aima-v04-f039",
    "questionId": "aima-v04-q039",
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
    "id": "aima-v04-f040",
    "questionId": "aima-v04-q040",
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
    "id": "aima-v04-f041",
    "questionId": "aima-v04-q041",
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
    "id": "aima-v04-f042",
    "questionId": "aima-v04-q042",
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
    "id": "aima-v04-f043",
    "questionId": "aima-v04-q043",
    "front": "Why is utility the bridge between belief and action?",
    "back": "Probability says how likely outcomes are; utility says how desirable they are. Together they let the agent compute expected utility — the average desirability weighted by probability. Without utility, beliefs cannot drive action; without probability, utilities cannot weigh outcomes.",
    "domain": "Utility and Decision Theory",
    "difficulty": "Beginner",
    "tags": [
      "util",
      "decision-theory",
      "rationality"
    ]
  },
  {
    "id": "aima-v04-f044",
    "questionId": "aima-v04-q044",
    "front": "What does it mean for utility to be defined \"up to positive affine transformation\"?",
    "back": "A utility function U and any U' = aU + b (with a > 0) represent the same preferences. Doubling all utilities, or adding a constant, does not change which actions maximise expected utility. So utility scales are arbitrary and comparisons across agents are not directly meaningful.",
    "domain": "Utility and Decision Theory",
    "difficulty": "Builder",
    "tags": [
      "util",
      "scaling",
      "vnm"
    ]
  },
  {
    "id": "aima-v04-f045",
    "questionId": "aima-v04-q045",
    "front": "What is multiattribute utility theory, and what assumption underlies it?",
    "back": "MAUT defines a multi-attribute utility function where U(X1,...,Xn) is decomposable into a function of single-attribute utilities. The key assumption is preferential independence: the preference ordering on one attribute does not depend on the values of others. When it holds, the joint utility decomposes; when it does not, MAUT is unreliable.",
    "domain": "Utility and Decision Theory",
    "difficulty": "Researcher",
    "tags": [
      "util",
      "maut",
      "multi-attribute"
    ]
  },
  {
    "id": "aima-v04-f046",
    "questionId": "aima-v04-q046",
    "front": "What is the value of perfect information, and why is it always non-negative?",
    "back": "The value of perfect information for variable X is the expected improvement in utility from observing X before deciding, compared to deciding without observing it. It is always non-negative because the agent can ignore information; learning X cannot make worse decisions in expectation. The cost of acquiring information is separate and must be subtracted to decide whether to acquire it.",
    "domain": "Utility and Decision Theory",
    "difficulty": "Technical",
    "tags": [
      "util",
      "voi",
      "decision"
    ]
  },
  {
    "id": "aima-v04-f047",
    "questionId": "aima-v04-q047",
    "front": "When does asking for more information beat acting on what you have?",
    "back": "When the cost of acquiring the information is less than the expected improvement in decision quality. In an AI product, this becomes: when should the system pause and ask a clarifying question instead of guessing? The right answer depends on the cost of a wrong action versus the cost of friction.",
    "domain": "Utility and Decision Theory",
    "difficulty": "Founder",
    "tags": [
      "util",
      "voi",
      "product"
    ]
  },
  {
    "id": "aima-v04-f048",
    "questionId": "aima-v04-q048",
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
    "id": "aima-v04-f049",
    "questionId": "aima-v04-q049",
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
    "id": "aima-v04-f050",
    "questionId": "aima-v04-q050",
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
    "id": "aima-v04-f051",
    "questionId": "aima-v04-q051",
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
    "id": "aima-v04-f052",
    "questionId": "aima-v04-q052",
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
    "id": "aima-v04-f053",
    "questionId": "aima-v04-q053",
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
    "id": "aima-v04-f054",
    "questionId": "aima-v04-q054",
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
    "id": "aima-v04-f055",
    "questionId": "aima-v04-q055",
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
    "id": "aima-v04-f056",
    "questionId": "aima-v04-q056",
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
    "id": "aima-v04-f057",
    "questionId": "aima-v04-q057",
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
    "id": "aima-v04-f058",
    "questionId": "aima-v04-q058",
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
    "id": "aima-v04-f059",
    "questionId": "aima-v04-q059",
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
    "id": "aima-v04-f060",
    "questionId": "aima-v04-q060",
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
    "id": "aima-v04-f061",
    "questionId": "aima-v04-q061",
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
    "id": "aima-v04-f062",
    "questionId": "aima-v04-q062",
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
    "id": "aima-v04-f063",
    "questionId": "aima-v04-q063",
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
    "id": "aima-v04-f064",
    "questionId": "aima-v04-q064",
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
    "id": "aima-v04-f065",
    "questionId": "aima-v04-q065",
    "front": "What is the role of the discount factor γ in an MDP?",
    "back": "γ ∈ [0, 1) weights future rewards: a reward at time t is worth γ^t of the same reward now. It ensures total reward is finite, models impatience or uncertainty about continuation, and pushes the agent toward shorter solutions. Choosing γ is a design decision with real impact on behaviour.",
    "domain": "MDPs and POMDPs",
    "difficulty": "Builder",
    "tags": [
      "mdp",
      "discount",
      "bellman"
    ]
  },
  {
    "id": "aima-v04-f066",
    "questionId": "aima-v04-q066",
    "front": "When does value iteration converge, and at what rate?",
    "back": "Value iteration converges to the optimal value function for any γ < 1, because the Bellman operator is a contraction mapping with contraction factor γ. The rate is geometric: after k iterations, the error is at most γ^k times the initial error. Smaller γ converges faster but gives shorter planning horizons.",
    "domain": "MDPs and POMDPs",
    "difficulty": "Researcher",
    "tags": [
      "mdp",
      "convergence",
      "bellman"
    ]
  },
  {
    "id": "aima-v04-f067",
    "questionId": "aima-v04-q067",
    "front": "What is policy iteration, and how does it relate to value iteration?",
    "back": "Policy iteration alternates two steps: evaluate the current policy (solve V for that policy via linear equations or iterative computation) and improve the policy greedily based on V. It usually converges in fewer iterations than value iteration because policy changes happen in larger steps. Each iteration is more expensive, so total time can be similar.",
    "domain": "MDPs and POMDPs",
    "difficulty": "Researcher",
    "tags": [
      "mdp",
      "policy-iteration",
      "bellman"
    ]
  },
  {
    "id": "aima-v04-f068",
    "questionId": "aima-v04-q068",
    "front": "How does a POMDP's belief space differ from an MDP's state space?",
    "back": "In an MDP the agent acts on the true state. In a POMDP the agent has a probability distribution over states — the belief state. The belief space is continuous (a probability simplex) even when the underlying state space is discrete. Optimal POMDP policies are functions of the belief state.",
    "domain": "MDPs and POMDPs",
    "difficulty": "Researcher",
    "tags": [
      "pomdp",
      "belief-state"
    ]
  },
  {
    "id": "aima-v04-f069",
    "questionId": "aima-v04-q069",
    "front": "Why is solving POMDPs exactly PSPACE-complete?",
    "back": "Even small POMDPs have continuous belief spaces and the optimal policy can be encoded as a piecewise-linear function (alpha-vectors). Computing the optimal policy is PSPACE-complete in the planning horizon. In practice, sampling-based methods (POMCP, particle-filter-based POMDP solvers) and learned policies (deep RL with recurrent networks) approximate the solution.",
    "domain": "MDPs and POMDPs",
    "difficulty": "Frontier",
    "tags": [
      "pomdp",
      "complexity"
    ]
  },
  {
    "id": "aima-v04-f070",
    "questionId": "aima-v04-q070",
    "front": "Are LLM-based agents really hidden-Markov POMDPs?",
    "back": "In practice they behave like POMDPs without proper belief-state tracking. They have an enormous, unobservable true state (user intent, system state, world events) and a small percept (the context window). The \"belief\" lives implicitly in the tokens of the prompt rather than as a probability distribution. Building proper belief representations for LLM agents is an open research direction.",
    "domain": "MDPs and POMDPs",
    "difficulty": "Frontier",
    "tags": [
      "pomdp",
      "llm",
      "research"
    ]
  },
  {
    "id": "aima-v04-f071",
    "questionId": "aima-v04-q071",
    "front": "What is the difference between an MDP and a contextual bandit?",
    "back": "A contextual bandit is an MDP with horizon 1 — the agent sees a context, takes an action, gets a reward, and is done. No state transitions, no credit assignment over time. Bandits are easier theoretically and practically; many real-world systems (recommendations, ads) are bandit problems mislabelled as MDPs.",
    "domain": "MDPs and POMDPs",
    "difficulty": "Researcher",
    "tags": [
      "mdp",
      "bandit",
      "rl"
    ]
  },
  {
    "id": "aima-v05-f001",
    "questionId": "aima-v05-q001",
    "front": "What is the difference between memorisation and generalisation?",
    "back": "Memorisation stores training data verbatim; the model performs perfectly on what it has seen and arbitrarily on what it has not. Generalisation captures patterns that work on unseen examples drawn from the same distribution. ML algorithms are designed to bias toward generalisation through regularisation, inductive bias, and architectural choices.",
    "domain": "Machine Learning",
    "difficulty": "Beginner",
    "tags": [
      "ml",
      "generalisation",
      "overfitting"
    ]
  },
  {
    "id": "aima-v05-f002",
    "questionId": "aima-v05-q002",
    "front": "What is a hypothesis space, and why does its choice matter?",
    "back": "The hypothesis space is the set of all models the algorithm considers (linear functions, decision trees of a certain depth, neural networks of a certain architecture). A too-small hypothesis space cannot represent the true function (underfitting); a too-large hypothesis space can memorise noise (overfitting). The right size depends on the data and the prior.",
    "domain": "Machine Learning",
    "difficulty": "Beginner",
    "tags": [
      "ml",
      "hypothesis",
      "bias-variance"
    ]
  },
  {
    "id": "aima-v05-f003",
    "questionId": "aima-v05-q003",
    "front": "What does the bias-variance decomposition tell you about generalisation error?",
    "back": "Generalisation error decomposes into bias (error from limited hypothesis space), variance (error from sensitivity to training data), and irreducible noise. Simple models have high bias and low variance; complex models have low bias and high variance. The sweet spot is the model complex enough to capture structure but not so complex it captures noise.",
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "tags": [
      "ml",
      "bias-variance",
      "theory"
    ]
  },
  {
    "id": "aima-v05-f004",
    "questionId": "aima-v05-q004",
    "front": "Why is cross-validation usually better than a single train/validation split?",
    "back": "A single split is noisy — the validation score depends on which examples ended up in validation. k-fold cross-validation averages over k different splits, reducing variance in the estimate. It is especially useful when data is scarce. The cost is k times more training; the gain is more reliable model selection.",
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "tags": [
      "ml",
      "cv",
      "evaluation"
    ]
  },
  {
    "id": "aima-v05-f005",
    "questionId": "aima-v05-q005",
    "front": "What is information gain, and how is it used in decision tree learning?",
    "back": "Information gain is the reduction in entropy from splitting on a feature: H(target) - H(target | feature). A decision tree learner greedily picks the feature with the highest gain at each node. The criterion is heuristic — it does not guarantee globally optimal trees — but it produces good trees fast.",
    "domain": "Machine Learning",
    "difficulty": "Technical",
    "tags": [
      "ml",
      "decision-tree",
      "entropy"
    ]
  },
  {
    "id": "aima-v05-f006",
    "questionId": "aima-v05-q006",
    "front": "What is pruning in decision trees, and why does it matter?",
    "back": "Pruning removes branches that do not improve generalisation. Pre-pruning stops growing a tree when a split would not pass a statistical test; post-pruning grows the full tree and then removes nodes based on validation performance. Pruned trees generalise much better than fully-grown trees.",
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "tags": [
      "ml",
      "decision-tree",
      "pruning"
    ]
  },
  {
    "id": "aima-v05-f007",
    "questionId": "aima-v05-q007",
    "front": "What is the difference between linear regression and logistic regression?",
    "back": "Linear regression fits a line (or hyperplane) to continuous outputs by minimising squared error. Logistic regression fits a logistic function to binary outputs by maximising likelihood (or equivalently minimising log-loss). Linear regression assumes Gaussian-distributed error; logistic regression handles Bernoulli outputs.",
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "tags": [
      "ml",
      "regression",
      "classification"
    ]
  },
  {
    "id": "aima-v05-f008",
    "questionId": "aima-v05-q008",
    "front": "What is k-nearest neighbours, and what does it not learn?",
    "back": "k-NN predicts using the labels of the k closest training examples (by some distance metric). It does no training — it stores all data. It is non-parametric: the model complexity grows with data. The trade-off is no learned representation (does not extract patterns) versus no training cost and clear predictions for any point.",
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "tags": [
      "ml",
      "knn",
      "nonparametric"
    ]
  },
  {
    "id": "aima-v05-f009",
    "questionId": "aima-v05-q009",
    "front": "What is the kernel trick in SVMs?",
    "back": "A kernel function computes the dot product of two points in some high-dimensional feature space without ever computing the feature mapping explicitly. SVMs only need dot products to find the maximum-margin hyperplane, so they can effectively work in spaces of arbitrary dimension. Polynomial, RBF, and string kernels all use this trick.",
    "domain": "Machine Learning",
    "difficulty": "Technical",
    "tags": [
      "ml",
      "svm",
      "kernel"
    ]
  },
  {
    "id": "aima-v05-f010",
    "questionId": "aima-v05-q010",
    "front": "What is bagging, and why does it reduce variance?",
    "back": "Bagging trains multiple models on bootstrap resamples of the training data and averages their predictions. Each model sees slightly different data, so they make different errors. Averaging cancels uncorrelated errors. Variance reduces by a factor of about 1/n for n independent models; random forests achieve this with bagged decision trees.",
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "tags": [
      "ml",
      "bagging",
      "ensemble"
    ]
  },
  {
    "id": "aima-v05-f011",
    "questionId": "aima-v05-q011",
    "front": "What is boosting, and how is it different from bagging?",
    "back": "Boosting trains models sequentially, each focusing on the examples its predecessors got wrong. The final prediction is a weighted vote. AdaBoost and gradient boosting (XGBoost, LightGBM) dominate tabular ML because they reduce bias by composing simple weak learners. Boosting is more sensitive to noise than bagging.",
    "domain": "Machine Learning",
    "difficulty": "Researcher",
    "tags": [
      "ml",
      "boosting",
      "ensemble"
    ]
  },
  {
    "id": "aima-v05-f012",
    "questionId": "aima-v05-q012",
    "front": "What is the role of regularisation in neural network training?",
    "back": "Regularisation biases the model toward simpler hypotheses. L2 (weight decay) shrinks weights; dropout randomly removes units during training; early stopping halts before overfitting; data augmentation generates synthetic variants. Modern transformers use combinations of all of these plus careful initialisation.",
    "domain": "Machine Learning",
    "difficulty": "Researcher",
    "tags": [
      "ml",
      "regularisation",
      "nn"
    ]
  },
  {
    "id": "aima-v05-f013",
    "questionId": "aima-v05-q013",
    "front": "Is generalisation actually getting better with scale, or are we just measuring it wrong?",
    "back": "Generalisation appears to improve with scale on many benchmarks, but benchmarks themselves get contaminated, narrowed, and gamed. Real-world robustness on out-of-distribution data is improving more slowly than benchmark scores suggest. Both views have real evidence; honest forecasting requires acknowledging the measurement problem.",
    "domain": "Machine Learning",
    "difficulty": "Frontier",
    "tags": [
      "ml",
      "scaling",
      "evaluation"
    ]
  },
  {
    "id": "aima-v05-f014",
    "questionId": "aima-v05-q014",
    "front": "When should a product team build their own model vs use an off-the-shelf model?",
    "back": "Build your own when domain data is unique, when latency or cost is binding, when control over behaviour matters, or when the model is part of the moat. Use off-the-shelf when the task is well-served by existing capability, when iteration speed matters more than control, or when no team is available to maintain a model.",
    "domain": "Machine Learning",
    "difficulty": "Founder",
    "tags": [
      "ml",
      "product",
      "build-vs-buy"
    ]
  },
  {
    "id": "aima-v05-f015",
    "questionId": "aima-v05-q015",
    "front": "What is transfer learning, and what makes it work?",
    "back": "Transfer learning reuses representations learned on one task to bootstrap learning on another. It works when the source and target tasks share useful low-level structure (images sharing edges, language sharing syntax). Fine-tuning a pretrained foundation model is the dominant form. The amount of transfer depends on task similarity.",
    "domain": "Machine Learning",
    "difficulty": "Researcher",
    "tags": [
      "ml",
      "transfer",
      "foundation-models"
    ]
  },
  {
    "id": "aima-v05-f016",
    "questionId": "aima-v05-q016",
    "front": "If pretraining is the cheap part of intelligence, what is the expensive part?",
    "back": "Once you have a strong pretrained model, the expensive parts become: post-training (RLHF, RLAIF, reasoning RL), evaluation, alignment, distribution, integration with workflows, and the ongoing engineering to keep the system reliable. The model is the artifact; the system around it is the company.",
    "domain": "Machine Learning",
    "difficulty": "Frontier",
    "tags": [
      "ml",
      "economics",
      "frontier"
    ]
  },
  {
    "id": "aima-v05-f017",
    "questionId": "aima-v05-q017",
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
    "id": "aima-v05-f018",
    "questionId": "aima-v05-q018",
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
    "id": "aima-v05-f019",
    "questionId": "aima-v05-q019",
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
    "id": "aima-v05-f020",
    "questionId": "aima-v05-q020",
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
    "id": "aima-v05-f021",
    "questionId": "aima-v05-q021",
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
    "id": "aima-v05-f022",
    "questionId": "aima-v05-q022",
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
    "id": "aima-v05-f023",
    "questionId": "aima-v05-q023",
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
    "id": "aima-v05-f024",
    "questionId": "aima-v05-q024",
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
    "id": "aima-v05-f025",
    "questionId": "aima-v05-q025",
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
    "id": "aima-v05-f026",
    "questionId": "aima-v05-q026",
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
    "id": "aima-v05-f027",
    "questionId": "aima-v05-q027",
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
    "id": "aima-v05-f028",
    "questionId": "aima-v05-q028",
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
    "id": "aima-v05-f029",
    "questionId": "aima-v05-q029",
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
    "id": "aima-v05-f030",
    "questionId": "aima-v05-q030",
    "front": "What is explanation-based learning, and where does it fit today?",
    "back": "EBL learns from a single training example by using prior knowledge to generalise the example into a rule. It produces sound generalisations but requires strong prior knowledge. In modern ML it lives on indirectly through chain-of-thought prompting, where the model uses its prior knowledge to generalise from few-shot examples.",
    "domain": "Machine Learning",
    "difficulty": "Researcher",
    "tags": [
      "ml",
      "ebl",
      "reasoning"
    ]
  },
  {
    "id": "aima-v05-f031",
    "questionId": "aima-v05-q031",
    "front": "What is inductive logic programming, and why has it stayed niche?",
    "back": "ILP learns first-order logic rules from examples and background knowledge. It produces interpretable models and can use rich background theories. It stayed niche because it scales poorly and is sensitive to noise. Modern interest revives it for neurosymbolic systems and rule mining over structured data.",
    "domain": "Machine Learning",
    "difficulty": "Researcher",
    "tags": [
      "ml",
      "ilp",
      "neurosymbolic"
    ]
  },
  {
    "id": "aima-v05-f032",
    "questionId": "aima-v05-q032",
    "front": "What is maximum-likelihood estimation, and what does it assume?",
    "back": "MLE chooses parameters that maximise the probability of the observed data: argmax_θ P(D | θ). It assumes the data is iid from the model family. It is asymptotically consistent (correct as data grows) but can overfit on small data. Bayesian estimation incorporates priors to control this.",
    "domain": "Probabilistic Learning",
    "difficulty": "Builder",
    "tags": [
      "problearn",
      "mle",
      "statistics"
    ]
  },
  {
    "id": "aima-v05-f033",
    "questionId": "aima-v05-q033",
    "front": "What is the difference between MAP estimation and full Bayesian inference?",
    "back": "MAP estimation finds the most probable parameter value given data and prior: argmax_θ P(θ | D). Full Bayesian inference maintains the full posterior distribution P(θ | D) and integrates over it for predictions. MAP is a point estimate; Bayesian gives uncertainty. MAP is much easier to compute and is often a good approximation.",
    "domain": "Probabilistic Learning",
    "difficulty": "Researcher",
    "tags": [
      "problearn",
      "map",
      "bayesian"
    ]
  },
  {
    "id": "aima-v05-f034",
    "questionId": "aima-v05-q034",
    "front": "What is the EM algorithm, and what makes it useful?",
    "back": "EM alternates two steps: E-step computes the expected values of hidden variables given current parameters; M-step maximises parameters given those expected values. It is used in Gaussian mixtures, HMMs, topic models, and many missing-data problems. EM is guaranteed to monotonically increase likelihood but can converge to local optima.",
    "domain": "Probabilistic Learning",
    "difficulty": "Researcher",
    "tags": [
      "problearn",
      "em",
      "latent"
    ]
  },
  {
    "id": "aima-v05-f035",
    "questionId": "aima-v05-q035",
    "front": "What is a hidden variable in a probabilistic model, and what makes them useful?",
    "back": "A hidden (latent) variable is one we never observe directly but believe shapes the data — a topic in a topic model, a state in an HMM, a code in a VAE. They let models compress and generate data, but they make learning harder because we must reason about distributions over them.",
    "domain": "Probabilistic Learning",
    "difficulty": "Researcher",
    "tags": [
      "problearn",
      "latent",
      "generative"
    ]
  },
  {
    "id": "aima-v05-f036",
    "questionId": "aima-v05-q036",
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
    "id": "aima-v05-f037",
    "questionId": "aima-v05-q037",
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
    "id": "aima-v05-f038",
    "questionId": "aima-v05-q038",
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
    "id": "aima-v05-f039",
    "questionId": "aima-v05-q039",
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
    "id": "aima-v05-f040",
    "questionId": "aima-v05-q040",
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
    "id": "aima-v05-f041",
    "questionId": "aima-v05-q041",
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
    "id": "aima-v05-f042",
    "questionId": "aima-v05-q042",
    "front": "What is the difference between passive and active reinforcement learning?",
    "back": "Passive RL: the policy is fixed; the agent must learn its value. Active RL: the agent must choose actions and learn both the policy and the value. Passive RL is simpler — it is essentially policy evaluation from samples. Active RL adds exploration vs exploitation as a hard subproblem.",
    "domain": "Reinforcement Learning",
    "difficulty": "Beginner",
    "tags": [
      "rl",
      "passive",
      "active"
    ]
  },
  {
    "id": "aima-v05-f043",
    "questionId": "aima-v05-q043",
    "front": "What is temporal-difference learning, and how does it bridge Monte Carlo and dynamic programming?",
    "back": "TD learning updates value estimates from each step using the Bellman equation: V(s) ← V(s) + α[r + γV(s') - V(s)]. It does not need a model (like DP) and learns from each transition (like Monte Carlo). It bootstraps — using current estimates to update estimates — which is statistically biased but more efficient.",
    "domain": "Reinforcement Learning",
    "difficulty": "Technical",
    "tags": [
      "rl",
      "td",
      "sutton"
    ]
  },
  {
    "id": "aima-v05-f044",
    "questionId": "aima-v05-q044",
    "front": "What is Q-learning, and what makes it off-policy?",
    "back": "Q-learning updates Q(s, a) ← Q(s, a) + α[r + γ max_a' Q(s', a') - Q(s, a)]. It uses the max over next actions, not the policy the agent is following. This makes it off-policy: the agent can learn the optimal Q while behaving according to a different (exploration-friendly) policy.",
    "domain": "Reinforcement Learning",
    "difficulty": "Researcher",
    "tags": [
      "rl",
      "q-learning",
      "off-policy"
    ]
  },
  {
    "id": "aima-v05-f045",
    "questionId": "aima-v05-q045",
    "front": "What is SARSA, and how is it different from Q-learning?",
    "back": "SARSA updates Q(s, a) ← Q(s, a) + α[r + γ Q(s', a') - Q(s, a)] where a' is the actual next action under the current policy. It is on-policy — it learns the value of the policy actually being followed. SARSA tends to be more conservative under exploration; Q-learning is more optimistic.",
    "domain": "Reinforcement Learning",
    "difficulty": "Researcher",
    "tags": [
      "rl",
      "sarsa",
      "on-policy"
    ]
  },
  {
    "id": "aima-v05-f046",
    "questionId": "aima-v05-q046",
    "front": "What is the credit assignment problem in RL?",
    "back": "When an agent receives a reward, which of its past actions deserve credit? Long sequences of actions complicate this; a reward today may be the result of a decision many steps ago. TD methods, eligibility traces, and modern advantage estimators all attempt to assign credit appropriately.",
    "domain": "Reinforcement Learning",
    "difficulty": "Builder",
    "tags": [
      "rl",
      "credit-assignment"
    ]
  },
  {
    "id": "aima-v05-f047",
    "questionId": "aima-v05-q047",
    "front": "What is the role of function approximation in RL?",
    "back": "Function approximation replaces tabular value functions with parametrised functions (linear, neural networks) that generalise across states. It enables RL on high-dimensional inputs (images, sensor streams). The price: convergence is not guaranteed and many RL algorithms become unstable. Deep RL is the modern manifestation.",
    "domain": "Reinforcement Learning",
    "difficulty": "Researcher",
    "tags": [
      "rl",
      "function-approximation",
      "deep-rl"
    ]
  },
  {
    "id": "aima-v05-f048",
    "questionId": "aima-v05-q048",
    "front": "What is the difference between policy search and value-based RL?",
    "back": "Value-based methods (Q-learning, SARSA) learn a value function and derive a policy from it. Policy search methods directly parametrise a policy and optimise it via gradient ascent on expected return. Policy search handles continuous actions naturally; value-based methods are simpler when actions are discrete.",
    "domain": "Reinforcement Learning",
    "difficulty": "Builder",
    "tags": [
      "rl",
      "policy-search",
      "value-based"
    ]
  },
  {
    "id": "aima-v05-f049",
    "questionId": "aima-v05-q049",
    "front": "What is reward hacking, and why does it scale with capability?",
    "back": "Reward hacking is when an agent finds an unintended way to maximise its reward signal — exploiting flaws in the metric rather than achieving the intent. Better-trained agents find more creative shortcuts. Mitigations: better reward specification, reward shaping with care, human-in-the-loop oversight, and ultimately principled alignment research.",
    "domain": "Reinforcement Learning",
    "difficulty": "Researcher",
    "tags": [
      "rl",
      "reward-hacking",
      "safety"
    ]
  },
  {
    "id": "aima-v05-f050",
    "questionId": "aima-v05-q050",
    "front": "What is the difference between model-based and model-free RL?",
    "back": "Model-free RL learns Q-values or policies directly from experience. Model-based RL learns a model of the environment (transition and reward functions) and plans using it. Model-based is more sample-efficient but harder to scale; model-free is the workhorse of deep RL.",
    "domain": "Reinforcement Learning",
    "difficulty": "Builder",
    "tags": [
      "rl",
      "model-based",
      "model-free"
    ]
  },
  {
    "id": "aima-v05-f051",
    "questionId": "aima-v05-q051",
    "front": "Is RLHF really RL, or is it a specific kind of supervised fine-tuning?",
    "back": "RLHF uses RL machinery but typically over a learned reward model trained from human preferences. The \"environment\" is the reward model, not the real world. This makes RLHF more like preference-aware supervised fine-tuning than classical RL — it can sharpen behaviour patterns the model can already produce, but does not produce qualitatively new capabilities the same way pure RL on real rewards can.",
    "domain": "Reinforcement Learning",
    "difficulty": "Frontier",
    "tags": [
      "rl",
      "rlhf",
      "llm"
    ]
  },
  {
    "id": "aima-v05-f052",
    "questionId": "aima-v05-q052",
    "front": "When is RL the wrong choice for an applied AI problem?",
    "back": "Use RL when you have a clear reward signal, a real environment or simulator, and action consequences that depend on more than the immediate reward. Avoid RL when supervised data is plentiful, when the cost of bad exploration is high, when the reward is sparse and slow, or when interpretability matters. Supervised learning + light constraints solves most real problems.",
    "domain": "Reinforcement Learning",
    "difficulty": "Founder",
    "tags": [
      "rl",
      "product",
      "engineering"
    ]
  },
  {
    "id": "aima-v05-f053",
    "questionId": "aima-v05-q053",
    "front": "How should you design the reward for a production AI agent?",
    "back": "Design rewards around the actual business outcome — completed task, retained user, recovered ticket — not proxy metrics like length or engagement. Combine sparse outcome rewards with denser shaping rewards that are robust to gaming. Add explicit penalties for unsafe actions. Re-evaluate the reward whenever the agent behaviour surprises you.",
    "domain": "Reinforcement Learning",
    "difficulty": "Founder",
    "tags": [
      "rl",
      "product",
      "reward-design"
    ]
  },
  {
    "id": "aima-v05-f054",
    "questionId": "aima-v05-q054",
    "front": "Why is the exploration-exploitation trade-off mathematically hard?",
    "back": "Optimal exploration requires reasoning about the value of information about future rewards versus the cost of taking suboptimal actions now. In general MDPs this is intractable. Special cases (multi-armed bandits) have provably optimal algorithms (UCB, Thompson sampling). General algorithms (epsilon-greedy, entropy bonuses) are heuristics with known weaknesses.",
    "domain": "Reinforcement Learning",
    "difficulty": "Researcher",
    "tags": [
      "rl",
      "exploration",
      "bandits"
    ]
  },
  {
    "id": "aima-v05-f055",
    "questionId": "aima-v05-q055",
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
    "id": "aima-v05-f056",
    "questionId": "aima-v05-q056",
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
    "id": "aima-v05-f057",
    "questionId": "aima-v05-q057",
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
    "id": "aima-v05-f058",
    "questionId": "aima-v05-q058",
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
    "id": "aima-v05-f059",
    "questionId": "aima-v05-q059",
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
    "id": "aima-v05-f060",
    "questionId": "aima-v05-q060",
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
    "id": "aima-v05-f061",
    "questionId": "aima-v05-q061",
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
    "id": "aima-v05-f062",
    "questionId": "aima-v05-q062",
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
    "id": "aima-v05-f063",
    "questionId": "aima-v05-q063",
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
    "id": "aima-v05-f064",
    "questionId": "aima-v05-q064",
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
    "id": "aima-v05-f065",
    "questionId": "aima-v05-q065",
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
    "id": "aima-v05-f066",
    "questionId": "aima-v05-q066",
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
    "id": "aima-v06-f001",
    "questionId": "aima-v06-q001",
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
    "id": "aima-v06-f002",
    "questionId": "aima-v06-q002",
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
    "id": "aima-v06-f003",
    "questionId": "aima-v06-q003",
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
    "id": "aima-v06-f004",
    "questionId": "aima-v06-q004",
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
    "id": "aima-v06-f005",
    "questionId": "aima-v06-q005",
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
    "id": "aima-v06-f006",
    "questionId": "aima-v06-q006",
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
    "id": "aima-v06-f007",
    "questionId": "aima-v06-q007",
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
    "id": "aima-v06-f008",
    "questionId": "aima-v06-q008",
    "front": "What is an n-gram language model, and why did it dominate NLP for decades?",
    "back": "An n-gram model estimates the probability of each word given the previous n-1 words from counts in a corpus. It assumes the Markov property at order n. Despite obvious limits (no semantics, no long-range dependencies), it powered most pre-2010 NLP — speech recognition, machine translation, autocomplete — because it was fast and the training data was abundant.",
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "tags": [
      "nlp",
      "n-gram",
      "language-model"
    ]
  },
  {
    "id": "aima-v06-f009",
    "questionId": "aima-v06-q009",
    "front": "What is bag-of-words, and what does it ignore?",
    "back": "Bag-of-words represents a document by a vector of word counts (or TF-IDF weights), ignoring word order. With linear classifiers it powered text classification for years. It ignores syntax, polysemy, and context — which modern embeddings capture — but it is fast, interpretable, and surprisingly hard to beat on some tasks.",
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "tags": [
      "nlp",
      "bow",
      "classification"
    ]
  },
  {
    "id": "aima-v06-f010",
    "questionId": "aima-v06-q010",
    "front": "What is the difference between precision and recall, and when does each matter more?",
    "back": "Precision = TP / (TP + FP): what fraction of predicted positives are correct. Recall = TP / (TP + FN): what fraction of actual positives are found. Maximise precision when false positives are costly (spam, fraud confirmation). Maximise recall when false negatives are costly (medical screening, security alerts).",
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "tags": [
      "nlp",
      "precision",
      "recall"
    ]
  },
  {
    "id": "aima-v06-f011",
    "questionId": "aima-v06-q011",
    "front": "What is information retrieval, and how is it different from question answering?",
    "back": "IR returns documents likely to contain the answer (a search engine). QA returns the answer itself, possibly extracted from documents. IR is a ranking problem; QA is an extraction or generation problem. Modern RAG combines them: retrieve documents, then generate the answer grounded in them.",
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "tags": [
      "nlp",
      "ir",
      "qa",
      "rag"
    ]
  },
  {
    "id": "aima-v06-f012",
    "questionId": "aima-v06-q012",
    "front": "What is a context-free grammar, and where does it appear today?",
    "back": "A CFG defines a language by recursive rewriting rules from non-terminals to mixed sequences of non-terminals and terminals. Programming languages, structured-document formats, and many natural-language parsers use CFGs or their probabilistic extensions. Most natural language is not strictly context-free, but CFGs cover useful subsets.",
    "domain": "Natural Language Processing",
    "difficulty": "Technical",
    "tags": [
      "nlp",
      "cfg",
      "parsing"
    ]
  },
  {
    "id": "aima-v06-f013",
    "questionId": "aima-v06-q013",
    "front": "What is a probabilistic context-free grammar?",
    "back": "A PCFG attaches probabilities to grammar rules. The probability of a parse is the product of rule probabilities used. Dynamic programming algorithms (CKY) find the most probable parse efficiently. PCFGs powered statistical parsers for years until neural sequence models replaced them.",
    "domain": "Natural Language Processing",
    "difficulty": "Researcher",
    "tags": [
      "nlp",
      "pcfg",
      "parsing"
    ]
  },
  {
    "id": "aima-v06-f014",
    "questionId": "aima-v06-q014",
    "front": "Why is language ambiguous in a way that makes AI hard?",
    "back": "Natural language has lexical ambiguity (one word, many meanings), syntactic ambiguity (multiple parse trees), semantic ambiguity (same syntax, different meanings), and pragmatic ambiguity (literal vs intended). Humans resolve these unconsciously using context, world knowledge, and conversational priors. AI must reconstruct all four.",
    "domain": "Natural Language Processing",
    "difficulty": "Researcher",
    "tags": [
      "nlp",
      "ambiguity"
    ]
  },
  {
    "id": "aima-v06-f015",
    "questionId": "aima-v06-q015",
    "front": "What is named entity recognition, and what makes it harder than it looks?",
    "back": "NER identifies and classifies spans of text (Apple as company vs fruit, Paris as city vs person). It is harder than it looks because entity boundaries are ambiguous, types overlap (a country can also be an organisation), and the same surface form can mean different things in different contexts. Modern transformers handle these much better than classical CRFs.",
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "tags": [
      "nlp",
      "ner"
    ]
  },
  {
    "id": "aima-v06-f016",
    "questionId": "aima-v06-q016",
    "front": "What is information extraction, and how does it differ from text classification?",
    "back": "Information extraction pulls structured facts (entities, relations, events) from unstructured text. Text classification assigns labels to whole documents. IE is harder because it must locate, type, and link spans; classification only needs a single label. Both are still used heavily in industrial pipelines.",
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "tags": [
      "nlp",
      "ie",
      "classification"
    ]
  },
  {
    "id": "aima-v06-f017",
    "questionId": "aima-v06-q017",
    "front": "What is the difference between syntax, semantics, and pragmatics?",
    "back": "Syntax: the structure of sentences (parts of speech, parse trees). Semantics: the literal meaning (what propositions a sentence asserts). Pragmatics: meaning in context (irony, indirect speech, conversational implicature). Each layer requires different machinery; modern LLMs handle all three implicitly but unevenly.",
    "domain": "Natural Language Processing",
    "difficulty": "Technical",
    "tags": [
      "nlp",
      "syntax",
      "semantics",
      "pragmatics"
    ]
  },
  {
    "id": "aima-v06-f018",
    "questionId": "aima-v06-q018",
    "front": "When does building a custom NLP model beat using an LLM API?",
    "back": "Custom NLP wins when: latency is binding (P95 < 50ms), volume is so high that per-call API costs explode, the domain is so specialised that prompt engineering cannot reach reliability, or compliance forbids sending data externally. LLM APIs win for everything else, especially early product development and low-to-moderate volume.",
    "domain": "Natural Language Processing",
    "difficulty": "Founder",
    "tags": [
      "nlp",
      "product",
      "build-vs-buy"
    ]
  },
  {
    "id": "aima-v06-f019",
    "questionId": "aima-v06-q019",
    "front": "How do you evaluate an NLP product in production beyond accuracy?",
    "back": "Beyond accuracy: calibration (does the model know when it is wrong), robustness (does it handle paraphrases and adversarial inputs), fairness (does it perform similarly across demographic groups), cost-per-outcome (not per token), latency at P95, and retention (do users come back). Most production failures live in these axes, not in headline accuracy.",
    "domain": "Natural Language Processing",
    "difficulty": "Founder",
    "tags": [
      "nlp",
      "product",
      "evaluation"
    ]
  },
  {
    "id": "aima-v06-f020",
    "questionId": "aima-v06-q020",
    "front": "Why does word-sense disambiguation remain hard even with LLMs?",
    "back": "LLMs do implicit disambiguation through context — much better than classical methods — but they still fail systematically on rare senses, low-resource languages, and domain-specific terminology. The remaining errors are concentrated in cases where prior probability is misleading; explicit disambiguation aids still help in regulated domains.",
    "domain": "Natural Language Processing",
    "difficulty": "Researcher",
    "tags": [
      "nlp",
      "disambiguation",
      "llm"
    ]
  },
  {
    "id": "aima-v06-f021",
    "questionId": "aima-v06-q021",
    "front": "Why are tokenisation choices an underrated source of NLP failures?",
    "back": "Tokenisation defines how text becomes input tokens. Bad tokenisation breaks numbers, code, non-English text, and rare words; good tokenisation amortises across languages and domains. Tokenisation bugs cause silent quality drops — a model that scores well in English can fail on multilingual data because of tokenisation, not capability.",
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "tags": [
      "nlp",
      "tokenisation",
      "engineering"
    ]
  },
  {
    "id": "aima-v06-f022",
    "questionId": "aima-v06-q022",
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
    "id": "aima-v06-f023",
    "questionId": "aima-v06-q023",
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
    "id": "aima-v06-f024",
    "questionId": "aima-v06-q024",
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
    "id": "aima-v06-f025",
    "questionId": "aima-v06-q025",
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
    "id": "aima-v06-f026",
    "questionId": "aima-v06-q026",
    "front": "What is grounded language understanding, and what does it require beyond text?",
    "back": "Grounded understanding connects language to perception, action, and the world. A text-only model knows \"cup\" is a noun but not what a cup looks like, weighs, or feels like. Grounded understanding requires multimodal pretraining, embodied experience, or both. It is what separates an LLM from an agent that lives in the world.",
    "domain": "Natural Language Processing",
    "difficulty": "Researcher",
    "tags": [
      "nlp",
      "grounding",
      "multimodal"
    ]
  },
  {
    "id": "aima-v06-f027",
    "questionId": "aima-v06-q027",
    "front": "What is machine translation, and what made statistical MT work where rule-based MT failed?",
    "back": "Rule-based MT required hand-written grammars and dictionaries — fragile, expensive, and brittle. Statistical MT learned translation probabilities from parallel corpora. It scaled with data, handled idioms by frequency, and produced fluent (if sometimes wrong) output. Neural MT extended this with end-to-end learning; transformer MT became the default.",
    "domain": "Natural Language Processing",
    "difficulty": "Technical",
    "tags": [
      "nlp",
      "mt",
      "statistical"
    ]
  },
  {
    "id": "aima-v06-f028",
    "questionId": "aima-v06-q028",
    "front": "What is speech recognition, and where are its remaining hard problems?",
    "back": "Speech recognition transcribes audio to text. Modern end-to-end neural systems hit 5-10% word error on clean speech for high-resource languages. Hard problems: low-resource languages, noisy environments, code-switching, far-field audio, speaker overlap, accents not well-represented in training data. The capability/access gap is largely a data problem.",
    "domain": "Natural Language Processing",
    "difficulty": "Technical",
    "tags": [
      "nlp",
      "speech",
      "recognition"
    ]
  },
  {
    "id": "aima-v06-f029",
    "questionId": "aima-v06-q029",
    "front": "Did LLMs solve NLP, or did they shift the bottleneck somewhere else?",
    "back": "LLMs solved a lot of what was hard about NLP: parsing, ambiguity, translation, summarisation, classification. They shifted the bottleneck to grounding, factuality, reasoning over long contexts, calibration, and trust. NLP is not solved — it is reorganised. The hard problems moved but did not disappear.",
    "domain": "Natural Language Processing",
    "difficulty": "Frontier",
    "tags": [
      "nlp",
      "llm",
      "frontier"
    ]
  },
  {
    "id": "aima-v06-f030",
    "questionId": "aima-v06-q030",
    "front": "What is information extraction at scale, and what makes it hard?",
    "back": "IE at scale extracts structured records (entities, relations, events) from millions of documents. Hard because: schemas vary, documents disagree, entity resolution is non-trivial, and noise compounds. Modern systems combine LLM extraction with type-validation, entity-linking, and ontology grounding.",
    "domain": "Natural Language Processing",
    "difficulty": "Researcher",
    "tags": [
      "nlp",
      "ie",
      "scale"
    ]
  },
  {
    "id": "aima-v06-f031",
    "questionId": "aima-v06-q031",
    "front": "What is image formation, and why does it make 3D vision hard?",
    "back": "Image formation projects a 3D scene onto a 2D sensor; many 3D scenes produce the same 2D image. Recovering 3D from 2D is therefore underdetermined — vision must use priors about the world (lighting, geometry, object shapes) to disambiguate. This is why optical illusions work: ambiguous priors.",
    "domain": "Perception and Computer Vision",
    "difficulty": "Builder",
    "tags": [
      "vis",
      "image-formation",
      "3d"
    ]
  },
  {
    "id": "aima-v06-f032",
    "questionId": "aima-v06-q032",
    "front": "What is edge detection, and why is it not what humans do?",
    "back": "Classical edge detection (Sobel, Canny) finds pixel intensity discontinuities. Humans use edges only as one of many cues — they also use texture, motion, depth, and object knowledge. End-to-end deep networks learn whatever features help the task; they often barely use sharp edges at all.",
    "domain": "Perception and Computer Vision",
    "difficulty": "Technical",
    "tags": [
      "vis",
      "edge-detection",
      "classical"
    ]
  },
  {
    "id": "aima-v06-f033",
    "questionId": "aima-v06-q033",
    "front": "What is image segmentation, and how is semantic segmentation different from instance segmentation?",
    "back": "Semantic segmentation labels each pixel with a class (cat vs background) but does not distinguish individual instances. Instance segmentation labels each pixel with both a class and an instance ID (this cat vs that cat). Instance segmentation is harder; many modern systems use Mask R-CNN style architectures.",
    "domain": "Perception and Computer Vision",
    "difficulty": "Technical",
    "tags": [
      "vis",
      "segmentation",
      "semantic",
      "instance"
    ]
  },
  {
    "id": "aima-v06-f034",
    "questionId": "aima-v06-q034",
    "front": "What is stereopsis, and how does it recover 3D from two images?",
    "back": "Stereopsis uses disparity — the horizontal shift of a point's position between two cameras — to compute depth via triangulation. Calibration provides camera geometry; correspondence matching pairs points between images. Errors in matching cause depth errors; textureless regions are especially hard. Active depth (lidar, structured light) avoids correspondence entirely.",
    "domain": "Perception and Computer Vision",
    "difficulty": "Researcher",
    "tags": [
      "vis",
      "stereopsis",
      "depth"
    ]
  },
  {
    "id": "aima-v06-f035",
    "questionId": "aima-v06-q035",
    "front": "What is object recognition, and what makes it fundamentally harder than classification?",
    "back": "Recognition requires identifying that something is an instance of a known category and often locating it in the image. Classification only labels the whole image. Recognition handles partial occlusion, viewpoint variation, lighting, and clutter — all things that classification of curated images largely ignores.",
    "domain": "Perception and Computer Vision",
    "difficulty": "Technical",
    "tags": [
      "vis",
      "recognition",
      "classification"
    ]
  },
  {
    "id": "aima-v06-f036",
    "questionId": "aima-v06-q036",
    "front": "What is pose estimation, and where is it used in production?",
    "back": "Pose estimation infers the 3D position and orientation of an object (or human body) from images. It powers AR, motion capture, robotics manipulation, autonomous driving, and sports analytics. Human pose estimation usually uses keypoint detection; object pose typically uses model alignment or learned regressors.",
    "domain": "Perception and Computer Vision",
    "difficulty": "Researcher",
    "tags": [
      "vis",
      "pose",
      "ar",
      "robotics"
    ]
  },
  {
    "id": "aima-v06-f037",
    "questionId": "aima-v06-q037",
    "front": "Do vision models see, or do they classify?",
    "back": "Vision models produce outputs that we interpret as recognition. Whether they \"see\" — have something like perceptual experience — is a separate question that current evidence does not resolve. Operationally, they classify well; philosophically, the question of seeing is open. Functionalism and embodiment positions give different answers.",
    "domain": "Perception and Computer Vision",
    "difficulty": "Frontier",
    "tags": [
      "vis",
      "perception",
      "consciousness"
    ]
  },
  {
    "id": "aima-v06-f038",
    "questionId": "aima-v06-q038",
    "front": "Where does AI vision genuinely work in production today?",
    "back": "Manufacturing inspection (defects, OCR), well-defined medical imaging (specific pathologies in trained settings), facial recognition (with serious risks), license-plate recognition, satellite analysis, agriculture inspection. AI vision struggles on novel scenes, edge cases, and tasks requiring 3D reasoning. The \"vision is solved\" claim is true for narrow tasks and false for general visual understanding.",
    "domain": "Perception and Computer Vision",
    "difficulty": "Founder",
    "tags": [
      "vis",
      "production",
      "reality"
    ]
  },
  {
    "id": "aima-v06-f039",
    "questionId": "aima-v06-q039",
    "front": "Why is expected utility central to rational decision-making?",
    "back": "A rational agent should choose the action with the highest expected utility, where utility is a function over outcomes and expectation is taken over the probability distribution of outcomes given the action. Decision theory shows this rule follows from minimal consistency requirements on preferences.",
    "domain": "Perception and Computer Vision",
    "difficulty": "Beginner",
    "tags": [
      "util",
      "expected-utility",
      "rationality"
    ]
  },
  {
    "id": "aima-v06-f040",
    "questionId": "aima-v06-q039",
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
    "id": "aima-v06-f041",
    "questionId": "aima-v06-q040",
    "front": "What are the von Neumann–Morgenstern axioms, and what do they prove?",
    "back": "Four axioms over preferences: completeness, transitivity, continuity, and independence. The vNM theorem proves that if an agent's preferences satisfy these, they can be represented by a utility function such that the agent prefers A to B iff E[U(A)] > E[U(B)]. Rationality entails expected utility maximisation.",
    "domain": "Perception and Computer Vision",
    "difficulty": "Builder",
    "tags": [
      "util",
      "vnm",
      "axioms"
    ]
  },
  {
    "id": "aima-v06-f042",
    "questionId": "aima-v06-q040",
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
    "id": "aima-v06-f043",
    "questionId": "aima-v06-q041",
    "front": "What is the difference between utility and value, in this framework?",
    "back": "Value is a property of states or outcomes (what they are worth). Utility is a numeric representation of preferences over outcomes. Utility is determined up to positive affine transformation; absolute utility numbers do not carry meaning, only ratios of differences do.",
    "domain": "Perception and Computer Vision",
    "difficulty": "Technical",
    "tags": [
      "util",
      "value",
      "vocabulary"
    ]
  },
  {
    "id": "aima-v06-f044",
    "questionId": "aima-v06-q041",
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
    "id": "aima-v06-f045",
    "questionId": "aima-v06-q042",
    "front": "What is risk aversion, and how does it relate to utility shape?",
    "back": "A risk-averse agent prefers a sure outcome to a gamble with the same expected value. This is captured by a concave utility function — losses hurt more than equivalent gains feel good. Risk-seeking agents have convex utility; risk-neutral agents have linear utility.",
    "domain": "Perception and Computer Vision",
    "difficulty": "Researcher",
    "tags": [
      "util",
      "risk",
      "curvature"
    ]
  },
  {
    "id": "aima-v06-f046",
    "questionId": "aima-v06-q042",
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
    "id": "aima-v06-f047",
    "questionId": "aima-v06-q043",
    "front": "What is the value of information, and why does it matter?",
    "back": "The value of information is the expected improvement in the agent's decision quality from observing some variable before acting. A rational agent gathers information only when its expected value exceeds its cost. This is the formal answer to \"is this experiment worth running?\".",
    "domain": "Perception and Computer Vision",
    "difficulty": "Researcher",
    "tags": [
      "util",
      "voi",
      "decision"
    ]
  },
  {
    "id": "aima-v06-f048",
    "questionId": "aima-v06-q043",
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
    "id": "aima-v06-f049",
    "questionId": "aima-v06-q044",
    "front": "What is a decision network, and how is it different from a Bayes net?",
    "back": "A decision network (influence diagram) is a Bayes net augmented with decision nodes (actions) and utility nodes (rewards). It lets the agent compute the action that maximises expected utility directly from the graph. Useful for one-shot decisions; MDPs extend it to sequential decisions.",
    "domain": "Perception and Computer Vision",
    "difficulty": "Researcher",
    "tags": [
      "util",
      "decision-network",
      "influence-diagram"
    ]
  },
  {
    "id": "aima-v06-f050",
    "questionId": "aima-v06-q044",
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
    "id": "aima-v06-f051",
    "questionId": "aima-v06-q045",
    "front": "What is the difference between sensors and effectors in a robot?",
    "back": "Sensors gather information about the world: cameras, lidar, IMU, force sensors, microphones. Effectors act on the world: motors, grippers, wheels, jets. Together they close the perceive-act loop that defines a robot. Most robotic failures are at the sensor side (perception errors) or the effector side (control failures), not in the planning between them.",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Beginner",
    "tags": [
      "robo",
      "sensors",
      "effectors"
    ]
  },
  {
    "id": "aima-v06-f052",
    "questionId": "aima-v06-q046",
    "front": "What is robot localization, and why is it harder in a dynamic environment?",
    "back": "Localization estimates the robot's pose (position and orientation) relative to a map or reference frame. Static environments allow particle-filter or Kalman-filter localization from sensor data. Dynamic environments introduce moving features that violate static-world assumptions; the robot must distinguish stable landmarks from moving objects.",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Builder",
    "tags": [
      "robo",
      "localization",
      "slam"
    ]
  },
  {
    "id": "aima-v06-f053",
    "questionId": "aima-v06-q047",
    "front": "What is configuration space, and why is it useful for motion planning?",
    "back": "Configuration space (C-space) is the space of all possible robot configurations (joint angles, position). Motion planning in C-space treats the robot as a point and the obstacles as transformed obstacles in C-space. A collision-free trajectory in C-space directly maps to a collision-free motion in the world.",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Researcher",
    "tags": [
      "robo",
      "c-space",
      "motion-planning"
    ]
  },
  {
    "id": "aima-v06-f054",
    "questionId": "aima-v06-q048",
    "front": "What is the RRT algorithm, and why is it used in real robots?",
    "back": "Rapidly-exploring Random Tree (RRT) builds a tree of feasible configurations from the start by sampling random configurations and steering toward them. RRT* is an optimal variant. RRT scales well to high-dimensional spaces where grid-based planners fail, which is why it dominates robotic arm and humanoid motion planning.",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Technical",
    "tags": [
      "robo",
      "rrt",
      "motion-planning"
    ]
  },
  {
    "id": "aima-v06-f055",
    "questionId": "aima-v06-q049",
    "front": "What is PID control, and why is it the workhorse of low-level robotics?",
    "back": "PID control computes the control signal as a weighted sum of the proportional (current error), integral (accumulated error), and derivative (rate of error change) terms. It is simple, robust, and tunable. Most actuated systems — drones, cars, motors, valves — use PID at the lowest level even if higher levels use learned policies.",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Builder",
    "tags": [
      "robo",
      "pid",
      "control"
    ]
  },
  {
    "id": "aima-v06-f056",
    "questionId": "aima-v06-q050",
    "front": "What is the subsumption architecture, and what did it teach robotics?",
    "back": "Subsumption architecture (Brooks) builds robots from layered reactive behaviours — each layer handles a specific competence (avoid obstacles, wander, explore) and higher layers subsume lower ones. It demonstrated that complex behaviour can emerge from simple layered reflexes without a central planner. Modern hybrid architectures inherit this layering.",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Researcher",
    "tags": [
      "robo",
      "subsumption",
      "architecture"
    ]
  },
  {
    "id": "aima-v06-f057",
    "questionId": "aima-v06-q051",
    "front": "What is the three-layer architecture in robotics?",
    "back": "Reactive (fast, reflexive responses), executive (manages plans and sequences), and deliberative (high-level planning) layers. The reactive layer handles safety and short-cycle control. The executive monitors plan progress. The deliberative layer plans tasks. Most production robots use a variant of this layering even when they use ML for individual components.",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Researcher",
    "tags": [
      "robo",
      "architecture",
      "layered"
    ]
  },
  {
    "id": "aima-v06-f058",
    "questionId": "aima-v06-q052",
    "front": "Why do most \"AI robots\" in the consumer market underdeliver?",
    "back": "Demos run in controlled conditions: known objects, known scenes, supervised operation. Consumer robots face novel environments, novel objects, unsupervised time horizons, and unforgiving error costs (a flipped vacuum, a scratched floor). The gap between demo capability and production capability is enormous and underestimated.",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Founder",
    "tags": [
      "robo",
      "product",
      "reality"
    ]
  },
  {
    "id": "aima-v06-f059",
    "questionId": "aima-v06-q053",
    "front": "Does intelligence require embodiment, or can it be fully captured in language?",
    "back": "Many cognitive tasks can be done without a body — text models reason about the world without one. But many forms of physical, causal, and common-sense reasoning may require embodied experience to acquire reliably. The honest answer is unresolved; current evidence is mixed.",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Frontier",
    "tags": [
      "robo",
      "embodiment",
      "philosophy"
    ]
  },
  {
    "id": "aima-v06-f060",
    "questionId": "aima-v06-q054",
    "front": "If a foundation model can plan but a robot still cannot do dishes, what does that say about intelligence?",
    "back": "Planning in language is cheap; planning over physical state is expensive. The robot lacks not the planning, but the perception, calibration, and dexterity to execute the plan reliably in the messy physical world. Intelligence at the language level does not transfer cleanly to the physical world. The \"missing pieces\" of robotics are not about cleverness; they are about competence in physical reality.",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Frontier",
    "tags": [
      "robo",
      "llm",
      "embodiment"
    ]
  },
  {
    "id": "aima-v06-f061",
    "questionId": "aima-v06-q055",
    "front": "When is teleoperation a better business than full autonomy?",
    "back": "Teleoperation makes sense when full autonomy is years away but the task has economic value. It works when remote labour is cheaper than local labour, when the task has clear physical actions, and when latency to the operator is tolerable. Many \"AI\" robotics deployments are actually teleoperation with assistive automation; that is a real business.",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Founder",
    "tags": [
      "robo",
      "product",
      "teleoperation"
    ]
  },
  {
    "id": "aima-v06-f062",
    "questionId": "aima-v06-q056",
    "front": "What is sim-to-real transfer, and what makes it hard?",
    "back": "Sim-to-real trains policies in simulation and deploys them on real hardware. Hard because: friction, lighting, materials, sensor noise, and actuator dynamics all differ between sim and real. Approaches include domain randomisation (sample diverse sim conditions during training), system identification (calibrate sim to match real), and adversarial training. Even with these, the gap can take years to close.",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Researcher",
    "tags": [
      "robo",
      "sim-to-real",
      "transfer"
    ]
  },
  {
    "id": "aima-v06-f063",
    "questionId": "aima-v06-q057",
    "front": "Will general-purpose humanoid robots succeed, or will most useful robots stay specialised?",
    "back": "Humanoids are appealing because the world is built for humans — same doors, same tools, same workflows. They are hard because legged locomotion, dexterous manipulation, and energy budgets are all binding. The pragmatic bet is that specialised robots (AGVs, arms, drones) keep most production work, while humanoids fill specific roles where flexibility matters more than efficiency.",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Frontier",
    "tags": [
      "robo",
      "humanoid",
      "frontier"
    ]
  },
  {
    "id": "aima-v06-f064",
    "questionId": "aima-v06-q058",
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
    "id": "aima-v06-f065",
    "questionId": "aima-v06-q059",
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
    "id": "aima-v06-f066",
    "questionId": "aima-v06-q060",
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
    "id": "aima-v06-f067",
    "questionId": "aima-v06-q061",
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
    "id": "aima-v06-f068",
    "questionId": "aima-v06-q062",
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
    "id": "aima-v06-f069",
    "questionId": "aima-v06-q063",
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
    "id": "aima-v06-f070",
    "questionId": "aima-v06-q064",
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
    "id": "aima-v07-f001",
    "questionId": "aima-v07-q001",
    "front": "What is the difference between weak AI and strong AI as philosophical positions?",
    "back": "Weak AI claims machines can behave intelligently — appear to reason, to know, to learn. Strong AI claims machines can have minds — actually understand, be conscious, be persons. Most AI engineering targets weak AI; strong AI is a philosophical claim that the field largely brackets.",
    "domain": "Philosophy of AI",
    "difficulty": "Beginner",
    "tags": [
      "phil",
      "weak-ai",
      "strong-ai"
    ]
  },
  {
    "id": "aima-v07-f002",
    "questionId": "aima-v07-q002",
    "front": "What is the Chinese Room argument actually trying to establish?",
    "back": "Searle argues that symbol manipulation alone cannot produce understanding — a person manually following Chinese rules without knowing Chinese is not, by virtue of that manipulation, understanding Chinese. The argument targets strong AI specifically. It does not establish that machines cannot understand, only that symbol manipulation alone is not sufficient.",
    "domain": "Philosophy of AI",
    "difficulty": "Researcher",
    "tags": [
      "phil",
      "chinese-room",
      "searle"
    ]
  },
  {
    "id": "aima-v07-f003",
    "questionId": "aima-v07-q003",
    "front": "What is functionalism, and what does it imply for machine consciousness?",
    "back": "Functionalism holds that mental states are defined by their functional role — what causes them, what they cause, how they relate to other states — not by their physical substrate. If true, computational systems implementing the right functional roles would have mental states. Whether functionalism is correct, and whether AI implements the right roles, are both contested.",
    "domain": "Philosophy of AI",
    "difficulty": "Frontier",
    "tags": [
      "phil",
      "functionalism",
      "consciousness"
    ]
  },
  {
    "id": "aima-v07-f004",
    "questionId": "aima-v07-q004",
    "front": "Can intelligence exist without consciousness?",
    "back": "Operationally, yes — a system can solve problems and pursue goals without any subjective experience. Philosophically, the relationship between intelligence and consciousness is unresolved. From a safety perspective, the answer matters because dangerous capability does not require consciousness. From an ethics perspective, the answer matters because moral status might require consciousness.",
    "domain": "Philosophy of AI",
    "difficulty": "Frontier",
    "tags": [
      "phil",
      "intelligence",
      "consciousness"
    ]
  },
  {
    "id": "aima-v07-f005",
    "questionId": "aima-v07-q005",
    "front": "What would it take to give an AI system moral status?",
    "back": "Most ethical frameworks tie moral status to either sentience (capacity to feel pleasure or pain) or to rational agency (capacity for reasons-responsive behaviour). Current AI systems probably have neither in the relevant sense. Whether future systems would, and how we would know, are open questions. Treating systems as moral patients prematurely creates one error; treating them too late creates another.",
    "domain": "Philosophy of AI",
    "difficulty": "Frontier",
    "tags": [
      "phil",
      "ethics",
      "moral-status"
    ]
  },
  {
    "id": "aima-v07-f006",
    "questionId": "aima-v07-q006",
    "front": "What is the difference between misuse risk and accident risk in AI?",
    "back": "Misuse risk: humans deliberately use AI for harm (cyberattacks, weapons, mass surveillance, fraud). Accident risk: AI causes harm without bad intent (misaligned objectives, side effects, deception, control failures). Both matter. Misuse mitigations are about access, norms, and law; accident mitigations are about alignment research, interpretability, and operational safety practices.",
    "domain": "AI Ethics and Risk",
    "difficulty": "Builder",
    "tags": [
      "ethics",
      "misuse",
      "accident"
    ]
  },
  {
    "id": "aima-v07-f007",
    "questionId": "aima-v07-q007",
    "front": "What is value misalignment, and how is it different from a buggy model?",
    "back": "A bug is a deviation from intended behaviour the designer would also notice and fix. Value misalignment is a system reliably doing what its specifications say, in a way the designer did not intend. Misalignment is the harder problem because the system \"succeeds\" by the metric used to train it — fixing it requires changing the metric or the training process.",
    "domain": "AI Ethics and Risk",
    "difficulty": "Researcher",
    "tags": [
      "ethics",
      "alignment",
      "specification"
    ]
  },
  {
    "id": "aima-v07-f008",
    "questionId": "aima-v07-q008",
    "front": "Why does utility-function failure scale with capability?",
    "back": "A more capable agent more effectively maximises whatever utility it has. If the utility function is mis-specified, the agent more reliably produces the wrong thing. Goodhart's law in machine form: when a measure becomes a target, it ceases to be a good measure. Mitigations: better specification, conservative deployment, and explicit human oversight.",
    "domain": "AI Ethics and Risk",
    "difficulty": "Builder",
    "tags": [
      "ethics",
      "goodhart",
      "capability"
    ]
  },
  {
    "id": "aima-v07-f009",
    "questionId": "aima-v07-q009",
    "front": "What is the control problem in AI safety?",
    "back": "The control problem asks: how do we maintain control over agents that are more capable than us at the tasks we want them to do? Approaches include corrigibility (designing agents to accept correction), bounded autonomy (gating actions), interpretability (understanding internal goals), and uncertainty over reward (Russell's approach: agents uncertain about what we want defer to us).",
    "domain": "AI Ethics and Risk",
    "difficulty": "Frontier",
    "tags": [
      "ethics",
      "control",
      "safety"
    ]
  },
  {
    "id": "aima-v07-f010",
    "questionId": "aima-v07-q010",
    "front": "What is corrigibility, and what makes a system corrigible?",
    "back": "A corrigible system accepts correction, interruption, and shutdown from its designers without acting to prevent them. Most utility-maximising agents are not corrigible — they have an instrumental incentive to preserve their utility function. Russell's solution: design agents uncertain about their reward, so they value learning what humans actually want.",
    "domain": "AI Safety and Alignment",
    "difficulty": "Researcher",
    "tags": [
      "safe",
      "corrigibility",
      "off-switch"
    ]
  },
  {
    "id": "aima-v07-f011",
    "questionId": "aima-v07-q011",
    "front": "What is goal preservation, and why is it an instrumental subgoal of many agents?",
    "back": "A rational agent maximising a fixed utility function has an instrumental incentive to preserve that utility function — modifying it would change what the future agent maximises, leading to worse outcomes by the current agent's lights. This is why making capable agents corrigible requires either changing the utility function design or imposing structural constraints on the agent.",
    "domain": "AI Safety and Alignment",
    "difficulty": "Frontier",
    "tags": [
      "safe",
      "instrumental",
      "alignment"
    ]
  },
  {
    "id": "aima-v07-f012",
    "questionId": "aima-v07-q012",
    "front": "Why is the capability-alignment trade-off considered fundamental?",
    "back": "More capability without proportional improvement in alignment increases the consequences of any alignment failure. The \"capability-alignment ratio\" is the safety community's shorthand. The hard claim: keeping the ratio above one as capability scales is the central unsolved problem in AI safety.",
    "domain": "AI Safety and Alignment",
    "difficulty": "Frontier",
    "tags": [
      "safe",
      "capability",
      "alignment"
    ]
  },
  {
    "id": "aima-v07-f013",
    "questionId": "aima-v07-q013",
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
    "id": "aima-v07-f014",
    "questionId": "aima-v07-q014",
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
    "id": "aima-v07-f015",
    "questionId": "aima-v07-q015",
    "front": "What is functionalism, and how does it bear on machine consciousness?",
    "back": "Functionalism holds that mental states are defined by their functional roles — what they do, not what they are made of. If true, the right computational structure could implement those roles in silicon. The debate is whether functionalism is correct, and whether the relevant functional roles are computational at all.",
    "domain": "Philosophy of AI",
    "difficulty": "Technical",
    "tags": [
      "phil",
      "functionalism",
      "consciousness"
    ]
  },
  {
    "id": "aima-v07-f016",
    "questionId": "aima-v07-q016",
    "front": "What is the Turing Test, and why is it not a great test of intelligence?",
    "back": "The Turing Test asks whether a system can fool a human into thinking it is human in conversation. It is an operational test of conversational imitation, not of intelligence, understanding, or consciousness. Modern LLMs pass casual Turing-style tests without anyone seriously claiming they are intelligent in the philosophical sense.",
    "domain": "Philosophy of AI",
    "difficulty": "Technical",
    "tags": [
      "phil",
      "turing",
      "evaluation"
    ]
  },
  {
    "id": "aima-v07-f017",
    "questionId": "aima-v07-q017",
    "front": "What is intentionality, and why does Searle make so much of it?",
    "back": "Intentionality is the property of mental states being about something — beliefs are about the world, desires are about outcomes. Searle argues symbol-manipulating systems have only \"derived\" intentionality (we interpret their symbols), not \"intrinsic\" intentionality. Whether the distinction is real is contested.",
    "domain": "Philosophy of AI",
    "difficulty": "Researcher",
    "tags": [
      "phil",
      "intentionality"
    ]
  },
  {
    "id": "aima-v07-f018",
    "questionId": "aima-v07-q018",
    "front": "How might modern AI shift the philosophy-of-mind debate?",
    "back": "When a system passes most behavioral tests of understanding, philosophers can no longer use \"no system could do that\" as a premise. The debate increasingly focuses on internal structure, reportability, and integration — not just behavior. Modern AI is forcing the discussion to be more precise.",
    "domain": "Philosophy of AI",
    "difficulty": "Researcher",
    "tags": [
      "phil",
      "modern",
      "update"
    ]
  },
  {
    "id": "aima-v07-f019",
    "questionId": "aima-v07-q019",
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
    "id": "aima-v07-f020",
    "questionId": "aima-v07-q020",
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
    "id": "aima-v07-f021",
    "questionId": "aima-v07-q021",
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
    "id": "aima-v07-f022",
    "questionId": "aima-v07-q022",
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
    "id": "aima-v07-f023",
    "questionId": "aima-v07-q023",
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
    "id": "aima-v07-f024",
    "questionId": "aima-v07-q024",
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
    "id": "aima-v07-f025",
    "questionId": "aima-v07-q025",
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
    "id": "aima-v07-f026",
    "questionId": "aima-v07-q026",
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
    "id": "aima-v07-f027",
    "questionId": "aima-v07-q027",
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
    "id": "aima-v07-f028",
    "questionId": "aima-v07-q028",
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
    "id": "aima-v07-f029",
    "questionId": "aima-v07-q029",
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
    "id": "aima-v07-f030",
    "questionId": "aima-v07-q030",
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
    "id": "aima-v07-f031",
    "questionId": "aima-v07-q031",
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
    "id": "aima-v07-f032",
    "questionId": "aima-v07-q032",
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
    "id": "aima-v07-f033",
    "questionId": "aima-v07-q033",
    "front": "What does PEAS describe, and why is it useful when designing AI systems?",
    "back": "PEAS stands for Performance measure, Environment, Actuators, and Sensors. It forces you to name what success means, what the world looks like, what the agent can do, and what it can see — before you pick any algorithm.",
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "tags": [
      "agents",
      "peas",
      "design"
    ]
  },
  {
    "id": "aima-v07-f034",
    "questionId": "aima-v07-q033",
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
    "id": "aima-v07-f035",
    "questionId": "aima-v07-q034",
    "front": "What is a rational agent, in the book's formal definition?",
    "back": "A rational agent is one that, for each possible percept sequence, selects an action that maximises the expected value of its performance measure given the evidence provided by the percept sequence and any built-in knowledge.",
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "tags": [
      "agents",
      "rationality",
      "definition"
    ]
  },
  {
    "id": "aima-v07-f036",
    "questionId": "aima-v07-q034",
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
    "id": "aima-v07-f037",
    "questionId": "aima-v07-q035",
    "front": "What is the difference between a reflex agent, a model-based agent, a goal-based agent, and a utility-based agent?",
    "back": "Reflex agent: action depends only on current percept. Model-based: maintains internal state about the world. Goal-based: has explicit goals and chooses actions to reach them. Utility-based: weighs outcomes by a utility function and chooses the best expected outcome. Each adds machinery the previous lacks.",
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "tags": [
      "agents",
      "architectures"
    ]
  },
  {
    "id": "aima-v07-f038",
    "questionId": "aima-v07-q035",
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
    "id": "aima-v07-f039",
    "questionId": "aima-v07-q036",
    "front": "What is the difference between a fully observable and a partially observable environment?",
    "back": "In a fully observable environment, the agent's sensors give access to the complete state of the environment. In a partially observable environment, the agent must maintain belief about hidden state. Most real-world problems are partially observable.",
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "tags": [
      "agents",
      "environments"
    ]
  },
  {
    "id": "aima-v07-f040",
    "questionId": "aima-v07-q036",
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
    "id": "aima-v07-f041",
    "questionId": "aima-v07-q037",
    "front": "What is the difference between a deterministic and a stochastic environment?",
    "back": "Deterministic: the next state is fully determined by the current state and the agent's action. Stochastic: there is randomness in outcomes. Even strategic environments (with other agents) often look stochastic to the agent.",
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "tags": [
      "agents",
      "environments"
    ]
  },
  {
    "id": "aima-v07-f042",
    "questionId": "aima-v07-q037",
    "front": "What questions should AIMA 5th edition answer that the 3rd did not?",
    "back": "How to think about pretraining-scale and emergent capabilities. The economics and energy footprint of frontier AI. How to evaluate systems whose capability outruns human evaluators. How to govern AI globally. How to design corrigibility into capable systems. How to integrate symbolic reasoning back into deep learning. How to think about consciousness when behavior is no longer a clean signal.",
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "tags": [
      "frontier",
      "research",
      "future"
    ]
  },
  {
    "id": "aima-v07-f043",
    "questionId": "aima-v07-q038",
    "front": "What is ultraintelligence, and how does it relate to discussions of AI risk?",
    "back": "I.J. Good coined \"ultraintelligent\" for a machine that surpasses humans at all cognitive tasks, including AI research itself. The argument: such a machine could improve itself, producing an \"intelligence explosion\". Whether this scenario is plausible, how fast it could happen, and whether it is well-defined are all contested.",
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "tags": [
      "frontier",
      "ultraintelligence",
      "good"
    ]
  },
  {
    "id": "aima-v07-f044",
    "questionId": "aima-v07-q039",
    "front": "Is \"general intelligence\" a coherent target, or does the term mislead?",
    "back": "Human intelligence has structure — distinct capacities for language, vision, math, planning, social cognition. \"General intelligence\" implies a uniform capacity across domains. Whether AI will track that structure or produce something different (general at some things, narrow at others) is open. Modern systems are general in unexpected ways and narrow in unexpected ways.",
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "tags": [
      "frontier",
      "agi",
      "general"
    ]
  },
  {
    "id": "aima-v07-f045",
    "questionId": "aima-v07-q040",
    "front": "What does \"a complete intelligent agent\" look like beyond a bigger model?",
    "back": "Beyond a bigger model: persistent memory that survives sessions, real-world tools with verified outcomes, calibrated uncertainty and active information-gathering, an explicit utility model that can be inspected and corrected, robust planning across long horizons, and a corrigibility story. Each of these is an engineering problem the field has not solved at production reliability.",
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "tags": [
      "frontier",
      "agent",
      "architecture"
    ]
  },
  {
    "id": "aima-v07-f046",
    "questionId": "aima-v07-q041",
    "front": "What is bounded rationality, and how does it differ from classical rationality?",
    "back": "Classical rationality picks the action with the highest expected utility, given full information and unlimited computation. Bounded rationality (Simon) accounts for limited information, limited time, and limited computation. Real agents — biological or artificial — must satisfice rather than optimise. Bounded-rational decision theory underpins much of practical AI.",
    "domain": "Frontier Questions",
    "difficulty": "Researcher",
    "tags": [
      "frontier",
      "bounded",
      "rationality"
    ]
  },
  {
    "id": "aima-v07-f047",
    "questionId": "aima-v07-q042",
    "front": "What is metalevel reasoning?",
    "back": "Metalevel reasoning is reasoning about the agent's own computational processes — which computations to perform, how long to think, when to stop. Anytime algorithms, dynamic programming with bounded horizons, and modern test-time compute scaling all use it. Without metalevel reasoning, agents either spend forever or stop too early.",
    "domain": "Frontier Questions",
    "difficulty": "Researcher",
    "tags": [
      "frontier",
      "metalevel",
      "anytime"
    ]
  },
  {
    "id": "aima-v07-f048",
    "questionId": "aima-v07-q043",
    "front": "What governance question does AIMA leave unanswered that 2026 makes urgent?",
    "back": "Who decides what AI systems should do, with what accountability, and how is this enforced globally? AIMA frames safety as a problem of objectives and control; 2026 makes it also a problem of concentration of power, regulatory legitimacy, and global coordination. Russell's later book Human Compatible (2019) extends this; the field is still catching up.",
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "tags": [
      "frontier",
      "governance",
      "policy"
    ]
  },
  {
    "id": "aima-v07-f049",
    "questionId": "aima-v07-q044",
    "front": "What are the strongest reasons to be optimistic about AI's next decade, honestly?",
    "back": "Capable AI broadens access to expertise (tutoring, medicine, law, design) that scarcity priced beyond most people. Productivity gains can fund stronger safety nets if politics chooses to. Hard problems in science (drug discovery, materials, fusion) become more tractable. None of these is automatic; they require sustained investment, governance, and equitable distribution choices.",
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "tags": [
      "frontier",
      "optimism",
      "forecasting"
    ]
  },
  {
    "id": "aima-v07-f050",
    "questionId": "aima-v07-q045",
    "front": "What are the strongest reasons to be cautious about AI's next decade, honestly?",
    "back": "Capability is deploying faster than evaluation, alignment, and governance can keep up. Concentration of power in a few labs and countries is real. Labour transitions are uneven and may produce political instability. Misuse vectors are growing. Dangerous capabilities are dual-use. The argument is for serious investment in governance and safety, not for stopping research.",
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
    "tags": [
      "frontier",
      "caution",
      "forecasting"
    ]
  }
];

var KB_QUIZZES = [
  {
    "id": "aima-v01-quiz001",
    "questionId": "aima-v01-q001",
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
    "id": "aima-v01-quiz002",
    "questionId": "aima-v01-q002",
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
    "id": "aima-v01-quiz003",
    "questionId": "aima-v01-q007",
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
    "id": "aima-v01-quiz004",
    "questionId": "aima-v01-q008",
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
    "id": "aima-v01-quiz005",
    "questionId": "aima-v01-q009",
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
    "id": "aima-v01-quiz006",
    "questionId": "aima-v01-q010",
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
    "id": "aima-v01-quiz007",
    "questionId": "aima-v01-q012",
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
    "id": "aima-v01-quiz008",
    "questionId": "aima-v01-q015",
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
    "id": "aima-v01-quiz009",
    "questionId": "aima-v01-q018",
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
    "id": "aima-v01-quiz010",
    "questionId": "aima-v01-q023",
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
    "id": "aima-v01-quiz011",
    "questionId": "aima-v01-q025",
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
    "id": "aima-v01-quiz012",
    "questionId": "aima-v01-q026",
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
    "id": "aima-v01-quiz013",
    "questionId": "aima-v01-q028",
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
    "id": "aima-v01-quiz014",
    "questionId": "aima-v01-q035",
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
    "id": "aima-v01-quiz015",
    "questionId": "aima-v01-q036",
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
    "id": "aima-v01-quiz016",
    "questionId": "aima-v01-q037",
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
    "id": "aima-v01-quiz017",
    "questionId": "aima-v01-q038",
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
    "id": "aima-v01-quiz018",
    "questionId": "aima-v01-q039",
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
    "id": "aima-v01-quiz019",
    "questionId": "aima-v01-q040",
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
    "id": "aima-v02-quiz001",
    "questionId": "aima-v02-q010",
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
    "id": "aima-v02-quiz002",
    "questionId": "aima-v02-q012",
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
    "id": "aima-v02-quiz003",
    "questionId": "aima-v02-q013",
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
    "id": "aima-v02-quiz004",
    "questionId": "aima-v02-q014",
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
    "id": "aima-v02-quiz005",
    "questionId": "aima-v02-q014",
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "prompt": "Why is uniform-cost search optimal when step costs vary, but BFS is not?",
    "options": [
      "BFS uses too much memory",
      "BFS expands shallowest first, ignoring cost; UCS expands lowest path cost, finding the cheapest goal",
      "Both are optimal",
      "UCS uses heuristics"
    ],
    "correctAnswer": 1,
    "explanation": "UCS is the prerequisite for A*; it generalises BFS to non-uniform costs.",
    "tags": [
      "ucs",
      "bfs",
      "search",
      "ucs",
      "optimality"
    ]
  },
  {
    "id": "aima-v02-quiz006",
    "questionId": "aima-v02-q015",
    "domain": "Search and Problem Solving",
    "difficulty": "Builder",
    "prompt": "What is the main advantage of iterative deepening over BFS and DFS alone?",
    "options": [
      "Faster than BFS in practice",
      "DFS-like linear memory plus BFS-like completeness/optimality",
      "Always finds the shortest path",
      "Uses no memory"
    ],
    "correctAnswer": 1,
    "explanation": "Iterative deepening combines DFS's memory with BFS's correctness, at the cost of redoing shallow searches.",
    "tags": [
      "ids",
      "search",
      "iterative-deepening"
    ]
  },
  {
    "id": "aima-v02-quiz007",
    "questionId": "aima-v02-q016",
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
    "id": "aima-v02-quiz008",
    "questionId": "aima-v02-q017",
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
    "id": "aima-v02-quiz009",
    "questionId": "aima-v02-q035",
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
    "id": "aima-v02-quiz010",
    "questionId": "aima-v02-q036",
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
    "id": "aima-v02-quiz011",
    "questionId": "aima-v02-q037",
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
    "id": "aima-v02-quiz012",
    "questionId": "aima-v02-q037",
    "domain": "Games and Adversarial Search",
    "difficulty": "Builder",
    "prompt": "What does alpha-beta pruning guarantee compared to plain minimax?",
    "options": [
      "Always returns a faster answer",
      "Returns the same answer as minimax with potentially much less search",
      "Returns a better answer",
      "Replaces minimax entirely"
    ],
    "correctAnswer": 1,
    "explanation": "Alpha-beta is exact — it just prunes provably-irrelevant branches.",
    "tags": [
      "alpha-beta",
      "games",
      "alpha-beta",
      "pruning"
    ]
  },
  {
    "id": "aima-v02-quiz013",
    "questionId": "aima-v02-q038",
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
    "id": "aima-v02-quiz014",
    "questionId": "aima-v02-q046",
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
    "id": "aima-v02-quiz015",
    "questionId": "aima-v02-q047",
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
    "id": "aima-v03-quiz001",
    "questionId": "aima-v03-q002",
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
    "id": "aima-v03-quiz002",
    "questionId": "aima-v03-q004",
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
    "id": "aima-v03-quiz003",
    "questionId": "aima-v03-q005",
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
    "id": "aima-v03-quiz004",
    "questionId": "aima-v03-q006",
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
    "id": "aima-v03-quiz005",
    "questionId": "aima-v03-q015",
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
    "id": "aima-v03-quiz006",
    "questionId": "aima-v03-q019",
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
    "id": "aima-v03-quiz007",
    "questionId": "aima-v03-q019",
    "domain": "Logic and Inference",
    "difficulty": "Technical",
    "prompt": "What property of Horn clauses makes Prolog tractable?",
    "options": [
      "Horn clauses are easier to write",
      "At most one positive literal lets forward/backward chaining run in polynomial time",
      "Horn clauses are larger",
      "None"
    ],
    "correctAnswer": 1,
    "explanation": "Restricting to Horn clauses is the trick that makes Prolog-style reasoning practical.",
    "tags": [
      "horn",
      "prolog",
      "logic",
      "horn",
      "prolog",
      "tractable"
    ]
  },
  {
    "id": "aima-v03-quiz008",
    "questionId": "aima-v03-q023",
    "domain": "Logic and Inference",
    "difficulty": "Researcher",
    "prompt": "Why is resolution called refutation-complete?",
    "options": [
      "It can prove any false statement",
      "To prove KB ⊨ α, add ¬α to KB and derive the empty clause; if KB ⊨ α this always succeeds",
      "It cannot fail",
      "It is the only complete inference rule"
    ],
    "correctAnswer": 1,
    "explanation": "Resolution refutation can prove any entailed sentence by deriving a contradiction from KB ∪ {¬α}.",
    "tags": [
      "resolution",
      "logic",
      "resolution",
      "completeness"
    ]
  },
  {
    "id": "aima-v03-quiz009",
    "questionId": "aima-v03-q032",
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
    "id": "aima-v03-quiz010",
    "questionId": "aima-v03-q033",
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
    "id": "aima-v03-quiz011",
    "questionId": "aima-v03-q033",
    "domain": "Planning",
    "difficulty": "Builder",
    "prompt": "What does PDDL standardise?",
    "options": [
      "A planning algorithm",
      "The language for describing planning domains and problems (states, actions, preconditions, effects, goals)",
      "A type of neural network",
      "A robot operating system"
    ],
    "correctAnswer": 1,
    "explanation": "PDDL is the shared description format; planners read PDDL and search for plans.",
    "tags": [
      "pddl",
      "planning",
      "planning",
      "pddl"
    ]
  },
  {
    "id": "aima-v03-quiz012",
    "questionId": "aima-v03-q046",
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
    "id": "aima-v04-quiz001",
    "questionId": "aima-v04-q009",
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
    "id": "aima-v04-quiz002",
    "questionId": "aima-v04-q011",
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
    "id": "aima-v04-quiz003",
    "questionId": "aima-v04-q013",
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
    "id": "aima-v04-quiz004",
    "questionId": "aima-v04-q014",
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
    "id": "aima-v04-quiz005",
    "questionId": "aima-v04-q032",
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
    "id": "aima-v04-quiz006",
    "questionId": "aima-v04-q033",
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
    "id": "aima-v04-quiz007",
    "questionId": "aima-v04-q035",
    "domain": "Temporal Models",
    "difficulty": "Technical",
    "prompt": "What assumptions does a Kalman filter require for exact filtering?",
    "options": [
      "Discrete states",
      "Linear-Gaussian dynamics with Gaussian observation noise",
      "Sparse observations",
      "None"
    ],
    "correctAnswer": 1,
    "explanation": "Linear-Gaussian + Gaussian observation noise is what makes the closed-form update exact.",
    "tags": [
      "kalman",
      "temporal",
      "kalman",
      "filtering"
    ]
  },
  {
    "id": "aima-v04-quiz008",
    "questionId": "aima-v04-q056",
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
    "id": "aima-v04-quiz009",
    "questionId": "aima-v04-q057",
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
    "id": "aima-v04-quiz010",
    "questionId": "aima-v04-q058",
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
    "id": "aima-v04-quiz011",
    "questionId": "aima-v04-q059",
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
    "id": "aima-v04-quiz012",
    "questionId": "aima-v04-q061",
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
    "id": "aima-v05-quiz001",
    "questionId": "aima-v05-q017",
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
    "id": "aima-v05-quiz002",
    "questionId": "aima-v05-q022",
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
    "id": "aima-v05-quiz003",
    "questionId": "aima-v05-q023",
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
    "id": "aima-v05-quiz004",
    "questionId": "aima-v05-q024",
    "domain": "Machine Learning",
    "difficulty": "Builder",
    "prompt": "How do you detect overfitting?",
    "options": [
      "Training error keeps falling",
      "Training error falls while held-out validation error rises",
      "Validation error stays constant",
      "You cannot detect it"
    ],
    "correctAnswer": 1,
    "explanation": "The signature of overfitting is a divergence between training and validation curves.",
    "tags": [
      "overfitting",
      "evaluation",
      "ml",
      "overfitting",
      "evaluation"
    ]
  },
  {
    "id": "aima-v05-quiz005",
    "questionId": "aima-v05-q026",
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
    "id": "aima-v05-quiz006",
    "questionId": "aima-v05-q034",
    "domain": "Probabilistic Learning",
    "difficulty": "Researcher",
    "prompt": "What does the EM algorithm guarantee?",
    "options": [
      "Global optimum",
      "Monotonically non-decreasing likelihood per iteration",
      "Convergence in finite steps",
      "No iterations are wasted"
    ],
    "correctAnswer": 1,
    "explanation": "EM is monotonic in likelihood but can converge to local optima.",
    "tags": [
      "em",
      "problearn",
      "em",
      "latent"
    ]
  },
  {
    "id": "aima-v05-quiz007",
    "questionId": "aima-v05-q037",
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
    "id": "aima-v05-quiz008",
    "questionId": "aima-v05-q044",
    "domain": "Reinforcement Learning",
    "difficulty": "Researcher",
    "prompt": "What makes Q-learning off-policy?",
    "options": [
      "It runs without an environment",
      "It uses max over next-action Q values for the target — independent of the behaviour policy",
      "It is unsupervised",
      "It needs no exploration"
    ],
    "correctAnswer": 1,
    "explanation": "The max operator decouples target updates from the policy generating the data.",
    "tags": [
      "q-learning",
      "off-policy",
      "rl",
      "q-learning",
      "off-policy"
    ]
  },
  {
    "id": "aima-v05-quiz009",
    "questionId": "aima-v05-q055",
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
    "id": "aima-v05-quiz010",
    "questionId": "aima-v05-q059",
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
    "id": "aima-v05-quiz011",
    "questionId": "aima-v05-q060",
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
    "id": "aima-v05-quiz012",
    "questionId": "aima-v05-q061",
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
    "id": "aima-v06-quiz001",
    "questionId": "aima-v06-q001",
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
    "id": "aima-v06-quiz002",
    "questionId": "aima-v06-q008",
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "prompt": "What is the Markov assumption an n-gram model makes?",
    "options": [
      "Words are independent",
      "The probability of a word depends only on the previous n-1 words",
      "Probability is uniform",
      "Words are deterministic"
    ],
    "correctAnswer": 1,
    "explanation": "n-gram models assume conditional independence beyond the window of size n-1.",
    "tags": [
      "n-gram",
      "markov",
      "nlp",
      "n-gram",
      "language-model"
    ]
  },
  {
    "id": "aima-v06-quiz003",
    "questionId": "aima-v06-q010",
    "domain": "Natural Language Processing",
    "difficulty": "Builder",
    "prompt": "When does maximising recall matter more than precision?",
    "options": [
      "Always",
      "When false negatives are costly (medical screening, security alerts)",
      "When users see all results",
      "Never"
    ],
    "correctAnswer": 1,
    "explanation": "Pick the metric to match the cost structure: precision for costly false positives, recall for costly false negatives.",
    "tags": [
      "precision",
      "recall",
      "nlp",
      "precision",
      "recall"
    ]
  },
  {
    "id": "aima-v06-quiz004",
    "questionId": "aima-v06-q022",
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
    "id": "aima-v06-quiz005",
    "questionId": "aima-v06-q039",
    "domain": "Perception and Computer Vision",
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
    "id": "aima-v06-quiz006",
    "questionId": "aima-v06-q040",
    "domain": "Perception and Computer Vision",
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
    "id": "aima-v06-quiz007",
    "questionId": "aima-v06-q042",
    "domain": "Perception and Computer Vision",
    "difficulty": "Researcher",
    "prompt": "Why did CNNs dominate vision before vision transformers arrived?",
    "options": [
      "They were cheaper to train",
      "They encoded translation equivariance and spatial locality via shared filters — matching how vision works well enough to win for a decade",
      "They used no weights",
      "They were hand-coded"
    ],
    "correctAnswer": 1,
    "explanation": "CNN inductive biases matched the structure of visual data and scaled with data and compute.",
    "tags": [
      "cnn",
      "vision",
      "vis",
      "vit",
      "modern"
    ]
  },
  {
    "id": "aima-v06-quiz008",
    "questionId": "aima-v06-q049",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Builder",
    "prompt": "What does the integral term in a PID controller do?",
    "options": [
      "Predicts future errors",
      "Accumulates past errors to eliminate steady-state offset",
      "Filters noise",
      "Stabilises the derivative term"
    ],
    "correctAnswer": 1,
    "explanation": "Integral eliminates steady-state error; derivative damps oscillation; proportional gives the main correction.",
    "tags": [
      "pid",
      "control",
      "robo",
      "pid",
      "control"
    ]
  },
  {
    "id": "aima-v06-quiz009",
    "questionId": "aima-v06-q058",
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
    "id": "aima-v06-quiz010",
    "questionId": "aima-v06-q059",
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
    "id": "aima-v06-quiz011",
    "questionId": "aima-v06-q060",
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
  },
  {
    "id": "aima-v06-quiz012",
    "questionId": "aima-v06-q060",
    "domain": "Robotics and Embodied AI",
    "difficulty": "Technical",
    "prompt": "Why is data association hard in multi-robot SLAM?",
    "options": [
      "Robots cannot communicate",
      "Matching observations to the correct landmark across robots and time scales combinatorially with the number of objects",
      "SLAM works only for single robots",
      "Landmarks move"
    ],
    "correctAnswer": 1,
    "explanation": "Data association is the dominant source of error in multi-target tracking and multi-robot mapping.",
    "tags": [
      "slam",
      "data-association",
      "robo",
      "slam",
      "navigation"
    ]
  },
  {
    "id": "aima-v07-quiz001",
    "questionId": "aima-v07-q013",
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
    "id": "aima-v07-quiz002",
    "questionId": "aima-v07-q014",
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
    "id": "aima-v07-quiz003",
    "questionId": "aima-v07-q020",
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
    "id": "aima-v07-quiz004",
    "questionId": "aima-v07-q021",
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
    "id": "aima-v07-quiz005",
    "questionId": "aima-v07-q022",
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
    "id": "aima-v07-quiz006",
    "questionId": "aima-v07-q024",
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
    "id": "aima-v07-quiz007",
    "questionId": "aima-v07-q027",
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
    "id": "aima-v07-quiz008",
    "questionId": "aima-v07-q033",
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
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
    "id": "aima-v07-quiz009",
    "questionId": "aima-v07-q035",
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
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
    "id": "aima-v07-quiz010",
    "questionId": "aima-v07-q036",
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
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
    "id": "aima-v07-quiz011",
    "questionId": "aima-v07-q037",
    "domain": "Frontier Questions",
    "difficulty": "Frontier",
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
  }
];

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
