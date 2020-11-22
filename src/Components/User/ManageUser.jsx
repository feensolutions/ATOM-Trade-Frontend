import React,{useState} from 'react'

import UserList from './UserList'

// Components import
import UserNavbar from './UserNavbar'
const ManageUser=()=>{
    const[query,setQuery]=useState("")
    return(
        <div className="manage__category mt-5">
           <h4 className="text-center mb-3">Manage User</h4>
            <hr/>
            <UserNavbar query={query} setQuery={setQuery}/>

            <div className="Categorys mt-4">
                <div className="row no-gutters">
                    <div className="col-md-12">
                        <div className="container">
                        <UserList query={query}/>
                        </div>
                        
                    </div>
                    {/* <div className="col-md-3">
                        <CategoryFilter/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ManageUser