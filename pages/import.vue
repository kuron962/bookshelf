<template>
  <v-container class="ma-3">
    <input @change="selectFile" type="file" name="file" accept="text/csv" />
    <br />
    <br />
    <span>選択したファイルの取得元を選んでください</span>
    <v-btn :disabled="!this.isActive" @click="importCsvFromOurs" class="ma-4"
      >このアプリ</v-btn
    >
    <v-btn :disabled="!this.isActive" @click="importCsvFromBsy" class="ma-4"
      >蔵書マネージャー</v-btn
    >
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      isActive: false,
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
      if (result) {
        const reader = new FileReader();
        reader.readAsText(result);
        reader.onload = () => {
          this.file = reader.result;
          this.isActive = this.handleIsActive();
        };
      } else {
        this.file = null;
        this.isActive = this.handleIsActive();
      }
    },
    handleIsActive() {
      if (this.file !== null) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
