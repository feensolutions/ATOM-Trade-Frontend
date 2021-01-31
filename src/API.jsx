import React, {useState,createContext} from 'react'

// Company API
export const CompanyContext=createContext()

// Company provider

export const CompanyProvider=(props)=>{
    const[companies,setCompany]=useState([])
    return(
        <CompanyContext.Provider value={[companies,setCompany]}>
            {props.children}
        </CompanyContext.Provider>
    )
}