import React from 'react';
import './App.css';

// Bootstrap import
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// Components import
import LandingPage from './Components/LandingPage'
import AdminDashboard from './Components/Dashboard/Admin/Admin__Dashboard'
import AddProduct from './Components/Product/AddProduct'
import ManageConsignment from './Components/Consignment/ManageConsignment'
import NewConsignment from './Components/Consignment/NewConsignment'
import ConsignmentDetail from './Components/Consignment/ConsignmentDetail'
import ManageProduct from './Components/Product/ManageProduct'
import ManageCategory from './Components/Category/ManageCategory'
import NewCategory from './Components/Category/NewCategory'
import CategoryDetail from './Components/Category/CategoryDetail'
import CategoryEdit from './Components/Category/CategoryEdit'
import ManageModel from './Components/Model/ManageModel'
import NewModel from './Components/Model/NewModel'
import ModelDetail from './Components/Model/ModelDetail';
import ModelEdit from './Components/Model/ModelEdit';
// React router import
import {HashRouter as Router, Switch,Route} from 'react-router-dom'

// API import
import {ProductProvider,ConsignmentProvider,ModelProvider,EngineProvider,CategoryProvider} from './API'

function App() {
  return (
    <ProductProvider>
    <ConsignmentProvider>
    <ModelProvider>
    <EngineProvider>
    <CategoryProvider>
    <Router>
    <div className="App">
      {/* Landing Page */}
      {/* <LandingPage/> */}

    <AdminDashboard/>
    <Switch>

    <Route path="/manage_product">
        <ManageProduct/>
      </Route>
      
      <Route path="/add_product">
        <AddProduct/>
      </Route>

      <Route path="/manage_consignment">
        <ManageConsignment/>
      </Route>

      <Route path="/new_consignment">
        <NewConsignment/>
      </Route>

      <Route path="/consignment/:consignment" exact component={ConsignmentDetail}>
      </Route>

      <Route path="/manage_category">
        <ManageCategory/>
      </Route>
      
      <Route path="/new_category">
        <NewCategory/>
      </Route>

      <Route path="/category/:category" exact component={CategoryDetail}>
      </Route>

      <Route path="/category/edit/:category" exact component={CategoryEdit}>
      </Route>

      <Route path="/manage_model">
        <ManageModel/>
      </Route>

      <Route path="/new_model">
        <NewModel/>
      </Route>

      <Route path="/model/:model" exact component={ModelDetail}>
      </Route>

      <Route path="/model/edit/:model" exact component={ModelEdit}>
      </Route>
    </Switch>
    </div>
    </Router>
    </CategoryProvider>
    </EngineProvider>
    </ModelProvider>
    </ConsignmentProvider>
    </ProductProvider>
  );
}

export default App;
