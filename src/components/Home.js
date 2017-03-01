import React, {Component} from 'react';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      service: ''
    }
  }
  componentDidMount(){
    var services = ['Delivering professional and personalized care to your loved ones','Home visits with a personalized health plan', 'Transition Assistace', 'Advocacy and Guidance', 'Respite Care']
    const i=0;
    const currentItem = services[i];
    this.setState.bind(this)({
      service: currentItem
    })
  }

  componentDidUpdate(){
    var services = ['Delivering professional and personalized care to your loved ones', 'Home visits with a personalized health plan', 'Transition Assistace', 'Advocacy and Guidance', 'Respite Care']
    let i = 1;
    setInterval(function(){
      console.log('set interval working');
      const currentService = services[i];
      i++;
      if(i>=services.length){
        i = 0;
      }
      this.setState.bind(this)({
        service: currentService
      })
    }, 2000);
  }
  render(){
    return(
      <div className="home">
        <div className="profile-img"></div>
        <div className="mission">
          <div className="overlay">
            <p>{this.state.service}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
