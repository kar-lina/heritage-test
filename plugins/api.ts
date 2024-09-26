import { setUserCookie } from '~/lib'

export default defineNuxtPlugin((nuxtApp) => {
  const token = useCookie('token')
  const baseURl = useRuntimeConfig().public.apiBase as string
  const api = $fetch.create({
    baseURL: baseURl,
    retryStatusCodes: [401],
    onRequest({ options }) {
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
    async onResponseError({ response, error }) {
      useNuxtApp().$toast.error(response._data.message)
      if (response.status === 401) {
        const refreshToken = useCookie('refresh_token')
        const { data, status } = await useFetch<{ token: string; refresh_token: string }>(
          'http://localhost:3000/api/auth/refresh-token/',
          {
            method: 'POST',
            body: { refresh: refreshToken.value }
          }
        )
        if (status.value === 'success' && data.value) {
          setUserCookie({ userToken: data.value.token, userRefreshToken: data.value.refresh_token })
        } else {
          useLogout()
          await nuxtApp.runWithContext(() => navigateTo('/login'))
        }
      }
    }
  })

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api
    }
  }
})
