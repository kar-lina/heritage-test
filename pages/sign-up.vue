<template>
  <v-card class="pa-10 mt-md-16">
    <v-card-title class="text-center mb-10"
      >Добро пожаловать! <br />
      Давайте познакомимся!
    </v-card-title>
    <v-form v-model="valid" @submit.prevent="signUp">
      <v-text-field
        v-model="user.name"
        type="email"
        :rules="[validationRules.required]"
        label="Имя"
        variant="underlined"
        class="mb-4"
        clearable
      ></v-text-field>
      <v-text-field
        v-model="user.email"
        type="email"
        :rules="[validationRules.required, validationRules.email]"
        label="Email"
        variant="underlined"
        class="mb-4"
        clearable
      ></v-text-field>
      <v-text-field
        v-model="user.password"
        type="password"
        :rules="[validationRules.required, validationRules.password]"
        label="Придумайте пароль"
        variant="underlined"
        class="mb-4"
        clearable
      ></v-text-field>
      <v-text-field
        v-model="user.сonfirmPassword"
        type="password"
        :rules="[validationRules.required, (v) => v === user.password || 'Пароли не совпадают']"
        label="Подтвердите пароль"
        variant="underlined"
        class="mb-4"
        clearable
      ></v-text-field>
      <v-btn color="success" size="large" type="submit" variant="elevated" block>
        Зарегистрироваться
      </v-btn>
    </v-form>
    <p class="mt-4">Есть аккаунта? <NuxtLink class="link" to="/login">Войти</NuxtLink></p>
  </v-card>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
import { validationRules } from '~/lib'
import { signUpUser } from '~/services/auth'
import type { SignUpData } from '~/types'
const { showToast } = useToastStore()
const valid = ref<boolean | null>(false)
const user: SignUpData & { сonfirmPassword: string } = reactive({
  name: '',
  email: '',
  password: '',
  сonfirmPassword: ''
})
const signUp = async () => {
  if (!valid.value) return
  try {
    await signUpUser(user)
    showToast('Регистрация прошла успешно! Введите авторизационные данные.')
    await navigateTo({ path: '/login' })
  } catch (error) {
    showToast('Ошибка. Повторите попытку.', 'error')
  }
}
</script>
