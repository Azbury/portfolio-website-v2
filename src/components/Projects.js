import React, { Component } from 'react';
import { ReactComponent as Waves } from '../images/waves.svg';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import PortfolioWebsite from '../images/portfolio-website-v1.png';

class Projects extends Component {
  render() {
    return (
      <div id="projects-outer-wrapper">
        <Waves/>
        <div id="projects-wrapper">
          <div ref={this.props.scrollReference} id="projects">
            <div id="projects-inner">
              <h3 className="section-header">PROJECTS</h3>
              <div className="projects-section">
                <a className="projects-title" href="https://github.com/Azbury/osrs-bot" target="_blank" rel="noreferrer">
                  Old School RuneScape Scripting Bot<ArrowOutwardIcon fontSize="small"/>
                </a>
                <p>
                  An Old School RuneScape scripting bot built with JavaScript designed to automate in-game tasks through 
                  the game's web client. This scripting bot mimics human actions such as agility training, combat, or fire making,
                  allowing players to accumulate resources or experience without actively playing.
                </p>
                <iframe 
                  className="projects-video"
                  width="100%" 
                  height="315" 
                  src="https://www.youtube.com/embed/kNOEWbzpY90?si=BnW5IDf1zoxrdF7q" 
                  title="OSRS bot video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" 
                  allowfullscreen="true"
                >
                </iframe>
                <a className="projects-title" href="https://github.com/Azbury/iq-card-memory-game" target="_blank" rel="noreferrer">
                  IQ Memory Card Game<ArrowOutwardIcon fontSize="small"/>
                </a>
                <p>
                  This is a game built using React.js, HTML, CSS, with a Ruby on Rails API for the backend. The game allows a user to enter a 
                  username and take them to their user page. They can either start a new game or view the leaderboard page for the game. 
                  The game is an card memory matching game where they are given the time view the position of cards and then they have to flip 
                  them over and match them from their memory. A user gains 10 points for every correct answer, and loses 10 points for every wrong answer.
                </p>
                <iframe 
                  className="projects-video"
                  width="100%" 
                  height="315" 
                  src="https://www.youtube.com/embed/FtUPbcKe2Eg?si=i14ybQeKJDG5Mukt" 
                  title="IQ Memory Card Game video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" 
                  allowfullscreen="true"
                >
                </iframe>
                <a className="projects-title" href="https://github.com/Azbury/portfolio-website" target="_blank" rel="noreferrer">
                  Portfolio Website V1<ArrowOutwardIcon fontSize="small"/>
                </a>
                <p>
                  The link provided directs to version 1 of my portfolio website, showcasing my initial design and content choices. 
                  The website highlights more about myself, my projects, skills, and contact information. Version 1 represents my early 
                  efforts in creating a professional online presence, aiming to effectively showcase my skills and achievements to potential clients or employers
                </p>
                <a className="portfolio-website-image" href="https://austinasbury.web.app/" target="_blank" rel="noreferrer"> 
                  <img className="portfolio-website-image" src={PortfolioWebsite} alt="Portfolio Website V1"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects