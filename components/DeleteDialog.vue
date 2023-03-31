<template>
  <v-card class="ma-3 pa-3" max-width="540px">
    <v-chip v-if="gThisBook.type === '紙'" outlined color="orange" label>{{
      gThisBook.type
    }}</v-chip>
    <v-chip v-if="gThisBook.type === '電子'" outlined color="blue" label>{{
      gThisBook.type
    }}</v-chip>
    <v-card-title> {{ gThisBook.title }} </v-card-title>
    <v-card-actions class="justify-end">
      <v-btn class="ma-3 center" @click="del"> 削除 </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      gThisBook: "books/gThisBook",
    }),
  },

  methods: {
    async del() {
      this.$emit("deleted");
      await this.$store.dispatch("books/deleteBook", this.gThisBook.id);
      await this.$store.dispatch("books/load");
    },
  },
};
</script>
