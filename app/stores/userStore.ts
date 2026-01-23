import { defineStore } from 'pinia';
import { collection, getDocs, addDoc } from 'firebase/firestore';
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
        const querySnapshot = await getDocs(collection(db, 'users'));//çekti,okuma
        this.users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as User[];
      } catch (e: any) {
        this.error = e.message;
      } finally {
        this.loading = false;
      }
    },
    async addUser(userData: Omit<User, 'id'>) {
      this.loading = true;
      try {
        const docRef = await addDoc(collection(db, 'users'), userData);//yazma
        const newUser = { id: docRef.id, ...userData } as User;//oluşturdu
        this.users.push(newUser);
        return newUser;
      } catch (e: any) {
        this.error = e.message;
        throw e;
      } finally {
        this.loading = false;
      }
    },
  },
});
