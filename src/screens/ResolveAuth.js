import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";

//we use this to check if theres a token inside of local storage so user don't see
//the singup screen in split second (because it was listed first in the navigator)

//this is going to be called before everything, basically the first screen
const ResolveAuthScreen = () => {

    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, []);

    return null;
};


export default ResolveAuthScreen;