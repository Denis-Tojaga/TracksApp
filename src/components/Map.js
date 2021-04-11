import React from "react";
import { Text, StyleSheet } from "react-native";
//in newer version of expo we need to install this maps library
import MapView from "react-native-maps";

const Map = () => {

    //mapview is almost the same as image, we need to assign it some height and width
    //on ios it shows apple map, on android google maps
    //it shows a center of our location


    //initialRegion says what should we show on the map when it first time shows up
    return <MapView style={styles.map}
        initialRegion={{
            latitude: 37.33233,
            longitude: -122.03121,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}

    />
};





const styles = StyleSheet.create({
    map: {
        height: 300
    }
});


export default Map;