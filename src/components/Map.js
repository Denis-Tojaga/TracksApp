import React, { useContext } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
//in newer version of expo we need to install this maps library
//to draw lines over the map we need to import this
import MapView, { Polyline } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";



const Map = () => {

    //mapview is almost the same as image, we need to assign it some height and width
    //on ios it shows apple map, on android google maps
    //it shows a center of our location


    //we need the current location from the state
    const { state: { currentLocation } } = useContext(LocationContext);

    //initialRegion says what should we show on the map when it first time shows up

    //if currentLocation is not null we want to show the map to a user(with longitude and latitude from the currentLocation),
    //currentLocation.coords is where are our longitude and latitude
    //otherwise we will show activity indicator

    return (

        currentLocation ? <MapView
            style={styles.map}
            initialRegion={{ ...currentLocation.coords, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
        >
        </MapView> : <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    );





};





const styles = StyleSheet.create({
    map: {
        height: 300
    }
});


export default Map;