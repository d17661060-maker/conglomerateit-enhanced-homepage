import Link from "next/link";
import { ArrowRight, BarChart3 } from "lucide-react";
import { caseStudies } from "@/lib/content";

export default function CaseStudiesPreview() {
  return (
    <section className="bg-[#080d18] py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-label mb-3">Proof of Work</p>
            <h2 className="section-heading text-white">
              Case-study thinking for <span className="gradient-text">measurable change</span>
            </h2>
            <p className="mt-4 max-w-2xl text-white/50">
              The SRS calls out proof as critical. These representative case studies are structured so real client stories, logos, and outcomes can be swapped in when approved.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-white"
          >
            View case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Link
              href="/case-studies"
              key={study.title}
              className="card group block p-6"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="rounded-full border border-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/35">
                  {study.industry}
                </span>
                <BarChart3 className="h-5 w-5 text-[#214daa]" />
              </div>
              <h3 className="font-teko text-2xl font-semibold leading-tight text-white transition group-hover:text-[#8aa9ff]">
                {study.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                {study.solution}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {study.outcomes.slice(0, 2).map((outcome) => (
                  <span
                    key={outcome}
                    className="rounded-full bg-white/[0.04] px-3 py-1 text-[0.72rem] text-white/45"
                  >
                    {outcome}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
