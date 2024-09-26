<template>
  <v-card class="pa-10 mt-md-16">
    <v-card-title class="text-center mb-10">Добро пожаловать! </v-card-title>
    <v-form v-model="valid" @submit.prevent="login">
      <v-text-field
        v-model="user.email"
        type="email"
        :rules="[validationRules.required, validationRules.email]"
        label="Email"
        variant="underlined"
        class="mb-4"
      ></v-text-field>
      <v-text-field
        v-model="user.password"
        type="password"
        variant="underlined"
        :rules="[validationRules.required, validationRules.password]"
        label="Пароль"
        class="mb-4"
        clearable
      ></v-text-field>
      <v-btn color="success" size="large" type="submit" variant="elevated" block> Войти </v-btn>
    </v-form>
    <p class="mt-4">
      Нет аккаунта? <NuxtLink class="link" to="/sign-up">Зарегистрироваться</NuxtLink>
    </p>
  </v-card>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
import { setUserCookie, validationRules } from '~/lib'
import type { LoginData } from '~/types'
const { refreshToken, accessToken, authenticated } = storeToRefs(useAuthStore())
const { authenticateUser } = useAuthStore()
const { showToast } = useToastStore()

const valid = ref<boolean | null>(false)
const user: LoginData = reactive({
  email: '',
  password: ''
})
const login = async () => {
  if (!valid.value) return
  await authenticateUser(user)
  if (authenticated.value) {
    showToast('Добро пожаловать!', 'success')
    setUserCookie({ userToken: accessToken.value, userRefreshToken: refreshToken.value })
    await navigateTo('/')
  } else {
    showToast('Не правильный логин и пароль', 'error')
  }
}
</script>
