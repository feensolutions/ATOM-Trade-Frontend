import React from "react";
import "./App.css";
import axios from "axios";
// Bootstrap import
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Components import
import {
  TopNav,
  Footer,
  CompanySelect,
  AdminDashboard,
  Inventory,
  StockGroup,
  StockCreate,
} from "./Components/ComponentsImport";
import CompanyCreate from "./Components/Company/CompanyCreate";
// React router import
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

// Mousetrap
import useMousetrap from "react-hook-mousetrap";

// API import
import { CompanyProvider, StockGroupProvider } from "./API";

const Back = () => {
  const history = useHistory();

  useMousetrap("esc", () => {
    history.goBack();
  });
};

const App = () => {
  return (
    <Router>
      <>
        <TopNav />
        <CompanyProvider>
          <StockGroupProvider>
            <Switch>
              <Route
                path="/"
                exact
                render={() => <CompanySelect Back={Back} />}
              />
              <Route
                path="/company/create"
                exact
                render={() => <CompanyCreate Back={Back} />}
              />

              <Route
                path="/company/:name"
                exact
                render={() => <AdminDashboard Back={Back} />}
              />

              <Route
                path="/:name/Inventory"
                exact
                render={() => <Inventory Back={Back} />}
              />

              <Route
                path="/:name/Inventory/Stock Groups"
                exact
                render={() => <StockGroup Back={Back} />}
              ></Route>

              <Route
                path="/:name/Inventory/stock_group/Create"
                exact
                render={() => <StockCreate Back={Back} />}
              />
            </Switch>
          </StockGroupProvider>
        </CompanyProvider>
        <Footer />
      </>
    </Router>
  );
};

export default App;
