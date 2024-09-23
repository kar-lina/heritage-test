/**
 * Sets the user's cookies with the given values
 * @param cookieObj - if null, clears the cookies
 * @param cookieObj.userId - the user's ID
 * @param cookieObj.userToken - the user's token
 * @param cookieObj.userRefreshToken - the user's refresh token
 */
export const setUserCookie = (
  cookieObj: {
    // userId: number | string
    userToken: string
    userRefreshToken: string;
  } | null
) => {
  const token = useCookie('token')
  const refresh_token = useCookie('refresh_token')
  if (cookieObj) {
    token.value = cookieObj.userToken
    refresh_token.value = cookieObj.userRefreshToken
    // id.value = String(cookieObj.userId)
  } else {
    // clear cookies
    token.value = ''
    refresh_token.value = ''
    // id.value = ''
  }
}
