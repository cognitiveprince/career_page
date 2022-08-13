import React, { Component } from "react";
import "./Images.css";
import Card from "./upcoming_event";

class Images extends Component {
  render() {
    return (
      // whole image container start
      <div className="Img-container">
        {/* Hand image section start*/}
        <div className="TopImg-container">
          {/* <div className="title-2">Stay Paradox</div> */}
          <img
            src={process.env.PUBLIC_URL + "/assets/intro.png"}
            // class="img-fluid"
            alt="Responsive image"
            className="topimage"
          />
        </div>
        {/* Hand image section end*/}
        {/* card section */}
        <Card />
        {/* Leg image section start*/}
        <div className="bottomimg-container">
          <img
            src={process.env.PUBLIC_URL + "/assets/bottom.png"}
            // class="img-fluid"
            alt="Responsive image"
            className="bottomimage"
          />
        </div>
         {/* Leg image section ens*/}
      </div>
      // whole image container end
    );
  }
}

export default Images;
