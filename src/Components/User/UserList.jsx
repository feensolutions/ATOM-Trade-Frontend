import React, { useContext ,useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
// Api import
import {UserContext} from '../../API'
const UserList=({query})=>{
    const[user,setUser]=useContext(UserContext)
    const[result,setResult]=useState([])

    const filterCollections=(filter)=>{
        let filteredItems=[]
        let filterQuery=filter.toLowerCase()
        user.forEach(i=>{
            if(i.first__name.toLowerCase().includes(filterQuery) || i.last__name.toLowerCase().includes(filterQuery)||i.email.toLowerCase().includes(filterQuery)||i.username.toLowerCase().includes(filterQuery)){
                
            filteredItems.push(i)
            
            }
           
        })
            

        return filteredItems
    }
    useEffect(()=>{
        if(query===""){
            let temp=[...user]
            setResult(temp)
        }
        else{
            let filteredRes=filterCollections(query)
            setResult(filteredRes)
        }
    },[query])
    return(
        <div className="consignment__list">
            {query!==""?<h4 className="text-center mx-4">Result for "{query}"</h4>:<h4 className="text-center mx-4">All Users</h4>}
            <hr/>
            <table className="table table-striped"> 
                <thead>
                  <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Contact Info</th>
                        <th>Last Active</th>
                        <th>User Privilege</th>
                        
                    </tr>
                   
                </thead>

                <tbody>
                    {result.map((item,id)=>
                        
                          <tr key={id} className="data">
                                <td><Link to={`/user/${item.username}`}>{id+1}</Link></td>
                    <td> <Link to={`/user/${item.username}`}>{item.first__name} {item.last__name}</Link> </td>
                    <td> <Link to={`/user/${item.username}`}>{item.email}</Link> </td>
                                <td><Link to={`/user/${item.username}`}>{item.username}</Link></td>
                                <td> <Link to={`/user/${item.username}`}>{item.contact__info}</Link> </td>
                                <td> <Link to={`/user/${item.username}`}>10 days ago</Link> </td>
                    <td> <Link to={`/user/${item.username}`}>{item.is__admin?<span className="badge badge-warning">Admin</span>:<span className="badge badge-info">Staff</span>}</Link> </td>
                            </tr>
                          
                             
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserList