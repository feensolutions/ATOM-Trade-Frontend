import React, { useContext ,useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Invoice.css'
// Api import
import {CategoryContext} from '../../API'
const InvoiceList=({query})=>{
    const[category,setCategory]=useContext(CategoryContext)
    const[result,setResult]=useState([])

    useEffect(()=>{
        if(query===""){
            let temp=[...category]
            setResult(temp)
        }
        else{
            let filteredRes=category.filter(item=>{
                return item.name.toLowerCase().includes(query.toLowerCase())
            })
            setResult(filteredRes)
        }
    },[query])
    return(
        <div className="consignment__list">
            {query!==""?<h4 className="text-center mx-4">Result for "{query}"</h4>:<h4 className="text-center mx-4">Invoices</h4>}
            <hr/>
            <table className="table"> 
                <thead>
                  <tr>
                        <th>S.No</th>
                        <th>Client</th>
                        <th>Bill issued on</th>
                        <th>Bill Amount</th>
                        
                    </tr>
                   
                </thead>

                <tbody>
                    {result.map((item,id)=>
                        
                          <tr key={id} className="data">
                                <td><Link to={`/category/${item.name}`}>{id+1}</Link></td>
                                <td> <Link to={`/category/${item.name}`}>{item.name}</Link> </td>
                                <td> <Link to={`/category/${item.name}`}>10 </Link> </td>
                            </tr>
                          
                             
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default InvoiceList