import React, { useContext } from "react";
import { Input, Button, Text } from "react-native-elements";
import { TouchableOpacity, StyleSheet } from "react-native";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import { Ionicons } from '@expo/vector-icons';
import { LocationSubscriber } from "expo-location/build/LocationSubscribers";




const TrackForm = () => {

    const { state, startRecording, stopRecording, changeName } = useContext(LocationContext);

    var recordingFlag = state.recording;
    var numberOfLocations = state.locations.length;


    const buttonDisplaying = (recordingFlag) => {

        if (recordingFlag) {
            return <TouchableOpacity style={styles.touchable} onPress={stopRecording}>
                <Text h4 style={styles.text}>Stop recording</Text>
                <Ionicons style={styles.icon} name="stop-circle" />
            </TouchableOpacity>

        } else {
            return <TouchableOpacity style={styles.touchable} onPress={startRecording}>
                <Text h4 style={styles.text}>Start recording</Text>
                <Ionicons style={styles.icon} name="play" />
            </TouchableOpacity>
        }
    };



    const saveRecordingButton = (recordingFlag, numberOfLocations) => {

        return !recordingFlag && numberOfLocations ?
            <TouchableOpacity style={styles.touchable} onPress={() => { }}>
                <Text h4 style={styles.text}>Save track</Text>
                <Ionicons style={styles.icon} name="checkmark-done-sharp" />
            </TouchableOpacity> : null;
    };



    return (
        <>
            <Spacer />
            <Input
                value={state.name}
                onChangeText={changeName}
                placeholder="Enter name of the track" />

            {buttonDisplaying(state.recording)}

            {saveRecordingButton(recordingFlag, numberOfLocations)}

        </>
    );

};




const styles = StyleSheet.create({
    touchable: {
        marginHorizontal: 10,
        height: 45,
        borderRadius: 12,
        backgroundColor: "#2289dc",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 7.5,
        marginBottom: 10
    },

    text: {
        alignSelf: "center",
        marginLeft: 100,
        color: "white"
    },

    icon: {
        alignSelf: "center",
        marginRight: 10,
        fontSize: 30,
        color: "white"
    }
});





export default TrackForm;