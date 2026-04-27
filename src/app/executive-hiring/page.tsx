import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Award, Globe, TrendingUp, Search, Zap, Compass, BarChart3, Trophy, Target } from "lucide-react";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Executive Hiring",
  description: "C-Suite and board-level executive search, on-demand talent, and succession planning by ConglomerateIT — 1,000+ placements annually with 97% client satisfaction.",
};

const services = [
  { title: "Executive Search", desc: "CEO, Board, and C-Suite placements across all functions — North America, EMEA, APAC, India.", href: "/executive-hiring/executive-search/ceo", icon: Search },
  { title: "On-Demand Talent", desc: "Interim executives and on-demand leaders for critical transitions and project-specific needs.", href: "/executive-hiring/on-demand-talent/interim-executives", icon: Zap },
  { title: "Advisory Search", desc: "Strategic advisor and board advisor placement for governance and expert counsel.", href: "/executive-hiring/advisory-search", icon: Compass },
  { title: "Performance", desc: "Leadership assessment, CEO transitions, and team effectiveness for high-performing organizations.", href: "/executive-hiring/performance/leadership-assessment", icon: BarChart3 },
  { title: "Succession Planning", desc: "Board, CEO, and C-Suite succession frameworks that ensure leadership continuity.", href: "/executive-hiring/succession-plan/ceo-succession", icon: Trophy },
  { title: "Functional Hiring", desc: "CFO, CMO, CISO, COO, and other functional executive placements across all industries.", href: "/executive-hiring/functions/cfo-financial", icon: Target },
];

export default function ExecutiveHiringPage() {
  return (
    <>
      <PageHero
        label="Executive Hiring"
        title="Leadership That Drives"
        titleHighlight="Results"
        description="ConglomerateIT places 1,000+ C-Suite executives annually across North America, EMEA, APAC, and India — with a 97% client satisfaction score and 15+ years of search expertise."
        breadcrumbs={[{ label: "Executive Hiring" }]}
      />

      {/* Stats */}
      <section className="py-16 bg-[#080d18]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, value: "1,000+", label: "C-Suite Placements / Year", color: "#214daa" },
              { icon: Award, value: "97%", label: "Client Satisfaction Score", color: "#f40000" },
              { icon: TrendingUp, value: "15+", label: "Years of Search Experience", color: "#214daa" },
              { icon: Globe, value: "4", label: "Global Regions", color: "#f40000" },
            ].map((s) => (
              <div key={s.label} className="card p-6 text-center">
                <s.icon className="w-7 h-7 mx-auto mb-3" style={{ color: s.color }} />
                <p className="font-teko font-bold gradient-text" style={{ fontSize: "2.2rem" }}>{s.value}</p>
                <p className="text-white/50 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Our Capabilities</p>
            <h2 className="section-heading text-white">
              Full-spectrum <span className="gradient-text">executive solutions</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="card p-7 group block">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#214daa]/15 text-[#8aa9ff]">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="font-teko font-semibold text-2xl text-white mb-2 group-hover:gradient-text transition-all">{s.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">{s.desc}</p>
                <span className="text-xs text-white/30 group-hover:text-white transition-colors flex items-center gap-1">
                  Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-[#080d18]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-label mb-4">Our Approach</p>
            <h2 className="section-heading text-white mb-5">
              The right leader, <span className="gradient-text">every time</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-5">
              Executive search is not a numbers game. ConglomerateIT uses a rigorous, research-led
              methodology that maps the talent market, evaluates candidates against your specific
              leadership requirements, and manages the process from brief to onboarding.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Our North America, EMEA, APAC, and India coverage gives you access to a truly global
              leadership talent pool — wherever the best person for your role lives.
            </p>
            <Link href="/contact" className="btn-primary">
              Start a Search <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {["Research-Led Talent Mapping", "Competency & Culture Assessment", "Confidential Outreach", "Candidate Management & Presentation", "Reference & Background Verification", "Offer Management & Onboarding Support"].map((step, i) => (
              <div key={step} className="flex items-center gap-4 px-5 py-4 rounded-xl border border-white/8 bg-white/[0.02]">
                <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ background: "linear-gradient(135deg, #214daa, #f40000)" }}>{i + 1}</span>
                <span className="text-sm text-white/70">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-heading text-white mb-5">
            Need executive <span className="gradient-text">leadership?</span>
          </h2>
          <p className="text-white/50 mb-8 text-lg">Talk to our search consultants about your requirements — confidentially and without obligation.</p>
          <Link href="/contact" className="btn-primary text-base px-10">
            Start a Confidential Search <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
