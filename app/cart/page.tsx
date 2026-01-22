'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StickyButtons } from '@/components/sticky-buttons'
import { Button } from '@/components/ui/button'
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCartStore } from '@/lib/cart-store'
import { weightOptions, calculatePrice, categories } from '@/lib/products'

export default function CartPage() {
  const {
    items,
    updateQuantity,
    updateWeight,
    removeItem,
    getTotal,
    clearCart,
  } = useCartStore()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <main>
        <Header />
        <section className="pt-28 pb-20 bg-background min-h-screen">
          <div className="mx-auto max-w-4xl px-4 text-center py-20">
            <p className="text-muted-foreground">Loading cart...</p>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const getCategoryImage = (category: string) => {
    const cat = categories.find((c) => c.id === category)
    return cat?.image || '/categories/sweets.jpg'
  }

  if (items.length === 0) {
    return (
      <main>
        <Header />
        <section className="pt-28 pb-20 bg-background min-h-screen">
          <div className="mx-auto max-w-4xl px-4 text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-muted rounded-full mb-6">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any products yet.
            </p>
            <Button asChild size="lg">
              <Link href="/products">
                Browse Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
        <Footer />
        <StickyButtons />
      </main>
    )
  }

  return (
    <main>
      <Header />

      <section className="pt-28 pb-20 bg-background min-h-screen">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold">Shopping Cart</h1>
            <p className="text-muted-foreground">
              {items.length} items in your cart
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => {
                const itemPrice = calculatePrice(item.price, item.weight)
                const totalItemPrice = itemPrice * item.quantity

                return (
                  <div
                    key={`${item.id}-${item.weight}`}
                    className="bg-card rounded-2xl p-6 shadow-md"
                  >
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-muted">
                        <Image
  src={item.image || getCategoryImage(item.category)}
  alt={item.name}
  fill
  className="object-cover"
/>

                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>

                          <button
                            onClick={() =>
                              removeItem(item.id, item.weight)
                            }
                            className="p-2 text-destructive hover:bg-destructive/10 rounded-lg"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center gap-4">
                          {/* Weight */}
                          <div className="flex gap-1">
                            {weightOptions.map((option) => (
                              <button
                                key={option.value}
                                onClick={() =>
                                  updateWeight(
                                    item.id,
                                    item.weight,
                                    option.value
                                  )
                                }
                                className={`px-3 py-1 text-xs rounded-lg ${
                                  item.weight === option.value
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted text-muted-foreground'
                                }`}
                              >
                                {option.label}
                              </button>
                            ))}
                          </div>

                          {/* Quantity */}
                          <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.weight,
                                  item.quantity - 1
                                )
                              }
                              className="p-1.5 hover:bg-card rounded-md"
                            >
                              <Minus className="h-4 w-4" />
                            </button>

                            <span className="w-8 text-center font-medium">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.weight,
                                  item.quantity + 1
                                )
                              }
                              className="p-1.5 hover:bg-card rounded-md"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>

                          {/* Price */}
                          <div className="ml-auto">
                            <p className="text-lg font-bold text-primary">
                              ₹{totalItemPrice}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              ₹{itemPrice} each
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}

              <div className="flex justify-end">
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="text-destructive border-destructive"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear Cart
                </Button>
              </div>
            </div>

            {/* Summary */}
            <div>
              <div className="bg-card rounded-2xl p-6 shadow-md sticky top-28">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>₹{getTotal()}</span>
                  </div>
                  {/* <div className="flex justify-between text-muted-foreground">
                    <span>Delivery</span>
                    <span className="text-accent font-medium">Free</span>
                  </div> */}
                  <div className="border-t pt-4 flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-primary">₹{getTotal()}</span>
                  </div>
                </div>

                <Button asChild size="lg" className="w-full">
                  <Link href="/checkout">
                    Proceed to Checkout <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Order processed via WhatsApp
                </p>
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
