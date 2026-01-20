'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
const heroSlides = [
  {
    title: 'Traditional Indian Sweets',
    subtitle: 'Handcrafted with Love',
    description: 'Experience the authentic taste of homemade laddus, chikkis, and more',
    image: '/categories/sweets.jpg',
  },
  {
    title: 'Crispy Savouries',
    subtitle: 'Perfect Tea-Time Snacks',
    description: 'Enjoy our crunchy mixture, janthikalu, and ribbon pakoda',
    image: '/categories/savouries.jpg',
  },
  {
    title: 'Authentic Pickles',
    subtitle: 'Made from Fresh Ingredients',
    description: 'Traditional Andhra pickles - Avakaya, Gongura, and more',
    image: '/categories/pickles.jpg',
  },
]
  

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%236B1D1D' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">
                {heroSlides[currentSlide].subtitle}
              </span>
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
                {heroSlides[currentSlide].description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/products">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center gap-4 justify-center lg:justify-start pt-8">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-border'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/30 animate-spin" style={{ animationDuration: '30s' }} />
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-primary/20 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
              
              {/* Main image container */}
              <div className="absolute inset-8 rounded-full overflow-hidden bg-card shadow-2xl border-4 border-accent">
                <Image
  src={heroSlides[currentSlide].image}
  alt={heroSlides[currentSlide].title}
  fill
  className="object-cover transition-opacity duration-700"
  priority
/>

              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-lg animate-float">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-xs text-muted-foreground">Homemade</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">Pure</p>
                  <p className="text-xs text-muted-foreground">Ingredients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
