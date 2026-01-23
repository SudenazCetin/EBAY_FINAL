<!-- app/pages/login.vue -->
<script setup lang="ts">
definePageMeta({ layout: 'auth' })
</script>

<template>
  <!-- Header + Footer App.vue'de, burada sadece orta alan -->
  <div class="bg-white">
    <!-- Logo sol üst köşede -->
    <div class="px-6 pt-6">
      <Logo class="h-12 w-auto" />
    </div>
    
    <div class="min-h-[calc(100vh-160px)] flex items-start justify-center">
      <div class="w-full max-w-xl px-4 mt-8">
        <!-- başlık -->
        <div class="text-center mb-6">
          <h1 class="text-2xl font-bold">Sign in to your account</h1>
        </div>

        <!-- TAM KART = LoginForm -->
        <LoginForm />
      </div>
    </div>
  </div>
</template>
