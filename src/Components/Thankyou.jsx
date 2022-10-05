import React from "react";

function ThankYou() {
  return (
    <div className="thank-you-elem">
      <div className="thank-you-wrapper">
        <div className="icon-complete">
          <img src="./icon-complete.svg" alt=""></img>
        </div>
        <h1>Thank you!</h1>
        <span className="added-card-details">We've added your card details</span>
        <div className="confirm-btn">
          <div>Continue</div>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
