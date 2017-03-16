import React, {Component} from 'react';


class Contact extends Component{
  render(){
    return(
      <div className="contact">
        <div className="infoContainer">
          <div className="myInfo">
            <h2>Get In Touch</h2>
            <i className="fa fa-phone fa-1x" aria-hidden="true"></i>&nbsp;&nbsp;<p>440-666-0070</p><br/>
            <i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;<p>pcshroyer@gmail.com</p>
          </div>
        </div>
        <form method="Get" action="mailto:pcshroyer@gmail.com" className="contactSection">
          <div className="name-email">
            <div className="enterName">
              <label for="name">Name:</label>
              <input type="text" name="name" id="name" className="input"></input>
            </div>
            <div className="enterEmail">
              <label for ="email">Email:</label>
              <input type="email" name="email" id="email" className="input"></input>
            </div>
          </div>
          <div className="messageSection">
            <div className="enterMessage">
              <label for="comments">Message:</label>
              <textarea name="comments" id="comments" className="textBox">
              </textarea>
            </div>
            <div className="send-btn">
              <input type="submit" name="send" value="Send" className="send-msg"></input>
            </div>
          </div>
        </form>

      </div>
    );
  }
}

export default Contact;
