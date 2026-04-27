"use client";

import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { enhancedServices, serviceCategories } from "@/lib/enhanced-services";

export default function StableServices() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          {/* Pre-title */}
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-blue-600 uppercase tracking-wider">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
            <span>Services Overview</span>
            <div className="w-12 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
          </div>
          
          {/* Main Title */}
          <div className="mt-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-gray-900">Transform Data into</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                Business Intelligence
              </span>
            </h2>
          </div>
          
          {/* Enhanced Subtitle */}
          <div className="mt-8 max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed">
              <span className="text-blue-600 font-semibold">Define</span>, 
              <span className="text-purple-600 font-semibold"> Analyze</span>, 
              <span className="text-green-600 font-semibold"> Visualize</span>, 
              <span className="text-orange-600 font-semibold"> Explore</span>, and 
              <span className="text-red-600 font-semibold"> Transform</span> your data into actionable insights
            </p>
            <p className="mt-4 text-lg text-gray-500">
              From strategy to execution, our comprehensive service portfolio delivers measurable business impact through AI-first solutions
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {enhancedServices.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group"
            >
              <div className="relative h-full rounded-2xl bg-white p-8 border border-gray-200 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1">
                {/* Service Number */}
                <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 text-[14px] font-bold flex items-center justify-center shadow-md">
                  {service.id}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 mb-6">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>

                {/* Service Label */}
                <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gray-500 mb-3">
                  {service.label}
                </p>

                {/* Service Title */}
                <h3 className="text-[22px] font-bold leading-7 text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-[15px] leading-7 text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      <span className="text-[14px] text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-blue-600 font-semibold transition-colors group-hover:text-blue-700">
                  <span>Explore</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Categories Overview */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {serviceCategories.map((category, index) => (
            <div key={category.title} className="text-center p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.services.map((serviceId) => {
                  const service = enhancedServices.find(s => s.id === serviceId);
                  return service ? (
                    <span key={serviceId} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {service.label}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-8 py-4 text-[16px] font-semibold text-white shadow-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1"
          >
            <span>View All Services</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
