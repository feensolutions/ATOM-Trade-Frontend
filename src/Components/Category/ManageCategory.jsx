import React,{useState} from 'react'
import './Category.css'

import CategoryList from './CategoryList'
import CategoryFilter from './CategoryFilter'
// Components import
import CategoryNavbar from './CategoryNavbar'
const ManageCategory=()=>{
    const[query,setQuery]=useState("")
    return(
        <div className="manage__category mt-5">
           <h4 className="text-center mb-3">Manage Category</h4>
            <hr/>
            <CategoryNavbar query={query} setQuery={setQuery}/>

            <div className="Categorys mt-4">
                <div className="row no-gutters">
                    <div className="col-md-12">
                        <div className="container">
                        <CategoryList query={query}/>
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