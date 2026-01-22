<!-- app/pages/search.vue -->
<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()
const searchQuery = computed(() => route.query.q || '')

// SSR-uyumlu ürün çekme
const { products: allProducts } = useProducts()

// Arama sonuçlarını filtrele
const searchResults = computed(() => {
  if (!searchQuery.value || !allProducts.value) return []
  
  const query = String(searchQuery.value).toLowerCase()
  return allProducts.value.filter(product => 
    product.name.toLowerCase().includes(query) ||
    product.description?.toLowerCase().includes(query) ||
    product.category?.toLowerCase().includes(query)
  )
})
</script>

<template>
  <section class="max-w-5xl mx-auto px-4 py-8">
    <h1 class="text-xl font-semibold mb-4">
      Arama: <span class="font-mono">{{ searchQuery }}</span>
    </h1>
    
    <div v-if="searchResults.length === 0" class="text-gray-600">
      Sonuç bulunamadı.
    </div>
    
    <div v-else class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <ProductCard
        v-for="product in searchResults"
        :key="product.id"
        :id="product.id"
        :title="product.title || product.name"
        :price="product.price"
        :image="product.image"
        :location="product.location"
      />
    </div>
  </section>
</template>
