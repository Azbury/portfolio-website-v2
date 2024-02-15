import React, { Component } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

class Menu extends Component {
  render() {
    return (
      <div>
        <MenuIcon className="menu-icon" sx={{ fontSize: 50 }}/>
        <aside className="menu">
          <div className="sidebar">
            <span>kajhdakjh</span>
            <span>hajjaja</span>
          </div>
        </aside>
      </div>
    )
  }
}

export default Menu