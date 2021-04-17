import React, { useContext } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";



const Map = () => {
    const { state: { currentLocation, locations } } = useContext(LocationContext);



    //if currentLocation is not null we want to show the map to a user
    //(with longitude and latitude from the currentLocation),
    //otherwise we will show activity indicator
    return (

        currentLocation ?
            <MapView
                style={styles.map}
                initialRegion={{ ...currentLocation.coords, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
            >
                <Circle center={currentLocation.coords}
                    radius={30}
                    //we define rgba color (a = alpha for transparency)
                    strokeColor="rgba(158,158,255,1.0)"
                    fillColor="rgba(158,158,255,0.3)"
                />

                {/*we map over each element inside of an array and take out the coords object 
                and send it back as a return of a function*/}

                <Polyline coordinates={locations.map(locationObject => locationObject.coords)} />

            </MapView> : <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    );
};





const styles = StyleSheet.create({
    map: {
        height: 300
    }
});


export default Map;