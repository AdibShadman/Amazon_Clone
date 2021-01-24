//setup data layer
//track the basket
import React, { createContext, useContext, useReducer } from "react";
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Build a provider

export const useStateValue = () => useContext(StateContext);
