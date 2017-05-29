import React, { Component } from 'react';

class Services extends Component{

  showHomeVisits(){
    // document.getElementById('home-visits-circle').style.background = '#551a8b';
    document.getElementById('respite-care-blurb').style.display = 'none';
    document.getElementById('transition-assistance-blurb').style.display = 'none';
    document.getElementById('advocacy-blurb').style.display = 'none';
    document.getElementById('home-visits-blurb').style.display = 'block';
  }
  showTransitionAssistance() {
    // document.getElementById('transition-assistance-circle').style.background = '#551a8b';
    document.getElementById('home-visits-blurb').style.display = 'none';
    document.getElementById('advocacy-blurb').style.display = 'none';
    document.getElementById('respite-care-blurb').style.display = 'none';
    document.getElementById('transition-assistance-blurb').style.display = 'block';
  }
  showAdvocacy() {
    // document.getElementById('advocacy-circle').style.background = '#551a8b';
    document.getElementById('home-visits-blurb').style.display = 'none';
    document.getElementById('respite-care-blurb').style.display = 'none';
    document.getElementById('transition-assistance-blurb').style.display = 'none';
    document.getElementById('advocacy-blurb').style.display = 'block';
  }
  showRespiteCare() {
    // document.getElementById('respite-care-circle').style.background = '#551a8b';
    document.getElementById('home-visits-blurb').style.display = 'none';
    document.getElementById('advocacy-blurb').style.display = 'none';
    document.getElementById('transition-assistance-blurb').style.display = 'none';
    document.getElementById('respite-care-blurb').style.display = 'block';
  }
  darkenHomeVisitsCircle(){
    document.getElementById('home-visits-circle').style.background = '#551a8b';
  }
  lightenHomeVisitsCircle(){
    document.getElementById('home-visits-circle').style.background = '#66CCFF';
  }
  darkenTransitionCircle(){
    document.getElementById('transition-assistance-circle').style.background = '#551a8b';
  }
  lightenTransitionCircle(){
    document.getElementById('transition-assistance-circle').style.background = '#0099CC';
  }
  darkenAdvocacyCircle(){
    document.getElementById('advocacy-circle').style.background = '#551a8b';
  }
  lightenAdvocacyCircle(){
    document.getElementById('advocacy-circle').style.background = '#003399';
  }
  darkenRespiteCircle(){
    document.getElementById('respite-care-circle').style.background = '#551a8b';
  }
  lightenRespiteCircle(){
    document.getElementById('respite-care-circle').style.background = '#000080';
  }

  render(){
    return(
      <div className="services-container">
        <div className="services-div">
          <div className="service">
            <div className="circle home-visits" id="home-visits-circle" onClick={() => this.showHomeVisits()} onMouseOver={() => this.darkenHomeVisitsCircle()} onMouseOut={() => this.lightenHomeVisitsCircle()}><p>Home Visits</p></div>
          </div>
          <div className="service">
            <div className="circle transition-assistance" id="transition-assistance-circle" onClick={() => this.showTransitionAssistance()} onMouseOver={() => this.darkenTransitionCircle()} onMouseOut={() => this.lightenTransitionCircle()}><p>Transition Assistance</p></div>
          </div>
          <div className="service">
            <div className="circle advocacy" id="advocacy-circle" onClick={() => this.showAdvocacy()} onMouseOver={() => this.darkenAdvocacyCircle()} onMouseOut={() => this.lightenAdvocacyCircle()}><p>Advocacy</p></div>
          </div>
          <div className="service">
            <div className="circle respite-care" id="respite-care-circle" onClick={() => this.showRespiteCare()} onMouseOver={() => this.darkenRespiteCircle()} onMouseOut={() => this.lightenRespiteCircle()}><p>Respite Care</p></div>
          </div>
        </div>
        <div className="services-icons">
          <div id="home">
            <i className="fa fa-home fa-5x" aria-hidden="true"></i>
          </div>
          <div id="transition">
            <i className="fa fa-h-square fa-5x" aria-hidden="true"></i>
          </div>
          <div id="advocacy">
            <i className="fa fa-group fa-5x" aria-hidden="true"></i>
          </div>
          <div id="respite">
            <i className="fa fa-bed fa-5x" aria-hidden="true"></i>
          </div>
        </div>

        <div className="service-description">
          <p id="home-visits-blurb">
            <h2>Home Visits</h2>
            <p className="blurb">
            -Physical and psychosocial assessment<br></br>
            -obtain a detailed health history<br></br>
            -Devise an individualized plan of care<br></br>
            -Manage symptoms of chronic illnesses, teach them about their diagnosis and intervene if changes occur<br></br>
            -Assess home living conditions and implement specific fall prevention strategies<br></br>
            -Optimize nutritional needs<br></br>
            -Reinforce physician prescribed therapies</p>
          </p>
          <p id="transition-assistance-blurb">
            <h2>Transition Assistance</h2>
            <p className="blurb">
              -Provide post-hospitalization home care<br></br>
              -Address recovery challenges and ensure discharge instructions are clearly understood<br></br>
              -Monitor progress<br></br>
              -Assist with mobility issues<br></br>
              -Modify surroundings to ensure safety<br></br>
              -Enhance nursing care to elders in assisted living facilities<br></br><br></br>
              *It is essential to understand the medical/nursing limitations of the facility staff. Under my  supervision you can be assured that your loved one's needs are being met and the facility is fulfilling services.</p>
          </p>
          <p id="advocacy-blurb">
            <h2>Advocacy</h2>
            <p className="blurb">
            -Accompany seniors to medical appointments to ensure good questions are being asked and answers understood<br></br>
            -Coordinate medical appointments<br></br>
            -Ensure that elders and their families understand their health care options<br></br>
            -Equip families with creative strategies that optimize outcomes<br></br>
            -Communicate directly with family members to help them make informed decisions</p>
          </p>
          <p id="respite-care-blurb">
            <h2>Respite Care</h2>
            <p className="blurb">Temporary care of loved ones to provide relief for their usual caregivers. Please call me to discuss how I can best suit your needs.</p>
          </p>
        </div>
      </div>

    )
  }
}

export default Services;
