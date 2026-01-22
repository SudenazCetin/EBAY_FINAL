import { defineStore } from 'pinia';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '~/utils/firebase';
import type { User } from '~/types/User';

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as User[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchUsers() {
      this.loading = true;
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        this.users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as User[];
      } catch (e: any) {
        this.error = e.message;
      } finally {
        this.loading = false;
      }
    },
  },
});
