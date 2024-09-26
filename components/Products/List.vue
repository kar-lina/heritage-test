<template>
  <div class="cards">
    <div class="card" v-for="product in products" :key="product.id">
      <div class="position-relative">
        <v-img class="card__img" :src="product.img" :alt="product.name" cover></v-img>
        <div class="card__badges">
          <div v-if="product.views" class="card__badge"><v-icon :icon="mdiEye" />255</div>
          <div v-if="product.published" class="card__badge">
            <v-icon :icon="mdiCalendarBlankOutline" />
            2 дня
          </div>
        </div>
      </div>

      <div class="card__info">
        <h3 class="card__price">{{ product.price }} ₽</h3>
        <h3 class="card__title">{{ product.name }}</h3>
      </div>
      <div class="card__actions">
        <p v-if="!product.isActive">Объявление скрыто</p>
        <p class="text-primary text-center" v-else-if="product.isPromoted">
          Объявление продвигается
        </p>
        <div class="card__btns" v-else>
          <p class="text-textSecondary">Увеличьте количество просмотров</p>
          <v-btn class="btn" flat color="primary" size="large">Продвигать</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mdiEye, mdiCalendarBlankOutline } from '@mdi/js'
import type { Product } from '~/types'
import { api } from '~/services/constants'
const router = useRouter()
const queryCategories = computed(() => {
  return router.currentRoute.value.query
})

const { data: products } = useBaseFetch<Product[]>(api.PRODUCTS, {
  query: queryCategories,
  watch: [queryCategories]
})
</script>

<style scoped lang="scss">
.cards {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 16px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    row-gap: 40px;
  }
  @media (960px<=width<=1200px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 32px;
  }
  @media (500px<=width<=960px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 42px;
  }
}
.card {
  padding: 8px;
  position: relative;
  display: flex;
  flex-direction: column;

  &__img {
    aspect-ratio: 13 / 10;
    width: 100%;
    border-radius: 24px;
    @media (max-width: 960px) {
      aspect-ratio: 1 / 1;
    }
  }
  &__badges {
    position: absolute;
    top: 16px;
    left: 16px;
    display: flex;
    gap: 8px;
    z-index: 1;
    color: #fff;
    font-size: 13px;
    font-weight: 500;
  }
  &__badge {
    border-radius: 12px;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    gap: 4px;
    border-radius: 12px;
    background: rgba(27, 29, 34, 0.6);
  }

  &__info {
    flex: 1 0 0;
    padding: 16px 0 9px 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    line-height: 1.6;
    font-weight: 500;
    font-size: 1rem;
    border-bottom: 1px solid #e8e8e8;
  }
  &__title {
    align-self: stretch;
  }
  &__actions {
    flex: 0 0 56px;
    padding: 12px 4px 4px 4px;
    max-height: 56px;
  }
  &__btns {
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: space-between;
    font-size: 13px;
  }
}
</style>
