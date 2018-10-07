<template>
 <v-layout column justify-center>
    <v-expansion-panel value="1">
      <v-expansion-panel-content
        v-for="(message, i) in messages" :key="i" hide-actions>
        <v-layout slot="header" align-center row spacer>
          <v-flex xs4 sm2 md1>
            <v-avatar slot="activator" size="36px">
              <img
                v-if="message.avatar"
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                alt="Avatar"
              >
              <v-icon v-else :color="message.color" v-text="message.icon"
              ></v-icon>
            </v-avatar>
          </v-flex>
          <v-flex sm5 md3 hidden-xs-only>
            <strong v-html="message.name"></strong>
            <span
              v-if="message.total"
              class="grey--text"
            >
              &nbsp;({{ message.total }})
            </span>
          </v-flex>

          <v-flex no-wrap xs5 sm3>
            <!-- <v-chip
              v-if="message.new"
              :color="`${message.color} lighten-4`"
              class="ml-0"
              label
              large
            >
              {{ message.new }} new
            </v-chip> -->
            <strong v-html="message.title"></strong>
          </v-flex>

          <v-flex
            v-if="message.excerpt"
            class="grey--text"
            ellipsis
            hidden-sm-and-down
          >
          </v-flex>
        </v-layout>

        <v-card>
          <v-divider></v-divider>
          <v-card-text v-text="lorem"></v-card-text>
          <v-card-text v-text="lorem"></v-card-text>
      
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-layout>
</template>
<script>
export default {
  data: () => ({
    messages: [
      {
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
        name: "John Leider"
        //   title: 'Welcome to Vuetify.js!',
        //   excerpt: 'Thank you for joining our community...'
      }
    ],
    lorem:
      "<h1>Lorem</h1> ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum."
  })
};
</script>
