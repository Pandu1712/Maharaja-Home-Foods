import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StickyButtons } from '@/components/sticky-buttons'
import { Button } from '@/components/ui/button'
import { Star, Quote, MessageCircle } from 'lucide-react'
import { reviews, businessInfo } from '@/lib/products'

const additionalReviews = [
  { id: 7, name: 'Meena Sharma', rating: 5, text: 'The sesame laddus are to die for! Perfect sweetness and amazing texture. My kids love them!', location: 'Vizag' },
  { id: 8, name: 'Prakash Reddy', rating: 5, text: 'I have been ordering from Maharaja Home Foods for over 2 years now. Consistently excellent quality.', location: 'Guntur' },
  { id: 9, name: 'Kavitha Devi', rating: 4, text: 'The gongura pickle reminds me of my village days. Such authentic taste. Thank you!', location: 'Nellore' },
  { id: 10, name: 'Ramesh Kumar', rating: 5, text: 'Ordered for my son\'s wedding. Everyone was impressed with the quality of sweets. Highly recommended!', location: 'Tirupati' },
  { id: 11, name: 'Sita Lakshmi', rating: 5, text: 'The cow ghee is so pure and aromatic. Can tell the difference immediately. Worth every rupee!', location: 'Ongole' },
  { id: 12, name: 'Narasimha Rao', rating: 5, text: 'Fast delivery and excellent packaging. Products were fresh and exactly as described.', location: 'Eluru' },
]

const allReviews = [...reviews, ...additionalReviews]

const stats = [
  { value: '500+', label: 'Happy Customers' },
  { value: '4.9', label: 'Average Rating' },
  { value: '1000+', label: 'Orders Delivered' },
  { value: '100%', label: 'Satisfaction' },
]

export default function ReviewsPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4">
              Customer Reviews
            </span>
            <h1 className="font-sans text-4xl sm:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              What Our Customers Say
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Don't just take our word for it - hear from our happy customers about their experience with Maharaja Home Foods.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl sm:text-5xl font-bold text-accent">{stat.value}</p>
                <p className="text-primary-foreground/80 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allReviews.map((review) => (
              <div
                key={review.id}
                className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow relative"
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < review.rating ? 'text-accent fill-accent' : 'text-muted'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-primary">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-center">
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 text-balance">
              Ready to Experience the Difference?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Join hundreds of satisfied customers and taste the authentic flavors of traditional Indian foods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/products">
                  Order Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
                <a 
                  href={`https://wa.me/91${businessInfo.phone}?text=Hello! I saw your reviews and would like to place an order.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact Us
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
