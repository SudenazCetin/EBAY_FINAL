<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Logo from '@/components/atoms/Logo.vue'
import LoginForm from '@/components/molecules/LoginForm.vue'
import RegisterForm from '@/components/molecules/RegisterForm.vue'

const emit = defineEmits(['close'])

const activeTab = ref('login') // 'login' veya 'register'

function close() {
  emit('close')
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    close()
  }
}

function onKeyDown(e) {
  if (e.key === 'Escape') {
    close()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeyDown)
})

function handleLogin(payload) {
  console.log('login payload', payload)
  // TODO: gerçek login işlemi
}

function handleRegister(payload) {
  console.log('register payload', payload)
  // TODO: gerçek register işlemi
}
</script>
