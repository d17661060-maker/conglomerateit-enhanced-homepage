import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers3 } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Representative ConglomerateIT case studies showing problems, solutions, technology stacks, and measurable outcomes.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        label="Case Studies"
        title="Proof-led transformation,"
        titleHighlight="built for the boardroom"
        description="The SRS identified case studies as a critical missing layer. This page gives the new site a proof structure ready for approved client stories, logos, and quantified outcomes."
        breadcrumbs={[{ label: "Case Studies" }]}
      />

      <section className="bg-[#080d18] py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="space-y-6">
            {caseStudies.map((study, index) => (
              <article key={study.title} className="card overflow-hidden">
                <div className="grid lg:grid-cols-[0.55fr_1.45fr]">
                  <div className="border-b border-white/10 bg-white/[0.03] p-7 lg:border-b-0 lg:border-r">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/30">
                      {study.label}
                    </p>
                    <p className="mt-4 font-teko text-5xl font-bold gradient-text">
                      0{index + 1}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white/70">
                      {study.industry}
                    </p>
                  </div>

                  <div className="p-7">
                    <h2 className="font-teko text-4xl font-semibold leading-tight text-white">
                      {study.title}
                    </h2>

                    <div className="mt-7 grid gap-5 lg:grid-cols-2">
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
                          Problem
                        </p>
                        <p className="text-sm leading-relaxed text-white/55">
                          {study.problem}
                        </p>
                      </div>
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
                          Solution
                        </p>
                        <p className="text-sm leading-relaxed text-white/55">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mt-7 grid gap-5 lg:grid-cols-2">
                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
                          Tech stack
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {study.stack.map((item) => (
                            <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/45">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
                          Outcomes
                        </p>
                        <div className="space-y-2">
                          {study.outcomes.map((outcome) => (
                            <div key={outcome} className="flex items-center gap-2 text-sm text-white/60">
                              <CheckCircle2 className="h-4 w-4 text-[#214daa]" />
                              {outcome}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-[#0a1020]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="section-label mb-4">Next proof layer</p>
            <h2 className="font-teko text-5xl font-bold leading-tight">
              Replace representative studies with approved client wins.
            </h2>
            <p className="mt-4 text-slate-600">
              The page is intentionally structured around the SRS requirement: problem, solution, tech stack, and measurable outcomes. When approved references are available, they can drop into the same layout.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#214daa]/10 text-[#214daa]">
              <Layers3 className="h-5 w-5" />
            </div>
            <h3 className="font-teko text-3xl font-semibold">Build the proof engine</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Add client logos, testimonials, video case studies, downloadable PDFs, and industry-filtered story pages as the content engine matures.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0a1020] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#214daa]"
            >
              Start a transformation brief <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
