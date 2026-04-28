import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Globe2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  cgitLetters,
  companyStats,
  deliveryModels,
  industries,
  offices,
  servicePillars,
} from "@/lib/primary-pages";
import MovingReviews from "@/components/home/MovingReviews";
import EnhancedHero from "@/components/home/EnhancedHero";
import StableServices from "@/components/home/StableServices";

export const metadata: Metadata = {
  title: "Home",
  description:
    "ConglomerateIT drives digital transformation through AI-first IT services, global delivery, QA/QE, cloud infrastructure, software development, analytics, and agile delivery models.",
};

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <EnhancedHero />
      
      <StableServices />
      
      <section className="bg-[#0a2540] py-24 text-white">

        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-24 pt-12 lg:px-8 lg:pt-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-[15px] font-semibold text-[#3b82f6]">
              Powered by agility
            </p>
            <h2 className="mt-4 text-[42px] font-bold leading-[1.08] text-[#f8fafc] md:text-[56px]">
              Speed with precision for fast-moving digital businesses.
            </h2>
            <p className="mt-5 text-[17px] leading-8 text-white/80">
              At ConglomerateIT, we combine speed with precision to deliver
              innovative tech solutions tailored to your needs. Our agile team
              leverages cutting-edge technology to ensure rapid, high-quality
              results that keep you ahead of competition.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-[8px] bg-white/10 backdrop-blur-sm p-4 shadow-sm ring-1 ring-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <p className="text-[14px] font-semibold text-[#f8fafc] leading-tight">
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <MovingReviews />
      
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr]">
            <div>
              <p className="text-[15px] font-semibold text-[#635bff]">
                What we do
              </p>
              <h2 className="mt-4 max-w-xl text-[42px] font-bold leading-[1.08] text-[#0a2540] md:text-[56px]">
                Powering innovation with cutting-edge IT services and agile IT models.
              </h2>
              <p className="mt-5 text-[17px] leading-8 text-[#425466]">
                The original site presents six service pillars and six delivery
                models. Here they are reframed as a clearer buyer journey from
                strategy to execution.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {servicePillars.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className="group rounded-[8px] bg-[#f6f9fc] p-6 ring-1 ring-[#0a2540]/8 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_48px_rgba(50,50,93,0.12)]"
                >
                  <service.icon className="h-6 w-6 text-[#1e40af]" />
                  <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#697386]">
                    {service.label}
                  </p>
                  <h3 className="mt-2 text-[22px] font-bold leading-7 text-[#0f172a]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#425466]">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-[14px] font-semibold text-[#1e40af]">
                    Learn more <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a2540] py-24 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(99,91,255,0.55),transparent_42%),linear-gradient(300deg,rgba(0,212,255,0.24),transparent_46%)]" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-[15px] font-semibold text-[#3b82f6]">
                IT delivery models
              </p>
              <h2 className="mt-4 max-w-xl text-[42px] font-bold leading-[1.08] md:text-[56px]">
                Flexible models for global execution, cost optimization, and control.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {deliveryModels.map((model) => (
                <div
                  key={model.title}
                  className="rounded-[8px] bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur"
                >
                  <model.icon className="h-5 w-5 text-[#3b82f6]" />
                  <h3 className="mt-4 text-[20px] font-bold">{model.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {model.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-[14px] leading-6 text-white/72"
                      >
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#3b82f6]" />
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
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-[15px] font-semibold text-[#635bff]">
                Powered by agility
              </p>
              <h2 className="mt-4 text-[42px] font-bold leading-[1.08] text-[#0a2540] md:text-[56px]">
                Speed with precision for fast-moving digital businesses.
              </h2>
              <p className="mt-5 text-[17px] leading-8 text-[#425466]">
                At ConglomerateIT, we combine speed with precision to deliver
                innovative tech solutions tailored to your needs. Our agile team
                leverages cutting-edge technology to ensure rapid, high-quality
                results that keep you ahead of the competition.
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
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[15px] font-semibold text-[#635bff]">
                Global presence
              </p>
              <h2 className="mt-4 text-[42px] font-bold leading-[1.08] text-[#0a2540] md:text-[56px]">
                Serving customers across key global locations.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {offices.map((office) => (
                <div
                  key={office.country}
                  className="rounded-[8px] border border-[#e6ebf1] bg-white p-6"
                >
                  <Globe2 className="h-5 w-5 text-[#635bff]" />
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <h3 className="text-[22px] font-bold text-[#0a2540]">
                      {office.country}
                    </h3>
                    <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#697386]">
                      {office.label}
                    </span>
                  </div>
                  <p className="mt-3 text-[14px] leading-6 text-[#425466]">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid overflow-hidden rounded-[8px] bg-[#0a2540] text-white lg:grid-cols-[1fr_1fr]">
            <div className="p-8 md:p-10">
              <ShieldCheck className="h-7 w-7 text-[#3b82f6]" />
              <h3 className="mt-5 text-[32px] font-bold leading-tight text-white">
                Trusted by enterprises worldwide
              </h3>
              <p className="mt-4 text-[16px] leading-7 text-white/70">
                Security and compliance signals are preserved from the original
                site: SOC 2 compliant with AICPA service organization context
                and ISO 27001:2013 certified information security practices.
              </p>
            </div>
            <div className="grid border-t border-white/10 lg:grid-cols-2 lg:border-l lg:border-t-0">
              {["SOC 2 Compliant", "ISO 27001:2013 Certified"].map((item) => (
                <div key={item} className="p-8 ring-1 ring-white/10">
                  <p className="text-[26px] font-bold">{item}</p>
                  <p className="mt-2 text-[14px] text-white/60">
                    Security & compliance
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

            
      <section className="bg-[#f6f9fc] py-24">
        <div className="mx-auto max-w-5xl px-4 text-center lg:px-8">
          <h2 className="text-[42px] font-bold leading-[1.08] text-[#0f172a] md:text-[64px]">
            Let&apos;s start your experience with ConglomerateIT.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-8 text-[#425466]">
            Talk with our team about AI-first transformation, modern delivery
            models, engineering capacity, quality programs, or global scale.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-[#1e40af]"
          >
            Join us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
