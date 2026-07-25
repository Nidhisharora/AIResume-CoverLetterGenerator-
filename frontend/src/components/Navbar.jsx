import { NavLink } from "react-router-dom";


const links = [
  { name: "Home", path: "/" },
  { name: "Resume", path: "/resume-summary" },
  { name: "Cover Letter", path: "/cover-letter" },
  { name: "Projects", path: "/project-improver" },
  { name: "Skills", path: "/skill-enhancer" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-7xl">
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-10 py-5 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <div className="grid grid-cols-2 gap-1">
            <div className="w-3 h-3 rounded-sm bg-indigo-500" />
            <div className="w-3 h-3 rounded-sm bg-indigo-500" />
            <div className="w-3 h-3 rounded-sm bg-indigo-500" />
            <div className="w-3 h-3 rounded-sm bg-indigo-500" />
          </div>
          <h1 className="font-bold text-2xl tracking-wide text-white">AI Resume Generator</h1>
        </div>

        <div className="flex gap-9 text-[15px]">
          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive
                    ? "text-indigo-400 font-medium"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

       

      </div>
    </nav>
  );
}