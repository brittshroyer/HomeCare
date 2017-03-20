import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from  'react-router';
import Radium from 'radium';

let RadiumLink = Radium(Link);

// var Menu = require('react-burger-menu').slide;

class Hamburger extends Component {
  showSettings(e){
    e.preventDefault();
  }
  render(){
    return(
      <Menu>
        <RadiumLink className="menu-item" href="/#">Home</RadiumLink>
        <RadiumLink className="menu-item" href="/#/about">About</RadiumLink>
        <RadiumLink className="menu-item" href="/#/contact">Contact</RadiumLink>
      </Menu>
    )
  }
}

export default Hamburger;
