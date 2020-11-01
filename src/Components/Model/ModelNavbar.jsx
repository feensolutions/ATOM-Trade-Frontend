import React from "react";
import {Link} from 'react-router-dom'

import AddIcon from "@material-ui/icons/Add";
const ModelNavbar = ({query,setQuery}) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="left">
          <Link to="/manage_model" className="navbar-brand">Models</Link>
        </div>
        <div className="middle">
          <form action="">
          <input type="text" className="form-control" placeholder="Search model" value={query} onChange={e=>setQuery(e.target.value)}/>
          </form>
        </div>
        <div className="right">
          <ul className="navbar-nav">
            <li className="nav-item"><Link to="/new_model" className="btn btn-success">New <AddIcon/> </Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ModelNavbar;
