import React from "react";

function Hero() {
  return (
    <div className="container mt-3">
      <div className="row border-bottom fs-6 p-5 text-center" style={{marginTop:"3%"}}>
        <h1
          style={{ fontSize: "2.8rem", marginBottom: "1%", color: "#424242" }}
        >
          {" "}
          Pricing
        </h1>
        <p className="fs-5 text-muted" style={{marginBottom:"5%"}}>
          Free equity investments and flat ₹20 intraday and F&O trades
        </p>
      </div>
      <div className="row text-center border-bottom " style={{marginTop:"11%", paddingLeft:"7%", paddingBottom:"7%"}}>
        <div className="col-4" >
          <img src="media/images/pricingEquity.svg" alt="" style={{width:"65%"}}/>
          <h2 className="mb-4">Free equity delivery</h2>
          <p className="fs-6 text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/intradayTrades.svg" alt="" style={{width:"60%", marginBottom:"3%"}} />
          <h2 className="mb-4">Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 ">
        <img src="media/images/pricingEquity.svg" alt="" style={{width:"65%"}}/>
          <h2 className="mb-4">Free direct MF
          </h2>
          <p className="fs-6 text-muted">
          All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
