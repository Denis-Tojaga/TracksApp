import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";
import Spacer from "../components/Spacer";
import convertFunction from "../components/convertFunction";


const TrackDetailScreen = ({ navigation }) => {

    //importing state so we can access all tracks
    const { state } = useContext(TrackContext);

    //getting the ID of the track we clicked on
    const _id = navigation.getParam("_id");

    //find function iterates withing state, returns bool value if condition is true 
    const currentTrack = state.find(t => t._id == _id);

    const initialCoords = currentTrack.locations[0].coords;


    var lastIndex = currentTrack.locations.length - 1;

    var startLat1 = currentTrack.locations[0].coords.latitude;
    var startLon1 = currentTrack.locations[0].coords.longitude;
    var endLat2 = currentTrack.locations[lastIndex].coords.latitude;
    var endLon2 = currentTrack.locations[lastIndex].coords.longitude;






    return <View>
        <Spacer>
            <Text style={styles.trackName}>{currentTrack.name}</Text>
        </Spacer>
        <MapView style={styles.map}
            initialRegion={{
                longitudeDelta: 0.01,
                latitudeDelta: 0.01,
                ...initialCoords
            }}
        >
            <Polyline coordinates={currentTrack.locations.map(location => location.coords)} />
        </MapView>

        <Spacer>
            <Text>Distance covered: {convertFunction(startLat1, startLon1, endLat2, endLon2)}km</Text>
        </Spacer>

    </View>
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
        fontWeight: "bold",
        alignSelf: "center"
    }

});



export default TrackDetailScreen;
