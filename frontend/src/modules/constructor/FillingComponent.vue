<script setup>
import { getPublicImage } from "@/common/helpers";
import { toRef } from "vue";
import { MAX_INGREDIENT_COUNT } from "@/common/constants";
import AppDrag from "@/common/components/AppDrag.vue";
import AppCounter from "@/common/components/app-counter/AppCounter.vue";

const props = defineProps({
  ingredientItems: {
    type: Array,
    required: true,
    default: () => [],
  },
  values: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["update"]);
const values = toRef(props, "values");

const setValue = (ingredient, count) => {
  emit("update", ingredient, Number(count));
};

const changeValue = (ingredient, count) => {
  return setValue(ingredient, Math.min(MAX_INGREDIENT_COUNT, Number(count)));
};
</script>

<template>
  <div class="ingredients__filling">
    <p>Начинка:</p>

    <ul class="ingredients__list">
      <li
        v-for="ingredient in ingredientItems"
        :key="ingredient.id"
        class="ingredients__item"
      >
        <app-drag
          :data-transfer="ingredient"
          :draggable="values[ingredient.id] < MAX_INGREDIENT_COUNT"
        >
          <span :class="`filling filling--${ingredient.value}`">
            <img
              :src="getPublicImage(ingredient.image)"
              :alt="ingredient.name"
            />
            {{ ingredient.name }}
          </span>
        </app-drag>

        <app-counter
          class="ingredients__counter"
          :value="values[ingredient.id]"
          :decrement-disabled="values[ingredient.id] === 0"
          :increment-disabled="values[ingredient.id] === MAX_INGREDIENT_COUNT"
          @update:value="changeValue(ingredient.id, $event)"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/ds-system/ds.scss";
@import "@/assets/scss/mixins/mixins.scss";

.ingredients__filling {
  width: 100%;

  p {
    @include r-s16-h19;

    margin-top: 0;
    margin-bottom: 16px;
  }
}

.ingredients__list {
  @include clear-list;

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

.ingredients__item {
  width: 100px;
  min-height: 40px;
  margin-right: 17px;
  margin-bottom: 35px;
}

.ingredients__counter {
  width: 54px;
  margin-top: 10px;
  margin-left: 36px;
}

.filling {
  @include r-s14-h16;

  position: relative;

  display: block;

  padding-left: 36px;

  img {
    @include p_center-v;

    display: block;

    width: 32px;
    height: 32px;

    box-sizing: border-box;
    padding: 4px;

    border-radius: 50%;
  }
}
</style>
