import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const metrics = [
  { value: "4", label: "Countries" },
  { value: "500+", label: "Projects" },
  { value: "12", label: "Years" },
  { value: "95%", label: "Retention" },
];

const pipeline = [
  "AI opportunity mapping",
  "Cloud and platform modernization",
  "QA automation and observability",
  "GCC scale-up and talent pods",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f9fc] pt-28 text-[#0a1020]">
      <div className="absolute inset-x-0 top-0 h-[420px] bg-[linear-gradient(115deg,#ffffff_0%,#edf3ff_38%,#ffe8e8_100%)]" />
      <div className="absolute inset-x-0 top-[418px] h-20 skew-y-[-5deg] bg-[#f7f9fc]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-24 pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pt-24">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[#214daa]" />
            AI-first global delivery partner
          </div>

          <h1
            className="font-teko font-bold leading-[0.98] tracking-normal text-[#0a1020]"
            style={{ fontSize: "clamp(3.7rem, 7vw, 6.7rem)" }}
          >
            Driving digital transformation with enterprise speed.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600">
            ConglomerateIT helps CIOs, CTOs, and growth teams modernize technology, adopt AI, launch global delivery models, and reduce execution cost without losing control.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary text-base">
              Book consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-[#0a1020] transition hover:border-[#214daa]/40 hover:text-[#214daa]"
            >
              View case studies
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <p className="font-teko text-4xl font-bold text-[#214daa]">{metric.value}</p>
                <p className="text-xs font-medium text-slate-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-lg border border-slate-200 bg-white shadow-2xl shadow-slate-300/40">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo.png"
                  alt="ConglomerateIT"
                  width={132}
                  height={36}
                  className="h-8 w-auto object-contain"
                  priority
                />
                <span className="hidden rounded-full bg-[#214daa]/10 px-3 py-1 text-xs font-semibold text-[#214daa] sm:inline">
                  Transformation cockpit
                </span>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Live plan
              </span>
            </div>

            <div className="grid gap-0 lg:grid-cols-[0.75fr_1.25fr]">
              <aside className="border-b border-slate-200 bg-slate-50 p-5 lg:border-b-0 lg:border-r">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Priorities
                </p>
                <div className="mt-5 space-y-3">
                  {["AI adoption", "Cost optimization", "Platform scale", "Talent capacity"].map((item, index) => (
                    <div key={item} className="flex items-center justify-between rounded-lg bg-white px-3 py-3 text-sm shadow-sm">
                      <span className="font-medium text-slate-700">{item}</span>
                      <span className="text-xs font-semibold text-[#f40000]">{index + 1}</span>
                    </div>
                  ))}
                </div>
              </aside>

              <div className="p-6">
                <div className="mb-6 grid grid-cols-3 gap-3">
                  {["QA/QE", "Cloud", "AI/Data"].map((item) => (
                    <div key={item} className="rounded-lg border border-slate-200 p-3">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        Pod
                      </p>
                      <p className="mt-1 font-teko text-2xl font-semibold text-[#0a1020]">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg bg-[#0a1020] p-5 text-white">
                  <div className="mb-5 flex items-center justify-between">
                    <p className="text-sm font-semibold">90-day execution path</p>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                      GCC ready
                    </span>
                  </div>
                  <div className="space-y-4">
                    {pipeline.map((item, index) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-[#0a1020]">
                          {index + 1}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-4">
                            <p className="text-sm font-medium text-white">{item}</p>
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />
                          </div>
                          <div className="mt-2 h-1.5 rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full bg-[linear-gradient(to_right,#214daa,#f40000)]"
                              style={{ width: `${55 + index * 12}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
