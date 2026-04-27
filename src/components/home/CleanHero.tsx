import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function CleanHero() {
  return (
    <section className="relative bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          {/* Clean Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#1e40af]/10 px-4 py-2 text-[14px] font-semibold text-[#1e40af]">
            AI-First Global Delivery Partner
          </div>

          {/* Main Heading */}
          <h1 className="mt-8 text-5xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl">
            <span className="block">Transform your business with</span>
            <span className="block bg-gradient-to-r from-[#1e40af] to-[#dc2626] bg-clip-text text-transparent">
              tomorrow&apos;s technology, today
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
            Explore IT services, solutions, and innovation with ConglomerateIT to accelerate business growth through AI-first execution, global delivery, modern infrastructure, software engineering, and quality engineering.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#1e40af] px-8 py-4 text-[16px] font-semibold text-white transition-colors hover:bg-[#0f172a]"
            >
              Book consultation <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-8 py-4 text-[16px] font-semibold text-gray-900 transition-colors hover:border-gray-400"
            >
              Explore what we do <ChevronRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "4+", label: "Countries" },
              { value: "500+", label: "Projects" },
              { value: "12", label: "Years" },
              { value: "95%", label: "Retention" }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-gray-900">{stat.value}</div>
                <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
