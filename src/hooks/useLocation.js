import { useState, useEffect } from "react";
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from "expo-location";


export default (trackUser, callbackFunction) => {
    //state variable to track the helper function response
    const [err, setErr] = useState(null);

    const [subscriber, setSubscriber] = useState(null);



    //helper function to ask a user for permission to use location
    const startWatching = async () => {
        try {

            //checks if the user allowed the permissions
            const { granted } = await requestPermissionsAsync();

            //watches location of a user
            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
                //this calls addLocation from TrackCreateScreen
                callbackFunction(location);
            });


            setSubscriber(sub);


            if (!granted)
                throw new Error('Location permission not granted');

        } catch (err) {
            setErr(err);
        }
    };



    //we want to call this function only the first time a user comes in on this screen
    //by adding value inside of an array we are telling we might wanna call this function more than once 
    useEffect(() => {

        //here we decide if we want to track users location or stop watching
        if (trackUser) {
            startWatching();
        } else {
            setSubscriber(null);
        }


        //cleanUpFunction that prevents us from tracking users location all the time
        //after every startWatching we are removing that subscriber 
        return () => {
            if (subscriber)
                subscriber.remove();
        };



    }, [trackUser]);


    //we return the array if we want to return more values in the future
    return [err];
};