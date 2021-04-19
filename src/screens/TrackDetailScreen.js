import React from "react";
import { View, StyleSheet, Text } from "react-native";


const TrackDetailScreen = ({ navigation }) => {

    const _id = navigation.getParam("_id");


    console.log(_id);

    return <Text style={{ fontSize: 45 }}>TrackDetailScreen!</Text>
};




const styles = StyleSheet.create({

});



export default TrackDetailScreen;
