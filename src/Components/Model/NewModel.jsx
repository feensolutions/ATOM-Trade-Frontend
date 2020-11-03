import React, { useContext, useState } from "react";
import { ModelContext } from "../../API";
import {Link} from 'react-router-dom'
const NewModel = () => {
  const [model, setModel] = useContext(ModelContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // This state handles the inputs of user
  const [input, setInput] = useState({
    name: "",
  });

  // Function to handle input
  const Input = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    for(let i=0;i<model.length;i++){
      if(model[i].name.toLowerCase()===input.name.toLowerCase()){
        setSuccess("")
        setError("Duplicate Entry")
        return
      }
    }
    if (input.name === "") {
      return;
    } else {
      setModel([
        ...model,
        {
          name: input.name,
        },
      ]);
      setInput({ ...Input, name: "" });
      setError("")
      setSuccess(`${input.name} model created successfully`);
    }
  };


  return (
    <div className="add__consignment mt-5">
      <div className="container">
        <h4 className="text-center mb-3">New Model</h4>
        <hr />
        {success ? <div className="alert alert-success">{success}</div> : null}
        {error ? <div className="alert alert-danger">{error}</div> : null}
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

          <button
            type="submit"
            className="btn btn-info rounded-0"
            onClick={(e) => submit(e)}
          >
            Add Model
          </button>

          <Link to="/manage_model"
            className="btn btn-dark rounded-0 ml-2"
            
          >
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default NewModel;
