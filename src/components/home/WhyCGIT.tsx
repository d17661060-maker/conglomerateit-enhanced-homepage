import Link from "next/link";
import { ArrowRight, BrainCircuit, Globe2, Gauge, ShieldCheck } from "lucide-react";

const differentiators = [
  {
    icon: BrainCircuit,
    title: "AI-first transformation",
    description:
      "We move teams from AI experimentation to governed use cases, production workflows, and measurable operational impact.",
  },
  {
    icon: Globe2,
    title: "Global delivery model",
    description:
      "US, Canada, India, and UK presence lets clients blend local strategy with high-scale execution capacity.",
  },
  {
    icon: Gauge,
    title: "Speed with control",
    description:
      "Structured pods, automation-first delivery, and GCC launch playbooks help compress timelines without losing governance.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-aware execution",
    description:
      "SOC 2 and ISO 27001-aligned delivery patterns support regulated healthcare, banking, public-sector, and enterprise programs.",
  },
];

export default function WhyCGIT() {
  return (
    <section className="bg-white py-24 text-[#0a1020]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="section-label mb-4">Why ConglomerateIT</p>
            <h2 className="font-teko text-5xl font-bold leading-tight text-[#0a1020] md:text-6xl">
              Built for teams that need outcomes, not vendor theater.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
              The new positioning is deliberate: ConglomerateIT is not trying to look like a generic IT vendor. The site now centers AI-first delivery, enterprise control, cost optimization, and speed.
            </p>
            <Link
              href="/delivery-models"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0a1020] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#214daa]"
            >
              Compare delivery models <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-[#214daa]/30 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#214daa]/10 text-[#214daa]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-teko text-2xl font-semibold text-[#0a1020]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
