import React, { Component } from "react";
import "./ElectronicengineerCard.scss";

// import Button from "react-bootstrap/Button";

class ElectronicengineerCard extends Component {
  render() {
    return (
      <div className="ElectronicCard-container">
        <div className="Electroniccard-title">Electronic Engineer</div>
        <div className="ElectronicQuestion-title">
          Help us to design and build an entirely new class <br />
          <span>of consumer electricity</span>
        </div>
        <div className="Qualifications">QUALIFICATIONS</div>
        {/* Points of software engineering qualifications */}
        <div className="ElectronicPoints">
          <ul>
            <li>
              <span>
                Fluent in Python, Linux, Git and <br />
              </span>
              <span style={{ padding: "0.6rem" }}>Familarity with C/C++</span>
            </li>
            <li>
              <span>
                Knows things about building hardware, RF,
                <br />
              </span>
              <span style={{ padding: "0.6rem" }}>and PCB design</span>
            </li>
            <li>
              <span>Good design sense</span>
            </li>
            <li>
              <span>Game development experience a plus</span>
            </li>
            <li>
              <span>Ability to deviver on a quality experience</span>
            </li>
          </ul>
        </div>
        {/* Button for Apply now */}
        <button className="ElectronicApply_button">Apply now</button>
      </div>
    );
  }
}

export default ElectronicengineerCard;
