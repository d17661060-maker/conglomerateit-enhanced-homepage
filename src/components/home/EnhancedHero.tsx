"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Zap, Globe, Shield, Cpu, TrendingUp } from "lucide-react";

export default function EnhancedHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-red-600/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl w-full">
          <div className="text-center">
            {/* Pre-title */}
            <div className={`inline-block transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
              <div className="flex items-center gap-2 text-sm font-medium text-blue-300 uppercase tracking-wider">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
                <span>Enterprise IT Solutions</span>
                <div className="w-8 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="mt-8">
              <h1 className={`mt-6 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <span className="block text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                  Transform Your
                </span>
                <span className="block text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent">
                  Business
                </span>
                <span className="block text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                  with Tomorrow&apos;s
                </span>
                <span className="block text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-purple-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                  Technology
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white/90 mt-4">
                  Today
                </span>
              </h1>
            </div>

            {/* Subheading */}
            <div className={`mt-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="max-w-4xl mx-auto text-xl text-white/80 leading-relaxed">
                <span className="text-blue-300 font-semibold">Accelerate growth</span> through{" "}
                <span className="text-purple-300 font-semibold"> AI-first execution</span>,{" "}
                <span className="text-red-300 font-semibold"> global delivery</span>, and{" "}
                <span className="text-orange-300 font-semibold"> cutting-edge engineering</span>
              </p>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-white/60">
                Trusted by 500+ enterprises across 4 countries with 95% client retention
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`mt-10 flex flex-wrap items-center justify-center gap-6 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-[16px] font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Zap className="h-5 w-5" />
                  Start Your Transformation
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-full border-2 border-white/30 px-8 py-4 text-[16px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:scale-105"
              >
                <TrendingUp className="h-5 w-5" />
                Explore Our Solutions
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className={`mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {[
                { value: "4+", label: "Countries", icon: Globe, color: "from-blue-400 to-blue-600" },
                { value: "500+", label: "Projects", icon: Cpu, color: "from-purple-400 to-purple-600" },
                { value: "12+", label: "Years", icon: Zap, color: "from-red-400 to-red-600" },
                { value: "95%", label: "Retention", icon: Shield, color: "from-green-400 to-green-600" }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl"
                  style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`} />
                  <stat.icon className={`h-6 w-6 mb-3 text-white/70`} />
                  <div className="text-4xl font-bold text-white group-hover:text-white/90 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mouse Follower Effect */}
      <div
        className="pointer-events-none fixed z-50 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm transition-all duration-100"
        style={{
          left: `${mousePosition.x - 12}px`,
          top: `${mousePosition.y - 12}px`,
        }}
      />
    </section>
  );
}
