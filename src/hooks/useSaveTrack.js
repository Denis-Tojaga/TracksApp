//the idea of this hook is that is going to give as an abillity to save a track
//this will be the connectio between two contexts


import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";




export default () => {

    //extracting all data needed to save a track

    //action funcction for saving from Track Context
    const { createTrack } = useContext(TrackContext);

    //needed parameters that need to be saved from Location State
    const { name, locations } = useContext(LocationContext);


    const saveTrack = () => {
        createTrack(name, locations);
    };



    //returning a function that any component can use to save a track
    return [saveTrack];
};