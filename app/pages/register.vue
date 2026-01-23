<!-- app/pages/register.vue -->
<script setup lang="ts">
definePageMeta({ layout: 'auth' })
import { ref } from 'vue'

// 🔹 GÖRSELİ BURADAN IMPORT EDİYORUZ
import heroImg from '~/assets/auth-register-hero.jpg'

const mode = ref<'personal' | 'business'>('personal')

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')

import { useUserStore } from '~/stores/userStore'
const userStore = useUserStore()

const handleSubmit = async () => {
  await userStore.fetchUsers()
  await userStore.addUser({
    name: firstName.value + ' ' + lastName.value,
    email: email.value,
    avatar: '',
  })
  alert('Kullanıcı Firestore veritabanına eklendi!')
}
</script>

<template>
  <div class="min-h-screen bg-white flex">
    <!-- Sol görsel alanı -->
    <div class="hidden md:block md:w-1/2 bg-gray-100">
      <img
        :src="heroImg"
        alt="Happy people"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Sağ form alanı -->
    <div class="w-full md:w-1/2 flex flex-col relative">
      <!-- Üstte küçük eBay logo -->
      <div class="px-6 pt-6">
        <div class="inline-flex items-center gap-1 text-2xl font-bold text-[#e53238]">
          <span class="text-[#e53238]">e</span>
          <span class="text-[#0064d2]">b</span>
          <span class="text-[#f5af02]">a</span>
          <span class="text-[#86b817]">y</span>
        </div>
      </div>

      <!-- Sağ üstte "Already have an account? Sign in" -->
      <div class="absolute top-6 right-6 text-sm">
        <span class="text-gray-600">Already have an account?</span>
        <NuxtLink
          to="/login"
          class="ml-1 text-blue-600 hover:underline"
        >
          Sign in
        </NuxtLink>
      </div>

      <!-- Form kutusu -->
      <div class="flex-1 flex items-center justify-center px-4 py-10 md:px-10">
        <div class="w-full max-w-md">
          <h1 class="text-3xl font-semibold mb-6">
            Create an account
          </h1>

          <!-- Personal / Business tabları -->
          <div class="mb-6 border border-gray-300 rounded-full flex overflow-hidden text-sm">
            <button
              type="button"
              class="flex-1 py-2 font-medium"
              :class="mode === 'personal'
                ? 'bg-black text-white'
                : 'bg-white text-gray-700'"
              @click="mode = 'personal'"
            >
              Personal
            </button>
            <button
              type="button"
              class="flex-1 py-2 font-medium"
              :class="mode === 'business'
                ? 'bg-black text-white'
                : 'bg-white text-gray-700'"
              @click="mode = 'business'"
            >
              Business
            </button>
          </div>

          <!-- Form -->
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div class="flex gap-3">
              <div class="flex-1">
                <input
                  v-model="firstName"
                  type="text"
                  required
                  placeholder="First name"
                  class="w-full bg-gray-100 border border-black rounded-lg px-4 py-4 text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
              <div class="flex-1">
                <input
                  v-model="lastName"
                  type="text"
                  required
                  placeholder="Last name"
                  class="w-full bg-gray-100 border border-black rounded-lg px-4 py-4 text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
            </div>

            <div>
              <input
                v-model="email"
                type="email"
                required
                placeholder="Email"
                class="w-full bg-gray-100 border border-black rounded-lg px-4 py-4 text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div class="relative">
              <input
                v-model="password"
                type="password"
                required
                placeholder="Password"
                class="w-full bg-gray-100 border border-black rounded-lg px-4 py-4 text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button 
                type="button"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>

            <p class="text-[11px] text-gray-500 leading-snug">
              By selecting
              <span class="font-semibold">
                {{ mode === 'personal' ? 'Create personal account' : 'Create business account' }}
              </span>,
              you agree to our <span class="underline cursor-pointer hover:text-blue-600">User Agreement</span>
              and acknowledge reading our <span class="underline cursor-pointer hover:text-blue-600">User Privacy Notice</span>.
            </p>

            <button
              type="submit"
              class="w-full mt-2 py-4 rounded-full bg-gray-400 hover:bg-gray-500 text-white font-semibold text-base transition-colors"
            >
              {{ mode === 'personal' ? 'Create personal account' : 'Create business account' }}
            </button>
          </form>

          <!-- OR continue with -->
          <div class="mt-6 flex items-center gap-3 text-xs text-gray-500">
            <div class="flex-1 h-px bg-gray-300" />
            <span>or continue with</span>
            <div class="flex-1 h-px bg-gray-300" />
          </div>

          <!-- Social buttons -->
          <div class="mt-4 flex gap-3">
            <button
              type="button"
              class="flex-1 bg-white border border-black text-black rounded-full py-3.5 text-base flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span>Google</span>
            </button>
            <button
              type="button"
              class="flex-1 bg-white border border-black text-black rounded-full py-3.5 text-base flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="#000000">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span>Apple</span>
            </button>
            <button
              type="button"
              class="flex-1 bg-white border border-black text-black rounded-full py-3.5 text-base flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
