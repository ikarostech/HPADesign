import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface State {
  C_L: number;
  C_D: number;
}

export default new Vuex.Store({
  state: {
    C_L: 0,
    C_D: 0,
  } as State,
  getters: {
    getC_L: (state, getters) => (): number => {
      return state.C_L;
    },
    getC_D: (state, getters) => (): number => {
      return state.C_D;
    },
  },
  mutations: {
    updateC_L(state, payload): void {
      state.C_L = payload;
    },
    updateC_D(state, payload): void {
      state.C_D = payload;
    },
  }
})