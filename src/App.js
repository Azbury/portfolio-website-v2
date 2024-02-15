import React, { Component } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Introduction from './components/Introduction';

class App extends Component {
  render () {
      return (
        <div className="App">
          <MenuIcon className="menu-icon" sx={{ fontSize: 50 }}/>
          <Introduction/>
        </div>
      )
  }
}

export default App