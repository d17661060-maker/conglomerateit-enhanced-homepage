"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles, Zap, Globe, Shield, Cpu, TrendingUp } from "lucide-react";

export default function EnhancedHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stats, setStats] = useState({ countries: 0, projects: 0, years: 0, retention: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    // Animate stats on mount
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;
      
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          countries: Math.floor(4 * progress),
          projects: Math.floor(500 * progress),
          years: Math.floor(12 * progress),
          retention: Math.floor(95 * progress)
        });
        
        if (currentStep >= steps) {
          clearInterval(interval);
          setStats({ countries: 4, projects: 500, years: 12, retention: 95 });
        }
      }, increment);
    };
    
    setTimeout(animateStats, 500);
    
    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-red-600/20" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`
        }} />
        
        {/* Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl w-full">
          <div className="text-center">
            
            {/* Enhanced Title Section */}
            <div className="mt-8">
              {/* Pre-title */}
              <div className={`inline-block transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <div className="flex items-center gap-2 text-sm font-medium text-blue-300 uppercase tracking-wider">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
                  <span>Enterprise IT Solutions</span>
                  <div className="w-8 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className={`mt-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <span className="block text-3xl md:text-4xl lg:text-7xl font-bold leading-tight text-white">
                  Transform Your Business
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent animate-shimmer">
                  Business
                </span>
                <span className="block text-3xl md:text-4xl lg:text-7xl font-bold leading-tight text-white">
                  with Tomorrow's Technology
                </span>
                <span className="block text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-purple-400 via-red-400 to-orange-400 bg-clip-text text-transparent animate-shimmer" style={{ animationDelay: '1s' }}>
                  Technology
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white/90 mt-4">
                  Today
                </span>
              </h1>
            </div>

            {/* Enhanced Subheading */}
            <div className={`mt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="max-w-4xl mx-auto text-xl text-white/80 leading-relaxed">
                <span className="text-blue-300 font-semibold">Accelerate growth</span> through 
                <span className="text-purple-300 font-semibold"> AI-first execution</span>, 
                <span className="text-red-300 font-semibold"> global delivery</span>, and 
                <span className="text-orange-300 font-semibold"> cutting-edge engineering</span>
              </p>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-white/60">
                Trusted by 500+ enterprises across 4 countries with 95% client retention
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`mt-10 flex flex-wrap items-center justify-center gap-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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

            {/* Animated Stats */}
            <div className={`mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {[
                { value: stats.countries, label: "Countries", icon: Globe, color: "from-blue-400 to-blue-600" },
                { value: stats.projects, label: "Projects", icon: Cpu, color: "from-purple-400 to-purple-600" },
                { value: stats.years, label: "Years", icon: Zap, color: "from-red-400 to-red-600" },
                { value: stats.retention, label: "Retention", icon: Shield, color: "from-green-400 to-green-600" }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl"
                  style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`} />
                  <stat.icon className={`h-6 w-6 mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                  <div className="text-4xl font-bold text-white group-hover:text-white/90 transition-colors">
                    {stat.value}{stat.label === "Retention" ? "%" : "+"}
                  </div>
                  <div className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute top-20 left-10 animate-float">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <Cpu className="h-8 w-8 text-blue-400" />
              </div>
            </div>
            
            <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <Globe className="h-8 w-8 text-purple-400" />
              </div>
            </div>
            
            <div className="absolute bottom-20 left-1/3 animate-float" style={{ animationDelay: '4s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <Shield className="h-8 w-8 text-red-400" />
              </div>
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

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-20px) rotate(0deg); }
          75% { transform: translateY(-10px) rotate(-1deg); }
        }
        
        .animate-shimmer {
          background-size: 200% 200%;
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-1000 { animation-delay: 1000ms; }
      `}</style>
    </section>
  );
}
