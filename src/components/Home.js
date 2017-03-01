import React, {Component} from 'react';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      service: []
    }
  }
  componentWillMount(){
    var services = ['Delivering professional and personalized care to your loved ones', 'Home visits with a personalized health plan', 'Transition Assistace', 'Advocacy and Guidance', 'Respite Care']
    var i=0;
    var currentItem = services[i];
    this.setState(
      service: currentItem
    )
  }

  componentDidMount(){
    var services = ['Delivering professional and personalized care to your loved ones', 'Home visits with a personalized health plan', 'Transition Assistace', 'Advocacy and Guidance', 'Respite Care']
    let i = 0;
    setInterval(function(){
      var currentService = services[i];
      this.setState(
        service: currentService
      );
      i++;
      if(i>=services.length){
        i = 0;
      }
    }, 2000);

  }
  render(){
    return(
      <div className="home">
        <div className="profile-img"></div>
        <div className="mission">
          <div className="overlay">
            {this.state.service}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
