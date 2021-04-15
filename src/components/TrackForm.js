import React from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";




const TrackForm = () => {
    return (
        <>
            <Spacer>
                <Input placeholder="Enter name of the track" />
            </Spacer>
            <Button title="Start recording" />
        </>
    );

};




export default TrackForm;