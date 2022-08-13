import React, { Component } from "react";
import "./Curves.scss";
import { NaturalCurve } from "react-svg-curve";

// curve joining ML engineer and software engineer card
class MLelectronic_Curve extends Component {
  render() {
    return (
      // start of curve container
      <div className="curve-container">
        {/* start of ML-Electronic_Curve */}
        <div className="ML-Electronic_Curve">
          <svg width="" height="1200">
            <NaturalCurve
            showPoints={false}
              strokeWidth={3.5}
              stroke="#F27405"
              // design the curve line
              data={[
                [1, 1140],
                [100, 960],
                [30, 850],
                [117, 730],
              ]}
            />
          </svg>
        </div>
        {/* end of ML-Electronic_Curve */}
      </div>
      // end of curve container
    );
  }
}

export default MLelectronic_Curve;
