import React, { useContext ,useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
// Api import
import {UserContext} from '../../API'
const UserList=({query})=>{
    const[user,setUser]=useContext(UserContext)
    const[result,setResult]=useState([])

    useEffect(()=>{
        if(query===""){
            let temp=[...user]
            setResult(temp)
        }
        else{
            let filteredRes=user.filter(item=>{
                return item.name.toLowerCase().includes(query.toLowerCase())
            })
            setResult(filteredRes)
        }
    },[query])
    return(
        <div className="consignment__list">
            {query!==""?<h4 className="text-center mx-4">Result for "{query}"</h4>:<h4 className="text-center mx-4">All Users</h4>}
            <hr/>
            <table className="table"> 
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
                                <td><Link to={`/category/${item.name}`}>{id+1}</Link></td>
                    <td> <Link to={`/category/${item.name}`}>{item.first__name} {item.last__name}</Link> </td>
                    <td> <Link to={`/category/${item.name}`}>{item.email}</Link> </td>
                                <td><Link to={`/category/${item.name}`}>{item.username}</Link></td>
                                <td> <Link to={`/category/${item.name}`}>{item.contact__info}</Link> </td>
                                <td> <Link to={`/category/${item.name}`}>10 days ago</Link> </td>
                    <td> <Link to={`/category/${item.name}`}>{item.is__admin?"Admin":"Staff"}</Link> </td>
                            </tr>
                          
                             
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserList