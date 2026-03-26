/**
 * Central place for links and contact. Override via env or edit values below.
 */
export const site = {
  name: "Atharva Biyani",
  /** Shown in the hero mark when no photo is used */
  initials: "AB",
  role: "Software Engineer @ Oracle | MS in AI @ UT Austin",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "atharvabiyani@gmail.com",
  links: {
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN ??
      "https://www.linkedin.com/in/atharva-biyani/",
    github:
      process.env.NEXT_PUBLIC_GITHUB ?? "https://github.com/atharvabiyani",
    medium:
      process.env.NEXT_PUBLIC_MEDIUM ?? "https://medium.com/@atharvabiyani",
  },
  experience: [
    {
      company: "Oracle",
      title: "Software Engineer",
      team: "OCI — Identity and Access Management",
      range: "July 2025 — Present",
    },
    {
      company: "Bank of America",
      title: "Software Engineer Intern",
      team: "Core Tech Infrastructure",
      range: "June 2024 — Aug 2024",
    },
    {
      company: "Magnifico",
      title: "Software Intern",
      team: "AWS & React",
      range: "Oct 2023 — Dec 2023",
    },
    {
      company: "APCON",
      title: "Software Front End Intern",
      team: "Angular",
      range: "May 2023 — Dec 2023",
    },
  ],
  education: [
    {
      school: "UT Austin",
      degree: "Master of Science in Artificial Intelligence",
      detail: "GPA: 4.0 / 4.0 · Jan 2026 — Expected Dec 2027",
    },
    {
      school: "UT Dallas",
      degree: "Bachelor of Science in Computer Science",
      detail: "GPA: 3.75 / 4.0 · Aug 2021 — May 2025",
    },
  ],
  projects: [
    {
      title: "Autonomous Agentic Workflow Orchestrator",
      description:
        "FastAPI + LangGraph service with a Plan–Execute–Verify loop, MCP read-only SQLite access, and NumPy analytics—structured agent workflows instead of brittle one-shot prompts.",
      tags: [
        "Python",
        "FastAPI",
        "LangGraph",
        "MCP",
        "Pydantic",
        "SQLite",
        "NumPy",
      ],
      github:
        process.env.NEXT_PUBLIC_PROJECT_AGENT_GITHUB ??
        "https://github.com/atharvabiyani/Autonomous-Agentic-Workflow-Orchestrator",
    },
    {
      title: "Distributed High-Throughput Observability Platform",
      description:
        "Telemetry pipeline from Java JFR through Redpanda into ClickHouse, with a Go consumer that batches writes and commits Kafka offsets only after successful inserts.",
      tags: [
        "Go",
        "Java",
        "Kafka",
        "Redpanda",
        "ClickHouse",
        "Kubernetes",
        "JFR",
        "Docker",
      ],
      github:
        process.env.NEXT_PUBLIC_PROJECT_OBS_GITHUB ??
        "https://github.com/atharvabiyani/Distributed-High-Throughput-Observability-Platform",
    },
    {
      title: "Resume Matching System",
      description:
        "Semantic matching between resumes and roles using transformer embeddings and NLP preprocessing.",
      tags: ["Python", "Sentence-BERT", "NLP"],
      github:
        process.env.NEXT_PUBLIC_PROJECT_RESUME_GITHUB ??
        "https://github.com/atharvabiyani/Resume-Job-Matching-System",
    },
  ],
  tools: {
    languages: [
      "Python (Expert)",
      "Go (Golang)",
      "Java",
      "TypeScript",
      "JavaScript",
      "SQL (PostgreSQL)",
      "Rust",
      "C++",
      "Bash/Shell",
    ],
    aiMl: [
      "LLM Orchestration (LangChain)",
      "Agentic Workflows",
      "MCP",
      "RAG",
      "Vector Databases",
      "Prompt Engineering",
      "PyTorch",
      "Scikit-Learn",
      "YOLO",
      "MoveNet",
      "Sentence-BERT",
      "Hugging Face",
      "NLP",
    ],
    cloudDevOps: [
      "Kubernetes",
      "Docker",
      "Terraform",
      "Oracle Cloud (OCI)",
      "AWS",
      "Google Cloud",
      "Azure",
      "Kafka",
      "CI/CD",
      "Grafana",
      "Distributed Systems Architecture",
      "React",
      "Angular",
      "Spring Boot",
      "Node.js",
    ],
    toolsAndWorkflow: [
      "Cursor AI",
      "Claude",
      "Codex",
      "Git",
      "Linux/Unix",
      "Redis",
      "REST APIs",
      "System Design",
      "Jira",
      "Confluence",
      "Agile/Scrum",
      "Observability (ELK Stack, Datadog)",
    ],
  },
  articles: [
    {
      title: "Stargate: The Future of AI Infrastructure",
      blurb: "Why the next wave of AI systems will be defined by the platforms underneath them.",
      url: "https://medium.com/@atharvabiyani/how-stargate-superclusters-reflect-a-bigger-shift-in-ai-infrastructure-d238cefce75e",
    },
    {
      title: "Smart Cities Powered by Azure",
      blurb: "Connecting cloud services, data, and civic infrastructure at city scale.",
      url: "https://medium.com/@atharvabiyani/microsoft-azure-for-smart-cities-iot-and-edge-computing-in-action-35fb4914b195",
    },
    {
      title: "The Power of Networking",
      blurb: "Building relationships that compound—beyond the resume and the interview loop.",
      url: "https://medium.com/@atharvabiyani/the-power-of-networking-why-its-crucial-in-today-s-competitive-job-market-f5be9d95cf35",
    },
  ],
  life: {
    body: `When I'm not debugging a container issue, working on deployments, or building systems with agentic AI, you'll probably find me chasing after my golden retriever, Rio, unwinding on the pickleball courts, or hunting down tacos worth a second visit. I love the craft of building reliable systems—and the moments away from the keyboard that keep everything in balance.`,
  },
  /** Life bento — photos imported from src/assets/portfolio/ (see verify:images) */
  lifeGallery: [
    {
      alt: "Rio, golden retriever",
      caption: "Rio",
      description:
        "Golden-retriever walks, chaos, and the best kind of distraction from a long day.",
      accent: "indigo" as const,
    },
    {
      alt: "Pickleball courts",
      caption: "Courts",
      description:
        "Pickleball, fresh air, and moving after too many hours behind a screen.",
      accent: "violet" as const,
    },
    {
      alt: "Tacos",
      caption: "Tacos",
      description:
        "Hunting down spots worth a second visit—small rituals, big payoff.",
      accent: "sky" as const,
    },
  ],
};
