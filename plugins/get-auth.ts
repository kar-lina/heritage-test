export default defineNuxtPlugin(() => {
    const token = useCookie('token')
    const { getAuth } = useAuthStore()
    if (token.value) getAuth()
})
