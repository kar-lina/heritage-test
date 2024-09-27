<template>
  <v-toolbar class="bg-bgYellow px-2 pl-md-10 pr-md-8" :height="$vuetify.display.mdAndUp ? 64 : 56">
    <LayoutHeaderMobileMenu class="d-md-none" />
    <div class="d-flex align-center flex-grow-1">
      <NuxtLink to="/" class="logo">Annoncé</NuxtLink>
      <LayoutHeaderCategoriesMenu class="d-none d-md-flex" />
    </div>
    <v-spacer />
    <LayoutHeaderLocation class="d-none d-md-block" />
    <LayoutHeaderCart class="d-md-none flex-shrink-0 mr-2" />
  </v-toolbar>
</template>
<style scoped lang="scss">
.logo {
  font-family: 'NotoSerif';
  color: rgb(0, 0, 0);
  font-size: 32px;
  font-weight: 600;
  line-height: 0.875;
  margin-left: 100px;
  letter-spacing: 0;
  font-weight: 600;
  @media (min-width: 960px) {
    margin-right: 37px;
    margin-left: 0;
  }
}
</style>
