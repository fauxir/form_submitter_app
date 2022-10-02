import React from "react";

function banner() {
  return (
    <div className="mobile-hero">
      <div className="mobile-banner-container">
        <div className="mobile-banner">
          <img
            className="img-mobile-banner"
            src="./bg-main-mobile.png"
            alt=""
          ></img>
        </div>
        <div className="cards-wrapper">
          <div className="card-back">
            <span className="card-back-number">000</span>
            <img
              className="card-back-size"
              src="./bg-card-back.png"
              alt=""
            ></img>
          </div>
          <div className="card-front">
            <div className="card-front-wrapper">
              <img
                className="card-front-logo"
                src="./card-logo.svg"
                alt=""
              ></img>
              <span className="card-front-number">0000  0000  0000  0000</span>
              <div className="card-front-name">JANE APPLESEED</div>
              <span className="card-front-exp">00/00</span>
            </div>
            <img
              className="card-front-size"
              src="./bg-card-front.png"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default banner;
