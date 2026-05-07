'use client'

import { MessageSquare, Clock, Target, Heart } from 'lucide-react'
import type { Locale } from '@/lib/translations'
import { getTranslation } from '@/lib/translations'

interface WhyChooseUsProps {
  locale: Locale
}

export function WhyChooseUs({ locale }: WhyChooseUsProps) {
  const t = getTranslation(locale)

  const reasons = [
    {
      icon: MessageSquare,
      title: t.why.explain,
      description: t.why.explainDesc,
    },
    {
      icon: Clock,
      title: t.why.time,
      description: t.why.timeDesc,
    },
    {
      icon: Target,
      title: t.why.precision,
      description: t.why.precisionDesc,
    },
    {
      icon: Heart,
      title: t.why.people,
      description: t.why.peopleDesc,
    },
  ]

  return (
    <section className="py-20 bg-asphalt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-silver font-[family-name:var(--font-space-grotesk)] text-balance max-w-3xl mx-auto">
            {t.why.title}
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 rounded bg-gunmetal border border-rm-yellow/20 flex items-center justify-center mx-auto mb-6 group-hover:border-rm-yellow/50 group-hover:bg-rm-yellow/10 transition-all">
                <reason.icon className="w-8 h-8 text-rm-yellow" />
              </div>
              <h3 className="text-xl font-semibold text-rm-yellow mb-3 font-[family-name:var(--font-space-grotesk)]">
                {reason.title}
              </h3>
              <p className="text-steel-grey leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
