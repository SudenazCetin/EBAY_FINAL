<!-- app/components/molecules/LoginForm.vue -->
<script setup lang="ts">
</script>

<template>
  <div class="w-full space-y-3">
    
    <!-- New to eBay + Create Account - Ayrı Baloncuklar -->
    <div class="flex justify-between items-center bg-gray-100 rounded-full px-5 py-2.5">
      <span class="text-sm text-black">New to eBay?</span>
      <NuxtLink
        to="/register"
        class="px-5 py-2 border border-gray-900 bg-white rounded-full hover:bg-gray-50 text-sm font-semibold"
      >
        Create account
      </NuxtLink>
    </div>

    <!-- EMAIL INPUT BOX - Ayrı Baloncuk -->
    <div class="bg-white p-5 rounded-2xl shadow-sm">
    <!-- EMAIL INPUT -->
    <div class="mb-3">
      <label class="text-sm font-medium">Email or username</label>
      <input
        type="email"
        placeholder="example@email.com"
        class="w-full mt-1.5 px-3 py-2.5 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>

    <!-- CONTINUE BUTTON -->
    <button
      class="w-full h-11 bg-[#3665F3] text-white font-semibold rounded-full hover:brightness-110 mb-4"
    >
      Continue
    </button>

    <!-- OR ÇİZGİSİ -->
    <div class="flex items-center gap-4 mb-4">
      <div class="flex-1 h-px bg-gray-300"></div>
      <span class="text-sm text-gray-500">or</span>
      <div class="flex-1 h-px bg-gray-300"></div>
    </div>

    <!-- SOCIAL BUTTONS -->
    <div class="space-y-2">
      <button
        class="w-full flex items-center border-2 border-black rounded-full py-2.5 text-gray-800 hover:bg-gray-200"
      >
        <img src="~/assets/social/google.svg" class="h-6 w-6 ml-5" />
        <span class="font-medium flex-1 text-center -ml-6">Continue with Google</span>
      </button>

      <button
        class="w-full flex items-center border-2 border-black rounded-full py-2.5 text-gray-800 hover:bg-gray-200"
      >
        <img src="~/assets/social/facebook.svg" class="h-6 w-6 ml-5" />
        <span class="font-medium flex-1 text-center -ml-6">Continue with Facebook</span>
      </button>

      <button
        class="w-full flex items-center border-2 border-black rounded-full py-2.5 text-gray-800 hover:bg-gray-200"
      >
        <img src="~/assets/social/apple.svg" class="h-6 w-6 ml-5" />
        <span class="font-medium flex-1 text-center -ml-6">Continue with Apple</span>
      </button>
    </div>

    <!-- stay signed in -->
    <div class="mt-4 flex items-center justify-center gap-2 text-sm text-black">
      <input type="checkbox" class="w-4 h-4 accent-black" checked />
      <span>Stay signed in</span>
      <span class="cursor-pointer inline-flex items-center justify-center w-4 h-4 border border-black rounded-full text-xs font-bold">i</span>
    </div>
    </div>
  </div>
</template>
