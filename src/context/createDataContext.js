import React, { useReducer } from "react";



//we are exporting a function that is going to get called with those three parameters
export default (reducer, actions, defaultState) => {

    const Context = React.createContext();

    const Provider = ({ children }) => {
        //dispatch is a function that we can call some action object
        //whenever we do that,react is gonna automatically take that action object and send it to reducerFunction for us
        const [state, dispatch] = useReducer(reducer, defaultState);


        //boundActions are actions that we'll use to somehow change our state
        const boundActions = {};
        for (var key in actions)
            boundActions[key] = actions[key](dispatch);


        return (
            //this value will be available to all the child components that provider wraps
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        );
    };


    //provider is a component thats going to make our data available everywhere inside of our app
    //context is a context object that we are going to use to get access to that info from our child components
    return { Context: Context, Provider: Provider };

};