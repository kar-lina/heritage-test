let isRefreshed= false
export default defineEventHandler(() => {
 if (!isRefreshed) {
   isRefreshed = true
   throw createError({
     statusCode: 401,
     statusMessage: 'Not authorized'
   })
 }
 return {msg: 'Повторный запрос - OK'}
})
