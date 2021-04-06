import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
//importing context object so we can have access to state and actions that modify it
import { Context as AuthContext } from "../context/AuthContext";


const SigninScreen = () => {

    const { state, signin } = useContext(AuthContext);

    return (
        <View style={styles.container}>

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
