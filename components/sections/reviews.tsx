'use client'

import { Star, Quote } from 'lucide-react'
import type { Locale } from '@/lib/translations'
import { getTranslation } from '@/lib/translations'

interface ReviewsProps {
  locale: Locale
}

export function Reviews({ locale }: ReviewsProps) {
  const t = getTranslation(locale)

  const reviews = [
    t.reviews.review1,
    t.reviews.review2,
    t.reviews.review3,
    t.reviews.review4,
    t.reviews.review5,
  ]

  return (
    <section id="reviews" className="py-12 bg-asphalt overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-warm-silver font-[family-name:var(--font-space-grotesk)] text-center">
          {t.reviews.title}
        </h2>
      </div>
      
      {/* Scrolling reviews */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-asphalt to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-asphalt to-transparent z-10" />
        
        <div className="flex gap-6 animate-scroll">
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-gunmetal border border-gunmetal/50 rounded p-6"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-rm-yellow text-rm-yellow" />
                ))}
              </div>
              <Quote className="w-6 h-6 text-rm-yellow/30 mb-2" />
              <p className="text-warm-silver text-sm leading-relaxed">
                &quot;{review}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
