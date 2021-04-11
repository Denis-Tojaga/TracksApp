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
        case "clear_error":
            return { ...state, errorMessage: "" };
        case "signout":
            return { token: null, errorMessage: "" };

        default:
            return state;
    }
};




//automatical signin from local storage
const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem("token");

    //if token exists dispatch a singin function with that extracted token
    if (token) {
        dispatch({ type: "signin", payload: token });

        //changed to TrackCreate because of the error, valid thing is TrackList
        navigate("TrackCreate");
    } else {
        navigate("loginFlow");
    }

};





//dispatch function that clears out the error message when switching between screens
const clearErrorMessage = (dispatch) => () => {
    dispatch({
        type: "clear_error",
    });
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





//if we already have an account we can sign in with it
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







//if we want to sign out we just need to delete that verification token from async storage
const signout = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem("token");
        dispatch({ type: "signout" });
        navigate("Signup");
    }
};











//function takes three arguments
//reducer function that is going to somehow change the state
//all function that are calling that reducer function
//initial state
export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: "" });