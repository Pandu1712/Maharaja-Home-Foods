'use client'

import React from "react"
import Image from 'next/image'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StickyButtons } from '@/components/sticky-buttons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { ArrowLeft, ShoppingBag, MapPin, MessageCircle, CheckCircle } from 'lucide-react'
import { useCartStore } from '@/lib/cart-store'
import { calculatePrice, businessInfo, categories } from '@/lib/products'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, getTotal, clearCart } = useCartStore()
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    doorNo: '',
    area: '',
    pincode: '',
    landmark: '',
    phone: '',
    location: '',
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Build order details
    const orderItems = items.map((item) => {
      const price = calculatePrice(item.price, item.weight)
      const total = price * item.quantity
      const weightLabel = item.weight >= 1000 ? '1 Kg' : `${item.weight}g`
      return `- ${item.name} (${weightLabel}) x ${item.quantity} = Rs.${total}`
    }).join('\n')

    const whatsappMessage = `*New Order - Maharaja Home Foods*

*Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
D.No: ${formData.doorNo}
Area: ${formData.area}
Pincode: ${formData.pincode}
Landmark: ${formData.landmark || 'N/A'}
Location: ${formData.location || 'N/A'}

*Order Details:*
${orderItems}

*Total Amount: Rs.${getTotal()}*

Thank you for ordering!`

    const whatsappUrl = `https://wa.me/91${businessInfo.phone}?text=${encodeURIComponent(whatsappMessage)}`
    
    // Clear cart and redirect to WhatsApp
    clearCart()
    window.open(whatsappUrl, '_blank')
    router.push('/order-success')
  }

const getCategoryImage = (category: string) => {
  const cat = categories.find((c) => c.id === category)
  return cat?.image || '/categories/sweets.jpg'
}


  if (!mounted) {
    return (
      <main>
        <Header />
        <section className="pt-28 pb-20 bg-background min-h-screen">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center py-20">
              <p className="text-muted-foreground">Loading checkout...</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  if (items.length === 0) {
    return (
      <main>
        <Header />
        <section className="pt-28 pb-20 bg-background min-h-screen">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-muted rounded-full mb-6">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <h1 className="font-sans text-3xl font-bold text-foreground mb-4">Your Cart is Empty</h1>
              <p className="text-muted-foreground mb-8">
                Add some products to your cart before checking out.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/cart" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cart
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Delivery Form */}
            <div>
              <div className="mb-8">
                <h1 className="font-sans text-3xl font-bold text-foreground mb-2">Checkout</h1>
                <p className="text-muted-foreground">Enter your delivery details to complete your order</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-card rounded-2xl p-6 shadow-md space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <MapPin className="h-6 w-6 text-primary" />
                    <h2 className="font-sans text-xl font-semibold text-foreground">Delivery Address</h2>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Mobile Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="doorNo">D.No / House No *</Label>
                      <Input
                        id="doorNo"
                        type="text"
                        placeholder="Door number"
                        value={formData.doorNo}
                        onChange={(e) => setFormData({ ...formData, doorNo: e.target.value })}
                        required
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        type="text"
                        placeholder="533262"
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="area">Area / Street / Village *</Label>
                    <Input
                      id="area"
                      type="text"
                      placeholder="Enter your area or street name"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="landmark">Landmark (Optional)</Label>
                    <Input
                      id="landmark"
                      type="text"
                      placeholder="Near temple, opposite school, etc."
                      value={formData.landmark}
                      onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Google Maps Location Link (Optional)</Label>
                    <Textarea
                      id="location"
                      placeholder="Paste your Google Maps location link here"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="bg-background resize-none"
                      rows={2}
                    />
                    <p className="text-xs text-muted-foreground">
                      Share your location from Google Maps for easier delivery
                    </p>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Place Order via WhatsApp
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Your order will be sent to WhatsApp for confirmation and payment details
                </p>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-card rounded-2xl p-6 shadow-md sticky top-28">
                <h2 className="font-sans text-xl font-bold text-foreground mb-6">Order Summary</h2>
                
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                  {items.map((item) => {
                    const itemPrice = calculatePrice(item.price, item.weight)
                    const totalItemPrice = itemPrice * item.quantity
                    const weightLabel = item.weight >= 1000 ? '1 Kg' : `${item.weight}g`

                    return (
                      <div
                        key={`${item.id}-${item.weight}`}
                        className="flex gap-4 pb-4 border-b border-border last:border-b-0"
                      >
                       <div className="relative w-14 h-14 bg-muted rounded-xl overflow-hidden flex-shrink-0">
  <Image
    src={getCategoryImage(item.category)}
    alt={item.name}
    fill
    className="object-cover"
  />
</div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-foreground text-sm">{item.name}</h3>
                          <p className="text-xs text-muted-foreground">
                            {weightLabel} x {item.quantity}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-primary">₹{totalItemPrice}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-6 pt-6 border-t border-border space-y-3">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>₹{getTotal()}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Delivery</span>
                    <span className="text-accent font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-foreground pt-3 border-t border-border">
                    <span>Total</span>
                    <span className="text-primary">₹{getTotal()}</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-secondary rounded-xl">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-foreground">Secure Ordering</p>
                      <p className="text-muted-foreground">
                        Your order will be confirmed via WhatsApp. Payment can be made upon delivery or through UPI.
                      </p>
                    </div>
                  </div>
                </div>
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
