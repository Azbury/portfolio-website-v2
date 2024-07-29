import React, { Component } from 'react';
import { ReactComponent as Mountains } from '../images/mountains.svg';

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <Mountains/>
        <div id="contact-inner">
          <h3 className="section-header">CONTACT</h3>
          <div id="contact-links">
            <a className="contact-link" href="mailto:acasbury25@aol.com">acasbury25@aol.com</a>
            <a className="contact-link" href="tel:570-624-1138">570-624-1138</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact