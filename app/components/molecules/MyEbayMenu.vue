<!-- app/components/molecules/MyEbayMenu.vue -->
<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)

function toggle() {
  open.value = !open.value
}
</script>

<template>
  <div class="relative" @mouseenter="open = true" @mouseleave="open = false">
    <!-- Trigger -->
    <button
      @click="toggle"
      class="flex items-center gap-1 text-sm hover:underline"
    >
      My eBay
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"
        viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 10l4 4 4-4" />
      </svg>
    </button>

    <!-- MENU -->
    <div
      v-if="open"
      class="absolute left-0 top-full w-48 bg-white shadow-xl border rounded-lg py-2 z-50"
    >
      <NuxtLink class="menu-item" to="/my-ebay/summary">Summary</NuxtLink>
      <NuxtLink class="menu-item" to="/my-ebay/recently-viewed">Recently viewed</NuxtLink>
      <NuxtLink class="menu-item" to="/my-ebay/bids-offers">Bids/Offers</NuxtLink>
      <NuxtLink class="menu-item" to="/my-ebay/watchlist">Watchlist</NuxtLink>
      <NuxtLink class="menu-item" to="/my-ebay/purchase-history">Purchase history</NuxtLink>
      <NuxtLink class="menu-item" to="/my-ebay/buy-again">Buy Again</NuxtLink>
      <NuxtLink class="menu-item" to="/my-ebay/selling">Selling</NuxtLink>
      <NuxtLink class="menu-item" to="/my-ebay/saved-feed">Saved Feed</NuxtLink>
      <NuxtLink class="menu-item" to="/my-ebay/saved-searches">Saved Searches</NuxtLink>
      <NuxtLink class="menu-item" to="/my-ebay/saved-sellers">Saved Sellers</NuxtLink>
      <NuxtLink class="menu-item" to="/my-ebay/payments">Payments</NuxtLink>
      <NuxtLink class="menu-item" to="/my-ebay/my-garage">My Garage</NuxtLink>
      <NuxtLink class="menu-item" to="/my-ebay/preferences">Preferences</NuxtLink>
      <NuxtLink class="menu-item" to="/my-ebay/my-collection">My Collection</NuxtLink>
      <NuxtLink class="menu-item" to="/messages">Messages</NuxtLink>
      <NuxtLink class="menu-item" to="/my-ebay/psa-vault">PSA Vault</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.menu-item {
  display: block;
  padding: 8px 14px;
  font-size: 14px;
  color: #222;
}
.menu-item:hover {
  background: #f5f5f5;
}
</style>
