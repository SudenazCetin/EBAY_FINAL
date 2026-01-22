<template>
  <div v-if="deals.length" class="w-full flex flex-col items-center">
    <div class="w-full max-w-5xl bg-white border border-gray-200 rounded-2xl overflow-hidden mb-8 shadow-sm">
      <div class="w-full text-center pt-6 pb-2 bg-white">
        <span class="block text-base md:text-lg tracking-widest font-normal text-black uppercase">FEATURED DEALS</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        <div v-for="deal in deals" :key="deal.title" class="bg-white border rounded-lg flex flex-col items-center p-4">
          <img :src="deal.image" :alt="deal.title" class="object-contain h-32 mb-2" />
          <div class="w-full flex flex-col items-start">
            <h3 class="text-base mb-1 tracking-wide">{{ deal.title }}</h3>
            <span class="text-lg text-black tracking-wide">US ${{ deal.price }}</span>
            <span v-if="deal.label" class="text-red-600 text-sm font-semibold">{{ deal.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { collection, getDocs } from 'firebase/firestore'
import { db } from '~/utils/firebase'
import { ref, onMounted } from 'vue'

const deals = ref<any[]>([])

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'featuredDeals'))
  deals.value = querySnapshot.docs.map(doc => doc.data())
})
</script>
