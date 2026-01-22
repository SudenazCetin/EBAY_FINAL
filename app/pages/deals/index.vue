<!-- app/pages/deals/index.vue -->
<script setup lang="ts">
import { deals } from '~/data/deals'
</script>

<template>
  <div class="w-full">

    <!-- 🔵 SPOTLIGHT DEAL (En üst büyük reklam bölümü) -->
    <section class="px-6 py-8">
      <h1 class="text-2xl font-semibold mb-6 text-center tracking-wide">
        SPOTLIGHT DEAL
      </h1>

      <div class="flex flex-col lg:flex-row gap-8 border rounded-xl p-6 bg-white">
        <!-- Sol Görsel -->
        <div class="flex-1 flex items-center justify-center">
          <img
            src="/assets/deals/spotlight.jpg"
            alt="Spotlight"
            class="w-full max-w-xl rounded-lg object-contain"
          />
        </div>

        <!-- Sağ Bilgi -->
        <div class="flex-1 flex flex-col justify-center space-y-4">
          <h2 class="text-3xl font-semibold">
            N9 and Tutorial for Set.
          </h2>

          
          <p class="text-gray-600 text-lg">Free shipping</p>

          
        </div>
      </div>
    </section>

    <!-- 🔵 FEATURED DEALS -->
    <section class="px-6 pb-14">
      <h1 class="text-2xl font-semibold mb-6 text-center tracking-wide">
        FEATURED DEALS
      </h1>

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

<style scoped>
/* eBay görünümü için ufak dokunuş */
section {
  background: #fff;
}
</style>
