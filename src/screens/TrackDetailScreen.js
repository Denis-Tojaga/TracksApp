import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";


const TrackDetailScreen = ({ navigation }) => {

    //importing state so we can access all tracks
    const { state } = useContext(TrackContext);

    //getting the ID of the track we clicked on
    const _id = navigation.getParam("_id");

    //find function iterates withing state, returns bool value if condition is true 
    const currentTrack = state.find(t => t._id == _id);



    const initialCoords = currentTrack.locations[0].coords;

    return <>

        <Text style={styles.trackName}>{currentTrack.name}</Text>
        <MapView style={styles.map}
            initialRegion={{
                longitudeDelta: 0.01,
                latitudeDelta: 0.01,
                ...initialCoords
            }}
        >
            <Polyline coordinates={currentTrack.locations.map(location => location.coords)} />
        </MapView>

    </>
};




TrackDetailScreen.navigationOptions = {
    title: "Details",
    headerTitleStyle: {
        flex: 1,
        textAlign: "center",
        fontSize: 18,
        fontFamily: "RalewaySemibold"
    }
}






const styles = StyleSheet.create({
    map: {
        height: 300
    },

    trackName: {
        fontFamily: "RalewayLight",
        fontSize: 40,
        fontWeight: "bold"
    }

});



export default TrackDetailScreen;
