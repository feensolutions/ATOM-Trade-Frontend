import React, { useContext,useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../API";
 import "./user.css";
const UserDetail = (props) => {
  const [user, setUser] = useContext(UserContext);
  let history = useHistory();
  const deleteUser = () => {
    let data=user.find((item)=>item.username===props.match.params.username)
    let i = user.filter(item => item!==data);
    setUser(i);
    history.push("/manage_user");
  };

  let data=user.find((item)=>item.username===props.match.params.username )
  
  if(data){
  return (
    <>
      {/* User Info */}

      <div className="user-info">
        <div className="container">
          <h4 className="text-center my-4">
            User Detail
          </h4>
          <hr />
          <div className="row">
            <div className="col-md-6">
  <p className="details">Name:&nbsp;<b>{data.first__name} {data.last__name}</b></p>
              <p className="details">Email:&nbsp;<b>{data.email}</b></p>
              <p className="details">Username:&nbsp;<b>{data.username}</b></p>
            </div>
            <div className="col-md-6">
              <p className="details">Contact Info:&nbsp;<b>{data.contact__info}</b></p>
              <p className="details">Last Active:&nbsp;<b>10 Days ago</b></p>
  <p className="details">User Privilege:&nbsp;<span className="badge badge-info">{data.is__admin?"Admin":"Staff"}</span></p>
            
            </div>
            <Link
              to={`/user/edit/${props.match.params.username}`}
              className="btn btn-info rounded-0 mt-4"
            >
              Edit User Info
            </Link>
            <button
              className="btn btn-danger rounded-0 mx-2 mt-4"
              onClick={() => {
                if (
                  window.confirm(
                    "Remove this user?"
                  )
                ) {
                  deleteUser();
                }
              }}
            >
               Remove User
            </button>

            <Link
              to={`/manage_user`}
              className="btn btn-dark rounded-0 mt-4"
            >
              Back
            </Link>
          </div>
        </div>
      </div>

     
    </>
  );
            }

            else{
                return(
                    <h2 className="text-center">404 Error</h2>
                )
            }
};

export default UserDetail;
