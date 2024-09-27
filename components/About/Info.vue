<template>
  <div v-if="data" class="info">
    <div>
      <h1 class="info__title">О компании</h1>
      <p>{{ data.description }}</p>
    </div>
    <v-expansion-panels bg-color="lightGray" flat class="info__panel">
      <v-expansion-panel>
        <v-expansion-panel-title
          ><h1 class="info__title">Режим работы</h1>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <p>{{ data.workingHours }}</p></v-expansion-panel-text
        >
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="info__location">
      <div>
        <h1 class="info__title">Местоположение</h1>
        <p class="text-primary">{{ data.address }}</p>
      </div>
      <AboutMap class="info__map" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { api } from '~/services/constants'
import type { CompanyInfo } from '~/types'
const { data } = useBaseFetch<CompanyInfo>(api.COMPANY_INFO)
</script>
<style lang="scss">
.info {
  display: flex;
  gap: 8px;
  flex-direction: column;
  font-size: 15px;
  line-height: 24px;
  & > * {
    padding: 0 16px;
  }
  &__title {
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  &__panel {
    opacity: 0.3;
  }
  &__location {
    display: flex;
    flex-direction: column-reverse;
    gap: 16px;
  }
  &__map {
    width: 100%;
    border: none;
    border-radius: none;
  }
}
@media (min-width: 768px) {
  .info {
    gap: 12px;
    font-size: 17px;
    line-height: 1.64705882353;
    & > * {
      padding: 0 20px;
    }
    &__title {
      font-size: 24px;
      line-height: 1.16666666667;
    }
    &__location {
      flex-direction: row;
      gap: 20px;
    }
    &__map {
      width: 200px;
      border: none;
      border-top-left-radius: 12px;
      border-bottom-right-radius: 12px;
      border-top-right-radius: 12px;
    }
  }
}
</style>
