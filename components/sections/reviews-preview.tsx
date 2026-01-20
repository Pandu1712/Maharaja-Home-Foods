'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { reviews } from '@/lib/products'

export function ReviewsPreview() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
            What Our Customers Say
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <Quote className="absolute -top-4 left-0 h-16 w-16 text-accent/20" />

          {/* Review Card */}
          <div className="bg-primary-foreground/10 backdrop-blur rounded-2xl p-8 md:p-12 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < reviews[currentIndex].rating ? 'text-accent fill-accent' : 'text-primary-foreground/30'
                  }`}
                />
              ))}
            </div>

            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8 italic">
              "{reviews[currentIndex].text}"
            </p>

            <div>
              <p className="font-sans font-semibold text-lg text-accent">
                {reviews[currentIndex].name}
              </p>
              <p className="text-sm text-primary-foreground/60">
                {reviews[currentIndex].location}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevReview}
              className="p-3 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-primary-foreground/30'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextReview}
              className="p-3 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
            <Link href="/reviews">See All Reviews</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
