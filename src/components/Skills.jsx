import SectionTitle from "./SectionTitle";
import { skillCategories } from "./skill";

// lucide icons
import {
  Code2,
  Wrench,
  Database,
  Layers,
  Settings,
  Boxes,
  Cpu,
  FolderGit2,
  TerminalSquare,
} from "lucide-react";

// match category → icon
const icons = {
  "Programming Languages": <Code2 size={20} className="text-cyan-400" />,
  "Web Development": <Wrench size={20} className="text-cyan-400" />,
  "Frontend Frameworks": <Layers size={20} className="text-cyan-400" />,
  "Backend & API Development": <Settings size={20} className="text-cyan-400" />,
  Databases: <Database size={20} className="text-cyan-400" />,
  "DevOps & Deployment": <TerminalSquare size={20} className="text-cyan-400" />,
  "Version Control & Tools": <FolderGit2 size={20} className="text-cyan-400" />,
  "Phitron CSE Fundamental Course": <Cpu size={20} className="text-cyan-400" />,
  "Soft Skills": <Boxes size={20} className="text-cyan-400" />,
};

export default function Skills({ compact = false }) {
  const visible = compact ? skillCategories.slice(0, 4) : skillCategories;

  return (
    <section className="w-full pt-16 pb-24 border-t border-cyan-500/20">
      <SectionTitle
        eyebrow="Skills"
        title="Tools I use to build production-ready software."
        subtitle="A refined tech stack backed by CS fundamentals and real-world projects."
      />

      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((cat) => (
          <div
            key={cat.id}
            className="
              bg-black/40
              rounded-2xl
              p-5
              border border-cyan-500/30
              shadow-md shadow-cyan-500/10
              hover:shadow-cyan-500/20
              transition
            "
          >
            {/* icon + title */}
            <div className="flex items-center gap-3 mb-4">
              {icons[cat.name]}
              <h3 className="text-cyan-300 text-base font-semibold">{cat.name}</h3>
            </div>

            {/* badges */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1
                    rounded-full
                    bg-cyan-500/10
                    text-cyan-100
                    border border-cyan-500/40
                    text-xs font-medium
                    hover:bg-cyan-500/20 
                    hover:text-white
                    transition
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
