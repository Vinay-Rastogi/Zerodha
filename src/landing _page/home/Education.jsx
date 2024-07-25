import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-6 mt-0">
          <img
            className="ms-5"
            src="media/images/education.svg"
            alt=""
            style={{ width: "70%" }}
          />
        </div>
        <div className="col-6 px-5 mt-5 mb-5">
          <h1 className="mb-4 fs-3">Free and open market education</h1>

          <p className="mt-3 mb-4 leading-7">
            {" "}
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="">
            Varsity <i class="fa fa-long-arrow-right"></i>
          </a>
          <p className="mt-5">
            {" "}
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="">
            TradingQ&A <i class="fa fa-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
