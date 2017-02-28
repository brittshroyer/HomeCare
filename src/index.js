import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';


ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </Route>

  </Router>),
  document.getElementById('root')
);
