import { setUserCookie } from '~/lib'

export default defineNuxtPlugin((nuxtApp) => {
  const baseURl = useRuntimeConfig().public.apiBase as string
  const { showToast } = useToastStore()
  const api = $fetch.create({
    baseURL: baseURl,
    retryStatusCodes: [401],
    onRequest({ options }) {
      const token = useCookie('token')
      if (token?.value) {
        const headers = (options.headers ||= {})
        if (Array.isArray(headers)) {
          headers.push(['Authorization', `Bearer ${token.value}`])
        } else if (headers instanceof Headers) {
          headers.set('Authorization', `Bearer ${token.value}`)
        } else {
          headers.Authorization = `Bearer ${token.value}`
        }
      }
    },
    async onResponseError({ response }) {
      showToast(response._data.message + 'error', 'error')
      if (response.status === 401) {
        const refreshToken = useCookie('refresh_token')
        const data = await $fetch<{ token: string; refresh_token: string }>(
          'http://localhost:3000/api/auth/refresh-token/',
          {
            method: 'POST',
            body: { refresh: refreshToken.value }
          }
        )
        if (data) {
          setUserCookie({ userToken: data.token, userRefreshToken: data.refresh_token })
        } else {
          useLogout()
          await nuxtApp.runWithContext(() => navigateTo('/login'))
        }
      }
    }
  })
  return {
    provide: {
      api
    }
  }
})
