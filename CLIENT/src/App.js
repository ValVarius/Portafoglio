import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import "./portfolio.css"

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>


    <Switch>

    <Route exact path="/">
      <Home/>
    </Route>

    <Route exact path="/portfolio">
      <Home/>
    </Route>

    <Route exact path="/contacts">
      <Home/>
    </Route>

    </Switch>

    </div>
    </Router>
  );
}

export default App;
