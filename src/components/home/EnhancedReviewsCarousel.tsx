"use client";

import { useState, useEffect } from "react";
import { Star, Quote, TrendingUp, Users, Award } from "lucide-react";
import { reviews } from "@/lib/content";

export default function EnhancedReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextReview = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  const currentReview = reviews[currentIndex];

  return (
    <section className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#1e40af]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#dc2626]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#3b82f6]/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/80 backdrop-blur-md px-6 py-3 text-[14px] font-semibold text-[#1e40af] shadow-lg animate-bounce-in">
            <TrendingUp className="h-5 w-5" />
            <span>Client Success Stories</span>
            <Award className="h-5 w-5 animate-pulse" />
          </div>
          
          <h2 className="mt-6 text-[48px] font-bold leading-[1.08] text-[#0f172a] md:text-[64px] animate-scale-in">
            Trusted by <span className="bg-gradient-to-r from-[#1e40af] to-[#3b82f6] bg-clip-text text-transparent">Industry Leaders</span> Worldwide
          </h2>
          
          <p className="mt-6 max-w-3xl mx-auto text-[18px] leading-8 text-[#425466] animate-slide-in-left">
            Discover why <span className="font-semibold text-[#1e40af]">500+ companies</span> trust ConglomerateIT for their 
            <span className="font-semibold text-[#dc2626]"> digital transformation journey</span>
          </p>
        </div>

        {/* Main Review Display */}
        <div className="relative mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-3xl shadow-2xl p-10 border border-[#e2e8f0] transition-all duration-700">
              {/* Quote Icon */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#1e40af] rounded-full flex items-center justify-center shadow-lg animate-glow">
                <Quote className="h-6 w-6 text-white" />
              </div>

              {/* Review Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#fbbf24] text-[#fbbf24] animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                
                <blockquote className="text-[20px] leading-8 text-[#0f172a] italic font-medium animate-fade-in">
                  "{currentReview.content}"
                </blockquote>

                {/* Reviewer Info */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1e40af] to-[#3b82f6] flex items-center justify-center text-white text-[18px] font-bold shadow-lg animate-scale-in">
                    {currentReview.avatar}
                  </div>
                  <div>
                    <div className="text-[18px] font-bold text-[#0f172a]">{currentReview.name}</div>
                    <div className="text-[14px] text-[#dc2626]">{currentReview.role}</div>
                    <div className="text-[13px] text-[#425466]">{currentReview.company}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#1e40af] w-8 animate-pulse' 
                      : 'bg-[#e2e8f0] hover:bg-[#3b82f6] hover:scale-125'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Side Reviews Preview */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="space-y-4 opacity-60">
              {reviews.slice(currentIndex + 1, currentIndex + 3).map((review, index) => (
                <div
                  key={review.name}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/90"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-[#fbbf24] text-[#fbbf24]" />
                    ))}
                  </div>
                  <p className="text-[12px] text-[#425466] line-clamp-2">{review.content}</p>
                  <div className="text-[11px] font-semibold text-[#1e40af]">{review.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-[#1e40af] to-[#3b82f6] rounded-2xl p-8 text-white shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <Users className="h-8 w-8 mx-auto mb-3 text-white/80 group-hover:text-white transition-colors" />
              <div className="text-[32px] font-bold animate-scale-in">112+</div>
              <div className="text-[14px] text-white/80">Client Reviews</div>
            </div>
            <div className="group">
              <Star className="h-8 w-8 mx-auto mb-3 text-white/80 group-hover:text-white transition-colors" />
              <div className="text-[32px] font-bold animate-scale-in">4.9/5</div>
              <div className="text-[14px] text-white/80">Average Rating</div>
            </div>
            <div className="group">
              <TrendingUp className="h-8 w-8 mx-auto mb-3 text-white/80 group-hover:text-white transition-colors" />
              <div className="text-[32px] font-bold animate-scale-in">95%</div>
              <div className="text-[14px] text-white/80">Client Retention</div>
            </div>
            <div className="group">
              <Award className="h-8 w-8 mx-auto mb-3 text-white/80 group-hover:text-white transition-colors" />
              <div className="text-[32px] font-bold animate-scale-in">12</div>
              <div className="text-[14px] text-white/80">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Mobile Reviews Grid */}
        <div className="lg:hidden mt-16 grid gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="bg-white rounded-xl p-6 shadow-lg border border-[#e2e8f0]">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#fbbf24] text-[#fbbf24]" />
                ))}
              </div>
              <p className="text-[15px] leading-6 text-[#425466] mb-4 italic">{review.content}</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1e40af] to-[#3b82f6] flex items-center justify-center text-white text-[14px] font-bold">
                  {review.avatar}
                </div>
                <div>
                  <div className="text-[16px] font-bold text-[#0f172a]">{review.name}</div>
                  <div className="text-[13px] text-[#dc2626]">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
