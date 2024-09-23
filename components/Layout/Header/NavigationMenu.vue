<template>
  <nav class="nav mt-md-8 d-flex align-center justify-center ga-2 overflow-x-auto">
    <NuxtLink class="nav__item flex-shrink-0 bg-grayBg py-2 px-4" to="/">Товары и услуги</NuxtLink>
    <NuxtLink class="nav__item flex-shrink-0 bg-grayBg py-2 px-4" to="/agents">Агенты</NuxtLink>
    <NuxtLink class="nav__item flex-shrink-0 bg-grayBg py-2 px-4"  to="/about">О компании</NuxtLink>
  </nav>
</template>
<style lang="scss" scoped>
.nav {
  &__item {
    text-decoration: none;
    border-radius: 12px;
    line-height: 24px;
  }
  &__item.router-link-exact-active {
    border: 1px solid #0e0e0e;
  }
}
</style>
