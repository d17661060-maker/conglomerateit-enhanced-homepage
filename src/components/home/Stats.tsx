"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";

const stats = [
  { num: 4, suffix: "", label: "Countries", sublabel: "Global footprint" },
  { num: 500, suffix: "+", label: "Projects", sublabel: "Successfully delivered" },
  { num: 12, suffix: "", label: "Years", sublabel: "Of excellence" },
  { num: 95, suffix: "%", label: "Client Retention", sublabel: "Satisfaction rate" },
];

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);

  return value;
}

function StatItem({ stat, active }: { stat: (typeof stats)[0]; active: boolean }) {
  const val = useCountUp(stat.num, 1800, active);
  return (
    <div className="text-center group">
      <p className="font-teko font-bold gradient-text" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}>
        {val}{stat.suffix}
      </p>
      <p className="font-semibold text-white text-lg mt-1">{stat.label}</p>
      <p className="text-sm text-white/35 mt-0.5">{stat.sublabel}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Stripe-like gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#214daa]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f40000]/30 to-transparent" />

      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(33,77,170,0.07), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Powered by Agility</p>
          <h2 className="section-heading text-white">
            Numbers that tell our <span className="gradient-text">story</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} active={active} />
          ))}
        </div>

        {/* Certifications */}
        <div className="flex items-center justify-center gap-8 mt-16 pt-10 border-t border-white/5">
          <div className="flex items-center gap-3 px-6 py-3 rounded-xl border border-white/8 bg-white/[0.02]">
            <ShieldCheck className="h-6 w-6 text-[#214daa]" />
            <div>
              <p className="text-xs font-semibold text-white">SOC 2 Compliant</p>
              <p className="text-[0.65rem] text-white/35">AICPA</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-xl border border-white/8 bg-white/[0.02]">
            <CheckCircle2 className="h-6 w-6 text-[#214daa]" />
            <div>
              <p className="text-xs font-semibold text-white">ISO 27001:2013</p>
              <p className="text-[0.65rem] text-white/35">Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
