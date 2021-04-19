import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";



const trackReducer = (state, action) => {

    switch (action.type) {

        case "fetch_tracks":
            return action.payload;
        default:
            break;
    }
};





//fetches all tracks from an API
const fetchTracks = dispatch => async () => {

    const response = await trackerAPI.get("/tracks");
    dispatch({ type: "fetch_tracks", payload: response.data });
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