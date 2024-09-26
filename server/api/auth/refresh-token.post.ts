export default defineEventHandler((): {token: string; refresh_token: string} => {
  return {
    token: '12345',
    refresh_token: '12345'
  }
})
