export default function ProjectCard({ project }) {
  return (
    <article className="group rounded-2xl border border-cyan-500/30 bg-black/50 overflow-hidden shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transition duration-200 hover:-translate-y-1">
      {project.thumbnail && (
        <div className="relative h-40 w-full overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
          />
          {project.featured && (
            <span className="absolute top-3 left-3 px-2 py-0.5 text-[10px] rounded-full bg-cyan-500 text-black font-semibold uppercase">
              Featured
            </span>
          )}
        </div>
      )}

      <div className="p-4 space-y-3">
        <h3 className="text-base sm:text-lg font-semibold text-white">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 line-clamp-3">
          {project.description}
        </p>
        <p className="text-[11px] text-cyan-200">
          {project.tech_stack || ""}
        </p>

        <div className="flex flex-wrap gap-3 text-xs pt-2">
          {project.github_link && (
            <a
              href={project.github_link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-100"
            >
              <span>GitHub</span>
            </a>
          )}
          {project.live_demo && (
            <a
              href={project.live_demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-100"
            >
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
