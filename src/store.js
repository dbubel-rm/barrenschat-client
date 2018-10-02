import Vue from "vue";
import Vuex from "vuex";
import jsonwebtoken from "jsonwebtoken";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    firebasePublicKeys: {},
    userToken: ""
  },
  mutations: {
    async setFirebasePublicKeys(state, keys) {
      state.firebasePublicKeys = keys;
    },
    setUserAuthToken(state, token) {
      state.userToken = token;
    }
  },
  actions: {
    setUserAuthToken({ commit }, token) {
      commit("setUserAuthToken", token);
    }
  },
  getters: {
    getFirebasePublicKeys: state => {
      return state.firebasePublicKeys;
    },
    getUserAuthToken: state => {
      return state.userToken;
    },
    hasValidAuth: state => {
      // console.log("KEYS", state.firebasePublicKeys)
      for (var key in state.firebasePublicKeys) {
        try {
          jsonwebtoken.verify(state.userToken, state.firebasePublicKeys[key], {
            algorithms: "RS256",
            audience: "barrenschat-27212",
            issuer: "https://securetoken.google.com/barrenschat-27212",
            ignoreExpiration: false,
            clockTolerance: 2
          });
          localStorage.setItem("jwt", state.userToken);
          // console.log("Token OK");
          return state.userToken;
        } catch (e) {
          console.log(state.firebasePublicKeys[key]);
        }
      }
    }
  }
});
