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
      console.log("Keys set");
    },
    setUserAuthToken(state, token) {
      // console.log("commit auth token:", token)
      state.userToken = token;
    }
  },
  actions: {
    // setFirebasePublicKeys({ commit }, firebasePublicKeys) {
    //   commit("setFirebasePublicKeys", firebasePublicKeys);
    // },
    setUserAuthToken({ commit }, token) {
      // console.log("setUserAuthToken:", token)
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
          return state.userToken;
        } catch (e) {
          console.error(e);
        }
      }
    }
  }
});
