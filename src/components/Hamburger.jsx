import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link } from  'react-router';
import Radium from 'radium';

let RadiumLink = Radium(Link);


class Hamburger extends Component {

  render(){
    var isMenuOpen = function(state) {
      console.log(state.isOpen);
      return state.isOpen;
    }
    console.log('yo', isMenuOpen );
    return(
      <Menu right noOverlay width={ 220 } onStateChange={ isMenuOpen }>
        <RadiumLink onClick={ isMenuOpen } className="menu-item" href="/#">Home</RadiumLink>
        <RadiumLink className="menu-item" href="/#/about">Patty's Bio</RadiumLink>
        <RadiumLink className="menu-item" href="/#/approach">Approach</RadiumLink>
        <RadiumLink className="menu-item" href="/#/testimonials">Testimonials</RadiumLink>
        <RadiumLink className="menu-item" href="/#/contact">Contact</RadiumLink>
      </Menu>
    )
  }
}

export default Hamburger;
