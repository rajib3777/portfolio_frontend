import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section className="py-10 border-t border-cyan-500/20">
      <SectionTitle
        eyebrow="About Me"
        title="A developer focused on clean architecture & scalable products."
        subtitle="Turning ideas into fast, reliable, production-ready applications."
      />

      <div className="grid md:grid-cols-2 gap-10 text-gray-300 text-sm leading-relaxed">

        {/* LEFT: BIO + PERSONAL INFO */}
        <div className="space-y-5">
          <p>
            I'm an aspiring Full-Stack Developer with a strong base in C, C++,
            Data Structures & Algorithms, and problem-solving fundamentals.
            I love taking ideas from concept to production—building tools that
            are fast, scalable, and solve real-world problems.
          </p>

          <p className="text-gray-400">
            Over time, I have built a variety of applications including freelance 
            service platforms, job alert systems, event management solutions, and 
            e-commerce experiences. I'm currently sharpening my expertise in 
            backend engineering, databases, API design, and modern JavaScript tooling.
          </p>

          {/* INFO GRID */}
          <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm mt-4">
            <Info label="Name" value="Md. Rajibul Islam Shuvo" />
            <Info label="Role" value="Full-Stack Developer" />
            <Info label="Email" value="rajibulislam3777@gmail.com" />
            <Info label="Location" value="Bangladesh" />
            <Info label="Experience" value="1+ years" />
            <Info
              label="Languages"
              value="Bangla, English, German (Basic), Hindi"
            />
          </div>
        </div>

        {/* RIGHT: EXPERIENCE + EDUCATION */}
        <div className="space-y-10">

          {/* EXPERIENCE */}
          <Timeline
            title="Experience"
            items={[
              {
                id: 1,
                role: "Internship",
                company: "Somadhan Soft",
                period: "2025 – Present",
                desc:
                  "Worked on real-world projects including https://visafarm.com, frontend development with Tailwind CSS, React ,webhooks integration , automation , design systems, and REST API integrations.",
              },
            ]}
          />

          {/* EDUCATION */}
          <Timeline
            title="Education"
            items={[
              {
                id: 1,
                degree: "BAMS",
                institution: "University of Dhaka — Department of Pharmacy",
                period: "Ongoing",
              },
              {
                id: 2,
                degree: "CSE Fundamental Course",
                institution: "Phitron",
                period: "2024 – 2025",
                desc:
                  "Learned Data Structures & Algorithms, Problem Solving, C++, OOP, STL, Recursion, Graphs, Linked Lists, Trees, Sorting Algorithms, Searching Algorithms, Modular Programming, Memory Management, Basic to Advanced Programming Patterns.",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }) {
  if (!value) return null;
  return (
    <div>
      <p className="text-gray-500 text-[11px] uppercase tracking-wide">
        {label}
      </p>
      <p className="text-gray-200">{value}</p>
    </div>
  );
}

function Timeline({ title, items }) {
  if (!items?.length) return null;

  return (
    <div>
      <h3 className="text-sm font-semibold text-cyan-300 mb-3">{title}</h3>

      <ol className="space-y-4 border-l border-cyan-500/40 pl-6">
        {items.map((item) => (
          <li key={item.id} className="relative">
            {/* Small cyan dot */}
            <span className="absolute -left-[12px] top-[6px] h-2 w-2 rounded-full bg-cyan-400" />

            {/* Title + Company */}
            <p className="text-gray-100 font-medium">
              {item.degree || item.role}{" "}
              <span className="text-gray-400">@ {item.institution || item.company}</span>
            </p>

            {/* Duration */}
            <p className="text-[11px] text-gray-500">{item.period}</p>

            {/* Description */}
            {item.desc && (
              <p className="text-gray-400 text-xs mt-1 leading-normal">{item.desc}</p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
