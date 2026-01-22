import { defineStore } from 'pinia';
import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '~/utils/firebase';
import type { Product } from '~/types/Product';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        this.products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Product[];
      } catch (e: any) {
        this.error = e.message;
      } finally {
        this.loading = false;
      }
    },
    async addProduct(product: Omit<Product, 'id'>) {
      try {
        await addDoc(collection(db, 'products'), product);
        await this.fetchProducts();
      } catch (e: any) {
        this.error = e.message;
      }
    },
    async updateProduct(id: string, product: Partial<Product>) {
      try {
        const productRef = doc(db, 'products', id);
        await updateDoc(productRef, product);
        await this.fetchProducts();
      } catch (e: any) {
        this.error = e.message;
      }
    },
  },
});
