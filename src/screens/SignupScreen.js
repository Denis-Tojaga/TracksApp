import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
//importing pre-build elements with some style, in the docs you can find more about its props
import { Button, Text, Input } from "react-native-elements";
//we use spacer component to automatically get some margin around different components
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";



const SignupScreen = ({ navigation }) => {

    //user can either signup successfully or not,
    //if not we will show an error message
    //if success occured we will take the JWT token and store it on the device

    //to store information on local device after restarting an app
    //we use ASYNC STORAGE, which has couple of methods for storing data
    //AsyncStorage was removed from RN standard library, so we have to install it
    // npm install npm install @react-native-community/async-storage



    //destructurize the signup method so we can use it on button press
    const { state, signup } = useContext(AuthContext);





    return <View style={styles.container}>


        <AuthForm
            headerText="Sign Up for Tracker"
            errorMessage={state.errorMessage}
            buttonTitle="Sign Up"
            //our function is getting called with an object that contains email and password,
            //then we call it and pass in the object with those properties
            onSubmitFunction={({ email, password }) => signup({ email, password })}
        />



        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
            <Spacer>
                <Text style={styles.link}>Already have an account? Sign in instead</Text>
            </Spacer>
        </TouchableOpacity>


    </View>

};




//we use navigationOptions to return an object which will change the way stack navigator shows this screen
//in order to see changes when modifying header you need to refresh the whole app
//if we aren't passing any props we can just set navigationOptions as our config.object 
SignupScreen.navigationOptions = {
    headerShown: false
};





const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 200
    },

    link: {
        fontSize: 17,
        fontWeight: "600",
        color: "rgb(34, 137, 220)",
        fontStyle: "italic",
        textAlign: "center"
    }

});



export default SignupScreen;
