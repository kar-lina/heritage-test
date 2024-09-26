let isCalled = false
export default defineEventHandler((event) => {
 if (!isCalled) {
  isCalled = true
   throw createError({
     statusCode: 401,
     statusMessage: 'Not authorized',
   })
 }
 return 'Повторный запрос - OK'
})
