import "./App.css";
import React from "react";
import { useState } from "react";
import Banner from "./Components/Banner.jsx";
import InputFields from "./Components/InputField.jsx";
import ThankYou from "./Components/Thankyou";

function App() {
  const [show, setShow] = useState(true);

  const showTy= () => {
    setShow(false)
  }

  return (
    <div className="App">
      <Banner />
      {show ? <InputFields showTy= {showTy}/> : null}
      {!show ? <ThankYou /> : null}
    </div>
  );
}

export default App;
