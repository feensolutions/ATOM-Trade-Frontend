import React,{useContext,useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {CategoryContext,ProductContext} from '../../API'
const ModelDetail=(props)=>{
    const[product,setProduct]=useContext(ProductContext)
    const[category,setCategory]=useContext(CategoryContext)
    const[filteredProducts,setFilteredProducts]=useState([])


    useEffect(()=>{
      let items=product.filter(item=>item.category===props.match.params.category)
      
      setFilteredProducts(items)
    },[])

    let history=useHistory()
    const deleteModel=(categoryName)=>{
        let i=category.filter(item=>item.name!==categoryName)
        setCategory(i)
        history.push('/manage_category')
    }
    return(
        <>
    <h4 className="text-center my-4">{props.match.params.category} Category Details</h4>
    <hr/>
    
    <div className="row header">
        <div className="col"></div>
        <div className="col">
        <h4 className="text-center my-4 items">All Products in {props.match.params.category}
        
        </h4>
        </div>
        <div className="col">
            <Link className="btn btn-dark rounded-0" to="/manage_category">Back</Link>
        </div>
    </div>
    

    <div className="container">
    <table className="table">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Product</th>
                    <th>Consignment</th>
                    <th>Model</th>
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
                        <td>{item.model}</td>
                        <td>{item.stock__qty}</td>
                        <td>{item.cost__price}</td>
                        <td>{item.selling__price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            
        </table>

        <Link to={`/category/edit/${props.match.params.category}`} className="btn btn-info rounded-0">Edit Category</Link>
        <button className="btn btn-danger rounded-0 mx-2" onClick={()=>{if(window.confirm("Delete this category?All products under this category will be deleted.")){deleteModel(props.match.params.category)}}}>
        Delete Category</button>
    </div>
   
    </>
    )
}

export default ModelDetail