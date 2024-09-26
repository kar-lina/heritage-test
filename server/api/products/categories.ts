import { ProductCategory } from '~/types'

export default defineEventHandler((): Array<ProductCategory> => {
  return [
    {
      id: 1,
      name: 'Транспорт',
      subCategories: [
        { id: 1, name: 'Мотоциклы' },
        { id: 2, name: 'Автомобили' }
      ]
    },
    {
      id: 2,
      name: 'Инструменты',
      subCategories: [
        { id: 3, name: 'Барабаны>' },
        { id: 4, name: 'Гитары' }
      ]
    },
    {
      id: 2,
      name: 'Услуги',
      subCategories: [
        { id: 5, name: 'Аренда' },
        { id: 6, name: 'Продажа' }
      ]
    }
  ]
})
