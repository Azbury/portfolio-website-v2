import React, { Component } from 'react'
import CartoonAustin from '../images/cartoon_austin.png';
import Mountains from '../images/mountains.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import InstagramIcon from '@mui/icons-material/Instagram';

class Introduction extends Component {
  render() {
    return (
      <header id="header">
        <h1 id="full-name">AUSTIN ASBURY</h1>
        <h2 id="job-title">Frontend Developer</h2>
        <div id="social-media-buttons">
          <a href="https://www.linkedin.com/in/austin-asbury/" className="social-media-button"><LinkedInIcon/></a>
          <a href="https://github.com/Azbury" className="social-media-button"><GitHubIcon/></a>
          <a href="https://www.youtube.com/channel/UCXQTimEpdLhoYKFTCwnX2DQ" className="social-media-button"><YouTubeIcon/></a>
        </div>
        <img src={CartoonAustin} id="cartoon-austin" alt="cartoon-austin"/>
        <div id="social-media-buttons-2">
          <a href="https://www.linkedin.com/in/austin-asbury/" className="social-media-button"><LinkedInIcon/></a>
          <a href="https://github.com/Azbury" className="social-media-button"><GitHubIcon/></a>
          <a href="https://www.youtube.com/channel/UCXQTimEpdLhoYKFTCwnX2DQ" className="social-media-button"><YouTubeIcon/></a>
        </div>
        <img src={Mountains} id="mountains" alt="mountains"/>
        <div id="below-mountains"></div>
      </header>
    )
  }
}

export default Introduction