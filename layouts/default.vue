<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>BOOKSHELF</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="(menuItem, index) in menuItems"
            :key="index"
            :to="menuItem.url"
          >
            <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      menuItems: [
        { name: "本棚", url: "/" },
        { name: "登録", url: "/add" },
        { name: "インポート", url: "/import" },
        { name: "エクスポート", url: "/export" },
      ],
    };
  },
};
</script>
