import { useEffect, useState } from "react";
import { fetchHero, fetchStats } from "../services/api";
import { BUTTON_CLASSES } from "../styles/theme";
import profilePic from "../assets/IMG_5152.jpeg";


export default function Hero() {
  const [hero, setHero] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchHero().then((res) => setHero(res.data)).catch(() => {});
    fetchStats().then((res) => setStats(res.data)).catch(() => {});
  }, []);

  return (
    <section className="pt-6 pb-12 grid md:grid-cols-[2fr,1.4fr] gap-10 items-center">
      {/* Left */}
      <div>
        <p className="text-[11px] tracking-[0.25em] uppercase text-cyan-400/80 mb-3">
          Portfolio · Full Stack Developer
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          {hero?.title || "Building clean, scalable web experiences."}
        </h1>
        <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-xl">
          {hero?.subtitle ||
            "I’m a full-stack developer focused on Django and React, crafting production-ready web apps with clean architecture and delightful UI."}
        </p>

        <div className="flex flex-wrap gap-3 items-center mb-8">
          <a href="#projects" className={BUTTON_CLASSES}>
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-4 py-2 text-sm rounded-xl border border-cyan-500/60 text-cyan-200 hover:bg-cyan-500/10 transition"
          >
            Let’s Talk
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="rounded-2xl border border-cyan-500/30 bg-black/40 px-4 py-3">
            <p className="text-2xl font-bold text-cyan-400">
              {stats?.total_projects ?? "15+"}
            </p>
            <p className="text-gray-400 mt-1">Projects</p>
          </div>
          <div className="rounded-2xl border border-cyan-500/30 bg-black/40 px-4 py-3">
            <p className="text-2xl font-bold text-cyan-400">
              {stats?.total_clients ?? "5+"}
            </p>
            <p className="text-gray-400 mt-1">Clients</p>
          </div>
          <div className="rounded-2xl border border-cyan-500/30 bg-black/40 px-4 py-3">
            <p className="text-2xl font-bold text-cyan-400">
              {stats?.total_awards ?? "5"}
            </p>
            <p className="text-gray-400 mt-1">Highlights</p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="relative flex justify-center md:justify-end">
        <div className="absolute -top-10 -right-6 h-40 w-40 bg-cyan-500/20 rounded-full blur-3xl" />

        <div className="relative h-56 w-56 sm:h-64 sm:w-64 rounded-3xl bg-gradient-to-br from-cyan-500/50 via-cyan-400/10 to-black border border-cyan-400/50 shadow-[0_0_50px_rgba(34,211,238,0.4)] flex items-center justify-center overflow-hidden">
          
          <img
            src={profilePic}
            alt="Profile"
            className="h-full w-full object-cover"
          />

        </div>
      </div>
    </section>
  );
}
