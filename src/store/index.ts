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
    storeC_L(state, payload): void {
      state.C_L = payload;
    },
    storeC_D(state, payload): void {
      state.C_D = payload;
    },
  },
  actions: {
    updateC_L(context, value): void {
      context.commit('storeC_L', value)
    },
    updateC_D(context, value): void {
      context.commit('storeC_D', value)
    }
  }
})