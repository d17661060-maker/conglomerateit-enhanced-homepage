import Link from "next/link";
import { ArrowRight, ShieldCheck, Server, Code2, RefreshCw, BarChart3, BrainCircuit } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    label: "QA / QE",
    title: "Quality Assurance & Engineering",
    description:
      "Functional testing, automation, non-functional testing, and observability solutions to ensure flawless software delivery.",
    href: "/services/qa-qe",
    links: ["Functional Testing", "Automation", "Non-Functional", "Observability"],
    color: "#214daa",
  },
  {
    icon: Server,
    label: "Infrastructure",
    title: "On-Premises, Cloud & Core Services",
    description:
      "End-to-end infrastructure management across AWS, Azure, GCP, and on-premises environments with expert network security.",
    href: "/services/infrastructure",
    links: ["AWS · Azure · GCP", "Compute & Storage", "Network Security", "Migration"],
    color: "#f40000",
  },
  {
    icon: Code2,
    label: "Software Development",
    title: "Web, Backend & Mobile",
    description:
      "Custom software built with modern frameworks. Web portals, APIs, mobile apps — all designed for scale and performance.",
    href: "/services/software-development",
    links: ["Web Development", "Backend APIs", "Mobile Apps"],
    color: "#214daa",
  },
  {
    icon: RefreshCw,
    label: "Business Transformation",
    title: "ERP & Enterprise Platforms",
    description:
      "Salesforce, ServiceNow, Workday, and Databricks implementations that transform operations and accelerate growth.",
    href: "/services/business-transformation",
    links: ["Salesforce", "ServiceNow", "Workday", "Databricks"],
    color: "#f40000",
  },
  {
    icon: BarChart3,
    label: "Data, Digital & Analytics",
    title: "End-to-End Data Strategy",
    description:
      "From data definition and engineering to AI-powered visualization — turning raw data into business intelligence.",
    href: "/services/data-analytics",
    links: ["Define · Analyze", "Visualize", "Engineer", "Govern"],
    color: "#214daa",
  },
  {
    icon: BrainCircuit,
    label: "AI-First Approach",
    title: "Intelligent Transformation",
    description:
      "Transition IT operations to AI-augmented workflows, build AI-native teams, and implement Generative AI at enterprise scale.",
    href: "/services/ai-first",
    links: ["IT to AI", "AI Native Roles", "Gen AI"],
    color: "#f40000",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-[#080d18]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <p className="section-label mb-3">What We Do</p>
            <h2 className="section-heading text-white">
              Six pillars of <span className="gradient-text">digital excellence</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors shrink-0"
          >
            Explore all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              className="card p-7 group block"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${s.color}22, ${s.color}11)`,
                  border: `1px solid ${s.color}33`,
                }}
              >
                <s.icon className="w-5 h-5" style={{ color: s.color }} />
              </div>

              <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-2">
                {s.label}
              </p>
              <h3 className="font-teko font-semibold text-xl text-white mb-3 group-hover:gradient-text transition-all">
                {s.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-5">
                {s.description}
              </p>

              {/* Sub-links */}
              <div className="flex flex-wrap gap-1.5">
                {s.links.map((l) => (
                  <span
                    key={l}
                    className="text-[0.7rem] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/40"
                  >
                    {l}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1 mt-5 text-xs font-medium text-white/30 group-hover:text-white transition-colors">
                Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
