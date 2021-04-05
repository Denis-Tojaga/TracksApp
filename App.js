import React from "react";
//createAppContainer function takes navigator funtion and creates component out of it
//createStackNavigator function creates StackNavigator
//createSwitchNavigator function creates SwitchNavigator
//createBottomTabNavigator function creates BottomTabNavigator
import {
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";


//import of all screens
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";


//importing a Provider which will pass data to all child components
import { Provider as AuthProvider } from "./src/context/AuthContext";


//importing navigator function
import { setNavigator } from "./src/navigationRef";







//we refer here to grouping of different screens
//switchNavigator will navigate us either loginFlow or the mainFlow

//loginFlow has its own subnavigator with it's screens
//mainFlow has its own subnavigator with it's screens

//this is a nested router setup
const switchNavigator = createSwitchNavigator({

  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),

  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })

});





//in order to complete the hierarchy of context passing the data to everywhere we need to do following
const App = createAppContainer(switchNavigator);


//exporting out custom component which wraps our app with AuthProvider
export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => { setNavigator(navigator) }} />
    </AuthProvider>
  );
};