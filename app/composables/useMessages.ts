/**
 * SSR-uyumlu Messages composable
 * Express API'den mesajları çeker
 */
import type { Message } from '~/types/Message'

export const useMessages = () => {
    const { data: messages, pending, error, refresh } = useAsyncData<Message[]>(
        'messages',
        async () => {
            try {
                // Express API'den mesajları çek (Doğru endpoint: /api/messages)
                const response = await $fetch('http://localhost:4000/api/messages')
                return response as Message[]
            } catch (e) {
                console.error('Error fetching messages:', e)
                return []
            }
        },
        {
            server: true,
            lazy: false
        }
    )

    return {
        messages,
        pending,
        error,
        refresh
    }
}

/**
 * Yeni mesaj ekle
 */
export const addMessage = async (message: { sender: string; receiver: string; content: string }) => {
    try {
        await $fetch('http://localhost:4000/api/messages', {
            method: 'POST',
            body: message
        })
        return true
    } catch (e) {
        console.error('Error adding message:', e)
        return false
    }
}

/**
 * Mesaj sil
 */
export const deleteMessage = async (id: string) => {
    try {
        await $fetch(`http://localhost:4000/api/messages/${id}`, {
            method: 'DELETE'
        })
        return true
    } catch (e) {
        console.error('Error deleting message:', e)
        return false
    }
}
