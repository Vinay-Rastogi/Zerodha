import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className=" row">
        <div className="col-6">
          <img src="media/images/largestBroker.svg" alt="Broker " />
        </div>
        <div className="col-6">
          <h1>Largest stock broker in Inida</h1>
          <p>2+ million Zerodha clients contributes to over 15% of all reatail order volumes in India by trading and investing in :</p>
          <div className="row mt-5 pb-4">
            <div className="col-6">
              <ul>
                <li>
                  <p> Future and Options</p>
                </li>
                <li>
                  <p> Commodity derivatives</p>
                </li>
                <li>
                  <p> Current derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p> Stocks & IPOs</p>
                </li>
                <li>
                  <p> Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" alt="P" style={{width:"90%", paddingLeft:"2%"}}/>
        </div>
      </div>
    </div>
  );
}

export default Awards;
