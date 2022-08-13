import React, { Component } from "react";
import "./upcoming_event.css";
// import Card from "react-bootstrap/Card";

class Card extends Component {
  render() {
    return (
      // card section starts
      <div className="Card">
        {/* start of card body */}
        <div className="Card-Body">
          {/* main title of card */}
          <div className="title">Upcoming event</div>
             {/* sub-title of card */}
          <div className="Card-substitle">version releases</div>
          {/* inner card starts */}
          <div className="inner-Card">
            <div className="Day">
              <div className="num">10</div>
              <div className="num-substitle">Day</div>
            </div>
            <div className="Month">
              <div className="num">09</div>
              <div className="num-substitle">Month</div>
            </div>
            <div className="Year">
              <div className="num">22</div>
              <div className="num-substitle">Year</div>
            </div>
          </div>
           {/* inner card ends */}
        </div>
        {/* start of card body */}
      </div>
      // card section ends
    );
  }
}

export default Card;
