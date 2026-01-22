<script setup lang="ts">
import { computed } from 'vue'

// SSR-uyumlu data fetching
const { products: allProducts } = useProducts()

const enterpriseProducts = computed(() => {
  return (allProducts.value || []).filter(p => p.category === 'enterprise-networking' || p.categoryId === 'enterprise-networking')
})
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Enterprise Networking</h1>
    <div v-if="enterpriseProducts.length" class="divide-y">
      <div v-for="product in enterpriseProducts" :key="product.id" class="flex items-center py-4 hover:bg-gray-50 transition cursor-pointer">
        <!-- Sol: Ürün görseli -->
        <img :src="product.images?.[0] || product.image" :alt="product.name" class="w-28 h-28 object-contain rounded mr-6 border" />
        <!-- Sağ: Ürün bilgileri -->
        <div class="flex-1">
          <a class="text-[18px] font-semibold text-blue-700 hover:underline mb-1 block" href="#">{{ product.name }}</a>
          <p class="text-[15px] text-gray-700 mb-1">{{ product.description }}</p>
          <div class="text-[22px] font-bold text-black mb-1">{{ typeof product.price === 'number' ? '$' + product.price.toFixed(2) : product.price }}</div>
          <div class="text-[13px] text-gray-500">Kategori: <span class="text-blue-700">{{ product.category || product.categoryId }}</span></div>
        </div>
      </div>
    </div>
    <div v-else class="text-gray-500">No enterprise networking products found.</div>
  </div>
</template>

<style scoped>
/* İsteğe bağlı özel stiller ekleyebilirsin */
</style>
