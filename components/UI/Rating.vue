<template>
  <div v-if="rating" class="rating">
    <span v-if="rating.docs">
      <v-icon size="x-small" class="icon" color="primary" :icon="mdiCheckDecagram" />
      {{ docsText }}
    </span>
    <span v-if="rating.rating">
      <v-icon size="x-small" class="icon" color="primary" :icon="mdiStar" />
      {{ rating.rating }}</span
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
const docsText = computed(() => (smAndUp.value ? 'Документы проверены' : 'Проверен'))
</script>
<style lang="scss" scoped>
.rating {
  display: flex;
  line-height: 1.6;
  max-width: 360px;
  .icon {
    margin-right: 5px;
  }
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
