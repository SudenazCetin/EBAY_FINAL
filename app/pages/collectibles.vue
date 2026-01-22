<!-- app/pages/collectibles.vue -->
<script setup lang="ts">
import { collectiblesBestSelling } from '~/data/collectiblesBestSelling'
</script>

<template>
  <div class="flex w-full gap-6 px-6 mt-6">
    <!-- SOL SİDEBAR -->
    <aside class="w-60">
      <h2 class="text-lg font-semibold mb-4">Shop by category</h2>

      <ul class="space-y-2 text-sm text-gray-600">
        <li class="font-semibold text-black">Collectibles &amp; Art</li>
        <li class="pl-3 text-black font-medium">Collectibles</li>
        <li class="pl-3">Advertising</li>
        <li class="pl-3">Animals</li>
        <li class="pl-3">Animation Art &amp; Merchandise</li>
        <li class="pl-3">Autographs</li>
        <li class="pl-3">Baby &amp; Nursery</li>
        <li class="pl-3">Banks &amp; Vending</li>
        <li class="pl-3">Beads</li>
        <li class="pl-3">Casino</li>
        <!-- İstersen diğerlerini de ekleriz -->
      </ul>
    </aside>

    <!-- ORTA ANA ALAN -->
    <main class="flex-1">
      <!-- HERO BANNER: fotoğraf + üstünde yazı -->
      <section class="relative w-full h-[360px] rounded-2xl overflow-hidden">
        <!-- Arka plan görseli -->
        <img
          src="/assets/collectibles/collectibles-hero.jpg"
          alt="Collectibles Hero"
          class="w-full h-full object-cover"
        />

        <!-- Üstteki yazı alanı -->
        <div
          class="absolute inset-0 flex flex-col justify-center pl-10
                 text-gray-900"
        >
          <h1 class="text-4xl font-bold">
            Your heroes, mini-sized
          </h1>

          <p class="mt-3 text-lg max-w-md text-gray-800">
            From superheroes to anime icons find your next favorite Funko.
          </p>
        </div>
      </section>

      <!-- BEST SELLING BLOĞU -->
      <BestSellingGrid
        class="mt-10"
        :products="collectiblesBestSelling"
      />
    </main>
  </div>
</template>
