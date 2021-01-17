import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from "./Header/Header.js";
import Catalogue from "./Catalogue/Catalogue.js"
import Home from "./Home/Home.js";
import Categories from "./Categories/Categories.js"
import CustomCarousel from "./CustomCarousel/CustomCarousel.js";



function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <customCarousel />
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
            <CustomCarousel />
            <Categories />
            <Home />
            

          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
