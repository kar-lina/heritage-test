<template>
  <v-menu v-model="menu" location="top start" origin="top start" transition="scale-transition">
    <template v-slot:activator="{ props }">
      <v-chip v-bind="props" class="py-1 h-auto bg-grayBg" size="x-large">
        <v-icon size="large" start :icon="mdiMenu" class="mr-0" />
        <v-avatar size="40" end>
          <v-img
            :src="currentUser?.img ? currentUser.img : 'https://cdn.vuetifyjs.com/images/john.png'"
          ></v-img>
        </v-avatar>
      </v-chip>
    </template>
    <v-card width="300">
      <v-list bg-color="black">
        <v-list-item>
          <template v-slot:prepend>
            <v-avatar image="https://cdn.vuetifyjs.com/images/john.png"></v-avatar>
          </template>
          <v-list-item-title>{{ currentUser?.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ currentUser?.email }}</v-list-item-subtitle>
          <template v-slot:append>
            <v-list-item-action>
              <v-btn variant="text" icon @click="menu = false">
                <v-icon color="white" :icon="mdiCloseCircle"></v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
      </v-list>

      <v-list>
        <v-list-item :prepend-icon="mdiBriefcase" link>
          <v-list-item-subtitle>{{ currentUser?.email }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
      <v-card-actions><v-spacer /><v-btn type="text" @click="logout">Выйти</v-btn></v-card-actions>
    </v-card>
  </v-menu>
</template>
<script setup lang="ts">
import { mdiMenu, mdiCloseCircle, mdiBriefcase } from '@mdi/js'
const menu = ref(false)
const { currentUser } = storeToRefs(useAuthStore())
const { showToast } = useToastStore()

const logout = () => {
  useLogout()
  navigateTo('/login')
  showToast('До скорой встречи!')
}
</script>
