import React,{useState} from 'react'
import '../Consignment/Consignment.css'

// Components import
import ProductNavbar from './ProductNavbar'
import ProductList from './ProductList'
const ManageProduct=()=>{
    const [query,setQuery]=useState("")
    return(
        <div className="manage__consignment mt-5">
           <h4 className="text-center mb-3">Manage Product</h4>
            <hr/>
            <ProductNavbar query={query} setQuery={setQuery}/>

            <div className="consignments mt-4">
                <div className="row no-gutters">
                    <div className="col-md-12">
                        <div className="container">
                        <ProductList query={query}/>
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

export default ManageProduct