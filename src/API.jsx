// This is API section

import React,{createContext, useState} from 'react'

const ProductContext=createContext()
const ConsignmentContext=createContext()
const CategoryContext=createContext()
const EngineContext=createContext()
const ModelContext=createContext()

// Product provider

export const ProductProvider=(props)=>{
    const [products,setProducts]=useState([])

    return <ProductContext.Provider value={[products,setProducts]}>
        {props.children}
    </ProductContext.Provider>
}


// Consignment provider

export const ConsignmentProvider=(props)=>{
    const [consignments,setConsignments]=useState([])
    return <ConsignmentContext.Provider value={[consignments,setConsignments]}>
        {props.children}
    </ConsignmentContext.Provider>
}


// Category Provider
export const CategoryProvider=(props)=>{
    const [category,setCategory]=useState([])
    return <CategoryContext.Provider value={[category,setCategory]}>
        {props.children}
    </CategoryContext.Provider>
}

// Model Provider
export const ModelProvider=(props)=>{
    const[model,setModel]=useState([])
    return <ModelContext.Provider value={[model,setModel]}>
        {props.children}
    </ModelContext.Provider>
}

// Engine Provider

export const EngineProvider=(props)=>{
    const[engine,setEngine]=useState([])

    return <EngineContext.Provider value={[engine,setEngine]}>
        {props.children}
    </EngineContext.Provider>
}