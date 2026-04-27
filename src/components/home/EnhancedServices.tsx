"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight, Zap, Shield, Cpu, Globe } from "lucide-react";
import { servicePillars } from "@/lib/primary-pages";

export default function EnhancedServices() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-6 py-3 text-[14px] font-semibold text-blue-600 border border-blue-200 backdrop-blur-sm">
            <Zap className="h-5 w-5" />
            <span>Our Services</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
          
          <h2 className="mt-8 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            <span className="block">Flexible Solutions for</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
              Every Business Model
            </span>
          </h2>
          
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            From strategy to execution, our comprehensive service portfolio delivers 
            <span className="font-semibold text-blue-600"> measurable business impact</span> through 
            <span className="font-semibold text-purple-600"> AI-first solutions</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicePillars.map((service, index) => (
            <Link
              key={service.label}
              href={service.href}
              className="group relative"
              onMouseEnter={() => setHoveredService(service.label)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className={`
                relative h-full rounded-2xl p-8 transition-all duration-500 transform
                ${hoveredService === service.label 
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white scale-105 shadow-2xl shadow-blue-500/30 -translate-y-2' 
                  : 'bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xl'
                }
              `}>
                {/* Hover Effect Overlay */}
                <div className={`
                  absolute inset-0 rounded-2xl transition-opacity duration-300
                  ${hoveredService === service.label ? 'opacity-100' : 'opacity-0'}
                `}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl" />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Icon with Animation */}
                  <div className={`
                    inline-flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-500
                    ${hoveredService === service.label 
                      ? 'bg-white/20 scale-110 rotate-6' 
                      : 'bg-gradient-to-br from-blue-100 to-purple-100'
                    }
                  `}>
                    <service.icon className={`
                      h-8 w-8 transition-all duration-500
                      ${hoveredService === service.label ? 'text-white scale-110' : 'text-blue-600'}
                    `} />
                  </div>

                  {/* Service Label */}
                  <p className={`
                    mt-6 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-500
                    ${hoveredService === service.label ? 'text-white/90' : 'text-gray-500'}
                  `}>
                    {service.label}
                  </p>

                  {/* Service Title */}
                  <h3 className={`
                    mt-3 text-[22px] font-bold leading-7 transition-colors duration-500
                    ${hoveredService === service.label ? 'text-white' : 'text-gray-900'}
                  `}>
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className={`
                    mt-4 text-[15px] leading-7 transition-colors duration-500
                    ${hoveredService === service.label ? 'text-white/80' : 'text-gray-600'}
                  `}>
                    {service.description}
                  </p>

                  {/* Service Items on Hover */}
                  <div className={`
                    mt-6 space-y-2 transition-all duration-500 transform origin-top
                    ${hoveredService === service.label ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95'}
                  `}>
                    {service.items.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                        <span className="text-[14px] text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className={`
                    mt-6 flex items-center gap-2 transition-all duration-500
                    ${hoveredService === service.label ? 'opacity-100' : 'opacity-0'}
                  `}>
                    <span className="text-[14px] font-semibold text-white">Explore</span>
                    <ChevronRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Card Number */}
                <div className={`
                  absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white text-[12px] font-bold flex items-center justify-center shadow-lg transition-all duration-500
                  ${hoveredService === service.label ? 'scale-110 shadow-blue-500/40' : ''}
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
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gray-900 to-gray-700 px-8 py-4 text-[16px] font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:shadow-blue-500/20"
          >
            <span className="relative z-10">View All Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            <ChevronRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <Cpu className="h-6 w-6 text-blue-400" />
          </div>
        </div>
        
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <Globe className="h-6 w-6 text-purple-400" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-20px) rotate(0deg); }
          75% { transform: translateY(-10px) rotate(-1deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
