"use client";
import StoreProvider from "@/state/redux"
import React from "react"

export const Providers = ({children}:{children : React.ReactNode}) =>{
    return(
        <StoreProvider>
            {children}
        </StoreProvider>
    
    )
}