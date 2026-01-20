import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StickyButtons } from '@/components/sticky-buttons'
import { Button } from '@/components/ui/button'
import { CheckCircle, Home, ShoppingBag, MessageCircle } from 'lucide-react'
import { businessInfo } from '@/lib/products'

export default function OrderSuccessPage() {
  return (
    <main>
      <Header />
      
      <section className="pt-28 pb-20 bg-background min-h-screen flex items-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            {/* Success Icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-accent/20 rounded-full mb-8">
              <CheckCircle className="h-12 w-12 text-accent" />
            </div>

            <h1 className="font-sans text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Order Placed Successfully!
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              Your order has been sent to our WhatsApp. We will confirm your order and share payment details shortly.
            </p>

            {/* Order Info Card */}
            <div className="bg-card rounded-2xl p-8 shadow-md mb-8 text-left">
              <h2 className="font-sans font-semibold text-lg text-foreground mb-4">What happens next?</h2>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                    1
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Check your WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Your order details have been sent to our WhatsApp</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                    2
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Order Confirmation</p>
                    <p className="text-sm text-muted-foreground">We will confirm your order and share payment details</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                    3
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Fresh Preparation</p>
                    <p className="text-sm text-muted-foreground">Your order will be freshly prepared with care</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                    4
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Delivery</p>
                    <p className="text-sm text-muted-foreground">Your order will be delivered to your doorstep</p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Contact Info */}
            <div className="bg-secondary rounded-2xl p-6 mb-8">
              <p className="text-muted-foreground mb-2">Need help with your order?</p>
              <p className="text-lg font-semibold text-foreground">Call us at {businessInfo.phone}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
                <Link href="/products">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Continue Shopping
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                <a 
                  href={`https://wa.me/91${businessInfo.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Open WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyButtons />
    </main>
  )
}
