'use client'

import { 
  Search, 
  Settings, 
  Wrench, 
  Gauge, 
  Cog, 
  Package, 
  AlertCircle 
} from 'lucide-react'
import type { Locale } from '@/lib/translations'
import { getTranslation } from '@/lib/translations'

interface ServicesProps {
  locale: Locale
}

export function Services({ locale }: ServicesProps) {
  const t = getTranslation(locale)

  const services = [
    { 
      icon: Search, 
      title: t.services.diagnostics, 
      description: t.services.diagnosticsDesc,
      accent: 'bg-rm-yellow/10 border-rm-yellow/20'
    },
    { 
      icon: Settings, 
      title: t.services.maintenance, 
      description: t.services.maintenanceDesc,
      accent: 'bg-turbo-gold/10 border-turbo-gold/20'
    },
    { 
      icon: Wrench, 
      title: t.services.repairs, 
      description: t.services.repairsDesc,
      accent: 'bg-rm-yellow/10 border-rm-yellow/20'
    },
    { 
      icon: Gauge, 
      title: t.services.turbo, 
      description: t.services.turboDesc,
      accent: 'bg-heat-red/10 border-heat-red/20'
    },
    { 
      icon: Cog, 
      title: t.services.gearbox, 
      description: t.services.gearboxDesc,
      accent: 'bg-turbo-gold/10 border-turbo-gold/20'
    },
    { 
      icon: Package, 
      title: t.services.parts, 
      description: t.services.partsDesc,
      accent: 'bg-rm-yellow/10 border-rm-yellow/20'
    },
    { 
      icon: AlertCircle, 
      title: t.services.emergency, 
      description: t.services.emergencyDesc,
      accent: 'bg-flame-orange/10 border-flame-orange/20'
    },
  ]

  return (
    <section id="services" className="py-20 bg-carbon-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-silver font-[family-name:var(--font-space-grotesk)] text-balance">
            {t.services.title}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-6 rounded border ${service.accent} hover:border-rm-yellow/40 transition-all duration-300`}
            >
              <div className="w-12 h-12 rounded bg-gunmetal flex items-center justify-center mb-4 group-hover:bg-rm-yellow/20 transition-colors">
                <service.icon className="w-6 h-6 text-rm-yellow" />
              </div>
              <h3 className="text-lg font-semibold text-warm-silver mb-2 font-[family-name:var(--font-space-grotesk)]">
                {service.title}
              </h3>
              <p className="text-steel-grey text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
