import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";


const TrackDetailScreen = ({ navigation }) => {

    //importing state so we can access all tracks
    const { state } = useContext(TrackContext);

    //getting the ID of the track we clicked on
    const _id = navigation.getParam("_id");

    //find function iterates withing state, returns bool value if condition is true 
    const currentTrack = state.find(t => t._id == _id);

    return <Text style={{ fontSize: 45 }}>{currentTrack.name}</Text>
};




const styles = StyleSheet.create({

});



export default TrackDetailScreen;
