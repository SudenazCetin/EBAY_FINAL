// app/stores/cartStore.ts
import { reactive, computed } from 'vue'

// Ürün tipi tanımı
export interface CartItem {
  id: number | string
  title: string
  price: number
  image: string
  location?: string
  quantity: number
}

// 🔵 Tüm projede ortak kullanılacak reaktif sepet
export const cartItems = reactive<CartItem[]>([])

// Toplam adet ve toplam fiyat
export const totalCount = computed(() =>
  cartItems.reduce((sum, item) => sum + item.quantity, 0)
)

export const totalPrice = computed(() =>
  cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

// Ürün ekleme
export function addToCart(product: Omit<CartItem, 'quantity'>, options: { quantity?: number } = {}) {
  const quantity = options.quantity ?? 1

  const existing = cartItems.find((i) => i.id === product.id)

  if (existing) {
    existing.quantity += quantity
  } else {
    cartItems.push({
      ...product,
      quantity,
    })
  }

  console.log('cartItems after add:', cartItems)
}

// Miktar değiştirme
export function changeQuantity(id: number | string, delta: number) {
  const item = cartItems.find((i) => i.id === id)
  if (!item) return

  item.quantity += delta
  if (item.quantity <= 0) {
    const index = cartItems.findIndex((i) => i.id === id)
    if (index !== -1) cartItems.splice(index, 1)
  }
}

// Ürün silme
export function removeFromCart(id: number | string) {
  const index = cartItems.findIndex((i) => i.id === id)
  if (index !== -1) {
    cartItems.splice(index, 1)
  }
}

// Tüm sepeti temizleme
export function clearCart() {
  cartItems.splice(0, cartItems.length)
}
