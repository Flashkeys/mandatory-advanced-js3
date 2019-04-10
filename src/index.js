import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Todos from './Todos.jsx';
//import NotFound from './NotFound.jsx';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
      <Route path="/Todos" component={Todos} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </Router>
  , document.getElementById('root')); 