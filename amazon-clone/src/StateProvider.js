import React, {createContext, useReducer, useContext } from "react";

// Prapare DataLayer
export const StateContext = createContext();

// Wrap our app and provides the data layer
export const StateProvider = ({reducer, initialState, children }) => (

<StateContext.Provider value = {useReducer(reducer , initialState)} >
{children}
</StateContext.Provider> 
);


// Pull information from DataLayer
export const useStateValue = () => useContext(StateContext);