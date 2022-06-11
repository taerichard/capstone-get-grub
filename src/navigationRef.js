import { NavigationActions } from "react-navigation";
// getting access to navigator in app.js and to allow other components to use

let navigator;
export const setNavigator = (nav) => {
  navigator = nav;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};
