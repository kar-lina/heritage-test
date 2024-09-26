<template>
  <v-app>
    <LayoutAppHeader />
    <UIToast />
    <div class="h-100">
      <NuxtPage />
    </div>
    <LayoutAppFooter />
  </v-app>
</template>
<script setup lang="ts">
useAuth()
</script>
