import React from "react";
import {Link} from 'react-router-dom'

import AddIcon from "@material-ui/icons/Add";
const CategoryNavbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="left">
          <a href="" className="navbar-brand">Categories</a>
        </div>
        <div className="middle">
          <form action="">
          <input type="text" className="form-control" placeholder="Search Category"/>
          </form>
        </div>
        <div className="right">
          <ul className="navbar-nav">
            <li className="nav-item"><Link to="/new_category" className="btn btn-success">New <AddIcon/> </Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CategoryNavbar;
