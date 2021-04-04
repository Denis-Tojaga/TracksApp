//the use of this component is to apply some margin to its child component

import React from "react";
import { View, StyleSheet } from "react-native";




const Spacer = ({ children }) => {


    return (
        <View style={styles.spacer}>
            {children}
        </View>
    );

};


const styles = StyleSheet.create({
    spacer: {
        margin: 17,
    }

});


export default Spacer;