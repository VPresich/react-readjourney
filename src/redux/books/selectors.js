import { createSelector } from "reselect";

export const selectBooksState = (state) => state.books;
export const selectBooks = (state) => state.books.items;
export const selectBooksNumber = (state) => state.books.items?.length || 0;

export const selectIsLoading = (state) => state.books.isLoading;
export const selectError = (state) => state.books.error;

export const selectBooksPerPage = (state) => state.books.itemsPerPage;
export const selectCurrentBooksPage = (state) => state.books.currentPage;

export const selectTotalPages = (state) => state.books.totalPages;

export const selectBookById = createSelector(
  [selectBooks, (_, bookId) => bookId],
  (books, bookId) => books.find((book) => book._id === bookId)
);
