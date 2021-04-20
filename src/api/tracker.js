import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";


//everytime we start ngrok from our machine,we need to change this baseURL
//just copy the one from forwarding parameter
const instance = axios.create({
    baseURL: "http://5f5e047ff2cf.ngrok.io"
});



//first function is going to get called automatically anytime we want to make a request
// ---|| -- anytime there is an error with our request


//config object has some information about the request we are gonna made
instance.interceptors.request.use(

    async (config) => {

        const token = await AsyncStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },

    //error handling function
    (err) => {
        return Promise.reject(err);
    }
);





export default instance;