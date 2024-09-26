<template>
  <div class="d-flex justify-center align-center">
    <v-select
      placeholder="Все категории и продукты"
      :clear-icon="mdiClose"
      class="select"
      max-width="438"
      outlined
      variant="outlined"
      item-text="name"
      item-value="value"
      v-model="selectedCategories"
      :items="categoriesList"
      multiple
      density="compact"
      clearable
    >
      <template v-slot:prepend-item>
        <v-list-item class="select" :active="isAllCategoriesSelected" density="compact">
          Все категории
          <template v-slot:append>
            <v-list-item-action :end="true">
              <v-checkbox-btn
                :indeterminate="!isAllCategoriesSelected && !!selectedCategories.length"
                v-model="isAllCategoriesSelected"
              ></v-checkbox-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
      </template>
      <template v-slot:item="{ props, item }">
        <v-list-item density="compact" v-if="item.raw.isGroupName">
          <span class="text-textSecondary text-body-2">{{ item.raw.title }}</span>
        </v-list-item>
        <v-list-item density="compact" v-else v-bind="props">
          <template v-slot:append="{ isActive }">
            <v-list-item-action :end="true">
              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
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
