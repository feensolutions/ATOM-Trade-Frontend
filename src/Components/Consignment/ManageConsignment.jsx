import React from 'react'
import './Consignment.css'

import ConsignmentList from './ConsignmentList'
import ConsignmentFilter from './ConsignmentFilter'
// Components import
import ConsignmentNavbar from './ConsignmentNavbar'
const ManageConsignment=()=>{
    return(
        <div className="manage__consignment mt-5">
           <h4 className="text-center mb-3">Manage Consignment</h4>
            <hr/>
            <ConsignmentNavbar/>

            <div className="consignments mt-4">
                <div className="row no-gutters">
                    <div className="col-md-12">
                        <div className="container">
                        <ConsignmentList/>
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

export default ManageConsignment