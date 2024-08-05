import React, { Component } from 'react';
import Introduction from './components/Introduction.js';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Menu from './components/Menu.js';

class App extends Component {

  //creates the references for different components to allow scrolling when clicking on the buttons on the header
  constructor() {
    super()
    this.aboutMeRef = React.createRef()
    this.projectsRef = React.createRef()
    this.experienceRef = React.createRef()
    this.contactRef = React.createRef()
  }


  render () {
      return (
        <div className="App">
          <Menu 
            aboutMeScrollReference={this.aboutMeRef}
            projectsScrollReference={this.projectsRef}
            experienceScrollReference={this.experienceRef}
            contactScrollReference={this.contactRef}
          />
          <Introduction/>
          <About scrollReference={this.aboutMeRef}/>
          <Experience scrollReference={this.experienceRef}/>
          <Projects scrollReference={this.projectsRef}/>
          <Contact scrollReference={this.contactRef}/>
        </div>
      )
  }
}

export default App