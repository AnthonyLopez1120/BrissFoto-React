import React from 'react';
import { Route } from "react-router-dom"
import Splashpage from "./componets/Splashpage"

import './App.css';
import Gallery from './componets/Gallery';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Splashpage} />
      <Route path="/Galeria" component={Gallery} />
      


    </div>
  );
}

export default App;
