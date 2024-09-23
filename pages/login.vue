<template>
  <v-card class="pa-10 mt-md-16">
    <v-card-title class="text-center mb-10">Добро пожаловать! </v-card-title>
    <v-form v-model="valid" @submit.prevent="login">
      <v-text-field
        v-model="user.email"
        type="email"
        :rules="[rulesFunctions.required,rulesFunctions.email]"
        label="Email"
        variant="underlined"
        class="mb-4"
      ></v-text-field>
      <v-text-field
        v-model="user.password"
        type="password"
        variant="underlined"
        :rules="[rulesFunctions.required,rulesFunctions.password]"
        label="Пароль"
        class="mb-4"
      ></v-text-field>
       <v-btn color="success" size="large" type="submit" variant="elevated" block> Войти </v-btn>
    </v-form>
    <p class="mt-4">Нет аккаунта? <NuxtLink class="link" to="/sign-up">Зарегистрироваться</NuxtLink></p>
  </v-card>
</template>
<script setup lang="ts">
import { setUserCookie, rulesFunctions } from '~/lib'
import type { LoginData } from '~/types'
const { refreshToken, accessToken, authenticated } = storeToRefs(useAuthStore())
const { authenticateUser } = useAuthStore()
const { alert } = useToastStore()
definePageMeta({
  layout: 'auth'
})
const valid = ref<boolean | null>(false)
const user: LoginData = reactive({
  email: '',
  password: ''
})
const login = async () => {
  if (!valid.value) return
  await authenticateUser(user)
  if (authenticated.value) {
    navigateTo('/')
    alert('Вы вошли!')
    setUserCookie({ userToken: accessToken.value, userRefreshToken: refreshToken.value })
  } else {
    alert('Неверный логин или пароль')
  }
}
</script>
