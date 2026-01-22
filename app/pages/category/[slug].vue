<!-- app/pages/category/[slug].vue -->
<script setup lang="ts">
import CategoryBanner from '~/components/organisms/CategoryBanner.vue'
import { computed } from 'vue'
import { products } from '~/data/products'

const route = useRoute()
const router = useRouter()

// URL'deki slug: /category/laptops gibi
const slug = computed(() => route.params.slug as string)

// Başlığı biraz güzelleştirelim
const title = computed(() => {
  const map: Record<string, string> = {
    'laptops': 'Laptops & Notebooks',
    'computer-parts': 'Computer Components & Parts',
    'smartphones': 'Cell Phones & Smartphones',
    'car-truck-parts': 'Car & Truck Parts & Accessories',
  }
  return map[slug.value] || 'Category'
})

// Sol menüdeki kategoriler
const categories = [
  { id: 'car-truck-parts', label: 'Car & Truck Parts & Accessories' },
  { id: 'accessory-belts', label: 'Accessory Belts' },
  { id: 'driver-assistance', label: 'Advanced Driver Assistance Systems' },
  { id: 'air-fuel-delivery', label: 'Air & Fuel Delivery' },
  { id: 'air-conditioning', label: 'Air Conditioning & Heating' },
  { id: 'brakes', label: 'Brakes & Brake Parts' },
  { id: 'electric-hybrid', label: 'Electric, Hybrid & PHEV Specific Parts' },
  { id: 'engine-cooling', label: 'Engine Cooling Components' },
  { id: 'engines', label: 'Engines & Engine Parts' },
  { id: 'exhaust', label: 'Exhaust & Emission Systems' },
  { id: 'exterior', label: 'Exterior Parts & Accessories' },
  { id: 'ignition', label: 'Ignition Systems & Components' },
  { id: 'interior', label: 'Interior Parts & Accessories' },
]

// URL'deki id'ye göre aktif kategori
const currentCategory = computed(() => {
  return categories.find((c) => c.id === slug.value) || categories[0] || null
})

// Best selling ürünler
const bestSelling = computed(() => {
  let list = products.filter(
  (p) => (p as any).categoryId === (currentCategory.value?.id || '')
)

  if (!list.length) {
    list = products.slice(0, 8)
  }

  return list
})

function goCategory(id: string) {
  router.push(`/category/${id}`)
}
</script>

<template>
  <div class="bg-white">
    <div class="max-w-[1350px] mx-auto px-4 py-6">
      <!-- Breadcrumb -->
      <nav class="text-xs text-gray-500 mb-3">
        eBay &gt; eBay Motors &gt; Parts &amp; Accessories &gt;
        <span class="font-semibold text-black">
  {{ currentCategory?.label || '' }}
</span>

<h1 class="text-3xl font-bold mb-4">
  {{ currentCategory?.label || '' }}
</h1>
      </nav>

      <!-- Sayfa başlığı -->
      <h1 class="text-3xl font-bold mb-4">
        {{ currentCategory?.label || '' }}
      </h1>

      <div class="grid grid-cols-[260px,1fr] gap-6">
        <!-- SOL: Shop by category -->
        <aside>
          <h2 class="text-sm font-semibold mb-3">Shop by category</h2>
          <ul class="text-sm space-y-1">
            <li
              class="font-semibold mb-2 cursor-pointer"
              @click="goCategory('parts-accessories')"
            >
              Parts &amp; Accessories
            </li>

            <li v-for="cat in categories" :key="cat.id">
              <button
                class="w-full text-left py-1 px-1 rounded hover:bg-gray-100"
                :class="{
  'font-semibold text-black': cat.id === (currentCategory && currentCategory.id ? currentCategory.id : ''),
  'text-gray-700': cat.id !== (currentCategory && currentCategory.id ? currentCategory.id : '')
}"
                @click="goCategory(cat.id)"
              >
                {{ cat.label }}
              </button>
            </li>
          </ul>
        </aside>

        <!-- SAĞ: Hero banner + Best selling -->
        <main>
          <!-- Hero banner (Firebase'den) -->
          <CategoryBanner :slug="slug.value" />

          <!-- Best selling -->
          <section>
            <div class="flex items-center justify-between mb-3">
              <h2 class="text-xl font-semibold">Best selling</h2>
              <button class="text-xs text-blue-600 hover:underline">
                See All
              </button>
            </div>

            <!-- Ürün listesi: eBay tarzı alt alta -->
            <div v-if="bestSelling.length" class="divide-y">
              <div
                v-for="product in bestSelling"
                :key="product.id"
                class="flex items-center py-4 hover:bg-gray-50 transition cursor-pointer"
              >
                <!-- Sol: Ürün görseli -->
                <img
                  :src="product.image"
                  :alt="product.title"
                  class="w-28 h-28 object-contain rounded mr-6 border"
                />
                <!-- Sağ: Ürün bilgileri -->
                <div class="flex-1">
                  <h2 class="text-lg font-semibold mb-1">{{ product.title }}</h2>
                  <p class="text-sm text-gray-600 mb-1">{{ product.description }}</p>
                  <div class="text-base font-bold text-blue-700 mb-1">
                    {{
                      typeof product.price === 'number'
                        ? '$' + product.price.toFixed(2)
                        : product.price
                    }}
                  </div>
                  <div class="text-xs text-gray-500">Kategori: {{ product.categoryId }}</div>
                </div>
                <!-- Sağda: Butonlar -->
                <div class="ml-4 flex flex-col gap-2">
                  <button class="px-4 py-2 bg-blue-600 text-white rounded">Buy It Now</button>
                  <button class="px-4 py-2 border border-blue-600 text-blue-600 rounded">Add to cart</button>
                </div>
              </div>
            </div>

            <p
              v-else
              class="py-10 text-center text-gray-500 text-sm"
            >
              No products in this category yet.
            </p>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>
