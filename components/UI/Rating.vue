<template>
  <div class="rating">
    <span v-if="rating.docs">
      <v-icon size="small" class="mr-1" color="primary" :icon="mdiCheckDecagram"></v-icon>
      {{ docsText }}
    </span>
    <span v-if="rating.rating">
      <v-icon size="small" color="primary" :icon="mdiStar"></v-icon> {{ rating.rating }}</span
    >
    <span v-if="rating.reviews"> {{ rating.reviews }} отзывов</span>
    <span v-else> Нет отзывов</span>
  </div>
</template>
<script setup lang="ts">
import { mdiCheckDecagram, mdiStar } from '@mdi/js'
import type { Rating } from '~/types'
defineProps<{ rating: Rating }>()

const { smAndUp } = useDisplay()
const docsText = computed(()=>smAndUp.value? 'Документы проверены': 'Проверен')
</script>
<style lang="scss" scoped>
.rating {
  display: flex;
  line-height: 24px;
  max-width: 360px;
  span {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  span:not(:first-child) {
    &::before {
      content: '•';
      margin-right: 5px;
      margin-left: 4px;
    }
  }
}
</style>
