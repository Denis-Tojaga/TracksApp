import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
//importing pre-build elements with some style, in the docs you can find more about its props
import { Button, Text, Input } from "react-native-elements";
//we use spacer component to automatically get some margin around different components
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";


const SignupScreen = ({ navigation }) => {

    //destructurize the signup method so we can use it on button press

    //user can either signup successfully or not,
    //if not we will show an error message
    //if success occured we will take the JWT token and store it on the device


    //to store information on local device after restarting an app
    //we use ASYNC STORAGE, which has couple of methods for storing data
    //AsyncStorage was removed from RN standard library, so we have to install it
    // npm install npm install @react-native-community/async-storage
    const { state, signup } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    return <View style={styles.container}>

        <Spacer />
        <Spacer>
            <Text h2 style={styles.header}>Sign Up for Tracker</Text>
        </Spacer>

        <Input label="Email"
            value={email}
            onChangeText={(newEmail) => setEmail(newEmail)}
            autoCapitalize="none"
            autoCorrect={false}
        />

        <Spacer />

        <Input label="Password"
            value={password}
            onChangeText={(newPassword) => setPassword(newPassword)}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
        />

        {state.errorMessage != null ? <Text style={styles.error}>{state.errorMessage}</Text> : null}

        <Spacer>
            <Button title="Sign Up" onPress={() => signup({ email, password })} />
        </Spacer>
    </View>

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
    },
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 200
    },
    error: {
        fontSize: 16,
        color: "red",
        textAlign: "center"
    }
});



export default SignupScreen;
