import { Project, Experience, Education, Certification, SkillGroup } from "./types";

export const contactInfo = {
  name: "Sandipkumar Kalola",
  title: "Senior Flutter Developer | Flutter + AI Integration | Technical Lead",
  location: "Rajkot, Gujarat, India (Open to Remote / Hybrid)",
  phone: "+91-9638472777",
  email: "sandipkalola1990@gmail.com",
  linkedin: "https://linkedin.com/in/sandip0919",
  linkedinDisplay: "linkedin.com/in/sandip0919",
  github: "https://github.com/sandipkalola",
  githubDisplay: "github.com/sandipkalola",
  summary: "Flutter developer and technical leader with 12+ years of experience delivering 50+ mobile and web applications across healthcare, transportation, eCommerce, and fitness domains. Specialises in Flutter, Dart, Firebase, REST APIs, and AI-powered automation using Gemini APIs and n8n. Proven track record of leading cross-functional teams of 20-25 engineers, managing full product lifecycles, and driving measurable business outcomes. Open to Senior Flutter Developer, Technical Lead, and Mobile Engineering Manager roles."
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Co-Founder & Technical Lead – Flutter & AI",
    company: "MeetMighty IT Solutions",
    type: "Full-time",
    duration: "Jan 2022 – Present",
    location: "Rajkot, Gujarat • On-site",
    bullets: [
      "Co-founded and scaled MeetMighty from a two-person startup to a mobile-first software development company serving clients worldwide.",
      "Architected and delivered 30+ Flutter applications across iOS and Android covering taxi/ride-hailing, delivery, eCommerce, healthcare, and SaaS domains.",
      "Led and managed cross-functional teams of 20–25 developers, designers, and QA engineers across concurrent projects.",
      "Built AI automation pipelines using Gemini APIs and n8n, reducing manual client onboarding effort by ~60%.",
      "Published menstrual_cycle_widget Flutter package on pub.dev and built FlutterViz — a drag-and-drop UI builder generating production-ready Flutter code.",
      "Owned full delivery lifecycle: requirement gathering, sprint planning, code reviews, QA oversight, App Store/Play Store deployment, and client communication."
    ],
    skills: ["Flutter", "Dart", "Firebase", "REST APIs", "Gemini API", "n8n", "Agile/Scrum", "Team Leadership"]
  },
  {
    id: "exp-2",
    role: "Project Manager – Digital Solutions",
    company: "Goldenmace IT Solutions",
    type: "Full-time",
    duration: "Oct 2019 – Dec 2021",
    location: "Navsari, Gujarat • On-site",
    bullets: [
      "Led end-to-end delivery of multiple mobile and web projects simultaneously for a growing IT consultancy.",
      "Managed client relationships, cost estimations, timelines, and stakeholder expectations across 10+ concurrent engagements.",
      "Introduced Flutter as the primary cross-platform framework, cutting development time by ~40%."
    ],
    skills: ["Client Coordination", "Project Planning", "Flutter", "Agile/Scrum"]
  },
  {
    id: "exp-3",
    role: "Team Lead – Mobile Development",
    company: "Goldenmace IT Solutions",
    type: "Full-time",
    duration: "Apr 2018 – Sep 2019",
    location: "Navsari, Gujarat • On-site",
    bullets: [
      "Led the Android development team and spearheaded migration from native Android to Flutter as the company's primary framework.",
      "Mentored junior developers and enforced code quality through regular code reviews."
    ],
    skills: ["Flutter", "Team Leadership", "Android", "Dart", "Cross-platform Development"]
  },
  {
    id: "exp-4",
    role: "Sr. Android Developer",
    company: "Goldenmace IT Solutions",
    type: "Full-time",
    duration: "Jan 2017 – Mar 2018",
    location: "Navsari, Gujarat • On-site",
    bullets: [
      "Built a smart home automation Android app enabling remote control of IoT-enabled appliances (lights, fans, AC, door locks) via mobile."
    ],
    skills: ["Android Development", "Java", "IoT Integration"]
  },
  {
    id: "exp-5",
    role: "Mobile Application Developer",
    company: "Pulse Solutions",
    type: "Full-time",
    duration: "Dec 2014 – Dec 2016",
    location: "Surat, Gujarat",
    bullets: [
      "Developed and maintained Android applications for client-facing mobile products across multiple industry verticals."
    ],
    skills: ["Android Development", "Mobile Application Development"]
  },
  {
    id: "exp-6",
    role: "Android Developer",
    company: "Idea To Working",
    type: "Full-time",
    duration: "Apr 2014 – Nov 2014",
    location: "Surat, Gujarat",
    bullets: [
      "Built Android applications as part of an early-stage product team."
    ],
    skills: ["Mobile Application Development", "Android"]
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Mobile Development",
    skills: ["Flutter", "Dart", "Android (Java/Kotlin)", "iOS (via Flutter)"]
  },
  {
    category: "Backend & APIs",
    skills: ["Firebase Services", "REST APIs", "Express.js", "AI Pipelines", "n8n", "Gemini API"]
  },
  {
    category: "State Management",
    skills: ["GetX", "BLoC", "Riverpod", "Provider"]
  },
  {
    category: "AI & Automation",
    skills: ["Gemini APIs", "AI Workflow Automation", "Prompt Engineering", "Large Language Models"]
  },
  {
    category: "DevOps & Tooling",
    skills: ["Git", "App Store Connect", "Google Play Store", "Figma", "Google AI Studio"]
  },
  {
    category: "Leadership & Agile",
    skills: ["Agile & Scrum Masters", "Sprint Planning", "Code Reviews", "Technical Mentorship", "Client Coordination"]
  }
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "menstrual_cycle_widget",
    description: "A comprehensive and customizable Flutter package on pub.dev targeted for menstrual cycle tracking. Provides ready-to-integrate high-quality UI widgets.",
    longDescription: "menstrual_cycle_widget is an open-source Flutter package that solves complex menstruation tracking visualizations. It offers custom progress wheels, log widgets, calendars, and prediction calculators designed to be drop-in features for health & wellness applications. Highly downloaded and actively maintained.",
    skills: ["Flutter", "Dart", "UI Package Design", "Open Source"],
    url: "https://pub.dev/packages/menstrual_cycle_widget",
    category: "open-source",
    pinned: true
  },
  {
    id: "proj-2",
    title: "FlutterViz (flutterviz.com)",
    description: "A drag-and-drop Visual Flutter UI Designer that generates production-ready, clean Dart/Flutter code in real-time. Dramatically accelerates startup scaling speeds.",
    longDescription: "FlutterViz is a comprehensive sass/web tool helping developers and agencies architect modern screens and generate perfect-grid clean layout Flutter code. Built on optimized layout constraints, it helps teams bridge the gap between design drafts in Figma and working modular widgets. It cuts mobile app UI writing time by over 80%.",
    skills: ["Flutter", "Dart", "UI builder logic", "Product Engineering", "Web Engine"],
    url: "https://flutterviz.com",
    category: "product",
    pinned: true
  },
  {
    id: "proj-3",
    title: "AI Review Pilot Automation",
    description: "An automated customer feedback collection & review generator pipeline utilizing Custom n8n workflows and Gemini APIs.",
    longDescription: "ReviewPilot automates the customer review management lifecycle. Integrated directly with Google Business Reviews API and styled customer feedback triggers. It digests open feedback in real-time using Gemini, draft responding proposals, identifies common pain points, and improves overall brand rating automatically.",
    skills: ["n8n", "Gemini API", "AI Automation Workflows", "Google Reviews API"],
    url: "https://reviewpilot.in/",
    category: "ai-automation",
    pinned: true
  }
];

export const educationList: Education[] = [
  {
    id: "edu-1",
    degree: "Master of Computer Applications (MCA)",
    institution: "RK University, Rajkot",
    duration: "Mar 2011 – Apr 2014"
  },
  {
    id: "edu-2",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "VNSGU, Surat",
    duration: "Mar 2008 – Apr 2011"
  }
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "Google AI Essentials",
    issuer: "Google",
    date: "May 2026"
  },
  {
    id: "cert-2",
    name: "Generative AI Fundamentals",
    issuer: "Google"
  },
  {
    id: "cert-3",
    name: "Prompt Engineering",
    issuer: "Google"
  }
];
