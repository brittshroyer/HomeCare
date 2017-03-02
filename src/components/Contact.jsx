import React, {Component} from 'react';


class Contact extends Component{
  render(){
    return(
      <div>
        <div className="myInfo">
          <h2>Get In Touch</h2>
          <p>440-666-0070</p>
          <p>pcshroyer@gmail.com</p>
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
