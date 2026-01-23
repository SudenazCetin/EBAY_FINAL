<template>
  <div v-if="spotlight" class="w-full flex justify-center">
    <div class="w-full max-w-5xl bg-white border border-gray-200 rounded-2xl overflow-hidden my-8 shadow-sm">
      <div class="w-full text-center pt-6 pb-2 bg-white">
        <span class="block text-base md:text-lg tracking-widest font-normal text-black uppercase">SPOTLIGHT DEAL</span>
      </div>
      <div class="flex flex-col md:flex-row items-center">
        <div v-if="spotlight.imageUrl" class="flex-1 flex justify-center items-center bg-white min-h-[260px] md:min-h-[320px]">
          <img :src="spotlight.imageUrl" :alt="spotlight.title" class="object-contain max-h-[220px] md:max-h-[300px] w-auto" />
        </div>
        <div class="flex-1 p-8 md:p-12 flex flex-col justify-center">
          <h2 class="text-2xl md:text-3xl mb-2 tracking-wide">{{ spotlight.title }}</h2>
          <p class="text-lg mb-4 tracking-wide">{{ spotlight.description }}</p>
          <div class="flex items-center gap-4 mb-2">
            <span class="text-xl md:text-2xl text-black tracking-wide">US ${{ spotlight.price }}</span>
            <span v-if="spotlight.oldPrice" class="line-through text-gray-500 tracking-wide">US ${{ spotlight.oldPrice }}</span>
            <span v-if="spotlight.discount" class="text-green-600 tracking-wide">{{ spotlight.discount }} OFF</span>
          </div>
          <div v-if="spotlight.refurbished" class="text-blue-700 font-semibold flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
            {{ spotlight.refurbishedLabel || 'eBay Refurbished' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { collection, getDocs } from 'firebase/firestore'
// import { db } from '~/utils/firebase'
import { ref, onMounted } from 'vue'

const spotlight = ref<any>(null)

onMounted(async () => {
  // ========== Express API (Aktif) ==========
  try {
    const response = await $fetch('http://localhost:4001/api/spotlightDeals')
    const docs = response as any[]
    if (docs.length > 0) {
      spotlight.value = docs[docs.length - 1]
    }
  } catch (e) {
    console.error('Error fetching spotlight deals:', e)
  }
  
  // ========== Firebase (Yorum - Pasif) ==========
  // const querySnapshot = await getDocs(collection(db, 'spotlightDeals'))
  // const docs = querySnapshot.docs.map(doc => doc.data())
  // if (docs.length > 0) {
  //   spotlight.value = docs[docs.length - 1]
  // }
})
</script>
