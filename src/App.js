import React from "react";
import "./App.css";
import axios from "axios";
// Bootstrap import
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Components import
import {TopNav,Footer,CompanySelect} from './Components/ComponentsImport'
import CompanyCreate from './Components/Company/CompanyCreate'
// React router import
import { BrowserRouter as Router, Switch, Route,useHistory } from "react-router-dom";



// Mousetrap
import useMousetrap from "react-hook-mousetrap"


// API import
import { CompanyProvider } from "./API";


const Back=()=>{
  const history=useHistory()

  useMousetrap('esc',()=>{
    history.goBack();
   
  })
}

const App = () => {

  return (
    

    <Router>   
      <>
      <TopNav />
      <CompanyProvider>
        <Switch>
        <Route path="/" exact render={()=><CompanySelect back={Back}/>}/>
        <Route path="/company/create" exact render={()=><CompanyCreate back={Back}/>}/>
          
        
      </Switch>
      </CompanyProvider>
      <Footer/>
    </>
    </Router>
 
  );
};

export default App;
