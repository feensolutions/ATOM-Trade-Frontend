import React, { useContext, useState } from "react";
import {Link} from 'react-router-dom'
// Api import
import {CategoryContext} from '../../API'
const NewCategory = () => {

  const[category,setCategory]=useContext(CategoryContext)
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

    for(let i=0;i<category.length;i++){
      if(category[i].name.toLowerCase()===input.name.toLowerCase()){
        setSuccess("")
        setError("Duplicate Entry")
        return
      }
    }
    if (input.name === "") {
      return;
    } else {
      setCategory([
        ...category,
        {
          name: input.name,
        },
      ]);
      setInput({ ...Input, name: "" });
      setError("")
      setSuccess(`${input.name} category created successfully`);
    }
  };

  return (
    <div className="add__category mt-5">
      <div className="container">
        <h4 className="text-center mb-3">New Category</h4>
        <hr />
        {success ? <div className="alert alert-success">{success}</div> : null}
        {error ? <div className="alert alert-danger">{error}</div> : null}
        <form action="">
          <div class="row">
            <div class="col">
              <div className="form-group">
                <label htmlFor="name">Category Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Category Name"
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
            Add Category
          </button>

          <Link to="/manage_category"
            className="btn btn-dark rounded-0 ml-2"
            
          >
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default NewCategory;
