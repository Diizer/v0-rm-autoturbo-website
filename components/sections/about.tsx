'use client'

import Image from 'next/image'
import { Users, Award, Handshake } from 'lucide-react'
import type { Locale } from '@/lib/translations'
import { getTranslation } from '@/lib/translations'

interface AboutProps {
  locale: Locale
}

export function About({ locale }: AboutProps) {
  const t = getTranslation(locale)

  const values = [
    { icon: Award, label: 'Skill' },
    { icon: Handshake, label: 'Honesty' },
    { icon: Users, label: 'Personal Attention' },
  ]

  return (
    <section id="about" className="py-20 bg-asphalt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image/Logo */}
          <div className="mb-12 lg:mb-0">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gunmetal rounded-lg border border-rm-yellow/20" />
              <div className="absolute inset-4 flex items-center justify-center">
                <Image
                  src="/images/logo.jpg"
                  alt="RM AUTOTURBO"
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-20 h-20 border-t-2 border-r-2 border-rm-yellow/30" />
              <div className="absolute -bottom-2 -left-2 w-20 h-20 border-b-2 border-l-2 border-rm-yellow/30" />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-silver font-[family-name:var(--font-space-grotesk)] mb-6">
              {t.about.title}
            </h2>
            
            <p className="text-steel-grey text-lg leading-relaxed mb-8">
              {t.about.description}
            </p>

            {/* Values */}
            <div className="flex flex-wrap gap-4">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-gunmetal border border-rm-yellow/20 rounded"
                >
                  <value.icon className="w-5 h-5 text-rm-yellow" />
                  <span className="text-warm-silver font-medium">{value.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
