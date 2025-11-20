import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-cyan-500/20 bg-black/90 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-6">

        {/* Logo / Name */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold text-cyan-300">Rajib</h2>
          <p className="text-gray-500 text-sm">Full-Stack Developer</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/md-rajibul-islam-shuvo-3235121b3/"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:text-white hover:scale-110 transition transform"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/rajib3777"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:text-white hover:scale-110 transition transform"
          >
            <FaGithub />
          </a>
        </div>

        {/* Footer Bottom Text */}
        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} Rajib — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
