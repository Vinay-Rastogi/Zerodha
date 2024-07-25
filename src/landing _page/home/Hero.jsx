import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row">
        <img src="media/images/homeHero.png" style={{width:"70%", marginLeft:"15%"}} alt="Hero " className="mb-5" />
        <div className="mt-3 text-center">
          <h1 > Invest in Everything </h1>
          <p>Online platform to invests in stocks,mutual funds , and more</p>
          <button className="w-1/5 p-2 my-0 mx-auto btn btn-primary fs-9">
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
