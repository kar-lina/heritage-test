<template>
  <div>
    <v-chip
      class="px-4 py-3 h-auto text-subtitle-1 d-flex align-center gap-1 font-weight-medium bg-grayBg"
    >
      <v-icon class="mr-1" size="x-large" color="black" :icon="mdiWidgetsOutline" />
      Все категории
    </v-chip>
  </div>
</template>
<script setup lang="ts">
import { mdiWidgetsOutline } from '@mdi/js'
</script>
