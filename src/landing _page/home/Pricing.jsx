import React from 'react';

function  Pricing() {
    return ( 
        <div className="container ">
            <div className="row">
                <div className="col-6 text-left px-5">
                    <h1 className='mb-3 mx-5 fs-3' >Unbeatable pricing</h1>
                    <p className='mx-5'> We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" className='mx-5'>see pricing <i class="fa fa-long-arrow-right"></i></a>
                </div>
                <div className="col-6 mb-5">
                    <div className="row text-center">
                        <div className="col p-3 border">
                            <h1 className='mt-2'>₹0</h1><br />
                            <p className='px-2'>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col p-3 border">
                            <h1 className='mt-2'>₹20</h1><br />
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
     );
}

export default  Pricing;