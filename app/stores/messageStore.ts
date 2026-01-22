import { defineStore } from 'pinia';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '~/utils/firebase';
import type { Message } from '~/types/Message';

export const useMessageStore = defineStore('message', {
  state: () => ({
    messages: [] as Message[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchMessages() {
      this.loading = true;
      try {
        const querySnapshot = await getDocs(collection(db, 'messages'));
        this.messages = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Message[];
      } catch (e: any) {
        this.error = e.message;
      } finally {
        this.loading = false;
      }
    },
    async addMessage(message: Omit<Message, 'id'>) {
      try {
        await addDoc(collection(db, 'messages'), message);
        await this.fetchMessages();
      } catch (e: any) {
        this.error = e.message;
      }
    },
  },
});
