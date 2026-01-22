<!-- app/pages/my-ebay/[...slug].vue -->
<!-- Tüm My eBay rotaları için catch-all sayfa -->
<script setup lang="ts">
const route = useRoute()

// URL'deki slug dizisini al
const slugArray = computed(() => {
  const slug = route.params.slug
  if (Array.isArray(slug)) return slug
  return slug ? [slug] : []
})

// Başlık oluştur
const pageTitle = computed(() => {
  const titleMap: Record<string, string> = {
    'summary': 'Summary',
    'recently-viewed': 'Recently Viewed',
    'bids-offers': 'Bids/Offers',
    'watchlist': 'Watchlist',
    'purchase-history': 'Purchase History',
    'buy-again': 'Buy Again',
    'selling': 'Selling',
    'saved-feed': 'Saved Feed',
    'saved-searches': 'Saved Searches',
    'saved-sellers': 'Saved Sellers',
    'payments': 'Payments',
    'my-garage': 'My Garage',
    'preferences': 'Preferences',
    'my-collection': 'My Collection',
    'messages': 'Messages',
    'psa-vault': 'PSA Vault',
  }
  
  const key = slugArray.value[0] || 'summary'
  return titleMap[key] || 'My eBay'
})

import { useWatchlistStore } from '~/stores/watchlistStore'
const watchlist = useWatchlistStore()
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-12">
    <h1 class="text-2xl font-bold mb-6">My eBay - {{ pageTitle }}</h1>
    <div v-if="slugArray[0] === 'watchlist'">
      <div v-if="watchlist.items.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div v-for="item in watchlist.items" :key="item.id" class="bg-white rounded-xl shadow p-4 flex flex-col items-center">
          <img :src="item.image" class="w-40 h-40 object-contain mb-3 rounded-lg bg-gray-100" />
          <div class="font-semibold text-center mb-1 line-clamp-2">{{ item.title }}</div>
          <div class="text-lg font-bold mb-1">${{ item.price }}</div>
        </div>
      </div>
      <div v-else class="text-gray-500 text-center py-8">Henüz watchlist'inize ürün eklemediniz.</div>
    </div>
    <div v-else class="bg-white rounded-lg shadow p-8">
      <p class="text-gray-600">
        Bu sayfa henüz geliştirme aşamasındadır. Yakında buradan hesap bilgilerinize erişebileceksiniz.
      </p>
      <div class="mt-6 flex gap-4">
        <NuxtLink 
          to="/" 
          class="px-6 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700"
        >
          Ana Sayfaya Dön
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
