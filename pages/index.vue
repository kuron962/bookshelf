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
        <v-dialog v-model="bookDialog" max-width="90%" :retain-focus="false">
          <BookDialog @deleted="closeDialog" @edited="closeDialog" />
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import BookDialog from "~/components/BookDialog.vue";
import BookByPaperCard from "../components/BookByPaperCard.vue";
import BookByEleCard from "../components/BookByEleCard.vue";

export default {
  components: { BookDialog, BookByPaperCard, BookByEleCard },
  data() {
    return {
      bookDialog: false,
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
      this.bookDialog = true;
      await this.$store.dispatch("books/setBook", book);
    },
    closeDialog() {
      this.bookDialog = false;
    },
  },
};
</script>
