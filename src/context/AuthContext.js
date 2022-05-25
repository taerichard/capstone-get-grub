import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// action functions that modifies the state
// provider shares the info to the shared screens
// context provides the info
export const { Provider, Context } = createDataContext(
  authReducer,
  {},
  { isSignedIn: false }
);
