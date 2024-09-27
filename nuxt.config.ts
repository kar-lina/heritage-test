// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3000/api/'
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ['~/assets/main.scss'],
  modules: ['@nuxt/eslint', '@pinia/nuxt', 'vuetify-nuxt-module'],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**']
  },
  vuetify: {
    moduleOptions: {
    },
    vuetifyOptions: {
      icons: {
        defaultSet: 'mdi-svg'
      },
      theme: {
        themes: {
          light: {
            dark: false,
            colors: {
              grayBg: '#E8E8E8',
              primary: '#337566',
              primaryHover: '#337588',
              textBlack: '#0F0F0F',
              lightGray: '#F5F5F5',
              border: '#DBDBDB',
              textSecondary: '#6B6B6B',
              error: '#BD3223',
              bgYellow: '#FFF7EB'
            }
          }
        }
      }
    }
  }
})
