import React, { useContext,useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ProductContext } from "../../API";
// import "../Consignment.css";
const ProductDetail = (props) => {
  const [product, setProduct] = useContext(ProductContext);
  let history = useHistory();
  const deleteProduct = () => {
    let data=product.find((item)=>item.name===props.match.params.product && item.model===props.match.params.model && item.category===props.match.params.category && item.consignment===props.match.params.consignment)
    let i = product.filter(item => item!==data);
    setProduct(i);
    history.push("/manage_product");
  };

  let data=product.find((item)=>item.name===props.match.params.product && item.model===props.match.params.model && item.category===props.match.params.category && item.consignment===props.match.params.consignment)
  console.log(data)
  return (
    <>
      {/* Consignment Info */}

      <div className="consignment-info">
        <div className="container">
          <h4 className="text-center my-4">
            Product Details
          </h4>
          <hr />
          <div className="row">
            <div className="col-md-6">
  <p className="details">Name:&nbsp;<b>{data.name}</b></p>
              <p className="details">Model:&nbsp;<b>{data.model}</b></p>
              <p className="details">Category:&nbsp;<b>{data.category}</b></p>
              <p className="details">Stock Qty:&nbsp;<b>{data.stock__qty}</b></p>
              <p className="details">Consignment:&nbsp;<b>{data.consignment}</b></p>
            </div>
            <div className="col-md-6">
              <p className="details">Cost Price:&nbsp;<b>{data.cost__price}</b></p>
              <p className="details">Percentage Factor:&nbsp;<b>{data.percentage__factor}</b></p>
              <p className="details">Selling Price:&nbsp;<b>${data.selling__price}</b></p>
            
              <p className="details">Remaining Qty:&nbsp;<b>{data.stock__qty}</b></p>
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
                    "Delete this product?"
                  )
                ) {
                  deleteProduct();
                }
              }}
            >
              Delete Product
            </button>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default ProductDetail;
