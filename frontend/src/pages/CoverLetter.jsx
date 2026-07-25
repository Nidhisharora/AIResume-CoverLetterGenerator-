import { useState } from "react";
import { Mail } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { callApi, toList } from "../lib/api";

export default function CoverLetter() {
  const [form, setForm] = useState({
    name: "",
    target_role: "",
    education: "",
    experience: "",
    skills: "",
    projects: "",
    achievements: "",
  });
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleGenerate = async () => {
    setLoading(true);
    setOutput("");
    try {
      const data = await callApi("/generate-cover-letter", {
        name: form.name,
        target_role: form.target_role,
        education: form.education,
        experience: form.experience,
        skills: toList(form.skills),
        projects: toList(form.projects),
        achievements: toList(form.achievements),
      });
      setOutput(data.cover_letter);
    } catch (err) {
      setOutput("Something went wrong. Please check your backend is running.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { name: "name", placeholder: "Full Name" },
    { name: "target_role", placeholder: "Target Role" },
    { name: "education", placeholder: "Education" },
    { name: "experience", placeholder: "Experience summary" },
    { name: "skills", placeholder: "Skills (comma separated)" },
    { name: "projects", placeholder: "Projects (comma separated)" },
    { name: "achievements", placeholder: "Achievements (comma separated)" },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.10),transparent_60%)]" />

      <section className="max-w-6xl mx-auto px-6 pt-40 pb-24">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300 mb-4">
            <Mail size={12} /> COVER LETTER
          </div>
          <h1 className="text-3xl font-bold text-white">Cover Letter</h1>
          <p className="mt-2 text-slate-400 text-sm">
            Create a personalized cover letter for your target company and role.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-8 space-y-4">
            {fields.map((f) => (
              <input
                key={f.name}
                type="text"
                name={f.name}
                placeholder={f.placeholder}
                value={form[f.name]}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500/50 transition"
              />
            ))}

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full rounded-lg bg-indigo-500 py-3 text-sm font-semibold text-black hover:bg-indigo-400 transition disabled:opacity-50"
            >
              {loading ? "Generating..." : "Generate Cover Letter"}
            </button>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-8">
            <h2 className="text-lg font-semibold text-white mb-3">AI Output</h2>
            <div className="text-sm text-slate-300 leading-relaxed prose prose-invert prose-sm max-w-none">
              {output ? (
                <ReactMarkdown>{output}</ReactMarkdown>
              ) : (
                <p className="text-slate-400">Your cover letter will appear here...</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}