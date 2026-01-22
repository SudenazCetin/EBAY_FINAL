<!-- app/pages/messages.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Message } from '~/types/Message'

// SSR ile mesajları çek
const { messages, pending, refresh } = useMessages()

// Yeni mesaj formu
const showAddForm = ref(false)
const newMessage = ref({
  sender: '',
  receiver: '',
  content: ''
})

// Mesaj ekleme
async function handleAddMessage() {
  if (!newMessage.value.sender || !newMessage.value.receiver || !newMessage.value.content) {
    alert('Lütfen tüm alanları doldurun!')
    return
  }

  const success = await addMessage(newMessage.value)
  
  if (success) {
    // Formu temizle
    newMessage.value = { sender: '', receiver: '', content: '' }
    showAddForm.value = false
    
    // Listeyi yenile
    await refresh()
    alert('Mesaj eklendi!')
  } else {
    alert('Mesaj eklenemedi!')
  }
}

// Mesaj silme
async function handleDeleteMessage(id: string) {
  if (!confirm('Bu mesajı silmek istediğinizden emin misiniz?')) {
    return
  }

  const success = await deleteMessage(id)
  
  if (success) {
    await refresh()
    alert('Mesaj silindi!')
  } else {
    alert('Mesaj silinemedi!')
  }
}

// Tarih formatlama
function formatDate(timestamp: string) {
  return new Date(timestamp).toLocaleString('tr-TR')
}
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <!-- Başlık -->
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-3xl font-bold">Mesajlar</h1>
      <button
        @click="showAddForm = !showAddForm"
        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
      >
        {{ showAddForm ? 'İptal' : '+ Yeni Mesaj' }}
      </button>
    </div>

    <!-- Yeni Mesaj Formu -->
    <div
      v-if="showAddForm"
      class="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm"
    >
      <h2 class="text-xl font-semibold mb-4">Yeni Mesaj Ekle</h2>
      
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Gönderen
          </label>
          <input
            v-model="newMessage.sender"
            type="text"
            placeholder="Gönderen adı"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Alıcı
          </label>
          <input
            v-model="newMessage.receiver"
            type="text"
            placeholder="Alıcı adı"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Mesaj
          </label>
          <textarea
            v-model="newMessage.content"
            placeholder="Mesajınızı yazın..."
            rows="4"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
        </div>

        <button
          @click="handleAddMessage"
          class="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold"
        >
          Mesajı Gönder
        </button>
      </div>
    </div>

    <!-- Loading durumu -->
    <div v-if="pending" class="text-center py-12">
      <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      <p class="mt-4 text-gray-600">Mesajlar yükleniyor...</p>
    </div>

    <!-- Mesaj listesi -->
    <div v-else-if="messages && messages.length > 0" class="space-y-4">
      <div
        v-for="message in messages"
        :key="message.id"
        class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
      >
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <!-- Gönderen ve Alıcı -->
            <div class="flex items-center gap-3 mb-2">
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span class="font-semibold text-gray-900">{{ message.sender }}</span>
              </div>
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span class="font-semibold text-gray-900">{{ message.receiver }}</span>
              </div>
            </div>

            <!-- Mesaj içeriği -->
            <p class="text-gray-700 mb-3 leading-relaxed">
              {{ message.content }}
            </p>

            <!-- Tarih -->
            <p class="text-xs text-gray-500">
              {{ formatDate(message.timestamp) }}
            </p>
          </div>

          <!-- Sil butonu -->
          <button
            @click="handleDeleteMessage(message.id!)"
            class="ml-4 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Mesajı sil"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mesaj yoksa -->
    <div v-else class="text-center py-20">
      <svg class="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
      <h3 class="text-xl font-semibold text-gray-700 mb-2">Henüz mesaj yok</h3>
      <p class="text-gray-500 mb-6">İlk mesajı göndermek için yukarıdaki butona tıklayın</p>
    </div>

    <!-- API Bilgisi -->
    <div class="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <div class="flex items-start gap-3">
        <svg class="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div class="flex-1">
          <p class="text-sm font-semibold text-blue-900 mb-1">Express API ile SSR</p>
          <p class="text-xs text-blue-700">
            Bu sayfa Express API'den veri çekiyor (http://localhost:4000/messages) ve SSR ile render ediliyor. 
            Veriler <code class="px-1 py-0.5 bg-blue-100 rounded text-blue-900">server/data/messages.json</code> dosyasında saklanıyor.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
