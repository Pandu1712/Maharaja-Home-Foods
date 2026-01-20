import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StickyButtons } from '@/components/sticky-buttons'
import { Button } from '@/components/ui/button'
import { Check, ArrowRight, Heart, Leaf, Award, Users } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every product is crafted with care and passion, just like homemade food should be.',
  },
  {
    icon: Leaf,
    title: 'Pure Ingredients',
    description: 'We use only the finest natural ingredients with no artificial additives or preservatives.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Our products maintain the highest standards of quality and hygiene.',
  },
  {
    icon: Users,
    title: 'Family Recipes',
    description: 'Traditional recipes passed down through generations, preserved for your enjoyment.',
  },
]

const timeline = [
  { year: '2014', title: 'The Beginning', description: 'Started making sweets and snacks for family and friends.' },
  { year: '2016', title: 'Growing Demand', description: 'Word spread about our authentic taste, and orders started coming in.' },
  { year: '2019', title: 'Expanding Range', description: 'Added pickles, ghee, and honey to our product line.' },
  { year: '2024', title: 'Serving Thousands', description: 'Now proudly serving customers across Andhra Pradesh and beyond.' },
]

export default function AboutPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">
                Our Story
              </span>
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                The Royal Taste of Tradition
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to Maharaja Home Foods, where every bite tells a story of tradition, 
                love, and the finest ingredients. We are a family-owned business dedicated to 
                bringing you the authentic flavors of traditional Indian cuisine.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our journey began in the heart of Draksharama, Andhra Pradesh, with a simple 
                mission: to share the taste of home-cooked goodness with everyone. What started 
                as making sweets for family gatherings has grown into a beloved brand serving 
                customers across the region.
              </p>
            </div>
            
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/logo.jpg"
                    alt="Maharaja Home Foods"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
                  <p className="text-4xl font-bold text-accent">10+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              What Makes Us Special
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-sans font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 text-balance">
              A Decade of Delicious Memories
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-accent/30 mb-2">{item.year}</div>
                <h3 className="font-sans font-semibold text-lg text-accent mb-2">{item.title}</h3>
                <p className="text-primary-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
                Our Commitment
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                Quality You Can Trust
              </h2>
              <ul className="space-y-4">
                {[
                  'All products are freshly prepared for each order',
                  'We use only premium quality ingredients',
                  'Strict hygiene standards are maintained',
                  'No artificial colors or preservatives',
                  'Traditional recipes, authentic taste',
                  'Packed with care for safe delivery',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-accent" />
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/products">
                    Explore Our Products <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-8xl mb-4 block">🏠</span>
                  <p className="font-sans text-xl font-semibold text-foreground">Homemade with Love</p>
                  <p className="text-muted-foreground">From our kitchen to your home</p>
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
