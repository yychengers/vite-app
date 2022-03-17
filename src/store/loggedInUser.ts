import { defineStore } from 'pinia';

export const useLoggedInUserStore = defineStore({
  id: 'loggedInUser',
  state: () => ({
    name: 'john',
  }),
  getters: {},
  actions: {},
});
