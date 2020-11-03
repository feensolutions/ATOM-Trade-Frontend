import React, { useContext, useState } from "react";
import {Link,useHistory} from 'react-router-dom'
// Api import
import {CategoryContext} from '../../API'
const CategoryEdit = (props) => {
let history=useHistory()
  const[category,setCategory]=useContext(CategoryContext)
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
 
  // This state handles the inputs of user
  const [input, setInput] = useState({
    name:props.match.params.category,
  });

  // Function to handle input
  const Input = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    for(let i=0;i<category.length;i++){
      if(category[i].name===input.name){
        setSuccess("")
        setError("Duplicate Entry")
        return
      }
    }
    if (input.name === "") {
      return;
    } else {
        let temp=[...category]
        temp.map(item=>{
            if(item.name===props.match.params.category){
                item['name']=input.name
            }

        })
        setCategory(temp)
        history.push('/manage_category')
    }
  };

  return (
    <div className="add__category mt-5">
      <div className="container">
        <h4 className="text-center mb-3">Edit Category</h4>
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
            Edit Category
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

export default CategoryEdit;
