import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StickyButtons } from '@/components/sticky-buttons'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main>
      <Header />
      
      <section className="pt-28 pb-20 bg-background min-h-screen flex items-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 w-full text-center">
          {/* 404 Illustration */}
          <div className="text-9xl font-bold text-primary/10 mb-4">404</div>
          
          <h1 className="font-sans text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Page Not Found
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Oops! The page you are looking for seems to have wandered off. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Go to Home
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
              <Link href="/products">
                Browse Products
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyButtons />
    </main>
  )
}
