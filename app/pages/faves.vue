<!-- app/pages/faves.vue -->
<script setup lang="ts">
import { deals } from '~/data/deals'
</script>

<template>
  <div class="w-full">
    <section class="px-6 py-8">
      <h1 class="text-2xl font-semibold mb-6 text-center tracking-wide">
        ALL YOUR FAVES ARE HERE
      </h1>

      <p class="text-center text-gray-600 mb-8">
        Refresh your space, elevate your style and power your work.
      </p>

      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        <NuxtLink
          v-for="deal in deals"
          :key="deal.id"
          :to="`/deals/${deal.id}`"
          class="border rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow"
        >
          <!-- Görsel -->
          <div class="w-full h-56 flex items-center justify-center bg-white">
            <img
              :src="deal.image"
              class="max-h-full max-w-full object-contain"
              :alt="deal.title"
            />
          </div>

          <!-- Bilgi -->
          <div class="p-4 space-y-1">
            <h2 class="text-sm font-medium line-clamp-2">
              {{ deal.title }}
            </h2>

            <div class="flex items-center gap-2">
              <span class="text-lg font-semibold">
                US ${{ deal.price }}
              </span>

              <span
                v-if="deal.oldPrice"
                class="text-xs line-through text-gray-500"
              >
                US ${{ deal.oldPrice }}
              </span>
            </div>

            <p v-if="deal.label" class="text-xs text-red-600">
              {{ deal.label }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
