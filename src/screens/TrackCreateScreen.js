import "../_mockLocation";
import React, { useEffect, useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";
import Map from "../components/Map";
import { LogBox } from "react-native";
import { Context as LocationContext } from "../context/LocationContext";



const TrackCreateScreen = () => {

    //ignoring the logs for warnings
    LogBox.ignoreLogs([
        "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants).",
    ]);


    //state variable to track the helper function response
    const [err, setErr] = useState(null);

    const { addLocation } = useContext(LocationContext);




    //helper function to ask a user for permission to use location
    const startWatching = async () => {
        try {

            //checks if the user allowed the permissions
            const { granted } = await requestPermissionsAsync();

            //we need to call the function that is going to track users location
            //it takes options object as an argument
            //accuracy.BestForNavigation is the very high accuracy down to meters almost (but it consumes more battery)

            //timeInterval says how often do we want our app to make an update

            //distanceInterval says on how many meters we want our app to make an update



            //takes two params, first one is an options object,second one is an array function that takes our location
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
                addLocation(location);
            });


            if (!granted)
                throw new Error('Location permission not granted');

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
