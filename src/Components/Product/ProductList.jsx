import React from 'react'

const ProductList=()=>{
    return(
        <div className="consignment__list">
            <table className="table"> 
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Stock Qty</th>
                        <th>Remaining Qty</th>
                        <th>Cost Price</th>
                        <th>Selling Price</th>
                        
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default ProductList