<template>
  <v-card class="ma-3 pa-3" max-width="540px">
    <v-card-title> {{ gThisBook.title }} </v-card-title>
    <v-select v-model="type" :items="types"></v-select>
    <v-card-actions class="justify-end">
      <v-btn class="ma-3 center" @click="add"> 登録 </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      type: "紙",
      types: ["紙", "電子"],
    };
  },

  computed: {
    ...mapGetters({
      gThisBook: "books/gThisBook",
      gAllBooks: "books/gAllBooks",
    }),
  },

  methods: {
    async add() {
      const book = {
        id: new Date().getTime().toString(),
        title: this.gThisBook.title,
        isbn: this.gThisBook.isbn,
        image: this.gThisBook.image,
        type: this.type,
      };
      await this.$store.dispatch("books/addBook", book);
      this.$emit("added");
    },
  },
};
</script>
