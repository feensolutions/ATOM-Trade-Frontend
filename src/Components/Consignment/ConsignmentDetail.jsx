import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ConsignmentContext, ProductContext } from "../../API";
import "./Consignment.css";

const ConsignmentDetail = (props) => {
  const [consignment, setConsignment] = useContext(ConsignmentContext);
  const [product, setProduct] = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  let history = useHistory();
  const deleteModel = (consignmentName) => {
    let i = consignment.filter((item) => item.name !== consignmentName);
    setConsignment(i);
    history.push("/manage_consignment");
  };

  useEffect(() => {
    let items = product.filter(
      (item) => item.consignment === props.match.params.consignment
    );

    setFilteredProducts(items);
  }, []);

  let data = consignment.filter(
    (item) => item.name === props.match.params.consignment
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
            {props.match.params.consignment} Consignment Details
          </h4>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <p className="details">
                Name:&nbsp;<b>{data[0].name}</b>
              </p>
              <p className="details">
                Company:&nbsp;<b>{data[0].company__name}</b>
              </p>
              <p className="details">
                Logistic Party:&nbsp;<b>{data[0].logistic__party}</b>
              </p>
              <p className="details">
                Bank:&nbsp;<b>{data[0].involved__bank}</b>
              </p>
              <p className="details">
                Port:&nbsp;<b>{data[0].port}</b>
              </p>
            </div>
            <div className="col-md-6">
              <p className="details">
                Opening Date:&nbsp;<b>{data[0].opening__date}</b>
              </p>
              <p className="details">
                Date of Arrival:&nbsp;<b>{data[0].date__of__arrival}</b>
              </p>
              <p className="details">
                Consignment Amount:&nbsp;<b>${data[0].consignment__amount}</b>
              </p>
              <p className="details">
                Exchange Rate:&nbsp;<b>{data[0].exchange__rate}</b>
              </p>
              <p className="details">
                Border:&nbsp;<b>{data[0].border}</b>
              </p>
            </div>
            <Link
              to={`/consignment/edit/${props.match.params.consignment}`}
              className="btn btn-info rounded-0 mt-4"
            >
              Edit Consignment
            </Link>
            <button
              className="btn btn-danger rounded-0 mx-2 mt-4"
              onClick={() => {
                if (
                  window.confirm(
                    "Delete this consignment?All products under this consignment will be deleted."
                  )
                ) {
                  deleteModel(props.match.params.consignment);
                }
              }}
            >
              Delete Consignment
            </button>
          </div>
        </div>
      </div>

      <div className="row header">
        <div className="col"></div>
        <div className="col">
          <h4 className="text-center my-4 items">
            All Products in {props.match.params.consignment}
          </h4>
        </div>
        <div className="col">
          <Link
            className="btn btn-success rounded-0"
            to={`/add_product/${props.match.params.consignment}`}
          >
            Add Product
          </Link>
        </div>
      </div>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Product</th>
              <th>Available Qty</th>
              <th>Model</th>
              <th>Category</th>
              <th>Cost Price</th>
              <th>Selling Price</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((item, id) => (
              <tr key={id}>
                <td>{id + 1}</td>
                <td>{item.name}</td>
                <td>{item.stock__qty}</td>
                <td>{item.model}</td>
                <td>{item.category}</td>
                <td>{item.cost__price}</td>
                <td>{item.selling__price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ConsignmentDetail;
