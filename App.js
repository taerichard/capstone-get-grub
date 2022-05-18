import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen
}, 
{
  // default route name to show
  initialRouteName: 'Search',
  defaultNavigationOptions: 
  {
    // customize header 
    title: "Business Search"
  }
});

export default createAppContainer(navigator);