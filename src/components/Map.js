import React from "react";
import { Text, StyleSheet } from "react-native";
//in newer version of expo we need to install this maps library
import { MapView } from "react-native-maps";

const Map = () => {

    //mapview is almost the same as image, we need to assign it some height and width
    return <MapView style={styles.map} />
};


const styles = StyleSheet.create({
    map: {
        height: 200
    }
});


export default Map;