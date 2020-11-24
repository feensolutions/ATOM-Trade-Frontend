import React, { useContext, useState } from "react";
import {Link,useHistory} from 'react-router-dom'
import { UserContext } from "../../API";

const EditUser = (props) => {
  const [user, setUser] = useContext(UserContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const data = user.find(
    (item) => item.username === props.match.params.username
  );
 
  let history=useHistory()
  const initialState = {
    first__name: data.first__name,
    last__name: data.last__name,
    email:data.email,
    username:data.username,
    contact__info:data.contact__info,
    is__admin:data.is__admin
   
  };

  // This state handles the inputs of user
  const [input, setInput] = useState(initialState);

  // Function to handle input
  const Input = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleCheckBox=()=>{
      setInput({...input,is__admin:!input.is__admin})
  }
  const submit = (e) => {
    e.preventDefault();

    const filteredItems=user.filter(item=>item.username!==props.match.params.username)
    for (let i = 0; i < filteredItems.length; i++) {
      if (filteredItems[i].username.toLowerCase() === input.username.toLowerCase() || filteredItems[i].email.toLowerCase() === input.email.toLowerCase() ) {
        setSuccess("");
        setError("Duplicate Entry");
        return;
      }
    }
    if (input.first__name === "" || input.last__name==="") {
      setError("Empty Name Field");
      setSuccess("")
      return;
    }
     else {
      let temp = [...user];
      temp.map((item) => {
       if (item.username === props.match.params.username) {
            item["first__name"]=input.first__name
            item["last__name"] =input.last__name
            item["username"] = input.username
            item["email"] = input.email
            item["contact__info"] = input.contact__info
            item["is__admin"] = input.is__admin
        }
    });
      setUser(temp);
      history.push("/manage_user");
    //   setInput(initialState);
      setError("");
    //   setSuccess(`${input.name} consignment edited successfully`);
    }
  };

  return (
    <div className="add__consignment mt-5">
      <div className="container">
        <h4 className="text-center mb-3">Edit User</h4>
        <hr />
        {success ? <div className="alert alert-success">{success}</div> : null}
        {error ? <div className="alert alert-danger">{error}</div> : null}
        <form action="">
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="first__name">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  id="first__name"
                  value={input.first__name}
                  onChange={(e) => Input(e)}
                  required
                />
              </div>
            </div>
           

            <div className="col">
            <div className="form-group">
                <label htmlFor="last__name">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  id="last__name"
                  value={input.last__name}
                  onChange={(e) => Input(e)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
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

            <div className="col">
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  id="username"
                  value={input.username}
                  onChange={(e) => Input(e)}
                  required
                />
              </div>
            </div>

            <div className="col">
            <div className="form-group">
                <label htmlFor="contact__info">Contact Info</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Contact Info"
                  id="contact__info"
                  value={input.contact__info}
                  onChange={(e) => Input(e)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
            <div className="form-check mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="is__admin"
                  checked={input.is__admin}
                  onChange={handleCheckBox}
                  />
                <label htmlFor="is__admin" className="form-check-label">Assign Admin Privileges</label>
              </div>
            </div>
          </div>
          
        
         
          <button type="submit" className="btn btn-info rounded-0 mr-3" onClick={e=>submit(e)}>
             Done
          </button>

         <Link className="btn btn-dark rounded-0" to="/manage_user">
            Back
         </Link>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
