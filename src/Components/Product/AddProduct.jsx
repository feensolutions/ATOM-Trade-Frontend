import React, { useState } from "react";

const AddProduct = () => {
  // This state handles the inputs of user
  const [input, setInput] = useState({
    name: "",
    engine: "",
    model: "",
    consignment: "",
    category: "",
    cost__price: 0,
    stock__qty: 0,
    threshold__qty: 10,
    percentage__factor: 50,
  });

  // Function to handle input
  const Input = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  return (
    <div className="add__product mt-5">
      <div className="container">
        <h4 className="text-center mb-3">New Product</h4>
        <hr />
        <form action="">
          <div class="row">
            <div class="col">
              <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Name"
                  id="name"
                  value={input.name}
                  onChange={(e) => Input(e)}
                />
              </div>
            </div>
            <div class="col">
              <div className="form-group">
                <label htmlFor="engine">Engine</label>
                <select class="form-control form-control" id="engine">
                  <option>Gasoline</option>
                  <option>Diesel</option>
                </select>
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select class="form-control form-control" id="category">
                  <option>Engine</option>
                  <option>Gear Box</option>
                  <option>Rotary And Tilling</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div className="form-group">
                <label htmlFor="model">Model</label>
                <select class="form-control form-control" id="model">
                  <option>170F</option>
                  <option>173F</option>
                  <option>178F</option>
                </select>
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <label htmlFor="consignment">Consignment</label>
                <select class="form-control form-control" id="consignment">
                  <option>None</option>
                  <option>LC KTMT 5400614</option>
                  <option>LC CIBLIFX 3601472</option>
                  <option>LC KTMT 5621348</option>
                </select>
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <label htmlFor="stock__qty">Stock Qty</label>
                <input
                  type="number"
                  className="form-control"
                  id="stock__qty"
                  placeholder="Stock Qty"
                  value={input.stock__qty}
                  onChange={e=>Input(e)}
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div className="form-group">
                <label htmlFor="cost__price">Cost Price (Rs)</label>
                <input
                  type="number"
                  placeholder="Cost Price"
                  className="form-control"
                  id="cost__price"
                  value={input.cost__price}
                  onChange={e=>Input(e)}
                />
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <label htmlFor="precentage__factor">Percentage Factor</label>
                <input
                  type="number"
                  placeholder="Default value: 50"
                  className="form-control"
                  id="percentage__factor"
                  value={input.percentage__factor}
                  onChange={e=>Input(e)}
                />
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <label htmlFor="threshold__qty">Threshold Qty</label>
                <input
                  type="number"
                  placeholder="Default Qty: 10"
                  className="form-control"
                  id="threshold__qty"
                  value={input.threshold__qty}
                  onChange={e=>Input(e)}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-info rounded-0">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
