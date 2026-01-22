<!-- app/pages/deals/[id].vue -->
<script setup lang="ts">
import { computed } from 'vue'
import { deals } from '~/data/deals'

const route = useRoute()

const deal = computed(() => {
  const id = Number(route.params.id)
  return deals.find((d) => d.id === id)
})
</script>

<template>
  <div v-if="deal" class="w-full px-6 py-8 flex flex-col lg:flex-row gap-8">
    <!-- sol: büyük resim -->
    <div class="flex-1 flex items-center justify-center bg-white rounded-lg border">
      <img
        :src="deal.image"
        :alt="deal.title"
        class="max-h-[400px] max-w-full object-contain"
      />
    </div>

    <!-- sağ: bilgiler -->
    <div class="flex-1 space-y-4">
      <h1 class="text-2xl font-semibold">
        {{ deal.title }}
      </h1>

      <div class="flex items-center gap-3">
        <span class="text-3xl font-bold">US ${{ deal.price }}</span>
        <span
          v-if="deal.oldPrice"
          class="text-sm line-through text-gray-500"
        >
          US ${{ deal.oldPrice }}
        </span>
      </div>

      <p class="text-sm text-red-600" v-if="deal.label">
        {{ deal.label }}
      </p>

      <button
        class="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700"
      >
        Add to cart
      </button>
    </div>
  </div>

  <div v-else class="w-full px-6 py-8">
    <p>Deal not found.</p>
  </div>
</template>
