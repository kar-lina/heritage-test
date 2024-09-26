<template>
  <div>
    <div class="d-md-flex align-center">
      <span>
        <v-icon :icon="mdiMapMarker" size="x-small" />
        <span class="ml-1">Ростов-на-Дону</span>
      </span>
      <v-divider vertical class="ml-8 mr-9"></v-divider>
      <button class="mr-9 text-primary font-weight-medium">Разместить объявление</button>
      <LayoutHeaderUserMenu />
    </div>
  </div>
</template>
<script setup lang="ts">
import { mdiMapMarker } from '@mdi/js'
</script>