import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from './home.container';
const App = () => (
  <BrowserRouter>
      <Route exact path="/" component={HomeContainer}/>
  </BrowserRouter>
);

export default App;
