<template>
  <div>
    <div v-if="data" class="company">
      <v-img class="company__logo" aspect-ratio="1/1" cover :src="data.logo" alt="logo" />
      <h1 class="company__title">{{data?.title}}</h1>
      <UIRating v-if="reviews" :rating="reviews" class="company__rating" />
      <v-btn
        flat
        class="company__btn btn"
        color="primary"
        size="large"
        @click="showMobilePhone = !showMobilePhone"
        >Показать номер телефона</v-btn
      >
      <v-expand-transition>
        <v-card flat v-show="showMobilePhone" class="mx-auto">
          <v-card-text>{{data?.phone}}</v-card-text></v-card
        >
      </v-expand-transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import { api } from '~/services/constants'
import { type CompanyHeading, type Rating } from '~/types'
const showMobilePhone = ref(false)
const { data } = useBaseFetch<CompanyHeading>(api.COMPANY_HEADING)
const { data: reviews } = useBaseFetch<Rating>(api.COMPANY_REVIEWS)
</script>


<style lang="scss" scoped>
.company {
  display: flex;
  align-items: center;
  flex-direction: column;
  &__logo {
    width: 120px;
    height: 120px;
    border-radius: 22px;
    margin-bottom: 24px;
  }
  &__title {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.16666666667;
    margin-bottom: 10px;
  }
  &__rating {
    margin-bottom: 20px;
    line-height: 24px;
  }
  &__btn {
    padding: 16px 20px;
    height: 56px !important;
  }
}
</style>
