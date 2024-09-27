import type { CompanyInfo } from '~/types'

export default defineEventHandler((): CompanyInfo => {
  return {
    description:
      'Копкой занимаемся 15 лет. Все началось с хобби и плавно переросло в любимую работу. Работаем с профессиональной техникой. ',
    workingHours: 'От забора и до заката',
    address: 'Ростов на Дону, Воронежская ул., 42А корп. 1'
  }
})
