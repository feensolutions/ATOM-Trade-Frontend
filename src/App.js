import React from "react";
import "./App.css";
import axios from "axios";
// Bootstrap import
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Components import
import {TopNav,Footer,CompanySelect} from './Components/ComponentsImport'
import CompanyCreate from './Components/Company/CompanyCreate'
// React router import
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



// API import
import { CompanyProvider } from "./API";
const App = () => {
  return (
    <Router>   
      <>
      <TopNav />
      <CompanyProvider>
        <Switch>
        <Route path="/" exact component={CompanySelect}/>
        <Route path="/company/create" exact component={CompanyCreate}/>
          
        
      </Switch>
      </CompanyProvider>
      <Footer/>
    </>
    </Router>
 
  );
};

export default App;
