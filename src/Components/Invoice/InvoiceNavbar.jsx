import React, { useState } from "react";
import {Link} from 'react-router-dom'

import AddIcon from "@material-ui/icons/Add";
const InvoiceNavbar = ({query,setQuery}) => {

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="left">
          <Link to="/manage_invoice" className="navbar-brand">Invoices</Link>
        </div>
        <div className="middle">
          <form action="">
          <input type="text" className="form-control" placeholder="Search Invoice" value={query} onChange={e=>setQuery(e.target.value)}/>
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

export default InvoiceNavbar;