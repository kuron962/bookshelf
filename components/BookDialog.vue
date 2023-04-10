<template>
  <v-container>
    <v-card class="pa-3" max-width="100%">
      <div class="parent_box">
        <img class="card-img" :src="gThisBook.image" />
        <div>
          <v-chip
            v-if="gThisBook.type === '紙'"
            outlined
            color="orange"
            class="ma-3 pa-3 center"
            label
            >{{ gThisBook.type }}</v-chip
          >
          <v-chip
            v-if="gThisBook.type === '電子'"
            outlined
            color="blue"
            class="ma-3 pa-3 center"
            label
            >{{ gThisBook.type }}</v-chip
          >
          <v-card-title> {{ gThisBook.title }} </v-card-title>
        </div>
      </div>
      <v-card-actions class="justify-end">
        <v-btn class="ma-3 center" @click="del"> 削除 </v-btn>
        <v-btn class="ma-3 center" @click="openEditDialog"> 編集 </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="editDialog" max-width="90%" :retain-focus="false">
      <EditDialog :book="gThisBook" @edit="edit" />
    </v-dialog>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import EditDialog from "~/components/EditDialog.vue";

export default {
  components: { EditDialog },
  data() {
    return {
      editDialog: false,
    };
  },

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
    async openEditDialog() {
      this.editDialog = true;
    },
    async edit(editedbook) {
      this.$emit("edited");
      this.editDialog = false;
      await this.$store.dispatch("books/editBook", editedbook);
      await this.$store.dispatch("books/load");
    },
  },
};
</script>

<style scoped>
.parent_box {
  display: flex;
}
</style>
