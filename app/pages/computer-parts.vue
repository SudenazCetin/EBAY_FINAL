<script setup lang="ts">
import { computed } from 'vue'

// SSR-uyumlu data fetching
const { products: allProducts } = useProducts()

const computerPartsProducts = computed(() => {
  return (allProducts.value || []).filter(p => p.category === 'computer-parts' || p.categoryId === 'computer-parts')
})
</script>

<template>
  <div class="max-w-[1200px] mx-auto px-2 py-8 ml-8" style="background:white;">
    <h1 class="text-3xl font-bold mb-6">Computer Parts</h1>
    <div class="grid grid-cols-[260px,1fr] gap-6 bg-white">
      <!-- SOL: Sidebar -->
      <aside>
        <h2 class="text-sm font-semibold mb-3">Shop by category</h2>
        <ul class="text-sm space-y-1">
          <li class="font-semibold mb-2 cursor-pointer text-black">Computer Components & Parts</li>
          <li class="cursor-pointer text-gray-700 hover:underline">CPUs/Processors</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Computer Cases & Cooling</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Graphics/Video Cards</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Interface/Add-On Cards</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Laptop Replacement Parts</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Memory (RAM)</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Motherboard & CPU Combos</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Motherboard Components & Accs</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Motherboards</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Other Components & Parts</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Power Supplies</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Power Supply Testers</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Sound Cards (Internal)</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Video Capture & TV Tuner Cards</li>
        </ul>
      </aside>
      <!-- SAĞ: Ürün listesi -->
      <main>
                <!-- Filtre baloncukları -->
                <section class="flex flex-wrap gap-3 text-xs mt-2 mb-6">
                  <button class="px-3 py-1 rounded-full border border-black text-xs font-medium bg-white text-black hover:bg-gray-100 shadow-sm">
                    Brand <span class="ml-1">&#9660;</span>
                  </button>
                  <button class="px-3 py-1 rounded-full border border-black text-xs font-medium bg-white text-black hover:bg-gray-100 shadow-sm">
                    Most Suitable For <span class="ml-1">&#9660;</span>
                  </button>
                  <button class="px-3 py-1 rounded-full border border-black text-xs font-medium bg-white text-black hover:bg-gray-100 shadow-sm">
                    Condition <span class="ml-1">&#9660;</span>
                  </button>
                  <button class="px-3 py-1 rounded-full border border-black text-xs font-medium bg-white text-black hover:bg-gray-100 shadow-sm">
                    Price <span class="ml-1">&#9660;</span>
                  </button>
                  <button class="px-3 py-1 rounded-full border border-black text-xs font-medium bg-white text-black hover:bg-gray-100 shadow-sm">
                    Buying Format <span class="ml-1">&#9660;</span>
                  </button>
                  <button class="px-3 py-1 rounded-full border border-black text-xs font-bold bg-black text-white flex items-center gap-2 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                      <rect x="4" y="5" width="12" height="2" rx="1" />
                      <rect x="6" y="9" width="8" height="2" rx="1" />
                      <rect x="8" y="13" width="4" height="2" rx="1" />
                    </svg>
                    All Filters
                  </button>
                </section>
                        <div class="w-full border-b border-gray-200 mb-2"></div>
                        <div class="flex items-center justify-between text-xs text-gray-600 mb-1">
                          <span>7,445,813 results</span>
                          <div class="flex items-center gap-2">
                            <span class="flex items-center gap-1">
                              <span class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block mr-1" viewBox="0 0 16 16" fill="none">
                                  <path d="M5 3V11" stroke="#222" stroke-width="1.2" stroke-linecap="round"/>
                                  <path d="M5 3L3.5 4.5" stroke="#222" stroke-width="1.2" stroke-linecap="round"/>
                                  <path d="M5 3L6.5 4.5" stroke="#222" stroke-width="1.2" stroke-linecap="round"/>
                                  <path d="M11 13V5" stroke="#222" stroke-width="1.2" stroke-linecap="round"/>
                                  <path d="M11 13L9.5 11.5" stroke="#222" stroke-width="1.2" stroke-linecap="round"/>
                                  <path d="M11 13L12.5 11.5" stroke="#222" stroke-width="1.2" stroke-linecap="round"/>
                                </svg>
                                Sort: <span class="font-medium text-black">Best Match</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block ml-1" viewBox="0 0 16 16" fill="none"><path d="M6 10L8 12L10 10" stroke="#222" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                              </span>
                            </span>
                            <span class="flex items-center gap-1">
                              <!-- List icon with dots and lines, and down arrow -->
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" viewBox="0 0 16 16" fill="none">
                                <circle cx="3" cy="4" r="1" fill="#222"/>
                                <rect x="5" y="3.2" width="8" height="1" rx="0.5" fill="#222"/>
                                <circle cx="3" cy="8" r="1" fill="#222"/>
                                <rect x="5" y="7.2" width="8" height="1" rx="0.5" fill="#222"/>
                                <circle cx="3" cy="12" r="1" fill="#222"/>
                                <rect x="5" y="11.2" width="8" height="1" rx="0.5" fill="#222"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" viewBox="0 0 16 16" fill="none"><path d="M6 10L8 12L10 10" stroke="#222" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </span>
                          </div>
                        </div>
        <div v-if="computerPartsProducts.length" class="space-y-4">
          <div v-for="product in computerPartsProducts" :key="product.id" class="flex items-start mb-2">
            <!-- Sol: Ürün görseli -->
            <div class="w-48 h-48 flex-shrink-0 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center mr-4">
              <img :src="product.images?.[0] || product.image" :alt="product.name" class="max-w-[85%] max-h-[85%] object-contain" />
            </div>
            <!-- Sağ: Ürün bilgileri -->
            <div class="flex-1">
              <div class="text-base font-normal text-black leading-tight mb-1">{{ product.name }}</div>
              <div class="text-sm font-normal text-gray-700 mb-1">{{ product.description }}</div>
              <div class="text-lg font-bold text-black mb-1">{{ typeof product.price === 'number' ? '$' + product.price.toFixed(2) : product.price }}</div>
              <div class="text-xs font-normal text-gray-500">Free international shipping</div>
            </div>
          </div>
        </div>
        <div v-else class="text-gray-500">No computer parts found.</div>
      </main>
    </div>
  </div>
</template>

<style>
html, body, #__nuxt, #__layout, #app {
  background: #fff !important;
}
</style>
