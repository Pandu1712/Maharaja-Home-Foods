import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StickyButtons } from '@/components/sticky-buttons'
import { HeroSection } from '@/components/sections/hero'
import { CategoriesSection } from '@/components/sections/categories'
import { ProductCarousel } from '@/components/sections/product-carousel'
import { AboutPreview } from '@/components/sections/about-preview'
import { ReviewsPreview } from '@/components/sections/reviews-preview'
import { CTASection } from '@/components/sections/cta'

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CategoriesSection />
      <ProductCarousel />
      <AboutPreview />
      <ReviewsPreview />
      <CTASection />
      <Footer />
      <StickyButtons />
    </main>
  )
}
