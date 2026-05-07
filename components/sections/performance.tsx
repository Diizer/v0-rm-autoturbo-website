'use client'

import { Button } from '@/components/ui/button'
import { MessageCircle, Gauge, Cpu, Thermometer, Car, Shield, Wrench } from 'lucide-react'
import type { Locale } from '@/lib/translations'
import { getTranslation } from '@/lib/translations'

interface PerformanceProps {
  locale: Locale
}

export function Performance({ locale }: PerformanceProps) {
  const t = getTranslation(locale)

  const performanceItems = [
    { icon: Gauge, label: t.performance.turboSystems },
    { icon: Cpu, label: t.performance.reprogramming },
    { icon: Thermometer, label: t.performance.cooling },
    { icon: Car, label: t.performance.suspension },
    { icon: Shield, label: t.performance.reliability },
    { icon: Wrench, label: t.performance.custom },
  ]

  return (
    <section id="performance" className="py-20 bg-asphalt relative overflow-hidden">
      {/* Subtle red/orange accent glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-heat-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-flame-orange/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-silver font-[family-name:var(--font-space-grotesk)] mb-6 text-balance">
              {t.performance.title}
            </h2>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {performanceItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gunmetal/50 border border-heat-red/10 rounded hover:border-heat-red/30 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-flame-orange shrink-0" />
                  <span className="text-warm-silver text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-heat-red text-warm-silver hover:bg-flame-orange font-bold"
            >
              <a href="https://wa.me/376000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t.cta.discuss}
              </a>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gunmetal rounded border border-heat-red/20 flex items-center justify-center overflow-hidden">
              {/* Turbo graphic placeholder */}
              <div className="relative w-3/4 h-3/4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 border-4 border-steel-grey/30 rounded-full flex items-center justify-center animate-spin-slow">
                    <div className="w-32 h-32 border-4 border-rm-yellow/50 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-heat-red/20 rounded-full flex items-center justify-center">
                        <Gauge className="w-8 h-8 text-rm-yellow" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Heat effect lines */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-t from-flame-orange/0 to-flame-orange/50 blur-sm" />
                <div className="absolute top-4 left-1/3 w-1 h-8 bg-gradient-to-t from-heat-red/0 to-heat-red/50 blur-sm" />
                <div className="absolute top-8 right-1/3 w-1 h-10 bg-gradient-to-t from-flame-orange/0 to-flame-orange/50 blur-sm" />
              </div>
            </div>
          </div>
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
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
