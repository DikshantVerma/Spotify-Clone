import { Children, createContext, useContext, useReducer } from "react";

export const StateConetxt = createContext();

export const StateProvider = ({children, initialState, reducer}) => {
    <StateConetxt.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateConetxt.Provider>
}