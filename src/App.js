import React from "react";
import "./App.css";

// Bootstrap import
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Components import
import LandingPage from "./Components/LandingPage";
import AdminDashboard from "./Components/Dashboard/Admin/Admin__Dashboard";
// Product
import AddProduct from "./Components/Product/AddProduct";
import ProductDetail from "./Components/Product/ProductDetail";
import ManageProduct from "./Components/Product/ManageProduct";
// Consignment
import ManageConsignment from "./Components/Consignment/ManageConsignment";
import NewConsignment from "./Components/Consignment/NewConsignment";
import ConsignmentDetail from "./Components/Consignment/ConsignmentDetail";
import EditConsignment from "./Components/Consignment/EditConsignment";
import AddProductToConsignment from "./Components/Consignment/AddProduct";
// Category
import ManageCategory from "./Components/Category/ManageCategory";
import NewCategory from "./Components/Category/NewCategory";
import CategoryDetail from "./Components/Category/CategoryDetail";
import CategoryEdit from "./Components/Category/CategoryEdit";
// Model
import ManageModel from "./Components/Model/ManageModel";
import NewModel from "./Components/Model/NewModel";
import ModelDetail from "./Components/Model/ModelDetail";
import ModelEdit from "./Components/Model/ModelEdit";
// Invoice
import ManageInvoice from "./Components/Invoice/ManageInvoice";
import NewInvoice from "./Components/Invoice/NewInvoice";
// User
import AddUser from "./Components/User/AddUser";
import ManageUser from './Components/User/ManageUser'
// React router import
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// API import
import {
  ProductProvider,
  ConsignmentProvider,
  ModelProvider,
  EngineProvider,
  CategoryProvider,
  UserProvider,
} from "./API";

function App() {
  return (
    <ProductProvider>
      <ConsignmentProvider>
        <ModelProvider>
          <EngineProvider>
            <CategoryProvider>
              <UserProvider>
                <Router>
                  <div className="App">
                    {/* Landing Page */}
                    {/* <LandingPage/> */}

                    <AdminDashboard />
                    <Switch>
                      <Route path="/manage_product" exact>
                        <ManageProduct />
                      </Route>

                      <Route
                        path="/add_product"
                        exact
                        component={AddProduct}
                      ></Route>

                      <Route
                        path="/add_product/:consignment"
                        exact
                        component={AddProductToConsignment}
                      ></Route>

                      <Route
                        path="/product/:product/:model/:category/:consignment"
                        exact
                        component={ProductDetail}
                      ></Route>

                      <Route path="/manage_consignment">
                        <ManageConsignment />
                      </Route>

                      <Route path="/new_consignment">
                        <NewConsignment />
                      </Route>

                      <Route
                        path="/consignment/:consignment"
                        exact
                        component={ConsignmentDetail}
                      ></Route>
                      <Route
                        path="/consignment/edit/:consignment"
                        exact
                        component={EditConsignment}
                      ></Route>
                      <Route path="/manage_category">
                        <ManageCategory />
                      </Route>

                      <Route path="/new_category">
                        <NewCategory />
                      </Route>

                      <Route
                        path="/category/:category"
                        exact
                        component={CategoryDetail}
                      ></Route>

                      <Route
                        path="/category/edit/:category"
                        exact
                        component={CategoryEdit}
                      ></Route>

                      <Route path="/manage_model">
                        <ManageModel />
                      </Route>

                      <Route path="/new_model">
                        <NewModel />
                      </Route>

                      <Route
                        path="/model/:model"
                        exact
                        component={ModelDetail}
                      ></Route>

                      <Route
                        path="/model/edit/:model"
                        exact
                        component={ModelEdit}
                      ></Route>

                      <Route
                        path="/manage_invoice"
                        exact
                        component={ManageInvoice}
                      ></Route>

                      <Route
                        path="/new_invoice"
                        exact
                        component={NewInvoice}
                      ></Route>

                      <Route path="/new_user" exact component={AddUser}></Route>

                      <Route path="/manage_user" exact component={ManageUser}></Route>
                    </Switch>
                  </div>
                </Router>
              </UserProvider>
            </CategoryProvider>
          </EngineProvider>
        </ModelProvider>
      </ConsignmentProvider>
    </ProductProvider>
  );
}

export default App;
