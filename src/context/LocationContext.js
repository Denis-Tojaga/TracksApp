import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {

    switch (action.type) {
        case "add_current_location":
            return { ...state, currentLocation: action.payload };
        default:
            break;
    }
};





//actions functions that we will be using from this context
const startRecording = dispatch => () => { };
const stopRecording = dispatch => () => { };






//updating the current location property
//takes a new location and sends it as a payload to reducer function
const addLocation = dispatch => (newLocation) => {
    dispatch({ type: "add_current_location", payload: newLocation });
};





//we are again sending some information for our file to create context
//we send logic function that does the work,
//action functions that will get called
//state object with all its props
export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation },
    { recording: false, locations: [], currentLocation: null }
);