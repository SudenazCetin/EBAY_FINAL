<!-- app/pages/laptops.vue -->

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useProductStore } from '~/stores/productStore'
import { useLocalProductStore } from '~/stores/localProductStore'
import BaseInput from '~/components/atoms/BaseInput.vue'

const source = ref<'firebase' | 'local'>('firebase')
const productStore = useProductStore()
const localProductStore = useLocalProductStore()

const newProduct = ref({
  name: '',
  price: '', // string olarak başlat
  image: '',
  description: '',
  category: 'laptops',
})

const laptopProducts = computed(() => {
  return source.value === 'firebase'
    ? productStore.products.filter(p => p.category === 'laptops')
    : localProductStore.products.filter(p => p.category === 'laptops')
})

// SSR-uyumlu data fetching
await useAsyncData('laptop-products', async () => {
  await productStore.fetchProducts()
  await localProductStore.fetchProducts()
  return true
})

async function addProduct() {
  const productToAdd = {
    ...newProduct.value,
    price: Number(newProduct.value.price),
  }
  if (source.value === 'firebase') {
    await productStore.addProduct(productToAdd)
    await productStore.fetchProducts()
  } else {
    await localProductStore.addProduct(productToAdd)
    await localProductStore.fetchProducts()
  }

  newProduct.value = {
    name: '',
    price: '',
    image: '',
    description: '',
    category: 'laptops',
  }
}
</script>  



<template>
  <div class="bg-white min-h-screen">
    <div class="max-w-[1300px] mx-auto px-4 py-6 ml-8">
      <!-- Breadcrumb -->
      <nav class="text-xs text-gray-500 mb-3">
        eBay &gt; Electronics &gt; Computers/Tablets &amp; Networking &gt;
        <span class="font-semibold text-black text-base">Laptops &amp; Netbooks</span>
      </nav>

      <!-- Başlık -->
      <h1 class="text-3xl font-bold mb-4">
        Laptops &amp; Netbooks
      </h1>

      <div class="grid grid-cols-[260px,1fr] gap-6">
        <!-- SOL SİDEBAR -->
        <aside>
          <h2 class="text-lg font-semibold mb-4">
            Shop by category
          </h2>

          <ul class="text-base space-y-2 text-black">
            <li class="font-bold text-lg">Computers/Tablets &amp; Networking</li>
            <li class="font-bold ml-2 mt-2 text-lg">
              Laptops &amp; Netbooks
            </li>
            <li class="ml-4 hover:underline cursor-pointer font-normal text-base">
              Apple Laptops
            </li>
            <li class="ml-4 hover:underline cursor-pointer font-normal text-base">
              PC Laptops &amp; Netbooks
            </li>
          </ul>
        </aside>

        <!-- SAĞ ANA İÇERİK -->
        <main class="space-y-4">
          <!-- Üst filtre butonları -->
          <!-- Üst filtre satırı kaldırıldı -->

          <!-- Alt filtre barı (marka, condition vs. sadece görsel amaçlı) -->
          <section
            class="flex flex-wrap gap-3 text-base mt-2 border-b pb-4"
          >
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

          <!-- Sonuç sayısı ve sıralama barı -->
          <div class="flex items-center justify-between text-sm text-gray-700 mt-2">
            <span class="text-gray-700">{{ laptopProducts.length.toLocaleString() }} results</span>
            <div class="flex items-center gap-2">
              <!-- Exact icon: separate down and up arrows -->
              <svg class="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <g>
                  <path d="M7 5v8" stroke-linecap="round"/>
                  <path d="M5 11l2 2 2-2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M17 19V7" stroke-linecap="round"/>
                  <path d="M19 13l-2 2-2-2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
              <span>Sort: <span class="font-semibold">Best Match</span></span>
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 20 20">
                <path d="M7 8l3 3 3-3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <!-- eBay-style list view icon: three lines with dots -->
              <svg class="w-7 h-5 ml-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 28 20">
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

          <!-- ÜRÜN LİSTESİ -->
          <section class="space-y-4 mt-2">
            <div
              v-for="item in laptopProducts"
              :key="item.id"
              class="flex gap-6 pb-6 pt-4"
            >
              <!-- Ürün görseli -->
              <div
                class="w-56 h-44 flex-shrink-0 border rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center"
              >
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="max-w-[92%] max-h-[92%] object-contain relative z-10"
                />
              </div>

              <!-- Ürün bilgileri -->
              <div class="flex-1">
                <p class="text-base text-black mb-1">
                  {{ item.name }}
                </p>
                <p class="text-sm text-black mb-1">
                  {{ item.description }}
                </p>
                <p class="text-lg font-semibold text-black mb-1">
                  {{ typeof item.price === 'number' ? '$' + item.price.toFixed(2) : item.price }}
                </p>
                <p class="text-xs text-gray-500">
                  Kategori: <span class="font-medium">{{ item.category }}</span>
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>
