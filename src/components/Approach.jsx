import React, { Component } from 'react';
import Footer from './Footer';

class Approach extends Component{
  render(){
    return(
      <div className="approach">
        <p className="case-header">Meeting the underserved needs of the frail and elderly.</p>
        <p className="case case-for-home"> According to the National Council on Aging, "falls are the leading cause of fatal injury and and trauma related hospital admissions among older adults."  Those who fall inevitably experience functional decline thereafter. Approximately ninety percent of seniors prefer to remain at home for as long as possible.  My Professional nursing oversight will advance wellness initiatives and focus on preventive safety measures.   Senior care should be aimed at facilitating their sense of control and assisting them in taking ownership of their health outcomes. Beyond that, I am committed to addressing family members' concerns and delivering any and all of health care needs as they arise. Tackling the big picture removes stress and provides reassurance to all.</p>
        <Footer />
      </div>
    )
  }
}

export default Approach;
