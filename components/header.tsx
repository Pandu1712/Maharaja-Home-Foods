'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'
import { useCartStore } from '@/lib/cart-store'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const itemCount = useCartStore((state) => state.getItemCount())

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed sticky top-0 inset-x-0 z-50">
      {/* ✅ TOP INFO BAR */}
    <div className="
  bg-gradient-to-r from-green-600 to-green-500
  text-white
  flex items-center justify-center gap-2
  text-sm md:text-base
  font-semibold
  h-14 md:h-10
  px-4
  shadow-md
">
  <span className="text-lg">🚚</span>
  <span>
    Orders above <span className="font-bold underline">₹1000</span> get
    <span className="ml-1 bg-white text-green-700 px-2 py-0.5 rounded-md font-bold">
      FREE DELIVERY
    </span>
  </span>
</div>


      {/* ✅ MAIN HEADER */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-card/95 backdrop-blur-md shadow-sm'
            : 'bg-background/90'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 md:h-14 md:w-14 overflow-hidden rounded-full border border-accent">
                <Image
                  src="/images/logo.jpg"
                  alt="Maharaja Home Foods"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="hidden md:block">
                <h1 className="font-[var(--font-playfair)] text-lg font-bold text-primary">
                  Maharaja
                </h1>
                <p className="text-xs text-muted-foreground">Home Foods</p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                )
              })}
            </nav>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* CART */}
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {mounted && itemCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-primary text-xs font-bold text-primary-foreground flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </Button>
              </Link>

              {/* MOBILE MENU */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>

                <SheetContent side="right" className="w-72 bg-card">
                  <SheetTitle className="sr-only">Menu</SheetTitle>

                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-3 border-b pb-4">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden">
                        <Image
                          src="/images/logo.jpg"
                          alt="Logo"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-primary">Maharaja</p>
                        <p className="text-xs text-muted-foreground">
                          Home Foods
                        </p>
                      </div>
                    </div>

                    <nav className="flex flex-col gap-2">
                      {navLinks.map((link) => {
                        const isActive = pathname === link.href
                        return (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`rounded-lg px-4 py-3 text-base font-medium transition ${
                              isActive
                                ? 'bg-primary text-primary-foreground'
                                : 'text-foreground hover:bg-muted'
                            }`}
                          >
                            {link.label}
                          </Link>
                        )
                      })}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
