<template>
  <div class="text-3xl text-red-700">Home</div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>