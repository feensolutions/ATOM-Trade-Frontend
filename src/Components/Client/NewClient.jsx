import React, { useContext, useState } from "react";
import {Link} from 'react-router-dom'
// Api import
import {ClientContext} from './ClientAPI'
const NewClient = () => {
  const[client,setClient]=useContext(ClientContext)
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const initialState={
  company__name:"",
   proprieter:"",
   pan:"",
   email:"",
   contact__info:"",
   mobile__number:"",

  balance__amount:0,
  closing__balance:0,
  address:"",
  }
  

  // This state handles the inputs of user
  const [input, setInput] = useState(initialState);

  // Function to handle input
  const Input = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    for(let i=0;i<client.length;i++){
      if(client[i].company__name.toLowerCase()===input.company__name.toLowerCase()){
        setSuccess("")
        setError("Duplicate Entry")
        return
      }
    }
    if (input.company__name === "") {
      setSuccess("")
      setError("Empty Company")
      return;
    } 

    if(input.contact__info==="" && input.mobile__number===""){
      setSuccess("")
      setError("Please enter atleast a contact number or mobile number")
      return
    }
    else {
      setClient([
        ...client,{
       company__name:input.company__name,
       proprieter:input.proprieter,
       address:input.address,
       contact__info:input.contact__info,
       mobile__number:input.mobile__number,
       email:input.email,
       balance__amount:input.balance__amount,
       closing__balance:input.balance__amount
        }
      ]);
      setInput(initialState);
      setError("")
      setSuccess("New Client has been created successfully");
    }
  }; 

  return (
    <div className="add_client mt-5">
      <div className="container">
        <h4 className="text-center mb-3">New Client</h4>
        <hr />
        {success ? <div className="alert alert-success">{success}</div> : null}
        {error ? <div className="alert alert-danger">{error}</div> : null}
        <form action="">
          <div class="row">
            <div class="col">
              <div className="form-group">
                <label htmlFor="company__name">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                  id="company__name"
                  value={input.company__name}
                  onChange={(e) => Input(e)}
                  
                />
              </div>
            </div>
            <div class="col">
              <div className="form-group">
                <label htmlFor="proprieter">Propreiter</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Proprieter"
                  id="proprieter"
                  value={input.proprieter}
                  onChange={(e) => Input(e)}
                  
                />
              </div>
            </div>
            </div>
            <div className="row">
            <div class="col">
              <div className="form-group">
                <label htmlFor="pan">Pan/Vat Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pan/Vat"
                  id="pan"
                  value={input.pan}
                  onChange={(e) => Input(e)}
                  
                />
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <label htmlFor="contact__info">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Contact Number"
                  id="contact__info"
                  value={input.contact__info}
                  onChange={(e) => Input(e)}
                  
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div className="form-group">
                <label htmlFor="mobile__number">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile Number"
                  id="mobile__number"
                  value={input.mobile__number}
                  onChange={(e) => Input(e)}
                  required
                />
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  id="email"
                  value={input.email}
                  onChange={(e) => Input(e)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div class="col">
              <div className="form-group">
                <label htmlFor="Address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  id="address"
                  value={input.address}
                  onChange={(e) => Input(e)}
                  required
                />
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <label htmlFor="balance__amount">Previous Balance</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Previous Balance"
                  id="balance__amount"
                  value={input.balance__amount}
                  onChange={(e) => Input(e)}
                  required
                />
              </div>
            </div>
          </div>

          

          <button type="submit" className="btn btn-info rounded-0" onClick={e=>submit(e)}>
            Add Client
          </button>
          <Link to="/manage_client"
            className="btn btn-dark rounded-0 ml-2"
            
          >
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default NewClient;
