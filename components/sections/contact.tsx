'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Calendar, MessageCircle, Upload, Send } from 'lucide-react'
import type { Locale } from '@/lib/translations'
import { getTranslation } from '@/lib/translations'

interface ContactProps {
  locale: Locale
}

export function Contact({ locale }: ContactProps) {
  const t = getTranslation(locale)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const languages = [
    { value: 'ca', label: 'Català' },
    { value: 'es', label: 'Español' },
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'Français' },
  ]

  return (
    <section id="contact" className="py-20 bg-carbon-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Final CTA Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-silver font-[family-name:var(--font-space-grotesk)] mb-4 text-balance">
            {t.finalCta.title}
          </h2>
          <p className="text-steel-grey text-lg max-w-2xl mx-auto">
            {t.finalCta.description}
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Form */}
          <div className="mb-12 lg:mb-0">
            <div className="bg-asphalt border border-gunmetal rounded-lg p-6 lg:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-rm-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-rm-yellow" />
                  </div>
                  <h3 className="text-2xl font-bold text-warm-silver mb-2 font-[family-name:var(--font-space-grotesk)]">
                    {locale === 'ca' ? 'Sol·licitud rebuda!' : 
                     locale === 'es' ? '¡Solicitud recibida!' :
                     locale === 'fr' ? 'Demande reçue!' : 'Request received!'}
                  </h3>
                  <p className="text-steel-grey">
                    {locale === 'ca' ? 'Et contactarem aviat.' : 
                     locale === 'es' ? 'Te contactaremos pronto.' :
                     locale === 'fr' ? 'Nous vous contacterons bientôt.' : 'We will contact you soon.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-steel-grey text-sm mb-1.5">{t.form.name}</label>
                    <Input 
                      required
                      className="bg-gunmetal border-gunmetal text-warm-silver placeholder:text-steel-grey/50 focus:border-rm-yellow focus:ring-rm-yellow"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-steel-grey text-sm mb-1.5">{t.form.phone}</label>
                    <Input 
                      required
                      type="tel"
                      className="bg-gunmetal border-gunmetal text-warm-silver placeholder:text-steel-grey/50 focus:border-rm-yellow focus:ring-rm-yellow"
                      placeholder="+376 000 000"
                    />
                  </div>

                  <div>
                    <label className="block text-steel-grey text-sm mb-1.5">{t.form.car}</label>
                    <Input 
                      required
                      className="bg-gunmetal border-gunmetal text-warm-silver placeholder:text-steel-grey/50 focus:border-rm-yellow focus:ring-rm-yellow"
                      placeholder="BMW 320d 2019"
                    />
                  </div>

                  <div>
                    <label className="block text-steel-grey text-sm mb-1.5">{t.form.problem}</label>
                    <textarea 
                      required
                      rows={3}
                      className="w-full rounded-md bg-gunmetal border border-gunmetal text-warm-silver placeholder:text-steel-grey/50 focus:border-rm-yellow focus:ring-rm-yellow px-3 py-2 text-sm resize-none"
                      placeholder={locale === 'en' ? 'Describe the issue or service needed...' : 
                                  locale === 'es' ? 'Describe el problema o servicio necesitado...' :
                                  locale === 'fr' ? 'Décrivez le problème ou le service nécessaire...' :
                                  'Descriu el problema o servei necessitat...'}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-steel-grey text-sm mb-1.5">{t.form.date}</label>
                      <Input 
                        type="date"
                        className="bg-gunmetal border-gunmetal text-warm-silver focus:border-rm-yellow focus:ring-rm-yellow"
                      />
                    </div>
                    <div>
                      <label className="block text-steel-grey text-sm mb-1.5">{t.form.language}</label>
                      <select 
                        defaultValue={locale}
                        className="w-full h-9 rounded-md bg-gunmetal border border-gunmetal text-warm-silver focus:border-rm-yellow focus:ring-rm-yellow px-3 text-sm"
                      >
                        {languages.map(lang => (
                          <option key={lang.value} value={lang.value}>{lang.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-steel-grey text-sm mb-1.5">{t.form.upload}</label>
                    <div className="border-2 border-dashed border-gunmetal rounded-md p-4 text-center hover:border-rm-yellow/30 transition-colors cursor-pointer">
                      <input type="file" className="hidden" id="file-upload" accept="image/*,video/*" />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <Upload className="w-6 h-6 text-steel-grey mx-auto mb-2" />
                        <span className="text-steel-grey text-sm">{t.form.upload}</span>
                      </label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-rm-yellow text-carbon-black hover:bg-turbo-gold font-bold py-6"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-carbon-black/30 border-t-carbon-black rounded-full animate-spin" />
                        {locale === 'en' ? 'Sending...' : 
                         locale === 'es' ? 'Enviando...' :
                         locale === 'fr' ? 'Envoi...' : 'Enviant...'}
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        {t.form.submit}
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* WhatsApp Alternative */}
          <div className="flex flex-col justify-center">
            <div className="bg-gunmetal/50 border border-rm-yellow/20 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-rm-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-rm-yellow" />
              </div>
              <h3 className="text-2xl font-bold text-warm-silver mb-3 font-[family-name:var(--font-space-grotesk)]">
                {locale === 'en' ? 'Prefer WhatsApp?' : 
                 locale === 'es' ? '¿Prefieres WhatsApp?' :
                 locale === 'fr' ? 'Préférez WhatsApp?' : 'Prefereixes WhatsApp?'}
              </h3>
              <p className="text-steel-grey mb-6">
                {locale === 'en' ? 'Send us a message and we\'ll respond quickly.' : 
                 locale === 'es' ? 'Envíanos un mensaje y responderemos rápido.' :
                 locale === 'fr' ? 'Envoyez-nous un message et nous répondrons rapidement.' :
                 'Envia\'ns un missatge i respondrem ràpid.'}
              </p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-rm-yellow text-rm-yellow hover:bg-rm-yellow hover:text-carbon-black font-bold"
              >
                <a href="https://wa.me/376000000" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp RM AUTOTURBO
                </a>
              </Button>
            </div>

            {/* Quick info */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-asphalt/50 rounded p-4">
                <p className="text-steel-grey text-sm mb-1">
                  {locale === 'en' ? 'Phone' : 
                   locale === 'es' ? 'Teléfono' :
                   locale === 'fr' ? 'Téléphone' : 'Telèfon'}
                </p>
                <p className="text-warm-silver font-semibold">+376 000 000</p>
              </div>
              <div className="bg-asphalt/50 rounded p-4">
                <p className="text-steel-grey text-sm mb-1">
                  {locale === 'en' ? 'Location' : 
                   locale === 'es' ? 'Ubicación' :
                   locale === 'fr' ? 'Emplacement' : 'Ubicació'}
                </p>
                <p className="text-warm-silver font-semibold">Andorra la Vella</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
