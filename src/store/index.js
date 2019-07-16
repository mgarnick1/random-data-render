import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    people: []
  },
  mutations: {
    updatePeople(state, people) {
      state.people = people;
    }
  },
  actions: {
    getPeople({ commit }) {
      axios
        .get("/people")
        .then(result => commit("updatePeople", result.data))
        // eslint-disable-next-line no-console
        .catch(console.error);
    }
  }
});
