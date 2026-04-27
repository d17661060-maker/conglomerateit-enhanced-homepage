import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Clock, Target, Users, TrendingDown, Zap } from "lucide-react";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "GCC — Conglomerate Ascend",
  description:
    "Launch your Global Capability Center in 90–120 days. ConglomerateIT's Conglomerate Ascend program delivers 50% cost reduction with 2M+ pre-vetted talent.",
};

const engagementModels = [
  {
    title: "Build-Operate-Transfer (BOT)",
    description:
      "We build and operate your GCC, then transfer full control when you're ready - with complete knowledge transfer and zero disruption.",
  },
  {
    title: "Joint Ventures",
    description:
      "Co-invest and co-manage your GCC with ConglomerateIT as a strategic partner - sharing risk and reward from day one.",
  },
  {
    title: "Managed Services",
    description:
      "Fully managed GCC operations, from talent to infrastructure - you focus on your core business, we handle the rest.",
  },
  {
    title: "Hybrid Arrangements",
    description:
      "A flexible combination of BOT, JV, and managed services tailored to your specific goals and risk appetite.",
  },
];

const maturityLevels = [
  {
    level: "Enterprise-Specific",
    desc: "Standardized solutions across business units for large enterprises seeking consistent delivery at scale.",
    icon: Building2,
  },
  {
    level: "Industry-Specific",
    desc: "Tailored GCC models for Healthcare, BFSI, Manufacturing, Retail, SaaS, and Media.",
    icon: Target,
  },
  {
    level: "Custom-Specific",
    desc: "Bespoke architectures with flexible engagement models designed around your unique requirements.",
    icon: Zap,
  },
];

const capabilities = [
  "QA/QE & TestOps",
  "Software Engineering",
  "Salesforce, ServiceNow, Workday, Databricks",
  "AI-First Services",
  "Data & Analytics",
  "Infrastructure (On-Premises, Cloud, Hybrid, DevOps, SRE)",
  "Executive Hiring",
];

export default function GCCPage() {
  return (
    <>
      <PageHero
        label="GCC — Conglomerate Ascend"
        title="Your Global Capability Center,"
        titleHighlight="launched in 90 days"
        description="ConglomerateIT helps enterprises establish future-ready Global Capability Centers that deliver measurable ROI, 50% cost reduction, and long-term business growth."
        breadcrumbs={[{ label: "GCC" }]}
      />

      {/* Key stats */}
      <section className="py-16 bg-[#080d18]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: Clock, value: "90–120", unit: "Days to Launch", color: "#214daa" },
              { icon: Users, value: "2M+", unit: "Pre-Vetted Talent Pool", color: "#f40000" },
              { icon: TrendingDown, value: "50%", unit: "Cost Reduction", color: "#214daa" },
            ].map((s) => (
              <div key={s.unit} className="card p-7 text-center">
                <s.icon className="w-8 h-8 mx-auto mb-4" style={{ color: s.color }} />
                <p className="font-teko font-bold gradient-text" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                  {s.value}
                </p>
                <p className="text-white/60 text-sm mt-1">{s.unit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is GCC */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-label mb-4">What is a GCC?</p>
            <h2 className="section-heading text-white mb-5">
              Your offshore <span className="gradient-text">centre of excellence</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-5">
              A Global Capability Center (GCC) is a captive entity established in a low-cost,
              high-talent geography — typically India — that delivers strategic services for
              the parent organization. Unlike traditional outsourcing, GCCs offer full control,
              IP protection, and cultural alignment.
            </p>
            <p className="text-white/60 leading-relaxed">
              ConglomerateIT&apos;s <strong className="text-white">Conglomerate Ascend</strong> program
              compresses years of GCC setup into 90–120 days through our proven playbook,
              pre-qualified talent pool, and India-based delivery infrastructure.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {capabilities.map((c) => (
              <div key={c} className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-white/8 bg-white/[0.02]">
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "linear-gradient(to right, #214daa, #f40000)" }} />
                <span className="text-sm text-white/70">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GCC Maturity Framework */}
      <section className="py-20 bg-[#080d18]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">GCC Maturity Framework</p>
            <h2 className="section-heading text-white">
              Built for your <span className="gradient-text">stage of growth</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {maturityLevels.map((m, i) => (
              <div key={m.level} className="card p-7">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#214daa]/15 text-[#8aa9ff]">
                  <m.icon className="h-5 w-5" />
                </span>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "linear-gradient(135deg, #214daa, #f40000)" }}>
                    {i + 1}
                  </span>
                  <h3 className="font-teko font-semibold text-xl text-white">{m.level}</h3>
                </div>
                <p className="text-sm text-white/55 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Engagement Models</p>
            <h2 className="section-heading text-white">
              Choose your <span className="gradient-text">path to success</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {engagementModels.map((m) => (
              <div key={m.title} className="card p-7">
                <div className="w-10 h-1 rounded-full mb-4" style={{ background: "linear-gradient(to right, #214daa, #f40000)" }} />
                <h3 className="font-teko font-semibold text-2xl text-white mb-2">{m.title}</h3>
                <p className="text-white/55 leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#080d18] relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-30" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="section-label mb-4 justify-center">Ready to Launch?</p>
          <h2 className="section-heading text-white mb-5">
            Start your GCC journey <span className="gradient-text">today</span>
          </h2>
          <p className="text-white/50 text-lg mb-8 max-w-lg mx-auto">
            Get a personalized GCC blueprint from our experts — covering talent, infrastructure,
            compliance, and go-live timeline.
          </p>
          <Link href="/contact" className="btn-primary text-base px-10">
            Get a Free GCC Blueprint <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
