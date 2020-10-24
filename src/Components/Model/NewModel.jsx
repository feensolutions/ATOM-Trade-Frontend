import React, { useState } from "react";

const NewModel = () => {
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
        <h4 className="text-center mb-3">New Model</h4>
        <hr />
        <form action="">
          <div class="row">
            <div class="col">
              <div className="form-group">
                <label htmlFor="name">Model Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Model Name"
                  id="name"
                  value={input.name}
                  onChange={(e) => Input(e)}
                />
              </div>
            </div>
           
          </div>

          



          <button type="submit" className="btn btn-info rounded-0">
            Add Model
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewModel;
