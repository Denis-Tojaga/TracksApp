import React from "react";
import { View, StyleSheet } from "react-native";
//importing pre-build elements with some style, in the docs you can find more about its props
import { Button, Text, Input } from "react-native-elements";
//we use spacer component to automatically get some margin around different components
import Spacer from "../components/Spacer";


const SignupScreen = ({ navigation }) => {

    return <>
        <Spacer />
        <Spacer>
            <Text h3 style={styles.header}>Sign Up for Tracker</Text>
        </Spacer>

        <Input label="Email" />
        <Spacer />
        <Input label="Password" />

        <Spacer>
            <Button title="Sign Up" />
        </Spacer>
    </>

};




//we use navigationOptions to return an object which will change the way stack navigator shows this screen
//in order to see changes when modifying header you need to refresh the whole app
//if we aren't passing any props we can just set navigationOptions as our config.object 
SignupScreen.navigationOptions = {
    headerShown: false
};





const styles = StyleSheet.create({
    header: {
        textAlign: "center"
    }
});



export default SignupScreen;
