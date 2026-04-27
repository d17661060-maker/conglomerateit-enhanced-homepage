import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import {
  deliveryModels,
  industries,
  servicePillars,
} from "@/lib/primary-pages";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "ConglomerateIT services across QA/QE, infrastructure, software development, business transformation, data analytics, AI-first transformation, and agile IT delivery models.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#f6f9fc] text-[#0a2540]">
      <section className="relative overflow-hidden pt-32">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[linear-gradient(118deg,#fff_0%,#eef4ff_42%,#f4ecff_70%,#fff5f0_100%)]" />
        <div className="absolute left-0 right-0 top-[470px] h-36 skew-y-[-6deg] bg-[#f6f9fc]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-24 pt-14 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:pt-20">
          <div>
            <p className="mb-7 inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-[13px] font-semibold text-[#635bff] shadow-sm ring-1 ring-[#0a2540]/10 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              What we do
            </p>
            <h1 className="text-[52px] font-bold leading-[1.02] text-[#0a2540] md:text-[76px] lg:text-[88px]">
              Powering innovation with cutting-edge IT services and agile IT models.
            </h1>
            <p className="mt-7 max-w-2xl text-[18px] leading-8 text-[#425466]">
              ConglomerateIT combines six service pillars with flexible delivery
              models so enterprises can modernize, build, test, analyze,
              automate, and scale with the right operating structure.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#635bff] px-5 py-3 text-[15px] font-semibold text-white shadow-lg shadow-[#635bff]/20 transition hover:bg-[#0a2540]"
              >
                Talk to an expert <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/delivery-models"
                className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#635bff] transition hover:text-[#0a2540]"
              >
                Compare delivery models <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-[8px] bg-white p-5 shadow-[0_36px_80px_rgba(50,50,93,0.18)] ring-1 ring-[#0a2540]/10">
            <div className="grid gap-3 sm:grid-cols-2">
              {servicePillars.map((service, index) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className={`rounded-[8px] p-5 ring-1 ring-[#0a2540]/8 transition hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(50,50,93,0.13)] ${
                    index === 0
                      ? "bg-[#0a2540] text-white sm:col-span-2"
                      : "bg-[#f6f9fc] text-[#0a2540]"
                  }`}
                >
                  <service.icon
                    className={`h-6 w-6 ${
                      index === 0 ? "text-[#00d4ff]" : "text-[#635bff]"
                    }`}
                  />
                  <p
                    className={`mt-5 text-[13px] font-semibold uppercase tracking-[0.12em] ${
                      index === 0 ? "text-white/55" : "text-[#697386]"
                    }`}
                  >
                    {service.label}
                  </p>
                  <h2 className="mt-2 text-[22px] font-bold leading-7">
                    {service.title}
                  </h2>
                  <p
                    className={`mt-3 text-[15px] leading-7 ${
                      index === 0 ? "text-white/70" : "text-[#425466]"
                    }`}
                  >
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="text-[15px] font-semibold text-[#635bff]">
              IT services
            </p>
            <h2 className="mt-4 text-[42px] font-bold leading-[1.08] text-[#0a2540] md:text-[56px]">
              Everything from QA and cloud to AI, analytics, and enterprise platforms.
            </h2>
          </div>

          <div className="space-y-5">
            {servicePillars.map((service) => (
              <article
                key={service.label}
                className="overflow-hidden rounded-[8px] border border-[#e6ebf1] bg-white"
              >
                <div className="grid lg:grid-cols-[0.52fr_1.48fr]">
                  <div className="border-b border-[#e6ebf1] bg-[#f6f9fc] p-7 lg:border-b-0 lg:border-r">
                    <service.icon className="h-7 w-7 text-[#635bff]" />
                    <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#697386]">
                      {service.label}
                    </p>
                    <h3 className="mt-2 text-[30px] font-bold leading-tight text-[#0a2540]">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-7 text-[#425466]">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="mt-6 inline-flex items-center gap-1 text-[14px] font-semibold text-[#635bff]"
                    >
                      Open service page <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="p-7">
                    <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#697386]">
                      Capabilities
                    </p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {service.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-[8px] bg-[#f6f9fc] px-4 py-3"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#635bff]" />
                          <span className="text-[14px] font-medium text-[#0a2540]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a2540] py-24 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(99,91,255,0.55),transparent_42%),linear-gradient(300deg,rgba(0,212,255,0.24),transparent_46%)]" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr]">
            <div>
              <p className="text-[15px] font-semibold text-[#00d4ff]">
                IT models
              </p>
              <h2 className="mt-4 text-[42px] font-bold leading-[1.08] md:text-[56px]">
                Choose the operating model that matches your speed, cost, and control needs.
              </h2>
              <p className="mt-5 text-[17px] leading-8 text-white/70">
                The original What We Do page lists onshore, nearshore, OCC,
                GCC, COE, and hybrid delivery. Each model remains visible here,
                with sharper decision context.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {deliveryModels.map((model) => (
                <div
                  key={model.title}
                  className="rounded-[8px] bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur"
                >
                  <model.icon className="h-5 w-5 text-[#00d4ff]" />
                  <h3 className="mt-5 text-[24px] font-bold">{model.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {model.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-[14px] leading-6 text-white/72"
                      >
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#00d4ff]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc] py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[15px] font-semibold text-[#635bff]">
                Industry alignment
              </p>
              <h2 className="mt-4 text-[42px] font-bold leading-[1.08] text-[#0a2540] md:text-[56px]">
                Future-ready technology solutions tailored by sector.
              </h2>
              <p className="mt-5 text-[17px] leading-8 text-[#425466]">
                ConglomerateIT supports healthcare, financial services,
                e-commerce, manufacturing, public sector, technology,
                telecommunications, and utilities.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="rounded-[8px] bg-white p-5 shadow-sm ring-1 ring-[#0a2540]/8"
                >
                  <p className="text-[15px] font-semibold text-[#0a2540]">
                    {industry}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="text-[42px] font-bold leading-[1.08] text-[#0a2540] md:text-[64px]">
            Build your next technology operating model with ConglomerateIT.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-8 text-[#425466]">
            Tell us whether you need a service team, global delivery model,
            GCC, quality program, AI-first roadmap, platform implementation, or
            a complete transformation pod.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0a2540] px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-[#635bff]"
          >
            Start the conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
