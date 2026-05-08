'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/header'
import { Hero } from '@/components/sections/hero'
import { Reviews } from '@/components/sections/reviews'
import { Services } from '@/components/sections/services'
import { WhyChooseUs } from '@/components/sections/why-choose-us'
import { Process } from '@/components/sections/process'
import { Performance } from '@/components/sections/performance'
import { Emergency } from '@/components/sections/emergency'
import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/footer'
import type { Locale } from '@/lib/translations'

function getDefaultLocale(): Locale {
  if (typeof window === 'undefined') return 'es'
  
  const browserLang = navigator.language.toLowerCase()
  
  if (browserLang.startsWith('ca')) return 'ca'
  if (browserLang.startsWith('en')) return 'en'
  if (browserLang.startsWith('fr')) return 'fr'
  return 'es'
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>('es')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLocale(getDefaultLocale())
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by showing nothing until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-carbon-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-rm-yellow/30 border-t-rm-yellow rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-carbon-black">
      <Header locale={locale} onLocaleChange={setLocale} />
      <Hero locale={locale} />
      <Reviews locale={locale} />
      <Services locale={locale} />
      <WhyChooseUs locale={locale} />
      <Process locale={locale} />
      <Performance locale={locale} />
      <Emergency locale={locale} />
      <About locale={locale} />
      <Contact locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
