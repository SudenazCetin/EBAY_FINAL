<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
    <div class="bg-white rounded-xl shadow-lg max-w-3xl w-full p-0 relative flex overflow-hidden">
      <button @click="close" class="absolute top-3 right-3 text-gray-400 hover:text-black text-xl">&times;</button>
      <!-- Sol: Ürün bilgisi -->
      <div class="flex-1 p-8 flex flex-col justify-center items-center">
        <div class="flex gap-4 items-center mb-4">
          <img :src="product.image" alt="Product" class="w-28 h-28 object-contain rounded border" />
          <div>
            <div class="font-semibold text-lg mb-1">{{ product.title }}</div>
            <div class="text-gray-500 text-sm line-clamp-2">{{ product.description }}</div>
            <div class="font-bold text-blue-600 mt-2 text-xl">${{ product.price }}</div>
          </div>
        </div>
        <div class="flex gap-3 mt-6 w-full">
          <button @click="goToCart" class="flex-1 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700">See in cart</button>
          <button @click="goToCheckout" class="flex-1 py-3 rounded border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50">Checkout 1 item</button>
        </div>
      </div>
      <!-- Sağ: İlgili ürünler -->
      <div class="w-[340px] bg-gray-50 p-6 border-l flex flex-col">
        <div class="font-semibold text-base mb-3">Explore related items</div>
        <div class="flex gap-3 overflow-x-auto">
          <div v-for="i in 3" :key="i" class="w-24 flex-shrink-0">
            <div class="bg-white rounded shadow p-2 flex flex-col items-center">
              <img :src="product.image" class="w-20 h-20 object-contain mb-2" />
              <div class="text-xs font-medium text-center mb-1">Sample Product {{ i }}</div>
              <div class="text-xs text-gray-500">${{ product.price + i * 10 }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ show: boolean, product: any }>()
const emit = defineEmits(['close'])
const router = useRouter()

function close() {
  emit('close')
}
function goToCart() {
  router.push('/cart')
  close()
}
function goToCheckout() {
  router.push('/cart?checkout=1')
  close()
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
