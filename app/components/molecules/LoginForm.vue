<!-- app/components/molecules/LoginForm.vue -->
<script setup lang="ts">
</script>

<template>
  <div class="w-full bg-white p-6 rounded-lg shadow-sm border border-gray-200">

    <!-- New to eBay + Create Account -->
    <div class="flex justify-between items-center mb-6">
      <span class="text-sm text-gray-600">New to eBay?</span>
      <NuxtLink
        to="/register"
        class="px-4 py-2 border border-gray-400 rounded-full hover:bg-gray-50 text-sm"
      >
        Create account
      </NuxtLink>
    </div>

    <!-- EMAIL INPUT -->
    <div class="mb-4">
      <label class="text-sm font-medium">Email or username</label>
      <input
        type="email"
        placeholder="example@email.com"
        class="w-full mt-2 px-4 py-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>

    <!-- CONTINUE BUTTON -->
    <button
      class="w-full h-12 bg-[#3665F3] text-white font-semibold rounded-full hover:brightness-110 mb-6"
    >
      Continue
    </button>

    <!-- OR ÇİZGİSİ -->
    <div class="flex items-center gap-4 mb-6">
      <div class="flex-1 h-px bg-gray-300"></div>
      <span class="text-sm text-gray-500">or</span>
      <div class="flex-1 h-px bg-gray-300"></div>
    </div>

    <!-- SOCIAL BUTTONS -->
    <div class="space-y-4">
      <button
        class="w-full flex items-center justify-center gap-3 border rounded-full py-3 text-gray-800 hover:bg-gray-50"
      >
        <img src="~/assets/social/google.svg" class="h-5 w-5" />
        <span class="font-medium">Continue with Google</span>
      </button>

      <button
        class="w-full flex items-center justify-center gap-3 border rounded-full py-3 text-gray-800 hover:bg-gray-50"
      >
        <img src="~/assets/social/facebook.svg" class="h-5 w-5" />
        <span class="font-medium">Continue with Facebook</span>
      </button>

      <button
        class="w-full flex items-center justify-center gap-3 border rounded-full py-3 text-gray-800 hover:bg-gray-50"
      >
        <img src="~/assets/social/apple.svg" class="h-5 w-5" />
        <span class="font-medium">Continue with Apple</span>
      </button>
    </div>

    <!-- stay signed in -->
    <div class="mt-6 flex items-center gap-2 text-sm">
      <input type="checkbox" class="w-4 h-4" checked />
      <span>Stay signed in</span>
      <span class="text-gray-400 cursor-pointer">ℹ️</span>
    </div>
  </div>
</template>
