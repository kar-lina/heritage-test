<template>
  <div>
    <v-icon :icon="mdiMenu" size="small" @click="isOpen = !isOpen"></v-icon>
    <div
      :class="{ 'menu': true, 'open': isOpen }"
    >
      <div class="d-flex">
        <v-spacer />
        <button>
          <v-icon :icon="mdiClose" size="large" @click="isOpen = false"></v-icon>
        </button>
      </div>

      <LayoutHeaderCompanyInfo />
    </div>
  </div>
</template>
<script setup lang="ts">
import { mdiClose, mdiMenu } from '@mdi/js'
const isOpen = ref(false)
</script>
<style scoped lang="css">
.menu {
  width: 100%;
  left: 0px;
  z-index: 1004;
  transform: translateX(-100%);
  transition: transform 0.3s ease 0s;
  position: fixed;
  height: calc(100% + 0px);
  top: 0px;
  bottom: 0px;
  background-color: #fff;
}
.menu.open {
  transform: translateX(0) ;
}
</style>
