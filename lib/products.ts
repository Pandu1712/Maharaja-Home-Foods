export interface Product {
  id: string
  name: string
  price: number // price per kg or litre
  unit: 'kg' | 'litre' | 'pack'
  category: string
  image: string
  description?: string
}

export interface CartItem extends Product {
  quantity: number
  weight: number // in grams or ml
}

export const categories = [
  {
    id: 'sweets',
    name: 'Sweets',
    image: '/categories/sweets.jpg',
  },
  {
    id: 'savouries',
    name: 'Hot Items / Savouries',
    image: '/categories/savouries.jpg',
  },
  {
    id: 'pickles',
    name: 'Pickles',
    image: '/categories/pickles.jpg',
  },
  {
    id: 'ghee',
    name: 'Ghee',
    image: '/categories/ghee.jpg',
  },
  {
    id: 'honey',
    name: 'Honey',
    image: '/categories/honey.jpg',
  },
]


export const products: Product[] = [
  // SWEETS
  { id: 'ghee-ragi-laddu', name: 'Ghee Ragi Laddu', price: 560, unit: 'kg', category: 'sweets', image: '/products/ragi-laddu.jpg', description: 'Traditional ragi laddus made with pure ghee' },
  { id: 'sesame-laddu', name: 'Sesame Laddu', price: 560, unit: 'kg', category: 'sweets', image: '/products/sesame-laddu.jpg', description: 'Crunchy sesame laddus with jaggery' },
  { id: 'sunnundalu', name: 'Sunnundalu (Urad Dal Laddu)', price: 560, unit: 'kg', category: 'sweets', image: '/products/sunnundalu.jpg', description: 'Authentic urad dal laddus' },
  { id: 'coconut-laddu', name: 'Coconut Laddu', price: 480, unit: 'kg', category: 'sweets', image: '/products/coconut-laddu.jpg', description: 'Fresh coconut laddus with cardamom' },
  { id: 'small-boondi-laddu', name: 'Small Boondi Laddu', price: 320, unit: 'kg', category: 'sweets', image: '/products/boondi-laddu.jpg', description: 'Soft and sweet boondi laddus' },
  { id: 'groundnut-chikki', name: 'Groundnut Chikki', price: 320, unit: 'kg', category: 'sweets', image: '/products/groundnut-chikki.jpg', description: 'Crunchy peanut brittle' },
  { id: 'cashew-chikki', name: 'Cashew Chikki', price: 1200, unit: 'kg', category: 'sweets', image: '/products/cashew-chikki.jpg', description: 'Premium cashew brittle' },
  
  // HOT ITEMS / SAVOURIES
  { id: 'kara-poosa', name: 'Kara Poosa', price: 340, unit: 'kg', category: 'savouries', image: '/products/kara-poosa.jpg', description: 'Crispy spicy puffed snack' },
  { id: 'spicy-boondi', name: 'Spicy Boondi', price: 340, unit: 'kg', category: 'savouries', image: '/products/spicy-boondi.jpg', description: 'Spicy chickpea flour drops' },
  { id: 'chekka-vadalu', name: 'Chekka Vadalu', price: 380, unit: 'kg', category: 'savouries', image: '/products/chekka-vadalu.jpg', description: 'Traditional crispy vadalu' },
  { id: 'mixture', name: 'Mixture', price: 340, unit: 'kg', category: 'savouries', image: '/products/mixture.jpg', description: 'Classic South Indian mixture' },
  { id: 'agra-mixture', name: 'Agra Mixture', price: 340, unit: 'kg', category: 'savouries', image: '/products/agra-mixture.jpg', description: 'Famous Agra style mixture' },
  { id: 'janthikalu', name: 'Janthikalu', price: 380, unit: 'kg', category: 'savouries', image: '/products/janthikalu.jpg', description: 'Traditional spiral snacks' },
  { id: 'chegodilu', name: 'Chegodilu', price: 340, unit: 'kg', category: 'savouries', image: '/products/chegodilu.jpg', description: 'Crispy ring-shaped snack' },
  { id: 'ribbon-pakoda', name: 'Ribbon Pakoda', price: 340, unit: 'kg', category: 'savouries', image: '/products/ribbon-pakoda.jpg', description: 'Crunchy ribbon-shaped pakoda' },
  
  // PICKLES (price per 250g)
  { id: 'avakaya', name: 'Avakaya (Mango)', price: 480, unit: 'kg', category: 'pickles', image: '/products/avakaya.jpg', description: 'Spicy Andhra mango pickle' },
  { id: 'gongura', name: 'Gongura Pickle', price: 480, unit: 'kg', category: 'pickles', image: '/products/gongura.jpg', description: 'Tangy gongura leaf pickle' },
  { id: 'ginger-pickle', name: 'Ginger Pickle', price: 480, unit: 'kg', category: 'pickles', image: '/products/ginger-pickle.jpg', description: 'Zesty ginger pickle' },
  { id: 'tomato-pickle', name: 'Tomato Pickle', price: 480, unit: 'kg', category: 'pickles', image: '/products/tomato-pickle.jpg', description: 'Tangy tomato pickle' },
  
  // GHEE
  { id: 'cow-ghee', name: 'Cow Ghee', price: 700, unit: 'kg', category: 'ghee', image: '/products/cow-ghee.jpg', description: 'Pure desi cow ghee' },
  { id: 'buffalo-ghee', name: 'Buffalo Ghee', price: 650, unit: 'kg', category: 'ghee', image: '/products/buffalo-ghee.jpg', description: 'Rich buffalo ghee' },
  
  // HONEY
  { id: 'natural-honey', name: 'Natural Honey', price: 360, unit: 'litre', category: 'honey', image: '/products/natural-honey.jpg', description: 'Pure natural forest honey' },
]

export const weightOptions = [
  { label: '250g', value: 250 },
  { label: '500g', value: 500 },
  { label: '1 Kg', value: 1000 },
]

export function calculatePrice(pricePerKg: number, weightInGrams: number): number {
  return Math.round((pricePerKg * weightInGrams) / 1000)
}

export const businessInfo = {
  name: 'Maharaja Home Foods',
  phone: '9705338571',
  email: 'rajaganirajukuppala@gmail.com',
  address: 'D.No 1-251, Annaipeta, Draksharama, A.P - 533262',
  instagram: 'https://www.instagram.com/maga_maharaja?igsh=MWEyemU1aTUyZXRkcA==',
  hours: {
    weekdays: '9AM to 5PM',
    saturday: '9AM to 1PM',
    sunday: 'Holiday'
  }
}

export const reviews = [
  { id: 1, name: 'Lakshmi Devi', rating: 5, text: 'The laddus taste exactly like my grandmother used to make. Truly authentic and delicious!', location: 'Rajahmundry' },
  { id: 2, name: 'Venkat Rao', rating: 5, text: 'Best quality pickles I have ever tasted. The Avakaya is absolutely amazing!', location: 'Hyderabad' },
  { id: 3, name: 'Padma Kumari', rating: 5, text: 'The cow ghee is pure and aromatic. My whole family loves it. Highly recommended!', location: 'Vijayawada' },
  { id: 4, name: 'Suresh Kumar', rating: 4, text: 'Fresh and tasty snacks. The mixture and janthikalu are our favorites for evening tea.', location: 'Kakinada' },
  { id: 5, name: 'Anitha Reddy', rating: 5, text: 'Ordered for Diwali and everyone loved it. Will definitely order again!', location: 'Bangalore' },
  { id: 6, name: 'Ravi Prasad', rating: 5, text: 'The natural honey is pure and tastes wonderful. Great quality products!', location: 'Chennai' },
]
