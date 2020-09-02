import React from 'react';
import { Route } from "react-router-dom"

import Nav from "./componets/Nav"
import Splashpage from "./componets/Splashpage"
import Blog from "./componets/Blog"
import About from "./componets/About"
import Contact from "./componets/Contact"

import './App.css';


function App() {
  return (
    <div className="App">
    
      <Nav />
      <Route exact path="/" component={Splashpage} />
      <Route path="/Blog" component={Blog} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      
      


    </div>
  );
}

export default App;
