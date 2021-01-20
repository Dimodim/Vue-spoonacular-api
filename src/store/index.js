import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const url = "http://icanhazdadjoke.com";
const headers = { Accept: "application/json" };

export default new Vuex.Store({
  state: {
    currentJoke: "there are no jokes",
    allJokes: []
  },
  mutations: {
    setCurrentJoke(state, payload) {
      state.currentJoke = payload;
      state.allJokes.push(payload);
    }
  },
  actions: {
    async setCurrentJoke(state) {
      const joke = await fetch(url, { headers });
      const jokeJson = await joke.json();
      state.commit("setCurrentJoke", jokeJson.joke); // we use commit when we want to change a mutation and dispatch when we want to change an action
    }
  },
  modules: {},
  getters: {
    getCurrentJoke(state) {
      return state.currentJoke;
    },
    getAllJokes(state) {
      return state.allJokes;
    }
  }
});
