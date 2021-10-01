import React from "react";
import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Header from "./Header/Header.js";
// import Catalogue from "./Catalogue/Catalogue.js"
// import Home from "./Home/Home.js";
// import Categories from "./Categories/Categories.js"
// import CustomCarousel from "./CustomCarousel/CustomCarousel.js";

import Header from "./components/header2";
import Carousel from "./components/bootstrapcarousel";
import Gallery from "./components/f2g3";
import Taglines from "./components/taglines";
import Testimonials from "./components/testimonial3";
import Contact from "./components/contact2";
import Footer from "./components/footer5";

function App() {
  // return (
  //   <Router>
  //     <div className="app">
  //       <Switch>
  //         <Route path="/checkout">
  //           <customCarousel />
  //           <Header />
  //           <h1>Checkout</h1>
  //         </Route>
  //         <Route path="/login">
  //           <Header />
  //           <h1>Login</h1>

  //         </Route>
  //         <Route path="/">
  //           <Header />
  //           <Catalogue />
  //           <CustomCarousel />
  //           <Categories />
  //           <Home />

  //         </Route>
  //       </Switch>
  //     </div>
  //   </Router>);
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Gallery />
      <Taglines />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
