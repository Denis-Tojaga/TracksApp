import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Spacer from "./Spacer";
//by importing this function we can access navigation.navigate function inside child component without passing in an argument function
//we use this only for child components where they have access to props object every component gets when created
import { withNavigation } from "react-navigation";



const NavLink = ({ navigation, headerText, screenName }) => {

    console.log(navigation);

    return (
        <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
            <Spacer>
                <Text style={styles.link}>{headerText}</Text>
            </Spacer>
        </TouchableOpacity>
    );

};




const styles = StyleSheet.create({
    link: {
        fontSize: 17,
        fontWeight: "600",
        color: "rgb(34, 137, 220)",
        fontStyle: "italic",
        textAlign: "center"
    }
});


//now every time our NavLink gets rendered it will have the {navigation} object prop from its parent
export default withNavigation(NavLink);