// Global theme tokens for black + cyan design

export const COLORS = {
  bg: "#020617", // very dark
  bgElevated: "#020617",
  card: "#020617",
  cardBorder: "#22d3ee",
  cyan: "#22d3ee",
  cyanSoft: "rgba(34, 211, 238, 0.2)",
  text: "#f9fafb",
  muted: "#9ca3af",
};

export const SHADOWS = {
  card: "0 20px 40px rgba(34, 211, 238, 0.15)",
};

export const GRADIENTS = {
  page: "from-black via-slate-900 to-black",
  cyanGlow: "from-cyan-500/20 via-transparent to-transparent",
};

export const BUTTON_CLASSES =
  "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 hover:shadow-cyan-400/40 transition active:scale-[0.98]";
