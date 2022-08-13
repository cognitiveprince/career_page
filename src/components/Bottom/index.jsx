import React, { Component } from "react";
import "./index.css";
import SoftwareEngineerCard from "./SoftwareComponents/SoftEngineerCard";
import MLengineerCard from "./MLComponents/MLengineerCard";
import ElectronicengineerCard from "./ElectronicComponents/ElectronicengineerCard";
import IosdeveloperCard from "./IOSComponents/IOSDeveloperCard";
import SoftML_Curve from "../CurveComponents/Soft-MLCurve";
import MLelectronic_Curve from "../CurveComponents/ML-ElectronicCurve";
import ElectronicIos_Curve from "../CurveComponents/Electronic-Ios_Curve";

class BottomSection extends Component {
  render() {
    return (
      // start of main container
      <div className="BottomSection">
        <div className="card-title">
          {/* titles of card */}
          <span className="Your">Your</span>
          <span className="Journey">Journey</span>
        </div>
        {/* cards container start*/}
        <div className="Cards"> 
        {/* top 2 cards */}
          <div className="TopJourneyCards">
            <SoftwareEngineerCard />
            <SoftML_Curve />
            <MLengineerCard />
          </div>
          <MLelectronic_Curve />
          {/* bottom 2 cards */}
          <div className="BottomJourneycards">
            <ElectronicengineerCard />
            <ElectronicIos_Curve />
            <IosdeveloperCard />
          </div>
        </div>
        {/* cards container end*/}
      </div>
      // end of main container
    );
  }
}

export default BottomSection;
