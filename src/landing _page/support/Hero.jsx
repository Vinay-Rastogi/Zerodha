import React from "react";

function Hero() {
  return (
    <section className="container-fluid pb-5" id="supportHero">
      <div className="p-5" id="supportWrapper">
         <h4>Support Portal</h4>
         <a href="" className="supportLinks">Track Tickets</a>
      </div>
      <div className=" row ms-5" style={{padding:"0 9%"}}>
          <div className="col-6">
            <p className="fs-4">Search for an answer or browse help topics to create a ticket</p>
            <input type="text" placeholder="Eg. how do i activate F&O, Why is my order rejected ....." /> <br />
            <a href="" className="supportLinks fs-6 lh-lg">Track account opening</a>
            <a href="" className="supportLinks px-4"> Track segment activation</a>
            <a href="" className="supportLinks pe-4"> Intraday margins</a><br />
            <a href="" className="supportLinks">Kite user manual</a>
          </div>
          <div className="col-6 ps-5 mt-4">
          <p className="fs-4"> Featured</p>

          <ol>
            <li><a href="" className="supportLinks">Surveillance measure on scrips - July 2024</a></li>
            <li><a href="" className="supportLinks">Latest Intraday leverages and Square-off timings</a>
            </li>
          </ol>
          </div>
      </div>
    </section>
  );
}

export default Hero;
