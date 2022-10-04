import React from "react";
import { useState } from "react";

function InputFields() {
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMm, setExpMm] = useState("");
  const [expY, setExpY] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardDetails, setCardDetails] = useState([]);
  const[focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  }

  const sendToDb = () => {
    setCardDetails([
      ...cardDetails,
      {
        name: cardHolderName,
        number: cardNumber,
        expM: expMm,
        expYr: expY,
        cvcN: cvc,
      },
    ]); //data stored and sent to DB
    setCardHolderName("");
    setCardNumber("");
    setExpMm("");
    setExpY("");
    setCvc("");
    alert(
      "Data sent to DB: name: " +
        cardHolderName.toString() +
        ", card number: " +
        cardNumber.toString() +
        ", exp. date(MM/YY): " +
        expMm.toString() +
        "/" +
        expY.toString() +
        ", cvc: " +
        cvc.toString()
    );
  };

  return (
    <div className="input-form">
      <div className="wrapper">
        <div className="input-fileds">
          <div className="name-container">
            <label>CARDHOLDER NAME</label>
            <input
              onChange={(e) => {
                setCardHolderName(e.target.value);
              }}
              className="name-input"
              placeholder="  e.g. Jane Appleseed"
              pattern="^[A-Za-z]{4,16}$"
              onBlur={handleFocus}
              focused= {focused.toString()}
              required
              min="6"
              maxLength="30"
            ></input>
            <span className="error-message">Name should be 4-16 characters</span>
          </div>
          <div className="number-container">
            <label>CARD NUMBER</label>
            <input
              onChange={(e) => {
                setCardNumber(e.target.value);
              }}
              className="number-input"
              placeholder="  e.g. 1234 5678 9123 0000"
              pattern="[0-9]{16}"
              onBlur={handleFocus}
              focused= {focused.toString()}
              required
              min="16"
              maxLength="16"
            ></input>
            <span className="error-message">Wrong format, numbers only</span>
          </div>
          <div className="card-expiry">
            <div className="text-card-expiry">
              <div className="exp-label">
                <label>EXP. DATE (MM/YY)</label>
              </div>
              <div className="exp-input">
                <input
                  onChange={(e) => {
                    setExpMm(e.target.value);
                  }}
                  className="exp-input-mm"
                  placeholder="  MM"
                  pattern="[0-9]{2}"
                  onBlur={handleFocus}
              focused= {focused.toString()}
                  required
                  min="2"
                  maxLength="2"
                ></input>
                <input
                  onChange={(e) => {
                    setExpY(e.target.value);
                  }}
                  className="exp-input-yy"
                  placeholder="  YY"
                  pattern="[0-9]{2}"
                  onBlur={handleFocus}
              focused= {focused.toString()}
                  required
                  min="2"
                  maxLength="2"
                ></input>
                <span className="error-message-exp">Can't be blank</span>
              </div>
              
            </div>
            <div className="cvc-container">
              <div className="cvc-label">
                <label>CVC</label>
              </div>
              <input
                onChange={(e) => {
                  setCvc(e.target.value);
                }}
                className="cvc-input"
                placeholder="  e.g. 123"
                pattern="[0-9]{3}"
                onBlur={handleFocus}
              focused= {focused.toString()}
                required
                min="3"
                maxLength="3"
              ></input>
              <span className="error-message-cvc">Can't be blank</span>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            sendToDb();
          }}
          className="confirm-btn"
        >
          <div>Confirm</div>
        </div>
      </div>
    </div>
  );
}

export default InputFields;
