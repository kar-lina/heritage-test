export default defineNuxtRouteMiddleware(() => {
  const token = useCookie('token')
  const { showToast } = useToastStore()
  if (!token.value) {
    abortNavigation()
    showToast('Пожалуйста, авторизуйтесь')
    return navigateTo('/login')
  }
})
