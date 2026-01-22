// app/stores/auth.ts
import { defineStore } from 'pinia'

interface User {
  email: string
}

interface AuthState {
  user: User | null
  loggedIn: boolean
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    loggedIn: false,
  }),
  actions: {
    // DEMO hesap: email: demo@ebayclone.com, şifre: 123456
    login(email: string, password: string): boolean {
      if (email === 'demo@ebayclone.com' && password === '123456') {
        this.user = { email }
        this.loggedIn = true
        return true
      }
      return false
    },
    logout() {
      this.user = null
      this.loggedIn = false
    }
  },
})
