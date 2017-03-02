import React, {Component} from 'react';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      service: 'Personal and Professional Care'
    }
  }
  componentDidMount(){
    var services = ['Home Visits', 'Personalized Health Plan', 'Transition Assistance', 'Hospital Stay Enhancement', 'Advocacy and Guidance', 'Respite Care']
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
    }, 3000);
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
        <div className="footer">
          <p>Delivering professional and personalized healthcare to your loved ones.</p>
        </div>
      </div>
    )
  }
}
export default Home;
