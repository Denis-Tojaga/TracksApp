import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";


const SignupScreen = ({ navigation }) => {

    return <>

        <Text style={{ fontSize: 45 }}>SignupScreen!</Text>
        <Button title="Go to sign in screen!"
            onPress={() => navigation.navigate("Signin")}
        />


        <Button title="Go to main flow!"
            //by pressing go to main flow we want to switch to another navigator
            //which has trackFlow and 2 more screens
            onPress={() => navigation.navigate("mainFlow")}
        />

    </>

};




const styles = StyleSheet.create({

});



export default SignupScreen;
