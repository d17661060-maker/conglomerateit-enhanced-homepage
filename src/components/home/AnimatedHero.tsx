"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles, Zap, Globe, Shield, Cpu } from "lucide-react";

export default function AnimatedHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 min-h-[100vh] flex items-center">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#1e40af_0%,#0f172a_50%,#dc2626_100%)] opacity-90" />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float-delayed"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
        
        {/* Glowing Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#3b82f6]/20 rounded-full blur-3xl animate-glow" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-[#dc2626]/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#1e40af]/15 rounded-full blur-3xl animate-glow" style={{ animationDelay: '4s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          {/* Floating Badge */}
          <div className={`inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-6 py-3 text-[14px] font-semibold text-[#1e40af] shadow-lg ring-1 ring-[#1e40af]/20 animate-slide-in-left ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Sparkles className="h-5 w-5 animate-spin-slow" />
            <span className="bg-gradient-to-r from-[#1e40af] to-[#dc2626] bg-clip-text text-transparent">
              AI-First Global Delivery Partner
            </span>
          </div>

          {/* Main Heading */}
          <h1 className={`mt-8 max-w-5xl mx-auto text-[56px] font-bold leading-[1.02] text-[#f8fafc] md:text-[72px] lg:text-[88px] animate-bounce-in ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="block">
              Transform Your Business with
            </span>
            <span className="block bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#dc2626] bg-clip-text text-transparent animate-shimmer">
              Tomorrow's Technology, Today
            </span>
          </h1>

          {/* Subheading */}
          <p className={`mt-6 max-w-3xl mx-auto text-[20px] leading-8 text-white/90 animate-slide-in-right ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ animationDelay: '0.3s' }}>
            Accelerate digital transformation with AI-powered solutions, 
            <span className="font-semibold text-white"> cutting-edge engineering</span>, and 
            <span className="font-semibold text-[#60a5fa]"> global delivery excellence</span>
          </p>

          {/* Interactive Stats */}
          <div className={`mt-10 grid grid-cols-2 gap-6 md:grid-cols-4 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ animationDelay: '0.6s' }}>
            {[
              { value: "4+", label: "Countries", icon: Globe },
              { value: "500+", label: "Projects", icon: Cpu },
              { value: "12", label: "Years", icon: Zap },
              { value: "95%", label: "Retention", icon: Shield }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="group relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-cgit-glow"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <stat.icon className="h-6 w-6 text-[#60a5fa] mb-3 group-hover:text-[#3b82f6] transition-colors" />
                <div className="text-[36px] font-bold text-white group-hover:text-[#f8fafc] transition-colors">
                  {stat.value}
                </div>
                <div className="text-[13px] text-white/70 group-hover:text-white/90 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={`mt-12 flex flex-wrap items-center justify-center gap-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '1.2s' }}>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#1e40af] to-[#3b82f6] px-8 py-4 text-[16px] font-semibold text-white shadow-2xl transition-all duration-300 hover:shadow-cgit-glow hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Zap className="h-5 w-5" />
                Start Your Transformation
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#dc2626] to-[#1e40af] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-[16px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:scale-105"
            >
              Explore Our Solutions
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Floating Tech Icons */}
          <div className="absolute top-20 left-10 animate-float">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <Cpu className="h-8 w-8 text-[#60a5fa]" />
            </div>
          </div>
          
          <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <Globe className="h-8 w-8 text-[#dc2626]" />
            </div>
          </div>
          
          <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <Shield className="h-8 w-8 text-[#1e40af]" />
            </div>
          </div>
        </div>
      </div>

      {/* Mouse Follower Effect */}
      <div
        className="pointer-events-none fixed z-50 w-6 h-6 bg-[#60a5fa]/30 rounded-full blur-sm transition-all duration-100"
        style={{
          left: `${mousePosition.x - 12}px`,
          top: `${mousePosition.y - 12}px`,
        }}
      />
    </section>
  );
}
