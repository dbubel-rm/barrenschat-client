<template>
  <div>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <SideNav />
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>BChat</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container class="scrollable">
        <v-layout >
          <v-flex>
            <Message />
            <Message />
          </v-flex>
        </v-layout>
      </v-container >
<v-layout>

          <v-text-field
            label="Solo"
            solo
            
          ></v-text-field>
</v-layout>
    </v-content>
    <!-- <v-content >
         <v-flex>
          <v-text-field label="Solo" solo ></v-text-field>
        </v-flex>
    </v-content> -->
    <!-- <v-content>
       <v-container fluid fill-height>
        <v-layout align-start justify-start column overflow-hidden>
          <Message />
        </v-layout>
      </v-container> 
    </v-content> -->
    <!-- <v-footer app fixed>
      <span>&copy; Engineerbeard</span>
    </v-footer> -->
  </div>
</template>

<script>
import SideNav from "@/components/SideNav.vue";
import Message from "@/components/Message.vue";
import Ws from "@/modules/bchat";
export default {
  components: {
    SideNav,
    Message
  },
  data: () => ({
    drawer: true,
    bottomNav: 3
  }),
  props: {
    source: String
  },
  computed: {
    color() {
      switch (this.bottomNav) {
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
        case 2:
          return "brown";
        case 3:
          return "indigo";
      }
    }
  }
};
</script>
<style scoped>
.scrollable {
  overflow-y: auto;
  height: 83vh;
}
</style>
