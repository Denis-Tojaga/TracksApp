import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";



const trackReducer = (state, action) => {

    switch (action.type) {


        default:
            break;
    }
};





//fetches all tracks from database
const fetchTracks = dispatch => () => {

};






//creates a track and saves it in MongoDB
const createTrack = dispatch => async (name, locations) => {
    //making a post request to an API
    await trackerAPI.post("/tracks", { name, locations });
};





export const { Provider, Context } = createDataContext(

    trackReducer,
    { fetchTracks, createTrack },
    []
);