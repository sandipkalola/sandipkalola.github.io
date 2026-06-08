export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  skills: string[];
  url?: string;
  github?: string;
  category: "open-source" | "product" | "ai-automation";
  pinned?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  bullets: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface TechProjectItem {
  id: string;
  title: string;
  description: string;
  url: string;
  badge?: string;
  type: "codecanyon" | "github" | "youtube";
  tags: string[];
}

export interface TechGroup {
  category: string;
  description: string;
  items: TechProjectItem[];
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}
