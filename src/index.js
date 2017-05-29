import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import './Mediaqueries.css';

import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Approach from './components/Approach.jsx';
import Services from './components/Services.jsx';


ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/backstory" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/approach" component={Approach} />
      <Route path="/services" component={Services} />
    </Route>

  </Router>),
  document.getElementById('root')
);
