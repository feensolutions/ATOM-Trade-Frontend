import React,{useState,useEffect,useContext} from 'react'
import {Link} from 'react-router-dom'
// APi import
import {ConsignmentContext} from '../../API'
const ConsignmentList=({query})=>{
    const[consignment,setConsignment]=useContext(ConsignmentContext)
    const[result,setResult]=useState([])

    const filterCollections=(filterQuery)=>{
        let filteredItems=[]
        
        consignment.forEach(i=>{
            if(i.name.includes(filterQuery) || i.involved__bank.includes(filterQuery)||i.company__name.includes(filterQuery)||i.logistic__party.includes(filterQuery)||i.port.includes(filterQuery)||i.border.includes(filterQuery)||i.fiscal__year.includes(filterQuery)){
                
            filteredItems.push(i)
            
            }
           
        })
            

        return filteredItems
    }
    useEffect(()=>{
        if(query===""){
            let temp=[...consignment]
            setResult(temp)
        }
        else{
            let filteredRes=filterCollections(query)
            setResult(filteredRes)
        }
    },[query])
    return(
        <div className="consignment__list">
            {query!==""?<h4 className="text-center mx-4">Result for "{query}"</h4>:<h4 className="text-center mx-4">All Consignments</h4>}
                <hr/>
            <table className="table"> 
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Opening Date</th>
                        <th>Date of Arrival</th>
                        <th>Logistic Party</th>
                        <th>Cost</th>
                        <th>Fiscal Year</th>
                        
                    </tr>
                </thead>
                <tbody>
                        {result.map((item,id)=>
                            
                              <tr key={id} className="data">
                                    <td><Link to={`/consignment/${item.name}`}>{id+1}</Link></td>
                                    <td> <Link to={`/consignment/${item.name}`}>{item.name}</Link> </td>
                                    <td> <Link to={`/consignment/${item.name}`}>{item.opening__date} </Link> </td>
                                    <td> <Link to={`/consignment/${item.name}`}>{item.date__of__arrival} </Link> </td>
                                   
                                    <td> <Link to={`/consignment/${item.name}`}>{item.logistic__party} </Link> </td>
                                    <td> <Link to={`/consignment/${item.name}`}>${item.consignment__amount} </Link> </td>
                                    <td> <Link to={`/consignment/${item.name}`}>{item.fiscal__year} </Link> </td>
                                </tr>
                              
                                 
                            )
                        }
                    </tbody>
            </table>
        </div>
    )
}

export default ConsignmentList