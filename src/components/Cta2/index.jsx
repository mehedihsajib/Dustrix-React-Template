import React from 'react';

function Cta2() {
    return (
        <div className="cta-funfact-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 text-white">
                        <div className="fun-fact d-flex align-items-center justify-content-center">
                            <img src="assets/img/home2/cup.png" alt="" />
                            <span>50</span>
                            <p>
                                Years Of <br /> Experience
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-8 p-lg-0">
                        <div className="cta-wrap d-flex justify-content-center justify-content-md-around align-items-center">
                            <h2 className="text-white">Get Your Project Done</h2>
                            <a href="contact.html" className="">
                                Get A Quote <i className="fal fa-long-arrow-right" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cta2;
