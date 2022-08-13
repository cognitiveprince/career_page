import React, { Component } from "react";
import "./index.css";
import Images from "./Images";
// import Switch from "../Switch/Switch";

class TopSection extends Component {
  render() {
    return (
      // start of top container
      <div className="Top-container">
        {/* <Switch /> */}
      {/* title of page start*/}
        <div className="titles">
          <div className="Big-S">S</div>
          <div className="right-title">
            truggle hard. <br />
            tay paradox
          </div>
        </div>
         {/* title of page end*/}
        {/* button of page start*/}
        <button className="px-4 py-2" id="btn">
          <span className="printf">printf</span>
          <span>
            ('create my
            <span className="text-primary">world</span>
            ' )
          </span>
        </button>
         {/* button of page end*/}
         
         {/* images of the page */}
        <Images />
      </div>
       // start of top container
    );
  }
}

export default TopSection;
