'use client'

import { Button } from '@/components/ui/button'
import { MessageCircle, Calendar, Star, Zap, Wrench, Clock, AlertTriangle } from 'lucide-react'
import type { Locale } from '@/lib/translations'
import { getTranslation } from '@/lib/translations'

interface HeroProps {
  locale: Locale
}

export function Hero({ locale }: HeroProps) {
  const t = getTranslation(locale)

  const badges = [
    { icon: Star, label: t.hero.badge1 },
    { icon: Zap, label: t.hero.badge2 },
    { icon: Wrench, label: t.hero.badge3 },
    { icon: Clock, label: t.hero.badge4 },
    { icon: AlertTriangle, label: t.hero.badge5 },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-carbon-black">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-black via-carbon-black/90 to-carbon-black" />
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />
        {/* Yellow accent glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rm-yellow/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Main content */}
        <div className="space-y-8">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-warm-silver font-[family-name:var(--font-space-grotesk)] leading-tight text-balance">
            {t.hero.headline.split('Andorra').map((part, i) => (
              <span key={i}>
                {part}
                {i === 0 && <span className="text-rm-yellow">Andorra</span>}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-steel-grey max-w-3xl mx-auto leading-relaxed text-pretty">
            {t.hero.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="bg-rm-yellow text-carbon-black hover:bg-turbo-gold font-bold text-lg px-8 py-6"
            >
              <a href="#contact">
                <Calendar className="w-5 h-5 mr-2" />
                {t.cta.bookVisit}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-rm-yellow text-rm-yellow hover:bg-rm-yellow hover:text-carbon-black font-bold text-lg px-8 py-6"
            >
              <a href="https://wa.me/376000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t.cta.whatsappUs}
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="pt-12">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-asphalt/80 border border-gunmetal rounded"
                >
                  <badge.icon className="w-4 h-4 text-rm-yellow shrink-0" />
                  <span className="text-warm-silver text-sm whitespace-nowrap">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-steel-grey flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-rm-yellow rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
