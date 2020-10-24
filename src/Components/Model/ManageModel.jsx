import React from 'react'
import './Model.css'

import ModelList from './ModelList'
import ModelFilter from './ModelFilter'
// Components import
import ModelNavbar from './ModelNavbar'
const ManageModel=()=>{
    return(
        <div className="manage__model mt-5">
           <h4 className="text-center mb-3">Manage Model</h4>
            <hr/>
            <ModelNavbar/>

            <div className="models mt-4">
                <div className="row no-gutters">
                    <div className="col-md-12">
                        <div className="container">
                        <ModelList/>
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

export default ManageModel