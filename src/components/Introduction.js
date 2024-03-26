import React, { Component } from 'react'
import ProfilePicture from "../images/portfolio_profile_picture.png";

class Introduction extends Component {
  render() {
    return (
      <header id="header">
        <img src={ProfilePicture} id="profile-picture"/>
        <h1 id="full-name">AUSTIN ASBURY</h1>
        <h2 id="job-title">Frontend Developer.</h2>
      </header>
    )
  }
}

export default Introduction