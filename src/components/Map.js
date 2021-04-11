import React from "react";
import { Text, StyleSheet } from "react-native";
//in newer version of expo we need to install this maps library
//to draw lines over the map we need to import this
import MapView, { Polyline } from "react-native-maps";


const Map = () => {

    //mapview is almost the same as image, we need to assign it some height and width
    //on ios it shows apple map, on android google maps
    //it shows a center of our location


    //in order to create polyline we need to create the array of points 
    var points = [];

    for (var i = 0; i < 20; i++) {
        points.push({
            latitude: 37.33233 + i * 0.001,
            longitude: -122.03121 + i * 0.001
        });
    }


    //initialRegion says what should we show on the map when it first time shows up
    return (
        <MapView style={styles.map} initialRegion={{ latitude: 37.33233, longitude: -122.03121, latitudeDelta: 0.01, longitudeDelta: 0.01 }}>
            <Polyline
                coordinates={points}
                strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                strokeWidth={3}
            />
        </MapView>
    );


};





const styles = StyleSheet.create({
    map: {
        height: 300
    }
});


export default Map;