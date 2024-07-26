function Team() {
  return (
    <div className="container mb-5">
      <div className="row p-3">
        <h1 className="text-center mt-3 ps-5 ms-5">People</h1>
      </div>
      <div className="row text-muted lh-lg">
        <div className="col-6 text-center">
          <img
            className="rounded-circle ms-5 "
            src="media/images/nithinKamath.jpg"
            style={{ width: "50%" }}
            alt=""
          />

          <h4 className="mt-4">Nithin Kamath</h4>
          <h6 className="">Founder, CEO </h6>
        </div>
        <div className="col-6 pt-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>Connect on <a href="">Homepage </a>/ <a href=""> TradingQnA </a> / <a href="">Twitter</a>  </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
