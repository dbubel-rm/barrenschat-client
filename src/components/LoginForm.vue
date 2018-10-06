<template>
    <v-content id="inspire">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar>
                <v-toolbar-title>Barrens Chat</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar> 
              <v-card-text>
                <v-form>
                  <v-text-field v-model="email" prepend-icon="person" name="login"  type="text"></v-text-field>
                  <v-text-field v-model="password" id="password" prepend-icon="lock" name="password"  type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn v-on:click="attemptLogin">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
import { getUserJWT } from "@/modules/firebase";
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async attemptLogin() {
      const token = await getUserJWT(this.email, this.password);
      this.$store.commit("setUserAuthToken", token.idToken);

      if (this.$store.getters.hasValidAuth) {
        this.$router.push("/chat");
      } else {
        alert("Invalid username/password signin");
        return;
      }
    }
  }
};
</script>
