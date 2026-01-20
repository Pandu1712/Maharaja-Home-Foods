import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StickyButtons } from '@/components/sticky-buttons'
import { categories } from '@/lib/products'

const galleryItems = [
  {
    title: 'Traditional Laddus',
    category: 'Sweets',
    image: '/categories/sweets.jpg',
  },
  {
    title: 'Crispy Savouries',
    category: 'Snacks',
    image: '/categories/savouries.jpg',
  },
  {
    title: 'Homemade Pickles',
    category: 'Pickles',
    image: '/categories/pickles.jpg',
  },
  {
    title: 'Pure Ghee',
    category: 'Ghee',
    image: '/categories/ghee.jpg',
  },
  {
    title: 'Natural Honey',
    category: 'Honey',
    image: '/categories/honey.jpg',
  },
  {
    title: 'Laddu Making',
    category: 'Process',
    image: '/products/laddu.jpg',
  },
  {
    title: 'Mixture Preparation',
    category: 'Process',
    image: '/products/mixture.jpg',
  },
  {
    title: 'Pickle Preparation',
    category: 'Process',
    image: '/products/pickle.jpg',
  },
  {
    title: 'Ghee Product',
    category: 'Product',
    image: '/products/ghee.jpg',
  },
  {
    title: 'Honey Product',
    category: 'Product',
    image: '/products/honey.jpg',
  },
]

export default function GalleryPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-4">
              Photo Gallery
            </span>
            <h1 className="font-sans text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              A Visual Journey Through Our Delicacies
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore the artistry behind our traditional foods — from preparation to perfection.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden bg-card shadow-md hover:shadow-xl transition-all duration-300 group ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-colors flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-white font-semibold">{item.title}</p>
                    <p className="text-white/80 text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              Our Product Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              Each category represents our dedication to quality and tradition
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow text-center"
              >
                {/* Category Image */}
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="font-sans font-semibold text-foreground">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <StickyButtons />
    </main>
  )
}
