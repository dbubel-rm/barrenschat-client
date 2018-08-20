import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Chat from "./views/Chat.vue";
import store from "./store";
import { getPublicFirebaseKeys } from "./modules/firebase";
Vue.use(Router);
export default new Router({

  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
      async beforeEnter(to, from, next) {
        store.commit("setFirebasePublicKeys", await getPublicFirebaseKeys());
        store.commit("setUserAuthToken", localStorage.getItem("jwt"));
        if (store.getters.hasValidAuth) {
          next("/chat");
        } else {
          next();
        }
      }
    },
    {
      path: "/chat",
      name: "chat",
      component: Chat,
       beforeEnter(to, from, next) {
        if (store.getters.hasValidAuth) {
          next();
        } else {
          next("/");
        }
      }
    }
  ]
})


