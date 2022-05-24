import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
    Search: SearchScreen,
    ResultShow: ResultsShowScreen,
  }),
  // mainFlow: createBottomTabNavigator({
  //   SerachListFlow: createStackNavigator({
  //     Search: SearchScreen,
  //     ResultShow: ResultsShowScreen,
  //   }),
  // }),
});

// const navigator = createStackNavigator({
//   Search: SearchScreen,
//   ResultsShow: ResultsShowScreen
// },
// {
//   // default route name to show
//   initialRouteName: 'Search',
//   defaultNavigationOptions:
//   {
//     // customize header
//     title: "Business Search"
//   }
// });

//export default createAppContainer(navigator);
export default createAppContainer(switchNavigator);
