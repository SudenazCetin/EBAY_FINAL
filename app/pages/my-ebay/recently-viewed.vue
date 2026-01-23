<script setup lang="ts">
definePageMeta({ layout: 'default' })

// Örnek recently viewed ürünler
const recentlyViewed = ref([
  {
    id: 1,
    title: 'Apple iPhone 15 Pro Max 256GB Natural Titanium',
    price: 1199.99,
    image: '/assets/products/iphone15pro.jpg',
    viewedAt: '2 hours ago',
    condition: 'New'
  },
  {
    id: 2,
    title: 'Sony PlayStation 5 Console',
    price: 499.99,
    image: '/assets/products/ps5.jpg',
    viewedAt: '5 hours ago',
    condition: 'New'
  },
  {
    id: 3,
    title: 'MacBook Pro 16" M3 Max',
    price: 3499.00,
    image: '/assets/products/macbook.jpg',
    viewedAt: '1 day ago',
    condition: 'New'
  }
])
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 py-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Recently Viewed</h1>
        <p class="text-gray-600">Items you've recently looked at</p>
      </div>

      <!-- Products Grid -->
      <div v-if="recentlyViewed.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div v-for="item in recentlyViewed" :key="item.id" class="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
          <div class="aspect-square bg-gray-100 flex items-center justify-center p-4">
            <img :src="item.image" :alt="item.title" class="max-w-full max-h-full object-contain" />
          </div>
          <div class="p-4">
            <div class="text-xs text-gray-500 mb-2">{{ item.viewedAt }}</div>
            <h3 class="font-semibold text-sm mb-2 line-clamp-2 min-h-[40px]">{{ item.title }}</h3>
            <div class="flex items-center justify-between mb-3">
              <span class="text-xl font-bold text-gray-900">${{ item.price.toFixed(2) }}</span>
              <span class="text-xs text-gray-600">{{ item.condition }}</span>
            </div>
            <div class="flex gap-2">
              <button class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors">
                View Item
              </button>
              <button class="p-2 border border-gray-300 rounded-full hover:bg-gray-50">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="bg-white rounded-lg shadow p-12 text-center">
        <svg class="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <h3 class="text-xl font-semibold mb-2">No items viewed yet</h3>
        <p class="text-gray-600 mb-6">Start browsing to see your recently viewed items here</p>
        <NuxtLink to="/" class="inline-block bg-blue-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700 transition-colors">
          Start Shopping
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
