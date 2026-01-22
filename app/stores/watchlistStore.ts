import { defineStore } from 'pinia'

export const useWatchlistStore = defineStore('watchlist', {
  state: () => ({
    items: [] as any[],
  }),
  actions: {
    add(item: any) {
      if (!this.items.find(i => i.id === item.id)) {
        this.items.push(item)
      }
    },
    remove(itemId: string | number) {
      this.items = this.items.filter(i => i.id !== itemId)
    },
    isInWatchlist(itemId: string | number) {
      return this.items.some(i => i.id === itemId)
    }
  }
})
