export const PERSONAL_INFO = {
  name: "Krishan Beniwal",
  title: "Software Developer | AI/ML Enthusiast",
  degree: "Bachelor of Technology (B.Tech)",
  branch: "Computer Science and Engineering",
  specialization: "Artificial Intelligence and Machine Learning",
  college: "Shri Vishwakarma Skill University",
  graduationYear: 2027,
  currentStatus: "Final-Year Student",
  email: "kbeniwal289@gmail.com",
  phone: "+91 8077368214",
  location: "India",
  github: "https://github.com/KrishanBeniwal01",
  linkedin: "https://www.linkedin.com/in/krishan-beniwal-7b0243328",
  leetcode: "https://leetcode.com/u/Krishan_Beniwal",
  resumeUrl: "/Krishan_Beniwal_Resume.pdf",
  tagline: "Building intelligent solutions through code, creativity, and artificial intelligence.",
  heroHeading: "Hi, I'm Krishan Beniwal",
  heroDescription: "Passionate about building intelligent applications, solving real-world problems, and exploring emerging technologies.",
  about: `I am a final-year B.Tech Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at Shri Vishwakarma Skill University.

I have a strong foundation in computer science fundamentals, object-oriented programming, data structures, algorithms, and software development principles.

I enjoy solving challenging programming problems, exploring emerging technologies, and developing practical software solutions. My interests include Artificial Intelligence, Generative AI, Machine Learning, and modern software engineering.

I have worked on AI-powered projects that combine intelligent systems with real-world applications. I am a quick learner with strong analytical thinking, logical reasoning, communication, and teamwork skills.

I continuously strive to improve my technical abilities and build impactful applications.`,
  careerObjective: "Passionate about transforming ideas into practical technology solutions. Seeking opportunities to apply my programming, problem-solving, and AI knowledge while continuously learning, collaborating, and contributing to innovative software development projects."
};

export const SKILL_CATEGORIES = [
  {
    id: "programming",
    title: "Programming & Computer Science",
    icon: "Code2",
    description: "Core algorithms, languages, and object-oriented principles",
    color: "from-blue-500/20 to-cyan-500/10 border-blue-500/30",
    skills: [
      { name: "C++", level: "Core", tag: "DSA & OOP" },
      { name: "Python", level: "Primary", tag: "AI/ML & Backend" },
      { name: "Object-Oriented Programming", level: "Core", tag: "Design Principles" },
      { name: "Data Structures & Algorithms", level: "Advanced", tag: "Problem Solving" },
      { name: "Problem Solving", level: "Consistent", tag: "LeetCode Practice" }
    ]
  },
  {
    id: "aiml",
    title: "Artificial Intelligence & Machine Learning",
    icon: "BrainCircuit",
    description: "Autonomous agents, LLM architectures, and machine learning pipelines",
    color: "from-purple-500/20 to-pink-500/10 border-purple-500/30",
    skills: [
      { name: "Artificial Intelligence", level: "Core", tag: "Specialization" },
      { name: "Machine Learning", level: "Applied", tag: "Scikit-Learn & Models" },
      { name: "Generative AI", level: "Advanced", tag: "OpenAI & Gemini" },
      { name: "Large Language Models", level: "Applied", tag: "Prompt & Fine-tuning" },
      { name: "Agentic AI", level: "Specialist", tag: "Multi-Agent Systems" },
      { name: "LangGraph", level: "Specialist", tag: "Stateful Workflows" }
    ]
  },
  {
    id: "web",
    title: "Web Development",
    icon: "Globe",
    description: "Responsive, dynamic, and accessible frontend interfaces",
    color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30",
    skills: [
      { name: "HTML5", level: "Proficient", tag: "Semantic Markup" },
      { name: "CSS3", level: "Proficient", tag: "Modern Styling" },
      { name: "JavaScript (ES6+)", level: "Advanced", tag: "Async & Modern Web" },
      { name: "React.js", level: "Advanced", tag: "Component Architecture" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Frameworks",
    icon: "Server",
    description: "High-performance RESTful APIs and asynchronous background task workers",
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30",
    skills: [
      { name: "FastAPI", level: "Primary", tag: "High-performance Python" },
      { name: "REST APIs", level: "Advanced", tag: "Architecture & Security" },
      { name: "Node.js / Express", level: "Familiar", tag: "MERN Stack" },
      { name: "Flask", level: "Familiar", tag: "Microservices" }
    ]
  },
  {
    id: "databases",
    title: "Databases & In-Memory Stores",
    icon: "Database",
    description: "Relational modeling, transaction integrity, and low-latency cache",
    color: "from-amber-500/20 to-orange-500/10 border-amber-500/30",
    skills: [
      { name: "SQL", level: "Proficient", tag: "Query Optimization" },
      { name: "PostgreSQL", level: "Primary", tag: "Relational DB" },
      { name: "Redis", level: "Applied", tag: "Caching & Queues" },
      { name: "MongoDB", level: "Familiar", tag: "Document Store" }
    ]
  },
  {
    id: "devops",
    title: "Tools, DevOps & Cloud",
    icon: "Layers",
    description: "Modern containerization, orchestration, and continuous integration",
    color: "from-sky-500/20 to-indigo-500/10 border-sky-500/30",
    skills: [
      { name: "Git", level: "Proficient", tag: "Version Control" },
      { name: "GitHub", level: "Advanced", tag: "Actions & Webhooks" },
      { name: "Docker", level: "Applied", tag: "Containerization" },
      { name: "Celery", level: "Applied", tag: "Distributed Tasks" },
      { name: "AWS", level: "Foundational", tag: "Cloud Infrastructure" },
      { name: "Kubernetes", level: "Foundational", tag: "Orchestration" }
    ]
  }
];

export const FEATURED_PROJECTS = [
  {
    id: "ai-pr-reviewer",
    title: "AI-Powered Intelligent GitHub Pull Request Review System",
    category: "Artificial Intelligence | Multi-Agent Systems | Software Engineering",
    badge: "Multi-Agent AI",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    accentGradient: "from-purple-600 via-indigo-600 to-blue-600",
    description: "An AI-powered automated code review platform that analyzes GitHub Pull Requests using multiple specialized AI agents. The system identifies potential bugs, security vulnerabilities, architectural problems, and coding-style issues before code gets merged.",
    keyFeatures: [
      "Automated GitHub Pull Request analysis triggered via webhooks",
      "Multi-agent architecture orchestrated with LangGraph state graphs",
      "Static code analysis agent detecting syntax & logic flaws",
      "Security analysis agent enforcing OWASP Top 10 compliance",
      "Architecture analysis agent evaluating design patterns & modularity",
      "Code quality and style analysis agent for idiomatic adherence",
      "Automated contextual GitHub review comments placed on diff lines",
      "Repository-specific learning through a post-merge learner mechanism",
      "Asynchronous distributed processing using Celery and Redis"
    ],
    techStack: [
      "Python", "FastAPI", "LangGraph", "OpenAI GPT-4o-mini",
      "PostgreSQL", "Redis", "Celery", "GitHub Webhooks",
      "Docker", "AWS", "Kubernetes", "Terraform"
    ],
    githubUrl: "https://github.com/KrishanBeniwal01/ai-pr-review-demo",
    liveUrl: null,
    isLive: false,
    githubButtonText: "View on GitHub",
    architectureHighlights: [
      {
        agent: "Security Agent",
        role: "Scans changed diffs for SQL injections, SSRF, secret leaks, and OWASP Top 10 vulnerabilities."
      },
      {
        agent: "Architecture Agent",
        role: "Evaluates coupling, interface segregation, module boundaries, and dependency bloat."
      },
      {
        agent: "Code Quality Agent",
        role: "Checks naming conventions, cyclomatic complexity, test coverage suggestions, and documentation."
      },
      {
        agent: "Post-Merge Learner",
        role: "Updates repository-specific vector memory when reviews are accepted to minimize repetitive feedback."
      }
    ]
  },
  {
    id: "arogya-sarthi",
    title: "Arogya Sarthi – AI-Powered Medical Diagnosis System",
    category: "Artificial Intelligence | Healthcare Technology | Machine Learning",
    badge: "Live Deployed",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    accentGradient: "from-cyan-600 via-teal-600 to-emerald-600",
    description: "Arogya Sarthi is an AI-powered medical diagnosis system developed to bring intelligent healthcare assistance through technology. It is a live-deployed project that demonstrates my interest in applying artificial intelligence to meaningful real-world healthcare applications.",
    keyFeatures: [
      "AI-driven symptom checker with real-time natural language evaluation",
      "Machine learning inference microservices for preliminary disease risk prediction",
      "Role-based access control for Patients, Doctors, and Administrators",
      "Automated PDF medical report generation with diagnostic summaries",
      "Specialist consultation recommendation and doctor directory module",
      "Triage urgency indicator with color-coded safety warning levels",
      "Patient health history tracking across historical diagnostic sessions",
      "Strict ethical medical disclaimer emphasizing preliminary guidance"
    ],
    techStack: [
      "React.js", "Node.js", "Express.js", "MongoDB",
      "Flask", "TensorFlow", "Gemini API", "Tailwind CSS",
      "JWT Auth", "REST APIs", "Vercel"
    ],
    liveUrl: "https://arogya-sarthi.vercel.app",
    githubUrl: "https://github.com/KrishanBeniwal01/arogya-sarthi",
    isLive: true,
    liveButtonText: "Live Demo",
    githubButtonText: "View Source Code",
    medicalDisclaimer: "Important Ethical Notice: Arogya Sarthi is designed strictly as an assistive educational and preliminary triage exploration tool. It does not replace professional clinical evaluation, diagnosis, or emergency healthcare services from licensed medical practitioners.",
    architectureHighlights: [
      {
        agent: "Symptom Analysis",
        role: "Processes patient-reported symptoms and maps them against clinical risk indicators."
      },
      {
        agent: "Risk Modeling",
        role: "Evaluates preliminary chronic and acute health risks with AI models."
      },
      {
        agent: "Report Pipeline",
        role: "Synthesizes structured PDF medical summaries for consultation with licensed physicians."
      }
    ]
  }
];

export const EDUCATION_DATA = {
  institution: "Shri Vishwakarma Skill University",
  degree: "Bachelor of Technology (B.Tech)",
  branch: "Computer Science and Engineering",
  specialization: "Artificial Intelligence and Machine Learning",
  graduationYear: "2027",
  status: "Final-Year Student / Currently Pursuing",
  highlights: [
    "Specialized coursework in AI/ML, Neural Networks, and Natural Language Processing",
    "Rigorous computer science foundation: Data Structures, Algorithms, Operating Systems, DBMS",
    "Hands-on engineering projects focused on multi-agent architectures and full-stack software",
    "Active participant in technical problem-solving sessions and collaborative development"
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (C++)",
    "Database Management Systems (SQL)",
    "Operating Systems & Architecture",
    "Artificial Intelligence & ML",
    "Computer Networks"
  ]
};

export const CERTIFICATION_DATA = {
  program: "Data Science Mentorship Program",
  organization: "AIMERZ.ai",
  status: "Successfully Completed",
  type: "Mentorship & Professional Development",
  description: "Comprehensive hands-on mentorship program covering data science workflows, predictive modeling, machine learning algorithms, and real-world analytical problem solving.",
  skillsLearned: [
    "Data Analysis & Visualization",
    "Supervised & Unsupervised Machine Learning",
    "Feature Engineering & Model Evaluation",
    "Python for Scientific Computing",
    "End-to-End ML Pipeline Architecture"
  ],
  verifiedNote: "Completed as an intensive structured mentorship program focused on practical machine learning and data science methodologies."
};

export const LEETCODE_DATA = {
  username: "Krishan_Beniwal",
  profileUrl: "https://leetcode.com/u/Krishan_Beniwal",
  totalSolved: 163,
  easy: 48,
  medium: 95,
  hard: 20,
  ranking: "1,100,586",
  quote: "Consistently practicing Data Structures and Algorithms to strengthen problem-solving abilities, improve logical reasoning, and develop efficient coding solutions.",
  focusTopics: [
    "Arrays & Hashing",
    "Two Pointers & Sliding Window",
    "Binary Search & Trees",
    "Dynamic Programming",
    "Graphs & BFS/DFS",
    "Heap & Priority Queues"
  ]
};

export const PROFESSIONAL_STRENGTHS = [
  {
    title: "Analytical Thinking",
    description: "Dissecting complex technical challenges into manageable, testable components with structured problem decomposition.",
    icon: "Brain"
  },
  {
    title: "Logical Reasoning",
    description: "Formulating clean, mathematical algorithmic solutions with optimal time and space complexity trade-offs.",
    icon: "Workflow"
  },
  {
    title: "Problem Solving",
    description: "Deep commitment to tackling tough programming puzzles with persistence, rigorous edge-case testing, and clarity.",
    icon: "Target"
  },
  {
    title: "Quick Learning",
    description: "Rapidly mastering emerging frameworks, agentic workflows, and cloud paradigms to deliver production-grade code.",
    icon: "Zap"
  },
  {
    title: "Adaptability",
    description: "Thriving across diverse tech stacks, from Python/FastAPI microservices to MERN architectures and cloud deployments.",
    icon: "Compass"
  },
  {
    title: "Communication Skills",
    description: "Articulating technical design rationale clearly across code comments, architectural documentation, and peer reviews.",
    icon: "MessageSquare"
  },
  {
    title: "Team Collaboration",
    description: "Working constructively in Git-based agile workflows, contributing actionable peer reviews, and aligning on team goals.",
    icon: "Users"
  },
  {
    title: "Attention to Detail",
    description: "Enforcing OWASP security standards, clean API design, typed schemas, and responsive UI micro-interactions.",
    icon: "CheckCircle2"
  },
  {
    title: "Continuous Learning",
    description: "Dedicated to continuous skill expansion through mentorships, daily algorithm practice, and AI research exploration.",
    icon: "Sparkles"
  }
];

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Coding Profile", href: "#coding" },
  { name: "Contact", href: "#contact" }
];
