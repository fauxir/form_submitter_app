import React from "react";

function inputFields() {
  return (
    <div className="input-form">
      <div className="wrapper">
        <div className="input-fileds">
          <div className="name-container">
            <label>CARDHOLDER NAME</label>
            <input
              className="name-input"
              placeholder="  e.g. Jane Appleseed"
              required
              min="6"
              maxLength="30"
            ></input>
          </div>
          <div className="number-container">
            <label>CARD NUMBER</label>
            <input
              className="number-input"
              placeholder="  e.g. 1234 5678 9123 0000"
              required
              min="16"
              maxLength="16"
            ></input>
          </div>
          <div className="card-expiry">
            <div className="text-card-expiry">
              <div className="exp-label">
                <label>EXP. DATE (MM/YY)</label>
              </div>
              <div className="exp-input">
                <input
                  className="exp-input-mm"
                  placeholder="  MM"
                  required
                  min="2"
                  maxLength="2"
                ></input>
                <input
                  className="exp-input-yy"
                  placeholder="  YY"
                  required
                  min="2"
                  maxLength="2"
                ></input>
              </div>
            </div>
            <div className="cvc-container">
              <div className="cvc-label">
                <label>CVC</label>
              </div>
              <input
                className="cvc-input"
                placeholder="  e.g. 123"
                required
                min="3"
                maxLength="3"
              ></input>
            </div>
          </div>
        </div>
        <div className="confirm-btn">
          <div>Confirm</div>
        </div>
      </div>
    </div>
  );
}

export default inputFields;
