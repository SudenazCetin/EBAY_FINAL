import { defineStore } from 'pinia';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '~/utils/firebase';
import type { Order } from '~/types/Order';

export const useOrderStore = defineStore('order', {
  state: () => ({
    orders: [] as Order[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchOrders() {
      this.loading = true;
      try {
        const querySnapshot = await getDocs(collection(db, 'orders'));
        this.orders = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Order[];
      } catch (e: any) {
        this.error = e.message;
      } finally {
        this.loading = false;
      }
    },
    async addOrder(order: Omit<Order, 'id'>) {
      try {
        await addDoc(collection(db, 'orders'), order);
        await this.fetchOrders();
      } catch (e: any) {
        this.error = e.message;
      }
    },
  },
});
