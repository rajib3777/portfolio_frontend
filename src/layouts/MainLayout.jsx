import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GRADIENTS } from "../styles/theme";

export default function MainLayout() {
  return (
    <div className={`min-h-screen bg-black text-white`}>
      {/* Background glow */}
      <div
        className={`fixed inset-0 -z-10 bg-gradient-to-b ${GRADIENTS.page}`}
      />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_55%)]" />

      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
