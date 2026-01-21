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
  { id: 'ghee-ragi-laddu', name: 'Ghee Ragi Laddu', price: 660, unit: 'kg', category: 'sweets', image: 'https://res.cloudinary.com/dplyldp8e/image/upload/v1768970394/WhatsApp_Image_2026-01-20_at_20.47.05_hif51o.jpg', description: 'Traditional ragi laddus made with pure ghee' },
  { id: 'sesame-laddu', name: 'Sesame Laddu', price: 660, unit: 'kg', category: 'sweets', image: 'https://res.cloudinary.com/dplyldp8e/image/upload/v1768970392/WhatsApp_Image_2026-01-20_at_20.47.03_chvqcb.jpg', description: 'Crunchy sesame laddus with jaggery' },
  { id: 'sunnundalu', name: 'Sunnundalu (Urad Dal Laddu)', price: 560, unit: 'kg', category: 'sweets', image: 'https://res.cloudinary.com/dplyldp8e/image/upload/v1768970393/WhatsApp_Image_2026-01-20_at_20.47.03_1_aztgxh.jpg', description: 'Authentic urad dal laddus' },
  { id: 'coconut-laddu', name: 'Coconut Laddu', price: 580, unit: 'kg', category: 'sweets', image: 'https://keencuisinier.com/wp-content/uploads/2024/08/IMG_8252.jpg', description: 'Fresh coconut laddus with cardamom' },
  { id: 'small-boondi-laddu', name: 'Small Boondi Laddu', price: 420, unit: 'kg', category: 'sweets', image: 'https://www.orderyourchoice.com/118271-large_default/sanna-boondi-laddu.jpg', description: 'Soft and sweet boondi laddus' },
  { id: 'groundnut-chikki', name: 'Groundnut Chikki', price: 420, unit: 'kg', category: 'sweets', image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/peanut-chikki.jpg', description: 'Crunchy peanut brittle' },
  { id: 'cashew-chikki', name: 'Cashew Chikki', price: 1300, unit: 'kg', category: 'sweets', image: 'https://foodwalas.com/cdn/shop/products/16_766560aa-3bbe-4be4-acb8-1a689cde55b3_700x700.jpg?v=1744712146', description: 'Premium cashew brittle' },
   { id: 'pootha-rekulu', name: 'Pootha Rekulu', price: 900, unit: 'kg', category: 'sweets', image: 'https://res.cloudinary.com/dplyldp8e/image/upload/v1768970392/WhatsApp_Image_2026-01-20_at_20.53.54_msuhps.jpg', description: 'Tradational Pootha Rekulu' },
  
  
  // HOT ITEMS / SAVOURIES
  { id: 'kara-poosa', name: 'Kara Poosa', price: 460, unit: 'kg', category: 'savouries', image: 'https://www.godavarivantillu.com/cdn/shop/products/CopyofIMG_7173-Edit_1_1200x1200.jpg?v=1617826056', description: 'Crispy spicy puffed snack' },
  { id: 'spicy-boondi', name: 'Spicy Boondi', price: 440, unit: 'kg', category: 'savouries', image: 'https://res.cloudinary.com/dplyldp8e/image/upload/v1768970391/WhatsApp_Image_2026-01-20_at_21.05.01_ryhysk.jpg', description: 'Spicy chickpea flour drops' },
  { id: 'chekka-vadalu', name: 'Chekka Vadalu', price: 600, unit: 'kg', category: 'savouries', image: 'https://res.cloudinary.com/dplyldp8e/image/upload/v1768970392/WhatsApp_Image_2026-01-20_at_21.07.54_mxyoqq.jpg', description: 'Traditional crispy vadalu' },
  { id: 'mixture', name: 'Mixture', price: 440, unit: 'kg', category: 'savouries', image: 'https://www.gracebakery.in/images/mixture.webp', description: 'Classic South Indian mixture' },
  { id: 'agra-mixture', name: 'Agra Mixture', price: 440, unit: 'kg', category: 'savouries', image: 'https://5.imimg.com/data5/SELLER/Default/2023/5/309021407/CM/JY/OI/12057325/agra-mixture-1684152540044.jpeg', description: 'Famous Agra style mixture' },
  { id: 'janthikalu', name: 'Janthikalu', price: 600, unit: 'kg', category: 'savouries', image: 'https://res.cloudinary.com/dplyldp8e/image/upload/v1768970391/WhatsApp_Image_2026-01-20_at_21.13.52_ei3hbi.jpg', description: 'Traditional spiral snacks' },
  { id: 'chegodilu', name: 'Chegodilu', price: 440, unit: 'kg', category: 'savouries', image: 'https://southindianstore.com/wp-content/uploads/2020/11/chegodilu.jpg', description: 'Crispy ring-shaped snack' },
  { id: 'ribbon-pakoda', name: 'Ribbon Pakoda', price: 440, unit: 'kg', category: 'savouries', image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2018/09/ribbon-pakoda-recipe-1.jpg', description: 'Crunchy ribbon-shaped pakoda' },
  
  // PICKLES (price per 250g)
  { id: 'avakaya', name: 'Avakaya (Mango)', price: 580, unit: 'kg', category: 'pickles', image: 'https://res.cloudinary.com/dplyldp8e/image/upload/v1768970393/WhatsApp_Image_2026-01-20_at_21.18.53_hp90j4.jpg', description: 'Spicy Andhra mango pickle' },
  { id: 'gongura', name: 'Gongura Pickle', price: 580, unit: 'kg', category: 'pickles', image: 'https://res.cloudinary.com/dplyldp8e/image/upload/v1768970391/WhatsApp_Image_2026-01-20_at_21.20.18_h2lwwv.jpg', description: 'Tangy gongura leaf pickle' },
  { id: 'ginger-pickle', name: 'Ginger Pickle', price: 580, unit: 'kg', category: 'pickles', image: 'https://www.oorla.com/cdn/shop/files/Andhra_Ginger_Pickle_2.jpg?v=1752498477&width=1946', description: 'Zesty ginger pickle' },
  { id: 'tomato-pickle', name: 'Tomato Pickle', price: 580, unit: 'kg', category: 'pickles', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7l3o-oC6c461DJxk1nJ81l34HyW7kab1Xyg&s', description: 'Tangy tomato pickle' },
  
  // GHEE
  { id: 'cow-ghee', name: 'Cow Ghee', price: 800, unit: 'kg', category: 'ghee', image: 'https://cdn.shopify.com/s/files/1/0586/8234/3501/files/cow_desi_ghee_image.webp?v=1742634983', description: 'Pure desi cow ghee' },
  { id: 'buffalo-ghee', name: 'Buffalo Ghee', price: 750, unit: 'kg', category: 'ghee', image: 'https://cdn.dotpe.in/longtail/store-items/5739802/DU9gQpjw.jpeg', description: 'Rich buffalo ghee' },
  
  // HONEY
  { id: 'natural-honey', name: 'Natural Honey', price: 460, unit: 'litre', category: 'honey', image: 'https://tpkcashews.com/wp-content/uploads/2023/03/honey-yellow-beekeeper-1958464-e1678271626932.jpg', description: 'Pure natural forest honey' },
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
