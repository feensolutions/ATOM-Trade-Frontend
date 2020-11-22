import React, { useEffect, useState } from "react";
import "./Invoice.css";
const NewInvoice = () => {

  const [info, setInfo] = useState({
    client: "",
    issued__date: "",
    invoice__number: 1,
  });

  const [products, setProducts] = useState([]);
  const [item, setItem] = useState({
    name: "",
    rate: 0,
    qty: 0,
    subTotal: 0,
  });

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setItem({ ...item, subTotal: parseInt(item.qty) * parseFloat(item.rate) });
  }, [item.rate, item.qty]);

  useEffect(() => {
    let sum = 0;
    if (products.length > 0) {
      products.forEach((element) => {
        sum += element.subTotal;
      });
      setTotal(sum);
    } else {
        setTotal(sum)
      return;
    }
  }, [products]);
  const onChange = (e) => {
    setInfo({
      ...info,
      [e.target.id]: e.target.value,
    });
  };

  const onChangeItem = (e) => {
    setItem({
      ...item,
      [e.target.id]: e.target.value,
    });
  };

  const addItemToInvoice = (e) => {
    e.preventDefault();
    if (item.name !== "" && item.qty > 0 && item.rate > 0) {
        
      setProducts([...products, item]);
      setItem({
    
        name: "",
        qty: 0,
        rate: 0,
        subTotal: 0,
      });
      
    } else {
      return;
    }
  };

  const deleteProduct=(_id)=>{
      let filtered_res=[]
      products.map((item,id)=>{
          if(id!==_id){
              filtered_res.push(item)
          }
      })
      setProducts(filtered_res)
  }
  return (
    <>
      <div className="new__invoice container mt-3 ">
        <h4 className="text-center">New Invoice</h4>
        <hr />
        <div className="row mt-2 detail">
          <div className="col-md-6 client__section">
            <div className="form-group">
              <label htmlFor="client">Client Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Client Name"
                value={info.client}
                onChange={(e) => onChange(e)}
                id="client"
              />
            </div>
          </div>
          <div className="col-md-6 date__section">
            <div className="form-group">
              <label htmlFor="invoice__number">Invoice Number</label>
              <input
                type="text"
                disabled
                value="1"
                className="form-control"
                value={info.invoice__number}
                onChange={(e) => onChange(e)}
                id="invoice__number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="issued__date">Issued Date</label>
              <input
                type="date"
                className="form-control"
                value={info.issued__date}
                onChange={(e) => onChange(e)}
                id="issued__date"
              />
            </div>
          </div>
        </div>

        <div className="add__items">
          <h5 className="my-3 text-center">Add Item to Invoice</h5>
          <hr />
          <form action="">
            <div className="form-row">
              <div className="col">
                <label htmlFor="name">Item</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Item"
                  value={item.name}
                  onChange={(e) => onChangeItem(e)}
                  id="name"
                />
              </div>
              <div className="col">
                <label htmlFor="qty">Quantity</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Quantity"
                  value={item.qty}
                  onChange={(e) => onChangeItem(e)}
                  id="qty"
                />
              </div>
              <div className="col">
                <label htmlFor="rate">Rate</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Rate"
                  value={item.rate}
                  onChange={(e) => onChangeItem(e)}
                  id="rate"
                />
              </div>
              <button
                type="submit"
                className="submit__btn"
                onClick={(e) => addItemToInvoice(e)}
              ></button>
            </div>
          </form>
        </div>

        <section className="invoice mt-4">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Item</th>
                <th>Qty</th>
                <th>Rate</th>
                <th>Sub Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, id) => {
                return (
                  <tr key={id}>
                    <td>{id+1}</td>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>{item.rate}</td>
                    <td>{item.subTotal}</td>
                    {/* <td>{parseInt(item.qty)*parseFloat(item.rate)}</td> */}
                    <td>
                      <span className="badge badge-danger delete-badge" onClick={()=>deleteProduct(id)}>Remove</span>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

                <td colspan="2">
                  <div className="form-group">
                    <label htmlFor="subtotal">Sub Total</label>
                    <input
                      type="text"
                      className="form-control"
                      value={total}
                      disabled
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default NewInvoice;
