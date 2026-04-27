import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, ShieldCheck } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { industrySolutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industry Solutions",
  description:
    "Industry-specific IT, AI, cloud, QA, data, compliance, and platform solutions from ConglomerateIT.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        label="Solutions"
        title="Industry-ready delivery for"
        titleHighlight="regulated growth"
        description="Map services to business outcomes by industry: healthcare, financial services, SaaS, retail, manufacturing, and public sector."
        breadcrumbs={[{ label: "Solutions" }]}
      />

      <section className="bg-[#080d18] py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="section-label mb-3">Service to solution mapping</p>
            <h2 className="section-heading text-white">
              Built around buyer context, not a menu of everything.
            </h2>
            <p className="mt-4 text-white/50">
              The SRS warns against looking like a company that does everything in IT. This solutions layer groups CGIT capabilities around the industries and compliance realities buyers care about.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {industrySolutions.map((solution) => (
              <article key={solution.title} className="card p-7">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#214daa]/15 text-[#8aa9ff]">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/30">
                    Industry
                  </span>
                </div>
                <h3 className="font-teko text-3xl font-semibold text-white">
                  {solution.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {solution.description}
                </p>
                <div className="mt-5">
                  <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
                    <ShieldCheck className="h-4 w-4 text-[#214daa]" />
                    Compliance context
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {solution.compliance.map((item) => (
                      <span key={item} className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-white/45">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-[#0a1020]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "AI and data",
                body: "Define opportunities, govern data, engineer pipelines, and deploy AI use cases that can survive security review.",
                href: "/services/ai-first",
              },
              {
                title: "Cloud and infrastructure",
                body: "Modernize platforms, rationalize applications, and build secure cloud foundations across AWS, Azure, and GCP.",
                href: "/services/infrastructure",
              },
              {
                title: "Enterprise platforms",
                body: "Implement Salesforce, ServiceNow, Workday, and Databricks with clean workflows and measurable adoption.",
                href: "/services/business-transformation",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-lg border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70"
              >
                <h3 className="font-teko text-3xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#214daa]">
                  Explore service <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
