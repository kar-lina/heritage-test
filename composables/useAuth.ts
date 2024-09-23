
export const useAuth = () => {
  const token = useCookie('token')
  const { getAuth } = useAuthStore()
  if (token.value) getAuth()
}
