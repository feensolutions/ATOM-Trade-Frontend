import React, { useState } from 'react'
import './Client.css'

import ClientList from './ClientList'
import ClientFilter from './ClientFilter'
// Components import
import ClientNavbar from './ClientNavbar'
const ManageClient=()=>{
    const[query,setQuery]=useState("")
    return(
        <div className="manage__client mt-5">
           <h4 className="text-center mb-3">Manage Client</h4>
            <hr/>
            <ClientNavbar query={query} setQuery={setQuery}/>

            <div className="clients mt-4">
                <div className="row no-gutters">
                    <div className="col-md-12">
                        <div className="container">
                        <ClientList query={query}/>
                        </div>
                        
                    </div>
                    {/* <div className="col-md-3">
                        <ConsignmentFilter/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ManageClient