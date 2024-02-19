<template>
  <v-container class="px-12 text-justify container text-white">
    <v-avatar size="120" color="white" class="pa-3 logo">
      <v-img src="@/assets/icons/logo.webp" />
    </v-avatar>
    <p class="content mt-8">
      Bem-vindo ao Tecnlogias nas empresas! Aqui, você tem acesso a um banco de
      stack usadas nas empresas brasileiras. Se você está buscando insights
      sobre as tecnologias que impulsionam as corporações, você está no lugar
      certo.
    </p>
    <p class="mt-4">
      Oferecemos uma plataforma para explorar e compartilhar as stacks
      tecnológicas mais relevantes, desde linguagens de programação até
      frameworks e plataformas de nuvem que são usadas em alguma empresa
      específica atualmente.
    </p>

    <v-btn class="mt-8" variant="elevated"> Buscar empresa </v-btn>
  </v-container>
</template>

<script setup lang="ts"></script>

<style scoped>
.logo {
  align-self: center;
}
button {
  background-color: var(--secondary);
  color: white;
}
.container {
  display: flex;
  flex-direction: column;
}
</style>
