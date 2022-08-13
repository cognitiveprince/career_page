import React, { Component } from "react";
import "./Curves.scss";
import { NaturalCurve } from "react-svg-curve";

// curve joining electronic engineer and IOS Developer card
class ElectronicIos_Curve extends Component {
  render() {
    return (
      // start of curve container
      <div className="curve-container">
        {/* start of ElectronicIos_Curve */}
        <div className="ElectronicIos_Curve">
          <svg width="110" height="360">
            <NaturalCurve
              showPoints={false}
              strokeWidth={3.5}
              stroke="#665385"
               // design the curve line
              data={[
                [0, 0],
                [56, 50],
                [40, 100],
                [70, 100],
                [70, 60],
                [120, 60],
              ]}
            />
          </svg>
        </div>
        {/* end of ElectronicIos_Curve */}
      </div>
      // end of curve container
    );
  }
}

export default ElectronicIos_Curve;
