<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const routeName = computed(() => route.name);
</script>

<template>
  <main class="layout">
    <div class="layout__sidebar sidebar">
      <router-link :to="{ name: 'home' }" class="logo layout__logo">
        <img
          src="img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </router-link>

      <router-link
        :to="{ name: 'orders' }"
        class="layout__link"
        :class="{ 'layout__link--active': routeName === 'orders' }"
        >История заказов</router-link
      >
      <router-link
        :to="{ name: 'userData' }"
        class="layout__link"
        :class="{ 'layout__link--active': routeName === 'userData' }"
        >Мои данные</router-link
      >
    </div>

    <router-view />
  </main>
</template>

<style scoped lang="scss"></style>
