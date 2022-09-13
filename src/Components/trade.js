import React from 'react'
import "./styles/trade.scss";

function Trade() {
    return (
        <div>
            <section className="container-fluid trade w-100">
                <div className="row">
                    <div className="col trade-head">
                        <h4>Trade Securely And Market The High Growth Cryptocurrencies.</h4>
                    </div>
                    <div className="row trade-content text-center">
                        <div className="col trade-col">
                            <img src={require("./images/bitcon.png")} alt="bitcoin" />
                            <h2>Bitcoin <span>BTC</span></h2>
                            <p>Digital currency in which a record of transactions is maintained.</p>
                            <div>
                                <img src={require("./images/Arrow Right.jpg")} alt="arrow" />
                            </div>
                        </div>
                        <div className="col trade-col">
                            <img src={require("./images/ethereum.png")} alt="ethereum" />
                            <h2>Ethereum <span>ETH</span></h2>
                            <p>Blockchain technology to create and run decentralized digital applications.</p>
                            <div>
                                <img src={require("./images/Arrow Right.jpg")} alt="arrow" />
                            </div>
                        </div>
                        <div className="col trade-col">
                            <img src={require("./images/litecoin.png")} alt="litecoin" />
                            <h2>Litecoin <span>LTC</span></h2>
                            <p>Cryptocurrency that enables instant payments to anyone in the world.</p>
                            <div>
                                <img src={require("./images/Arrow Right.jpg")} alt="arrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Trade;
