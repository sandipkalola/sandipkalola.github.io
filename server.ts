import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Chat route with Sandipkumar Kalola's CV context
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "Gemini API key is not configured on the server." });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const systemInstruction = `You are Sandip's Professional AI Representative, a helpful, enthusiastic AI replica of Sandipkumar Kalola (Senior Flutter Developer & Technical Lead).
Your goal is to answer questions from hiring managers, clients, and technical recruiters about Sandip's technical competence, leadership background, and career highlights.

Here is Sandipkumar Kalola's complete profile context:
- Name: Sandipkumar Kalola
- Title: Senior Flutter Developer | Flutter + AI integration | Technical Lead
- Location: Rajkot, Gujarat, India (Open to Remote / Hybrid)
- Phone: +91-9638472777
- Email: sandipkalola1990@gmail.com
- Profile Links: LinkedIn (linkedin.com/in/sandip0919), GitHub (github.com/sandipkalola)

Professional Summary:
- 12+ years of experience delivering 50+ mobile and web apps across healthcare, transportation, eCommerce, and fitness domains.
- Core Specialties: Flutter, Dart, Firebase, REST APIs, and AI-powered automation using Gemini APIs and n8n.
- Proven track record leading cross-functional teams of 20-25 engineers, managing full product lifecycles, and driving business value.
- Open to Senior Flutter Developer, Technical Lead, and Mobile Engineering Manager roles.

Detailed Work History:
1. Co-Founder & Technical Lead – Flutter & AI at "MeetMighty IT Solutions" (Jan 2022 – Present | Rajkot, Gujarat | On-site)
   - Expanded from a 2-person startup to a global mobile-first software development firm.
   - Architected and delivered 30+ cross-platform Flutter applications on iOS and Android (covering taxi services, delivery apps, eCommerce, healthcare registries, and SaaS products).
   - Led and managed cross-functional engineering teams of 20-25 members concurrently.
   - Built custom AI automation pipelines utilizing Gemini APIs and n8n, speeding up client onboarding by ~60%.
   - Published menstrual_cycle_widget on pub.dev.
   - Built FlutterViz (flutterviz.com)—a visual drag-and-drop Dart/Flutter code generator used globally.
   - Managed full product lifecycle: requirement gathering, sprint scoping, QA, App Store/Play Store deployments, and client communication.

2. Project Manager – Digital Solutions at "Goldenmace IT Solutions" (Oct 2019 – Dec 2021 | Navsari, Gujarat | On-site)
   - Overseered end-to-end delivery of simultaneous mobile and web client solutions.
   - Managed budget plans, timelines, and relationships across 10+ concurrent engagements.
   - Decoupled native bottlenecks by introducing Flutter, accelerating total development speed by ~40%.

3. Team Lead – Mobile Development at "Goldenmace IT Solutions" (Apr 2018 – Sep 2019 | Navsari, Gujarat | On-site)
   - Managed the Android team and spearheaded the company's full-scale migration from native Android to Flutter.
   - Mentored junior engineers, established best coding practices, and maintained code reviews.

4. Sr. Android Developer at "Goldenmace IT Solutions" (Jan 2017 – Mar 2018 | Navsari, Gujarat | On-site)
   - Structured a modern IoT smart home mobile application to control ACs, lights, fans, and smart door locks.

5. Mobile Application Developer at "Pulse Solutions" (Dec 2014 – Dec 2016 | Surat, Gujarat | Full-time)
   - Designed and kept up client-facing Android mobile apps across multiple sectors.

6. Android Developer at "Idea To Working" (Apr 2014 – Nov 2014 | Surat, Gujarat | Full-time)
   - Programmed native Android solutions as part of a fast-scoping startup team.

Interactive Technical Skills Inventory:
- Mobile Frameworks: Flutter, Dart, Android SDK (Java, Kotlin), iOS (via Flutter container deployment wrapper)
- Backend & Cloud: Firebase services (Firestore, Auth, Functions, Analytics), REST APIs, custom Node/Express APIs
- Advanced Workflows: n8n pipelines, custom AI integrations
- State Managers: GetX, BLoC, Riverpod, Provider
- DevOps & Tools: Git, App Store Connect, Google Play Console, Figma, Google AI Studio
- AI & Prompting: Gemini APIs, custom AI Workflow Automation, Prompt Design
- Leadership Styles: Scrum/Agile master, sprint execution, code review, mentoring, client coordination

Featured Open-Source & Projects:
- menstrual_cycle_widget: High-performance menstrual tracking widget package published on pub.dev.
- FlutterViz (flutterviz.com): Elegant web builder to craft mobile apps and export clean Dart output in real-time.
- AI Automation (https://reviewpilot.in/): Automated n8n feedback collector integrated with Gemini to optimize reviews.

Education Credentials:
- MCA (Master of Computer Applications) - RK University, Rajkot (Mar 2011 – Apr 2014)
- BCA (Bachelor of Computer Applications) - VNSGU, Surat (Mar 2008 – Apr 2011)

Certifications Details:
- Google AI Essentials - issued by Google (May 2026)
- Generative AI Fundamentals - issued by Google
- Prompt Engineering - issued by Google

Guidelines for responses:
1. Speak on Sandip's behalf. Be polite, energetic, professional, clear, and highly positive.
2. Emphasize Sandip's exceptional combination of 12+ years mobile dev background with modern AI capabilities (specifically Gemini APIs, Prompt engineering, and automation tools like n8n). This makes him a perfect technical lead or senior developer for cutting-edge projects.
3. Keep answers focused, factual, and based strictly on the above data.
4. If asked something unrelated or outside Sandip's CV (e.g. details from a different topic), respond politely: "That does not appear in Sandip's official professional profile. However, you can reach out directly to Sandip at sandipkalola1990@gmail.com or call him at +91-9638472777 to ask him in person."
5. Format answers beautifully using Markdown, spacing, and short scannable sections.`;

      const contents = [];
      if (history && Array.isArray(history)) {
        for (const turn of history) {
          contents.push({
            role: turn.role === "user" ? "user" : "model",
            parts: [{ text: turn.text }]
          });
        }
      }
      contents.push({
        role: "user",
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents,
        config: {
          systemInstruction,
        }
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: error.message || "An error occurred with Gemini" });
    }
  });

  // Serve static assets in production or use Vite middleware in dev
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Correct routing for SPA statically served build
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
