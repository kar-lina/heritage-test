import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {

  const token = useCookie('token')
  const { alert } = useToastStore()

  // if token doesn't exist redirect to log in
  if (!token.value) {
    abortNavigation()
    alert('Пожалуйста, авторизуйтесь')
    return navigateTo('/login')
  } else true
})
