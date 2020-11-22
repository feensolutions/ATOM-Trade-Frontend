import React,{useState} from 'react'
import InvoiceNavbar from './InvoiceNavbar'
import InvoiceList from './InvoiceList'
const ManageInvoice=()=>{
    const[query,setQuery]=useState("")
    return(
        <div className="manage__category mt-5">
           <h4 className="text-center mb-3">Manage Invoice</h4>
            <hr/>
            <InvoiceNavbar query={query} setQuery={setQuery}/>

            <div className="Categorys mt-4">
                <div className="row no-gutters">
                    <div className="col-md-12">
                        <div className="container">
                        <InvoiceList query={query}/>
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

export default ManageInvoice