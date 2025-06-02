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
              <a className="experience-card" href="https://insurasales.com/" target="_blank" rel="noreferrer">
                <div className="experience-year">2025 - Present</div>
                <div className="experience-content">
                  <div className="experience-title">
                    Insurasales <ArrowOutwardIcon fontSize="small"/>
                  </div>
                  <span className="experience-subtitle">Frontend Developer - Contract</span>
                  <ul>
                    <li className="experience-description">
                        Vue.js Development: Built and maintained core Vue.js + Laravel application with focus on 
                        scalability, performance, and maintainability. 
                    </li>
                    <li className="experience-description">
                        Responsive Design Optimization: Conducted a comprehensive audit and overhaul of 
                        mobile responsiveness, delivering a fully optimized user experience across all device types 
                        and browsers. 
                    </li>
                    <li className="experience-description">
                        UX-Driven Feature Delivery & Bug Resolution: Proactively identified and resolved critical 
                        bugs and UX friction points, increasing platform stability and user satisfaction while 
                        aligning with product and design standards. 
                    </li>
                    <li className="experience-description">
                        Product Launch Leadership: Led frontend implementation for a major product launch, 
                        developing reusable components and hitting critical deadlines in coordination with backend 
                        and product teams. 
                    </li>
                  </ul>
                  <div className="experience-tags">
                    <span className="tag">Vue.js</span>
                    <span className="tag">Laravel</span>
                    <span className="tag">PHP</span>
                    <span className="tag">HTML</span>
                    <span className="tag">CSS</span>
                    <span className="tag">JavaScript</span>
                  </div>
                </div>
              </a>
              <a className="experience-card" href="https://ritterim.com/" target="_blank" rel="noreferrer">
                <div className="experience-year">2020 - 2025</div>
                <div className="experience-content">
                  <div className="experience-title">
                    Ritter Insurance Marketing <ArrowOutwardIcon fontSize="small"/>
                  </div>
                  <span className="experience-subtitle">UX/UI Developer</span>
                  <ul>
                    <li className="experience-description">
                        Contract System Development: Designed and implemented a Vue.js 2-based contract 
                        system for insurance agents, enabling streamlined selection, Q&A, e-signatures, and 
                        database integration.  
                    </li>
                    <li className="experience-description">
                        Call Recording System: Developed and optimized a system for recording 
                        inbound/outbound calls, improving compliance and agent-client interactions. 
                    </li>
                    <li className="experience-description">
                        CMS Platform Enhancement: Engineered Vue.js 2 applications for "The Platform," 
                        improving usability and functionality for internal teams and clients. 
                    </li>
                    <li className="experience-description">
                        Migration Leadership: Spearheaded the transition from Vue.js 2 to Vue.js 3 for "The 
                        Platform," modernizing the codebase and increasing scalability. 
                    </li>
                      <li className="experience-description">
                        Static Site Optimization: Transitioned static site generators from Hugo to Astro, achieving 
                        performance improvements and flexibility. 
                    </li>
                  </ul>
                  <div className="experience-tags">
                    <span className="tag">Vue.js</span>
                    <span className="tag">Astro</span>
                    <span className="tag">Hugo</span>
                    <span className="tag">HTML</span>
                    <span className="tag">CSS</span>
                    <span className="tag">JavaScript</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Experience