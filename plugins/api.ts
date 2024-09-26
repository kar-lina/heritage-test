export default defineNuxtPlugin((nuxtApp) => {
  const token = useCookie('token')
  const baseURl = useRuntimeConfig().public.apiBase as string
  const api = $fetch.create({
    baseURL: baseURl,
    onRequest({ request, options, error }) {
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
    async onResponseError({ request, response }) {
      if (response.status === 401) {
        useLogout()
        await nuxtApp.runWithContext(() => navigateTo('/login'))
        
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
