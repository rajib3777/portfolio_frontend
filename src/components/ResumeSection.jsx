import SectionTitle from "./SectionTitle";
import { BUTTON_CLASSES } from "../styles/theme";

// Your Google Drive resume link
const RESUME_URL = "https://drive.google.com/file/d/1ztmdGLfq7SD9yHvSn1spouI_C14imSGe/view?usp=drivesdk";

export default function ResumeSection() {
  return (
    <section className="py-10 border-t border-cyan-500/20">
      <SectionTitle
        eyebrow="Resume"
        title="Need a quick overview?"
        subtitle="Download a clean PDF resume — perfect for recruiters & collaborations."
      />

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <p className="text-sm text-gray-300 max-w-xl">
          This resume contains a compact view of my skills, education, and major
          projects. Ideal for job hunting, professional connections, and tech interviews.
        </p>

        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={BUTTON_CLASSES}
        >
          Download Resume (PDF)
        </a>
      </div>
    </section>
  );
}