import React, { useContext, useState } from "react";
import {Link} from 'react-router-dom'
// Api import
import {ConsignmentContext} from '../../API'
const NewConsignment = () => {
  const[consignment,setConsignment]=useContext(ConsignmentContext)
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const initialState={
    name: "",
    opening__date: "",
    date__of__arrival: "",
    fiscal__year:"",
    company__name: "",
    logistic__party: "",
    involved__bank: "",
    border: "",
    port: "",
    consignment__amount: 0,
    exchange__rate: 100,
  }
  let re=new RegExp("^([0-9]{4}-+[0-9]{4})$")

  // This state handles the inputs of user
  const [input, setInput] = useState(initialState);

  // Function to handle input
  const Input = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    for(let i=0;i<consignment.length;i++){
      if(consignment[i].name.toLowerCase()===input.name.toLowerCase()){
        setSuccess("")
        setError("Duplicate Entry")
        return
      }
    }
    if (input.name === "") {
      setError("Empty Name")
      return;
    } 

    if(!re.test(input.fiscal__year)){
      setError("Fiscal Year pattern should be year(4)-year(4). Eg: 2019-2020")
    }
    else {
      setConsignment([
        ...consignment,
        {
          name: input.name,
          opening__date:input.opening__date,
          date__of__arrival:input.date__of__arrival,
          fiscal__year:input.fiscal__year,
          company__name:input.company__name,
          logistic__party:input.logistic__party,
          involved__bank:input.involved__bank,
          port:input.port,
          border:input.border,
          consignment__amount:input.consignment__amount,
          exchange__rate:input.exchange__rate
        },
      ]);
      setInput(initialState);
      setError("")
      setSuccess(`${input.name} consignment created successfully`);
    }
  }; 

  return (
    <div className="add__consignment mt-5">
      <div className="container">
        <h4 className="text-center mb-3">New Consignment</h4>
        <hr />
        {success ? <div className="alert alert-success">{success}</div> : null}
        {error ? <div className="alert alert-danger">{error}</div> : null}
        <form action="">
          <div class="row">
            <div class="col">
              <div className="form-group">
                <label htmlFor="name">Consignment Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Consignment Name"
                  id="name"
                  value={input.name}
                  onChange={(e) => Input(e)}
                  required
                />
              </div>
            </div>
            <div class="col">
              <div className="form-group">
                <label htmlFor="opening__date">Opening Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="opening__date"
                  value={input.opening__date}
                  onChange={(e) => Input(e)}
                  required
                />
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <label htmlFor="date__of__arrival">Date of Arrival</label>
                <input
                  type="date"
                  className="form-control"
                  id="date__of__arrival"
                  value={input.date__of__arrival}
                  onChange={(e) => Input(e)}
                  required
                />
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <label htmlFor="fiscal__year">Fiscal Year</label>
                <input
                  type="text"
                  className="form-control"
                  id="fiscal__year"
                  value={input.fiscal__year}
                  onChange={(e) => Input(e)}
                  placeholder="year-year"
                  required
                />
              </div>
            </div>
          </div>

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
                  required
                />
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <label htmlFor="logistic__party">Logistic Party</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Logistic Party"
                  id="logistic__party"
                  value={input.logistic__party}
                  onChange={(e) => Input(e)}
                  required
                />
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <label htmlFor="involved__bank">Involved Bank</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bank"
                  id="involved__bank"
                  value={input.involved__bank}
                  onChange={(e) => Input(e)}
                  required
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div className="form-group">
                <label htmlFor="port">Port</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Port"
                  id="port"
                  value={input.port}
                  onChange={(e) => Input(e)}
                  required
                />
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <label htmlFor="border">Border</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Border"
                  id="border"
                  value={input.border}
                  onChange={(e) => Input(e)}
                  required
                />
              </div>
            </div>
            <div class="col">
              <div className="form-group">
                <label htmlFor="consignment__amount">Consignment Amount ($)</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Consignment Amount"
                  id="consignment__amount"
                  value={input.consignment__amount}
                  onChange={(e) => Input(e)}
                  required
                />
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <label htmlFor="exchange__rate">Exchange Rate</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Exchange Rate"
                  id="exchange__rate"
                  value={input.exchange__rate}
                  onChange={(e) => Input(e)}
                  required
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-info rounded-0" onClick={e=>submit(e)}>
            Add Consignment
          </button>
          <Link to="/manage_consignment"
            className="btn btn-dark rounded-0 ml-2"
            
          >
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default NewConsignment;
