import React, { Component } from 'react';

class Testimonials extends Component{
  render(){
    return(
      <div className="services-container">
        <div className="services-div">
          <div className="service">
            <div className="circle home-visits"><p>Home Visits</p></div>
          </div>
          <div className="service">
            <div className="circle transition-assistance"><p>Transition Assistance</p></div>
          </div>
          <div className="service">
            <div className="circle advocacy"><p>Advocacy</p></div>
          </div>
          <div className="service">
            <div className="circle respite-care"><p>Respite Care</p></div>
          </div>
        </div>
        <div className="services-icons">
          <div id="home">
            <i className="fa fa-home fa-5x" aria-hidden="true"></i>
          </div>
          <div id="transition">
            <i className="fa fa-h-square fa-5x" aria-hidden="true"></i>
          </div>
          <div id="advocacy">
            <i className="fa fa-group fa-5x" aria-hidden="true"></i>
          </div>
          <div id="respite">
            <i className="fa fa-bed fa-5x" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default Testimonials;
