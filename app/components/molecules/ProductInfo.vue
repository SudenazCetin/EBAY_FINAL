<!-- src/components/molecules/ProductInfo.vue -->
<script setup>
import BaseButton from '../atoms/BaseButton.vue'
import { ref } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['add-to-cart', 'buy-now'])

const selectedColor = ref(props.product.colorOptions?.[0] || '')
const selectedStorage = ref(props.product.storageOptions?.[0] || '')
const quantity = ref(1)

const buildPayload = () => ({
  product: props.product,
  quantity: quantity.value,
  color: selectedColor.value || null,
  storage: selectedStorage.value || null,
})

const handleBuyNow = () => {
  emit('buy-now', buildPayload())
}

const handleAddToCart = () => {
  emit('add-to-cart', buildPayload())
}
</script>

<template>
  <div class="space-y-4">
    <!-- başlık -->
    <div>
      <h1 class="text-xl font-semibold">
        {{ product.title }}
      </h1>
      <div class="text-xs text-gray-600 mt-1">
        {{ product.seller?.name }} · {{ product.seller?.rating }}
      </div>
    </div>

    <!-- fiyat -->
    <div class="text-2xl font-semibold">
US ${{ Number(product.price).toFixed(2) }}
    </div>

    <!-- condition -->
    <div class="text-sm border-t border-b py-3 space-y-1">
      <div class="font-semibold">
        Condition:
        <span class="font-normal">
          {{ product.condition }}
        </span>
      </div>
      <p class="text-xs text-gray-600">
        {{ product.description }}
      </p>
    </div>

    <!-- color / storage / quantity -->
    <div class="space-y-3">
      <div v-if="product.colorOptions?.length">
        <label class="block text-xs text-gray-700 mb-1">Color</label>
        <select
          v-model="selectedColor"
          class="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
        >
          <option v-for="c in product.colorOptions" :key="c" :value="c">
            {{ c }}
          </option>
        </select>
      </div>

      <div v-if="product.storageOptions?.length">
        <label class="block text-xs text-gray-700 mb-1">Storage Capacity</label>
        <select
          v-model="selectedStorage"
          class="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
        >
          <option v-for="s in product.storageOptions" :key="s" :value="s">
            {{ s }}
          </option>
        </select>
      </div>

      <div>
        <label class="block text-xs text-gray-700 mb-1">Quantity</label>
        <input
          v-model.number="quantity"
          type="number"
          min="1"
          class="border border-gray-300 rounded-md px-3 py-2 text-sm w-24"
        />
        <span class="ml-2 text-xs text-gray-500">
          {{ product.quantityAvailable }} available
        </span>
      </div>
    </div>

    <!-- butonlar -->
    <div class="space-y-2">
      <BaseButton
        class="w-full bg-[#3665F3] text-white rounded-full h-10 text-sm hover:brightness-110"
        @click="handleBuyNow"
      >
        Buy It Now
      </BaseButton>

      <BaseButton
        class="w-full border border-[#3665F3] text-[#3665F3] bg-white rounded-full h-10 text-sm hover:bg-blue-50"
        @click="handleAddToCart"
      >
        Add to cart
      </BaseButton>
    </div>
  </div>
</template>
