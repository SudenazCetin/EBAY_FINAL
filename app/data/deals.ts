// app/data/deals.ts

export interface Deal {
  id: number
  title: string
  price: number
  oldPrice?: number
  label?: string
  image: string
}

export const deals: Deal[] = [
  {
    id: 1,
    title: 'Milwaukee M12 FUEL 1/2" Hammer Drill Driver',
    price: 65.98,
    oldPrice: 79.99,
    label: 'Almost gone',
    image: '/assets/deals/deal1.jpg',
  },
  {
    id: 2,
    title: 'Caterpillar Men Invader Mid Work Boots',
    price: 84.0,
    oldPrice: 119.0,
    label: 'Limited stock',
    image: '/assets/deals/deal2.jpg',
  },
  {
    id: 3,
    title: 'Sony WH-CH720N Noise Cancelling Headphones',
    price: 49.99,
    oldPrice: 149.99,
    label: '67% OFF',
    image: '/assets/deals/deal3.jpg',
  },
  {
    id: 4,
    title: 'Crocs Adult Specialist II Clogs Work Shoes',
    price: 29.99,
    oldPrice: 49.99,
    label: 'Almost gone',
    image: '/assets/deals/deal4.jpg',
  },
  {
    id: 5,
    title: 'Apple iPhone 14 128GB (Unlocked)',
    price: 299.95,
    oldPrice: 399.95,
    label: 'eBay Refurbished',
    image: '/assets/deals/deal5.jpg',
  },
  {
    id: 6,
    title: 'The North Face TNF Glacier Fleece Jacket',
    price: 65.68,
    oldPrice: 99.99,
    label: 'New',
    image: '/assets/deals/deal6.jpg',
  },
]
