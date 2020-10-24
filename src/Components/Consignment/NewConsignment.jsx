import React, { useState } from "react";

const NewConsignment = () => {
  // This state handles the inputs of user
  const [input, setInput] = useState({
    name: "",
    opening__date: "",
    date__of__arrival: "",
    company__name: "",
    logistic__party: "",
    involved__bank: "",
    border: "",
    port: "",
    consignment__amount: 0,
    exchange__rate: 100,
  });

  // Function to handle input
  const Input = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  

  return (
    <div className="add__consignment mt-5">
      <div className="container">
        <h4 className="text-center mb-3">New Consignment</h4>
        <hr />
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
                />
              </div>
            </div>
            <div class="col">
              <div className="form-group">
                <label htmlFor="caonsignment__amount">Consignment Amount ($)</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Consignment Amount"
                  id="consignment__amount"
                  value={input.consignment__amount}
                  onChange={(e) => Input(e)}
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
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-info rounded-0">
            Add Consignment
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewConsignment;
