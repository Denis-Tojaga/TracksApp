import { useState, useEffect } from "react";
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from "expo-location";


export default (callbackFunction) => {
    //state variable to track the helper function response
    const [err, setErr] = useState(null);


    //helper function to ask a user for permission to use location
    const startWatching = async () => {
        try {

            //checks if the user allowed the permissions
            const { granted } = await requestPermissionsAsync();

            //watches location of a user
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
                //dispatch function for adding new location
                callbackFunction(location);
            });


            if (!granted)
                throw new Error('Location permission not granted');

        } catch (err) {
            setErr(err);
        }
    };





    //we want to call this function only the first time a user comes in on this screen
    useEffect(() => {
        startWatching();
    }, []);





    //we return the array if we want to return more values in the future
    return [err];
};