import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {

    switch (action.type) {
        case "add_current_location":
            return { ...state, currentLocation: action.payload };
        case "start_recording":
            return { ...state, recording: true };
        case "stop_recording":
            return { ...state, recording: false };

        //here we want to add new location to an array if a user started recording
        //so we return new state with location prop updated to a new array with added action.payload
        case "add_location_to_array":
            return { ...state, locations: [...state.locations, action.payload] };

        case "change_track_name":
            return { ...state, name: action.payload };

        case "reset":
            return { ...state, name: "", locations: [] };

        default:
            break;
    }
};




const changeName = dispatch => (newName) => {
    dispatch({ type: "change_track_name", payload: newName });
};




//actions functions that we will be using from this context
const startRecording = dispatch => () => {
    dispatch({ type: "start_recording" });
};





const stopRecording = dispatch => () => {
    dispatch({ type: "stop_recording" });
};






//updating the current location property
//takes a new location and sends it as a payload to reducer function
const addLocation = dispatch => (newLocation, recording) => {

    dispatch({ type: "add_current_location", payload: newLocation });

    if (recording) {
        dispatch({ type: "add_location_to_array", payload: newLocation });
    }
};






const reset = dispatch => () => {
    dispatch({ type: "reset" });
};




//we are again sending some information for our file to create context
//we send logic function that does the work,
//action functions that will get called
//state object with all its props
export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation, changeName, reset },
    { name: "", recording: false, locations: [], currentLocation: null }
);