import React, { Component } from "react";
import "./Curves.scss";
import { NaturalCurve } from "react-svg-curve";

// curve joining Software engineer and ML engineer card
class SoftML_Curve extends Component {
  render() {
    return (
      // start of curve container
      <div className="curve-container">
        {/* start of Soft-ML_Curve */}
        <div className="Soft-ML_Curve">
          <svg width="250" height="300">
            <NaturalCurve
              showPoints={false}
              strokeWidth={3.5}
              stroke="#18e36d"
               // design the curve line
              data={[
                [0, 170],
                [70, 200],
                [70, 280],
                [125, 280],
              ]}
            />
          </svg>
        </div>
        {/* end of Soft-ML_Curve */}
      </div>
      // end of curve container
    );
  }
}

export default SoftML_Curve;
