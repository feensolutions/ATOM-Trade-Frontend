import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ClientContext} from "./ClientAPI";
import "./Client.css";

const ClientDetail = (props) => {
  const [client, setClient] = useContext(ClientContext);

  let history = useHistory();
  const deleteClient = (company__name) => {
    let i = client.filter((item) => item.company__name !== company__name);
    setClient(i);
    history.push("/manage_client");
  };

  

  let data = client.filter(
    (item) => item.company__name === props.match.params.company__name
  );

  if (data.length <= 0) {
    return <h1 className="text-center">404 Error</h1>;
  }
  return (
    <>
      {/* Consignment Info */}

      <div className="consignment-info">
        <div className="container">
          <h4 className="text-center my-4">
            {props.match.params.company__name} Details
          </h4>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <p className="details">
                Company:&nbsp;<b>{data[0].company__name}</b>
              </p>
              <p className="details">
                Proprieter:&nbsp;<b>{data[0].proprieter}</b>
              </p>
              <p className="details">
                Email:&nbsp;<b>{data[0].email}</b>
              </p>
              <p className="details">
                Contact Number:&nbsp;<b>{data[0].contact__number}</b>
              </p>
          
            </div>
            <div className="col-md-6">
              <p className="details">
                Address:&nbsp;<b>{data[0].address}</b>
              </p>
              <p className="details">
                Mobile Number:&nbsp;<b>{data[0].mobile__number}</b>
              </p>
              <p className="details">
                Opnening Amount:&nbsp;<b>${data[0].opening__amount}</b>
              </p>
              <p className="details">
                Balance Amount:&nbsp;<b>{data[0].balance__amount}</b>
              </p>
              
            </div>
            <Link
              to={`/client/edit/${props.match.params.company__name}`}
              className="btn btn-info rounded-0 mt-4"
            >
              Edit Client Info
            </Link>
            <button
              className="btn btn-danger rounded-0 mx-2 mt-4"
              onClick={() => {
                if (
                  window.confirm(
                    "Delete Client?"
                  )
                ) {
                  deleteClient(props.match.params.company__name);
                }
              }}
            >
              Remove Client
            </button>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default ClientDetail;
