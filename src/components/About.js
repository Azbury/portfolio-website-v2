import React, { Component } from 'react';
import { ReactComponent as Mountains } from '../images/mountains.svg';
import PortfolioProfilePicture from '../images/portfolio_profile_picture.png';
import AustinCamp from '../images/austin_camp.jpeg';
import AustinSki from '../images/austin_ski.jpeg';

class About extends Component {
  render() {
    return (
      <div>
        <Mountains/>
        <div id="about-wrapper">
          <div ref={this.props.scrollReference} id="about">
            <div id="about-inner">
              <div id="about-content">
                <h3 className="section-header">ABOUT</h3>
                <p id="about-description">
                  Hey there! I'm Austin, a web developer who finds joy in crafting elegant code 
                  and exploring the great outdoors. I'm as passionate about coding as I am about 
                  embarking on adventures, whether it's hiking through rugged landscapes, camping 
                  under the stars, or hitting the slopes in winter. My love for nature fuels my 
                  creativity, bringing fresh perspectives to my work. I thrive in environments 
                  where innovation meets challenge, constantly pushing boundaries and seeking new 
                  heights. Let's connect and embark on this exciting journey together!
                </p>
              </div>
              <div id="about-pictures">
                <img id="about-headshot" className="about-picture" src={PortfolioProfilePicture} alt="Austin Asbury Headshot"/>
                <img id="about-camp" className="about-picture" src={AustinCamp} alt="Austin Asbury Camp"/>
                <img id="about-ski" className="about-picture" src={AustinSki} alt="Austin Asbury Ski"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About