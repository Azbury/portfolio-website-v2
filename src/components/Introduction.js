import React, { Component } from 'react'
import ProfilePicture from "../images/portfolio_profile_picture.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

class Introduction extends Component {
  render() {
    return (
      <header id="header">
        <img src={ProfilePicture} id="profile-picture"/>
        <h1 id="full-name">AUSTIN ASBURY</h1>
        <h2 id="job-title">Frontend Developer</h2>
        <div id="social-media-buttons">
          <a href="https://www.linkedin.com/in/austin-asbury/" className="social-media-button"><LinkedInIcon/></a>
          <a href="https://github.com/Azbury" className="social-media-button"><GitHubIcon/></a>
          <a href="https://www.youtube.com/channel/UCXQTimEpdLhoYKFTCwnX2DQ" className="social-media-button"><YouTubeIcon/></a>
          <a href="https://www.instagram.com/yuumodrone/" className="social-media-button"><InstagramIcon/></a>
        </div>
      </header>
    )
  }
}

export default Introduction