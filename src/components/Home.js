import React, {Component} from 'react';

class Home extends Component{
  render(){
    return(
      <div className="home">
        <div className="profile-img"></div>
        <div className="mission">
          <div className="overlay">
            <p>Delivering professional and personalized care to your home.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
