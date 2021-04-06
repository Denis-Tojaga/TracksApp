import AsyncStorage from "@react-native-community/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";


//creating a reducer function

const authReducer = (state, action) => {

    switch (action.type) {

        case "signup":
            return { errorMessage: "", token: action.payload };
        case "singin":
            return { errorMessage: "", token: action.payload };
        case "add_error":
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};






//defining action functions that will somehow change our state object
const signup = (dispatch) => {
    return async ({ email, password }) => {
        try {

            const response = await trackerApi.post("/signup", { email, password });

            //we set our token from the api to our storage
            await AsyncStorage.setItem("token", response.data.token);



            //as we got the token that means that user is successfully signed so we change our state value
            //because token is going to determine whether we are signed in or not
            dispatch({ type: "signup", payload: response.data.token });



            //after we successfully signed we want to navigate to TrackListScreen
            navigate("TrackList");

        } catch (error) {

            //dispatching a function that will show us ErrorMessage
            dispatch({ type: "add_error", payload: "Something went wrong with sign up!" })
        }
    };
};










const signin = (dispatch) => {

    return async ({ email, password }) => {

        try {

            const response = await trackerApi.post("/signin", { email, password });
            await AsyncStorage.setItem("token", response.data.token);
            dispatch({ type: "signin", payload: response.data.token });
            navigate("TrackList");

        } catch (error) {
            dispatch({ type: "add_error", payload: "Something went wrong with sign in!" });
        }

    };
};







const signout = (dispatch) => {
    return () => {
        //sign out somehow
    }
};











//function takes three arguments
//reducer function that is going to somehow change the state
//all function that are calling that reducer function
//initial state
export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { token: null, errorMessage: "" });