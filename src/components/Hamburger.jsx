import React, { Component } from 'react';

var Menu = require('react-burger-menu').slide;

class Hamburger extends Component {
  showSettings(e){
    e.preventDefault();
  }
  render(){
    return(
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    )
  }
}

export default Hamburger;
