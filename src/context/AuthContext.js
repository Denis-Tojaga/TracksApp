import createDataContext from "./createDataContext";


//creating a reducer function

const authReducer = (state, action) => {

    switch (action.type) {

        default:
            return state;
    }
};






//defining action functions that will somehow change our state object

//......




//function takes three arguments
//reducer function that is going to somehow change the state
//all function that are calling that reducer function
//initial state
export const { Provider, Context } = createDataContext(authReducer, {}, { isSignedIn: false });