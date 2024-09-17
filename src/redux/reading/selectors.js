export const selectReadingState = (state) => state.reading;
export const selectReadingBook = (state) => state.reading.book;
export const selectIsLoading = (state) => state.reading.isLoading;
export const selectError = (state) => state.reading.error;
