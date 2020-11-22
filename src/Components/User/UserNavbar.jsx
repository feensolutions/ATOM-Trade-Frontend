import React, { useState } from "react";
import {Link} from 'react-router-dom'

import AddIcon from "@material-ui/icons/Add";
const UserNavbar = ({query,setQuery}) => {

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="left">
          <Link to="/manage_category" className="navbar-brand">Users</Link>
        </div>
        <div className="middle">
          <form action="">
          <input type="text" className="form-control" placeholder="Search User" value={query} onChange={e=>setQuery(e.target.value)}/>
          </form>
        </div>
        <div className="right">
          <ul className="navbar-nav">
            <li className="nav-item"><Link to="/new_user" className="btn btn-success">New <AddIcon/> </Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
