'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, MessageCircle, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Locale } from '@/lib/translations'
import { getTranslation } from '@/lib/translations'

interface HeaderProps {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

const locales: Locale[] = ['ca', 'es', 'en', 'fr']

export function Header({ locale, onLocaleChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = getTranslation(locale)

  const navItems = [
    { href: '#services', label: t.nav.services },
    { href: '#performance', label: t.nav.performance },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-carbon-black/95 backdrop-blur-sm border-b border-gunmetal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="RM AUTOTURBO"
              width={48}
              height={48}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded"
            />
            <div className="hidden sm:block">
              <div className="text-rm-yellow font-bold text-lg lg:text-xl tracking-tight font-[family-name:var(--font-space-grotesk)]">
                RM AUTOTURBO
              </div>
              <div className="text-steel-grey text-[10px] lg:text-xs tracking-widest uppercase">
                {t.footer.tagline}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-warm-silver hover:text-rm-yellow transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 text-sm">
              {locales.map((loc, idx) => (
                <span key={loc} className="flex items-center">
                  <button
                    onClick={() => onLocaleChange(loc)}
                    className={`px-1.5 py-0.5 transition-colors ${
                      locale === loc
                        ? 'text-rm-yellow font-semibold'
                        : 'text-steel-grey hover:text-warm-silver'
                    }`}
                  >
                    {loc.toUpperCase()}
                  </button>
                  {idx < locales.length - 1 && (
                    <span className="text-gunmetal">|</span>
                  )}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-rm-yellow text-rm-yellow hover:bg-rm-yellow hover:text-carbon-black"
            >
              <a href="https://wa.me/376000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                {t.cta.whatsapp}
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-rm-yellow text-carbon-black hover:bg-turbo-gold font-semibold"
            >
              <a href="#contact">
                <Calendar className="w-4 h-4 mr-2" />
                {t.cta.book}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-warm-silver hover:text-rm-yellow transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-asphalt border-t border-gunmetal">
          <div className="px-4 py-4 space-y-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-warm-silver hover:text-rm-yellow transition-colors py-2 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 pt-2 border-t border-gunmetal">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => {
                    onLocaleChange(loc)
                    setMobileMenuOpen(false)
                  }}
                  className={`px-3 py-1.5 rounded text-sm transition-colors ${
                    locale === loc
                      ? 'bg-rm-yellow text-carbon-black font-semibold'
                      : 'bg-gunmetal text-steel-grey hover:text-warm-silver'
                  }`}
                >
                  {loc.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Mobile CTAs */}
            <div className="flex flex-col gap-2 pt-2">
              <Button
                asChild
                variant="outline"
                className="w-full border-rm-yellow text-rm-yellow hover:bg-rm-yellow hover:text-carbon-black"
              >
                <a href="https://wa.me/376000000" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t.cta.whatsapp}
                </a>
              </Button>
              <Button
                asChild
                className="w-full bg-rm-yellow text-carbon-black hover:bg-turbo-gold font-semibold"
              >
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  <Calendar className="w-4 h-4 mr-2" />
                  {t.cta.book}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
