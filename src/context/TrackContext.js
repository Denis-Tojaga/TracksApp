import createDataContext from "./createDataContext";



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
const createTrack = dispatch => () => {

};





export const { Provider, Context } = createDataContext(

    trackReducer,
    { fetchTracks, createTrack },
    []
);