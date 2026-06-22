import React from "react";
import { ArrowLeft, Mail, Shield, Scale, FileText, Globe, Home } from "lucide-react";

interface PolicyPageProps {
  onBack: () => void;
}

export function TermsOfService({ onBack }: PolicyPageProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#080808] text-[#F0F0F0] min-h-screen font-sans selection:bg-[#FF4F00]/30 selection:text-white antialiased relative py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FF4F00]/10 via-[#111111]/5 to-transparent pointer-events-none z-0"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Navigation Action */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111111] hover:bg-white/5 border border-white/10 hover:border-[#FF4F00]/40 text-xs font-mono font-semibold text-white/80 transition-all cursor-pointer mb-10 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform text-[#FF4F00]" />
          Back to Portfolio
        </button>

        {/* Title Card */}
        <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-5">
            <Scale size={180} className="text-white" />
          </div>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF4F00]/10 border border-[#FF4F00]/20 text-[#FF4F00] rounded-full text-xs font-semibold shadow-inner font-mono tracking-wide mb-6">
            <Scale size={12} />
            Legal Compliance
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tighter text-white leading-none">
            Terms of <span className="font-medium bg-gradient-to-r from-[#FF4F00] to-orange-500 bg-clip-text text-transparent">Service</span>
          </h1>
          <p className="text-xs text-white/40 font-mono mt-4 uppercase tracking-wider">
            Last Updated: June 2026 | Effective Date: July 1, 2025
          </p>
        </div>

        {/* content body bento sections */}
        <div className="space-y-6">
          <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
            <h2 className="font-display font-medium text-lg sm:text-xl text-white mb-4 flex items-center gap-2">
              <span className="text-[#FF4F00] font-mono select-none">01.</span> Acceptance of Terms
            </h2>
            <p className="text-sm text-white/60 leading-relaxed">
              By installing, accessing, or utilizing any of the applications or automation tools created by Sandipkumar Kalola and MeetMighty IT Solutions (including but not limited to <strong>Ovulation & Period Tracker</strong>, <strong>EdgeAttend AI</strong>, and <strong>FlutterViz</strong>), you agree to be bound by these Terms of Service. If you do not agree to these terms, please uninstall the apps and cease using our website services immediately.
            </p>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-[#FF4F00]/20 transition-all">
            <h2 className="font-display font-medium text-lg sm:text-xl text-white mb-4 flex items-center gap-2">
              <span className="text-[#FF4F00] font-mono select-none">02.</span> Permitted App Use
            </h2>
            <p className="text-sm text-white/60 leading-relaxed">
              Our mobile and web offerings are intended for personal, non-commercial use, or specialized business administration depending on the license purchased. You agree not to:
            </p>
            <ul className="list-disc list-inside text-xs text-white/50 space-y-2 mt-3 pl-4 leading-relaxed">
              <li>Deploy automated bots, screen scrapers, or scripts to copy our structural visual assets.</li>
              <li>Sublicense or distribute any exported proprietary tools without standard written permission or purchase of an active developer package.</li>
              <li>Formulate unauthorized integrations or act in violation of local laws.</li>
            </ul>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
            <h2 className="font-display font-medium text-lg sm:text-xl text-white mb-4 flex items-center gap-2">
              <span className="text-[#FF4F00] font-mono select-none">03.</span> Health & Precision Disclaimer
            </h2>
            <p className="text-sm text-white/60 leading-relaxed">
              Features deployed inside wellness trackers (e.g. <strong>Ovulation & Period Tracker</strong>) represent general estimations powered by educational logic algorithms. They represent supplementary wellness metrics only and do <strong>not</strong> constitute medical advice, diagnosis, or family planning guidelines. Always consult credentialed medical practitioners for clinical determinations.
            </p>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
            <h2 className="font-display font-medium text-lg sm:text-xl text-white mb-4 flex items-center gap-2">
              <span className="text-[#FF4F00] font-mono select-none">04.</span> Biometrics and Data Ownership
            </h2>
            <p className="text-sm text-white/60 leading-relaxed">
              Our edge applications (such as <strong>EdgeAttend AI</strong>) store facial biometric recognition algorithms, profiles, and logs exclusively in the sandbox of your native handset. We retain zero server backup systems for this data. You hold absolute authorship and represent the exclusive custodian of your generated hardware databases.
            </p>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
            <h2 className="font-display font-medium text-lg sm:text-xl text-white mb-4 flex items-center gap-2">
              <span className="text-[#FF4F00] font-mono select-none">05.</span> Intellectual Property & Code licensing
            </h2>
            <p className="text-sm text-white/60 leading-relaxed">
              All visuals, stylesheets, widgets, underlying patterns, and compiled binaries represented across our products are protected under copyright guidelines. Unauthorized cloning, compiling for direct white-label distribution without CodeCanyon license tiers, or hosting reverse-engineered libraries represents direct intellectual property violations.
            </p>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
            <h2 className="font-display font-medium text-lg sm:text-xl text-white mb-4 flex items-center gap-2">
              <span className="text-[#FF4F00] font-mono select-none">06.</span> Liability Limitations & Warranty
            </h2>
            <p className="text-sm text-white/60 leading-relaxed text-left">
              These applications and assets are provided on an <strong>"as-is" and "as-available"</strong> basis without explicit or implied warranty. Sandipkumar Kalola and MeetMighty IT Solutions shall not be liable for direct or collateral device failures, loss of database records, scheduling misalignment, or payments failures resulting from downstream integrations.
            </p>
          </div>

          {/* Contact details bento */}
          <div className="bg-[#111111] border border-[#FF4F00]/20 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-display font-bold text-lg text-white">Questions or compliance audits?</h3>
              <p className="text-xs text-white/50">Our technical lead and compliance Desk will solve any concerns.</p>
            </div>
            <a
              href="mailto:sandipkalola1990@gmail.com"
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#FF4F00] hover:bg-orange-600 text-black font-bold uppercase tracking-wider text-xs transition-all cursor-pointer shadow-lg"
            >
              <Mail size={14} />
              Support Channels
            </a>
          </div>
        </div>

        {/* Legal Footer */}
        <footer className="mt-16 text-center border-t border-white/10 pt-8">
          <p className="text-xs text-white/40 font-mono">
            &copy; {currentYear} Sandipkumar Kalola & MeetMighty IT Solutions. All licensing rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export function PrivacyPolicy({ onBack }: PolicyPageProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#080808] text-[#F0F0F0] min-h-screen font-sans selection:bg-[#FF4F00]/30 selection:text-white antialiased relative py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FF4F00]/10 via-[#111111]/5 to-transparent pointer-events-none z-0"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Navigation Action */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111111] hover:bg-white/5 border border-white/10 hover:border-[#FF4F00]/40 text-xs font-mono font-semibold text-white/80 transition-all cursor-pointer mb-10 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform text-[#FF4F00]" />
          Back to Portfolio
        </button>

        {/* Title Card */}
        <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-5">
            <Shield size={180} className="text-white" />
          </div>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF4F00]/10 border border-[#FF4F00]/20 text-[#FF4F00] rounded-full text-xs font-semibold shadow-inner font-mono tracking-wide mb-6">
            <Shield size={12} />
            Data Protection
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tighter text-white leading-none">
            Privacy <span className="font-medium bg-gradient-to-r from-[#FF4F00] to-orange-500 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-xs text-white/40 font-mono mt-4 uppercase tracking-wider">
            Last Updated: June 2026 | Compliant with Stripe & App Store Guidelines
          </p>
        </div>

        {/* content body bento sections */}
        <div className="space-y-6">
          <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
            <h2 className="font-display font-medium text-lg sm:text-xl text-white mb-4 flex items-center gap-2">
              <span className="text-[#FF4F00] font-mono select-none">01.</span> Commitment to Privacy
            </h2>
            <p className="text-sm text-white/60 leading-relaxed">
              We, at <strong>MeetMighty IT Solutions</strong> and its lead architect <strong>Sandipkumar Kalola</strong>, consider user data security as our highest engineering virtue. This Privacy Policy details the complete architectural scope of how information is stored, processed, and safeguarded within our ecosystem.
            </p>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
            <h2 className="font-display font-medium text-lg sm:text-xl text-white mb-4 flex items-center gap-2">
              <span className="text-[#FF4F00] font-mono select-none">02.</span> Local Edge Storage (No Cloud Scrapes)
            </h2>
            <p className="text-sm text-white/60 leading-relaxed">
              Our flagship offerings, including <strong>EdgeAttend AI</strong> and <strong>Ovulation & Period Tracker</strong>, store all attendance rosters, visual markers, and personalized calendar tracks <strong>locally</strong> inside your handset's hardware sandbox.
            </p>
            <p className="text-xs text-white/50 mt-3 leading-relaxed border-l-2 border-[#FF4F00] pl-3">
              We do <strong>not</strong> operate unauthorized cloud uploads, server repositories, or telemetry streams, meaning your private databases remain entirely under your local domain. No data is rent, leased, or shared.
            </p>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-[#FF4F00]/20 transition-all">
            <h2 className="font-display font-medium text-lg sm:text-xl text-white mb-4 flex items-center gap-2">
              <span className="text-[#FF4F00] font-mono select-none">03.</span> Face Data and Biometric Scopes
            </h2>
            <p className="text-sm text-white/60 leading-relaxed">
              For security algorithms handled by <strong>EdgeAttend AI</strong>:
            </p>
            <ul className="list-disc list-inside text-xs text-white/50 space-y-2 mt-3 pl-4 leading-relaxed">
              <li>Biometrical templates undergo direct verification cycles exclusively in device runtime memory.</li>
              <li>Face templates are compiled into secure binary formats stored inside locally encrypted storage blocks.</li>
              <li>We never upload, aggregate, or process any biometric templates on secondary networks.</li>
            </ul>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
            <h2 className="font-display font-medium text-lg sm:text-xl text-white mb-4 flex items-center gap-2">
              <span className="text-[#FF4F00] font-mono select-none">04.</span> Core Device Permissions
            </h2>
            <p className="text-sm text-white/60 leading-relaxed">
              Our modules may request explicit permissions to operate specific device features:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-[#1a1a1a] rounded-2xl border border-white/5">
                <span className="text-xs text-[#FF4F00] font-mono font-bold block mb-1">CAMERA ACCESS</span>
                <p className="text-xs text-white/50">Required for active attendance checks and facial matches inside our utility apps.</p>
              </div>
              <div className="p-4 bg-[#1a1a1a] rounded-2xl border border-white/5">
                <span className="text-xs text-white font-mono font-bold block mb-1">LOCAL STORAGE</span>
                <p className="text-xs text-white/50">Necessary to cache localized records, configurations, and exports on your smartphone.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
            <h2 className="font-display font-medium text-lg sm:text-xl text-white mb-4 flex items-center gap-2">
              <span className="text-[#FF4F00] font-mono select-none">05.</span> Children's Privacy
            </h2>
            <p className="text-sm text-white/60 leading-relaxed">
              We do not intentionally or selectively gather identification details from minors under 13. If any parent understands that their child has deployed any local storage tracking on their console, they may clear application cache blocks or contact us for assistance.
            </p>
          </div>

          {/* Contact card */}
          <div className="bg-[#111111] border border-[#FF4F00]/20 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-display font-bold text-lg text-white">Need to delete or audit your integration?</h3>
              <p className="text-xs text-white/50">Reach out directly to write to Sandip's core developer office.</p>
            </div>
            <a
              href="mailto:support@meetmighty.com"
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#FF4F00] hover:bg-orange-600 text-black font-bold uppercase tracking-wider text-xs transition-all cursor-pointer shadow-lg"
            >
              <Mail size={14} />
              support@meetmighty.com
            </a>
          </div>
        </div>

        {/* Legal Footer */}
        <footer className="mt-16 text-center border-t border-white/10 pt-8">
          <p className="text-xs text-white/40 font-mono">
            &copy; {currentYear} Sandipkumar Kalola. Managed with premium compliance structures.
          </p>
        </footer>
      </div>
    </div>
  );
}

export function CancellationRefundPolicy({ onBack }: PolicyPageProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#080808] text-[#F0F0F0] min-h-screen font-sans selection:bg-[#FF4F00]/30 selection:text-white antialiased relative py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FF4F00]/10 via-[#111111]/5 to-transparent pointer-events-none z-0"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Navigation Action */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111111] hover:bg-white/5 border border-white/10 hover:border-[#FF4F00]/40 text-xs font-mono font-semibold text-white/80 transition-all cursor-pointer mb-10 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform text-[#FF4F00]" />
          Back to Portfolio
        </button>

        {/* Title Card */}
        <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-5">
            <FileText size={180} className="text-white" />
          </div>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF4F00]/10 border border-[#FF4F00]/20 text-[#FF4F00] rounded-full text-xs font-semibold shadow-inner font-mono tracking-wide mb-6">
            <Scale size={12} />
            Finance Compliance
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tighter text-white leading-none">
            Cancellation & <span className="font-medium bg-gradient-to-r from-[#FF4F00] to-orange-500 bg-clip-text text-transparent">Refund</span>
          </h1>
          <p className="text-xs text-white/40 font-mono mt-4 uppercase tracking-wider">
            Required for Stripe Gateway Integration | Effective June 2026
          </p>
        </div>

        {/* content body bento sections */}
        <div className="space-y-6">
          <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
            <h2 className="font-display font-medium text-lg sm:text-xl text-white mb-4 flex items-center gap-2">
              <span className="text-[#FF4F00] font-mono select-none">01.</span> Digital Subscriptions & SaaS
            </h2>
            <p className="text-sm text-white/60 leading-relaxed">
              We build premium SaaS pipelines and downloadable web toolsets (such as <strong>FlutterViz</strong> and customizable automation dashboards). Because these offer active computation runtimes, custom output generations, and immediate code exports, licensing is governed by clear financial cycles.
            </p>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
            <h2 className="font-display font-medium text-lg sm:text-xl text-white mb-4 flex items-center gap-2">
              <span className="text-[#FF4F00] font-mono select-none">02.</span> Subscription Cancellation
            </h2>
            <p className="text-sm text-white/60 leading-relaxed">
              You can cancel your recurring digital plan (including monthly or annual premium passes) at any time. The cancellation request must be initiated from your profile settings or by routing your request directly to <strong>sandipkalola1990@gmail.com</strong>.
            </p>
            <p className="text-xs text-white/50 mt-3 leading-relaxed">
              Upon cancellation, no further billing operations will occur, and you will maintain full access to your premium licenses until the exact end of your current active billing cycle.
            </p>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-[#FF4F00]/20 transition-all">
            <h2 className="font-display font-medium text-lg sm:text-xl text-white mb-4 flex items-center gap-2">
              <span className="text-[#FF4F00] font-mono select-none">03.</span> 7-Day Refund Conditions
            </h2>
            <p className="text-sm text-white/60 leading-relaxed">
              By design, we provide a <strong>7-Day money-back satisfaction guarantee</strong> on standard initial purchases under these exact caveats:
            </p>
            <ul className="list-disc list-inside text-xs text-white/50 space-y-2 mt-3 pl-4 leading-relaxed">
              <li>You have not downloaded code packages or compiled custom apps during these 7 days.</li>
              <li>Your consumption meter has not depleted any custom Gemini premium credits or automation quotas.</li>
              <li>You have not established connected API keys that ran high-compute automation tasks.</li>
            </ul>
            <p className="text-xs text-white/40 mt-3 italic">
              *Refunds requested after 7 days from the transaction registration represent final decisions and cannot be authorized.
            </p>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
            <h2 className="font-display font-medium text-lg sm:text-xl text-white mb-4 flex items-center gap-2">
              <span className="text-[#FF4F00] font-mono select-none">04.</span> Relicensing Fees & Out-of-Scope Consulting
            </h2>
            <p className="text-sm text-white/60 leading-relaxed">
              Custom specialized software development cycles (white-label app setups, personal cloud deployments, specialized CodeCanyon installations, and dedicated structural edits) cannot be cancelled or refunded after the development sign-off phase. Any downpayment or retrospective milestone release processed for consulting is non-refundable.
            </p>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
            <h2 className="font-display font-medium text-lg sm:text-xl text-white mb-4 flex items-center gap-2">
              <span className="text-[#FF4F00] font-mono select-none">05.</span> Processing of Authorizations
            </h2>
            <p className="text-sm text-white/60 leading-relaxed">
              Approved refunds will be processed back to your original source of payment (Stripe checkout account, banking card, or merchant account) within <strong>5 to 7 business days</strong>. Note that bank processing cycles might delay the absolute visibility of the transaction in your account by several standard business days.
            </p>
          </div>

          {/* Contact details bento */}
          <div className="bg-[#111111] border border-[#FF4F00]/20 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-display font-bold text-lg text-white">Request details or initiate returns?</h3>
              <p className="text-xs text-white/50">Write directly to Sandipkumar Kalola's administrative support desk.</p>
            </div>
            <a
              href="mailto:sandipkalola1990@gmail.com"
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#FF4F00] hover:bg-orange-600 text-black font-bold uppercase tracking-wider text-xs transition-all cursor-pointer shadow-lg"
            >
              <Mail size={14} />
              sandipkalola1990@gmail.com
            </a>
          </div>
        </div>

        {/* Legal Footer */}
        <footer className="mt-16 text-center border-t border-white/10 pt-8">
          <p className="text-xs text-white/40 font-mono">
            &copy; {currentYear} Sandipkumar Kalola. Deployed for secure stripe transaction modules.
          </p>
        </footer>
      </div>
    </div>
  );
}
