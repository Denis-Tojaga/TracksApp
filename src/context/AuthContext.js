import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";


//creating a reducer function

const authReducer = (state, action) => {

    switch (action.type) {

        case "add_error":
            return { ...state, errorMessage: action.payload };

        default:
            return state;
    }
};






//defining action functions that will somehow change our state object
const signup = (dispatch) => {

    return async ({ email, password }) => {
        //make api req to signup with this email and password
        try {

            const response = await trackerApi.post("/signup", { email, password });
            console.log(response.data);

        } catch (error) {
            dispatch({ type: "add_error", payload: "Something went wrong with sign up!" })
        }







        //if we sign up, modify our state, and say we are authenticated


        //if signingup fails, we problably need to reflect error message 
    };
}







const signin = (dispatch) => {

    return ({ email, password }) => {
        //Try to singin
        //handle success by updating state
        //handle error by showin an error message
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
    { isSignedIn: false, errorMessage: "" });