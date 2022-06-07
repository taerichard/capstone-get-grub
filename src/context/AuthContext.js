import { AsyncStorage } from "react-native";
//import AsyncStorage from "@react-native-community/async-storage";
import createDataContext from "./createDataContext";
import grubApi from "../api/grub";
import { navigate } from "../navigationRef";
import grub from "../api/grub";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    // make api request to sign up with email and pw
    // once signed up, modify state and authenticate
    // if fails, create error message
    try {
      const response = await grubApi.post("/signup", { email, password });
      console.log(response.data);
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });

      // go to main flow
      navigate("Search");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await grubApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("Search");
    } catch (err) {
      console.log(err);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
  };

const signout = (dispatch) => {
  return () => {
    // create signout process
  };
};

// action functions that modifies the state
// provider shares the info to the shared screens
// context provides the info
export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: "" }
);
