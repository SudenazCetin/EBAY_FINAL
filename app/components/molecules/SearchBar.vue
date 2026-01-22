<!-- app/components/molecules/SearchBar.vue -->
<script setup lang="ts">
import { ref } from 'vue'

const q = ref('')
const categories = [
  'All Categories', 'Electronics', 'Motors', 'Fashion', 'Collectibles and Art',
  'Sports', 'Health & Beauty', 'Industrial equipment', 'Home & Garden', 'Deals', 'Sell'
]
const selected = ref(categories[0])

const emit = defineEmits<{
  (e: 'search', payload: { query: string; category: string }): void
}>()

function submit() {
  // Buradan parent'a haber veriyoruz
  emit('search', { query: q.value, category: selected.value })
}
</script>

<template>
  <form @submit.prevent="submit" class="min-w-0 grid grid-cols-[1fr_auto] items-center gap-2">
    <!-- arama kutusu -->
    <div class="min-w-0 w-full flex items-center rounded-[24px] border-2 border-black bg-white overflow-hidden h-10" style="margin-left:0;padding-left:0;">
      <!-- büyüteç -->
      <div class="flex items-center ml-2 pr-2 text-gray-500 bg-transparent h-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5" style="display:block;">
          <circle cx="9" cy="9" r="6" stroke="currentColor" stroke-width="1.5" fill="none" />
          <line x1="14" y1="14" x2="18" y2="18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </div>
      <!-- input -->
      <BaseInput
        v-model="q"
        type="text"
        placeholder="Search for anything"
        class="min-w-0 flex-1 h-10 px-2 text-[13px] placeholder:text-gray-500 outline-none font-normal border-none focus:ring-0 focus:border-none"
      />
      <!-- kategori -->
      <div class="hidden sm:flex items-center">
        <select v-model="selected"
          class="h-8 pl-2 pr-2 bg-white outline-none text-[12px] font-normal border border-gray-300 text-gray-700 rounded-none shadow-none focus:ring-0 focus:border-gray-400">
          <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
        </select>
      </div>
    </div>

    <!-- mavi buton -->
    <BaseButton
      type="submit"
      class="h-10 px-8 bg-[#3665F3] text-white font-bold text-base shadow-sm border-2 border-[#3665F3] hover:brightness-110 active:translate-y-px"
      style="min-width:140px; border-radius:9999px;"
    >
      Search
    </BaseButton>
  </form>
</template>
