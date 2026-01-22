// app/data/products.ts

export interface Seller {
  name: string
  rating: string
  feedbackCount: number
}

export interface Product {
  id: number
  title: string
  price: number
  image: string
  location: string
  condition: string
  colorOptions: string[]
  storageOptions: string[]
  quantityAvailable: number
  seller: Seller
  images: string[]
  description: string
  categoryId?: string
  categorySlug?: string
  name?: string // eklendi
}

export const products: Product[] = [
  {
    id: 1,
    title: 'Bissell CleanView Pet Slim Corded Vacuum',
    price: 64.99,
    image: '/assets/products/today1.jpeg',
    location: 'Istanbul, Turkey',

    // Detay sayfası için ekstra alanlar:
    condition: 'Brand New',
    colorOptions: ['Black'],
    storageOptions: [],
    quantityAvailable: 5,
    seller: {
      name: 'HomeCare Store',
      rating: '99.2% positive',
      feedbackCount: 1245,
    },
    images: [
      '/assets/products/today1.jpeg',
    ],
    description:
      'Powerful corded vacuum designed for pet owners. Lightweight body and multi-surface brush roll.',
  },

  {
    id: 2,
    title: 'DEWALT DWS779R 120V 15A 12" Sliding Compound Saw',
    price: 349.99,
    image: '/assets/products/today2.jpeg',
    location: 'Ankara, Turkey',

    condition: 'Refurbished',
    colorOptions: ['Yellow/Black'],
    storageOptions: [],
    quantityAvailable: 3,
    seller: {
      name: 'ProTools TR',
      rating: '98.5% positive',
      feedbackCount: 567,
    },
    images: [
      '/assets/products/today2.jpeg',
    ],
    description:
      'High-precision 12" sliding compound saw, ideal for professional wood cutting and construction projects.',
  },

  {
    id: 3,
    title: 'Samsung Galaxy Watch Ultra 47MM LTE',
    price: 239.99,
    image: '/assets/products/today3.jpeg',
    location: 'Izmir, Turkey',

    condition: 'Brand New',
    colorOptions: ['Black', 'Silver'],
    storageOptions: [],
    quantityAvailable: 8,
    seller: {
      name: 'TechWorld TR',
      rating: '97.8% positive',
      feedbackCount: 2100,
    },
    images: [
      '/assets/products/today3.jpeg',
    ],
    description:
      'Rugged LTE smartwatch with advanced health tracking, GPS and long-lasting battery.',
  },

  {
    id: 4,
    title: 'Sony ULT TOWER 10 Wireless Bluetooth Party Speaker',
    price: 714.0,
    image: '/assets/products/today4.jpeg',
    location: 'Bursa, Turkey',

    condition: 'Open Box',
    colorOptions: ['Black'],
    storageOptions: [],
    quantityAvailable: 2,
    seller: {
      name: 'SoundHub Store',
      rating: '99.0% positive',
      feedbackCount: 980,
    },
    images: [
      '/assets/products/today4.jpeg',
    ],
    description:
      'High-power Bluetooth party speaker with deep bass, multi-color lights and wireless streaming.',
  },

  {
    id: 5,
    title: '10K Yellow Gold Cuban Link Chain Necklace',
    price: 337.95,
    image: '/assets/products/today5.jpeg',
    location: 'Antalya, Turkey',

    condition: 'Pre-owned',
    colorOptions: ['Yellow Gold'],
    storageOptions: [],
    quantityAvailable: 1,
    seller: {
      name: 'GoldLine Jewelry',
      rating: '99.6% positive',
      feedbackCount: 430,
    },
    images: [
      '/assets/products/today5.jpeg',
    ],
    description:
      'Elegant 10K yellow gold Cuban link chain, polished finish, perfect for daily wear or gifting.',
  },

  {
    id: 6,
    title: 'Professional Over-Ear Wireless Headphones',
    price: 129.99,
    image: '/assets/products/today6.jpeg',
    location: 'Konya, Turkey',

    condition: 'Brand New',
    colorOptions: ['Black'],
    storageOptions: [],
    quantityAvailable: 12,
    seller: {
      name: 'AudioPro TR',
      rating: '98.9% positive',
      feedbackCount: 1600,
    },
    images: [
      '/assets/products/today6.jpeg',
    ],
    description:
      'Noise-isolating wireless headphones with long battery life and comfortable over-ear design.',
  },

  {
    id: 7,
    title: 'Kitchen Stand Mixer with Stainless Steel Bowl',
    price: 189.5,
    image: '/assets/products/today7.jpeg',
    location: 'Kayseri, Turkey',

    condition: 'Brand New',
    colorOptions: ['Red', 'White'],
    storageOptions: [],
    quantityAvailable: 4,
    seller: {
      name: 'KitchenMaster',
      rating: '97.3% positive',
      feedbackCount: 780,
    },
    images: [
      '/assets/products/today7.jpeg',
    ],
    description:
      'Multi-speed stand mixer with stainless steel bowl, ideal for baking and home cooking.',
  },
]
