
import React, { useContext } from "react";
import './company.css'

import {Link} from 'react-router-dom'
// Components import
import MainMenu from "../MainMenu/MainMenu";
// API Import
import { CompanyContext } from "../../API";
const CompanySelect = () => {
  const [companies] = useContext(CompanyContext);

  return (
 
    <MainMenu title="Select Company">

      {companies.length>0
        ? companies.map((item, id) => {
            return <p key={id}>{item}</p>;
          })
        : null}
      <Link to="/company/create" className="create">Create Company</Link>
      <p className="quit" >Quit</p>
    </MainMenu>
    
  );
};

export default CompanySelect;
