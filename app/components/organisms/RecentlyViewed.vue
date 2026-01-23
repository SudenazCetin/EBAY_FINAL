<template>
  <div class="my-10 px-8 md:px-24">
    <h2 class="text-2xl font-bold mb-4">Your recently viewed items</h2>
    <div v-if="items.length" class="flex items-center">
      <button @click="scrollLeft" class="arrow-btn">&lt;</button>
      <div ref="scrollContainer" class="overflow-x-auto flex gap-6 recently-scroll">
        <NuxtLink
          v-for="item in items"
          :key="item.id"
          :to="`/product/${item.id}`"
          class="min-w-[240px] min-h-[320px] bg-white rounded-xl shadow p-3 flex flex-col items-center relative group hover:shadow-lg transition"
        >
          <button 
            class="absolute top-3 right-3 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-pink-100 transition z-10"
            @click.prevent.stop="toggleLike(item)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" :fill="watchlist.isInWatchlist(item.id) ? '#000' : 'none'" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-black group-hover:text-pink-500">
              <path stroke-linecap="round" stroke-linejoin="round" :stroke-width="watchlist.isInWatchlist(item.id) ? 2 : 2.5" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
            </svg>
          </button>
          <div class="w-60 h-60 flex items-center justify-center bg-gray-100 rounded-lg mb-3">
            <img :src="item.image" class="max-w-full max-h-full object-contain" />
          </div>
          <div class="font-semibold text-center mb-1 line-clamp-2">{{ item.title }}</div>
          <div class="text-lg font-bold mb-1">${{ item.price }}</div>
        </NuxtLink>
      </div>
      <button @click="scrollRight" class="arrow-btn">&gt;</button>
    </div>
    <div v-else class="text-gray-500 text-center py-8">No recently viewed items found.</div>
  </div>
  <WatchlistPreview v-if="previewShow && previewItem" :item="previewItem" :show="previewShow" />
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { app } from '~/utils/firebase'
import WatchlistPreview from './WatchlistPreview.vue'
import { useWatchlistStore } from '~/stores/watchlistStore'

interface RecentlyViewedItem {
  id: string | number
  title: string
  price: number
  image: string
}

const watchlist = useWatchlistStore()

const items = ref<RecentlyViewedItem[]>([])
const previewItem = ref<RecentlyViewedItem | null>(null)
const previewShow = ref(false)

function toggleLike(item: RecentlyViewedItem) {
  if (watchlist.isInWatchlist(item.id)) {
    watchlist.remove(item.id)
  } else {
    watchlist.add(item)
  }
}
function showPreview(item: RecentlyViewedItem) {
  previewItem.value = item
  previewShow.value = true
}
function hidePreview() {
  previewShow.value = false
}

onMounted(async () => {
  // ========== Express API (Aktif) ==========
  try {
    const response = await $fetch<Array<{ items: RecentlyViewedItem[] }>>('http://localhost:4001/api/recentlyViewed')
    if (response && response.length > 0 && response[0]) {
      // İlk kullanıcının items'ını al
      items.value = response[0].items || []
    }
  } catch (e) {
    console.error('Error fetching recently viewed:', e)
  }

  // ========== Firebase (Yorum - Pasif) ==========
  // const db = getFirestore(app)
  // // Burada userId'yi kendi kullanıcı yönetimine göre değiştir!
  // const userId = 'U63PEFg9MjSaXDZ4yUJX'
  // const docRef = doc(db, 'recentlyViewed', userId)
  // const docSnap = await getDoc(docRef)
  // if (docSnap.exists()) {
  //   items.value = docSnap.data().items || []
  // }
})

const scrollContainer = ref<HTMLElement | null>(null)

function scrollLeft() {
  if (scrollContainer.value) scrollContainer.value.scrollLeft -= 250
}
function scrollRight() {
  if (scrollContainer.value) scrollContainer.value.scrollLeft += 250
}
</script>

<style scoped>
.recently-scroll {
  scrollbar-width: thin;
  scrollbar-color: #e0e0e0 transparent;
}
.recently-scroll::-webkit-scrollbar {
  height: 8px;
}
.recently-scroll::-webkit-scrollbar-track {
  background: #f5f5f5;
  border-radius: 10px;
  margin: 0 40px;
}
.recently-scroll::-webkit-scrollbar-thumb {
  background: #d0d0d0;
  border-radius: 10px;
}
.recently-scroll::-webkit-scrollbar-thumb:hover {
  background: #b0b0b0;
}
.arrow-btn {
  background: #fff;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 1.5rem;
  margin: 0 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
}
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
