<!-- app/pages/login.vue -->
<script setup lang="ts">
definePageMeta({ layout: 'auth' })
</script>

<template>
  <!-- Header + Footer App.vue'de, burada sadece orta alan -->
  <div class="bg-white">
    <div class="min-h-[calc(100vh-160px)] flex items-start justify-center">
      <div class="w-full max-w-xl px-4 mt-16">
        <!-- üstte büyük logo -->
        <div class="flex justify-center mb-8">
          <Logo class="h-14 w-auto" />
        </div>

        <!-- başlık -->
        <div class="text-center mb-6">
          <h1 class="text-2xl font-semibold">Sign in to your account</h1>
          <p class="text-sm text-gray-600 mt-1">
            Continue to your eBay-like experience.
          </p>
        </div>

        <!-- TAM KART = LoginForm -->
        <LoginForm />
      </div>
    </div>
  </div>
</template>
