import { defineStore } from 'pinia';

export const useLoggedInUserStore = defineStore({
  id: 'loggedInUser',
  state: () => {
    return {
      name: 'john',
    };
  },
  getters: {},
  actions: {},
});
