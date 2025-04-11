import { defineStore } from "pinia";
import doughs from "@/mocks/dough.json";
import ingredients from "@/mocks/ingredients.json";
import sauces from "@/mocks/sauces.json";
import sizes from "@/mocks/sizes.json";
import misc from "@/mocks/misc.json";
import {
  normalizeDough,
  normalizeIngredients,
  normalizeSauces,
  normalizeSize,
} from "@/common/helpers/normalize";

export const useUserDataStore = defineStore("userData", {
  state: () => ({
    doughs: doughs.map(normalizeDough),
    ingredients: ingredients.map(normalizeIngredients),
    sauces: sauces.map(normalizeSauces),
    sizes: sizes.map(normalizeSize),
    misc: misc,
  }),
  getters: {},
  actions: {},
});
