import React from 'react';

function Universe() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row text-center">
                <h1 className='mb-4'>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
        
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/smallcaselogo.png" alt="" />
                    <p  className='pt-2'>Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/streaklogo.png" alt="" style={{width:"40%"}}/>
                    <p  className='pt-2'>Algo & strategy platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/sensibullLogo.svg" alt="" style={{width:"60%"}}/>
                    <p  className='pt-2'>Options trading platform</p>
                </div>
                <div className="col-4 p-3 mt-2">
                    <img src="media/images/zerodhaFundhouse.png" alt="" style={{width:"50%"}}/>
                    <p  className='pt-2'>Asset management</p>
                </div>
                <div className="col-4 p-3 mt-2">
                    <img src="media/images/tijori.svg" alt="" style={{width:"40%"}}/>
                    <p  className='pt-2'>Fundamental research platform</p>
                </div>
                <div className="col-4 p-3 mt-2 mb-5">
                    <img src="media/images/dittoLogo.png" alt="" style={{width:"40%"}}/>
                    <p className='pt-2'>Insurance</p>
                </div>
               
                <button className=" p-2 my-0 mx-auto btn btn-primary fs-9" style={{width:"12%"}}>
            Signup Now
          </button>
                
            </div>

        </div>
     );
}

export default Universe;