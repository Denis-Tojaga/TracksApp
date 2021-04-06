import React, { useState } from "react";
import { Text, Button, Input } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import Spacer from "./Spacer";


const AuthForm = ({ headerText, errorMessage, buttonTitle, onSubmitFunction }) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <Spacer />

            <Spacer>
                <Text h2 style={styles.header}>{headerText}</Text>
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

            { errorMessage != null ? <Text style={styles.error}>{errorMessage}</Text> : null}

            <Spacer>
                <Button
                    title={buttonTitle}
                    //by pressing the button we are calling onSubmitFunction which takes email and password as an arguments
                    onPress={() => onSubmitFunction({ email, password })}
                />
            </Spacer>
        </>
    );



};



const styles = StyleSheet.create({
    error: {
        fontSize: 16,
        color: "red",
        textAlign: "center",
        fontStyle: "italic"
    },
    header: {
        textAlign: "center"
    },
});


export default AuthForm;