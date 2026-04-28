"use client";

import { Star } from "lucide-react";
import { reviews } from "@/lib/content";

export default function MovingReviews() {
  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Trusted by industry leaders worldwide
          </p>
        </div>

        {/* Moving Reviews Container */}
        <div className="relative">
          {/* First Row - Moving Right to Left */}
          <div className="flex animate-scroll-left">
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="flex-shrink-0 w-80 mx-8 bg-white rounded-xl shadow-lg p-6 border border-gray-200"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Review Content */}
                <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">
                  {review.content}
                </p>
                
                {/* Reviewer Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1e40af] to-[#3b82f6] flex items-center justify-center text-white text-sm font-bold">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-600">{review.role}, {review.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - Moving Left to Right (opposite direction) */}
          <div className="flex animate-scroll-right mt-12">
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={`${review.name}-reverse-${index}`}
                className="flex-shrink-0 w-80 mx-8 bg-white rounded-xl shadow-lg p-6 border border-gray-200"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Review Content */}
                <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">
                  {review.content}
                </p>
                
                {/* Reviewer Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#dc2626] to-[#1e40af] flex items-center justify-center text-white text-sm font-bold">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-600">{review.role}, {review.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 rounded-full bg-white px-8 py-4 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#1e40af]">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#dc2626]">112+</div>
              <div className="text-sm text-gray-600">Client Reviews</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#1e40af]">95%</div>
              <div className="text-sm text-gray-600">Client Retention</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }

        /* Pause animation on hover */
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
