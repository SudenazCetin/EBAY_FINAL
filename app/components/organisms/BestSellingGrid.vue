<!-- app/components/organisms/BestSellingGrid.vue -->
<script setup lang="ts">
interface Product {
  id: number | string
  title: string
  price: string | number
  image: string
  location?: string
  stars?: number
  reviews?: number
}

interface Props {
  products: Product[]
}

defineProps<Props>()
</script>

<template>
  <section class="mt-10">
    <div class="flex items-center justify-between px-2">
      <h2 class="text-2xl font-semibold">Best selling</h2>
      <a href="#" class="text-sm text-blue-600 hover:underline">See all</a>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-6">
      <div
        v-for="item in products"
        :key="item.id"
        class="cursor-pointer"
      >
        <!-- Image -->
        <div class="w-full h-[200px] rounded-lg overflow-hidden bg-white shadow-sm">
          <img
            :src="item.image"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Title -->
        <p class="mt-3 text-sm font-medium leading-5 line-clamp-2">
          {{ item.title }}
        </p>

        <!-- Price -->
        <p class="text-black font-semibold mt-1">
          ${{ item.price }} {{ item.location }}
        </p>

        <!-- Stars (opsiyonel) -->
        <div v-if="item.stars" class="flex items-center text-yellow-500 mt-1">
          <span v-for="n in item.stars" :key="n">★</span>
          <span class="text-gray-500 ml-1 text-xs">({{ item.reviews }})</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Çok uzun ürün isimlerini kırpma */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
