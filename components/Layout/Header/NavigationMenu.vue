<template>
  <nav class="nav d-flex align-center ga-2 overflow-x-auto">
    <NuxtLink class="nav__item flex-shrink-0 bg-grayBg py-2 px-3" to="/">Товары и услуги</NuxtLink>
    <NuxtLink class="nav__item flex-shrink-0 bg-grayBg py-2 px-3" to="/agents">Агенты <span class="text-textSecondary">19</span></NuxtLink>
    <NuxtLink class="nav__item flex-shrink-0 bg-grayBg py-2 px-3" to="/about">О компании</NuxtLink>
  </nav>
</template>
<style lang="scss" scoped>
.nav {
  padding-left: 16px;
  @media (min-width: 368px) {
    justify-content: center;
  }
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
