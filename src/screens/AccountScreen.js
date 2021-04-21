import React, { useContext } from "react";
import { StyleSheet, Text, LogBox } from "react-native";
import { Button } from "react-native-elements";
//we are importing this to make sure none of the content is showing up behind the status bar of the phone
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome } from '@expo/vector-icons';


const AccountScreen = () => {

    //ignoring the logs for warnings
    LogBox.ignoreLogs([
        "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants).",
    ]);

    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{ top: "always" }} >
            <Spacer />
            <Text style={styles.header} >Account Info</Text>
            <Spacer>
                <Button
                    title="Sign Out"
                    onPress={() => signout()}
                />
            </Spacer>
        </SafeAreaView>
    );
};



AccountScreen.navigationOptions = {
    tabBarIcon: <FontAwesome name="gear" size={27} color="black" />
};




const styles = StyleSheet.create({

    header: {
        fontSize: 38,
        fontFamily: "RalewayLight",
        textAlign: "center"
    }

});



export default AccountScreen;
