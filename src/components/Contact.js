import React, { Component } from 'react';
import { ReactComponent as Mountains } from '../images/mountains.svg';
import { ReactComponent as CartoonAustinSecondary } from '../images/cartoon_austin_secondary.svg';

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <Mountains/>
        <div id="contact-inner">
          <CartoonAustinSecondary/>
        </div>
      </div>
    )
  }
}

export default Contact