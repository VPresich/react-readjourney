import { createSelector } from "reselect";

export const selectReadingState = (state) => state.reading;
export const selectReadingBook = (state) => state.reading.book;
export const selectIsLoading = (state) => state.reading.isLoading;
export const selectError = (state) => state.reading.error;

const selectBookStatus = (state) => state.reading.book.status;
export const selectBookProgress = (state) => state.reading.book?.progress || [];

export const selectReadingBookStatus = createSelector(
  [selectBookStatus, selectBookProgress],
  (bookStatus, progress) => {
    let status = "inactive";

    if (bookStatus === "in-progress") {
      const len = progress.length;
      if (len > 0) status = progress[len - 1].status;
    }

    return status;
  }
);

export const selectTimeLeftToRead = (state) => {
  let res = "";

  const timeLeftToRead = state.reading.book?.timeLeftToRead;
  if (timeLeftToRead) {
    const { hours, minutes } = timeLeftToRead;
    if (hours !== undefined) {
      res += `${hours} hours `;
    }
    if (minutes !== undefined) {
      res += `${minutes} minutes`;
    }
  }

  return res.trim();
};

export const selectTotalReadingBookPages = (state) =>
  state.reading.book.totalPages;

export const selectIsBookFullyRead = createSelector(
  [selectBookProgress, selectTotalReadingBookPages],
  (progress, totalPages) => {
    if (progress.length > 0) {
      const lastProgressItem = progress[progress.length - 1];

      if (lastProgressItem.status === "inactive") {
        const lastPage = lastProgressItem.finishPage;
        return lastPage >= totalPages;
      }
    }
    return false;
  }
);
