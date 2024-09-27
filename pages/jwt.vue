<template>
  <v-sheet max-width="624" class="pt-6 pb-12 pb-md-16 px-0 px-md-8 mx-auto text-center">
    <h1 class="mb-6">
      Проверка JWT токена. По клику на кнопку отправлятся запрос, который вернет 401. После чего
      будет отправлен запрос на обновление токенов.
    </h1>
    <v-btn @click="sendRequest">Проверить JWT</v-btn>
  </v-sheet>
</template>
<script setup lang="ts">
const { showToast } = useToastStore()
const sendRequest = async () => {
  const data = await useNuxtApp().$api<{ msg: string }>('auth/check-jwt')
  if (data) showToast(data.msg)
}
</script>
