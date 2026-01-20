'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { products, calculatePrice, weightOptions } from '@/lib/products'
import { useCartStore } from '@/lib/cart-store'

const categoryImages: Record<string, string> = {
  sweets: '/products/laddu.jpg',
  savouries: '/products/mixture.jpg',
  pickles: '/products/pickle.jpg',
  ghee: '/products/ghee.jpg',
  honey: '/products/honey.jpg',
}

export function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const addItem = useCartStore((state) => state.addItem)
  const [selectedWeights, setSelectedWeights] = useState<Record<string, number>>({})

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  const handleAddToCart = (product: typeof products[0]) => {
    const weight = selectedWeights[product.id] || 500
    addItem(product, weight)
  }

  const featuredProducts = products.slice(0, 12)

  return (
    <section className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-4">
              Featured Products
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Our Bestsellers
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredProducts.map((product) => {
            const weight = selectedWeights[product.id] || 500
            const price = calculatePrice(product.price, weight)

            return (
              <div
                key={product.id}
                className="flex-shrink-0 w-72 bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden snap-start group"
              >
                <div className="relative aspect-square bg-muted">
                  <Image
                    src={categoryImages[product.category] || '/products/laddu.jpg'}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    {product.category}
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="font-sans font-semibold text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Weight Selection */}
                  <div className="flex gap-2">
                    {weightOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setSelectedWeights({ ...selectedWeights, [product.id]: option.value })}
                        className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                          weight === option.value
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-sans text-2xl font-bold text-primary">₹{price}</span>
                      <span className="font-sans text-sm text-muted-foreground ml-1">
                        / {weight >= 1000 ? '1 Kg' : `${weight}g`}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
