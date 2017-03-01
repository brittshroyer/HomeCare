import React, {Component} from 'react';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      service: 'Delivering professional and personalized care to your loved ones'
    }
  }
  componentDidMount(){
    var services = ['Home Visits', 'Personalized Health Plan', 'Transition Assistance', 'Advocacy and Guidance', 'Respite Care', 'Delivering professional and personalized care to your loved ones']
    let i=0;
    var that = this;
    setInterval(function(){
      console.log('set interval working');
      const currentService = services[i];
      that.setState({
        service: currentService
      })
      i++;
      if(i>=services.length){
        i = 0;
      }
    }, 4000);
  }
  render(){
    console.log('this', this.state.service);
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
