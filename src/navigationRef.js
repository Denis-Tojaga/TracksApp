import { NavigationActions } from "react-navigation";


var navigator;


//this gets called with nav object which we assign to navigator variable
export const setNavigator = (nav) => {
    navigator = nav;
};



export const navigate = (screenName, params) => {
    navigator.dispatch(NavigationActions.navigate({ screenName: screenName, params: params }));
};