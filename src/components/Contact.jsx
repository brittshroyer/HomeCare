import React, {Component} from 'react';
import { Col } from 'react-bootstrap';


class Contact extends Component{
  render(){
    return(
      <div className="contact">
        <Col xs={12}>
          <div className="myInfo">
            <h2>Get In Touch</h2>
            <i className="fa fa-phone fa-3x" aria-hidden="true"></i>&nbsp;&nbsp;<p>440-666-0070</p><br/>
            <i className="fa fa-envelope fa-3x" aria-hidden="true"></i>&nbsp;&nbsp;<p>pcshroyer@gmail.com</p>
          </div>
        </Col>
      </div>
    );
  }
}

export default Contact;
