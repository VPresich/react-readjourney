export const selectAuth = (state) => state.auth;
export const selectUser = (state) => state.auth.user;
export const selectUserName = (state) => state.auth.user.name;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectError = (state) => state.auth.error;
