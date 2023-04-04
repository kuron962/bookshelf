<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(book, index) in gAllBooks"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card height="360px" class="pa-3" @click="openDialog(book)">
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
        <v-dialog v-model="deleteDialog" max-width="90%" :retain-focus="false">
          <DeleteDialog @deleted="closeDialog" />
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import DeleteDialog from "~/components/DeleteDialog.vue";

export default {
  components: { DeleteDialog },
  data() {
    return {
      deleteDialog: false,
    };
  },

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
    async openDialog(book) {
      this.deleteDialog = true;
      await this.$store.dispatch("books/setBook", book);
    },
    closeDialog() {
      this.deleteDialog = false;
    },
  },
};
</script>
