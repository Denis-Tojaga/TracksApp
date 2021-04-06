import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";


const SigninScreen = () => {

    const { state, signup } = useContext(AuthContext);

    return (
        <View style={styles.container}>

            <AuthForm
                headerText="Sign in to Tracker"
                errorMessage={state.errorMessage}
                buttonTitle="Sign in"
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
        marginHorizontal: 20,
    }
});



export default SigninScreen;
