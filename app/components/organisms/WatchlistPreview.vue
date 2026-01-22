<template>
  <div v-if="show" class="fixed top-20 right-8 z-50 bg-white rounded-2xl shadow-xl p-4 w-80 border border-gray-200 animate-fade-in">
    <div class="flex items-center gap-3">
      <img :src="item.image" class="w-20 h-20 object-contain rounded-lg bg-gray-100 border border-gray-200" />
      <div>
        <div class="font-semibold text-base mb-1 line-clamp-2">{{ item.title }}</div>
        <div class="text-lg font-bold mb-1 text-gray-900">${{ item.price }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  item: { type: Object, required: true },
  show: { type: Boolean, default: false }
})
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.25s cubic-bezier(.68,-0.55,.27,1.55);
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
