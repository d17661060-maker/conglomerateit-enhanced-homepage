"use client";

import { Star } from "lucide-react";
import { reviews } from "@/lib/content";

export default function ReviewsCarousel() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[15px] font-semibold text-[#635bff] mb-4">
            Client Success Stories
          </p>
          <h2 className="text-[42px] font-bold leading-[1.08] text-[#0a2540] md:text-[56px]">
            Trusted by industry leaders worldwide
          </h2>
        </div>

        {/* Clockwise rotating carousel */}
        <div className="relative">
          {/* First rotating ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[600px] h-[600px] animate-spin-slow">
              {reviews.slice(0, 3).map((review, index) => {
                const angle = (index * 120); // 120 degrees apart for 3 items
                const radius = 250;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <div
                    key={review.name}
                    className="absolute w-80 bg-white rounded-xl shadow-lg p-6 border border-[#e6ebf1]"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      left: '50%',
                      top: '50%',
                      marginLeft: '-160px',
                      marginTop: '-120px'
                    }}
                  >
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#fbbf24] text-[#fbbf24]" />
                      ))}
                    </div>
                    <p className="text-[15px] leading-6 text-[#425466] mb-4 italic">
                      "{review.content}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#635bff] flex items-center justify-center text-white font-semibold text-sm">
                        {review.avatar}
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-[#0a2540]">{review.name}</p>
                        <p className="text-[12px] text-[#697386]">{review.role}, {review.company}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Second rotating ring (opposite direction) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[500px] h-[500px] animate-spin-slow-reverse">
              {reviews.slice(3, 6).map((review, index) => {
                const angle = (index * 120) + 60; // Offset by 60 degrees
                const radius = 200;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <div
                    key={review.name}
                    className="absolute w-72 bg-[#f6f9fc] rounded-xl shadow-lg p-6 border border-[#e6ebf1]"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      left: '50%',
                      top: '50%',
                      marginLeft: '-144px',
                      marginTop: '-108px'
                    }}
                  >
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#fbbf24] text-[#fbbf24]" />
                      ))}
                    </div>
                    <p className="text-[14px] leading-6 text-[#425466] mb-4 italic">
                      "{review.content}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#0a2540] flex items-center justify-center text-white font-semibold text-sm">
                        {review.avatar}
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-[#0a2540]">{review.name}</p>
                        <p className="text-[11px] text-[#697386]">{review.role}, {review.company}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Center content */}
          <div className="relative z-10 flex items-center justify-center h-[600px]">
            <div className="text-center bg-white rounded-2xl px-8 py-6 shadow-xl border border-[#e6ebf1]">
              <div className="mb-4">
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#fbbf24] text-[#fbbf24]" />
                  ))}
                </div>
                <p className="text-[24px] font-bold text-[#0a2540] mt-2">4.9/5</p>
              </div>
              <p className="text-[14px] font-semibold text-[#635bff]">Average Rating</p>
              <p className="text-[12px] text-[#697386] mt-1">Based on 112+ client reviews</p>
            </div>
          </div>
        </div>

        {/* Static reviews grid for mobile */}
        <div className="lg:hidden grid gap-4 mt-8">
          {reviews.map((review) => (
            <div key={review.name} className="bg-white rounded-xl shadow-lg p-6 border border-[#e6ebf1]">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#fbbf24] text-[#fbbf24]" />
                ))}
              </div>
              <p className="text-[15px] leading-6 text-[#425466] mb-4 italic">
                "{review.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#635bff] flex items-center justify-center text-white font-semibold text-sm">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#0a2540]">{review.name}</p>
                  <p className="text-[12px] text-[#697386]">{review.role}, {review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
