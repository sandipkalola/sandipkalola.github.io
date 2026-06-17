import React, { useState } from "react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code2, 
  Cpu, 
  Users, 
  Layers, 
  ExternalLink, 
  Menu, 
  X, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Sparkles, 
  FileText,
  Workflow,
  Search,
  CheckCircle,
  Clock,
  Smartphone,
  Youtube
} from "lucide-react";
import { experiences, skillGroups, projects, educationList, certifications, contactInfo, techGroups } from "./data";
import { TiltCard } from "./components/TiltCard";
import { motion } from "motion/react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedText, setCopiedText] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const currentYear = new Date().getFullYear();

  const filteredProjects = activeCategory === "all" 
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#080808] text-[#F0F0F0] min-h-screen font-sans selection:bg-[#FF4F00]/30 selection:text-white antialiased">
      
      {/* Decorative top grid banner with orange hue shadow grids */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FF4F00]/10 via-[#111111]/5 to-transparent pointer-events-none z-0"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF4F00]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-[800px] right-10 w-[450px] h-[450px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#080808]/80 backdrop-blur-md border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo name */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-[#FF4F00] px-2.5 py-1.5 rounded-full text-black font-mono font-bold text-xs ring-2 ring-[#FF4F00]/20">
                SK
              </div>
              <div className="flex items-center gap-2.5">
                <span className="font-display font-bold text-lg tracking-tight text-white hover:text-[#FF4F00] transition-colors">
                  Sandipkumar Kalola
                </span>
                <span className="hidden sm:inline-block px-2.5 py-0.5 text-[10px] font-mono leading-relaxed bg-[#FF4F00]/10 border border-[#FF4F00]/20 text-[#FF4F00] rounded-full font-semibold">
                  Flutter Lead
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {["summary", "skills", "projects", "timeline", "education"].map((sec) => (
                <button
                  key={sec}
                  onClick={() => scrollToSection(sec)}
                  className="text-white/60 hover:text-white px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-white/5 transition-all cursor-pointer"
                >
                  {sec}
                </button>
              ))}
            </nav>

            {/* Mobile menu interface */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white/60 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-all"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#080808]/95 border-b border-white/10 backdrop-blur-lg absolute top-16 left-0 right-0 py-4 px-6 space-y-2">
            {["summary", "skills", "projects", "timeline", "education"].map((sec) => (
              <button
                key={sec}
                onClick={() => scrollToSection(sec)}
                className="block w-full text-left text-white/70 hover:text-white py-2.5 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-white/5 transition-all cursor-pointer"
              >
                {sec}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <motion.section 
        id="hero" 
        className="relative pt-12 md:pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Identity Card (Large Bento Cell) */}
          <TiltCard className="lg:col-span-8 bg-[#111111] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-8" intensity={6}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF4F00]/10 border border-[#FF4F00]/20 text-[#FF4F00] rounded-full text-xs font-semibold shadow-inner font-mono tracking-wide">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                Open to Tech Lead & Managerial Roles
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter text-white leading-[1.05]">
                HI, I'M <span className="font-medium bg-gradient-to-r from-[#FF4F00] to-orange-500 bg-clip-text text-transparent animate-pulse">SANDIPKUMAR</span>.<br/>
                <span className="text-2xl sm:text-3xl md:text-4xl text-white/50 block mt-2 font-light">
                  Senior Flutter Architect
                </span>
              </h1>

              <p className="text-base sm:text-lg text-white/60 leading-relaxed font-sans">
                A systems engineer with <strong className="text-white font-mono font-medium">12+ years</strong> of expertise orchestrating over <strong className="text-[#FF4F00] font-mono">50+ custom applications</strong>. 
                I specialize in robust Dart codebases, seamless serverless backends, and pioneering 
                <strong className="text-white font-semibold font-mono"> AI-driven automation using Gemini APIs & n8n</strong>.
              </p>
            </div>

            <div className="space-y-6">
              {/* Quick Contact Chips inside Identity card */}
              <div className="flex flex-wrap gap-2.5">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1a1a1a] border border-white/5 text-xs text-white/60 font-mono">
                  <MapPin size={13} className="text-[#FF4F00]" />
                  Rajkot, Gujarat, India
                </div>
                <button 
                  onClick={() => copyToClipboard(contactInfo.email, "email")}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1a1a1a] hover:bg-white/5 border border-white/5 hover:border-white/10 text-xs text-white/80 font-mono cursor-pointer transition-all"
                  title="Copy Email"
                >
                  <Mail size={13} className="text-[#FF4F00]" />
                  {copiedText === "email" ? "Copied Email!" : "sandipkalola1990@gmail.com"}
                  {copiedText !== "email" && <Copy size={11} className="opacity-40" />}
                </button>
              </div>

              {/* Actions & Metrics unified */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => scrollToSection("timeline")}
                  className="bg-[#FF4F00] hover:bg-orange-600 text-black font-bold uppercase tracking-wider text-xs rounded-2xl px-6 py-4 flex items-center gap-2 shadow-lg cursor-pointer group transition-all"
                >
                  <Briefcase size={14} />
                  Experience Timeline
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </TiltCard>

          {/* Key Metrics Bento Cell on the right */}
          <TiltCard className="lg:col-span-4 bg-[#111111] border border-white/10 rounded-3xl p-8 flex flex-col justify-between" intensity={8}>
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#FF4F00] font-bold block mb-2">METRICS</span>
              <h2 className="font-display font-semibold text-lg text-white leading-snug">Track Record</h2>
              <div className="w-8 h-0.5 bg-[#FF4F00] rounded-full mt-1.5 mb-6"></div>
            </div>
            
            <div className="space-y-4 flex-grow flex flex-col justify-center">
              <div className="p-4 bg-[#1a1a1a] border border-white/5 rounded-2xl flex items-center justify-between group hover:border-[#FF4F00]/20 transition-all">
                <div>
                  <span className="text-[10px] text-white/40 uppercase tracking-wider font-semibold block">Years Active</span>
                  <span className="text-sm text-white/60">Professional Mobile Track</span>
                </div>
                <span className="font-mono text-3xl sm:text-4xl font-bold text-[#FF4F00]">12+</span>
              </div>
              
              <div className="p-4 bg-[#1a1a1a] border border-white/5 rounded-2xl flex items-center justify-between group hover:border-[#FF4F00]/20 transition-all">
                <div>
                  <span className="text-[10px] text-white/40 uppercase tracking-wider font-semibold block">Deliveries</span>
                  <span className="text-sm text-white/60">Custom Apps Shipped</span>
                </div>
                <span className="font-mono text-3xl sm:text-4xl font-bold text-white">50+</span>
              </div>
              
              <div className="p-4 bg-[#1a1a1a] border border-white/5 rounded-2xl flex items-center justify-between group hover:border-[#FF4F00]/20 transition-all">
                <div>
                  <span className="text-[10px] text-white/40 uppercase tracking-wider font-semibold block">Engineers Led</span>
                  <span className="text-sm text-white/60">Direct Leadership Agile</span>
                </div>
                <span className="font-mono text-3xl sm:text-4xl font-bold text-[#FF4F00]">25+</span>
              </div>
            </div>
          </TiltCard>

        </div>
      </motion.section>

      {/* DETAILED SUMMARY / ABOUT */}
      <motion.section 
        id="summary" 
        className="py-20 border-y border-white/10 bg-[#080808] px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#FF4F00] font-bold mb-2 block">01 / CAPABILITIES</span>
            <h2 className="font-display font-bold text-4xl text-white tracking-tight">
              Executive Focus
            </h2>
            <div className="w-12 h-1 bg-[#FF4F00] rounded-full mt-3"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Context narrative card */}
            <TiltCard className="lg:col-span-5 p-8 bg-[#111111] border border-white/10 rounded-3xl flex flex-col justify-between" intensity={5}>
              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                With a robust background spanning software development, architectural scoping, and technical team leadership, I help enterprises convert complex concepts into user-centric cross-platform applications. 
                <br /><br />
                My technical philosophy emphasizes clean architecture, highly decoupled state layers, and the integration of large-scale AI automations to reduce human workflows, speed dev outputs, and optimize deployment.
              </p>
              <div className="flex gap-4 pt-6 border-t border-white/10 mt-6 justify-start">
                <a 
                  href={contactInfo.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-[#FF4F00] rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center gap-1.5 transition-all text-decoration-none"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
                <a 
                  href={contactInfo.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-[#FF4F00] rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center gap-1.5 transition-all text-decoration-none"
                >
                  <Github size={14} />
                  GitHub
                </a>
              </div>
            </TiltCard>

            {/* Core Capability Pillars */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <TiltCard className="p-6 bg-[#111111] border border-white/10 rounded-3xl transition-all group" intensity={8}>
                <div className="text-[#FF4F00] p-2 bg-[#FF4F00]/10 rounded-xl w-10 h-10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  <Cpu size={18} />
                </div>
                <h4 className="font-display font-semibold text-white text-base mb-2">Flutter & Dart Architect</h4>
                <p className="text-xs text-white/50 leading-relaxed">
                  Decoupled BLoC & GetX architectures that sync complex state smoothly across millions of user clients.
                </p>
              </TiltCard>

              <TiltCard className="p-6 bg-[#111111] border border-white/10 rounded-3xl transition-all group" intensity={8}>
                <div className="text-[#FF4F00] p-2 bg-[#FF4F00]/10 rounded-xl w-10 h-10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  <Workflow size={18} />
                </div>
                <h4 className="font-display font-semibold text-white text-base mb-2">AI Automation Engineer</h4>
                <p className="text-xs text-white/50 leading-relaxed">
                  Authoring server-side pipelines with Gemini API, n8n, nlp algorithms, and custom agents for robust business scaling.
                </p>
              </TiltCard>

              <TiltCard className="p-6 bg-[#111111] border border-[#FF4F00]/20 rounded-3xl transition-all group" intensity={8}>
                <div className="text-black p-2 bg-[#FF4F00] rounded-xl w-10 h-10 flex items-center justify-center mb-4">
                  <Users size={18} />
                </div>
                <h4 className="font-display font-semibold text-white text-base mb-2">Technical Team Lead</h4>
                <p className="text-xs text-white/55 leading-relaxed">
                  Steering concurrent teams of up to 25 engineers through complex deliverables using Agile methodology.
                </p>
              </TiltCard>

              <TiltCard className="p-6 bg-[#111111] border border-white/10 rounded-3xl transition-all group" intensity={8}>
                <div className="text-[#FF4F00] p-2 bg-[#FF4F00]/10 rounded-xl w-10 h-10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  <Layers size={18} />
                </div>
                <h4 className="font-display font-semibold text-white text-base mb-2">Full-Product Delivery</h4>
                <p className="text-xs text-white/50 leading-relaxed">
                  Managing complete specs, timeline estimations, client feedback, and publishing securely onto App & Play Stores.
                </p>
              </TiltCard>

            </div>

          </div>

        </div>
      </motion.section>

      {/* CORE SKILLS SECTION */}
      <motion.section 
        id="skills" 
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        
        <div className="max-w-3xl mb-12">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#FF4F00] font-bold mb-2 block">02 / EXPERTISE</span>
          <h2 className="font-display font-bold text-4xl text-white tracking-tight">
            Skill Inventory
          </h2>
          <p className="text-sm text-white/55 mt-2">
            A granular catalog of technologies and leadership competencies representing Sandip's technical leadership profiles.
          </p>
          <div className="w-12 h-1 bg-[#FF4F00] rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-[#111111] border border-white/10 hover:border-[#FF4F00]/40 rounded-3xl transition-all shadow-sm"
            >
              <h3 className="text-[#FF4F00] font-display font-semibold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
                <Code2 size={15} />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => {
                  const isFeatured = skill.includes("Flutter") || skill.includes("Gemini") || skill.includes("n8n") || skill.includes("Android");
                  return (
                    <span 
                      key={sIdx} 
                      className={`text-xs px-3 py-1.5 rounded-lg border font-mono ${
                        isFeatured 
                          ? "bg-[#FF4F00]/10 border-[#FF4F00]/30 text-[#FF4F00] font-semibold" 
                          : "bg-white/5 border-white/10 text-white/70"
                      }`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </motion.section>

      {/* OPEN SOURCE & FEATURED PROJECTS */}
      <motion.section 
        id="projects" 
        className="py-20 bg-[#080808] border-y border-white/10 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#FF4F00] font-bold mb-2 block">03 / REALIZATIONS</span>
              <h2 className="font-display font-bold text-4xl text-white tracking-tight">
                Featured Work & Packages
              </h2>
              <p className="text-sm text-white/55 mt-2 max-w-2xl">
                Explore Sandip's prominent contributions, from widely published open-source Flutter widgets to custom AI review managers.
              </p>
              <div className="w-12 h-1 bg-[#FF4F00] rounded-full mt-3"></div>
            </div>

            {/* Filter tags */}
            <div className="flex flex-wrap gap-1.5 mt-6 md:mt-0 bg-[#111111] p-1.5 rounded-2xl border border-white/10 self-start">
              {[
                { id: "all", label: "All Works" },
                { id: "open-source", label: "Open Source" },
                { id: "product", label: "SaaS Tools" },
                { id: "ai-automation", label: "AI Workflows" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`text-[10px] uppercase tracking-wider px-4 py-2.5 rounded-xl font-bold cursor-pointer transition-all ${
                    activeCategory === tab.id
                      ? "bg-[#FF4F00] text-black shadow-md font-bold"
                      : "text-white/40 hover:text-white hover:bg-white/5 font-semibold"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj) => (
              <TiltCard 
                key={proj.id} 
                className="bg-[#111111] border border-white/10 rounded-3xl overflow-hidden flex flex-col justify-between transition-all"
                intensity={8}
              >
                
                {/* Upper banner section of project card based on category */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <span className={`text-[9px] px-2.5 py-1 rounded-full font-mono uppercase tracking-wider font-bold border ${
                      proj.category === "open-source" 
                        ? "bg-rose-500/10 border-rose-500/20 text-rose-400"
                        : proj.category === "product"
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                        : "bg-[#FF4F00]/10 border-[#FF4F00]/20 text-[#FF4F00]"
                    }`}>
                      {proj.category.replace("-", " ")}
                    </span>
                    {proj.pinned && (
                      <span className="text-[10px] bg-white/5 border border-white/10 text-white/50 px-2 py-0.5 rounded-md flex items-center gap-1">
                        <Sparkles size={8} className="text-[#FF4F00]" />
                        Featured
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-display font-semibold text-lg text-white group-hover:text-[#FF4F00] transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-white/60 mt-2 line-clamp-3 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                  
                  {proj.longDescription && (
                    <div className="p-3 bg-[#1a1a1a]/40 border border-white/5 rounded-xl">
                      <p className="text-[11px] text-white/50 leading-relaxed">
                        {proj.longDescription}
                      </p>
                    </div>
                  )}

                </div>

                {/* Lower Action bar */}
                <div className="p-6 border-t border-white/10 bg-[#1a1a1a]/40 flex flex-col gap-4">
                  
                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.skills.map((s, idx) => (
                      <span key={idx} className="bg-[#111111] border border-white/10 text-white/50 text-[10px] px-2 py-1 rounded font-mono">
                        {s}
                      </span>
                    ))}
                  </div>

                  {proj.url && (
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex justify-center items-center gap-2 bg-[#FF4F00] hover:bg-orange-600 text-black py-3 rounded-2xl text-[10px] uppercase tracking-wider font-bold transition-all text-decoration-none text-center cursor-pointer"
                    >
                      Visit Project
                      <ExternalLink size={12} className="opacity-70" />
                    </a>
                  )}
                </div>

              </TiltCard>
            ))}
          </div>

          {/* TECHNOLOGY-WISE ECOSYSTEM */}
          <div className="mt-24 pt-16 border-t border-white/10">
            <div className="max-w-3xl mb-12">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#FF4F00] font-bold mb-2 block">
                03B / TECHNOLOGY ECOSYSTEM
              </span>
              <h3 className="font-display font-bold text-3xl text-white tracking-tight">
                Product Ecosystem & Codebases By Technology
              </h3>
              <p className="text-sm text-white/55 mt-2">
                A structured ledger of published mobile templates, artificial intelligence repositories, and custom messaging automation channels.
              </p>
              <div className="w-12 h-1 bg-[#FF4F00] rounded-full mt-3"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {techGroups.map((group, groupIdx) => {
                let badgeColor = "text-[#FF4F00] bg-[#FF4F00]/10 border-[#FF4F00]/20";
                if (group.category === "WhatsApp Automation") {
                  badgeColor = "text-[#FF4F00] bg-[#FF4F00]/10 border-[#FF4F00]/20";
                }

                return (
                  <div key={groupIdx} className="space-y-6 flex flex-col h-full">
                    
                    {/* Column Group Header */}
                    <div className="p-6 bg-[#111111]/60 border border-white/5 rounded-3xl space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="p-2.5 bg-[#FF4F00]/10 text-[#FF4F00] rounded-xl font-bold">
                          {group.category === "Flutter" && <Smartphone size={18} />}
                          {group.category === "AI Development" && <Cpu size={18} />}
                          {group.category === "WhatsApp Automation" && <Workflow size={18} />}
                        </div>
                        <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${badgeColor}`}>
                          {group.items.length} {group.category === "Flutter" ? "Apps" : group.category === "AI Development" ? "Repos" : "Videos"}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-display font-medium text-lg text-white">
                          {group.category}
                        </h4>
                        <p className="text-xs text-white/55 mt-1 leading-relaxed">
                          {group.description}
                        </p>
                      </div>
                    </div>

                    {/* Stack of Cards */}
                    <div className="space-y-4 flex-grow flex flex-col justify-start">
                      {group.items.map((item) => (
                        <TiltCard 
                          key={item.id} 
                          className="p-5 bg-[#111111] border border-white/10 rounded-2xl flex flex-col justify-between space-y-4 transition-all"
                          intensity={10}
                        >
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className={`text-[8px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                                item.type === "codecanyon" 
                                  ? "bg-amber-500/10 border-amber-500/20 text-amber-500"
                                  : item.type === "github"
                                  ? "bg-slate-400/10 border-slate-400/20 text-slate-300"
                                  : "bg-red-500/10 border-red-500/20 text-red-500"
                              }`}>
                                {item.badge}
                              </span>
                            </div>
                            <h5 className="font-display font-semibold text-sm text-white hover:text-[#FF4F00] transition-colors leading-snug">
                              {item.title}
                            </h5>
                            <p className="text-xs text-white/50 leading-relaxed font-sans">
                              {item.description}
                            </p>
                          </div>

                          <div className="space-y-3">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-1">
                              {item.tags.map((tag, tIdx) => (
                                <span key={tIdx} className="text-[9px] font-mono bg-white/5 border border-white/10 text-white/40 px-1.5 py-0.5 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* CTA Link Button */}
                            <a 
                              href={item.url}
                              target="_blank"
                              rel="noreferrer"
                              className={`w-full py-2.5 rounded-xl text-[10px] uppercase font-mono tracking-wider font-bold text-center flex items-center justify-center gap-1.5 transition-all outline-none border cursor-pointer ${
                                item.type === "codecanyon"
                                  ? "bg-[#FF4F00] text-black border-transparent hover:bg-orange-600 hover:text-black font-extrabold"
                                  : "bg-white/5 border-white/11 hover:border-[#FF4F00]/40 text-white/80 hover:text-white"
                              }`}
                            >
                              {item.type === "codecanyon" && "Buy Licence"}
                              {item.type === "github" && "Explore Repository"}
                              {item.type === "youtube" && "Watch Walkthrough"}
                              <ArrowUpRight size={10} className="opacity-60" />
                            </a>
                          </div>
                        </TiltCard>
                      ))}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </motion.section>

      {/* DETAILED CHRONOLOGICAL EXPERIENCE TIMELINE */}
      <motion.section 
        id="timeline" 
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        
        <div className="max-w-3xl mb-12">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#FF4F00] font-bold mb-2 block">04 / EXPERIENCE</span>
          <h2 className="font-display font-bold text-4xl text-white tracking-tight">
            Career Timeline
          </h2>
          <p className="text-sm text-white/55 mt-2">
            A comprehensive overview of Sandip's 12+ years mobile leadership positions, milestones, and team orchestration results.
          </p>
          <div className="w-12 h-1 bg-[#FF4F00] rounded-full mt-3"></div>
        </div>

        {/* Timeline main element */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-3 space-y-10">
          
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Point Indicator badge */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-6 w-6 rounded-full bg-[#080808] border-2 border-[#FF4F00] flex items-center justify-center text-[#FF4F00] group-hover:bg-[#FF4F00] group-hover:text-black transition-all shadow-md z-10">
                <Briefcase size={10} className="stroke-[2.5px]" />
              </div>

              {/* Box element */}
              <div className="p-6 sm:p-8 bg-[#111111] border border-white/10 hover:border-[#FF4F00]/40 rounded-3xl transition-all">
                
                {/* Heading details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="font-display font-semibold text-white text-lg leading-snug">
                      {exp.role}
                    </h3>
                    <div className="text-white/60 text-sm mt-1 flex flex-wrap items-center gap-2">
                      <span className="text-[#FF4F00] font-semibold">{exp.company}</span>
                      <span className="h-1 w-1 bg-white/25 rounded-full"></span>
                      <span className="font-mono text-xs text-white/40">{exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="inline-flex self-start md:self-center items-center gap-1.5 px-3 py-1 bg-[#FF4F00]/10 border border-[#FF4F00]/20 rounded-full text-xs text-[#FF4F00] font-mono">
                    <Clock size={11} />
                    {exp.duration}
                  </div>
                </div>

                {/* Bullets List */}
                <ul className="mb-6 space-y-2.5 text-white/70 text-sm list-inside">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="leading-relaxed list-disc marker:text-[#FF4F00]">
                      <span className="inline-block pl-1 text-white/80">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags deployed */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-[10px] uppercase font-mono tracking-wider mb-2 font-bold text-white/40">
                    Utilized Capabilities:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((sk, skIdx) => (
                      <span key={skIdx} className="bg-[#1a1a1a] border border-white/5 text-white/70 text-xs px-2.5 py-1.5 rounded-xl font-sans">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>

      </motion.section>

      {/* EDUCATION & CERTIFICATIONS SUMMARY */}
      <motion.section 
        id="education" 
        className="py-20 bg-[#080808] border-y border-white/10 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left side: Education list details */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#FF4F00] font-bold mb-2 block">05 / DEGREES</span>
                <h2 className="font-display font-bold text-4xl text-white tracking-tight">
                  Academic Credentials
                </h2>
                <div className="w-12 h-1 bg-[#FF4F00] rounded-full mt-3 mb-6"></div>
              </div>

              <div className="space-y-6">
                {educationList.map((edu) => (
                  <div key={edu.id} className="p-6 bg-[#111111] border border-white/10 hover:border-[#FF4F00]/40 rounded-3xl transition-all flex items-start gap-4">
                    <div className="p-3 bg-[#FF4F00]/10 border border-[#FF4F00]/20 text-[#FF4F00] rounded-xl flex-shrink-0">
                      <GraduationCap size={22} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-wider font-semibold bg-[#FF4F00]/10 border border-[#FF4F00]/20 text-[#FF4F00] px-2.5 py-1 rounded uppercase">
                        {edu.duration}
                      </span>
                      <h3 className="font-display font-semibold text-white text-base mt-3">
                        {edu.degree}
                      </h3>
                      <p className="text-white/60 text-xs mt-1">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Certifications details */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#FF4F00] font-bold mb-2 block">06 / CERTIFICATES</span>
                <h2 className="font-display font-bold text-4xl text-white tracking-tight">
                  Professional Certifications
                </h2>
                <div className="w-12 h-1 bg-[#FF4F00] rounded-full mt-3 mb-6"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div key={cert.id} className="p-6 bg-[#111111] border border-white/10 hover:border-[#FF4F00]/40 rounded-3xl transition-all group">
                    <div className="text-[#FF4F00] p-2 bg-[#FF4F00]/10 rounded-xl w-10 h-10 flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                      <Award size={18} />
                    </div>
                    {cert.date && (
                      <span className="text-[9px] font-mono bg-[#FF4F00]/10 border border-[#FF4F00]/20 px-2 py-0.5 rounded text-[#FF4F00]">
                        {cert.date}
                      </span>
                    )}
                    <h4 className="font-display font-semibold text-white text-sm mt-3">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-white/55 mt-1">
                      Issuer: {cert.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </motion.section>



      {/* FOOTER COOPERATIVE PANEL */}
      <footer className="border-t border-white/10 bg-[#080808] px-4 sm:px-6 lg:px-8 py-12 relative z-10 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2">
            <div className="bg-[#111111] text-white font-mono font-bold text-xs p-2 rounded-xl border border-white/10">
              SK
            </div>
            <p className="text-sm font-sans text-white/50">
              <strong className="text-white font-semibold">Sandipkumar Kalola</strong> — Lead Developer
            </p>
          </div>

          <div className="flex gap-4">
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="text-white/40 hover:text-[#FF4F00] transition-all">
              <Linkedin size={18} />
            </a>
            <a href={contactInfo.github} target="_blank" rel="noreferrer" className="text-white/40 hover:text-[#FF4F00] transition-all">
              <Github size={18} />
            </a>
          </div>

          <p className="text-xs text-white/40 font-mono">
            &copy; {currentYear} Sandipkumar Kalola. Built on Bento Scheme.
          </p>

        </div>
      </footer>

    </div>
  );
}
