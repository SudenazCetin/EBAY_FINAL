<script setup lang="ts">
import { totalCount } from '~/stores/cartStore'
import WatchlistPreview from './WatchlistPreview.vue'
import { useWatchlistStore } from '~/stores/watchlistStore'
const watchlist = useWatchlistStore()
const showWatchlistPreview = ref(false)

function openWatchlistPreview() {
  showWatchlistPreview.value = true
}
function closeWatchlistPreview() {
  showWatchlistPreview.value = false
}

function handleSearch(payload: { query: string; category: string }) {
  console.log('search from header:', payload.query, 'cat:', payload.category)
}

// 🔵 Sepet adedi (store'dan gelen computed)
const cartCount = totalCount
</script>


<template>
  <header class="w-full bg-white">
    <div class="border-b border-black/10">
      <div class="mx-auto max-w-[1455px] px-4">
        <!-- 🔵 ÜST MENÜ BAR -->
        <div class="hidden md:flex h-10 items-center text-[13px] font-semibold text-gray-800 gap-3">
          <!-- LOGIN / REGISTER -->
          <div class="flex items-center gap-1">
            <span class="font-semibold">Hi! <NuxtLink to="/login" class="text-blue-600 hover:underline font-semibold">(Sign in</NuxtLink> or <NuxtLink to="/register" class="text-blue-600 hover:underline font-semibold">register</NuxtLink>)</span>
          </div>

          <!-- Üst menü linkleri -->
          <NuxtLink to="/deals" class="hover:underline">
            Daily Deals
          </NuxtLink>
          <a class="hover:underline" href="#">Brand Outlet</a>
          <a class="hover:underline" href="#">Gift Cards</a>
          <a class="hover:underline" href="#">Help &amp; Contact</a>

          <div class="ml-auto flex items-center gap-4">

            <!-- Ship to + Flag + Divider -->
            <div class="flex items-center gap-3 mr-4">
              <span class="inline-block w-[22px] h-[16px] align-middle mr-2">
                <!-- Turkish flag SVG, official crescent and star -->
                <svg viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="22" height="16" rx="2" fill="#E30A17"/>
                  <path d="M10.5 8a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" fill="white"/>
                  <path d="M11.3 8a2.7 2.7 0 1 1-5.4 0 2.7 2.7 0 0 1 5.4 0z" fill="#E30A17"/>
                  <polygon points="13.5,8 14.2,9.2 15.5,9.4 14.5,10.3 14.7,11.6 13.5,11 12.3,11.6 12.5,10.3 11.5,9.4 12.8,9.2" fill="white"/>
                </svg>
              </span>
              <a href="#" class="hover:underline mr-0.5">Ship to</a>
            </div>

            <!-- Sell -->
            <NuxtLink to="/sell" class="hover:underline">
              Sell
            </NuxtLink>

            <!-- Watchlist -->
            <div class="relative" @mouseenter="openWatchlistPreview" @mouseleave="closeWatchlistPreview">
              <NuxtLink
                to="/my-ebay/watchlist"
                class="hover:underline flex items-center gap-1"
              >
                <span>Watchlist</span>
                <svg class="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 8l4 4 4-4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </NuxtLink>
              <div v-if="showWatchlistPreview && watchlist.items.length > 0" class="absolute left-1/2 -translate-x-1/2 mt-2 z-50" @mouseenter="openWatchlistPreview" @mouseleave="closeWatchlistPreview">
                <div class="bg-white rounded-2xl shadow-xl p-4 w-[900px] border border-gray-200 animate-fade-in">
                  <div class="font-semibold text-base mb-3 flex items-center select-none cursor-pointer"
                       @click="$router.push('/my-ebay/watchlist')"
                  >
                    View all items you are watching
                    <span class="ml-1">&rarr;</span>
                  </div>
                  <div class="flex gap-4 overflow-x-auto max-w-full pb-2" style="scrollbar-width: thin;">
                    <div v-for="item in watchlist.items" :key="item.id" class="min-w-[140px] max-w-[180px] flex-shrink-0">
                      <img :src="item.image" class="w-full h-24 object-contain rounded-lg bg-gray-100 border border-gray-200 mb-2" />
                      <div class="font-medium text-xs mb-1 line-clamp-2">{{ item.title }}</div>
                      <div class="text-sm font-bold mb-1 text-gray-900">${{ item.price }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 🔵 My eBay -->
            <MyEbayMenu />

            <!-- notification -->
            <button class="p-2 rounded-full hover:bg-gray-100">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M12 2a6 6 0 00-6 6v3.6L4.3 13.3A1 1 0 005 15h14a1 1 0 00.7-1.7L18 11.6V8a6 6 0 00-6-6z" />
                <path d="M9 18a3 3 0 006 0" />
              </svg>
            </button>

            <!-- 🟦 Cart + Badge -->
            <NuxtLink
              to="/cart"
              class="p-2 rounded-full hover:bg-gray-100"
            >
              <div class="relative">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                </svg>
                <!-- sadece sepet doluyken göster -->
                <span
                  v-if="cartCount > 0"
                  class="absolute -top-1 -right-1 min-w-[16px] h-[16px]
                         px-1 rounded-full bg-red-600 text-white text-[10px]
                         flex items-center justify-center"
                >
                  {{ cartCount }}
                </span>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- LOGO + SEARCH -->
        <!-- Full-width top line, edge to edge -->
        <div style="position:relative;width:100vw;left:50%;right:50%;margin-left:-50vw;margin-right:-50vw;" class="h-px bg-gray-200 mb-1"></div>
        <div class="flex items-center py-3 w-full gap-4">
          <NuxtLink to="/" class="flex-shrink-0">
            <Logo class="h-10 md:h-12 w-auto" />
          </NuxtLink>
          <button
            class="hidden md:inline-flex flex-col items-start justify-center text-[13px] font-normal text-gray-700 hover:text-black leading-tight relative ml-2 mr-6"
            style="min-width:90px;"
          >
            <span style="line-height:1.1;">Shop by</span>
            <span style="line-height:1.1;">category</span>
            <svg class="h-4 w-4 absolute right-0 top-1/2 -translate-y-1/2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.5 10l3.5 3.5L15.5 10" />
            </svg>
          </button>
          <div class="flex-1 flex justify-center">
            <div class="w-full max-w-[1100px] flex items-center">
              <div class="flex-1 min-w-0">
                <SearchBar @search="handleSearch" class="w-full" />
              </div>
              <div class="flex items-center ml-4">
                <NuxtLink
                  to="/search"
                  class="text-sm text-gray-600 hover:underline mr-3"
                >
                  Advanced
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <!-- Full-width bottom line, edge to edge -->
        <div style="position:relative;width:100vw;left:50%;right:50%;margin-left:-50vw;margin-right:-50vw;" class="h-px bg-gray-200 mt-1"></div>

        <!-- ALT NAV -->
        <nav
          class="hidden md:flex w-full justify-center gap-6 text-sm text-gray-700 pb-3"
        >
          <a class="hover:text-black">eBay Live</a>
          <a class="hover:text-black">Saved</a>
          <a class="hover:text-black">Electronics</a>
          <a class="hover:text-black">Motors</a>
          <a class="hover:text-black">Fashion</a>
          <NuxtLink
            to="/collectibles"
            class="hover:text-black"
          >
            Collectibles and Art
          </NuxtLink>
          <a class="hover:text-black">Sports</a>
          <a class="hover:text-black">Health &amp; Beauty</a>
          <a class="hover:text-black">Industrial equipment</a>
          <a class="hover:text-black">Home &amp; Garden</a>
          <NuxtLink
            to="/deals"
            class="hover:text-black"
          >
            Deals
          </NuxtLink>
          <NuxtLink
            to="/sell"
            class="hover:text-black"
          >
            Sell
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>
