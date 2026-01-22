<script setup lang="ts">
import { computed } from 'vue'

// SSR-uyumlu data fetching
const { products: allProducts } = useProducts()

const smartphoneProducts = computed(() => {
  return (allProducts.value || []).filter(p => p.category === 'smartphones' || p.categoryId === 'smartphones')
})
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-8 ml-8">
    <h1 class="text-3xl font-bold mb-6">Smartphones</h1>
    <div class="grid grid-cols-[260px,1fr] gap-8 w-full">
      <!-- SOL: Sidebar -->
      <aside>
        <h2 class="text-sm font-semibold mb-3">Shop by category</h2>
        <ul class="text-sm space-y-1">
          <li class="font-semibold mb-2 cursor-pointer text-black">Cell Phones & Smartphones</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Cell Phone Accessories</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Display Phones</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Mixed Lots</li>
          <li class="cursor-pointer text-gray-700 hover:underline">PDA Accessories</li>
          <li class="cursor-pointer text-gray-700 hover:underline">PDAs</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Phone Cards & SIM Cards</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Portable Audio & Headphones</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Smart Watches</li>
          <li class="cursor-pointer text-gray-700 hover:underline">Vintage Cell Phones</li>
        </ul>
      </aside>
      <!-- SAĞ: Ürün listesi -->
      <main>
        <!-- Filtre baloncukları -->
        <section class="flex gap-3 text-base mb-4 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <button class="px-4 py-1 rounded-full border border-black text-sm font-medium bg-white text-black hover:bg-gray-100 shadow-sm flex items-center">
            Network <span class="ml-1">&#9660;</span>
          </button>
          <button class="px-4 py-1 rounded-full border border-black text-sm font-medium bg-white text-black hover:bg-gray-100 shadow-sm flex items-center">
            Storage Capacity <span class="ml-1">&#9660;</span>
          </button>
          <button class="px-4 py-1 rounded-full border border-black text-sm font-medium bg-white text-black hover:bg-gray-100 shadow-sm flex items-center">
            Model <span class="ml-1">&#9660;</span>
          </button>
          <button class="px-4 py-1 rounded-full border border-black text-sm font-medium bg-white text-black hover:bg-gray-100 shadow-sm flex items-center">
            Brand <span class="ml-1">&#9660;</span>
          </button>
          <button class="px-4 py-1 rounded-full border border-black text-sm font-medium bg-white text-black hover:bg-gray-100 shadow-sm flex items-center">
            Lock Status <span class="ml-1">&#9660;</span>
          </button>
          <button class="px-4 py-1 rounded-full border border-black text-sm font-medium bg-white text-black hover:bg-gray-100 shadow-sm flex items-center">
            Condition <span class="ml-1">&#9660;</span>
          </button>
          <button class="px-4 py-1 rounded-full border border-black text-sm font-medium bg-white text-black hover:bg-gray-100 shadow-sm flex items-center">
            Price <span class="ml-1">&#9660;</span>
          </button>
          <button class="px-4 py-1 rounded-full border border-black text-sm font-medium bg-white text-black hover:bg-gray-100 shadow-sm flex items-center">
            Buying Format <span class="ml-1">&#9660;</span>
          </button>
          <button class="px-4 py-1 rounded-full border border-black text-sm font-bold bg-black text-white flex items-center gap-2 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
              <rect x="4" y="5" width="12" height="2" rx="1" />
              <rect x="6" y="9" width="8" height="2" rx="1" />
              <rect x="8" y="13" width="4" height="2" rx="1" />
            </svg>
            All Filters
          </button>
        </section>
        <div class="border-b border-gray-200 mb-2"></div>
        <!-- Results, Compare, Sort Bar -->
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-3 text-[15px] text-gray-600">
            <span>{{ smartphoneProducts.length.toLocaleString() }} results</span>
            <span class="font-medium text-black">Compare</span>
            <span class="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
              <input type="checkbox" name="compare" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-2 border-gray-400 appearance-none cursor-pointer"/>
              <span class="toggle-label block overflow-hidden h-6 rounded-full bg-white border-2 border-gray-400"></span>
            </span>
          </div>
          <div class="flex items-center gap-2 text-[15px] text-black">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <g>
                <path d="M7 5v8" stroke-linecap="round"/>
                <path d="M5 11l2 2 2-2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 19V7" stroke-linecap="round"/>
                <path d="M19 13l-2 2-2-2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
            <span>Sort: <span class="font-semibold text-black">Best Match</span></span>
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 20 20">
              <path d="M7 8l3 3 3-3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg class="w-7 h-5 ml-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 28 20">
              <circle cx="3" cy="4" r="1.5" fill="currentColor"/>
              <rect x="7" y="3" width="16" height="2" rx="1" fill="currentColor"/>
              <circle cx="3" cy="10" r="1.5" fill="currentColor"/>
              <rect x="7" y="9" width="16" height="2" rx="1" fill="currentColor"/>
              <circle cx="3" cy="16" r="1.5" fill="currentColor"/>
              <rect x="7" y="15" width="16" height="2" rx="1" fill="currentColor"/>
            </svg>
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 20 20">
              <path d="M7 8l3 3 3-3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div v-if="smartphoneProducts.length">
          <div v-for="product in smartphoneProducts" :key="product.id" class="flex items-center py-4 hover:bg-gray-50 transition cursor-pointer">
            <!-- Sol: Ürün görseli gri arka plan -->
            <div class="w-40 h-40 rounded mr-8 border bg-gray-100 flex items-center justify-center">
              <img :src="product.images?.[0] || product.image" :alt="product.name" class="max-w-[96%] max-h-[96%] object-contain" />
            </div>
            <!-- Sağ: Ürün bilgileri siyah yazı, sadece fiyat kalın -->
            <div class="flex-1">
              <a class="text-[18px] text-black hover:underline mb-1 block" href="#">{{ product.name }}</a>
              <p class="text-[15px] text-black mb-1">{{ product.description }}</p>
              <div class="text-[22px] font-bold text-black mb-1">{{ typeof product.price === 'number' ? '$' + product.price.toFixed(2) : product.price }}</div>
              <div class="text-[13px] text-black">Kategori: <span class="text-black">{{ product.category || product.categoryId }}</span></div>
            </div>
          </div>
        </div>
        <div v-else class="text-gray-500">No smartphones found.</div>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* İsteğe bağlı özel stiller ekleyebilirsin */
</style>
