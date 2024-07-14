import React, { Component } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import Introduction from './components/Introduction.js';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

class App extends Component {
  render () {
      return (
        <div className="App">
          <button className='menu-button'>
            <Hamburger/>
          </button>
          <Introduction/>
          <About/>
          <Experience/>
          <Projects/>
          <Contact/>
        </div>
      )
  }
}

export default App