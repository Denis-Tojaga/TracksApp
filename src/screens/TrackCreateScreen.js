import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { requestPermissionsAsync } from "expo-location";
import Map from "../components/Map";
import { set } from "react-native-reanimated";


const TrackCreateScreen = () => {


    //state variable to track the helper function response
    const [err, setErr] = useState(null);



    //helper function to ask for permission
    const startWatching = async () => {
        try {

            await requestPermissionsAsync();

        } catch (newError) {
            setErr(newError);
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
