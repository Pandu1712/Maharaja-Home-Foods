'use client'

import Link from 'next/link'
import Image from 'next/image'
import { categories } from '@/lib/products'

const categoryImages: Record<string, string> = {
  sweets: '/categories/sweets.jpg',
  savouries: '/categories/savouries.jpg',
  pickles: '/categories/pickles.jpg',
  ghee: '/categories/ghee.jpg',
  honey: '/categories/honey.jpg',
}

export function CategoriesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
            Our Collection
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Explore Our Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the authentic taste of traditional Indian foods, crafted with love and the finest ingredients
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square relative">
                <Image
                  src={categoryImages[category.id] || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              
              <div className="p-4 bg-card">
                <h3 className="font-sans font-semibold text-foreground text-center group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
