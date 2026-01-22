// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Tailwind CSS modülü
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],

  // Tailwind CSS yapılandırması
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
  },

  // TypeScript yapılandırması
  typescript: {
    strict: true,
  },

  // Components yapılandırması - klasör prefix'lerini kaldır
  components: [
    {
      path: '~/components',
      pathPrefix: false, // atoms/BaseButton -> BaseButton olarak kullan
    },
  ],

  // App yapılandırması
  app: {
    head: {
      title: 'eBay Clone',
      meta: [
        { name: 'description', content: 'eBay Clone - Buy and Sell' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/faviconnn.png' },
      ],
    },
  },

  // Alias tanımları (@ yerine ~ kullanılabilir)
  alias: {
    '@': './app',
  },
})
