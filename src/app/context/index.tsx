"use client"
import {createContext, useContext} from 'react'

const AppContext = createContext("");


export function AppWrapper({children, value}:any) {

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}