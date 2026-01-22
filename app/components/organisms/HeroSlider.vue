<!-- app/components/organisms/HeroSlider.vue -->
<template>
  <div v-if="!loading && sliders.length" class="relative w-full h-[420px] md:h-[480px] rounded-2xl overflow-hidden bg-gray-200">
    <div
      class="flex w-full h-full transition-transform duration-700"
      :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
    >
      <div
        v-for="(slider, index) in sliders"
        :key="slider.id"
        class="min-w-full h-full relative"
      >
        <img :src="slider.image" class="w-full h-full object-cover" />
        <div class="absolute top-1/3 left-10 md:left-20 text-white drop-shadow-2xl">
          <h2 class="text-3xl md:text-5xl font-bold mb-3 max-w-xl">
            {{ slider.title }}
          </h2>
          <p class="text-lg md:text-xl mb-6 max-w-md">
            {{ slider.description }}
          </p>
        </div>
        <!-- HOTSPOTS -->
        <div
          v-for="(hotspot, i) in slider.hotspots"
          :key="i"
          class="hotspot"
          :style="hotspotStyle(hotspot)"
          @click="goTo(hotspot.link)"
        >
          <span class="hotspot-title">{{ hotspot.title }}</span>
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

function goTo(link: string) {
  window.open(link, '_blank')
}
</script>
