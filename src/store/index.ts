import Vue from 'vue';
import Vuex from 'vuex';

import airfoil from '@/model/component/airfoil/airfoil'

Vue.use(Vuex);
interface State{
  airfoil: airfoil;
}
export default new Vuex.Store({
  state: {
    airfoil: {c_l: 0, c_d: 0}
  } as State,
  
  getters: {
    getAirfoil: (state, getters) => (): airfoil => {
      return state.airfoil;
    }
  },
  mutations: {
    storeAirfoil(state, payload): void {
      state.airfoil = payload;
    },
  },
  actions: {
    updateAirfoil(context, value): void {
      context.commit('storeAirfoil', value)
    },
  }
})