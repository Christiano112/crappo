import React from 'react'
import "./styles/trade.scss";

function Trade() {
    const changeClassOne = () => {
        document.getElementById("clickOne").classList.add("trade-col");
        document.getElementById("clickTwo").classList.remove("trade-col");
        document.getElementById("clickThree").classList.remove("trade-col");
    }

    const changeClassTwo = () => {
        document.getElementById("clickTwo").classList.add("trade-col");
        document.getElementById("clickOne").classList.remove("trade-col");
        document.getElementById("clickThree").classList.remove("trade-col");
    }

    const changeClassThree = () => {
        document.getElementById("clickThree").classList.add("trade-col");
        document.getElementById("clickOne").classList.remove("trade-col");
        document.getElementById("clickTwo").classList.remove("trade-col");
    }

    return (
        <div>
            <section className="container-fluid trade w-100">
                <div className="row">
                    <div className="col trade-head">
                        <h4>Trade Securely And Market The High Growth Cryptocurrencies.</h4>
                    </div>
                    <div className="row trade-content text-center">
                        <div className="col" id='clickOne' onClick={changeClassOne}>
                            <img src={require("./images/bitcon.png")} alt="bitcoin" />
                            <h2>Bitcoin <span>BTC</span></h2>
                            <p>Digital currency in which a record of transactions is maintained.</p>
                            <div className="trade-arrow">
                                <img src={require("./images/Arrow Right.jpg")} alt="arrow" />
                            </div>
                            <div className="show-click">
                                <span>Start mining</span>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                            </div>
                        </div>
                        <div className="col" id='clickTwo' onClick={changeClassTwo}>
                            <img src={require("./images/ethereum.png")} alt="ethereum" />
                            <h2>Ethereum <span>ETH</span></h2>
                            <p>Blockchain technology to create and run decentralized digital applications.</p>
                            <div className="trade-arrow">
                                <img src={require("./images/Arrow Right.jpg")} alt="arrow" />
                            </div>
                            <div className="show-click">
                                <span>Start mining</span>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                            </div>
                        </div>
                        <div className="col" id='clickThree' onClick={changeClassThree}>
                            <img src={require("./images/litecoin.png")} alt="litecoin" />
                            <h2>Litecoin <span>LTC</span></h2>
                            <p>Cryptocurrency that enables instant payments to anyone in the world.</p>
                            <div className="trade-arrow">
                                <img src={require("./images/Arrow Right.jpg")} alt="arrow" />
                            </div>
                            <div className="show-click">
                                <span>Start mining</span>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Trade;
