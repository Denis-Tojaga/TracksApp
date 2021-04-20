import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";
import Spacer from "../components/Spacer";
import { Entypo } from '@expo/vector-icons';



const TrackListScreen = ({ navigation }) => {

    const { state, fetchTracks } = useContext(TrackContext);

    return <>
        <NavigationEvents onWillFocus={() => fetchTracks()} />
        <Spacer />

        <FlatList

            showsVerticalScrollIndicator={false}

            data={state}

            keyExtractor={(item) => item._id}

            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate("TrackDetail", { _id: item._id })}>
                        <ListItem style={styles.item}>
                            <ListItem.Content style={styles.content}>
                                <ListItem.Title style={styles.title}>{item.name}</ListItem.Title>
                                <Entypo name="location-pin" style={styles.icon} />
                            </ListItem.Content>
                            <ListItem.Chevron size={40} color={"black"} />
                        </ListItem>
                    </TouchableOpacity>
                );
            }}
        />


    </>
};





//we use headerTitleStyle prop to modify the header 



TrackListScreen.navigationOptions = {
    title: "Tracks",
    headerTitleStyle: {
        flex: 1,
        textAlign: "center",
        fontSize: 18
    }
}







const styles = StyleSheet.create({

    item: {
        marginHorizontal: 12,
        marginVertical: 12,
    },

    content: {
        height: 150,
        backgroundColor: "rgb(68,131,181)",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 50,
        paddingHorizontal: 15
    },

    title: {
        alignSelf: "flex-start",
        marginRight: 50,
        fontSize: 25,
        fontFamily: "RalewayLight"
    },
    icon: {
        fontSize: 42,
        color: "black",
    }

});



export default TrackListScreen;
