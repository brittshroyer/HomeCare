import React, {Component} from 'react';
import ProfilePic from './ProfilePic';
import Footer from './Footer';


class About extends Component{
  render(){
    return(
      <div className="background">
        <ProfilePic />
        <div className="bioSummary">
          <h2 className="backstory-title">Backstory</h2>
          <p className="backstory-text">
          18 months ago, I was asked to look in on an elderly woman who had just returned home following hip surgery. Her children lived afar and wanted peace of mind. I would oversee her transition home and she would quickly resume her wholly independent lifestyle. Within one week it became clear that she needed more care than anticipated. The agency tasked with managing her rehab and making nursing visits was unaccommodating. Scheduling became a problem and she was stressed by all of the commotion. I felt uneasy leaving her alone. She was somewhat independent, but clearly needed ongoing nursing oversight. In addition to her immediate needs, she had several chronic health problems that, if not managed properly, threatened to undermine a successful recovery.<br></br>
          <br></br>Together, with her and her family, we crafted a more comprehensive arrangement and developed a care plan designed to meet her needs: a plan that allowed her to remain at home as she wished. My background in both Emergency and Orthopedic Nursing proved to be a tremendous asset.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
