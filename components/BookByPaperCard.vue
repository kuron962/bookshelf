<template>
  <v-card height="360px" class="book pa-3" @click="clickCard()">
    <div>
      <img height="180px" class="card-img" :src="book.image" />
    </div>
    <v-chip outlined color="green" label>{{ book.type }}</v-chip>
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
      console.log("", this.book);
    },
  },
};
</script>

<style scoped>
.book {
  background-color: rgb(170, 200, 175);
}
</style>
