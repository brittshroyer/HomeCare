import React, { Component } from 'react';
import './App.css';

import {Link, IndexLink} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Patty's Concierge Nursing</h1>
          <p className="App-intro">
            <ul className="header">
              <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
              <li><Link to="/about" activeClassName="active">Patty's Bio</Link></li>
              <li><Link to="/approach" activeClassName="active">Approach</Link></li>
              <li><Link to="/testimonials" activeClassName="active">Testimonials</Link></li>
              <li><Link to="/contact" activeClassName="active">Contact</Link></li>
            </ul>
          </p>
        </div>
        <div className="content">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
