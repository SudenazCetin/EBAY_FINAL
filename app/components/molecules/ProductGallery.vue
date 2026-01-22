<!-- src/components/molecules/ProductGallery.vue -->
<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
})

const selectedIndex = ref(0)

const currentImage = computed(() => {
  return props.images[selectedIndex.value] || 'https://via.placeholder.com/600x600?text=No+Image'
})

function selectImage(index) {
  selectedIndex.value = index
}
</script>

<template>
  <div class="grid grid-cols-[80px_1fr] gap-4">
    <!-- küçük resimler (sol) -->
    <div class="flex flex-col gap-3 max-h-[480px] overflow-y-auto">
      <button
        v-for="(img, index) in images"
        :key="index"
        type="button"
        @click="selectImage(index)"
        class="border rounded-md overflow-hidden focus:outline-none"
        :class="index === selectedIndex ? 'border-blue-500' : 'border-gray-200'"
      >
        <img
          :src="img"
          class="w-16 h-16 object-cover"
        />
      </button>
    </div>

    <!-- büyük resim (orta) -->
    <div class="border border-gray-200 rounded-lg bg-white flex items-center justify-center min-h-[400px]">
      <img
        :src="currentImage"
        class="max-h-[440px] max-w-full object-contain"
      />
    </div>
  </div>
</template>
