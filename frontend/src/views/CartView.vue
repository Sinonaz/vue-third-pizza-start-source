<script setup>
import AppCounter from "@/common/components/app-counter/AppCounter.vue";
import { ref } from "vue";
import { getImage } from "@/common/helpers";

const value = ref(0);
</script>

<template>
  <main class="content cart">
    <div class="container">
      <div class="cart__title">
        <h1 class="title title--big">Корзина</h1>
      </div>

      <!-- <div class="sheet cart__empty">
        <p>В корзине нет ни одного товара</p>
      </div> -->

      <ul class="cart-list sheet">
        <li class="cart-list__item">
          <div class="product cart-list__product">
            <img
              :src="getImage('product.svg')"
              class="product__img"
              width="56"
              height="56"
              alt="Капричоза"
            />
            <div class="product__text">
              <h2>Капричоза</h2>
              <ul>
                <li>30 см, на тонком тесте</li>
                <li>Соус: томатный</li>
                <li>Начинка: грибы, лук, ветчина, пармезан, ананас</li>
              </ul>
            </div>
          </div>

          <AppCounter
            :value="value"
            :decrement-disabled="value === 0"
            is-orange
            @update:value="value = $event"
          />

          <div class="cart-list__price">
            <b>782 ₽</b>
          </div>

          <div class="cart-list__button">
            <button type="button" class="cart-list__edit">Изменить</button>
          </div>
        </li>
        <li class="cart-list__item">
          <div class="product cart-list__product">
            <img
              :src="getImage('product.svg')"
              class="product__img"
              width="56"
              height="56"
              alt="Любимая пицца"
            />
            <div class="product__text">
              <h2>Любимая пицца</h2>
              <ul>
                <li>30 см, на тонком тесте</li>
                <li>Соус: томатный</li>
                <li>
                  Начинка: грибы, лук, ветчина, пармезан, ананас, бекон, блю чиз
                </li>
              </ul>
            </div>
          </div>

          <AppCounter
            :value="value"
            :decrement-disabled="value === 0"
            is-orange
            @update:value="value = $event"
          />

          <div class="cart-list__price">
            <b>782 ₽</b>
          </div>

          <div class="cart-list__button">
            <button type="button" class="cart-list__edit">Изменить</button>
          </div>
        </li>
      </ul>

      <div class="cart__additional">
        <ul class="additional-list">
          <li class="additional-list__item sheet">
            <p class="additional-list__description">
              <img
                :src="getImage('cola.svg')"
                width="39"
                height="60"
                alt="Coca-Cola 0,5 литра"
              />
              <span>Coca-Cola 0,5 литра</span>
            </p>

            <div class="additional-list__wrapper">
              <AppCounter
                class="additional-list__counter"
                :value="value"
                :decrement-disabled="value === 0"
                is-orange
                @update:value="value = $event"
              />

              <div class="additional-list__price">
                <b>× 56 ₽</b>
              </div>
            </div>
          </li>
          <li class="additional-list__item sheet">
            <p class="additional-list__description">
              <img
                :src="getImage('sauce.svg')"
                width="39"
                height="60"
                alt="Острый соус"
              />
              <span>Острый соус</span>
            </p>

            <div class="additional-list__wrapper">
              <AppCounter
                class="additional-list__counter"
                :value="value"
                :decrement-disabled="value === 0"
                is-orange
                @update:value="value = $event"
              />

              <div class="additional-list__price">
                <b>× 30 ₽</b>
              </div>
            </div>
          </li>
          <li class="additional-list__item sheet">
            <p class="additional-list__description">
              <img
                :src="getImage('potato.svg')"
                width="39"
                height="60"
                alt="Картошка из печи"
              />
              <span>Картошка из печи</span>
            </p>

            <div class="additional-list__wrapper">
              <AppCounter
                class="additional-list__counter"
                :value="value"
                :decrement-disabled="value === 0"
                is-orange
                @update:value="value = $event"
              />

              <div class="additional-list__price">
                <b>× 56 ₽</b>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="cart__form">
        <div class="cart-form">
          <label class="cart-form__select">
            <span class="cart-form__label">Получение заказа:</span>

            <select name="test" class="select">
              <option value="1">Заберу сам</option>
              <option value="2">Новый адрес</option>
              <option value="3">Дом</option>
            </select>
          </label>

          <label class="input input--big-label">
            <span>Контактный телефон:</span>
            <input type="text" name="tel" placeholder="+7 999-999-99-99" />
          </label>

          <div class="cart-form__address">
            <span class="cart-form__label">Новый адрес:</span>

            <div class="cart-form__input">
              <label class="input">
                <span>Улица*</span>
                <input type="text" name="street" />
              </label>
            </div>

            <div class="cart-form__input cart-form__input--small">
              <label class="input">
                <span>Дом*</span>
                <input type="text" name="house" />
              </label>
            </div>

            <div class="cart-form__input cart-form__input--small">
              <label class="input">
                <span>Квартира</span>
                <input type="text" name="apartment" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import "@/assets/scss/ds-system/ds.scss";
@import "@/assets/scss/mixins/mixins.scss";

.cart__title {
  margin-bottom: 15px;
}

.cart__additional {
  margin-top: 15px;
  margin-bottom: 25px;
}

.cart__empty {
  padding: 20px 30px;
}

.cart-form {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.cart-form__select {
  display: flex;
  align-items: center;

  margin-right: auto;

  span {
    margin-right: 16px;
  }
}

.cart-form__label {
  @include b-s16-h19;

  white-space: nowrap;
}

.cart-form__address {
  display: flex;
  align-items: center;

  width: 100%;
  margin-top: 20px;
}

.cart-form__input {
  flex-grow: 1;

  margin-bottom: 20px;
  margin-left: 16px;

  &--small {
    max-width: 120px;
  }
}

.cart-list {
  @include clear-list;

  padding: 15px 0;
}

.cart-list__item {
  display: flex;
  align-items: flex-start;

  margin-bottom: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  padding-left: 15px;

  border-bottom: 1px solid rgba($green-500, 0.1);

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;

    border-bottom: none;
  }
}

.cart-list__product {
  flex-grow: 1;

  margin-right: auto;
}

.cart-list__counter {
  width: 54px;
  margin-right: auto;
  margin-left: 20px;
}

.cart-list__price {
  min-width: 100px;
  margin-right: 36px;
  margin-left: 10px;

  text-align: right;

  b {
    @include b-s16-h19;
  }
}

.cart-list__edit {
  @include l-s11-h13;

  cursor: pointer;
  transition: 0.3s;

  border: none;
  outline: none;
  background-color: transparent;

  &:hover {
    color: $green-500;
  }

  &:active {
    color: $green-600;
  }

  &:focus {
    color: $green-400;
  }
}

.product {
  display: flex;
  align-items: center;
}

.product__text {
  margin-left: 15px;

  h2 {
    @include b-s18-h21;

    margin-top: 0;
    margin-bottom: 10px;
  }

  ul {
    @include clear-list;
    @include l-s11-h13;
  }
}

.select {
  @include r-s16-h19;

  display: block;

  margin: 0;
  padding: 8px 30px 8px 16px;

  cursor: pointer;
  transition: 0.3s;

  color: $black;
  border: 1px solid $purple-400;
  border-radius: 8px;
  outline: none;
  background-color: $silver-100;
  background-image: url("@/assets/img/select.svg");
  background-repeat: no-repeat;
  background-position: right 8px center;

  font-family: inherit;

  appearance: none;

  &:hover {
    border-color: $orange-100;
  }

  &:focus {
    border-color: $green-500;
  }
}

.additional-list {
  @include clear-list;

  display: flex;
  flex-wrap: wrap;
}

.additional-list__description {
  display: flex;
  align-items: flex-start;

  margin: 0;
  margin-bottom: 8px;
}

.additional-list__item {
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 200px;
  margin-right: 15px;
  margin-bottom: 15px;
  padding-top: 15px;
  padding-bottom: 15px;

  img {
    margin-right: 10px;
    margin-left: 15px;
  }

  span {
    @include b-s14-h16;

    display: inline;

    width: 100px;
    margin-right: 15px;
  }
}

.additional-list__wrapper {
  display: flex;
  align-items: center;

  box-sizing: border-box;
  width: 100%;
  margin-top: auto;
  padding-top: 18px;
  padding-right: 15px;
  padding-left: 15px;

  border-top: 1px solid rgba($green-500, 0.1);
}

.additional-list__counter {
  width: 54px;
  margin-right: auto;
}

.additional-list__price {
  @include b-s16-h19;
}

.counter {
  display: flex;

  justify-content: space-between;
  align-items: center;
}

.counter__button {
  $el: &;
  $size_icon: 50%;

  position: relative;

  display: block;

  width: 16px;
  height: 16px;
  margin: 0;
  padding: 0;

  cursor: pointer;
  transition: 0.3s;

  border: none;
  border-radius: 50%;
  outline: none;

  &--minus {
    background-color: $purple-100;

    &::before {
      @include p_center-all;

      width: $size_icon;
      height: 2px;

      content: "";

      border-radius: 2px;
      background-color: $black;
    }

    &:hover:not(:active):not(:disabled) {
      background-color: $purple-200;
    }

    &:active:not(:disabled) {
      background-color: $purple-300;
    }

    &:focus:not(:disabled) {
      box-shadow: $shadow-regular;
    }

    &:disabled {
      cursor: default;

      &::before {
        opacity: 0.1;
      }
    }
  }

  &--plus {
    background-color: $green-500;

    &::before {
      @include p_center-all;

      width: $size_icon;
      height: 2px;

      content: "";

      border-radius: 2px;
      background-color: $white;
    }

    &::after {
      @include p_center-all;

      width: $size_icon;
      height: 2px;

      content: "";
      transform: translate(-50%, -50%) rotate(90deg);

      border-radius: 2px;
      background-color: $white;
    }

    &:hover:not(:active):not(:disabled) {
      background-color: $green-400;
    }

    &:active:not(:disabled) {
      background-color: $green-600;
    }

    &:focus:not(:disabled) {
      box-shadow: $shadow-regular;
    }

    &:disabled {
      cursor: default;

      opacity: 0.3;
    }
  }

  &--orange {
    background-color: $orange-200;

    &:hover:not(:active):not(:disabled) {
      background-color: $orange-100;
    }

    &:active:not(:disabled) {
      background-color: $orange-300;
    }
  }
}

.counter__input {
  @include r-s14-h16;

  box-sizing: border-box;
  width: 22px;
  margin: 0;
  padding: 0 3px;

  text-align: center;

  color: $black;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: transparent;

  &:focus {
    box-shadow: inset $shadow-regular;
  }
}
</style>
