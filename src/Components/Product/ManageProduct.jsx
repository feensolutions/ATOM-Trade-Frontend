import React from 'react'
import '../Consignment/Consignment.css'

// Components import
import ProductNavbar from './ProductNavbar'
import ProductList from './ProductList'
const ManageProduct=()=>{
    return(
        <div className="manage__consignment mt-5">
           <h4 className="text-center mb-3">Manage Product</h4>
            <hr/>
            <ProductNavbar/>

            <div className="consignments mt-4">
                <div className="row no-gutters">
                    <div className="col-md-12">
                        <div className="container">
                        <ProductList/>
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