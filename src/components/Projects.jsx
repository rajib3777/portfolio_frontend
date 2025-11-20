import { useEffect, useState } from "react";
import { fetchProjects } from "../services/api";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

export default function Projects({ compact = false }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects()
      .then((res) => setProjects(res.data.results)) // FIXED HERE
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const visible = compact ? projects.slice(0, 4) : projects;

  return (
    <section id="projects" className="py-10 border-t border-cyan-500/20">
      <SectionTitle
        eyebrow="Projects"
        title="Selected work."
        subtitle="A mix of client, office, and personal full-stack projects."
      />

      {loading && <p className="text-gray-400">Loading...</p>}
      {!loading && !visible.length && (
        <p className="text-gray-400">No projects found.</p>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
