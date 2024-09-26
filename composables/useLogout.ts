import { setUserCookie } from '~/lib'



export const useLogout = () => {
  setUserCookie(null)
  useClearStore()
}
