import React, { Component } from 'react';
import { ReactComponent as Waves } from '../images/waves.svg';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <Waves/>
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
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/kNOEWbzpY90?si=BnW5IDf1zoxrdF7q" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen="true"
            >
            </iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects