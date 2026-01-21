'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ShoppingCart, Check } from 'lucide-react'
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

  const { addItem, items } = useCartStore()
  const [selectedWeights, setSelectedWeights] = useState<Record<string, number>>({})

  const scroll = (direction: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: direction === 'left' ? -320 : 320,
      behavior: 'smooth',
    })
  }

  const handleAddToCart = (product: typeof products[number]) => {
    const weight = selectedWeights[product.id] || 500
    addItem(product, weight)
  }

  const isAdded = (productId: string, weight: number) => {
    return items.some(
      (item) => item.id === productId && item.weight === weight
    )
  }

  const featuredProducts = products.slice(0, 12)

  return (
    <section className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-4">
              Featured Products
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-foreground">
              Our Bestsellers
            </h2>
          </div>

          <div className="hidden sm:flex gap-2">
            <button onClick={() => scroll('left')} className="p-3 rounded-full border bg-card">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full border bg-card">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
        >
          {featuredProducts.map((product) => {
            const weight = selectedWeights[product.id] || 500
            const price = calculatePrice(product.price, weight)
            const added = isAdded(product.id, weight)

            return (
              <div
                key={product.id}
                className="flex-shrink-0 w-72 bg-card rounded-2xl shadow-md overflow-hidden snap-start"
              >
                {/* Image */}
                <div className="relative aspect-square bg-muted">
                  <Image
                    src={product.image || categoryImages[product.category]}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Weight Selector */}
                  <div className="flex gap-2">
                    {weightOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() =>
                          setSelectedWeights({
                            ...selectedWeights,
                            [product.id]: option.value,
                          })
                        }
                        className={`flex-1 py-1.5 text-xs rounded-lg ${
                          weight === option.value
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>

                  {/* Price + Add */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-primary">
                        ₹{price}
                      </span>
                      <span className="text-sm text-muted-foreground ml-1">
                        / {weight >= 1000 ? '1 Kg' : `${weight}g`}
                      </span>
                    </div>

                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                      disabled={added}
                      className={`min-w-[44px] ${
                        added
                          ? 'bg-green-600 text-white cursor-default'
                          : 'bg-accent hover:bg-accent/90 text-accent-foreground'
                      }`}
                    >
                      {added ? <Check className="h-4 w-4" /> : <ShoppingCart className="h-4 w-4" />}
                    </Button>
                  </div>

                  {/* Added Label */}
                  {added && (
                    <p className="text-xs text-green-600 font-medium">
                      Added ({weight >= 1000 ? '1 Kg' : `${weight}g`})
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
