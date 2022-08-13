import React, { Component } from "react";
import "./MLengineerCard.scss";
// import Button from "react-bootstrap/Button";

class MLengineerCard extends Component {
  render() {
    return (
      <div className="MLCard-container">
        <div className="MLcard-title">ML engineer / Data Scientist</div>
        <div
          className="MLQuestion-title"
          style={{ backgroundColor: "#F27405", border: "  5px solid #F27405" }}
        >
          Able to think in context of information theory/Math
        </div>
        <div className="Qualifications">QUALIFICATIONS</div>
        {/* Points of software engineering qualifications */}
        <div className="MLPoints">
          <ul>
            <li>
              <span>Fluent in Python / C /C++</span>
            </li>
            <li>
              <span>Experience with computer vision</span>
            </li>
            <li>
              <span>Experience with training models</span>
            </li>
            <li>
              <span>
                Knows things like SLAM, rotation matrices,
                <br />
              </span>
              <span style={{ padding: "0.6rem" }}>
                PyTorch, softmax, and ground truthing
              </span>
            </li>
          </ul>
        </div>
        {/* Button for Apply now */}
        <button className="MLApply_button" style={{ backgroundColor: "#F27405" }}>
          Apply now
        </button>
      </div>
    );
  }
}

export default MLengineerCard;
