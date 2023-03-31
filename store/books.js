export const state = () => ({
  books: null,
  searchBooks: null,
  thisBook: null,
});

export const getters = {
  gAllBooks(state) {
    return state.books;
  },
  gSearchBooks(state) {
    return state.searchBooks;
  },
  gThisBook(state) {
    return state.thisBook;
  },
};

export const mutations = {
  sAllBooks(state, payload) {
    state.books = payload;
  },
  sAddBooks(state, payload) {
    state.books.push(payload);
  },
  sDelBook(state, payload) {
    var result = state.books.filter((book) => {
      return book.id !== payload;
    });
    state.books = result;
  },
  sSearchBooks(state, payload) {
    state.searchBooks = payload;
  },
  sThisBook(state, payload) {
    state.thisBook = payload;
  },
};

export const actions = {
  async load({ commit }) {
    const res = localStorage.getItem("books")
      ? JSON.parse(localStorage.getItem("books"))
      : [];
    commit("sAllBooks", res);
  },

  async addBook({ commit, getters }, book) {
    commit("sAddBooks", book);
    const st = JSON.stringify(getters.gAllBooks);
    localStorage.setItem("books", st);
  },

  async deleteBook({ commit, getters }, id) {
    commit("sDelBook", id);
    const st = JSON.stringify(getters.gAllBooks);
    localStorage.setItem("books", st);
  },

  async setBook({ commit }, book) {
    commit("sThisBook", book);
  },

  async searchFromGoogle({ commit }, key) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${key}`;
    const res = await fetch(url)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
    if (res) {
      const list = res.items;
      const books = list.map((x) => {
        return {
          title: x.volumeInfo.title,
          isbn: x.volumeInfo.industryIdentifiers
            ? x.volumeInfo.industryIdentifiers
            : null,
          image: x.volumeInfo.imageLinks
            ? x.volumeInfo.imageLinks.smallThumbnail
            : "",
        };
      });
      commit("sSearchBooks", books);
    }
  },
  exportCsv({ commit, getters }) {
    const items = getters.gAllBooks;
    const header = Object.keys(items[0]);
    const headerString = header.join(",");
    const replacer = (key, value) => value ?? "";
    const rowItems = items.map((row) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(",")
    );
    const csv = [headerString, ...rowItems].join("\r\n");
    const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
    const blob = new Blob([bom, csv], {
      type: "text/csv",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "books.csv";
    link.click();
    link.remove();
  },
};
