import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { servicePillars } from "@/lib/primary-pages";

export default function CleanServices() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Flexible solutions for every business model
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            From strategy to execution, our comprehensive service portfolio delivers measurable business impact through AI-first solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicePillars.map((service, index) => (
            <Link
              key={service.label}
              href={service.href}
              className="group block rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-200 hover:border-[#1e40af] hover:shadow-lg"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#1e40af]/10 mb-6">
                <service.icon className="h-6 w-6 text-[#1e40af]" />
              </div>

              {/* Service Label */}
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gray-500 mb-3">
                {service.label}
              </p>

              {/* Service Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              {/* Learn More */}
              <div className="flex items-center gap-2 text-[#1e40af] font-semibold transition-colors group-hover:text-[#0f172a]">
                Learn more <ChevronRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-[#1e40af] px-8 py-4 text-[16px] font-semibold text-white transition-colors hover:bg-[#0f172a]"
          >
            View all services <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
