<!-- app/components/organisms/HeroSlider.vue -->
<template>
  <div v-if="!loading && sliders.length" class="relative w-full h-[420px] md:h-[480px] rounded-2xl overflow-hidden bg-amber-500">
    <div
      class="flex w-full h-full transition-transform duration-700"
      :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
    >
      <div
        v-for="(slider, index) in sliders"
        :key="slider.id"
        class="min-w-full h-full relative"
        :class="index === 0 ? 'bg-white' : index === 1 ? 'bg-amber-500' : 'bg-black'"
      >
        <img :src="slider.image" class="w-full h-full object-cover opacity-0" />
        <div class="absolute top-1/3 left-10 md:left-20 drop-shadow-2xl" 
             :class="index === 0 ? 'text-black' : index === 1 ? 'text-amber-900' : 'text-white'">
          <h2 class="text-3xl md:text-5xl font-bold mb-3 max-w-xl">
            {{ slider.title }}
          </h2>
          <p class="text-lg md:text-xl mb-6 max-w-md">
            {{ slider.description }}
          </p>
          <NuxtLink to="/search" class="inline-block font-bold py-3 px-8 rounded-full transition-all"
            :class="index === 0 ? 'bg-black hover:bg-gray-800 text-white' : index === 1 ? 'bg-amber-900 hover:bg-amber-800 text-amber-50' : 'bg-white hover:bg-gray-100 text-black'">
            {{ index === 0 ? 'Shop now' : index === 1 ? 'Do your thing' : 'Start' }}
          </NuxtLink>
        </div>
        <!-- HOTSPOTS -->
        <div v-if="slider.hotspots && slider.hotspots.length" class="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 flex gap-6 items-center">
          <NuxtLink
            v-for="(hotspot, i) in slider.hotspots"
            :key="i"
            :to="getHotspotLink(hotspot.title)"
            class="cursor-pointer hover:scale-105 transition-all flex flex-col items-center"
          >
            <div class="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center bg-white/10 rounded-lg p-3">
              <img :src="hotspot.link" :alt="hotspot.title" class="w-full h-full object-contain" />
            </div>
            <span class="text-black font-bold text-base mt-3 px-4 py-2 rounded-full"
              :class="index === 0 ? 'bg-white' : index === 1 ? 'bg-amber-400' : 'bg-white'">
              {{ hotspot.title }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- DOTS -->
    <div class="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
      <button
        v-for="(slider, i) in sliders"
        :key="i"
        @click="activeIndex = i"
        :class="[
          'w-3 h-3 rounded-full transition-all',
          activeIndex === i ? 'bg-white' : 'bg-white/40'
        ]"
      ></button>
    </div>
    <!-- CONTROLS -->
    <div class="absolute bottom-5 right-6 flex items-center gap-3">
      <button @click="prevSlide" class="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white shadow">
        <span class="text-lg">&lt;</span>
      </button>
      <button @click="nextSlide" class="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white shadow">
        <span class="text-lg">&gt;</span>
      </button>
      <button @click="togglePause" class="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white shadow">
        <span v-if="isPaused" class="text-sm">▶</span>
        <span v-else class="text-lg">||</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useSliders } from '~/composables/useSliders'
const { sliders, loading } = useSliders()

const activeIndex = ref(0)
const isPaused = ref(false)
let intervalId: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  intervalId = setInterval(() => {
    if (!isPaused.value && sliders.value.length) {
      activeIndex.value = (activeIndex.value + 1) % sliders.value.length
    }
  }, 3500)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})

const nextSlide = () =>
  (activeIndex.value = (activeIndex.value + 1) % sliders.value.length)

const prevSlide = () =>
  (activeIndex.value = (activeIndex.value - 1 + sliders.value.length) % sliders.value.length)

const togglePause = () =>
  (isPaused.value = !isPaused.value)

function hotspotStyle(hotspot: any) {
  return {
    position: 'absolute',
    left: `${hotspot.x * 100}%`,
    top: `${hotspot.y * 100}%`,
    width: `${hotspot.width * 100}%`,
    height: `${hotspot.height * 100}%`,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255,255,255,0.1)'
  }
}

function getHotspotLink(title: string) {
  const titleLower = title.toLowerCase()
  if (titleLower.includes('motor')) return '/search?category=motors'
  if (titleLower.includes('electronic')) return '/search?category=electronics'
  if (titleLower.includes('collectible') || titleLower.includes('art')) return '/collectibles'
  return '/search'
}
</script>
