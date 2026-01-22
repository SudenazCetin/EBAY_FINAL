<!-- app/pages/index.vue -->

<script setup lang="ts">
import RecentlyViewed from '~/components/organisms/RecentlyViewed.vue'
import { computed } from 'vue'

// SSR-uyumlu data fetching
const { products: allProducts } = useProducts()

const featuredProducts = computed(() =>
  (allProducts.value || []).slice(0, 8).map(p => ({
    ...p,
    title: p.name
  }))
)

const futureCategories = [
  {
    id: 'laptops',
    label: 'Laptops',
    image: '/assets/categories/product1.jpg',
  },
  {
    id: 'computer-parts',
    label: 'Computer parts',
    image: '/assets/categories/product2.jpg',
  },
  {
    id: 'smartphones',
    label: 'Smartphones',
    image: '/assets/categories/product3.jpeg',
  },
  {
    id: 'networking',
    label: 'Enterprise networking',
    image: '/assets/categories/product4.jpeg',
  },
  {
    id: 'tablets',
    label: 'Tablets and ebooks',
    image: '/assets/categories/product5.jpg',
  },
  {
    id: 'storage',
    label: 'Storage and blank media',
    image: '/assets/categories/product6.jpg',
  },
  {
    id: 'lenses',
    label: 'Lenses and filters',
    image: '/assets/categories/product7.jpg',
  },
]

const trendingCategories = [
  {
    id: 'trend1',
    label: 'Tech',
    image: '/assets/trending/trend1.jpg',
  },
  {
    id: 'trend2',
    label: 'Motors',
    image: '/assets/trending/trend2.jpg',
  },
  {
    id: 'trend3',
    label: 'Luxury',
    image: '/assets/trending/trend3.jpg',
  },
  {
    id: 'trend4',
    label: 'Collectibles and art',
    image: '/assets/trending/trend4.jpg',
  },
  {
    id: 'trend5',
    label: 'Home and garden',
    image: '/assets/trending/trend5.jpg',
  },
  {
    id: 'trend6',
    label: 'Trading cards',
    image: '/assets/trending/trend6.jpg',
  },
  {
    id: 'trend7',
    label: 'Health and beauty',
    image: '/assets/trending/trend7.jpg',
  },
]
</script>

<template>
  <div class="w-full">
    <!-- HERO SLIDER -->
    <section class="w-full px-3 md:px-8 lg:px-12">
      <ClientOnly>
        <HeroSlider />
        <template #fallback>
          <div class="w-full h-[420px] md:h-[480px] rounded-2xl bg-gray-200 animate-pulse"></div>
        </template>
      </ClientOnly>
    </section>

    <!-- Shopping made easy -->
    <section class="w-full flex justify-center my-8">
      <div class="bg-[#fafafa] border border-[#ededed] rounded-2xl px-10 py-4 flex flex-col md:flex-row items-center justify-between max-w-[1700px] w-full">
        <div class="flex flex-col items-start gap-1">
          <h2 class="text-2xl font-bold mb-1 text-black">Shopping made easy</h2>
          <p class="text-gray-700 text-base">Enjoy reliability, secure deliveries and hassle-free returns.</p>
        </div>
        <NuxtLink to="/" class="px-7 py-2 bg-black text-white rounded-full text-lg font-semibold hover:bg-gray-900 transition mt-4 md:mt-0">Start now</NuxtLink>
      </div>
    </section>
    <RecentlyViewed />

    <!-- PAGE CONTENT -->
    <div class="w-full px-3 md:px-8 lg:px-12 py-8 space-y-12">
      <!-- THE FUTURE IN YOUR HANDS -->
      <section class="px-8 md:px-24 py-8">
        <h2 class="text-xl font-semibold mb-4">The future in your hands</h2>

        <div
          class="flex gap-6 overflow-x-auto md:grid md:grid-cols-4 lg:grid-cols-7 md:overflow-visible"
        >
          <!-- KATEGORİ KARTLARI -->
          <NuxtLink
            v-for="cat in futureCategories"
            :key="cat.id"
            :to="cat.id === 'laptops' ? '/laptops' : cat.id === 'smartphones' ? '/smartphones' : cat.id === 'computer-parts' ? '/computer-parts' : cat.id === 'networking' ? '/enterprise-networking' : `/category/${cat.id}`"
            class="flex flex-col items-center gap-2 min-w-[150px]"
          >
            <div
              class="w-[150px] h-[150px] md:w-[165px] md:h-[165px] rounded-full bg-[#d1d1d1] flex items-center justify-center overflow-hidden"
            >
              <img
                :src="cat.image"
                :alt="cat.label"
                class="w-full h-full object-cover rounded-full"
              />
            </div>

            <span class="text-sm font-medium text-center">
              {{ cat.label }}
            </span>
          </NuxtLink>
        </div>
      </section>

      <!-- TRENDING ON EBAY -->
      <section class="px-8 md:px-24 py-8">
        <h2 class="text-xl font-semibold mb-4">Trending on eBay</h2>

        <div
          class="flex gap-6 overflow-x-auto md:grid md:grid-cols-4 lg:grid-cols-7 md:overflow-visible"
        >
          <NuxtLink
            v-for="cat in trendingCategories"
            :key="cat.id"
            :to="`/trending/${cat.id}`"
            class="flex flex-col items-center gap-2 min-w-[150px]"
          >
            <div
              class="w-[150px] h-[150px] md:w-[165px] md:h-[165px] rounded-full bg-[#d1d1d1] flex items-center justify-center overflow-hidden"
            >
              <img
                :src="cat.image"
                :alt="cat.label"
                class="w-full h-full object-cover rounded-full"
              />
            </div>

            <span class="text-sm font-medium text-center">
              {{ cat.label }}
            </span>
          </NuxtLink>
        </div>
      </section>

      <!-- Öne Çıkanlar ve Bannerlar -->
      <!-- ReturnsBanner bileşeni, sadece en alttaki 2 banner kalsın -->
      <section class="px-8 md:px-24">
        <ReturnsBanner :limit="2" />
      </section>
    </div>
  </div>
</template>
