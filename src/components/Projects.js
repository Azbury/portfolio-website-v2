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
            <p>test</p>
            <a className="projects-title" href="https://github.com/Azbury/osrs-bot" target="_blank" rel="noreferrer">
              Old School RuneScape Scripting Bot <ArrowOutwardIcon fontSize="small"/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects