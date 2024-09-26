<template>
  <v-app>
    <!-- <Toast /> -->
    <LayoutAppHeader />
    <div class="h-100">
      <NuxtPage />
    </div>
    <LayoutAppFooter />
  </v-app>
</template>
<script setup lang="ts">
useAuth()
</script>
