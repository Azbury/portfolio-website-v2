import React from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import InstagramIcon from '@mui/icons-material/Instagram';
import { ReactComponent as CartoonAustinMain } from '../images/cartoon_austin_main.svg';

const Introduction = () => {
    useGSAP(() => {
      // gsap code here...
      gsap.to("#clock-arm", { rotation: 360, duration: 3, transformOrigin: '50% 76%', ease: "none", repeat: -1}); // <-- automatically reverted
    
    });

    return (
      <header id="header">
        <h1 id="full-name">AUSTIN ASBURY</h1>
        <h2 id="job-title">Frontend Developer</h2>
        <div className="social-media-buttons">
          <a href="https://github.com/Azbury" className="social-media-button"><GitHubIcon/></a>
          <a href="https://www.youtube.com/channel/UCXQTimEpdLhoYKFTCwnX2DQ" className="social-media-button"><YouTubeIcon/></a>
        </div>
        <CartoonAustinMain/>
        <div className="social-media-buttons">
          <a href="https://www.linkedin.com/in/austin-asbury/" className="social-media-button"><LinkedInIcon/></a>
          <a href="https://github.com/Azbury" className="social-media-button"><GitHubIcon/></a>
          <a href="https://www.youtube.com/channel/UCXQTimEpdLhoYKFTCwnX2DQ" className="social-media-button"><YouTubeIcon/></a>
          <a href="https://www.linkedin.com/in/austin-asbury/" className="social-media-button"><LinkedInIcon/></a>
        </div>
      </header>
    )
}

export default Introduction