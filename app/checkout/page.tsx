'use client'

import React from 'react'
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
import {
  ArrowLeft,
  ShoppingBag,
  MapPin,
  MessageCircle,
  CheckCircle,
} from 'lucide-react'
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

  /** ✅ DELIVERY LOGIC */
  const deliveryCharge = getTotal() >= 1000 ? 0 : 100
  const finalTotal = getTotal() + deliveryCharge

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const orderItems = items
      .map((item) => {
        const price = calculatePrice(item.price, item.weight)
        const total = price * item.quantity
        const weightLabel = item.weight >= 1000 ? '1 Kg' : `${item.weight}g`
        return `- ${item.name} (${weightLabel}) x ${item.quantity} = Rs.${total}`
      })
      .join('\n')

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

Subtotal: Rs.${getTotal()}
Delivery: Rs.${deliveryCharge}
*Final Total: Rs.${finalTotal}*

${
  deliveryCharge === 0
    ? '*Free Delivery Applied (Orders above ₹1000)*'
    : '*Delivery Charge ₹100 applied*'
}

Thank you for ordering!`

    const whatsappUrl = `https://wa.me/91${businessInfo.phone}?text=${encodeURIComponent(
      whatsappMessage
    )}`

    clearCart()
    window.open(whatsappUrl, '_blank')
    router.push('/order-success')
  }

  const getCategoryImage = (category: string) => {
    const cat = categories.find((c) => c.id === category)
    return cat?.image || '/categories/sweets.jpg'
  }

  if (!mounted) {
    return null
  }

  if (items.length === 0) {
    return (
      <main>
        <Header />
        <section className="pt-28 pb-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <ShoppingBag className="h-14 w-14 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-2">Your Cart is Empty</h2>
            <Button asChild>
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Header />

      <section className="pt-28 pb-20 bg-background min-h-screen">
        <div className="mx-auto max-w-6xl px-4">
          <Link
            href="/cart"
            className="inline-flex items-center mb-8 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Cart
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-card p-6 rounded-2xl shadow-md space-y-4">
                <div className="flex items-center gap-2 border-b pb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h2 className="font-semibold text-lg">Delivery Address</h2>
                </div>

                {['name', 'phone', 'doorNo', 'area', 'pincode', 'landmark'].map(
                  (field) => (
                    <Input
                      key={field}
                      placeholder={field.toUpperCase()}
                      value={(formData as any)[field]}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [field]: e.target.value,
                        })
                      }
                      required={field !== 'landmark'}
                    />
                  )
                )}

                <Textarea
                  placeholder="Google Maps Location (Optional)"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#25D366] text-white"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Place Order via WhatsApp
              </Button>
            </form>

            {/* SUMMARY */}
            <div className="bg-card p-6 rounded-2xl shadow-md sticky top-28">
              <h2 className="font-bold text-xl mb-6">Order Summary</h2>

              <div className="space-y-4">
                {items.map((item) => {
                  const itemTotal =
                    calculatePrice(item.price, item.weight) * item.quantity
                  return (
                    <div
                      key={`${item.id}-${item.weight}`}
                      className="flex gap-3 border-b pb-3"
                    >
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                        <Image
                          src={getCategoryImage(item.category)}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.weight >= 1000 ? '1 Kg' : `${item.weight}g`} ×{' '}
                          {item.quantity}
                        </p>
                      </div>
                      <p className="font-semibold">₹{itemTotal}</p>
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{getTotal()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>
                    {deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}
                  </span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-3 border-t">
                  <span>Total</span>
                  <span>₹{finalTotal}</span>
                </div>
              </div>

              <p className="mt-4 text-xs text-center text-green-700 font-medium">
                🎉 Orders above ₹1000 get FREE delivery
              </p>

              <div className="mt-4 flex gap-2 text-xs text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-accent" />
                Secure WhatsApp ordering & UPI supported
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
