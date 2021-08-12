import { createStore } from "vuex";

export default createStore({
  state: {
    characters: [],
    charactersFilter: [],
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload;
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload;
    },
  },
  actions: {
    async getCharacter({ commit }) {
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character`);
        const data = await res.json();
        console.log(data.results);
        commit("setCharacters", data.results);
        commit("setCharactersFilter", data.results);
      } catch (err) {
        console.log(err);
      }
    },

    FilterStatus({ commit, state }, status) {
      const res = state.characters.filter((character) => {
        return character.status.includes(status);
      });
      commit("setCharactersFilter", res);
      console.log(state.characters);
    },

    filterName({ commit, state }, name) {
      const formName = name.toLowerCase();
      const res = state.characters.filter((character) => {
        const characterName = character.name.toLowerCase();
        if (characterName.includes(formName)) {
          return character;
        }
      });
      commit("setCharactersFilter", res);
    },
    async getPage({ commit }) {
      try {
        const res = await fetch(
          "https://rickandmortyapi.com/api/character/?page=19"
        );
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
