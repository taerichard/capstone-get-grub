import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator({
  Search: SearchScreen
}, {
  // default route name to show
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    // customize header 
    title: "BusinessSearch"
  }
});

export default createAppContainer(navigator);