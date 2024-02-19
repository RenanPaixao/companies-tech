<script setup lang="ts">
const route = useRoute()
const title = computed(() => {
  return route.meta?.title || route.matched[0].meta?.title || ''
})

useHead({
  title,
  titleTemplate: (t) =>
    t ? `${t} | Tecnologias nas empresas` : 'Tecnologias nas empresas',
  htmlAttrs: { lang: 'pt' },
  link: [{ rel: 'icon', href: '/favicon.ico' }],
})

useSeoMeta({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  description: 'Banco de tecnlogias usadas nas empresas do Brasil',
})
</script>

<template>
  <v-app class="container">
    <!-- https://github.com/vuetifyjs/vuetify/issues/15202 -->
    <v-main style="--v-layout-top: 64px; --v-layout-bottom: 32px">
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<style scoped>
.container {
  background-color: var(--primary);
}
.v-main {
  padding-top: 0;
  margin-top: var(--v-layout-top);
  padding-bottom: 0;
  margin-bottom: var(--v-layout-bottom);
  height: calc(100vh - var(--v-layout-top) - var(--v-layout-bottom));
  overflow-y: auto;
  transition-property: padding;
}
</style>
