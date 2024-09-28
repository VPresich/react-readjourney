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

export const selectIsDone = createSelector(
  [selectOwnBooks, (_, id) => id],
  (books, id) => {
    const book = books.find((book) => book._id === id);
    return book ? book.status === "done" : false;
  }
);

export const selectBookInLibrary = createSelector(
  [selectOwnBooks, (_, addedBook) => addedBook],
  (books, addedBook) =>
    books.some(
      (book) =>
        book.title === addedBook.title && book.author === addedBook.author
    )
);
