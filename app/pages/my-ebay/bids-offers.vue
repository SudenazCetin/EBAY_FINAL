<script setup lang="ts">
definePageMeta({ layout: 'default' })

// Örnek bids/offers
const activeBids = ref([
  {
    id: 1,
    title: 'Vintage Rolex Submariner Watch',
    currentBid: 8500.00,
    yourBid: 8500.00,
    highBidder: true,
    timeLeft: '2d 5h',
    image: '/assets/products/watch.jpg',
    bids: 12
  },
  {
    id: 2,
    title: 'Rare Pokemon Card Collection',
    currentBid: 1250.00,
    yourBid: 1200.00,
    highBidder: false,
    timeLeft: '5h 23m',
    image: '/assets/products/pokemon.jpg',
    bids: 8
  }
])
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 py-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Bids & Offers</h1>
        <p class="text-gray-600">Track your active bids and offers</p>
      </div>

      <!-- Active Bids -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-4">Active Bids ({{ activeBids.length }})</h2>
        
        <div v-if="activeBids.length > 0" class="space-y-4">
          <div v-for="bid in activeBids" :key="bid.id" class="bg-white rounded-lg shadow p-6">
            <div class="flex flex-col md:flex-row gap-6">
              <!-- Image -->
              <div class="w-full md:w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <img :src="bid.image" :alt="bid.title" class="max-w-full max-h-full object-contain" />
              </div>

              <!-- Info -->
              <div class="flex-1">
                <h3 class="text-lg font-semibold mb-2">{{ bid.title }}</h3>
                
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <div class="text-xs text-gray-600 mb-1">Current Bid</div>
                    <div class="font-bold text-lg">${{ bid.currentBid.toFixed(2) }}</div>
                  </div>
                  <div>
                    <div class="text-xs text-gray-600 mb-1">Your Bid</div>
                    <div class="font-bold text-lg">${{ bid.yourBid.toFixed(2) }}</div>
                  </div>
                  <div>
                    <div class="text-xs text-gray-600 mb-1">Time Left</div>
                    <div class="font-semibold text-red-600">{{ bid.timeLeft }}</div>
                  </div>
                  <div>
                    <div class="text-xs text-gray-600 mb-1">Bids</div>
                    <div class="font-semibold">{{ bid.bids }}</div>
                  </div>
                </div>

                <!-- Status Badge -->
                <div class="mb-4">
                  <span v-if="bid.highBidder" class="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    ✓ You're the high bidder
                  </span>
                  <span v-else class="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                    ⚠ Outbid
                  </span>
                </div>

                <!-- Actions -->
                <div class="flex gap-3">
                  <button class="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                    Place Higher Bid
                  </button>
                  <button class="border border-gray-300 px-6 py-2 rounded-full font-semibold hover:bg-gray-50 transition-colors">
                    View Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="bg-white rounded-lg shadow p-12 text-center">
          <svg class="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="text-xl font-semibold mb-2">No active bids</h3>
          <p class="text-gray-600 mb-6">You haven't placed any bids yet</p>
          <NuxtLink to="/" class="inline-block bg-blue-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Start Bidding
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
