import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { requestPermissionsAsync } from "expo-location";
import Map from "../components/Map";
import { LogBox } from "react-native";



const TrackCreateScreen = () => {


    LogBox.ignoreLogs([
        "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo- constants).",
    ]);


    //state variable to track the helper function response
    const [err, setErr] = useState(null);



    //helper function to ask for permission
    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            if (!granted) {
                throw new Error('Location permission not granted');
            }
        } catch (err) {
            setErr(err);
        }
    };



    //we want to call this function only the first time a user comes in on this screen
    useEffect(() => {
        startWatching();
    }, []);


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



export default TrackCreateScreen;
