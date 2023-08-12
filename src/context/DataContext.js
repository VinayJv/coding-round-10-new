import { createContext, useContext, useReducer } from "react";
import { database } from "../data/Data";

const DataContext = createContext(null);

export function DataWrapper({children}){

    const reducerFunction = (state, {type, payload}) => {
        switch(type){
            case "ADD_NEW_PRODUCT":
                return {...state, data: [...state.data, payload]};
            default:
                return {...state};
        }
    }

    const [state, dispatch] = useReducer(reducerFunction, { data: database});

    return(<DataContext.Provider value={{state, dispatch}}>{children}</DataContext.Provider>)
}

export const useDataContext = () => useContext(DataContext);