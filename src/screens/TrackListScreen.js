import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";
import Spacer from "../components/Spacer";



const TrackListScreen = ({ navigation }) => {

    const { state, fetchTracks } = useContext(TrackContext);

    return <>
        <NavigationEvents onWillFocus={() => fetchTracks()} />
        <Text style={{ fontSize: 45 }}>TrackListScreen!</Text>
        <Spacer />

        <FlatList
            data={state}

            keyExtractor={(item) => item._id}

            renderItem={({ item }) => {
                return (
                    <TouchableOpacity>
                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title>{item.name}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    </TouchableOpacity>
                );
            }}
        />





    </>
};




const styles = StyleSheet.create({

});



export default TrackListScreen;
