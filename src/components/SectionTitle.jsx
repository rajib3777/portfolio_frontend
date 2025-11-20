export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-cyan-400/80 mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
