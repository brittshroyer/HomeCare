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
    var services = ['Home Visits', 'Personalized Health Plan', 'Transition Assistance', 'Hospital Stay Enhancement', 'Advocacy and Guidance', 'Respite Care', 'Wellness Education']
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
    }, 2000);
  }
  render(){
    return(
      <div>
        <div className="home">
          <ProfilePic />
          <div className="mission">
            <div className="overlay">
              <p>{this.state.service}</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>


    )
  }
}
export default Home;
