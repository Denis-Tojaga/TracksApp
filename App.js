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
import RespolveAuthScreen from "./src/screens/ResolveAuth";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";



//importing a Provider which will pass data to all child components
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";


//importing navigator function
import { setNavigator } from "./src/navigationRef";

//importing an icon
import { FontAwesome } from '@expo/vector-icons';




const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
});



trackListFlow.navigationOptions = {
  title: "Tracks",
  tabBarIcon: <FontAwesome name="th-list" size={21} color="black" />
}




//we refer here to grouping of different screens
//switchNavigator will navigate us either loginFlow or the mainFlow

//loginFlow has its own subnavigator with it's screens
//mainFlow has its own subnavigator with it's screens

//this is a nested router setup
const switchNavigator = createSwitchNavigator({

  //first screen that will determine to which screen we need to go
  //if there is a token we go to loginFlow, if not we go to Signup
  ResolveAuth: RespolveAuthScreen,

  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),

  mainFlow: createBottomTabNavigator({
    trackListFlow: trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })

});





//in order to complete the hierarchy of context passing the data to everywhere we need to do following
const App = createAppContainer(switchNavigator);


//exporting out custom component which wraps our app with AuthProvider
export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={(navigator) => { setNavigator(navigator) }} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};