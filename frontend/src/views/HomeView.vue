<script setup>
import doughs from "@/mocks/dough.json";
import ingredients from "@/mocks/ingredients.json";
import sauces from "@/mocks/sauces.json";
import sizes from "@/mocks/sizes.json";
import {
  normalizeDough,
  normalizeIngredients,
  normalizeSauces,
  normalizeSize,
} from "@/common/helpers/normalize";
import DoughComponent from "@/modules/constructor/DoughComponent.vue";
import DiameterComponent from "@/modules/constructor/DiameterComponent.vue";
import SauceComponent from "@/modules/constructor/SauceComponent.vue";
import FillingComponent from "@/modules/constructor/FillingComponent.vue";
import PizzaComponent from "@/modules/constructor/PizzaComponent.vue";
import { reactive, computed } from "vue";

const doughItems = doughs.map(normalizeDough);
const ingredientItems = ingredients.map(normalizeIngredients);
const sauceItems = sauces.map(normalizeSauces);
const sizeItems = sizes.map(normalizeSize);

const pizza = reactive({
  name: "",
  dough: doughItems[0].value,
  size: sizeItems[0].value,
  sauce: sauceItems[0].value,
  ingredients: ingredientItems.reduce((acc, item) => {
    acc[item.value] = 0;
    return acc;
  }, {}),
});

const price = computed(() => {
  const { dough, size, sauce, ingredients } = pizza;

  const sizeMultiplier =
    sizeItems.find((item) => item.value === size)?.multiplier ?? 1;

  const doughPrice =
    doughItems.find((item) => item.value === dough)?.price ?? 0;

  const saucePrice =
    sauceItems.find((item) => item.value === sauce)?.price ?? 0;

  /*
   * Здесь мы при помощи метода map превращаем массив ингредиентов
   * в массив значений, соответствующих итоговой стоимости каждого из них - просто умножив известную цену на количество.
   * После чего методом reduce вычисляем сумму всех элементов массива, что даст нам общую стоимость всех ингредиентов.
   */
  const ingredientsPrice = ingredientItems
    .map((item) => ingredients[item.value] * item.price)
    .reduce((acc, item) => acc + item, 0);

  return (doughPrice + saucePrice + ingredientsPrice) * sizeMultiplier;
});

const disableSubmit = computed(() => {
  return pizza.name.length === 0 || price.value === 0;
});

const addIngredient = (ingredient) => {
  pizza.ingredients[ingredient]++;
};

const updateIngredientAmount = (ingredient, count) => {
  pizza.ingredients[ingredient] = count;
};
</script>

<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <dough-component v-model="pizza.dough" :dough-items="doughItems" />

        <diameter-component v-model="pizza.size" :size-items="sizeItems" />

        <div class="content__ingredients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">
              Выберите ингредиенты
            </h2>

            <div class="sheet__content ingredients">
              <sauce-component
                v-model="pizza.sauce"
                :sauce-items="sauceItems"
              />

              <filling-component
                :ingredient-items="ingredientItems"
                :values="pizza.ingredients"
                @update="updateIngredientAmount"
              />
            </div>
          </div>
        </div>

        <div class="content__pizza">
          <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input
              v-model="pizza.name"
              type="text"
              name="pizza_name"
              placeholder="Введите название пиццы"
            />
          </label>

          <pizza-component
            :dough="pizza.dough"
            :sauce="pizza.sauce"
            :ingredients="pizza.ingredients"
            @drop="addIngredient"
          />

          <div class="content__result">
            <p>Итого: {{ price }} ₽</p>
            <button type="button" class="button" :disabled="disableSubmit">
              Готовьте!
            </button>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>

<style lang="scss">
@import "@/assets/scss/ds-system/ds.scss";
@import "@/assets/scss/mixins/mixins.scss";

p {
  @include b-s24-h28;

  margin: 0;
}
</style>
