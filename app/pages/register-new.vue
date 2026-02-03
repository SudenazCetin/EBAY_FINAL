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
    password: password.value
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
    <div class="w-full md:w-1/2 bg-white">
      <!-- Logo sol üst köşede -->
      <div class="px-6 pt-6">
        <Logo class="h-12 w-auto" />
      </div>
      
      <div class="flex items-start justify-center px-4 py-8">
        <div class="w-full max-w-xl">
          <!-- başlık -->
          <div class="text-center mb-6">
            <h1 class="text-2xl font-bold">Create an account</h1>
          </div>

          <div class="w-full space-y-3">
            <!-- Already have account baloncuk -->
            <div class="flex justify-between items-center bg-gray-100 rounded-full px-5 py-2.5">
              <span class="text-sm text-black">Already have an account?</span>
              <NuxtLink
                to="/login"
                class="px-5 py-2 border border-gray-900 bg-white rounded-full hover:bg-gray-50 text-sm font-semibold"
              >
                Sign in
              </NuxtLink>
            </div>

            <!-- Form baloncuk -->
            <div class="bg-white p-5 rounded-2xl shadow-sm">
              <!-- Personal / Business tabları -->
              <div class="mb-4 border border-gray-300 rounded-full flex overflow-hidden text-sm">
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
              <div class="mt-4 flex items-center gap-4 mb-4">
                <div class="flex-1 h-px bg-gray-300"></div>
                <span class="text-sm text-gray-500">or</span>
                <div class="flex-1 h-px bg-gray-300"></div>
              </div>

              <!-- Social buttons -->
              <div class="space-y-2">
                <button
                  type="button"
                  class="w-full flex items-center border-2 border-black rounded-full py-2.5 text-gray-800 hover:bg-gray-200"
                >
                  <img src="~/assets/social/google.svg" class="h-6 w-6 ml-5" />
                  <span class="font-medium flex-1 text-center -ml-6">Continue with Google</span>
                </button>
                <button
                  type="button"
                  class="w-full flex items-center border-2 border-black rounded-full py-2.5 text-gray-800 hover:bg-gray-200"
                >
                  <img src="~/assets/social/apple.svg" class="h-6 w-6 ml-5" />
                  <span class="font-medium flex-1 text-center -ml-6">Continue with Apple</span>
                </button>
                <button
                  type="button"
                  class="w-full flex items-center border-2 border-black rounded-full py-2.5 text-gray-800 hover:bg-gray-200"
                >
                  <img src="~/assets/social/facebook.svg" class="h-6 w-6 ml-5" />
                  <span class="font-medium flex-1 text-center -ml-6">Continue with Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
