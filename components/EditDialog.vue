<template>
  <v-card class="pa-3" max-width="100%">
    <div class="parent_box">
      <img class="card-img" :src="editedbook.image" />
      <v-card-title> {{ editedbook.title }} </v-card-title>
    </div>
    <v-select v-model="editedbook.type" :items="types"></v-select>
    <v-card-actions class="justify-end">
      <v-btn class="ma-3 center" @click="edit"> 編集 </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
    },
  },

  data() {
    return {
      editedbook: {
        id: this.book.id,
        title: this.book.title,
        isbn: this.book.isbn,
        image: this.book.image,
        type: this.book.type,
      },
      types: ["紙", "電子"],
    };
  },

  watch: {
    book(val) {
      this.editedbook.id = val.id;
      this.editedbook.title = val.title;
      this.editedbook.isbn = val.isbn;
      this.editedbook.image = val.image;
      this.editedbook.type = val.type;
    },
  },

  methods: {
    async edit() {
      this.$emit("edit", this.editedbook);
    },
  },
};
</script>

<style scoped>
.parent_box {
  display: flex;
}
</style>
