import {
  Banknote,
  Factory,
  HeartPulse,
  Landmark,
  Monitor,
  RadioTower,
  ShoppingCart,
  Zap,
} from "lucide-react";

const industries = [
  { icon: HeartPulse, label: "Healthcare & Life Sciences" },
  { icon: Banknote, label: "Financial Services & Banking" },
  { icon: ShoppingCart, label: "Retail & E-Commerce" },
  { icon: Factory, label: "Manufacturing & Supply Chain" },
  { icon: Monitor, label: "Technology & SaaS" },
  { icon: Landmark, label: "Public Sector & Government" },
  { icon: RadioTower, label: "Telecommunications" },
  { icon: Zap, label: "Energy & Utilities" },
];

export default function Industries() {
  return (
    <section className="py-24 bg-[#080d18]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Industries We Serve</p>
          <h2 className="section-heading text-white">
            Deep expertise across <span className="gradient-text">regulated sectors</span>
          </h2>
          <p className="text-white/45 mt-4 max-w-xl mx-auto text-lg">
            From healthcare compliance to fintech security, we bring domain knowledge
            that makes technology delivery more credible from day one.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind) => (
            <div
              key={ind.label}
              className="card p-6 flex flex-col items-center text-center gap-3 hover:border-[#214daa]/40 group"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#214daa]/15 text-[#8aa9ff] transition-transform duration-300 group-hover:scale-105">
                <ind.icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium text-white/65 group-hover:text-white transition-colors">
                {ind.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
