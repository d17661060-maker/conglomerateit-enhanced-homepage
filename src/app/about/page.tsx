import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import {
  cgitLetters,
  companyStats,
  coreValues,
  culturePrinciples,
  futurePriorities,
  journey,
  offices,
} from "@/lib/primary-pages";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "ConglomerateIT delivers world-class human capital and IT services, built on creativity, growth, innovation, technology, strategic thinking, process excellence, and quality.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#f6f9fc] text-[#0a2540]">
      <section className="relative overflow-hidden pt-32">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[linear-gradient(118deg,#fff_0%,#eef4ff_42%,#f4ecff_68%,#fff7f1_100%)]" />
        <div className="absolute left-0 right-0 top-[470px] h-36 skew-y-[-6deg] bg-[#f6f9fc]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-14 lg:px-8 lg:pt-20">
          <div className="max-w-4xl">
            <p className="mb-7 inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-[13px] font-semibold text-[#635bff] shadow-sm ring-1 ring-[#0a2540]/10 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Who we are
            </p>
            <h1 className="text-[52px] font-bold leading-[1.02] text-[#0a2540] md:text-[76px] lg:text-[88px]">
              We deliver world-class human capital and IT services.
            </h1>
            <p className="mt-7 max-w-3xl text-[18px] leading-8 text-[#425466]">
              ConglomerateIT is a global IT services and consulting company
              built on Creative, Growth, Innovation, and Technology. We help
              enterprises transform faster, operate smarter, and stay secure in
              a digital-first world.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-[#635bff] px-5 py-3 text-[15px] font-semibold text-white shadow-lg shadow-[#635bff]/20 transition hover:bg-[#0a2540]"
              >
                Explore what we do <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#635bff] transition hover:text-[#0a2540]"
              >
                Contact us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-4">
            {companyStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[8px] bg-white p-6 shadow-sm ring-1 ring-[#0a2540]/8"
              >
                <p className="text-[38px] font-bold leading-none text-[#0a2540]">
                  {stat.value}
                </p>
                <p className="mt-3 text-[14px] font-medium text-[#697386]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-[15px] font-semibold text-[#635bff]">
                Our philosophy
              </p>
              <h2 className="mt-4 text-[42px] font-bold leading-[1.08] text-[#0a2540] md:text-[56px]">
                Purpose-driven transformation, delivered with discipline.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[8px] bg-[#f6f9fc] p-7 ring-1 ring-[#0a2540]/8">
                <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#697386]">
                  Mission
                </p>
                <h3 className="mt-3 text-[26px] font-bold text-[#0a2540]">
                  Accelerate progress
                </h3>
                <p className="mt-3 text-[16px] leading-7 text-[#425466]">
                  At ConglomerateIT, we accelerate progress by innovating
                  boldly, empowering women, transforming healthcare, and
                  creating real-world impact.
                </p>
              </div>
              <div className="rounded-[8px] bg-[#f6f9fc] p-7 ring-1 ring-[#0a2540]/8">
                <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#697386]">
                  Vision
                </p>
                <h3 className="mt-3 text-[26px] font-bold text-[#0a2540]">
                  Lead industry transformation
                </h3>
                <p className="mt-3 text-[16px] leading-7 text-[#425466]">
                  Our vision is to lead industry transformation through
                  innovation, excellence, and equality while empowering
                  businesses, uplifting communities, and improving lives.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-4">
            {cgitLetters.map((item) => (
              <div
                key={item.letter}
                className="rounded-[8px] border border-[#e6ebf1] bg-white p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#635bff] text-[18px] font-bold text-white">
                  {item.letter}
                </span>
                <h3 className="mt-5 text-[24px] font-bold text-[#0a2540]">
                  {item.word}
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-[#425466]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc] py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="text-[15px] font-semibold text-[#635bff]">
              Core values
            </p>
            <h2 className="mt-4 text-[42px] font-bold leading-[1.08] text-[#0a2540] md:text-[56px]">
              The foundation of innovation and excellence.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="rounded-[8px] bg-white p-7 shadow-sm ring-1 ring-[#0a2540]/8"
              >
                <value.icon className="h-6 w-6 text-[#635bff]" />
                <h3 className="mt-5 text-[26px] font-bold text-[#0a2540]">
                  {value.title}
                </h3>
                <p className="mt-3 text-[16px] leading-7 text-[#425466]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-[15px] font-semibold text-[#635bff]">
                Our journey
              </p>
              <h2 className="mt-4 text-[42px] font-bold leading-[1.08] text-[#0a2540] md:text-[56px]">
                From staffing roots to a diversified technology conglomerate.
              </h2>
              <p className="mt-5 text-[17px] leading-8 text-[#425466]">
                The legacy page tells a year-by-year story from 2014 through
                2024. The same milestones are preserved here in a cleaner,
                scannable timeline.
              </p>
            </div>

            <div className="space-y-3">
              {journey.map((item) => (
                <div
                  key={item.year}
                  className="grid gap-4 rounded-[8px] border border-[#e6ebf1] bg-white p-5 md:grid-cols-[88px_1fr]"
                >
                  <p className="text-[28px] font-bold leading-none text-[#635bff]">
                    {item.year}
                  </p>
                  <div>
                    <h3 className="text-[20px] font-bold text-[#0a2540]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-7 text-[#425466]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a2540] py-24 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(99,91,255,0.55),transparent_42%),linear-gradient(300deg,rgba(0,212,255,0.22),transparent_44%)]" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[15px] font-semibold text-[#00d4ff]">
                Culture
              </p>
              <h2 className="mt-4 text-[42px] font-bold leading-[1.08] md:text-[56px]">
                We do not just build tech. We build trust, collaboration, and shared momentum.
              </h2>
              <p className="mt-5 text-[17px] leading-8 text-white/70">
                ConglomerateIT is powered by technologists, thinkers, and doers
                across the US, UK, India, and Canada.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {culturePrinciples.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[8px] bg-white/10 p-6 ring-1 ring-white/15"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#00d4ff]" />
                  <h3 className="mt-5 text-[22px] font-bold">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-white/68">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc] py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-[15px] font-semibold text-[#635bff]">
                The future
              </p>
              <h2 className="mt-4 text-[42px] font-bold leading-[1.08] text-[#0a2540] md:text-[56px]">
                The future of technology is fast, fearless, and outcome-led.
              </h2>
              <p className="mt-5 text-[17px] leading-8 text-[#425466]">
                CGIT is building toward global expansion, GenAI, blockchain,
                smart automation, client-first delivery, and centers of
                excellence.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {futurePriorities.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[8px] bg-white p-6 shadow-sm ring-1 ring-[#0a2540]/8"
                >
                  <item.icon className="h-6 w-6 text-[#635bff]" />
                  <h3 className="mt-5 text-[22px] font-bold text-[#0a2540]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#425466]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-4">
            {offices.map((office) => (
              <div
                key={office.country}
                className="rounded-[8px] bg-white p-5 shadow-sm ring-1 ring-[#0a2540]/8"
              >
                <p className="text-[22px] font-bold text-[#0a2540]">
                  {office.country}
                </p>
                <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#697386]">
                  {office.label}
                </p>
                <p className="mt-3 text-[14px] leading-6 text-[#425466]">
                  {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="text-[42px] font-bold leading-[1.08] text-[#0a2540] md:text-[64px]">
            Let&apos;s build what&apos;s next, together.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-8 text-[#425466]">
            Work with ConglomerateIT to modernize technology, strengthen global
            delivery, hire specialized talent, and create measurable digital
            transformation.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0a2540] px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-[#635bff]"
          >
            Connect with us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
