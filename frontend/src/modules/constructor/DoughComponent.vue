<script setup>
import { getPublicImage } from "@/common/helpers";

defineProps({
  doughItems: {
    type: Array,
    required: true,
    default: () => [],
  },
  modelValue: {
    type: Number,
    required: true,
  },
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <label
          v-for="dough in doughItems"
          :key="dough.id"
          :class="`dough__input dough__input--${dough.value}`"
        >
          <input
            type="radio"
            name="dough"
            class="visually-hidden"
            :value="dough.id"
            :checked="dough.id === modelValue"
            @change="$emit('update:modelValue', dough.id)"
          />
          <img :src="getPublicImage(dough.image)" :alt="dough.name" />
          <b>{{ dough.name }}</b>
          <span>{{ dough.description }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/ds-system/ds.scss";
@import "@/assets/scss/mixins/mixins.scss";

.dough__input {
  position: relative;

  margin-right: 8%;
  margin-bottom: 20px;
  padding-left: 50px;

  cursor: pointer;

  img {
    @include p_center-v;

    width: 36px;
    height: 36px;

    transition: 0.3s;

    border-radius: 50%;
  }

  b {
    @include r-s16-h19;
  }

  span {
    @include l-s11-h13;

    display: block;
  }

  &:hover {
    img {
      box-shadow: $shadow-regular;
    }
  }

  input {
    &:checked + img {
      box-shadow: $shadow-large;
    }
  }
}
</style>
