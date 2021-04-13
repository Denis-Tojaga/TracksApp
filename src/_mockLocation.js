//this is only a test user file thats going to mock out user's location
//we don't want to import this file in production
import * as Location from "expo-location";


//this represents 10 meters in longitude or longitude
const tenMetersWithDegrees = 0.0001;




const getLocation = (increment) => {

    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: -122.0312186 + increment * tenMetersWithDegrees,
            latitude: 37.33233141 + increment * tenMetersWithDegrees,
        }
    };
};



var counter = 0;



//so whenever we import this file in our project
//once every second we want to emit an event directly in the location library 
//and we are faking out the users location changing in the real world
setInterval(() => {
    Location.EventEmitter.emit("Expo.locationChanged", {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000);