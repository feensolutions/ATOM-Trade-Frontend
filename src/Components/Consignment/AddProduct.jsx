import React, { useContext, useState } from "react";
import{ModelContext,CategoryContext,ConsignmentContext,ProductContext} from '../../API'
const AddProductToConsignment = (props) => {
  // This state handles the inputs of user
  const[product,setProduct]=useContext(ProductContext)
  const[model,setModel]=useContext(ModelContext)
  const[category,setCategory]=useContext(CategoryContext)
  const[consignment,setConsignment]=useContext(ConsignmentContext)
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const initialState={
    name: "",
    engine: "",
    model: "",
    consignment:props.match.params.consignment,
    category: "",
    cost__price: 0,
    stock__qty: 0,
    threshold__qty: 10,
    damaged__qty:0,
    percentage__factor: 50,
  }
  const [input, setInput] = useState(initialState);

  // Function to handle input
  const Input = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    for(let i=0;i<product.length;i++){
      if(product[i].name.toLowerCase()===input.name.toLowerCase() && product[i].model.toLowerCase()===input.model.toLowerCase() && product[i].category.toLowerCase()===input.category.toLowerCase()&&product[i].consignment.toLowerCase()===input.consignment.toLowerCase()){
        setSuccess("")
        setError("Duplicate Entry")
        return
      }
    }
    if (input.name === "") {
      return;
    }
    if(input.category===""){
      setError("")
      setError("Please choose a category")
      return
    }
    if(input.model===""){
      setError("")
      setError("Please choose a consignmet")
      return
    }
    if(input.consignment===""){
      setError("")
      setError("Please choose a consignment")
      return
    }
    if(input.cost__price===0){
      setError("Enter Cost Price")
      return
    }
    if(input.stock__qty===0){
      setError("")
      setError("Enter Cost Price")
      return
    }
    if(input.percentage__factor<=0){
      setError("")
      setError("Invalid percentage factor")
      return
    }
    else {
      setProduct([
        ...product,
        {
          name: input.name,
          category:input.category,
          model:input.model,
          consignment:input.consignment,
          stock__qty:input.stock__qty,
          cost__price:input.cost__price,
          percentage__factor:input.percentage__factor,
          threshold__qty:input.threshold__qty,
          damaged__qty:input.damaged__qty,
          selling__price:parseFloat(input.cost__price)+parseFloat(input.cost__price)*(parseFloat(input.percentage__factor)/100)
        },
      ]);
      setInput(initialState)
      setError("")
      setSuccess(`Product ${input.name} created successfully`);
    }
  };
  return (
    <div className="add__product mt-5">
      <div className="container">
      <h4 className="text-center mb-3">New Product</h4>
        <hr />
        {success ? <div className="alert alert-success">{success}</div> : null}
        {error ? <div className="alert alert-danger">{error}</div> : null}
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
            {/* <div class="col">
              <div className="form-group">
                <label htmlFor="engine">Engine</label>
                <select class="form-control form-control" id="engine">
                  {}
                </select>
              </div>
            </div> */}

            <div class="col">
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select class="form-control form-control" id="category" onChange={e=>Input(e)} value={input.category}>
                  <option>Choose....</option>
          {category.map((item,id)=><option key={id} value={item.name}>{item.name}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div className="form-group">
                <label htmlFor="model">Model</label>
                <select class="form-control form-control" id="model" onChange={e=>Input(e)} value={input.model}>
                <option>Choose....</option>
                {model.map((item,id)=><option key={id} value={item.name}>{item.name}</option>)}

                </select>
              </div>
            </div>

            <div class="col">
              <div className="form-group">
              <label htmlFor="consignment">Consignment</label>
                <input type="text" disabled className="form-control" value={input.consignment}/>
              
         
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

            <div class="col">
              <div className="form-group">
                <label htmlFor="damaged__qty">Damaged Qty</label>
                <input
                  type="number"
                  placeholder="Default Qty:0"
                  className="form-control"
                  id="damaged__qty"
                  value={input.damaged__qty}
                  onChange={e=>Input(e)}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-info rounded-0" onClick={e=>submit(e)}>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductToConsignment;
