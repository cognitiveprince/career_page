import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";


function NavBar () {

    var [toggle, settoggle] = React.useState(0.5);

    function makeBlur() {
      if (toggle == 0.5) {
        settoggle(1);
      } else {
        settoggle(0.5);
      }
      document.body.style.opacity = toggle;
    }
    return (
      <div className="m-4">
        {/* navbar starts */}
        <nav className="navbar fixed-bottom navbar-expand-lg navbar-dark ">
          <div className="container-fluid">
            {/* for the menu button */}
            <button
              onClick={makeBlur}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="False"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* navbar components */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav">
                <a Link to="#" className=" nav-link active">
                  Home
                </a>
                <a Link to="#" className="nav-link active">
                  Features
                </a>
                <a Link to="#" className="nav-link active">
                  Download
                </a>
                <a Link to="#" className="nav-link active">
                  Pricing
                </a>
                <a Link to="#" className="nav-link active">
                  AI_Store
                  <span className="px-2" id="aistore_new">
                    new
                  </span>
                </a>
                {/* navbar image */}
                <a Link to="#" className="nav-link active ">
                  <div className="nav-image">
                    <img
                      src={process.env.PUBLIC_URL + "/assets/nav_img.png"}
                      class="img-fluid"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* navbar ends */}
      </div>
    );
  }

export default NavBar;
