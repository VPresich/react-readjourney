import { createSelector } from "reselect";
import { selectBooksStatus } from "../filters/selectors";

export const selectOwnBooks = (state) => state.library.items || [];
export const selectIsLoading = (state) => state.library.isLoading;
export const selectError = (state) => state.library.error;

export const selectFilteredBooks = createSelector(
  [selectOwnBooks, selectBooksStatus],
  (books, status) => {
    if (!status || status === "All books") {
      return books || [];
    }
    return books.filter(
      (book) =>
        book.status?.replace(/-/g, " ").toLowerCase() === status.toLowerCase()
    );
  }
);
