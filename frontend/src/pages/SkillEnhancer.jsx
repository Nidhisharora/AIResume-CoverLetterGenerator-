import { useState } from "react";
import { Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { callApi, toList } from "../lib/api";

export default function SkillEnhancer() {
  const [targetRole, setTargetRole] = useState("");
  const [skills, setSkills] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setOutput("");
    try {
      const data = await callApi("/enhance-skills", {
        skills: toList(skills),
        target_role: targetRole,
      });
      setOutput(data.enhanced_skills);
    } catch (err) {
      setOutput("Something went wrong. Please check your backend is running.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.10),transparent_60%)]" />

      <section className="max-w-6xl mx-auto px-6 pt-40 pb-24">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300 mb-4">
            <Sparkles size={12} /> SKILL ENHANCER
          </div>
          <h1 className="text-3xl font-bold text-white">Skill Enhancer</h1>
          <p className="mt-2 text-slate-400 text-sm">
            Optimize your skills section to better match your target role.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-8">
            <input
              type="text"
              placeholder="Target Role"
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500/50 transition"
            />

            <textarea
              placeholder="List your current skills (comma separated)..."
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              rows={10}
              className="mt-4 w-full resize-y rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500/50 transition"
            />

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="mt-5 w-full rounded-lg bg-indigo-500 py-3 text-sm font-semibold text-black hover:bg-indigo-400 transition disabled:opacity-50"
            >
              {loading ? "Enhancing..." : "Enhance Skills"}
            </button>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-8">
            <h2 className="text-lg font-semibold text-white mb-3">AI Output</h2>
            <div className="text-sm text-slate-300 leading-relaxed prose prose-invert prose-sm max-w-none">
              {output ? (
                <ReactMarkdown>{output}</ReactMarkdown>
              ) : (
                <p className="text-slate-400">Your optimized skills section will appear here...</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}