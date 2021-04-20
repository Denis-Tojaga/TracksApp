import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
//we are importing this to make sure none of the content is showing up behind the status bar of the phone
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome } from '@expo/vector-icons';


const AccountScreen = () => {

    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{ top: "always" }} >
            <Text style={{ fontSize: 48 }} >Account Screen</Text>
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

});



export default AccountScreen;
