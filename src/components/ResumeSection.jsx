import SectionTitle from "./SectionTitle";
import { BUTTON_CLASSES } from "../styles/theme";
import { resumeDownloadUrl } from "../services/api";

export default function ResumeSection() {
  return (
    <section className="py-10 border-t border-cyan-500/20">
      <SectionTitle
        eyebrow="Resume"
        title="Need a quick overview?"
        subtitle="Download a PDF version of my resume, generated dynamically from the backend data."
      />

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <p className="text-sm text-gray-300 max-w-xl">
          The resume contains a compact view of my skills, education, and
          projects. Perfect for recruiters, hiring managers, and collaborations.
        </p>
        <a href={resumeDownloadUrl} className={BUTTON_CLASSES}>
          Download Resume (PDF)
        </a>
      </div>
    </section>
  );
}
