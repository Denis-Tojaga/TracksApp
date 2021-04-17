//fake location tracking
import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet, LogBox } from "react-native";

//elements and navigation
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";

//location related
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";


//importing components
import TrackForm from "../components/TrackForm";
import { add } from "react-native-reanimated";






const TrackCreateScreen = ({ isFocused }) => {


    //ignoring the logs for warnings
    LogBox.ignoreLogs([
        "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants).",
    ]);

    //extract the state so we can access the recording flag and addLocation
    const { state, addLocation } = useContext(LocationContext);
    const recording = state.recording;



    const callback = useCallback((location) => {
        addLocation(location, recording);
    }, [recording]);


    //we only send here the callback function version with changed state.recording 
    // in order to record even if the user is not on this screen we are adding || state.recording
    const [err] = useLocation(isFocused || recording, callback);



    return (
        <SafeAreaView style={styles.screen} forceInset={{ top: "always" }}>
            <Text style={styles.header} h3>Create a track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
};




const styles = StyleSheet.create({

    screen: {
        margin: 15
    },

    header: {
        textAlign: "center",
        marginBottom: 10
    }

});



export default withNavigationFocus(TrackCreateScreen);
