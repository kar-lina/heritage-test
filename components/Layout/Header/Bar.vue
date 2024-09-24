<template>
  <v-toolbar class="bar bg-bgYellow">
    <LayoutHeaderMobileMenu class="d-md-none" />
    <div class="d-flex align-center flex-grow-1">
      <h1 class="logo font-bold mr-[37px]">Annoncé</h1>
      <LayoutHeaderCategoriesMenu class="d-none d-md-flex" />
    </div>
    <v-spacer></v-spacer>
    <LayoutHeaderLocation class="d-none d-md-block" />
    <LayoutHeaderCart class="d-md-none flex-shrink-0 mr-2" />
  </v-toolbar>
</template>

<style scoped lang="css">
.bar {
  padding: 4px 19px;
  @media (min-width: 768px){
    padding: 4px 40px;
      
  }
}
.logo {
  font-family: 'NotoSerif';
  color: rgb(0, 0, 0);
  font-family: Noto Serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 28px;
  margin-right: 37px;
}
</style>
