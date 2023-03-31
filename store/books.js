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
  // async getImg({}, img) {
  //   const res = await fetch(img)
  //     .then((response) => {
  //       console.log("レスポンス", response);
  //       return response.blob();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       return null;
  //     });
  //   console.log("★", res);
  //   return res;
  // },
};
