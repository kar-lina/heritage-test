import type { Product } from '~/types'
const products: Array<Product> = [
  {
    id: 1,
    name: 'Сlavia Nord Grand сценическое цифровое пианино',
    price: 450000,
    views: 750,
    img: '/products/01.png',
    isPromoted: false,
    isActive: true,
    published: '2024-09-01',
    subCategory: 3
  },
  {
    id: 2,
    name: 'Hyundai Sonata 2.0 AT, 2023, 30 км',
    price: 450000,
    views: 750,
    img: '/products/02.png',
    isPromoted: true,
    isActive: true,
    published: '2024-09-01',
    subCategory: 3
  },
  {
    id: 3,
    name: '2-к. квартира, 46 м², 1/5 эт.',
    price: 450000,
    views: 750,
    img: '/products/03.png',
    isPromoted: true,
    isActive: true,
    published: '2024-09-01',
    subCategory: 4
  },
  {
    id: 4,
    name: 'Старые барабаны',
    price: 450000,
    views: 750,
    img: '/products/04.png',
    isPromoted: false,
    isActive: true,
    published: '2024-09-01',
    subCategory: 1
  },
  {
    id: 5,
    name: 'DMX сплиттер RJ45 to 4x XLR Stairville',
    price: 450000,
    views: 750,
    img: '/products/05.png',
    isPromoted: false,
    isActive: true,
    published: '2024-09-01',
    subCategory: 4
  },
  {
    id: 6,
    name: 'Мотоцикл honda',
    price: 450000,
    views: 750,
    img: '/products/06.png',
    isPromoted: false,
    isActive: true,
    published: '2024-09-01',
    subCategory: 3
  },
  {
    id: 7,
    name: 'Иж юпитер 5',
    price: 450000,
    views: 750,
    img: '/products/07.png',
    isPromoted: false,
    isActive: false,
    published: '2024-09-01',
    subCategory: 1
  },
  {
    id: 8,
    name: 'Пылесос кёрхер с водяным мешком для сбора пыли',
    price: 450000,
    views: 750,
    img: '/products/08.png',
    isPromoted: false,
    isActive: true,
    published: '2024-09-01',
    subCategory: 2
  }
]
export default defineEventHandler((event): Array<Product> => {
  const { category } = getQuery<Record<string, string>>(event)
  const categories = category ? category?.split(',') : null

  if (categories?.length) {
    return products.filter((product) => categories.includes(String(product.subCategory)))
  } else {
    return products
  }
})
