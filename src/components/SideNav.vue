<template>
<v-list>
  <v-list-group v-for="item in items" v-model="item.active" :key="item.title" :prepend-icon="item.action" no-action>

    <v-list-tile slot="activator">
      <v-list-tile-content>
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile v-for="subItem in item.items" :key="subItem.title" @click="" :prepend-icon="item.action">

      
      <v-list-tile-content>
        <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
      </v-list-tile-content>

      <v-list-tile-action>
        <v-icon>{{ subItem.action }}</v-icon>
      </v-list-tile-action> 

    </v-list-tile>
  </v-list-group>
</v-list>
</template>
<script>
export default {
  name: "SideNav",
  data: () => ({
    drawer: true,
    items: [
      {
        action: "fingerprint",
        title: "Channels",
        items: [{ title: "Spins" }]
      }
    ]
  })
};
</script>
