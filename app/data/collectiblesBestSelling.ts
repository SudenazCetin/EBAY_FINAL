// app/data/collectiblesBestSelling.ts

export interface CollectibleProduct {
  id: number
  title: string
  price: string
  location: string
  image: string
}

export const collectiblesBestSelling: CollectibleProduct[] = [
  {
    id: 1,
    title: 'Annual Edition Large Christmas Ornament 2025 Swarovski Crystal',
    price: '14.71',
    location: 'New',
    image: '/assets/collectibles/best/best1.jpg',
  },
  {
    id: 2,
    title: 'BCW Graded Comic Storage Box Black 1CBBGCBLK',
    price: '34.85',
    location: 'New',
    image: '/assets/collectibles/best/best2.jpg',
  },
  {
    id: 3,
    title: 'Premium Throw Blanket – The Citizenry',
    price: '19.99',
    location: 'New',
    image: '/assets/collectibles/best/best3.jpg',
  },
  {
    id: 4,
    title: 'Black Collector Edition Pen',
    price: '9.99',
    location: 'New',
    image: '/assets/collectibles/best/best4.jpg',
  },
]
