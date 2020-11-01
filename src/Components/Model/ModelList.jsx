import React, { useContext, useEffect, useState } from 'react'
import {ModelContext} from '../../API'
import {Link} from 'react-router-dom'
const ModelList=({query})=>{

    const[model,setModel]=useContext(ModelContext)
    const[result,setResult]=useState([])

    useEffect(()=>{
        if(query===""){
            let temp=[...model]
            setResult(temp)
        }
        else{
            let filteredRes=model.filter(item=>{
                return item.name.toLowerCase().includes(query.toLowerCase())
            })
            setResult(filteredRes)
        }
    },[query])
    
        return(
            <div className="consignment__list">
                {query!==""?<h4 className="text-center mx-4">Result for "{query}"</h4>:<h4 className="text-center mx-4">All Models</h4>}
                <hr/>
                <table className="table"> 
                    <thead>
                      <tr>
                            <th>S.No</th>
                            <th>Model</th>
                            <th>Number of Items</th>
                            
                        </tr>
                       
                    </thead>
    
                    <tbody>
                        {result.map((item,id)=>
                            
                              <tr key={id} className="data">
                                    <td><Link to={`/model/${item.name}`}>{id+1}</Link></td>
                                    <td> <Link to={`/model/${item.name}`}>{item.name}</Link> </td>
                                    <td> <Link to={`/model/${item.name}`}>10 </Link> </td>
                                </tr>
                              
                                 
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    
    
  
}

export default ModelList