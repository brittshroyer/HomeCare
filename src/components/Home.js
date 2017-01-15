import React, {Component} from 'react';

class Home extends Component{
  render(){
    return(
      <div className="home">

        <div className="mission">
          <h2>Bringing personalized and compassionate care to your home.</h2>
          <p>My mission is to enhance the lives of the elderly by delivering professional nursing care and advocacy services that allow them to maintain an independent dignified lifestyle.</p>
        </div>

        <div className="hero">
          <p>As health care consumers grow increasingly frustrated with our fragmented Health Care system, family care givers have been forced to take on much greater roles in caring for their aged parents and loved ones.
Overwhelmed Doctors seldom take the time to partner with families; time that could minimize hospitalizations and or institutionalization.  A recent article in my local paper pointed out an uptick in emergency calls to assisted living facilities and private homes of elderly residents. I believe that many of these calls could be avoided with ongoing comprehensive nursing visits for the purpose of identifying impending problems and intervening before a situations becomes urgent or life threatening
I can bridge the gaps in healthcare and help families maximize the quality of life of individuals with simple or complicated acute and chronic illnesses, all in the privacy of their home or assisted facility.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
