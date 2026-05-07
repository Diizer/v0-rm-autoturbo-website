'use client'

import { Button } from '@/components/ui/button'
import { MessageCircle, AlertTriangle, MapPin } from 'lucide-react'
import type { Locale } from '@/lib/translations'
import { getTranslation } from '@/lib/translations'

interface EmergencyProps {
  locale: Locale
}

export function Emergency({ locale }: EmergencyProps) {
  const t = getTranslation(locale)

  return (
    <section className="py-20 bg-carbon-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gunmetal border border-flame-orange/20 rounded-lg p-8 lg:p-12 text-center relative overflow-hidden">
          {/* Accent glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-flame-orange/10 rounded-full blur-3xl -translate-y-1/2" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-6">
              <AlertTriangle className="w-6 h-6 text-flame-orange" />
              <MapPin className="w-6 h-6 text-rm-yellow" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-warm-silver font-[family-name:var(--font-space-grotesk)] mb-4 text-balance">
              {t.emergency.title}
            </h2>
            
            <p className="text-steel-grey text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              {t.emergency.description}
            </p>

            <Button
              asChild
              size="lg"
              className="bg-flame-orange text-warm-silver hover:bg-heat-red font-bold mb-4"
            >
              <a href="https://wa.me/376000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t.cta.getHelp}
              </a>
            </Button>

            <p className="text-steel-grey/70 text-sm italic">
              {t.emergency.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
