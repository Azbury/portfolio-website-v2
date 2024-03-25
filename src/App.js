import React, { Component } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import Introduction from './components/Introduction';

class App extends Component {
  render () {
      return (
        <div className="App">
          <button className='menu-button'>
            <Hamburger/>
          </button>
          <Introduction/>
        </div>
      )
  }
}

export default App