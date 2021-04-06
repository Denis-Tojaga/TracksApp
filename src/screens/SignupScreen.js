import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
//we use spacer component to automatically get some margin around different components
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";



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

    return (
        <View style={styles.container}>

            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                buttonTitle="Sign Up"
                //our function is getting called with an object that contains email and password,
                //then we call it and pass in the object with those properties
                onSubmitFunction={({ email, password }) => signup({ email, password })}
            />

            <NavLink
                headerText="Already have an account? Sign in instead"
                screenName="Signin"
            />
        </View>
    );
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
        marginBottom: 180,
        marginTop: 50,
        marginHorizontal: 20,
    }
});



export default SignupScreen;
