//fake location tracking
import "../_mockLocation";
import React, { useContext } from "react";
import { StyleSheet, LogBox } from "react-native";

//elements and navigation
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";

//location related
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";






const TrackCreateScreen = ({ isFocused }) => {

    console.log(isFocused);

    //ignoring the logs for warnings
    LogBox.ignoreLogs([
        "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants).",
    ]);

    const { addLocation } = useContext(LocationContext);


    //we take the error from the hook we created
    //the hook takes a callback funtion, in this case it will be a function for adding a location
    const [err] = useLocation((newLocation) => addLocation(newLocation));



    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text h2>Create a track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    );
};




const styles = StyleSheet.create({

});



export default withNavigationFocus(TrackCreateScreen);
