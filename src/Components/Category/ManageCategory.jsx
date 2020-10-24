import React from 'react'
import './Category.css'

import CategoryList from './CategoryList'
import CategoryFilter from './CategoryFilter'
// Components import
import CategoryNavbar from './CategoryNavbar'
const ManageCategory=()=>{
    return(
        <div className="manage__Category mt-5">
           <h4 className="text-center mb-3">Manage Category</h4>
            <hr/>
            <CategoryNavbar/>

            <div className="Categorys mt-4">
                <div className="row no-gutters">
                    <div className="col-md-12">
                        <div className="container">
                        <CategoryList/>
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

export default ManageCategory