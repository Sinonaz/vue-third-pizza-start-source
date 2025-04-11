import { defineStore } from "pinia";
import addresses from "@/mocks/addresses.json";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    addresses: addresses,
  }),
  getters: {},
  actions: {},
});
