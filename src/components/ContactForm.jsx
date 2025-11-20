import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { sendContactMessage } from "../services/api";
import { BUTTON_CLASSES } from "../styles/theme";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: null, message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: null, message: "" });
    setLoading(true);
    try {
      await sendContactMessage(form);
      setStatus({ type: "success", message: "Message sent successfully!" });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-10 border-t border-cyan-500/20">
      <SectionTitle
        eyebrow="Contact"
        title="Let’s build something together."
        subtitle="Whether it’s a freelance project, collaboration, or just a tech chat — feel free to drop a message."
      />

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-4 max-w-3xl"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className="col-span-2 md:col-span-1 rounded-xl bg-black/60 border border-cyan-500/40 px-3 py-2 text-sm text-gray-100 focus:outline-none focus:ring-1 focus:ring-cyan-400"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email"
          required
          className="col-span-2 md:col-span-1 rounded-xl bg-black/60 border border-cyan-500/40 px-3 py-2 text-sm text-gray-100 focus:outline-none focus:ring-1 focus:ring-cyan-400"
        />
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="col-span-2 rounded-xl bg-black/60 border border-cyan-500/40 px-3 py-2 text-sm text-gray-100 focus:outline-none focus:ring-1 focus:ring-cyan-400"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message..."
          rows={4}
          required
          className="col-span-2 rounded-xl bg-black/60 border border-cyan-500/40 px-3 py-2 text-sm text-gray-100 focus:outline-none focus:ring-1 focus:ring-cyan-400 resize-none"
        />

        <div className="col-span-2 flex items-center gap-4">
          <button type="submit" disabled={loading} className={BUTTON_CLASSES}>
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status.message && (
            <p
              className={`text-xs ${
                status.type === "success" ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {status.message}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
