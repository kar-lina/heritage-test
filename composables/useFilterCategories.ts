import { api } from '~/services/constants'
import type { ProductCategory } from '~/types'

/**
 * Composable for filtering categories.
 * It fetches the list of categories from the API,
 * and provides a computed property `categoriesList` with the list of categories,
 * and a ref `selectedCategories` to store the selected categories.
 * It also provides a computed property `isAllCategoriesSelected` that is true if all categories are selected.
 * It watches the `selectedCategories` ref and updates the route query param 'category' if the value changes.
 * It also watches the `isAllCategoriesSelected` ref and sets the `selectedCategories` ref to all categories if the value is true.
 * It also provides a computed property `allSubCategoriesIds` that is an array of all subcategories Ids.
 */
export const useFilterCategories = () => {
  const { data: categories } = useBaseFetch<ProductCategory[]>(api.CATEGORIES)

  const route = useRoute()
  const router = useRouter()

  const allSubCategoriesIds = computed(() => {
    const ids: number[] = []
    categories?.value?.forEach((category) => {
      category.subCategories.forEach((subCategory) => {
        ids.push(subCategory.id)
      })
    })
    return ids
  })
  const selectedCategories = ref<Array<number>>(
    route.query?.category ? route.query.category?.split(',')?.map((id: string) => Number(id)) : []
  )
  const isAllCategoriesSelected = ref<boolean>(false)

  /**
   * Watches the `isAllCategoriesSelected` ref and sets the `selectedCategories` ref to all categories if the value is true.
   */
  watch(
    isAllCategoriesSelected,
    (newValue, oldValue) => {
      if (newValue) {
        selectedCategories.value = allSubCategoriesIds.value
      }
    },
    { immediate: true }
  )

  /**
   * Watches the `selectedCategories` ref and updates the route query param 'category' if the value changes.
   */
  watch(selectedCategories, (newValue, oldValue) => {
    if (newValue.length === allSubCategoriesIds.value.length) {
      isAllCategoriesSelected.value = true
    } else {
      isAllCategoriesSelected.value = false
    }

    if (newValue.length) {
      router.push({
        query: { category: selectedCategories.value.join(',') }
      })
    } else {
      router.push({
        query: {}
      })
    }
  })

  const categoriesList = computed(() =>
    categories?.value?.flatMap((category) => [
      { title: category.name, isGroupName: true },
      ...category.subCategories.map((subCategory) => ({
        title: subCategory.name,
        isGroupName: false,
        value: subCategory.id
      }))
    ])
  )
  // const categoriesList = computed(() => {
  //   const opt: Array<{ title: string; isGroupName: boolean; value?: string | number }> = []
  //   categories?.value?.forEach((category) => {
  //     opt.push({ title: category.name, isGroupName: true })
  //     category.subCategories.forEach((subCategory) => {
  //       opt.push({ title: subCategory.name, isGroupName: false, value: subCategory.id })
  //     })
  //   })
  //   return opt
  // })
  return { categoriesList, selectedCategories, isAllCategoriesSelected }
}
