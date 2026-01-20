import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Maharaja Home Foods - Traditional Indian Sweets & Snacks',
  description:
    'Authentic homemade Indian sweets, savouries, pickles, ghee and honey. Experience the royal taste of traditional recipes passed down through generations.',
  keywords:
    'Indian sweets, laddus, pickles, ghee, honey, traditional snacks, homemade food, Draksharama',
  authors: [{ name: 'Maharaja Home Foods' }],

  // ✅ USING YOUR EXISTING LOGO IMAGE
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
  },

  openGraph: {
    title: 'Maharaja Home Foods - Traditional Indian Sweets & Snacks',
    description:
      'Authentic homemade Indian sweets, savouries, pickles, ghee and honey.',
    type: 'website',
    images: [
      {
        url: '/images/logo.jpg',
        width: 512,
        height: 512,
        alt: 'Maharaja Home Foods Logo',
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#6B1D1D',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased font-[var(--font-inter)]">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
