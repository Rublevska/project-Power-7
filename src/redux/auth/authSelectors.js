export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectAuthError = (state) => state.auth.error;
export const selectGoToParams = (state) => state.auth.goToParams;
export const selectUserDataComplete = (state) => 
state.auth.user.height && state.auth.user.currentWeight && state.auth.user.desiredWeight;


// {
//   const user = selectUser(state);
//   return user.height && user.currentWeight && user.desiredWeight;
// };

