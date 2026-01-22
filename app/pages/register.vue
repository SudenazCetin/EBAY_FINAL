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
                <label class="block text-xs font-semibold mb-1">First name</label>
                <input
                  v-model="firstName"
                  type="text"
                  required
                  class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div class="flex-1">
                <label class="block text-xs font-semibold mb-1">Last name</label>
                <input
                  v-model="lastName"
                  type="text"
                  required
                  class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold mb-1">Email</label>
              <input
                v-model="email"
                type="email"
                required
                class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label class="block text-xs font-semibold mb-1">Password</label>
              <input
                v-model="password"
                type="password"
                required
                class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <p class="text-[11px] text-gray-500 leading-snug">
              By selecting
              <span class="font-semibold">
                {{ mode === 'personal' ? 'Create personal account' : 'Create business account' }}
              </span>,
              you agree to our <span class="underline">User Agreement</span>
              and acknowledge reading our <span class="underline">User Privacy Notice</span>.
            </p>

            <button
              type="submit"
              class="w-full mt-2 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm"
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
          <div class="mt-4 flex flex-col gap-3">
            <button
              type="button"
              class="w-full border border-gray-300 rounded-full py-2 text-sm flex items-center justify-center gap-2 hover:bg-gray-50"
            >
              <span>Google</span>
            </button>
            <button
              type="button"
              class="w-full border border-gray-300 rounded-full py-2 text-sm flex items-center justify-center gap-2 hover:bg-gray-50"
            >
              <span>Apple</span>
            </button>
            <button
              type="button"
              class="w-full border border-gray-300 rounded-full py-2 text-sm flex items-center justify-center gap-2 hover:bg-gray-50"
            >
              <span>Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
