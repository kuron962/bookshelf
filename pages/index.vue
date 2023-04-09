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
        <BookByPaperCard
          v-if="book.type == '紙'"
          :book="book"
          @clickCard="openDialog(book)"
        />
        <BookByEleCard
          v-if="book.type == '電子'"
          :book="book"
          @clickCard="openDialog(book)"
        />
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
import BookByPaperCard from "../components/BookByPaperCard.vue";
import BookByEleCard from "../components/BookByEleCard.vue";

export default {
  components: { DeleteDialog, BookByPaperCard, BookByEleCard },
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
