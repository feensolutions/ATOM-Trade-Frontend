import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../API";

const ProductList = ({ query }) => {
  const [product, setProduct] = useContext(ProductContext);
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (query === "") {
      let temp = [...product];
      setResult(temp);
    } else {
      let filteredRes = filterCollections(query);
      setResult(filteredRes);
    }
  }, [query]);

  const filterCollections = (filter) => {
    let filteredItems = [];
    let filterQuery = filter.toLowerCase();
    product.forEach((i) => {
      if (
        i.name.toLowerCase().includes(filterQuery) ||
        i.model.toLowerCase().includes(filterQuery) ||
        i.category.toLowerCase().includes(filterQuery) ||
        i.consignment.toLowerCase().includes(filterQuery)
      ) {
        filteredItems.push(i);
      }
    });

    return filteredItems;
  };
  return (
    <div className="consignment__list">
      {query !== "" ? (
        <h4 className="text-center mx-4">Result for "{query}"</h4>
      ) : (
        <h4 className="text-center mx-4">All Products</h4>
      )}
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Consignment</th>
            <th>Model</th>
            <th>Category</th>
            <th>Available Qty</th>
            <th>Cost Price</th>
            <th>Selling Price</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item, id) => (
            <tr key={id} className="data">
              <td>
                <Link
                  to={`/product/${item.name}/${item.model}/${item.category}/${item.consignment}`}
                >
                  {id + 1}
                </Link>
              </td>

              <td>
                {" "}
                <Link
                  to={`/product/${item.name}/${item.model}/${item.category}/${item.consignment}`}
                >
                  {item.name}
                </Link>{" "}
              </td>
              <td>
                {" "}
                <Link
                  to={`/product/${item.name}/${item.model}/${item.category}/${item.consignment}`}
                >
                  {item.consignment}
                </Link>{" "}
              </td>
              <td>
                {" "}
                <Link
                  to={`/product/${item.name}/${item.model}/${item.category}/${item.consignment}`}
                >
                  {item.model}
                </Link>{" "}
              </td>
              <td>
                {" "}
                <Link
                  to={`/product/${item.name}/${item.model}/${item.category}/${item.consignment}`}
                >
                  {item.category}
                </Link>
              </td>
              <td>
                {" "}
                <Link
                  to={`/product/${item.name}/${item.model}/${item.category}/${item.consignment}`}
                >
                  {item.stock__qty}
                </Link>{" "}
              </td>
              <td>
                <Link
                  to={`/product/${item.name}/${item.model}/${item.category}/${item.consignment}`}
                >
                  {item.cost__price}
                </Link>
              </td>
              <td>
                {" "}
                <Link
                  to={`/product/${item.name}/${item.model}/${item.category}/${item.consignment}`}
                >
                  {item.selling__price}
                </Link>
              </td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
