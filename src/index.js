import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import './Mediaqueries.css';

import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';


ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Route>

  </Router>),
  document.getElementById('root')
);
