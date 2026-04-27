import Link from "next/link";
import { ArrowRight, Clock, Users, TrendingDown } from "lucide-react";

const highlights = [
  { icon: Clock, value: "90–120", unit: "Days to Launch", desc: "Your GCC — fast, structured, ready." },
  { icon: Users, value: "2M+", unit: "Pre-Vetted Talent", desc: "Access our deep talent pool globally." },
  { icon: TrendingDown, value: "50%", unit: "Cost Reduction", desc: "Operational savings from day one." },
];

export default function GCC() {
  return (
    <section className="py-24 bg-[#080d18] relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #214daa40, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-4">GCC — Conglomerate Ascend</p>
            <h2 className="section-heading text-white mb-5">
              Your Global Capability Center,{" "}
              <span className="gradient-text">launched in 90 days</span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              ConglomerateIT&apos;s Conglomerate Ascend program helps enterprises establish
              future-ready Global Capability Centers with measurable ROI and long-term growth —
              from Build-Operate-Transfer to Joint Ventures and Managed Services.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/gcc" className="btn-primary">
                Explore GCC <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-outline">
                Get a Consultation
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {highlights.map((h) => (
              <div key={h.unit} className="card p-5 flex items-center gap-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(135deg, #214daa22, #f4000011)", border: "1px solid #214daa33" }}
                >
                  <h.icon className="w-5 h-5 text-[#214daa]" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-teko font-bold text-3xl gradient-text">{h.value}</span>
                    <span className="font-semibold text-white/70 text-sm">{h.unit}</span>
                  </div>
                  <p className="text-sm text-white/40 mt-0.5">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
