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
          <div id="contact-card">
            <a href="mailto:acasbury25@aol.com">acasbury25@aol.com</a>
            <a href="tel:570-624-1138">570-624-1138</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact