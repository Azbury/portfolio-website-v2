import React, { Component } from 'react'

class NavigationMenu extends Component {
    render() {
        return (
            <div className="navigation-menu">
                <p className="navigation-menu-a neon-text">A</p>
                <div className="navigation-menu-items">
                    <div className="navigation-menu-item">
                        <a href="#about">About</a>
                    </div>
                    <div className="navigation-menu-item">
                        <a href="#projects">Projects</a>
                    </div>
                    <div className="navigation-menu-item">
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavigationMenu