import type { Rating } from '~/types'

export default defineEventHandler((): Rating => {
  return {
    docs: true,
    rating: 4.3,
    reviews: 19
  }
})
