import React from "react";
import "./Admin.css";
import {Link} from 'react-router-dom'
const AdminSecondaryNav = () => {
  return (
    <div className="admin__secondarynav">

        <nav className="navbar navbar-expand-md">
            <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>

            {/* Sales Menu */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sales
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  New Invoice
                </a>
                <a className="dropdown-item" href="#">
                  Manage Invoice
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
               Inventory
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="/add_product">
                  Add Product
                </Link>
                <Link className="dropdown-item" to="/manage_product">
                  Manage Product
                </Link>
                <Link className="dropdown-item" to="/manage_consignment">
                  Manage Consignment
                </Link>
                
                <Link className="dropdown-item" to="/manage_category">
                 Manage Category
                </Link>
                <Link className="dropdown-item" to="/manage_model">
                  Manage Model
                </Link>
                
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Clients
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Add Client
                </a>
                <a className="dropdown-item" href="#">
                  Manage Client
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>

          </ul>
          </div>
        </nav>
        
    </div>
  );
};

export default AdminSecondaryNav;
