import { Link } from "react-router-dom";
import { FileText, Mail, FolderKanban, Sparkles, ArrowRight, UploadCloud, Wand2, Download } from "lucide-react";

const tools = [
  {
    title: "Resume Summary",
    description: "Generate ATS-friendly resume summaries powered by AI.",
    icon: FileText,
    path: "/resume-summary",
  },
  {
    title: "Cover Letter",
    description: "Create personalized cover letters for every application.",
    icon: Mail,
    path: "/cover-letter",
  },
  {
    title: "Project Improver",
    description: "Enhance project descriptions with impactful wording.",
    icon: FolderKanban,
    path: "/project-improver",
  },
  {
    title: "Skill Enhancer",
    description: "Optimize your skills section to impress recruiters.",
    icon: Sparkles,
    path: "/skill-enhancer",
  },
];

const steps = [
  {
    icon: UploadCloud,
    title: "Paste your details",
    description: "Drop in your resume text, job title, or project description — no formatting needed.",
  },
  {
    icon: Wand2,
    title: "AI refines it",
    description: "Our model rewrites it for clarity, impact, and ATS compatibility in seconds.",
  },
  {
    icon: Download,
    title: "Copy & use",
    description: "Grab the polished result and drop it straight into your resume or application.",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.12),transparent_60%)]" />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-40 pb-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300 mb-6">
          ✦ AI-POWERED CAREER TOOLS
        </div>

        <h1 className="text-6xl font-bold tracking-tight text-white">
          Resume <span className="text-indigo-400">Studio</span>
        </h1>

        <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
          Craft ATS-friendly resumes, cover letters, and portfolios
        </p>
      </section>

      {/* Tool cards */}
      <section className="max-w-5xl mx-auto px-6 pt-8 pb-24">
        <div className="grid gap-8 sm:grid-cols-2">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.path}
                to={tool.path}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-10 min-h-[280px] flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:border-white/10 hover:shadow-2xl hover:shadow-black/40"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent" />
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 bg-indigo-500/10" />
            
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-indigo-500/10 text-indigo-400 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={30} strokeWidth={2} />
                  </div>
            
                  <h2 className="mt-6 text-2xl font-semibold text-white">
                    {tool.title}
                  </h2>
            
                  <p className="mt-3 text-base text-slate-400 leading-relaxed flex-1">
                    {tool.description}
                  </p>
            
                  <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-indigo-400">
                    Open Tool
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      
    </div>
  );
}