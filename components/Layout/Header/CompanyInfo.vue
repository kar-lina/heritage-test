<template>
  <div>
    <div class="company d-flex flex-column align-center">
      <v-img class="company__logo" aspect-ratio="1/1" cover src="/logo.png" alt="logo" />
      <h1 class="company__title">Наследие</h1>
      <div class="company__info">
        <span>
          <v-icon size="small" color="primary" :icon="mdiCheckDecagram"></v-icon> Документ
          проверены</span
        >
        <span> <v-icon size="small" color="primary" :icon="mdiStar"></v-icon> 4.7</span>
        <span> 19 отзывов</span>
      </div>

      <v-btn
        flat
        class="company__btn"
        color="primary"
        size="large"
        @click="showMobilePhone = !showMobilePhone"
        >Показать номер телефона</v-btn
      >
      <v-expand-transition>
        <v-card flat v-show="showMobilePhone" class="mx-auto">
          <v-card-text>+7 (999) 999-99-99</v-card-text></v-card
        >
      </v-expand-transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import { mdiCheckDecagram, mdiStar } from '@mdi/js'
const showMobilePhone = ref(false)
</script>
<style lang="scss" scoped>
.company {
  &__logo {
    width: 120px;
    height: 120px;
    border-radius: 12px;
    margin-bottom: 24px;
  }
  &__title {
    font-size: 24px;
    font-weight: 600;
    line-height: calc(28 / 24 * 100%);
    margin-bottom: 12px;
  }
  &__info {
    display: flex;
    gap: 4px;
    margin-bottom: 24px;
    flex-wrap: wrap;
    @media (min-width: 768px) {
      flex-direction: row;
      margin-bottom: 12px;
      
    }
    span {
      flex: 0 0 auto;
    }
    
    span:not(:first-child) {
      &::before {
        content: '•';
        margin-right: 4px;
      }
    }
  }
  &__btn {
    padding: 16px 20px;
    height: 56px;
    text-transform: none !important;
    border-radius: 12px;
  }
}
</style>
