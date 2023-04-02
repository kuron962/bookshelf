<template>
  <v-container>
    <input @change="selectFile" type="file" name="file" />
    <v-btn @click="importCsvFromOurs" class="ma-4"
      >このアプリでエクスポートしたデータをインポート</v-btn
    >
    <v-btn @click="importCsvFromBsy" class="ma-4"
      >蔵書マネージャーでエクスポートしたデータをインポート</v-btn
    >
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      file: null,
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    async init() {
      await this.$store.dispatch("books/load");
    },
    async importCsvFromOurs() {
      await this.$store.dispatch("books/importCsvFromOurs", this.file);
    },
    async importCsvFromBsy() {
      await this.$store.dispatch("books/importCsvFromBsy", this.file);
    },
    selectFile(event) {
      const result = event.target.files[0];
      const reader = new FileReader();
      reader.readAsText(result);
      reader.onload = () => {
        this.file = reader.result;
      };
    },
  },
};
</script>
