import React from 'react'

const ConsignmentList=()=>{
    return(
        <div className="consignment__list">
            <table className="table"> 
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Opening Date</th>
                        <th>Date of Arrival</th>
                        <th>Cost</th>
                        
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default ConsignmentList