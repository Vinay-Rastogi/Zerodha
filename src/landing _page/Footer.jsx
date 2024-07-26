import React from "react";
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div className="container mt-2 p-5 border-top " style={{backgroundColor:"#fbfbfb"}}>
      <div className="row mb-5 ms-2">
        <div className="col mt-3">
          <img src="media/images/logo.svg" className="mb-3" style={{ width: "50%" }} alt="" />
          <p className="text-secondary">&copy; 2010 - 2024, Zerodha Broking Ltd.

All rights reserved.</p>
        </div>
        <div className="col lh-lg">
          <p className="fs-5 fw-medium ">Company</p>
          <Link className="text-muted" to="">About</Link><br />
          <Link className="text-muted" to="">Products</Link>
          <br />
          <Link className="text-muted " to="">Pricing</Link>
          <br />
          <Link className="text-muted" to="">Referral programme</Link>
          <br />
          <Link className="text-muted" to="">Careers</Link>
          <br />
          <Link className="text-muted" to="">Zerodha.tech</Link>
          <br />
          <Link className="text-muted" to="">Press & media</Link>
          <br />
          <Link className="text-muted" to="">Zerodha Cares (CSR)</Link>
          <br />
        </div>
        <div className="col lh-lg">
          <p className="fs-5 fw-medium ">Support</p>
          <Link className="text-muted" to="">Contact us</Link><br />
          <Link className="text-muted" to="">Support portal</Link>
          <br />
          <Link className="text-muted" to="">Z-Connect blog</Link>
          <br />
          <Link className="text-muted" to="">List of charges</Link>
          <br />
          <Link className="text-muted" to="">Downloads & resources</Link>
          <br />
          <Link className="text-muted" to="">Videos</Link>
          <br />
          <Link className="text-muted" to="">Market overview</Link>
          <br />
          <Link className="text-muted" to="">How to file a complaint?</Link>
          <br />
          <Link className="text-muted" to="">Status of your complaints</Link>
          <br />
        </div>
        <div className="col lh-lg">
          <p className="fs-5 fw-medium ">Account</p>
          <Link className="text-muted" to="">Open an account</Link><br />
          <Link className="text-muted" to="">Fund Transfer</Link>
          
        </div>
      </div>
      <div className="ms-4"  style={{ fontSize:"12px", color:"#9b9b9b"}}>
        <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <Link  to="">complaints@zerodha.com</Link>, for DP related to <Link to="">dp@zerodha</Link>.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
        <p>
        Procedure to file a complaint on <Link  to="">SEBI SCORES</Link>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
        </p>
        <p> <Link  to="">Smart Online Dispute Resolution</Link> | <Link  to="">Grievances Redressal Mechanism</Link></p>
        <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
    <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
    <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <Link to="">create a ticket here</Link>.</p>
    
      </div>
    </div>
  );
}

export default Footer;
