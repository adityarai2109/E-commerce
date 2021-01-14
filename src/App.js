import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Header.js';
import Header from "./Header.js";
import Catalogue from "./Catalogue.js"
import Home from "./Home.js";
import Categories from "./Categories.js"



function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <Header />
            <h1>Login</h1>
            
          </Route>
          <Route path="/">
            <Header />
            <Catalogue />
            <Categories />
            <Home />

          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
