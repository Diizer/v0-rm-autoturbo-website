import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RM AUTOTURBO | Premium Auto Service in Andorra | Taller mecànic Andorra',
  description: 'Expert auto care, diagnostics, maintenance and performance work in Andorra. Skilled mechanics, clear explanations, trustworthy service. Taller mecànic de confiança a Andorra.',
  keywords: [
    'auto service Andorra',
    'mechanic Andorra',
    'car repair Andorra',
    'auto workshop Andorra',
    'taller mecánico Andorra',
    'mecánico Andorra',
    'taller mecànic Andorra',
    'garage automobile Andorre',
    'turbo repair Andorra',
    'car diagnostics Andorra',
  ],
  authors: [{ name: 'RM AUTOTURBO' }],
  openGraph: {
    title: 'RM AUTOTURBO | Premium Auto Service in Andorra',
    description: 'Expert auto care, diagnostics, maintenance and performance work in Andorra. Skilled mechanics, clear explanations, trustworthy service.',
    type: 'website',
    locale: 'en',
    alternateLocale: ['ca', 'es', 'fr'],
  },
}

export const viewport: Viewport = {
  themeColor: '#05070A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
