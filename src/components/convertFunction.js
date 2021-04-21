import { round } from "react-native-reanimated";


const deg2rad = (deg) => {
    return deg * (Math.PI / 180)
}

export default (lat1, lon1, lat2, lon2) => {
    var R = 6371; // Radius of the earth in km

    var dLat = deg2rad(lat2 - lat1);  // deg2rad above
    var dLon = deg2rad(lon2 - lon1);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));


    var distance = R * c; // Distance in km
    return Math.round(distance * 1000) / 1000;
}

