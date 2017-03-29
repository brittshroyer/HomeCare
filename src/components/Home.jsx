import React, {Component} from 'react';
import Footer from './Footer';
import ProfilePic from './ProfilePic';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      service: 'Personal and Professional Care'
    }
  }
  componentDidMount(){
    var services = ['Relief RN', 'Personalized Health Plan', 'Transition Assistance', 'Hospital Stay Enhancement', 'Advocacy and Guidance', 'Respite Care']
    let i=0;
    var that = this;
    setInterval(function(){
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
    return(
      <div className="home">
        <ProfilePic />
        <div className="mission">
          <div className="overlay">
            <p>{this.state.service}</p>
          </div>
        </div>
      <Footer />
      </div>
    )
  }
}
export default Home;
