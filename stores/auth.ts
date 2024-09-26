import { defineStore } from 'pinia'
import type { LoginData, User } from '~/types'
import { useToastStore } from './toast'
import { getAuth, loginUser } from '~/services/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
    currentUser: null as User | null,
    accessToken: '',
    refreshToken: ''
  }),
  actions: {
    async getAuth() {
      try {
        const data = await getAuth()
        this.authenticated = true
        this.currentUser = { id: data.id, name: data.name, email: data.email, img: data.img }
        this.accessToken = data.token
        this.refreshToken = data.refresh_token
      } catch (error) {
        console.log(error)
      }
    },
    async authenticateUser({ email, password }: LoginData) {
      try {
        const data = await loginUser({ email, password })
        this.authenticated = true
        this.currentUser = { id: data.id, name: data.name, email: data.email, img: data.img }
        this.accessToken = data.token
        this.refreshToken = data.refresh_token
      } catch (error) {
        console.log(error)
      }
    },
    logUserOut() {
      this.authenticated = false
      this.currentUser = null
      this.accessToken = ''
      this.refreshToken = ''
    }
  }
})
