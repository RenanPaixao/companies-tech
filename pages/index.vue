<template>
  <v-container class="px-12 text-justify container text-white">
    <v-avatar size="120" color="white" class="pa-3 logo">
      <v-img src="@/assets/icons/logo.webp" />
    </v-avatar>
    <p class="content mt-8">
      Bem-vindo ao <span>Tecnlogias nas empresas</span>! Aqui, você tem acesso a
      um banco de stack usadas nas empresas brasileiras. Se você está buscando
      insights sobre as tecnologias que impulsionam as corporações, você está no
      lugar certo.
    </p>
    <p class="mt-4">
      Oferecemos uma plataforma para explorar e compartilhar as stacks
      tecnológicas mais relevantes, desde linguagens de programação até
      frameworks e plataformas de nuvem que são usadas em alguma empresa
      específica atualmente.
    </p>

    <v-btn class="mt-8"> Buscar Empresa </v-btn>
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
  font-size: 0.9rem;
}

span {
  color: var(--accent);
  font-weight: bold;
}

.container {
  display: flex;
  flex-direction: column;

  button {
    margin: 0 auto;
    width: 75%;
  }

  @media (min-width: 600px) {
    max-width: 80%;
  }

  @media (min-width: 800px) {
    max-width: 75%;
    font-size: 1.3rem;

    button {
      width: 50%;
      height: 2.5rem;
      font-size: 1rem;
    }
  }

  @media (min-width: 1200px) {
    width: 50%;

    button {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 1440px) {
    width: 50%;
  }
}
</style>
