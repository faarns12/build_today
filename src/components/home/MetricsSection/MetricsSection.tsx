"use client";

export type StatItem = {
  value: string;
  label: string;
  desc: string;
};

const defaultStats: StatItem[] = [
  {
    value: "189+",
    label: "PROJECTS",
    desc:
      "We have designed and completed over 300 projects, each reflecting our dedication to innovation, precision, and timeless architectural excellence.",
  },
  {
    value: "283+",
    label: "CLIENTS",
    desc:
      "With over 200 satisfied clients, we have built lasting relationships through exceptional design, strategic planning, and craftsmanship.",
  },
  {
    value: "94%",
    label: "HAPPY CLIENTS",
    desc:
      "Client satisfaction is our priority — every project is delivered with precision, passion, and attention to detail, ensuring outstanding results.",
  },
  {
    value: "104%",
    label: "COMMITMENT",
    desc:
      "Client satisfaction is our priority — every project is delivered with precision, passion, and attention to detail, ensuring outstanding results.",
  },
];

export default function MetricsSection() {
  return (
    <section className="w-9/12 mx-auto py-16">
      {/* Heading */}
     <div className="mb-12 flex flex-col md:flex-row items-center justify-between  gap-6">
  {/* Heading */}
  <h2 className="text-4xl sm:text-5xl font-semibold leading-tight text-[#183654]">
    <span className="block">Architecture</span>
    <span className="block">in Motion</span>
  </h2>

  {/* Paragraph */}
  <p className="text-[#3E5468] text-base sm:text-lg max-w-[350px] leading-relaxed ">
    We analyze your vision, site conditions,<br /> and  functional requirements
    to create a strategic framework.
  </p>
</div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {defaultStats.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl bg-[#F8F8F8] p-6  ring-1 ring-black/5 transition-transform duration-200 hover:-translate-y-0.5"
          >
            <div className="text-[48px]   leading-none font-medium text-[#183654]">
              {s.value}
            </div>
            <div className="mt-2 text-[11px] tracking-[0.18em] font-semibold text-[#191919]">
              {s.label}
            </div>
            <p className="mt-3 text-sm text-[#999999] leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
