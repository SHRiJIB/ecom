export const setCurrentUser = () => ({
  type: "SET_CURRENT_USER",
  payload: JSON.stringify(localStorage.getItem("profile")),
});
