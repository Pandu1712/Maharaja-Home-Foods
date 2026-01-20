'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StickyButtons } from '@/components/sticky-buttons'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Filter } from 'lucide-react'
import { products, categories, weightOptions, calculatePrice } from '@/lib/products'
import { useCartStore } from '@/lib/cart-store'

const categoryImages: Record<string, string> = {
  sweets: '/products/laddu.jpg',
  savouries: '/products/mixture.jpg',
  pickles: '/products/pickle.jpg',
  ghee: '/products/ghee.jpg',
  honey: '/products/honey.jpg',
}

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')

  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam)
  const [selectedWeights, setSelectedWeights] = useState<Record<string, number>>({})
  const [showFilters, setShowFilters] = useState(false)

  const addItem = useCartStore((state) => state.addItem)

  useEffect(() => {
    setSelectedCategory(categoryParam)
  }, [categoryParam])

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products

  const handleAddToCart = (product: typeof products[number]) => {
    const weight = selectedWeights[product.id] || 500
    addItem(product, weight)
  }

  return (
    <main>
      <Header />

      <section className="pt-28 pb-20 bg-background min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
              Our Products
            </span>
            <h1 className="font-sans text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Traditional Delicacies
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of authentic homemade Indian foods
            </p>
          </div>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-6">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full justify-center"
            >
              <Filter className="mr-2 h-4 w-4" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-card rounded-2xl p-6 shadow-md sticky top-28">
                <h3 className="font-sans font-semibold text-lg text-foreground mb-4">
                  Categories
                </h3>

                <div className="space-y-2">
                  {/* All Products */}
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${
                      selectedCategory === null
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted text-foreground'
                    }`}
                  >
                    All Products
                  </button>

                  {/* Category Buttons */}
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-colors flex items-center gap-3 ${
                        selectedCategory === category.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted text-foreground'
                      }`}
                    >
                      {/* Category Image */}
                      <div className="relative w-8 h-8 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredProducts.length} products
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const weight = selectedWeights[product.id] || 500
                  const price = calculatePrice(product.price, weight)

                  return (
                    <div
                      key={product.id}
                      className="bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      {/* Product Image */}
                      <div className="relative aspect-square bg-muted">
                        <Image
                          src={categoryImages[product.category] || '/products/laddu.jpg'}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full capitalize">
                          {product.category}
                        </div>
                      </div>

                      <div className="p-6 space-y-4">
                        <div>
                          <h3 className="font-sans text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {product.description}
                          </p>
                        </div>

                        {/* Weight Selection */}
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
                              className={`flex-1 py-2 text-sm font-medium rounded-xl transition-colors ${
                                weight === option.value
                                  ? 'bg-primary text-primary-foreground'
                                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>

                        {/* Price + Cart */}
                        <div className="flex items-center justify-between pt-2">
                          <div>
                           <span className="font-sans text-2xl font-bold tracking-tight tabular-nums text-primary">
  ₹{price}
</span>

                            <span className="font-sans text-sm text-muted-foreground ml-1">
                              / {weight >= 1000 ? '1 Kg' : `${weight}g`}
                            </span>
                          </div>
                          <Button
                            onClick={() => handleAddToCart(product)}
                            className="bg-accent hover:bg-accent/90 text-accent-foreground"
                          >
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add
                          </Button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyButtons />
    </main>
  )
}
