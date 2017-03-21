import React, { Component } from 'react';
import './App.css';
import './express/index.js';
import Nav from './components/Nav';
import Hamburger from './components/Hamburger';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hamburger />
        <Nav />    
        <div className="content">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
