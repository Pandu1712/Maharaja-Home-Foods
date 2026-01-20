import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check, ArrowRight } from 'lucide-react'

const features = [
  'Traditional recipes passed down through generations',
  '100% natural and pure ingredients',
  'No artificial preservatives or colors',
  'Hygienically prepared with care',
  'Made fresh for every order',
]

export function AboutPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[5/5] rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/images/logo.jpg"
                alt="Maharaja Home Foods"
                fill
                className="object-cover "
              />
            </div>
            {/* Stats card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <p className="text-4xl font-bold text-accent">10+</p>
                <p className="text-sm text-primary-foreground/80">Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div>
              <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                The Royal Taste of Tradition
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Maharaja Home Foods, we bring you the authentic flavors of traditional Indian cuisine, 
                crafted with love and the finest ingredients. Our recipes have been passed down through 
                generations, ensuring that every bite takes you back to the warmth of home cooking.
              </p>
            </div>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-accent" />
                  </span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/about">
                Read Our Story <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
