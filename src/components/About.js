import React, { Component } from 'react';
import { ReactComponent as Mountains } from '../images/mountains.svg';

class About extends Component {
  render() {
    return (
      <div id="about">
        <Mountains/>
        <div id="about-inner">
          <h3>ABOUT</h3>
        </div>
      </div>
    )
  }
}

export default About