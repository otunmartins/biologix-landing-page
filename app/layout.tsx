import { Analytics } from '@vercel/analytics/next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-cormorant' })

export const metadata: Metadata = {
  title: 'Biologix — Agentic Biologic Formulation Discovery',
  description: 'Discover polymer excipients for protein biologics with physics-grounded screening, retrosynthesis and regulatory checks.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f5ef',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${manrope.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
