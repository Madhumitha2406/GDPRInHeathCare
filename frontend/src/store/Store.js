import React, { createContext, useReducer } from "react";
import Reducer from './Reducer'


const initialState = {
    doctor: [],
    docsumentsData: [],
    selectedCat: '',
    bookingStep: 1,
    selectedDay: '',
    doctorData: [],
    loading: false,
    reload: false,
    openSnack: false,
    patientAppos: []
};

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;