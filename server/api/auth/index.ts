import { UserLoginReturnData } from '~/types'
// Метод для получения данных пользователя по токену (из cookie)
export default defineEventHandler((): UserLoginReturnData => {
  return {
    id: 1,
    name: 'John Doe',
    email: 'VqP7M@example.com',
    img: 'https://cdn.vuetifyjs.com/images/john.png',
    token: '12345',
    refresh_token: '12345'
  }
})
