<template>
  <v-container>
    <v-list nav dense>
      <v-list-item-group>
        <v-list-item
          v-for="(book, index) in gSearchBooks"
          :key="index"
          class="pa-3"
          @click="add(book)"
        >
          <img class="card-img" :src="book.image" />
          <v-list-item-title>{{ book.title }}</v-list-item-title>
          <v-dialog v-model="addDialog" max-width="90%" :retain-focus="false">
            <AddDialog :book="book.title" @added="closeDialog" />
          </v-dialog>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import AddDialog from "~/components/AddDialog.vue";

export default {
  components: { AddDialog },
  data: () => ({
    addDialog: false,
  }),

  computed: {
    ...mapGetters({
      gSearchBooks: "books/gSearchBooks",
    }),
  },

  methods: {
    async add(book) {
      this.addDialog = true;
      await this.$store.dispatch("books/setBook", book);
    },
    closeDialog() {
      this.addDialog = false;
    },
  },
};
</script>
