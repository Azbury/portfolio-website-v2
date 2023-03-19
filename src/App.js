import React, { Component } from 'react'
import Menu from './components/Menu';

class App extends Component {
  render () {
      return (
        <div className="App">
          <Menu/>
          <div className="box-container">
            <div className="frontend-developer-container">
              <h1 className="full-name">Austin Asbury</h1>
              <h2 className="frontend-developer-title typewriter">Frontend Developer</h2>
            </div>
            <div className="frontend-developer-container">
              <h1 className="full-name">Austin Asbury</h1>
              <h2 className="frontend-developer-title typewriter">Frontend Developer</h2>
            </div>
          </div>
        </div>
      )
  }
}

export default App