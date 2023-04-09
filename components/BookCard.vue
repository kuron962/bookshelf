<template>
  <v-card height="360px" class="pa-3" @click="clickCard()">
    <div>
      <img height="180px" class="card-img" :src="book.image" />
    </div>
    <v-chip v-if="book.type === '紙'" outlined color="orange" label>{{
      book.type
    }}</v-chip>
    <v-chip v-if="book.type === '電子'" outlined color="blue" label>{{
      book.type
    }}</v-chip>
    <v-card-title>{{ book.title }}</v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
    },
  },

  methods: {
    async clickCard() {
      this.$emit("clickCard", this.book);
      console.log("★", this.book);
    },
  },
};
</script>
