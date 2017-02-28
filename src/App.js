import React, { Component } from 'react';
import './App.css';

import {Link, IndexLink} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Patty's <br></br> Concierge Nursing</h1>
          <p className="App-intro">
            <ul className="header">
              <li className="step1"><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
              <li className="step2"><Link to="/about" activeClassName="active">Patty's Bio</Link></li>
              <li className="step3"><Link to="/approach" activeClassName="active">Approach</Link></li>
              <li className="step4"><Link to="/testimonials" activeClassName="active">Testimonials</Link></li>
              <li className="step5"><Link to="/contact" activeClassName="active">Contact</Link></li>
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
