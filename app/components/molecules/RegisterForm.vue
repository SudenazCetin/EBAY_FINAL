<script setup>
import RegisterForm from '@/components/molecules/RegisterForm.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Form submit edildiğinde tetiklenir (emit ile geliyor)
function handleRegister(data) {
  console.log("New user:", data)

  // ✔ eBay gibi sadece yönlendirme yapacağız (backend yok)
  router.push('/login')
}
</script>

<template>
  <div class="bg-[#f5f5f5] min-h-screen flex items-center justify-center py-10">
    <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-200 w-full max-w-md">
      
      <h1 class="text-2xl font-semibold mb-2 text-center">Create an account</h1>
      <p class="text-sm text-gray-600 text-center mb-6">
        Continue to your eBay-like experience.
      </p>

      <RegisterForm @register="handleRegister" />
    </div>
  </div>
</template>
