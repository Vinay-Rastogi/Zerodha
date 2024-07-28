import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlelPlay,
  appStore,
}) {
  return (
    <div className="container mt-5 pt-5 border-top ">
      <div className="row mt-5 ps-5 ms-5 pt-5" >
        <div className="col-6 ps-4 me-5">
          <img src={imageURL} alt="" />
        </div>
        <div className="col-6 mt-5 mb-5 ms-5 ps-5" style={{width:"40%"}}>
          <h1 className="">{productName}</h1>
          <p className="text-muted lh-base fs-6 mt-3 mb-3" style={{width:"75%"}}>{productDescription}</p>
          <div className="mb-4">
            <a href="">
              {tryDemo} <i class="fa fa-long-arrow-right"></i>
            </a>
            <a href="" style={{marginLeft:"15%"}}>
              {learnMore} <i class="fa fa-long-arrow-right"></i>
            </a>
          </div>
          <div>
            <a href={googlelPlay}>
              <img src="media/images/googlePlayBadge.svg" alt=""/>
            </a>
            <a href={appStore} style={{marginLeft:"5%"}}>
              <img src="media/images/appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
