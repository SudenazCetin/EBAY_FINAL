import { defineStore } from 'pinia'
import type { Product } from '~/types/Product'

export const useLocalProductStore = defineStore('localProduct', {
  state: () => ({
    products: [] as Product[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchProducts() {
      this.loading = true
      try {
        const res = await fetch('http://localhost:4000/api/products')
        this.products = await res.json()
      } catch (e: any) {
        this.error = e.message
      } finally {
        this.loading = false
      }
    },
    async addProduct(product: Omit<Product, 'id'>) {
      try {
        await fetch('http://localhost:4000/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(product),
        })
        await this.fetchProducts()
      } catch (e: any) {
        this.error = e.message
      }
    },
    // Güncelleme ve silme işlemleri de eklenebilir
  },
})
