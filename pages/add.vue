<template>
  <v-container>
    <v-card class="ma-3 pa-3" max-width="540">
      <v-text-field
        v-model="key"
        color="primary"
        label="検索キーワード"
        variant="underlined"
      ></v-text-field>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="clear" class="ma-4">クリア</v-btn>
        <v-btn @click="search" class="ma-4">検索</v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="searchedDialog" max-width="90%" :retain-focus="false">
      <SearchedDialog />
    </v-dialog>
  </v-container>
</template>

<script>
import SearchedDialog from "~/components/SearchedDialog.vue";

export default {
  components: { SearchedDialog },
  data: () => ({
    key: null,
    searchedDialog: false,
  }),

  mounted() {
    this.init();
  },

  methods: {
    async init() {
      await this.$store.dispatch("books/load");
    },

    async search() {
      await this.$store.dispatch("books/searchFromGoogle", this.key);
      this.searchedDialog = true;
    },

    clear() {
      this.key = null;
    },
  },
};
</script>
