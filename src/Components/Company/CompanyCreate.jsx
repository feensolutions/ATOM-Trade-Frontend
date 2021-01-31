import React,{useState} from "react";
import {RecommendationMenu} from '../ComponentsImport'
const CompanyCreate = () => {
  const[importer,setImporter]=useState("")
  const [style,setStyle]=useState("col-lg-12")

  const setValue=(e)=>{
    if(e.target.value){
      setStyle("col-lg-10")
    }
    else{
      setStyle("col-lg-12")
    }
      setImporter(e.target.value)
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
              />
            </div>

            <div className=" form-group input">
              <label htmlFor="importer">Import Data From</label>
              <input
                type="text"
                id="importer"
                name="importer"
                className="form-control"
                value={importer}
                onChange={e=>setValue(e)}
              />
            </div>

            <div className="button_container">
              <button type="submit" className="btn create_btn">
                Create
              </button>
            </div>
          </form>
        </div>
        </div>

        {importer!=""?
       <div className="col-lg-2"><RecommendationMenu title="Companies" data={['ATOM Trade International Pvt. Ltd (076-077)','ATOM Trade International Pvt. Ltd (075-076)']}/></div> 
      :null}

      </div>

      
      
    </section>
  );
};

export default CompanyCreate;
