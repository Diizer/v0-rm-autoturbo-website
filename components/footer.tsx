'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Clock, MessageCircle, Instagram, Map } from 'lucide-react'
import type { Locale } from '@/lib/translations'
import { getTranslation } from '@/lib/translations'

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const t = getTranslation(locale)

  const navItems = [
    { href: '#services', label: t.nav.services },
    { href: '#performance', label: t.nav.performance },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <footer className="bg-asphalt border-t border-gunmetal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="RM AUTOTURBO"
                width={48}
                height={48}
                className="w-12 h-12 rounded"
              />
              <div>
                <div className="text-rm-yellow font-bold text-lg tracking-tight font-[family-name:var(--font-space-grotesk)]">
                  RM AUTOTURBO
                </div>
                <div className="text-steel-grey text-xs tracking-widest uppercase">
                  {t.footer.tagline}
                </div>
              </div>
            </Link>
            <p className="text-steel-grey text-sm leading-relaxed">
              {locale === 'en' ? 'Premium auto care in Andorra, built on trust.' : 
               locale === 'es' ? 'Cuidado premium del auto en Andorra, construido sobre confianza.' :
               locale === 'fr' ? 'Entretien auto premium en Andorre, construit sur la confiance.' :
               'Cura premium de l\'auto a Andorra, construïda sobre confiança.'}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-warm-silver font-semibold mb-4 font-[family-name:var(--font-space-grotesk)]">
              {t.nav.services}
            </h4>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-steel-grey hover:text-rm-yellow transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-warm-silver font-semibold mb-4 font-[family-name:var(--font-space-grotesk)]">
              {t.nav.contact}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rm-yellow shrink-0 mt-0.5" />
                <div>
                  <p className="text-steel-grey text-sm">{t.footer.address}</p>
                  <p className="text-warm-silver text-sm">Andorra la Vella, Andorra</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rm-yellow shrink-0" />
                <a href="tel:+376000000" className="text-warm-silver text-sm hover:text-rm-yellow transition-colors">
                  +376 000 000
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-rm-yellow shrink-0 mt-0.5" />
                <div>
                  <p className="text-steel-grey text-sm">{t.footer.hours}</p>
                  <p className="text-warm-silver text-sm">{t.footer.weekdays}</p>
                  <p className="text-warm-silver text-sm">{t.footer.saturday}</p>
                  <p className="text-steel-grey text-sm">{t.footer.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Links */}
          <div>
            <h4 className="text-warm-silver font-semibold mb-4 font-[family-name:var(--font-space-grotesk)]">
              {locale === 'en' ? 'Connect' : 
               locale === 'es' ? 'Conecta' :
               locale === 'fr' ? 'Connecter' : 'Connecta'}
            </h4>
            <div className="flex gap-3 mb-6">
              <a 
                href="https://wa.me/376000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gunmetal rounded flex items-center justify-center hover:bg-rm-yellow/20 transition-colors group"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-steel-grey group-hover:text-rm-yellow" />
              </a>
              <a 
                href="https://instagram.com/rmautoturbo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gunmetal rounded flex items-center justify-center hover:bg-rm-yellow/20 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-steel-grey group-hover:text-rm-yellow" />
              </a>
              <a 
                href="https://maps.google.com/?q=Andorra+la+Vella" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gunmetal rounded flex items-center justify-center hover:bg-rm-yellow/20 transition-colors group"
                aria-label="Google Maps"
              >
                <Map className="w-5 h-5 text-steel-grey group-hover:text-rm-yellow" />
              </a>
            </div>

            {/* Languages */}
            <p className="text-steel-grey text-sm mb-2">
              {locale === 'en' ? 'Languages' : 
               locale === 'es' ? 'Idiomas' :
               locale === 'fr' ? 'Langues' : 'Idiomes'}
            </p>
            <p className="text-warm-silver text-sm">
              Català · Español · English · Français
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gunmetal flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-steel-grey text-sm">
            {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-steel-grey hover:text-rm-yellow text-sm transition-colors">
              {t.footer.legal}
            </Link>
            <span className="text-gunmetal">|</span>
            <Link href="#" className="text-steel-grey hover:text-rm-yellow text-sm transition-colors">
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
