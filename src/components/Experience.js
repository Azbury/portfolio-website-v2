import React, { Component } from 'react';
import { ReactComponent as Trees } from '../images/trees.svg';

class Experience extends Component {
  render() {
    return (
      <div id="experience">
        <Trees/>
        <div id="experience-inner">
          <h3 id="about-header">ABOUT</h3>
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
      </div>
    )
  }
}

export default Experience