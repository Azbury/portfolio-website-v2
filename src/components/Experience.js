import React, { Component } from 'react';
import { ReactComponent as Trees } from '../images/trees.svg';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

class Experience extends Component {
  render() {
    return (
      <div id="experience-outer-wrapper">
        <Trees/>
        <div id="experience-wrapper">
          <div ref={this.props.scrollReference} id="experience">
            <div id="experience-inner">
              <h3 className="section-header">EXPERIENCE</h3>
              <div className="experience-section">
                <span className="experience-years">2020 <code>&#8212;</code> Present</span>
                <a className="experience-title" href="https://ritterim.com/" target="_blank" rel="noreferrer">UX/UI Developer - Ritter Insurance Marketing <ArrowOutwardIcon fontSize="small"/></a>
                <span className="experience-title">Jr. UX/UI Developer</span>
                <ul className="experience-description">
                  <li>
                    Lead front-end developer for a contract system developed with Vue.js 2, enabling insurance
                    agents to select, answer questions, and electronically sign contracts. Managed the
                    integration of these contracts into the company database and developed a user-friendly
                    interface for internal processing.
                  </li>
                  <li>
                    Lead front-end developer for a call recording system, equipping insurance agents with the
                    capability to record inbound and outbound calls, enhancing compliance and customer service standards.
                  </li>
                  <li>
                    Created other various Vue.js 2 applications integrated into the company's CMS "The Platform", enriching its functionality and user experience.
                  </li>
                  <li>
                    Successfully converted the primary company website,"The Platform,"from Vue.js 2 to
                    Vue.js 3, overseeing the migration of numerous Vue.js 2 applications within the site.
                  </li>
                  <li>
                    Maintained and optimized static site generators (SSGs) initially built with Hugo, and later
                    migrated them to Astro for enhanced performance and flexibility.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Experience