import React from 'react';
import './styles/main.scss';
import './styles/main-section.scss';

const Main = () => {
    return (
        <div>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text">
                            <div>
                                <p><span>70% SAVE </span>
                                    for the best black friday deals</p>
                            </div>
                            <h1>
                                Fastest & Secure Platform To Invest In Cypto
                            </h1>
                            <p>buy and sell cyptocurrencies by trusted 10M wallets, in over 100m transactions</p>
                            <div>TRY FOR FREE
                                <span><img src={require("./images/Arrow Right.jpg")} alt="arrow" /></span>
                            </div>
                        </div>
                        <div className="col-lg-6 image">
                            <img src={require("./images/hero-img.png")} alt="hero" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Main;
