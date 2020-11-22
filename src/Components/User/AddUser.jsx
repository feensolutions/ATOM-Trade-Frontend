import React,{useContext, useState} from 'react'
import {UserContext} from '../../API'
const AddUser=()=>{
    const initialState={
        first__name:"",
        last__name:"",
        email:"",
        username:"",
        contact__info:"",
        password:"",
        re__password:"",
        is__admin:false
      }
      const [user,setUser]=useContext(UserContext)
      const [input, setInput] = useState(initialState);
      const [success, setSuccess] = useState("");
      const [error, setError] = useState("");
      console.log(input)
      // Function to handle input
  const Input = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

const checkDuplicate=()=>{
    if (user.length>0){
        user.forEach(element => {
            if(element.email===input.email){
                return "Email Already Exists"
            }
    
            else if(element.username===input.username){
                return "Username is Already Taken"
            }
    
            else if(element.contact__info!==""){
                if(element.contact__info===input.contact__info){
                    return "Contact Info already registered"
                }
            }
    
            else{
                return false
            }
        });
    }
    return false
    
}
  const submit=(e)=>{
      e.preventDefault()
      let duplicate=checkDuplicate()
      if(input.first__name==="" || input.last__name==="" || input.email===""){
          setError("Invalid Information. Please Check the info correctly")
          return
      }

      else if(input.username.length<5){
          setError("Username should be of length 5 or more.")
          return
      }

      else if(input.password!==input.re__password){
          setError("Passwords do not match.")
          return
        }

        else if(duplicate !==false){
            setError(duplicate)
            return
        }
    
      else{
        setUser([...user,input])
        setError("")
        setSuccess("User Created Successfully")
        // setInput(initialState)
        console.log(user)
      }
  }
    return(
       < div className="add__product mt-5">
      <div className="container">
      <h4 className="text-center mb-3">Add New User</h4>
        <hr />
        {success ? <div className="alert alert-success">{success}</div> : null}
        {error ? <div className="alert alert-danger">{error}</div> : null}
        <form action="">
          <div class="row">
            <div class="col">
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
           

            <div class="col">
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

          <div class="row">
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

            <div class="col">
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

            <div class="col">
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

          <div class="row">
            <div class="col">
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="password"
                  value={input.password}
                  onChange={(e) => Input(e)}
                  required
                />
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <label htmlFor="re__password">Re Enter Password</label>
                <input
                  type="password"
                  placeholder="Re Enter Password"
                  className="form-control"
                  id="re__password"
                  value={input.re__password}
                  onChange={e=>Input(e)}
                  required
                />
              </div>
            </div>


          </div>
            <div className="form-group">
                <input
                  type="checkbox"
                  id="is__admin"
                  value={input.is__admin}
                  onChange={(e) => Input(e)}
                  />
                <label htmlFor="is__admin">&nbsp;&nbsp;Make Admin</label>
              </div>
        
         
          <button type="submit" className="btn btn-info rounded-0" onClick={e=>submit(e)}>
            Add User
          </button>
        </form>
      </div>
    </div>

    )
}

export default AddUser