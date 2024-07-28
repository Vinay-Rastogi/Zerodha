import React from "react";

function CreateTicket() {
  return (
    <div className="container" style={{marginLeft:"10%"}}>
      <div className="row p-5 mt-5 mb-5">
        <p className="fs-4">To create a ticket, select a relevant topic</p>
        <div className="col-4 mt-2 mb-2 ps-4">
          <p className="fs-4"><i class="fa fa-plus-circle" aria-hidden="true"></i> Account opening</p>

          <div className="ps-4 lh-lg">
          <a href="">Getting started</a><br />
          <a href="">Online</a><br />
          <a href="">Offline</a><br />
          <a href="">Charges</a><br />
          <a href="">Company, Partnership and HUF</a><br />
          <a href="">Non Resident Indian (NRI)</a><br />
          </div>
        </div>
        <div className="col-4 mt-2 mb-2 ps-4">
          <p className="fs-4"><i class="fa fa-user" aria-hidden="true"></i>  Your Zerodha Account</p>

          <div className="ps-4 lh-lg">
          <a href="">Login credentials</a><br />
          <a href="">Your Profile</a><br />
          <a href="">Account modification and segment addition</a><br />
          <a href="">CMR & DP ID</a><br />
          <a href="">Nomination</a><br />
          <a href="">Transfer and conversion of shares</a><br />
          </div>
        </div>
        <div className="col-4 mt-2 mb-2 ps-4">
          <p className="fs-4"><i class="fa fa-line-chart" aria-hidden="true"></i>  Trading and Markets</p>

          <div className="ps-4 lh-lg">
          <a href="">Trading FAQs</a><br />
          <a href="">Kite</a><br />
          <a href="">Margins</a><br />
          <a href="">Product and order types</a><br />
          <a href="">Corporate actions</a><br />
          <a href="">Kite features</a><br />
          </div>
        </div>
        <div className="col-4 mt-4 mb-2 ps-4">
          <p className="fs-4"><i class="fa fa-minus-square" aria-hidden="true"></i> Funds</p>

          <div className="ps-4 lh-lg">
          <a href="">Fund withdrawal</a><br />
          <a href="">Adding funds</a><br />
          <a href="">Adding bank accounts</a><br />
          <a href="">eMandates</a><br />
          </div>
        </div>
        <div className="col-4 mt-4 mb-2 ps-4">
          <p className="fs-4"><i class="fa fa-bookmark-o" aria-hidden="true"></i>Console</p>

          <div className="ps-4 lh-lg">
          <a href="">IPO</a><br />
          <a href="">Portfolio</a><br />
          <a href="">Funds statement</a><br />
          <a href="">Profile</a><br />
          <a href="">Reports</a><br />
          <a href="">Referral program</a><br />
          </div>
        </div>
        <div className="col-4 mt-4 mb-2 ps-4">
          <p className="fs-4"><i class="fa fa-connectdevelop" aria-hidden="true"></i> Coin</p>

          <div className="ps-4 lh-lg">
          <a href="">Understanding mutual funds and Coin</a><br />
          <a href="">Coin app</a><br />
          <a href="">Coin web</a><br />
          <a href="">Transactions and reports</a><br />
          <a href="">National Pension Scheme (NPS)</a><br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
