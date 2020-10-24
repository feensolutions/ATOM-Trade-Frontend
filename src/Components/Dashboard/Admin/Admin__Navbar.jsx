// Admin Dashboard
import React from "react";
import './Admin.css'
import Logo from '../../../Static/logo.png'
// Material Icons Import
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

// Components import
import AdminSecondaryNav from './Admin__SecondaryNav'
const AdminNav = () => {
  return (
    <div className="admin__nav">
      <nav class="navbar navbar-expand-md admin__menu">
        <div className="container">
         
          <a className="navbar-brand mx-auto" href="#">
          <img src={Logo} className="mr-3" alt=""/> ATOM Trade International Pvt. Ltd
          </a>
          
        </div>

       
      </nav>
     
    </div>
  );
};

export default AdminNav;
