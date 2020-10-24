// Admin Dashboard
import React from "react";
import './Admin.css'
// Componets Import
import AdminNav from './Admin__Navbar'
import AdminSecondaryNav from './Admin__SecondaryNav'
const AdminDashboard = () => {
  return (
    <div className="admin__dashboard">
      <AdminNav/>
   <AdminSecondaryNav/> 
    </div>
  );
};

export default AdminDashboard;
