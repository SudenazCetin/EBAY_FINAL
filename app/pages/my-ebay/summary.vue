<script setup lang="ts">
definePageMeta({ layout: 'default' })

// Kullanıcı verilerini store'dan alabiliriz
const recentlyViewed = ref(3)
const watchlistCount = ref(5)
const bidsCount = ref(2)
const savedSearches = ref(4)
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 py-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">My eBay Summary</h1>
        <p class="text-gray-600">Manage all your eBay activity in one place</p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <!-- Recently Viewed -->
        <NuxtLink to="/my-ebay/recently-viewed" class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div class="flex items-center justify-between mb-4">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span class="text-3xl font-bold text-gray-800">{{ recentlyViewed }}</span>
          </div>
          <h3 class="text-lg font-semibold mb-1">Recently Viewed</h3>
          <p class="text-sm text-gray-600">Items you've viewed</p>
        </NuxtLink>

        <!-- Watchlist -->
        <NuxtLink to="/my-ebay/watchlist" class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div class="flex items-center justify-between mb-4">
            <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span class="text-3xl font-bold text-gray-800">{{ watchlistCount }}</span>
          </div>
          <h3 class="text-lg font-semibold mb-1">Watchlist</h3>
          <p class="text-sm text-gray-600">Items you're watching</p>
        </NuxtLink>

        <!-- Bids/Offers -->
        <NuxtLink to="/my-ebay/bids-offers" class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div class="flex items-center justify-between mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-3xl font-bold text-gray-800">{{ bidsCount }}</span>
          </div>
          <h3 class="text-lg font-semibold mb-1">Bids & Offers</h3>
          <p class="text-sm text-gray-600">Your active bids</p>
        </NuxtLink>

        <!-- Saved Searches -->
        <NuxtLink to="/my-ebay/saved-searches" class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div class="flex items-center justify-between mb-4">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span class="text-3xl font-bold text-gray-800">{{ savedSearches }}</span>
          </div>
          <h3 class="text-lg font-semibold mb-1">Saved Searches</h3>
          <p class="text-sm text-gray-600">Your search alerts</p>
        </NuxtLink>
      </div>

      <!-- Quick Links -->
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-bold mb-4">Quick Links</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <NuxtLink to="/my-ebay/purchase-history" class="text-blue-600 hover:underline">Purchase History</NuxtLink>
          <NuxtLink to="/sell" class="text-blue-600 hover:underline">Start Selling</NuxtLink>
          <NuxtLink to="/messages" class="text-blue-600 hover:underline">Messages</NuxtLink>
          <NuxtLink to="/my-ebay/preferences" class="text-blue-600 hover:underline">Account Settings</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
