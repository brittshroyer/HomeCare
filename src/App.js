import React, { Component } from 'react';

import './App.css';

import {Link, IndexLink} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Patty's Concierge Nursing</h1>
        </div>
        <p className="App-intro">
          <ul className="header">
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
            <li><Link to="/contact" activeClassName="active">Contact</Link></li>
          </ul>
        </p>
        <div className="content">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
