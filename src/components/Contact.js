import React, { Component } from 'react';
import { ReactComponent as Mountains } from '../images/mountains.svg';
import { ReactComponent as CartoonAustinSecondary } from '../images/cartoon_austin_secondary-01.svg';

class Contact extends Component {
  render() {
    return (
      <div ref={this.props.scrollReference} id="contact">
        <Mountains/>
        <div id="contact-inner">
          <div>
            <h3 className="section-header">CONTACT</h3>
            <div id="contact-links">
              <a className="contact-link" href="mailto:acasbury25@aol.com">acasbury25@aol.com</a>
              <a className="contact-link" href="tel:570-624-1138">570-624-1138</a>
            </div>
          </div>
          <CartoonAustinSecondary id="contact-svg"/>
        </div>
      </div>
    )
  }
}

export default Contact