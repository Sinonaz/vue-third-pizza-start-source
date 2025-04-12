import { useUserDataStore } from "@/stores/userData";

/* Функция вернёт объект { ингредиент: количество } */
export const ingredientsQuantity = (pizza) => {
  const data = useUserDataStore();
  return data.ingredients.reduce((acc, val) => {
    acc[val.id] =
      pizza.ingredients.find((item) => item.ingredientId === val.id)
        ?.quantity ?? 0;
    return acc;
  }, {});
};
