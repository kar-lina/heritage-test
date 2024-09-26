export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('token')
  const { showToast } = useToastStore()
  // if token doesn't exist redirect to log in
  if (!token.value) {
    abortNavigation()
    showToast('Пожалуйста, авторизуйтесь')
    return navigateTo('/login')
  }
})
