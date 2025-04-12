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
import { reactive, computed, onMounted } from "vue";
import { useCartStore, usePizzaStore, useDataStore } from "@/stores";
import { useRouter } from "vue-router";

const doughItems = doughs.map(normalizeDough);
const ingredientItems = ingredients.map(normalizeIngredients);
const sauceItems = sauces.map(normalizeSauces);
const sizeItems = sizes.map(normalizeSize);

const router = useRouter();

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

const dataStore = useDataStore();
const pizzaStore = usePizzaStore();
const cartStore = useCartStore();

const name = computed({
  get() {
    return pizzaStore.name;
  },
  set(value) {
    pizzaStore.setName(value);
  },
});

const doughId = computed({
  get() {
    return pizzaStore.doughId;
  },
  set(value) {
    pizzaStore.setDough(value);
  },
});

const sizeId = computed({
  get() {
    return pizzaStore.sizeId;
  },
  set(value) {
    pizzaStore.setSize(value);
  },
});

const sauceId = computed({
  get() {
    return pizzaStore.sauceId;
  },
  set(value) {
    pizzaStore.setSauce(value);
  },
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
  return name.value.length === 0 || pizzaStore.price === 0;
});

const addToCart = async () => {
  cartStore.savePizza(pizzaStore.$state);
  await router.push({ name: "cart" });
  resetPizza();
};

const resetPizza = () => {
  pizzaStore.setName("");
  if (dataStore.isDataLoaded) {
    pizzaStore.setDough(dataStore.doughs[0].id);
    pizzaStore.setSize(dataStore.sizes[0].id);
    pizzaStore.setSauce(dataStore.sauces[0].id);
  }
  pizzaStore.setIngredients([]);
  pizzaStore.setIndex(null);
};

onMounted(() => {
  if (pizzaStore.index === null) {
    resetPizza();
  }
});
</script>

<template>
  <main v-if="dataStore.isDataLoaded" class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <dough-component v-model="doughId" :dough-items="dataStore.doughs" />

        <diameter-component v-model="sizeId" :size-items="dataStore.sizes" />

        <div class="content__ingredients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">
              Выберите ингредиенты
            </h2>

            <div class="sheet__content ingredients">
              <sauce-component
                v-model="sauceId"
                :sauce-items="dataStore.sauces"
              />

              <filling-component
                :ingredient-items="dataStore.ingredients"
                :values="pizzaStore.ingredientQuantities"
                @update="pizzaStore.setIngredientQuantity"
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
            :dough="pizzaStore.dough.value"
            :sauce="pizzaStore.sauce.value"
            :ingredients="pizzaStore.ingredientsExtended"
            @drop="pizzaStore.incrementIngredientQuantity"
          />

          <div class="content__result">
            <p>Итого: {{ price }} ₽</p>
            <button
              type="button"
              class="button"
              :disabled="disableSubmit"
              @click="addToCart"
            >
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
