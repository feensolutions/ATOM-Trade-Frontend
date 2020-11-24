import React,{useState,useEffect,useContext} from 'react'
import {Link} from 'react-router-dom'
// APi import
import {ClientContext} from './ClientAPI'
const ClientList=({query})=>{
    const[client,setClient]=useContext(ClientContext)
    const[result,setResult]=useState([])

    const filterCollections=(filter)=>{
        let filteredItems=[]
        let filterQuery=filter.toLowerCase()
        client.forEach(i=>{
            if(i.company__name.toLowerCase().includes(filterQuery) || i.proprieter.toLowerCase().includes(filterQuery)||i.address.toLowerCase().includes(filterQuery)||i.email.toLowerCase().includes(filterQuery)||i.contact__info.toLowerCase().includes(filterQuery)||i.mobile__number.toLowerCase().includes(filterQuery)){
                
            filteredItems.push(i)
            
            }
           
        })
            

        return filteredItems
    }
    useEffect(()=>{
        if(query===""){
            let temp=[...client]
            setResult(temp)
        }
        else{
            let filteredRes=filterCollections(query)
            setResult(filteredRes)
        }
    },[query])
    return(
        <div className="client__list">
            {query!==""?<h4 className="text-center mx-4">Result for "{query}"</h4>:<h4 className="text-center mx-4">All Clients</h4>}
                <hr/>
            <table className="table"> 
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Company</th>
                        <th>Proprieter</th>
                        <th>Contact Number</th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Balance Amount</th>
                        
                    </tr>
                </thead>
                <tbody>
                        {result.map((item,id)=>
                            
                              <tr key={id} className="data">
                                    <td><Link to={`/client/${item.company__name}`}>{id+1}</Link></td>
                                    <td> <Link to={`/client/${item.company__name}`}>{item.company__name}</Link> </td>
                                    <td> <Link to={`/client/${item.company__name}`}>{item.proprieter} </Link> </td>
                                    <td> <Link to={`/client/${item.company__name}`}>{item.contact__info} </Link> </td>
                                   
                                    <td> <Link to={`/client/${item.company__name}`}>{item.mobile__number} </Link> </td>
                                    <td> <Link to={`/client/${item.company__name}`}>${item.email} </Link> </td>
                                    <td> <Link to={`/client/${item.company__name}`}>{item.address} </Link> </td>
                                    <td> <Link to={`/client/${item.company__name}`}>{item.closing__balance} </Link> </td>
                                </tr>
                              
                                 
                            )
                        }
                    </tbody>
            </table>
        </div>
    )
}

export default ClientList