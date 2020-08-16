import React, {createContext, useContext, useReducer} from 'react';

export const StateContext= createContext(); //prepares data layer

export const DataLayer = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useDataLayer = () => useContext(StateContext);
//reducer = listener