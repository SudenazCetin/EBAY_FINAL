<!-- app/pages/cart.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import {
  cartItems,
  changeQuantity,
  removeFromCart,
  clearCart
} from '~/stores/cartStore'

const router = useRouter()

// cartItems zaten reactive olduğu için kopya değil direkt referans
const items = cartItems

// Toplam adet
const totalCount = computed(() =>
  items.reduce((sum, item) => sum + item.quantity, 0)
)

// Toplam fiyat
const totalPrice = computed(() =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

const goToHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="bg-white min-h-screen">
    <div class="max-w-7xl mx-auto px-4 py-6">
      <h1 class="text-3xl font-bold mb-6">Cart</h1>

      <!-- SEPET BOŞSA -->
      <div v-if="items.length === 0" class="text-center py-16">
        <p class="text-lg font-medium mb-4">Your cart is empty.</p>
        <p class="text-sm text-gray-600 mb-6">Add items to your cart to see them here.</p>
        <button
          class="bg-blue-600 text-white rounded-full px-8 py-3 font-semibold hover:bg-blue-700"
          @click="goToHome"
        >
          Start shopping
        </button>
      </div>

      <!-- SEPETTE ÜRÜN VARSA - İKİ KOLONLU LAYOUT -->
      <div v-else class="grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-6">
        <!-- SOL: ÜRÜN LİSTESİ -->
        <div class="space-y-4">
          <div
            v-for="item in items"
            :key="item.id"
            class="bg-white border rounded-lg p-4 flex gap-4"
          >
            <!-- Ürün görseli -->
            <div class="w-32 h-32 flex-shrink-0 bg-gray-50 rounded overflow-hidden flex items-center justify-center">
              <img
                :src="item.image"
                :alt="item.title"
                class="max-w-full max-h-full object-contain"
              />
            </div>

            <!-- Ürün bilgileri -->
            <div class="flex-1 flex flex-col">
              <h2 class="text-base font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                {{ item.title }}
              </h2>

              <p class="text-sm text-gray-600 mb-1">Used</p>
              <p class="text-sm text-gray-600 mb-3">{{ item.location || 'Turkey' }}</p>

              <div class="text-xl font-bold text-black mb-4">
                US ${{ item.price.toFixed(2) }}
              </div>

              <p class="text-sm text-green-600 font-medium mb-2">Free shipping</p>
              <p class="text-sm text-gray-500 mb-4">Standard Shipping from Turkey to worldwide</p>
              <p class="text-sm text-gray-600 mb-4">Returns accepted</p>

              <!-- Adet kontrol ve silme -->
              <div class="flex items-center gap-4 mt-auto">
                <div class="flex items-center border rounded">
                  <button
                    class="w-10 h-10 flex items-center justify-center hover:bg-gray-100"
                    @click="changeQuantity(item.id, -1)"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                  <span class="w-12 text-center text-base font-medium">{{ item.quantity }}</span>
                  <button
                    class="w-10 h-10 flex items-center justify-center hover:bg-gray-100"
                    @click="changeQuantity(item.id, 1)"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>

                <button
                  class="text-sm text-blue-600 hover:underline"
                  @click="removeFromCart(item.id)"
                >
                  Save for later
                </button>

                <button
                  class="text-sm text-blue-600 hover:underline"
                  @click="removeFromCart(item.id)"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- SAĞ: SİPARİŞ ÖZETİ -->
        <div class="lg:sticky lg:top-6 h-fit">
          <div class="bg-gray-50 border rounded-lg p-6">
            <h2 class="text-xl font-bold mb-6">Order summary</h2>

            <div class="space-y-3 mb-6">
              <div class="flex justify-between text-sm">
                <span class="text-gray-700">Item ({{ totalCount }})</span>
                <span class="font-semibold">US ${{ totalPrice.toFixed(2) }}</span>
              </div>

              <div class="flex justify-between text-sm">
                <span class="text-gray-700 flex items-center gap-1">
                  Shipping to 77
                  <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span class="font-semibold text-green-600">Free</span>
              </div>
            </div>

            <div class="border-t pt-4 mb-6">
              <div class="flex justify-between text-lg">
                <span class="font-semibold">Subtotal</span>
                <span class="font-bold">US ${{ totalPrice.toFixed(2) }}</span>
              </div>
            </div>

            <button
              class="w-full bg-blue-600 text-white rounded-full py-3 font-semibold text-base hover:bg-blue-700 mb-3"
            >
              Go to checkout
            </button>

            <div class="flex items-center justify-center gap-2 text-sm text-gray-600">
              <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              <span>Purchase protected by <a href="#" class="text-blue-600 hover:underline">eBay Money Back Guarantee</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
