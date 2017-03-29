import React, { Component } from 'react';
import { scaleRotate as Menu } from 'react-burger-menu';
import { Link } from  'react-router';
import Radium from 'radium';

let RadiumLink = Radium(Link);


class Hamburger extends Component {

  render(){
    return(
      <Menu right noOverlay width={ 175 } isOpen={ false } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <RadiumLink className="menu-item" href="/#">Home</RadiumLink>
        <RadiumLink className="menu-item" href="/#/backstory">Backstory</RadiumLink>
        <RadiumLink className="menu-item" href="/#/approach">Mission</RadiumLink>
        <RadiumLink className="menu-item" href="/#/testimonials">Services</RadiumLink>
        <RadiumLink className="menu-item" href="/#/contact">Contact</RadiumLink>
      </Menu>
    )
  }
}

export default Hamburger;
