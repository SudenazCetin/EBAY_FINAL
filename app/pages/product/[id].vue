<!-- app/pages/product/[id].vue -->
<script setup lang="ts">
import { computed, ref } from 'vue'
import { addToCart } from '~/stores/cartStore'

import CartAddedModal from '~/components/organisms/CartAddedModal.vue'
const showCartModal = ref(false)
function handleBuyNow() {
  if (!product.value) return
  addToCart({
    id: product.value.id,
    title: product.value.title,
    price: product.value.price,
    image: product.value.image,
    location: product.value.location,
  })
  showCartModal.value = true
}

const route = useRoute()

// URL'den id al
const productId = computed(() => route.params.id as string)

// SSR-uyumlu ürün çekme
const { product: fetchedProduct } = useProduct(productId)

// Ürünü bul ve title yoksa name'den title oluştur
const product = computed(() => {
  const p = fetchedProduct.value
  if (!p) return undefined
  return {
    id: p.id,
    name: p.name || '',
    title: p.title || p.name || '',
    price: p.price,
    image: p.image,
    description: p.description || '',
    category: p.categoryId || '',
    location: p.location || '',
    condition: p.condition || '',
    seller: p.seller || { name: '', rating: '' },
    images: p.images || [],
    typeOptions: p.typeOptions || [],
    quantityAvailable: p.quantityAvailable ?? null,
    stockByType: p.stockByType || null,
  }
})

// Eğer elinde ekstra görsel yoksa, ana resmi birkaç kez tekrar kullanırız
const imageGallery = computed(() => {
  if (!product.value) return []
  // Eğer p.images varsa onu kullan, yoksa tek görseli 3 kere dön
  if (product.value.images && product.value.images.length) {
    return product.value.images
  }
  return [product.value.image, product.value.image, product.value.image]
})

// 🔹 Sepete ekleme fonksiyonu
function addItemToCart() {
  if (!product.value) return

  addToCart({
    id: product.value.id,
    title: product.value.title,
    price: product.value.price,
    image: product.value.image,
    location: product.value.location,
  })
}
</script>

<template>
  <div class="bg-[#f5f5f5]">
    <div class="max-w-[1350px] mx-auto px-4 py-6">
      <!-- Ürün bulunamadı -->
      <div v-if="!product" class="py-20 text-center text-gray-600">
        Product not found.
      </div>

      <div v-else>
        <!-- Breadcrumb -->
        <nav class="text-xs text-gray-500 mb-3">
          eBay Clone &gt;
          <NuxtLink to="/" class="hover:underline cursor-pointer">Home</NuxtLink>
          &gt;
          <span class="font-semibold text-black">
            {{ product.title }}
          </span>
        </nav>

        <div class="grid grid-cols-[minmax(0,2.2fr),minmax(0,1.4fr)] gap-8">
          <!-- SOL: Galeri -->
          <section class="bg-white rounded-lg p-4 flex">
            <!-- Küçük thumbs -->
            <div class="flex flex-col gap-2 mr-4">
              <div
                v-for="(img, idx) in imageGallery"
                :key="idx"
                class="w-16 h-16 border rounded-md overflow-hidden cursor-pointer hover:border-blue-500"
              >
                <img
                  :src="img"
                  :alt="product.title"
                  class="w-full h-full object-contain"
                />
              </div>
            </div>

            <!-- Büyük ana görsel -->
            <div
              class="flex-1 flex items-center justify-center bg-[#f7f7f7] rounded-md"
            >
              <img
                :src="imageGallery[0]"
                :alt="product.title"
                class="max-h-[480px] object-contain"
              />
            </div>
          </section>

          <!-- SAĞ: Ürün bilgileri -->
          <section class="space-y-4">
            <!-- Üst kart: başlık, fiyat, durum -->
            <div class="bg-white rounded-lg p-4 shadow-sm">
              <h1 class="text-xl font-semibold mb-2">
                {{ product.title }}
              </h1>

              <p class="text-xs text-gray-500 mb-1">
                {{ product.location || 'Location: Turkey' }}
              </p>

              <div class="mt-4 mb-2">
                <span class="text-3xl font-semibold">
                  {{
                    typeof product.price === 'number'
                      ? '$' + product.price.toFixed(2)
                      : product.price
                  }}
                </span>
              </div>

              <p class="text-sm text-gray-600 mb-4">
                Condition:
                <span class="font-medium">
                  {{ product.condition || 'New' }}
                </span>
              </p>

              <!-- Type ve Quantity alanları -->
              <div class="mb-3">
                <label class="block text-sm font-medium mb-1">Type:</label>
                <select class="border rounded px-2 py-1 w-full">
                  <option v-if="!product.typeOptions || !product.typeOptions.length" disabled>Select</option>
                  <option v-for="type in product.typeOptions" :key="type">{{ type }}</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="block text-sm font-medium mb-1">Quantity:</label>
                <span v-if="product.quantityAvailable !== null">{{ product.quantityAvailable }} available</span>
                <span v-else-if="product.stockByType">{{ Object.values(product.stockByType).reduce((a,b)=>a+b,0) }} available</span>
                <span v-else>Not specified</span>
              </div>
              <!-- Butonlar -->
              <div class="space-y-3">
                <button
                  class="w-full py-3 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700"
                  @click="handleBuyNow"
                >
                  Buy It Now
                </button>
    <CartAddedModal
      v-if="showCartModal"
      :show="showCartModal"
      :product="product"
      @close="showCartModal = false"
    />

                <!-- 🔹 Sepete ekleme butonu -->
                <button
                  class="w-full py-3 rounded-full border border-blue-600 text-blue-600 font-semibold text-sm hover:bg-blue-50"
                  @click="addItemToCart"
                >
                  Add to cart
                </button>

                <button
                  class="w-full py-3 rounded-full border border-gray-300 text-gray-800 font-semibold text-sm hover:bg-gray-50"
                >
                  ♥ Add to Watchlist
                </button>
              </div>
            </div>

            <!-- Alt kart: açıklama / satıcı bilgisi -->
            <div class="bg-white rounded-lg p-4 shadow-sm text-sm">
              <h2 class="font-semibold mb-2">Description</h2>
              <p class="text-gray-700 mb-4">
                {{ product.description || 'No additional description provided.' }}
              </p>

              <div class="border-t pt-3 mt-3 text-xs text-gray-500">
                Seller:
                <span class="font-medium text-black">
                  {{ product.seller?.name || 'Example seller' }}
                </span>
                <span v-if="product.seller?.rating">
                  • {{ product.seller.rating }}
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
