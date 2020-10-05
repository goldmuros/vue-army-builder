import Vue from "vue";
import Vuex from "vuex";
import army from "./modules/army";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    army: army
  }
});
