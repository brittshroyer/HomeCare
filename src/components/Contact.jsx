import React, {Component} from 'react';


class Contact extends Component{
  render(){
    return(
      <div>
        <div className="infoContainer">
          <div className="myInfo">
            <h2>Get In Touch</h2>
            <i className="fa fa-phone fa-1x" aria-hidden="true"></i>&nbsp;&nbsp;<p>440-666-0070</p><br/>
            <i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;<p>pcshroyer@gmail.com</p>
          </div>
        </div>
        <div className="emailForm">
          <form method="post" action="acknowledge.php">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name"></input>

            <label for ="email">Email:</label>
            <input type="email" name="email" id="email"></input>

            <label for="comments">Message:</label>
            <textarea name="comments" id="comments"></textarea>

            <input type="submit" name="send" value="Send Message"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
