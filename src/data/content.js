// Edit this file to update the site's copy without touching component code.

export const profile = {
  name: "Nauman Ali",
  title:
    "Software Engineer /  AI Automation Engineer / Cyber Crime Investigator",
  tagline:
    "I build intelligent automation systems and secure, scalable softwares, bridging AI engineering with 8+ years of hands-on digital forensics , Cyber Crime Investigation and full-stack development.",
  location: "Islamabad, Pakistan",
  email: "thisisnauman.ali@gmail.com",
  linkedin: "https://linkedin.com/in/nauman5",
  WeChat: "https://wechat.com/naumanali555",
  WhatsApp: "https://wa.me/923129778448",
  availability: "Open to remote opportunities",
  resumeUrl: "/Nauman_Ali_CV_AI-DEV.pdf", // drop your CV in /public and update this path
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  eyebrow: "01. About",
  body: [
    "I have spent  eight years working in two different fields: cybercrime investigation and software development. As a Cyber CrimeInvestigator with Pakistan’s FIA Cyber Crime Wing, I collected evidence, used OSINT, and carried out Cyber Crime investigations in cases such as money laundering, cryptocurrency fraud, and identity theft.",
    "That investigative way of thinking now guides how I build software. I currently work as an AI Automation Engineer, where I design workflows using GenAI and RAG with tools like n8n. I also work in full‑stack development, using Python, Node.js, FastAPI, Laravel, and different databases.",
  ],
  facts: [
    { label: "Name", value: "Nauman Ali" },
    { label: "Location", value: "Gilgit, Pakistan" },
    { label: "Email", value: "thisisnauman.ali@gmail.com" },
  ],
};

export const skills = {
  eyebrow: "03. Services & Skills",
  heading: "What I Do",
  items: [
    {
      title: "AI & Automation",
      description:
        "Designing GenAI and RAG-powered workflows that automate real business processes.",
      tech: "Gen AI, RAG, Vector DBs, n8n",
    },
    {
      title: "Backend Development",
      description:
        "Building reliable APIs and server-side systems across multiple frameworks.",
      tech: "Node.js, FastAPI, Flask, Laravel",
    },
    {
      title: "Databases & Data",
      description:
        "Structuring and managing data for applications and large research datasets.",
      tech: "MySQL, MongoDB",
    },
    {
      title: "DevOps & Tooling",
      description:
        "Containerizing services and handling real-time data pipelines.",
      tech: "Docker, Apache Kafka",
    },
    {
      title: "Digital Forensics",
      description:
        "Evidence acquisition, OSINT, and forensic analysis using industry-standard tooling.",
      tech: "Cellebrite, FTK, Oxygen Forensic",
    },
  ],
};

export const projects = {
  eyebrow: "04. Selected Work",
  heading: "Things I've Built",
  note: "Pulled from my professional experience — swap these for your own case studies and links whenever you have them.",
  items: [
    {
      title: "Forensic Media Analyzer",
      description:
        "A Python desktop tool for forensic investigators to scan large batches of images and documents — flagging faces, explicit content, and keyword matches across PDFs, Word, and PowerPoint files.",
      tags: ["Python", "Computer Vision", "Forensics"],
    },
    {
      title: "AI Workflow Automation",
      description:
        "RAG-based automation pipelines built with n8n and vector databases to streamline repetitive research and data-retrieval tasks.",
      tags: ["n8n", "RAG", "Vector DB"],
    },
    {
      title: "Client REST API Platform",
      description:
        "Designed and shipped REST APIs powering web and mobile clients, with JWT auth, social login, and Twilio-based messaging.",
      tags: ["Node.js", "Express", "JWT"],
    },
    {
      title: "Survey Data Dashboard",
      description:
        "A Laravel dashboard for visualizing and monitoring large-scale survey datasets with graphical reports for a research team.",
      tags: ["Laravel", "PHP", "MySQL"],
    },
  ],
};

export const experience = {
  eyebrow: "02. Experience & Education",
  heading: "Experience",
  eduHeading: "Education",
  quote:
    "Eight years of chasing evidence taught me to build software that holds up under scrutiny.",
  jobs: [
    {
      period: "Mar 2026 — Present",
      role: "AI Engineer",
      org: "Freelance",
      description:
        "Designing GenAI and RAG-based automation workflows for clients using n8n and vector databases.",
    },
    {
      period: "Dec 2019 — Feb 2026",
      role: "Inspector Cybercrime / Digital Forensic Investigator",
      org: "FIA Cyber Crime Wing / NCCIA",
      description:
        "Led the Digital Forensic Lab; investigated online fraud, AML, and cryptocurrency cases using Cellebrite, FTK, and Oxygen Forensic. Built a Python triage tool now in active use by the lab.",
    },
    {
      period: "May 2018 — Dec 2019",
      role: "Software Engineer / Web Developer",
      org: "WHIZPOOL · Islamabad",
      description:
        "Built full-stack web apps and REST APIs across client projects; integrated payments, social auth, and Twilio messaging.",
    },
    {
      period: "Mar 2018 — May 2018",
      role: "Associate MIS",
      org: "VTT Global · Islamabad",
      description:
        "Cleaned survey data with Python and built PHP/Laravel dashboards for research reporting.",
    },
    {
      period: "Jun 2017 — Mar 2018",
      role: "Junior Web Developer (MT)",
      org: "SyntecX Solutions · Islamabad",
      description:
        "Worked on CRUD features and internal APIs for company SaaS products using PHP and Angular.",
    },
  ],
  education: [
    {
      period: "Feb 2013 — Jan 2017",
      degree: "BS in Computer Science",
      org: "COMSATS University Islamabad, Attock Campus",
      description: "CGPA 3.39/4 (84.7%)",
    },
  ],
};

export const contact = {
  eyebrow: "05. Get in Touch",
  heading: "Open to new opportunities",
  // body: "I'm currently looking for remote roles in AI engineering and backend development. If that's what you're hiring for, let's talk.",
  cta: "Email Me",
};
