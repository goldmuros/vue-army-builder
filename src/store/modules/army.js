import * as types from "./mutation-types";
import ArmyService from "@/services/ArmyServices.js";

const state = {
  armies: []
};

const mutations = {
  [types.SET_ARMIES](state, armies) {
    state.armies = armies;
  }
};

const actions = {
  getArmies: async ({ commit }) => {
    return await ArmyService.getArmies().then(armies => {
      commit(types.SET_ARMIES, armies);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
