<template>
  <div class="d-flex justify-center align-center">
    <v-select
      v-model="selectedCategories"
      placeholder="Все категории и продукты"
      :clear-icon="mdiClose"
      class="select"
      max-width="438"
      outlined
      variant="outlined"
      item-text="name"
      item-value="value"
      :items="categoriesList"
      multiple
      density="compact"
      clearable
    >
      <template #prepend-item>
        <v-list-item class="select" :active="isAllCategoriesSelected" density="compact">
          Все категории
          <template #append>
            <v-list-item-action :end="true">
              <v-checkbox-btn
                v-model="isAllCategoriesSelected"
                :indeterminate="!isAllCategoriesSelected && !!selectedCategories.length"
              />
            </v-list-item-action>
          </template>
        </v-list-item>
      </template>
      <template #item="{ props, item }">
        <v-list-item v-if="item.raw.isGroupName" density="compact">
          <span class="text-textSecondary text-body-2">{{ item.raw.title }}</span>
        </v-list-item>
        <v-list-item v-else density="compact" v-bind="props">
          <template #append="{ isActive }">
            <v-list-item-action :end="true">
              <v-checkbox-btn :model-value="isActive" />
            </v-list-item-action>
          </template>
        </v-list-item>
      </template>
    </v-select>
  </div>
</template>

<script setup lang="ts">
import { mdiClose } from '@mdi/js'
const { categoriesList, selectedCategories, isAllCategoriesSelected } = useFilterCategories()
</script>
