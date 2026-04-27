"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { servicePillars } from "@/lib/primary-pages";

export default function AnimatedServiceCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af]/5 via-transparent to-[#dc2626]/5" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59,130,246,0.1) 0%, transparent 50%), 
                       radial-gradient(circle at 80% 80%, rgba(220,38,38,0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#1e40af]/10 px-4 py-2 text-[14px] font-semibold text-[#1e40af] backdrop-blur-sm animate-pulse">
            <span className="w-2 h-2 bg-[#1e40af] rounded-full animate-ping" />
            What We Do
          </div>
          
          <h2 className="mt-6 text-[48px] font-bold leading-[1.08] text-[#0f172a] md:text-[64px] animate-scale-in">
            <span className="block bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#dc2626] bg-clip-text text-transparent">
              Powering Innovation with
            </span>
            <span className="block text-[#60a5fa]">Cutting-Edge IT Services</span>
          </h2>
          
          <p className="mt-6 max-w-3xl mx-auto text-[18px] leading-8 text-[#425466] animate-slide-in-left">
            From strategy to execution, our comprehensive service portfolio delivers 
            <span className="font-semibold text-[#1e40af]"> measurable business impact</span> through 
            <span className="font-semibold text-[#dc2626]"> AI-first solutions</span>
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {servicePillars.map((service, index) => (
            <Link
              key={service.label}
              href={service.href}
              className="group relative"
              onMouseEnter={() => setHoveredCard(service.label)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`
                relative h-full rounded-2xl p-8 transition-all duration-500 transform
                ${hoveredCard === service.label 
                  ? 'bg-gradient-to-br from-[#1e40af] to-[#3b82f6] text-white scale-105 shadow-2xl shadow-[#1e40af]/30 -translate-y-2' 
                  : 'bg-white border border-[#e2e8f0] hover:border-[#1e40af]/30 hover:shadow-xl'
                }
              `}>
                {/* Hover Effect Overlay */}
                <div className={`
                  absolute inset-0 rounded-2xl transition-opacity duration-300
                  ${hoveredCard === service.label ? 'opacity-100' : 'opacity-0'}
                `}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af]/20 to-[#dc2626]/20 rounded-2xl" />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Icon with Animation */}
                  <div className={`
                    inline-flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-500
                    ${hoveredCard === service.label 
                      ? 'bg-white/20 scale-110 rotate-6' 
                      : 'bg-[#1e40af]/10'
                    }
                  `}>
                    <service.icon className={`
                      h-8 w-8 transition-all duration-500
                      ${hoveredCard === service.label ? 'text-white scale-110' : 'text-[#1e40af]'}
                    `} />
                  </div>

                  {/* Service Label */}
                  <p className={`
                    mt-6 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-500
                    ${hoveredCard === service.label ? 'text-white/90' : 'text-[#697386]'}
                  `}>
                    {service.label}
                  </p>

                  {/* Service Title */}
                  <h3 className={`
                    mt-3 text-[22px] font-bold leading-7 transition-colors duration-500
                    ${hoveredCard === service.label ? 'text-white' : 'text-[#0f172a]'}
                  `}>
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className={`
                    mt-4 text-[15px] leading-7 transition-colors duration-500
                    ${hoveredCard === service.label ? 'text-white/80' : 'text-[#425466]'}
                  `}>
                    {service.description}
                  </p>

                  {/* Service Items on Hover */}
                  <div className={`
                    mt-6 space-y-2 transition-all duration-500 transform origin-top
                    ${hoveredCard === service.label ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95'}
                  `}>
                    {service.items.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-white/80 flex-shrink-0" />
                        <span className="text-[14px] text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className={`
                    mt-6 flex items-center gap-2 transition-all duration-500
                    ${hoveredCard === service.label ? 'opacity-100' : 'opacity-0'}
                  `}>
                    <span className="text-[14px] font-semibold text-white">Explore</span>
                    <ChevronRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Card Number */}
                <div className={`
                  absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-[#1e40af] to-[#dc2626] text-white text-[12px] font-bold flex items-center justify-center shadow-lg transition-all duration-500
                  ${hoveredCard === service.label ? 'scale-110 shadow-[#1e40af]/40' : ''}
                `}>
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0f172a] to-[#1e40af] px-8 py-4 text-[16px] font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:shadow-[#1e40af]/30"
          >
            <span className="relative z-10">View All Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#dc2626] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </Link>
        </div>
      </div>
    </section>
  );
}
