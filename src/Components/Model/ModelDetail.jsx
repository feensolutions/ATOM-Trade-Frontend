import React,{useContext,useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {ModelContext,ProductContext} from '../../API'
const ModelDetail=(props)=>{
    const[model,setModel]=useContext(ModelContext)
    const[product,setProduct]=useContext(ProductContext)
  const[filteredProducts,setFilteredProducts]=useState([])


  useEffect(()=>{
    let items=product.filter(item=>item.model===props.match.params.model)
    console.log(items)
    setFilteredProducts(items)
  },[])

    let history=useHistory()
    const deleteModel=(modelName)=>{
        let i=model.filter(item=>item.name!==modelName)
        setModel(i)
        history.push('/manage_model')
    }
    return(
        <>
    <h4 className="text-center my-4">{props.match.params.model} Model Details</h4>
    <hr/>
    
    <div className="row header">
        <div className="col"></div>
        <div className="col">
        <h4 className="text-center my-4 items">All Products in {props.match.params.model}
        
        </h4>
        </div>
        <div className="col">
            <Link className="btn btn-dark rounded-0" to="/manage_model">Back</Link>
        </div>
    </div>
    

    <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Product</th>
                    <th>Consignment</th>
                    <th>Category</th>
                    <th>Remaining Quantity</th>
                    <th>Cost Price</th>
                    <th>Selling Price</th>
                </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((item,id)=>{
                        return(
                            <tr key={id}>
                                <td>{id+1}</td>
                        <td>{item.name}</td>
                        <td>{item.consignment}</td>
                        <td>{item.category}</td>
                        <td>{item.stock__qty}</td>
                        <td>{item.cost__price}</td>
                        <td>{item.selling__price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            
        </table>
        <Link to={`/model/edit/${props.match.params.model}`} className="btn btn-info rounded-0">Edit Model</Link>
        <button className="btn btn-danger rounded-0 mx-2" onClick={()=>{if(window.confirm("Delete this model?All products under this model will be deleted.")){deleteModel(props.match.params.model)}}}>
        Delete Model</button>
    </div>
   
    </>
    )
}

export default ModelDetail