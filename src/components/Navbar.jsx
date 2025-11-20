import { NavLink, Link } from "react-router-dom";
import profilePic from "../assets/IMG_5152.jpeg";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinkClasses =
  "relative text-sm sm:text-base text-gray-300 hover:text-cyan-300 transition px-1";

function ActiveIndicator() {
  return (
    <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-cyan-400 rounded-full" />
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/skills", label: "Skills" },
    { to: "/resume", label: "Resume" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-cyan-500/30 bg-black/70 backdrop-blur-md">
      
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo + Name */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-300 flex items-center justify-center shadow-lg shadow-cyan-500/40">
            <span className="text-black font-extrabold text-lg">R</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-white font-semibold text-sm sm:text-base">
              Rajib
            </span>
            <span className="text-[10px] text-gray-400">
              Full-Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${navLinkClasses} ${isActive ? "text-cyan-300" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && <ActiveIndicator />}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Profile + Hire Me (same as before) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:rajreddevil11001@gmail.com"
            className="hidden sm:inline-flex px-4 py-1.5 text-xs sm:text-sm rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition shadow-md shadow-cyan-500/40"
          >
            Hire Me
          </a>

          <img
            src={profilePic}
            alt="Profile"
            className="w-10 h-10 rounded-full border border-cyan-500 shadow-md shadow-cyan-500/40 object-cover"
          />
        </div>

      </nav>

      {/* ⭐ Mobile Dropdown Menu ⭐ */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-cyan-500/20 px-5 py-4 space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-gray-300 text-lg hover:text-cyan-300 transition ${
                  isActive ? "text-cyan-300" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}

    </header>
  );
}
