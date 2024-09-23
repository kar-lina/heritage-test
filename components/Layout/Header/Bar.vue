<template>
  <v-toolbar class="bg-bgYellow px-10 py-1">
    <div class="d-flex align-center">
      <LayoutHeaderMobileMenu class="d-md-none" />
      <h1 class="logo font-bold mr-[37px]">Annoncé</h1>
      <LayoutHeaderCategoriesMenu class="d-none d-md-flex" />
    </div>
    <v-spacer></v-spacer>
    <LayoutHeaderLocation class="d-none d-md-block" />
    <v-badge class="d-md-none flex-shrink-0 mr-2" content="1" color="primary" size="x-small">
      <v-icon :icon="mdiPurseOutline" size="large"></v-icon>
    </v-badge>
  </v-toolbar>
</template>
<script setup lang="ts">
import { mdiMapMarker, mdiPurseOutline, mdiMenu } from '@mdi/js'
// const drawer = ref(false)
</script>
<style scoped lang="css">
.logo {
  font-family: 'NotoSerif';
  color: rgb(0, 0, 0);
  font-family: Noto Serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 28px;
  margin-right: 37px;
}
</style>
