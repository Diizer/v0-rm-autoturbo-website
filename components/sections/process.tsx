'use client'

import type { Locale } from '@/lib/translations'
import { getTranslation } from '@/lib/translations'

interface ProcessProps {
  locale: Locale
}

export function Process({ locale }: ProcessProps) {
  const t = getTranslation(locale)

  const steps = [
    t.process.step1,
    t.process.step2,
    t.process.step3,
    t.process.step4,
    t.process.step5,
  ]

  return (
    <section className="py-20 bg-carbon-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-silver font-[family-name:var(--font-space-grotesk)]">
            {t.process.title}
          </h2>
        </div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gunmetal" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step number */}
                <div className="w-16 h-16 rounded-full bg-gunmetal border-2 border-rm-yellow flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-rm-yellow font-bold text-xl font-[family-name:var(--font-space-grotesk)]">
                    {index + 1}
                  </span>
                </div>
                
                {/* Step text */}
                <p className="text-warm-silver text-sm lg:text-base leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
