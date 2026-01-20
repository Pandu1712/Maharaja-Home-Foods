import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react'
import { businessInfo } from '@/lib/products'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-accent">
                <Image
                  src="/images/logo.jpg"
                  alt="Maharaja Home Foods"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-sans text-xl font-bold text-accent">Maharaja</h3>
                <p className="text-sm text-primary-foreground/80">Home Foods</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Authentic homemade Indian sweets, savouries, pickles, ghee and honey. 
              Experience the royal taste of traditional recipes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-lg font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Products', 'Gallery', 'Reviews', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sans text-lg font-semibold mb-4 text-accent">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <a href={`tel:${businessInfo.phone}`} className="text-sm text-primary-foreground/80 hover:text-accent">
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="text-sm text-primary-foreground/80 hover:text-accent break-all">
                  {businessInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  {businessInfo.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <a 
                  href={businessInfo.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 hover:text-accent"
                >
                  @maga_maharaja
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-sans text-lg font-semibold mb-4 text-accent">Business Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  <p className="font-medium">Monday - Friday</p>
                  <p>{businessInfo.hours.weekdays}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  <p className="font-medium">Saturday</p>
                  <p>{businessInfo.hours.saturday}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  <p className="font-medium">Sunday</p>
                  <p>{businessInfo.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              &copy; {new Date().getFullYear()} Maharaja Home Foods. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Made with love in Draksharama, Andhra Pradesh
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
