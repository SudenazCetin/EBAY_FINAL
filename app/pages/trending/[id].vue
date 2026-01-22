
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '~/utils/firebase'

const route = useRoute()

const trendId = computed(() => String(route.params.id || ''))
const trendMap: Record<string, string> = {
  trend1: 'tech',
  trend2: 'motors',
  trend3: 'luxury',
  trend4: 'collectibles-and-art',
  trend5: 'home-and-garden',
  trend6: 'trading-cards',
  trend7: 'health-and-beauty',
};
const categoryKey = computed(() => trendMap[trendId.value] || trendId.value)

// SSR-uyumlu data fetching
const { data: products, pending: loading } = await useAsyncData(
  `trending-${categoryKey.value}`,
  async () => {
    const q = query(collection(db, 'trending'), where('category', '==', categoryKey.value))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() as any }))
  }
)


const trendTitles: Record<string, string> = {
  trend1: 'Tech',
  trend2: 'Motors',
  trend3: 'Luxury',
  trend4: 'Collectibles and art',
  trend5: 'Home and garden',
  trend6: 'Trading cards',
  trend7: 'Health and beauty',
  tech: 'Tech',
  motors: 'Motors',
  luxury: 'Luxury',
  'collectibles-and-art': 'Collectibles and art',
  'home-and-garden': 'Home and garden',
  'trading-cards': 'Trading cards',
  'health-and-beauty': 'Health and beauty',
}
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Trending: {{ trendTitles[trendId] || trendId }}</h1>
    <div class="grid grid-cols-[260px,1fr] gap-8">
      <!-- SOL: Sidebar -->
      <aside>
        <h2 class="text-sm font-bold mb-3">Shop by category</h2>
        <ul class="text-sm space-y-2">
          <li class="font-semibold mb-2 cursor-pointer text-black">Cameras & Photo</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Cell Phones & Accessories</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Computers/Tablets & Networking</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Home Surveillance</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Major Appliances</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Portable Audio & Headphones</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Surveillance & Smart Home Electronics</li>
          <li class="cursor-pointer text-gray-700 hover:underline">TV, Video & Home Audio</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Vehicle Electronics & GPS</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Video Games & Consoles</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Virtual Reality</li>
        </ul>
      </aside>
      <!-- SAĞ: Ürün listesi -->
      <main>
        <div v-if="loading" class="text-gray-500">Loading...</div>
        <div v-else-if="!products || products.length === 0" class="text-gray-500">No products found for this category.</div>
        <div v-else class="space-y-4">
          <div v-for="product in products" :key="product.id" class="flex items-start bg-white rounded-lg border border-gray-200 shadow-sm p-4 hover:shadow-md transition mb-2">
            <img :src="product.image" :alt="product.name" class="w-32 h-32 object-contain rounded border bg-white mr-4" />
            <div class="flex-1">
              <div class="text-[20px] font-bold text-black leading-tight mb-1">{{ product.name }}</div>
              <div class="text-[15px] text-gray-700 mb-1">{{ product.description }}</div>
              <div class="text-[22px] font-bold text-black mb-1">${{ product.price }}</div>
              <div class="flex items-center text-[13px] mt-1">
                <span class="text-gray-500">Free international shipping</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
</style>
