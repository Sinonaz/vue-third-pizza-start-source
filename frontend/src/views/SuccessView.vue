<template>
  <app-popup>
    <router-link :to="{ name: redirectRouteName }" class="close">
      <span class="visually-hidden">Закрыть поп-ап</span>
    </router-link>
    <app-popup-title> Спасибо за заказ </app-popup-title>
    <p>Мы начали готовить Ваш заказ, скоро привезём его вам ;)</p>
    <app-popup-button>
      <router-link :to="{ name: redirectRouteName }" class="button">
        Отлично, я жду!
      </router-link>
    </app-popup-button>
  </app-popup>
</template>

<script setup>
import AppPopup from "@/common/components/AppPopup.vue";
import AppPopupTitle from "@/common/components/AppPopupTitle.vue";
import AppPopupButton from "@/common/components/AppPopupButton.vue";
import { computed } from "vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const redirectRouteName = computed(() =>
  authStore.isAuthenticated ? "orders" : "home",
);
</script>
