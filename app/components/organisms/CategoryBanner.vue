<template>
  <div v-if="banner" class="w-full flex justify-center mb-8">
    <div class="w-full max-w-5xl rounded-2xl overflow-hidden flex items-center bg-white shadow border border-gray-200">
      <img :src="banner.imageUrl" :alt="banner.title" class="object-cover w-[340px] h-[180px] md:w-[420px] md:h-[220px]" />
      <div class="flex-1 p-6 md:p-10">
        <h2 class="text-2xl md:text-3xl font-bold mb-2">{{ banner.title }}</h2>
        <p class="text-lg text-gray-700">{{ banner.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { collection, getDocs } from 'firebase/firestore'
import { db } from '~/utils/firebase'
import { ref, onMounted } from 'vue'

const props = defineProps<{ slug: string }>()
const banner = ref<any>(null)

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'categoryBanners'))
  const banners = querySnapshot.docs.map(doc => {
    const d = doc.data()
    return {
      ...d,
      imageUrl: d.imageUrl || d.image
    }
  })
  // slug ile eşleşen bannerı bul
  banner.value = banners.find(b => b.slug === props.slug) || null
})
</script>
