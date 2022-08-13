import React, { Component } from "react";
import "./SoftEngineerCard.scss";

class SoftwareEngineerCard extends Component {
  render() {
    return (
      <div className="SoftwareCard-container">
        <div className="Softwarecard-title">Software Engineer (Qt/UI)</div>
        <div className="SoftwareQuestion-title">
          Can you builf a dropbox-like app people will use?
        </div>
        <div className="Qualifications">QUALIFICATIONS</div>
        {/* Points of software engineering qualifications */}
        <div className="SoftwarePoints">
          <ul>
            <li>
              <span>QT5 or similar SDK experience</span>
            </li>
            <li>
              <span>C++ coding skills</span>
            </li>
            <li>
              <span>Good design sense</span>
            </li>
            <li>
              <span className="dot">Game development experience a plus</span>
            </li>
            <li>
              <span>Ability to deviver on a quality experience</span>
            </li>
          </ul>
        </div>
        {/* Button for Apply now */}
        <button className="SoftwareApply_button">Apply now</button>
      </div>
    );
  }
}

export default SoftwareEngineerCard;
