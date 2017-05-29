import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends Component {
  render(){
    return(
      <div className="App-header">
        <h1>Relief RN</h1>
        <p className="App-intro">
          <ul className="header">
            <li className="step1"><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li className="step2"><Link to="/backstory" activeClassName="active">Backstory</Link></li>
            <li className="step3"><Link to="/approach" activeClassName="active">Mission</Link></li>
            <li className="step4"><Link to="/services" activeClassName="active">Services</Link></li>
            <li className="step5"><Link to="/contact" activeClassName="active">Contact</Link></li>
          </ul>
        </p>
      </div>
    )
  }
}

export default Nav;
