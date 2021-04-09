import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
//importing navigationEvents from react-navigation
//this doesn't display anything by itself, but we can pass in some function that will get called
//ever time we navigate to or from the screen we are showing this component
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
//importing context object so we can have access to state and actions that modify it
import { Context as AuthContext } from "../context/AuthContext";



//onWillFocus() will be called any time we are about to navigate to this screen
//onDidFocus() will be called any time we successfully complete the navigation to this screen

//onWillBlur() will be called anytime we want to navigate away from this screen
//onDidBlur() will be called anytime we successfully go from the current screen


const SigninScreen = () => {

    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>

            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />

            <AuthForm
                headerText="Sign in to Tracker"
                errorMessage={state.errorMessage}
                buttonTitle="Sign in"
                //our function is getting called with an object that contains email and password,
                //then we call it and pass in the object with those properties
                onSubmitFunction={({ email, password }) => signin({ email, password })}
            />

            <NavLink
                headerText="Don't have an account? Sign up instead"
                screenName="Signup"
            />
        </View>
    );
};



SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 180,
        marginTop: 50,
        marginHorizontal: 10,
    }
});



export default SigninScreen;
