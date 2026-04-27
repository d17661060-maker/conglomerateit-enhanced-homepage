import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GitBranch, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { deliveryModels } from "@/lib/content";

export const metadata: Metadata = {
  title: "Delivery Models",
  description:
    "Compare ConglomerateIT delivery models: onshore, nearshore, offshore captive center, GCC, COE, and hybrid delivery.",
};

export default function DeliveryModelsPage() {
  return (
    <>
      <PageHero
        label="Delivery Models"
        title="Global delivery, tuned to"
        titleHighlight="your control needs"
        description="Choose the right model for cost, speed, governance, IP control, and talent capacity - from onshore advisory to GCC scale."
        breadcrumbs={[{ label: "Delivery Models" }]}
      />

      <section className="bg-[#080d18] py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {deliveryModels.map((model) => (
              <article key={model.title} className="card p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#214daa]/15 text-[#8aa9ff]">
                  <GitBranch className="h-5 w-5" />
                </div>
                <h2 className="font-teko text-3xl font-semibold text-white">
                  {model.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {model.description}
                </p>
                <div className="mt-5 space-y-2">
                  {model.strengths.map((strength) => (
                    <div key={strength} className="flex items-center gap-2 text-sm text-white/55">
                      <CheckCircle2 className="h-4 w-4 text-[#214daa]" />
                      {strength}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-[#0a1020]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8">
          <div>
            <p className="section-label mb-4">Recommended path</p>
            <h2 className="font-teko text-5xl font-bold leading-tight">
              Use the delivery model as part of the sales conversation.
            </h2>
            <p className="mt-4 text-slate-600">
              The right delivery model is a conversion tool. It turns generic IT services into a concrete operating plan for cost reduction, speed, governance, and talent scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/gcc"
                className="inline-flex items-center gap-2 rounded-full bg-[#0a1020] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#214daa]"
              >
                Explore GCC <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-[#0a1020] transition hover:border-[#214daa]/40 hover:text-[#214daa]"
              >
                Design my model
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <div className="space-y-4">
              {[
                ["1", "Assess operating goals", "Cost, control, geography, compliance, and launch timeline."],
                ["2", "Select model", "Match onshore, nearshore, OCC, GCC, COE, or hybrid delivery to the goal."],
                ["3", "Launch pod", "Stand up governance, talent, tooling, reporting, and sprint rhythm."],
                ["4", "Scale or transfer", "Expand capacity, optimize ROI, or transition ownership through BOT."],
              ].map(([step, title, body]) => (
                <div key={step} className="flex gap-4 rounded-lg bg-white p-4 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#214daa] text-sm font-bold text-white">
                    {step}
                  </span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
