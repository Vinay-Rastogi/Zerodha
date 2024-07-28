import React from 'react';

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
  }) {
    return ( 
        <div className="container mt-5 pt-5">
      <div className="row mt-5 ps-5 ms-5 pt-5 lh-lg" >
        <div className="col-6 pt-5" style={{width:"40%", marginTop:"10%"}}>
          <h1 className="fs-2">{productName}</h1>
          <p className="text-muted lh-base fs-6 mt-3 mb-3" style={{width:"70%"}}>{productDescription}</p>
          <div >
            <a href="" >
              {learnMore}<i style={{paddingLeft:"2%"}} class="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
          <img src={imageURL} alt=""  style={{width:"50%"}}/>
      </div>
    </div>
     );
}

export default RightSection;