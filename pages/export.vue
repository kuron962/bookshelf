<template>
  <v-container>
    <v-card-actions>
      <v-btn @click="exportCsv" class="ma-4">エクスポート</v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      gAllBooks: "books/gAllBooks",
    }),
  },

  mounted() {
    this.init();
  },

  methods: {
    async init() {
      await this.$store.dispatch("books/load");
    },
    async exportCsv() {
      await this.$store.dispatch("books/exportCsv");
    },
  },
};
</script>
