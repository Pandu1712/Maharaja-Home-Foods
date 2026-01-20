'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { businessInfo } from '@/lib/products'

export function StickyButtons() {
  const whatsappUrl = `https://wa.me/91${businessInfo.phone}?text=Hello! I'm interested in Maharaja Home Foods products.`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Phone Button */}
      <a
        href={`tel:${businessInfo.phone}`}
        className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  )
}
