import React,{useState,useContext, useEffect} from "react";
import {RecommendationMenu} from '../ComponentsImport'

// Context imports
import {CompanyContext} from '../../API'
const CompanyCreate = (props) => {
  props.back()
  const[companies,setCompany]=useContext(CompanyContext)
  const [style,setStyle]=useState("col-lg-12")
  const[inputData,setInputData]=useState({
    "company":"",
    "importer":""
    })

  const setValue=(e)=>{
      setInputData({
      ...inputData,
      [e.target.id]:e.target.value
    })
    
  }
  
useEffect(()=>{
  inputData.importer!==""?setStyle("col-lg-10"):setStyle("col-lg-12")
},[inputData.importer])

const onSubmit=(e)=>{
  e.preventDefault()
  
  setCompany([...companies,{
    'company':inputData.company,
    'importer':inputData.importer
  }])

  setInputData({
    "company":"",
    "importer":""
  })
}

  return (
    <section id="company_create">
      <div className="row">

        <div className= {style}>
        <div id="company_create_form">
          <div className="form_header">
            <span className="form_heading">Create Company</span>
          </div>
          <form name="company_create_form" className="form">
            <div className=" form-group input">
              <label htmlFor="company">Name of the Company</label>
              <input
                type="text"
                id="company"
                name="company"
                className="form-control"
                value={inputData.company}
                onChange={e=>setValue(e)}
              />
            </div>

            <div className=" form-group input">
              <label htmlFor="importer">Import Data From</label>
              <input
                type="text"
                id="importer"
                name="importer"
                className="form-control"
                value={inputData.importer}
                onChange={e=>setValue(e)}
              />
            </div>

            <div className="button_container">
              <button type="submit" className="btn create_btn" onClick={e=>onSubmit(e)}>
                Create
              </button>
            </div>
          </form>
        </div>
        </div>

        {inputData.importer!==""?
       <div className="col-lg-2"><RecommendationMenu title="Companies" data={companies}/></div> 
      :null}

      </div>

      
      
    </section>
  );
};

export default CompanyCreate;
