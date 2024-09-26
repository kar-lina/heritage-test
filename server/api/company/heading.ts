import { CompanyHeading } from '~/types'

export default defineEventHandler((): CompanyHeading => {
  return {
    title: 'Наследие',
    logo: '/logo.png',
    phone: '8 (999) 999-99-99'
  }
})
