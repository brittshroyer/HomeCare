import React, { Component } from 'react';
import './App.css';
import './express/index.js';
import Nav from './components/Nav';
import Hamburger from './components/Hamburger';



class App extends Component {

  render() {
    return (
      <div className="App" id="outer-container">
        <Hamburger />
        <main id="page-wrap">
          <Nav />
          <div className="content">
            { this.props.children }
          </div>
        </main>
      </div>
    );
  }
}

export default App;
