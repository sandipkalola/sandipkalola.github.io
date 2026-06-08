import { Project, Experience, Education, Certification, SkillGroup, TechGroup } from "./types";

export const contactInfo = {
  name: "Sandipkumar Kalola",
  title: "Senior Flutter Developer | Flutter + AI Integration | Technical Lead",
  location: "Rajkot, Gujarat, India (Open to Remote / Hybrid)",
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
    role: "Technical Lead | Flutter & AI Solutions",
    company: "MeetMighty IT Solutions",
    type: "Full-time",
    duration: "Jan 2022 – Present",
    location: "Rajkot, Gujarat • On-site",
    bullets: [
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
    role: "Team Lead & Flutter Development",
    company: "Goldenmace IT Solutions",
    type: "Full-time",
    duration: "Oct 2018 – Dec 2021",
    location: "Navsari, Gujarat • On-site",
    bullets: [
      "Led end-to-end delivery of multiple mobile and web projects simultaneously for a growing IT consultancy.",
      "Managed client relationships, cost estimations, timelines, and stakeholder expectations across 10+ concurrent engagements.",
      "Introduced Flutter as the primary cross-platform framework, cutting development time by ~40%.",
      "I played a key role in shifting the company from native Android to Flutter, which helped us speed up development and deliver apps faster on both Android and iOS. I also trained the team and set up knowledge-sharing sessions to make the transition smooth.",
      "Mentored junior developers and enforced code quality through regular code reviews."
    ],
    skills: ["Flutter", "Team Leadership", "Android", "Dart", "Cross-platform Development", "CI/CD", "Payment gateway Integration"]
  },
  {
    id: "exp-3",
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
    id: "exp-4",
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
    id: "exp-5",
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

export const techGroups: TechGroup[] = [
  {
    category: "Flutter",
    description: "Premium enterprise-grade commercial application templates and comprehensive UI kits published on CodeCanyon under MeetMighty, serving clients globally.",
    items: [
      {
        id: "flut-1",
        title: "Era Health - Period & Ovulation Tracker App",
        description: "A secure, smart period, ovulation, and pregnancy tracking template integrated with customizable widgets and helpful AI-driven health tips.",
        url: "https://codecanyon.net/item/era-health-smart-period-ovulation-pregnancy-tracker-app-menstrual-cycle-app-with-ai-tips/58856354",
        badge: "CodeCanyon",
        type: "codecanyon",
        tags: ["Flutter", "Dart", "AI Tips", "Health Tech"]
      },
      {
        id: "flut-2",
        title: "MightyTaxi - Online Taxi Booking App",
        description: "A comprehensive digital transportation suite comprising user, driver, and admin portals for automated requests, pricing calculations, and payment gateways.",
        url: "https://codecanyon.net/item/mightytaxi-flutter-online-taxi-booking-app-taxi-app-admin-backend-driver-app/40977853",
        badge: "CodeCanyon",
        type: "codecanyon",
        tags: ["Flutter", "Firebase", "Google Maps API", "Backend Service"]
      },
      {
        id: "flut-3",
        title: "MightyDelivery - Local Delivery System",
        description: "On-demand local shipment tracker and courier delivery solution featuring route mapping, delivery proofing, and state synchronization.",
        url: "https://codecanyon.net/item/mightydelivery-on-demand-local-delivery-system-flutter-app/37155035",
        badge: "CodeCanyon",
        type: "codecanyon",
        tags: ["Flutter", "Geolocation", "Delivery Flow", "Real-time Update"]
      },
      {
        id: "flut-4",
        title: "MightyChat - Real-time Chat App",
        description: "Feature-rich direct and channel messenger utilizing cloud Firestore backend combined with Agora SDK for audio & video calling streams.",
        url: "https://codecanyon.net/item/mightychat-chat-app-with-firebase-backend-agoraio/31819316",
        badge: "CodeCanyon",
        type: "codecanyon",
        tags: ["Flutter", "Firebase Firestore", "Agora.io", "Media Sharing"]
      },
      {
        id: "flut-5",
        title: "MightyStore - WooCommerce Universal App",
        description: "A fast, production-ready mobile storefront connecting seamlessly with WooCommerce APIs for cart workflows, checkouts, and custom catalogs.",
        url: "https://codecanyon.net/item/mightystore-woocommerce-universal-flutter-app-for-ecommerce-app/30218611",
        badge: "CodeCanyon",
        type: "codecanyon",
        tags: ["Flutter", "WooCommerce API", "eCommerce State", "Stripe SDK"]
      },
      {
        id: "flut-6",
        title: "MightyProperty - Complete Real Estate Solution",
        description: "A complete real estate portal equipped with advanced listing search matrices, Laravel admin workspace, and intelligent ChatGPT-integrated chatbot assistance.",
        url: "https://codecanyon.net/item/mightyproperty-complete-real-estate-solution-flutter-app-with-laravel-backend-chatgptaichatbot/50846685",
        badge: "CodeCanyon",
        type: "codecanyon",
        tags: ["Flutter", "Laravel Backend", "ChatGPT API", "Chat System"]
      }
    ]
  },
  {
    category: "AI Development",
    description: "Cutting-edge tools and frameworks integrating deep artificial intelligence models, computer vision, and career heuristic analysis.",
    items: [
      {
        id: "ai-1",
        title: "EdgeAttend-AI",
        description: "An advanced, local-first artificial intelligence attendance and verification ecosystem designed to perform facial pattern recognition at extreme edges with high accuracy.",
        url: "https://github.com/sandipkalola/EdgeAttend-AI",
        badge: "GitHub",
        type: "github",
        tags: ["AI Modeling", "Face Recognition", "Edge Computing", "Python/Rust"]
      },
      {
        id: "ai-2",
        title: "Career-Analyzer-AI",
        description: "An intelligent generative artificial intelligence engine that assesses resumes, detects matching career trajectories, and formulates customized roadmap advice instantly.",
        url: "https://github.com/sandipkalola/Career-Analyzer-AI",
        badge: "GitHub",
        type: "github",
        tags: ["Gemini API", "Resume Parsing", "Vector Search", "LLM Consulting"]
      }
    ]
  },
  {
    category: "WhatsApp Automation",
    description: "In-depth video walkthroughs and implementations showcasing automated messaging models, API workflows, and robust customer lead gen systems.",
    items: [
      {
        id: "wa-1",
        title: "AI-Powered WhatsApp Bot & Flow Demonstration",
        description: "A comprehensive video demonstration showcasing automated web and app flows using custom trigger nodes, WhatsApp Business APIs, and natural conversation models.",
        url: "https://www.youtube.com/watch?v=nxi2aU_ayYI",
        badge: "YouTube",
        type: "youtube",
        tags: ["WhatsApp Cloud API", "n8n Automation", "Chatbot UI", "Video Demo"]
      },
      {
        id: "wa-2",
        title: "Advanced WhatsApp Marketing Flow & CRM Integration",
        description: "Step-by-step video guide proving successful integrations between incoming message pipelines, customer lead scoring filters, and auto-reply setups.",
        url: "https://www.youtube.com/watch?v=Pse8SWDccR8",
        badge: "YouTube",
        type: "youtube",
        tags: ["Webhooks", "Lead Generation", "CRM Hooks", "Tutorial UI"]
      }
    ]
  }
];
