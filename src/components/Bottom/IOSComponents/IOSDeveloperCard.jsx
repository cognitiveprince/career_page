import React, { Component } from "react";
import "./IOSDeveloperCard.scss";

// import Button from "react-bootstrap/Button";

class IOSDeveloperCard extends Component {
  render() {
    return (
      <div className="IOSCard-container">
        <div className="IOScard-title">IOS Developer</div>
        <div className="IOSQuestion-title">
          Able to make and refine for the smoothest experience
        </div>
        <div className="Qualifications">QUALIFICATIONS</div>
        {/* Points of software engineering qualifications */}
        <div className="IOSPoints">
          <ul>
            <li>
              <span>Fluent in Swift and Xcode</span>
            </li>
            <li>
              <span>Good design sense</span>
            </li>
            <li>
              <span>Ability to deliver on a quality experience</span>
            </li>
          </ul>
        </div>
        {/* Button for Apply now */}
        <button className="IOSApply_button">Apply now</button>
      </div>
    );
  }
}

export default IOSDeveloperCard;
