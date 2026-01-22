<!-- app/components/molecules/ProductCard.vue -->
<script setup lang="ts">
interface Props {
  id: number | string
  title?: string
  price?: number | string | null
  image?: string
  location?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  price: null,
  image: '',
  location: '',
})
</script>

<template>
  <NuxtLink
    :to="`/product/${id}`"
    class="block border border-gray-200 rounded-lg overflow-hidden bg-white
           hover:shadow-md transition-shadow cursor-pointer"
  >
    <!-- Görsel Alanı -->
    <div class="aspect-[4/3] bg-gray-100 flex items-center justify-center">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="w-full h-full object-contain"
      />
    </div>

    <!-- Bilgiler -->
    <div class="p-3 space-y-1">
      <h3 class="text-sm font-semibold line-clamp-2">
        {{ title }}
      </h3>

      <p v-if="price !== null" class="text-lg font-bold text-[#222]">
        <!-- Sayıysa .toFixed(2), string geldiyse direkt yaz -->
        {{ typeof price === 'number' ? '$' + price.toFixed(2) : price }}
      </p>

      <p v-if="location" class="text-xs text-gray-500">
        {{ location }}
      </p>
    </div>
  </NuxtLink>
</template>
