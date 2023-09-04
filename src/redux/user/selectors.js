export const selectUser = (rootReducer) => {
  return rootReducer.userReducer.currentUser;
};
